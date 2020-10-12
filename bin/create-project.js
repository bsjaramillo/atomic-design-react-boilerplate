#!/usr/bin/env node

// const chalk = require('chalk')

require = require('esm')(module /* ,options */)
require('../src/cli').cli(process.argv)
// try {
// } catch (err) {
// console.log('%s <=error', chalk.yellow(err))
// if (err.code === 'ARG_UNKNOWN_OPTION') {
// console.log('')
// } else {
// console.log('')
// }
// }
