module Main
  ( main
  ) where

import Prelude

import Effect (Effect)

foreign import createCreep :: Effect Unit
foreign import moveTo :: Position -> Effect Unit

type Creep = String

type Position =
  { x :: Number
  , y :: Number
  }

data Command
  = Move Position
  | Harvest Position

main :: Effect Unit
main =
  do moveTo ({ x: 10.0, y: 10.0 })
-- get creep 'Harvester1'
-- call script to find sources (start by searching the room the creep is in)
-- 
