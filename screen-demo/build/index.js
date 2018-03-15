let webpack = require('webpack')
let args = process.argv
let isdev = args.indexOf('dev') > -1
let config

config = require('./webpack.config.pro.js')

if (isdev) {
  config = require('./webpack.config.dev.js')
}

let compiler = webpack(config)
compiler.run(function (err, status) {
  if (err) {
    console.log(err)
  }
})
