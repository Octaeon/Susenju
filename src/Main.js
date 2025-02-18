"use strict";

export const createCreep = function() {
    Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'Harvester1');
};

export const moveTo = function (name) {
    return function(position) {
        return function() {
            Game.creeps[name].moveTo(position.x, position.y);
        };
    };
}
export const harvest = function(name){
    return function(position) {
        return function() {
            Game.creeps[name].harvest(position.x, position.y);
        };
    };
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