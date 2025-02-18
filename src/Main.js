"use strict";

export const createCreep = function() {
    Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'Harvester1');
};

// exports.createCreepImpl = function(structure){
//     return function(parts){
//         return function(left){
//             return function(right){
//                 return function(){
//                     var result = structure.createCreep(parts);
//                     if(typeof result === "string"){
//                         return right(result);
//                     } else {
//                         return left(result);
//                     }
//                 }
//             }
//         }
//     }
// }