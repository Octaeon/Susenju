var X = Object.defineProperty;
var Gr = Object.getOwnPropertyDescriptor;
var Lr = Object.getOwnPropertyNames;
var zr = Object.prototype.hasOwnProperty;
var Br = (r, n) => {
  for (var t in n)
    X(r, t, { get: n[t], enumerable: !0 });
}, Qr = (r, n, t, e) => {
  if (n && typeof n == "object" || typeof n == "function")
    for (let o of Lr(n))
      !zr.call(r, o) && o !== t && X(r, o, { get: () => n[o], enumerable: !(e = Gr(n, o)) || e.enumerable });
  return r;
};
var Jr = (r) => Qr(X({}, "__esModule", { value: !0 }), r);

// output/Main/index.js
var nt = {};
Br(nt, {
  main: () => rt
});
module.exports = Jr(nt);

// output/Main/foreign.js
var vr = function(r) {
  return function(n) {
    return function() {
      Game.creeps[r].moveTo(n.x, n.y);
    };
  };
}, mr = function(r) {
  return function(n) {
    return function() {
      Game.creeps[r].harvest(n.x, n.y);
    };
  };
};

// output/Control.Apply/index.js
var F = function(r) {
  return r.apply;
};

// output/Control.Applicative/index.js
var _ = function(r) {
  return r.pure;
};
var k = function(r) {
  var n = F(r.Apply0()), t = _(r);
  return function(e) {
    return function(o) {
      return n(t(e))(o);
    };
  };
};

// output/Data.Foldable/foreign.js
var _r = function(r) {
  return function(n) {
    return function(t) {
      for (var e = n, o = t.length, a = o - 1; a >= 0; a--)
        e = r(t[a])(e);
      return e;
    };
  };
}, yr = function(r) {
  return function(n) {
    return function(t) {
      for (var e = n, o = t.length, a = 0; a < o; a++)
        e = r(e)(t[a]);
      return e;
    };
  };
};

// output/Data.Semigroup/index.js
var l = function(r) {
  return r.append;
};

// output/Control.Bind/foreign.js
var an = typeof Array.prototype.flatMap == "function" ? function(r) {
  return function(n) {
    return r.flatMap(n);
  };
} : function(r) {
  return function(n) {
    for (var t = [], e = r.length, o = 0; o < e; o++)
      for (var a = n(r[o]), G = a.length, L = 0; L < G; L++)
        t.push(a[L]);
    return t;
  };
};

// output/Control.Bind/index.js
var K = function(r) {
  return r.bind;
};

// output/Data.Bounded/foreign.js
var pn = Number.POSITIVE_INFINITY, ln = Number.NEGATIVE_INFINITY;

// output/Data.Monoid/index.js
var N = function(r) {
  return r.mempty;
};

// output/Data.Tuple/index.js
var pr = /* @__PURE__ */ function() {
  function r(n, t) {
    this.value0 = n, this.value1 = t;
  }
  return r.create = function(n) {
    return function(t) {
      return new r(n, t);
    };
  }, r;
}();

// output/Data.Foldable/index.js
var Bn = function(r) {
  return r.foldr;
};
var Ar = function(r) {
  return r.foldl;
};
var Qn = function(r) {
  var n = Bn(r);
  return function(t) {
    var e = l(t.Semigroup0()), o = N(t);
    return function(a) {
      return n(function(G) {
        return function(L) {
          return e(a(G))(L);
        };
      })(o);
    };
  };
}, lr = {
  foldr: _r,
  foldl: yr,
  foldMap: function(r) {
    return Qn(lr)(r);
  }
};

// output/Effect/foreign.js
var Or = function(r) {
  return function() {
    return r;
  };
}, $r = function(r) {
  return function(n) {
    return function() {
      return n(r())();
    };
  };
};

// output/Control.Monad/index.js
var jr = function(r) {
  var n = K(r.Bind1()), t = _(r.Applicative0());
  return function(e) {
    return function(o) {
      return n(e)(function(a) {
        return n(o)(function(G) {
          return t(a(G));
        });
      });
    };
  };
};

// output/Effect/index.js
var Ur = function(r, n, t) {
  var e = 0, o;
  return function(a) {
    if (e === 2) return o;
    if (e === 1) throw new ReferenceError(r + " was needed before it finished initializing (module " + n + ", line " + a + ")", n, a);
    return e = 1, o = t(), e = 2, o;
  };
}, Kn = {
  Applicative0: function() {
    return H;
  },
  Bind1: function() {
    return Yn;
  }
}, Yn = {
  bind: $r,
  Apply0: function() {
    return Ir(0);
  }
}, H = {
  pure: Or,
  Apply0: function() {
    return Ir(0);
  }
}, Wn = /* @__PURE__ */ Ur("functorEffect", "Effect", function() {
  return {
    map: k(H)
  };
}), Ir = /* @__PURE__ */ Ur("applyEffect", "Effect", function() {
  return {
    apply: jr(Kn),
    Functor0: function() {
      return Wn(0);
    }
  };
});

// output/Main/index.js
var Xn = /* @__PURE__ */ function() {
  function r(n) {
    this.value0 = n;
  }
  return r.create = function(n) {
    return new r(n);
  }, r;
}(), Nr = /* @__PURE__ */ function() {
  function r(n) {
    this.value0 = n;
  }
  return r.create = function(n) {
    return new r(n);
  }, r;
}(), Zn = function(r) {
  return function(n) {
    if (n.value1 instanceof Xn)
      return vr(n.value0)(n.value1.value0);
    if (n.value1 instanceof Nr)
      return mr(n.value0)(n.value1.value0);
    throw new Error("Failed pattern match at Main (line 30, column 3 - line 32, column 37): " + [n.value1.constructor.name]);
  };
}, rt = /* @__PURE__ */ function() {
  var r = [new pr("Harvester1", new Nr({
    x: 10,
    y: 10
  }))];
  return Ar(lr)(Zn)(_(H)(void 0))(r);
}();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  main
});
