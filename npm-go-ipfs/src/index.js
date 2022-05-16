'use strict'

const fs = require('fs')
const path = require('path')

module.exports.path = function () {
  const paths = [
    path.resolve(path.join(__dirname, '..', 'bin', 'ipfs')),
    path.resolve(path.join(__dirname, '..', 'bin', 'ipfs.exe'))
  ].map(p => p.replace('app.asar', 'app.asar.unpacked'))

  for (const bin of paths) {
    if (fs.existsSync(bin)) {
      return bin
    }
  }

  throw new Error('go-ipfs binary not found, it may not be installed or an error may have occurred during installation')
}
