var o = Object.defineProperty;
var c = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var s = Object.prototype.hasOwnProperty;
var v = (e, r) => {
  for (var t in r)
    o(e, t, { get: r[t], enumerable: !0 });
}, f = (e, r, t, a) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let n of i(r))
      !s.call(e, n) && n !== t && o(e, n, { get: () => r[n], enumerable: !(a = c(r, n)) || a.enumerable });
  return e;
};
var p = (e) => f(o({}, "__esModule", { value: !0 }), e);

// output/Main/index.js
var x = {};
v(x, {
  main: () => w
});
module.exports = p(x);

// output/Main/foreign.js
var u = function(e) {
  return function() {
    Game.creeps.Harvester1.moveTo(e.x, e.y);
  };
};

// output/Main/index.js
var w = /* @__PURE__ */ u({
  x: 10,
  y: 10
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  main
});
