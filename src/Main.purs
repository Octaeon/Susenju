module Main
  ( main
  ) where

import Prelude
import Effect (Effect)

import Data.Tuple (Tuple(..))
import Data.Tuple.Nested ((/\))

import Data.Foldable (foldl)

foreign import createCreep :: Effect Unit
foreign import moveTo :: String -> Position -> Effect Unit
foreign import harvest :: String -> Position -> Effect Unit

type Creep = String

type Position =
  { x :: Number
  , y :: Number
  }

data Command
  = Move Position
  | Harvest Position

mapCommands :: Effect Unit -> Tuple String Command -> Effect Unit
mapCommands _ (Tuple creep command) =
  case command of
    Move pos -> moveTo creep pos
    Harvest pos -> harvest creep pos

main :: Effect Unit
main =
  let
    creep = "Harvester1"
    commands = [ creep /\ Harvest { x: 10.0, y: 10.0 } ]
  in
    foldl mapCommands (pure unit) commands
-- get creep 'Harvester1'
-- call script to find sources (start by searching the room the creep is in)
-- 
