const R = require('ramda')

const isOdd = (num) => num % 2 !== 0

const isBiladaCino = R.pipe (
  R.uniq,
  R.length,
  isOdd)

const foo = R.ifElse (
  isBiladaCino,
  R.always ('IGNORE ELE'),
  R.always ('FALE COM ELA'))

module.exports = foo
