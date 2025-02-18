var u = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var f = Object.getOwnPropertyNames;
var l = Object.prototype.hasOwnProperty;
var p = (r, o) => {
  for (var t in o)
    u(r, t, { get: o[t], enumerable: !0 });
}, w = (r, o, t, a) => {
  if (o && typeof o == "object" || typeof o == "function")
    for (let n of f(o))
      !l.call(r, n) && n !== t && u(r, n, { get: () => o[n], enumerable: !(a = i(o, n)) || a.enumerable });
  return r;
};
var h = (r) => w(u({}, "__esModule", { value: !0 }), r);

// output/Main/index.js
var N = {};
p(N, {
  createCreep: () => c,
  main: () => E
});
module.exports = h(N);

// output/Main/foreign.js
var c = function() {
  Game.spawns.Spawn1.spawnCreep([WORK, CARRY, MOVE], "Harvester1");
};

// output/Effect.Console/foreign.js
var e = function(r) {
  return function() {
    console.log(r);
  };
};

// output/Main/index.js
var E = /* @__PURE__ */ e("\u{1F35D}");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createCreep,
  main
});
