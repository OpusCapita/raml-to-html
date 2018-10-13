# raml-to-html

Platfrom-dependent executables of RAML to HTML documentation generator.

## Usage

A file path is provided either as a command line argument or through STDIN.

### Linux

```shell
raml-to-html <file>
```

### Windows

```shell
raml-to-html.exe <file>
```

### Examples.

#### Output HTML code to console

```shell
./raml-to-html ../ramlDocumentation/test.raml
```

#### Use pipe and redirect

```shell
echo ../ramlDocumentation/test.raml | ./raml-to-html > ../htmlDocumentation/test.html
```

## Options

  * `-V`, `--version`  output the version number
  * `-h`, `--help`     output usage information
