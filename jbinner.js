'use strict'

//
const child_process = require('child_process')
const os = require('os')

// config
let _C = require('./jBinner.conf.js')._C

//
let _exec = child_process.exec


/**
 * checkParams()
 */
function checkParams() {
  if ( process.env.verbose !== undefined && process.env.verbose === true ) {
    _C['verbose'] = true
    pI ('Verbose set to true ..')
    }
  }


/**
 * pP()
 * @param {string} msg 
 */
function pP(msg) {
  console.log(msg)
  }


/**
 * pI()
 * @param {string} msg 
 */
function pI (msg) {
  console.info('/i/ ' + msg )
  }


/**
 * doExec()
 */
function doExec() {
  // shift to params
  process.argv.shift()
  process.argv.shift()

  // convert to string
  let _argv = process.argv.toString()

  // replace all , to spaces
  _argv = _argv.replace(/,/g, (i => m => !i++ ? m : '')(0))


  // final command to exec
  let _cmd = _C['bin'] + ' ' // bin
      + _C['params']+ ' '  // params
      + _argv //arguments

  if (_C['verbose']) pI ('_cmd: ' + _cmd)

  // exec command
  let _r  = _exec(_cmd)

  _r.stdout.on('data', (data) => {
    console.log(data.toString())
    })

  _r.stderr.on('data', (data) => {
    console.error(data.toString())
    })
  }




// if we run examples
if ( process.env.runType !== undefined && process.env.runType === 'example' ) {
  if (_C['verbose']) pI('Going to examples ..')

  switch (process.platform()) {
    case 'win32':
      if (_C['verbose']) pI('win32 examples ..')
      _C['bin'] = _C['examples']['win32']['bin']
      _C['params'] = _C['examples']['win32']['params']
      break;
  
    default:
      if (_C['verbose']) pI('nixes examples ..')
      _C['bin'] = _C['examples']['nixes']['bin']
      _C['params'] = _C['examples']['nixes']['params']
      break;
    }
  }

checkParams()
doExec()
