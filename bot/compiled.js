var u = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var f = Object.prototype.hasOwnProperty;
var l = (r, o) => {
  for (var t in o)
    u(r, t, { get: o[t], enumerable: !0 });
}, p = (r, o, t, a) => {
  if (o && typeof o == "object" || typeof o == "function")
    for (let n of s(o))
      !f.call(r, n) && n !== t && u(r, n, { get: () => o[n], enumerable: !(a = i(o, n)) || a.enumerable });
  return r;
};
var h = (r) => p(u({}, "__esModule", { value: !0 }), r);

// output/Main/index.js
var E = {};
l(E, {
  main: () => I
});
module.exports = h(E);

// output/Effect.Console/foreign.js
var e = function(r) {
  return function() {
    console.log(r);
  };
};

// output/Main/index.js
var I = /* @__PURE__ */ e("\u{1F35D}");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  main
});
