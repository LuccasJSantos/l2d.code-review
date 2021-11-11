module EvenFibonacci where

import Prelude
import Data.Pair (Pair, (~), snd, uncurry)

sumEvenFib :: Int -> Int
sumEvenFib limit =
  let
    recursive :: Int -> Pair Int -> Int
    recursive total pair =
      let
        next :: Int
        next = (uncurry add) pair
      in
        if snd pair > limit then
          total
        else if next `mod` 2 == 0 then
          recursive (total + next) ((snd pair) ~ next)
        else
          recursive total ((snd pair) ~ next)
  in
    recursive 0 (0 ~ 1)
