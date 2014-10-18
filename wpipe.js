#!/usr/bin/env node

/* global require, process, module */

var spawn = require('child_process').spawn;

var wb = require('watchbuild');
var argv = require('minimist')(process.argv.slice(2));

var usage = 'Usage: wpipe <in> <out> <cmd>\n\n'
          + 'Basically do `echo <in> | <cmd> > <out>` every\n'
          + 'time <in> changes.';

if (argv.help) {
  process.stdout.write(usage);
  process.exit(0);
}

var infile = argv._[0];
var outfile = argv._[1];
var cmd = argv._[2];

function wpipe (inf, outf, c) {
  wb(infile, outfile || '/dev/stdout', function (data) {
    var p = spawn(c);

    p.stdin.write(data);
    p.stdin.end();

    return p.stdout;
  });
}

module.exports = wpipe;

if (require.main === module)
  wpipe(infile, outfile, cmd);
