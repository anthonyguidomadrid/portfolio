/*! For license information please see main.4be7ac26.js.LICENSE.txt */
!(function () {
  var e = {
      150: function (e, t, n) {
        "use strict";
        var r = function () {
            return (
              (r =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  return e;
                }),
              r.apply(this, arguments)
            );
          },
          o = /["'&<>]/,
          i = function (e) {
            var t,
              n = "" + e,
              r = o.exec(n);
            if (!r) return n;
            var i = "",
              a = 0,
              l = 0;
            for (a = r.index; a < n.length; a++) {
              switch (n.charCodeAt(a)) {
                case 34:
                  t = "&quot;";
                  break;
                case 38:
                  t = "&amp;";
                  break;
                case 39:
                  t = "&#39;";
                  break;
                case 60:
                  t = "&lt;";
                  break;
                case 62:
                  t = "&gt;";
                  break;
                default:
                  continue;
              }
              l !== a && (i += n.substring(l, a)), (l = a + 1), (i += t);
            }
            return l !== a ? i + n.substring(l, a) : i;
          };
        var a =
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof window
            ? window
            : "undefined" !== typeof n.g
            ? n.g
            : "undefined" !== typeof self
            ? self
            : {};
        function l(e) {
          return e &&
            e.__esModule &&
            Object.prototype.hasOwnProperty.call(e, "default")
            ? e.default
            : e;
        }
        function u(e, t) {
          return e((t = { exports: {} }), t.exports), t.exports;
        }
        var s = u(function (e, t) {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.BLOCKS = void 0),
            (function (e) {
              (e.DOCUMENT = "document"),
                (e.PARAGRAPH = "paragraph"),
                (e.HEADING_1 = "heading-1"),
                (e.HEADING_2 = "heading-2"),
                (e.HEADING_3 = "heading-3"),
                (e.HEADING_4 = "heading-4"),
                (e.HEADING_5 = "heading-5"),
                (e.HEADING_6 = "heading-6"),
                (e.OL_LIST = "ordered-list"),
                (e.UL_LIST = "unordered-list"),
                (e.LIST_ITEM = "list-item"),
                (e.HR = "hr"),
                (e.QUOTE = "blockquote"),
                (e.EMBEDDED_ENTRY = "embedded-entry-block"),
                (e.EMBEDDED_ASSET = "embedded-asset-block"),
                (e.TABLE = "table"),
                (e.TABLE_ROW = "table-row"),
                (e.TABLE_CELL = "table-cell"),
                (e.TABLE_HEADER_CELL = "table-header-cell");
            })(t.BLOCKS || (t.BLOCKS = {}));
        });
        l(s);
        s.BLOCKS;
        var c = u(function (e, t) {
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.INLINES = void 0),
            (function (e) {
              (e.HYPERLINK = "hyperlink"),
                (e.ENTRY_HYPERLINK = "entry-hyperlink"),
                (e.ASSET_HYPERLINK = "asset-hyperlink"),
                (e.EMBEDDED_ENTRY = "embedded-entry-inline");
            })(t.INLINES || (t.INLINES = {}));
        });
        l(c);
        c.INLINES;
        var f = u(function (e, t) {
          var n;
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (function (e) {
              (e.BOLD = "bold"),
                (e.ITALIC = "italic"),
                (e.UNDERLINE = "underline"),
                (e.CODE = "code"),
                (e.SUPERSCRIPT = "superscript"),
                (e.SUBSCRIPT = "subscript");
            })(n || (n = {})),
            (t.default = n);
        });
        l(f);
        var d = u(function (e, t) {
          var n,
            r =
              (a && a.__spreadArray) ||
              function (e, t, n) {
                if (n || 2 === arguments.length)
                  for (var r, o = 0, i = t.length; o < i; o++)
                    (!r && o in t) ||
                      (r || (r = Array.prototype.slice.call(t, 0, o)),
                      (r[o] = t[o]));
                return e.concat(r || Array.prototype.slice.call(t));
              },
            o =
              (a && a.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.V1_MARKS =
              t.V1_NODE_TYPES =
              t.TEXT_CONTAINERS =
              t.HEADINGS =
              t.CONTAINERS =
              t.VOID_BLOCKS =
              t.TABLE_BLOCKS =
              t.LIST_ITEM_BLOCKS =
              t.TOP_LEVEL_BLOCKS =
                void 0);
          var i = o(f);
          (t.TOP_LEVEL_BLOCKS = [
            s.BLOCKS.PARAGRAPH,
            s.BLOCKS.HEADING_1,
            s.BLOCKS.HEADING_2,
            s.BLOCKS.HEADING_3,
            s.BLOCKS.HEADING_4,
            s.BLOCKS.HEADING_5,
            s.BLOCKS.HEADING_6,
            s.BLOCKS.OL_LIST,
            s.BLOCKS.UL_LIST,
            s.BLOCKS.HR,
            s.BLOCKS.QUOTE,
            s.BLOCKS.EMBEDDED_ENTRY,
            s.BLOCKS.EMBEDDED_ASSET,
            s.BLOCKS.TABLE,
          ]),
            (t.LIST_ITEM_BLOCKS = [
              s.BLOCKS.PARAGRAPH,
              s.BLOCKS.HEADING_1,
              s.BLOCKS.HEADING_2,
              s.BLOCKS.HEADING_3,
              s.BLOCKS.HEADING_4,
              s.BLOCKS.HEADING_5,
              s.BLOCKS.HEADING_6,
              s.BLOCKS.OL_LIST,
              s.BLOCKS.UL_LIST,
              s.BLOCKS.HR,
              s.BLOCKS.QUOTE,
              s.BLOCKS.EMBEDDED_ENTRY,
              s.BLOCKS.EMBEDDED_ASSET,
            ]),
            (t.TABLE_BLOCKS = [
              s.BLOCKS.TABLE,
              s.BLOCKS.TABLE_ROW,
              s.BLOCKS.TABLE_CELL,
              s.BLOCKS.TABLE_HEADER_CELL,
            ]),
            (t.VOID_BLOCKS = [
              s.BLOCKS.HR,
              s.BLOCKS.EMBEDDED_ENTRY,
              s.BLOCKS.EMBEDDED_ASSET,
            ]),
            (t.CONTAINERS =
              (((n = {})[s.BLOCKS.OL_LIST] = [s.BLOCKS.LIST_ITEM]),
              (n[s.BLOCKS.UL_LIST] = [s.BLOCKS.LIST_ITEM]),
              (n[s.BLOCKS.LIST_ITEM] = t.LIST_ITEM_BLOCKS),
              (n[s.BLOCKS.QUOTE] = [s.BLOCKS.PARAGRAPH]),
              (n[s.BLOCKS.TABLE] = [s.BLOCKS.TABLE_ROW]),
              (n[s.BLOCKS.TABLE_ROW] = [
                s.BLOCKS.TABLE_CELL,
                s.BLOCKS.TABLE_HEADER_CELL,
              ]),
              (n[s.BLOCKS.TABLE_CELL] = [s.BLOCKS.PARAGRAPH]),
              (n[s.BLOCKS.TABLE_HEADER_CELL] = [s.BLOCKS.PARAGRAPH]),
              n)),
            (t.HEADINGS = [
              s.BLOCKS.HEADING_1,
              s.BLOCKS.HEADING_2,
              s.BLOCKS.HEADING_3,
              s.BLOCKS.HEADING_4,
              s.BLOCKS.HEADING_5,
              s.BLOCKS.HEADING_6,
            ]),
            (t.TEXT_CONTAINERS = r([s.BLOCKS.PARAGRAPH], t.HEADINGS, !0)),
            (t.V1_NODE_TYPES = [
              s.BLOCKS.DOCUMENT,
              s.BLOCKS.PARAGRAPH,
              s.BLOCKS.HEADING_1,
              s.BLOCKS.HEADING_2,
              s.BLOCKS.HEADING_3,
              s.BLOCKS.HEADING_4,
              s.BLOCKS.HEADING_5,
              s.BLOCKS.HEADING_6,
              s.BLOCKS.OL_LIST,
              s.BLOCKS.UL_LIST,
              s.BLOCKS.LIST_ITEM,
              s.BLOCKS.HR,
              s.BLOCKS.QUOTE,
              s.BLOCKS.EMBEDDED_ENTRY,
              s.BLOCKS.EMBEDDED_ASSET,
              c.INLINES.HYPERLINK,
              c.INLINES.ENTRY_HYPERLINK,
              c.INLINES.ASSET_HYPERLINK,
              c.INLINES.EMBEDDED_ENTRY,
              "text",
            ]),
            (t.V1_MARKS = [
              i.default.BOLD,
              i.default.CODE,
              i.default.ITALIC,
              i.default.UNDERLINE,
            ]);
        });
        l(d);
        d.V1_MARKS,
          d.V1_NODE_TYPES,
          d.TEXT_CONTAINERS,
          d.HEADINGS,
          d.CONTAINERS,
          d.VOID_BLOCKS,
          d.TABLE_BLOCKS,
          d.LIST_ITEM_BLOCKS,
          d.TOP_LEVEL_BLOCKS;
        var p = u(function (e, t) {
          Object.defineProperty(t, "__esModule", { value: !0 });
        });
        l(p);
        var h = u(function (e, t) {
          Object.defineProperty(t, "__esModule", { value: !0 });
        });
        l(h);
        var v = u(function (e, t) {
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = {
            nodeType: s.BLOCKS.DOCUMENT,
            data: {},
            content: [
              {
                nodeType: s.BLOCKS.PARAGRAPH,
                data: {},
                content: [{ nodeType: "text", value: "", marks: [], data: {} }],
              },
            ],
          };
          t.default = n;
        });
        l(v);
        var m = u(function (e, t) {
          function n(e, t) {
            for (var n = 0, r = Object.keys(e); n < r.length; n++) {
              if (t === e[r[n]]) return !0;
            }
            return !1;
          }
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.isText = t.isBlock = t.isInline = void 0),
            (t.isInline = function (e) {
              return n(c.INLINES, e.nodeType);
            }),
            (t.isBlock = function (e) {
              return n(s.BLOCKS, e.nodeType);
            }),
            (t.isText = function (e) {
              return "text" === e.nodeType;
            });
        });
        l(m);
        m.isText, m.isBlock, m.isInline;
        var g = u(function (e, t) {
          var n =
              (a && a.__createBinding) ||
              (Object.create
                ? function (e, t, n, r) {
                    void 0 === r && (r = n);
                    var o = Object.getOwnPropertyDescriptor(t, n);
                    (o &&
                      !("get" in o
                        ? !t.__esModule
                        : o.writable || o.configurable)) ||
                      (o = {
                        enumerable: !0,
                        get: function () {
                          return t[n];
                        },
                      }),
                      Object.defineProperty(e, r, o);
                  }
                : function (e, t, n, r) {
                    void 0 === r && (r = n), (e[r] = t[n]);
                  }),
            r =
              (a && a.__setModuleDefault) ||
              (Object.create
                ? function (e, t) {
                    Object.defineProperty(e, "default", {
                      enumerable: !0,
                      value: t,
                    });
                  }
                : function (e, t) {
                    e.default = t;
                  }),
            o =
              (a && a.__exportStar) ||
              function (e, t) {
                for (var r in e)
                  "default" === r ||
                    Object.prototype.hasOwnProperty.call(t, r) ||
                    n(t, e, r);
              },
            i =
              (a && a.__importStar) ||
              function (e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                  for (var o in e)
                    "default" !== o &&
                      Object.prototype.hasOwnProperty.call(e, o) &&
                      n(t, e, o);
                return r(t, e), t;
              },
            l =
              (a && a.__importDefault) ||
              function (e) {
                return e && e.__esModule ? e : { default: e };
              };
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.helpers =
              t.EMPTY_DOCUMENT =
              t.MARKS =
              t.INLINES =
              t.BLOCKS =
                void 0),
            Object.defineProperty(t, "BLOCKS", {
              enumerable: !0,
              get: function () {
                return s.BLOCKS;
              },
            }),
            Object.defineProperty(t, "INLINES", {
              enumerable: !0,
              get: function () {
                return c.INLINES;
              },
            }),
            Object.defineProperty(t, "MARKS", {
              enumerable: !0,
              get: function () {
                return l(f).default;
              },
            }),
            o(d, t),
            o(p, t),
            o(h, t),
            Object.defineProperty(t, "EMPTY_DOCUMENT", {
              enumerable: !0,
              get: function () {
                return l(v).default;
              },
            });
          var u = i(m);
          t.helpers = u;
        });
        l(g);
        var y,
          b,
          w = g.helpers,
          S = (g.EMPTY_DOCUMENT, g.MARKS),
          x = g.INLINES,
          E = g.BLOCKS,
          k =
            (((y = {})[E.PARAGRAPH] = function (e, t) {
              return "<p>".concat(t(e.content), "</p>");
            }),
            (y[E.HEADING_1] = function (e, t) {
              return "<h1>".concat(t(e.content), "</h1>");
            }),
            (y[E.HEADING_2] = function (e, t) {
              return "<h2>".concat(t(e.content), "</h2>");
            }),
            (y[E.HEADING_3] = function (e, t) {
              return "<h3>".concat(t(e.content), "</h3>");
            }),
            (y[E.HEADING_4] = function (e, t) {
              return "<h4>".concat(t(e.content), "</h4>");
            }),
            (y[E.HEADING_5] = function (e, t) {
              return "<h5>".concat(t(e.content), "</h5>");
            }),
            (y[E.HEADING_6] = function (e, t) {
              return "<h6>".concat(t(e.content), "</h6>");
            }),
            (y[E.EMBEDDED_ENTRY] = function (e, t) {
              return "<div>".concat(t(e.content), "</div>");
            }),
            (y[E.UL_LIST] = function (e, t) {
              return "<ul>".concat(t(e.content), "</ul>");
            }),
            (y[E.OL_LIST] = function (e, t) {
              return "<ol>".concat(t(e.content), "</ol>");
            }),
            (y[E.LIST_ITEM] = function (e, t) {
              return "<li>".concat(t(e.content), "</li>");
            }),
            (y[E.QUOTE] = function (e, t) {
              return "<blockquote>".concat(t(e.content), "</blockquote>");
            }),
            (y[E.HR] = function () {
              return "<hr/>";
            }),
            (y[E.TABLE] = function (e, t) {
              return "<table>".concat(t(e.content), "</table>");
            }),
            (y[E.TABLE_ROW] = function (e, t) {
              return "<tr>".concat(t(e.content), "</tr>");
            }),
            (y[E.TABLE_HEADER_CELL] = function (e, t) {
              return "<th>".concat(t(e.content), "</th>");
            }),
            (y[E.TABLE_CELL] = function (e, t) {
              return "<td>".concat(t(e.content), "</td>");
            }),
            (y[x.ASSET_HYPERLINK] = function (e) {
              return O(x.ASSET_HYPERLINK, e);
            }),
            (y[x.ENTRY_HYPERLINK] = function (e) {
              return O(x.ENTRY_HYPERLINK, e);
            }),
            (y[x.EMBEDDED_ENTRY] = function (e) {
              return O(x.EMBEDDED_ENTRY, e);
            }),
            (y[x.HYPERLINK] = function (e, t) {
              var n,
                r = "string" === typeof e.data.uri ? e.data.uri : "";
              return "<a href="
                .concat(
                  ((n = r), '"'.concat(n.replace(/"/g, "&quot;"), '"')),
                  ">"
                )
                .concat(t(e.content), "</a>");
            }),
            y),
          C =
            (((b = {})[S.BOLD] = function (e) {
              return "<b>".concat(e, "</b>");
            }),
            (b[S.ITALIC] = function (e) {
              return "<i>".concat(e, "</i>");
            }),
            (b[S.UNDERLINE] = function (e) {
              return "<u>".concat(e, "</u>");
            }),
            (b[S.CODE] = function (e) {
              return "<code>".concat(e, "</code>");
            }),
            (b[S.SUPERSCRIPT] = function (e) {
              return "<sup>".concat(e, "</sup>");
            }),
            (b[S.SUBSCRIPT] = function (e) {
              return "<sub>".concat(e, "</sub>");
            }),
            b),
          O = function (e, t) {
            return "<span>type: "
              .concat(i(e), " id: ")
              .concat(i(t.data.target.sys.id), "</span>");
          };
        function _(e, t) {
          var n = t.renderNode,
            r = t.renderMark;
          return e
            .map(function (e) {
              return (function (e, t) {
                var n = t.renderNode,
                  r = t.renderMark;
                if (w.isText(e)) {
                  var o = i(e.value);
                  return e.marks.length > 0
                    ? e.marks.reduce(function (e, t) {
                        return r[t.type] ? r[t.type](e) : e;
                      }, o)
                    : o;
                }
                var a = function (e) {
                  return _(e, { renderMark: r, renderNode: n });
                };
                return e.nodeType && n[e.nodeType] ? n[e.nodeType](e, a) : "";
              })(e, { renderNode: n, renderMark: r });
            })
            .join("");
        }
        t.S = function (e, t) {
          return (
            void 0 === t && (t = {}),
            e && e.content
              ? _(e.content, {
                  renderNode: r(r({}, k), t.renderNode),
                  renderMark: r(r({}, C), t.renderMark),
                })
              : ""
          );
        };
      },
      694: function (e, t) {
        var n;
        !(function () {
          "use strict";
          var r = {}.hasOwnProperty;
          function o() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var i = typeof n;
                if ("string" === i || "number" === i) e.push(n);
                else if (Array.isArray(n)) {
                  if (n.length) {
                    var a = o.apply(null, n);
                    a && e.push(a);
                  }
                } else if ("object" === i) {
                  if (
                    n.toString !== Object.prototype.toString &&
                    !n.toString.toString().includes("[native code]")
                  ) {
                    e.push(n.toString());
                    continue;
                  }
                  for (var l in n) r.call(n, l) && n[l] && e.push(l);
                }
              }
            }
            return e.join(" ");
          }
          e.exports
            ? ((o.default = o), (e.exports = o))
            : void 0 ===
                (n = function () {
                  return o;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
      892: function (e) {
        e.exports = (function () {
          "use strict";
          var e = 1e3,
            t = 6e4,
            n = 36e5,
            r = "millisecond",
            o = "second",
            i = "minute",
            a = "hour",
            l = "day",
            u = "week",
            s = "month",
            c = "quarter",
            f = "year",
            d = "date",
            p = "Invalid Date",
            h =
              /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
            v =
              /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            m = {
              name: "en",
              weekdays:
                "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                  "_"
                ),
              months:
                "January_February_March_April_May_June_July_August_September_October_November_December".split(
                  "_"
                ),
              ordinal: function (e) {
                var t = ["th", "st", "nd", "rd"],
                  n = e % 100;
                return "[" + e + (t[(n - 20) % 10] || t[n] || t[0]) + "]";
              },
            },
            g = function (e, t, n) {
              var r = String(e);
              return !r || r.length >= t
                ? e
                : "" + Array(t + 1 - r.length).join(n) + e;
            },
            y = {
              s: g,
              z: function (e) {
                var t = -e.utcOffset(),
                  n = Math.abs(t),
                  r = Math.floor(n / 60),
                  o = n % 60;
                return (t <= 0 ? "+" : "-") + g(r, 2, "0") + ":" + g(o, 2, "0");
              },
              m: function e(t, n) {
                if (t.date() < n.date()) return -e(n, t);
                var r = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                  o = t.clone().add(r, s),
                  i = n - o < 0,
                  a = t.clone().add(r + (i ? -1 : 1), s);
                return +(-(r + (n - o) / (i ? o - a : a - o)) || 0);
              },
              a: function (e) {
                return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
              },
              p: function (e) {
                return (
                  {
                    M: s,
                    y: f,
                    w: u,
                    d: l,
                    D: d,
                    h: a,
                    m: i,
                    s: o,
                    ms: r,
                    Q: c,
                  }[e] ||
                  String(e || "")
                    .toLowerCase()
                    .replace(/s$/, "")
                );
              },
              u: function (e) {
                return void 0 === e;
              },
            },
            b = "en",
            w = {};
          w[b] = m;
          var S = function (e) {
              return e instanceof C;
            },
            x = function e(t, n, r) {
              var o;
              if (!t) return b;
              if ("string" == typeof t) {
                var i = t.toLowerCase();
                w[i] && (o = i), n && ((w[i] = n), (o = i));
                var a = t.split("-");
                if (!o && a.length > 1) return e(a[0]);
              } else {
                var l = t.name;
                (w[l] = t), (o = l);
              }
              return !r && o && (b = o), o || (!r && b);
            },
            E = function (e, t) {
              if (S(e)) return e.clone();
              var n = "object" == typeof t ? t : {};
              return (n.date = e), (n.args = arguments), new C(n);
            },
            k = y;
          (k.l = x),
            (k.i = S),
            (k.w = function (e, t) {
              return E(e, {
                locale: t.$L,
                utc: t.$u,
                x: t.$x,
                $offset: t.$offset,
              });
            });
          var C = (function () {
              function m(e) {
                (this.$L = x(e.locale, null, !0)), this.parse(e);
              }
              var g = m.prototype;
              return (
                (g.parse = function (e) {
                  (this.$d = (function (e) {
                    var t = e.date,
                      n = e.utc;
                    if (null === t) return new Date(NaN);
                    if (k.u(t)) return new Date();
                    if (t instanceof Date) return new Date(t);
                    if ("string" == typeof t && !/Z$/i.test(t)) {
                      var r = t.match(h);
                      if (r) {
                        var o = r[2] - 1 || 0,
                          i = (r[7] || "0").substring(0, 3);
                        return n
                          ? new Date(
                              Date.UTC(
                                r[1],
                                o,
                                r[3] || 1,
                                r[4] || 0,
                                r[5] || 0,
                                r[6] || 0,
                                i
                              )
                            )
                          : new Date(
                              r[1],
                              o,
                              r[3] || 1,
                              r[4] || 0,
                              r[5] || 0,
                              r[6] || 0,
                              i
                            );
                      }
                    }
                    return new Date(t);
                  })(e)),
                    (this.$x = e.x || {}),
                    this.init();
                }),
                (g.init = function () {
                  var e = this.$d;
                  (this.$y = e.getFullYear()),
                    (this.$M = e.getMonth()),
                    (this.$D = e.getDate()),
                    (this.$W = e.getDay()),
                    (this.$H = e.getHours()),
                    (this.$m = e.getMinutes()),
                    (this.$s = e.getSeconds()),
                    (this.$ms = e.getMilliseconds());
                }),
                (g.$utils = function () {
                  return k;
                }),
                (g.isValid = function () {
                  return !(this.$d.toString() === p);
                }),
                (g.isSame = function (e, t) {
                  var n = E(e);
                  return this.startOf(t) <= n && n <= this.endOf(t);
                }),
                (g.isAfter = function (e, t) {
                  return E(e) < this.startOf(t);
                }),
                (g.isBefore = function (e, t) {
                  return this.endOf(t) < E(e);
                }),
                (g.$g = function (e, t, n) {
                  return k.u(e) ? this[t] : this.set(n, e);
                }),
                (g.unix = function () {
                  return Math.floor(this.valueOf() / 1e3);
                }),
                (g.valueOf = function () {
                  return this.$d.getTime();
                }),
                (g.startOf = function (e, t) {
                  var n = this,
                    r = !!k.u(t) || t,
                    c = k.p(e),
                    p = function (e, t) {
                      var o = k.w(
                        n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e),
                        n
                      );
                      return r ? o : o.endOf(l);
                    },
                    h = function (e, t) {
                      return k.w(
                        n
                          .toDate()
                          [e].apply(
                            n.toDate("s"),
                            (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)
                          ),
                        n
                      );
                    },
                    v = this.$W,
                    m = this.$M,
                    g = this.$D,
                    y = "set" + (this.$u ? "UTC" : "");
                  switch (c) {
                    case f:
                      return r ? p(1, 0) : p(31, 11);
                    case s:
                      return r ? p(1, m) : p(0, m + 1);
                    case u:
                      var b = this.$locale().weekStart || 0,
                        w = (v < b ? v + 7 : v) - b;
                      return p(r ? g - w : g + (6 - w), m);
                    case l:
                    case d:
                      return h(y + "Hours", 0);
                    case a:
                      return h(y + "Minutes", 1);
                    case i:
                      return h(y + "Seconds", 2);
                    case o:
                      return h(y + "Milliseconds", 3);
                    default:
                      return this.clone();
                  }
                }),
                (g.endOf = function (e) {
                  return this.startOf(e, !1);
                }),
                (g.$set = function (e, t) {
                  var n,
                    u = k.p(e),
                    c = "set" + (this.$u ? "UTC" : ""),
                    p = ((n = {}),
                    (n[l] = c + "Date"),
                    (n[d] = c + "Date"),
                    (n[s] = c + "Month"),
                    (n[f] = c + "FullYear"),
                    (n[a] = c + "Hours"),
                    (n[i] = c + "Minutes"),
                    (n[o] = c + "Seconds"),
                    (n[r] = c + "Milliseconds"),
                    n)[u],
                    h = u === l ? this.$D + (t - this.$W) : t;
                  if (u === s || u === f) {
                    var v = this.clone().set(d, 1);
                    v.$d[p](h),
                      v.init(),
                      (this.$d = v.set(
                        d,
                        Math.min(this.$D, v.daysInMonth())
                      ).$d);
                  } else p && this.$d[p](h);
                  return this.init(), this;
                }),
                (g.set = function (e, t) {
                  return this.clone().$set(e, t);
                }),
                (g.get = function (e) {
                  return this[k.p(e)]();
                }),
                (g.add = function (r, c) {
                  var d,
                    p = this;
                  r = Number(r);
                  var h = k.p(c),
                    v = function (e) {
                      var t = E(p);
                      return k.w(t.date(t.date() + Math.round(e * r)), p);
                    };
                  if (h === s) return this.set(s, this.$M + r);
                  if (h === f) return this.set(f, this.$y + r);
                  if (h === l) return v(1);
                  if (h === u) return v(7);
                  var m =
                      ((d = {}), (d[i] = t), (d[a] = n), (d[o] = e), d)[h] || 1,
                    g = this.$d.getTime() + r * m;
                  return k.w(g, this);
                }),
                (g.subtract = function (e, t) {
                  return this.add(-1 * e, t);
                }),
                (g.format = function (e) {
                  var t = this,
                    n = this.$locale();
                  if (!this.isValid()) return n.invalidDate || p;
                  var r = e || "YYYY-MM-DDTHH:mm:ssZ",
                    o = k.z(this),
                    i = this.$H,
                    a = this.$m,
                    l = this.$M,
                    u = n.weekdays,
                    s = n.months,
                    c = function (e, n, o, i) {
                      return (e && (e[n] || e(t, r))) || o[n].slice(0, i);
                    },
                    f = function (e) {
                      return k.s(i % 12 || 12, e, "0");
                    },
                    d =
                      n.meridiem ||
                      function (e, t, n) {
                        var r = e < 12 ? "AM" : "PM";
                        return n ? r.toLowerCase() : r;
                      },
                    h = {
                      YY: String(this.$y).slice(-2),
                      YYYY: this.$y,
                      M: l + 1,
                      MM: k.s(l + 1, 2, "0"),
                      MMM: c(n.monthsShort, l, s, 3),
                      MMMM: c(s, l),
                      D: this.$D,
                      DD: k.s(this.$D, 2, "0"),
                      d: String(this.$W),
                      dd: c(n.weekdaysMin, this.$W, u, 2),
                      ddd: c(n.weekdaysShort, this.$W, u, 3),
                      dddd: u[this.$W],
                      H: String(i),
                      HH: k.s(i, 2, "0"),
                      h: f(1),
                      hh: f(2),
                      a: d(i, a, !0),
                      A: d(i, a, !1),
                      m: String(a),
                      mm: k.s(a, 2, "0"),
                      s: String(this.$s),
                      ss: k.s(this.$s, 2, "0"),
                      SSS: k.s(this.$ms, 3, "0"),
                      Z: o,
                    };
                  return r.replace(v, function (e, t) {
                    return t || h[e] || o.replace(":", "");
                  });
                }),
                (g.utcOffset = function () {
                  return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                }),
                (g.diff = function (r, d, p) {
                  var h,
                    v = k.p(d),
                    m = E(r),
                    g = (m.utcOffset() - this.utcOffset()) * t,
                    y = this - m,
                    b = k.m(this, m);
                  return (
                    (b =
                      ((h = {}),
                      (h[f] = b / 12),
                      (h[s] = b),
                      (h[c] = b / 3),
                      (h[u] = (y - g) / 6048e5),
                      (h[l] = (y - g) / 864e5),
                      (h[a] = y / n),
                      (h[i] = y / t),
                      (h[o] = y / e),
                      h)[v] || y),
                    p ? b : k.a(b)
                  );
                }),
                (g.daysInMonth = function () {
                  return this.endOf(s).$D;
                }),
                (g.$locale = function () {
                  return w[this.$L];
                }),
                (g.locale = function (e, t) {
                  if (!e) return this.$L;
                  var n = this.clone(),
                    r = x(e, t, !0);
                  return r && (n.$L = r), n;
                }),
                (g.clone = function () {
                  return k.w(this.$d, this);
                }),
                (g.toDate = function () {
                  return new Date(this.valueOf());
                }),
                (g.toJSON = function () {
                  return this.isValid() ? this.toISOString() : null;
                }),
                (g.toISOString = function () {
                  return this.$d.toISOString();
                }),
                (g.toString = function () {
                  return this.$d.toUTCString();
                }),
                m
              );
            })(),
            O = C.prototype;
          return (
            (E.prototype = O),
            [
              ["$ms", r],
              ["$s", o],
              ["$m", i],
              ["$H", a],
              ["$W", l],
              ["$M", s],
              ["$y", f],
              ["$D", d],
            ].forEach(function (e) {
              O[e[1]] = function (t) {
                return this.$g(t, e[0], e[1]);
              };
            }),
            (E.extend = function (e, t) {
              return e.$i || (e(t, C, E), (e.$i = !0)), E;
            }),
            (E.locale = x),
            (E.isDayjs = S),
            (E.unix = function (e) {
              return E(1e3 * e);
            }),
            (E.en = w[b]),
            (E.Ls = w),
            (E.p = {}),
            E
          );
        })();
      },
      176: function (e) {
        "use strict";
        e.exports = function (e, t, n, r, o, i, a, l) {
          if (!e) {
            var u;
            if (void 0 === t)
              u = new Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
              );
            else {
              var s = [n, r, o, i, a, l],
                c = 0;
              (u = new Error(
                t.replace(/%s/g, function () {
                  return s[c++];
                })
              )).name = "Invariant Violation";
            }
            throw ((u.framesToPop = 1), u);
          }
        };
      },
      888: function (e, t, n) {
        "use strict";
        var r = n(47);
        function o() {}
        function i() {}
        (i.resetWarningCache = o),
          (e.exports = function () {
            function e(e, t, n, o, i, a) {
              if (a !== r) {
                var l = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((l.name = "Invariant Violation"), l);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: i,
              resetWarningCache: o,
            };
            return (n.PropTypes = n), n;
          });
      },
      7: function (e, t, n) {
        e.exports = n(888)();
      },
      47: function (e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          o = n(296);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var a = new Set(),
          l = {};
        function u(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function v(e, t, n, r, o, i, a) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = a);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var o = m.hasOwnProperty(t) ? m[t] : null;
          (null !== o
            ? 0 !== o.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (o = o.type) || (4 === o && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y);
            m[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            m[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          S = Symbol.for("react.element"),
          x = Symbol.for("react.portal"),
          E = Symbol.for("react.fragment"),
          k = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          O = Symbol.for("react.provider"),
          _ = Symbol.for("react.context"),
          T = Symbol.for("react.forward_ref"),
          L = Symbol.for("react.suspense"),
          N = Symbol.for("react.suspense_list"),
          P = Symbol.for("react.memo"),
          j = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var I = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var A = Symbol.iterator;
        function D(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (A && e[A]) || e["@@iterator"])
            ? e
            : null;
        }
        var M,
          R = Object.assign;
        function z(e) {
          if (void 0 === M)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              M = (t && t[1]) || "";
            }
          return "\n" + M + e;
        }
        var B = !1;
        function F(e, t) {
          if (!e || B) return "";
          B = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (s) {
                  r = s;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && "string" === typeof s.stack) {
              for (
                var o = s.stack.split("\n"),
                  i = r.stack.split("\n"),
                  a = o.length - 1,
                  l = i.length - 1;
                1 <= a && 0 <= l && o[a] !== i[l];

              )
                l--;
              for (; 1 <= a && 0 <= l; a--, l--)
                if (o[a] !== i[l]) {
                  if (1 !== a || 1 !== l)
                    do {
                      if ((a--, 0 > --l || o[a] !== i[l])) {
                        var u = "\n" + o[a].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= a && 0 <= l);
                  break;
                }
            }
          } finally {
            (B = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? z(e) : "";
        }
        function H(e) {
          switch (e.tag) {
            case 5:
              return z(e.type);
            case 16:
              return z("Lazy");
            case 13:
              return z("Suspense");
            case 19:
              return z("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = F(e.type, !1));
            case 11:
              return (e = F(e.type.render, !1));
            case 1:
              return (e = F(e.type, !0));
            default:
              return "";
          }
        }
        function U(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case E:
              return "Fragment";
            case x:
              return "Portal";
            case C:
              return "Profiler";
            case k:
              return "StrictMode";
            case L:
              return "Suspense";
            case N:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case _:
                return (e.displayName || "Context") + ".Consumer";
              case O:
                return (e._context.displayName || "Context") + ".Provider";
              case T:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case P:
                return null !== (t = e.displayName || null)
                  ? t
                  : U(e.type) || "Memo";
              case j:
                (t = e._payload), (e = e._init);
                try {
                  return U(e(t));
                } catch (n) {}
            }
          return null;
        }
        function $(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return U(t);
            case 8:
              return t === k ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function K(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function V(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var o = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Y(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function G(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Q(e, t) {
          var n = t.checked;
          return R({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function q(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = K(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function J(e, t) {
          X(e, t);
          var n = K(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, K(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && G(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + K(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (
                  (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return R({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function oe(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (te(n)) {
                if (1 < n.length) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: K(n) };
        }
        function ie(e, t) {
          var n = K(t.value),
            r = K(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ae(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var se,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (se = se || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function me(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                o = ve(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = R(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(i(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function Se(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var xe = null,
          Ee = null,
          ke = null;
        function Ce(e) {
          if ((e = wo(e))) {
            if ("function" !== typeof xe) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = xo(t)), xe(e.stateNode, e.type, t));
          }
        }
        function Oe(e) {
          Ee ? (ke ? ke.push(e) : (ke = [e])) : (Ee = e);
        }
        function _e() {
          if (Ee) {
            var e = Ee,
              t = ke;
            if (((ke = Ee = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function Te(e, t) {
          return e(t);
        }
        function Le() {}
        var Ne = !1;
        function Pe(e, t, n) {
          if (Ne) return e(t, n);
          Ne = !0;
          try {
            return Te(e, t, n);
          } finally {
            (Ne = !1), (null !== Ee || null !== ke) && (Le(), _e());
          }
        }
        function je(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = xo(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Ie = !1;
        if (c)
          try {
            var Ae = {};
            Object.defineProperty(Ae, "passive", {
              get: function () {
                Ie = !0;
              },
            }),
              window.addEventListener("test", Ae, Ae),
              window.removeEventListener("test", Ae, Ae);
          } catch (ce) {
            Ie = !1;
          }
        function De(e, t, n, r, o, i, a, l, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var Me = !1,
          Re = null,
          ze = !1,
          Be = null,
          Fe = {
            onError: function (e) {
              (Me = !0), (Re = e);
            },
          };
        function He(e, t, n, r, o, i, a, l, u) {
          (Me = !1), (Re = null), De.apply(Fe, arguments);
        }
        function Ue(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function $e(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ke(e) {
          if (Ue(e) !== e) throw Error(i(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ue(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var a = o.alternate;
                if (null === a) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === a.child) {
                  for (a = o.child; a; ) {
                    if (a === n) return Ke(o), e;
                    if (a === r) return Ke(o), t;
                    a = a.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = o), (r = a);
                else {
                  for (var l = !1, u = o.child; u; ) {
                    if (u === n) {
                      (l = !0), (n = o), (r = a);
                      break;
                    }
                    if (u === r) {
                      (l = !0), (r = o), (n = a);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) {
                    for (u = a.child; u; ) {
                      if (u === n) {
                        (l = !0), (n = a), (r = o);
                        break;
                      }
                      if (u === r) {
                        (l = !0), (r = a), (n = o);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!l) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ve(e)
            : null;
        }
        function Ve(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ve(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ye = o.unstable_scheduleCallback,
          Ge = o.unstable_cancelCallback,
          Qe = o.unstable_shouldYield,
          qe = o.unstable_requestPaint,
          Xe = o.unstable_now,
          Je = o.unstable_getCurrentPriorityLevel,
          Ze = o.unstable_ImmediatePriority,
          et = o.unstable_UserBlockingPriority,
          tt = o.unstable_NormalPriority,
          nt = o.unstable_LowPriority,
          rt = o.unstable_IdlePriority,
          ot = null,
          it = null;
        var at = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / ut) | 0)) | 0;
              },
          lt = Math.log,
          ut = Math.LN2;
        var st = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            o = e.suspendedLanes,
            i = e.pingedLanes,
            a = 268435455 & n;
          if (0 !== a) {
            var l = a & ~o;
            0 !== l ? (r = ft(l)) : 0 !== (i &= a) && (r = ft(i));
          } else 0 !== (a = n & ~o) ? (r = ft(a)) : 0 !== i && (r = ft(i));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & o) &&
            ((o = r & -r) >= (i = t & -t) || (16 === o && 0 !== (4194240 & i)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - at(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vt() {
          var e = st;
          return 0 === (4194240 & (st <<= 1)) && (st = 64), e;
        }
        function mt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - at(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - at(n),
              o = 1 << r;
            (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var St,
          xt,
          Et,
          kt,
          Ct,
          Ot = !1,
          _t = [],
          Tt = null,
          Lt = null,
          Nt = null,
          Pt = new Map(),
          jt = new Map(),
          It = [],
          At =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Dt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Tt = null;
              break;
            case "dragenter":
            case "dragleave":
              Lt = null;
              break;
            case "mouseover":
            case "mouseout":
              Nt = null;
              break;
            case "pointerover":
            case "pointerout":
              Pt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              jt.delete(t.pointerId);
          }
        }
        function Mt(e, t, n, r, o, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [o],
              }),
              null !== t && null !== (t = wo(t)) && xt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function Rt(e) {
          var t = bo(e.target);
          if (null !== t) {
            var n = Ue(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = $e(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      Et(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function zt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = wo(n)) && xt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Bt(e, t, n) {
          zt(e) && n.delete(t);
        }
        function Ft() {
          (Ot = !1),
            null !== Tt && zt(Tt) && (Tt = null),
            null !== Lt && zt(Lt) && (Lt = null),
            null !== Nt && zt(Nt) && (Nt = null),
            Pt.forEach(Bt),
            jt.forEach(Bt);
        }
        function Ht(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ot ||
              ((Ot = !0),
              o.unstable_scheduleCallback(o.unstable_NormalPriority, Ft)));
        }
        function Ut(e) {
          function t(t) {
            return Ht(t, e);
          }
          if (0 < _t.length) {
            Ht(_t[0], e);
            for (var n = 1; n < _t.length; n++) {
              var r = _t[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Tt && Ht(Tt, e),
              null !== Lt && Ht(Lt, e),
              null !== Nt && Ht(Nt, e),
              Pt.forEach(t),
              jt.forEach(t),
              n = 0;
            n < It.length;
            n++
          )
            (r = It[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < It.length && null === (n = It[0]).blockedOn; )
            Rt(n), null === n.blockedOn && It.shift();
        }
        var $t = w.ReactCurrentBatchConfig,
          Kt = !0;
        function Wt(e, t, n, r) {
          var o = bt,
            i = $t.transition;
          $t.transition = null;
          try {
            (bt = 1), Yt(e, t, n, r);
          } finally {
            (bt = o), ($t.transition = i);
          }
        }
        function Vt(e, t, n, r) {
          var o = bt,
            i = $t.transition;
          $t.transition = null;
          try {
            (bt = 4), Yt(e, t, n, r);
          } finally {
            (bt = o), ($t.transition = i);
          }
        }
        function Yt(e, t, n, r) {
          if (Kt) {
            var o = Qt(e, t, n, r);
            if (null === o) Kr(e, t, r, Gt, n), Dt(e, r);
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case "focusin":
                    return (Tt = Mt(Tt, e, t, n, r, o)), !0;
                  case "dragenter":
                    return (Lt = Mt(Lt, e, t, n, r, o)), !0;
                  case "mouseover":
                    return (Nt = Mt(Nt, e, t, n, r, o)), !0;
                  case "pointerover":
                    var i = o.pointerId;
                    return Pt.set(i, Mt(Pt.get(i) || null, e, t, n, r, o)), !0;
                  case "gotpointercapture":
                    return (
                      (i = o.pointerId),
                      jt.set(i, Mt(jt.get(i) || null, e, t, n, r, o)),
                      !0
                    );
                }
                return !1;
              })(o, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Dt(e, r), 4 & t && -1 < At.indexOf(e))) {
              for (; null !== o; ) {
                var i = wo(o);
                if (
                  (null !== i && St(i),
                  null === (i = Qt(e, t, n, r)) && Kr(e, t, r, Gt, n),
                  i === o)
                )
                  break;
                o = i;
              }
              null !== o && r.stopPropagation();
            } else Kr(e, t, r, null, n);
          }
        }
        var Gt = null;
        function Qt(e, t, n, r) {
          if (((Gt = null), null !== (e = bo((e = Se(r))))))
            if (null === (t = Ue(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = $e(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Gt = e), null;
        }
        function qt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Jt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Jt,
            r = n.length,
            o = "value" in Xt ? Xt.value : Xt.textContent,
            i = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var a = r - e;
          for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
          return (Zt = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function on(e) {
          function t(t, n, r, o, i) {
            for (var a in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(o) : o[a]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            R(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var an,
          ln,
          un,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = on(sn),
          fn = R({}, sn, { view: 0, detail: 0 }),
          dn = on(fn),
          pn = R({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((an = e.screenX - un.screenX),
                        (ln = e.screenY - un.screenY))
                      : (ln = an = 0),
                    (un = e)),
                  an);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = on(pn),
          vn = on(R({}, pn, { dataTransfer: 0 })),
          mn = on(R({}, fn, { relatedTarget: 0 })),
          gn = on(
            R({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = R({}, sn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = on(yn),
          wn = on(R({}, sn, { data: 0 })),
          Sn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          xn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          En = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function kn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = En[e]) && !!t[e];
        }
        function Cn() {
          return kn;
        }
        var On = R({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = Sn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? xn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          _n = on(On),
          Tn = on(
            R({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Ln = on(
            R({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          Nn = on(
            R({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Pn = R({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          jn = on(Pn),
          In = [9, 13, 27, 32],
          An = c && "CompositionEvent" in window,
          Dn = null;
        c && "documentMode" in document && (Dn = document.documentMode);
        var Mn = c && "TextEvent" in window && !Dn,
          Rn = c && (!An || (Dn && 8 < Dn && 11 >= Dn)),
          zn = String.fromCharCode(32),
          Bn = !1;
        function Fn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== In.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Hn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Un = !1;
        var $n = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Kn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!$n[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          Oe(r),
            0 < (t = Vr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Vn = null,
          Yn = null;
        function Gn(e) {
          zr(e, 0);
        }
        function Qn(e) {
          if (Y(So(e))) return e;
        }
        function qn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (c) {
          var Jn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Jn = Zn;
          } else Jn = !1;
          Xn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Vn && (Vn.detachEvent("onpropertychange", nr), (Yn = Vn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Qn(Yn)) {
            var t = [];
            Wn(t, Yn, e, Se(e)), Pe(Gn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Yn = n), (Vn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function or(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Qn(Yn);
        }
        function ir(e, t) {
          if ("click" === e) return Qn(t);
        }
        function ar(e, t) {
          if ("input" === e || "change" === e) return Qn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ur(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!f.call(t, o) || !lr(e[o], t[o])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = sr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = G(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = G((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var o = n.textContent.length,
                  i = Math.min(r.start, o);
                (r = void 0 === r.end ? i : Math.min(r.end, o)),
                  !e.extend && i > r && ((o = r), (r = i), (i = o)),
                  (o = cr(n, i));
                var a = cr(n, r);
                o &&
                  a &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== o.node ||
                    e.anchorOffset !== o.offset ||
                    e.focusNode !== a.node ||
                    e.focusOffset !== a.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset),
                  e.removeAllRanges(),
                  i > r
                    ? (e.addRange(t), e.extend(a.node, a.offset))
                    : (t.setEnd(a.node, a.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var vr = c && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          gr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == mr ||
            mr !== G(r) ||
            ("selectionStart" in (r = mr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && ur(yr, r)) ||
              ((yr = r),
              0 < (r = Vr(gr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
        }
        function Sr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var xr = {
            animationend: Sr("Animation", "AnimationEnd"),
            animationiteration: Sr("Animation", "AnimationIteration"),
            animationstart: Sr("Animation", "AnimationStart"),
            transitionend: Sr("Transition", "TransitionEnd"),
          },
          Er = {},
          kr = {};
        function Cr(e) {
          if (Er[e]) return Er[e];
          if (!xr[e]) return e;
          var t,
            n = xr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in kr) return (Er[e] = n[t]);
          return e;
        }
        c &&
          ((kr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete xr.animationend.animation,
            delete xr.animationiteration.animation,
            delete xr.animationstart.animation),
          "TransitionEvent" in window || delete xr.transitionend.transition);
        var Or = Cr("animationend"),
          _r = Cr("animationiteration"),
          Tr = Cr("animationstart"),
          Lr = Cr("transitionend"),
          Nr = new Map(),
          Pr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function jr(e, t) {
          Nr.set(e, t), u(t, [e]);
        }
        for (var Ir = 0; Ir < Pr.length; Ir++) {
          var Ar = Pr[Ir];
          jr(Ar.toLowerCase(), "on" + (Ar[0].toUpperCase() + Ar.slice(1)));
        }
        jr(Or, "onAnimationEnd"),
          jr(_r, "onAnimationIteration"),
          jr(Tr, "onAnimationStart"),
          jr("dblclick", "onDoubleClick"),
          jr("focusin", "onFocus"),
          jr("focusout", "onBlur"),
          jr(Lr, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Dr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Mr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Dr)
          );
        function Rr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, o, a, l, u, s) {
              if ((He.apply(this, arguments), Me)) {
                if (!Me) throw Error(i(198));
                var c = Re;
                (Me = !1), (Re = null), ze || ((ze = !0), (Be = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function zr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                  var l = r[a],
                    u = l.instance,
                    s = l.currentTarget;
                  if (((l = l.listener), u !== i && o.isPropagationStopped()))
                    break e;
                  Rr(o, l, s), (i = u);
                }
              else
                for (a = 0; a < r.length; a++) {
                  if (
                    ((u = (l = r[a]).instance),
                    (s = l.currentTarget),
                    (l = l.listener),
                    u !== i && o.isPropagationStopped())
                  )
                    break e;
                  Rr(o, l, s), (i = u);
                }
            }
          }
          if (ze) throw ((e = Be), (ze = !1), (Be = null), e);
        }
        function Br(e, t) {
          var n = t[mo];
          void 0 === n && (n = t[mo] = new Set());
          var r = e + "__bubble";
          n.has(r) || ($r(t, e, 2, !1), n.add(r));
        }
        function Fr(e, t, n) {
          var r = 0;
          t && (r |= 4), $r(n, e, r, t);
        }
        var Hr = "_reactListening" + Math.random().toString(36).slice(2);
        function Ur(e) {
          if (!e[Hr]) {
            (e[Hr] = !0),
              a.forEach(function (t) {
                "selectionchange" !== t &&
                  (Mr.has(t) || Fr(t, !1, e), Fr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Hr] || ((t[Hr] = !0), Fr("selectionchange", !1, t));
          }
        }
        function $r(e, t, n, r) {
          switch (qt(t)) {
            case 1:
              var o = Wt;
              break;
            case 4:
              o = Vt;
              break;
            default:
              o = Yt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Ie ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
        }
        function Kr(e, t, n, r, o) {
          var i = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var a = r.tag;
              if (3 === a || 4 === a) {
                var l = r.stateNode.containerInfo;
                if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
                if (4 === a)
                  for (a = r.return; null !== a; ) {
                    var u = a.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = a.stateNode.containerInfo) === o ||
                        (8 === u.nodeType && u.parentNode === o))
                    )
                      return;
                    a = a.return;
                  }
                for (; null !== l; ) {
                  if (null === (a = bo(l))) return;
                  if (5 === (u = a.tag) || 6 === u) {
                    r = i = a;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Pe(function () {
            var r = i,
              o = Se(n),
              a = [];
            e: {
              var l = Nr.get(e);
              if (void 0 !== l) {
                var u = cn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = _n;
                    break;
                  case "focusin":
                    (s = "focus"), (u = mn);
                    break;
                  case "focusout":
                    (s = "blur"), (u = mn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = mn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Ln;
                    break;
                  case Or:
                  case _r:
                  case Tr:
                    u = gn;
                    break;
                  case Lr:
                    u = Nn;
                    break;
                  case "scroll":
                    u = dn;
                    break;
                  case "wheel":
                    u = jn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Tn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var v = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== d &&
                        null != (v = je(h, d)) &&
                        c.push(Wr(h, v, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new u(l, s, null, n, o)),
                  a.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!bo(s) && !s[vo])) &&
                  (u || l) &&
                  ((l =
                    o.window === o
                      ? o
                      : (l = o.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? bo(s)
                          : null) &&
                        (s !== (f = Ue(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = hn),
                  (v = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Tn),
                    (v = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? l : So(u)),
                  (p = null == s ? l : So(s)),
                  ((l = new c(v, h + "leave", u, n, o)).target = f),
                  (l.relatedTarget = p),
                  (v = null),
                  bo(o) === r &&
                    (((c = new c(d, h + "enter", s, n, o)).target = p),
                    (c.relatedTarget = f),
                    (v = c)),
                  (f = v),
                  u && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = u; p; p = Yr(p)) h++;
                    for (p = 0, v = d; v; v = Yr(v)) p++;
                    for (; 0 < h - p; ) (c = Yr(c)), h--;
                    for (; 0 < p - h; ) (d = Yr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Yr(c)), (d = Yr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Gr(a, l, u, c, !1),
                  null !== s && null !== f && Gr(a, f, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (l = r ? So(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === u && "file" === l.type)
              )
                var m = qn;
              else if (Kn(l))
                if (Xn) m = ar;
                else {
                  m = or;
                  var g = rr;
                }
              else
                (u = l.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (m = ir);
              switch (
                (m && (m = m(e, r))
                  ? Wn(a, m, n, o)
                  : (g && g(e, l, r),
                    "focusout" === e &&
                      (g = l._wrapperState) &&
                      g.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (g = r ? So(r) : window),
                e)
              ) {
                case "focusin":
                  (Kn(g) || "true" === g.contentEditable) &&
                    ((mr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = mr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(a, n, o);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  wr(a, n, o);
              }
              var y;
              if (An)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Un
                  ? Fn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Rn &&
                  "ko" !== n.locale &&
                  (Un || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Un && (y = en())
                    : ((Jt = "value" in (Xt = o) ? Xt.value : Xt.textContent),
                      (Un = !0))),
                0 < (g = Vr(r, b)).length &&
                  ((b = new wn(b, e, null, n, o)),
                  a.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Hn(n)) && (b.data = y))),
                (y = Mn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Hn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Bn = !0), zn);
                        case "textInput":
                          return (e = t.data) === zn && Bn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Un)
                        return "compositionend" === e || (!An && Fn(e, t))
                          ? ((e = en()), (Zt = Jt = Xt = null), (Un = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Rn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Vr(r, "onBeforeInput")).length &&
                  ((o = new wn("onBeforeInput", "beforeinput", null, n, o)),
                  a.push({ event: o, listeners: r }),
                  (o.data = y));
            }
            zr(a, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Vr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e,
              i = o.stateNode;
            5 === o.tag &&
              null !== i &&
              ((o = i),
              null != (i = je(e, n)) && r.unshift(Wr(e, i, o)),
              null != (i = je(e, t)) && r.push(Wr(e, i, o))),
              (e = e.return);
          }
          return r;
        }
        function Yr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Gr(e, t, n, r, o) {
          for (var i = t._reactName, a = []; null !== n && n !== r; ) {
            var l = n,
              u = l.alternate,
              s = l.stateNode;
            if (null !== u && u === r) break;
            5 === l.tag &&
              null !== s &&
              ((l = s),
              o
                ? null != (u = je(n, i)) && a.unshift(Wr(n, u, l))
                : o || (null != (u = je(n, i)) && a.push(Wr(n, u, l)))),
              (n = n.return);
          }
          0 !== a.length && e.push({ event: t, listeners: a });
        }
        var Qr = /\r\n?/g,
          qr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Qr, "\n")
            .replace(qr, "");
        }
        function Jr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(i(425));
        }
        function Zr() {}
        var eo = null,
          to = null;
        function no(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ro = "function" === typeof setTimeout ? setTimeout : void 0,
          oo = "function" === typeof clearTimeout ? clearTimeout : void 0,
          io = "function" === typeof Promise ? Promise : void 0,
          ao =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof io
              ? function (e) {
                  return io.resolve(null).then(e).catch(lo);
                }
              : ro;
        function lo(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function uo(e, t) {
          var n = t,
            r = 0;
          do {
            var o = n.nextSibling;
            if ((e.removeChild(n), o && 8 === o.nodeType))
              if ("/$" === (n = o.data)) {
                if (0 === r) return e.removeChild(o), void Ut(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = o;
          } while (n);
          Ut(t);
        }
        function so(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function co(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fo = Math.random().toString(36).slice(2),
          po = "__reactFiber$" + fo,
          ho = "__reactProps$" + fo,
          vo = "__reactContainer$" + fo,
          mo = "__reactEvents$" + fo,
          go = "__reactListeners$" + fo,
          yo = "__reactHandles$" + fo;
        function bo(e) {
          var t = e[po];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[vo] || n[po])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = co(e); null !== e; ) {
                  if ((n = e[po])) return n;
                  e = co(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function wo(e) {
          return !(e = e[po] || e[vo]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function So(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function xo(e) {
          return e[ho] || null;
        }
        var Eo = [],
          ko = -1;
        function Co(e) {
          return { current: e };
        }
        function Oo(e) {
          0 > ko || ((e.current = Eo[ko]), (Eo[ko] = null), ko--);
        }
        function _o(e, t) {
          ko++, (Eo[ko] = e.current), (e.current = t);
        }
        var To = {},
          Lo = Co(To),
          No = Co(!1),
          Po = To;
        function jo(e, t) {
          var n = e.type.contextTypes;
          if (!n) return To;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            i = {};
          for (o in n) i[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function Io(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ao() {
          Oo(No), Oo(Lo);
        }
        function Do(e, t, n) {
          if (Lo.current !== To) throw Error(i(168));
          _o(Lo, t), _o(No, n);
        }
        function Mo(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var o in (r = r.getChildContext()))
            if (!(o in t)) throw Error(i(108, $(e) || "Unknown", o));
          return R({}, n, r);
        }
        function Ro(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              To),
            (Po = Lo.current),
            _o(Lo, e),
            _o(No, No.current),
            !0
          );
        }
        function zo(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = Mo(e, t, Po)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Oo(No),
              Oo(Lo),
              _o(Lo, e))
            : Oo(No),
            _o(No, n);
        }
        var Bo = null,
          Fo = !1,
          Ho = !1;
        function Uo(e) {
          null === Bo ? (Bo = [e]) : Bo.push(e);
        }
        function $o() {
          if (!Ho && null !== Bo) {
            Ho = !0;
            var e = 0,
              t = bt;
            try {
              var n = Bo;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Bo = null), (Fo = !1);
            } catch (o) {
              throw (null !== Bo && (Bo = Bo.slice(e + 1)), Ye(Ze, $o), o);
            } finally {
              (bt = t), (Ho = !1);
            }
          }
          return null;
        }
        var Ko = [],
          Wo = 0,
          Vo = null,
          Yo = 0,
          Go = [],
          Qo = 0,
          qo = null,
          Xo = 1,
          Jo = "";
        function Zo(e, t) {
          (Ko[Wo++] = Yo), (Ko[Wo++] = Vo), (Vo = e), (Yo = t);
        }
        function ei(e, t, n) {
          (Go[Qo++] = Xo), (Go[Qo++] = Jo), (Go[Qo++] = qo), (qo = e);
          var r = Xo;
          e = Jo;
          var o = 32 - at(r) - 1;
          (r &= ~(1 << o)), (n += 1);
          var i = 32 - at(t) + o;
          if (30 < i) {
            var a = o - (o % 5);
            (i = (r & ((1 << a) - 1)).toString(32)),
              (r >>= a),
              (o -= a),
              (Xo = (1 << (32 - at(t) + o)) | (n << o) | r),
              (Jo = i + e);
          } else (Xo = (1 << i) | (n << o) | r), (Jo = e);
        }
        function ti(e) {
          null !== e.return && (Zo(e, 1), ei(e, 1, 0));
        }
        function ni(e) {
          for (; e === Vo; )
            (Vo = Ko[--Wo]), (Ko[Wo] = null), (Yo = Ko[--Wo]), (Ko[Wo] = null);
          for (; e === qo; )
            (qo = Go[--Qo]),
              (Go[Qo] = null),
              (Jo = Go[--Qo]),
              (Go[Qo] = null),
              (Xo = Go[--Qo]),
              (Go[Qo] = null);
        }
        var ri = null,
          oi = null,
          ii = !1,
          ai = null;
        function li(e, t) {
          var n = Ps(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function ui(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ri = e), (oi = so(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ri = e), (oi = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== qo ? { id: Xo, overflow: Jo } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Ps(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ri = e),
                (oi = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function si(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ci(e) {
          if (ii) {
            var t = oi;
            if (t) {
              var n = t;
              if (!ui(e, t)) {
                if (si(e)) throw Error(i(418));
                t = so(n.nextSibling);
                var r = ri;
                t && ui(e, t)
                  ? li(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ii = !1), (ri = e));
              }
            } else {
              if (si(e)) throw Error(i(418));
              (e.flags = (-4097 & e.flags) | 2), (ii = !1), (ri = e);
            }
          }
        }
        function fi(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ri = e;
        }
        function di(e) {
          if (e !== ri) return !1;
          if (!ii) return fi(e), (ii = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !no(e.type, e.memoizedProps)),
            t && (t = oi))
          ) {
            if (si(e)) throw (pi(), Error(i(418)));
            for (; t; ) li(e, t), (t = so(t.nextSibling));
          }
          if ((fi(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      oi = so(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              oi = null;
            }
          } else oi = ri ? so(e.stateNode.nextSibling) : null;
          return !0;
        }
        function pi() {
          for (var e = oi; e; ) e = so(e.nextSibling);
        }
        function hi() {
          (oi = ri = null), (ii = !1);
        }
        function vi(e) {
          null === ai ? (ai = [e]) : ai.push(e);
        }
        var mi = w.ReactCurrentBatchConfig;
        function gi(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = R({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var yi = Co(null),
          bi = null,
          wi = null,
          Si = null;
        function xi() {
          Si = wi = bi = null;
        }
        function Ei(e) {
          var t = yi.current;
          Oo(yi), (e._currentValue = t);
        }
        function ki(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ci(e, t) {
          (bi = e),
            (Si = wi = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wl = !0), (e.firstContext = null));
        }
        function Oi(e) {
          var t = e._currentValue;
          if (Si !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wi)
            ) {
              if (null === bi) throw Error(i(308));
              (wi = e), (bi.dependencies = { lanes: 0, firstContext: e });
            } else wi = wi.next = e;
          return t;
        }
        var _i = null;
        function Ti(e) {
          null === _i ? (_i = [e]) : _i.push(e);
        }
        function Li(e, t, n, r) {
          var o = t.interleaved;
          return (
            null === o
              ? ((n.next = n), Ti(t))
              : ((n.next = o.next), (o.next = n)),
            (t.interleaved = n),
            Ni(e, r)
          );
        }
        function Ni(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Pi = !1;
        function ji(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ii(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ai(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Di(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Tu))) {
            var o = r.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (r.pending = t),
              Ni(e, n)
            );
          }
          return (
            null === (o = r.interleaved)
              ? ((t.next = t), Ti(r))
              : ((t.next = o.next), (o.next = t)),
            (r.interleaved = t),
            Ni(e, n)
          );
        }
        function Mi(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Ri(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var a = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (o = i = a) : (i = i.next = a), (n = n.next);
              } while (null !== n);
              null === i ? (o = i = t) : (i = i.next = t);
            } else o = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function zi(e, t, n, r) {
          var o = e.updateQueue;
          Pi = !1;
          var i = o.firstBaseUpdate,
            a = o.lastBaseUpdate,
            l = o.shared.pending;
          if (null !== l) {
            o.shared.pending = null;
            var u = l,
              s = u.next;
            (u.next = null), null === a ? (i = s) : (a.next = s), (a = u);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== a &&
              (null === l ? (c.firstBaseUpdate = s) : (l.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== i) {
            var f = o.baseState;
            for (a = 0, c = s = u = null, l = i; ; ) {
              var d = l.lane,
                p = l.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    v = l;
                  switch (((d = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (h = v.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = v.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = R({}, f, d);
                      break e;
                    case 2:
                      Pi = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (d = o.effects) ? (o.effects = [l]) : d.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                  (a |= d);
              if (null === (l = l.next)) {
                if (null === (l = o.shared.pending)) break;
                (l = (d = l).next),
                  (d.next = null),
                  (o.lastBaseUpdate = d),
                  (o.shared.pending = null);
              }
            }
            if (
              (null === c && (u = f),
              (o.baseState = u),
              (o.firstBaseUpdate = s),
              (o.lastBaseUpdate = c),
              null !== (t = o.shared.interleaved))
            ) {
              o = t;
              do {
                (a |= o.lane), (o = o.next);
              } while (o !== t);
            } else null === i && (o.shared.lanes = 0);
            (Mu |= a), (e.lanes = a), (e.memoizedState = f);
          }
        }
        function Bi(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), "function" !== typeof o))
                  throw Error(i(191, o));
                o.call(r);
              }
            }
        }
        var Fi = new r.Component().refs;
        function Hi(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : R({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Ui = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ue(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = es(),
              o = ts(e),
              i = Ai(r, o);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Di(e, i, o)) && (ns(t, e, o, r), Mi(t, e, o));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = es(),
              o = ts(e),
              i = Ai(r, o);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Di(e, i, o)) && (ns(t, e, o, r), Mi(t, e, o));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = es(),
              r = ts(e),
              o = Ai(n, r);
            (o.tag = 2),
              void 0 !== t && null !== t && (o.callback = t),
              null !== (t = Di(e, o, r)) && (ns(t, e, r, n), Mi(t, e, r));
          },
        };
        function $i(e, t, n, r, o, i, a) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, a)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(o, i);
        }
        function Ki(e, t, n) {
          var r = !1,
            o = To,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = Oi(i))
              : ((o = Io(t) ? Po : Lo.current),
                (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? jo(e, o)
                  : To)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Ui),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function Wi(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Ui.enqueueReplaceState(t, t.state, null);
        }
        function Vi(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = Fi), ji(e);
          var i = t.contextType;
          "object" === typeof i && null !== i
            ? (o.context = Oi(i))
            : ((i = Io(t) ? Po : Lo.current), (o.context = jo(e, i))),
            (o.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) &&
              (Hi(e, t, i, n), (o.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof o.getSnapshotBeforeUpdate ||
              ("function" !== typeof o.UNSAFE_componentWillMount &&
                "function" !== typeof o.componentWillMount) ||
              ((t = o.state),
              "function" === typeof o.componentWillMount &&
                o.componentWillMount(),
              "function" === typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && Ui.enqueueReplaceState(o, o.state, null),
              zi(e, n, o, r),
              (o.state = e.memoizedState)),
            "function" === typeof o.componentDidMount && (e.flags |= 4194308);
        }
        function Yi(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var o = r,
                a = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === a
                ? t.ref
                : ((t = function (e) {
                    var t = o.refs;
                    t === Fi && (t = o.refs = {}),
                      null === e ? delete t[a] : (t[a] = e);
                  }),
                  (t._stringRef = a),
                  t);
            }
            if ("string" !== typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function Gi(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Qi(e) {
          return (0, e._init)(e._payload);
        }
        function qi(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Is(e, t)).index = 0), (e.sibling = null), e;
          }
          function a(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Rs(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var i = n.type;
            return i === E
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ("object" === typeof i &&
                    null !== i &&
                    i.$$typeof === j &&
                    Qi(i) === t.type))
              ? (((r = o(t, n.props)).ref = Yi(e, t, n)), (r.return = e), r)
              : (((r = As(n.type, n.key, n.props, null, e.mode, r)).ref = Yi(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = zs(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Ds(n, e.mode, r, i)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Rs("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case S:
                  return (
                    ((n = As(t.type, t.key, t.props, null, e.mode, n)).ref = Yi(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case x:
                  return ((t = zs(t, e.mode, n)).return = e), t;
                case j:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || D(t))
                return ((t = Ds(t, e.mode, n, null)).return = e), t;
              Gi(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== o ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case S:
                  return n.key === o ? s(e, t, n, r) : null;
                case x:
                  return n.key === o ? c(e, t, n, r) : null;
                case j:
                  return p(e, t, (o = n._init)(n._payload), r);
              }
              if (te(n) || D(n)) return null !== o ? null : f(e, t, n, r, null);
              Gi(e, n);
            }
            return null;
          }
          function h(e, t, n, r, o) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, o);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case S:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case x:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case j:
                  return h(e, t, n, (0, r._init)(r._payload), o);
              }
              if (te(r) || D(r))
                return f(t, (e = e.get(n) || null), r, o, null);
              Gi(t, r);
            }
            return null;
          }
          function v(o, i, l, u) {
            for (
              var s = null, c = null, f = i, v = (i = 0), m = null;
              null !== f && v < l.length;
              v++
            ) {
              f.index > v ? ((m = f), (f = null)) : (m = f.sibling);
              var g = p(o, f, l[v], u);
              if (null === g) {
                null === f && (f = m);
                break;
              }
              e && f && null === g.alternate && t(o, f),
                (i = a(g, i, v)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g),
                (f = m);
            }
            if (v === l.length) return n(o, f), ii && Zo(o, v), s;
            if (null === f) {
              for (; v < l.length; v++)
                null !== (f = d(o, l[v], u)) &&
                  ((i = a(f, i, v)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return ii && Zo(o, v), s;
            }
            for (f = r(o, f); v < l.length; v++)
              null !== (m = h(f, o, v, l[v], u)) &&
                (e &&
                  null !== m.alternate &&
                  f.delete(null === m.key ? v : m.key),
                (i = a(m, i, v)),
                null === c ? (s = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                f.forEach(function (e) {
                  return t(o, e);
                }),
              ii && Zo(o, v),
              s
            );
          }
          function m(o, l, u, s) {
            var c = D(u);
            if ("function" !== typeof c) throw Error(i(150));
            if (null == (u = c.call(u))) throw Error(i(151));
            for (
              var f = (c = null), v = l, m = (l = 0), g = null, y = u.next();
              null !== v && !y.done;
              m++, y = u.next()
            ) {
              v.index > m ? ((g = v), (v = null)) : (g = v.sibling);
              var b = p(o, v, y.value, s);
              if (null === b) {
                null === v && (v = g);
                break;
              }
              e && v && null === b.alternate && t(o, v),
                (l = a(b, l, m)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (v = g);
            }
            if (y.done) return n(o, v), ii && Zo(o, m), c;
            if (null === v) {
              for (; !y.done; m++, y = u.next())
                null !== (y = d(o, y.value, s)) &&
                  ((l = a(y, l, m)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return ii && Zo(o, m), c;
            }
            for (v = r(o, v); !y.done; m++, y = u.next())
              null !== (y = h(v, o, m, y.value, s)) &&
                (e &&
                  null !== y.alternate &&
                  v.delete(null === y.key ? m : y.key),
                (l = a(y, l, m)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                v.forEach(function (e) {
                  return t(o, e);
                }),
              ii && Zo(o, m),
              c
            );
          }
          return function e(r, i, a, u) {
            if (
              ("object" === typeof a &&
                null !== a &&
                a.type === E &&
                null === a.key &&
                (a = a.props.children),
              "object" === typeof a && null !== a)
            ) {
              switch (a.$$typeof) {
                case S:
                  e: {
                    for (var s = a.key, c = i; null !== c; ) {
                      if (c.key === s) {
                        if ((s = a.type) === E) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((i = o(c, a.props.children)).return = r),
                              (r = i);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ("object" === typeof s &&
                            null !== s &&
                            s.$$typeof === j &&
                            Qi(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((i = o(c, a.props)).ref = Yi(r, c, a)),
                            (i.return = r),
                            (r = i);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    a.type === E
                      ? (((i = Ds(a.props.children, r.mode, u, a.key)).return =
                          r),
                        (r = i))
                      : (((u = As(
                          a.type,
                          a.key,
                          a.props,
                          null,
                          r.mode,
                          u
                        )).ref = Yi(r, i, a)),
                        (u.return = r),
                        (r = u));
                  }
                  return l(r);
                case x:
                  e: {
                    for (c = a.key; null !== i; ) {
                      if (i.key === c) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === a.containerInfo &&
                          i.stateNode.implementation === a.implementation
                        ) {
                          n(r, i.sibling),
                            ((i = o(i, a.children || [])).return = r),
                            (r = i);
                          break e;
                        }
                        n(r, i);
                        break;
                      }
                      t(r, i), (i = i.sibling);
                    }
                    ((i = zs(a, r.mode, u)).return = r), (r = i);
                  }
                  return l(r);
                case j:
                  return e(r, i, (c = a._init)(a._payload), u);
              }
              if (te(a)) return v(r, i, a, u);
              if (D(a)) return m(r, i, a, u);
              Gi(r, a);
            }
            return ("string" === typeof a && "" !== a) || "number" === typeof a
              ? ((a = "" + a),
                null !== i && 6 === i.tag
                  ? (n(r, i.sibling), ((i = o(i, a)).return = r), (r = i))
                  : (n(r, i), ((i = Rs(a, r.mode, u)).return = r), (r = i)),
                l(r))
              : n(r, i);
          };
        }
        var Xi = qi(!0),
          Ji = qi(!1),
          Zi = {},
          ea = Co(Zi),
          ta = Co(Zi),
          na = Co(Zi);
        function ra(e) {
          if (e === Zi) throw Error(i(174));
          return e;
        }
        function oa(e, t) {
          switch ((_o(na, t), _o(ta, e), _o(ea, Zi), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Oo(ea), _o(ea, t);
        }
        function ia() {
          Oo(ea), Oo(ta), Oo(na);
        }
        function aa(e) {
          ra(na.current);
          var t = ra(ea.current),
            n = ue(t, e.type);
          t !== n && (_o(ta, e), _o(ea, n));
        }
        function la(e) {
          ta.current === e && (Oo(ea), Oo(ta));
        }
        var ua = Co(0);
        function sa(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ca = [];
        function fa() {
          for (var e = 0; e < ca.length; e++)
            ca[e]._workInProgressVersionPrimary = null;
          ca.length = 0;
        }
        var da = w.ReactCurrentDispatcher,
          pa = w.ReactCurrentBatchConfig,
          ha = 0,
          va = null,
          ma = null,
          ga = null,
          ya = !1,
          ba = !1,
          wa = 0,
          Sa = 0;
        function xa() {
          throw Error(i(321));
        }
        function Ea(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function ka(e, t, n, r, o, a) {
          if (
            ((ha = a),
            (va = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (da.current = null === e || null === e.memoizedState ? ll : ul),
            (e = n(r, o)),
            ba)
          ) {
            a = 0;
            do {
              if (((ba = !1), (wa = 0), 25 <= a)) throw Error(i(301));
              (a += 1),
                (ga = ma = null),
                (t.updateQueue = null),
                (da.current = sl),
                (e = n(r, o));
            } while (ba);
          }
          if (
            ((da.current = al),
            (t = null !== ma && null !== ma.next),
            (ha = 0),
            (ga = ma = va = null),
            (ya = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function Ca() {
          var e = 0 !== wa;
          return (wa = 0), e;
        }
        function Oa() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ga ? (va.memoizedState = ga = e) : (ga = ga.next = e), ga
          );
        }
        function _a() {
          if (null === ma) {
            var e = va.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ma.next;
          var t = null === ga ? va.memoizedState : ga.next;
          if (null !== t) (ga = t), (ma = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (ma = e).memoizedState,
              baseState: ma.baseState,
              baseQueue: ma.baseQueue,
              queue: ma.queue,
              next: null,
            }),
              null === ga ? (va.memoizedState = ga = e) : (ga = ga.next = e);
          }
          return ga;
        }
        function Ta(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function La(e) {
          var t = _a(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = ma,
            o = r.baseQueue,
            a = n.pending;
          if (null !== a) {
            if (null !== o) {
              var l = o.next;
              (o.next = a.next), (a.next = l);
            }
            (r.baseQueue = o = a), (n.pending = null);
          }
          if (null !== o) {
            (a = o.next), (r = r.baseState);
            var u = (l = null),
              s = null,
              c = a;
            do {
              var f = c.lane;
              if ((ha & f) === f)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((u = s = d), (l = r)) : (s = s.next = d),
                  (va.lanes |= f),
                  (Mu |= f);
              }
              c = c.next;
            } while (null !== c && c !== a);
            null === s ? (l = r) : (s.next = u),
              lr(r, t.memoizedState) || (wl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            o = e;
            do {
              (a = o.lane), (va.lanes |= a), (Mu |= a), (o = o.next);
            } while (o !== e);
          } else null === o && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Na(e) {
          var t = _a(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            a = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var l = (o = o.next);
            do {
              (a = e(a, l.action)), (l = l.next);
            } while (l !== o);
            lr(a, t.memoizedState) || (wl = !0),
              (t.memoizedState = a),
              null === t.baseQueue && (t.baseState = a),
              (n.lastRenderedState = a);
          }
          return [a, r];
        }
        function Pa() {}
        function ja(e, t) {
          var n = va,
            r = _a(),
            o = t(),
            a = !lr(r.memoizedState, o);
          if (
            (a && ((r.memoizedState = o), (wl = !0)),
            (r = r.queue),
            Ka(Da.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              a ||
              (null !== ga && 1 & ga.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ba(9, Aa.bind(null, n, r, o, t), void 0, null),
              null === Lu)
            )
              throw Error(i(349));
            0 !== (30 & ha) || Ia(n, t, o);
          }
          return o;
        }
        function Ia(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = va.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (va.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Aa(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ma(t) && Ra(e);
        }
        function Da(e, t, n) {
          return n(function () {
            Ma(t) && Ra(e);
          });
        }
        function Ma(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ra(e) {
          var t = Ni(e, 1);
          null !== t && ns(t, e, 1, -1);
        }
        function za(e) {
          var t = Oa();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ta,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, va, e)),
            [t.memoizedState, e]
          );
        }
        function Ba(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = va.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (va.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Fa() {
          return _a().memoizedState;
        }
        function Ha(e, t, n, r) {
          var o = Oa();
          (va.flags |= e),
            (o.memoizedState = Ba(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Ua(e, t, n, r) {
          var o = _a();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== ma) {
            var a = ma.memoizedState;
            if (((i = a.destroy), null !== r && Ea(r, a.deps)))
              return void (o.memoizedState = Ba(t, n, i, r));
          }
          (va.flags |= e), (o.memoizedState = Ba(1 | t, n, i, r));
        }
        function $a(e, t) {
          return Ha(8390656, 8, e, t);
        }
        function Ka(e, t) {
          return Ua(2048, 8, e, t);
        }
        function Wa(e, t) {
          return Ua(4, 2, e, t);
        }
        function Va(e, t) {
          return Ua(4, 4, e, t);
        }
        function Ya(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ga(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Ua(4, 4, Ya.bind(null, t, e), n)
          );
        }
        function Qa() {}
        function qa(e, t) {
          var n = _a();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Ea(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Xa(e, t) {
          var n = _a();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Ea(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ja(e, t, n) {
          return 0 === (21 & ha)
            ? (e.baseState && ((e.baseState = !1), (wl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = vt()), (va.lanes |= n), (Mu |= n), (e.baseState = !0)),
              t);
        }
        function Za(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pa.transition;
          pa.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pa.transition = r);
          }
        }
        function el() {
          return _a().memoizedState;
        }
        function tl(e, t, n) {
          var r = ts(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(e))
          )
            ol(t, n);
          else if (null !== (n = Li(e, t, n, r))) {
            ns(n, e, r, es()), il(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = ts(e),
            o = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(e)) ol(t, o);
          else {
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var a = t.lastRenderedState,
                  l = i(a, n);
                if (((o.hasEagerState = !0), (o.eagerState = l), lr(l, a))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((o.next = o), Ti(t))
                      : ((o.next = u.next), (u.next = o)),
                    void (t.interleaved = o)
                  );
                }
              } catch (s) {}
            null !== (n = Li(e, t, o, r)) &&
              (ns(n, e, r, (o = es())), il(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === va || (null !== t && t === va);
        }
        function ol(e, t) {
          ba = ya = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function il(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var al = {
            readContext: Oi,
            useCallback: xa,
            useContext: xa,
            useEffect: xa,
            useImperativeHandle: xa,
            useInsertionEffect: xa,
            useLayoutEffect: xa,
            useMemo: xa,
            useReducer: xa,
            useRef: xa,
            useState: xa,
            useDebugValue: xa,
            useDeferredValue: xa,
            useTransition: xa,
            useMutableSource: xa,
            useSyncExternalStore: xa,
            useId: xa,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: Oi,
            useCallback: function (e, t) {
              return (Oa().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Oi,
            useEffect: $a,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ha(4194308, 4, Ya.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ha(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ha(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Oa();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Oa();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tl.bind(null, va, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Oa().memoizedState = e);
            },
            useState: za,
            useDebugValue: Qa,
            useDeferredValue: function (e) {
              return (Oa().memoizedState = e);
            },
            useTransition: function () {
              var e = za(!1),
                t = e[0];
              return (
                (e = Za.bind(null, e[1])), (Oa().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = va,
                o = Oa();
              if (ii) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === Lu)) throw Error(i(349));
                0 !== (30 & ha) || Ia(r, t, n);
              }
              o.memoizedState = n;
              var a = { value: n, getSnapshot: t };
              return (
                (o.queue = a),
                $a(Da.bind(null, r, a, e), [e]),
                (r.flags |= 2048),
                Ba(9, Aa.bind(null, r, a, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Oa(),
                t = Lu.identifierPrefix;
              if (ii) {
                var n = Jo;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Xo & ~(1 << (32 - at(Xo) - 1))).toString(32) + n)),
                  0 < (n = wa++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = Sa++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: Oi,
            useCallback: qa,
            useContext: Oi,
            useEffect: Ka,
            useImperativeHandle: Ga,
            useInsertionEffect: Wa,
            useLayoutEffect: Va,
            useMemo: Xa,
            useReducer: La,
            useRef: Fa,
            useState: function () {
              return La(Ta);
            },
            useDebugValue: Qa,
            useDeferredValue: function (e) {
              return Ja(_a(), ma.memoizedState, e);
            },
            useTransition: function () {
              return [La(Ta)[0], _a().memoizedState];
            },
            useMutableSource: Pa,
            useSyncExternalStore: ja,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: Oi,
            useCallback: qa,
            useContext: Oi,
            useEffect: Ka,
            useImperativeHandle: Ga,
            useInsertionEffect: Wa,
            useLayoutEffect: Va,
            useMemo: Xa,
            useReducer: Na,
            useRef: Fa,
            useState: function () {
              return Na(Ta);
            },
            useDebugValue: Qa,
            useDeferredValue: function (e) {
              var t = _a();
              return null === ma
                ? (t.memoizedState = e)
                : Ja(t, ma.memoizedState, e);
            },
            useTransition: function () {
              return [Na(Ta)[0], _a().memoizedState];
            },
            useMutableSource: Pa,
            useSyncExternalStore: ja,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += H(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (i) {
            o = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: o, digest: null };
        }
        function fl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function dl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pl = "function" === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, n) {
          ((n = Ai(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Ku || ((Ku = !0), (Wu = r)), dl(0, t);
            }),
            n
          );
        }
        function vl(e, t, n) {
          (n = Ai(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var o = t.value;
            (n.payload = function () {
              return r(o);
            }),
              (n.callback = function () {
                dl(0, t);
              });
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                dl(0, t),
                  "function" !== typeof r &&
                    (null === Vu ? (Vu = new Set([this])) : Vu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ml(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) || (o.add(n), (e = Cs.bind(null, e, t, n)), t.then(e, e));
        }
        function gl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yl(e, t, n, r, o) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ai(-1, 1)).tag = 2), Di(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = o), e);
        }
        var bl = w.ReactCurrentOwner,
          wl = !1;
        function Sl(e, t, n, r) {
          t.child = null === e ? Ji(t, null, n, r) : Xi(t, e.child, n, r);
        }
        function xl(e, t, n, r, o) {
          n = n.render;
          var i = t.ref;
          return (
            Ci(t, o),
            (r = ka(e, t, n, r, i, o)),
            (n = Ca()),
            null === e || wl
              ? (ii && n && ti(t), (t.flags |= 1), Sl(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Kl(e, t, o))
          );
        }
        function El(e, t, n, r, o) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              js(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = As(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), kl(e, t, i, r, o));
          }
          if (((i = e.child), 0 === (e.lanes & o))) {
            var a = i.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(a, r) &&
              e.ref === t.ref
            )
              return Kl(e, t, o);
          }
          return (
            (t.flags |= 1),
            ((e = Is(i, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function kl(e, t, n, r, o) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (ur(i, r) && e.ref === t.ref) {
              if (((wl = !1), (t.pendingProps = r = i), 0 === (e.lanes & o)))
                return (t.lanes = e.lanes), Kl(e, t, o);
              0 !== (131072 & e.flags) && (wl = !0);
            }
          }
          return _l(e, t, n, r, o);
        }
        function Cl(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                _o(Iu, ju),
                (ju |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  _o(Iu, ju),
                  (ju |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== i ? i.baseLanes : n),
                _o(Iu, ju),
                (ju |= r);
            }
          else
            null !== i
              ? ((r = i.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              _o(Iu, ju),
              (ju |= r);
          return Sl(e, t, o, n), t.child;
        }
        function Ol(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function _l(e, t, n, r, o) {
          var i = Io(n) ? Po : Lo.current;
          return (
            (i = jo(t, i)),
            Ci(t, o),
            (n = ka(e, t, n, r, i, o)),
            (r = Ca()),
            null === e || wl
              ? (ii && r && ti(t), (t.flags |= 1), Sl(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Kl(e, t, o))
          );
        }
        function Tl(e, t, n, r, o) {
          if (Io(n)) {
            var i = !0;
            Ro(t);
          } else i = !1;
          if ((Ci(t, o), null === t.stateNode))
            $l(e, t), Ki(t, n, r), Vi(t, n, r, o), (r = !0);
          else if (null === e) {
            var a = t.stateNode,
              l = t.memoizedProps;
            a.props = l;
            var u = a.context,
              s = n.contextType;
            "object" === typeof s && null !== s
              ? (s = Oi(s))
              : (s = jo(t, (s = Io(n) ? Po : Lo.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof a.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof a.componentWillReceiveProps) ||
              ((l !== r || u !== s) && Wi(t, a, r, s)),
              (Pi = !1);
            var d = t.memoizedState;
            (a.state = d),
              zi(t, r, a, o),
              (u = t.memoizedState),
              l !== r || d !== u || No.current || Pi
                ? ("function" === typeof c &&
                    (Hi(t, n, c, r), (u = t.memoizedState)),
                  (l = Pi || $i(t, n, l, r, d, u, s))
                    ? (f ||
                        ("function" !== typeof a.UNSAFE_componentWillMount &&
                          "function" !== typeof a.componentWillMount) ||
                        ("function" === typeof a.componentWillMount &&
                          a.componentWillMount(),
                        "function" === typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()),
                      "function" === typeof a.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof a.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (a.props = r),
                  (a.state = u),
                  (a.context = s),
                  (r = l))
                : ("function" === typeof a.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (a = t.stateNode),
              Ii(e, t),
              (l = t.memoizedProps),
              (s = t.type === t.elementType ? l : gi(t.type, l)),
              (a.props = s),
              (f = t.pendingProps),
              (d = a.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = Oi(u))
                : (u = jo(t, (u = Io(n) ? Po : Lo.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof a.getSnapshotBeforeUpdate) ||
              ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof a.componentWillReceiveProps) ||
              ((l !== f || d !== u) && Wi(t, a, r, u)),
              (Pi = !1),
              (d = t.memoizedState),
              (a.state = d),
              zi(t, r, a, o);
            var h = t.memoizedState;
            l !== f || d !== h || No.current || Pi
              ? ("function" === typeof p &&
                  (Hi(t, n, p, r), (h = t.memoizedState)),
                (s = Pi || $i(t, n, s, r, d, h, u) || !1)
                  ? (c ||
                      ("function" !== typeof a.UNSAFE_componentWillUpdate &&
                        "function" !== typeof a.componentWillUpdate) ||
                      ("function" === typeof a.componentWillUpdate &&
                        a.componentWillUpdate(r, h, u),
                      "function" === typeof a.UNSAFE_componentWillUpdate &&
                        a.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" === typeof a.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof a.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof a.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof a.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (a.props = r),
                (a.state = h),
                (a.context = u),
                (r = s))
              : ("function" !== typeof a.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof a.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Ll(e, t, n, r, i, o);
        }
        function Ll(e, t, n, r, o, i) {
          Ol(e, t);
          var a = 0 !== (128 & t.flags);
          if (!r && !a) return o && zo(t, n, !1), Kl(e, t, i);
          (r = t.stateNode), (bl.current = t);
          var l =
            a && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && a
              ? ((t.child = Xi(t, e.child, null, i)),
                (t.child = Xi(t, null, l, i)))
              : Sl(e, t, l, i),
            (t.memoizedState = r.state),
            o && zo(t, n, !0),
            t.child
          );
        }
        function Nl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Do(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Do(0, t.context, !1),
            oa(e, t.containerInfo);
        }
        function Pl(e, t, n, r, o) {
          return hi(), vi(o), (t.flags |= 256), Sl(e, t, n, r), t.child;
        }
        var jl,
          Il,
          Al,
          Dl = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ml(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Rl(e, t, n) {
          var r,
            o = t.pendingProps,
            a = ua.current,
            l = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & a)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (a |= 1),
            _o(ua, 1 & a),
            null === e)
          )
            return (
              ci(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = o.children),
                  (e = o.fallback),
                  l
                    ? ((o = t.mode),
                      (l = t.child),
                      (u = { mode: "hidden", children: u }),
                      0 === (1 & o) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = u))
                        : (l = Ms(u, o, 0, null)),
                      (e = Ds(e, o, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Ml(n)),
                      (t.memoizedState = Dl),
                      e)
                    : zl(t, u))
            );
          if (null !== (a = e.memoizedState) && null !== (r = a.dehydrated))
            return (function (e, t, n, r, o, a, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Bl(e, t, l, (r = fl(Error(i(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((a = r.fallback),
                    (o = t.mode),
                    (r = Ms(
                      { mode: "visible", children: r.children },
                      o,
                      0,
                      null
                    )),
                    ((a = Ds(a, o, l, null)).flags |= 2),
                    (r.return = t),
                    (a.return = t),
                    (r.sibling = a),
                    (t.child = r),
                    0 !== (1 & t.mode) && Xi(t, e.child, null, l),
                    (t.child.memoizedState = Ml(l)),
                    (t.memoizedState = Dl),
                    a);
              if (0 === (1 & t.mode)) return Bl(e, t, l, null);
              if ("$!" === o.data) {
                if ((r = o.nextSibling && o.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Bl(e, t, l, (r = fl((a = Error(i(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (l & e.childLanes)), wl || u)) {
                if (null !== (r = Lu)) {
                  switch (l & -l) {
                    case 4:
                      o = 2;
                      break;
                    case 16:
                      o = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      o = 32;
                      break;
                    case 536870912:
                      o = 268435456;
                      break;
                    default:
                      o = 0;
                  }
                  0 !== (o = 0 !== (o & (r.suspendedLanes | l)) ? 0 : o) &&
                    o !== a.retryLane &&
                    ((a.retryLane = o), Ni(e, o), ns(r, e, o, -1));
                }
                return vs(), Bl(e, t, l, (r = fl(Error(i(421)))));
              }
              return "$?" === o.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = _s.bind(null, e)),
                  (o._reactRetry = t),
                  null)
                : ((e = a.treeContext),
                  (oi = so(o.nextSibling)),
                  (ri = t),
                  (ii = !0),
                  (ai = null),
                  null !== e &&
                    ((Go[Qo++] = Xo),
                    (Go[Qo++] = Jo),
                    (Go[Qo++] = qo),
                    (Xo = e.id),
                    (Jo = e.overflow),
                    (qo = t)),
                  (t = zl(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, u, o, r, a, n);
          if (l) {
            (l = o.fallback), (u = t.mode), (r = (a = e.child).sibling);
            var s = { mode: "hidden", children: o.children };
            return (
              0 === (1 & u) && t.child !== a
                ? (((o = t.child).childLanes = 0),
                  (o.pendingProps = s),
                  (t.deletions = null))
                : ((o = Is(a, s)).subtreeFlags = 14680064 & a.subtreeFlags),
              null !== r
                ? (l = Is(r, l))
                : ((l = Ds(l, u, n, null)).flags |= 2),
              (l.return = t),
              (o.return = t),
              (o.sibling = l),
              (t.child = o),
              (o = l),
              (l = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Ml(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (l.memoizedState = u),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Dl),
              o
            );
          }
          return (
            (e = (l = e.child).sibling),
            (o = Is(l, { mode: "visible", children: o.children })),
            0 === (1 & t.mode) && (o.lanes = n),
            (o.return = t),
            (o.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = o),
            (t.memoizedState = null),
            o
          );
        }
        function zl(e, t) {
          return (
            ((t = Ms(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Bl(e, t, n, r) {
          return (
            null !== r && vi(r),
            Xi(t, e.child, null, n),
            ((e = zl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Fl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), ki(e.return, t, n);
        }
        function Hl(e, t, n, r, o) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = o));
        }
        function Ul(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            i = r.tail;
          if ((Sl(e, t, r.children, n), 0 !== (2 & (r = ua.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Fl(e, n, t);
                else if (19 === e.tag) Fl(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((_o(ua, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case "forwards":
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === sa(e) && (o = n),
                    (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  Hl(t, !1, o, n, i);
                break;
              case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === sa(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                Hl(t, !0, n, null, i);
                break;
              case "together":
                Hl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function $l(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Kl(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Mu |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Is((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Is(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Wl(e, t) {
          if (!ii)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Vl(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= 14680064 & o.subtreeFlags),
                (r |= 14680064 & o.flags),
                (o.return = e),
                (o = o.sibling);
          else
            for (o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Yl(e, t, n) {
          var r = t.pendingProps;
          switch ((ni(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Vl(t), null;
            case 1:
            case 17:
              return Io(t.type) && Ao(), Vl(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ia(),
                Oo(No),
                Oo(Lo),
                fa(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (di(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ai && (as(ai), (ai = null)))),
                Vl(t),
                null
              );
            case 5:
              la(t);
              var o = ra(na.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Il(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return Vl(t), null;
                }
                if (((e = ra(ea.current)), di(t))) {
                  (r = t.stateNode), (n = t.type);
                  var a = t.memoizedProps;
                  switch (
                    ((r[po] = t), (r[ho] = a), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Br("cancel", r), Br("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Br("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (o = 0; o < Dr.length; o++) Br(Dr[o], r);
                      break;
                    case "source":
                      Br("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Br("error", r), Br("load", r);
                      break;
                    case "details":
                      Br("toggle", r);
                      break;
                    case "input":
                      q(r, a), Br("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!a.multiple }),
                        Br("invalid", r);
                      break;
                    case "textarea":
                      oe(r, a), Br("invalid", r);
                  }
                  for (var u in (ye(n, a), (o = null), a))
                    if (a.hasOwnProperty(u)) {
                      var s = a[u];
                      "children" === u
                        ? "string" === typeof s
                          ? r.textContent !== s &&
                            (!0 !== a.suppressHydrationWarning &&
                              Jr(r.textContent, s, e),
                            (o = ["children", s]))
                          : "number" === typeof s &&
                            r.textContent !== "" + s &&
                            (!0 !== a.suppressHydrationWarning &&
                              Jr(r.textContent, s, e),
                            (o = ["children", "" + s]))
                        : l.hasOwnProperty(u) &&
                          null != s &&
                          "onScroll" === u &&
                          Br("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      V(r), Z(r, a, !0);
                      break;
                    case "textarea":
                      V(r), ae(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof a.onClick && (r.onclick = Zr);
                  }
                  (r = o), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === o.nodeType ? o : o.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[po] = t),
                    (e[ho] = r),
                    jl(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case "dialog":
                        Br("cancel", e), Br("close", e), (o = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Br("load", e), (o = r);
                        break;
                      case "video":
                      case "audio":
                        for (o = 0; o < Dr.length; o++) Br(Dr[o], e);
                        o = r;
                        break;
                      case "source":
                        Br("error", e), (o = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Br("error", e), Br("load", e), (o = r);
                        break;
                      case "details":
                        Br("toggle", e), (o = r);
                        break;
                      case "input":
                        q(e, r), (o = Q(e, r)), Br("invalid", e);
                        break;
                      case "option":
                      default:
                        o = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (o = R({}, r, { value: void 0 })),
                          Br("invalid", e);
                        break;
                      case "textarea":
                        oe(e, r), (o = re(e, r)), Br("invalid", e);
                    }
                    for (a in (ye(n, o), (s = o)))
                      if (s.hasOwnProperty(a)) {
                        var c = s[a];
                        "style" === a
                          ? me(e, c)
                          : "dangerouslySetInnerHTML" === a
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === a
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== a &&
                            "suppressHydrationWarning" !== a &&
                            "autoFocus" !== a &&
                            (l.hasOwnProperty(a)
                              ? null != c && "onScroll" === a && Br("scroll", e)
                              : null != c && b(e, a, c, u));
                      }
                    switch (n) {
                      case "input":
                        V(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        V(e), ae(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + K(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (a = r.value)
                            ? ne(e, !!r.multiple, a, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof o.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Vl(t), null;
            case 6:
              if (e && null != t.stateNode) Al(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(i(166));
                if (((n = ra(na.current)), ra(ea.current), di(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[po] = t),
                    (a = r.nodeValue !== n) && null !== (e = ri))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  a && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[po] = t),
                    (t.stateNode = r);
              }
              return Vl(t), null;
            case 13:
              if (
                (Oo(ua),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ii &&
                  null !== oi &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  pi(), hi(), (t.flags |= 98560), (a = !1);
                else if (((a = di(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!a) throw Error(i(318));
                    if (
                      !(a =
                        null !== (a = t.memoizedState) ? a.dehydrated : null)
                    )
                      throw Error(i(317));
                    a[po] = t;
                  } else
                    hi(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Vl(t), (a = !1);
                } else null !== ai && (as(ai), (ai = null)), (a = !0);
                if (!a) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ua.current)
                        ? 0 === Au && (Au = 3)
                        : vs())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Vl(t),
                  null);
            case 4:
              return (
                ia(), null === e && Ur(t.stateNode.containerInfo), Vl(t), null
              );
            case 10:
              return Ei(t.type._context), Vl(t), null;
            case 19:
              if ((Oo(ua), null === (a = t.memoizedState))) return Vl(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = a.rendering)))
                if (r) Wl(a, !1);
                else {
                  if (0 !== Au || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = sa(e))) {
                        for (
                          t.flags |= 128,
                            Wl(a, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((a = n).flags &= 14680066),
                            null === (u = a.alternate)
                              ? ((a.childLanes = 0),
                                (a.lanes = e),
                                (a.child = null),
                                (a.subtreeFlags = 0),
                                (a.memoizedProps = null),
                                (a.memoizedState = null),
                                (a.updateQueue = null),
                                (a.dependencies = null),
                                (a.stateNode = null))
                              : ((a.childLanes = u.childLanes),
                                (a.lanes = u.lanes),
                                (a.child = u.child),
                                (a.subtreeFlags = 0),
                                (a.deletions = null),
                                (a.memoizedProps = u.memoizedProps),
                                (a.memoizedState = u.memoizedState),
                                (a.updateQueue = u.updateQueue),
                                (a.type = u.type),
                                (e = u.dependencies),
                                (a.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return _o(ua, (1 & ua.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== a.tail &&
                    Xe() > Uu &&
                    ((t.flags |= 128),
                    (r = !0),
                    Wl(a, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = sa(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Wl(a, !0),
                      null === a.tail &&
                        "hidden" === a.tailMode &&
                        !u.alternate &&
                        !ii)
                    )
                      return Vl(t), null;
                  } else
                    2 * Xe() - a.renderingStartTime > Uu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Wl(a, !1),
                      (t.lanes = 4194304));
                a.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = a.last) ? (n.sibling = u) : (t.child = u),
                    (a.last = u));
              }
              return null !== a.tail
                ? ((t = a.tail),
                  (a.rendering = t),
                  (a.tail = t.sibling),
                  (a.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = ua.current),
                  _o(ua, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Vl(t), null);
            case 22:
            case 23:
              return (
                fs(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & ju) &&
                    (Vl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Vl(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function Gl(e, t) {
          switch ((ni(t), t.tag)) {
            case 1:
              return (
                Io(t.type) && Ao(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ia(),
                Oo(No),
                Oo(Lo),
                fa(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return la(t), null;
            case 13:
              if (
                (Oo(ua),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                hi();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Oo(ua), null;
            case 4:
              return ia(), null;
            case 10:
              return Ei(t.type._context), null;
            case 22:
            case 23:
              return fs(), null;
            default:
              return null;
          }
        }
        (jl = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Il = function (e, t, n, r) {
            var o = e.memoizedProps;
            if (o !== r) {
              (e = t.stateNode), ra(ea.current);
              var i,
                a = null;
              switch (n) {
                case "input":
                  (o = Q(e, o)), (r = Q(e, r)), (a = []);
                  break;
                case "select":
                  (o = R({}, o, { value: void 0 })),
                    (r = R({}, r, { value: void 0 })),
                    (a = []);
                  break;
                case "textarea":
                  (o = re(e, o)), (r = re(e, r)), (a = []);
                  break;
                default:
                  "function" !== typeof o.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ye(n, r), (n = null), o))
                if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
                  if ("style" === c) {
                    var u = o[c];
                    for (i in u)
                      u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (l.hasOwnProperty(c)
                        ? a || (a = [])
                        : (a = a || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((u = null != o ? o[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ("style" === c)
                    if (u) {
                      for (i in u)
                        !u.hasOwnProperty(i) ||
                          (s && s.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in s)
                        s.hasOwnProperty(i) &&
                          u[i] !== s[i] &&
                          (n || (n = {}), (n[i] = s[i]));
                    } else n || (a || (a = []), a.push(c, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (a = a || []).push(c, s))
                      : "children" === c
                      ? ("string" !== typeof s && "number" !== typeof s) ||
                        (a = a || []).push(c, "" + s)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (l.hasOwnProperty(c)
                          ? (null != s && "onScroll" === c && Br("scroll", e),
                            a || u === s || (a = []))
                          : (a = a || []).push(c, s));
              }
              n && (a = a || []).push("style", n);
              var c = a;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Al = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Ql = !1,
          ql = !1,
          Xl = "function" === typeof WeakSet ? WeakSet : Set,
          Jl = null;
        function Zl(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                ks(e, t, r);
              }
            else n.current = null;
        }
        function eu(e, t, n) {
          try {
            n();
          } catch (r) {
            ks(e, t, r);
          }
        }
        var tu = !1;
        function nu(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var o = (r = r.next);
            do {
              if ((o.tag & e) === e) {
                var i = o.destroy;
                (o.destroy = void 0), void 0 !== i && eu(t, n, i);
              }
              o = o.next;
            } while (o !== r);
          }
        }
        function ru(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ou(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function iu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), iu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[po],
              delete t[ho],
              delete t[mo],
              delete t[go],
              delete t[yo]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function au(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function lu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || au(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function uu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (uu(e, t, n), e = e.sibling; null !== e; )
              uu(e, t, n), (e = e.sibling);
        }
        function su(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; )
              su(e, t, n), (e = e.sibling);
        }
        var cu = null,
          fu = !1;
        function du(e, t, n) {
          for (n = n.child; null !== n; ) pu(e, t, n), (n = n.sibling);
        }
        function pu(e, t, n) {
          if (it && "function" === typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(ot, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              ql || Zl(n, t);
            case 6:
              var r = cu,
                o = fu;
              (cu = null),
                du(e, t, n),
                (fu = o),
                null !== (cu = r) &&
                  (fu
                    ? ((e = cu),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cu.removeChild(n.stateNode));
              break;
            case 18:
              null !== cu &&
                (fu
                  ? ((e = cu),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? uo(e.parentNode, n)
                      : 1 === e.nodeType && uo(e, n),
                    Ut(e))
                  : uo(cu, n.stateNode));
              break;
            case 4:
              (r = cu),
                (o = fu),
                (cu = n.stateNode.containerInfo),
                (fu = !0),
                du(e, t, n),
                (cu = r),
                (fu = o);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !ql &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                o = r = r.next;
                do {
                  var i = o,
                    a = i.destroy;
                  (i = i.tag),
                    void 0 !== a &&
                      (0 !== (2 & i) || 0 !== (4 & i)) &&
                      eu(n, t, a),
                    (o = o.next);
                } while (o !== r);
              }
              du(e, t, n);
              break;
            case 1:
              if (
                !ql &&
                (Zl(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  ks(n, t, l);
                }
              du(e, t, n);
              break;
            case 21:
              du(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((ql = (r = ql) || null !== n.memoizedState),
                  du(e, t, n),
                  (ql = r))
                : du(e, t, n);
              break;
            default:
              du(e, t, n);
          }
        }
        function hu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xl()),
              t.forEach(function (t) {
                var r = Ts.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function vu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var o = n[r];
              try {
                var a = e,
                  l = t,
                  u = l;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (cu = u.stateNode), (fu = !1);
                      break e;
                    case 3:
                    case 4:
                      (cu = u.stateNode.containerInfo), (fu = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === cu) throw Error(i(160));
                pu(a, l, o), (cu = null), (fu = !1);
                var s = o.alternate;
                null !== s && (s.return = null), (o.return = null);
              } catch (c) {
                ks(o, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) mu(t, e), (t = t.sibling);
        }
        function mu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((vu(t, e), gu(e), 4 & r)) {
                try {
                  nu(3, e, e.return), ru(3, e);
                } catch (m) {
                  ks(e, e.return, m);
                }
                try {
                  nu(5, e, e.return);
                } catch (m) {
                  ks(e, e.return, m);
                }
              }
              break;
            case 1:
              vu(t, e), gu(e), 512 & r && null !== n && Zl(n, n.return);
              break;
            case 5:
              if (
                (vu(t, e),
                gu(e),
                512 & r && null !== n && Zl(n, n.return),
                32 & e.flags)
              ) {
                var o = e.stateNode;
                try {
                  de(o, "");
                } catch (m) {
                  ks(e, e.return, m);
                }
              }
              if (4 & r && null != (o = e.stateNode)) {
                var a = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : a,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === u &&
                      "radio" === a.type &&
                      null != a.name &&
                      X(o, a),
                      be(u, l);
                    var c = be(u, a);
                    for (l = 0; l < s.length; l += 2) {
                      var f = s[l],
                        d = s[l + 1];
                      "style" === f
                        ? me(o, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(o, d)
                        : "children" === f
                        ? de(o, d)
                        : b(o, f, d, c);
                    }
                    switch (u) {
                      case "input":
                        J(o, a);
                        break;
                      case "textarea":
                        ie(o, a);
                        break;
                      case "select":
                        var p = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!a.multiple;
                        var h = a.value;
                        null != h
                          ? ne(o, !!a.multiple, h, !1)
                          : p !== !!a.multiple &&
                            (null != a.defaultValue
                              ? ne(o, !!a.multiple, a.defaultValue, !0)
                              : ne(o, !!a.multiple, a.multiple ? [] : "", !1));
                    }
                    o[ho] = a;
                  } catch (m) {
                    ks(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((vu(t, e), gu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                (o = e.stateNode), (a = e.memoizedProps);
                try {
                  o.nodeValue = a;
                } catch (m) {
                  ks(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                (vu(t, e),
                gu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ut(t.containerInfo);
                } catch (m) {
                  ks(e, e.return, m);
                }
              break;
            case 4:
            default:
              vu(t, e), gu(e);
              break;
            case 13:
              vu(t, e),
                gu(e),
                8192 & (o = e.child).flags &&
                  ((a = null !== o.memoizedState),
                  (o.stateNode.isHidden = a),
                  !a ||
                    (null !== o.alternate &&
                      null !== o.alternate.memoizedState) ||
                    (Hu = Xe())),
                4 & r && hu(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((ql = (c = ql) || f), vu(t, e), (ql = c))
                  : vu(t, e),
                gu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Jl = e, f = e.child; null !== f; ) {
                    for (d = Jl = f; null !== Jl; ) {
                      switch (((h = (p = Jl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nu(4, p, p.return);
                          break;
                        case 1:
                          Zl(p, p.return);
                          var v = p.stateNode;
                          if ("function" === typeof v.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (v.props = t.memoizedProps),
                                (v.state = t.memoizedState),
                                v.componentWillUnmount();
                            } catch (m) {
                              ks(r, n, m);
                            }
                          }
                          break;
                        case 5:
                          Zl(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            Su(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Jl = h)) : Su(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (o = d.stateNode),
                          c
                            ? "function" === typeof (a = o.style).setProperty
                              ? a.setProperty("display", "none", "important")
                              : (a.display = "none")
                            : ((u = d.stateNode),
                              (l =
                                void 0 !== (s = d.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty("display")
                                  ? s.display
                                  : null),
                              (u.style.display = ve("display", l)));
                      } catch (m) {
                        ks(e, e.return, m);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (m) {
                        ks(e, e.return, m);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              vu(t, e), gu(e), 4 & r && hu(e);
            case 21:
          }
        }
        function gu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (au(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(i(160));
              }
              switch (r.tag) {
                case 5:
                  var o = r.stateNode;
                  32 & r.flags && (de(o, ""), (r.flags &= -33)),
                    su(e, lu(e), o);
                  break;
                case 3:
                case 4:
                  var a = r.stateNode.containerInfo;
                  uu(e, lu(e), a);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (l) {
              ks(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function yu(e, t, n) {
          (Jl = e), bu(e, t, n);
        }
        function bu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Jl; ) {
            var o = Jl,
              i = o.child;
            if (22 === o.tag && r) {
              var a = null !== o.memoizedState || Ql;
              if (!a) {
                var l = o.alternate,
                  u = (null !== l && null !== l.memoizedState) || ql;
                l = Ql;
                var s = ql;
                if (((Ql = a), (ql = u) && !s))
                  for (Jl = o; null !== Jl; )
                    (u = (a = Jl).child),
                      22 === a.tag && null !== a.memoizedState
                        ? xu(o)
                        : null !== u
                        ? ((u.return = a), (Jl = u))
                        : xu(o);
                for (; null !== i; ) (Jl = i), bu(i, t, n), (i = i.sibling);
                (Jl = o), (Ql = l), (ql = s);
              }
              wu(e);
            } else
              0 !== (8772 & o.subtreeFlags) && null !== i
                ? ((i.return = o), (Jl = i))
                : wu(e);
          }
        }
        function wu(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ql || ru(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !ql)
                        if (null === n) r.componentDidMount();
                        else {
                          var o =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : gi(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            o,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var a = t.updateQueue;
                      null !== a && Bi(t, a, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Bi(t, l, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var s = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            s.autoFocus && n.focus();
                            break;
                          case "img":
                            s.src && (n.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Ut(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                ql || (512 & t.flags && ou(t));
              } catch (p) {
                ks(t, t.return, p);
              }
            }
            if (t === e) {
              Jl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function Su(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (t === e) {
              Jl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function xu(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    ru(4, t);
                  } catch (u) {
                    ks(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var o = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      ks(t, o, u);
                    }
                  }
                  var i = t.return;
                  try {
                    ou(t);
                  } catch (u) {
                    ks(t, i, u);
                  }
                  break;
                case 5:
                  var a = t.return;
                  try {
                    ou(t);
                  } catch (u) {
                    ks(t, a, u);
                  }
              }
            } catch (u) {
              ks(t, t.return, u);
            }
            if (t === e) {
              Jl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Jl = l);
              break;
            }
            Jl = t.return;
          }
        }
        var Eu,
          ku = Math.ceil,
          Cu = w.ReactCurrentDispatcher,
          Ou = w.ReactCurrentOwner,
          _u = w.ReactCurrentBatchConfig,
          Tu = 0,
          Lu = null,
          Nu = null,
          Pu = 0,
          ju = 0,
          Iu = Co(0),
          Au = 0,
          Du = null,
          Mu = 0,
          Ru = 0,
          zu = 0,
          Bu = null,
          Fu = null,
          Hu = 0,
          Uu = 1 / 0,
          $u = null,
          Ku = !1,
          Wu = null,
          Vu = null,
          Yu = !1,
          Gu = null,
          Qu = 0,
          qu = 0,
          Xu = null,
          Ju = -1,
          Zu = 0;
        function es() {
          return 0 !== (6 & Tu) ? Xe() : -1 !== Ju ? Ju : (Ju = Xe());
        }
        function ts(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Tu) && 0 !== Pu
            ? Pu & -Pu
            : null !== mi.transition
            ? (0 === Zu && (Zu = vt()), Zu)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : qt(e.type));
        }
        function ns(e, t, n, r) {
          if (50 < qu) throw ((qu = 0), (Xu = null), Error(i(185)));
          gt(e, n, r),
            (0 !== (2 & Tu) && e === Lu) ||
              (e === Lu && (0 === (2 & Tu) && (Ru |= n), 4 === Au && ls(e, Pu)),
              rs(e, r),
              1 === n &&
                0 === Tu &&
                0 === (1 & t.mode) &&
                ((Uu = Xe() + 500), Fo && $o()));
        }
        function rs(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                o = e.expirationTimes,
                i = e.pendingLanes;
              0 < i;

            ) {
              var a = 31 - at(i),
                l = 1 << a,
                u = o[a];
              -1 === u
                ? (0 !== (l & n) && 0 === (l & r)) || (o[a] = pt(l, t))
                : u <= t && (e.expiredLanes |= l),
                (i &= ~l);
            }
          })(e, t);
          var r = dt(e, e === Lu ? Pu : 0);
          if (0 === r)
            null !== n && Ge(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ge(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Fo = !0), Uo(e);
                  })(us.bind(null, e))
                : Uo(us.bind(null, e)),
                ao(function () {
                  0 === (6 & Tu) && $o();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ls(n, os.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function os(e, t) {
          if (((Ju = -1), (Zu = 0), 0 !== (6 & Tu))) throw Error(i(327));
          var n = e.callbackNode;
          if (xs() && e.callbackNode !== n) return null;
          var r = dt(e, e === Lu ? Pu : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = ms(e, r);
          else {
            t = r;
            var o = Tu;
            Tu |= 2;
            var a = hs();
            for (
              (Lu === e && Pu === t) ||
              (($u = null), (Uu = Xe() + 500), ds(e, t));
              ;

            )
              try {
                ys();
                break;
              } catch (u) {
                ps(e, u);
              }
            xi(),
              (Cu.current = a),
              (Tu = o),
              null !== Nu ? (t = 0) : ((Lu = null), (Pu = 0), (t = Au));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (o = ht(e)) && ((r = o), (t = is(e, o))),
              1 === t)
            )
              throw ((n = Du), ds(e, 0), ls(e, r), rs(e, Xe()), n);
            if (6 === t) ls(e, r);
            else {
              if (
                ((o = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var o = n[r],
                              i = o.getSnapshot;
                            o = o.value;
                            try {
                              if (!lr(i(), o)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(o) &&
                  (2 === (t = ms(e, r)) &&
                    0 !== (a = ht(e)) &&
                    ((r = a), (t = is(e, a))),
                  1 === t))
              )
                throw ((n = Du), ds(e, 0), ls(e, r), rs(e, Xe()), n);
              switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  Ss(e, Fu, $u);
                  break;
                case 3:
                  if (
                    (ls(e, r),
                    (130023424 & r) === r && 10 < (t = Hu + 500 - Xe()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((o = e.suspendedLanes) & r) !== r) {
                      es(), (e.pingedLanes |= e.suspendedLanes & o);
                      break;
                    }
                    e.timeoutHandle = ro(Ss.bind(null, e, Fu, $u), t);
                    break;
                  }
                  Ss(e, Fu, $u);
                  break;
                case 4:
                  if ((ls(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, o = -1; 0 < r; ) {
                    var l = 31 - at(r);
                    (a = 1 << l), (l = t[l]) > o && (o = l), (r &= ~a);
                  }
                  if (
                    ((r = o),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * ku(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ro(Ss.bind(null, e, Fu, $u), r);
                    break;
                  }
                  Ss(e, Fu, $u);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return rs(e, Xe()), e.callbackNode === n ? os.bind(null, e) : null;
        }
        function is(e, t) {
          var n = Bu;
          return (
            e.current.memoizedState.isDehydrated && (ds(e, t).flags |= 256),
            2 !== (e = ms(e, t)) && ((t = Fu), (Fu = n), null !== t && as(t)),
            e
          );
        }
        function as(e) {
          null === Fu ? (Fu = e) : Fu.push.apply(Fu, e);
        }
        function ls(e, t) {
          for (
            t &= ~zu,
              t &= ~Ru,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - at(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function us(e) {
          if (0 !== (6 & Tu)) throw Error(i(327));
          xs();
          var t = dt(e, 0);
          if (0 === (1 & t)) return rs(e, Xe()), null;
          var n = ms(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = is(e, r)));
          }
          if (1 === n) throw ((n = Du), ds(e, 0), ls(e, t), rs(e, Xe()), n);
          if (6 === n) throw Error(i(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Ss(e, Fu, $u),
            rs(e, Xe()),
            null
          );
        }
        function ss(e, t) {
          var n = Tu;
          Tu |= 1;
          try {
            return e(t);
          } finally {
            0 === (Tu = n) && ((Uu = Xe() + 500), Fo && $o());
          }
        }
        function cs(e) {
          null !== Gu && 0 === Gu.tag && 0 === (6 & Tu) && xs();
          var t = Tu;
          Tu |= 1;
          var n = _u.transition,
            r = bt;
          try {
            if (((_u.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (_u.transition = n), 0 === (6 & (Tu = t)) && $o();
          }
        }
        function fs() {
          (ju = Iu.current), Oo(Iu);
        }
        function ds(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), oo(n)), null !== Nu))
            for (n = Nu.return; null !== n; ) {
              var r = n;
              switch ((ni(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ao();
                  break;
                case 3:
                  ia(), Oo(No), Oo(Lo), fa();
                  break;
                case 5:
                  la(r);
                  break;
                case 4:
                  ia();
                  break;
                case 13:
                case 19:
                  Oo(ua);
                  break;
                case 10:
                  Ei(r.type._context);
                  break;
                case 22:
                case 23:
                  fs();
              }
              n = n.return;
            }
          if (
            ((Lu = e),
            (Nu = e = Is(e.current, null)),
            (Pu = ju = t),
            (Au = 0),
            (Du = null),
            (zu = Ru = Mu = 0),
            (Fu = Bu = null),
            null !== _i)
          ) {
            for (t = 0; t < _i.length; t++)
              if (null !== (r = (n = _i[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                  i = n.pending;
                if (null !== i) {
                  var a = i.next;
                  (i.next = o), (r.next = a);
                }
                n.pending = r;
              }
            _i = null;
          }
          return e;
        }
        function ps(e, t) {
          for (;;) {
            var n = Nu;
            try {
              if ((xi(), (da.current = al), ya)) {
                for (var r = va.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                ya = !1;
              }
              if (
                ((ha = 0),
                (ga = ma = va = null),
                (ba = !1),
                (wa = 0),
                (Ou.current = null),
                null === n || null === n.return)
              ) {
                (Au = 1), (Du = t), (Nu = null);
                break;
              }
              e: {
                var a = e,
                  l = n.return,
                  u = n,
                  s = t;
                if (
                  ((t = Pu),
                  (u.flags |= 32768),
                  null !== s &&
                    "object" === typeof s &&
                    "function" === typeof s.then)
                ) {
                  var c = s,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = gl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      yl(h, l, u, 0, t),
                      1 & h.mode && ml(a, c, t),
                      (s = c);
                    var v = (t = h).updateQueue;
                    if (null === v) {
                      var m = new Set();
                      m.add(s), (t.updateQueue = m);
                    } else v.add(s);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ml(a, c, t), vs();
                    break e;
                  }
                  s = Error(i(426));
                } else if (ii && 1 & u.mode) {
                  var g = gl(l);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      yl(g, l, u, 0, t),
                      vi(cl(s, u));
                    break e;
                  }
                }
                (a = s = cl(s, u)),
                  4 !== Au && (Au = 2),
                  null === Bu ? (Bu = [a]) : Bu.push(a),
                  (a = l);
                do {
                  switch (a.tag) {
                    case 3:
                      (a.flags |= 65536),
                        (t &= -t),
                        (a.lanes |= t),
                        Ri(a, hl(0, s, t));
                      break e;
                    case 1:
                      u = s;
                      var y = a.type,
                        b = a.stateNode;
                      if (
                        0 === (128 & a.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Vu || !Vu.has(b))))
                      ) {
                        (a.flags |= 65536),
                          (t &= -t),
                          (a.lanes |= t),
                          Ri(a, vl(a, u, t));
                        break e;
                      }
                  }
                  a = a.return;
                } while (null !== a);
              }
              ws(n);
            } catch (w) {
              (t = w), Nu === n && null !== n && (Nu = n = n.return);
              continue;
            }
            break;
          }
        }
        function hs() {
          var e = Cu.current;
          return (Cu.current = al), null === e ? al : e;
        }
        function vs() {
          (0 !== Au && 3 !== Au && 2 !== Au) || (Au = 4),
            null === Lu ||
              (0 === (268435455 & Mu) && 0 === (268435455 & Ru)) ||
              ls(Lu, Pu);
        }
        function ms(e, t) {
          var n = Tu;
          Tu |= 2;
          var r = hs();
          for ((Lu === e && Pu === t) || (($u = null), ds(e, t)); ; )
            try {
              gs();
              break;
            } catch (o) {
              ps(e, o);
            }
          if ((xi(), (Tu = n), (Cu.current = r), null !== Nu))
            throw Error(i(261));
          return (Lu = null), (Pu = 0), Au;
        }
        function gs() {
          for (; null !== Nu; ) bs(Nu);
        }
        function ys() {
          for (; null !== Nu && !Qe(); ) bs(Nu);
        }
        function bs(e) {
          var t = Eu(e.alternate, e, ju);
          (e.memoizedProps = e.pendingProps),
            null === t ? ws(e) : (Nu = t),
            (Ou.current = null);
        }
        function ws(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Yl(n, t, ju))) return void (Nu = n);
            } else {
              if (null !== (n = Gl(n, t)))
                return (n.flags &= 32767), void (Nu = n);
              if (null === e) return (Au = 6), void (Nu = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Nu = t);
            Nu = t = e;
          } while (null !== t);
          0 === Au && (Au = 5);
        }
        function Ss(e, t, n) {
          var r = bt,
            o = _u.transition;
          try {
            (_u.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  xs();
                } while (null !== Gu);
                if (0 !== (6 & Tu)) throw Error(i(327));
                n = e.finishedWork;
                var o = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(i(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var a = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var o = 31 - at(n),
                        i = 1 << o;
                      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
                    }
                  })(e, a),
                  e === Lu && ((Nu = Lu = null), (Pu = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Yu ||
                    ((Yu = !0),
                    Ls(tt, function () {
                      return xs(), null;
                    })),
                  (a = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || a)
                ) {
                  (a = _u.transition), (_u.transition = null);
                  var l = bt;
                  bt = 1;
                  var u = Tu;
                  (Tu |= 4),
                    (Ou.current = null),
                    (function (e, t) {
                      if (((eo = Kt), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var o = r.anchorOffset,
                                a = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, a.nodeType;
                              } catch (S) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== o && 3 !== d.nodeType) ||
                                    (u = l + o),
                                    d !== a ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (s = l + r),
                                    3 === d.nodeType &&
                                      (l += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === o && (u = l),
                                    p === a && ++f === r && (s = l),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === u || -1 === s
                                  ? null
                                  : { start: u, end: s };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        to = { focusedElem: e, selectionRange: n },
                          Kt = !1,
                          Jl = t;
                        null !== Jl;

                      )
                        if (
                          ((e = (t = Jl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Jl = e);
                        else
                          for (; null !== Jl; ) {
                            t = Jl;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var m = v.memoizedProps,
                                        g = v.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : gi(t.type, m),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(i(163));
                                }
                            } catch (S) {
                              ks(t, t.return, S);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Jl = e);
                              break;
                            }
                            Jl = t.return;
                          }
                      (v = tu), (tu = !1);
                    })(e, n),
                    mu(n, e),
                    hr(to),
                    (Kt = !!eo),
                    (to = eo = null),
                    (e.current = n),
                    yu(n, e, o),
                    qe(),
                    (Tu = u),
                    (bt = l),
                    (_u.transition = a);
                } else e.current = n;
                if (
                  (Yu && ((Yu = !1), (Gu = e), (Qu = o)),
                  (a = e.pendingLanes),
                  0 === a && (Vu = null),
                  (function (e) {
                    if (it && "function" === typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(
                          ot,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  rs(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (o = t[n]),
                      r(o.value, { componentStack: o.stack, digest: o.digest });
                if (Ku) throw ((Ku = !1), (e = Wu), (Wu = null), e);
                0 !== (1 & Qu) && 0 !== e.tag && xs(),
                  (a = e.pendingLanes),
                  0 !== (1 & a)
                    ? e === Xu
                      ? qu++
                      : ((qu = 0), (Xu = e))
                    : (qu = 0),
                  $o();
              })(e, t, n, r);
          } finally {
            (_u.transition = o), (bt = r);
          }
          return null;
        }
        function xs() {
          if (null !== Gu) {
            var e = wt(Qu),
              t = _u.transition,
              n = bt;
            try {
              if (((_u.transition = null), (bt = 16 > e ? 16 : e), null === Gu))
                var r = !1;
              else {
                if (((e = Gu), (Gu = null), (Qu = 0), 0 !== (6 & Tu)))
                  throw Error(i(331));
                var o = Tu;
                for (Tu |= 4, Jl = e.current; null !== Jl; ) {
                  var a = Jl,
                    l = a.child;
                  if (0 !== (16 & Jl.flags)) {
                    var u = a.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (Jl = c; null !== Jl; ) {
                          var f = Jl;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nu(8, f, a);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Jl = d);
                          else
                            for (; null !== Jl; ) {
                              var p = (f = Jl).sibling,
                                h = f.return;
                              if ((iu(f), f === c)) {
                                Jl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Jl = p);
                                break;
                              }
                              Jl = h;
                            }
                        }
                      }
                      var v = a.alternate;
                      if (null !== v) {
                        var m = v.child;
                        if (null !== m) {
                          v.child = null;
                          do {
                            var g = m.sibling;
                            (m.sibling = null), (m = g);
                          } while (null !== m);
                        }
                      }
                      Jl = a;
                    }
                  }
                  if (0 !== (2064 & a.subtreeFlags) && null !== l)
                    (l.return = a), (Jl = l);
                  else
                    e: for (; null !== Jl; ) {
                      if (0 !== (2048 & (a = Jl).flags))
                        switch (a.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nu(9, a, a.return);
                        }
                      var y = a.sibling;
                      if (null !== y) {
                        (y.return = a.return), (Jl = y);
                        break e;
                      }
                      Jl = a.return;
                    }
                }
                var b = e.current;
                for (Jl = b; null !== Jl; ) {
                  var w = (l = Jl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== w)
                    (w.return = l), (Jl = w);
                  else
                    e: for (l = b; null !== Jl; ) {
                      if (0 !== (2048 & (u = Jl).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(9, u);
                          }
                        } catch (x) {
                          ks(u, u.return, x);
                        }
                      if (u === l) {
                        Jl = null;
                        break e;
                      }
                      var S = u.sibling;
                      if (null !== S) {
                        (S.return = u.return), (Jl = S);
                        break e;
                      }
                      Jl = u.return;
                    }
                }
                if (
                  ((Tu = o),
                  $o(),
                  it && "function" === typeof it.onPostCommitFiberRoot)
                )
                  try {
                    it.onPostCommitFiberRoot(ot, e);
                  } catch (x) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (_u.transition = t);
            }
          }
          return !1;
        }
        function Es(e, t, n) {
          (e = Di(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
            (t = es()),
            null !== e && (gt(e, 1, t), rs(e, t));
        }
        function ks(e, t, n) {
          if (3 === e.tag) Es(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Es(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Vu || !Vu.has(r)))
                ) {
                  (t = Di(t, (e = vl(t, (e = cl(n, e)), 1)), 1)),
                    (e = es()),
                    null !== t && (gt(t, 1, e), rs(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cs(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = es()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Lu === e &&
              (Pu & n) === n &&
              (4 === Au ||
              (3 === Au && (130023424 & Pu) === Pu && 500 > Xe() - Hu)
                ? ds(e, 0)
                : (zu |= n)),
            rs(e, t);
        }
        function Os(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = es();
          null !== (e = Ni(e, t)) && (gt(e, t, n), rs(e, n));
        }
        function _s(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Os(e, n);
        }
        function Ts(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(i(314));
          }
          null !== r && r.delete(t), Os(e, n);
        }
        function Ls(e, t) {
          return Ye(e, t);
        }
        function Ns(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ps(e, t, n, r) {
          return new Ns(e, t, n, r);
        }
        function js(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Is(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ps(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function As(e, t, n, r, o, a) {
          var l = 2;
          if (((r = e), "function" === typeof e)) js(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case E:
                return Ds(n.children, o, a, t);
              case k:
                (l = 8), (o |= 8);
                break;
              case C:
                return (
                  ((e = Ps(12, n, t, 2 | o)).elementType = C), (e.lanes = a), e
                );
              case L:
                return (
                  ((e = Ps(13, n, t, o)).elementType = L), (e.lanes = a), e
                );
              case N:
                return (
                  ((e = Ps(19, n, t, o)).elementType = N), (e.lanes = a), e
                );
              case I:
                return Ms(n, o, a, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case O:
                      l = 10;
                      break e;
                    case _:
                      l = 9;
                      break e;
                    case T:
                      l = 11;
                      break e;
                    case P:
                      l = 14;
                      break e;
                    case j:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ps(l, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = a),
            t
          );
        }
        function Ds(e, t, n, r) {
          return ((e = Ps(7, e, r, t)).lanes = n), e;
        }
        function Ms(e, t, n, r) {
          return (
            ((e = Ps(22, e, r, t)).elementType = I),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Rs(e, t, n) {
          return ((e = Ps(6, e, null, t)).lanes = n), e;
        }
        function zs(e, t, n) {
          return (
            ((t = Ps(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Bs(e, t, n, r, o) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Fs(e, t, n, r, o, i, a, l, u) {
          return (
            (e = new Bs(e, t, n, l, u)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = Ps(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            ji(i),
            e
          );
        }
        function Hs(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: x,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Us(e) {
          if (!e) return To;
          e: {
            if (Ue((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(i(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Io(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(i(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Io(n)) return Mo(e, n, t);
          }
          return t;
        }
        function $s(e, t, n, r, o, i, a, l, u) {
          return (
            ((e = Fs(n, r, !0, e, 0, i, 0, l, u)).context = Us(null)),
            (n = e.current),
            ((i = Ai((r = es()), (o = ts(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Di(n, i, o),
            (e.current.lanes = o),
            gt(e, o, r),
            rs(e, r),
            e
          );
        }
        function Ks(e, t, n, r) {
          var o = t.current,
            i = es(),
            a = ts(o);
          return (
            (n = Us(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ai(i, a)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Di(o, t, a)) && (ns(e, o, a, i), Mi(e, o, a)),
            a
          );
        }
        function Ws(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Vs(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Ys(e, t) {
          Vs(e, t), (e = e.alternate) && Vs(e, t);
        }
        Eu = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || No.current) wl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Nl(t), hi();
                        break;
                      case 5:
                        aa(t);
                        break;
                      case 1:
                        Io(t.type) && Ro(t);
                        break;
                      case 4:
                        oa(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          o = t.memoizedProps.value;
                        _o(yi, r._currentValue), (r._currentValue = o);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (_o(ua, 1 & ua.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Rl(e, t, n)
                            : (_o(ua, 1 & ua.current),
                              null !== (e = Kl(e, t, n)) ? e.sibling : null);
                        _o(ua, 1 & ua.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Ul(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null),
                            (o.tail = null),
                            (o.lastEffect = null)),
                          _o(ua, ua.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Cl(e, t, n);
                    }
                    return Kl(e, t, n);
                  })(e, t, n)
                );
              wl = 0 !== (131072 & e.flags);
            }
          else (wl = !1), ii && 0 !== (1048576 & t.flags) && ei(t, Yo, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              $l(e, t), (e = t.pendingProps);
              var o = jo(t, Lo.current);
              Ci(t, n), (o = ka(null, t, r, e, o, n));
              var a = Ca();
              return (
                (t.flags |= 1),
                "object" === typeof o &&
                null !== o &&
                "function" === typeof o.render &&
                void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Io(r) ? ((a = !0), Ro(t)) : (a = !1),
                    (t.memoizedState =
                      null !== o.state && void 0 !== o.state ? o.state : null),
                    ji(t),
                    (o.updater = Ui),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    Vi(t, r, e, n),
                    (t = Ll(null, t, r, !0, a, n)))
                  : ((t.tag = 0),
                    ii && a && ti(t),
                    Sl(null, t, o, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  ($l(e, t),
                  (e = t.pendingProps),
                  (r = (o = r._init)(r._payload)),
                  (t.type = r),
                  (o = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return js(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === T) return 11;
                        if (e === P) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = gi(r, e)),
                  o)
                ) {
                  case 0:
                    t = _l(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Tl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = xl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = El(null, t, r, gi(r.type, e), n);
                    break e;
                }
                throw Error(i(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                _l(e, t, r, (o = t.elementType === r ? o : gi(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Tl(e, t, r, (o = t.elementType === r ? o : gi(r, o)), n)
              );
            case 3:
              e: {
                if ((Nl(t), null === e)) throw Error(i(387));
                (r = t.pendingProps),
                  (o = (a = t.memoizedState).element),
                  Ii(e, t),
                  zi(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), a.isDehydrated)) {
                  if (
                    ((a = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = a),
                    (t.memoizedState = a),
                    256 & t.flags)
                  ) {
                    t = Pl(e, t, r, n, (o = cl(Error(i(423)), t)));
                    break e;
                  }
                  if (r !== o) {
                    t = Pl(e, t, r, n, (o = cl(Error(i(424)), t)));
                    break e;
                  }
                  for (
                    oi = so(t.stateNode.containerInfo.firstChild),
                      ri = t,
                      ii = !0,
                      ai = null,
                      n = Ji(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((hi(), r === o)) {
                    t = Kl(e, t, n);
                    break e;
                  }
                  Sl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                aa(t),
                null === e && ci(t),
                (r = t.type),
                (o = t.pendingProps),
                (a = null !== e ? e.memoizedProps : null),
                (l = o.children),
                no(r, o)
                  ? (l = null)
                  : null !== a && no(r, a) && (t.flags |= 32),
                Ol(e, t),
                Sl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && ci(t), null;
            case 13:
              return Rl(e, t, n);
            case 4:
              return (
                oa(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xi(t, null, r, n)) : Sl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                xl(e, t, r, (o = t.elementType === r ? o : gi(r, o)), n)
              );
            case 7:
              return Sl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Sl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (o = t.pendingProps),
                  (a = t.memoizedProps),
                  (l = o.value),
                  _o(yi, r._currentValue),
                  (r._currentValue = l),
                  null !== a)
                )
                  if (lr(a.value, l)) {
                    if (a.children === o.children && !No.current) {
                      t = Kl(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (a = t.child) && (a.return = t);
                      null !== a;

                    ) {
                      var u = a.dependencies;
                      if (null !== u) {
                        l = a.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === a.tag) {
                              (s = Ai(-1, n & -n)).tag = 2;
                              var c = a.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (s.next = s)
                                  : ((s.next = f.next), (f.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (a.lanes |= n),
                              null !== (s = a.alternate) && (s.lanes |= n),
                              ki(a.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === a.tag)
                        l = a.type === t.type ? null : a.child;
                      else if (18 === a.tag) {
                        if (null === (l = a.return)) throw Error(i(341));
                        (l.lanes |= n),
                          null !== (u = l.alternate) && (u.lanes |= n),
                          ki(l, n, t),
                          (l = a.sibling);
                      } else l = a.child;
                      if (null !== l) l.return = a;
                      else
                        for (l = a; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (a = l.sibling)) {
                            (a.return = l.return), (l = a);
                            break;
                          }
                          l = l.return;
                        }
                      a = l;
                    }
                Sl(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = t.pendingProps.children),
                Ci(t, n),
                (r = r((o = Oi(o)))),
                (t.flags |= 1),
                Sl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (o = gi((r = t.type), t.pendingProps)),
                El(e, t, r, (o = gi(r.type, o)), n)
              );
            case 15:
              return kl(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : gi(r, o)),
                $l(e, t),
                (t.tag = 1),
                Io(r) ? ((e = !0), Ro(t)) : (e = !1),
                Ci(t, n),
                Ki(t, r, o),
                Vi(t, r, o, n),
                Ll(null, t, r, !0, e, n)
              );
            case 19:
              return Ul(e, t, n);
            case 22:
              return Cl(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var Gs =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Qs(e) {
          this._internalRoot = e;
        }
        function qs(e) {
          this._internalRoot = e;
        }
        function Xs(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Js(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zs() {}
        function ec(e, t, n, r, o) {
          var i = n._reactRootContainer;
          if (i) {
            var a = i;
            if ("function" === typeof o) {
              var l = o;
              o = function () {
                var e = Ws(a);
                l.call(e);
              };
            }
            Ks(t, a, e, o);
          } else
            a = (function (e, t, n, r, o) {
              if (o) {
                if ("function" === typeof r) {
                  var i = r;
                  r = function () {
                    var e = Ws(a);
                    i.call(e);
                  };
                }
                var a = $s(t, r, e, 0, null, !1, 0, "", Zs);
                return (
                  (e._reactRootContainer = a),
                  (e[vo] = a.current),
                  Ur(8 === e.nodeType ? e.parentNode : e),
                  cs(),
                  a
                );
              }
              for (; (o = e.lastChild); ) e.removeChild(o);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = Ws(u);
                  l.call(e);
                };
              }
              var u = Fs(e, 0, !1, null, 0, !1, 0, "", Zs);
              return (
                (e._reactRootContainer = u),
                (e[vo] = u.current),
                Ur(8 === e.nodeType ? e.parentNode : e),
                cs(function () {
                  Ks(t, u, n, r);
                }),
                u
              );
            })(n, t, e, o, r);
          return Ws(a);
        }
        (qs.prototype.render = Qs.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            Ks(e, t, null, null);
          }),
          (qs.prototype.unmount = Qs.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cs(function () {
                  Ks(null, e, null, null);
                }),
                  (t[vo] = null);
              }
            }),
          (qs.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = kt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < It.length && 0 !== t && t < It[n].priority;
                n++
              );
              It.splice(n, 0, e), 0 === n && Rt(e);
            }
          }),
          (St = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    rs(t, Xe()),
                    0 === (6 & Tu) && ((Uu = Xe() + 500), $o()));
                }
                break;
              case 13:
                cs(function () {
                  var t = Ni(e, 1);
                  if (null !== t) {
                    var n = es();
                    ns(t, e, 1, n);
                  }
                }),
                  Ys(e, 1);
            }
          }),
          (xt = function (e) {
            if (13 === e.tag) {
              var t = Ni(e, 134217728);
              if (null !== t) ns(t, e, 134217728, es());
              Ys(e, 134217728);
            }
          }),
          (Et = function (e) {
            if (13 === e.tag) {
              var t = ts(e),
                n = Ni(e, t);
              if (null !== n) ns(n, e, t, es());
              Ys(e, t);
            }
          }),
          (kt = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (xe = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = xo(r);
                      if (!o) throw Error(i(90));
                      Y(r), J(r, o);
                    }
                  }
                }
                break;
              case "textarea":
                ie(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Te = ss),
          (Le = cs);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [wo, So, xo, Oe, _e, ss],
          },
          nc = {
            findFiberByHostInstance: bo,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var oc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!oc.isDisabled && oc.supportsFiber)
            try {
              (ot = oc.inject(rc)), (it = oc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xs(t)) throw Error(i(200));
            return Hs(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xs(e)) throw Error(i(299));
            var n = !1,
              r = "",
              o = Gs;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = Fs(e, 1, !1, null, 0, n, 0, r, o)),
              (e[vo] = t.current),
              Ur(8 === e.nodeType ? e.parentNode : e),
              new Qs(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(i(188));
              throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cs(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Js(t)) throw Error(i(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xs(e)) throw Error(i(405));
            var r = (null != n && n.hydratedSources) || null,
              o = !1,
              a = "",
              l = Gs;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (o = !0),
                void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = $s(t, null, e, 1, null != n ? n : null, o, 0, a, l)),
              (e[vo] = t.current),
              Ur(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (o = (o = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
            return new qs(t);
          }),
          (t.render = function (e, t, n) {
            if (!Js(t)) throw Error(i(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Js(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (cs(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[vo] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = ss),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Js(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        "use strict";
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      77: function (e) {
        var t = "undefined" !== typeof Element,
          n = "function" === typeof Map,
          r = "function" === typeof Set,
          o = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;
        function i(e, a) {
          if (e === a) return !0;
          if (e && a && "object" == typeof e && "object" == typeof a) {
            if (e.constructor !== a.constructor) return !1;
            var l, u, s, c;
            if (Array.isArray(e)) {
              if ((l = e.length) != a.length) return !1;
              for (u = l; 0 !== u--; ) if (!i(e[u], a[u])) return !1;
              return !0;
            }
            if (n && e instanceof Map && a instanceof Map) {
              if (e.size !== a.size) return !1;
              for (c = e.entries(); !(u = c.next()).done; )
                if (!a.has(u.value[0])) return !1;
              for (c = e.entries(); !(u = c.next()).done; )
                if (!i(u.value[1], a.get(u.value[0]))) return !1;
              return !0;
            }
            if (r && e instanceof Set && a instanceof Set) {
              if (e.size !== a.size) return !1;
              for (c = e.entries(); !(u = c.next()).done; )
                if (!a.has(u.value[0])) return !1;
              return !0;
            }
            if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(a)) {
              if ((l = e.length) != a.length) return !1;
              for (u = l; 0 !== u--; ) if (e[u] !== a[u]) return !1;
              return !0;
            }
            if (e.constructor === RegExp)
              return e.source === a.source && e.flags === a.flags;
            if (e.valueOf !== Object.prototype.valueOf)
              return e.valueOf() === a.valueOf();
            if (e.toString !== Object.prototype.toString)
              return e.toString() === a.toString();
            if ((l = (s = Object.keys(e)).length) !== Object.keys(a).length)
              return !1;
            for (u = l; 0 !== u--; )
              if (!Object.prototype.hasOwnProperty.call(a, s[u])) return !1;
            if (t && e instanceof Element) return !1;
            for (u = l; 0 !== u--; )
              if (
                (("_owner" !== s[u] && "__v" !== s[u] && "__o" !== s[u]) ||
                  !e.$$typeof) &&
                !i(e[s[u]], a[s[u]])
              )
                return !1;
            return !0;
          }
          return e !== e && a !== a;
        }
        e.exports = function (e, t) {
          try {
            return i(e, t);
          } catch (n) {
            if ((n.message || "").match(/stack|recursion/i))
              return (
                console.warn("react-fast-compare cannot handle circular refs"),
                !1
              );
            throw n;
          }
        };
      },
      299: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__assign) ||
            function () {
              return (
                (r =
                  Object.assign ||
                  function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                      for (var o in (t = arguments[n]))
                        Object.prototype.hasOwnProperty.call(t, o) &&
                          (e[o] = t[o]);
                    return e;
                  }),
                r.apply(this, arguments)
              );
            },
          o =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n);
                  var o = Object.getOwnPropertyDescriptor(t, n);
                  (o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
                }),
          i =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  });
                }
              : function (e, t) {
                  e.default = t;
                }),
          a =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e)
                  "default" !== n &&
                    Object.prototype.hasOwnProperty.call(e, n) &&
                    o(t, e, n);
              return i(t, e), t;
            },
          l =
            (this && this.__rest) ||
            function (e, t) {
              var n = {};
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) &&
                  t.indexOf(r) < 0 &&
                  (n[r] = e[r]);
              if (
                null != e &&
                "function" === typeof Object.getOwnPropertySymbols
              ) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                  t.indexOf(r[o]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                    (n[r[o]] = e[r[o]]);
              }
              return n;
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var u = a(n(791)),
          s = n(945),
          c = (0, n(74).createAnimation)(
            "ClipLoader",
            "0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}",
            "clip"
          );
        t.default = function (e) {
          var t = e.loading,
            n = void 0 === t || t,
            o = e.color,
            i = void 0 === o ? "#000000" : o,
            a = e.speedMultiplier,
            f = void 0 === a ? 1 : a,
            d = e.cssOverride,
            p = void 0 === d ? {} : d,
            h = e.size,
            v = void 0 === h ? 35 : h,
            m = l(e, [
              "loading",
              "color",
              "speedMultiplier",
              "cssOverride",
              "size",
            ]),
            g = r(
              {
                background: "transparent !important",
                width: (0, s.cssValue)(v),
                height: (0, s.cssValue)(v),
                borderRadius: "100%",
                border: "2px solid",
                borderTopColor: i,
                borderBottomColor: "transparent",
                borderLeftColor: i,
                borderRightColor: i,
                display: "inline-block",
                animation: ""
                  .concat(c, " ")
                  .concat(0.75 / f, "s 0s infinite linear"),
                animationFillMode: "both",
              },
              p
            );
          return n ? u.createElement("span", r({ style: g }, m)) : null;
        };
      },
      74: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createAnimation = void 0);
        t.createAnimation = function (e, t, n) {
          var r = "react-spinners-".concat(e, "-").concat(n);
          if ("undefined" == typeof window || !window.document) return r;
          var o = document.createElement("style");
          document.head.appendChild(o);
          var i = o.sheet,
            a = "\n    @keyframes "
              .concat(r, " {\n      ")
              .concat(t, "\n    }\n  ");
          return i && i.insertRule(a, 0), r;
        };
      },
      945: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.cssValue = t.parseLengthAndUnit = void 0);
        var n = {
          cm: !0,
          mm: !0,
          in: !0,
          px: !0,
          pt: !0,
          pc: !0,
          em: !0,
          ex: !0,
          ch: !0,
          rem: !0,
          vw: !0,
          vh: !0,
          vmin: !0,
          vmax: !0,
          "%": !0,
        };
        function r(e) {
          if ("number" === typeof e) return { value: e, unit: "px" };
          var t,
            r = (e.match(/^[0-9.]*/) || "").toString();
          t = r.includes(".") ? parseFloat(r) : parseInt(r, 10);
          var o = (e.match(/[^0-9]*$/) || "").toString();
          return n[o]
            ? { value: t, unit: o }
            : (console.warn(
                "React Spinners: "
                  .concat(e, " is not a valid css value. Defaulting to ")
                  .concat(t, "px.")
              ),
              { value: t, unit: "px" });
        }
        (t.parseLengthAndUnit = r),
          (t.cssValue = function (e) {
            var t = r(e);
            return "".concat(t.value).concat(t.unit);
          });
      },
      374: function (e, t, n) {
        "use strict";
        var r = n(791),
          o = Symbol.for("react.element"),
          i = Symbol.for("react.fragment"),
          a = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            i = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            a.call(t, r) && !u.hasOwnProperty(r) && (i[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return {
            $$typeof: o,
            type: e,
            key: s,
            ref: c,
            props: i,
            _owner: l.current,
          };
        }
        (t.Fragment = i), (t.jsx = s), (t.jsxs = s);
      },
      117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          a = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          m = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), v(w, g.prototype), (w.isPureReactComponent = !0);
        var S = Array.isArray,
          x = Object.prototype.hasOwnProperty,
          E = { current: null },
          k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var o,
            i = {},
            a = null,
            l = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (a = "" + t.key),
            t))
              x.call(t, o) && !k.hasOwnProperty(o) && (i[o] = t[o]);
          var u = arguments.length - 2;
          if (1 === u) i.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            i.children = s;
          }
          if (e && e.defaultProps)
            for (o in (u = e.defaultProps)) void 0 === i[o] && (i[o] = u[o]);
          return {
            $$typeof: n,
            type: e,
            key: a,
            ref: l,
            props: i,
            _owner: E.current,
          };
        }
        function O(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var _ = /\/+/g;
        function T(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function L(e, t, o, i, a) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (l) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (a = a((u = e))),
              (e = "" === i ? "." + T(u, 0) : i),
              S(a)
                ? ((o = ""),
                  null != e && (o = e.replace(_, "$&/") + "/"),
                  L(a, t, o, "", function (e) {
                    return e;
                  }))
                : null != a &&
                  (O(a) &&
                    (a = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      a,
                      o +
                        (!a.key || (u && u.key === a.key)
                          ? ""
                          : ("" + a.key).replace(_, "$&/") + "/") +
                        e
                    )),
                  t.push(a)),
              1
            );
          if (((u = 0), (i = "" === i ? "." : i + ":"), S(e)))
            for (var s = 0; s < e.length; s++) {
              var c = i + T((l = e[s]), s);
              u += L(l, t, o, c, a);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), s = 0; !(l = e.next()).done; )
              u += L((l = l.value), t, o, (c = i + T(l, s++)), a);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return u;
        }
        function N(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            L(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function P(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var j = { current: null },
          I = { transition: null },
          A = {
            ReactCurrentDispatcher: j,
            ReactCurrentBatchConfig: I,
            ReactCurrentOwner: E,
          };
        (t.Children = {
          map: N,
          forEach: function (e, t, n) {
            N(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              N(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              N(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!O(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = o),
          (t.Profiler = a),
          (t.PureComponent = b),
          (t.StrictMode = i),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var o = v({}, e.props),
              i = e.key,
              a = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((a = t.ref), (l = E.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in t)
                x.call(t, s) &&
                  !k.hasOwnProperty(s) &&
                  (o[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) o.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              o.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: i,
              ref: a,
              props: o,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = O),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: P,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = I.transition;
            I.transition = {};
            try {
              e();
            } finally {
              I.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return j.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return j.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return j.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return j.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return j.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return j.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return j.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return j.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return j.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return j.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return j.current.useRef(e);
          }),
          (t.useState = function (e) {
            return j.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return j.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return j.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(0 < i(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, a = o >>> 1; r < a; ) {
              var l = 2 * (r + 1) - 1,
                u = e[l],
                s = l + 1,
                c = e[s];
              if (0 > i(u, n))
                s < o && 0 > i(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[l] = n), (r = l));
              else {
                if (!(s < o && 0 > i(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var a = performance;
          t.unstable_now = function () {
            return a.now();
          };
        } else {
          var l = Date,
            u = l.now();
          t.unstable_now = function () {
            return l.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          v = !1,
          m = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) o(c);
            else {
              if (!(t.startTime <= e)) break;
              o(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function S(e) {
          if (((m = !1), w(e), !v))
            if (null !== r(s)) (v = !0), I(x);
            else {
              var t = r(c);
              null !== t && A(S, t.startTime - e);
            }
        }
        function x(e, n) {
          (v = !1), m && ((m = !1), y(O), (O = -1)), (h = !0);
          var i = p;
          try {
            for (
              w(n), d = r(s);
              null !== d && (!(d.expirationTime > n) || (e && !L()));

            ) {
              var a = d.callback;
              if ("function" === typeof a) {
                (d.callback = null), (p = d.priorityLevel);
                var l = a(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (d.callback = l)
                    : d === r(s) && o(s),
                  w(n);
              } else o(s);
              d = r(s);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(c);
              null !== f && A(S, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = i), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var E,
          k = !1,
          C = null,
          O = -1,
          _ = 5,
          T = -1;
        function L() {
          return !(t.unstable_now() - T < _);
        }
        function N() {
          if (null !== C) {
            var e = t.unstable_now();
            T = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? E() : ((k = !1), (C = null));
            }
          } else k = !1;
        }
        if ("function" === typeof b)
          E = function () {
            b(N);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var P = new MessageChannel(),
            j = P.port2;
          (P.port1.onmessage = N),
            (E = function () {
              j.postMessage(null);
            });
        } else
          E = function () {
            g(N, 0);
          };
        function I(e) {
          (C = e), k || ((k = !0), E());
        }
        function A(e, n) {
          O = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || h || ((v = !0), I(x));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (_ = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, i) {
            var a = t.unstable_now();
            switch (
              ("object" === typeof i && null !== i
                ? (i = "number" === typeof (i = i.delay) && 0 < i ? a + i : a)
                : (i = a),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: o,
                priorityLevel: e,
                startTime: i,
                expirationTime: (l = i + l),
                sortIndex: -1,
              }),
              i > a
                ? ((e.sortIndex = i),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (m ? (y(O), (O = -1)) : (m = !0), A(S, i - a)))
                : ((e.sortIndex = l), n(s, e), v || h || ((v = !0), I(x))),
              e
            );
          }),
          (t.unstable_shouldYield = L),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
      613: function (e) {
        e.exports = function (e, t, n, r) {
          var o = n ? n.call(r, e, t) : void 0;
          if (void 0 !== o) return !!o;
          if (e === t) return !0;
          if ("object" !== typeof e || !e || "object" !== typeof t || !t)
            return !1;
          var i = Object.keys(e),
            a = Object.keys(t);
          if (i.length !== a.length) return !1;
          for (
            var l = Object.prototype.hasOwnProperty.bind(t), u = 0;
            u < i.length;
            u++
          ) {
            var s = i[u];
            if (!l(s)) return !1;
            var c = e[s],
              f = t[s];
            if (
              !1 === (o = n ? n.call(r, c, f, s) : void 0) ||
              (void 0 === o && c !== f)
            )
              return !1;
          }
          return !0;
        };
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.m = e),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, { a: t }), t;
    }),
    (function () {
      var e,
        t = Object.getPrototypeOf
          ? function (e) {
              return Object.getPrototypeOf(e);
            }
          : function (e) {
              return e.__proto__;
            };
      n.t = function (r, o) {
        if ((1 & o && (r = this(r)), 8 & o)) return r;
        if ("object" === typeof r && r) {
          if (4 & o && r.__esModule) return r;
          if (16 & o && "function" === typeof r.then) return r;
        }
        var i = Object.create(null);
        n.r(i);
        var a = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var l = 2 & o && r;
          "object" == typeof l && !~e.indexOf(l);
          l = t(l)
        )
          Object.getOwnPropertyNames(l).forEach(function (e) {
            a[e] = function () {
              return r[e];
            };
          });
        return (
          (a.default = function () {
            return r;
          }),
          n.d(i, a),
          i
        );
      };
    })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = function (e) {
      return Promise.all(
        Object.keys(n.f).reduce(function (t, r) {
          return n.f[r](e, t), t;
        }, [])
      );
    }),
    (n.u = function (e) {
      return "static/js/" + e + ".1ed0c42c.chunk.js";
    }),
    (n.miniCssF = function (e) {}),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = {},
        t = "portfolio:";
      n.l = function (r, o, i, a) {
        if (e[r]) e[r].push(o);
        else {
          var l, u;
          if (void 0 !== i)
            for (
              var s = document.getElementsByTagName("script"), c = 0;
              c < s.length;
              c++
            ) {
              var f = s[c];
              if (
                f.getAttribute("src") == r ||
                f.getAttribute("data-webpack") == t + i
              ) {
                l = f;
                break;
              }
            }
          l ||
            ((u = !0),
            ((l = document.createElement("script")).charset = "utf-8"),
            (l.timeout = 120),
            n.nc && l.setAttribute("nonce", n.nc),
            l.setAttribute("data-webpack", t + i),
            (l.src = r)),
            (e[r] = [o]);
          var d = function (t, n) {
              (l.onerror = l.onload = null), clearTimeout(p);
              var o = e[r];
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                o &&
                  o.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: l }),
              12e4
            );
          (l.onerror = d.bind(null, l.onerror)),
            (l.onload = d.bind(null, l.onload)),
            u && document.head.appendChild(l);
        }
      };
    })(),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      var e = { 179: 0 };
      n.f.j = function (t, r) {
        var o = n.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) r.push(o[2]);
          else {
            var i = new Promise(function (n, r) {
              o = e[t] = [n, r];
            });
            r.push((o[2] = i));
            var a = n.p + n.u(t),
              l = new Error();
            n.l(
              a,
              function (r) {
                if (n.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                  var i = r && ("load" === r.type ? "missing" : r.type),
                    a = r && r.target && r.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + a + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = i),
                    (l.request = a),
                    o[1](l);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = function (t, r) {
          var o,
            i,
            a = r[0],
            l = r[1],
            u = r[2],
            s = 0;
          if (
            a.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (o in l) n.o(l, o) && (n.m[o] = l[o]);
            if (u) u(n);
          }
          for (t && t(r); s < a.length; s++)
            (i = a[s]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
        },
        r = (self.webpackChunkportfolio = self.webpackChunkportfolio || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (function () {
      "use strict";
      var e = n(791),
        t = n.t(e, 2),
        r = n(250);
      function o(e) {
        return (
          (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          o(e)
        );
      }
      function i() {
        i = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          l = a.iterator || "@@iterator",
          u = a.asyncIterator || "@@asyncIterator",
          s = a.toStringTag || "@@toStringTag";
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, "");
        } catch (N) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function f(e, t, n, o) {
          var i = t && t.prototype instanceof h ? t : h,
            a = Object.create(i.prototype),
            l = new _(o || []);
          return r(a, "_invoke", { value: E(e, n, l) }), a;
        }
        function d(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        e.wrap = f;
        var p = {};
        function h() {}
        function v() {}
        function m() {}
        var g = {};
        c(g, l, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          b = y && y(y(T([])));
        b && b !== t && n.call(b, l) && (g = b);
        var w = (m.prototype = h.prototype = Object.create(g));
        function S(e) {
          ["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function x(e, t) {
          function i(r, a, l, u) {
            var s = d(e[r], e, a);
            if ("throw" !== s.type) {
              var c = s.arg,
                f = c.value;
              return f && "object" == o(f) && n.call(f, "__await")
                ? t.resolve(f.__await).then(
                    function (e) {
                      i("next", e, l, u);
                    },
                    function (e) {
                      i("throw", e, l, u);
                    }
                  )
                : t.resolve(f).then(
                    function (e) {
                      (c.value = e), l(c);
                    },
                    function (e) {
                      return i("throw", e, l, u);
                    }
                  );
            }
            u(s.arg);
          }
          var a;
          r(this, "_invoke", {
            value: function (e, n) {
              function r() {
                return new t(function (t, r) {
                  i(e, n, t, r);
                });
              }
              return (a = a ? a.then(r, r) : r());
            },
          });
        }
        function E(e, t, n) {
          var r = "suspendedStart";
          return function (o, i) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === o) throw i;
              return L();
            }
            for (n.method = o, n.arg = i; ; ) {
              var a = n.delegate;
              if (a) {
                var l = k(a, n);
                if (l) {
                  if (l === p) continue;
                  return l;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var u = d(e, t, n);
              if ("normal" === u.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), u.arg === p)
                )
                  continue;
                return { value: u.arg, done: n.done };
              }
              "throw" === u.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
            }
          };
        }
        function k(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                k(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              p
            );
          var o = d(r, e.iterator, t.arg);
          if ("throw" === o.type)
            return (
              (t.method = "throw"), (t.arg = o.arg), (t.delegate = null), p
            );
          var i = o.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                p)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              p);
        }
        function C(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function _(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(C, this),
            this.reset(!0);
        }
        function T(e) {
          if (e) {
            var t = e[l];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                o = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (o.next = o);
            }
          }
          return { next: L };
        }
        function L() {
          return { value: void 0, done: !0 };
        }
        return (
          (v.prototype = m),
          r(w, "constructor", { value: m, configurable: !0 }),
          r(m, "constructor", { value: v, configurable: !0 }),
          (v.displayName = c(m, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === v || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), c(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(w)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          S(x.prototype),
          c(x.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = x),
          (e.async = function (t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new x(f(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          S(w),
          c(w, s, "Generator"),
          c(w, l, function () {
            return this;
          }),
          c(w, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = T),
          (_.prototype = {
            constructor: _,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (a.type = "throw"),
                  (a.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var l = n.call(i, "catchLoc"),
                    u = n.call(i, "finallyLoc");
                  if (l && u) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (l) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), p)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                p
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), O(n), p;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    O(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: T(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          e
        );
      }
      function a(e, t, n, r, o, i, a) {
        try {
          var l = e[i](a),
            u = l.value;
        } catch (s) {
          return void n(s);
        }
        l.done ? t(u) : Promise.resolve(u).then(r, o);
      }
      function l(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(t, n);
            function l(e) {
              a(i, r, o, l, u, "next", e);
            }
            function u(e) {
              a(i, r, o, l, u, "throw", e);
            }
            l(void 0);
          });
        };
      }
      function u(e) {
        if (Array.isArray(e)) return e;
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function c(e, t) {
        if (e) {
          if ("string" === typeof e) return s(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? s(e, t)
              : void 0
          );
        }
      }
      function f() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function d(e, t) {
        return (
          u(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                a,
                l = [],
                u = !0,
                s = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = i.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    u = !0
                  );
              } catch (c) {
                (s = !0), (o = c);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (s) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          c(e, t) ||
          f()
        );
      }
      var p = n(299),
        h = n.n(p);
      function v(e) {
        var t = (function (e, t) {
          if ("object" !== o(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== o(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === o(t) ? t : String(t);
      }
      function m(e, t, n) {
        return (
          (t = v(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function g(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                m(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var b = n(892),
        w = n.n(b),
        S = n(150),
        x = function (e) {
          var t,
            n,
            r,
            o,
            i,
            a,
            l,
            u,
            s,
            c,
            f,
            d,
            p,
            h,
            v,
            m,
            g,
            b,
            x,
            E,
            k,
            C,
            O,
            _,
            T,
            L,
            N,
            P,
            j,
            I,
            A,
            D,
            M,
            R,
            z,
            B,
            F,
            H,
            U,
            $,
            K,
            W,
            V,
            Y,
            G,
            Q,
            q,
            X,
            J,
            Z,
            ee,
            te,
            ne,
            re,
            oe,
            ie,
            ae,
            le,
            ue,
            se,
            ce,
            fe,
            de,
            pe,
            he,
            ve,
            me,
            ge,
            ye,
            be,
            we,
            Se,
            xe,
            Ee,
            ke,
            Ce,
            Oe,
            _e,
            Te,
            Le,
            Ne,
            Pe,
            je,
            Ie,
            Ae,
            De,
            Me,
            Re,
            ze,
            Be,
            Fe,
            He,
            Ue,
            $e,
            Ke,
            We,
            Ve,
            Ye,
            Ge,
            Qe,
            qe,
            Xe,
            Je,
            Ze,
            et,
            tt,
            nt,
            rt,
            ot,
            it,
            at,
            lt,
            ut,
            st,
            ct,
            ft,
            dt,
            pt,
            ht,
            vt,
            mt,
            gt,
            yt,
            bt,
            wt,
            St,
            xt,
            Et,
            kt,
            Ct,
            Ot,
            _t,
            Tt,
            Lt,
            Nt,
            Pt,
            jt,
            It,
            At,
            Dt,
            Mt,
            Rt,
            zt,
            Bt,
            Ft,
            Ht,
            Ut,
            $t,
            Kt,
            Wt,
            Vt,
            Yt,
            Gt,
            Qt,
            qt,
            Xt,
            Jt,
            Zt;
          return y(
            y(
              y(
                y(
                  {},
                  (null === (t = e.data) ||
                  void 0 === t ||
                  null === (n = t.aboutCollection) ||
                  void 0 === n ||
                  null === (r = n.items) ||
                  void 0 === r
                    ? void 0
                    : r.length) && {
                    about: {
                      title:
                        null === e ||
                        void 0 === e ||
                        null === (o = e.data) ||
                        void 0 === o ||
                        null === (i = o.aboutCollection) ||
                        void 0 === i ||
                        null === (a = i.items) ||
                        void 0 === a ||
                        null === (l = a[0]) ||
                        void 0 === l
                          ? void 0
                          : l.title,
                      subtitle:
                        null === e ||
                        void 0 === e ||
                        null === (u = e.data) ||
                        void 0 === u ||
                        null === (s = u.aboutCollection) ||
                        void 0 === s ||
                        null === (c = s.items) ||
                        void 0 === c ||
                        null === (f = c[0]) ||
                        void 0 === f
                          ? void 0
                          : f.subtitle,
                      description: (0, S.S)(
                        null === e ||
                          void 0 === e ||
                          null === (d = e.data) ||
                          void 0 === d ||
                          null === (p = d.aboutCollection) ||
                          void 0 === p ||
                          null === (h = p.items) ||
                          void 0 === h ||
                          null === (v = h[0]) ||
                          void 0 === v ||
                          null === (m = v.description) ||
                          void 0 === m
                          ? void 0
                          : m.json
                      ),
                      image: {
                        url:
                          null === e ||
                          void 0 === e ||
                          null === (g = e.data) ||
                          void 0 === g ||
                          null === (b = g.aboutCollection) ||
                          void 0 === b ||
                          null === (x = b.items) ||
                          void 0 === x ||
                          null === (E = x[0]) ||
                          void 0 === E ||
                          null === (k = E.image) ||
                          void 0 === k
                            ? void 0
                            : k.url,
                        description:
                          null === e ||
                          void 0 === e ||
                          null === (C = e.data) ||
                          void 0 === C ||
                          null === (O = C.aboutCollection) ||
                          void 0 === O ||
                          null === (_ = O.items) ||
                          void 0 === _ ||
                          null === (T = _[0]) ||
                          void 0 === T ||
                          null === (L = T.image) ||
                          void 0 === L
                            ? void 0
                            : L.description,
                      },
                      cv: {
                        url:
                          null === e ||
                          void 0 === e ||
                          null === (N = e.data) ||
                          void 0 === N ||
                          null === (P = N.aboutCollection) ||
                          void 0 === P ||
                          null === (j = P.items) ||
                          void 0 === j ||
                          null === (I = j[0]) ||
                          void 0 === I ||
                          null === (A = I.cv) ||
                          void 0 === A
                            ? void 0
                            : A.url,
                        text:
                          null === e ||
                          void 0 === e ||
                          null === (D = e.data) ||
                          void 0 === D ||
                          null === (M = D.aboutCollection) ||
                          void 0 === M ||
                          null === (R = M.items) ||
                          void 0 === R ||
                          null === (z = R[0]) ||
                          void 0 === z ||
                          null === (B = z.cv) ||
                          void 0 === B
                            ? void 0
                            : B.title,
                      },
                    },
                  }
                ),
                {},
                {
                  assets: {
                    logo: {
                      url:
                        null === e ||
                        void 0 === e ||
                        null === (F = e.data) ||
                        void 0 === F ||
                        null === (H = F.assetsCollection) ||
                        void 0 === H ||
                        null === (U = H.items) ||
                        void 0 === U ||
                        null === ($ = U[0].logo) ||
                        void 0 === $
                          ? void 0
                          : $.url,
                      description:
                        null === e ||
                        void 0 === e ||
                        null === (K = e.data) ||
                        void 0 === K ||
                        null === (W = K.assetsCollection) ||
                        void 0 === W ||
                        null === (V = W.items) ||
                        void 0 === V ||
                        null === (Y = V[0]) ||
                        void 0 === Y ||
                        null === (G = Y.logo) ||
                        void 0 === G
                          ? void 0
                          : G.description,
                    },
                    socialMedia:
                      null === e ||
                      void 0 === e ||
                      null === (Q = e.data) ||
                      void 0 === Q ||
                      null === (q = Q.assetsCollection) ||
                      void 0 === q ||
                      null === (X = q.items) ||
                      void 0 === X ||
                      null === (J = X[0]) ||
                      void 0 === J ||
                      null === (Z = J.socialMediaCollection) ||
                      void 0 === Z ||
                      null === (ee = Z.items) ||
                      void 0 === ee
                        ? void 0
                        : ee.map(function (e) {
                            return {
                              url: null === e || void 0 === e ? void 0 : e.url,
                              name:
                                null === e || void 0 === e ? void 0 : e.title,
                              link:
                                null === e || void 0 === e
                                  ? void 0
                                  : e.description,
                            };
                          }),
                  },
                },
                (null === (te = e.data) ||
                void 0 === te ||
                null === (ne = te.contactCollection) ||
                void 0 === ne ||
                null === (re = ne.items) ||
                void 0 === re
                  ? void 0
                  : re.length) && {
                  contact: {
                    title:
                      null === e ||
                      void 0 === e ||
                      null === (oe = e.data) ||
                      void 0 === oe ||
                      null === (ie = oe.contactCollection) ||
                      void 0 === ie ||
                      null === (ae = ie.items) ||
                      void 0 === ae ||
                      null === (le = ae[0]) ||
                      void 0 === le
                        ? void 0
                        : le.title,
                    subtitle:
                      null === e ||
                      void 0 === e ||
                      null === (ue = e.data) ||
                      void 0 === ue ||
                      null === (se = ue.contactCollection) ||
                      void 0 === se ||
                      null === (ce = se.items) ||
                      void 0 === ce ||
                      null === (fe = ce[0]) ||
                      void 0 === fe
                        ? void 0
                        : fe.subtitle,
                    description: (0, S.S)(
                      null === e ||
                        void 0 === e ||
                        null === (de = e.data) ||
                        void 0 === de ||
                        null === (pe = de.contactCollection) ||
                        void 0 === pe ||
                        null === (he = pe.items) ||
                        void 0 === he ||
                        null === (ve = he[0]) ||
                        void 0 === ve ||
                        null === (me = ve.description) ||
                        void 0 === me
                        ? void 0
                        : me.json
                    ),
                    email:
                      null === e ||
                      void 0 === e ||
                      null === (ge = e.data) ||
                      void 0 === ge ||
                      null === (ye = ge.contactCollection) ||
                      void 0 === ye ||
                      null === (be = ye.items) ||
                      void 0 === be ||
                      null === (we = be[0]) ||
                      void 0 === we
                        ? void 0
                        : we.email,
                    phone:
                      null === e ||
                      void 0 === e ||
                      null === (Se = e.data) ||
                      void 0 === Se ||
                      null === (xe = Se.contactCollection) ||
                      void 0 === xe ||
                      null === (Ee = xe.items) ||
                      void 0 === Ee ||
                      null === (ke = Ee[0]) ||
                      void 0 === ke
                        ? void 0
                        : ke.phone,
                  },
                }
              ),
              {},
              {
                header: {
                  title:
                    null === e ||
                    void 0 === e ||
                    null === (Ce = e.data) ||
                    void 0 === Ce ||
                    null === (Oe = Ce.headerCollection) ||
                    void 0 === Oe ||
                    null === (_e = Oe.items) ||
                    void 0 === _e ||
                    null === (Te = _e[0]) ||
                    void 0 === Te
                      ? void 0
                      : Te.title,
                  subtitle:
                    null === e ||
                    void 0 === e ||
                    null === (Le = e.data) ||
                    void 0 === Le ||
                    null === (Ne = Le.headerCollection) ||
                    void 0 === Ne ||
                    null === (Pe = Ne.items) ||
                    void 0 === Pe ||
                    null === (je = Pe[0]) ||
                    void 0 === je
                      ? void 0
                      : je.subtitle,
                  image: {
                    url:
                      null === e ||
                      void 0 === e ||
                      null === (Ie = e.data) ||
                      void 0 === Ie ||
                      null === (Ae = Ie.headerCollection) ||
                      void 0 === Ae ||
                      null === (De = Ae.items) ||
                      void 0 === De ||
                      null === (Me = De[0]) ||
                      void 0 === Me ||
                      null === (Re = Me.banner) ||
                      void 0 === Re
                        ? void 0
                        : Re.url,
                    description:
                      null === e ||
                      void 0 === e ||
                      null === (ze = e.data) ||
                      void 0 === ze ||
                      null === (Be = ze.headerCollection) ||
                      void 0 === Be ||
                      null === (Fe = Be.items) ||
                      void 0 === Fe ||
                      null === (He = Fe[0]) ||
                      void 0 === He ||
                      null === (Ue = He.banner) ||
                      void 0 === Ue
                        ? void 0
                        : Ue.description,
                  },
                  ctaText:
                    null === e ||
                    void 0 === e ||
                    null === ($e = e.data) ||
                    void 0 === $e ||
                    null === (Ke = $e.headerCollection) ||
                    void 0 === Ke ||
                    null === (We = Ke.items) ||
                    void 0 === We ||
                    null === (Ve = We[0]) ||
                    void 0 === Ve
                      ? void 0
                      : Ve.cta,
                  ctaLink:
                    null === e ||
                    void 0 === e ||
                    null === (Ye = e.data) ||
                    void 0 === Ye ||
                    null === (Ge = Ye.headerCollection) ||
                    void 0 === Ge ||
                    null === (Qe = Ge.items) ||
                    void 0 === Qe ||
                    null === (qe = Qe[0]) ||
                    void 0 === qe
                      ? void 0
                      : qe.ctaLink,
                },
                menu: {
                  menuItems:
                    null === e ||
                    void 0 === e ||
                    null === (Xe = e.data) ||
                    void 0 === Xe ||
                    null === (Je = Xe.menuCollection) ||
                    void 0 === Je ||
                    null === (Ze = Je.items) ||
                    void 0 === Ze ||
                    null === (et = Ze[0]) ||
                    void 0 === et
                      ? void 0
                      : et.menuItems,
                  cta:
                    null === e ||
                    void 0 === e ||
                    null === (tt = e.data) ||
                    void 0 === tt ||
                    null === (nt = tt.menuCollection) ||
                    void 0 === nt ||
                    null === (rt = nt.items) ||
                    void 0 === rt ||
                    null === (ot = rt[0]) ||
                    void 0 === ot
                      ? void 0
                      : ot.cta,
                },
              },
              (null === (it = e.data) ||
              void 0 === it ||
              null === (at = it.aboutCollection) ||
              void 0 === at ||
              null === (lt = at.items) ||
              void 0 === lt
                ? void 0
                : lt.length) && {
                project: {
                  title:
                    null === e ||
                    void 0 === e ||
                    null === (ut = e.data) ||
                    void 0 === ut ||
                    null === (st = ut.projectHeaderCollection) ||
                    void 0 === st ||
                    null === (ct = st.items) ||
                    void 0 === ct
                      ? void 0
                      : ct[0].title,
                  subtitle:
                    null === e ||
                    void 0 === e ||
                    null === (ft = e.data) ||
                    void 0 === ft ||
                    null === (dt = ft.projectHeaderCollection) ||
                    void 0 === dt ||
                    null === (pt = dt.items) ||
                    void 0 === pt
                      ? void 0
                      : pt[0].subtitle,
                  projects:
                    null === e ||
                    void 0 === e ||
                    null === (ht = e.data) ||
                    void 0 === ht ||
                    null === (vt = ht.projectCollection) ||
                    void 0 === vt ||
                    null === (mt = vt.items) ||
                    void 0 === mt
                      ? void 0
                      : mt
                          .sort(function (e, t) {
                            return (
                              new Date(t.creationDate) -
                              new Date(e.creationDate)
                            );
                          })
                          .map(function (e) {
                            var t, n, r, o, i;
                            return {
                              creationDate: w()(e.creationDate).format(
                                "MMMM YYYY"
                              ),
                              codeSourceLink: e.codeSourceLink,
                              slug: e.slug,
                              title: e.title,
                              subtitle: e.subtitle,
                              description: (0, S.S)(
                                null === (t = e.description) || void 0 === t
                                  ? void 0
                                  : t.json
                              ),
                              thumbnail: {
                                url:
                                  null === (n = e.thumbnail) || void 0 === n
                                    ? void 0
                                    : n.url,
                                description:
                                  null === (r = e.thumbnail) || void 0 === r
                                    ? void 0
                                    : r.description,
                              },
                              images:
                                null === (o = e.imagesCollection) ||
                                void 0 === o ||
                                null === (i = o.items) ||
                                void 0 === i
                                  ? void 0
                                  : i.map(function (e) {
                                      return {
                                        url: e.url,
                                        description: e.description,
                                      };
                                    }),
                              projectLink: e.link,
                              tags: e.tags,
                            };
                          }),
                },
              }
            ),
            {},
            {
              seo: {
                title:
                  null === e ||
                  void 0 === e ||
                  null === (gt = e.data) ||
                  void 0 === gt ||
                  null === (yt = gt.seoCollection) ||
                  void 0 === yt ||
                  null === (bt = yt.items) ||
                  void 0 === bt ||
                  null === (wt = bt[0]) ||
                  void 0 === wt
                    ? void 0
                    : wt.title,
                description:
                  null === e ||
                  void 0 === e ||
                  null === (St = e.data) ||
                  void 0 === St ||
                  null === (xt = St.seoCollection) ||
                  void 0 === xt ||
                  null === (Et = xt.items) ||
                  void 0 === Et ||
                  null === (kt = Et[0]) ||
                  void 0 === kt
                    ? void 0
                    : kt.description,
                touchIcon:
                  null === e ||
                  void 0 === e ||
                  null === (Ct = e.data) ||
                  void 0 === Ct ||
                  null === (Ot = Ct.seoCollection) ||
                  void 0 === Ot ||
                  null === (_t = Ot.items) ||
                  void 0 === _t ||
                  null === (Tt = _t[0]) ||
                  void 0 === Tt ||
                  null === (Lt = Tt.appleTouchIcon) ||
                  void 0 === Lt
                    ? void 0
                    : Lt.url,
                favicon:
                  null === e ||
                  void 0 === e ||
                  null === (Nt = e.data) ||
                  void 0 === Nt ||
                  null === (Pt = Nt.seoCollection) ||
                  void 0 === Pt ||
                  null === (jt = Pt.items) ||
                  void 0 === jt ||
                  null === (It = jt[0]) ||
                  void 0 === It ||
                  null === (At = It.favicon) ||
                  void 0 === At
                    ? void 0
                    : At.url,
                thumbnail:
                  null === e ||
                  void 0 === e ||
                  null === (Dt = e.data) ||
                  void 0 === Dt ||
                  null === (Mt = Dt.seoCollection) ||
                  void 0 === Mt ||
                  null === (Rt = Mt.items) ||
                  void 0 === Rt ||
                  null === (zt = Rt[0]) ||
                  void 0 === zt ||
                  null === (Bt = zt.thumbnail) ||
                  void 0 === Bt
                    ? void 0
                    : Bt.url,
              },
            },
            (null === e ||
            void 0 === e ||
            null === (Ft = e.data) ||
            void 0 === Ft ||
            null === (Ht = Ft.stackTechCollection) ||
            void 0 === Ht ||
            null === (Ut = Ht.items) ||
            void 0 === Ut
              ? void 0
              : Ut.length) > 0 && {
              stack: {
                title:
                  null === e ||
                  void 0 === e ||
                  null === ($t = e.data) ||
                  void 0 === $t ||
                  null === (Kt = $t.stackCollection) ||
                  void 0 === Kt ||
                  null === (Wt = Kt.items) ||
                  void 0 === Wt ||
                  null === (Vt = Wt[0]) ||
                  void 0 === Vt
                    ? void 0
                    : Vt.title,
                subtitle:
                  null === e ||
                  void 0 === e ||
                  null === (Yt = e.data) ||
                  void 0 === Yt ||
                  null === (Gt = Yt.stackCollection) ||
                  void 0 === Gt ||
                  null === (Qt = Gt.items) ||
                  void 0 === Qt ||
                  null === (qt = Qt[0]) ||
                  void 0 === qt
                    ? void 0
                    : qt.subtitle,
                technologies:
                  null === e ||
                  void 0 === e ||
                  null === (Xt = e.data) ||
                  void 0 === Xt ||
                  null === (Jt = Xt.stackTechCollection) ||
                  void 0 === Jt ||
                  null === (Zt = Jt.items) ||
                  void 0 === Zt
                    ? void 0
                    : Zt.map(function (e) {
                        return {
                          title: null === e || void 0 === e ? void 0 : e.title,
                          techList:
                            null === e || void 0 === e
                              ? void 0
                              : e.technologies,
                        };
                      }).sort(function (e, t) {
                        return e.title.localeCompare(t.title);
                      }),
              },
            }
          );
        },
        E = n(7),
        k = n.n(E),
        C = n(77),
        O = n.n(C),
        _ = n(176),
        T = n.n(_),
        L = n(613),
        N = n.n(L);
      function P() {
        return (
          (P =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          P.apply(this, arguments)
        );
      }
      function j(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          I(e, t);
      }
      function I(e, t) {
        return (
          (I =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          I(e, t)
        );
      }
      function A(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          t.indexOf((n = i[r])) >= 0 || (o[n] = e[n]);
        return o;
      }
      var D = {
          BASE: "base",
          BODY: "body",
          HEAD: "head",
          HTML: "html",
          LINK: "link",
          META: "meta",
          NOSCRIPT: "noscript",
          SCRIPT: "script",
          STYLE: "style",
          TITLE: "title",
          FRAGMENT: "Symbol(react.fragment)",
        },
        M = { rel: ["amphtml", "canonical", "alternate"] },
        R = { type: ["application/ld+json"] },
        z = {
          charset: "",
          name: ["robots", "description"],
          property: [
            "og:type",
            "og:title",
            "og:url",
            "og:image",
            "og:image:alt",
            "og:description",
            "twitter:url",
            "twitter:title",
            "twitter:description",
            "twitter:image",
            "twitter:image:alt",
            "twitter:card",
            "twitter:site",
          ],
        },
        B = Object.keys(D).map(function (e) {
          return D[e];
        }),
        F = {
          accesskey: "accessKey",
          charset: "charSet",
          class: "className",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          "http-equiv": "httpEquiv",
          itemprop: "itemProp",
          tabindex: "tabIndex",
        },
        H = Object.keys(F).reduce(function (e, t) {
          return (e[F[t]] = t), e;
        }, {}),
        U = function (e, t) {
          for (var n = e.length - 1; n >= 0; n -= 1) {
            var r = e[n];
            if (Object.prototype.hasOwnProperty.call(r, t)) return r[t];
          }
          return null;
        },
        $ = function (e) {
          var t = U(e, D.TITLE),
            n = U(e, "titleTemplate");
          if ((Array.isArray(t) && (t = t.join("")), n && t))
            return n.replace(/%s/g, function () {
              return t;
            });
          var r = U(e, "defaultTitle");
          return t || r || void 0;
        },
        K = function (e) {
          return U(e, "onChangeClientState") || function () {};
        },
        W = function (e, t) {
          return t
            .filter(function (t) {
              return void 0 !== t[e];
            })
            .map(function (t) {
              return t[e];
            })
            .reduce(function (e, t) {
              return P({}, e, t);
            }, {});
        },
        V = function (e, t) {
          return t
            .filter(function (e) {
              return void 0 !== e[D.BASE];
            })
            .map(function (e) {
              return e[D.BASE];
            })
            .reverse()
            .reduce(function (t, n) {
              if (!t.length)
                for (var r = Object.keys(n), o = 0; o < r.length; o += 1) {
                  var i = r[o].toLowerCase();
                  if (-1 !== e.indexOf(i) && n[i]) return t.concat(n);
                }
              return t;
            }, []);
        },
        Y = function (e, t, n) {
          var r = {};
          return n
            .filter(function (t) {
              return (
                !!Array.isArray(t[e]) ||
                (void 0 !== t[e] &&
                  console &&
                  "function" == typeof console.warn &&
                  console.warn(
                    "Helmet: " +
                      e +
                      ' should be of type "Array". Instead found type "' +
                      typeof t[e] +
                      '"'
                  ),
                !1)
              );
            })
            .map(function (t) {
              return t[e];
            })
            .reverse()
            .reduce(function (e, n) {
              var o = {};
              n.filter(function (e) {
                for (var n, i = Object.keys(e), a = 0; a < i.length; a += 1) {
                  var l = i[a],
                    u = l.toLowerCase();
                  -1 === t.indexOf(u) ||
                    ("rel" === n && "canonical" === e[n].toLowerCase()) ||
                    ("rel" === u && "stylesheet" === e[u].toLowerCase()) ||
                    (n = u),
                    -1 === t.indexOf(l) ||
                      ("innerHTML" !== l &&
                        "cssText" !== l &&
                        "itemprop" !== l) ||
                      (n = l);
                }
                if (!n || !e[n]) return !1;
                var s = e[n].toLowerCase();
                return (
                  r[n] || (r[n] = {}),
                  o[n] || (o[n] = {}),
                  !r[n][s] && ((o[n][s] = !0), !0)
                );
              })
                .reverse()
                .forEach(function (t) {
                  return e.push(t);
                });
              for (var i = Object.keys(o), a = 0; a < i.length; a += 1) {
                var l = i[a],
                  u = P({}, r[l], o[l]);
                r[l] = u;
              }
              return e;
            }, [])
            .reverse();
        },
        G = function (e, t) {
          if (Array.isArray(e) && e.length)
            for (var n = 0; n < e.length; n += 1) if (e[n][t]) return !0;
          return !1;
        },
        Q = function (e) {
          return Array.isArray(e) ? e.join("") : e;
        },
        q = function (e, t) {
          return Array.isArray(e)
            ? e.reduce(
                function (e, n) {
                  return (
                    (function (e, t) {
                      for (var n = Object.keys(e), r = 0; r < n.length; r += 1)
                        if (t[n[r]] && t[n[r]].includes(e[n[r]])) return !0;
                      return !1;
                    })(n, t)
                      ? e.priority.push(n)
                      : e.default.push(n),
                    e
                  );
                },
                { priority: [], default: [] }
              )
            : { default: e };
        },
        X = function (e, t) {
          var n;
          return P({}, e, (((n = {})[t] = void 0), n));
        },
        J = [D.NOSCRIPT, D.SCRIPT, D.STYLE],
        Z = function (e, t) {
          return (
            void 0 === t && (t = !0),
            !1 === t
              ? String(e)
              : String(e)
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/"/g, "&quot;")
                  .replace(/'/g, "&#x27;")
          );
        },
        ee = function (e) {
          return Object.keys(e).reduce(function (t, n) {
            var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
            return t ? t + " " + r : r;
          }, "");
        },
        te = function (e, t) {
          return (
            void 0 === t && (t = {}),
            Object.keys(e).reduce(function (t, n) {
              return (t[F[n] || n] = e[n]), t;
            }, t)
          );
        },
        ne = function (t, n) {
          return n.map(function (n, r) {
            var o,
              i = (((o = { key: r })["data-rh"] = !0), o);
            return (
              Object.keys(n).forEach(function (e) {
                var t = F[e] || e;
                "innerHTML" === t || "cssText" === t
                  ? (i.dangerouslySetInnerHTML = {
                      __html: n.innerHTML || n.cssText,
                    })
                  : (i[t] = n[e]);
              }),
              e.createElement(t, i)
            );
          });
        },
        re = function (t, n, r) {
          switch (t) {
            case D.TITLE:
              return {
                toComponent: function () {
                  return (
                    (r = n.titleAttributes),
                    ((o = { key: (t = n.title) })["data-rh"] = !0),
                    (i = te(r, o)),
                    [e.createElement(D.TITLE, i, t)]
                  );
                  var t, r, o, i;
                },
                toString: function () {
                  return (function (e, t, n, r) {
                    var o = ee(n),
                      i = Q(t);
                    return o
                      ? "<" +
                          e +
                          ' data-rh="true" ' +
                          o +
                          ">" +
                          Z(i, r) +
                          "</" +
                          e +
                          ">"
                      : "<" + e + ' data-rh="true">' + Z(i, r) + "</" + e + ">";
                  })(t, n.title, n.titleAttributes, r);
                },
              };
            case "bodyAttributes":
            case "htmlAttributes":
              return {
                toComponent: function () {
                  return te(n);
                },
                toString: function () {
                  return ee(n);
                },
              };
            default:
              return {
                toComponent: function () {
                  return ne(t, n);
                },
                toString: function () {
                  return (function (e, t, n) {
                    return t.reduce(function (t, r) {
                      var o = Object.keys(r)
                          .filter(function (e) {
                            return !("innerHTML" === e || "cssText" === e);
                          })
                          .reduce(function (e, t) {
                            var o =
                              void 0 === r[t] ? t : t + '="' + Z(r[t], n) + '"';
                            return e ? e + " " + o : o;
                          }, ""),
                        i = r.innerHTML || r.cssText || "",
                        a = -1 === J.indexOf(e);
                      return (
                        t +
                        "<" +
                        e +
                        ' data-rh="true" ' +
                        o +
                        (a ? "/>" : ">" + i + "</" + e + ">")
                      );
                    }, "");
                  })(t, n, r);
                },
              };
          }
        },
        oe = function (e) {
          var t = e.baseTag,
            n = e.bodyAttributes,
            r = e.encode,
            o = e.htmlAttributes,
            i = e.noscriptTags,
            a = e.styleTags,
            l = e.title,
            u = void 0 === l ? "" : l,
            s = e.titleAttributes,
            c = e.linkTags,
            f = e.metaTags,
            d = e.scriptTags,
            p = {
              toComponent: function () {},
              toString: function () {
                return "";
              },
            };
          if (e.prioritizeSeoTags) {
            var h = (function (e) {
              var t = e.linkTags,
                n = e.scriptTags,
                r = e.encode,
                o = q(e.metaTags, z),
                i = q(t, M),
                a = q(n, R);
              return {
                priorityMethods: {
                  toComponent: function () {
                    return [].concat(
                      ne(D.META, o.priority),
                      ne(D.LINK, i.priority),
                      ne(D.SCRIPT, a.priority)
                    );
                  },
                  toString: function () {
                    return (
                      re(D.META, o.priority, r) +
                      " " +
                      re(D.LINK, i.priority, r) +
                      " " +
                      re(D.SCRIPT, a.priority, r)
                    );
                  },
                },
                metaTags: o.default,
                linkTags: i.default,
                scriptTags: a.default,
              };
            })(e);
            (p = h.priorityMethods),
              (c = h.linkTags),
              (f = h.metaTags),
              (d = h.scriptTags);
          }
          return {
            priority: p,
            base: re(D.BASE, t, r),
            bodyAttributes: re("bodyAttributes", n, r),
            htmlAttributes: re("htmlAttributes", o, r),
            link: re(D.LINK, c, r),
            meta: re(D.META, f, r),
            noscript: re(D.NOSCRIPT, i, r),
            script: re(D.SCRIPT, d, r),
            style: re(D.STYLE, a, r),
            title: re(D.TITLE, { title: u, titleAttributes: s }, r),
          };
        },
        ie = [],
        ae = function (e, t) {
          var n = this;
          void 0 === t && (t = "undefined" != typeof document),
            (this.instances = []),
            (this.value = {
              setHelmet: function (e) {
                n.context.helmet = e;
              },
              helmetInstances: {
                get: function () {
                  return n.canUseDOM ? ie : n.instances;
                },
                add: function (e) {
                  (n.canUseDOM ? ie : n.instances).push(e);
                },
                remove: function (e) {
                  var t = (n.canUseDOM ? ie : n.instances).indexOf(e);
                  (n.canUseDOM ? ie : n.instances).splice(t, 1);
                },
              },
            }),
            (this.context = e),
            (this.canUseDOM = t),
            t ||
              (e.helmet = oe({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: !0,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {},
              }));
        },
        le = e.createContext({}),
        ue = k().shape({
          setHelmet: k().func,
          helmetInstances: k().shape({
            get: k().func,
            add: k().func,
            remove: k().func,
          }),
        }),
        se = "undefined" != typeof document,
        ce = (function (t) {
          function n(e) {
            var r;
            return (
              ((r = t.call(this, e) || this).helmetData = new ae(
                r.props.context,
                n.canUseDOM
              )),
              r
            );
          }
          return (
            j(n, t),
            (n.prototype.render = function () {
              return e.createElement(
                le.Provider,
                { value: this.helmetData.value },
                this.props.children
              );
            }),
            n
          );
        })(e.Component);
      (ce.canUseDOM = se),
        (ce.propTypes = {
          context: k().shape({ helmet: k().shape() }),
          children: k().node.isRequired,
        }),
        (ce.defaultProps = { context: {} }),
        (ce.displayName = "HelmetProvider");
      var fe = function (e, t) {
          var n,
            r = document.head || document.querySelector(D.HEAD),
            o = r.querySelectorAll(e + "[data-rh]"),
            i = [].slice.call(o),
            a = [];
          return (
            t &&
              t.length &&
              t.forEach(function (t) {
                var r = document.createElement(e);
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) &&
                    ("innerHTML" === o
                      ? (r.innerHTML = t.innerHTML)
                      : "cssText" === o
                      ? r.styleSheet
                        ? (r.styleSheet.cssText = t.cssText)
                        : r.appendChild(document.createTextNode(t.cssText))
                      : r.setAttribute(o, void 0 === t[o] ? "" : t[o]));
                r.setAttribute("data-rh", "true"),
                  i.some(function (e, t) {
                    return (n = t), r.isEqualNode(e);
                  })
                    ? i.splice(n, 1)
                    : a.push(r);
              }),
            i.forEach(function (e) {
              return e.parentNode.removeChild(e);
            }),
            a.forEach(function (e) {
              return r.appendChild(e);
            }),
            { oldTags: i, newTags: a }
          );
        },
        de = function (e, t) {
          var n = document.getElementsByTagName(e)[0];
          if (n) {
            for (
              var r = n.getAttribute("data-rh"),
                o = r ? r.split(",") : [],
                i = [].concat(o),
                a = Object.keys(t),
                l = 0;
              l < a.length;
              l += 1
            ) {
              var u = a[l],
                s = t[u] || "";
              n.getAttribute(u) !== s && n.setAttribute(u, s),
                -1 === o.indexOf(u) && o.push(u);
              var c = i.indexOf(u);
              -1 !== c && i.splice(c, 1);
            }
            for (var f = i.length - 1; f >= 0; f -= 1) n.removeAttribute(i[f]);
            o.length === i.length
              ? n.removeAttribute("data-rh")
              : n.getAttribute("data-rh") !== a.join(",") &&
                n.setAttribute("data-rh", a.join(","));
          }
        },
        pe = function (e, t) {
          var n = e.baseTag,
            r = e.htmlAttributes,
            o = e.linkTags,
            i = e.metaTags,
            a = e.noscriptTags,
            l = e.onChangeClientState,
            u = e.scriptTags,
            s = e.styleTags,
            c = e.title,
            f = e.titleAttributes;
          de(D.BODY, e.bodyAttributes),
            de(D.HTML, r),
            (function (e, t) {
              void 0 !== e && document.title !== e && (document.title = Q(e)),
                de(D.TITLE, t);
            })(c, f);
          var d = {
              baseTag: fe(D.BASE, n),
              linkTags: fe(D.LINK, o),
              metaTags: fe(D.META, i),
              noscriptTags: fe(D.NOSCRIPT, a),
              scriptTags: fe(D.SCRIPT, u),
              styleTags: fe(D.STYLE, s),
            },
            p = {},
            h = {};
          Object.keys(d).forEach(function (e) {
            var t = d[e],
              n = t.newTags,
              r = t.oldTags;
            n.length && (p[e] = n), r.length && (h[e] = d[e].oldTags);
          }),
            t && t(),
            l(e, p, h);
        },
        he = null,
        ve = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, r = new Array(n), o = 0;
              o < n;
              o++
            )
              r[o] = arguments[o];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).rendered = !1), t
            );
          }
          j(t, e);
          var n = t.prototype;
          return (
            (n.shouldComponentUpdate = function (e) {
              return !N()(e, this.props);
            }),
            (n.componentDidUpdate = function () {
              this.emitChange();
            }),
            (n.componentWillUnmount = function () {
              this.props.context.helmetInstances.remove(this),
                this.emitChange();
            }),
            (n.emitChange = function () {
              var e,
                t,
                n = this.props.context,
                r = n.setHelmet,
                o = null,
                i =
                  ((e = n.helmetInstances.get().map(function (e) {
                    var t = P({}, e.props);
                    return delete t.context, t;
                  })),
                  {
                    baseTag: V(["href"], e),
                    bodyAttributes: W("bodyAttributes", e),
                    defer: U(e, "defer"),
                    encode: U(e, "encodeSpecialCharacters"),
                    htmlAttributes: W("htmlAttributes", e),
                    linkTags: Y(D.LINK, ["rel", "href"], e),
                    metaTags: Y(
                      D.META,
                      ["name", "charset", "http-equiv", "property", "itemprop"],
                      e
                    ),
                    noscriptTags: Y(D.NOSCRIPT, ["innerHTML"], e),
                    onChangeClientState: K(e),
                    scriptTags: Y(D.SCRIPT, ["src", "innerHTML"], e),
                    styleTags: Y(D.STYLE, ["cssText"], e),
                    title: $(e),
                    titleAttributes: W("titleAttributes", e),
                    prioritizeSeoTags: G(e, "prioritizeSeoTags"),
                  });
              ce.canUseDOM
                ? ((t = i),
                  he && cancelAnimationFrame(he),
                  t.defer
                    ? (he = requestAnimationFrame(function () {
                        pe(t, function () {
                          he = null;
                        });
                      }))
                    : (pe(t), (he = null)))
                : oe && (o = oe(i)),
                r(o);
            }),
            (n.init = function () {
              this.rendered ||
                ((this.rendered = !0),
                this.props.context.helmetInstances.add(this),
                this.emitChange());
            }),
            (n.render = function () {
              return this.init(), null;
            }),
            t
          );
        })(e.Component);
      (ve.propTypes = { context: ue.isRequired }),
        (ve.displayName = "HelmetDispatcher");
      var me = ["children"],
        ge = ["children"],
        ye = (function (t) {
          function n() {
            return t.apply(this, arguments) || this;
          }
          j(n, t);
          var r = n.prototype;
          return (
            (r.shouldComponentUpdate = function (e) {
              return !O()(X(this.props, "helmetData"), X(e, "helmetData"));
            }),
            (r.mapNestedChildrenToProps = function (e, t) {
              if (!t) return null;
              switch (e.type) {
                case D.SCRIPT:
                case D.NOSCRIPT:
                  return { innerHTML: t };
                case D.STYLE:
                  return { cssText: t };
                default:
                  throw new Error(
                    "<" +
                      e.type +
                      " /> elements are self-closing and can not contain children. Refer to our API for more information."
                  );
              }
            }),
            (r.flattenArrayTypeChildren = function (e) {
              var t,
                n = e.child,
                r = e.arrayTypeChildren;
              return P(
                {},
                r,
                (((t = {})[n.type] = [].concat(r[n.type] || [], [
                  P(
                    {},
                    e.newChildProps,
                    this.mapNestedChildrenToProps(n, e.nestedChildren)
                  ),
                ])),
                t)
              );
            }),
            (r.mapObjectTypeChildren = function (e) {
              var t,
                n,
                r = e.child,
                o = e.newProps,
                i = e.newChildProps,
                a = e.nestedChildren;
              switch (r.type) {
                case D.TITLE:
                  return P(
                    {},
                    o,
                    (((t = {})[r.type] = a), (t.titleAttributes = P({}, i)), t)
                  );
                case D.BODY:
                  return P({}, o, { bodyAttributes: P({}, i) });
                case D.HTML:
                  return P({}, o, { htmlAttributes: P({}, i) });
                default:
                  return P({}, o, (((n = {})[r.type] = P({}, i)), n));
              }
            }),
            (r.mapArrayTypeChildrenToProps = function (e, t) {
              var n = P({}, t);
              return (
                Object.keys(e).forEach(function (t) {
                  var r;
                  n = P({}, n, (((r = {})[t] = e[t]), r));
                }),
                n
              );
            }),
            (r.warnOnInvalidChildren = function (e, t) {
              return (
                T()(
                  B.some(function (t) {
                    return e.type === t;
                  }),
                  "function" == typeof e.type
                    ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."
                    : "Only elements types " +
                        B.join(", ") +
                        " are allowed. Helmet does not support rendering <" +
                        e.type +
                        "> elements. Refer to our API for more information."
                ),
                T()(
                  !t ||
                    "string" == typeof t ||
                    (Array.isArray(t) &&
                      !t.some(function (e) {
                        return "string" != typeof e;
                      })),
                  "Helmet expects a string as a child of <" +
                    e.type +
                    ">. Did you forget to wrap your children in braces? ( <" +
                    e.type +
                    ">{``}</" +
                    e.type +
                    "> ) Refer to our API for more information."
                ),
                !0
              );
            }),
            (r.mapChildrenToProps = function (t, n) {
              var r = this,
                o = {};
              return (
                e.Children.forEach(t, function (e) {
                  if (e && e.props) {
                    var t = e.props,
                      i = t.children,
                      a = A(t, me),
                      l = Object.keys(a).reduce(function (e, t) {
                        return (e[H[t] || t] = a[t]), e;
                      }, {}),
                      u = e.type;
                    switch (
                      ("symbol" == typeof u
                        ? (u = u.toString())
                        : r.warnOnInvalidChildren(e, i),
                      u)
                    ) {
                      case D.FRAGMENT:
                        n = r.mapChildrenToProps(i, n);
                        break;
                      case D.LINK:
                      case D.META:
                      case D.NOSCRIPT:
                      case D.SCRIPT:
                      case D.STYLE:
                        o = r.flattenArrayTypeChildren({
                          child: e,
                          arrayTypeChildren: o,
                          newChildProps: l,
                          nestedChildren: i,
                        });
                        break;
                      default:
                        n = r.mapObjectTypeChildren({
                          child: e,
                          newProps: n,
                          newChildProps: l,
                          nestedChildren: i,
                        });
                    }
                  }
                }),
                this.mapArrayTypeChildrenToProps(o, n)
              );
            }),
            (r.render = function () {
              var t = this.props,
                n = t.children,
                r = A(t, ge),
                o = P({}, r),
                i = r.helmetData;
              return (
                n && (o = this.mapChildrenToProps(n, o)),
                !i || i instanceof ae || (i = new ae(i.context, i.instances)),
                i
                  ? e.createElement(
                      ve,
                      P({}, o, { context: i.value, helmetData: void 0 })
                    )
                  : e.createElement(le.Consumer, null, function (t) {
                      return e.createElement(ve, P({}, o, { context: t }));
                    })
              );
            }),
            n
          );
        })(e.Component);
      (ye.propTypes = {
        base: k().object,
        bodyAttributes: k().object,
        children: k().oneOfType([k().arrayOf(k().node), k().node]),
        defaultTitle: k().string,
        defer: k().bool,
        encodeSpecialCharacters: k().bool,
        htmlAttributes: k().object,
        link: k().arrayOf(k().object),
        meta: k().arrayOf(k().object),
        noscript: k().arrayOf(k().object),
        onChangeClientState: k().func,
        script: k().arrayOf(k().object),
        style: k().arrayOf(k().object),
        title: k().string,
        titleAttributes: k().object,
        titleTemplate: k().string,
        prioritizeSeoTags: k().bool,
        helmetData: k().object,
      }),
        (ye.defaultProps = {
          defer: !0,
          encodeSpecialCharacters: !0,
          prioritizeSeoTags: !1,
        }),
        (ye.displayName = "Helmet");
      var be,
        we = n(184),
        Se = function (e) {
          var t = e.seoPageContent,
            n = t.title,
            r = t.description,
            o = t.touchIcon,
            i = t.favicon,
            a = t.thumbnail;
          return (0, we.jsx)(ce, {
            children: (0, we.jsxs)(ye, {
              children: [
                (0, we.jsx)("title", { children: n }),
                (0, we.jsx)("meta", { name: "description", content: r }),
                (0, we.jsx)("link", { rel: "apple-touch-icon", href: o }),
                (0, we.jsx)("link", {
                  rel: "icon",
                  type: "image/x-icon",
                  href: i,
                }),
                (0, we.jsx)("meta", { name: "thumbnail", content: a }),
                (0, we.jsx)("meta", { property: "og:title", content: n }),
                (0, we.jsx)("meta", { property: "og:description", content: r }),
                (0, we.jsx)("meta", { property: "og:image", content: a }),
                (0, we.jsx)("meta", { name: "twitter:title", content: n }),
                (0, we.jsx)("meta", {
                  name: "twitter:description",
                  content: r,
                }),
                (0, we.jsx)("meta", { name: "twitter:image", content: a }),
                (0, we.jsx)("meta", {
                  name: "twitter:card",
                  content: "summary_large_image",
                }),
              ],
            }),
          });
        };
      function xe(e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      function Ee(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return s(e);
          })(e) ||
          xe(e) ||
          c(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ke(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Ce(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, v(r.key), r);
        }
      }
      function Oe(e, t, n) {
        return (
          t && Ce(e.prototype, t),
          n && Ce(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function _e(e, t) {
        return (
          (_e = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          _e(e, t)
        );
      }
      function Te(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && _e(e, t);
      }
      function Le(e) {
        return (
          (Le = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Le(e)
        );
      }
      function Ne() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function Pe(e, t) {
        if (t && ("object" === o(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function je(e) {
        var t = Ne();
        return function () {
          var n,
            r = Le(e);
          if (t) {
            var o = Le(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Pe(this, n);
        };
      }
      function Ie(e, t, n) {
        return (
          (Ie = Ne()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var o = new (Function.bind.apply(e, r))();
                return n && _e(o, n.prototype), o;
              }),
          Ie.apply(null, arguments)
        );
      }
      function Ae(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (Ae = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return Ie(e, arguments, Le(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              _e(r, e)
            );
          }),
          Ae(e)
        );
      }
      function De() {
        return (
          (De = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          De.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(be || (be = {}));
      var Me,
        Re = "popstate";
      function ze(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function Be(e) {
        return { usr: e.state, key: e.key };
      }
      function Fe(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          De(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? Ue(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function He(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          o = void 0 === r ? "" : r,
          i = e.hash,
          a = void 0 === i ? "" : i;
        return (
          o && "?" !== o && (n += "?" === o.charAt(0) ? o : "?" + o),
          a && "#" !== a && (n += "#" === a.charAt(0) ? a : "#" + a),
          n
        );
      }
      function Ue(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function $e(e) {
        var t =
            "undefined" !== typeof window &&
            "undefined" !== typeof window.location &&
            "null" !== window.location.origin
              ? window.location.origin
              : window.location.href,
          n = "string" === typeof e ? e : He(e);
        return (
          ze(
            t,
            "No window.location.(origin|href) available to create URL for href: " +
              n
          ),
          new URL(n, t)
        );
      }
      function Ke(e, t, n, r) {
        void 0 === r && (r = {});
        var o = r,
          i = o.window,
          a = void 0 === i ? document.defaultView : i,
          l = o.v5Compat,
          u = void 0 !== l && l,
          s = a.history,
          c = be.Pop,
          f = null;
        function d() {
          (c = be.Pop), f && f({ action: c, location: p.location });
        }
        var p = {
          get action() {
            return c;
          },
          get location() {
            return e(a, s);
          },
          listen: function (e) {
            if (f)
              throw new Error("A history only accepts one active listener");
            return (
              a.addEventListener(Re, d),
              (f = e),
              function () {
                a.removeEventListener(Re, d), (f = null);
              }
            );
          },
          createHref: function (e) {
            return t(a, e);
          },
          encodeLocation: function (e) {
            var t = $e("string" === typeof e ? e : He(e));
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (e, t) {
            c = be.Push;
            var r = Fe(p.location, e, t);
            n && n(r, e);
            var o = Be(r),
              i = p.createHref(r);
            try {
              s.pushState(o, "", i);
            } catch (l) {
              a.location.assign(i);
            }
            u && f && f({ action: c, location: p.location });
          },
          replace: function (e, t) {
            c = be.Replace;
            var r = Fe(p.location, e, t);
            n && n(r, e);
            var o = Be(r),
              i = p.createHref(r);
            s.replaceState(o, "", i),
              u && f && f({ action: c, location: p.location });
          },
          go: function (e) {
            return s.go(e);
          },
        };
        return p;
      }
      function We(e, t, n) {
        void 0 === n && (n = "/");
        var r = et(("string" === typeof t ? Ue(t) : t).pathname || "/", n);
        if (null == r) return null;
        var o = Ve(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(o);
        for (var i = null, a = 0; null == i && a < o.length; ++a)
          i = Xe(o[a], Ze(r));
        return i;
      }
      function Ve(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        var o = function (e, o, i) {
          var a = {
            relativePath: void 0 === i ? e.path || "" : i,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: o,
            route: e,
          };
          a.relativePath.startsWith("/") &&
            (ze(
              a.relativePath.startsWith(r),
              'Absolute route path "' +
                a.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (a.relativePath = a.relativePath.slice(r.length)));
          var l = it([r, a.relativePath]),
            u = n.concat(a);
          e.children &&
            e.children.length > 0 &&
            (ze(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                l +
                '".'
            ),
            Ve(e.children, t, u, l)),
            (null != e.path || e.index) &&
              t.push({ path: l, score: qe(l, e.index), routesMeta: u });
        };
        return (
          e.forEach(function (e, t) {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
              var r,
                i = (function (e, t) {
                  var n =
                    ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
                  if (!n) {
                    if (
                      Array.isArray(e) ||
                      (n = c(e)) ||
                      (t && e && "number" === typeof e.length)
                    ) {
                      n && (e = n);
                      var r = 0,
                        o = function () {};
                      return {
                        s: o,
                        n: function () {
                          return r >= e.length
                            ? { done: !0 }
                            : { done: !1, value: e[r++] };
                        },
                        e: function (e) {
                          throw e;
                        },
                        f: o,
                      };
                    }
                    throw new TypeError(
                      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  }
                  var i,
                    a = !0,
                    l = !1;
                  return {
                    s: function () {
                      n = n.call(e);
                    },
                    n: function () {
                      var e = n.next();
                      return (a = e.done), e;
                    },
                    e: function (e) {
                      (l = !0), (i = e);
                    },
                    f: function () {
                      try {
                        a || null == n.return || n.return();
                      } finally {
                        if (l) throw i;
                      }
                    },
                  };
                })(Ye(e.path));
              try {
                for (i.s(); !(r = i.n()).done; ) {
                  var a = r.value;
                  o(e, t, a);
                }
              } catch (l) {
                i.e(l);
              } finally {
                i.f();
              }
            } else o(e, t);
          }),
          t
        );
      }
      function Ye(e) {
        var t = e.split("/");
        if (0 === t.length) return [];
        var n,
          r = u((n = t)) || xe(n) || c(n) || f(),
          o = r[0],
          i = r.slice(1),
          a = o.endsWith("?"),
          l = o.replace(/\?$/, "");
        if (0 === i.length) return a ? [l, ""] : [l];
        var s = Ye(i.join("/")),
          d = [];
        return (
          d.push.apply(
            d,
            Ee(
              s.map(function (e) {
                return "" === e ? l : [l, e].join("/");
              })
            )
          ),
          a && d.push.apply(d, Ee(s)),
          d.map(function (t) {
            return e.startsWith("/") && "" === t ? "/" : t;
          })
        );
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(Me || (Me = {}));
      var Ge = /^:\w+$/,
        Qe = function (e) {
          return "*" === e;
        };
      function qe(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(Qe) && (r += -2),
          t && (r += 2),
          n
            .filter(function (e) {
              return !Qe(e);
            })
            .reduce(function (e, t) {
              return e + (Ge.test(t) ? 3 : "" === t ? 1 : 10);
            }, r)
        );
      }
      function Xe(e, t) {
        for (
          var n = e.routesMeta, r = {}, o = "/", i = [], a = 0;
          a < n.length;
          ++a
        ) {
          var l = n[a],
            u = a === n.length - 1,
            s = "/" === o ? t : t.slice(o.length) || "/",
            c = Je(
              { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
              s
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var f = l.route;
          i.push({
            params: r,
            pathname: it([o, c.pathname]),
            pathnameBase: at(it([o, c.pathnameBase])),
            route: f,
          }),
            "/" !== c.pathnameBase && (o = it([o, c.pathnameBase]));
        }
        return i;
      }
      function Je(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            tt(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            var r = [],
              o =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/\/:(\w+)/g, function (e, t) {
                    return r.push(t), "/([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (o += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (o += "\\/*$")
              : "" !== e && "/" !== e && (o += "(?:(?=\\/|$))");
            var i = new RegExp(o, t ? void 0 : "i");
            return [i, r];
          })(e.path, e.caseSensitive, e.end),
          r = d(n, 2),
          o = r[0],
          i = r[1],
          a = t.match(o);
        if (!a) return null;
        var l = a[0],
          u = l.replace(/(.)\/+$/, "$1"),
          s = a.slice(1);
        return {
          params: i.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = s[n] || "";
              u = l.slice(0, l.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    tt(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ")."
                    ),
                    e
                  );
                }
              })(s[n] || "", t)),
              e
            );
          }, {}),
          pathname: l,
          pathnameBase: u,
          pattern: e,
        };
      }
      function Ze(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            tt(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function et(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function tt(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function nt(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function rt(e) {
        return e.filter(function (e, t) {
          return 0 === t || (e.route.path && e.route.path.length > 0);
        });
      }
      function ot(e, t, n, r) {
        var o;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (o = Ue(e))
            : (ze(
                !(o = De({}, e)).pathname || !o.pathname.includes("?"),
                nt("?", "pathname", "search", o)
              ),
              ze(
                !o.pathname || !o.pathname.includes("#"),
                nt("#", "pathname", "hash", o)
              ),
              ze(
                !o.search || !o.search.includes("#"),
                nt("#", "search", "hash", o)
              ));
        var i,
          a = "" === e || "" === o.pathname,
          l = a ? "/" : o.pathname;
        if (r || null == l) i = n;
        else {
          var u = t.length - 1;
          if (l.startsWith("..")) {
            for (var s = l.split("/"); ".." === s[0]; ) s.shift(), (u -= 1);
            o.pathname = s.join("/");
          }
          i = u >= 0 ? t[u] : "/";
        }
        var c = (function (e, t) {
            void 0 === t && (t = "/");
            var n = "string" === typeof e ? Ue(e) : e,
              r = n.pathname,
              o = n.search,
              i = void 0 === o ? "" : o,
              a = n.hash,
              l = void 0 === a ? "" : a,
              u = r
                ? r.startsWith("/")
                  ? r
                  : (function (e, t) {
                      var n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach(function (e) {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(r, t)
                : t;
            return { pathname: u, search: lt(i), hash: ut(l) };
          })(o, i),
          f = l && "/" !== l && l.endsWith("/"),
          d = (a || "." === l) && n.endsWith("/");
        return c.pathname.endsWith("/") || (!f && !d) || (c.pathname += "/"), c;
      }
      var it = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        at = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        lt = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        ut = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        },
        st = (function (e) {
          Te(n, e);
          var t = je(n);
          function n() {
            return ke(this, n), t.apply(this, arguments);
          }
          return Oe(n);
        })(Ae(Error));
      var ct = Oe(function e(t, n, r, o) {
        ke(this, e),
          void 0 === o && (o = !1),
          (this.status = t),
          (this.statusText = n || ""),
          (this.internal = o),
          r instanceof Error
            ? ((this.data = r.toString()), (this.error = r))
            : (this.data = r);
      });
      function ft(e) {
        return e instanceof ct;
      }
      var dt = ["post", "put", "patch", "delete"],
        pt = (new Set(dt), ["get"].concat(dt));
      new Set(pt),
        new Set([301, 302, 303, 307, 308]),
        new Set([307, 308]),
        "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          window.document.createElement;
      function ht() {
        return (
          (ht = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ht.apply(this, arguments)
        );
      }
      var vt =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        mt = e.useState,
        gt = e.useEffect,
        yt = e.useLayoutEffect,
        bt = e.useDebugValue;
      function wt(e) {
        var t = e.getSnapshot,
          n = e.value;
        try {
          var r = t();
          return !vt(n, r);
        } catch (o) {
          return !0;
        }
      }
      "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        window.document.createElement,
        t.useSyncExternalStore;
      var St = e.createContext(null);
      var xt = e.createContext(null);
      var Et = e.createContext(null);
      var kt = e.createContext(null);
      var Ct = e.createContext(null);
      var Ot = e.createContext(null);
      var _t = e.createContext({ outlet: null, matches: [] });
      var Tt = e.createContext(null);
      function Lt() {
        return null != e.useContext(Ot);
      }
      function Nt() {
        return Lt() || ze(!1), e.useContext(Ot).location;
      }
      function Pt() {
        Lt() || ze(!1);
        var t = e.useContext(Ct),
          n = t.basename,
          r = t.navigator,
          o = e.useContext(_t).matches,
          i = Nt().pathname,
          a = JSON.stringify(
            rt(o).map(function (e) {
              return e.pathnameBase;
            })
          ),
          l = e.useRef(!1);
        return (
          e.useEffect(function () {
            l.current = !0;
          }),
          e.useCallback(
            function (e, t) {
              if ((void 0 === t && (t = {}), l.current))
                if ("number" !== typeof e) {
                  var o = ot(e, JSON.parse(a), i, "path" === t.relative);
                  "/" !== n &&
                    (o.pathname = "/" === o.pathname ? n : it([n, o.pathname])),
                    (t.replace ? r.replace : r.push)(o, t.state, t);
                } else r.go(e);
            },
            [n, r, a, i]
          )
        );
      }
      function jt(t, n) {
        var r = (void 0 === n ? {} : n).relative,
          o = e.useContext(_t).matches,
          i = Nt().pathname,
          a = JSON.stringify(
            rt(o).map(function (e) {
              return e.pathnameBase;
            })
          );
        return e.useMemo(
          function () {
            return ot(t, JSON.parse(a), i, "path" === r);
          },
          [t, a, i, r]
        );
      }
      function It() {
        var t = (function () {
            var t,
              n = e.useContext(Tt),
              r = Bt(Dt.UseRouteError),
              o = Ft(Dt.UseRouteError);
            if (n) return n;
            return null == (t = r.errors) ? void 0 : t[o];
          })(),
          n = ft(t)
            ? t.status + " " + t.statusText
            : t instanceof Error
            ? t.message
            : JSON.stringify(t),
          r = t instanceof Error ? t.stack : null,
          o = "rgba(200,200,200, 0.5)",
          i = { padding: "0.5rem", backgroundColor: o },
          a = { padding: "2px 4px", backgroundColor: o };
        return e.createElement(
          e.Fragment,
          null,
          e.createElement("h2", null, "Unhandled Thrown Error!"),
          e.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? e.createElement("pre", { style: i }, r) : null,
          e.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"),
          e.createElement(
            "p",
            null,
            "You can provide a way better UX than this when your app throws errors by providing your own\xa0",
            e.createElement("code", { style: a }, "errorElement"),
            " props on\xa0",
            e.createElement("code", { style: a }, "<Route>")
          )
        );
      }
      var At,
        Dt,
        Mt = (function (t) {
          Te(r, t);
          var n = je(r);
          function r(e) {
            var t;
            return (
              ke(this, r),
              ((t = n.call(this, e)).state = {
                location: e.location,
                error: e.error,
              }),
              t
            );
          }
          return (
            Oe(
              r,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.error(
                      "React Router caught the following error during render",
                      e,
                      t
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.error
                      ? e.createElement(
                          _t.Provider,
                          { value: this.props.routeContext },
                          e.createElement(Tt.Provider, {
                            value: this.state.error,
                            children: this.props.component,
                          })
                        )
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return t.location !== e.location
                      ? { error: e.error, location: e.location }
                      : { error: e.error || t.error, location: t.location };
                  },
                },
              ]
            ),
            r
          );
        })(e.Component);
      function Rt(t) {
        var n = t.routeContext,
          r = t.match,
          o = t.children,
          i = e.useContext(St);
        return (
          i &&
            r.route.errorElement &&
            (i._deepestRenderedBoundaryId = r.route.id),
          e.createElement(_t.Provider, { value: n }, o)
        );
      }
      function zt(t, n, r) {
        if ((void 0 === n && (n = []), null == t)) {
          if (null == r || !r.errors) return null;
          t = r.matches;
        }
        var o = t,
          i = null == r ? void 0 : r.errors;
        if (null != i) {
          var a = o.findIndex(function (e) {
            return e.route.id && (null == i ? void 0 : i[e.route.id]);
          });
          a >= 0 || ze(!1), (o = o.slice(0, Math.min(o.length, a + 1)));
        }
        return o.reduceRight(function (t, a, l) {
          var u = a.route.id ? (null == i ? void 0 : i[a.route.id]) : null,
            s = r ? a.route.errorElement || e.createElement(It, null) : null,
            c = n.concat(o.slice(0, l + 1)),
            f = function () {
              return e.createElement(
                Rt,
                { match: a, routeContext: { outlet: t, matches: c } },
                u ? s : void 0 !== a.route.element ? a.route.element : t
              );
            };
          return r && (a.route.errorElement || 0 === l)
            ? e.createElement(Mt, {
                location: r.location,
                component: s,
                error: u,
                children: f(),
                routeContext: { outlet: null, matches: c },
              })
            : f();
        }, null);
      }
      function Bt(t) {
        var n = e.useContext(Et);
        return n || ze(!1), n;
      }
      function Ft(t) {
        var n = (function (t) {
            var n = e.useContext(_t);
            return n || ze(!1), n;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || ze(!1), r.route.id;
      }
      !(function (e) {
        e.UseRevalidator = "useRevalidator";
      })(At || (At = {})),
        (function (e) {
          (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator");
        })(Dt || (Dt = {}));
      var Ht;
      function Ut(e) {
        ze(!1);
      }
      function $t(t) {
        var n = t.basename,
          r = void 0 === n ? "/" : n,
          o = t.children,
          i = void 0 === o ? null : o,
          a = t.location,
          l = t.navigationType,
          u = void 0 === l ? be.Pop : l,
          s = t.navigator,
          c = t.static,
          f = void 0 !== c && c;
        Lt() && ze(!1);
        var d = r.replace(/^\/*/, "/"),
          p = e.useMemo(
            function () {
              return { basename: d, navigator: s, static: f };
            },
            [d, s, f]
          );
        "string" === typeof a && (a = Ue(a));
        var h = a,
          v = h.pathname,
          m = void 0 === v ? "/" : v,
          g = h.search,
          y = void 0 === g ? "" : g,
          b = h.hash,
          w = void 0 === b ? "" : b,
          S = h.state,
          x = void 0 === S ? null : S,
          E = h.key,
          k = void 0 === E ? "default" : E,
          C = e.useMemo(
            function () {
              var e = et(m, d);
              return null == e
                ? null
                : { pathname: e, search: y, hash: w, state: x, key: k };
            },
            [d, m, y, w, x, k]
          );
        return null == C
          ? null
          : e.createElement(
              Ct.Provider,
              { value: p },
              e.createElement(Ot.Provider, {
                children: i,
                value: { location: C, navigationType: u },
              })
            );
      }
      function Kt(t) {
        var n = t.children,
          r = t.location,
          o = e.useContext(xt);
        return (function (t, n) {
          Lt() || ze(!1);
          var r,
            o = e.useContext(Ct).navigator,
            i = e.useContext(Et),
            a = e.useContext(_t).matches,
            l = a[a.length - 1],
            u = l ? l.params : {},
            s = (l && l.pathname, l ? l.pathnameBase : "/"),
            c = (l && l.route, Nt());
          if (n) {
            var f,
              d = "string" === typeof n ? Ue(n) : n;
            "/" === s ||
              (null == (f = d.pathname) ? void 0 : f.startsWith(s)) ||
              ze(!1),
              (r = d);
          } else r = c;
          var p = r.pathname || "/",
            h = We(t, { pathname: "/" === s ? p : p.slice(s.length) || "/" }),
            v = zt(
              h &&
                h.map(function (e) {
                  return Object.assign({}, e, {
                    params: Object.assign({}, u, e.params),
                    pathname: it([
                      s,
                      o.encodeLocation
                        ? o.encodeLocation(e.pathname).pathname
                        : e.pathname,
                    ]),
                    pathnameBase:
                      "/" === e.pathnameBase
                        ? s
                        : it([
                            s,
                            o.encodeLocation
                              ? o.encodeLocation(e.pathnameBase).pathname
                              : e.pathnameBase,
                          ]),
                  });
                }),
              a,
              i || void 0
            );
          return n && v
            ? e.createElement(
                Ot.Provider,
                {
                  value: {
                    location: ht(
                      {
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default",
                      },
                      r
                    ),
                    navigationType: be.Pop,
                  },
                },
                v
              )
            : v;
        })(o && !n ? o.router.routes : Vt(n), r);
      }
      !(function (e) {
        (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error");
      })(Ht || (Ht = {}));
      var Wt = new Promise(function () {});
      e.Component;
      function Vt(t, n) {
        void 0 === n && (n = []);
        var r = [];
        return (
          e.Children.forEach(t, function (t, o) {
            if (e.isValidElement(t))
              if (t.type !== e.Fragment) {
                t.type !== Ut && ze(!1),
                  t.props.index && t.props.children && ze(!1);
                var i = [].concat(Ee(n), [o]),
                  a = {
                    id: t.props.id || i.join("-"),
                    caseSensitive: t.props.caseSensitive,
                    element: t.props.element,
                    index: t.props.index,
                    path: t.props.path,
                    loader: t.props.loader,
                    action: t.props.action,
                    errorElement: t.props.errorElement,
                    hasErrorBoundary: null != t.props.errorElement,
                    shouldRevalidate: t.props.shouldRevalidate,
                    handle: t.props.handle,
                  };
                t.props.children && (a.children = Vt(t.props.children, i)),
                  r.push(a);
              } else r.push.apply(r, Vt(t.props.children, n));
          }),
          r
        );
      }
      function Yt() {
        return (
          (Yt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Yt.apply(this, arguments)
        );
      }
      function Gt(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }
      var Qt = [
          "onClick",
          "relative",
          "reloadDocument",
          "replace",
          "state",
          "target",
          "to",
          "preventScrollReset",
        ],
        qt = [
          "aria-current",
          "caseSensitive",
          "className",
          "end",
          "style",
          "to",
          "children",
        ];
      function Xt(t) {
        var n,
          r = t.basename,
          o = t.children,
          i = t.window,
          a = e.useRef();
        null == a.current &&
          (a.current =
            (void 0 === (n = { window: i, v5Compat: !0 }) && (n = {}),
            Ke(
              function (e, t) {
                var n = e.location;
                return Fe(
                  "",
                  { pathname: n.pathname, search: n.search, hash: n.hash },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : He(t);
              },
              null,
              n
            )));
        var l = a.current,
          u = d(e.useState({ action: l.action, location: l.location }), 2),
          s = u[0],
          c = u[1];
        return (
          e.useLayoutEffect(
            function () {
              return l.listen(c);
            },
            [l]
          ),
          e.createElement($t, {
            basename: r,
            children: o,
            location: s.location,
            navigationType: s.action,
            navigator: l,
          })
        );
      }
      var Jt = e.forwardRef(function (t, n) {
        var r = t.onClick,
          o = t.relative,
          i = t.reloadDocument,
          a = t.replace,
          l = t.state,
          u = t.target,
          s = t.to,
          c = t.preventScrollReset,
          f = Gt(t, Qt),
          d = (function (t, n) {
            var r = (void 0 === n ? {} : n).relative;
            Lt() || ze(!1);
            var o = e.useContext(Ct),
              i = o.basename,
              a = o.navigator,
              l = jt(t, { relative: r }),
              u = l.hash,
              s = l.pathname,
              c = l.search,
              f = s;
            return (
              "/" !== i && (f = "/" === s ? i : it([i, s])),
              a.createHref({ pathname: f, search: c, hash: u })
            );
          })(s, { relative: o }),
          p = (function (t, n) {
            var r = void 0 === n ? {} : n,
              o = r.target,
              i = r.replace,
              a = r.state,
              l = r.preventScrollReset,
              u = r.relative,
              s = Pt(),
              c = Nt(),
              f = jt(t, { relative: u });
            return e.useCallback(
              function (e) {
                if (
                  (function (e, t) {
                    return (
                      0 === e.button &&
                      (!t || "_self" === t) &&
                      !(function (e) {
                        return !!(
                          e.metaKey ||
                          e.altKey ||
                          e.ctrlKey ||
                          e.shiftKey
                        );
                      })(e)
                    );
                  })(e, o)
                ) {
                  e.preventDefault();
                  var n = void 0 !== i ? i : He(c) === He(f);
                  s(t, {
                    replace: n,
                    state: a,
                    preventScrollReset: l,
                    relative: u,
                  });
                }
              },
              [c, s, f, i, a, o, t, l, u]
            );
          })(s, {
            replace: a,
            state: l,
            target: u,
            preventScrollReset: c,
            relative: o,
          });
        return e.createElement(
          "a",
          Yt({}, f, {
            href: d,
            onClick: i
              ? r
              : function (e) {
                  r && r(e), e.defaultPrevented || p(e);
                },
            ref: n,
            target: u,
          })
        );
      });
      var Zt = e.forwardRef(function (t, n) {
        var r = t["aria-current"],
          o = void 0 === r ? "page" : r,
          i = t.caseSensitive,
          a = void 0 !== i && i,
          l = t.className,
          u = void 0 === l ? "" : l,
          s = t.end,
          c = void 0 !== s && s,
          f = t.style,
          d = t.to,
          p = t.children,
          h = Gt(t, qt),
          v = jt(d, { relative: h.relative }),
          m = Nt(),
          g = e.useContext(Et),
          y = e.useContext(Ct).navigator,
          b = y.encodeLocation ? y.encodeLocation(v).pathname : v.pathname,
          w = m.pathname,
          S =
            g && g.navigation && g.navigation.location
              ? g.navigation.location.pathname
              : null;
        a ||
          ((w = w.toLowerCase()),
          (S = S ? S.toLowerCase() : null),
          (b = b.toLowerCase()));
        var x,
          E = w === b || (!c && w.startsWith(b) && "/" === w.charAt(b.length)),
          k =
            null != S &&
            (S === b || (!c && S.startsWith(b) && "/" === S.charAt(b.length))),
          C = E ? o : void 0;
        x =
          "function" === typeof u
            ? u({ isActive: E, isPending: k })
            : [u, E ? "active" : null, k ? "pending" : null]
                .filter(Boolean)
                .join(" ");
        var O = "function" === typeof f ? f({ isActive: E, isPending: k }) : f;
        return e.createElement(
          Jt,
          Yt({}, h, {
            "aria-current": C,
            className: x,
            ref: n,
            style: O,
            to: d,
          }),
          "function" === typeof p ? p({ isActive: E, isPending: k }) : p
        );
      });
      var en, tn;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmitImpl = "useSubmitImpl"),
          (e.UseFetcher = "useFetcher");
      })(en || (en = {})),
        (function (e) {
          (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(tn || (tn = {}));
      var nn,
        rn = function (e) {
          return e ? e.toLowerCase().replace(/\s/g, "") : "";
        },
        on = n(694),
        an = function (e) {
          var t = e.text,
            n = e.link,
            r = e.additionalClasses,
            o = e.newTab,
            i = e.variant,
            a = void 0 === i ? "white" : i,
            l = rn(t);
          return (0, we.jsx)("a", {
            href: null !== n && void 0 !== n ? n : "./#".concat(l),
            target: o ? "_blank" : "_self",
            className: on(
              "inline-block text-sm px-4 py-2 leading-none border",
              {
                "text-white border-white hover:border-transparent hover:text-black hover:bg-white":
                  "white" === a,
              },
              { "border-black hover:bg-black hover:text-white": "black" === a },
              r
            ),
            rel: "noreferrer",
            children: t,
          });
        },
        ln = n(694),
        un = n.n(ln),
        sn = ["title", "titleId"];
      function cn() {
        return (
          (cn = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          cn.apply(this, arguments)
        );
      }
      function fn(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function dn(t, n) {
        var r = t.title,
          o = t.titleId,
          i = fn(t, sn);
        return e.createElement(
          "svg",
          cn(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "w-6 h-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              ref: n,
              "aria-labelledby": o,
            },
            i
          ),
          r ? e.createElement("title", { id: o }, r) : null,
          nn ||
            (nn = e.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M7 16l-4-4m0 0l4-4m-4 4h18",
            }))
        );
      }
      var pn = e.forwardRef(dn),
        hn =
          (n.p,
          function () {
            return (
              (hn =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  return e;
                }),
              hn.apply(this, arguments)
            );
          });
      var vn = "",
        mn = null,
        gn = null,
        yn = null;
      function bn() {
        (vn = ""),
          null !== mn && mn.disconnect(),
          null !== gn && (window.clearTimeout(gn), (gn = null));
      }
      function wn(e) {
        return (
          (["BUTTON", "INPUT", "SELECT", "TEXTAREA"].includes(e.tagName) &&
            !e.hasAttribute("disabled")) ||
          (["A", "AREA"].includes(e.tagName) && e.hasAttribute("href"))
        );
      }
      function Sn() {
        var e = null;
        if ("#" === vn) e = document.body;
        else {
          var t = vn.replace("#", "");
          null === (e = document.getElementById(t)) &&
            "#top" === vn &&
            (e = document.body);
        }
        if (null !== e) {
          yn(e);
          var n = e.getAttribute("tabindex");
          return (
            null !== n || wn(e) || e.setAttribute("tabindex", -1),
            e.focus({ preventScroll: !0 }),
            null !== n || wn(e) || (e.blur(), e.removeAttribute("tabindex")),
            bn(),
            !0
          );
        }
        return !1;
      }
      function xn(t) {
        return e.forwardRef(function (n, r) {
          var o = "";
          "string" === typeof n.to && n.to.includes("#")
            ? (o = "#" + n.to.split("#").slice(1).join("#"))
            : "object" === typeof n.to &&
              "string" === typeof n.to.hash &&
              (o = n.to.hash);
          var i = {};
          t === Zt &&
            (i.isActive = function (e, t) {
              return e && e.isExact && t.hash === o;
            });
          var a = (function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                t.indexOf(r) < 0 &&
                (n[r] = e[r]);
            if (
              null != e &&
              "function" === typeof Object.getOwnPropertySymbols
            ) {
              var o = 0;
              for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                t.indexOf(r[o]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                  (n[r[o]] = e[r[o]]);
            }
            return n;
          })(n, ["scroll", "smooth", "timeout", "elementId"]);
          return e.createElement(
            t,
            hn({}, i, a, {
              onClick: function (e) {
                var t;
                bn(),
                  (vn = n.elementId ? "#" + n.elementId : o),
                  n.onClick && n.onClick(e),
                  "" === vn ||
                    e.defaultPrevented ||
                    0 !== e.button ||
                    (n.target && "_self" !== n.target) ||
                    e.metaKey ||
                    e.altKey ||
                    e.ctrlKey ||
                    e.shiftKey ||
                    ((yn =
                      n.scroll ||
                      function (e) {
                        return n.smooth
                          ? e.scrollIntoView({ behavior: "smooth" })
                          : e.scrollIntoView();
                      }),
                    (t = n.timeout),
                    window.setTimeout(function () {
                      !1 === Sn() &&
                        (null === mn && (mn = new MutationObserver(Sn)),
                        mn.observe(document, {
                          attributes: !0,
                          childList: !0,
                          subtree: !0,
                        }),
                        (gn = window.setTimeout(function () {
                          bn();
                        }, t || 1e4)));
                    }, 0));
              },
              ref: r,
            }),
            n.children
          );
        });
      }
      var En = xn(Jt),
        kn =
          (xn(Zt),
          function (e) {
            var t,
              n,
              r = e.headerContent,
              o = e.isFullSize,
              i = void 0 === o || o,
              a = e.displayBackBtn,
              l = void 0 !== a && a,
              u = r.title,
              s = r.subtitle,
              c = r.image,
              f = r.ctaText,
              d = r.ctaLink,
              p = r.thumbnail;
            return (0, we.jsxs)("section", {
              style: {
                backgroundImage: "url(".concat(
                  null !==
                    (t =
                      null !==
                        (n = null === p || void 0 === p ? void 0 : p.url) &&
                      void 0 !== n
                        ? n
                        : null === c || void 0 === c
                        ? void 0
                        : c.url) && void 0 !== t
                    ? t
                    : "../../default-banner-image.jpeg",
                  ")"
                ),
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
              },
              className: un()(
                "flex justify-center flex-col text-white",
                { "h-screen": i },
                { "py-36": !i }
              ),
              children: [
                l &&
                  (0, we.jsx)(En, {
                    to: "/#projects",
                    title: "Go back",
                    className:
                      "flex items-center justify-center p-2 rounded-full bg-gray-500 opacity-80 mb-7 ml-10 h-9 w-9 md:h-11 md:w-11",
                    children: (0, we.jsx)(pn, {}),
                  }),
                (0, we.jsx)("h1", {
                  className:
                    "text-4xl md:text-6xl font-bold uppercase drop-shadow-lg text-center",
                  children: null !== u && void 0 !== u ? u : "Hello World",
                }),
                s &&
                  (0, we.jsx)("p", {
                    className:
                      "text-xl md:text-3xl uppercase py-5 drop-shadow-lg text-center",
                    children: s,
                  }),
                f &&
                  d &&
                  (0, we.jsx)(an, {
                    text: f,
                    link: d,
                    additionalClasses:
                      "uppercase text-lg md:mt-2 text-center w-fit mx-auto",
                  }),
              ],
            });
          }),
        Cn = function (t) {
          var n,
            r,
            o = t.aboutContent,
            i = o.title,
            a = o.subtitle,
            l = o.image,
            u = o.description,
            s = o.cv,
            c = rn(i),
            f = d(
              (0, e.useState)(null === a || void 0 === a ? void 0 : a[0]),
              2
            ),
            p = f[0],
            h = f[1];
          return (
            (0, e.useEffect)(
              function () {
                if ((null === a || void 0 === a ? void 0 : a.length) > 0) {
                  var e = 1;
                  setInterval(function () {
                    var t = a[e];
                    h(t), ++e === a.length && (e = 0);
                  }, 3e3);
                }
              },
              [a]
            ),
            (0, we.jsxs)("section", {
              className: "md:flex",
              id: c,
              children: [
                (0, we.jsx)("div", {
                  style: {
                    backgroundImage: "url(".concat(
                      null !==
                        (n = null === l || void 0 === l ? void 0 : l.url) &&
                        void 0 !== n
                        ? n
                        : "../../default-banner-image.jpeg",
                      ")"
                    ),
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  },
                  className: "md:w-1/2 h-96 md:h-auto",
                }),
                (0, we.jsxs)("div", {
                  className:
                    "md:w-1/2 bg-slate-900 p-10 flex justify-center text-white flex-col",
                  children: [
                    (0, we.jsx)("h2", {
                      className: "uppercase font-bold text-xl",
                      children: i,
                    }),
                    (0, we.jsx)("p", {
                      className:
                        "font-mono text-4xl text-gray-100 my-5 lg:pb-5",
                      children: p,
                    }),
                    (0, we.jsx)("div", {
                      dangerouslySetInnerHTML: { __html: u },
                    }),
                    (null === s || void 0 === s ? void 0 : s.url) &&
                      (0, we.jsx)("div", {
                        className: "lg:py-10 transition-all duration-500",
                        children: (0, we.jsx)(an, {
                          text:
                            null !==
                              (r =
                                null === s || void 0 === s ? void 0 : s.text) &&
                            void 0 !== r
                              ? r
                              : "Download",
                          link: null === s || void 0 === s ? void 0 : s.url,
                          newTab: !0,
                          additionalClasses: "uppercase mt-5",
                        }),
                      }),
                  ],
                }),
              ],
            })
          );
        };
      function On(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var _n = ["children", "className"],
        Tn = ["className", "tag", "hasTrack", "children"],
        Ln = ["children", "className"];
      function Nn(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var Pn = "(prefers-reduced-motion: reduce)",
        jn = {
          CREATED: 1,
          MOUNTED: 2,
          IDLE: 3,
          MOVING: 4,
          SCROLLING: 5,
          DRAGGING: 6,
          DESTROYED: 7,
        };
      function In(e) {
        e.length = 0;
      }
      function An(e, t, n) {
        return Array.prototype.slice.call(e, t, n);
      }
      function Dn(e) {
        return e.bind.apply(e, [null].concat(An(arguments, 1)));
      }
      var Mn = setTimeout,
        Rn = function () {};
      function zn(e) {
        return requestAnimationFrame(e);
      }
      function Bn(e, t) {
        return typeof t === e;
      }
      function Fn(e) {
        return !Wn(e) && Bn("object", e);
      }
      var Hn = Array.isArray,
        Un = Dn(Bn, "function"),
        $n = Dn(Bn, "string"),
        Kn = Dn(Bn, "undefined");
      function Wn(e) {
        return null === e;
      }
      function Vn(e) {
        try {
          return (
            e instanceof (e.ownerDocument.defaultView || window).HTMLElement
          );
        } catch (t) {
          return !1;
        }
      }
      function Yn(e) {
        return Hn(e) ? e : [e];
      }
      function Gn(e, t) {
        Yn(e).forEach(t);
      }
      function Qn(e, t) {
        return e.indexOf(t) > -1;
      }
      function qn(e, t) {
        return e.push.apply(e, Yn(t)), e;
      }
      function Xn(e, t, n) {
        e &&
          Gn(t, function (t) {
            t && e.classList[n ? "add" : "remove"](t);
          });
      }
      function Jn(e, t) {
        Xn(e, $n(t) ? t.split(" ") : t, !0);
      }
      function Zn(e, t) {
        Gn(t, e.appendChild.bind(e));
      }
      function er(e, t) {
        Gn(e, function (e) {
          var n = (t || e).parentNode;
          n && n.insertBefore(e, t);
        });
      }
      function tr(e, t) {
        return Vn(e) && (e.msMatchesSelector || e.matches).call(e, t);
      }
      function nr(e, t) {
        var n = e ? An(e.children) : [];
        return t
          ? n.filter(function (e) {
              return tr(e, t);
            })
          : n;
      }
      function rr(e, t) {
        return t ? nr(e, t)[0] : e.firstElementChild;
      }
      var or = Object.keys;
      function ir(e, t, n) {
        return (
          e &&
            (n ? or(e).reverse() : or(e)).forEach(function (n) {
              "__proto__" !== n && t(e[n], n);
            }),
          e
        );
      }
      function ar(e) {
        return (
          An(arguments, 1).forEach(function (t) {
            ir(t, function (n, r) {
              e[r] = t[r];
            });
          }),
          e
        );
      }
      function lr(e) {
        return (
          An(arguments, 1).forEach(function (t) {
            ir(t, function (t, n) {
              Hn(t)
                ? (e[n] = t.slice())
                : Fn(t)
                ? (e[n] = lr({}, Fn(e[n]) ? e[n] : {}, t))
                : (e[n] = t);
            });
          }),
          e
        );
      }
      function ur(e, t) {
        Gn(t || or(e), function (t) {
          delete e[t];
        });
      }
      function sr(e, t) {
        Gn(e, function (e) {
          Gn(t, function (t) {
            e && e.removeAttribute(t);
          });
        });
      }
      function cr(e, t, n) {
        Fn(t)
          ? ir(t, function (t, n) {
              cr(e, n, t);
            })
          : Gn(e, function (e) {
              Wn(n) || "" === n ? sr(e, t) : e.setAttribute(t, String(n));
            });
      }
      function fr(e, t, n) {
        var r = document.createElement(e);
        return t && ($n(t) ? Jn(r, t) : cr(r, t)), n && Zn(n, r), r;
      }
      function dr(e, t, n) {
        if (Kn(n)) return getComputedStyle(e)[t];
        Wn(n) || (e.style[t] = "" + n);
      }
      function pr(e, t) {
        dr(e, "display", t);
      }
      function hr(e) {
        (e.setActive && e.setActive()) || e.focus({ preventScroll: !0 });
      }
      function vr(e, t) {
        return e.getAttribute(t);
      }
      function mr(e, t) {
        return e && e.classList.contains(t);
      }
      function gr(e) {
        return e.getBoundingClientRect();
      }
      function yr(e) {
        Gn(e, function (e) {
          e && e.parentNode && e.parentNode.removeChild(e);
        });
      }
      function br(e) {
        return rr(new DOMParser().parseFromString(e, "text/html").body);
      }
      function wr(e, t) {
        e.preventDefault(),
          t && (e.stopPropagation(), e.stopImmediatePropagation());
      }
      function Sr(e, t) {
        return e && e.querySelector(t);
      }
      function xr(e, t) {
        return t ? An(e.querySelectorAll(t)) : [];
      }
      function Er(e, t) {
        Xn(e, t, !1);
      }
      function kr(e) {
        return e.timeStamp;
      }
      function Cr(e) {
        return $n(e) ? e : e ? e + "px" : "";
      }
      var Or = "splide",
        _r = "data-" + Or;
      function Tr(e, t) {
        if (!e) throw new Error("[" + Or + "] " + (t || ""));
      }
      var Lr = Math.min,
        Nr = Math.max,
        Pr = Math.floor,
        jr = Math.ceil,
        Ir = Math.abs;
      function Ar(e, t, n) {
        return Ir(e - t) < n;
      }
      function Dr(e, t, n, r) {
        var o = Lr(t, n),
          i = Nr(t, n);
        return r ? o < e && e < i : o <= e && e <= i;
      }
      function Mr(e, t, n) {
        var r = Lr(t, n),
          o = Nr(t, n);
        return Lr(Nr(r, e), o);
      }
      function Rr(e) {
        return +(e > 0) - +(e < 0);
      }
      function zr(e, t) {
        return (
          Gn(t, function (t) {
            e = e.replace("%s", "" + t);
          }),
          e
        );
      }
      function Br(e) {
        return e < 10 ? "0" + e : "" + e;
      }
      var Fr = {};
      function Hr() {
        var e = [];
        function t(e, t, n) {
          Gn(e, function (e) {
            e &&
              Gn(t, function (t) {
                t.split(" ").forEach(function (t) {
                  var r = t.split(".");
                  n(e, r[0], r[1]);
                });
              });
          });
        }
        return {
          bind: function (n, r, o, i) {
            t(n, r, function (t, n, r) {
              var a = "addEventListener" in t,
                l = a
                  ? t.removeEventListener.bind(t, n, o, i)
                  : t.removeListener.bind(t, o);
              a ? t.addEventListener(n, o, i) : t.addListener(o),
                e.push([t, n, r, o, l]);
            });
          },
          unbind: function (n, r, o) {
            t(n, r, function (t, n, r) {
              e = e.filter(function (e) {
                return (
                  !!(
                    e[0] !== t ||
                    e[1] !== n ||
                    e[2] !== r ||
                    (o && e[3] !== o)
                  ) || (e[4](), !1)
                );
              });
            });
          },
          dispatch: function (e, t, n) {
            var r;
            return (
              "function" === typeof CustomEvent
                ? (r = new CustomEvent(t, { bubbles: true, detail: n }))
                : (r = document.createEvent("CustomEvent")).initCustomEvent(
                    t,
                    true,
                    !1,
                    n
                  ),
              e.dispatchEvent(r),
              r
            );
          },
          destroy: function () {
            e.forEach(function (e) {
              e[4]();
            }),
              In(e);
          },
        };
      }
      var Ur = "mounted",
        $r = "ready",
        Kr = "move",
        Wr = "moved",
        Vr = "click",
        Yr = "active",
        Gr = "inactive",
        Qr = "visible",
        qr = "hidden",
        Xr = "refresh",
        Jr = "updated",
        Zr = "resize",
        eo = "resized",
        to = "drag",
        no = "dragging",
        ro = "dragged",
        oo = "scroll",
        io = "scrolled",
        ao = "destroy",
        lo = "arrows:mounted",
        uo = "arrows:updated",
        so = "pagination:mounted",
        co = "pagination:updated",
        fo = "navigation:mounted",
        po = "autoplay:play",
        ho = "autoplay:playing",
        vo = "autoplay:pause",
        mo = "lazyload:loaded",
        go = "sk",
        yo = "sh",
        bo = "ei";
      function wo(e) {
        var t = e ? e.event.bus : document.createDocumentFragment(),
          n = Hr();
        return (
          e && e.event.on(ao, n.destroy),
          ar(n, {
            bus: t,
            on: function (e, r) {
              n.bind(t, Yn(e).join(" "), function (e) {
                r.apply(r, Hn(e.detail) ? e.detail : []);
              });
            },
            off: Dn(n.unbind, t),
            emit: function (e) {
              n.dispatch(t, e, An(arguments, 1));
            },
          })
        );
      }
      function So(e, t, n, r) {
        var o,
          i,
          a = Date.now,
          l = 0,
          u = !0,
          s = 0;
        function c() {
          if (!u) {
            if (
              ((l = e ? Lr((a() - o) / e, 1) : 1),
              n && n(l),
              l >= 1 && (t(), (o = a()), r && ++s >= r))
            )
              return f();
            i = zn(c);
          }
        }
        function f() {
          u = !0;
        }
        function d() {
          i && cancelAnimationFrame(i), (l = 0), (i = 0), (u = !0);
        }
        return {
          start: function (t) {
            t || d(), (o = a() - (t ? l * e : 0)), (u = !1), (i = zn(c));
          },
          rewind: function () {
            (o = a()), (l = 0), n && n(l);
          },
          pause: f,
          cancel: d,
          set: function (t) {
            e = t;
          },
          isPaused: function () {
            return u;
          },
        };
      }
      var xo = "Arrow",
        Eo = xo + "Left",
        ko = xo + "Right",
        Co = xo + "Up",
        Oo = xo + "Down",
        _o = "ttb",
        To = {
          width: ["height"],
          left: ["top", "right"],
          right: ["bottom", "left"],
          x: ["y"],
          X: ["Y"],
          Y: ["X"],
          ArrowLeft: [Co, ko],
          ArrowRight: [Oo, Eo],
        };
      var Lo = "role",
        No = "tabindex",
        Po = "aria-",
        jo = Po + "controls",
        Io = Po + "current",
        Ao = Po + "selected",
        Do = Po + "label",
        Mo = Po + "labelledby",
        Ro = Po + "hidden",
        zo = Po + "orientation",
        Bo = Po + "roledescription",
        Fo = Po + "live",
        Ho = Po + "busy",
        Uo = Po + "atomic",
        $o = [Lo, No, "disabled", jo, Io, Do, Mo, Ro, zo, Bo],
        Ko = Or + "__",
        Wo = "is-",
        Vo = Or,
        Yo = Ko + "track",
        Go = Ko + "list",
        Qo = Ko + "slide",
        qo = Qo + "--clone",
        Xo = Qo + "__container",
        Jo = Ko + "arrows",
        Zo = Ko + "arrow",
        ei = Zo + "--prev",
        ti = Zo + "--next",
        ni = Ko + "pagination",
        ri = ni + "__page",
        oi = Ko + "progress" + "__bar",
        ii = Ko + "toggle",
        ai = Ko + "sr",
        li = Wo + "initialized",
        ui = Wo + "active",
        si = Wo + "prev",
        ci = Wo + "next",
        fi = Wo + "visible",
        di = Wo + "loading",
        pi = Wo + "focus-in",
        hi = Wo + "overflow",
        vi = [ui, fi, si, ci, di, pi, hi],
        mi = {
          slide: Qo,
          clone: qo,
          arrows: Jo,
          arrow: Zo,
          prev: ei,
          next: ti,
          pagination: ni,
          page: ri,
          spinner: Ko + "spinner",
        };
      var gi = "touchstart mousedown",
        yi = "touchmove mousemove",
        bi = "touchend touchcancel mouseup click";
      var wi = "slide",
        Si = "loop",
        xi = "fade";
      function Ei(e, t, n, r) {
        var o,
          i = wo(e),
          a = i.on,
          l = i.emit,
          u = i.bind,
          s = e.Components,
          c = e.root,
          f = e.options,
          d = f.isNavigation,
          p = f.updateOnMove,
          h = f.i18n,
          v = f.pagination,
          m = f.slideFocus,
          g = s.Direction.resolve,
          y = vr(r, "style"),
          b = vr(r, Do),
          w = n > -1,
          S = rr(r, "." + Xo);
        function x() {
          var o = e.splides
            .map(function (e) {
              var n = e.splide.Components.Slides.getAt(t);
              return n ? n.slide.id : "";
            })
            .join(" ");
          cr(r, Do, zr(h.slideX, (w ? n : t) + 1)),
            cr(r, jo, o),
            cr(r, Lo, m ? "button" : ""),
            m && sr(r, Bo);
        }
        function E() {
          o || k();
        }
        function k() {
          if (!o) {
            var n = e.index;
            !(function () {
              var e = C();
              e !== mr(r, ui) &&
                (Xn(r, ui, e), cr(r, Io, (d && e) || ""), l(e ? Yr : Gr, O));
            })(),
              (function () {
                var t = (function () {
                    if (e.is(xi)) return C();
                    var t = gr(s.Elements.track),
                      n = gr(r),
                      o = g("left", !0),
                      i = g("right", !0);
                    return Pr(t[o]) <= jr(n[o]) && Pr(n[i]) <= jr(t[i]);
                  })(),
                  n = !t && (!C() || w);
                e.state.is([4, 5]) || cr(r, Ro, n || "");
                cr(xr(r, f.focusableNodes || ""), No, n ? -1 : ""),
                  m && cr(r, No, n ? -1 : 0);
                t !== mr(r, fi) && (Xn(r, fi, t), l(t ? Qr : qr, O));
                if (!t && document.activeElement === r) {
                  var o = s.Slides.getAt(e.index);
                  o && hr(o.slide);
                }
              })(),
              Xn(r, si, t === n - 1),
              Xn(r, ci, t === n + 1);
          }
        }
        function C() {
          var r = e.index;
          return r === t || (f.cloneStatus && r === n);
        }
        var O = {
          index: t,
          slideIndex: n,
          slide: r,
          container: S,
          isClone: w,
          mount: function () {
            w ||
              ((r.id = c.id + "-slide" + Br(t + 1)),
              cr(r, Lo, v ? "tabpanel" : "group"),
              cr(r, Bo, h.slide),
              cr(r, Do, b || zr(h.slideLabel, [t + 1, e.length]))),
              u(r, "click", Dn(l, Vr, O)),
              u(r, "keydown", Dn(l, go, O)),
              a([Wr, yo, io], k),
              a(fo, x),
              p && a(Kr, E);
          },
          destroy: function () {
            (o = !0),
              i.destroy(),
              Er(r, vi),
              sr(r, $o),
              cr(r, "style", y),
              cr(r, Do, b || "");
          },
          update: k,
          style: function (e, t, n) {
            dr((n && S) || r, e, t);
          },
          isWithin: function (n, r) {
            var o = Ir(n - t);
            return (
              w || (!f.rewind && !e.is(Si)) || (o = Lr(o, e.length - o)), o <= r
            );
          },
        };
        return O;
      }
      var ki = _r + "-interval";
      var Ci = { passive: !1, capture: !0 };
      var Oi = { Spacebar: " ", Right: ko, Left: Eo, Up: Co, Down: Oo };
      function _i(e) {
        return (e = $n(e) ? e : e.key), Oi[e] || e;
      }
      var Ti = "keydown";
      var Li = _r + "-lazy",
        Ni = Li + "-srcset",
        Pi = "[" + Li + "], [" + Ni + "]";
      var ji = [" ", "Enter"];
      var Ii = Object.freeze({
          __proto__: null,
          Media: function (e, t, n) {
            var r = e.state,
              o = n.breakpoints || {},
              i = n.reducedMotion || {},
              a = Hr(),
              l = [];
            function u(e) {
              e && a.destroy();
            }
            function s(e, t) {
              var n = matchMedia(t);
              a.bind(n, "change", c), l.push([e, n]);
            }
            function c() {
              var t = r.is(7),
                o = n.direction,
                i = l.reduce(function (e, t) {
                  return lr(e, t[1].matches ? t[0] : {});
                }, {});
              ur(n),
                f(i),
                n.destroy
                  ? e.destroy("completely" === n.destroy)
                  : t
                  ? (u(!0), e.mount())
                  : o !== n.direction && e.refresh();
            }
            function f(t, o, i) {
              lr(n, t),
                o && lr(Object.getPrototypeOf(n), t),
                (!i && r.is(1)) || e.emit(Jr, n);
            }
            return {
              setup: function () {
                var e = "min" === n.mediaQuery;
                or(o)
                  .sort(function (t, n) {
                    return e ? +t - +n : +n - +t;
                  })
                  .forEach(function (t) {
                    s(o[t], "(" + (e ? "min" : "max") + "-width:" + t + "px)");
                  }),
                  s(i, Pn),
                  c();
              },
              destroy: u,
              reduce: function (e) {
                matchMedia(Pn).matches && (e ? lr(n, i) : ur(n, or(i)));
              },
              set: f,
            };
          },
          Direction: function (e, t, n) {
            return {
              resolve: function (e, t, r) {
                var o =
                  "rtl" !== (r = r || n.direction) || t
                    ? r === _o
                      ? 0
                      : -1
                    : 1;
                return (
                  (To[e] && To[e][o]) ||
                  e.replace(/width|left|right/i, function (e, t) {
                    var n = To[e.toLowerCase()][o] || e;
                    return t > 0 ? n.charAt(0).toUpperCase() + n.slice(1) : n;
                  })
                );
              },
              orient: function (e) {
                return e * ("rtl" === n.direction ? 1 : -1);
              },
            };
          },
          Elements: function (e, t, n) {
            var r,
              o,
              i,
              a = wo(e),
              l = a.on,
              u = a.bind,
              s = e.root,
              c = n.i18n,
              f = {},
              d = [],
              p = [],
              h = [];
            function v() {
              (r = y("." + Yo)),
                (o = rr(r, "." + Go)),
                Tr(r && o, "A track/list element is missing."),
                qn(d, nr(o, "." + Qo + ":not(." + qo + ")")),
                ir(
                  {
                    arrows: Jo,
                    pagination: ni,
                    prev: ei,
                    next: ti,
                    bar: oi,
                    toggle: ii,
                  },
                  function (e, t) {
                    f[t] = y("." + e);
                  }
                ),
                ar(f, { root: s, track: r, list: o, slides: d }),
                (function () {
                  var e =
                      s.id ||
                      ((i = Or), "" + i + Br((Fr[i] = (Fr[i] || 0) + 1))),
                    t = n.role;
                  var i;
                  (s.id = e),
                    (r.id = r.id || e + "-track"),
                    (o.id = o.id || e + "-list"),
                    !vr(s, Lo) && "SECTION" !== s.tagName && t && cr(s, Lo, t);
                  cr(s, Bo, c.carousel), cr(o, Lo, "presentation");
                })(),
                g();
            }
            function m(e) {
              var t = $o.concat("style");
              In(d),
                Er(s, p),
                Er(r, h),
                sr([r, o], t),
                sr(s, e ? t : ["style", Bo]);
            }
            function g() {
              Er(s, p),
                Er(r, h),
                (p = b(Vo)),
                (h = b(Yo)),
                Jn(s, p),
                Jn(r, h),
                cr(s, Do, n.label),
                cr(s, Mo, n.labelledby);
            }
            function y(e) {
              var t = Sr(s, e);
              return t &&
                (function (e, t) {
                  if (Un(e.closest)) return e.closest(t);
                  for (var n = e; n && 1 === n.nodeType && !tr(n, t); )
                    n = n.parentElement;
                  return n;
                })(t, "." + Vo) === s
                ? t
                : void 0;
            }
            function b(e) {
              return [
                e + "--" + n.type,
                e + "--" + n.direction,
                n.drag && e + "--draggable",
                n.isNavigation && e + "--nav",
                e === Vo && ui,
              ];
            }
            return ar(f, {
              setup: v,
              mount: function () {
                l(Xr, m),
                  l(Xr, v),
                  l(Jr, g),
                  u(
                    document,
                    gi + " keydown",
                    function (e) {
                      i = "keydown" === e.type;
                    },
                    { capture: !0 }
                  ),
                  u(s, "focusin", function () {
                    Xn(s, pi, !!i);
                  });
              },
              destroy: m,
            });
          },
          Slides: function (e, t, n) {
            var r = wo(e),
              o = r.on,
              i = r.emit,
              a = r.bind,
              l = t.Elements,
              u = l.slides,
              s = l.list,
              c = [];
            function f() {
              u.forEach(function (e, t) {
                p(e, t, -1);
              });
            }
            function d() {
              v(function (e) {
                e.destroy();
              }),
                In(c);
            }
            function p(t, n, r) {
              var o = Ei(e, n, r, t);
              o.mount(),
                c.push(o),
                c.sort(function (e, t) {
                  return e.index - t.index;
                });
            }
            function h(e) {
              return e
                ? m(function (e) {
                    return !e.isClone;
                  })
                : c;
            }
            function v(e, t) {
              h(t).forEach(e);
            }
            function m(e) {
              return c.filter(
                Un(e)
                  ? e
                  : function (t) {
                      return $n(e) ? tr(t.slide, e) : Qn(Yn(e), t.index);
                    }
              );
            }
            return {
              mount: function () {
                f(), o(Xr, d), o(Xr, f);
              },
              destroy: d,
              update: function () {
                v(function (e) {
                  e.update();
                });
              },
              register: p,
              get: h,
              getIn: function (e) {
                var r = t.Controller,
                  o = r.toIndex(e),
                  i = r.hasFocus() ? 1 : n.perPage;
                return m(function (e) {
                  return Dr(e.index, o, o + i - 1);
                });
              },
              getAt: function (e) {
                return m(e)[0];
              },
              add: function (e, t) {
                Gn(e, function (e) {
                  if (($n(e) && (e = br(e)), Vn(e))) {
                    var r = u[t];
                    r ? er(e, r) : Zn(s, e),
                      Jn(e, n.classes.slide),
                      (function (e, t) {
                        var n = xr(e, "img"),
                          r = n.length;
                        r
                          ? n.forEach(function (e) {
                              a(e, "load error", function () {
                                --r || t();
                              });
                            })
                          : t();
                      })(e, Dn(i, Zr));
                  }
                }),
                  i(Xr);
              },
              remove: function (e) {
                yr(
                  m(e).map(function (e) {
                    return e.slide;
                  })
                ),
                  i(Xr);
              },
              forEach: v,
              filter: m,
              style: function (e, t, n) {
                v(function (r) {
                  r.style(e, t, n);
                });
              },
              getLength: function (e) {
                return e ? u.length : c.length;
              },
              isEnough: function () {
                return c.length > n.perPage;
              },
            };
          },
          Layout: function (e, t, n) {
            var r,
              o,
              i,
              a = wo(e),
              l = a.on,
              u = a.bind,
              s = a.emit,
              c = t.Slides,
              f = t.Direction.resolve,
              d = t.Elements,
              p = d.root,
              h = d.track,
              v = d.list,
              m = c.getAt,
              g = c.style;
            function y() {
              (r = n.direction === _o),
                dr(p, "maxWidth", Cr(n.width)),
                dr(h, f("paddingLeft"), w(!1)),
                dr(h, f("paddingRight"), w(!0)),
                b(!0);
            }
            function b(e) {
              var t = gr(p);
              (e || o.width !== t.width || o.height !== t.height) &&
                (dr(
                  h,
                  "height",
                  (function () {
                    var e = "";
                    r &&
                      (Tr((e = S()), "height or heightRatio is missing."),
                      (e = "calc(" + e + " - " + w(!1) + " - " + w(!0) + ")"));
                    return e;
                  })()
                ),
                g(f("marginRight"), Cr(n.gap)),
                g(
                  "width",
                  n.autoWidth ? null : Cr(n.fixedWidth) || (r ? "" : x())
                ),
                g(
                  "height",
                  Cr(n.fixedHeight) || (r ? (n.autoHeight ? null : x()) : S()),
                  !0
                ),
                (o = t),
                s(eo),
                i !== (i = T()) && (Xn(p, hi, i), s("overflow", i)));
            }
            function w(e) {
              var t = n.padding,
                r = f(e ? "right" : "left");
              return (t && Cr(t[r] || (Fn(t) ? 0 : t))) || "0px";
            }
            function S() {
              return Cr(n.height || gr(v).width * n.heightRatio);
            }
            function x() {
              var e = Cr(n.gap);
              return (
                "calc((100%" +
                (e && " + " + e) +
                ")/" +
                (n.perPage || 1) +
                (e && " - " + e) +
                ")"
              );
            }
            function E() {
              return gr(v)[f("width")];
            }
            function k(e, t) {
              var n = m(e || 0);
              return n ? gr(n.slide)[f("width")] + (t ? 0 : _()) : 0;
            }
            function C(e, t) {
              var n = m(e);
              if (n) {
                var r = gr(n.slide)[f("right")],
                  o = gr(v)[f("left")];
                return Ir(r - o) + (t ? 0 : _());
              }
              return 0;
            }
            function O(t) {
              return C(e.length - 1) - C(0) + k(0, t);
            }
            function _() {
              var e = m(0);
              return (e && parseFloat(dr(e.slide, f("marginRight")))) || 0;
            }
            function T() {
              return e.is(xi) || O(!0) > E();
            }
            return {
              mount: function () {
                y(),
                  u(
                    window,
                    "resize load",
                    (function (e, t) {
                      var n = So(t || 0, e, null, 1);
                      return function () {
                        n.isPaused() && n.start();
                      };
                    })(Dn(s, Zr))
                  ),
                  l([Jr, Xr], y),
                  l(Zr, b);
              },
              resize: b,
              listSize: E,
              slideSize: k,
              sliderSize: O,
              totalSize: C,
              getPadding: function (e) {
                return (
                  parseFloat(dr(h, f("padding" + (e ? "Right" : "Left")))) || 0
                );
              },
              isOverflow: T,
            };
          },
          Clones: function (e, t, n) {
            var r,
              o = wo(e),
              i = o.on,
              a = t.Elements,
              l = t.Slides,
              u = t.Direction.resolve,
              s = [];
            function c() {
              i(Xr, f),
                i([Jr, Zr], p),
                (r = h()) &&
                  (!(function (t) {
                    var r = l.get().slice(),
                      o = r.length;
                    if (o) {
                      for (; r.length < t; ) qn(r, r);
                      qn(r.slice(-t), r.slice(0, t)).forEach(function (i, u) {
                        var c = u < t,
                          f = (function (t, r) {
                            var o = t.cloneNode(!0);
                            return (
                              Jn(o, n.classes.clone),
                              (o.id = e.root.id + "-clone" + Br(r + 1)),
                              o
                            );
                          })(i.slide, u);
                        c ? er(f, r[0].slide) : Zn(a.list, f),
                          qn(s, f),
                          l.register(f, u - t + (c ? 0 : o), i.index);
                      });
                    }
                  })(r),
                  t.Layout.resize(!0));
            }
            function f() {
              d(), c();
            }
            function d() {
              yr(s), In(s), o.destroy();
            }
            function p() {
              var e = h();
              r !== e && (r < e || !e) && o.emit(Xr);
            }
            function h() {
              var r = n.clones;
              if (e.is(Si)) {
                if (Kn(r)) {
                  var o = n[u("fixedWidth")] && t.Layout.slideSize(0);
                  r =
                    (o && jr(gr(a.track)[u("width")] / o)) ||
                    (n[u("autoWidth")] && e.length) ||
                    2 * n.perPage;
                }
              } else r = 0;
              return r;
            }
            return { mount: c, destroy: d };
          },
          Move: function (e, t, n) {
            var r,
              o = wo(e),
              i = o.on,
              a = o.emit,
              l = e.state.set,
              u = t.Layout,
              s = u.slideSize,
              c = u.getPadding,
              f = u.totalSize,
              d = u.listSize,
              p = u.sliderSize,
              h = t.Direction,
              v = h.resolve,
              m = h.orient,
              g = t.Elements,
              y = g.list,
              b = g.track;
            function w() {
              t.Controller.isBusy() ||
                (t.Scroll.cancel(), S(e.index), t.Slides.update());
            }
            function S(e) {
              x(O(e, !0));
            }
            function x(n, r) {
              if (!e.is(xi)) {
                var o = r
                  ? n
                  : (function (n) {
                      if (e.is(Si)) {
                        var r = C(n),
                          o = r > t.Controller.getEnd();
                        (r < 0 || o) && (n = E(n, o));
                      }
                      return n;
                    })(n);
                dr(y, "transform", "translate" + v("X") + "(" + o + "px)"),
                  n !== o && a(yo);
              }
            }
            function E(e, t) {
              var n = e - T(t),
                r = p();
              return (e -= m(r * (jr(Ir(n) / r) || 1)) * (t ? 1 : -1));
            }
            function k() {
              x(_(), !0), r.cancel();
            }
            function C(e) {
              for (
                var n = t.Slides.get(), r = 0, o = 1 / 0, i = 0;
                i < n.length;
                i++
              ) {
                var a = n[i].index,
                  l = Ir(O(a, !0) - e);
                if (!(l <= o)) break;
                (o = l), (r = a);
              }
              return r;
            }
            function O(t, r) {
              var o = m(
                f(t - 1) -
                  (function (e) {
                    var t = n.focus;
                    return "center" === t
                      ? (d() - s(e, !0)) / 2
                      : +t * s(e) || 0;
                  })(t)
              );
              return r
                ? (function (t) {
                    n.trimSpace && e.is(wi) && (t = Mr(t, 0, m(p(!0) - d())));
                    return t;
                  })(o)
                : o;
            }
            function _() {
              var e = v("left");
              return gr(y)[e] - gr(b)[e] + m(c(!1));
            }
            function T(e) {
              return O(e ? t.Controller.getEnd() : 0, !!n.trimSpace);
            }
            return {
              mount: function () {
                (r = t.Transition), i([Ur, eo, Jr, Xr], w);
              },
              move: function (e, t, n, o) {
                e !== t &&
                  (function (e) {
                    var t = m(E(_(), e));
                    return e
                      ? t >= 0
                      : t <= y[v("scrollWidth")] - gr(b)[v("width")];
                  })(e > n) &&
                  (k(), x(E(_(), e > n), !0)),
                  l(4),
                  a(Kr, t, n, e),
                  r.start(t, function () {
                    l(3), a(Wr, t, n, e), o && o();
                  });
              },
              jump: S,
              translate: x,
              shift: E,
              cancel: k,
              toIndex: C,
              toPosition: O,
              getPosition: _,
              getLimit: T,
              exceededLimit: function (e, t) {
                t = Kn(t) ? _() : t;
                var n = !0 !== e && m(t) < m(T(!1)),
                  r = !1 !== e && m(t) > m(T(!0));
                return n || r;
              },
              reposition: w,
            };
          },
          Controller: function (e, t, n) {
            var r,
              o,
              i,
              a,
              l = wo(e),
              u = l.on,
              s = l.emit,
              c = t.Move,
              f = c.getPosition,
              d = c.getLimit,
              p = c.toPosition,
              h = t.Slides,
              v = h.isEnough,
              m = h.getLength,
              g = n.omitEnd,
              y = e.is(Si),
              b = e.is(wi),
              w = Dn(O, !1),
              S = Dn(O, !0),
              x = n.start || 0,
              E = x;
            function k() {
              (o = m(!0)), (i = n.perMove), (a = n.perPage), (r = L());
              var e = Mr(x, 0, g ? r : o - 1);
              e !== x && ((x = e), c.reposition());
            }
            function C() {
              r !== L() && s(bo);
            }
            function O(e, t) {
              var n = i || (I() ? 1 : a),
                o = _(x + n * (e ? -1 : 1), x, !(i || I()));
              return -1 === o && b && !Ar(f(), d(!e), 1)
                ? e
                  ? 0
                  : r
                : t
                ? o
                : T(o);
            }
            function _(t, l, u) {
              if (v() || I()) {
                var s = (function (t) {
                  if (b && "move" === n.trimSpace && t !== x)
                    for (
                      var r = f();
                      r === p(t, !0) && Dr(t, 0, e.length - 1, !n.rewind);

                    )
                      t < x ? --t : ++t;
                  return t;
                })(t);
                s !== t && ((l = t), (t = s), (u = !1)),
                  t < 0 || t > r
                    ? (t =
                        i || (!Dr(0, t, l, !0) && !Dr(r, l, t, !0))
                          ? y
                            ? u
                              ? t < 0
                                ? -(o % a || a)
                                : o
                              : t
                            : n.rewind
                            ? t < 0
                              ? r
                              : 0
                            : -1
                          : N(P(t)))
                    : u && t !== l && (t = N(P(l) + (t < l ? -1 : 1)));
              } else t = -1;
              return t;
            }
            function T(e) {
              return y ? (e + o) % o || 0 : e;
            }
            function L() {
              for (var e = o - (I() || (y && i) ? 1 : a); g && e-- > 0; )
                if (p(o - 1, !0) !== p(e, !0)) {
                  e++;
                  break;
                }
              return Mr(e, 0, o - 1);
            }
            function N(e) {
              return Mr(I() ? e : a * e, 0, r);
            }
            function P(e) {
              return I() ? Lr(e, r) : Pr((e >= r ? o - 1 : e) / a);
            }
            function j(e) {
              e !== x && ((E = x), (x = e));
            }
            function I() {
              return !Kn(n.focus) || n.isNavigation;
            }
            function A() {
              return e.state.is([4, 5]) && !!n.waitForTransition;
            }
            return {
              mount: function () {
                k(), u([Jr, Xr, bo], k), u(eo, C);
              },
              go: function (e, t, n) {
                if (!A()) {
                  var o = (function (e) {
                      var t = x;
                      if ($n(e)) {
                        var n = e.match(/([+\-<>])(\d+)?/) || [],
                          o = n[1],
                          i = n[2];
                        "+" === o || "-" === o
                          ? (t = _(x + +("" + o + (+i || 1)), x))
                          : ">" === o
                          ? (t = i ? N(+i) : w(!0))
                          : "<" === o && (t = S(!0));
                      } else t = y ? e : Mr(e, 0, r);
                      return t;
                    })(e),
                    i = T(o);
                  i > -1 && (t || i !== x) && (j(i), c.move(o, i, E, n));
                }
              },
              scroll: function (e, n, o, i) {
                t.Scroll.scroll(e, n, o, function () {
                  var e = T(c.toIndex(f()));
                  j(g ? Lr(e, r) : e), i && i();
                });
              },
              getNext: w,
              getPrev: S,
              getAdjacent: O,
              getEnd: L,
              setIndex: j,
              getIndex: function (e) {
                return e ? E : x;
              },
              toIndex: N,
              toPage: P,
              toDest: function (e) {
                var t = c.toIndex(e);
                return b ? Mr(t, 0, r) : t;
              },
              hasFocus: I,
              isBusy: A,
            };
          },
          Arrows: function (e, t, n) {
            var r,
              o,
              i = wo(e),
              a = i.on,
              l = i.bind,
              u = i.emit,
              s = n.classes,
              c = n.i18n,
              f = t.Elements,
              d = t.Controller,
              p = f.arrows,
              h = f.track,
              v = p,
              m = f.prev,
              g = f.next,
              y = {};
            function b() {
              !(function () {
                var e = n.arrows;
                !e ||
                  (m && g) ||
                  ((v = p || fr("div", s.arrows)),
                  (m = E(!0)),
                  (g = E(!1)),
                  (r = !0),
                  Zn(v, [m, g]),
                  !p && er(v, h));
                m &&
                  g &&
                  (ar(y, { prev: m, next: g }),
                  pr(v, e ? "" : "none"),
                  Jn(v, (o = Jo + "--" + n.direction)),
                  e &&
                    (a([Ur, Wr, Xr, io, bo], k),
                    l(g, "click", Dn(x, ">")),
                    l(m, "click", Dn(x, "<")),
                    k(),
                    cr([m, g], jo, h.id),
                    u(lo, m, g)));
              })(),
                a(Jr, w);
            }
            function w() {
              S(), b();
            }
            function S() {
              i.destroy(),
                Er(v, o),
                r ? (yr(p ? [m, g] : v), (m = g = null)) : sr([m, g], $o);
            }
            function x(e) {
              d.go(e, !0);
            }
            function E(e) {
              return br(
                '<button class="' +
                  s.arrow +
                  " " +
                  (e ? s.prev : s.next) +
                  '" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="' +
                  (n.arrowPath ||
                    "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") +
                  '" />'
              );
            }
            function k() {
              if (m && g) {
                var t = e.index,
                  n = d.getPrev(),
                  r = d.getNext(),
                  o = n > -1 && t < n ? c.last : c.prev,
                  i = r > -1 && t > r ? c.first : c.next;
                (m.disabled = n < 0),
                  (g.disabled = r < 0),
                  cr(m, Do, o),
                  cr(g, Do, i),
                  u(uo, m, g, n, r);
              }
            }
            return { arrows: y, mount: b, destroy: S, update: k };
          },
          Autoplay: function (e, t, n) {
            var r,
              o,
              i = wo(e),
              a = i.on,
              l = i.bind,
              u = i.emit,
              s = So(n.interval, e.go.bind(e, ">"), function (e) {
                var t = f.bar;
                t && dr(t, "width", 100 * e + "%"), u(ho, e);
              }),
              c = s.isPaused,
              f = t.Elements,
              d = t.Elements,
              p = d.root,
              h = d.toggle,
              v = n.autoplay,
              m = "pause" === v;
            function g() {
              c() &&
                t.Slides.isEnough() &&
                (s.start(!n.resetProgress), (o = r = m = !1), w(), u(po));
            }
            function y(e) {
              void 0 === e && (e = !0),
                (m = !!e),
                w(),
                c() || (s.pause(), u(vo));
            }
            function b() {
              m || (r || o ? y(!1) : g());
            }
            function w() {
              h && (Xn(h, ui, !m), cr(h, Do, n.i18n[m ? "play" : "pause"]));
            }
            function S(e) {
              var r = t.Slides.getAt(e);
              s.set((r && +vr(r.slide, ki)) || n.interval);
            }
            return {
              mount: function () {
                v &&
                  (!(function () {
                    n.pauseOnHover &&
                      l(p, "mouseenter mouseleave", function (e) {
                        (r = "mouseenter" === e.type), b();
                      });
                    n.pauseOnFocus &&
                      l(p, "focusin focusout", function (e) {
                        (o = "focusin" === e.type), b();
                      });
                    h &&
                      l(h, "click", function () {
                        m ? g() : y(!0);
                      });
                    a([Kr, oo, Xr], s.rewind), a(Kr, S);
                  })(),
                  h && cr(h, jo, f.track.id),
                  m || g(),
                  w());
              },
              destroy: s.cancel,
              play: g,
              pause: y,
              isPaused: c,
            };
          },
          Cover: function (e, t, n) {
            var r = wo(e).on;
            function o(e) {
              t.Slides.forEach(function (t) {
                var n = rr(t.container || t.slide, "img");
                n && n.src && i(e, n, t);
              });
            }
            function i(e, t, n) {
              n.style(
                "background",
                e ? 'center/cover no-repeat url("' + t.src + '")' : "",
                !0
              ),
                pr(t, e ? "none" : "");
            }
            return {
              mount: function () {
                n.cover && (r(mo, Dn(i, !0)), r([Ur, Jr, Xr], Dn(o, !0)));
              },
              destroy: Dn(o, !1),
            };
          },
          Scroll: function (e, t, n) {
            var r,
              o,
              i = wo(e),
              a = i.on,
              l = i.emit,
              u = e.state.set,
              s = t.Move,
              c = s.getPosition,
              f = s.getLimit,
              d = s.exceededLimit,
              p = s.translate,
              h = e.is(wi),
              v = 1;
            function m(e, n, i, a, f) {
              var p = c();
              if ((b(), i && (!h || !d()))) {
                var m = t.Layout.sliderSize(),
                  w = Rr(e) * m * Pr(Ir(e) / m) || 0;
                e = s.toPosition(t.Controller.toDest(e % m)) + w;
              }
              var S = Ar(p, e, 1);
              (v = 1),
                (n = S ? 0 : n || Nr(Ir(e - p) / 1.5, 800)),
                (o = a),
                (r = So(n, g, Dn(y, p, e, f), 1)),
                u(5),
                l(oo),
                r.start();
            }
            function g() {
              u(3), o && o(), l(io);
            }
            function y(e, t, r, i) {
              var a = c(),
                l =
                  (e +
                    (t - e) *
                      (function (e) {
                        var t = n.easingFunc;
                        return t ? t(e) : 1 - Math.pow(1 - e, 4);
                      })(i) -
                    a) *
                  v;
              p(a + l),
                h &&
                  !r &&
                  d() &&
                  ((v *= 0.6), Ir(l) < 10 && m(f(d(!0)), 600, !1, o, !0));
            }
            function b() {
              r && r.cancel();
            }
            function w() {
              r && !r.isPaused() && (b(), g());
            }
            return {
              mount: function () {
                a(Kr, b), a([Jr, Xr], w);
              },
              destroy: b,
              scroll: m,
              cancel: w,
            };
          },
          Drag: function (e, t, n) {
            var r,
              o,
              i,
              a,
              l,
              u,
              s,
              c,
              f = wo(e),
              d = f.on,
              p = f.emit,
              h = f.bind,
              v = f.unbind,
              m = e.state,
              g = t.Move,
              y = t.Scroll,
              b = t.Controller,
              w = t.Elements.track,
              S = t.Media.reduce,
              x = t.Direction,
              E = x.resolve,
              k = x.orient,
              C = g.getPosition,
              O = g.exceededLimit,
              _ = !1;
            function T() {
              var e = n.drag;
              B(!e), (a = "free" === e);
            }
            function L(e) {
              if (((u = !1), !s)) {
                var t = z(e);
                !(function (e) {
                  var t = n.noDrag;
                  return !tr(e, "." + ri + ", ." + Zo) && (!t || !tr(e, t));
                })(e.target) ||
                  (!t && e.button) ||
                  (b.isBusy()
                    ? wr(e, !0)
                    : ((c = t ? w : window),
                      (l = m.is([4, 5])),
                      (i = null),
                      h(c, yi, N, Ci),
                      h(c, bi, P, Ci),
                      g.cancel(),
                      y.cancel(),
                      I(e)));
              }
            }
            function N(t) {
              if ((m.is(6) || (m.set(6), p(to)), t.cancelable))
                if (l) {
                  g.translate(r + A(t) / (_ && e.is(wi) ? 5 : 1));
                  var o = D(t) > 200,
                    i = _ !== (_ = O());
                  (o || i) && I(t), (u = !0), p(no), wr(t);
                } else
                  (function (e) {
                    return Ir(A(e)) > Ir(A(e, !0));
                  })(t) &&
                    ((l = (function (e) {
                      var t = n.dragMinThreshold,
                        r = Fn(t),
                        o = (r && t.mouse) || 0,
                        i = (r ? t.touch : +t) || 10;
                      return Ir(A(e)) > (z(e) ? i : o);
                    })(t)),
                    wr(t));
            }
            function P(r) {
              m.is(6) && (m.set(3), p(ro)),
                l &&
                  (!(function (r) {
                    var o = (function (t) {
                        if (e.is(Si) || !_) {
                          var n = D(t);
                          if (n && n < 200) return A(t) / n;
                        }
                        return 0;
                      })(r),
                      i = (function (e) {
                        return (
                          C() +
                          Rr(e) *
                            Lr(
                              Ir(e) * (n.flickPower || 600),
                              a
                                ? 1 / 0
                                : t.Layout.listSize() * (n.flickMaxPages || 1)
                            )
                        );
                      })(o),
                      l = n.rewind && n.rewindByDrag;
                    S(!1),
                      a
                        ? b.scroll(i, 0, n.snap)
                        : e.is(xi)
                        ? b.go(k(Rr(o)) < 0 ? (l ? "<" : "-") : l ? ">" : "+")
                        : e.is(wi) && _ && l
                        ? b.go(O(!0) ? ">" : "<")
                        : b.go(b.toDest(i), !0);
                    S(!0);
                  })(r),
                  wr(r)),
                v(c, yi, N),
                v(c, bi, P),
                (l = !1);
            }
            function j(e) {
              !s && u && wr(e, !0);
            }
            function I(e) {
              (i = o), (o = e), (r = C());
            }
            function A(e, t) {
              return R(e, t) - R(M(e), t);
            }
            function D(e) {
              return kr(e) - kr(M(e));
            }
            function M(e) {
              return (o === e && i) || o;
            }
            function R(e, t) {
              return (z(e) ? e.changedTouches[0] : e)[
                "page" + E(t ? "Y" : "X")
              ];
            }
            function z(e) {
              return (
                "undefined" !== typeof TouchEvent && e instanceof TouchEvent
              );
            }
            function B(e) {
              s = e;
            }
            return {
              mount: function () {
                h(w, yi, Rn, Ci),
                  h(w, bi, Rn, Ci),
                  h(w, gi, L, Ci),
                  h(w, "click", j, { capture: !0 }),
                  h(w, "dragstart", wr),
                  d([Ur, Jr], T);
              },
              disable: B,
              isDragging: function () {
                return l;
              },
            };
          },
          Keyboard: function (e, t, n) {
            var r,
              o,
              i = wo(e),
              a = i.on,
              l = i.bind,
              u = i.unbind,
              s = e.root,
              c = t.Direction.resolve;
            function f() {
              var e = n.keyboard;
              e && ((r = "global" === e ? window : s), l(r, Ti, h));
            }
            function d() {
              u(r, Ti);
            }
            function p() {
              var e = o;
              (o = !0),
                Mn(function () {
                  o = e;
                });
            }
            function h(t) {
              if (!o) {
                var n = _i(t);
                n === c(Eo) ? e.go("<") : n === c(ko) && e.go(">");
              }
            }
            return {
              mount: function () {
                f(), a(Jr, d), a(Jr, f), a(Kr, p);
              },
              destroy: d,
              disable: function (e) {
                o = e;
              },
            };
          },
          LazyLoad: function (e, t, n) {
            var r = wo(e),
              o = r.on,
              i = r.off,
              a = r.bind,
              l = r.emit,
              u = "sequential" === n.lazyLoad,
              s = [Wr, io],
              c = [];
            function f() {
              In(c),
                t.Slides.forEach(function (e) {
                  xr(e.slide, Pi).forEach(function (t) {
                    var r = vr(t, Li),
                      o = vr(t, Ni);
                    if (r !== t.src || o !== t.srcset) {
                      var i = n.classes.spinner,
                        a = t.parentElement,
                        l = rr(a, "." + i) || fr("span", i, a);
                      c.push([t, e, l]), t.src || pr(t, "none");
                    }
                  });
                }),
                u ? v() : (i(s), o(s, d), d());
            }
            function d() {
              (c = c.filter(function (t) {
                var r = n.perPage * ((n.preloadPages || 1) + 1) - 1;
                return !t[1].isWithin(e.index, r) || p(t);
              })).length || i(s);
            }
            function p(e) {
              var t = e[0];
              Jn(e[1].slide, di),
                a(t, "load error", Dn(h, e)),
                cr(t, "src", vr(t, Li)),
                cr(t, "srcset", vr(t, Ni)),
                sr(t, Li),
                sr(t, Ni);
            }
            function h(e, t) {
              var n = e[0],
                r = e[1];
              Er(r.slide, di),
                "error" !== t.type && (yr(e[2]), pr(n, ""), l(mo, n, r), l(Zr)),
                u && v();
            }
            function v() {
              c.length && p(c.shift());
            }
            return {
              mount: function () {
                n.lazyLoad && (f(), o(Xr, f));
              },
              destroy: Dn(In, c),
              check: d,
            };
          },
          Pagination: function (e, t, n) {
            var r,
              o,
              i = wo(e),
              a = i.on,
              l = i.emit,
              u = i.bind,
              s = t.Slides,
              c = t.Elements,
              f = t.Controller,
              d = f.hasFocus,
              p = f.getIndex,
              h = f.go,
              v = t.Direction.resolve,
              m = c.pagination,
              g = [];
            function y() {
              r && (yr(m ? An(r.children) : r), Er(r, o), In(g), (r = null)),
                i.destroy();
            }
            function b(e) {
              h(">" + e, !0);
            }
            function w(e, t) {
              var n = g.length,
                r = _i(t),
                o = S(),
                i = -1;
              r === v(ko, !1, o)
                ? (i = ++e % n)
                : r === v(Eo, !1, o)
                ? (i = (--e + n) % n)
                : "Home" === r
                ? (i = 0)
                : "End" === r && (i = n - 1);
              var a = g[i];
              a && (hr(a.button), h(">" + i), wr(t, !0));
            }
            function S() {
              return n.paginationDirection || n.direction;
            }
            function x(e) {
              return g[f.toPage(e)];
            }
            function E() {
              var e = x(p(!0)),
                t = x(p());
              if (e) {
                var n = e.button;
                Er(n, ui), sr(n, Ao), cr(n, No, -1);
              }
              if (t) {
                var o = t.button;
                Jn(o, ui), cr(o, Ao, !0), cr(o, No, "");
              }
              l(co, { list: r, items: g }, e, t);
            }
            return {
              items: g,
              mount: function t() {
                y(), a([Jr, Xr, bo], t);
                var i = n.pagination;
                m && pr(m, i ? "" : "none"),
                  i &&
                    (a([Kr, oo, io], E),
                    (function () {
                      var t = e.length,
                        i = n.classes,
                        a = n.i18n,
                        l = n.perPage,
                        p = d() ? f.getEnd() + 1 : jr(t / l);
                      Jn(
                        (r =
                          m || fr("ul", i.pagination, c.track.parentElement)),
                        (o = ni + "--" + S())
                      ),
                        cr(r, Lo, "tablist"),
                        cr(r, Do, a.select),
                        cr(r, zo, S() === _o ? "vertical" : "");
                      for (var h = 0; h < p; h++) {
                        var v = fr("li", null, r),
                          y = fr(
                            "button",
                            { class: i.page, type: "button" },
                            v
                          ),
                          x = s.getIn(h).map(function (e) {
                            return e.slide.id;
                          }),
                          E = !d() && l > 1 ? a.pageX : a.slideX;
                        u(y, "click", Dn(b, h)),
                          n.paginationKeyboard && u(y, "keydown", Dn(w, h)),
                          cr(v, Lo, "presentation"),
                          cr(y, Lo, "tab"),
                          cr(y, jo, x.join(" ")),
                          cr(y, Do, zr(E, h + 1)),
                          cr(y, No, -1),
                          g.push({ li: v, button: y, page: h });
                      }
                    })(),
                    E(),
                    l(so, { list: r, items: g }, x(e.index)));
              },
              destroy: y,
              getAt: x,
              update: E,
            };
          },
          Sync: function (e, t, n) {
            var r = n.isNavigation,
              o = n.slideFocus,
              i = [];
            function a() {
              e.splides.forEach(function (t) {
                t.isParent || (u(e, t.splide), u(t.splide, e));
              }),
                r &&
                  (function () {
                    var t = wo(e),
                      n = t.on;
                    n(Vr, c),
                      n(go, f),
                      n([Ur, Jr], s),
                      i.push(t),
                      t.emit(fo, e.splides);
                  })();
            }
            function l() {
              i.forEach(function (e) {
                e.destroy();
              }),
                In(i);
            }
            function u(e, t) {
              var n = wo(e);
              n.on(Kr, function (e, n, r) {
                t.go(t.is(Si) ? r : e);
              }),
                i.push(n);
            }
            function s() {
              cr(t.Elements.list, zo, n.direction === _o ? "vertical" : "");
            }
            function c(t) {
              e.go(t.index);
            }
            function f(e, t) {
              Qn(ji, _i(t)) && (c(e), wr(t));
            }
            return {
              setup: Dn(t.Media.set, { slideFocus: Kn(o) ? r : o }, !0),
              mount: a,
              destroy: l,
              remount: function () {
                l(), a();
              },
            };
          },
          Wheel: function (e, t, n) {
            var r = wo(e).bind,
              o = 0;
            function i(r) {
              if (r.cancelable) {
                var i = r.deltaY,
                  a = i < 0,
                  l = kr(r),
                  u = n.wheelMinThreshold || 0,
                  s = n.wheelSleep || 0;
                Ir(i) > u && l - o > s && (e.go(a ? "<" : ">"), (o = l)),
                  (function (r) {
                    return (
                      !n.releaseWheel ||
                      e.state.is(4) ||
                      -1 !== t.Controller.getAdjacent(r)
                    );
                  })(a) && wr(r);
              }
            }
            return {
              mount: function () {
                n.wheel && r(t.Elements.track, "wheel", i, Ci);
              },
            };
          },
          Live: function (e, t, n) {
            var r = wo(e).on,
              o = t.Elements.track,
              i = n.live && !n.isNavigation,
              a = fr("span", ai),
              l = So(90, Dn(u, !1));
            function u(e) {
              cr(o, Ho, e), e ? (Zn(o, a), l.start()) : (yr(a), l.cancel());
            }
            function s(e) {
              i && cr(o, Fo, e ? "off" : "polite");
            }
            return {
              mount: function () {
                i &&
                  (s(!t.Autoplay.isPaused()),
                  cr(o, Uo, !0),
                  (a.textContent = "\u2026"),
                  r(po, Dn(s, !0)),
                  r(vo, Dn(s, !1)),
                  r([Wr, io], Dn(u, !0)));
              },
              disable: s,
              destroy: function () {
                sr(o, [Fo, Uo, Ho]), yr(a);
              },
            };
          },
        }),
        Ai = {
          type: "slide",
          role: "region",
          speed: 400,
          perPage: 1,
          cloneStatus: !0,
          arrows: !0,
          pagination: !0,
          paginationKeyboard: !0,
          interval: 5e3,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          resetProgress: !0,
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          drag: !0,
          direction: "ltr",
          trimSpace: !0,
          focusableNodes: "a, button, textarea, input, select, iframe",
          live: !0,
          classes: mi,
          i18n: {
            prev: "Previous slide",
            next: "Next slide",
            first: "Go to first slide",
            last: "Go to last slide",
            slideX: "Go to slide %s",
            pageX: "Go to page %s",
            play: "Start autoplay",
            pause: "Pause autoplay",
            carousel: "carousel",
            slide: "slide",
            select: "Select a slide to show",
            slideLabel: "%s of %s",
          },
          reducedMotion: { speed: 0, rewindSpeed: 0, autoplay: "pause" },
        };
      function Di(e, t, n) {
        var r = t.Slides;
        function o() {
          r.forEach(function (e) {
            e.style("transform", "translateX(-" + 100 * e.index + "%)");
          });
        }
        return {
          mount: function () {
            wo(e).on([Ur, Xr], o);
          },
          start: function (e, t) {
            r.style("transition", "opacity " + n.speed + "ms " + n.easing),
              Mn(t);
          },
          cancel: Rn,
        };
      }
      function Mi(e, t, n) {
        var r,
          o = t.Move,
          i = t.Controller,
          a = t.Scroll,
          l = t.Elements.list,
          u = Dn(dr, l, "transition");
        function s() {
          u(""), a.cancel();
        }
        return {
          mount: function () {
            wo(e).bind(l, "transitionend", function (e) {
              e.target === l && r && (s(), r());
            });
          },
          start: function (t, l) {
            var s = o.toPosition(t, !0),
              c = o.getPosition(),
              f = (function (t) {
                var r = n.rewindSpeed;
                if (e.is(wi) && r) {
                  var o = i.getIndex(!0),
                    a = i.getEnd();
                  if ((0 === o && t >= a) || (o >= a && 0 === t)) return r;
                }
                return n.speed;
              })(t);
            Ir(s - c) >= 1 && f >= 1
              ? n.useScroll
                ? a.scroll(s, f, !1, l)
                : (u("transform " + f + "ms " + n.easing),
                  o.translate(s, !0),
                  (r = l))
              : (o.jump(t), l());
          },
          cancel: s,
        };
      }
      var Ri = (function () {
          function e(t, n) {
            (this.event = wo()),
              (this.Components = {}),
              (this.state = (function (e) {
                var t = e;
                return {
                  set: function (e) {
                    t = e;
                  },
                  is: function (e) {
                    return Qn(Yn(e), t);
                  },
                };
              })(1)),
              (this.splides = []),
              (this._o = {}),
              (this._E = {});
            var r = $n(t) ? Sr(document, t) : t;
            Tr(r, r + " is invalid."),
              (this.root = r),
              (n = lr(
                { label: vr(r, Do) || "", labelledby: vr(r, Mo) || "" },
                Ai,
                e.defaults,
                n || {}
              ));
            try {
              lr(n, JSON.parse(vr(r, _r)));
            } catch (o) {
              Tr(!1, "Invalid JSON");
            }
            this._o = Object.create(lr({}, n));
          }
          var t,
            n,
            r,
            o = e.prototype;
          return (
            (o.mount = function (e, t) {
              var n = this,
                r = this.state,
                o = this.Components;
              return (
                Tr(r.is([1, 7]), "Already mounted!"),
                r.set(1),
                (this._C = o),
                (this._T = t || this._T || (this.is(xi) ? Di : Mi)),
                (this._E = e || this._E),
                ir(
                  ar({}, Ii, this._E, { Transition: this._T }),
                  function (e, t) {
                    var r = e(n, o, n._o);
                    (o[t] = r), r.setup && r.setup();
                  }
                ),
                ir(o, function (e) {
                  e.mount && e.mount();
                }),
                this.emit(Ur),
                Jn(this.root, li),
                r.set(3),
                this.emit($r),
                this
              );
            }),
            (o.sync = function (e) {
              return (
                this.splides.push({ splide: e }),
                e.splides.push({ splide: this, isParent: !0 }),
                this.state.is(3) &&
                  (this._C.Sync.remount(), e.Components.Sync.remount()),
                this
              );
            }),
            (o.go = function (e) {
              return this._C.Controller.go(e), this;
            }),
            (o.on = function (e, t) {
              return this.event.on(e, t), this;
            }),
            (o.off = function (e) {
              return this.event.off(e), this;
            }),
            (o.emit = function (e) {
              var t;
              return (
                (t = this.event).emit.apply(t, [e].concat(An(arguments, 1))),
                this
              );
            }),
            (o.add = function (e, t) {
              return this._C.Slides.add(e, t), this;
            }),
            (o.remove = function (e) {
              return this._C.Slides.remove(e), this;
            }),
            (o.is = function (e) {
              return this._o.type === e;
            }),
            (o.refresh = function () {
              return this.emit(Xr), this;
            }),
            (o.destroy = function (e) {
              void 0 === e && (e = !0);
              var t = this.event,
                n = this.state;
              return (
                n.is(1)
                  ? wo(this).on($r, this.destroy.bind(this, e))
                  : (ir(
                      this._C,
                      function (t) {
                        t.destroy && t.destroy(e);
                      },
                      !0
                    ),
                    t.emit(ao),
                    t.destroy(),
                    e && In(this.splides),
                    n.set(7)),
                this
              );
            }),
            (t = e),
            (n = [
              {
                key: "options",
                get: function () {
                  return this._o;
                },
                set: function (e) {
                  this._C.Media.set(e, !0, !0);
                },
              },
              {
                key: "length",
                get: function () {
                  return this._C.Slides.getLength(!0);
                },
              },
              {
                key: "index",
                get: function () {
                  return this._C.Controller.getIndex();
                },
              },
            ]) && Nn(t.prototype, n),
            r && Nn(t, r),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e
          );
        })(),
        zi = Ri;
      (zi.defaults = {}), (zi.STATES = jn);
      var Bi = [
        [Ur, "onMounted"],
        [$r, "onReady"],
        [Kr, "onMove"],
        [Wr, "onMoved"],
        [Vr, "onClick"],
        [Yr, "onActive"],
        [Gr, "onInactive"],
        [Qr, "onVisible"],
        [qr, "onHidden"],
        [Xr, "onRefresh"],
        [Jr, "onUpdated"],
        [Zr, "onResize"],
        [eo, "onResized"],
        [to, "onDrag"],
        [no, "onDragging"],
        [ro, "onDragged"],
        [oo, "onScroll"],
        [io, "onScrolled"],
        [ao, "onDestroy"],
        [lo, "onArrowsMounted"],
        [uo, "onArrowsUpdated"],
        [so, "onPaginationMounted"],
        [co, "onPaginationUpdated"],
        [fo, "onNavigationMounted"],
        [po, "onAutoplayPlay"],
        [ho, "onAutoplayPlaying"],
        [vo, "onAutoplayPause"],
        [mo, "onLazyLoadLoaded"],
      ];
      function Fi() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.filter(Boolean).join(" ");
      }
      function Hi(e) {
        return null !== e && "object" === typeof e;
      }
      function Ui(e, t) {
        if (Array.isArray(e) && Array.isArray(t))
          return (
            e.length === t.length &&
            !e.some(function (e, n) {
              return !Ui(e, t[n]);
            })
          );
        if (Hi(e) && Hi(t)) {
          var n = Object.keys(e),
            r = Object.keys(t);
          return (
            n.length === r.length &&
            !n.some(function (n) {
              return (
                !Object.prototype.hasOwnProperty.call(t, n) || !Ui(e[n], t[n])
              );
            })
          );
        }
        return e === t;
      }
      function $i(e, t) {
        var n = e;
        return (
          (function (e, t) {
            if (e)
              for (var n = Object.keys(e), r = 0; r < n.length; r++) {
                var o = n[r];
                if ("__proto__" !== o && !1 === t(e[o], o)) break;
              }
          })(t, function (e, t) {
            Array.isArray(e)
              ? (n[t] = e.slice())
              : Hi(e)
              ? (n[t] = $i(Hi(n[t]) ? n[t] : {}, e))
              : (n[t] = e);
          }),
          n
        );
      }
      var Ki,
        Wi = function (t) {
          var n = t.children,
            r = t.className,
            o = On(t, _n);
          return e.createElement(
            "div",
            y({ className: Fi("splide__track", r) }, o),
            e.createElement("ul", { className: "splide__list" }, n)
          );
        },
        Vi = (function (t) {
          Te(r, t);
          var n = je(r);
          function r() {
            var t;
            return (
              ke(this, r),
              ((t = n.apply(this, arguments)).splideRef = e.createRef()),
              (t.slides = []),
              t
            );
          }
          return (
            Oe(r, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this.props,
                    t = e.options,
                    n = e.extensions,
                    r = e.transition,
                    o = this.splideRef.current;
                  o &&
                    ((this.splide = new zi(o, t)),
                    this.bind(this.splide),
                    this.splide.mount(n, r),
                    (this.options = $i({}, t || {})),
                    (this.slides = this.getSlides()));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.splide &&
                    (this.splide.destroy(), (this.splide = void 0)),
                    (this.options = void 0),
                    (this.slides.length = 0);
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  if (this.splide) {
                    var e = this.props.options;
                    e &&
                      !Ui(this.options, e) &&
                      ((this.splide.options = e), (this.options = $i({}, e)));
                    var t,
                      n,
                      r = this.getSlides();
                    (t = this.slides),
                      (n = r),
                      (t.length !== n.length ||
                        t.some(function (e, t) {
                          return e !== n[t];
                        })) &&
                        (this.splide.refresh(), (this.slides = r));
                  }
                },
              },
              {
                key: "sync",
                value: function (e) {
                  var t;
                  null == (t = this.splide) || t.sync(e);
                },
              },
              {
                key: "go",
                value: function (e) {
                  var t;
                  null == (t = this.splide) || t.go(e);
                },
              },
              {
                key: "getSlides",
                value: function () {
                  var e;
                  if (this.splide) {
                    var t =
                      null == (e = this.splide.Components.Elements)
                        ? void 0
                        : e.list.children;
                    return (t && Array.prototype.slice.call(t)) || [];
                  }
                  return [];
                },
              },
              {
                key: "bind",
                value: function (e) {
                  var t = this;
                  Bi.forEach(function (n) {
                    var r = d(n, 2),
                      o = r[0],
                      i = r[1],
                      a = t.props[i];
                    "function" === typeof a &&
                      e.on(o, function () {
                        for (
                          var t = arguments.length, n = new Array(t), r = 0;
                          r < t;
                          r++
                        )
                          n[r] = arguments[r];
                        a.apply(void 0, [e].concat(n));
                      });
                  });
                },
              },
              {
                key: "omit",
                value: function (e, t) {
                  return (
                    t.forEach(function (t) {
                      Object.prototype.hasOwnProperty.call(e, t) && delete e[t];
                    }),
                    e
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    n = t.className,
                    r = t.tag,
                    o = void 0 === r ? "div" : r,
                    i = t.hasTrack,
                    a = void 0 === i || i,
                    l = t.children,
                    u = On(t, Tn);
                  return e.createElement(
                    o,
                    y(
                      { className: Fi("splide", n), ref: this.splideRef },
                      this.omit(
                        u,
                        ["options"].concat(
                          Ee(
                            Bi.map(function (e) {
                              return e[1];
                            })
                          )
                        )
                      )
                    ),
                    a ? e.createElement(Wi, null, l) : l
                  );
                },
              },
            ]),
            r
          );
        })(e.Component),
        Yi = function (t) {
          var n = t.children,
            r = t.className,
            o = On(t, Ln);
          return e.createElement(
            "li",
            y({ className: Fi("splide__slide", r) }, o),
            n
          );
        },
        Gi = function (e) {
          var t,
            n = e.projectContent,
            r = n.title,
            o = n.subtitle,
            i = rn(r);
          return (0, we.jsxs)("section", {
            children: [
              r &&
                (0, we.jsxs)("div", {
                  id: i,
                  className: "text-center text-slate-900 my-14 px-10 md:px-24",
                  children: [
                    (0, we.jsx)("h2", {
                      className: "uppercase font-bold text-xl",
                      children: r,
                    }),
                    o &&
                      (0, we.jsx)("p", {
                        className:
                          "font-mono text-4xl text-gray-500 my-5 lg:pb-5 mt-7",
                        children: o,
                      }),
                  ],
                }),
              (0, we.jsx)(Vi, {
                children:
                  null === n ||
                  void 0 === n ||
                  null === (t = n.projects) ||
                  void 0 === t
                    ? void 0
                    : t.map(function (e, t) {
                        var n,
                          r = e.thumbnail,
                          o = e.creationDate,
                          i = e.slug,
                          a = e.title,
                          l = e.tags;
                        return (0, we.jsx)(
                          Yi,
                          {
                            children: (0, we.jsx)("a", {
                              href: "/projects/".concat(i),
                              children: (0, we.jsxs)("div", {
                                style: {
                                  backgroundImage: "url(".concat(
                                    null !==
                                      (n =
                                        null === r || void 0 === r
                                          ? void 0
                                          : r.url) && void 0 !== n
                                      ? n
                                      : "../../default-banner-image.jpeg",
                                    ")"
                                  ),
                                  backgroundRepeat: "no-repeat",
                                  backgroundSize: "cover",
                                },
                                className:
                                  "text-white px-20 h-96 flex flex-col justify-center drop-shadow transition-transform duration-500 hover:opacity-95",
                                children: [
                                  o &&
                                    (0, we.jsx)("p", {
                                      className: "mb-2",
                                      children: o,
                                    }),
                                  a &&
                                    (0, we.jsx)("h4", {
                                      className:
                                        "text-2xl sm:text-3xl lg:text-4xl font-bold font-mono mb-6",
                                      children: a,
                                    }),
                                  (null === l || void 0 === l
                                    ? void 0
                                    : l.length) > 0 &&
                                    (0, we.jsx)("div", {
                                      className:
                                        "border-b border-slate-400 pb-3 grid grid-rows-4 md:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-2",
                                      children: l.map(function (e, t) {
                                        return (0,
                                        we.jsx)("span", { className: "text-sm font-medium", children: e }, t);
                                      }),
                                    }),
                                ],
                              }),
                            }),
                          },
                          t
                        );
                      }),
              }),
            ],
          });
        },
        Qi = ["title", "titleId"];
      function qi() {
        return (
          (qi = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          qi.apply(this, arguments)
        );
      }
      function Xi(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function Ji(t, n) {
        var r = t.title,
          o = t.titleId,
          i = Xi(t, Qi);
        return e.createElement(
          "svg",
          qi(
            {
              width: 12,
              height: 8,
              viewBox: "0 0 12 8",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: n,
              "aria-labelledby": o,
            },
            i
          ),
          r ? e.createElement("title", { id: o }, r) : null,
          Ki ||
            (Ki = e.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M11.6463 0.236929C12.0678 0.59388 12.12 1.22488 11.7631 1.64632L6.68111 7.64632C6.48929 7.87279 6.20677 8.00236 5.90998 7.99997C5.61319 7.99757 5.3328 7.86347 5.14465 7.63393L0.226618 1.63393C-0.123491 1.20679 -0.0610514 0.576716 0.366081 0.226607C0.793214 -0.123502 1.42329 -0.0610614 1.7734 0.366071L5.93064 5.4379L10.2369 0.353683C10.5939 -0.0677487 11.2249 -0.120021 11.6463 0.236929Z",
              fill: "#ffffff",
            }))
        );
      }
      var Zi,
        ea = e.forwardRef(Ji),
        ta =
          (n.p,
          function (t) {
            var n = t.stackContent,
              r = n.title,
              o = n.subtitle,
              i = n.technologies,
              a = rn(r),
              l = (function () {
                var t = (0, e.useRef)(!0);
                return t.current ? ((t.current = !1), !0) : t.current;
              })(),
              u = d((0, e.useState)(null), 2),
              s = u[0],
              c = u[1];
            (0, e.useEffect)(
              function () {
                if (l && i.length > 0)
                  return c(
                    i.reduce(function (e, t) {
                      return y(y({}, e), {}, m({}, rn(t.title), !1));
                    }, {})
                  );
              },
              [l, i]
            );
            return (0, we.jsxs)("section", {
              className:
                "bg-slate-900 text-white px-10 md:px-36 lg:px-48 xl:px-80 transition-all duration-500",
              children: [
                r &&
                  (0, we.jsxs)("div", {
                    id: a,
                    className: "text-center py-14",
                    children: [
                      (0, we.jsx)("h2", {
                        className: "uppercase font-bold text-xl",
                        children: r,
                      }),
                      o &&
                        (0, we.jsx)("p", {
                          className:
                            "font-mono text-2xl text-gray-100 md:my-5 md:mx-24 mt-7",
                          children: o,
                        }),
                    ],
                  }),
                (0, we.jsx)("div", {
                  className: "flex flex-col pb-16",
                  children:
                    s &&
                    (null === i || void 0 === i
                      ? void 0
                      : i.map(function (e, t) {
                          var n = e.title,
                            r = e.techList,
                            o = null === s || void 0 === s ? void 0 : s[rn(n)];
                          return (0, we.jsxs)(
                            "div",
                            {
                              className: un()({
                                "border-b": t + 1 !== i.length,
                              }),
                              children: [
                                (0, we.jsxs)("div", {
                                  onClick: function () {
                                    return (function (e) {
                                      var t = rn(e),
                                        n = y({}, s);
                                      return (n[t] = !n[t]), c(n);
                                    })(n);
                                  },
                                  className: un()(
                                    "flex justify-between p-5 transition-all duration-500",
                                    { "pb-10": o }
                                  ),
                                  children: [
                                    (0, we.jsx)("p", {
                                      className: "font-extrabold text-lg",
                                      children: n,
                                    }),
                                    (0, we.jsx)("button", {
                                      children: (0, we.jsx)(ea, {
                                        className: un()({ "rotate-270": o }),
                                      }),
                                    }),
                                  ],
                                }),
                                (null === r || void 0 === r
                                  ? void 0
                                  : r.length) > 0 &&
                                  (0, we.jsx)("div", {
                                    className: un()(
                                      "grid grid-flow-col gap-4 overflow-hidden transition-all max-h-0 duration-500 px-5",
                                      { "max-h-96 pb-5": o },
                                      { "sm:grid-rows-3": r.length >= 3 },
                                      { "grid-rows-5": r.length >= 5 },
                                      { "grid-rows-2": r.length < 5 }
                                    ),
                                    children: r.map(function (e, t) {
                                      return (0,
                                      we.jsx)("span", { className: "mb-5", children: e }, t);
                                    }),
                                  }),
                              ],
                            },
                            t
                          );
                        })),
                }),
              ],
            });
          }),
        na = ["title", "titleId"];
      function ra() {
        return (
          (ra = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ra.apply(this, arguments)
        );
      }
      function oa(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function ia(t, n) {
        var r = t.title,
          o = t.titleId,
          i = oa(t, na);
        return e.createElement(
          "svg",
          ra(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "512.000000pt",
              height: "512.000000pt",
              viewBox: "0 0 512.000000 512.000000",
              preserveAspectRatio: "xMidYMid meet",
              ref: n,
              "aria-labelledby": o,
            },
            i
          ),
          r ? e.createElement("title", { id: o }, r) : null,
          Zi ||
            (Zi = e.createElement(
              "g",
              {
                transform:
                  "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
                fill: "#6b7281",
                stroke: "none",
              },
              e.createElement("path", {
                d: "M1397 5109 c-106 -25 -201 -104 -251 -209 l-31 -65 0 -2275 0 -2275 31 -65 c39 -83 101 -145 184 -184 l65 -31 1165 0 1165 0 65 31 c83 39 145 101 184 184 l31 65 0 2275 0 2275 -31 65 c-39 83 -101 145 -184 184 l-65 31 -1145 2 c-646 1 -1161 -3 -1183 -8z m1723 -234 c7 -9 15 -37 17 -63 4 -38 1 -53 -17 -74 l-21 -28 -534 0 c-510 0 -534 1 -556 19 -20 16 -24 29 -24 74 0 94 -47 87 575 87 480 0 549 -2 560 -15z m610 -2040 l0 -1655 -1170 0 -1170 0 0 1655 0 1655 1170 0 1170 0 0 -1655z m-1062 -2021 c115 -57 160 -198 101 -315 -85 -170 -333 -170 -418 0 -80 158 33 341 209 341 40 0 71 -7 108 -26z",
              })
            ))
        );
      }
      var aa,
        la = e.forwardRef(ia),
        ua = (n.p, ["title", "titleId"]);
      function sa() {
        return (
          (sa = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          sa.apply(this, arguments)
        );
      }
      function ca(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function fa(t, n) {
        var r = t.title,
          o = t.titleId,
          i = ca(t, ua);
        return e.createElement(
          "svg",
          sa(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "2048.000000pt",
              height: "2048.000000pt",
              viewBox: "0 0 2048.000000 2048.000000",
              preserveAspectRatio: "xMidYMid meet",
              ref: n,
              "aria-labelledby": o,
            },
            i
          ),
          r ? e.createElement("title", { id: o }, r) : null,
          aa ||
            (aa = e.createElement(
              "g",
              {
                transform:
                  "translate(0.000000,2048.000000) scale(0.100000,-0.100000)",
                fill: "#6b7281",
                stroke: "none",
              },
              e.createElement("path", {
                d: "M3840 10240 l0 -4830 6400 0 6400 0 0 4830 0 4830 -6400 0 -6400 0 0 -4830z m10929 3503 c-1497 -1512 -4124 -4153 -4147 -4170 -141 -104 -369 -137 -549 -79 -45 15 -106 43 -136 64 -44 29 -1993 1995 -4480 4520 l-92 92 4914 0 4914 0 -424 -427z m-8411 -1849 l1613 -1634 -18 -23 c-10 -13 -736 -756 -1613 -1652 l-1595 -1628 -2 1184 c-6 2812 -8 5389 -3 5388 3 -1 731 -736 1618 -1635z m9390 -3312 l-3 -1630 -1595 1633 c-877 898 -1595 1639 -1595 1646 0 8 718 736 1595 1619 l1595 1605 3 -1622 c1 -892 1 -2355 0 -3251z m-6336 249 c164 -110 353 -189 558 -232 153 -33 428 -33 587 -1 129 26 285 78 387 129 172 85 225 130 603 507 l363 360 36 -34 c63 -61 3169 -3241 3172 -3248 1 -4 -2193 -7 -4877 -7 l-4879 0 61 65 c33 35 762 781 1620 1657 l1559 1593 367 -369 c263 -264 388 -382 443 -420z",
              })
            ))
        );
      }
      var da,
        pa = e.forwardRef(fa),
        ha = (n.p, { _origin: "https://api.emailjs.com" }),
        va = function (e, t, n) {
          if (!e)
            throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";
          if (!t)
            throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
          if (!n)
            throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
          return !0;
        },
        ma = Oe(function e(t) {
          ke(this, e), (this.status = t.status), (this.text = t.responseText);
        }),
        ga = function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return new Promise(function (r, o) {
            var i = new XMLHttpRequest();
            i.addEventListener("load", function (e) {
              var t = e.target,
                n = new ma(t);
              200 === n.status || "OK" === n.text ? r(n) : o(n);
            }),
              i.addEventListener("error", function (e) {
                var t = e.target;
                o(new ma(t));
              }),
              i.open("POST", ha._origin + e, !0),
              Object.keys(n).forEach(function (e) {
                i.setRequestHeader(e, n[e]);
              }),
              i.send(t);
          });
        },
        ya = function (e, t, n, r) {
          var o = r || ha._userID;
          va(o, e, t);
          var i = {
            lib_version: "3.2.0",
            user_id: o,
            service_id: e,
            template_id: t,
            template_params: n,
          };
          return ga("/api/v1.0/email/send", JSON.stringify(i), {
            "Content-type": "application/json",
          });
        },
        ba = function (t) {
          var n = t.contactContent,
            r = n.title,
            o = n.subtitle,
            a = n.description,
            u = n.email,
            s = n.phone,
            c = rn(r),
            f = d(
              (0, e.useState)({
                name: "",
                email: "",
                subject: "",
                message: "",
              }),
              2
            ),
            p = f[0],
            h = f[1],
            v = d((0, e.useState)(void 0), 2),
            m = v[0],
            g = v[1],
            b = d((0, e.useState)(!1), 2),
            w = b[0],
            S = b[1],
            x = (0, e.useMemo)(
              function () {
                return !!(p.name && p.email && p.subject && p.message);
              },
              [p]
            ),
            E = (0, e.useCallback)(
              (function () {
                var e = l(
                  i().mark(function e(t) {
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              S(!0),
                              (e.next = 4),
                              ya(
                                "service_dyeaowe",
                                "template_0yc4bf8",
                                p,
                                "HU_Cr0Q2WAs8D8hg3"
                              ).then(
                                function () {
                                  g(!0),
                                    h({
                                      name: "",
                                      email: "",
                                      subject: "",
                                      message: "",
                                    }),
                                    S(!1);
                                },
                                function () {
                                  g(!1), S(!1);
                                }
                              )
                            );
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [p]
            );
          return (0, we.jsxs)("section", {
            className: "md:flex",
            id: c,
            children: [
              (0, we.jsxs)("div", {
                className:
                  "md:w-1/2 p-10 flex justify-center flex-col order-2 lg:mx-24",
                children: [
                  (0, we.jsx)("h2", {
                    className: "uppercase font-bold text-xl",
                    children: r,
                  }),
                  (0, we.jsx)("p", {
                    className: "font-mono text-3xl text-gray-500 my-5 lg:pb-5",
                    children: o,
                  }),
                  (0, we.jsx)("div", {
                    className: "pb-10",
                    dangerouslySetInnerHTML: { __html: a },
                  }),
                  u &&
                    (0, we.jsxs)("div", {
                      className: "flex font-medium pb-4 text-gray-800",
                      children: [
                        (0, we.jsx)(pa, { className: "w-6 h-6 mr-3" }),
                        (0, we.jsx)("a", {
                          href: "mailto:".concat(u),
                          children: u,
                        }),
                      ],
                    }),
                  s &&
                    (0, we.jsxs)("div", {
                      className: "flex font-medium text-gray-800",
                      children: [
                        (0, we.jsx)(la, { className: "w-6 h-6 mr-3" }),
                        (0, we.jsx)("a", {
                          href: "tel:".concat(
                            s.replace("+", "00").replace(/ /g, "")
                          ),
                          children: s,
                        }),
                      ],
                    }),
                ],
              }),
              (0, we.jsxs)("div", {
                className: "md:w-1/2 order-1",
                children: [
                  (0, we.jsx)("p", {
                    className: un()(
                      "mx-10 p-5 md:my-5 font-bold text-sm text-center transition-all duration-500",
                      { "h-0 opacity-0": void 0 === m },
                      { "bg-emerald-100": m },
                      { "bg-rose-100": !1 === m }
                    ),
                    children: m
                      ? "Your message has been successfully sent! We will reply you as soon as possible. Thank you for your enquiry!"
                      : "There was an error sending your message, please try again.",
                  }),
                  (0, we.jsxs)("form", {
                    className: "flex flex-col p-10 xl:mx-20 text-sm",
                    onSubmit: function (e) {
                      return E(e);
                    },
                    children: [
                      (0, we.jsx)("label", {
                        children: (0, we.jsx)("input", {
                          type: "text",
                          placeholder: "Name",
                          className: "w-full border-b border-gray-500 h-10",
                          value: p.name,
                          onChange: function (e) {
                            var t;
                            return h(
                              y(
                                y({}, p),
                                {},
                                {
                                  name:
                                    null === e ||
                                    void 0 === e ||
                                    null === (t = e.target) ||
                                    void 0 === t
                                      ? void 0
                                      : t.value,
                                }
                              )
                            );
                          },
                        }),
                      }),
                      (0, we.jsx)("label", {
                        children: (0, we.jsx)("input", {
                          type: "email",
                          placeholder: "Email",
                          className: "w-full border-b border-gray-500 h-10",
                          value: p.email,
                          onChange: function (e) {
                            var t;
                            return h(
                              y(
                                y({}, p),
                                {},
                                {
                                  email:
                                    null === e ||
                                    void 0 === e ||
                                    null === (t = e.target) ||
                                    void 0 === t
                                      ? void 0
                                      : t.value,
                                }
                              )
                            );
                          },
                          disabled: w,
                        }),
                      }),
                      (0, we.jsx)("label", {
                        children: (0, we.jsx)("input", {
                          type: "text",
                          placeholder: "Subject",
                          className: "w-full border-b border-gray-500 h-10",
                          value: p.subject,
                          onChange: function (e) {
                            var t;
                            return h(
                              y(
                                y({}, p),
                                {},
                                {
                                  subject:
                                    null === e ||
                                    void 0 === e ||
                                    null === (t = e.target) ||
                                    void 0 === t
                                      ? void 0
                                      : t.value,
                                }
                              )
                            );
                          },
                          disabled: w,
                        }),
                      }),
                      (0, we.jsx)("label", {
                        children: (0, we.jsx)("textarea", {
                          type: "text",
                          placeholder: "Message",
                          className:
                            "w-full border-b border-gray-500 align-top h-36 pt-2",
                          value: p.message,
                          onChange: function (e) {
                            var t;
                            return h(
                              y(
                                y({}, p),
                                {},
                                {
                                  message:
                                    null === e ||
                                    void 0 === e ||
                                    null === (t = e.target) ||
                                    void 0 === t
                                      ? void 0
                                      : t.value,
                                }
                              )
                            );
                          },
                          disabled: w,
                        }),
                      }),
                      (0, we.jsx)("input", {
                        type: "submit",
                        className: un()(
                          "px-4 py-2 leading-none uppercase my-5 border",
                          {
                            "text-gray-700 border-gray-700 hover:bg-gray-800 hover:text-white":
                              x,
                          },
                          { "text-gray-400 border-gray-400": !x || w }
                        ),
                        disabled: !x || w,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        wa = function (e) {
          var t = e.pageContent;
          return (0, we.jsxs)(we.Fragment, {
            children: [
              (0, we.jsx)(kn, {
                headerContent: null === t || void 0 === t ? void 0 : t.header,
              }),
              (null === t || void 0 === t ? void 0 : t.about) &&
                (0, we.jsx)(Cn, {
                  aboutContent: null === t || void 0 === t ? void 0 : t.about,
                }),
              (null === t || void 0 === t ? void 0 : t.project) &&
                (0, we.jsx)(Gi, {
                  projectContent:
                    null === t || void 0 === t ? void 0 : t.project,
                }),
              (null === t || void 0 === t ? void 0 : t.stack) &&
                (0, we.jsx)(ta, {
                  stackContent: null === t || void 0 === t ? void 0 : t.stack,
                }),
              (null === t || void 0 === t ? void 0 : t.contact) &&
                (0, we.jsx)(ba, {
                  contactContent:
                    null === t || void 0 === t ? void 0 : t.contact,
                }),
            ],
          });
        },
        Sa = function (e) {
          var t = e.projectContent,
            n = t.codeSourceLink,
            r = t.creationDate,
            o = t.description,
            i = t.images,
            a = t.projectLink,
            l = t.tags,
            u = t.title,
            s = t.subtitle;
          return (0, we.jsxs)("section", {
            className: "md:flex",
            children: [
              (0, we.jsx)("div", {
                className: "md:w-1/2",
                children:
                  i.length > 0 &&
                  (0, we.jsx)(Vi, {
                    children: i.map(function (e, t) {
                      var n = e.url,
                        r = e.description;
                      return (0,
                      we.jsx)(Yi, { options: { cover: !0, height: "auto", fixedHeight: "auto" }, children: (0, we.jsx)("img", { src: n, alt: r }) }, t);
                    }),
                  }),
              }),
              (0, we.jsxs)("div", {
                className: "md:w-1/2 p-10 flex justify-center flex-col",
                children: [
                  r &&
                    (0, we.jsx)("p", {
                      className: "text-sm pb-3",
                      children: r,
                    }),
                  u &&
                    (0, we.jsx)("h2", {
                      className: "uppercase font-bold text-xl",
                      children: u,
                    }),
                  s &&
                    (0, we.jsx)("p", {
                      className:
                        "font-mono text-2xl lg:text-3xl text-gray-500 my-5 lg:pb-5",
                      children: s,
                    }),
                  o &&
                    (0, we.jsx)("div", {
                      dangerouslySetInnerHTML: { __html: o },
                    }),
                  (0, we.jsxs)("div", {
                    className: "flex py-5",
                    children: [
                      a &&
                        (0, we.jsx)(an, {
                          text: "See Project",
                          link: a,
                          newTab: !0,
                          additionalClasses: "uppercase mr-4",
                          variant: "black",
                        }),
                      n &&
                        (0, we.jsx)(an, {
                          text: "See Code",
                          link: n,
                          newTab: !0,
                          additionalClasses: "uppercase",
                          variant: "black",
                        }),
                    ],
                  }),
                  l.length > 0 &&
                    (0, we.jsxs)("p", {
                      className: "italic",
                      children: ["Tags: ", l.join(", ")],
                    }),
                ],
              }),
            ],
          });
        },
        xa = function (t) {
          var n = t.projectsContent,
            r = (function () {
              var t = e.useContext(_t).matches,
                n = t[t.length - 1];
              return n ? n.params : {};
            })(),
            o = r.id,
            i = d((0, e.useState)(void 0), 2),
            a = i[0],
            l = i[1],
            u = Pt();
          return (
            (0, e.useEffect)(
              function () {
                if (o) {
                  var e = n.find(function (e) {
                    return e.slug === o;
                  });
                  e ? l(e) : u("/404");
                }
              },
              [o, u, n]
            ),
            a
              ? (0, we.jsxs)(we.Fragment, {
                  children: [
                    (0, we.jsx)(kn, {
                      headerContent: a,
                      isFullSize: !1,
                      displayBackBtn: !0,
                    }),
                    (0, we.jsx)(Sa, { projectContent: a }),
                  ],
                })
              : (0, we.jsx)("div", {
                  className: "grid place-items-center h-screen",
                  children: (0, we.jsx)(h(), { size: 120 }),
                })
          );
        },
        Ea = ["title", "titleId"];
      function ka() {
        return (
          (ka = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ka.apply(this, arguments)
        );
      }
      function Ca(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function Oa(t, n) {
        var r = t.title,
          o = t.titleId,
          i = Ca(t, Ea);
        return e.createElement(
          "svg",
          ka(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "96.000000pt",
              height: "96.000000pt",
              viewBox: "0 0 96.000000 96.000000",
              preserveAspectRatio: "xMidYMid meet",
              ref: n,
              "aria-labelledby": o,
            },
            i
          ),
          r ? e.createElement("title", { id: o }, r) : null,
          da ||
            (da = e.createElement(
              "g",
              {
                transform:
                  "translate(0.000000,96.000000) scale(0.100000,-0.100000)",
                fill: "#ffffff",
                stroke: "none",
              },
              e.createElement("path", {
                d: "M124 725 c-4 -8 -4 -22 0 -30 5 -13 51 -15 358 -13 l353 3 0 25 0 25 -353 3 c-307 2 -353 0 -358 -13z",
              }),
              e.createElement("path", {
                d: "M124 495 c-4 -8 -4 -22 0 -30 5 -13 51 -15 358 -13 l353 3 0 25 0 25 -353 3 c-307 2 -353 0 -358 -13z",
              }),
              e.createElement("path", {
                d: "M124 265 c-4 -8 -4 -22 0 -30 5 -13 51 -15 358 -13 l353 3 0 25 0 25 -353 3 c-307 2 -353 0 -358 -13z",
              })
            ))
        );
      }
      var _a = e.forwardRef(Oa),
        Ta =
          (n.p,
          function (t) {
            var n = t.logo,
              r = t.menuItems,
              o = t.cta,
              i = d((0, e.useState)(!1), 2),
              a = i[0],
              l = i[1],
              u = d((0, e.useState)(!1), 2),
              s = u[0],
              c = u[1];
            return (
              (window.onscroll = function () {
                document.body.scrollTop > 0 ||
                document.documentElement.scrollTop > 0
                  ? c(!0)
                  : c(!1);
              }),
              (0, we.jsxs)("nav", {
                className: un()(
                  "flex items-center justify-between flex-wrap p-6 fixed top-0 w-full z-50",
                  { "bg-slate-900 bg-opacity-80": s || a }
                ),
                children: [
                  (0, we.jsx)("div", {
                    className:
                      "flex items-center flex-shrink-0 text-white mr-6",
                    children: (0, we.jsx)("a", {
                      href: "/",
                      children: (0, we.jsx)("img", {
                        src: null === n || void 0 === n ? void 0 : n.url,
                        alt:
                          null === n || void 0 === n ? void 0 : n.description,
                        className: "h-7 w-7",
                      }),
                    }),
                  }),
                  (0, we.jsx)("div", {
                    className: "block md:hidden",
                    children: (0, we.jsx)("button", {
                      className:
                        "flex items-center px-3 py-2 border text-white border-white-400 hover:text-white hover:border-white",
                      onClick: function () {
                        return l(!a);
                      },
                      children: (0, we.jsx)(_a, { className: "h-4 w-4" }),
                    }),
                  }),
                  (0, we.jsxs)("div", {
                    className: un()(
                      "w-full block flex-grow md:flex md:items-center md:w-auto transition-all duration-500",
                      {
                        "opacity-0 overflow-hidden md:h-fit h-0 md:opacity-100":
                          !a,
                      }
                    ),
                    children: [
                      (0, we.jsx)("div", {
                        className: "text-sm md:flex-grow",
                        children: r.map(function (e, t) {
                          var n = rn(e);
                          return (0, we.jsx)(
                            En,
                            {
                              to: "/#".concat(n),
                              className:
                                "block mt-4 md:inline-block md:mt-0 text-slate-200 hover:text-white mr-4",
                              onClick: function () {
                                return l(!1);
                              },
                              children: e,
                            },
                            t
                          );
                        }),
                      }),
                      (0, we.jsx)("div", {
                        children:
                          o &&
                          (0, we.jsx)(an, {
                            text: o,
                            additionalClasses: "mt-4 md:mt-0",
                          }),
                      }),
                    ],
                  }),
                ],
              })
            );
          }),
        La = function (e) {
          var t = e.logo,
            n = e.footerItems,
            r = e.socialMedia;
          return (0, we.jsxs)("div", {
            className: "bg-slate-900 text-white px-10 md:px-24",
            children: [
              (0, we.jsx)("div", {
                className: "py-10",
                children: (0, we.jsx)("img", {
                  src: null === t || void 0 === t ? void 0 : t.url,
                  alt: null === t || void 0 === t ? void 0 : t.description,
                  className: "mx-auto h-12 w-12",
                }),
              }),
              (0, we.jsx)("div", {
                className:
                  "border-y border-slate-600 p-10 flex justify-center max-w-screen-lg mx-auto",
                children:
                  (null === n || void 0 === n ? void 0 : n.length) &&
                  n.map(function (e, t) {
                    var n = rn(e);
                    return (0,
                    we.jsx)(En, { to: "/#".concat(n), className: "uppercase px-5 text-xs sm:text-sm md:text-base", children: e }, t);
                  }),
              }),
              (null === r || void 0 === r ? void 0 : r.length) &&
                (0, we.jsx)("div", {
                  className: "flex justify-center py-5",
                  children: r.map(function (e, t) {
                    return (0,
                    we.jsx)("a", { href: e.link, target: "_blank", rel: "noreferrer", children: (0, we.jsx)("img", { src: e.url, alt: e.name, className: "h-7 w-7 mx-2" }) }, t);
                  }),
                }),
              (0, we.jsxs)("div", {
                className: "flex items-center justify-between py-5",
                children: [
                  (0, we.jsx)("p", {
                    className: "text-xs",
                    children: "Copyright \xa9 2023 Anthony Guido",
                  }),
                  (0, we.jsx)("a", {
                    href: "https://github.com/anthonyguidomadrid/portfolio",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "text-xs uppercase",
                    children: "Source code",
                  }),
                ],
              }),
            ],
          });
        },
        Na = function (e) {
          var t,
            n,
            r,
            o,
            i,
            a,
            l,
            u,
            s = e.pageContent,
            c = s
              ? null === s ||
                void 0 === s ||
                null === (t = s.menu) ||
                void 0 === t
                ? void 0
                : t.menuItems.concat([
                    null === s ||
                    void 0 === s ||
                    null === (n = s.menu) ||
                    void 0 === n
                      ? void 0
                      : n.cta,
                  ])
              : [];
          return (0, we.jsxs)(Xt, {
            basename: "https://anthonyguidomadrid.github.io/portfolio",
            children: [
              (0, we.jsx)(Ta, {
                logo:
                  null === s ||
                  void 0 === s ||
                  null === (r = s.assets) ||
                  void 0 === r
                    ? void 0
                    : r.logo,
                menuItems:
                  null === s ||
                  void 0 === s ||
                  null === (o = s.menu) ||
                  void 0 === o
                    ? void 0
                    : o.menuItems,
                cta:
                  null === s ||
                  void 0 === s ||
                  null === (i = s.menu) ||
                  void 0 === i
                    ? void 0
                    : i.cta,
              }),
              (0, we.jsx)(Kt, {
                children: (0, we.jsxs)(Ut, {
                  children: [
                    (0, we.jsx)(Ut, {
                      index: !0,
                      element: (0, we.jsx)(wa, { pageContent: s }),
                    }),
                    (0, we.jsx)(Ut, {
                      path: "/projects/:id",
                      element: (0, we.jsx)(xa, {
                        projectsContent:
                          null === s ||
                          void 0 === s ||
                          null === (a = s.project) ||
                          void 0 === a
                            ? void 0
                            : a.projects,
                      }),
                    }),
                    (0, we.jsx)(Ut, {
                      path: "*",
                      element: (0, we.jsx)("h1", { children: "404" }),
                    }),
                  ],
                }),
              }),
              (0, we.jsx)(La, {
                logo:
                  null === s ||
                  void 0 === s ||
                  null === (l = s.assets) ||
                  void 0 === l
                    ? void 0
                    : l.logo,
                footerItems: c,
                socialMedia:
                  null === s ||
                  void 0 === s ||
                  null === (u = s.assets) ||
                  void 0 === u
                    ? void 0
                    : u.socialMedia,
              }),
            ],
          });
        },
        Pa = function () {
          var t = d((0, e.useState)(null), 2),
            n = t[0],
            r = t[1],
            o = (0, e.useCallback)(
              l(
                i().mark(function e() {
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          fetch(
                            "https://graphql.contentful.com/content/v1/spaces/".concat(
                              "tuwamz27jc1j"
                            ),
                            {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(
                                  "sI1g7-mEYJ8t6Itakh2gPsu2XKP-t8Df1dOApLInGhM"
                                ),
                              },
                              body: JSON.stringify({
                                query:
                                  "\n{\n  aboutCollection(limit: 1) {\n    items {\n      title\n      subtitle\n      description {\n        json\n      }\n      image {\n        url\n        description\n      }\n      cv {\n        url\n        title\n      }\n    }\n  }\n  assetsCollection(limit: 1) {\n    items {\n      logo {\n        url\n        description\n      }\n      socialMediaCollection {\n        items {\n          url\n          title\n          description\n        }\n      }\n    }\n  } \n  contactCollection(limit: 1) {\n    items {\n      title\n      subtitle\n      description {\n        json\n      }\n      email\n      phone\n    }\n  }\n  headerCollection(limit: 1) {\n    items {\n      title\n      subtitle\n      banner {\n        url\n        description\n      }\n      cta\n      ctaLink\n    }\n  }\n  menuCollection(limit: 1) {\n    items {\n      menuItems\n      cta\n    }\n  }\n  projectCollection {\n    items {\n      creationDate\n      slug\n      title\n      subtitle\n      description {\n        json\n      }\n      thumbnail {\n        url\n        description\n      }\n      imagesCollection {\n        items {\n          url\n          description\n        }\n      }\n      link\n      codeSourceLink\n      tags\n    }\n  }\n  projectHeaderCollection(limit: 1) {\n    items {\n      title\n      subtitle\n    }\n  }\n  seoCollection(limit: 1) {\n    items {\n      title\n      description\n      appleTouchIcon {\n        url\n      }\n      favicon {\n        url\n      }\n      thumbnail {\n        url\n      }\n    }\n  }\n  stackCollection(limit: 1) {\n    items {\n      title\n      subtitle\n    }\n  }\n  stackTechCollection {\n    items {\n      title\n      technologies\n    }\n  }\n}\n",
                              }),
                            }
                          )
                            .then(
                              (function () {
                                var e = l(
                                  i().mark(function e(t) {
                                    var n;
                                    return i().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (e.next = 2), t.json();
                                          case 2:
                                            (n = e.sent), r(x(n));
                                          case 4:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            )
                            .catch(function (e) {
                              return console.log("There was an error:", e);
                            });
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              []
            );
          return (
            (0, e.useEffect)(
              function () {
                o();
              },
              [o]
            ),
            n
              ? (0, we.jsxs)(we.Fragment, {
                  children: [
                    (0, we.jsx)(Se, {
                      seoPageContent:
                        null === n || void 0 === n ? void 0 : n.seo,
                    }),
                    (0, we.jsx)(Na, { pageContent: n }),
                  ],
                })
              : (0, we.jsx)("div", {
                  className: "grid place-items-center h-screen",
                  children: (0, we.jsx)(h(), { size: 120 }),
                })
          );
        },
        ja = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(787)
              .then(n.bind(n, 787))
              .then(function (t) {
                var n = t.getCLS,
                  r = t.getFID,
                  o = t.getFCP,
                  i = t.getLCP,
                  a = t.getTTFB;
                n(e), r(e), o(e), i(e), a(e);
              });
        };
      r
        .createRoot(document.getElementById("root"))
        .render((0, we.jsx)(e.StrictMode, { children: (0, we.jsx)(Pa, {}) })),
        ja();
    })();
})();
//# sourceMappingURL=main.4be7ac26.js.map
