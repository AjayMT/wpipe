
# wpipe
Pipe the contents of one file into a command and write the result to another file, and do this every time the input file changes. Kind of like an extremely simple CLI for [watchbuild](http://npmjs.org/watchbuild).

## Installation
```
$ npm install -g wpipe
```

## Usage
```
wpipe <in> <out> <cmd>
```

Where <in> is a glob pattern or file path of the file to watch, <out> is the output file, and <cmd> is the command that is used to transform file contents.

Basically, all that wpipe does is execute something like this:

```sh
$ echo <in> | <cmd> > <out> # except you replace <in>, <out> & <cmd>
                            # with actual values
```

Every time <in> changes.

## API
### wpipe(infile, outfile, cmd)
Start watching `infile` and transform its contents by piping them into `cmd` and write the result to `outfile`.

## License
MIT License. See `./LICENSE` for details.
