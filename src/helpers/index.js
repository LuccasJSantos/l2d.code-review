const R = require ('ramda')

// add :: Number -> Number -> Number
const add = R.curry(
  (x, y) => x + y
)

// constant :: a -> (b -> a)
const constant =
  (x) => () => x

// ifElse :: ((a -> Boolean), (a -> b), (a -> b)) -> a -> b
const ifElse =
  (pred, fnT, fnF) => (args) => pred (args) ? fnT (args) : fnF (args)

// ifElseValue :: (a, (a -> Boolean), (a -> b), (a -> b)) -> b
const ifElseValue = (value, pred, fnT, fnF) =>
  pred (value) ? fnT (value) : fnF (value)

// isEven :: Number -> Boolean
const isEven =
  (num) => num % 2 === 0

// sum :: Array Number -> Number
const sum = (list) => list.reduce (add, 0)

// mapToFnWith :: ((a1, a2, ..., aN) -> b, ((a -> a1), (a -> a2), ..., (a -> aN))) -> a -> b
const mapToFnWith =
  (fn, ...fns) => (args) => R.pipe (
    R.map (R.applyTo (args)),
    R.apply (fn)
  ) (fns)

module.exports = {
  add,
  constant,
  isEven,
  ifElse,
  ifElseValue,
  mapToFnWith,
  sum
}
