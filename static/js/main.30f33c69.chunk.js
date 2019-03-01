(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    3712: function(e, a, n) {
      e.exports = n(3859);
    },
    3859: function(e, a, n) {
      "use strict";
      n.r(a);
      var t = n(0),
        i = n.n(t),
        r = n(28),
        l = n.n(r),
        o = n(42),
        c = n(3865),
        m = n(63),
        d = n(29),
        s = n(38),
        u = n(6),
        p = n(22),
        v = n(41),
        k = function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "light";
          return Object(p.createMuiTheme)({
            palette: {
              primary: { main: v.blue[500] },
              secondary: { main: v.yellow[700] },
              type: e
            },
            typography: { useNextVariants: !0 }
          });
        };
      var g = function(e) {
          var a = e.children;
          return i.a.createElement(
            p.MuiThemeProvider,
            { theme: k() },
            i.a.createElement(u.d, null),
            a
          );
        },
        f = n(3861),
        h = n(3863),
        b = n(58),
        E = n.n(b),
        y = Object(d.createModule)("core", {
          routes: function() {
            return i.a.createElement(f.a, {
              exact: !0,
              path: "/",
              render: function() {
                var e = E.a.get();
                return e || !e
                  ? i.a.createElement(h.a, { to: "/dashboard" })
                  : i.a.createElement(h.a, { to: "/auth/login" });
              }
            });
          }
        }),
        N = n(129),
        w = n.n(N),
        x = n(130),
        S = n(25),
        j = n.n(S),
        O = n(3862),
        F = n(3864);
      var P = Object(F.a)(
          Object(p.withStyles)(function(e) {
            return {
              root: { marginLeft: 2 },
              activeRoot: {
                backgroundColor: j.a[200],
                borderLeft: "2px ".concat(e.palette.secondary.light, " solid")
              },
              activeIcon: { color: e.palette.secondary.light }
            };
          })(function(e) {
            var a = e.children,
              n = e.classes,
              t = e.label,
              r = e.location,
              l = e.to,
              o = r && r.pathname.includes(l);
            return i.a.createElement(
              u.i,
              {
                className: o ? n.activeRoot : n.root,
                component: O.a,
                button: !0,
                dense: !0,
                key: t,
                to: l
              },
              i.a.createElement(u.j, { className: o ? n.activeIcon : {} }, a),
              i.a.createElement(u.k, { primary: t })
            );
          })
        ),
        D = n(134),
        T = n(127),
        C = n.n(T),
        B = n(128),
        I = n.n(B);
      function q(e) {
        var a = e.children,
          n = e.classes,
          t = e.color,
          r = e.to;
        return r
          ? i.a.createElement(
              u.n,
              { className: n.link, color: t },
              i.a.createElement(O.a, { to: r }, a)
            )
          : i.a.createElement(u.n, { color: t }, a);
      }
      q.defaultProps = { color: "inherit", to: null };
      var M = Object(p.withStyles)(
        function() {
          return {
            link: { "& > a": { color: "inherit", textDecoration: "none" } }
          };
        },
        { withTheme: !0 }
      )(q);
      var V = function(e) {
        return i.a.createElement(
          C.a,
          {
            separator: i.a.createElement(I.a, { fontSize: "small" }),
            "arial-label": "Breadcrumb"
          },
          e.crumbs.map(function(a, n) {
            var t = a.name,
              r = a.to;
            return i.a.createElement(
              M,
              {
                key: t,
                color: e.crumbs.length - 1 === n ? "textPrimary" : "inherit",
                to: r
              },
              t
            );
          })
        );
      };
      function A(e) {
        var a = e
          .split("/")
          .map(function(e) {
            switch (e) {
              case "pokemons":
                return { name: "Pokemon", to: "/dashboard/pokemons" };
              default:
                return null;
            }
          })
          .filter(function(e) {
            return null !== e;
          });
        return a.length <= 0
          ? []
          : [{ name: "Dashboard", to: "/dashboard" }].concat(Object(D.a)(a));
      }
      var W = Object(F.a)(function(e) {
        var a = e.location;
        return i.a.createElement(V, { crumbs: A(a ? a.pathname : "") });
      });
      var L = Object(p.withStyles)(function(e) {
          return {
            appBar: { zIndex: e.zIndex.drawer + 1 },
            root: { display: "flex" },
            menuButton: { marginLeft: -18, marginRight: 10 },
            drawer: { width: 240, flexShrink: 0 },
            drawerPaper: { width: 240 },
            content: {
              flexGrow: 1,
              padding: ""
                .concat(e.spacing.unit, "px ")
                .concat(3 * e.spacing.unit, "px")
            },
            toolbar: e.mixins.toolbar
          };
        })(function(e) {
          var a = e.children,
            n = e.classes;
          return i.a.createElement(
            "div",
            { className: n.root },
            i.a.createElement(
              u.a,
              { position: "fixed", className: n.appBar },
              i.a.createElement(
                u.m,
                { variant: "dense" },
                i.a.createElement(
                  u.g,
                  {
                    className: n.menuButton,
                    color: "inherit",
                    "aria-label": "Menu"
                  },
                  i.a.createElement(w.a, null)
                ),
                i.a.createElement(
                  u.n,
                  { variant: "subtitle2", color: "inherit" },
                  "Pokemon Viewer"
                )
              )
            ),
            i.a.createElement(
              u.e,
              {
                className: n.drawer,
                variant: "permanent",
                classes: { paper: n.drawerPaper }
              },
              i.a.createElement("div", { className: n.toolbar }),
              i.a.createElement(
                u.h,
                null,
                i.a.createElement(
                  P,
                  { label: "Pokemons", to: "/dashboard/pokemons" },
                  i.a.createElement(x.a, null)
                )
              )
            ),
            i.a.createElement(
              "main",
              { className: n.content },
              i.a.createElement("div", { className: n.toolbar }),
              i.a.createElement(W, null),
              a
            )
          );
        }),
        R = n(131),
        $ = n.n(R);
      var z = Object(p.withStyles)(function(e) {
        return {
          root: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: "0 "
              .concat(2 * e.spacing.unit, "px ")
              .concat(2 * e.spacing.unit, "px 0"),
            width: 205
          },
          header: {
            backgroundColor: j.a[200],
            display: "flex",
            justifyContent: "space-between",
            padding: 8
          },
          headerText: { color: j.a[700] },
          image: {
            height: 100,
            margin: "8px auto",
            width: "auto",
            maxWidth: "100%"
          },
          details: { margin: e.spacing.unit }
        };
      })(function(e) {
        var a = e.classes,
          n = e.pokemon,
          t = n.id,
          r = n.image,
          l = n.name,
          o = n.number;
        return i.a.createElement(
          u.l,
          { className: a.root },
          i.a.createElement(
            "div",
            { className: a.header },
            i.a.createElement(
              u.n,
              { className: a.headerText, variant: "caption" },
              o
            ),
            i.a.createElement(u.n, { className: a.headerText }, l)
          ),
          i.a.createElement("img", { alt: l, className: a.image, src: r }),
          i.a.createElement(
            u.b,
            {
              className: a.details,
              component: O.a,
              variant: "outlined",
              to: "/dashboard/pokemons/".concat(t)
            },
            "Details"
          )
        );
      });
      function G(e) {
        var a = e.classes,
          n = e.loading,
          t = e.pokemons;
        return n
          ? i.a.createElement(
              "div",
              { className: a.loading },
              i.a.createElement(u.c, null)
            )
          : i.a.createElement(
              "div",
              null,
              i.a.createElement(
                "div",
                { className: a.grid },
                t.map(function(e) {
                  return i.a.createElement(z, { key: e.id, pokemon: e });
                })
              ),
              i.a.createElement(
                u.f,
                {
                  onClick: function() {},
                  color: "primary",
                  "aria-label": "add",
                  className: a.fab,
                  variant: "extended"
                },
                i.a.createElement($.a, null),
                "Add Pokemon"
              )
            );
      }
      G.defaultProps = { pokemons: [] };
      var J = Object(p.withStyles)(function(e) {
          return {
            fab: {
              bottom: 3 * e.spacing.unit,
              position: "fixed",
              right: 3 * e.spacing.unit
            },
            grid: { display: "flex", flexWrap: "wrap", marginTop: 16 },
            loading: { display: "flex", justifyContent: "center" }
          };
        })(G),
        Q = {
          kind: "Document",
          definitions: [
            {
              kind: "OperationDefinition",
              operation: "query",
              name: { kind: "Name", value: "getPokemonById" },
              variableDefinitions: [
                {
                  kind: "VariableDefinition",
                  variable: {
                    kind: "Variable",
                    name: { kind: "Name", value: "id" }
                  },
                  type: {
                    kind: "NonNullType",
                    type: {
                      kind: "NamedType",
                      name: { kind: "Name", value: "String" }
                    }
                  },
                  directives: []
                }
              ],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "pokemon" },
                    arguments: [
                      {
                        kind: "Argument",
                        name: { kind: "Name", value: "id" },
                        value: {
                          kind: "Variable",
                          name: { kind: "Name", value: "id" }
                        }
                      }
                    ],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "id" },
                          arguments: [],
                          directives: []
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "number" },
                          arguments: [],
                          directives: []
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "name" },
                          arguments: [],
                          directives: []
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "image" },
                          arguments: [],
                          directives: []
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "attacks" },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "fast" },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                  kind: "SelectionSet",
                                  selections: [
                                    {
                                      kind: "Field",
                                      name: { kind: "Name", value: "name" },
                                      arguments: [],
                                      directives: []
                                    },
                                    {
                                      kind: "Field",
                                      name: { kind: "Name", value: "type" },
                                      arguments: [],
                                      directives: []
                                    },
                                    {
                                      kind: "Field",
                                      name: { kind: "Name", value: "damage" },
                                      arguments: [],
                                      directives: []
                                    }
                                  ]
                                }
                              },
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "special" },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                  kind: "SelectionSet",
                                  selections: [
                                    {
                                      kind: "Field",
                                      name: { kind: "Name", value: "name" },
                                      arguments: [],
                                      directives: []
                                    },
                                    {
                                      kind: "Field",
                                      name: { kind: "Name", value: "type" },
                                      arguments: [],
                                      directives: []
                                    },
                                    {
                                      kind: "Field",
                                      name: { kind: "Name", value: "damage" },
                                      arguments: [],
                                      directives: []
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "evolutions" },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "id" },
                                arguments: [],
                                directives: []
                              },
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "number" },
                                arguments: [],
                                directives: []
                              },
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "name" },
                                arguments: [],
                                directives: []
                              },
                              {
                                kind: "Field",
                                name: { kind: "Name", value: "image" },
                                arguments: [],
                                directives: []
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ],
          loc: {
            start: 0,
            end: 316,
            source: {
              body:
                "query getPokemonById($id: String!) {\n  pokemon(id: $id) {\n    id\n    number\n    name\n    image\n    attacks {\n      fast {\n        name\n        type\n        damage\n      }\n      special {\n        name\n        type\n        damage\n      }\n    }\n    evolutions {\n      id\n      number\n      name\n      image\n    }\n  }\n}\n",
              name: "GraphQL request",
              locationOffset: { line: 1, column: 1 }
            }
          }
        },
        H = {
          kind: "Document",
          definitions: [
            {
              kind: "OperationDefinition",
              operation: "query",
              name: { kind: "Name", value: "getPokemons" },
              variableDefinitions: [
                {
                  kind: "VariableDefinition",
                  variable: {
                    kind: "Variable",
                    name: { kind: "Name", value: "first" }
                  },
                  type: {
                    kind: "NonNullType",
                    type: {
                      kind: "NamedType",
                      name: { kind: "Name", value: "Int" }
                    }
                  },
                  directives: []
                }
              ],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [
                  {
                    kind: "Field",
                    name: { kind: "Name", value: "pokemons" },
                    arguments: [
                      {
                        kind: "Argument",
                        name: { kind: "Name", value: "first" },
                        value: {
                          kind: "Variable",
                          name: { kind: "Name", value: "first" }
                        }
                      }
                    ],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "id" },
                          arguments: [],
                          directives: []
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "number" },
                          arguments: [],
                          directives: []
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "name" },
                          arguments: [],
                          directives: []
                        },
                        {
                          kind: "Field",
                          name: { kind: "Name", value: "image" },
                          arguments: [],
                          directives: []
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ],
          loc: {
            start: 0,
            end: 105,
            source: {
              body:
                "query getPokemons($first: Int!) {\n  pokemons(first: $first) {\n    id\n    number\n    name\n    image\n  }\n}\n",
              name: "GraphQL request",
              locationOffset: { line: 1, column: 1 }
            }
          }
        };
      var K = function(e) {
        return i.a.createElement(
          s.b,
          { query: H, variables: { first: 151 }, fetchPolicy: "network-only" },
          function(a) {
            var n = a.data,
              t = a.loading,
              r = a.error;
            return i.a.createElement(
              J,
              Object.assign(
                { pokemons: n && n.pokemons, loading: t, error: r },
                e
              )
            );
          }
        );
      };
      var U = Object(p.withStyles)(function(e) {
        return {
          root: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: "0 "
              .concat(2 * e.spacing.unit, "px ")
              .concat(2 * e.spacing.unit, "px 0"),
            width: 205
          },
          header: {
            backgroundColor: j.a[200],
            display: "flex",
            justifyContent: "space-between",
            padding: 8
          },
          headerText: { color: j.a[700] },
          content: { padding: 16 }
        };
      })(function(e) {
        var a = e.classes,
          n = e.damage,
          t = e.name,
          r = e.type;
        return i.a.createElement(
          u.l,
          { className: a.root },
          i.a.createElement(
            "div",
            { className: a.header },
            i.a.createElement(u.n, { className: a.headerText }, r),
            i.a.createElement(u.n, { className: a.headerText }, n)
          ),
          i.a.createElement(
            "div",
            { className: a.content },
            i.a.createElement(u.n, { align: "center" }, t)
          )
        );
      });
      function X(e) {
        var a = e.classes,
          n = e.loading,
          t = e.pokemon;
        if (n)
          return i.a.createElement(
            "div",
            { className: a.loading },
            i.a.createElement(u.c, null)
          );
        var r = t.attacks,
          l = t.evolutions,
          o = t.image,
          c = t.name,
          m = t.number;
        return i.a.createElement(
          "div",
          { className: a.root },
          i.a.createElement(
            u.l,
            { className: a.header },
            i.a.createElement("img", { alt: c, className: a.image, src: o }),
            i.a.createElement(
              "div",
              null,
              i.a.createElement(u.n, { variant: "caption" }, m),
              i.a.createElement(u.n, { variant: "h3" }, c)
            )
          ),
          i.a.createElement(
            "div",
            { className: a.section },
            i.a.createElement(u.n, { variant: "h5" }, "Fast Attacks"),
            i.a.createElement(
              "div",
              { className: a.grid },
              r.fast.map(function(e) {
                return i.a.createElement(U, {
                  key: e.name,
                  damage: e.damage,
                  name: e.name,
                  type: e.type
                });
              })
            )
          ),
          i.a.createElement(
            "div",
            { className: a.section },
            i.a.createElement(u.n, { variant: "h5" }, "Special Attacks"),
            i.a.createElement(
              "div",
              { className: a.grid },
              r.special.map(function(e) {
                return i.a.createElement(U, {
                  key: e.name,
                  damage: e.damage,
                  name: e.name,
                  type: e.type
                });
              })
            )
          ),
          l &&
            i.a.createElement(
              "div",
              { className: a.section },
              i.a.createElement(u.n, { variant: "h5" }, "Evolutions"),
              i.a.createElement(
                "div",
                { className: a.grid },
                l.map(function(e) {
                  return i.a.createElement(z, { key: e.id, pokemon: e });
                })
              )
            )
        );
      }
      X.defaultProps = { pokemon: null };
      var Y = Object(p.withStyles)(function(e) {
        return {
          root: {
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            maxWidth: 800
          },
          grid: { display: "flex", flexWrap: "wrap" },
          header: {
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            margin: "16px 0",
            padding: 16
          },
          image: { height: "auto", width: 200 },
          loading: { display: "flex", justifyContent: "center" },
          section: { paddingBottom: 16 }
        };
      })(X);
      var Z = function(e) {
          var a = e.match;
          return i.a.createElement(
            s.b,
            {
              query: Q,
              variables: { id: a.params.id },
              fetchPolicy: "network-only"
            },
            function(e) {
              var a = e.data,
                n = e.loading,
                t = e.error;
              return i.a.createElement(Y, {
                pokemon: a && a.pokemon,
                loading: n,
                error: t
              });
            }
          );
        },
        _ = Object(d.createModule)("dashboard", {
          routes: function() {
            return i.a.createElement(f.a, {
              key: "dashboard",
              path: "/dashboard",
              render: function() {
                return i.a.createElement(
                  L,
                  null,
                  i.a.createElement(
                    c.a,
                    null,
                    i.a.createElement(f.a, {
                      exact: !0,
                      path: "/dashboard/pokemons",
                      component: K
                    }),
                    i.a.createElement(f.a, {
                      exact: !0,
                      path: "/dashboard/pokemons/:id",
                      component: Z
                    }),
                    i.a.createElement(h.a, {
                      from: "*",
                      to: "/dashboard/pokemons"
                    })
                  )
                );
              }
            });
          }
        }),
        ee = Object(d.createModule)("pokemons", {}),
        ae = n(135),
        ne = n(31),
        te = n(123),
        ie = n(30),
        re = Object(ie.a)(),
        le = function(e) {
          return Object(ne.c)(Object(ae.a)({ router: Object(m.b)(re) }, e));
        },
        oe = n(64),
        ce = n(3867),
        me = n(16),
        de = n(3866),
        se = new oe.a({
          cache: new ce.a(),
          link: new me.a(function(e, a) {
            return (
              e.setContext({
                headers: { Authorization: "Bearer ".concat(E.a.get()) }
              }),
              a(e)
            );
          }).concat(new de.a({ uri: "https://graphql-pokemon.now.sh" }))
        }),
        ue = (function(e) {
          var a = Object(te.a)(re);
          return Object(ne.e)(le(), e, Object(ne.d)(Object(ne.a)(a)));
        })({}),
        pe = Object(d.createApp)({
          store: ue,
          replaceReducers: function(e) {
            ue.replaceReducer(le(e));
          }
        });
      pe.loadModule(y), pe.loadModule(_), pe.loadModule(ee), pe.init();
      var ve = function() {
        return i.a.createElement(
          o.a,
          { store: ue },
          i.a.createElement(
            s.a,
            { client: se },
            i.a.createElement(
              m.a,
              { history: re },
              i.a.createElement(
                c.a,
                null,
                i.a.createElement(
                  g,
                  null,
                  i.a.Children.map(pe.routes, function(e, a) {
                    return i.a.cloneElement(e, { key: a });
                  })
                )
              )
            )
          )
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      l.a.render(i.a.createElement(ve, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  },
  [[3712, 1, 2]]
]);
//# sourceMappingURL=main.30f33c69.chunk.js.map