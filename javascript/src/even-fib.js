const { add, constant, ifElse, ifElseValue, isEven, mapToFnWith, sum } = require('./helpers')

// sndIsGT -> Number -> Pair Number -> Boolean
const sndIsGT =
  (x) => ([, y]) => y > x

const sumOfFibUntil =
  (limit) => {
    const recursive =
      (total, pair) => ifElseValue (
        pair,
        sndIsGT (limit),
        constant (total),
        R.pipe (
          sum,
          ifElse (
            isEven,
            mapToFnWith (
              recursive,
              add (total),
              R.pair (R.last (pair))),
            mapToFnWith (
              recursive,
              constant (total),
              R.pair (R.last (pair))))))

    return recursive (0, [0, 1])
  }

module.exports = sumOfFibUntil
