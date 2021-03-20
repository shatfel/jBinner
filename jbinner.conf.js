'use strict'

//
const os = require('os')
//const process = require('process')

// config
const _C={
  // bin name and params
  "bin": "rclone",
  "params": "--no-check-certificate=true",

  // verbose
  "verbose": false,

  // install paths
  "install": {
    "path": os.homedir() + "/.jBinner",
    "files": [
      "jBinner.exe",
      "jBinner.conf.js"
      ]
    },

  // active os
  "os": os.platform(),

  // os specific
  "examples": {
      // win32
      "win32": {
        "bin": "notepad.exe",
        "params": "%userprofile%/.jBinner/jBinner.conf.js"
      },

      // all other nix os
      "nixes": {
        "bin": "cat",
        "params": "/etc/issue"
      }
    }
}

module.exports._C = _C