'use strict'

//
const _exec = require('child_process').exec

// config
const _C = require('./config.js')._C

process.argv.shift()
process.argv.shift()

let _argv = process.argv.toString()

// replace all , to spaces
_argv = _argv.replace(/,/g, (i => m => !i++ ? m : '')(0))


// exec command
let _r  = _exec(_C['rcloneBin'] + ' ' + _C['params']+ ' '+ _argv )

_r.stdout.on('data', (data) => {
  console.log(data.toString())
  })

_r.stderr.on('data', (data) => {
  console.error(data.toString())
  })
