'use strict';
const program = require('commander');
const { render, getConfigForTheme } = require('raml2html');
const { version } = require('../package.json');

const processFile = async filePath => process.stdout.write(
  await render(filePath.trim(), getConfigForTheme()),
  'utf8',
  function(error) {
    if (error) {
      console.error("error", error);
      process.exit(1);
    } else {
      process.exit(0);
    }
  }
);

program.
  version(version).
  name('raml-to-html').
  description('RAML to HTML documentation generator.').
  usage('<file>').
  on('--help', _ => {
    console.info();
    console.info('A file path is provided either as a command line argument or through STDIN.');
  }).
  arguments('<file>').
  action(processFile);

program.parse(process.argv);

if (process.argv.length === 2) {
  if (process.stdin.isTTY) {
    program.help(); // Output help information and exit immediately.
  }

  let stdinData = '';
  process.stdin.setEncoding('utf8');

  process.stdin.
    on('readable', _ => {
      let chunk;

      while ((chunk = process.stdin.read()) !== null) { // eslint-disable-line no-cond-assign
        stdinData += chunk;
      }
    }).
    on('end', _ => processFile(stdinData));
}
