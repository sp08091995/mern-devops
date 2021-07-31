const validator = require('validator');
const chalk = require('chalk');

const msg=require('./notes')();

console.log(chalk.bgGreen(msg))

console.log(chalk.blue("Hello"))

console.log(validator.isEmail(msg))
