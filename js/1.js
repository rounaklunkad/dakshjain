console.log('PixelYourSite Free version 9.2.0');
window._wpemojiSettings = {
    "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/",
    "ext": ".png",
    "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/",
    "svgExt": ".svg",
};
/*!This file is auto-generated*/
!function (e, a, t) {
    var n, r, o, i = a.createElement("canvas"), p = i.getContext && i.getContext("2d");
    function s(e, t) {
        var a = String.fromCharCode
            , e = (p.clearRect(0, 0, i.width, i.height),
                p.fillText(a.apply(this, e), 0, 0),
                i.toDataURL());
        return p.clearRect(0, 0, i.width, i.height),
            p.fillText(a.apply(this, t), 0, 0),
            e === i.toDataURL()
    }
    function c(e) {
        var t = a.createElement("script");
        t.src = e,
            t.defer = t.type = "text/javascript",
            a.getElementsByTagName("head")[0].appendChild(t)
    }
    for (o = Array("flag", "emoji"),
        t.supports = {
            everything: !0,
            everythingExceptFlag: !0
        },
        r = 0; r < o.length; r++)
        t.supports[o[r]] = function (e) {
            if (p && p.fillText)
                switch (p.textBaseline = "top",
                p.font = "600 32px Arial",
                e) {
                    case "flag":
                        return s([127987, 65039, 8205, 9895, 65039], [127987, 65039, 8203, 9895, 65039]) ? !1 : !s([55356, 56826, 55356, 56819], [55356, 56826, 8203, 55356, 56819]) && !s([55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447], [55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447]);
                    case "emoji":
                        return !s([129777, 127995, 8205, 129778, 127999], [129777, 127995, 8203, 129778, 127999])
                }
            return !1
        }(o[r]),
            t.supports.everything = t.supports.everything && t.supports[o[r]],
            "flag" !== o[r] && (t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && t.supports[o[r]]);
    t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && !t.supports.flag,
        t.DOMReady = !1,
        t.readyCallback = function () {
            t.DOMReady = !0
        }
        ,
        t.supports.everything || (n = function () {
            t.readyCallback()
        }
            ,
            a.addEventListener ? (a.addEventListener("DOMContentLoaded", n, !1),
                e.addEventListener("load", n, !1)) : (e.attachEvent("onload", n),
                    a.attachEvent("onreadystatechange", function () {
                        "complete" === a.readyState && t.readyCallback()
                    })),
            (e = t.source || {}).concatemoji ? c(e.concatemoji) : e.wpemoji && e.twemoji && (c(e.twemoji),
                c(e.wpemoji)))
}(window, document, window._wpemojiSettings);
/*!jQuery v3.6.1 | (c) OpenJS Foundation and other contributors | jquery.org/license*/
!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
        : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = []
        , r = Object.getPrototypeOf
        , s = t.slice
        , g = t.flat ? function (e) {
            return t.flat.call(e)
        }
            : function (e) {
                return t.concat.apply([], e)
            }
        , u = t.push
        , i = t.indexOf
        , n = {}
        , o = n.toString
        , y = n.hasOwnProperty
        , a = y.toString
        , l = a.call(Object)
        , v = {}
        , m = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        }
        , x = function (e) {
            return null != e && e === e.window
        }
        , E = C.document
        , c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };
    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e,
            t)
            for (r in c)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.6.1"
        , S = function (e, t) {
            return new S.fn.init(e, t)
        };
    function p(e) {
        var t = !!e && "length" in e && e.length
            , n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function () {
            return s.call(this)
        },
        get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this,
                t
        },
        each: function (e) {
            return S.each(this, e)
        },
        map: function (n) {
            return this.pushStack(S.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function () {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        even: function () {
            return this.pushStack(S.grep(this, function (e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function () {
            return this.pushStack(S.grep(this, function (e, t) {
                return t % 2
            }))
        },
        eq: function (e) {
            var t = this.length
                , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
        S.extend = S.fn.extend = function () {
            var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
            for ("boolean" == typeof a && (l = a,
                a = arguments[s] || {},
                s++),
                "object" == typeof a || m(a) || (a = {}),
                s === u && (a = this,
                    s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        r = e[t],
                            "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                                o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {},
                                i = !1,
                                a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
            return a
        }
        ,
        S.extend({
            expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e)
            },
            noop: function () { },
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = y.call(t, "constructor") && t.constructor) && a.call(n) === l)
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            globalEval: function (e, t, n) {
                b(e, {
                    nonce: t && t.nonce
                }, n)
            },
            each: function (e, t) {
                var n, r = 0;
                if (p(e)) {
                    for (n = e.length; r < n; r++)
                        if (!1 === t.call(e[r], r, e[r]))
                            break
                } else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r]))
                            break;
                return e
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
                    n
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : i.call(t, e, n)
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                    e[i++] = t[r];
                return e.length = i,
                    e
            },
            grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                    !t(e[i], i) !== a && r.push(e[i]);
                return r
            },
            map: function (e, t, n) {
                var r, i, o = 0, a = [];
                if (p(e))
                    for (r = e.length; o < r; o++)
                        null != (i = t(e[o], o, n)) && a.push(i);
                else
                    for (o in e)
                        null != (i = t(e[o], o, n)) && a.push(i);
                return g(a)
            },
            guid: 1,
            support: v
        }),
        "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
        S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            n["[object " + t + "]"] = t.toLowerCase()
        });
    var d = function (n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, y, s, c, v, S = "sizzle" + 1 * new Date, p = n.document, k = 0, r = 0, m = ue(), x = ue(), A = ue(), N = ue(), j = function (e, t) {
            return e === t && (l = !0),
                0
        }, D = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", $ = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + R + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"), ne = function (e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function (e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function () {
            T()
        }, ae = be(function (e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes),
                t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function (e, t) {
                    L.apply(e, O.call(t))
                }
                    : function (e, t) {
                        var n = e.length
                            , r = 0;
                        while (e[n++] = t[r++])
                            ;
                        e.length = n - 1
                    }
            }
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
                "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && (T(e),
                e = e || C,
                E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                    n
                        } else if (f && (a = f.getElementById(i)) && v(e, a) && a.id === i)
                            return n.push(a),
                                n
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)),
                                n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                            return H.apply(n, e.getElementsByClassName(i)),
                                n
                    }
                if (d.qsa && !N[t + " "] && (!y || !y.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t,
                        f = e,
                        1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ve(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)),
                            o = (l = h(t)).length;
                        while (o--)
                            l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)),
                            n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, r)
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                    e[t + " "] = n
            }
        }
        function le(e) {
            return e[S] = !0,
                e
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                    t = null
            }
        }
        function fe(e, t) {
            var n = e.split("|")
                , r = n.length;
            while (r--)
                b.attrHandle[n[r]] = t
        }
        function pe(e, t) {
            var n = t && e
                , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function ge(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }
        function ye(a) {
            return le(function (o) {
                return o = +o,
                    le(function (e, t) {
                        var n, r = a([], e.length, o), i = r.length;
                        while (i--)
                            e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                    })
            })
        }
        function ve(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {},
            i = se.isXML = function (e) {
                var t = e && e.namespaceURI
                    , n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }
            ,
            T = se.setDocument = function (e) {
                var t, n, r = e ? e.ownerDocument || e : p;
                return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement,
                    E = !i(C),
                    p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
                    d.scope = ce(function (e) {
                        return a.appendChild(e).appendChild(C.createElement("div")),
                            "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                    }),
                    d.attributes = ce(function (e) {
                        return e.className = "i",
                            !e.getAttribute("className")
                    }),
                    d.getElementsByTagName = ce(function (e) {
                        return e.appendChild(C.createComment("")),
                            !e.getElementsByTagName("*").length
                    }),
                    d.getElementsByClassName = K.test(C.getElementsByClassName),
                    d.getById = ce(function (e) {
                        return a.appendChild(e).id = S,
                            !C.getElementsByName || !C.getElementsByName(S).length
                    }),
                    d.getById ? (b.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }
                        ,
                        b.find.ID = function (e, t) {
                            if ("undefined" != typeof t.getElementById && E) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }
                    ) : (b.filter.ID = function (e) {
                        var n = e.replace(te, ne);
                        return function (e) {
                            var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return t && t.value === n
                        }
                    }
                        ,
                        b.find.ID = function (e, t) {
                            if ("undefined" != typeof t.getElementById && E) {
                                var n, r, i, o = t.getElementById(e);
                                if (o) {
                                    if ((n = o.getAttributeNode("id")) && n.value === e)
                                        return [o];
                                    i = t.getElementsByName(e),
                                        r = 0;
                                    while (o = i[r++])
                                        if ((n = o.getAttributeNode("id")) && n.value === e)
                                            return [o]
                                }
                                return []
                            }
                        }
                    ),
                    b.find.TAG = d.getElementsByTagName ? function (e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                    }
                        : function (e, t) {
                            var n, r = [], i = 0, o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                while (n = o[i++])
                                    1 === n.nodeType && r.push(n);
                                return r
                            }
                            return o
                        }
                    ,
                    b.find.CLASS = d.getElementsByClassName && function (e, t) {
                        if ("undefined" != typeof t.getElementsByClassName && E)
                            return t.getElementsByClassName(e)
                    }
                    ,
                    s = [],
                    y = [],
                    (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
                        var t;
                        a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                            e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + R + ")"),
                            e.querySelectorAll("[id~=" + S + "-]").length || y.push("~="),
                            (t = C.createElement("input")).setAttribute("name", ""),
                            e.appendChild(t),
                            e.querySelectorAll("[name='']").length || y.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                            e.querySelectorAll(":checked").length || y.push(":checked"),
                            e.querySelectorAll("a#" + S + "+*").length || y.push(".#.+[+~]"),
                            e.querySelectorAll("\\\f"),
                            y.push("[\\r\\n\\f]")
                    }),
                        ce(function (e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = C.createElement("input");
                            t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                                e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="),
                                2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"),
                                a.appendChild(e).disabled = !0,
                                2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                y.push(",.*:")
                        })),
                    (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
                        d.disconnectedMatch = c.call(e, "*"),
                            c.call(e, "[s!='']:x"),
                            s.push("!=", F)
                    }),
                    y = y.length && new RegExp(y.join("|")),
                    s = s.length && new RegExp(s.join("|")),
                    t = K.test(a.compareDocumentPosition),
                    v = t || K.test(a.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e
                            , r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    }
                        : function (e, t) {
                            if (t)
                                while (t = t.parentNode)
                                    if (t === e)
                                        return !0;
                            return !1
                        }
                    ,
                    j = t ? function (e, t) {
                        if (e === t)
                            return l = !0,
                                0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && v(p, e) ? -1 : t == C || t.ownerDocument == p && v(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                    }
                        : function (e, t) {
                            if (e === t)
                                return l = !0,
                                    0;
                            var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                            if (!i || !o)
                                return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                            if (i === o)
                                return pe(e, t);
                            n = e;
                            while (n = n.parentNode)
                                a.unshift(n);
                            n = t;
                            while (n = n.parentNode)
                                s.unshift(n);
                            while (a[r] === s[r])
                                r++;
                            return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                        }
                ),
                    C
            }
            ,
            se.matches = function (e, t) {
                return se(e, null, null, t)
            }
            ,
            se.matchesSelector = function (e, t) {
                if (T(e),
                    d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!y || !y.test(t)))
                    try {
                        var n = c.call(e, t);
                        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return n
                    } catch (e) {
                        N(t, !0)
                    }
                return 0 < se(t, C, null, [e]).length
            }
            ,
            se.contains = function (e, t) {
                return (e.ownerDocument || e) != C && T(e),
                    v(e, t)
            }
            ,
            se.attr = function (e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()]
                    , r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }
            ,
            se.escape = function (e) {
                return (e + "").replace(re, ie)
            }
            ,
            se.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            se.uniqueSort = function (e) {
                var t, n = [], r = 0, i = 0;
                if (l = !d.detectDuplicates,
                    u = !d.sortStable && e.slice(0),
                    e.sort(j),
                    l) {
                    while (t = e[i++])
                        t === e[i] && (r = n.push(i));
                    while (r--)
                        e.splice(n[r], 1)
                }
                return u = null,
                    e
            }
            ,
            o = se.getText = function (e) {
                var t, n = "", r = 0, i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += o(e)
                    } else if (3 === i || 4 === i)
                        return e.nodeValue
                } else
                    while (t = e[r++])
                        n += o(t);
                return n
            }
            ,
            (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(te, ne),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                            e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                            e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        }
                            : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                    },
                    CLASS: function (e) {
                        var t = m[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (n, r, i) {
                        return function (e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "",
                                "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace($, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function (h, e, t, g, y) {
                        var v = "nth" !== h.slice(0, 3)
                            , m = "last" !== h.slice(-4)
                            , x = "of-type" === e;
                        return 1 === g && 0 === y ? function (e) {
                            return !!e.parentNode
                        }
                            : function (e, t, n) {
                                var r, i, o, a, s, u, l = v !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                                if (c) {
                                    if (v) {
                                        while (l) {
                                            a = e;
                                            while (a = a[l])
                                                if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                                    return !1;
                                            u = l = "only" === h && !u && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (u = [m ? c.firstChild : c.lastChild],
                                        m && p) {
                                        d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2],
                                            a = s && c.childNodes[s];
                                        while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                            if (1 === a.nodeType && ++d && a === e) {
                                                i[h] = [k, s, d];
                                                break
                                            }
                                    } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                                        !1 === d)
                                        while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                            if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]),
                                                a === e))
                                                break;
                                    return (d -= y) === g || d % g == 0 && 0 <= d / g
                                }
                            }
                    },
                    PSEUDO: function (e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                            b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
                                var n, r = a(e, o), i = r.length;
                                while (i--)
                                    e[n = P(e, r[i])] = !(t[n] = r[i])
                            }) : function (e) {
                                return a(e, 0, t)
                            }
                        ) : a
                    }
                },
                pseudos: {
                    not: le(function (e) {
                        var r = []
                            , i = []
                            , s = f(e.replace(B, "$1"));
                        return s[S] ? le(function (e, t, n, r) {
                            var i, o = s(e, null, r, []), a = e.length;
                            while (a--)
                                (i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function (e, t, n) {
                            return r[0] = e,
                                s(r, null, n, i),
                                r[0] = null,
                                !i.pop()
                        }
                    }),
                    has: le(function (t) {
                        return function (e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function (t) {
                        return t = t.replace(te, ne),
                            function (e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function (n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n),
                            n = n.replace(te, ne).toLowerCase(),
                            function (e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                        return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function (e) {
                        return e === a
                    },
                    focus: function (e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                            !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function (e) {
                        return J.test(e.nodeName)
                    },
                    input: function (e) {
                        return Q.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ye(function () {
                        return [0]
                    }),
                    last: ye(function (e, t) {
                        return [t - 1]
                    }),
                    eq: ye(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ye(function (e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: ye(function (e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: ye(function (e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;)
                            e.push(r);
                        return e
                    }),
                    gt: ye(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;)
                            e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = he(e);
        function me() { }
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(s, e, t) {
            var u = e.dir
                , l = e.next
                , c = l || u
                , f = t && "parentNode" === c
                , p = r++;
            return e.first ? function (e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            }
                : function (e, t, n) {
                    var r, i, o, a = [k, p];
                    if (n) {
                        while (e = e[u])
                            if ((1 === e.nodeType || f) && s(e, t, n))
                                return !0
                    } else
                        while (e = e[u])
                            if (1 === e.nodeType || f)
                                if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                                    l && l === e.nodeName.toLowerCase())
                                    e = e[u] || e;
                                else {
                                    if ((r = i[c]) && r[0] === k && r[1] === p)
                                        return a[2] = r[2];
                                    if ((i[c] = a)[2] = s(e, t, n))
                                        return !0
                                }
                    return !1
                }
        }
        function we(i) {
            return 1 < i.length ? function (e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
                : i[0]
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                    l && t.push(s)));
            return a
        }
        function Ce(d, h, g, y, v, e) {
            return y && !y[S] && (y = Ce(y)),
                v && !v[S] && (v = Ce(v, e)),
                le(function (e, t, n, r) {
                    var i, o, a, s = [], u = [], l = t.length, c = e || function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++)
                            se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? v || (e ? d : l || y) ? [] : t : f;
                    if (g && g(f, p, n, r),
                        y) {
                        i = Te(p, u),
                            y(i, [], n, r),
                            o = i.length;
                        while (o--)
                            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                    }
                    if (e) {
                        if (v || d) {
                            if (v) {
                                i = [],
                                    o = p.length;
                                while (o--)
                                    (a = p[o]) && i.push(f[o] = a);
                                v(null, p = [], i, r)
                            }
                            o = p.length;
                            while (o--)
                                (a = p[o]) && -1 < (i = v ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                        }
                    } else
                        p = Te(p === t ? p.splice(l, p.length) : p),
                            v ? v(null, t, p, r) : H.apply(t, p)
                })
        }
        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
                return e === i
            }, a, !0), l = be(function (e) {
                return -1 < P(i, e)
            }, a, !0), c = [function (e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                    r
            }
            ]; s < r; s++)
                if (t = b.relative[e[s].type])
                    c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type])
                                break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos,
            b.setFilters = new me,
            h = se.tokenize = function (e, t) {
                var n, r, i, o, a, s, u, l = x[e + " "];
                if (l)
                    return t ? 0 : l.slice(0);
                a = e,
                    s = [],
                    u = b.preFilter;
                while (a) {
                    for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                        s.push(i = [])),
                        n = !1,
                        (r = z.exec(a)) && (n = r.shift(),
                            i.push({
                                value: n,
                                type: r[0].replace(B, " ")
                            }),
                            a = a.slice(n.length)),
                        b.filter)
                        !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                            i.push({
                                value: n,
                                type: o,
                                matches: r
                            }),
                            a = a.slice(n.length));
                    if (!n)
                        break
                }
                return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
            }
            ,
            f = se.compile = function (e, t) {
                var n, y, v, m, x, r, i = [], o = [], a = A[e + " "];
                if (!a) {
                    t || (t = h(e)),
                        n = t.length;
                    while (n--)
                        (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                    (a = A(e, (y = o,
                        m = 0 < (v = i).length,
                        x = 0 < y.length,
                        r = function (e, t, n, r, i) {
                            var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = k += null == p ? 1 : Math.random() || .1, g = d.length;
                            for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                                if (x && o) {
                                    a = 0,
                                        t || o.ownerDocument == C || (T(o),
                                            n = !E);
                                    while (s = y[a++])
                                        if (s(o, t || C, n)) {
                                            r.push(o);
                                            break
                                        }
                                    i && (k = h)
                                }
                                m && ((o = !s && o) && u--,
                                    e && c.push(o))
                            }
                            if (u += l,
                                m && l !== u) {
                                a = 0;
                                while (s = v[a++])
                                    s(c, f, t, n);
                                if (e) {
                                    if (0 < u)
                                        while (l--)
                                            c[l] || f[l] || (f[l] = q.call(r));
                                    f = Te(f)
                                }
                                H.apply(r, f),
                                    i && !e && 0 < f.length && 1 < u + v.length && se.uniqueSort(r)
                            }
                            return i && (k = h,
                                w = p),
                                c
                        }
                        ,
                        m ? le(r) : r))).selector = e
                }
                return a
            }
            ,
            g = se.select = function (e, t, n, r) {
                var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
                if (n = n || [],
                    1 === c.length) {
                    if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                        if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                            return n;
                        l && (t = t.parentNode),
                            e = e.slice(o.shift().value.length)
                    }
                    i = G.needsContext.test(e) ? 0 : o.length;
                    while (i--) {
                        if (a = o[i],
                            b.relative[s = a.type])
                            break;
                        if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ve(t.parentNode) || t))) {
                            if (o.splice(i, 1),
                                !(e = r.length && xe(o)))
                                return H.apply(n, r),
                                    n;
                            break
                        }
                    }
                }
                return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ve(t.parentNode) || t),
                    n
            }
            ,
            d.sortStable = S.split("").sort(j).join("") === S,
            d.detectDuplicates = !!l,
            T(),
            d.sortDetached = ce(function (e) {
                return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
            }),
            ce(function (e) {
                return e.innerHTML = "<a href='#'></a>",
                    "#" === e.firstChild.getAttribute("href")
            }) || fe("type|href|height|width", function (e, t, n) {
                if (!n)
                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            d.attributes && ce(function (e) {
                return e.innerHTML = "<input/>",
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
            }) || fe("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue
            }),
            ce(function (e) {
                return null == e.getAttribute("disabled")
            }) || fe(R, function (e, t, n) {
                var r;
                if (!n)
                    return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }),
            se
    }(C);
    S.find = d,
        S.expr = d.selectors,
        S.expr[":"] = S.expr.pseudos,
        S.uniqueSort = S.unique = d.uniqueSort,
        S.text = d.getText,
        S.isXMLDoc = d.isXML,
        S.contains = d.contains,
        S.escapeSelector = d.escape;
    var h = function (e, t, n) {
        var r = []
            , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && S(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
        , T = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
        , k = S.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
        return m(n) ? S.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function (e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function (e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
                return 1 === e.nodeType
            }))
    }
        ,
        S.fn.extend({
            find: function (e) {
                var t, n, r = this.length, i = this;
                if ("string" != typeof e)
                    return this.pushStack(S(e).filter(function () {
                        for (t = 0; t < r; t++)
                            if (S.contains(i[t], this))
                                return !0
                    }));
                for (n = this.pushStack([]),
                    t = 0; t < r; t++)
                    S.find(e, i[t], n);
                return 1 < r ? S.uniqueSort(n) : n
            },
            filter: function (e) {
                return this.pushStack(j(this, e || [], !1))
            },
            not: function (e) {
                return this.pushStack(j(this, e || [], !0))
            },
            is: function (e) {
                return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
            }
        });
    var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function (e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || D,
            "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t,
                    S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
                    N.test(r[1]) && S.isPlainObject(t))
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i,
                this.length = 1),
                this
        }
        return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }
    ).prototype = S.fn,
        D = S(E);
    var L = /^(?:parents|prev(?:Until|All))/
        , H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    S.fn.extend({
        has: function (e) {
            var t = S(e, this)
                , n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e]))
                        return !0
            })
        },
        closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
        S.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return h(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return h(e, "parentNode", n)
            },
            next: function (e) {
                return O(e, "nextSibling")
            },
            prev: function (e) {
                return O(e, "previousSibling")
            },
            nextAll: function (e) {
                return h(e, "nextSibling")
            },
            prevAll: function (e) {
                return h(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return h(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return h(e, "previousSibling", n)
            },
            siblings: function (e) {
                return T((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return T(e.firstChild)
            },
            contents: function (e) {
                return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e),
                    S.merge([], e.childNodes))
            }
        }, function (r, i) {
            S.fn[r] = function (e, t) {
                var n = S.map(this, i, e);
                return "Until" !== r.slice(-5) && (t = e),
                    t && "string" == typeof t && (n = S.filter(t, n)),
                    1 < this.length && (H[r] || S.uniqueSort(n),
                        L.test(r) && n.reverse()),
                    this.pushStack(n)
            }
        });
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e
    }
    function M(e) {
        throw e
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
            n = {},
            S.each(e.match(P) || [], function (e, t) {
                n[t] = !0
            }),
            n) : S.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function () {
            for (a = a || r.once,
                o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length)
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                        t = !1)
            }
            r.memory || (t = !1),
                i = !1,
                a && (s = t ? [] : "")
        }, f = {
            add: function () {
                return s && (t && !i && (l = s.length - 1,
                    u.push(t)),
                    function n(e) {
                        S.each(e, function (e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments),
                    t && !i && c()),
                    this
            },
            remove: function () {
                return S.each(arguments, function (e, t) {
                    var n;
                    while (-1 < (n = S.inArray(t, s, n)))
                        s.splice(n, 1),
                            n <= l && l--
                }),
                    this
            },
            has: function (e) {
                return e ? -1 < S.inArray(e, s) : 0 < s.length
            },
            empty: function () {
                return s && (s = []),
                    this
            },
            disable: function () {
                return a = u = [],
                    s = t = "",
                    this
            },
            disabled: function () {
                return !s
            },
            lock: function () {
                return a = u = [],
                    t || i || (s = t = ""),
                    this
            },
            locked: function () {
                return !!a
            },
            fireWith: function (e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                    u.push(t),
                    i || c()),
                    this
            },
            fire: function () {
                return f.fireWith(this, arguments),
                    this
            },
            fired: function () {
                return !!o
            }
        };
        return f
    }
        ,
        S.extend({
            Deferred: function (e) {
                var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]]
                    , i = "pending"
                    , a = {
                        state: function () {
                            return i
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments),
                                this
                        },
                        "catch": function (e) {
                            return a.then(null, e)
                        },
                        pipe: function () {
                            var i = arguments;
                            return S.Deferred(function (r) {
                                S.each(o, function (e, t) {
                                    var n = m(i[t[4]]) && i[t[4]];
                                    s[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                    })
                                }),
                                    i = null
                            }).promise()
                        },
                        then: function (t, n, r) {
                            var u = 0;
                            function l(i, o, a, s) {
                                return function () {
                                    var n = this
                                        , r = arguments
                                        , e = function () {
                                            var e, t;
                                            if (!(i < u)) {
                                                if ((e = a.apply(n, r)) === o.promise())
                                                    throw new TypeError("Thenable self-resolution");
                                                t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                                    m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++,
                                                        t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0,
                                                            r = [e]),
                                                            (s || o.resolveWith)(n, r))
                                            }
                                        }
                                        , t = s ? e : function () {
                                            try {
                                                e()
                                            } catch (e) {
                                                S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace),
                                                    u <= i + 1 && (a !== M && (n = void 0,
                                                        r = [e]),
                                                        o.rejectWith(n, r))
                                            }
                                        }
                                        ;
                                    i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()),
                                        C.setTimeout(t))
                                }
                            }
                            return S.Deferred(function (e) {
                                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                                    o[1][3].add(l(0, e, m(t) ? t : R)),
                                    o[2][3].add(l(0, e, m(n) ? n : M))
                            }).promise()
                        },
                        promise: function (e) {
                            return null != e ? S.extend(e, a) : a
                        }
                    }
                    , s = {};
                return S.each(o, function (e, t) {
                    var n = t[2]
                        , r = t[5];
                    a[t[1]] = n.add,
                        r && n.add(function () {
                            i = r
                        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                        n.add(t[3].fire),
                        s[t[0]] = function () {
                            return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                                this
                        }
                        ,
                        s[t[0] + "With"] = n.fireWith
                }),
                    a.promise(s),
                    e && e.call(s, s),
                    s
            },
            when: function (e) {
                var n = arguments.length
                    , t = n
                    , r = Array(t)
                    , i = s.call(arguments)
                    , o = S.Deferred()
                    , a = function (t) {
                        return function (e) {
                            r[t] = this,
                                i[t] = 1 < arguments.length ? s.call(arguments) : e,
                                --n || o.resolveWith(r, i)
                        }
                    };
                if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n),
                    "pending" === o.state() || m(i[t] && i[t].then)))
                    return o.then();
                while (t--)
                    I(i[t], a(t), o.reject);
                return o.promise()
            }
        });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function (e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
        ,
        S.readyException = function (e) {
            C.setTimeout(function () {
                throw e
            })
        }
        ;
    var F = S.Deferred();
    function $() {
        E.removeEventListener("DOMContentLoaded", $),
            C.removeEventListener("load", $),
            S.ready()
    }
    S.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            S.readyException(e)
        }),
            this
    }
        ,
        S.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
            }
        }),
        S.ready.then = F.then,
        "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", $),
            C.addEventListener("load", $));
    var B = function (e, t, n, r, i, o, a) {
        var s = 0
            , u = e.length
            , l = null == n;
        if ("object" === w(n))
            for (s in i = !0,
                n)
                B(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
            m(r) || (a = !0),
            l && (a ? (t.call(e, r),
                t = null) : (l = t,
                    t = function (e, t, n) {
                        return l.call(S(e), n)
                    }
            )),
            t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
        , _ = /^-ms-/
        , z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1,
        G.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || (t = {},
                    V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))),
                    t
            },
            set: function (e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t)
                    i[X(t)] = n;
                else
                    for (r in t)
                        i[X(r)] = t[r];
                return i
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
            },
            access: function (e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                    void 0 !== n ? n : t)
            },
            remove: function (e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                        while (n--)
                            delete r[t[n]]
                    }
                    (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !S.isEmptyObject(t)
            }
        };
    var Y = new G
        , Q = new G
        , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
        , K = /[A-Z]/g;
    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(),
                "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) { }
                Q.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    S.extend({
        hasData: function (e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function (e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function (e, t) {
            Q.remove(e, t)
        },
        _data: function (e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function (e, t) {
            Y.remove(e, t)
        }
    }),
        S.fn.extend({
            data: function (n, e) {
                var t, r, i, o = this[0], a = o && o.attributes;
                if (void 0 === n) {
                    if (this.length && (i = Q.get(o),
                        1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                        t = a.length;
                        while (t--)
                            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)),
                                Z(o, r, i[r]));
                        Y.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof n ? this.each(function () {
                    Q.set(this, n)
                }) : B(this, function (e) {
                    var t;
                    if (o && void 0 === e)
                        return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                    this.each(function () {
                        Q.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0)
            },
            removeData: function (e) {
                return this.each(function () {
                    Q.remove(this, e)
                })
            }
        }),
        S.extend({
            queue: function (e, t, n) {
                var r;
                if (e)
                    return t = (t || "fx") + "queue",
                        r = Y.get(e, t),
                        n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)),
                        r || []
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = S.queue(e, t)
                    , r = n.length
                    , i = n.shift()
                    , o = S._queueHooks(e, t);
                "inprogress" === i && (i = n.shift(),
                    r--),
                    i && ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(e, function () {
                            S.dequeue(e, t)
                        }, o)),
                    !r && o && o.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return Y.get(e, n) || Y.access(e, n, {
                    empty: S.Callbacks("once memory").add(function () {
                        Y.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        S.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return "string" != typeof t && (n = t,
                    t = "fx",
                    e--),
                    arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                        var e = S.queue(this, t, n);
                        S._queueHooks(this, t),
                            "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
                    })
            },
            dequeue: function (e) {
                return this.each(function () {
                    S.dequeue(this, e)
                })
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, t) {
                var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function () {
                    --r || i.resolveWith(o, [o])
                };
                "string" != typeof e && (t = e,
                    e = void 0),
                    e = e || "fx";
                while (a--)
                    (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++,
                        n.empty.add(s));
                return s(),
                    i.promise(t)
            }
        });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i")
        , ne = ["Top", "Right", "Bottom", "Left"]
        , re = E.documentElement
        , ie = function (e) {
            return S.contains(e.ownerDocument, e)
        }
        , oe = {
            composed: !0
        };
    re.getRootNode && (ie = function (e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    }
    );
    var ae = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };
    function se(e, t, n, r) {
        var i, o, a = 20, s = r ? function () {
            return r.cur()
        }
            : function () {
                return S.css(e, t, "")
            }
            , u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"), c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
                l = l || c[3],
                c = +u || 1;
            while (a--)
                S.style(e, t, c + l),
                    (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                    c /= o;
            c *= 2,
                S.style(e, t, c + l),
                n = n || []
        }
        return n && (c = +c || +u || 0,
            i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
            r && (r.unit = l,
                r.start = c,
                r.end = i)),
            i
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
                t ? ("none" === n && (l[c] = Y.get(r, "display") || null,
                    l[c] || (r.style.display = "")),
                    "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0,
                        a = (i = r).ownerDocument,
                        s = i.nodeName,
                        (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)),
                            u = S.css(o, "display"),
                            o.parentNode.removeChild(o),
                            "none" === u && (u = "block"),
                            ue[s] = u)))) : "none" !== n && (l[c] = "none",
                                Y.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function () {
            return le(this, !0)
        },
        hide: function () {
            return le(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")),
        (fe = E.createElement("input")).setAttribute("type", "radio"),
        fe.setAttribute("checked", "checked"),
        fe.setAttribute("name", "t"),
        ce.appendChild(fe),
        v.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked,
        ce.innerHTML = "<textarea>x</textarea>",
        v.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue,
        ce.innerHTML = "<option></option>",
        v.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
            void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }
    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
        ge.th = ge.td,
        v.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o))
                    S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                        s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                        u = ge[s] || ge._default,
                        a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2],
                        c = u[0];
                    while (c--)
                        a = a.lastChild;
                    S.merge(p, a.childNodes),
                        (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
            d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r))
                i && i.push(o);
            else if (l = ie(o),
                a = ye(f.appendChild(o), "script"),
                l && ve(a),
                n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    var be = /^([^.]*)(?:\.(.+)|)/;
    function we() {
        return !0
    }
    function Te() {
        return !1
    }
    function Ce(e, t) {
        return e === function () {
            try {
                return E.activeElement
            } catch (e) { }
        }() == ("focus" === t)
    }
    function Ee(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
                n = void 0),
                t)
                Ee(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
            r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
                r = void 0) : (i = r,
                    r = n,
                    n = void 0)),
            !1 === i)
            i = Te;
        else if (!i)
            return e;
        return 1 === o && (a = i,
            (i = function (e) {
                return S().off(e),
                    a.apply(this, arguments)
            }
            ).guid = a.guid || (a.guid = S.guid++)),
            e.each(function () {
                S.event.add(this, t, i, r, n)
            })
    }
    function Se(e, i, o) {
        o ? (Y.set(e, i, !1),
            S.event.add(e, i, {
                namespace: !1,
                handler: function (e) {
                    var t, n, r = Y.get(this, i);
                    if (1 & e.isTrigger && this[i]) {
                        if (r.length)
                            (S.event.special[i] || {}).delegateType && e.stopPropagation();
                        else if (r = s.call(arguments),
                            Y.set(this, i, r),
                            t = o(this, i),
                            this[i](),
                            r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {},
                            r !== n)
                            return e.stopImmediatePropagation(),
                                e.preventDefault(),
                                n && n.value
                    } else
                        r.length && (Y.set(this, i, {
                            value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                        }),
                            e.stopImmediatePropagation())
                }
            })) : void 0 === Y.get(e, i) && S.event.add(e, i, we)
    }
    S.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler,
                    i = o.selector),
                    i && S.find.matchesSelector(re, i),
                    n.guid || (n.guid = S.guid++),
                    (u = y.events) || (u = y.events = Object.create(null)),
                    (a = y.handle) || (a = y.handle = function (e) {
                        return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                    }
                    ),
                    l = (e = (e || "").match(P) || [""]).length;
                while (l--)
                    d = g = (s = be.exec(e[l]) || [])[1],
                        h = (s[2] || "").split(".").sort(),
                        d && (f = S.event.special[d] || {},
                            d = (i ? f.delegateType : f.bindType) || d,
                            f = S.event.special[d] || {},
                            c = S.extend({
                                type: d,
                                origType: g,
                                data: r,
                                handler: n,
                                guid: n.guid,
                                selector: i,
                                needsContext: i && S.expr.match.needsContext.test(i),
                                namespace: h.join(".")
                            }, o),
                            (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                                f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                            f.add && (f.add.call(t, c),
                                c.handler.guid || (c.handler.guid = n.guid)),
                            i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                            S.event.global[d] = !0)
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = Y.hasData(e) && Y.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = be.exec(t[l]) || [])[1],
                        h = (s[2] || "").split(".").sort(),
                        d) {
                        f = S.event.special[d] || {},
                            p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                            s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            a = o = p.length;
                        while (o--)
                            c = p[o],
                                !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                                    c.selector && p.delegateCount--,
                                    f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || S.removeEvent(e, d, y.handle),
                            delete u[d])
                    } else
                        for (d in u)
                            S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e), l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {};
            for (s[0] = u,
                t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (u.delegateTarget = this,
                !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l),
                    t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem,
                        n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                        u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                            u.data = o.data,
                            void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                                u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u),
                    u.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                            a = {},
                            n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length),
                                a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
                u < t.length && s.push({
                    elem: l,
                    handlers: t.slice(u)
                }),
                s
        },
        addProp: function (t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function () {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                    : function () {
                        if (this.originalEvent)
                            return this.originalEvent[t]
                    }
                ,
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function (e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we),
                        !1
                },
                trigger: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"),
                        !0
                },
                _default: function (e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
        S.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
        ,
        S.Event = function (e, t) {
            if (!(this instanceof S.Event))
                return new S.Event(e, t);
            e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te,
                this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                this.currentTarget = e.currentTarget,
                this.relatedTarget = e.relatedTarget) : this.type = e,
                t && S.extend(this, t),
                this.timeStamp = e && e.timeStamp || Date.now(),
                this[S.expando] = !0
        }
        ,
        S.Event.prototype = {
            constructor: S.Event,
            isDefaultPrevented: Te,
            isPropagationStopped: Te,
            isImmediatePropagationStopped: Te,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = we,
                    e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = we,
                    e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = we,
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        S.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            "char": !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0
        }, S.event.addProp),
        S.each({
            focus: "focusin",
            blur: "focusout"
        }, function (t, e) {
            S.event.special[t] = {
                setup: function () {
                    return Se(this, t, Ce),
                        !1
                },
                trigger: function () {
                    return Se(this, t),
                        !0
                },
                _default: function (e) {
                    return Y.get(e.target, t)
                },
                delegateType: e
            }
        }),
        S.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, i) {
            S.event.special[e] = {
                delegateType: i,
                bindType: i,
                handle: function (e) {
                    var t, n = e.relatedTarget, r = e.handleObj;
                    return n && (n === this || S.contains(this, n)) || (e.type = r.origType,
                        t = r.handler.apply(this, arguments),
                        e.type = i),
                        t
                }
            }
        }),
        S.fn.extend({
            on: function (e, t, n, r) {
                return Ee(this, e, t, n, r)
            },
            one: function (e, t, n, r) {
                return Ee(this, e, t, n, r, 1)
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return r = e.handleObj,
                        S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                        this;
                if ("object" == typeof e) {
                    for (i in e)
                        this.off(i, t, e[i]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t,
                    t = void 0),
                    !1 === n && (n = Te),
                    this.each(function () {
                        S.event.remove(this, e, n, t)
                    })
            }
        });
    var ke = /<script|<style|<link/i
        , Ae = /checked\s*(?:[^=]|=\s*.checked.)/i
        , Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function je(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }
    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
    }
    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
            e
    }
    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"),
                    s)
                    for (n = 0,
                        r = s[i].length; n < r; n++)
                        S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e),
                a = S.extend({}, o),
                Q.set(t, a))
        }
    }
    function He(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !v.checkClone && Ae.test(d))
            return n.each(function (e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                    He(t, r, i, o)
            });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild,
            1 === e.childNodes.length && (e = t),
            t || o)) {
            for (s = (a = S.map(ye(e, "script"), De)).length; c < f; c++)
                u = e,
                    c !== p && (u = S.clone(u, !0, !0),
                        s && S.merge(a, ye(u, "script"))),
                    i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                    S.map(a, qe),
                    c = 0; c < s; c++)
                    u = a[c],
                        he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                            nonce: u.nonce || u.getAttribute("nonce")
                        }, l) : b(u.textContent.replace(Ne, ""), u, l))
        }
        return n
    }
    function Oe(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || S.cleanData(ye(r)),
                r.parentNode && (n && ie(r) && ve(ye(r, "script")),
                    r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function (e) {
            return e
        },
        clone: function (e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ye(c),
                    r = 0,
                    i = (o = ye(e)).length; r < i; r++)
                    s = o[r],
                        u = a[r],
                        void 0,
                        "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ye(e),
                        a = a || ye(c),
                        r = 0,
                        i = o.length; r < i; r++)
                        Le(o[r], a[r]);
                else
                    Le(e, c);
            return 0 < (a = ye(c, "script")).length && ve(a, !f && ye(e, "script")),
                c
        },
        cleanData: function (e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }),
        S.fn.extend({
            detach: function (e) {
                return Oe(this, e, !0)
            },
            remove: function (e) {
                return Oe(this, e)
            },
            text: function (e) {
                return B(this, function (e) {
                    return void 0 === e ? S.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function () {
                return He(this, arguments, function (e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
                })
            },
            prepend: function () {
                return He(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = je(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function () {
                return He(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function () {
                return He(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (S.cleanData(ye(e, !1)),
                        e.textContent = "");
                return this
            },
            clone: function (e, t) {
                return e = null != e && e,
                    t = null == t ? e : t,
                    this.map(function () {
                        return S.clone(this, e, t)
                    })
            },
            html: function (e) {
                return B(this, function (e) {
                    var t = this[0] || {}
                        , n = 0
                        , r = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = S.htmlPrefilter(e);
                        try {
                            for (; n < r; n++)
                                1 === (t = this[n] || {}).nodeType && (S.cleanData(ye(t, !1)),
                                    t.innerHTML = e);
                            t = 0
                        } catch (e) { }
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function () {
                var n = [];
                return He(this, arguments, function (e) {
                    var t = this.parentNode;
                    S.inArray(this, n) < 0 && (S.cleanData(ye(this)),
                        t && t.replaceChild(e, this))
                }, n)
            }
        }),
        S.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, a) {
            S.fn[e] = function (e) {
                for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
                    t = o === i ? this : this.clone(!0),
                        S(r[o])[a](t),
                        u.apply(n, t.get());
                return this.pushStack(n)
            }
        });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i")
        , Re = /^--/
        , Me = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C),
                t.getComputedStyle(e)
        }
        , Ie = function (e, t, n) {
            var r, i, o = {};
            for (i in t)
                o[i] = e.style[i],
                    e.style[i] = t[i];
            for (i in r = n.call(e),
                t)
                e.style[i] = o[i];
            return r
        }
        , We = new RegExp(ne.join("|"), "i")
        , Fe = "[\\x20\\t\\r\\n\\f]"
        , $e = new RegExp("^" + Fe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Fe + "+$", "g");
    function Be(e, t, n) {
        var r, i, o, a, s = Re.test(t), u = e.style;
        return (n = n || Me(e)) && (a = n.getPropertyValue(t) || n[t],
            s && (a = a.replace($e, "$1")),
            "" !== a || ie(e) || (a = S.style(e, t)),
            !v.pixelBoxStyles() && Pe.test(a) && We.test(t) && (r = u.width,
                i = u.minWidth,
                o = u.maxWidth,
                u.minWidth = u.maxWidth = u.width = a,
                a = n.width,
                u.width = r,
                u.minWidth = i,
                u.maxWidth = o)),
            void 0 !== a ? a + "" : a
    }
    function _e(e, t) {
        return {
            get: function () {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function () {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top,
                    s = 12 === t(e.marginLeft),
                    l.style.right = "60%",
                    o = 36 === t(e.right),
                    r = 36 === t(e.width),
                    l.style.position = "absolute",
                    i = 12 === t(l.offsetWidth / 3),
                    re.removeChild(u),
                    l = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"), l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
            l.cloneNode(!0).style.backgroundClip = "",
            v.clearCloneStyle = "content-box" === l.style.backgroundClip,
            S.extend(v, {
                boxSizingReliable: function () {
                    return e(),
                        r
                },
                pixelBoxStyles: function () {
                    return e(),
                        o
                },
                pixelPosition: function () {
                    return e(),
                        n
                },
                reliableMarginLeft: function () {
                    return e(),
                        s
                },
                scrollboxSize: function () {
                    return e(),
                        i
                },
                reliableTrDimensions: function () {
                    var e, t, n, r;
                    return null == a && (e = E.createElement("table"),
                        t = E.createElement("tr"),
                        n = E.createElement("div"),
                        e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                        t.style.cssText = "border:1px solid",
                        t.style.height = "1px",
                        n.style.height = "9px",
                        n.style.display = "block",
                        re.appendChild(e).appendChild(t).appendChild(n),
                        r = C.getComputedStyle(t),
                        a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight,
                        re.removeChild(e)),
                        a
                }
            }))
    }();
    var ze = ["Webkit", "Moz", "ms"]
        , Ue = E.createElement("div").style
        , Xe = {};
    function Ve(e) {
        var t = S.cssProps[e] || Xe[e];
        return t || (e in Ue ? e : Xe[e] = function (e) {
            var t = e[0].toUpperCase() + e.slice(1)
                , n = ze.length;
            while (n--)
                if ((e = ze[n] + t) in Ue)
                    return e
        }(e) || e)
    }
    var Ge = /^(none|table(?!-c[ea]).+)/
        , Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
        , Qe = {
            letterSpacing: "0",
            fontWeight: "400"
        };
    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
            , s = 0
            , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
                r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
                    "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i),
                        "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
            u
    }
    function Ze(e, t, n) {
        var r = Me(e)
            , i = (!v.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r)
            , o = i
            , a = Be(e, t, r)
            , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!v.boxSizingReliable() && i || !v.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r),
            (o = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), u = Re.test(t), l = e.style;
                if (u || (t = Ve(s)),
                    a = S.cssHooks[t] || S.cssHooks[s],
                    void 0 === n)
                    return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i),
                    o = "number"),
                    null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")),
                        v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                        a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = X(t);
            return Re.test(t) || (t = Ve(s)),
                (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
                void 0 === i && (i = Be(e, t, r)),
                "normal" === i && t in Qe && (i = Qe[t]),
                "" === n || n ? (o = parseFloat(i),
                    !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
        S.each(["height", "width"], function (e, u) {
            S.cssHooks[u] = {
                get: function (e, t, n) {
                    if (t)
                        return !Ge.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : Ie(e, Ye, function () {
                            return Ze(e, u, n)
                        })
                },
                set: function (e, t, n) {
                    var r, i = Me(e), o = !v.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i), s = n ? Ke(e, u, n, a, i) : 0;
                    return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)),
                        s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                            t = S.css(e, u)),
                        Je(0, t, s)
                }
            }
        }),
        S.cssHooks.marginLeft = _e(v.reliableMarginLeft, function (e, t) {
            if (t)
                return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - Ie(e, {
                    marginLeft: 0
                }, function () {
                    return e.getBoundingClientRect().left
                })) + "px"
        }),
        S.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (i, o) {
            S.cssHooks[i + o] = {
                expand: function (e) {
                    for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                        n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                    return n
                }
            },
                "margin" !== i && (S.cssHooks[i + o].set = Je)
        }),
        S.fn.extend({
            css: function (e, t) {
                return B(this, function (e, t, n) {
                    var r, i, o = {}, a = 0;
                    if (Array.isArray(t)) {
                        for (r = Me(e),
                            i = t.length; a < i; a++)
                            o[t[a]] = S.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
                }, e, t, 1 < arguments.length)
            }
        }),
        ((S.Tween = et).prototype = {
            constructor: et,
            init: function (e, t, n, r, i, o) {
                this.elem = e,
                    this.prop = n,
                    this.easing = i || S.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = r,
                    this.unit = o || (S.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var e = et.propHooks[this.prop];
                return e && e.get ? e.get(this) : et.propHooks._default.get(this)
            },
            run: function (e) {
                var t, n = et.propHooks[this.prop];
                return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : et.propHooks._default.set(this),
                    this
            }
        }).init.prototype = et.prototype,
        (et.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function (e) {
                    S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }).scrollTop = et.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        S.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        S.fx = et.prototype.init,
        S.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
    function st() {
        nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval),
            S.fx.tick())
    }
    function ut() {
        return C.setTimeout(function () {
            tt = void 0
        }),
            tt = Date.now()
    }
    function lt(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
            i
    }
    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function ft(o, e, t) {
        var n, a, r = 0, i = ft.prefilters.length, s = S.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (a)
                return !1;
            for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
                n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
                    s.resolveWith(o, [l]),
                    !1)
        }, l = s.promise({
            elem: o,
            props: S.extend({}, e),
            opts: S.extend(!0, {
                specialEasing: {},
                easing: S.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: tt || ut(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
                var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                    n
            },
            stop: function (e) {
                var t = 0
                    , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                    s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                    this
            }
        }), c = l.props;
        for (!function (e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = X(n)],
                    o = e[n],
                    Array.isArray(o) && (i = o[1],
                        o = e[n] = o[0]),
                    n !== r && (e[r] = o,
                        delete e[n]),
                    (a = S.cssHooks[r]) && "expand" in a)
                    for (n in o = a.expand(o),
                        delete e[r],
                        o)
                        n in e || (e[n] = o[n],
                            t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts))
                return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                    n;
        return S.map(c, ct, l),
            m(l.opts.start) && l.opts.start.call(o, l),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
            S.fx.timer(S.extend(u, {
                elem: o,
                anim: l,
                queue: l.opts.queue
            })),
            l
    }
    S.Animation = S.extend(ft, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n),
                    n
            }
            ]
        },
        tweener: function (e, t) {
            m(e) ? (t = e,
                e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                    ft.tweeners[n] = ft.tweeners[n] || [],
                    ft.tweeners[n].unshift(t)
        },
        prefilters: [function (e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), y = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
                s = a.empty.fire,
                a.empty.fire = function () {
                    a.unqueued || s()
                }
            ),
                a.unqueued++,
                p.always(function () {
                    p.always(function () {
                        a.unqueued--,
                            S.queue(e, "fx").length || a.empty.fire()
                    })
                })),
                t)
                if (i = t[r],
                    ot.test(i)) {
                    if (delete t[r],
                        o = o || "toggle" === i,
                        i === (g ? "hide" : "show")) {
                        if ("show" !== i || !y || void 0 === y[r])
                            continue;
                        g = !0
                    }
                    d[r] = y && y[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                    null == (l = y && y.display) && (l = Y.get(e, "display")),
                    "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0),
                        l = e.style.display || l,
                        c = S.css(e, "display"),
                        le([e]))),
                    ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
                        h.display = l
                    }),
                        null == l && (c = h.display,
                            l = "none" === c ? "" : c)),
                        h.display = "inline-block")),
                    n.overflow && (h.overflow = "hidden",
                        p.always(function () {
                            h.overflow = n.overflow[0],
                                h.overflowX = n.overflow[1],
                                h.overflowY = n.overflow[2]
                        })),
                    u = !1,
                    d)
                    u || (y ? "hidden" in y && (g = y.hidden) : y = Y.access(e, "fxshow", {
                        display: l
                    }),
                        o && (y.hidden = !g),
                        g && le([e], !0),
                        p.done(function () {
                            for (r in g || le([e]),
                                Y.remove(e, "fxshow"),
                                d)
                                S.style(e, r, d[r])
                        })),
                        u = ct(g ? y[r] : 0, r, p),
                        r in y || (y[r] = u.start,
                            g && (u.end = u.start,
                                u.start = 0))
        }
        ],
        prefilter: function (e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }),
        S.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? S.extend({}, e) : {
                complete: n || !n && t || m(e) && e,
                duration: e,
                easing: n && t || t && !m(t) && t
            };
            return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default),
                null != r.queue && !0 !== r.queue || (r.queue = "fx"),
                r.old = r.complete,
                r.complete = function () {
                    m(r.old) && r.old.call(this),
                        r.queue && S.dequeue(this, r.queue)
                }
                ,
                r
        }
        ,
        S.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ae).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function (t, e, n, r) {
                var i = S.isEmptyObject(t)
                    , o = S.speed(e, n, r)
                    , a = function () {
                        var e = ft(this, S.extend({}, t), o);
                        (i || Y.get(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a,
                    i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (i, e, o) {
                var a = function (e) {
                    var t = e.stop;
                    delete e.stop,
                        t(o)
                };
                return "string" != typeof i && (o = e,
                    e = i,
                    i = void 0),
                    e && this.queue(i || "fx", []),
                    this.each(function () {
                        var e = !0
                            , t = null != i && i + "queueHooks"
                            , n = S.timers
                            , r = Y.get(this);
                        if (t)
                            r[t] && r[t].stop && a(r[t]);
                        else
                            for (t in r)
                                r[t] && r[t].stop && at.test(t) && a(r[t]);
                        for (t = n.length; t--;)
                            n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                                e = !1,
                                n.splice(t, 1));
                        !e && o || S.dequeue(this, i)
                    })
            },
            finish: function (a) {
                return !1 !== a && (a = a || "fx"),
                    this.each(function () {
                        var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = S.timers, o = n ? n.length : 0;
                        for (t.finish = !0,
                            S.queue(this, a, []),
                            r && r.stop && r.stop.call(this, !0),
                            e = i.length; e--;)
                            i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                                i.splice(e, 1));
                        for (e = 0; e < o; e++)
                            n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish
                    })
            }
        }),
        S.each(["toggle", "show", "hide"], function (e, r) {
            var i = S.fn[r];
            S.fn[r] = function (e, t, n) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
            }
        }),
        S.each({
            slideDown: lt("show"),
            slideUp: lt("hide"),
            slideToggle: lt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, r) {
            S.fn[e] = function (e, t, n) {
                return this.animate(r, e, t, n)
            }
        }),
        S.timers = [],
        S.fx.tick = function () {
            var e, t = 0, n = S.timers;
            for (tt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || S.fx.stop(),
                tt = void 0
        }
        ,
        S.fx.timer = function (e) {
            S.timers.push(e),
                S.fx.start()
        }
        ,
        S.fx.interval = 13,
        S.fx.start = function () {
            nt || (nt = !0,
                st())
        }
        ,
        S.fx.stop = function () {
            nt = null
        }
        ,
        S.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        S.fn.delay = function (r, e) {
            return r = S.fx && S.fx.speeds[r] || r,
                e = e || "fx",
                this.queue(e, function (e, t) {
                    var n = C.setTimeout(e, r);
                    t.stop = function () {
                        C.clearTimeout(n)
                    }
                })
        }
        ,
        rt = E.createElement("input"),
        it = E.createElement("select").appendChild(E.createElement("option")),
        rt.type = "checkbox",
        v.checkOn = "" !== rt.value,
        v.optSelected = it.selected,
        (rt = E.createElement("input")).value = "t",
        rt.type = "radio",
        v.radioValue = "t" === rt.value;
    var pt, dt = S.expr.attrHandle;
    S.fn.extend({
        attr: function (e, t) {
            return B(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
            return this.each(function () {
                S.removeAttr(this, e)
            })
        }
    }),
        S.extend({
            attr: function (e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)),
                        void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                            n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!v.radioValue && "radio" === t && A(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                                n && (e.value = n),
                                t
                        }
                    }
                }
            },
            removeAttr: function (e, t) {
                var n, r = 0, i = t && t.match(P);
                if (i && 1 === e.nodeType)
                    while (n = i[r++])
                        e.removeAttribute(n)
            }
        }),
        pt = {
            set: function (e, t, n) {
                return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n),
                    n
            }
        },
        S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var a = dt[t] || S.find.attr;
            dt[t] = function (e, t, n) {
                var r, i, o = t.toLowerCase();
                return n || (i = dt[o],
                    dt[o] = r,
                    r = null != a(e, t, n) ? o : null,
                    dt[o] = i),
                    r
            }
        });
    var ht = /^(?:input|select|textarea|button)$/i
        , gt = /^(?:a|area)$/i;
    function yt(e) {
        return (e.match(P) || []).join(" ")
    }
    function vt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function (e, t) {
            return B(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[S.propFix[e] || e]
            })
        }
    }),
        S.extend({
            prop: function (e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t,
                        i = S.propHooks[t]),
                        void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = S.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }),
        v.optSelected || (S.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                    null
            },
            set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex)
            }
        }),
        S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            S.propFix[this.toLowerCase()] = this
        }),
        S.fn.extend({
            addClass: function (t) {
                var e, n, r, i, o, a;
                return m(t) ? this.each(function (e) {
                    S(this).addClass(t.call(this, e, vt(this)))
                }) : (e = mt(t)).length ? this.each(function () {
                    if (r = vt(this),
                        n = 1 === this.nodeType && " " + yt(r) + " ") {
                        for (o = 0; o < e.length; o++)
                            i = e[o],
                                n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                        a = yt(n),
                            r !== a && this.setAttribute("class", a)
                    }
                }) : this
            },
            removeClass: function (t) {
                var e, n, r, i, o, a;
                return m(t) ? this.each(function (e) {
                    S(this).removeClass(t.call(this, e, vt(this)))
                }) : arguments.length ? (e = mt(t)).length ? this.each(function () {
                    if (r = vt(this),
                        n = 1 === this.nodeType && " " + yt(r) + " ") {
                        for (o = 0; o < e.length; o++) {
                            i = e[o];
                            while (-1 < n.indexOf(" " + i + " "))
                                n = n.replace(" " + i + " ", " ")
                        }
                        a = yt(n),
                            r !== a && this.setAttribute("class", a)
                    }
                }) : this : this.attr("class", "")
            },
            toggleClass: function (t, n) {
                var e, r, i, o, a = typeof t, s = "string" === a || Array.isArray(t);
                return m(t) ? this.each(function (e) {
                    S(this).toggleClass(t.call(this, e, vt(this), n), n)
                }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = mt(t),
                    this.each(function () {
                        if (s)
                            for (o = S(this),
                                i = 0; i < e.length; i++)
                                r = e[i],
                                    o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                        else
                            void 0 !== t && "boolean" !== a || ((r = vt(this)) && Y.set(this, "__className__", r),
                                this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : Y.get(this, "__className__") || ""))
                    }))
            },
            hasClass: function (e) {
                var t, n, r = 0;
                t = " " + e + " ";
                while (n = this[r++])
                    if (1 === n.nodeType && -1 < (" " + yt(vt(n)) + " ").indexOf(t))
                        return !0;
                return !1
            }
        });
    var xt = /\r/g;
    S.fn.extend({
        val: function (n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n),
                this.each(function (e) {
                    var t;
                    1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
                        return null == e ? "" : e + ""
                    })),
                        (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
                })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }),
        S.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = S.find.attr(e, "value");
                        return null != t ? t : yt(S.text(e))
                    }
                },
                select: {
                    get: function (e) {
                        var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                if (t = S(n).val(),
                                    a)
                                    return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function (e, t) {
                        var n, r, i = e.options, o = S.makeArray(t), a = i.length;
                        while (a--)
                            ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                        return n || (e.selectedIndex = -1),
                            o
                    }
                }
            }
        }),
        S.each(["radio", "checkbox"], function () {
            S.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t))
                        return e.checked = -1 < S.inArray(S(e).val(), t)
                }
            },
                v.checkOn || (S.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
                )
        }),
        v.focusin = "onfocusin" in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/
        , wt = function (e) {
            e.stopPropagation()
        };
    S.extend(S.event, {
        trigger: function (e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = y.call(e, "type") ? e.type : e, h = y.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E,
                3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
                    h.sort()),
                    u = d.indexOf(":") < 0 && "on" + d,
                    (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3,
                    e.namespace = h.join("."),
                    e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    e.result = void 0,
                    e.target || (e.target = n),
                    t = null == t ? [e] : S.makeArray(t, [e]),
                    c = S.event.special[d] || {},
                    r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d,
                        bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                            a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    f = o,
                        e.type = 1 < i ? s : c.bindType || d,
                        (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t),
                        (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t),
                            !1 === e.result && e.preventDefault());
                return e.type = d,
                    r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null),
                        S.event.triggered = d,
                        e.isPropagationStopped() && f.addEventListener(d, wt),
                        n[d](),
                        e.isPropagationStopped() && f.removeEventListener(d, wt),
                        S.event.triggered = void 0,
                        a && (n[u] = a)),
                    e.result
            }
        },
        simulate: function (e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }),
        S.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    S.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n)
                    return S.event.trigger(e, t, n, !0)
            }
        }),
        v.focusin || S.each({
            focus: "focusin",
            blur: "focusout"
        }, function (n, r) {
            var i = function (e) {
                S.event.simulate(r, e.target, S.event.fix(e))
            };
            S.event.special[r] = {
                setup: function () {
                    var e = this.ownerDocument || this.document || this
                        , t = Y.access(e, r);
                    t || e.addEventListener(n, i, !0),
                        Y.access(e, r, (t || 0) + 1)
                },
                teardown: function () {
                    var e = this.ownerDocument || this.document || this
                        , t = Y.access(e, r) - 1;
                    t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0),
                        Y.remove(e, r))
                }
            }
        });
    var Tt = C.location
        , Ct = {
            guid: Date.now()
        }
        , Et = /\?/;
    S.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) { }
        return n = t && t.getElementsByTagName("parsererror")[0],
            t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function (e) {
                return e.textContent
            }).join("\n") : e)),
            t
    }
        ;
    var St = /\[\]$/
        , kt = /\r?\n/g
        , At = /^(?:submit|button|image|reset|file)$/i
        , Nt = /^(?:input|select|textarea|keygen)/i;
    function jt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            S.each(e, function (e, t) {
                r || St.test(n) ? i(n, t) : jt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== w(e))
            i(n, e);
        else
            for (t in e)
                jt(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e))
            S.each(e, function () {
                i(this.name, this.value)
            });
        else
            for (n in e)
                jt(n, e[n], t, i);
        return r.join("&")
    }
        ,
        S.fn.extend({
            serialize: function () {
                return S.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = S.prop(this, "elements");
                    return e ? S.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
                }).map(function (e, t) {
                    var n = S(this).val();
                    return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
                        return {
                            name: t.name,
                            value: e.replace(kt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(kt, "\r\n")
                    }
                }).get()
            }
        });
    var Dt = /%20/g
        , qt = /#.*$/
        , Lt = /([?&])_=[^&]*/
        , Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm
        , Ot = /^(?:GET|HEAD)$/
        , Pt = /^\/\//
        , Rt = {}
        , Mt = {}
        , It = "*/".concat("*")
        , Wt = E.createElement("a");
    function Ft(o) {
        return function (e, t) {
            "string" != typeof e && (t = e,
                e = "*");
            var n, r = 0, i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++])
                    "+" === n[0] ? (n = n.slice(1) || "*",
                        (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function $t(t, i, o, a) {
        var s = {}
            , u = t === Mt;
        function l(e) {
            var r;
            return s[e] = !0,
                S.each(t[e] || [], function (e, t) {
                    var n = t(i, o, a);
                    return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                        l(n),
                        !1)
                }),
                r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function Bt(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r),
            e
    }
    Wt.href = Tt.href,
        S.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Tt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": It,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": S.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (e, t) {
                return t ? Bt(Bt(e, S.ajaxSettings), t) : Bt(S.ajaxSettings, e)
            },
            ajaxPrefilter: Ft(Rt),
            ajaxTransport: Ft(Mt),
            ajax: function (e, t) {
                "object" == typeof e && (t = e,
                    e = void 0),
                    t = t || {};
                var c, f, p, n, d, r, h, g, i, o, y = S.ajaxSetup({}, t), v = y.context || y, m = y.context && (v.nodeType || v.jquery) ? S(v) : S.event, x = S.Deferred(), b = S.Callbacks("once memory"), w = y.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Ht.exec(p))
                                    n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function () {
                        return h ? p : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                            a[e] = t),
                            this
                    },
                    overrideMimeType: function (e) {
                        return null == h && (y.mimeType = e),
                            this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (h)
                                T.always(e[T.status]);
                            else
                                for (t in e)
                                    w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || u;
                        return c && c.abort(t),
                            l(0, t),
                            this
                    }
                };
                if (x.promise(T),
                    y.url = ((e || y.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"),
                    y.type = t.method || t.type || y.method || y.type,
                    y.dataTypes = (y.dataType || "*").toLowerCase().match(P) || [""],
                    null == y.crossDomain) {
                    r = E.createElement("a");
                    try {
                        r.href = y.url,
                            r.href = r.href,
                            y.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                    } catch (e) {
                        y.crossDomain = !0
                    }
                }
                if (y.data && y.processData && "string" != typeof y.data && (y.data = S.param(y.data, y.traditional)),
                    $t(Rt, y, t, T),
                    h)
                    return T;
                for (i in (g = S.event && y.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
                    y.type = y.type.toUpperCase(),
                    y.hasContent = !Ot.test(y.type),
                    f = y.url.replace(qt, ""),
                    y.hasContent ? y.data && y.processData && 0 === (y.contentType || "").indexOf("application/x-www-form-urlencoded") && (y.data = y.data.replace(Dt, "+")) : (o = y.url.slice(f.length),
                        y.data && (y.processData || "string" == typeof y.data) && (f += (Et.test(f) ? "&" : "?") + y.data,
                            delete y.data),
                        !1 === y.cache && (f = f.replace(Lt, "$1"),
                            o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o),
                        y.url = f + o),
                    y.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
                        S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
                    (y.data && y.hasContent && !1 !== y.contentType || t.contentType) && T.setRequestHeader("Content-Type", y.contentType),
                    T.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + ("*" !== y.dataTypes[0] ? ", " + It + "; q=0.01" : "") : y.accepts["*"]),
                    y.headers)
                    T.setRequestHeader(i, y.headers[i]);
                if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h))
                    return T.abort();
                if (u = "abort",
                    b.add(y.complete),
                    T.done(y.success),
                    T.fail(y.error),
                    c = $t(Mt, y, t, T)) {
                    if (T.readyState = 1,
                        g && m.trigger("ajaxSend", [T, y]),
                        h)
                        return T;
                    y.async && 0 < y.timeout && (d = C.setTimeout(function () {
                        T.abort("timeout")
                    }, y.timeout));
                    try {
                        h = !1,
                            c.send(a, l)
                    } catch (e) {
                        if (h)
                            throw e;
                        l(-1, e)
                    }
                } else
                    l(-1, "No Transport");
                function l(e, t, n, r) {
                    var i, o, a, s, u, l = t;
                    h || (h = !0,
                        d && C.clearTimeout(d),
                        c = void 0,
                        p = r || "",
                        T.readyState = 0 < e ? 4 : 0,
                        i = 200 <= e && e < 300 || 304 === e,
                        n && (s = function (e, t, n) {
                            var r, i, o, a, s = e.contents, u = e.dataTypes;
                            while ("*" === u[0])
                                u.shift(),
                                    void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (r)
                                for (i in s)
                                    if (s[i] && s[i].test(r)) {
                                        u.unshift(i);
                                        break
                                    }
                            if (u[0] in n)
                                o = u[0];
                            else {
                                for (i in n) {
                                    if (!u[0] || e.converters[i + " " + u[0]]) {
                                        o = i;
                                        break
                                    }
                                    a || (a = i)
                                }
                                o = o || a
                            }
                            if (o)
                                return o !== u[0] && u.unshift(o),
                                    n[o]
                        }(y, T, n)),
                        !i && -1 < S.inArray("script", y.dataTypes) && S.inArray("json", y.dataTypes) < 0 && (y.converters["text script"] = function () { }
                        ),
                        s = function (e, t, n, r) {
                            var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                            if (c[1])
                                for (a in e.converters)
                                    l[a.toLowerCase()] = e.converters[a];
                            o = c.shift();
                            while (o)
                                if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                                    !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                                    u = o,
                                    o = c.shift())
                                    if ("*" === o)
                                        o = u;
                                    else if ("*" !== u && u !== o) {
                                        if (!(a = l[u + " " + o] || l["* " + o]))
                                            for (i in l)
                                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                                        c.unshift(s[1]));
                                                    break
                                                }
                                        if (!0 !== a)
                                            if (a && e["throws"])
                                                t = a(t);
                                            else
                                                try {
                                                    t = a(t)
                                                } catch (e) {
                                                    return {
                                                        state: "parsererror",
                                                        error: a ? e : "No conversion from " + u + " to " + o
                                                    }
                                                }
                                    }
                            return {
                                state: "success",
                                data: t
                            }
                        }(y, s, T, i),
                        i ? (y.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u),
                            (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                            204 === e || "HEAD" === y.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                                o = s.data,
                                i = !(a = s.error))) : (a = l,
                                    !e && l || (l = "error",
                                        e < 0 && (e = 0))),
                        T.status = e,
                        T.statusText = (t || l) + "",
                        i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]),
                        T.statusCode(w),
                        w = void 0,
                        g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, y, i ? o : a]),
                        b.fireWith(v, [T, l]),
                        g && (m.trigger("ajaxComplete", [T, y]),
                            --S.active || S.event.trigger("ajaxStop")))
                }
                return T
            },
            getJSON: function (e, t, n) {
                return S.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return S.get(e, void 0, t, "script")
            }
        }),
        S.each(["get", "post"], function (e, i) {
            S[i] = function (e, t, n, r) {
                return m(t) && (r = r || n,
                    n = t,
                    t = void 0),
                    S.ajax(S.extend({
                        url: e,
                        type: i,
                        dataType: r,
                        data: t,
                        success: n
                    }, S.isPlainObject(e) && e))
            }
        }),
        S.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers)
                "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
        }),
        S._evalUrl = function (e, t, n) {
            return S.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function () { }
                },
                dataFilter: function (e) {
                    S.globalEval(e, t, n)
                }
            })
        }
        ,
        S.fn.extend({
            wrapAll: function (e) {
                var t;
                return this[0] && (m(e) && (e = e.call(this[0])),
                    t = S(e, this[0].ownerDocument).eq(0).clone(!0),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t.map(function () {
                        var e = this;
                        while (e.firstElementChild)
                            e = e.firstElementChild;
                        return e
                    }).append(this)),
                    this
            },
            wrapInner: function (n) {
                return m(n) ? this.each(function (e) {
                    S(this).wrapInner(n.call(this, e))
                }) : this.each(function () {
                    var e = S(this)
                        , t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n)
                })
            },
            wrap: function (t) {
                var n = m(t);
                return this.each(function (e) {
                    S(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function (e) {
                return this.parent(e).not("body").each(function () {
                    S(this).replaceWith(this.childNodes)
                }),
                    this
            }
        }),
        S.expr.pseudos.hidden = function (e) {
            return !S.expr.pseudos.visible(e)
        }
        ,
        S.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        ,
        S.ajaxSettings.xhr = function () {
            try {
                return new C.XMLHttpRequest
            } catch (e) { }
        }
        ;
    var _t = {
        0: 200,
        1223: 204
    }
        , zt = S.ajaxSettings.xhr();
    v.cors = !!zt && "withCredentials" in zt,
        v.ajax = zt = !!zt,
        S.ajaxTransport(function (i) {
            var o, a;
            if (v.cors || zt && !i.crossDomain)
                return {
                    send: function (e, t) {
                        var n, r = i.xhr();
                        if (r.open(i.type, i.url, i.async, i.username, i.password),
                            i.xhrFields)
                            for (n in i.xhrFields)
                                r[n] = i.xhrFields[n];
                        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                            i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                            e)
                            r.setRequestHeader(n, e[n]);
                        o = function (e) {
                            return function () {
                                o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                                    "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                        binary: r.response
                                    } : {
                                        text: r.responseText
                                    }, r.getAllResponseHeaders()))
                            }
                        }
                            ,
                            r.onload = o(),
                            a = r.onerror = r.ontimeout = o("error"),
                            void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
                                4 === r.readyState && C.setTimeout(function () {
                                    o && a()
                                })
                            }
                            ,
                            o = o("abort");
                        try {
                            r.send(i.hasContent && i.data || null)
                        } catch (e) {
                            if (o)
                                throw e
                        }
                    },
                    abort: function () {
                        o && o()
                    }
                }
        }),
        S.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1)
        }),
        S.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (e) {
                    return S.globalEval(e),
                        e
                }
            }
        }),
        S.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET")
        }),
        S.ajaxTransport("script", function (n) {
            var r, i;
            if (n.crossDomain || n.scriptAttrs)
                return {
                    send: function (e, t) {
                        r = S("<script>").attr(n.scriptAttrs || {}).prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", i = function (e) {
                            r.remove(),
                                i = null,
                                e && t("error" === e.type ? 404 : 200, e.type)
                        }
                        ),
                            E.head.appendChild(r[0])
                    },
                    abort: function () {
                        i && i()
                    }
                }
        });
    var Ut, Xt = [], Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Xt.pop() || S.expando + "_" + Ct.guid++;
            return this[e] = !0,
                e
        }
    }),
        S.ajaxPrefilter("json jsonp", function (e, t, n) {
            var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
                return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                    a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                    e.converters["script json"] = function () {
                        return o || S.error(r + " was not called"),
                            o[0]
                    }
                    ,
                    e.dataTypes[0] = "json",
                    i = C[r],
                    C[r] = function () {
                        o = arguments
                    }
                    ,
                    n.always(function () {
                        void 0 === i ? S(C).removeProp(r) : C[r] = i,
                            e[r] && (e.jsonpCallback = t.jsonpCallback,
                                Xt.push(r)),
                            o && m(i) && i(o[0]),
                            o = i = void 0
                    }),
                    "script"
        }),
        v.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
            2 === Ut.childNodes.length),
        S.parseHTML = function (e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
                t = !1),
                t || (v.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
                    t.head.appendChild(r)) : t = E),
                o = !n && [],
                (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o),
                    o && o.length && S(o).remove(),
                    S.merge([], i.childNodes)));
            var r, i, o
        }
        ,
        S.fn.load = function (e, t, n) {
            var r, i, o, a = this, s = e.indexOf(" ");
            return -1 < s && (r = yt(e.slice(s)),
                e = e.slice(0, s)),
                m(t) ? (n = t,
                    t = void 0) : t && "object" == typeof t && (i = "POST"),
                0 < a.length && S.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    o = arguments,
                        a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
                }).always(n && function (e, t) {
                    a.each(function () {
                        n.apply(this, o || [e.responseText, t, e])
                    })
                }
                ),
                this
        }
        ,
        S.expr.pseudos.animated = function (t) {
            return S.grep(S.timers, function (e) {
                return t === e.elem
            }).length
        }
        ,
        S.offset = {
            setOffset: function (e, t, n) {
                var r, i, o, a, s, u, l = S.css(e, "position"), c = S(e), f = {};
                "static" === l && (e.style.position = "relative"),
                    s = c.offset(),
                    o = S.css(e, "top"),
                    u = S.css(e, "left"),
                    ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
                        i = r.left) : (a = parseFloat(o) || 0,
                            i = parseFloat(u) || 0),
                    m(t) && (t = t.call(e, n, S.extend({}, s))),
                    null != t.top && (f.top = t.top - s.top + a),
                    null != t.left && (f.left = t.left - s.left + i),
                    "using" in t ? t.using.call(e, f) : c.css(f)
            }
        },
        S.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t ? this : this.each(function (e) {
                        S.offset.setOffset(this, t, e)
                    });
                var e, n, r = this[0];
                return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
                    n = r.ownerDocument.defaultView,
                {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function () {
                if (this[0]) {
                    var e, t, n, r = this[0], i = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === S.css(r, "position"))
                        t = r.getBoundingClientRect();
                    else {
                        t = this.offset(),
                            n = r.ownerDocument,
                            e = r.offsetParent || n.documentElement;
                        while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"))
                            e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0),
                            i.left += S.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - i.top - S.css(r, "marginTop", !0),
                        left: t.left - i.left - S.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent;
                    while (e && "static" === S.css(e, "position"))
                        e = e.offsetParent;
                    return e || re
                })
            }
        }),
        S.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (t, i) {
            var o = "pageYOffset" === i;
            S.fn[t] = function (e) {
                return B(this, function (e, t, n) {
                    var r;
                    if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                        void 0 === n)
                        return r ? r[i] : e[t];
                    r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
                }, t, e, arguments.length)
            }
        }),
        S.each(["top", "left"], function (e, n) {
            S.cssHooks[n] = _e(v.pixelPosition, function (e, t) {
                if (t)
                    return t = Be(e, n),
                        Pe.test(t) ? S(e).position()[n] + "px" : t
            })
        }),
        S.each({
            Height: "height",
            Width: "width"
        }, function (a, s) {
            S.each({
                padding: "inner" + a,
                content: s,
                "": "outer" + a
            }, function (r, o) {
                S.fn[o] = function (e, t) {
                    var n = arguments.length && (r || "boolean" != typeof e)
                        , i = r || (!0 === e || !0 === t ? "margin" : "border");
                    return B(this, function (e, t, n) {
                        var r;
                        return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                            Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                    }, s, n ? e : void 0, n)
                }
            })
        }),
        S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            S.fn[t] = function (e) {
                return this.on(t, e)
            }
        }),
        S.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
            S.fn[n] = function (e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
            }
        });
    var Gt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    S.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
            t = e,
            e = n),
            m(e))
            return r = s.call(arguments, 2),
                (i = function () {
                    return e.apply(t || this, r.concat(s.call(arguments)))
                }
                ).guid = e.guid = e.guid || S.guid++,
                i
    }
        ,
        S.holdReady = function (e) {
            e ? S.readyWait++ : S.ready(!0)
        }
        ,
        S.isArray = Array.isArray,
        S.parseJSON = JSON.parse,
        S.nodeName = A,
        S.isFunction = m,
        S.isWindow = x,
        S.camelCase = X,
        S.type = w,
        S.now = Date.now,
        S.isNumeric = function (e) {
            var t = S.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }
        ,
        S.trim = function (e) {
            return null == e ? "" : (e + "").replace(Gt, "$1")
        }
        ,
        "function" == typeof define && define.amd && define("jquery", [], function () {
            return S
        });
    var Yt = C.jQuery
        , Qt = C.$;
    return S.noConflict = function (e) {
        return C.$ === S && (C.$ = Qt),
            e && C.jQuery === S && (C.jQuery = Yt),
            S
    }
        ,
        "undefined" == typeof e && (C.jQuery = C.$ = S),
        S
});
jQuery.noConflict();
/*!jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license*/
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], function (e) {
            return t(e, window)
        }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
    }(function (s, n) {
        "use strict";
        function e(e) {
            return 0 <= function (e, t) {
                for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], i = 1; i <= 3; i++) {
                    if (+o[i] < +n[i])
                        return 1;
                    if (+n[i] < +o[i])
                        return -1
                }
                return 0
            }(s.fn.jquery, e)
        }
        s.migrateVersion = "3.3.2",
            n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
                s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
                n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
        var r = {};
        function u(e) {
            var t = n.console;
            s.migrateDeduplicateWarnings && r[e] || (r[e] = !0,
                s.migrateWarnings.push(e),
                t && t.warn && !s.migrateMute && (t.warn("JQMIGRATE: " + e),
                    s.migrateTrace && t.trace && t.trace()))
        }
        function t(e, t, r, n) {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return u(n),
                        r
                },
                set: function (e) {
                    u(n),
                        r = e
                }
            })
        }
        function o(e, t, r, n) {
            e[t] = function () {
                return u(n),
                    r.apply(this, arguments)
            }
        }
        s.migrateDeduplicateWarnings = !0,
            s.migrateWarnings = [],
            void 0 === s.migrateTrace && (s.migrateTrace = !0),
            s.migrateReset = function () {
                r = {},
                    s.migrateWarnings.length = 0
            }
            ,
            "BackCompat" === n.document.compatMode && u("jQuery is not compatible with Quirks Mode");
        var i, a, c, d = {}, l = s.fn.init, p = s.find, f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        for (i in s.fn.init = function (e) {
            var t = Array.prototype.slice.call(arguments);
            return "string" == typeof e && "#" === e && (u("jQuery( '#' ) is not a valid selector"),
                t[0] = []),
                l.apply(this, t)
        }
            ,
            s.fn.init.prototype = s.fn,
            s.find = function (t) {
                var r = Array.prototype.slice.call(arguments);
                if ("string" == typeof t && f.test(t))
                    try {
                        n.document.querySelector(t)
                    } catch (e) {
                        t = t.replace(y, function (e, t, r, n) {
                            return "[" + t + r + '"' + n + '"]'
                        });
                        try {
                            n.document.querySelector(t),
                                u("Attribute selector with '#' must be quoted: " + r[0]),
                                r[0] = t
                        } catch (e) {
                            u("Attribute selector with '#' was not fixed: " + r[0])
                        }
                    }
                return p.apply(this, r)
            }
            ,
            p)
            Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
        o(s.fn, "size", function () {
            return this.length
        }, "jQuery.fn.size() is deprecated and removed; use the .length property"),
            o(s, "parseJSON", function () {
                return JSON.parse.apply(null, arguments)
            }, "jQuery.parseJSON is deprecated; use JSON.parse"),
            o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"),
            o(s, "unique", s.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"),
            t(s.expr, "filters", s.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),
            t(s.expr, ":", s.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),
            e("3.1.1") && o(s, "trim", function (e) {
                return null == e ? "" : (e + "").replace(m, "")
            }, "jQuery.trim is deprecated; use String.prototype.trim"),
            e("3.2.0") && (o(s, "nodeName", function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }, "jQuery.nodeName is deprecated"),
                o(s, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray")),
            e("3.3.0") && (o(s, "isNumeric", function (e) {
                var t = typeof e;
                return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
            }, "jQuery.isNumeric() is deprecated"),
                s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                    d["[object " + t + "]"] = t.toLowerCase()
                }),
                o(s, "type", function (e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[Object.prototype.toString.call(e)] || "object" : typeof e
                }, "jQuery.type is deprecated"),
                o(s, "isFunction", function (e) {
                    return "function" == typeof e
                }, "jQuery.isFunction() is deprecated"),
                o(s, "isWindow", function (e) {
                    return null != e && e === e.window
                }, "jQuery.isWindow() is deprecated")),
            s.ajax && (a = s.ajax,
                c = /(=)\?(?=&|$)|\?\?/,
                s.ajax = function () {
                    var e = a.apply(this, arguments);
                    return e.promise && (o(e, "success", e.done, "jQXHR.success is deprecated and removed"),
                        o(e, "error", e.fail, "jQXHR.error is deprecated and removed"),
                        o(e, "complete", e.always, "jQXHR.complete is deprecated and removed")),
                        e
                }
                ,
                e("4.0.0") || s.ajaxPrefilter("+json", function (e) {
                    !1 !== e.jsonp && (c.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && c.test(e.data)) && u("JSON-to-JSONP auto-promotion is deprecated")
                }));
        var g = s.fn.removeAttr
            , h = s.fn.toggleClass
            , v = /\S+/g;
        function j(e) {
            return e.replace(/-([a-z])/g, function (e, t) {
                return t.toUpperCase()
            })
        }
        s.fn.removeAttr = function (e) {
            var r = this;
            return s.each(e.match(v), function (e, t) {
                s.expr.match.bool.test(t) && (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t),
                    r.prop(t, !1))
            }),
                g.apply(this, arguments)
        }
            ;
        var Q, b = !(s.fn.toggleClass = function (t) {
            return void 0 !== t && "boolean" != typeof t ? h.apply(this, arguments) : (u("jQuery.fn.toggleClass( boolean ) is deprecated"),
                this.each(function () {
                    var e = this.getAttribute && this.getAttribute("class") || "";
                    e && s.data(this, "__className__", e),
                        this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
                }))
        }
        ), w = /^[a-z]/, x = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
        s.swap && s.each(["height", "width", "reliableMarginRight"], function (e, t) {
            var r = s.cssHooks[t] && s.cssHooks[t].get;
            r && (s.cssHooks[t].get = function () {
                var e;
                return b = !0,
                    e = r.apply(this, arguments),
                    b = !1,
                    e
            }
            )
        }),
            s.swap = function (e, t, r, n) {
                var o, i, a = {};
                for (i in b || u("jQuery.swap() is undocumented and deprecated"),
                    t)
                    a[i] = e.style[i],
                        e.style[i] = t[i];
                for (i in o = r.apply(e, n || []),
                    t)
                    e.style[i] = a[i];
                return o
            }
            ,
            e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
                set: function () {
                    return u("JQMIGRATE: jQuery.cssProps is deprecated"),
                        Reflect.set.apply(this, arguments)
                }
            })),
            s.cssNumber || (s.cssNumber = {}),
            Q = s.fn.css,
            s.fn.css = function (e, t) {
                var r, n, o = this;
                return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function (e, t) {
                    s.fn.css.call(o, e, t)
                }),
                    this) : ("number" == typeof t && (r = j(e),
                        n = r,
                        w.test(n) && x.test(n[0].toUpperCase() + n.slice(1)) || s.cssNumber[r] || u('Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')),
                        Q.apply(this, arguments))
            }
            ;
        var A, k, S, M, N = s.data;
        s.data = function (e, t, r) {
            var n, o, i;
            if (t && "object" == typeof t && 2 === arguments.length) {
                for (i in n = s.hasData(e) && N.call(this, e),
                    o = {},
                    t)
                    i !== j(i) ? (u("jQuery.data() always sets/gets camelCased names: " + i),
                        n[i] = t[i]) : o[i] = t[i];
                return N.call(this, e, o),
                    t
            }
            return t && "string" == typeof t && t !== j(t) && (n = s.hasData(e) && N.call(this, e)) && t in n ? (u("jQuery.data() always sets/gets camelCased names: " + t),
                2 < arguments.length && (n[t] = r),
                n[t]) : N.apply(this, arguments)
        }
            ,
            s.fx && (S = s.Tween.prototype.run,
                M = function (e) {
                    return e
                }
                ,
                s.Tween.prototype.run = function () {
                    1 < s.easing[this.easing].length && (u("'jQuery.easing." + this.easing.toString() + "' should use only one argument"),
                        s.easing[this.easing] = M),
                        S.apply(this, arguments)
                }
                ,
                A = s.fx.interval || 13,
                k = "jQuery.fx.interval is deprecated",
                n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return n.document.hidden || u(k),
                            A
                    },
                    set: function (e) {
                        u(k),
                            A = e
                    }
                }));
        var R = s.fn.load
            , H = s.event.add
            , C = s.event.fix;
        s.event.props = [],
            s.event.fixHooks = {},
            t(s.event.props, "concat", s.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"),
            s.event.fix = function (e) {
                var t, r = e.type, n = this.fixHooks[r], o = s.event.props;
                if (o.length) {
                    u("jQuery.event.props are deprecated and removed: " + o.join());
                    while (o.length)
                        s.event.addProp(o.pop())
                }
                if (n && !n._migrated_ && (n._migrated_ = !0,
                    u("jQuery.event.fixHooks are deprecated and removed: " + r),
                    (o = n.props) && o.length))
                    while (o.length)
                        s.event.addProp(o.pop());
                return t = C.call(this, e),
                    n && n.filter ? n.filter(t, e) : t
            }
            ,
            s.event.add = function (e, t) {
                return e === n && "load" === t && "complete" === n.document.readyState && u("jQuery(window).on('load'...) called after load event occurred"),
                    H.apply(this, arguments)
            }
            ,
            s.each(["load", "unload", "error"], function (e, t) {
                s.fn[t] = function () {
                    var e = Array.prototype.slice.call(arguments, 0);
                    return "load" === t && "string" == typeof e[0] ? R.apply(this, e) : (u("jQuery.fn." + t + "() is deprecated"),
                        e.splice(0, 0, t),
                        arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e),
                            this))
                }
            }),
            s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, r) {
                s.fn[r] = function (e, t) {
                    return u("jQuery.fn." + r + "() event shorthand is deprecated"),
                        0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
                }
            }),
            s(function () {
                s(n.document).triggerHandler("ready")
            }),
            s.event.special.ready = {
                setup: function () {
                    this === n.document && u("'ready' event is deprecated")
                }
            },
            s.fn.extend({
                bind: function (e, t, r) {
                    return u("jQuery.fn.bind() is deprecated"),
                        this.on(e, null, t, r)
                },
                unbind: function (e, t) {
                    return u("jQuery.fn.unbind() is deprecated"),
                        this.off(e, null, t)
                },
                delegate: function (e, t, r, n) {
                    return u("jQuery.fn.delegate() is deprecated"),
                        this.on(t, e, r, n)
                },
                undelegate: function (e, t, r) {
                    return u("jQuery.fn.undelegate() is deprecated"),
                        1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
                },
                hover: function (e, t) {
                    return u("jQuery.fn.hover() is deprecated"),
                        this.on("mouseenter", e).on("mouseleave", t || e)
                }
            });
        function T(e) {
            var t = n.document.implementation.createHTMLDocument("");
            return t.body.innerHTML = e,
                t.body && t.body.innerHTML
        }
        function P(e) {
            var t = e.replace(O, "<$1></$2>");
            t !== e && T(e) !== T(t) && u("HTML tags must be properly nested and closed: " + e)
        }
        var O = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
            , q = s.htmlPrefilter;
        s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
            s.htmlPrefilter = function (e) {
                return P(e),
                    e.replace(O, "<$1></$2>")
            }
        }
            ,
            s.htmlPrefilter = function (e) {
                return P(e),
                    q(e)
            }
            ;
        var D, _ = s.fn.offset;
        s.fn.offset = function () {
            var e = this[0];
            return !e || e.nodeType && e.getBoundingClientRect ? _.apply(this, arguments) : (u("jQuery.fn.offset() requires a valid DOM element"),
                arguments.length ? this : void 0)
        }
            ,
            s.ajax && (D = s.param,
                s.param = function (e, t) {
                    var r = s.ajaxSettings && s.ajaxSettings.traditional;
                    return void 0 === t && r && (u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),
                        t = r),
                        D.call(this, e, t)
                }
            );
        var E, F, J = s.fn.andSelf || s.fn.addBack;
        return s.fn.andSelf = function () {
            return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),
                J.apply(this, arguments)
        }
            ,
            s.Deferred && (E = s.Deferred,
                F = [["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"], ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"], ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]],
                s.Deferred = function (e) {
                    var i = E()
                        , a = i.promise();
                    return i.pipe = a.pipe = function () {
                        var o = arguments;
                        return u("deferred.pipe() is deprecated"),
                            s.Deferred(function (n) {
                                s.each(F, function (e, t) {
                                    var r = "function" == typeof o[e] && o[e];
                                    i[t[1]](function () {
                                        var e = r && r.apply(this, arguments);
                                        e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === a ? n.promise() : this, r ? [e] : arguments)
                                    })
                                }),
                                    o = null
                            }).promise()
                    }
                        ,
                        e && e.call(i, i),
                        i
                }
                ,
                s.Deferred.exceptionHook = E.exceptionHook),
            s
    });
; (function (t) {
    function e(e) {
        return u ? e.data("events") : t._data(e[0]).events
    }
    function n(t, n, r) {
        var i = e(t)
            , a = i[n];
        if (!u) {
            var s = r ? a.splice(a.delegateCount - 1, 1)[0] : a.pop();
            return a.splice(r ? 0 : a.delegateCount || 0, 0, s),
                void 0
        }
        r ? i.live.unshift(i.live.pop()) : a.unshift(a.pop())
    }
    function r(e, r, i) {
        var a = r.split(/\s+/);
        e.each(function () {
            for (var e = 0; a.length > e; ++e) {
                var r = a[e].trim().match(/[^\.]+/i)[0];
                n(t(this), r, i)
            }
        })
    }
    function i(e) {
        t.fn[e + "First"] = function () {
            var n = t.makeArray(arguments)
                , i = n.shift();
            return i && (t.fn[e].apply(this, arguments),
                r(this, i)),
                this
        }
    }
    var a = t.fn.jquery.split(".")
        , s = parseInt(a[0])
        , f = parseInt(a[1])
        , u = 1 > s || 1 == s && 7 > f;
    i("bind"),
        i("one"),
        t.fn.delegateFirst = function () {
            var e = t.makeArray(arguments)
                , n = e[1];
            return n && (e.splice(0, 2),
                t.fn.delegate.apply(this, arguments),
                r(this, n, !0)),
                this
        }
        ,
        t.fn.liveFirst = function () {
            var e = t.makeArray(arguments);
            return e.unshift(this.selector),
                t.fn.delegateFirst.apply(t(document), e),
                this
        }
        ,
        u || (t.fn.onFirst = function (e, n) {
            var i = t(this)
                , a = "string" == typeof n;
            if (t.fn.on.apply(i, arguments),
                "object" == typeof e)
                for (type in e)
                    e.hasOwnProperty(type) && r(i, type, a);
            else
                "string" == typeof e && r(i, e, a);
            return i
        }
        )
}
)(jQuery);
!function (e) {
    var n = !1;
    if ("function" == typeof define && define.amd && (define(e),
        n = !0),
        "object" == typeof exports && (module.exports = e(),
            n = !0),
        !n) {
        var o = window.Cookies
            , t = window.Cookies = e();
        t.noConflict = function () {
            return window.Cookies = o,
                t
        }
    }
}(function () {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var o = arguments[e];
            for (var t in o)
                n[t] = o[t]
        }
        return n
    }
    function n(o) {
        function t(n, r, i) {
            var c;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if (i = e({
                        path: "/"
                    }, t.defaults, i),
                        "number" == typeof i.expires) {
                        var a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires),
                            i.expires = a
                    }
                    try {
                        c = JSON.stringify(r),
                            /^[\{\[]/.test(c) && (r = c)
                    } catch (e) { }
                    return r = o.write ? o.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                        n = encodeURIComponent(String(n)),
                        n = n.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent),
                        n = n.replace(/[\(\)]/g, escape),
                        document.cookie = [n, "=", r, i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
                }
                n || (c = {});
                for (var p = document.cookie ? document.cookie.split("; ") : [], s = /(%[0-9A-Z]{2})+/g, d = 0; d < p.length; d++) {
                    var f = p[d].split("=")
                        , u = f.slice(1).join("=");
                    '"' === u.charAt(0) && (u = u.slice(1, -1));
                    try {
                        var l = f[0].replace(s, decodeURIComponent);
                        if (u = o.read ? o.read(u, l) : o(u, l) || u.replace(s, decodeURIComponent),
                            this.json)
                            try {
                                u = JSON.parse(u)
                            } catch (e) { }
                        if (n === l) {
                            c = u;
                            break
                        }
                        n || (c[l] = u)
                    } catch (e) { }
                }
                return c
            }
        }
        return t.set = t,
            t.get = function (e) {
                return t.call(t, e)
            }
            ,
            t.getJSON = function () {
                return t.apply({
                    json: !0
                }, [].slice.call(arguments))
            }
            ,
            t.defaults = {},
            t.remove = function (n, o) {
                t(n, "", e(o, {
                    expires: -1
                }))
            }
            ,
            t.withConverter = n,
            t
    }
    return n(function () { })
});
var pysOptions = {
    "staticEvents": {
        "facebook": {
            "init_event": [{
                "delay": 0,
                "type": "static",
                "name": "PageView",
                "pixelIds": ["5205788846196940"],
                "eventID": "ea639df0-148a-43b7-9d40-e1266b94909a",
                "params": {
                    "page_title": "Home",
                    "post_type": "page",
                    "post_id": 10,
                    "plugin": "PixelYourSite",
                    "user_role": "guest",
                },
                "e_id": "init_event",
                "ids": [],
                "hasTimeWindow": !1,
                "timeWindow": 0,
                "woo_order": "",
                "edd_order": ""
            }]
        }
    },
    "dynamicEvents": [],
    "triggerEvents": [],
    "triggerEventTypes": [],
    "facebook": {
        "pixelIds": ["5205788846196940"],
        "advancedMatching": [],
        "removeMetadata": !1,
        "contentParams": {
            "post_type": "page",
            "post_id": 10,
            "content_name": "Home"
        },
        "commentEventEnabled": !0,
        "wooVariableAsSimple": !1,
        "downloadEnabled": !0,
        "formEventEnabled": !0,
        "ajaxForServerEvent": !0,
        "serverApiEnabled": !1,
        "wooCRSendFromServer": !1
    },
    "debug": "",
    "enable_remove_download_url_param": "1",
    "cookie_duration": "7",
    "last_visit_duration": "60",
    "gdpr": {
        "ajax_enabled": !1,
        "all_disabled_by_api": !1,
        "facebook_disabled_by_api": !1,
        "analytics_disabled_by_api": !1,
        "google_ads_disabled_by_api": !1,
        "pinterest_disabled_by_api": !1,
        "bing_disabled_by_api": !1,
        "facebook_prior_consent_enabled": !0,
        "analytics_prior_consent_enabled": !0,
        "google_ads_prior_consent_enabled": null,
        "pinterest_prior_consent_enabled": !0,
        "bing_prior_consent_enabled": !0,
        "cookiebot_integration_enabled": !1,
        "cookiebot_facebook_consent_category": "marketing",
        "cookiebot_analytics_consent_category": "statistics",
        "cookiebot_google_ads_consent_category": null,
        "cookiebot_pinterest_consent_category": "marketing",
        "cookiebot_bing_consent_category": "marketing",
        "consent_magic_integration_enabled": !1,
        "real_cookie_banner_integration_enabled": !1,
        "cookie_notice_integration_enabled": !1,
        "cookie_law_info_integration_enabled": !1
    },
    "woo": {
        "enabled": !1
    },
    "edd": {
        "enabled": !1
    }
};
if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
        value: function (searchElement, fromIndex) {
            if (this == null) {
                throw new TypeError('"this" is null or not defined')
            }
            var o = Object(this);
            var len = o.length >>> 0;
            if (len === 0) {
                return !1
            }
            var n = fromIndex | 0;
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
            function sameValueZero(x, y) {
                return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y))
            }
            while (k < len) {
                if (sameValueZero(o[k], searchElement)) {
                    return !0
                }
                k++
            }
            return !1
        }
    })
}
!function ($, options) {
    if (options.debug) {
        console.log('PYS:', options)
    }
    var dummyPinterest = function () {
        return {
            isEnabled: function () { },
            disable: function () { },
            loadPixel: function () { },
            fireEvent: function (name, data) {
                return !1
            },
            onCommentEvent: function () { },
            onDownloadEvent: function (params) { },
            onFormEvent: function (params) { },
            onWooAddToCartOnButtonEvent: function (product_id) { },
            onWooAddToCartOnSingleEvent: function (product_id, qty, is_variable, is_external, $form) { },
            onWooRemoveFromCartEvent: function (cart_item_hash) { },
            onEddAddToCartOnButtonEvent: function (download_id, price_index, qty) { },
            onEddRemoveFromCartEvent: function (item) { },
            onPageScroll: function (event) { },
            onTime: function (event) { },
        }
    }();
    var dummyBing = function () {
        return {
            isEnabled: function () { },
            disable: function () { },
            loadPixel: function () { },
            fireEvent: function (name, data) {
                return !1
            },
            onAdSenseEvent: function () { },
            onClickEvent: function (params) { },
            onWatchVideo: function (params) { },
            onCommentEvent: function () { },
            onFormEvent: function (params) { },
            onDownloadEvent: function (params) { },
            onWooAddToCartOnButtonEvent: function (product_id) { },
            onWooAddToCartOnSingleEvent: function (product_id, qty, is_variable, is_external, $form) { },
            onWooRemoveFromCartEvent: function (cart_item_hash) { },
            onWooAffiliateEvent: function (product_id) { },
            onWooPayPalEvent: function () { },
            onEddAddToCartOnButtonEvent: function (download_id, price_index, qty) { },
            onEddRemoveFromCartEvent: function (item) { },
            onPageScroll: function (event) { },
            onTime: function (event) { },
        }
    }();
    var Utils = function (options) {
        var Pinterest = dummyPinterest;
        var Bing = dummyBing;
        var gtag_loaded = !1;
        let isNewSession = checkSession();
        let utmTerms = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
        let utmId = ['fbadid', 'gadid', 'padid', 'bingid'];
        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email)
        }
        function getDomain(url) {
            url = url.replace(/(https?:\/\/)?(www.)?/i, '');
            if (url.indexOf('/') !== -1) {
                return url.split('/')[0]
            }
            return url
        }
        function loadPixels() {
            if (!options.gdpr.all_disabled_by_api) {
                if (!options.gdpr.facebook_disabled_by_api) {
                    Facebook.loadPixel()
                }
                if (!options.gdpr.analytics_disabled_by_api) {
                    Analytics.loadPixel()
                }
                if (!options.gdpr.pinterest_disabled_by_api) {
                    Pinterest.loadPixel()
                }
                if (!options.gdpr.bing_disabled_by_api) {
                    Bing.loadPixel()
                }
            }
        }
        function checkSession() {
            let duration = options.last_visit_duration * 60000
            if (Cookies.get('pys_start_session') === undefined || Cookies.get('pys_session_limit') === undefined) {
                var now = new Date();
                now.setTime(now.getTime() + duration);
                Cookies.set('pys_session_limit', !0, {
                    expires: now
                })
                Cookies.set('pys_start_session', !0)
                return !0
            }
            return !1
        }
        function getTrafficSource() {
            try {
                let referrer = document.referrer.toString(), source;
                let direct = referrer.length === 0;
                let internal = direct ? !1 : referrer.indexOf(options.siteUrl) === 0;
                let external = !direct && !internal;
                if (external === !1) {
                    source = 'direct'
                } else {
                    source = referrer
                }
                if (source !== 'direct') {
                    return getDomain(source)
                } else {
                    return source
                }
            } catch (e) {
                console.error(e);
                return 'direct'
            }
        }
        function getQueryVars() {
            try {
                var result = {}
                    , tmp = [];
                window.location.search.substr(1).split("&").forEach(function (item) {
                    tmp = item.split('=');
                    if (tmp.length > 1) {
                        result[tmp[0]] = tmp[1]
                    }
                });
                return result
            } catch (e) {
                console.error(e);
                return {}
            }
        }
        function getUTMId(useLast = !1) {
            try {
                let cookiePrefix = 'pys_'
                let terms = [];
                if (useLast) {
                    cookiePrefix = 'last_pys_'
                }
                $.each(utmId, function (index, name) {
                    if (Cookies.get(cookiePrefix + name)) {
                        terms[name] = Cookies.get(cookiePrefix + name)
                    }
                });
                return terms
            } catch (e) {
                console.error(e);
                return []
            }
        }
        function getUTMs(useLast = !1) {
            try {
                let cookiePrefix = 'pys_'
                if (useLast) {
                    cookiePrefix = 'last_pys_'
                }
                let terms = [];
                $.each(utmTerms, function (index, name) {
                    if (Cookies.get(cookiePrefix + name)) {
                        let value = Cookies.get(cookiePrefix + name);
                        terms[name] = filterEmails(value)
                    }
                });
                return terms
            } catch (e) {
                console.error(e);
                return []
            }
        }
        function getDateTime() {
            var dateTime = new Array();
            var date = new Date()
                , days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
                , months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                , hours = ['00-01', '01-02', '02-03', '03-04', '04-05', '05-06', '06-07', '07-08', '08-09', '09-10', '10-11', '11-12', '12-13', '13-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21', '21-22', '22-23', '23-24'];
            dateTime.push(hours[date.getHours()]);
            dateTime.push(days[date.getDay()]);
            dateTime.push(months[date.getMonth()]);
            return dateTime
        }
        function filterEmails(value) {
            return validateEmail(value) ? undefined : value
        }
        return {
            PRODUCT_SIMPLE: 0,
            PRODUCT_VARIABLE: 1,
            PRODUCT_BUNDLE: 2,
            PRODUCT_GROUPED: 3,
            fireEventForAllPixel: function (functionName, events) {
                if (events.hasOwnProperty(Facebook.tag()))
                    Facebook[functionName](events[Facebook.tag()]);
                if (events.hasOwnProperty(Analytics.tag()))
                    Analytics[functionName](events[Analytics.tag()]);
                if (events.hasOwnProperty(Pinterest.tag()))
                    Pinterest[functionName](events[Pinterest.tag()]);
                if (events.hasOwnProperty(Bing.tag()))
                    Bing[functionName](events[Bing.tag()])
            },
            setupPinterestObject: function () {
                Pinterest = window.pys.Pinterest || Pinterest;
                return Pinterest
            },
            setupBingObject: function () {
                Bing = window.pys.Bing || Bing;
                return Bing
            },
            copyProperties: function (from, to) {
                for (var key in from) {
                    if ("function" == typeof from[key]) {
                        continue
                    }
                    to[key] = from[key]
                }
                return to
            },
            manageCookies: function () {
                let expires = parseInt(options.cookie_duration);
                let queryVars = getQueryVars();
                let landing = window.location.href.split('?')[0];
                try {
                    if (Cookies.get('pys_first_visit') === undefined) {
                        Cookies.set('pys_first_visit', !0, {
                            expires: expires
                        });
                        Cookies.set('pysTrafficSource', getTrafficSource(), {
                            expires: expires
                        });
                        Cookies.set('pys_landing_page', landing, {
                            expires: expires
                        });
                        $.each(utmTerms, function (index, name) {
                            if (queryVars.hasOwnProperty(name)) {
                                Cookies.set('pys_' + name, queryVars[name], {
                                    expires: expires
                                })
                            } else {
                                Cookies.remove('pys_' + name)
                            }
                        });
                        $.each(utmId, function (index, name) {
                            if (queryVars.hasOwnProperty(name)) {
                                Cookies.set('pys_' + name, queryVars[name], {
                                    expires: expires
                                })
                            } else {
                                Cookies.remove('pys_' + name)
                            }
                        })
                    }
                    if (isNewSession) {
                        Cookies.set('last_pysTrafficSource', getTrafficSource(), {
                            expires: expires
                        });
                        $.each(utmTerms, function (index, name) {
                            if (queryVars.hasOwnProperty(name)) {
                                Cookies.set('last_pys_' + name, queryVars[name], {
                                    expires: expires
                                })
                            } else {
                                Cookies.remove('last_pys_' + name)
                            }
                        });
                        $.each(utmId, function (index, name) {
                            if (queryVars.hasOwnProperty(name)) {
                                Cookies.set('last_pys_' + name, queryVars[name], {
                                    expires: expires
                                })
                            } else {
                                Cookies.remove('last_pys_' + name)
                            }
                        })
                        Cookies.set('last_pys_landing_page', landing, {
                            expires: expires
                        })
                    }
                } catch (e) {
                    console.error(e)
                }
            },
            clone: function (obj) {
                var copy;
                if (null == obj || "object" != typeof obj)
                    return obj;
                if (obj instanceof Date) {
                    copy = new Date();
                    copy.setTime(obj.getTime());
                    return copy
                }
                if (obj instanceof Array) {
                    copy = [];
                    for (var i = 0, len = obj.length; i < len; i++) {
                        if ("function" == typeof obj[i]) {
                            continue
                        }
                        copy[i] = Utils.clone(obj[i])
                    }
                    return copy
                }
                if (obj instanceof Object) {
                    copy = {};
                    for (var attr in obj) {
                        if (obj.hasOwnProperty(attr)) {
                            if ("function" == typeof obj[attr]) {
                                continue
                            }
                            copy[attr] = Utils.clone(obj[attr])
                        }
                    }
                    return copy
                }
                return obj
            },
            getTagsAsArray: function (tag) {
                return [].slice.call(document.getElementsByTagName(tag))
            },
            getRequestParams: function () {
                return []
            },
            setupMouseOverClickEvents: function (eventId, triggers) {
                $(document).onFirst('mouseover', triggers.join(','), function () {
                    if ($(this).hasClass('pys-mouse-over-' + eventId)) {
                        return !0
                    } else {
                        $(this).addClass('pys-mouse-over-' + eventId)
                    }
                    Utils.fireDynamicEvent(eventId)
                })
            },
            setupCSSClickEvents: function (eventId, triggers) {
                $(document).onFirst('click', triggers.join(','), function () {
                    Utils.fireTriggerEvent(eventId)
                })
            },
            setupURLClickEvents: function () {
                $('a[data-pys-event-id]').onFirst('click', function (evt) {
                    $(this).attr('data-pys-event-id').split(',').forEach(function (eventId) {
                        eventId = parseInt(eventId);
                        if (isNaN(eventId) === !1) {
                            Utils.fireTriggerEvent(eventId)
                        }
                    })
                })
            },
            setupScrollPosEvents: function (eventId, triggers) {
                var scrollPosThresholds = {}
                    , docHeight = $(document).height() - $(window).height();
                $.each(triggers, function (index, scrollPos) {
                    scrollPos = docHeight * scrollPos / 100;
                    scrollPos = Math.round(scrollPos);
                    scrollPosThresholds[scrollPos] = eventId
                });
                $(document).on("scroll", function () {
                    var scrollPos = $(window).scrollTop();
                    $.each(scrollPosThresholds, function (threshold, eventId) {
                        if (scrollPos <= threshold) {
                            return !0
                        }
                        if (eventId === null) {
                            return !0
                        } else {
                            scrollPosThresholds[threshold] = null
                        }
                        Utils.fireTriggerEvent(eventId)
                    })
                })
            },
            setupCommentEvents: function (eventId, triggers) {
                $('form.comment-form').on("submit", function () {
                    Utils.fireTriggerEvent(eventId)
                })
            },
            fireTriggerEvent: function (eventId) {
                if (!options.triggerEvents.hasOwnProperty(eventId)) {
                    return
                }
                var event = {};
                var events = options.triggerEvents[eventId];
                if (events.hasOwnProperty('facebook')) {
                    event = events.facebook;
                    Facebook.fireEvent(event.name, event)
                }
                if (events.hasOwnProperty('ga')) {
                    event = events.ga;
                    Analytics.fireEvent(event.name, event)
                }
                if (events.hasOwnProperty('pinterest')) {
                    event = events.pinterest;
                    Pinterest.fireEvent(event.name, event)
                }
                if (events.hasOwnProperty('bing')) {
                    event = events.bing;
                    Bing.fireEvent(event.name, event)
                }
            },
            fireStaticEvents: function (pixel) {
                if (options.staticEvents.hasOwnProperty(pixel)) {
                    $.each(options.staticEvents[pixel], function (eventName, events) {
                        $.each(events, function (index, eventData) {
                            eventData.fired = eventData.fired || !1;
                            if (!eventData.fired) {
                                var fired = !1;
                                if ('facebook' === pixel) {
                                    fired = Facebook.fireEvent(eventData.name, eventData)
                                } else if ('ga' === pixel) {
                                    fired = Analytics.fireEvent(eventData.name, eventData)
                                } else if ('pinterest' === pixel) {
                                    fired = Pinterest.fireEvent(eventData.name, eventData)
                                } else if ('bing' === pixel) {
                                    fired = Bing.fireEvent(eventData.name, eventData)
                                }
                                eventData.fired = fired
                            }
                        })
                    })
                }
            },
            loadGoogleTag: function (id) {
                if (!gtag_loaded) {
                    (function (window, document, src) {
                        var a = document.createElement('script')
                            , m = document.getElementsByTagName('script')[0];
                        a.async = 1;
                        a.src = src;
                        m.parentNode.insertBefore(a, m)
                    }
                    )(window, document, '//www.googletagmanager.com/gtag/js?id=' + id);
                    window.dataLayer = window.dataLayer || [];
                    window.gtag = window.gtag || function gtag() {
                        dataLayer.push(arguments)
                    }
                        ;
                    gtag('js', new Date());
                    gtag_loaded = !0
                }
            },
            loadPixels: function () {
                if (options.gdpr.ajax_enabled && !options.gdpr.consent_magic_integration_enabled) {
                    $.get({
                        url: options.ajaxUrl,
                        dataType: 'json',
                        data: {
                            action: 'pys_get_gdpr_filters_values'
                        },
                        success: function (res) {
                            if (res.success) {
                                options.gdpr.all_disabled_by_api = res.data.all_disabled_by_api;
                                options.gdpr.facebook_disabled_by_api = res.data.facebook_disabled_by_api;
                                options.gdpr.analytics_disabled_by_api = res.data.analytics_disabled_by_api;
                                options.gdpr.google_ads_disabled_by_api = res.data.google_ads_disabled_by_api;
                                options.gdpr.pinterest_disabled_by_api = res.data.pinterest_disabled_by_api;
                                options.gdpr.bing_disabled_by_api = res.data.bing_disabled_by_api
                            }
                            loadPixels()
                        }
                    })
                } else {
                    loadPixels()
                }
            },
            consentGiven: function (pixel) {
                if (options.gdpr.consent_magic_integration_enabled && typeof CS_Data !== "undefined") {
                    var cs_cookie = Cookies.get('cs_viewed_cookie_policy' + test_prefix);
                    if (options.gdpr[pixel + '_prior_consent_enabled']) {
                        if (typeof cs_cookie === 'undefined' || cs_cookie === 'yes') {
                            return !0
                        }
                    } else {
                        if (typeof cs_cookie === 'undefined' || cs_cookie === 'yes') {
                            return !0
                        }
                    }
                    return !1
                }
                if (options.gdpr.real_cookie_banner_integration_enabled) {
                    var consentApi = window.consentApi;
                    if (consentApi) {
                        switch (pixel) {
                            case "analytics":
                                return consentApi.consentSync("http", "_ga", "*").cookieOptIn;
                            case "facebook":
                                return consentApi.consentSync("http", "_fbp", "*").cookieOptIn;
                            case "pinterest":
                                return consentApi.consentSync("http", "_pinterest_sess", ".pinterest.com").cookieOptIn;
                            default:
                                return !0
                        }
                    }
                }
                if (options.gdpr.cookiebot_integration_enabled && typeof Cookiebot !== 'undefined') {
                    var cookiebot_consent_category = options.gdpr['cookiebot_' + pixel + '_consent_category'];
                    if (options.gdpr[pixel + '_prior_consent_enabled']) {
                        if (Cookiebot.consented === !1 || Cookiebot.consent[cookiebot_consent_category]) {
                            return !0
                        }
                    } else {
                        if (Cookiebot.consent[cookiebot_consent_category]) {
                            return !0
                        }
                    }
                    return !1
                }
                if (options.gdpr.cookie_notice_integration_enabled && typeof cnArgs !== 'undefined') {
                    var cn_cookie = Cookies.get(cnArgs.cookieName);
                    if (options.gdpr[pixel + '_prior_consent_enabled']) {
                        if (typeof cn_cookie === 'undefined' || cn_cookie === 'true') {
                            return !0
                        }
                    } else {
                        if (cn_cookie === 'true') {
                            return !0
                        }
                    }
                    return !1
                }
                if (options.gdpr.cookie_law_info_integration_enabled) {
                    var cli_cookie = Cookies.get('viewed_cookie_policy');
                    if (options.gdpr[pixel + '_prior_consent_enabled']) {
                        if (typeof cli_cookie === 'undefined' || cli_cookie === 'yes') {
                            return !0
                        }
                    } else {
                        if (cli_cookie === 'yes') {
                            return !0
                        }
                    }
                    return !1
                }
                return !0
            },
            setupGdprCallbacks: function () {
                if (options.gdpr.consent_magic_integration_enabled && typeof CS_Data !== "undefined") {
                    var test_prefix = CS_Data.test_prefix
                        , cs_refresh_after_consent = !1
                        , substring = "cs_enabled_cookie_term";
                    if (CS_Data.cs_refresh_after_consent == 1) {
                        cs_refresh_after_consent = CS_Data.cs_refresh_after_consent
                    }
                    if (!cs_refresh_after_consent) {
                        var theCookies = document.cookie.split(';');
                        for (var i = 1; i <= theCookies.length; i++) {
                            if (theCookies[i - 1].indexOf(substring) !== -1) {
                                var categoryCookie = theCookies[i - 1].replace('cs_enabled_cookie_term' + test_prefix + '_', '');
                                categoryCookie = Number(categoryCookie.replace(/\D+/g, ""));
                                var cs_cookie_val = Cookies.get('cs_enabled_cookie_term' + test_prefix + '_' + categoryCookie);
                                if (cs_cookie_val == 'yes') {
                                    if (categoryCookie === CS_Data.cs_script_cat.facebook) {
                                        Facebook.loadPixel()
                                    }
                                    if (categoryCookie === CS_Data.cs_script_cat.bing) {
                                        Bing.loadPixel()
                                    }
                                    if (categoryCookie === CS_Data.cs_script_cat.analytics) {
                                        Analytics.loadPixel()
                                    }
                                    if (categoryCookie === CS_Data.cs_script_cat.pinterest) {
                                        Pinterest.loadPixel()
                                    }
                                } else {
                                    if (categoryCookie === CS_Data.cs_script_cat.facebook) {
                                        Facebook.disable()
                                    }
                                    if (categoryCookie === CS_Data.cs_script_cat.bing) {
                                        Bing.disable()
                                    }
                                    if (categoryCookie === CS_Data.cs_script_cat.analytics) {
                                        Analytics.disable()
                                    }
                                    if (categoryCookie === CS_Data.cs_script_cat.pinterest) {
                                        Pinterest.disable()
                                    }
                                }
                                if (Cookies.get('cs_enabled_advanced_matching') == 'yes') {
                                    Facebook.loadPixel()
                                }
                            }
                        }
                        $(document).on('click', '.cs_action_btn', function (e) {
                            e.preventDefault();
                            var elm = $(this)
                                , button_action = elm.attr('data-cs_action');
                            if (button_action === 'allow_all') {
                                Facebook.loadPixel();
                                Bing.loadPixel();
                                Analytics.loadPixel();
                                Pinterest.loadPixel()
                            } else if (button_action === 'disable_all') {
                                Facebook.disable();
                                Bing.disable();
                                Analytics.disable();
                                Pinterest.disable()
                            }
                        })
                    }
                }
                if (options.gdpr.real_cookie_banner_integration_enabled) {
                    var consentApi = window.consentApi;
                    if (consentApi) {
                        consentApi.consent("http", "_ga", "*").then(Analytics.loadPixel.bind(Analytics), Analytics.disable.bind(Analytics));
                        consentApi.consent("http", "_fbp", "*").then(Facebook.loadPixel.bind(Facebook), Facebook.disable.bind(Facebook));
                        consentApi.consent("http", "_pinterest_sess", ".pinterest.com").then(Pinterest.loadPixel.bind(Pinterest), Pinterest.disable.bind(Pinterest))
                    }
                }
                if (options.gdpr.cookiebot_integration_enabled && typeof Cookiebot !== 'undefined') {
                    window.addEventListener("CookiebotOnConsentReady", function () {
                        if (Cookiebot.consent.marketing) {
                            Facebook.loadPixel();
                            Bing.loadPixel();
                            Pinterest.loadPixel()
                        }
                        if (Cookiebot.consent.statistics) {
                            Analytics.loadPixel()
                        }
                        if (!Cookiebot.consent.marketing) {
                            Facebook.disable();
                            Pinterest.disable();
                            Bing.disable()
                        }
                        if (!Cookiebot.consent.statistics) {
                            Analytics.disable()
                        }
                    })
                }
                if (options.gdpr.cookie_notice_integration_enabled) {
                    $(document).onFirst('click', '.cn-set-cookie', function () {
                        if ($(this).data('cookie-set') === 'accept') {
                            Facebook.loadPixel();
                            Analytics.loadPixel();
                            Pinterest.loadPixel();
                            Bing.loadPixel()
                        } else {
                            Facebook.disable();
                            Analytics.disable();
                            Pinterest.disable();
                            Bing.disable()
                        }
                    });
                    $(document).onFirst('click', '.cn-revoke-cookie', function () {
                        Facebook.disable();
                        Analytics.disable();
                        Pinterest.disable();
                        Bing.disable()
                    })
                }
                if (options.gdpr.cookie_law_info_integration_enabled) {
                    $(document).onFirst('click', '#cookie_action_close_header', function () {
                        Facebook.loadPixel();
                        Analytics.loadPixel();
                        Pinterest.loadPixel();
                        Bing.loadPixel()
                    });
                    $(document).onFirst('click', '#cookie_action_close_header_reject', function () {
                        Facebook.disable();
                        Analytics.disable();
                        Pinterest.disable();
                        Bing.disable()
                    })
                }
            },
            getLinkExtension: function (link) {
                link = link.substring(0, (link.indexOf("#") === -1) ? link.length : link.indexOf("#"));
                link = link.substring(0, (link.indexOf("?") === -1) ? link.length : link.indexOf("?"));
                link = link.substring(link.lastIndexOf("/") + 1, link.length);
                if (link.length > 0 && link.indexOf('.') !== -1) {
                    link = link.substring(link.indexOf(".") + 1);
                    return link
                } else {
                    return ""
                }
            },
            getLinkFilename: function (link) {
                link = link.substring(0, (link.indexOf("#") === -1) ? link.length : link.indexOf("#"));
                link = link.substring(0, (link.indexOf("?") === -1) ? link.length : link.indexOf("?"));
                link = link.substring(link.lastIndexOf("/") + 1, link.length);
                if (link.length > 0 && link.indexOf('.') !== -1) {
                    return link
                } else {
                    return ""
                }
            },
            isCheckoutPage: function () {
                return $('body').hasClass('woocommerce-checkout') || $('body').hasClass('edd-checkout')
            },
            addCheckoutFields: function () {
                var utm = "";
                var utms = getUTMs()
                $.each(utmTerms, function (index, name) {
                    if (index > 0) {
                        utm += "|"
                    }
                    utm += name + ":" + utms[name]
                });
                var utmIdList = "";
                var utmsIds = getUTMId()
                $.each(utmId, function (index, name) {
                    if (index > 0) {
                        utmIdList += "|"
                    }
                    utmIdList += name + ":" + utmsIds[name]
                });
                var utmIdListLast = "";
                var utmsIdsLast = getUTMId(!0)
                $.each(utmId, function (index, name) {
                    if (index > 0) {
                        utmIdListLast += "|"
                    }
                    utmIdListLast += name + ":" + utmsIdsLast[name]
                });
                var utmLast = "";
                var utmsLast = getUTMs(!0)
                $.each(utmTerms, function (index, name) {
                    if (index > 0) {
                        utmLast += "|"
                    }
                    utmLast += name + ":" + utmsLast[name]
                });
                var dateTime = getDateTime();
                var landing = Cookies.get('pys_landing_page');
                var lastLanding = Cookies.get('last_pys_landing_page');
                var trafic = Cookies.get('pysTrafficSource');
                var lastTrafic = Cookies.get('last_pysTrafficSource');
                var $form = null;
                if ($('body').hasClass('woocommerce-checkout')) {
                    $form = $("form.woocommerce-checkout")
                } else {
                    $form = $("#edd_purchase_form")
                }
                var inputs = {
                    'pys_utm': utm,
                    'pys_utm_id': utmIdList,
                    'pys_browser_time': dateTime.join("|"),
                    'pys_landing': landing,
                    'pys_source': trafic,
                    'pys_order_type': $(".wcf-optin-form").length > 0 ? "wcf-optin" : "normal",
                    'last_pys_landing': lastLanding,
                    'last_pys_source': lastTrafic,
                    'last_pys_utm': utmLast,
                    'last_pys_utm_id': utmIdListLast,
                }
                Object.keys(inputs).forEach(function (key, index) {
                    $form.append("<input type='hidden' name='" + key + "' value='" + inputs[key] + "' /> ")
                })
            }
        }
    }(options);
    var Facebook = function (options) {
        var defaultEventTypes = ['PageView', 'ViewContent', 'Search', 'AddToCart', 'AddToWishlist', 'InitiateCheckout', 'AddPaymentInfo', 'Purchase', 'Lead', 'Subscribe', 'CustomizeProduct', 'FindLocation', 'StartTrial', 'SubmitApplication', 'Schedule', 'Contact', 'Donate'];
        var initialized = !1;
        var isApiDisabled = options.gdpr.all_disabled_by_api || options.gdpr.facebook_disabled_by_api || options.gdpr.cookiebot_integration_enabled || options.gdpr.consent_magic_integration_enabled || options.gdpr.cookie_notice_integration_enabled || options.gdpr.cookie_law_info_integration_enabled;
        function sendFbServerEvent(allData, name, params) {
            let eventId = null;
            if (options.facebook.serverApiEnabled) {
                if (allData.e_id === "woo_remove_from_cart" || allData.e_id === "woo_add_to_cart_on_button_click") {
                    let isAddToCartFromJs = options.woo.hasOwnProperty("addToCartCatchMethod") && options.woo.addToCartCatchMethod === "add_cart_js";
                    if (isAddToCartFromJs || allData.e_id !== "woo_add_to_cart_on_button_click") {
                        Facebook.updateEventId(allData.name);
                        allData.eventID = Facebook.getEventId(allData.name)
                    } else { }
                } else {
                    if (options.facebook.ajaxForServerEvent || isApiDisabled || allData.delay > 0 || allData.type !== "static") {
                        allData.eventID = pys_generate_token(36);
                        var json = {
                            action: 'pys_api_event',
                            pixel: 'facebook',
                            event: name,
                            data: params,
                            ids: options.facebook.pixelIds,
                            eventID: allData.eventID,
                            url: window.location.href,
                        };
                        if (allData.hasOwnProperty('woo_order')) {
                            json.woo_order = allData.woo_order
                        }
                        if (allData.hasOwnProperty('edd_order')) {
                            json.edd_order = allData.edd_order
                        }
                        if (allData.delay > 0) {
                            jQuery.ajax({
                                type: 'POST',
                                url: options.ajaxUrl,
                                data: json,
                                headers: {
                                    'Cache-Control': 'no-cache'
                                },
                                success: function () { },
                            })
                        } else {
                            setTimeout(function (json) {
                                jQuery.ajax({
                                    type: 'POST',
                                    url: options.ajaxUrl,
                                    data: json,
                                    headers: {
                                        'Cache-Control': 'no-cache'
                                    },
                                    success: function () { },
                                })
                            }, 500, json)
                        }
                    }
                }
                eventId = allData.eventID
            }
            return eventId
        }
        function fireEvent(name, allData) {
            if (typeof window.pys_event_data_filter === "function" && window.pys_disable_event_filter(name, 'facebook')) {
                return
            }
            var actionType = defaultEventTypes.includes(name) ? 'track' : 'trackCustom';
            var data = allData.params;
            var params = {};
            var arg = {};
            Utils.copyProperties(data, params);
            let eventId = sendFbServerEvent(allData, name, params)
            if ("hCR" === name) {
                return
            }
            if (options.debug) {
                console.log('[Facebook] ' + name, params, "eventID", eventId)
            }
            if (eventId != null) {
                arg.eventID = eventId
            }
            fbq(actionType, name, params, arg)
        }
        return {
            tag: function () {
                return "facebook"
            },
            isEnabled: function () {
                return options.hasOwnProperty('facebook')
            },
            disable: function () {
                initialized = !1
            },
            loadPixel: function () {
                if (initialized || !this.isEnabled() || !Utils.consentGiven('facebook')) {
                    return
                }
                !function (f, b, e, v, n, t, s) {
                    if (f.fbq)
                        return;
                    n = f.fbq = function () {
                        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                    }
                        ;
                    if (!f._fbq)
                        f._fbq = n;
                    n.push = n;
                    n.loaded = !0;
                    n.version = '2.0';
                    n.agent = 'dvpixelyoursite';
                    n.queue = [];
                    t = b.createElement(e);
                    t.async = !0;
                    t.src = v;
                    s = b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t, s)
                }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
                options.facebook.pixelIds.forEach(function (pixelId) {
                    if (options.facebook.removeMetadata) {
                        fbq('set', 'autoConfig', !1, pixelId)
                    }
                    if (options.gdpr.consent_magic_integration_enabled && typeof CS_Data !== "undefined") {
                        if (options.facebook.advancedMatching.length === 0) {
                            fbq('init', pixelId)
                        } else {
                            var cs_advanced_matching = Cookies.get('cs_enabled_advanced_matching' + test_prefix);
                            if (jQuery('#cs_enabled_advanced_matching' + test_prefix).length > 0) {
                                if (cs_advanced_matching == 'yes') {
                                    fbq('init', pixelId, options.facebook.advancedMatching)
                                } else {
                                    fbq('init', pixelId)
                                }
                            } else {
                                fbq('init', pixelId, options.facebook.advancedMatching)
                            }
                        }
                    } else {
                        if (options.facebook.advancedMatching.length === 0) {
                            fbq('init', pixelId)
                        } else {
                            fbq('init', pixelId, options.facebook.advancedMatching)
                        }
                    }
                });
                initialized = !0;
                Utils.fireStaticEvents('facebook')
            },
            fireEvent: function (name, data) {
                if (!initialized || !this.isEnabled()) {
                    return !1
                }
                data.delay = data.delay || 0;
                data.params = data.params || {};
                if (data.delay === 0) {
                    fireEvent(name, data)
                } else {
                    setTimeout(function (name, params) {
                        fireEvent(name, params)
                    }, data.delay * 1000, name, data)
                }
                return !0
            },
            onCommentEvent: function (event) {
                this.fireEvent(event.name, event)
            },
            onDownloadEvent: function (event) {
                this.fireEvent(event.name, event)
            },
            onFormEvent: function (event) {
                this.fireEvent(event.name, event)
            },
            onWooAddToCartOnButtonEvent: function (product_id) {
                if (!options.dynamicEvents.woo_add_to_cart_on_button_click.hasOwnProperty(this.tag()))
                    return;
                var event = options.dynamicEvents.woo_add_to_cart_on_button_click[this.tag()];
                if (window.pysWooProductData.hasOwnProperty(product_id)) {
                    if (window.pysWooProductData[product_id].hasOwnProperty('facebook')) {
                        event = Utils.copyProperties(event, {})
                        Utils.copyProperties(window.pysWooProductData[product_id].facebook.params, event.params)
                        this.fireEvent(event.name, event)
                    }
                }
            },
            onWooAddToCartOnSingleEvent: function (product_id, qty, product_type, $form) {
                window.pysWooProductData = window.pysWooProductData || [];
                if (!options.dynamicEvents.woo_add_to_cart_on_button_click.hasOwnProperty(this.tag()))
                    return;
                var event = Utils.clone(options.dynamicEvents.woo_add_to_cart_on_button_click[this.tag()]);
                if (product_type === Utils.PRODUCT_VARIABLE && !options.facebook.wooVariableAsSimple) {
                    product_id = parseInt($form.find('input[name="variation_id"]').val())
                }
                if (window.pysWooProductData.hasOwnProperty(product_id)) {
                    if (window.pysWooProductData[product_id].hasOwnProperty('facebook')) {
                        Utils.copyProperties(window.pysWooProductData[product_id].facebook.params, event.params);
                        var groupValue = 0;
                        if (product_type === Utils.PRODUCT_GROUPED) {
                            $form.find(".woocommerce-grouped-product-list .qty").each(function (index) {
                                var childId = $(this).attr('name').replaceAll("quantity[", "").replaceAll("]", "");
                                var quantity = parseInt($(this).val());
                                if (isNaN(quantity)) {
                                    quantity = 0
                                }
                                var childItem = window.pysWooProductData[product_id].facebook.grouped[childId];
                                if (quantity == 0) {
                                    event.params.content_ids.forEach(function (el, index, array) {
                                        if (el == childItem.content_id) {
                                            array.splice(index, 1)
                                        }
                                    })
                                }
                                if (event.params.hasOwnProperty('contents')) {
                                    event.params.contents.forEach(function (el, index, array) {
                                        if (el.id == childItem.content_id) {
                                            if (quantity > 0) {
                                                el.quantity = quantity
                                            } else {
                                                array.splice(index, 1)
                                            }
                                        }
                                    })
                                }
                                groupValue += childItem.price * quantity
                            });
                            if (groupValue == 0)
                                return
                        }
                        if (options.woo.addToCartOnButtonValueEnabled && options.woo.addToCartOnButtonValueOption !== 'global') {
                            if (product_type === Utils.PRODUCT_GROUPED) {
                                event.params.value = groupValue
                            } else if (product_type === Utils.PRODUCT_BUNDLE) {
                                var data = $(".bundle_form .bundle_data").data("bundle_form_data");
                                var items_sum = getBundlePriceOnSingleProduct(data);
                                event.params.value = (parseInt(data.base_price) + items_sum) * qty
                            } else {
                                event.params.value = event.params.value * qty
                            }
                        }
                        if (event.params.hasOwnProperty('contents') && product_type !== Utils.PRODUCT_GROUPED) {
                            event.params.contents[0].quantity = qty
                        }
                        this.fireEvent(event.name, event)
                    }
                }
            },
            onWooRemoveFromCartEvent: function (event) {
                this.fireEvent(event.name, event)
            },
            onEddAddToCartOnButtonEvent: function (download_id, price_index, qty) {
                if (!options.dynamicEvents.edd_add_to_cart_on_button_click.hasOwnProperty(this.tag()))
                    return;
                var event = Utils.clone(options.dynamicEvents.edd_add_to_cart_on_button_click[this.tag()]);
                if (window.pysEddProductData.hasOwnProperty(download_id)) {
                    var index;
                    if (price_index) {
                        index = download_id + '_' + price_index
                    } else {
                        index = download_id
                    }
                    if (window.pysEddProductData[download_id].hasOwnProperty(index)) {
                        if (window.pysEddProductData[download_id][index].hasOwnProperty('facebook')) {
                            Utils.copyProperties(window.pysEddProductData[download_id][index].facebook.params, event.params)
                            if (options.edd.addToCartOnButtonValueEnabled && options.edd.addToCartOnButtonValueOption !== 'global') {
                                event.params.value = event.params.value * qty
                            }
                            var contents = event.params.contents;
                            contents[0].quantity = qty;
                            event.params.contents = contents;
                            this.fireEvent(event.name, event)
                        }
                    }
                }
            },
            onEddRemoveFromCartEvent: function (event) {
                this.fireEvent(event.name, event)
            },
            onPageScroll: function (event) {
                this.fireEvent(event.name, event)
            },
            onTime: function (event) {
                this.fireEvent(event.name, event)
            },
            initEventIdCookies: function (key) {
                var ids = {};
                ids[key] = pys_generate_token(36)
                Cookies.set('pys_fb_event_id', JSON.stringify(ids))
            },
            updateEventId: function (key) {
                var cooData = Cookies.get("pys_fb_event_id")
                if (cooData === undefined) {
                    this.initEventIdCookies(key)
                } else {
                    var data = JSON.parse(cooData);
                    data[key] = pys_generate_token(36);
                    Cookies.set('pys_fb_event_id', JSON.stringify(data))
                }
            },
            getEventId: function (key) {
                var data = Cookies.get("pys_fb_event_id");
                if (data === undefined) {
                    this.initEventIdCookies(key);
                    data = Cookies.get("pys_fb_event_id")
                }
                return JSON.parse(data)[key]
            },
        }
    }(options);
    var Analytics = function (options) {
        var initialized = !1;
        function fireEvent(name, data) {
            if (typeof window.pys_event_data_filter === "function" && window.pys_disable_event_filter(name, 'ga')) {
                return
            }
            var eventParams = Utils.copyProperties(data, {});
            var _fireEvent = function (tracking_id, name, params) {
                params.send_to = tracking_id;
                if (options.debug) {
                    console.log('[Google Analytics #' + tracking_id + '] ' + name, params)
                }
                gtag('event', name, params)
            };
            options.ga.trackingIds.forEach(function (tracking_id) {
                var copyParams = Utils.copyProperties(eventParams, {});
                var params = mapParamsTov4(tracking_id, name, copyParams)
                _fireEvent(tracking_id, name, params)
            })
        }
        function mapParamsTov4(tag, name, param) {
            delete param.page_title;
            delete param.event_url;
            delete param.landing_page;
            if (isv4(tag)) {
                delete param.traffic_source;
                delete param.event_category;
                delete param.event_label;
                delete param.ecomm_prodid;
                delete param.ecomm_pagetype;
                delete param.ecomm_totalvalue;
                if (name === 'search') {
                    param.search = param.search_term;
                    delete param.search_term;
                    delete param.non_interaction;
                    delete param.dynx_itemid;
                    delete param.dynx_pagetype;
                    delete param.dynx_totalvalue
                }
            } else {
                switch (name) {
                    case 'Comment':
                    case 'login':
                    case 'sign_up':
                    case 'EmailClick':
                    case 'TelClick':
                        {
                            let params = {
                                event_category: "Key Actions",
                                event_action: name,
                                non_interaction: param.non_interaction,
                            }
                            return params
                        }
                    case 'Form':
                        {
                            let params = {
                                event_category: "Key Actions",
                                event_action: name,
                                non_interaction: param.non_interaction,
                            }
                            var formClass = (typeof param.form_class != 'undefined') ? 'class: ' + param.form_class : '';
                            if (formClass != "") {
                                params.event_label = formClass
                            }
                            return params
                        }
                    case 'Download':
                        {
                            let params = {
                                event_category: "Key Actions",
                                event_action: name,
                                event_label: param.download_name,
                                non_interaction: param.non_interaction,
                            }
                            return params
                        }
                    case 'TimeOnPage':
                    case 'PageScroll':
                        {
                            let params = {
                                event_category: "Key Actions",
                                event_action: name,
                                event_label: document.title,
                                non_interaction: param.non_interaction,
                            }
                            return params
                        }
                    case 'search':
                        {
                            let params = {
                                event_category: "Key Actions",
                                event_action: name,
                                event_label: param.search_term,
                                non_interaction: param.non_interaction,
                            }
                            return params
                        }
                }
                delete param.post_type;
                delete param.post_id;
                delete param.plugin;
                delete param.user_role;
                delete param.cartlows;
                delete param.cartflows_flow;
                delete param.cartflows_step
            }
            return param
        }
        function isv4(tag) {
            return tag.indexOf('G') === 0
        }
        return {
            tag: function () {
                return "ga"
            },
            isEnabled: function () {
                return options.hasOwnProperty('ga')
            },
            disable: function () {
                initialized = !1
            },
            loadPixel: function () {
                if (initialized || !this.isEnabled() || !Utils.consentGiven('analytics')) {
                    return
                }
                Utils.loadGoogleTag(options.ga.trackingIds[0]);
                var config = {
                    'link_attribution': options.ga.enhanceLinkAttr,
                    'anonymize_ip': options.ga.anonimizeIP
                };
                if (options.ga.crossDomainEnabled) {
                    config.linker = {
                        accept_incoming: options.ga.crossDomainAcceptIncoming,
                        domains: options.ga.crossDomainDomains
                    }
                }
                options.ga.trackingIds.forEach(function (trackingId, index) {
                    config.debug_mode = options.ga.isDebugEnabled.includes("index_" + index);
                    if (isv4(trackingId)) {
                        if (options.ga.disableAdvertisingFeatures) {
                            config.allow_google_signals = !1
                        }
                        if (options.ga.disableAdvertisingPersonalization) {
                            config.allow_ad_personalization_signals = !1
                        }
                    }
                    gtag('config', trackingId, config)
                });
                initialized = !0;
                Utils.fireStaticEvents('ga')
            },
            fireEvent: function (name, data) {
                if (!initialized || !this.isEnabled()) {
                    return !1
                }
                data.delay = data.delay || 0;
                data.params = data.params || {};
                if (data.delay === 0) {
                    fireEvent(name, data.params)
                } else {
                    setTimeout(function (name, params) {
                        fireEvent(name, params)
                    }, data.delay * 1000, name, data.params)
                }
                return !0
            },
            onCommentEvent: function (event) {
                this.fireEvent(event.name, event)
            },
            onDownloadEvent: function (event) {
                this.fireEvent(event.name, event)
            },
            onFormEvent: function (event) {
                this.fireEvent(event.name, event)
            },
            onWooAddToCartOnButtonEvent: function (product_id) {
                if (!options.dynamicEvents.woo_add_to_cart_on_button_click.hasOwnProperty(this.tag()))
                    return;
                var event = Utils.clone(options.dynamicEvents.woo_add_to_cart_on_button_click[this.tag()]);
                if (window.pysWooProductData.hasOwnProperty(product_id)) {
                    if (window.pysWooProductData[product_id].hasOwnProperty('ga')) {
                        Utils.copyProperties(window.pysWooProductData[product_id].ga.params, event.params)
                        this.fireEvent(event.name, event)
                    }
                }
            },
            onWooAddToCartOnSingleEvent: function (product_id, qty, product_type, $form) {
                window.pysWooProductData = window.pysWooProductData || [];
                if (!options.dynamicEvents.woo_add_to_cart_on_button_click.hasOwnProperty(this.tag()))
                    return;
                var event = Utils.clone(options.dynamicEvents.woo_add_to_cart_on_button_click[this.tag()]);
                if (product_type === Utils.PRODUCT_VARIABLE && !options.ga.wooVariableAsSimple) {
                    product_id = parseInt($form.find('input[name="variation_id"]').val())
                }
                if (window.pysWooProductData.hasOwnProperty(product_id)) {
                    if (window.pysWooProductData[product_id].hasOwnProperty('ga')) {
                        Utils.copyProperties(window.pysWooProductData[product_id].ga.params, event.params);
                        if (product_type === Utils.PRODUCT_GROUPED) {
                            var groupValue = 0;
                            $form.find(".woocommerce-grouped-product-list .qty").each(function (index) {
                                var childId = $(this).attr('name').replaceAll("quantity[", "").replaceAll("]", "");
                                var quantity = parseInt($(this).val());
                                if (isNaN(quantity)) {
                                    quantity = 0
                                }
                                var childItem = window.pysWooProductData[product_id].ga.grouped[childId];
                                event.params.items.forEach(function (el, index, array) {
                                    if (el.id == childItem.content_id) {
                                        if (quantity > 0) {
                                            el.quantity = quantity
                                        } else {
                                            array.splice(index, 1)
                                        }
                                    }
                                });
                                groupValue += childItem.price * quantity
                            });
                            if (options.woo.addToCartOnButtonValueEnabled && options.woo.addToCartOnButtonValueOption !== 'global' && event.params.hasOwnProperty('ecomm_totalvalue')) {
                                event.params.ecomm_totalvalue = groupValue
                            }
                            if (groupValue == 0)
                                return
                        } else {
                            event.params.items[0].quantity = qty
                        }
                        if (options.woo.addToCartOnButtonValueEnabled && options.woo.addToCartOnButtonValueOption !== 'global' && product_type !== Utils.PRODUCT_GROUPED) {
                            if (event.params.hasOwnProperty('ecomm_totalvalue')) {
                                event.params.ecomm_totalvalue = event.params.items[0].price * qty
                            }
                        }
                        this.fireEvent(event.name, event)
                    }
                }
            },
            onWooRemoveFromCartEvent: function (event) {
                this.fireEvent(event.name, event)
            },
            onEddAddToCartOnButtonEvent: function (download_id, price_index, qty) {
                if (!options.dynamicEvents.edd_add_to_cart_on_button_click.hasOwnProperty(this.tag()))
                    return;
                var event = Utils.clone(options.dynamicEvents.edd_add_to_cart_on_button_click[this.tag()]);
                if (window.pysEddProductData.hasOwnProperty(download_id)) {
                    var index;
                    if (price_index) {
                        index = download_id + '_' + price_index
                    } else {
                        index = download_id
                    }
                    if (window.pysEddProductData[download_id].hasOwnProperty(index)) {
                        if (window.pysEddProductData[download_id][index].hasOwnProperty('ga')) {
                            Utils.copyProperties(window.pysEddProductData[download_id][index].ga.params, event.params);
                            event.params.items[0].quantity = qty;
                            this.fireEvent(event.name, event)
                        }
                    }
                }
            },
            onEddRemoveFromCartEvent: function (event) {
                this.fireEvent(event.name, event)
            },
            onPageScroll: function (event) {
                this.fireEvent(event.name, event)
            },
            onTime: function (event) {
                this.fireEvent(event.name, event)
            },
        }
    }(options);
    window.pys = window.pys || {};
    window.pys.Facebook = Facebook;
    window.pys.Analytics = Analytics;
    window.pys.Utils = Utils;
    $(document).ready(function () {
        if ($("#pys_late_event").length > 0) {
            var events = JSON.parse($("#pys_late_event").attr("dir"));
            for (var key in events) {
                var event = {};
                event[events[key].e_id] = [events[key]];
                if (options.staticEvents.hasOwnProperty(key)) {
                    Object.assign(options.staticEvents[key], event)
                } else {
                    options.staticEvents[key] = event
                }
            }
        }
        var Pinterest = Utils.setupPinterestObject();
        var Bing = Utils.setupBingObject();
        Utils.manageCookies();
        Utils.setupGdprCallbacks();
        if (options.dynamicEvents.hasOwnProperty("automatic_event_scroll")) {
            var singlePageScroll = function () {
                var docHeight = $(document).height() - $(window).height();
                var isFired = !1;
                if (options.dynamicEvents.hasOwnProperty("automatic_event_scroll")) {
                    var pixels = Object.keys(options.dynamicEvents.automatic_event_scroll);
                    for (var i = 0; i < pixels.length; i++) {
                        var event = Utils.clone(options.dynamicEvents.automatic_event_scroll[pixels[i]]);
                        var scroll = Math.round(docHeight * event.scroll_percent / 100)
                        if (scroll < $(window).scrollTop()) {
                            Utils.copyProperties(Utils.getRequestParams(), event.params);
                            getPixelBySlag(pixels[i]).onPageScroll(event);
                            isFired = !0
                        }
                    }
                }
                if (isFired) {
                    $(document).off("scroll", singlePageScroll)
                }
            }
            $(document).on("scroll", singlePageScroll)
        }
        if (options.dynamicEvents.hasOwnProperty("automatic_event_time_on_page")) {
            var pixels = Object.keys(options.dynamicEvents.automatic_event_time_on_page);
            var time = options.dynamicEvents.automatic_event_time_on_page[pixels[0]].time_on_page;
            setTimeout(function () {
                for (var i = 0; i < pixels.length; i++) {
                    var event = Utils.clone(options.dynamicEvents.automatic_event_time_on_page[pixels[i]]);
                    Utils.copyProperties(Utils.getRequestParams(), event.params);
                    getPixelBySlag(pixels[i]).onTime(event)
                }
            }, time * 1000)
        }
        if (options.dynamicEvents.hasOwnProperty("automatic_event_download")) {
            $(document).onFirst('click', 'a, button, input[type="button"], input[type="submit"]', function (e) {
                var $elem = $(this);
                if (options.dynamicEvents.hasOwnProperty("automatic_event_download")) {
                    var isFired = !1;
                    if ($elem.is('a')) {
                        var href = $elem.attr('href');
                        if (typeof href !== "string") {
                            return
                        }
                        href = href.trim();
                        var extension = Utils.getLinkExtension(href);
                        var track_download = !1;
                        if (extension.length > 0) {
                            if (options.dynamicEvents.hasOwnProperty("automatic_event_download")) {
                                var pixels = Object.keys(options.dynamicEvents.automatic_event_download);
                                for (var i = 0; i < pixels.length; i++) {
                                    var event = Utils.clone(options.dynamicEvents.automatic_event_download[pixels[i]]);
                                    var extensions = event.extensions;
                                    if (extensions.includes(extension)) {
                                        if (pixels[i] == "tiktok") {
                                            getPixelBySlag(pixels[i]).fireEvent(tikEvent.name, event)
                                        } else {
                                            if (options.enable_remove_download_url_param) {
                                                href = href.split('?')[0]
                                            }
                                            event.params.download_url = href;
                                            event.params.download_type = extension;
                                            event.params.download_name = Utils.getLinkFilename(href);
                                            getPixelBySlag(pixels[i]).onDownloadEvent(event)
                                        }
                                        isFired = !0
                                    }
                                }
                            }
                        }
                    }
                    if (isFired) {
                        return
                    }
                }
            })
        }
        $.each(options.triggerEventTypes, function (triggerType, events) {
            $.each(events, function (eventId, triggers) {
                switch (triggerType) {
                    case 'url_click':
                        break;
                    case 'css_click':
                        Utils.setupCSSClickEvents(eventId, triggers);
                        break;
                    case 'css_mouseover':
                        Utils.setupMouseOverClickEvents(eventId, triggers);
                        break;
                    case 'scroll_pos':
                        Utils.setupScrollPosEvents(eventId, triggers);
                        break;
                    case 'comment':
                        Utils.setupCommentEvents(eventId, triggers);
                        break
                }
            })
        });
        if (options.woo.enabled) {
            if (options.dynamicEvents.hasOwnProperty("woo_add_to_cart_on_button_click") && options.woo.hasOwnProperty("addToCartCatchMethod") && options.woo.addToCartCatchMethod === "add_cart_js") {
                $('.add_to_cart_button:not(.product_type_variable,.product_type_bundle,.single_add_to_cart_button)').on("click", function (e) {
                    var product_id = $(this).data('product_id');
                    if (typeof product_id !== 'undefined') {
                        Facebook.onWooAddToCartOnButtonEvent(product_id);
                        Analytics.onWooAddToCartOnButtonEvent(product_id);
                        Pinterest.onWooAddToCartOnButtonEvent(product_id);
                        Bing.onWooAddToCartOnButtonEvent(product_id)
                    }
                });
                $('body').onFirst('click', 'button.single_add_to_cart_button,.single_add_to_cart_button', function (e) {
                    var $button = $(this);
                    if ($button.hasClass('disabled')) {
                        return
                    }
                    var $form = $button.closest('form');
                    var product_type = Utils.PRODUCT_SIMPLE;
                    if ($form.length === 0) {
                        return
                    } else if ($form.hasClass('variations_form')) {
                        product_type = Utils.PRODUCT_VARIABLE
                    } else if ($form.hasClass('bundle_form')) {
                        product_type = Utils.PRODUCT_BUNDLE
                    } else if ($form.hasClass('grouped_form')) {
                        product_type = Utils.PRODUCT_GROUPED
                    }
                    var product_id;
                    var qty;
                    if (product_type === Utils.PRODUCT_GROUPED) {
                        qty = 1;
                        product_id = parseInt($form.find('*[name="add-to-cart"]').val())
                    } else if (product_type === Utils.PRODUCT_VARIABLE) {
                        product_id = parseInt($form.find('*[name="add-to-cart"]').val());
                        var qtyTag = $form.find('input[name="quantity"]');
                        if (qtyTag.length <= 0) {
                            qtyTag = $form.find('select[name="quantity"]')
                        }
                        qty = parseInt(qtyTag.val())
                    } else {
                        product_id = parseInt($form.find('*[name="add-to-cart"]').val());
                        var qtyTag = $form.find('input[name="quantity"]');
                        if (qtyTag.length <= 0) {
                            qtyTag = $form.find('select[name="quantity"]')
                        }
                        qty = parseInt(qtyTag.val())
                    }
                    Facebook.onWooAddToCartOnSingleEvent(product_id, qty, product_type, $form);
                    Analytics.onWooAddToCartOnSingleEvent(product_id, qty, product_type, $form);
                    Pinterest.onWooAddToCartOnSingleEvent(product_id, qty, product_type, !1, $form);
                    Bing.onWooAddToCartOnSingleEvent(product_id, qty, product_type, !1, $form)
                })
            }
            if (options.dynamicEvents.hasOwnProperty("woo_remove_from_cart")) {
                $('body').on('click', options.woo.removeFromCartSelector, function (e) {
                    var $a = $(e.currentTarget)
                        , href = $a.attr('href');
                    var regex = new RegExp("[\\?&]remove_item=([^&#]*)")
                        , results = regex.exec(href);
                    if (results !== null) {
                        var item_hash = results[1];
                        if (options.dynamicEvents.woo_remove_from_cart.hasOwnProperty(item_hash)) {
                            var events = options.dynamicEvents.woo_remove_from_cart[item_hash];
                            Utils.fireEventForAllPixel("onWooRemoveFromCartEvent", events)
                        }
                    }
                })
            }
        }
        if (options.edd.enabled) {
            if (options.dynamicEvents.hasOwnProperty("edd_add_to_cart_on_button_click")) {
                $('form.edd_download_purchase_form .edd-add-to-cart').on("click", function (e) {
                    var $button = $(this);
                    var $form = $button.closest('form');
                    var variable_price = $button.data('variablePrice');
                    var price_mode = $button.data('priceMode');
                    var ids = [];
                    var quantities = [];
                    var qty;
                    var id;
                    if (variable_price === 'yes' && price_mode === 'multi') {
                        id = $form.find('input[name="download_id"]').val();
                        $.each($form.find('input[name="edd_options[price_id][]"]:checked'), function (i, el) {
                            ids.push(id + '_' + $(el).val())
                        });
                        $.each(ids, function (i, variant_id) {
                            var variant_index = variant_id.split('_', 2);
                            qty = $form.find('input[name="edd_download_quantity_' + variant_index[1] + '"]').val();
                            if (typeof qty !== 'undefined') {
                                quantities.push(qty)
                            } else {
                                quantities.push(1)
                            }
                        })
                    } else if (variable_price === 'yes' && price_mode === 'single') {
                        id = $form.find('input[name="download_id"]').val();
                        ids.push(id + '_' + $form.find('input[name="edd_options[price_id][]"]:checked').val());
                        qty = $form.find('input[name="edd_download_quantity"]').val();
                        if (typeof qty !== 'undefined') {
                            quantities.push(qty)
                        } else {
                            quantities.push(1)
                        }
                    } else {
                        ids.push($button.data('downloadId'));
                        qty = $form.find('input[name="edd_download_quantity"]').val();
                        if (typeof qty !== 'undefined') {
                            quantities.push(qty)
                        } else {
                            quantities.push(1)
                        }
                    }
                    $.each(ids, function (i, download_id) {
                        var q = parseInt(quantities[i]);
                        var variant_index = download_id.toString().split('_', 2);
                        var price_index;
                        if (variant_index.length === 2) {
                            download_id = variant_index[0];
                            price_index = variant_index[1]
                        }
                        Facebook.onEddAddToCartOnButtonEvent(download_id, price_index, q);
                        Analytics.onEddAddToCartOnButtonEvent(download_id, price_index, q);
                        Pinterest.onEddAddToCartOnButtonEvent(download_id, price_index, q);
                        Bing.onEddAddToCartOnButtonEvent(download_id, price_index, q)
                    })
                })
            }
            if (options.dynamicEvents.hasOwnProperty("edd_remove_from_cart")) {
                $('form#edd_checkout_cart_form .edd_cart_remove_item_btn').on("click", function (e) {
                    var href = $(this).attr('href');
                    if (href) {
                        var key = href.substring(href.indexOf('=') + 1).charAt(0);
                        if (options.dynamicEvents.edd_remove_from_cart.hasOwnProperty(key)) {
                            var events = options.dynamicEvents.edd_remove_from_cart[key];
                            Utils.fireEventForAllPixel("onEddRemoveFromCartEvent", events)
                        }
                    }
                })
            }
        }
        if (options.dynamicEvents.hasOwnProperty("automatic_event_comment")) {
            $('form.comment-form').on("submit", function () {
                if (options.dynamicEvents.hasOwnProperty("automatic_event_comment")) {
                    var pixels = Object.keys(options.dynamicEvents.automatic_event_comment);
                    for (var i = 0; i < pixels.length; i++) {
                        var event = Utils.clone(options.dynamicEvents.automatic_event_comment[pixels[i]]);
                        Utils.copyProperties(Utils.getRequestParams(), event.params);
                        getPixelBySlag(pixels[i]).onCommentEvent(event)
                    }
                }
            })
        }
        if (options.dynamicEvents.hasOwnProperty("automatic_event_form")) {
            $(document).onFirst('submit', 'form', function (e) {
                var $form = $(this);
                if ($form.hasClass('comment-form') || $form.hasClass('search-form') || $form.attr('id') === 'adminbarsearch') {
                    return
                }
                if ($form.hasClass('woocommerce-product-search') || $form.hasClass('cart') || $form.hasClass('woocommerce-cart-form') || $form.hasClass('woocommerce-shipping-calculator') || $form.hasClass('checkout') || $form.hasClass('checkout_coupon')) {
                    return
                }
                if ($form.hasClass('edd_form') || $form.hasClass('edd_download_purchase_form')) {
                    return
                }
                var params = {
                    form_id: $form.attr('id'),
                    form_class: $form.attr('class'),
                    text: $form.find('[type="submit"]').is('input') ? $form.find('[type="submit"]').val() : $form.find('[type="submit"]').text()
                };
                if (options.dynamicEvents.hasOwnProperty("automatic_event_form")) {
                    var pixels = Object.keys(options.dynamicEvents.automatic_event_form);
                    for (var i = 0; i < pixels.length; i++) {
                        var event = Utils.clone(options.dynamicEvents.automatic_event_form[pixels[i]]);
                        if (pixels[i] === "tiktok") {
                            getPixelBySlag(pixels[i]).fireEvent(event.name, event)
                        } else {
                            Utils.copyProperties(params, event.params,)
                            Utils.copyProperties(Utils.getRequestParams(), event.params);
                            getPixelBySlag(pixels[i]).onFormEvent(event)
                        }
                    }
                }
            });
            $(document).on('forminator:form:submit:success', function (formData) {
                var params = {
                    form_id: $(formData.target).find('input[name="form_id"]').val(),
                    text: $(formData.target).find('.forminator-button-submit').text()
                };
                if (options.dynamicEvents.hasOwnProperty("automatic_event_form")) {
                    var pixels = Object.keys(options.dynamicEvents.automatic_event_form);
                    for (var i = 0; i < pixels.length; i++) {
                        var event = Utils.clone(options.dynamicEvents.automatic_event_form[pixels[i]]);
                        Utils.copyProperties(params, event.params)
                        Utils.copyProperties(Utils.getRequestParams(), event.params);
                        getPixelBySlag(pixels[i]).onFormEvent(event)
                    }
                }
            });
            $(document).onFirst('nfFormSubmitResponse', function (e, data) {
                var params = {
                    form_id: data.response.data.form_id,
                    text: data.response.data.settings.title
                };
                if (options.dynamicEvents.hasOwnProperty("automatic_event_form")) {
                    var pixels = Object.keys(options.dynamicEvents.automatic_event_form);
                    for (var i = 0; i < pixels.length; i++) {
                        var event = options.dynamicEvents.automatic_event_form[pixels[i]];
                        Utils.copyProperties(params, event.params)
                        Utils.copyProperties(Utils.getRequestParams(), event.params);
                        getPixelBySlag(pixels[i]).onFormEvent(event)
                    }
                }
            })
        }
        Utils.loadPixels();
        if (Utils.isCheckoutPage()) {
            Utils.addCheckoutFields()
        }
    })
}(jQuery, pysOptions);
function pys_generate_token(length) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    var b = [];
    for (var i = 0; i < length; i++) {
        var j = (Math.random() * (a.length - 1)).toFixed(0);
        b[i] = a[j]
    }
    return b.join("")
}
function getBundlePriceOnSingleProduct(data) {
    var items_sum = 0;
    jQuery(".bundle_form .bundled_product").each(function (index) {
        var id = jQuery(this).find(".cart").data("bundled_item_id");
        var item_price = data.prices[id];
        var item_quantity = jQuery(this).find(".bundled_qty").val();
        if (!jQuery(this).hasClass("bundled_item_optional") || jQuery(this).find(".bundled_product_optional_checkbox input").prop('checked')) {
            items_sum += item_price * item_quantity
        }
    });
    return items_sum
}
function getPixelBySlag(slug) {
    switch (slug) {
        case "facebook":
            return window.pys.Facebook;
        case "ga":
            return window.pys.Analytics;
        case "bing":
            return window.pys.Bing;
        case "pinterest":
            return window.pys.Pinterest
    }
}
; var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?41003';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = !0;
s.src = url;
var options = {
    "enabled": !0,
    "chatButtonSetting": {
        "backgroundColor": "#4dc247",
        "ctaText": "",
        "borderRadius": "25",
        "marginLeft": "0",
        "marginBottom": "50",
        "marginRight": "50",
        "position": "right"
    },
    "brandSetting": {
        "brandName": "Adymize",
        "brandSubTitle": "Typically replies within a day",
        "brandImg": "",
        "welcomeText": "Hi there!\nHow can I help you?",
        "messageText": "Hello, I have a question.",
        "backgroundColor": "#0a5f54",
        "ctaText": "Start Chat",
        "borderRadius": "5",
        "autoShow": !1,
        "phoneNumber": "916232097553"
    }
};
s.onload = function () {
    CreateWhatsappChatWidget(options)
}
    ;
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);
(() => {
    var e = {
        575: e => {
            e.exports = function _classCallCheck(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
                ,
                e.exports.default = e.exports,
                e.exports.__esModule = !0
        }
        ,
        913: e => {
            function _defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                }
            }
            e.exports = function _createClass(e, t, n) {
                return t && _defineProperties(e.prototype, t),
                    n && _defineProperties(e, n),
                    e
            }
                ,
                e.exports.default = e.exports,
                e.exports.__esModule = !0
        }
        ,
        318: e => {
            e.exports = function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
                ,
                e.exports.default = e.exports,
                e.exports.__esModule = !0
        }
    }
        , t = {};
    function __webpack_require__(n) {
        var r = t[n];
        if (void 0 !== r)
            return r.exports;
        var o = t[n] = {
            exports: {}
        };
        return e[n](o, o.exports, __webpack_require__),
            o.exports
    }
    (() => {
        "use strict";
        var e = __webpack_require__(318)
            , t = e(__webpack_require__(575))
            , n = e(__webpack_require__(913))
            , r = function () {
                function elementorHelloThemeHandler() {
                    (0,
                        t.default)(this, elementorHelloThemeHandler),
                        this.initSettings(),
                        this.initElements(),
                        this.bindEvents()
                }
                return (0,
                    n.default)(elementorHelloThemeHandler, [{
                        key: "initSettings",
                        value: function initSettings() {
                            this.settings = {
                                selectors: {
                                    header: "header.site-header",
                                    footer: "footer.site-footer",
                                    menuToggle: ".site-header .site-navigation-toggle",
                                    menuToggleHolder: ".site-header .site-navigation-toggle-holder",
                                    dropdownMenu: ".site-header .site-navigation-dropdown"
                                }
                            }
                        }
                    }, {
                        key: "initElements",
                        value: function initElements() {
                            this.elements = {
                                $window: jQuery(window),
                                $document: jQuery(document),
                                $header: jQuery(this.settings.selectors.header),
                                $footer: jQuery(this.settings.selectors.footer),
                                $menuToggle: jQuery(this.settings.selectors.menuToggle),
                                $menuToggleHolder: jQuery(this.settings.selectors.menuToggleHolder),
                                $dropdownMenu: jQuery(this.settings.selectors.dropdownMenu)
                            }
                        }
                    }, {
                        key: "bindEvents",
                        value: function bindEvents() {
                            var e = this;
                            this.elements.$menuToggle.on("click", (function () {
                                return e.handleMenuToggle()
                            }
                            )),
                                this.elements.$dropdownMenu.on("click", ".menu-item-has-children > a", this.handleMenuChildren)
                        }
                    }, {
                        key: "closeMenuItems",
                        value: function closeMenuItems() {
                            var e = this;
                            this.elements.$menuToggleHolder.removeClass("elementor-active"),
                                this.elements.$window.off("resize", (function () {
                                    return e.closeMenuItems()
                                }
                                ))
                        }
                    }, {
                        key: "handleMenuToggle",
                        value: function handleMenuToggle() {
                            var e = this
                                , t = !this.elements.$menuToggleHolder.hasClass("elementor-active");
                            this.elements.$menuToggle.attr("aria-expanded", t),
                                this.elements.$dropdownMenu.attr("aria-hidden", !t),
                                this.elements.$menuToggleHolder.toggleClass("elementor-active", t),
                                this.elements.$dropdownMenu.find(".elementor-active").removeClass("elementor-active"),
                                t ? this.elements.$window.on("resize", (function () {
                                    return e.closeMenuItems()
                                }
                                )) : this.elements.$window.off("resize", (function () {
                                    return e.closeMenuItems()
                                }
                                ))
                        }
                    }, {
                        key: "handleMenuChildren",
                        value: function handleMenuChildren(e) {
                            var t = jQuery(e.currentTarget).parent("li");
                            t.hasClass("elementor-active") ? t.removeClass("elementor-active") : t.addClass("elementor-active")
                        }
                    }]),
                    elementorHelloThemeHandler
            }();
        jQuery((function () {
            new r
        }
        ))
    }
    )()
}
)();
'use strict';
(function ($, w) {
    var $window = $(w);
    $window.on('elementor/frontend/init', function () {
        var SectionExtends = elementorModules.frontend.handlers.Base.extend({
            onInit: function onInit() {
                elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
                this.initSectionExtends()
            },
            isBreakingBad: function () {
                return this.$element.hasClass('ob-is-breaking-bad')
            },
            isInnerSection: function () {
                return this.$element.hasClass('elementor-inner-section')
            },
            onElementChange: function (changedProp) {
                if (changedProp === '_ob_bbad_use_it') {
                    if ('yes' === this.getElementSettings('_ob_bbad_use_it')) {
                        this.$element.addClass('ob-is-breaking-bad');
                        if (this.isInnerSection())
                            this.$element.addClass('ob-bb-inner')
                    } else {
                        this.$element.removeClass('ob-is-breaking-bad');
                        if (this.isInnerSection())
                            this.$element.removeClass('ob-bb-inner')
                    }
                }
                if (changedProp === '_ob_bbad_sssic_use' && this.isInnerSection()) {
                    if ('yes' === this.getElementSettings('_ob_bbad_sssic_use'))
                        this.$element.addClass('ob-is-sticky-inner-section');
                    else
                        this.$element.removeClass('ob-is-sticky-inner-section')
                }
            },
            initSectionExtends: function () {
                if (this.isEdit) {
                    if ('yes' === this.getElementSettings('_ob_bbad_use_it') && !this.isBreakingBad()) {
                        this.$element.addClass('ob-is-breaking-bad');
                        if (this.isInnerSection())
                            this.$element.addClass('ob-bb-inner')
                    }
                }
                if ('yes' === this.getElementSettings('_ob_bbad_sssic_use') && this.isInnerSection()) {
                    if (this.isEdit)
                        this.$element.addClass('ob-is-sticky-inner-section');
                    var parent_wrapper = this.$element.closest('.elementor-widget-wrap');
                    if (parent_wrapper.length)
                        parent_wrapper.addClass('ob-sssic-wrapper')
                }
            },
        });
        var ColumnExtends = elementorModules.frontend.handlers.Base.extend({
            onInit: function onInit() {
                elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
                if (!this.$element.find('.elementor-column-wrap').first().length)
                    this.$element.addClass('ob-is-e3');
                var ua = navigator.userAgent.toLowerCase();
                if (ua.indexOf('chrome') > -1)
                    this.teleporterChromeResize();
                this.initColumnExtends()
            },
            teleporterChromeResize: function () {
                if (!this.isTeleporter())
                    return;
                var dis = this;
                var myID = this.$element.attr('data-id');
                $window.on('resize', function () {
                    dis.$element.closest('.ob-is-teleporter').addClass('ob-chrome-resize');
                    clearTimeout(myID);
                    myID = setTimeout(function () {
                        var column_height = parseInt(dis.$element.closest('.ob-is-teleporter').css('height'));
                        var col_wrap = dis.$element.find('.elementor-column-wrap').first();
                        if (col_wrap.length)
                            col_wrap.css({
                                'height': column_height
                            });
                        else {
                            dis.$element.find('.elementor-widget-wrap').first().css({
                                'height': column_height
                            })
                        }
                        dis.$element.closest('.ob-is-teleporter').removeClass('ob-chrome-resize')
                    }, 500)
                });
                $window.trigger('resize')
            },
            isTeleporter: function () {
                return this.$element.hasClass('ob-is-teleporter')
            },
            isWidgetStalkerCol: function () {
                return this.$element.hasClass('ob-is-stalker')
            },
            initColumnExtends: function () {
                if (!this.isEdit) {
                    var bb_settings = {};
                    try {
                        bb_settings = JSON.parse(this.$element.attr('data-settings'))
                    } catch (error) {
                        return
                    }
                    if (undefined !== bb_settings._ob_bbad_link) {
                        var bb_link = bb_settings._ob_bbad_link;
                        if ('' === bb_link.url) {
                            this.$element.removeClass('bb-column-link');
                            return
                        } else {
                            this.$element.addClass('bb-column-link')
                        }
                        this.$element.off('click.bb');
                        this.$element.on('click.bb', function () {
                            if (bb_link.is_external)
                                window.open(bb_link.url);
                            else
                                location.href = bb_link.url
                        })
                    }
                }
                if (this.isEdit && 'use-teleporter' === this.getElementSettings('_ob_teleporter_use')) {
                    this.$element.addClass('ob-is-teleporter');
                    this.$element.find('.elementor-widget-wrap').first().addClass('ob-tele-midget');
                    this.doTeleporterEditor()
                }
                if (!this.isEdit && this.isTeleporter()) {
                    this.$element.find('.elementor-widget-wrap').first().addClass('ob-tele-midget');
                    this.doTeleporter()
                }
                if (this.isEdit && 'yes' === this.getElementSettings('_ob_bbad_is_stalker')) {
                    this.$element.addClass('ob-is-stalker')
                }
            },
            onElementChange: function (changedProp) {
                if (changedProp === '_ob_teleporter_overlay_color') {
                    this.$element.find('div[class*="ob-teleporter-"] > .ob-tele-overlay').css('background-color', this.getElementSettings('_ob_teleporter_overlay_color'))
                } else if (changedProp === '_ob_teleporter_no_pass_tablet') {
                    if ('no-tablet' === this.getElementSettings('_ob_teleporter_no_pass_tablet'))
                        this.$element.addClass('ob-tele-no-tablet');
                    else
                        this.$element.removeClass('ob-tele-no-tablet')
                } else if (changedProp === '_ob_teleporter_no_pass_mobile') {
                    if ('no-mobile' === this.getElementSettings('_ob_teleporter_no_pass_mobile'))
                        this.$element.addClass('ob-tele-no-mobile');
                    else
                        this.$element.removeClass('ob-tele-no-mobile')
                }
                if (changedProp === '_ob_bbad_is_stalker') {
                    this.routeWidgetStalkerCol()
                }
            },
            routeWidgetStalkerCol: function () {
                if (!this.isWidgetStalkerCol() && 'yes' === this.getElementSettings('_ob_bbad_is_stalker'))
                    this.$element.addClass('ob-is-stalker');
                else
                    this.$element.removeClass('ob-is-stalker')
            },
            doTeleporterEditor: function () {
                if ('use-teleporter' !== this.getElementSettings('_ob_teleporter_use'))
                    return;
                var widgets_wrapper = this.$element.find('.elementor-widget-wrap').first();
                if (widgets_wrapper.length) {
                    widgets_wrapper.wrapInner('<div class="widget-wrap-children" />');
                    if (widgets_wrapper.find('.elementor-background-overlay').first().length) {
                        widgets_wrapper.find('.elementor-background-overlay').first().insertBefore(widgets_wrapper.find('.elementor-background-overlay').first().parent())
                    }
                }
                if ('do-pass' !== this.getElementSettings('_ob_teleporter_pass'))
                    return;
                var this_ob = this;
                var myself = this.$element;
                var my_id = this.$element.attr('data-id');
                if ('no-tablet' === this.getElementSettings('_ob_teleporter_no_pass_tablet'))
                    this.$element.addClass('ob-tele-no-tablet');
                if ('no-mobile' === this.getElementSettings('_ob_teleporter_no_pass_mobile'))
                    this.$element.addClass('ob-tele-no-mobile');
                var parent_section = ('section' === this.getElementSettings('_ob_teleporter_pass_element')) ? this.$element.closest('.elementor-section') : this.$element.closest('.elementor-container');
                if (!parent_section.length)
                    return;
                parent_section.css('overflow', 'hidden');
                var hover_effect = this.getElementSettings('_ob_teleporter_pass_effect');
                var hover_element = '<div class="ob-teleporter-' + my_id + ' ob-tele-eff-' + hover_effect + '" data-id-teleporter="' + my_id + '"><div class="ob-tele-overlay" style="background-color: ' + this.getElementSettings('_ob_teleporter_overlay_color') + ';"></div></div>';
                if (!$('.ob-teleporter-' + my_id).length)
                    this.$element.prepend(hover_element);
                this.$element.off('mouseenter mouseleave');
                this.$element.on('mouseenter mouseleave', function (ev) {
                    if ('mouseenter' === ev.type) {
                        if ('no-tablet' === this_ob.getElementSettings('_ob_teleporter_no_pass_tablet') && 'tablet' === elementorFrontend.getCurrentDeviceMode())
                            return;
                        if ('no-mobile' === this_ob.getElementSettings('_ob_teleporter_no_pass_mobile') && 'mobile' === elementorFrontend.getCurrentDeviceMode())
                            return;
                        if ('do-pass' !== this_ob.getElementSettings('_ob_teleporter_pass'))
                            return;
                        var tele_css = {
                            'background-color': $('.ob-teleporter-' + my_id).css('background-color'),
                            'background-image': $('.ob-teleporter-' + my_id).css('background-image'),
                            'background-position': $('.ob-teleporter-' + my_id).css('background-position'),
                            'background-size': $('.ob-teleporter-' + my_id).css('background-size'),
                            'background-repeat': $('.ob-teleporter-' + my_id).css('background-repeat')
                        };
                        if ('section' === this_ob.getElementSettings('_ob_teleporter_pass_element')) {
                            var all_children = parent_section.children().not('.elementor-container').detach();
                            parent_section.addClass('ob-tele-mom-hover').prepend($('.ob-teleporter-' + my_id));
                            parent_section.prepend(all_children)
                        } else {
                            parent_section.addClass('ob-tele-mom-hover').prepend($('.ob-teleporter-' + my_id))
                        }
                        $('.ob-teleporter-' + my_id).css(tele_css).hide();
                        $('.ob-teleporter-' + my_id).addClass('ob-teleporter-hover').show()
                    } else {
                        parent_section.removeClass('ob-tele-mom-hover');
                        setTimeout(function () {
                            $('.ob-teleporter-' + my_id).removeAttr('style').removeClass('ob-teleporter-hover');
                            myself.prepend($('.ob-teleporter-' + my_id))
                        }, 100)
                    }
                })
            },
            doTeleporter: function () {
                var teleporter_settings = {};
                try {
                    teleporter_settings = JSON.parse(this.$element.attr('data-settings'))
                } catch (error) {
                    return
                }
                if ('use-teleporter' !== teleporter_settings._ob_teleporter_use)
                    return;
                var widgets_wrapper = this.$element.find('.elementor-widget-wrap').first();
                if (widgets_wrapper.length) {
                    widgets_wrapper.wrapInner('<div class="widget-wrap-children" />');
                    if (widgets_wrapper.find('.elementor-background-overlay').first().length) {
                        widgets_wrapper.find('.elementor-background-overlay').first().insertBefore(widgets_wrapper.find('.elementor-background-overlay').first().parent())
                    }
                }
                var myself = this.$element;
                var my_id = this.$element.attr('data-id');
                if ('no-tablet' === teleporter_settings._ob_teleporter_no_pass_tablet)
                    this.$element.addClass('ob-tele-no-tablet');
                if ('no-mobile' === teleporter_settings._ob_teleporter_no_pass_mobile)
                    this.$element.addClass('ob-tele-no-mobile');
                if (undefined !== teleporter_settings._ob_teleporter_link) {
                    var tele_link = teleporter_settings._ob_teleporter_link;
                    if ('' === tele_link.url)
                        return;
                    this.$element.off('click.obTeleporter');
                    this.$element.on('click.obTeleporter', function () {
                        if (tele_link.is_external)
                            window.open(tele_link.url);
                        else
                            location.href = tele_link.url
                    })
                }
                if ('do-pass' !== teleporter_settings._ob_teleporter_pass)
                    return;
                var parent_section = ('section' === teleporter_settings._ob_teleporter_pass_element) ? this.$element.closest('.elementor-section') : this.$element.closest('.elementor-container');
                if (!parent_section.length)
                    return;
                parent_section.css('overflow', 'hidden');
                var hover_effect = teleporter_settings._ob_teleporter_pass_effect;
                var hover_element = '<div class="ob-teleporter-' + my_id + ' ob-tele-eff-' + hover_effect + '" data-id-teleporter="' + my_id + '"><div class="ob-tele-overlay" style="background-color: ' + teleporter_settings._ob_teleporter_overlay_color + ';"></div>';
                if (!$('.ob-teleporter-' + my_id).length)
                    this.$element.prepend(hover_element);
                this.$element.off('mouseenter mouseleave');
                this.$element.on('mouseenter', function () {
                    if ('no-tablet' === teleporter_settings._ob_teleporter_no_pass_tablet && 'tablet' === elementorFrontend.getCurrentDeviceMode())
                        return;
                    if ('no-mobile' === teleporter_settings._ob_teleporter_no_pass_mobile && 'mobile' === elementorFrontend.getCurrentDeviceMode())
                        return;
                    var tele_css = {
                        'background-color': $('.ob-teleporter-' + my_id).css('background-color'),
                        'background-image': $('.ob-teleporter-' + my_id).css('background-image'),
                        'background-position': $('.ob-teleporter-' + my_id).css('background-position'),
                        'background-size': $('.ob-teleporter-' + my_id).css('background-size'),
                        'background-repeat': $('.ob-teleporter-' + my_id).css('background-repeat')
                    };
                    if ('section' === teleporter_settings._ob_teleporter_pass_element) {
                        var all_children = parent_section.children().not('.elementor-container').detach();
                        parent_section.addClass('ob-tele-mom-hover').prepend($('.ob-teleporter-' + my_id));
                        parent_section.prepend(all_children)
                    } else
                        parent_section.addClass('ob-tele-mom-hover').prepend($('.ob-teleporter-' + my_id));
                    $('.ob-teleporter-' + my_id).css(tele_css).hide();
                    $('.ob-teleporter-' + my_id).show().addClass('ob-teleporter-hover')
                });
                this.$element.on('mouseleave', function () {
                    parent_section.removeClass('ob-tele-mom-hover');
                    setTimeout(function () {
                        $('.ob-teleporter-' + my_id).removeAttr('style').removeClass('ob-teleporter-hover');
                        myself.prepend($('.ob-teleporter-' + my_id))
                    }, 100)
                })
            },
        });
        var handlersList = {
            'section': SectionExtends,
            'column': ColumnExtends,
        };
        $.each(handlersList, function (widgetName, handlerClass) {
            elementorFrontend.hooks.addAction('frontend/element_ready/' + widgetName, function ($scope) {
                elementorFrontend.elementsHandler.addHandler(handlerClass, {
                    $element: $scope
                })
            })
        })
    })
}(jQuery, window));
/*!This file is auto-generated*/
/*!
* imagesLoaded PACKAGED v4.1.4
* JavaScript is all like "You images are done yet or what?"
* MIT License
*/
!function (e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function () {
    function e() { }
    var t = e.prototype;
    return t.on = function (e, t) {
        if (e && t) {
            var i = this._events = this._events || {}
                , n = i[e] = i[e] || [];
            return n.indexOf(t) == -1 && n.push(t),
                this
        }
    }
        ,
        t.once = function (e, t) {
            if (e && t) {
                this.on(e, t);
                var i = this._onceEvents = this._onceEvents || {}
                    , n = i[e] = i[e] || {};
                return n[t] = !0,
                    this
            }
        }
        ,
        t.off = function (e, t) {
            var i = this._events && this._events[e];
            if (i && i.length) {
                var n = i.indexOf(t);
                return n != -1 && i.splice(n, 1),
                    this
            }
        }
        ,
        t.emitEvent = function (e, t) {
            var i = this._events && this._events[e];
            if (i && i.length) {
                i = i.slice(0),
                    t = t || [];
                for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
                    var r = i[o]
                        , s = n && n[r];
                    s && (this.off(e, r),
                        delete n[r]),
                        r.apply(this, t)
                }
                return this
            }
        }
        ,
        t.allOff = function () {
            delete this._events,
                delete this._onceEvents
        }
        ,
        e
}),
    function (e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (i) {
            return t(e, i)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
    }("undefined" != typeof window ? window : this, function (e, t) {
        function i(e, t) {
            for (var i in t)
                e[i] = t[i];
            return e
        }
        function n(e) {
            if (Array.isArray(e))
                return e;
            var t = "object" == typeof e && "number" == typeof e.length;
            return t ? d.call(e) : [e]
        }
        function o(e, t, r) {
            if (!(this instanceof o))
                return new o(e, t, r);
            var s = e;
            return "string" == typeof e && (s = document.querySelectorAll(e)),
                s ? (this.elements = n(s),
                    this.options = i({}, this.options),
                    "function" == typeof t ? r = t : i(this.options, t),
                    r && this.on("always", r),
                    this.getImages(),
                    h && (this.jqDeferred = new h.Deferred),
                    void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e))
        }
        function r(e) {
            this.img = e
        }
        function s(e, t) {
            this.url = e,
                this.element = t,
                this.img = new Image
        }
        var h = e.jQuery
            , a = e.console
            , d = Array.prototype.slice;
        o.prototype = Object.create(t.prototype),
            o.prototype.options = {},
            o.prototype.getImages = function () {
                this.images = [],
                    this.elements.forEach(this.addElementImages, this)
            }
            ,
            o.prototype.addElementImages = function (e) {
                "IMG" == e.nodeName && this.addImage(e),
                    this.options.background === !0 && this.addElementBackgroundImages(e);
                var t = e.nodeType;
                if (t && u[t]) {
                    for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                        var o = i[n];
                        this.addImage(o)
                    }
                    if ("string" == typeof this.options.background) {
                        var r = e.querySelectorAll(this.options.background);
                        for (n = 0; n < r.length; n++) {
                            var s = r[n];
                            this.addElementBackgroundImages(s)
                        }
                    }
                }
            }
            ;
        var u = {
            1: !0,
            9: !0,
            11: !0
        };
        return o.prototype.addElementBackgroundImages = function (e) {
            var t = getComputedStyle(e);
            if (t)
                for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
                    var o = n && n[2];
                    o && this.addBackground(o, e),
                        n = i.exec(t.backgroundImage)
                }
        }
            ,
            o.prototype.addImage = function (e) {
                var t = new r(e);
                this.images.push(t)
            }
            ,
            o.prototype.addBackground = function (e, t) {
                var i = new s(e, t);
                this.images.push(i)
            }
            ,
            o.prototype.check = function () {
                function e(e, i, n) {
                    setTimeout(function () {
                        t.progress(e, i, n)
                    })
                }
                var t = this;
                return this.progressedCount = 0,
                    this.hasAnyBroken = !1,
                    this.images.length ? void this.images.forEach(function (t) {
                        t.once("progress", e),
                            t.check()
                    }) : void this.complete()
            }
            ,
            o.prototype.progress = function (e, t, i) {
                this.progressedCount++,
                    this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded,
                    this.emitEvent("progress", [this, e, t]),
                    this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e),
                    this.progressedCount == this.images.length && this.complete(),
                    this.options.debug && a && a.log("progress: " + i, e, t)
            }
            ,
            o.prototype.complete = function () {
                var e = this.hasAnyBroken ? "fail" : "done";
                if (this.isComplete = !0,
                    this.emitEvent(e, [this]),
                    this.emitEvent("always", [this]),
                    this.jqDeferred) {
                    var t = this.hasAnyBroken ? "reject" : "resolve";
                    this.jqDeferred[t](this)
                }
            }
            ,
            r.prototype = Object.create(t.prototype),
            r.prototype.check = function () {
                var e = this.getIsImageComplete();
                return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
                    this.proxyImage.addEventListener("load", this),
                    this.proxyImage.addEventListener("error", this),
                    this.img.addEventListener("load", this),
                    this.img.addEventListener("error", this),
                    void (this.proxyImage.src = this.img.src))
            }
            ,
            r.prototype.getIsImageComplete = function () {
                return this.img.complete && this.img.naturalWidth
            }
            ,
            r.prototype.confirm = function (e, t) {
                this.isLoaded = e,
                    this.emitEvent("progress", [this, this.img, t])
            }
            ,
            r.prototype.handleEvent = function (e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            }
            ,
            r.prototype.onload = function () {
                this.confirm(!0, "onload"),
                    this.unbindEvents()
            }
            ,
            r.prototype.onerror = function () {
                this.confirm(!1, "onerror"),
                    this.unbindEvents()
            }
            ,
            r.prototype.unbindEvents = function () {
                this.proxyImage.removeEventListener("load", this),
                    this.proxyImage.removeEventListener("error", this),
                    this.img.removeEventListener("load", this),
                    this.img.removeEventListener("error", this)
            }
            ,
            s.prototype = Object.create(r.prototype),
            s.prototype.check = function () {
                this.img.addEventListener("load", this),
                    this.img.addEventListener("error", this),
                    this.img.src = this.url;
                var e = this.getIsImageComplete();
                e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
                    this.unbindEvents())
            }
            ,
            s.prototype.unbindEvents = function () {
                this.img.removeEventListener("load", this),
                    this.img.removeEventListener("error", this)
            }
            ,
            s.prototype.confirm = function (e, t) {
                this.isLoaded = e,
                    this.emitEvent("progress", [this, this.element, t])
            }
            ,
            o.makeJQueryPlugin = function (t) {
                t = t || e.jQuery,
                    t && (h = t,
                        h.fn.imagesLoaded = function (e, t) {
                            var i = new o(this, e, t);
                            return i.jqDeferred.promise(h(this))
                        }
                    )
            }
            ,
            o.makeJQueryPlugin(),
            o
    });
/*!elementor-pro - v3.4.2 - 12-10-2021*/
(() => {
    "use strict";
    var e, r, _, a = {}, i = {};
    function __webpack_require__(e) {
        var r = i[e];
        if (void 0 !== r)
            return r.exports;
        var _ = i[e] = {
            exports: {}
        };
        return a[e](_, _.exports, __webpack_require__),
            _.exports
    }
    __webpack_require__.m = a,
        e = [],
        __webpack_require__.O = (r, _, a, i) => {
            if (!_) {
                var n = 1 / 0;
                for (o = 0; o < e.length; o++) {
                    for (var [_, a, i] = e[o], t = !0, c = 0; c < _.length; c++)
                        (!1 & i || n >= i) && Object.keys(__webpack_require__.O).every((e => __webpack_require__.O[e](_[c]))) ? _.splice(c--, 1) : (t = !1,
                            i < n && (n = i));
                    if (t) {
                        e.splice(o--, 1);
                        var u = a();
                        void 0 !== u && (r = u)
                    }
                }
                return r
            }
            i = i || 0;
            for (var o = e.length; o > 0 && e[o - 1][2] > i; o--)
                e[o] = e[o - 1];
            e[o] = [_, a, i]
        }
        ,
        __webpack_require__.f = {},
        __webpack_require__.e = e => Promise.all(Object.keys(__webpack_require__.f).reduce(((r, _) => (__webpack_require__.f[_](e, r),
            r)), [])),
        __webpack_require__.u = e => 714 === e ? "code-highlight.dc74fd78a051eda07b3a.bundle.min.js" : 721 === e ? "video-playlist.b442680ac5bf7b46b7c3.bundle.min.js" : 256 === e ? "paypal-button.21471ef12592606560a0.bundle.min.js" : 26 === e ? "animated-headline.37960d9fb9ab8b6e43cd.bundle.min.js" : 534 === e ? "media-carousel.15b78f70034df8ffebad.bundle.min.js" : 369 === e ? "carousel.6a71b6c6e34400c456a5.bundle.min.js" : 804 === e ? "countdown.71f117e09cc4a2aa3dba.bundle.min.js" : 888 === e ? "hotspot.ba3b762edc3da9c7a076.bundle.min.js" : 680 === e ? "form.0fc25ba6639255b98660.bundle.min.js" : 121 === e ? "gallery.6af8f19f91f1b16c3ab6.bundle.min.js" : 288 === e ? "lottie.b83968ecec2e4fd1b62c.bundle.min.js" : 42 === e ? "nav-menu.fd64b77e7258ee4c6205.bundle.min.js" : 50 === e ? "popup.7b71aedb401104b93788.bundle.min.js" : 985 === e ? "load-more.5f24d086730c704d2314.bundle.min.js" : 287 === e ? "posts.2a35b76ad8ea8f612cd7.bundle.min.js" : 824 === e ? "portfolio.c214590e93207960ce64.bundle.min.js" : 58 === e ? "share-buttons.42abb737a0de191a4ee9.bundle.min.js" : 114 === e ? "slides.39da68ee3c8123589b2e.bundle.min.js" : 443 === e ? "social.787445e9f143597c5be5.bundle.min.js" : 838 === e ? "table-of-contents.f5cd05278297a9d229e1.bundle.min.js" : 685 === e ? "archive-posts.c3694683a03701a4b510.bundle.min.js" : 858 === e ? "search-form.e36b4b7c26157bb965fe.bundle.min.js" : 102 === e ? "woocommerce-menu-cart.4c85f15cfbc02b4718c9.bundle.min.js" : void 0,
        __webpack_require__.g = function () {
            if ("object" == typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window)
                    return window
            }
        }(),
        __webpack_require__.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r),
        r = {},
        _ = "elementor-pro:",
        __webpack_require__.l = (e, a, i, n) => {
            if (r[e])
                r[e].push(a);
            else {
                var t, c;
                if (void 0 !== i)
                    for (var u = document.getElementsByTagName("script"), o = 0; o < u.length; o++) {
                        var b = u[o];
                        if (b.getAttribute("src") == e || b.getAttribute("data-webpack") == _ + i) {
                            t = b;
                            break
                        }
                    }
                t || (c = !0,
                    (t = document.createElement("script")).charset = "utf-8",
                    t.timeout = 120,
                    __webpack_require__.nc && t.setAttribute("nonce", __webpack_require__.nc),
                    t.setAttribute("data-webpack", _ + i),
                    t.src = e),
                    r[e] = [a];
                var onScriptComplete = (_, a) => {
                    t.onerror = t.onload = null,
                        clearTimeout(l);
                    var i = r[e];
                    if (delete r[e],
                        t.parentNode && t.parentNode.removeChild(t),
                        i && i.forEach((e => e(a))),
                        _)
                        return _(a)
                }
                    , l = setTimeout(onScriptComplete.bind(null, void 0, {
                        type: "timeout",
                        target: t
                    }), 12e4);
                t.onerror = onScriptComplete.bind(null, t.onerror),
                    t.onload = onScriptComplete.bind(null, t.onload),
                    c && document.head.appendChild(t)
            }
        }
        ,
        (() => {
            var e;
            __webpack_require__.g.importScripts && (e = __webpack_require__.g.location + "");
            var r = __webpack_require__.g.document;
            if (!e && r && (r.currentScript && (e = r.currentScript.src),
                !e)) {
                var _ = r.getElementsByTagName("script");
                _.length && (e = _[_.length - 1].src)
            }
            if (!e)
                throw new Error("Automatic publicPath is not supported in this browser");
            e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
                __webpack_require__.p = e
        }
        )(),
        (() => {
            var e = {
                396: 0
            };
            __webpack_require__.f.j = (r, _) => {
                var a = __webpack_require__.o(e, r) ? e[r] : void 0;
                if (0 !== a)
                    if (a)
                        _.push(a[2]);
                    else if (396 != r) {
                        var i = new Promise(((_, i) => a = e[r] = [_, i]));
                        _.push(a[2] = i);
                        var n = __webpack_require__.p + __webpack_require__.u(r)
                            , t = new Error;
                        __webpack_require__.l(n, (_ => {
                            if (__webpack_require__.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0),
                                a)) {
                                var i = _ && ("load" === _.type ? "missing" : _.type)
                                    , n = _ && _.target && _.target.src;
                                t.message = "Loading chunk " + r + " failed.\n(" + i + ": " + n + ")",
                                    t.name = "ChunkLoadError",
                                    t.type = i,
                                    t.request = n,
                                    a[1](t)
                            }
                        }
                        ), "chunk-" + r, r)
                    } else
                        e[r] = 0
            }
                ,
                __webpack_require__.O.j = r => 0 === e[r];
            var webpackJsonpCallback = (r, _) => {
                var a, i, [n, t, c] = _, u = 0;
                for (a in t)
                    __webpack_require__.o(t, a) && (__webpack_require__.m[a] = t[a]);
                if (c)
                    var o = c(__webpack_require__);
                for (r && r(_); u < n.length; u++)
                    i = n[u],
                        __webpack_require__.o(e, i) && e[i] && e[i][0](),
                        e[n[u]] = 0;
                return __webpack_require__.O(o)
            }
                , r = self.webpackChunkelementor_pro = self.webpackChunkelementor_pro || [];
            r.forEach(webpackJsonpCallback.bind(null, 0)),
                r.push = webpackJsonpCallback.bind(null, r.push.bind(r))
        }
        )()
}
)();
/*!elementor - v3.5.2 - 22-12-2021*/
(() => {
    "use strict";
    var e, r, _, t, a, i = {}, n = {};
    function __webpack_require__(e) {
        var r = n[e];
        if (void 0 !== r)
            return r.exports;
        var _ = n[e] = {
            exports: {}
        };
        return i[e](_, _.exports, __webpack_require__),
            _.exports
    }
    __webpack_require__.m = i,
        e = [],
        __webpack_require__.O = (r, _, t, a) => {
            if (!_) {
                var i = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [_, t, a] = e[u], n = !0, c = 0; c < _.length; c++)
                        (!1 & a || i >= a) && Object.keys(__webpack_require__.O).every((e => __webpack_require__.O[e](_[c]))) ? _.splice(c--, 1) : (n = !1,
                            a < i && (i = a));
                    if (n) {
                        e.splice(u--, 1);
                        var o = t();
                        void 0 !== o && (r = o)
                    }
                }
                return r
            }
            a = a || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > a; u--)
                e[u] = e[u - 1];
            e[u] = [_, t, a]
        }
        ,
        _ = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__,
        __webpack_require__.t = function (e, t) {
            if (1 & t && (e = this(e)),
                8 & t)
                return e;
            if ("object" == typeof e && e) {
                if (4 & t && e.__esModule)
                    return e;
                if (16 & t && "function" == typeof e.then)
                    return e
            }
            var a = Object.create(null);
            __webpack_require__.r(a);
            var i = {};
            r = r || [null, _({}), _([]), _(_)];
            for (var n = 2 & t && e; "object" == typeof n && !~r.indexOf(n); n = _(n))
                Object.getOwnPropertyNames(n).forEach((r => i[r] = () => e[r]));
            return i.default = () => e,
                __webpack_require__.d(a, i),
                a
        }
        ,
        __webpack_require__.d = (e, r) => {
            for (var _ in r)
                __webpack_require__.o(r, _) && !__webpack_require__.o(e, _) && Object.defineProperty(e, _, {
                    enumerable: !0,
                    get: r[_]
                })
        }
        ,
        __webpack_require__.f = {},
        __webpack_require__.e = e => Promise.all(Object.keys(__webpack_require__.f).reduce(((r, _) => (__webpack_require__.f[_](e, r),
            r)), [])),
        __webpack_require__.u = e => 723 === e ? "lightbox.23e39ac2830dfb4ca6a7.bundle.min.js" : 48 === e ? "text-path.9f18ebdea5ac00d653e5.bundle.min.js" : 209 === e ? "accordion.fb811bbb2beff11fae3c.bundle.min.js" : 745 === e ? "alert.cbc2a0fee74ee3ed0419.bundle.min.js" : 120 === e ? "counter.02cef29c589e742d4c8c.bundle.min.js" : 192 === e ? "progress.ca55d33bb06cee4e6f02.bundle.min.js" : 520 === e ? "tabs.50864c9249aa8a87126a.bundle.min.js" : 181 === e ? "toggle.0b9ce025bedc8ed28c59.bundle.min.js" : 791 === e ? "video.1a44ef088849d6949ada.bundle.min.js" : 268 === e ? "image-carousel.bd7aab19c9d934b7c505.bundle.min.js" : 357 === e ? "text-editor.289ae80d76f0c5abea44.bundle.min.js" : 52 === e ? "wp-audio.75f0ced143febb8cd31a.bundle.min.js" : void 0,
        __webpack_require__.g = function () {
            if ("object" == typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window)
                    return window
            }
        }(),
        __webpack_require__.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r),
        t = {},
        a = "elementor:",
        __webpack_require__.l = (e, r, _, i) => {
            if (t[e])
                t[e].push(r);
            else {
                var n, c;
                if (void 0 !== _)
                    for (var o = document.getElementsByTagName("script"), u = 0; u < o.length; u++) {
                        var b = o[u];
                        if (b.getAttribute("src") == e || b.getAttribute("data-webpack") == a + _) {
                            n = b;
                            break
                        }
                    }
                n || (c = !0,
                    (n = document.createElement("script")).charset = "utf-8",
                    n.timeout = 120,
                    __webpack_require__.nc && n.setAttribute("nonce", __webpack_require__.nc),
                    n.setAttribute("data-webpack", a + _),
                    n.src = e),
                    t[e] = [r];
                var onScriptComplete = (r, _) => {
                    n.onerror = n.onload = null,
                        clearTimeout(p);
                    var a = t[e];
                    if (delete t[e],
                        n.parentNode && n.parentNode.removeChild(n),
                        a && a.forEach((e => e(_))),
                        r)
                        return r(_)
                }
                    , p = setTimeout(onScriptComplete.bind(null, void 0, {
                        type: "timeout",
                        target: n
                    }), 12e4);
                n.onerror = onScriptComplete.bind(null, n.onerror),
                    n.onload = onScriptComplete.bind(null, n.onload),
                    c && document.head.appendChild(n)
            }
        }
        ,
        __webpack_require__.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        (() => {
            var e;
            __webpack_require__.g.importScripts && (e = __webpack_require__.g.location + "");
            var r = __webpack_require__.g.document;
            if (!e && r && (r.currentScript && (e = r.currentScript.src),
                !e)) {
                var _ = r.getElementsByTagName("script");
                _.length && (e = _[_.length - 1].src)
            }
            if (!e)
                throw new Error("Automatic publicPath is not supported in this browser");
            e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
                __webpack_require__.p = e
        }
        )(),
        (() => {
            var e = {
                162: 0
            };
            __webpack_require__.f.j = (r, _) => {
                var t = __webpack_require__.o(e, r) ? e[r] : void 0;
                if (0 !== t)
                    if (t)
                        _.push(t[2]);
                    else if (162 != r) {
                        var a = new Promise(((_, a) => t = e[r] = [_, a]));
                        _.push(t[2] = a);
                        var i = __webpack_require__.p + __webpack_require__.u(r)
                            , n = new Error;
                        __webpack_require__.l(i, (_ => {
                            if (__webpack_require__.o(e, r) && (0 !== (t = e[r]) && (e[r] = void 0),
                                t)) {
                                var a = _ && ("load" === _.type ? "missing" : _.type)
                                    , i = _ && _.target && _.target.src;
                                n.message = "Loading chunk " + r + " failed.\n(" + a + ": " + i + ")",
                                    n.name = "ChunkLoadError",
                                    n.type = a,
                                    n.request = i,
                                    t[1](n)
                            }
                        }
                        ), "chunk-" + r, r)
                    } else
                        e[r] = 0
            }
                ,
                __webpack_require__.O.j = r => 0 === e[r];
            var webpackJsonpCallback = (r, _) => {
                var t, a, [i, n, c] = _, o = 0;
                if (i.some((r => 0 !== e[r]))) {
                    for (t in n)
                        __webpack_require__.o(n, t) && (__webpack_require__.m[t] = n[t]);
                    if (c)
                        var u = c(__webpack_require__)
                }
                for (r && r(_); o < i.length; o++)
                    a = i[o],
                        __webpack_require__.o(e, a) && e[a] && e[a][0](),
                        e[i[o]] = 0;
                return __webpack_require__.O(u)
            }
                , r = self.webpackChunkelementor = self.webpackChunkelementor || [];
            r.forEach(webpackJsonpCallback.bind(null, 0)),
                r.push = webpackJsonpCallback.bind(null, r.push.bind(r))
        }
        )()
}
)();
/*!elementor - v3.5.2 - 22-12-2021*/
(self.webpackChunkelementor = self.webpackChunkelementor || []).push([[354], {
    7914: e => {
        e.exports = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
            ,
            e.exports.default = e.exports,
            e.exports.__esModule = !0
    }
    ,
    381: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        t.default = (e, t) => {
            t = Array.isArray(t) ? t : [t];
            for (const n of t)
                if (e.constructor.name === n.prototype[Symbol.toStringTag])
                    return !0;
            return !1
        }
    }
    ,
    8135: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.ViewModule {
            getDefaultSettings() {
                return {
                    selectors: {
                        elements: ".elementor-element",
                        nestedDocumentElements: ".elementor .elementor-element"
                    },
                    classes: {
                        editMode: "elementor-edit-mode"
                    }
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors");
                return {
                    $elements: this.$element.find(e.elements).not(this.$element.find(e.nestedDocumentElements))
                }
            }
            getDocumentSettings(e) {
                let t;
                if (this.isEdit) {
                    t = {};
                    const e = elementor.settings.page.model;
                    jQuery.each(e.getActiveControls(), (n => {
                        t[n] = e.attributes[n]
                    }
                    ))
                } else
                    t = this.$element.data("elementor-settings") || {};
                return this.getItems(t, e)
            }
            runElementsHandlers() {
                this.elements.$elements.each(((e, t) => elementorFrontend.elementsHandler.runReadyTrigger(t)))
            }
            onInit() {
                this.$element = this.getSettings("$element"),
                    super.onInit(),
                    this.isEdit = this.$element.hasClass(this.getSettings("classes.editMode")),
                    this.isEdit ? elementor.on("document:loaded", (() => {
                        elementor.settings.page.model.on("change", this.onSettingsChange.bind(this))
                    }
                    )) : this.runElementsHandlers()
            }
            onSettingsChange() { }
        }
        t.default = _default
    }
    ,
    2821: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var i = s(n(3090));
        class SwiperHandlerBase extends i.default {
            getInitialSlide() {
                const e = this.getEditSettings();
                return e.activeItemIndex ? e.activeItemIndex - 1 : 0
            }
            getSlidesCount() {
                return this.elements.$slides.length
            }
            togglePauseOnHover(e) {
                e ? this.elements.$swiperContainer.on({
                    mouseenter: () => {
                        this.swiper.autoplay.stop()
                    }
                    ,
                    mouseleave: () => {
                        this.swiper.autoplay.start()
                    }
                }) : this.elements.$swiperContainer.off("mouseenter mouseleave")
            }
            handleKenBurns() {
                const e = this.getSettings();
                this.$activeImageBg && this.$activeImageBg.removeClass(e.classes.kenBurnsActive),
                    this.activeItemIndex = this.swiper ? this.swiper.activeIndex : this.getInitialSlide(),
                    this.swiper ? this.$activeImageBg = jQuery(this.swiper.slides[this.activeItemIndex]).children("." + e.classes.slideBackground) : this.$activeImageBg = jQuery(this.elements.$slides[0]).children("." + e.classes.slideBackground),
                    this.$activeImageBg.addClass(e.classes.kenBurnsActive)
            }
        }
        t.default = SwiperHandlerBase
    }
    ,
    3090: e => {
        "use strict";
        e.exports = elementorModules.ViewModule.extend({
            $element: null,
            editorListeners: null,
            onElementChange: null,
            onEditSettingsChange: null,
            onPageSettingsChange: null,
            isEdit: null,
            __construct: function (e) {
                this.isActive(e) && (this.$element = e.$element,
                    this.isEdit = this.$element.hasClass("elementor-element-edit-mode"),
                    this.isEdit && this.addEditorListeners())
            },
            isActive: function () {
                return !0
            },
            findElement: function (e) {
                var t = this.$element;
                return t.find(e).filter((function () {
                    return jQuery(this).closest(".elementor-element").is(t)
                }
                ))
            },
            getUniqueHandlerID: function (e, t) {
                return e || (e = this.getModelCID()),
                    t || (t = this.$element),
                    e + t.attr("data-element_type") + this.getConstructorID()
            },
            initEditorListeners: function () {
                var e = this;
                if (e.editorListeners = [{
                    event: "element:destroy",
                    to: elementor.channels.data,
                    callback: function (t) {
                        t.cid === e.getModelCID() && e.onDestroy()
                    }
                }],
                    e.onElementChange) {
                    const t = e.getWidgetType() || e.getElementType();
                    let n = "change";
                    "global" !== t && (n += ":" + t),
                        e.editorListeners.push({
                            event: n,
                            to: elementor.channels.editor,
                            callback: function (t, n) {
                                e.getUniqueHandlerID(n.model.cid, n.$el) === e.getUniqueHandlerID() && e.onElementChange(t.model.get("name"), t, n)
                            }
                        })
                }
                e.onEditSettingsChange && e.editorListeners.push({
                    event: "change:editSettings",
                    to: elementor.channels.editor,
                    callback: function (t, n) {
                        n.model.cid === e.getModelCID() && e.onEditSettingsChange(Object.keys(t.changed)[0])
                    }
                }),
                    ["page"].forEach((function (t) {
                        var n = "on" + t[0].toUpperCase() + t.slice(1) + "SettingsChange";
                        e[n] && e.editorListeners.push({
                            event: "change",
                            to: elementor.settings[t].model,
                            callback: function (t) {
                                e[n](t.changed)
                            }
                        })
                    }
                    ))
            },
            getEditorListeners: function () {
                return this.editorListeners || this.initEditorListeners(),
                    this.editorListeners
            },
            addEditorListeners: function () {
                var e = this.getUniqueHandlerID();
                this.getEditorListeners().forEach((function (t) {
                    elementorFrontend.addListenerOnce(e, t.event, t.callback, t.to)
                }
                ))
            },
            removeEditorListeners: function () {
                var e = this.getUniqueHandlerID();
                this.getEditorListeners().forEach((function (t) {
                    elementorFrontend.removeListeners(e, t.event, null, t.to)
                }
                ))
            },
            getElementType: function () {
                return this.$element.data("element_type")
            },
            getWidgetType: function () {
                const e = this.$element.data("widget_type");
                if (e)
                    return e.split(".")[0]
            },
            getID: function () {
                return this.$element.data("id")
            },
            getModelCID: function () {
                return this.$element.data("model-cid")
            },
            getElementSettings: function (e) {
                let t = {};
                const n = this.getModelCID();
                if (this.isEdit && n) {
                    const e = elementorFrontend.config.elements.data[n]
                        , s = e.attributes;
                    let i = s.widgetType || s.elType;
                    s.isInner && (i = "inner-" + i);
                    let r = elementorFrontend.config.elements.keys[i];
                    r || (r = elementorFrontend.config.elements.keys[i] = [],
                        jQuery.each(e.controls, ((e, t) => {
                            t.frontend_available && r.push(e)
                        }
                        ))),
                        jQuery.each(e.getActiveControls(), (function (e) {
                            if (-1 !== r.indexOf(e)) {
                                let n = s[e];
                                n.toJSON && (n = n.toJSON()),
                                    t[e] = n
                            }
                        }
                        ))
                } else
                    t = this.$element.data("settings") || {};
                return this.getItems(t, e)
            },
            getEditSettings: function (e) {
                var t = {};
                return this.isEdit && (t = elementorFrontend.config.elements.editSettings[this.getModelCID()].attributes),
                    this.getItems(t, e)
            },
            getCurrentDeviceSetting: function (e) {
                return elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(), e)
            },
            onInit: function () {
                this.isActive(this.getSettings()) && elementorModules.ViewModule.prototype.onInit.apply(this, arguments)
            },
            onDestroy: function () {
                this.isEdit && this.removeEditorListeners(),
                    this.unbindEvents && this.unbindEvents()
            }
        })
    }
    ,
    6412: (e, t, n) => {
        "use strict";
        var s = n(7914)
            , i = s(n(5955))
            , r = s(n(8135))
            , o = s(n(5658))
            , l = s(n(3090))
            , c = s(n(2821));
        i.default.frontend = {
            Document: r.default,
            tools: {
                StretchElement: o.default
            },
            handlers: {
                Base: l.default,
                SwiperBase: c.default
            }
        }
    }
    ,
    5658: e => {
        "use strict";
        e.exports = elementorModules.ViewModule.extend({
            getDefaultSettings: function () {
                return {
                    element: null,
                    direction: elementorFrontend.config.is_rtl ? "right" : "left",
                    selectors: {
                        container: window
                    }
                }
            },
            getDefaultElements: function () {
                return {
                    $element: jQuery(this.getSettings("element"))
                }
            },
            stretch: function () {
                var e, t = this.getSettings("selectors.container");
                try {
                    e = jQuery(t)
                } catch (e) { }
                e && e.length || (e = jQuery(this.getDefaultSettings().selectors.container)),
                    this.reset();
                var n = this.elements.$element
                    , s = e.innerWidth()
                    , i = n.offset().left
                    , r = "fixed" === n.css("position")
                    , o = r ? 0 : i;
                if (window !== e[0]) {
                    var l = e.offset().left;
                    r && (o = l),
                        i > l && (o = i - l)
                }
                r || (elementorFrontend.config.is_rtl && (o = s - (n.outerWidth() + o)),
                    o = -o);
                var c = {};
                c.width = s + "px",
                    c[this.getSettings("direction")] = o + "px",
                    n.css(c)
            },
            reset: function () {
                var e = {
                    width: ""
                };
                e[this.getSettings("direction")] = "",
                    this.elements.$element.css(e)
            }
        })
    }
    ,
    2618: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var i = s(n(7597))
            , r = s(n(381));
        class ArgsObject extends i.default {
            static getInstanceType() {
                return "ArgsObject"
            }
            constructor(e) {
                super(),
                    this.args = e
            }
            requireArgument(e, t = this.args) {
                if (!t.hasOwnProperty(e))
                    throw Error(`${e} is required.`)
            }
            requireArgumentType(e, t, n = this.args) {
                if (this.requireArgument(e, n),
                    typeof n[e] !== t)
                    throw Error(`${e} invalid type: ${t}.`)
            }
            requireArgumentInstance(e, t, n = this.args) {
                if (this.requireArgument(e, n),
                    !(n[e] instanceof t || (0,
                        r.default)(n[e], t)))
                    throw Error(`${e} invalid instance.`)
            }
            requireArgumentConstructor(e, t, n = this.args) {
                if (this.requireArgument(e, n),
                    n[e].constructor !== t)
                    throw Error(`${e} invalid constructor type.`)
            }
        }
        t.default = ArgsObject
    }
    ,
    869: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = t.ForceMethodImplementation = void 0;
        class ForceMethodImplementation extends Error {
            constructor(e = {}) {
                super(`${e.isStatic ? "static " : ""}${e.fullName}() should be implemented, please provide '${e.functionName || e.fullName}' functionality.`),
                    Error.captureStackTrace(this, ForceMethodImplementation)
            }
        }
        t.ForceMethodImplementation = ForceMethodImplementation;
        t.default = () => {
            const e = Error().stack.split("\n")[2].trim()
                , t = e.startsWith("at new") ? "constructor" : e.split(" ")[1]
                , n = {};
            if (n.functionName = t,
                n.fullName = t,
                n.functionName.includes(".")) {
                const e = n.functionName.split(".");
                n.className = e[0],
                    n.functionName = e[1]
            } else
                n.isStatic = !0;
            throw new ForceMethodImplementation(n)
        }
    }
    ,
    7597: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class InstanceType {
            static [Symbol.hasInstance](e) {
                let t = super[Symbol.hasInstance](e);
                if (e && !e.constructor.getInstanceType)
                    return t;
                if (e && (e.instanceTypes || (e.instanceTypes = []),
                    t || this.getInstanceType() === e.constructor.getInstanceType() && (t = !0),
                    t)) {
                    const t = this.getInstanceType === InstanceType.getInstanceType ? "BaseInstanceType" : this.getInstanceType();
                    -1 === e.instanceTypes.indexOf(t) && e.instanceTypes.push(t)
                }
                return !t && e && (t = e.instanceTypes && Array.isArray(e.instanceTypes) && -1 !== e.instanceTypes.indexOf(this.getInstanceType())),
                    t
            }
            constructor() {
                let e = new.target;
                const t = [];
                for (; e.__proto__ && e.__proto__.name;)
                    t.push(e.__proto__),
                        e = e.__proto__;
                t.reverse().forEach((e => this instanceof e))
            }
            static getInstanceType() {
                elementorModules.ForceMethodImplementation()
            }
        }
        t.default = InstanceType
    }
    ,
    1192: e => {
        "use strict";
        const Module = function () {
            const e = jQuery
                , t = arguments
                , n = this
                , s = {};
            let i;
            const ensureClosureMethods = function () {
                e.each(n, (function (e) {
                    const t = n[e];
                    "function" == typeof t && (n[e] = function () {
                        return t.apply(n, arguments)
                    }
                    )
                }
                ))
            }
                , initSettings = function () {
                    i = n.getDefaultSettings();
                    const s = t[0];
                    s && e.extend(!0, i, s)
                }
                , init = function () {
                    n.__construct.apply(n, t),
                        ensureClosureMethods(),
                        initSettings(),
                        n.trigger("init")
                };
            this.getItems = function (e, t) {
                if (t) {
                    const n = t.split(".")
                        , s = n.splice(0, 1);
                    if (!n.length)
                        return e[s];
                    if (!e[s])
                        return;
                    return this.getItems(e[s], n.join("."))
                }
                return e
            }
                ,
                this.getSettings = function (e) {
                    return this.getItems(i, e)
                }
                ,
                this.setSettings = function (t, s, r) {
                    if (r || (r = i),
                        "object" == typeof t)
                        return e.extend(r, t),
                            n;
                    const o = t.split(".")
                        , l = o.splice(0, 1);
                    return o.length ? (r[l] || (r[l] = {}),
                        n.setSettings(o.join("."), s, r[l])) : (r[l] = s,
                            n)
                }
                ,
                this.getErrorMessage = function (e, t) {
                    let n;
                    if ("forceMethodImplementation" === e)
                        n = `The method '${t}' must to be implemented in the inheritor child.`;
                    else
                        n = "An error occurs";
                    return n
                }
                ,
                this.forceMethodImplementation = function (e) {
                    throw new Error(this.getErrorMessage("forceMethodImplementation", e))
                }
                ,
                this.on = function (t, i) {
                    if ("object" == typeof t)
                        return e.each(t, (function (e) {
                            n.on(e, this)
                        }
                        )),
                            n;
                    return t.split(" ").forEach((function (e) {
                        s[e] || (s[e] = []),
                            s[e].push(i)
                    }
                    )),
                        n
                }
                ,
                this.off = function (e, t) {
                    if (!s[e])
                        return n;
                    if (!t)
                        return delete s[e],
                            n;
                    const i = s[e].indexOf(t);
                    return -1 !== i && (delete s[e][i],
                        s[e] = s[e].filter((e => e))),
                        n
                }
                ,
                this.trigger = function (t) {
                    const i = "on" + t[0].toUpperCase() + t.slice(1)
                        , r = Array.prototype.slice.call(arguments, 1);
                    n[i] && n[i].apply(n, r);
                    const o = s[t];
                    return o ? (e.each(o, (function (e, t) {
                        t.apply(n, r)
                    }
                    )),
                        n) : n
                }
                ,
                init()
        };
        Module.prototype.__construct = function () { }
            ,
            Module.prototype.getDefaultSettings = function () {
                return {}
            }
            ,
            Module.prototype.getConstructorID = function () {
                return this.constructor.name
            }
            ,
            Module.extend = function (e) {
                const t = jQuery
                    , n = this
                    , child = function () {
                        return n.apply(this, arguments)
                    };
                return t.extend(child, n),
                    (child.prototype = Object.create(t.extend({}, n.prototype, e))).constructor = child,
                    child.__super__ = n.prototype,
                    child
            }
            ,
            e.exports = Module
    }
    ,
    6516: (e, t, n) => {
        "use strict";
        var s = n(7914)(n(2640));
        e.exports = s.default.extend({
            getDefaultSettings: function () {
                return {
                    container: null,
                    items: null,
                    columnsCount: 3,
                    verticalSpaceBetween: 30
                }
            },
            getDefaultElements: function () {
                return {
                    $container: jQuery(this.getSettings("container")),
                    $items: jQuery(this.getSettings("items"))
                }
            },
            run: function () {
                var e = []
                    , t = this.elements.$container.position().top
                    , n = this.getSettings()
                    , s = n.columnsCount;
                t += parseInt(this.elements.$container.css("margin-top"), 10),
                    this.elements.$items.each((function (i) {
                        var r = Math.floor(i / s)
                            , o = jQuery(this)
                            , l = o[0].getBoundingClientRect().height + n.verticalSpaceBetween;
                        if (r) {
                            var c = o.position()
                                , a = i % s
                                , u = c.top - t - e[a];
                            u -= parseInt(o.css("margin-top"), 10),
                                u *= -1,
                                o.css("margin-top", u + "px"),
                                e[a] += l
                        } else
                            e.push(l)
                    }
                    ))
            }
        })
    }
    ,
    400: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        t.default = class Scroll {
            static scrollObserver(e) {
                let t = 0;
                const n = {
                    root: e.root || null,
                    rootMargin: e.offset || "0px",
                    threshold: ((e = 0) => {
                        const t = [];
                        if (e > 0 && e <= 100) {
                            const n = 100 / e;
                            for (let e = 0; e <= 100; e += n)
                                t.push(e / 100)
                        } else
                            t.push(0);
                        return t
                    }
                    )(e.sensitivity)
                };
                return new IntersectionObserver((function handleIntersect(n, s) {
                    const i = n[0].boundingClientRect.y
                        , r = n[0].isIntersecting
                        , o = i < t ? "down" : "up"
                        , l = Math.abs(parseFloat((100 * n[0].intersectionRatio).toFixed(2)));
                    e.callback({
                        sensitivity: e.sensitivity,
                        isInViewport: r,
                        scrollPercentage: l,
                        intersectionScrollDirection: o
                    }),
                        t = i
                }
                ), n)
            }
            static getElementViewportPercentage(e, t = {}) {
                const n = e[0].getBoundingClientRect()
                    , s = t.start || 0
                    , i = t.end || 0
                    , r = window.innerHeight * s / 100
                    , o = window.innerHeight * i / 100
                    , l = n.top - window.innerHeight
                    , c = 0 - l + r
                    , a = n.top + r + e.height() - l + o
                    , u = Math.max(0, Math.min(c / a, 1));
                return parseFloat((100 * u).toFixed(2))
            }
            static getPageScrollPercentage(e = {}, t) {
                const n = e.start || 0
                    , s = e.end || 0
                    , i = t || document.documentElement.scrollHeight - document.documentElement.clientHeight
                    , r = i * n / 100
                    , o = i + r + i * s / 100;
                return (document.documentElement.scrollTop + document.body.scrollTop + r) / o * 100
            }
        }
    }
    ,
    2640: (e, t, n) => {
        "use strict";
        var s = n(7914)(n(1192));
        e.exports = s.default.extend({
            elements: null,
            getDefaultElements: function () {
                return {}
            },
            bindEvents: function () { },
            onInit: function () {
                this.initElements(),
                    this.bindEvents()
            },
            initElements: function () {
                this.elements = this.getDefaultElements()
            }
        })
    }
    ,
    5955: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var i = s(n(1192))
            , r = s(n(2640))
            , o = s(n(2618))
            , l = s(n(6516))
            , c = s(n(400))
            , a = s(n(869))
            , u = window.elementorModules = {
                Module: i.default,
                ViewModule: r.default,
                ArgsObject: o.default,
                ForceMethodImplementation: a.default,
                utils: {
                    Masonry: l.default,
                    Scroll: c.default
                }
            };
        t.default = u
    }
}, e => {
    var t;
    t = 6412,
        e(e.s = t)
}
]);
var ElementorProFrontendConfig = {
    "ajaxurl": "",
    "nonce": "cb23183bcf",
    "urls": {
        "assets": "",
        "rest": ""
    },
    "i18n": {
        "toc_no_headings_found": "No headings were found on this page."
    },
    "shareButtonsNetworks": {
        "facebook": {
            "title": "Facebook",
            "has_counter": !0
        },
        "twitter": {
            "title": "Twitter"
        },
        "google": {
            "title": "Google+",
            "has_counter": !0
        },
        "linkedin": {
            "title": "LinkedIn",
            "has_counter": !0
        },
        "pinterest": {
            "title": "Pinterest",
            "has_counter": !0
        },
        "reddit": {
            "title": "Reddit",
            "has_counter": !0
        },
        "vk": {
            "title": "VK",
            "has_counter": !0
        },
        "odnoklassniki": {
            "title": "OK",
            "has_counter": !0
        },
        "tumblr": {
            "title": "Tumblr"
        },
        "digg": {
            "title": "Digg"
        },
        "skype": {
            "title": "Skype"
        },
        "stumbleupon": {
            "title": "StumbleUpon",
            "has_counter": !0
        },
        "mix": {
            "title": "Mix"
        },
        "telegram": {
            "title": "Telegram"
        },
        "pocket": {
            "title": "Pocket",
            "has_counter": !0
        },
        "xing": {
            "title": "XING",
            "has_counter": !0
        },
        "whatsapp": {
            "title": "WhatsApp"
        },
        "email": {
            "title": "Email"
        },
        "print": {
            "title": "Print"
        }
    },
    "facebook_sdk": {
        "lang": "en_US",
        "app_id": ""
    },
    "lottie": {
        "defaultAnimationUrl": ""
    }
};
/*!elementor-pro - v3.4.2 - 12-10-2021*/
(self.webpackChunkelementor_pro = self.webpackChunkelementor_pro || []).push([[819], {
    5526: e => {
        e.exports = function _defineProperty(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
            ,
            e.exports.default = e.exports,
            e.exports.__esModule = !0
    }
    ,
    7914: e => {
        e.exports = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
            ,
            e.exports.default = e.exports,
            e.exports.__esModule = !0
    }
    ,
    3713: (e, t, n) => {
        "use strict";
        var s = n(7914);
        n(3258);
        var i = s(n(8442))
            , o = s(n(9253))
            , r = s(n(4552))
            , a = s(n(1498))
            , l = s(n(1336));
        class ElementorProFrontend extends elementorModules.ViewModule {
            onInit() {
                super.onInit(),
                    this.config = ElementorProFrontendConfig,
                    this.modules = {}
            }
            bindEvents() {
                jQuery(window).on("elementor/frontend/init", this.onElementorFrontendInit.bind(this))
            }
            initModules() {
                let e = {
                    motionFX: i.default,
                    sticky: o.default,
                    codeHighlight: r.default,
                    videoPlaylist: a.default,
                    payments: l.default
                };
                elementorProFrontend.trigger("elementor-pro/modules/init:before"),
                    e = elementorFrontend.hooks.applyFilters("elementor-pro/frontend/handlers", e),
                    jQuery.each(e, ((e, t) => {
                        this.modules[e] = new t
                    }
                    )),
                    this.modules.linkActions = {
                        addAction: (...e) => {
                            elementorFrontend.utils.urlActions.addAction(...e)
                        }
                    }
            }
            onElementorFrontendInit() {
                this.initModules()
            }
        }
        window.elementorProFrontend = new ElementorProFrontend
    }
    ,
    3258: (e, t, n) => {
        "use strict";
        n.p = ElementorProFrontendConfig.urls.assets + "js/"
    }
    ,
    4552: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                    elementorFrontend.elementsHandler.attachHandler("code-highlight", (() => n.e(714).then(n.bind(n, 3929))))
            }
        }
        t.default = _default
    }
    ,
    8442: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var i = s(n(5542));
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                    elementorFrontend.elementsHandler.attachHandler("global", i.default, null)
            }
        }
        t.default = _default
    }
    ,
    5542: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var i = s(n(6829));
        class _default extends elementorModules.frontend.handlers.Base {
            __construct(...e) {
                super.__construct(...e),
                    this.toggle = elementorFrontend.debounce(this.toggle, 200)
            }
            getDefaultSettings() {
                return {
                    selectors: {
                        container: ".elementor-widget-container"
                    }
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors");
                return {
                    $container: this.$element.find(e.container)
                }
            }
            bindEvents() {
                elementorFrontend.elements.$window.on("resize", this.toggle)
            }
            unbindEvents() {
                elementorFrontend.elements.$window.off("resize", this.toggle)
            }
            addCSSTransformEvents() {
                const e = this.getElementSettings("motion_fx_motion_fx_scrolling")
                    , t = this.getElementSettings("_transform_transition_hover");
                e && null != t && t.size && !this.isTransitionEventAdded && (this.isTransitionEventAdded = !0,
                    this.elements.$container.on("mouseenter", (() => {
                        this.elements.$container.css("--e-transform-transition-duration", "")
                    }
                    )))
            }
            initEffects() {
                this.effects = {
                    translateY: {
                        interaction: "scroll",
                        actions: ["translateY"]
                    },
                    translateX: {
                        interaction: "scroll",
                        actions: ["translateX"]
                    },
                    rotateZ: {
                        interaction: "scroll",
                        actions: ["rotateZ"]
                    },
                    scale: {
                        interaction: "scroll",
                        actions: ["scale"]
                    },
                    opacity: {
                        interaction: "scroll",
                        actions: ["opacity"]
                    },
                    blur: {
                        interaction: "scroll",
                        actions: ["blur"]
                    },
                    mouseTrack: {
                        interaction: "mouseMove",
                        actions: ["translateXY"]
                    },
                    tilt: {
                        interaction: "mouseMove",
                        actions: ["tilt"]
                    }
                }
            }
            prepareOptions(e) {
                const t = this.getElementSettings()
                    , n = "motion_fx" === e ? "element" : "background"
                    , s = {};
                jQuery.each(t, ((n, i) => {
                    const o = new RegExp("^" + e + "_(.+?)_effect")
                        , r = n.match(o);
                    if (!r || !i)
                        return;
                    const a = {}
                        , l = r[1];
                    jQuery.each(t, ((t, n) => {
                        const s = new RegExp(e + "_" + l + "_(.+)")
                            , i = t.match(s);
                        if (!i)
                            return;
                        "effect" !== i[1] && ("object" == typeof n && (n = Object.keys(n.sizes).length ? n.sizes : n.size),
                            a[i[1]] = n)
                    }
                    ));
                    const c = this.effects[l]
                        , d = c.interaction;
                    s[d] || (s[d] = {}),
                        c.actions.forEach((e => s[d][e] = a))
                }
                ));
                let i, o = this.$element;
                const r = this.getElementType();
                if ("element" === n && "section" !== r) {
                    let e;
                    i = o,
                        e = "column" === r ? elementorFrontend.config.legacyMode.elementWrappers ? ".elementor-column-wrap" : ".elementor-widget-wrap" : ".elementor-widget-container",
                        o = o.find("> " + e)
                }
                const a = {
                    type: n,
                    interactions: s,
                    elementSettings: t,
                    $element: o,
                    $dimensionsElement: i,
                    refreshDimensions: this.isEdit,
                    range: t[e + "_range"],
                    classes: {
                        element: "elementor-motion-effects-element",
                        parent: "elementor-motion-effects-parent",
                        backgroundType: "elementor-motion-effects-element-type-background",
                        container: "elementor-motion-effects-container",
                        layer: "elementor-motion-effects-layer",
                        perspective: "elementor-motion-effects-perspective"
                    }
                };
                return a.range || "fixed" !== this.getCurrentDeviceSetting("_position") || (a.range = "page"),
                    "fixed" === this.getCurrentDeviceSetting("_position") && (a.isFixedPosition = !0),
                    "background" === n && "column" === this.getElementType() && (a.addBackgroundLayerTo = " > .elementor-element-populated"),
                    a
            }
            activate(e) {
                const t = this.prepareOptions(e);
                jQuery.isEmptyObject(t.interactions) || (this[e] = new i.default(t))
            }
            deactivate(e) {
                this[e] && (this[e].destroy(),
                    delete this[e])
            }
            toggle() {
                const e = elementorFrontend.getCurrentDeviceMode()
                    , t = this.getElementSettings();
                ["motion_fx", "background_motion_fx"].forEach((n => {
                    const s = t[n + "_devices"];
                    (!s || -1 !== s.indexOf(e)) && (t[n + "_motion_fx_scrolling"] || t[n + "_motion_fx_mouse"]) ? this[n] ? this.refreshInstance(n) : this.activate(n) : this.deactivate(n)
                }
                ))
            }
            refreshInstance(e) {
                const t = this[e];
                if (!t)
                    return;
                const n = this.prepareOptions(e);
                t.setSettings(n),
                    t.refresh()
            }
            onInit() {
                super.onInit(),
                    this.initEffects(),
                    this.addCSSTransformEvents(),
                    this.toggle()
            }
            onElementChange(e) {
                if (/motion_fx_((scrolling)|(mouse)|(devices))$/.test(e))
                    return "motion_fx_motion_fx_scrolling" === e && this.addCSSTransformEvents(),
                        void this.toggle();
                const t = e.match(".*?(motion_fx|_transform)");
                if (t) {
                    const e = t[0].match("(_transform)") ? "motion_fx" : t[0];
                    this.refreshInstance(e),
                        this[e] || this.activate(e)
                }
                /^_position/.test(e) && ["motion_fx", "background_motion_fx"].forEach((e => {
                    this.refreshInstance(e)
                }
                ))
            }
            onDestroy() {
                super.onDestroy(),
                    ["motion_fx", "background_motion_fx"].forEach((e => {
                        this.deactivate(e)
                    }
                    ))
            }
        }
        t.default = _default
    }
    ,
    8026: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.Module {
            getMovePointFromPassedPercents(e, t) {
                return +(t / e * 100).toFixed(2)
            }
            getEffectValueFromMovePoint(e, t) {
                return e * t / 100
            }
            getStep(e, t) {
                return "element" === this.getSettings("type") ? this.getElementStep(e, t) : this.getBackgroundStep(e, t)
            }
            getElementStep(e, t) {
                return -(e - 50) * t.speed
            }
            getBackgroundStep(e, t) {
                const n = this.getSettings("dimensions.movable" + t.axis.toUpperCase());
                return -this.getEffectValueFromMovePoint(n, e)
            }
            getDirectionMovePoint(e, t, n) {
                let s;
                return e < n.start ? "out-in" === t ? s = 0 : "in-out" === t ? s = 100 : (s = this.getMovePointFromPassedPercents(n.start, e),
                    "in-out-in" === t && (s = 100 - s)) : e < n.end ? "in-out-in" === t ? s = 0 : "out-in-out" === t ? s = 100 : (s = this.getMovePointFromPassedPercents(n.end - n.start, e - n.start),
                        "in-out" === t && (s = 100 - s)) : "in-out" === t ? s = 0 : "out-in" === t ? s = 100 : (s = this.getMovePointFromPassedPercents(100 - n.end, 100 - e),
                            "in-out-in" === t && (s = 100 - s)),
                    s
            }
            translateX(e, t) {
                e.axis = "x",
                    e.unit = "px",
                    this.transform("translateX", t, e)
            }
            translateY(e, t) {
                e.axis = "y",
                    e.unit = "px",
                    this.transform("translateY", t, e)
            }
            translateXY(e, t, n) {
                this.translateX(e, t),
                    this.translateY(e, n)
            }
            tilt(e, t, n) {
                const s = {
                    speed: e.speed / 10,
                    direction: e.direction
                };
                this.rotateX(s, n),
                    this.rotateY(s, 100 - t)
            }
            rotateX(e, t) {
                e.axis = "x",
                    e.unit = "deg",
                    this.transform("rotateX", t, e)
            }
            rotateY(e, t) {
                e.axis = "y",
                    e.unit = "deg",
                    this.transform("rotateY", t, e)
            }
            rotateZ(e, t) {
                e.unit = "deg",
                    this.transform("rotateZ", t, e)
            }
            scale(e, t) {
                const n = this.getDirectionMovePoint(t, e.direction, e.range);
                this.updateRulePart("transform", "scale", 1 + e.speed * n / 1e3)
            }
            transform(e, t, n) {
                n.direction && (t = 100 - t),
                    this.updateRulePart("transform", e, this.getStep(t, n) + n.unit)
            }
            setCSSTransformVariables(e) {
                this.CSSTransformVariables = {},
                    jQuery.each(e, ((e, t) => {
                        const n = e.match(/_transform_(.+?)_effect$/m);
                        n && t && (this.CSSTransformVariables[n[1]] = !0)
                    }
                    ))
            }
            opacity(e, t) {
                const n = this.getDirectionMovePoint(t, e.direction, e.range)
                    , s = e.level / 10
                    , i = 1 - s + this.getEffectValueFromMovePoint(s, n);
                this.$element.css({
                    opacity: i,
                    "will-change": "opacity"
                })
            }
            blur(e, t) {
                const n = this.getDirectionMovePoint(t, e.direction, e.range)
                    , s = e.level - this.getEffectValueFromMovePoint(e.level, n);
                this.updateRulePart("filter", "blur", s + "px")
            }
            updateRulePart(e, t, n) {
                this.rulesVariables[e] || (this.rulesVariables[e] = {}),
                    this.rulesVariables[e][t] || (this.rulesVariables[e][t] = !0,
                        this.updateRule(e));
                const s = `--${t}`;
                this.$element[0].style.setProperty(s, n)
            }
            updateRule(e) {
                let t = "";
                t += this.concatTransformCSSProperties(e),
                    t += this.concatTransformMotionEffectCSSProperties(e),
                    this.$element.css(e, t)
            }
            concatTransformCSSProperties(e) {
                let t = "";
                return "transform" === e && jQuery.each(this.CSSTransformVariables, (e => {
                    const n = e;
                    e.startsWith("flip") && (e = e.replace("flip", "scale"));
                    const s = e.startsWith("rotate") || e.startsWith("skew") ? "deg" : "px"
                        , i = e.startsWith("scale") ? 1 : 0 + s;
                    t += `${e}(var(--e-transform-${n}, ${i}))`
                }
                )),
                    t
            }
            concatTransformMotionEffectCSSProperties(e) {
                let t = "";
                return jQuery.each(this.rulesVariables[e], (e => {
                    t += `${e}(var(--${e}))`
                }
                )),
                    t
            }
            runAction(e, t, n, ...s) {
                t.affectedRange && (t.affectedRange.start > n && (n = t.affectedRange.start),
                    t.affectedRange.end < n && (n = t.affectedRange.end)),
                    this[e](t, n, ...s)
            }
            refresh() {
                this.rulesVariables = {},
                    this.CSSTransformVariables = {},
                    this.$element.css({
                        transform: "",
                        filter: "",
                        opacity: "",
                        "will-change": ""
                    })
            }
            onInit() {
                this.$element = this.getSettings("$targetElement"),
                    this.refresh()
            }
        }
        t.default = _default
    }
    ,
    2720: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var i = s(n(5526));
        class _default extends elementorModules.ViewModule {
            constructor(...e) {
                super(...e),
                    (0,
                        i.default)(this, "onInsideViewport", (() => {
                            this.run(),
                                this.animationFrameRequest = requestAnimationFrame(this.onInsideViewport)
                        }
                        ))
            }
            __construct(e) {
                this.motionFX = e.motionFX,
                    this.intersectionObservers || this.setElementInViewportObserver()
            }
            setElementInViewportObserver() {
                this.intersectionObserver = elementorModules.utils.Scroll.scrollObserver({
                    callback: e => {
                        e.isInViewport ? this.onInsideViewport() : this.removeAnimationFrameRequest()
                    }
                }),
                    this.intersectionObserver.observe(this.motionFX.elements.$parent[0])
            }
            runCallback(...e) {
                this.getSettings("callback")(...e)
            }
            removeIntersectionObserver() {
                this.intersectionObserver && this.intersectionObserver.unobserve(this.motionFX.elements.$parent[0])
            }
            removeAnimationFrameRequest() {
                this.animationFrameRequest && cancelAnimationFrame(this.animationFrameRequest)
            }
            destroy() {
                this.removeAnimationFrameRequest(),
                    this.removeIntersectionObserver()
            }
            onInit() {
                super.onInit()
            }
        }
        t.default = _default
    }
    ,
    1545: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var i = s(n(2720));
        class MouseMoveInteraction extends i.default {
            bindEvents() {
                MouseMoveInteraction.mouseTracked || (elementorFrontend.elements.$window.on("mousemove", MouseMoveInteraction.updateMousePosition),
                    MouseMoveInteraction.mouseTracked = !0)
            }
            run() {
                const e = MouseMoveInteraction.mousePosition
                    , t = this.oldMousePosition;
                if (t.x === e.x && t.y === e.y)
                    return;
                this.oldMousePosition = {
                    x: e.x,
                    y: e.y
                };
                const n = 100 / innerWidth * e.x
                    , s = 100 / innerHeight * e.y;
                this.runCallback(n, s)
            }
            onInit() {
                this.oldMousePosition = {},
                    super.onInit()
            }
        }
        t.default = MouseMoveInteraction,
            MouseMoveInteraction.mousePosition = {},
            MouseMoveInteraction.updateMousePosition = e => {
                MouseMoveInteraction.mousePosition = {
                    x: e.clientX,
                    y: e.clientY
                }
            }
    }
    ,
    1791: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var i = s(n(2720));
        class _default extends i.default {
            run() {
                if (pageYOffset === this.windowScrollTop)
                    return !1;
                this.onScrollMovement(),
                    this.windowScrollTop = pageYOffset
            }
            onScrollMovement() {
                this.updateMotionFxDimensions(),
                    this.updateAnimation(),
                    this.setTransitionVariableToZero()
            }
            setTransitionVariableToZero() {
                this.motionFX.$element.css("--e-transform-transition-duration", "0ms")
            }
            updateMotionFxDimensions() {
                this.motionFX.getSettings().refreshDimensions && this.motionFX.defineDimensions()
            }
            updateAnimation() {
                let e;
                e = "page" === this.motionFX.getSettings("range") ? elementorModules.utils.Scroll.getPageScrollPercentage() : this.motionFX.getSettings("isFixedPosition") ? elementorModules.utils.Scroll.getPageScrollPercentage({}, window.innerHeight) : elementorModules.utils.Scroll.getElementViewportPercentage(this.motionFX.elements.$parent),
                    this.runCallback(e)
            }
        }
        t.default = _default
    }
    ,
    6829: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var i = s(n(1791))
            , o = s(n(1545))
            , r = s(n(8026));
        class _default extends elementorModules.ViewModule {
            getDefaultSettings() {
                return {
                    type: "element",
                    $element: null,
                    $dimensionsElement: null,
                    addBackgroundLayerTo: null,
                    interactions: {},
                    refreshDimensions: !1,
                    range: "viewport",
                    classes: {
                        element: "motion-fx-element",
                        parent: "motion-fx-parent",
                        backgroundType: "motion-fx-element-type-background",
                        container: "motion-fx-container",
                        layer: "motion-fx-layer",
                        perspective: "motion-fx-perspective"
                    }
                }
            }
            bindEvents() {
                this.onWindowResize = this.onWindowResize.bind(this),
                    elementorFrontend.elements.$window.on("resize", this.onWindowResize)
            }
            unbindEvents() {
                elementorFrontend.elements.$window.off("resize", this.onWindowResize)
            }
            addBackgroundLayer() {
                const e = this.getSettings();
                this.elements.$motionFXContainer = jQuery("<div>", {
                    class: e.classes.container
                }),
                    this.elements.$motionFXLayer = jQuery("<div>", {
                        class: e.classes.layer
                    }),
                    this.updateBackgroundLayerSize(),
                    this.elements.$motionFXContainer.prepend(this.elements.$motionFXLayer);
                (e.addBackgroundLayerTo ? this.$element.find(e.addBackgroundLayerTo) : this.$element).prepend(this.elements.$motionFXContainer)
            }
            removeBackgroundLayer() {
                this.elements.$motionFXContainer.remove()
            }
            updateBackgroundLayerSize() {
                const e = this.getSettings()
                    , t = {
                        x: 0,
                        y: 0
                    }
                    , n = e.interactions.mouseMove
                    , s = e.interactions.scroll;
                n && n.translateXY && (t.x = 10 * n.translateXY.speed,
                    t.y = 10 * n.translateXY.speed),
                    s && (s.translateX && (t.x = 10 * s.translateX.speed),
                        s.translateY && (t.y = 10 * s.translateY.speed)),
                    this.elements.$motionFXLayer.css({
                        width: 100 + t.x + "%",
                        height: 100 + t.y + "%"
                    })
            }
            defineDimensions() {
                const e = this.getSettings("$dimensionsElement") || this.$element
                    , t = e.offset()
                    , n = {
                        elementHeight: e.outerHeight(),
                        elementWidth: e.outerWidth(),
                        elementTop: t.top,
                        elementLeft: t.left
                    };
                n.elementRange = n.elementHeight + innerHeight,
                    this.setSettings("dimensions", n),
                    "background" === this.getSettings("type") && this.defineBackgroundLayerDimensions()
            }
            defineBackgroundLayerDimensions() {
                const e = this.getSettings("dimensions");
                e.layerHeight = this.elements.$motionFXLayer.height(),
                    e.layerWidth = this.elements.$motionFXLayer.width(),
                    e.movableX = e.layerWidth - e.elementWidth,
                    e.movableY = e.layerHeight - e.elementHeight,
                    this.setSettings("dimensions", e)
            }
            initInteractionsTypes() {
                this.interactionsTypes = {
                    scroll: i.default,
                    mouseMove: o.default
                }
            }
            prepareSpecialActions() {
                const e = this.getSettings()
                    , t = !(!e.interactions.mouseMove || !e.interactions.mouseMove.tilt);
                this.elements.$parent.toggleClass(e.classes.perspective, t)
            }
            cleanSpecialActions() {
                const e = this.getSettings();
                this.elements.$parent.removeClass(e.classes.perspective)
            }
            runInteractions() {
                const e = this.getSettings();
                this.actions.setCSSTransformVariables(e.elementSettings),
                    this.prepareSpecialActions(),
                    jQuery.each(e.interactions, ((e, t) => {
                        this.interactions[e] = new this.interactionsTypes[e]({
                            motionFX: this,
                            callback: (...e) => {
                                jQuery.each(t, ((t, n) => this.actions.runAction(t, n, ...e)))
                            }
                        }),
                            this.interactions[e].run()
                    }
                    ))
            }
            destroyInteractions() {
                this.cleanSpecialActions(),
                    jQuery.each(this.interactions, ((e, t) => t.destroy())),
                    this.interactions = {}
            }
            refresh() {
                this.actions.setSettings(this.getSettings()),
                    "background" === this.getSettings("type") && (this.updateBackgroundLayerSize(),
                        this.defineBackgroundLayerDimensions()),
                    this.actions.refresh(),
                    this.destroyInteractions(),
                    this.runInteractions()
            }
            destroy() {
                this.destroyInteractions(),
                    this.actions.refresh();
                const e = this.getSettings();
                this.$element.removeClass(e.classes.element),
                    this.elements.$parent.removeClass(e.classes.parent),
                    "background" === e.type && (this.$element.removeClass(e.classes.backgroundType),
                        this.removeBackgroundLayer())
            }
            onInit() {
                super.onInit();
                const e = this.getSettings();
                this.$element = e.$element,
                    this.elements.$parent = this.$element.parent(),
                    this.$element.addClass(e.classes.element),
                    this.elements.$parent = this.$element.parent(),
                    this.elements.$parent.addClass(e.classes.parent),
                    "background" === e.type && (this.$element.addClass(e.classes.backgroundType),
                        this.addBackgroundLayer()),
                    this.defineDimensions(),
                    e.$targetElement = "element" === e.type ? this.$element : this.elements.$motionFXLayer,
                    this.interactions = {},
                    this.actions = new r.default(e),
                    this.initInteractionsTypes(),
                    this.runInteractions()
            }
            onWindowResize() {
                this.defineDimensions()
            }
        }
        t.default = _default
    }
    ,
    1336: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                    elementorFrontend.elementsHandler.attachHandler("paypal-button", (() => n.e(256).then(n.bind(n, 9593))))
            }
        }
        t.default = _default
    }
    ,
    9253: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var i = s(n(8080));
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                    elementorFrontend.elementsHandler.attachHandler("section", i.default, null),
                    elementorFrontend.elementsHandler.attachHandler("widget", i.default, null)
            }
        }
        t.default = _default
    }
    ,
    8080: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = elementorModules.frontend.handlers.Base.extend({
            bindEvents() {
                elementorFrontend.addListenerOnce(this.getUniqueHandlerID() + "sticky", "resize", this.run)
            },
            unbindEvents() {
                elementorFrontend.removeListeners(this.getUniqueHandlerID() + "sticky", "resize", this.run)
            },
            isStickyInstanceActive() {
                return void 0 !== this.$element.data("sticky")
            },
            getResponsiveSetting(e) {
                const t = this.getElementSettings();
                return elementorFrontend.getCurrentDeviceSetting(t, e)
            },
            getResponsiveSettingList: e => ["", ...Object.keys(elementorFrontend.config.responsive.activeBreakpoints)].map((t => t ? `${e}_${t}` : e)),
            activate() {
                var e = this.getElementSettings()
                    , t = {
                        to: e.sticky,
                        offset: this.getResponsiveSetting("sticky_offset"),
                        effectsOffset: this.getResponsiveSetting("sticky_effects_offset"),
                        classes: {
                            sticky: "elementor-sticky",
                            stickyActive: "elementor-sticky--active elementor-section--handles-inside",
                            stickyEffects: "elementor-sticky--effects",
                            spacer: "elementor-sticky__spacer"
                        }
                    }
                    , n = elementorFrontend.elements.$wpAdminBar;
                e.sticky_parent && (t.parent = ".elementor-widget-wrap"),
                    n.length && "top" === e.sticky && "fixed" === n.css("position") && (t.offset += n.height()),
                    this.$element.sticky(t)
            },
            deactivate() {
                this.isStickyInstanceActive() && this.$element.sticky("destroy")
            },
            run(e) {
                if (this.getElementSettings("sticky")) {
                    var t = elementorFrontend.getCurrentDeviceMode();
                    -1 !== this.getElementSettings("sticky_on").indexOf(t) ? !0 === e ? this.reactivate() : this.isStickyInstanceActive() || this.activate() : this.deactivate()
                } else
                    this.deactivate()
            },
            reactivate() {
                this.deactivate(),
                    this.activate()
            },
            onElementChange(e) {
                -1 !== ["sticky", "sticky_on"].indexOf(e) && this.run(!0);
                -1 !== [...this.getResponsiveSettingList("sticky_offset"), ...this.getResponsiveSettingList("sticky_effects_offset"), "sticky_parent"].indexOf(e) && this.reactivate()
            },
            onDeviceModeChange() {
                this.run(!0)
            },
            onInit() {
                elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments),
                    elementorFrontend.isEditMode() && elementor.listenTo(elementor.channels.deviceMode, "change", (() => this.onDeviceModeChange())),
                    this.run()
            },
            onDestroy() {
                elementorModules.frontend.handlers.Base.prototype.onDestroy.apply(this, arguments),
                    this.deactivate()
            }
        });
        t.default = n
    }
    ,
    1498: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                    elementorFrontend.hooks.addAction("frontend/element_ready/video-playlist.default", (e => {
                        n.e(721).then(n.bind(n, 1427)).then((({ default: t }) => {
                            elementorFrontend.elementsHandler.addHandler(t, {
                                $element: e,
                                toggleSelf: !1
                            })
                        }
                        ))
                    }
                    ))
            }
        }
        t.default = _default
    }
}, e => {
    "use strict";
    var t;
    t = 3713,
        e(e.s = t)
}
]);
!function () {
    "use strict";
    function Waypoint(options) {
        if (!options)
            throw new Error("No options passed to Waypoint constructor");
        if (!options.element)
            throw new Error("No element option passed to Waypoint constructor");
        if (!options.handler)
            throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + keyCounter,
            this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options),
            this.element = this.options.element,
            this.adapter = new Waypoint.Adapter(this.element),
            this.callback = options.handler,
            this.axis = this.options.horizontal ? "horizontal" : "vertical",
            this.enabled = this.options.enabled,
            this.triggerPoint = null,
            this.group = Waypoint.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }),
            this.context = Waypoint.Context.findOrCreateByElement(this.options.context),
            Waypoint.offsetAliases[this.options.offset] && (this.options.offset = Waypoint.offsetAliases[this.options.offset]),
            this.group.add(this),
            this.context.add(this),
            allWaypoints[this.key] = this,
            keyCounter += 1
    }
    var keyCounter = 0
        , allWaypoints = {};
    Waypoint.prototype.queueTrigger = function (direction) {
        this.group.queueTrigger(this, direction)
    }
        ,
        Waypoint.prototype.trigger = function (args) {
            this.enabled && this.callback && this.callback.apply(this, args)
        }
        ,
        Waypoint.prototype.destroy = function () {
            this.context.remove(this),
                this.group.remove(this),
                delete allWaypoints[this.key]
        }
        ,
        Waypoint.prototype.disable = function () {
            return this.enabled = !1,
                this
        }
        ,
        Waypoint.prototype.enable = function () {
            return this.context.refresh(),
                this.enabled = !0,
                this
        }
        ,
        Waypoint.prototype.next = function () {
            return this.group.next(this)
        }
        ,
        Waypoint.prototype.previous = function () {
            return this.group.previous(this)
        }
        ,
        Waypoint.invokeAll = function (method) {
            var allWaypointsArray = [];
            for (var waypointKey in allWaypoints)
                allWaypointsArray.push(allWaypoints[waypointKey]);
            for (var i = 0, end = allWaypointsArray.length; i < end; i++)
                allWaypointsArray[i][method]()
        }
        ,
        Waypoint.destroyAll = function () {
            Waypoint.invokeAll("destroy")
        }
        ,
        Waypoint.disableAll = function () {
            Waypoint.invokeAll("disable")
        }
        ,
        Waypoint.enableAll = function () {
            Waypoint.Context.refreshAll();
            for (var waypointKey in allWaypoints)
                allWaypoints[waypointKey].enabled = !0;
            return this
        }
        ,
        Waypoint.refreshAll = function () {
            Waypoint.Context.refreshAll()
        }
        ,
        Waypoint.viewportHeight = function () {
            return window.innerHeight || document.documentElement.clientHeight
        }
        ,
        Waypoint.viewportWidth = function () {
            return document.documentElement.clientWidth
        }
        ,
        Waypoint.adapters = [],
        Waypoint.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        },
        Waypoint.offsetAliases = {
            "bottom-in-view": function () {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function () {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        },
        window.Waypoint = Waypoint
}(),
    function () {
        "use strict";
        function requestAnimationFrameShim(callback) {
            window.setTimeout(callback, 1e3 / 60)
        }
        function Context(element) {
            this.element = element,
                this.Adapter = Waypoint.Adapter,
                this.adapter = new this.Adapter(element),
                this.key = "waypoint-context-" + keyCounter,
                this.didScroll = !1,
                this.didResize = !1,
                this.oldScroll = {
                    x: this.adapter.scrollLeft(),
                    y: this.adapter.scrollTop()
                },
                this.waypoints = {
                    vertical: {},
                    horizontal: {}
                },
                element.waypointContextKey = this.key,
                contexts[element.waypointContextKey] = this,
                keyCounter += 1,
                Waypoint.windowContext || (Waypoint.windowContext = !0,
                    Waypoint.windowContext = new Context(window)),
                this.createThrottledScrollHandler(),
                this.createThrottledResizeHandler()
        }
        var keyCounter = 0
            , contexts = {}
            , Waypoint = window.Waypoint
            , oldWindowLoad = window.onload;
        Context.prototype.add = function (waypoint) {
            var axis = waypoint.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[axis][waypoint.key] = waypoint,
                this.refresh()
        }
            ,
            Context.prototype.checkEmpty = function () {
                var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal)
                    , verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical)
                    , isWindow = this.element == this.element.window;
                horizontalEmpty && verticalEmpty && !isWindow && (this.adapter.off(".waypoints"),
                    delete contexts[this.key])
            }
            ,
            Context.prototype.createThrottledResizeHandler = function () {
                function resizeHandler() {
                    self.handleResize(),
                        self.didResize = !1
                }
                var self = this;
                this.adapter.on("resize.waypoints", function () {
                    self.didResize || (self.didResize = !0,
                        Waypoint.requestAnimationFrame(resizeHandler))
                })
            }
            ,
            Context.prototype.createThrottledScrollHandler = function () {
                function scrollHandler() {
                    self.handleScroll(),
                        self.didScroll = !1
                }
                var self = this;
                this.adapter.on("scroll.waypoints", function () {
                    self.didScroll && !Waypoint.isTouch || (self.didScroll = !0,
                        Waypoint.requestAnimationFrame(scrollHandler))
                })
            }
            ,
            Context.prototype.handleResize = function () {
                Waypoint.Context.refreshAll()
            }
            ,
            Context.prototype.handleScroll = function () {
                var triggeredGroups = {}
                    , axes = {
                        horizontal: {
                            newScroll: this.adapter.scrollLeft(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left"
                        },
                        vertical: {
                            newScroll: this.adapter.scrollTop(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up"
                        }
                    };
                for (var axisKey in axes) {
                    var axis = axes[axisKey]
                        , isForward = axis.newScroll > axis.oldScroll
                        , direction = isForward ? axis.forward : axis.backward;
                    for (var waypointKey in this.waypoints[axisKey]) {
                        var waypoint = this.waypoints[axisKey][waypointKey];
                        if (null !== waypoint.triggerPoint) {
                            var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint
                                , nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint
                                , crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint
                                , crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint;
                            (crossedForward || crossedBackward) && (waypoint.queueTrigger(direction),
                                triggeredGroups[waypoint.group.id] = waypoint.group)
                        }
                    }
                }
                for (var groupKey in triggeredGroups)
                    triggeredGroups[groupKey].flushTriggers();
                this.oldScroll = {
                    x: axes.horizontal.newScroll,
                    y: axes.vertical.newScroll
                }
            }
            ,
            Context.prototype.innerHeight = function () {
                return this.element == this.element.window ? Waypoint.viewportHeight() : this.adapter.innerHeight()
            }
            ,
            Context.prototype.remove = function (waypoint) {
                delete this.waypoints[waypoint.axis][waypoint.key],
                    this.checkEmpty()
            }
            ,
            Context.prototype.innerWidth = function () {
                return this.element == this.element.window ? Waypoint.viewportWidth() : this.adapter.innerWidth()
            }
            ,
            Context.prototype.destroy = function () {
                var allWaypoints = [];
                for (var axis in this.waypoints)
                    for (var waypointKey in this.waypoints[axis])
                        allWaypoints.push(this.waypoints[axis][waypointKey]);
                for (var i = 0, end = allWaypoints.length; i < end; i++)
                    allWaypoints[i].destroy()
            }
            ,
            Context.prototype.refresh = function () {
                var axes, isWindow = this.element == this.element.window, contextOffset = isWindow ? void 0 : this.adapter.offset(), triggeredGroups = {};
                this.handleScroll(),
                    axes = {
                        horizontal: {
                            contextOffset: isWindow ? 0 : contextOffset.left,
                            contextScroll: isWindow ? 0 : this.oldScroll.x,
                            contextDimension: this.innerWidth(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                            offsetProp: "left"
                        },
                        vertical: {
                            contextOffset: isWindow ? 0 : contextOffset.top,
                            contextScroll: isWindow ? 0 : this.oldScroll.y,
                            contextDimension: this.innerHeight(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                            offsetProp: "top"
                        }
                    };
                for (var axisKey in axes) {
                    var axis = axes[axisKey];
                    for (var waypointKey in this.waypoints[axisKey]) {
                        var contextModifier, wasBeforeScroll, nowAfterScroll, triggeredBackward, triggeredForward, waypoint = this.waypoints[axisKey][waypointKey], adjustment = waypoint.options.offset, oldTriggerPoint = waypoint.triggerPoint, elementOffset = 0, freshWaypoint = null == oldTriggerPoint;
                        waypoint.element !== waypoint.element.window && (elementOffset = waypoint.adapter.offset()[axis.offsetProp]),
                            "function" == typeof adjustment ? adjustment = adjustment.apply(waypoint) : "string" == typeof adjustment && (adjustment = parseFloat(adjustment),
                                waypoint.options.offset.indexOf("%") > -1 && (adjustment = Math.ceil(axis.contextDimension * adjustment / 100))),
                            contextModifier = axis.contextScroll - axis.contextOffset,
                            waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment),
                            wasBeforeScroll = oldTriggerPoint < axis.oldScroll,
                            nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll,
                            triggeredBackward = wasBeforeScroll && nowAfterScroll,
                            triggeredForward = !wasBeforeScroll && !nowAfterScroll,
                            !freshWaypoint && triggeredBackward ? (waypoint.queueTrigger(axis.backward),
                                triggeredGroups[waypoint.group.id] = waypoint.group) : !freshWaypoint && triggeredForward ? (waypoint.queueTrigger(axis.forward),
                                    triggeredGroups[waypoint.group.id] = waypoint.group) : freshWaypoint && axis.oldScroll >= waypoint.triggerPoint && (waypoint.queueTrigger(axis.forward),
                                        triggeredGroups[waypoint.group.id] = waypoint.group)
                    }
                }
                return Waypoint.requestAnimationFrame(function () {
                    for (var groupKey in triggeredGroups)
                        triggeredGroups[groupKey].flushTriggers()
                }),
                    this
            }
            ,
            Context.findOrCreateByElement = function (element) {
                return Context.findByElement(element) || new Context(element)
            }
            ,
            Context.refreshAll = function () {
                for (var contextId in contexts)
                    contexts[contextId].refresh()
            }
            ,
            Context.findByElement = function (element) {
                return contexts[element.waypointContextKey]
            }
            ,
            window.onload = function () {
                oldWindowLoad && oldWindowLoad(),
                    Context.refreshAll()
            }
            ,
            Waypoint.requestAnimationFrame = function (callback) {
                var requestFn = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || requestAnimationFrameShim;
                requestFn.call(window, callback)
            }
            ,
            Waypoint.Context = Context
    }(),
    function () {
        "use strict";
        function byTriggerPoint(a, b) {
            return a.triggerPoint - b.triggerPoint
        }
        function byReverseTriggerPoint(a, b) {
            return b.triggerPoint - a.triggerPoint
        }
        function Group(options) {
            this.name = options.name,
                this.axis = options.axis,
                this.id = this.name + "-" + this.axis,
                this.waypoints = [],
                this.clearTriggerQueues(),
                groups[this.axis][this.name] = this
        }
        var groups = {
            vertical: {},
            horizontal: {}
        }
            , Waypoint = window.Waypoint;
        Group.prototype.add = function (waypoint) {
            this.waypoints.push(waypoint)
        }
            ,
            Group.prototype.clearTriggerQueues = function () {
                this.triggerQueues = {
                    up: [],
                    down: [],
                    left: [],
                    right: []
                }
            }
            ,
            Group.prototype.flushTriggers = function () {
                for (var direction in this.triggerQueues) {
                    var waypoints = this.triggerQueues[direction]
                        , reverse = "up" === direction || "left" === direction;
                    waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint);
                    for (var i = 0, end = waypoints.length; i < end; i += 1) {
                        var waypoint = waypoints[i];
                        (waypoint.options.continuous || i === waypoints.length - 1) && waypoint.trigger([direction])
                    }
                }
                this.clearTriggerQueues()
            }
            ,
            Group.prototype.next = function (waypoint) {
                this.waypoints.sort(byTriggerPoint);
                var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
                    , isLast = index === this.waypoints.length - 1;
                return isLast ? null : this.waypoints[index + 1]
            }
            ,
            Group.prototype.previous = function (waypoint) {
                this.waypoints.sort(byTriggerPoint);
                var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
                return index ? this.waypoints[index - 1] : null
            }
            ,
            Group.prototype.queueTrigger = function (waypoint, direction) {
                this.triggerQueues[direction].push(waypoint)
            }
            ,
            Group.prototype.remove = function (waypoint) {
                var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
                index > -1 && this.waypoints.splice(index, 1)
            }
            ,
            Group.prototype.first = function () {
                return this.waypoints[0]
            }
            ,
            Group.prototype.last = function () {
                return this.waypoints[this.waypoints.length - 1]
            }
            ,
            Group.findOrCreate = function (options) {
                return groups[options.axis][options.name] || new Group(options)
            }
            ,
            Waypoint.Group = Group
    }(),
    function () {
        "use strict";
        function JQueryAdapter(element) {
            this.$element = $(element)
        }
        var $ = window.jQuery
            , Waypoint = window.Waypoint;
        $.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (i, method) {
            JQueryAdapter.prototype[method] = function () {
                var args = Array.prototype.slice.call(arguments);
                return this.$element[method].apply(this.$element, args)
            }
        }),
            $.each(["extend", "inArray", "isEmptyObject"], function (i, method) {
                JQueryAdapter[method] = $[method]
            }),
            Waypoint.adapters.push({
                name: "jquery",
                Adapter: JQueryAdapter
            }),
            Waypoint.Adapter = JQueryAdapter
    }(),
    function () {
        "use strict";
        function createExtension(framework) {
            return function () {
                var waypoints = []
                    , overrides = arguments[0];
                return framework.isFunction(arguments[0]) && (overrides = framework.extend({}, arguments[1]),
                    overrides.handler = arguments[0]),
                    this.each(function () {
                        var options = framework.extend({}, overrides, {
                            element: this
                        });
                        "string" == typeof options.context && (options.context = framework(this).closest(options.context)[0]),
                            waypoints.push(new Waypoint(options))
                    }),
                    waypoints
            }
        }
        var Waypoint = window.Waypoint;
        window.jQuery && (window.jQuery.fn.elementorWaypoint = createExtension(window.jQuery)),
            window.Zepto && (window.Zepto.fn.elementorWaypoint = createExtension(window.Zepto))
    }();
/*! jQuery UI - v1.13.2 - 2022-07-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
!function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (x) {
    "use strict";
    var t, e, i, n, W, C, o, s, r, l, a, h, u;
    function E(t, e, i) {
        return [parseFloat(t[0]) * (a.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (a.test(t[1]) ? i / 100 : 1)]
    }
    function L(t, e) {
        return parseInt(x.css(t, e), 10) || 0
    }
    function N(t) {
        return null != t && t === t.window
    }
    x.ui = x.ui || {},
        x.ui.version = "1.13.2",
        /*!
    * jQuery UI :data 1.13.2
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
        x.extend(x.expr.pseudos, {
            data: x.expr.createPseudo ? x.expr.createPseudo(function (e) {
                return function (t) {
                    return !!x.data(t, e)
                }
            }) : function (t, e, i) {
                return !!x.data(t, i[3])
            }
        }),
        /*!
    * jQuery UI Disable Selection 1.13.2
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
        x.fn.extend({
            disableSelection: (t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown",
                function () {
                    return this.on(t + ".ui-disableSelection", function (t) {
                        t.preventDefault()
                    })
                }
            ),
            enableSelection: function () {
                return this.off(".ui-disableSelection")
            }
        }),
        /*!
    * jQuery UI Focusable 1.13.2
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
        x.ui.focusable = function (t, e) {
            var i, n, o, s = t.nodeName.toLowerCase();
            return "area" === s ? (o = (i = t.parentNode).name,
                !(!t.href || !o || "map" !== i.nodeName.toLowerCase()) && (0 < (i = x("img[usemap='#" + o + "']")).length && i.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(s) ? (n = !t.disabled) && (o = x(t).closest("fieldset")[0]) && (n = !o.disabled) : n = "a" === s && t.href || e,
                    n && x(t).is(":visible") && function (t) {
                        var e = t.css("visibility");
                        for (; "inherit" === e;)
                            t = t.parent(),
                                e = t.css("visibility");
                        return "visible" === e
                    }(x(t)))
        }
        ,
        x.extend(x.expr.pseudos, {
            focusable: function (t) {
                return x.ui.focusable(t, null != x.attr(t, "tabindex"))
            }
        }),
        x.fn._form = function () {
            return "string" == typeof this[0].form ? this.closest("form") : x(this[0].form)
        }
        ,
        /*!
    * jQuery UI Form Reset Mixin 1.13.2
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
        x.ui.formResetMixin = {
            _formResetHandler: function () {
                var e = x(this);
                setTimeout(function () {
                    var t = e.data("ui-form-reset-instances");
                    x.each(t, function () {
                        this.refresh()
                    })
                })
            },
            _bindFormResetHandler: function () {
                var t;
                this.form = this.element._form(),
                    this.form.length && ((t = this.form.data("ui-form-reset-instances") || []).length || this.form.on("reset.ui-form-reset", this._formResetHandler),
                        t.push(this),
                        this.form.data("ui-form-reset-instances", t))
            },
            _unbindFormResetHandler: function () {
                var t;
                this.form.length && ((t = this.form.data("ui-form-reset-instances")).splice(x.inArray(this, t), 1),
                    t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))
            }
        },
        x.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
        /*!
    * jQuery UI Support for jQuery core 1.8.x and newer 1.13.2
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    *
    */
        x.expr.pseudos || (x.expr.pseudos = x.expr[":"]),
        x.uniqueSort || (x.uniqueSort = x.unique),
        x.escapeSelector || (e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            i = function (t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }
            ,
            x.escapeSelector = function (t) {
                return (t + "").replace(e, i)
            }
        ),
        x.fn.even && x.fn.odd || x.fn.extend({
            even: function () {
                return this.filter(function (t) {
                    return t % 2 == 0
                })
            },
            odd: function () {
                return this.filter(function (t) {
                    return t % 2 == 1
                })
            }
        }),
        /*!
    * jQuery UI Keycode 1.13.2
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
        x.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        },
        /*!
    * jQuery UI Labels 1.13.2
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
        x.fn.labels = function () {
            var t, e, i;
            return this.length ? this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (e = this.eq(0).parents("label"),
                (t = this.attr("id")) && (i = (i = this.eq(0).parents().last()).add((i.length ? i : this).siblings()),
                    t = "label[for='" + x.escapeSelector(t) + "']",
                    e = e.add(i.find(t).addBack(t))),
                this.pushStack(e)) : this.pushStack([])
        }
        ,
        x.ui.plugin = {
            add: function (t, e, i) {
                var n, o = x.ui[t].prototype;
                for (n in i)
                    o.plugins[n] = o.plugins[n] || [],
                        o.plugins[n].push([e, i[n]])
            },
            call: function (t, e, i, n) {
                var o, s = t.plugins[e];
                if (s && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                    for (o = 0; o < s.length; o++)
                        t.options[s[o][0]] && s[o][1].apply(t.element, i)
            }
        },
        /*!
    * jQuery UI Position 1.13.2
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    *
    * http://api.jqueryui.com/position/
    */
        W = Math.max,
        C = Math.abs,
        o = /left|center|right/,
        s = /top|center|bottom/,
        r = /[\+\-]\d+(\.[\d]+)?%?/,
        l = /^\w+/,
        a = /%$/,
        h = x.fn.position,
        x.position = {
            scrollbarWidth: function () {
                var t, e, i;
                return void 0 !== n ? n : (i = (e = x("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>")).children()[0],
                    x("body").append(e),
                    t = i.offsetWidth,
                    e.css("overflow", "scroll"),
                    t === (i = i.offsetWidth) && (i = e[0].clientWidth),
                    e.remove(),
                    n = t - i)
            },
            getScrollInfo: function (t) {
                var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x")
                    , i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y")
                    , e = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth;
                return {
                    width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? x.position.scrollbarWidth() : 0,
                    height: e ? x.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function (t) {
                var e = x(t || window)
                    , i = N(e[0])
                    , n = !!e[0] && 9 === e[0].nodeType;
                return {
                    element: e,
                    isWindow: i,
                    isDocument: n,
                    offset: !i && !n ? x(t).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: e.scrollLeft(),
                    scrollTop: e.scrollTop(),
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }
            }
        },
        x.fn.position = function (f) {
            var c, d, p, g, m, v, y, w, b, _, t, e;
            return f && f.of ? (v = "string" == typeof (f = x.extend({}, f)).of ? x(document).find(f.of) : x(f.of),
                y = x.position.getWithinInfo(f.within),
                w = x.position.getScrollInfo(y),
                b = (f.collision || "flip").split(" "),
                _ = {},
                e = 9 === (e = (t = v)[0]).nodeType ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : N(e) ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: t.scrollTop(),
                        left: t.scrollLeft()
                    }
                } : e.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: e.pageY,
                        left: e.pageX
                    }
                } : {
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    offset: t.offset()
                },
                v[0].preventDefault && (f.at = "left top"),
                d = e.width,
                p = e.height,
                m = x.extend({}, g = e.offset),
                x.each(["my", "at"], function () {
                    var t, e, i = (f[this] || "").split(" ");
                    (i = 1 === i.length ? o.test(i[0]) ? i.concat(["center"]) : s.test(i[0]) ? ["center"].concat(i) : ["center", "center"] : i)[0] = o.test(i[0]) ? i[0] : "center",
                        i[1] = s.test(i[1]) ? i[1] : "center",
                        t = r.exec(i[0]),
                        e = r.exec(i[1]),
                        _[this] = [t ? t[0] : 0, e ? e[0] : 0],
                        f[this] = [l.exec(i[0])[0], l.exec(i[1])[0]]
                }),
                1 === b.length && (b[1] = b[0]),
                "right" === f.at[0] ? m.left += d : "center" === f.at[0] && (m.left += d / 2),
                "bottom" === f.at[1] ? m.top += p : "center" === f.at[1] && (m.top += p / 2),
                c = E(_.at, d, p),
                m.left += c[0],
                m.top += c[1],
                this.each(function () {
                    var i, t, r = x(this), l = r.outerWidth(), a = r.outerHeight(), e = L(this, "marginLeft"), n = L(this, "marginTop"), o = l + e + L(this, "marginRight") + w.width, s = a + n + L(this, "marginBottom") + w.height, h = x.extend({}, m), u = E(_.my, r.outerWidth(), r.outerHeight());
                    "right" === f.my[0] ? h.left -= l : "center" === f.my[0] && (h.left -= l / 2),
                        "bottom" === f.my[1] ? h.top -= a : "center" === f.my[1] && (h.top -= a / 2),
                        h.left += u[0],
                        h.top += u[1],
                        i = {
                            marginLeft: e,
                            marginTop: n
                        },
                        x.each(["left", "top"], function (t, e) {
                            x.ui.position[b[t]] && x.ui.position[b[t]][e](h, {
                                targetWidth: d,
                                targetHeight: p,
                                elemWidth: l,
                                elemHeight: a,
                                collisionPosition: i,
                                collisionWidth: o,
                                collisionHeight: s,
                                offset: [c[0] + u[0], c[1] + u[1]],
                                my: f.my,
                                at: f.at,
                                within: y,
                                elem: r
                            })
                        }),
                        f.using && (t = function (t) {
                            var e = g.left - h.left
                                , i = e + d - l
                                , n = g.top - h.top
                                , o = n + p - a
                                , s = {
                                    target: {
                                        element: v,
                                        left: g.left,
                                        top: g.top,
                                        width: d,
                                        height: p
                                    },
                                    element: {
                                        element: r,
                                        left: h.left,
                                        top: h.top,
                                        width: l,
                                        height: a
                                    },
                                    horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                                    vertical: o < 0 ? "top" : 0 < n ? "bottom" : "middle"
                                };
                            d < l && C(e + i) < d && (s.horizontal = "center"),
                                p < a && C(n + o) < p && (s.vertical = "middle"),
                                W(C(e), C(i)) > W(C(n), C(o)) ? s.important = "horizontal" : s.important = "vertical",
                                f.using.call(this, t, s)
                        }
                        ),
                        r.offset(x.extend(h, {
                            using: t
                        }))
                })) : h.apply(this, arguments)
        }
        ,
        x.ui.position = {
            fit: {
                left: function (t, e) {
                    var i, n = e.within, o = n.isWindow ? n.scrollLeft : n.offset.left, n = n.width, s = t.left - e.collisionPosition.marginLeft, r = o - s, l = s + e.collisionWidth - n - o;
                    e.collisionWidth > n ? 0 < r && l <= 0 ? (i = t.left + r + e.collisionWidth - n - o,
                        t.left += r - i) : t.left = !(0 < l && r <= 0) && l < r ? o + n - e.collisionWidth : o : 0 < r ? t.left += r : 0 < l ? t.left -= l : t.left = W(t.left - s, t.left)
                },
                top: function (t, e) {
                    var i, n = e.within, n = n.isWindow ? n.scrollTop : n.offset.top, o = e.within.height, s = t.top - e.collisionPosition.marginTop, r = n - s, l = s + e.collisionHeight - o - n;
                    e.collisionHeight > o ? 0 < r && l <= 0 ? (i = t.top + r + e.collisionHeight - o - n,
                        t.top += r - i) : t.top = !(0 < l && r <= 0) && l < r ? n + o - e.collisionHeight : n : 0 < r ? t.top += r : 0 < l ? t.top -= l : t.top = W(t.top - s, t.top)
                }
            },
            flip: {
                left: function (t, e) {
                    var i = e.within
                        , n = i.offset.left + i.scrollLeft
                        , o = i.width
                        , i = i.isWindow ? i.scrollLeft : i.offset.left
                        , s = t.left - e.collisionPosition.marginLeft
                        , r = s - i
                        , s = s + e.collisionWidth - o - i
                        , l = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0
                        , a = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0
                        , h = -2 * e.offset[0];
                    r < 0 ? ((o = t.left + l + a + h + e.collisionWidth - o - n) < 0 || o < C(r)) && (t.left += l + a + h) : 0 < s && (0 < (n = t.left - e.collisionPosition.marginLeft + l + a + h - i) || C(n) < s) && (t.left += l + a + h)
                },
                top: function (t, e) {
                    var i = e.within
                        , n = i.offset.top + i.scrollTop
                        , o = i.height
                        , i = i.isWindow ? i.scrollTop : i.offset.top
                        , s = t.top - e.collisionPosition.marginTop
                        , r = s - i
                        , s = s + e.collisionHeight - o - i
                        , l = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0
                        , a = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0
                        , h = -2 * e.offset[1];
                    r < 0 ? ((o = t.top + l + a + h + e.collisionHeight - o - n) < 0 || o < C(r)) && (t.top += l + a + h) : 0 < s && (0 < (n = t.top - e.collisionPosition.marginTop + l + a + h - i) || C(n) < s) && (t.top += l + a + h)
                }
            },
            flipfit: {
                left: function () {
                    x.ui.position.flip.left.apply(this, arguments),
                        x.ui.position.fit.left.apply(this, arguments)
                },
                top: function () {
                    x.ui.position.flip.top.apply(this, arguments),
                        x.ui.position.fit.top.apply(this, arguments)
                }
            }
        },
        x.ui.safeActiveElement = function (e) {
            var i;
            try {
                i = e.activeElement
            } catch (t) {
                i = e.body
            }
            return i = (i = i || e.body).nodeName ? i : e.body
        }
        ,
        x.ui.safeBlur = function (t) {
            t && "body" !== t.nodeName.toLowerCase() && x(t).trigger("blur")
        }
        ,
        /*!
    * jQuery UI Scroll Parent 1.13.2
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
        x.fn.scrollParent = function (t) {
            var e = this.css("position")
                , i = "absolute" === e
                , n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/
                , t = this.parents().filter(function () {
                    var t = x(this);
                    return (!i || "static" !== t.css("position")) && n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== e && t.length ? t : x(this[0].ownerDocument || document)
        }
        ,
        /*!
    * jQuery UI Tabbable 1.13.2
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
        x.extend(x.expr.pseudos, {
            tabbable: function (t) {
                var e = x.attr(t, "tabindex")
                    , i = null != e;
                return (!i || 0 <= e) && x.ui.focusable(t, i)
            }
        }),
        /*!
    * jQuery UI Unique ID 1.13.2
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
        x.fn.extend({
            uniqueId: (u = 0,
                function () {
                    return this.each(function () {
                        this.id || (this.id = "ui-id-" + ++u)
                    })
                }
            ),
            removeUniqueId: function () {
                return this.each(function () {
                    /^ui-id-\d+$/.test(this.id) && x(this).removeAttr("id")
                })
            }
        });
    /*!
* jQuery UI Widget 1.13.2
* http://jqueryui.com
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license.
* http://jquery.org/license
*/
    var f, c = 0, d = Array.prototype.hasOwnProperty, p = Array.prototype.slice;
    x.cleanData = (f = x.cleanData,
        function (t) {
            for (var e, i, n = 0; null != (i = t[n]); n++)
                (e = x._data(i, "events")) && e.remove && x(i).triggerHandler("remove");
            f(t)
        }
    ),
        x.widget = function (t, i, e) {
            var n, o, s, r = {}, l = t.split(".")[0], a = l + "-" + (t = t.split(".")[1]);
            return e || (e = i,
                i = x.Widget),
                Array.isArray(e) && (e = x.extend.apply(null, [{}].concat(e))),
                x.expr.pseudos[a.toLowerCase()] = function (t) {
                    return !!x.data(t, a)
                }
                ,
                x[l] = x[l] || {},
                n = x[l][t],
                o = x[l][t] = function (t, e) {
                    if (!this || !this._createWidget)
                        return new o(t, e);
                    arguments.length && this._createWidget(t, e)
                }
                ,
                x.extend(o, n, {
                    version: e.version,
                    _proto: x.extend({}, e),
                    _childConstructors: []
                }),
                (s = new i).options = x.widget.extend({}, s.options),
                x.each(e, function (e, n) {
                    function o() {
                        return i.prototype[e].apply(this, arguments)
                    }
                    function s(t) {
                        return i.prototype[e].apply(this, t)
                    }
                    r[e] = "function" != typeof n ? n : function () {
                        var t, e = this._super, i = this._superApply;
                        return this._super = o,
                            this._superApply = s,
                            t = n.apply(this, arguments),
                            this._super = e,
                            this._superApply = i,
                            t
                    }
                }),
                o.prototype = x.widget.extend(s, {
                    widgetEventPrefix: n && s.widgetEventPrefix || t
                }, r, {
                    constructor: o,
                    namespace: l,
                    widgetName: t,
                    widgetFullName: a
                }),
                n ? (x.each(n._childConstructors, function (t, e) {
                    var i = e.prototype;
                    x.widget(i.namespace + "." + i.widgetName, o, e._proto)
                }),
                    delete n._childConstructors) : i._childConstructors.push(o),
                x.widget.bridge(t, o),
                o
        }
        ,
        x.widget.extend = function (t) {
            for (var e, i, n = p.call(arguments, 1), o = 0, s = n.length; o < s; o++)
                for (e in n[o])
                    i = n[o][e],
                        d.call(n[o], e) && void 0 !== i && (x.isPlainObject(i) ? t[e] = x.isPlainObject(t[e]) ? x.widget.extend({}, t[e], i) : x.widget.extend({}, i) : t[e] = i);
            return t
        }
        ,
        x.widget.bridge = function (s, e) {
            var r = e.prototype.widgetFullName || s;
            x.fn[s] = function (i) {
                var t = "string" == typeof i
                    , n = p.call(arguments, 1)
                    , o = this;
                return t ? this.length || "instance" !== i ? this.each(function () {
                    var t, e = x.data(this, r);
                    return "instance" === i ? (o = e,
                        !1) : e ? "function" != typeof e[i] || "_" === i.charAt(0) ? x.error("no such method '" + i + "' for " + s + " widget instance") : (t = e[i].apply(e, n)) !== e && void 0 !== t ? (o = t && t.jquery ? o.pushStack(t.get()) : t,
                            !1) : void 0 : x.error("cannot call methods on " + s + " prior to initialization; attempted to call method '" + i + "'")
                }) : o = void 0 : (n.length && (i = x.widget.extend.apply(null, [i].concat(n))),
                    this.each(function () {
                        var t = x.data(this, r);
                        t ? (t.option(i || {}),
                            t._init && t._init()) : x.data(this, r, new e(i, this))
                    })),
                    o
            }
        }
        ,
        x.Widget = function () { }
        ,
        x.Widget._childConstructors = [],
        x.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                classes: {},
                disabled: !1,
                create: null
            },
            _createWidget: function (t, e) {
                e = x(e || this.defaultElement || this)[0],
                    this.element = x(e),
                    this.uuid = c++,
                    this.eventNamespace = "." + this.widgetName + this.uuid,
                    this.bindings = x(),
                    this.hoverable = x(),
                    this.focusable = x(),
                    this.classesElementLookup = {},
                    e !== this && (x.data(e, this.widgetFullName, this),
                        this._on(!0, this.element, {
                            remove: function (t) {
                                t.target === e && this.destroy()
                            }
                        }),
                        this.document = x(e.style ? e.ownerDocument : e.document || e),
                        this.window = x(this.document[0].defaultView || this.document[0].parentWindow)),
                    this.options = x.widget.extend({}, this.options, this._getCreateOptions(), t),
                    this._create(),
                    this.options.disabled && this._setOptionDisabled(this.options.disabled),
                    this._trigger("create", null, this._getCreateEventData()),
                    this._init()
            },
            _getCreateOptions: function () {
                return {}
            },
            _getCreateEventData: x.noop,
            _create: x.noop,
            _init: x.noop,
            destroy: function () {
                var i = this;
                this._destroy(),
                    x.each(this.classesElementLookup, function (t, e) {
                        i._removeClass(e, t)
                    }),
                    this.element.off(this.eventNamespace).removeData(this.widgetFullName),
                    this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
                    this.bindings.off(this.eventNamespace)
            },
            _destroy: x.noop,
            widget: function () {
                return this.element
            },
            option: function (t, e) {
                var i, n, o, s = t;
                if (0 === arguments.length)
                    return x.widget.extend({}, this.options);
                if ("string" == typeof t)
                    if (s = {},
                        t = (i = t.split(".")).shift(),
                        i.length) {
                        for (n = s[t] = x.widget.extend({}, this.options[t]),
                            o = 0; o < i.length - 1; o++)
                            n[i[o]] = n[i[o]] || {},
                                n = n[i[o]];
                        if (t = i.pop(),
                            1 === arguments.length)
                            return void 0 === n[t] ? null : n[t];
                        n[t] = e
                    } else {
                        if (1 === arguments.length)
                            return void 0 === this.options[t] ? null : this.options[t];
                        s[t] = e
                    }
                return this._setOptions(s),
                    this
            },
            _setOptions: function (t) {
                for (var e in t)
                    this._setOption(e, t[e]);
                return this
            },
            _setOption: function (t, e) {
                return "classes" === t && this._setOptionClasses(e),
                    this.options[t] = e,
                    "disabled" === t && this._setOptionDisabled(e),
                    this
            },
            _setOptionClasses: function (t) {
                var e, i, n;
                for (e in t)
                    n = this.classesElementLookup[e],
                        t[e] !== this.options.classes[e] && n && n.length && (i = x(n.get()),
                            this._removeClass(n, e),
                            i.addClass(this._classes({
                                element: i,
                                keys: e,
                                classes: t,
                                add: !0
                            })))
            },
            _setOptionDisabled: function (t) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t),
                    t && (this._removeClass(this.hoverable, null, "ui-state-hover"),
                        this._removeClass(this.focusable, null, "ui-state-focus"))
            },
            enable: function () {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function () {
                return this._setOptions({
                    disabled: !0
                })
            },
            _classes: function (o) {
                var s = []
                    , r = this;
                function t(t, e) {
                    for (var i, n = 0; n < t.length; n++)
                        i = r.classesElementLookup[t[n]] || x(),
                            i = o.add ? (function () {
                                var i = [];
                                o.element.each(function (t, e) {
                                    x.map(r.classesElementLookup, function (t) {
                                        return t
                                    }).some(function (t) {
                                        return t.is(e)
                                    }) || i.push(e)
                                }),
                                    r._on(x(i), {
                                        remove: "_untrackClassesElement"
                                    })
                            }(),
                                x(x.uniqueSort(i.get().concat(o.element.get())))) : x(i.not(o.element).get()),
                            r.classesElementLookup[t[n]] = i,
                            s.push(t[n]),
                            e && o.classes[t[n]] && s.push(o.classes[t[n]])
                }
                return (o = x.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, o)).keys && t(o.keys.match(/\S+/g) || [], !0),
                    o.extra && t(o.extra.match(/\S+/g) || []),
                    s.join(" ")
            },
            _untrackClassesElement: function (i) {
                var n = this;
                x.each(n.classesElementLookup, function (t, e) {
                    -1 !== x.inArray(i.target, e) && (n.classesElementLookup[t] = x(e.not(i.target).get()))
                }),
                    this._off(x(i.target))
            },
            _removeClass: function (t, e, i) {
                return this._toggleClass(t, e, i, !1)
            },
            _addClass: function (t, e, i) {
                return this._toggleClass(t, e, i, !0)
            },
            _toggleClass: function (t, e, i, n) {
                var o = "string" == typeof t || null === t
                    , e = {
                        extra: o ? e : i,
                        keys: o ? t : e,
                        element: o ? this.element : t,
                        add: n = "boolean" == typeof n ? n : i
                    };
                return e.element.toggleClass(this._classes(e), n),
                    this
            },
            _on: function (o, s, t) {
                var r, l = this;
                "boolean" != typeof o && (t = s,
                    s = o,
                    o = !1),
                    t ? (s = r = x(s),
                        this.bindings = this.bindings.add(s)) : (t = s,
                            s = this.element,
                            r = this.widget()),
                    x.each(t, function (t, e) {
                        function i() {
                            if (o || !0 !== l.options.disabled && !x(this).hasClass("ui-state-disabled"))
                                return ("string" == typeof e ? l[e] : e).apply(l, arguments)
                        }
                        "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || x.guid++);
                        var t = t.match(/^([\w:-]*)\s*(.*)$/)
                            , n = t[1] + l.eventNamespace
                            , t = t[2];
                        t ? r.on(n, t, i) : s.on(n, i)
                    })
            },
            _off: function (t, e) {
                e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
                    t.off(e),
                    this.bindings = x(this.bindings.not(t).get()),
                    this.focusable = x(this.focusable.not(t).get()),
                    this.hoverable = x(this.hoverable.not(t).get())
            },
            _delay: function (t, e) {
                var i = this;
                return setTimeout(function () {
                    return ("string" == typeof t ? i[t] : t).apply(i, arguments)
                }, e || 0)
            },
            _hoverable: function (t) {
                this.hoverable = this.hoverable.add(t),
                    this._on(t, {
                        mouseenter: function (t) {
                            this._addClass(x(t.currentTarget), null, "ui-state-hover")
                        },
                        mouseleave: function (t) {
                            this._removeClass(x(t.currentTarget), null, "ui-state-hover")
                        }
                    })
            },
            _focusable: function (t) {
                this.focusable = this.focusable.add(t),
                    this._on(t, {
                        focusin: function (t) {
                            this._addClass(x(t.currentTarget), null, "ui-state-focus")
                        },
                        focusout: function (t) {
                            this._removeClass(x(t.currentTarget), null, "ui-state-focus")
                        }
                    })
            },
            _trigger: function (t, e, i) {
                var n, o, s = this.options[t];
                if (i = i || {},
                    (e = x.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
                    e.target = this.element[0],
                    o = e.originalEvent)
                    for (n in o)
                        n in e || (e[n] = o[n]);
                return this.element.trigger(e, i),
                    !("function" == typeof s && !1 === s.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
            }
        },
        x.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function (s, r) {
            x.Widget.prototype["_" + s] = function (e, t, i) {
                var n, o = (t = "string" == typeof t ? {
                    effect: t
                } : t) ? !0 !== t && "number" != typeof t && t.effect || r : s;
                "number" == typeof (t = t || {}) ? t = {
                    duration: t
                } : !0 === t && (t = {}),
                    n = !x.isEmptyObject(t),
                    t.complete = i,
                    t.delay && e.delay(t.delay),
                    n && x.effects && x.effects.effect[o] ? e[s](t) : o !== s && e[o] ? e[o](t.duration, t.easing, i) : e.queue(function (t) {
                        x(this)[s](),
                            i && i.call(e[0]),
                            t()
                    })
            }
        })
});
var elementorFrontendConfig = {
    "environmentMode": {
        "edit": !1,
        "wpPreview": !1,
        "isScriptDebug": !1
    },
    "i18n": {
        "shareOnFacebook": "Share on Facebook",
        "shareOnTwitter": "Share on Twitter",
        "pinIt": "Pin it",
        "download": "Download",
        "downloadImage": "Download image",
        "fullscreen": "Fullscreen",
        "zoom": "Zoom",
        "share": "Share",
        "playVideo": "Play Video",
        "previous": "Previous",
        "next": "Next",
        "close": "Close"
    },
    "is_rtl": !1,
    "breakpoints": {
        "xs": 0,
        "sm": 480,
        "md": 768,
        "lg": 1025,
        "xl": 1440,
        "xxl": 1600
    },
    "responsive": {
        "breakpoints": {
            "mobile": {
                "label": "Mobile",
                "value": 767,
                "default_value": 767,
                "direction": "max",
                "is_enabled": !0
            },
            "mobile_extra": {
                "label": "Mobile Extra",
                "value": 880,
                "default_value": 880,
                "direction": "max",
                "is_enabled": !1
            },
            "tablet": {
                "label": "Tablet",
                "value": 1024,
                "default_value": 1024,
                "direction": "max",
                "is_enabled": !0
            },
            "tablet_extra": {
                "label": "Tablet Extra",
                "value": 1200,
                "default_value": 1200,
                "direction": "max",
                "is_enabled": !1
            },
            "laptop": {
                "label": "Laptop",
                "value": 1366,
                "default_value": 1366,
                "direction": "max",
                "is_enabled": !1
            },
            "widescreen": {
                "label": "Widescreen",
                "value": 2400,
                "default_value": 2400,
                "direction": "min",
                "is_enabled": !1
            }
        }
    },
    "version": "3.5.2",
    "is_static": !1,
    "experimentalFeatures": {
        "e_dom_optimization": !0,
        "e_optimized_assets_loading": !0,
        "e_optimized_css_loading": !0,
        "a11y_improvements": !0,
        "e_import_export": !0,
        "additional_custom_breakpoints": !0,
        "e_hidden_wordpress_widgets": !0,
        "hello-theme-header-footer": !0,
        "landing-pages": !0,
        "elements-color-picker": !0,
        "favorite-widgets": !0,
        "admin-top-bar": !0,
        "form-submissions": !0
    },
    "urls": {
        "assets": ""
    },
    "settings": {
        "page": [],
        "editorPreferences": []
    },
    "kit": {
        "active_breakpoints": ["viewport_mobile", "viewport_tablet"],
        "global_image_lightbox": "yes",
        "lightbox_enable_counter": "yes",
        "lightbox_enable_fullscreen": "yes",
        "lightbox_enable_zoom": "yes",
        "lightbox_enable_share": "yes",
        "lightbox_title_src": "title",
        "lightbox_description_src": "description",
        "hello_header_logo_type": "title",
        "hello_footer_logo_type": "logo"
    },
    "post": {
        "id": 10,
        "title": "Adymize%20%E2%80%93%20Performance%20Marketing%20Agency",
        "excerpt": "",
        "featuredImage": !1
    }
};
/*!elementor - v3.5.2 - 22-12-2021*/
"use strict";
(self.webpackChunkelementor = self.webpackChunkelementor || []).push([[819], {
    9220: (e, t, n) => {
        var i = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var s = i(n(8135));
        class _default extends elementorModules.ViewModule {
            constructor(...e) {
                super(...e),
                    this.documents = {},
                    this.initDocumentClasses(),
                    this.attachDocumentsClasses()
            }
            getDefaultSettings() {
                return {
                    selectors: {
                        document: ".elementor"
                    }
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors");
                return {
                    $documents: jQuery(e.document)
                }
            }
            initDocumentClasses() {
                this.documentClasses = {
                    base: s.default
                },
                    elementorFrontend.hooks.doAction("elementor/frontend/documents-manager/init-classes", this)
            }
            addDocumentClass(e, t) {
                this.documentClasses[e] = t
            }
            attachDocumentsClasses() {
                this.elements.$documents.each(((e, t) => this.attachDocumentClass(jQuery(t))))
            }
            attachDocumentClass(e) {
                const t = e.data()
                    , n = t.elementorId
                    , i = t.elementorType
                    , s = this.documentClasses[i] || this.documentClasses.base;
                this.documents[n] = new s({
                    $element: e,
                    id: n
                })
            }
        }
        t.default = _default
    }
    ,
    9804: (e, t, n) => {
        var i = n(7914)
            , s = i(n(6397))
            , o = i(n(9320))
            , r = i(n(7537));
        e.exports = function (e) {
            const t = {};
            this.elementsHandlers = {
                "accordion.default": () => n.e(209).then(n.bind(n, 8470)),
                "alert.default": () => n.e(745).then(n.bind(n, 9269)),
                "counter.default": () => n.e(120).then(n.bind(n, 7884)),
                "progress.default": () => n.e(192).then(n.bind(n, 1351)),
                "tabs.default": () => n.e(520).then(n.bind(n, 9459)),
                "toggle.default": () => n.e(181).then(n.bind(n, 2)),
                "video.default": () => n.e(791).then(n.bind(n, 5363)),
                "image-carousel.default": () => n.e(268).then(n.bind(n, 5914)),
                "text-editor.default": () => n.e(357).then(n.bind(n, 1327)),
                "wp-widget-media_audio.default": () => n.e(52).then(n.bind(n, 7602))
            };
            const addElementsHandlers = () => {
                this.elementsHandlers.section = o.default,
                    this.elementsHandlers.column = r.default,
                    e.each(this.elementsHandlers, ((e, t) => {
                        const n = e.split(".");
                        e = n[0];
                        const i = n[1] || null;
                        this.attachHandler(e, t, i)
                    }
                    ))
            }
                , isClassHandler = e => {
                    var t;
                    return null === (t = e.prototype) || void 0 === t ? void 0 : t.getUniqueHandlerID
                }
                , addHandlerWithHook = (e, t, n = "default") => {
                    n = n ? "." + n : "",
                        elementorFrontend.hooks.addAction(`frontend/element_ready/${e}${n}`, (e => {
                            if (isClassHandler(t))
                                this.addHandler(t, {
                                    $element: e
                                }, !0);
                            else {
                                const n = t();
                                n instanceof Promise ? n.then((({ default: t }) => {
                                    this.addHandler(t, {
                                        $element: e
                                    }, !0)
                                }
                                )) : this.addHandler(n, {
                                    $element: e
                                }, !0)
                            }
                        }
                        ))
                }
                ;
            this.addHandler = function (e, n) {
                const i = n.$element.data("model-cid");
                let s;
                if (i) {
                    s = e.prototype.getConstructorID(),
                        t[i] || (t[i] = {});
                    const n = t[i][s];
                    n && n.onDestroy()
                }
                const o = new e(n);
                i && (t[i][s] = o)
            }
                ,
                this.attachHandler = (e, t, n) => {
                    Array.isArray(t) || (t = [t]),
                        t.forEach((t => addHandlerWithHook(e, t, n)))
                }
                ,
                this.getHandler = function (e) {
                    if (!e)
                        return;
                    const t = this.elementsHandlers[e];
                    return isClassHandler(t) ? t : new Promise((e => {
                        t().then((({ default: t }) => {
                            e(t)
                        }
                        ))
                    }
                    ))
                }
                ,
                this.getHandlers = function (e) {
                    return elementorCommon.helpers.softDeprecated("getHandlers", "3.1.0", "elementorFrontend.elementsHandler.getHandler"),
                        e ? this.getHandler(e) : this.elementsHandlers
                }
                ,
                this.runReadyTrigger = function (t) {
                    if (elementorFrontend.config.is_static)
                        return;
                    const n = jQuery(t)
                        , i = n.attr("data-element_type");
                    if (i && (elementorFrontend.hooks.doAction("frontend/element_ready/global", n, e),
                        elementorFrontend.hooks.doAction(`frontend/element_ready/${i}`, n, e),
                        "widget" === i)) {
                        const t = n.attr("data-widget_type");
                        elementorFrontend.hooks.doAction(`frontend/element_ready/${t}`, n, e)
                    }
                }
                ,
                this.init = () => {
                    elementorFrontend.hooks.addAction("frontend/element_ready/global", s.default),
                        addElementsHandlers()
                }
        }
    }
    ,
    5654: (e, t, n) => {
        var i = n(7914);
        n(59);
        var s = i(n(9220))
            , o = i(n(5107))
            , r = i(n(3308))
            , a = i(n(1604))
            , l = i(n(1911))
            , d = i(n(4773))
            , c = i(n(2064))
            , u = i(n(8628))
            , h = i(n(8646))
            , m = i(n(6866))
            , g = i(n(4375))
            , p = i(n(6404))
            , f = i(n(6046))
            , v = n(6028);
        const b = n(9469)
            , y = n(9804)
            , _ = n(3346);
        class Frontend extends elementorModules.ViewModule {
            constructor(...e) {
                super(...e),
                    this.config = elementorFrontendConfig,
                    this.config.legacyMode = {
                        get elementWrappers() {
                            return elementorFrontend.isEditMode() && elementorCommon.helpers.hardDeprecated("elementorFrontend.config.legacyMode.elementWrappers", "3.1.0", "elementorFrontend.config.experimentalFeatures.e_dom_optimization"),
                                !elementorFrontend.config.experimentalFeatures.e_dom_optimization
                        }
                    },
                    this.populateActiveBreakpointsConfig()
            }
            get Module() {
                return this.isEditMode() && parent.elementorCommon.helpers.hardDeprecated("elementorFrontend.Module", "2.5.0", "elementorModules.frontend.handlers.Base"),
                    elementorModules.frontend.handlers.Base
            }
            getDefaultSettings() {
                return {
                    selectors: {
                        elementor: ".elementor",
                        adminBar: "#wpadminbar"
                    }
                }
            }
            getDefaultElements() {
                const e = {
                    window,
                    $window: jQuery(window),
                    $document: jQuery(document),
                    $head: jQuery(document.head),
                    $body: jQuery(document.body),
                    $deviceMode: jQuery("<span>", {
                        id: "elementor-device-mode",
                        class: "elementor-screen-only"
                    })
                };
                return e.$body.append(e.$deviceMode),
                    e
            }
            bindEvents() {
                this.elements.$window.on("resize", (() => this.setDeviceModeData()))
            }
            getElements(e) {
                return this.getItems(this.elements, e)
            }
            getPageSettings(e) {
                const t = this.isEditMode() ? elementor.settings.page.model.attributes : this.config.settings.page;
                return this.getItems(t, e)
            }
            getGeneralSettings(e) {
                return this.isEditMode() && parent.elementorCommon.helpers.softDeprecated("getGeneralSettings", "3.0.0", "getKitSettings and remove the `elementor_` prefix"),
                    this.getKitSettings(`elementor_${e}`)
            }
            getKitSettings(e) {
                return this.getItems(this.config.kit, e)
            }
            getCurrentDeviceMode() {
                return getComputedStyle(this.elements.$deviceMode[0], ":after").content.replace(/"/g, "")
            }
            getDeviceSetting(e, t, n) {
                if ("widescreen" === e)
                    return this.getWidescreenSetting(t, n);
                const i = elementorFrontend.breakpoints.getActiveBreakpointsList({
                    largeToSmall: !0,
                    withDesktop: !0
                });
                let s = i.indexOf(e);
                for (; s > 0;) {
                    const e = t[n + "_" + i[s]];
                    if (e || 0 === e)
                        return e;
                    s--
                }
                return t[n]
            }
            getWidescreenSetting(e, t) {
                const n = t + "_widescreen";
                let i;
                return i = e[n] ? e[n] : e[t],
                    i
            }
            getCurrentDeviceSetting(e, t) {
                return this.getDeviceSetting(elementorFrontend.getCurrentDeviceMode(), e, t)
            }
            isEditMode() {
                return this.config.environmentMode.edit
            }
            isWPPreviewMode() {
                return this.config.environmentMode.wpPreview
            }
            initDialogsManager() {
                let e;
                this.getDialogsManager = () => (e || (e = new DialogsManager.Instance),
                    e)
            }
            initOnReadyComponents() {
                this.utils = {
                    youtube: new a.default,
                    vimeo: new l.default,
                    baseVideoLoader: new d.default,
                    anchors: new _,
                    get lightbox() {
                        return h.default.getLightbox()
                    },
                    urlActions: new c.default,
                    swiper: u.default,
                    environment: r.default,
                    assetsLoader: new m.default,
                    escapeHTML: v.escapeHTML
                },
                    this.modules = {
                        StretchElement: elementorModules.frontend.tools.StretchElement,
                        Masonry: elementorModules.utils.Masonry
                    },
                    this.elementsHandler.init(),
                    this.isEditMode() ? elementor.once("document:loaded", (() => this.onDocumentLoaded())) : this.onDocumentLoaded()
            }
            initOnReadyElements() {
                this.elements.$wpAdminBar = this.elements.$document.find(this.getSettings("selectors.adminBar"))
            }
            addUserAgentClasses() {
                for (const [e, t] of Object.entries(r.default))
                    t && this.elements.$body.addClass("e--ua-" + e)
            }
            setDeviceModeData() {
                this.elements.$body.attr("data-elementor-device-mode", this.getCurrentDeviceMode())
            }
            addListenerOnce(e, t, n, i) {
                if (i || (i = this.elements.$window),
                    this.isEditMode())
                    if (this.removeListeners(e, t, i),
                        i instanceof jQuery) {
                        const s = t + "." + e;
                        i.on(s, n)
                    } else
                        i.on(t, n, e);
                else
                    i.on(t, n)
            }
            removeListeners(e, t, n, i) {
                if (i || (i = this.elements.$window),
                    i instanceof jQuery) {
                    const s = t + "." + e;
                    i.off(s, n)
                } else
                    i.off(t, n, e)
            }
            debounce(e, t) {
                let n;
                return function () {
                    const i = this
                        , s = arguments
                        , later = () => {
                            n = null,
                                e.apply(i, s)
                        }
                        , o = !n;
                    clearTimeout(n),
                        n = setTimeout(later, t),
                        o && e.apply(i, s)
                }
            }
            waypoint(e, t, n) {
                n = jQuery.extend({
                    offset: "100%",
                    triggerOnce: !0
                }, n);
                return e.elementorWaypoint((function () {
                    const e = this.element || this
                        , i = t.apply(e, arguments);
                    return n.triggerOnce && this.destroy && this.destroy(),
                        i
                }
                ), n)
            }
            muteMigrationTraces() {
                jQuery.migrateMute = !0,
                    jQuery.migrateTrace = !1
            }
            initModules() {
                const e = {
                    shapes: f.default
                };
                elementorFrontend.trigger("elementor/modules/init:before"),
                    elementorFrontend.trigger("elementor/modules/init/before"),
                    Object.entries(e).forEach((([e, t]) => {
                        this.modulesHandlers[e] = new t
                    }
                    ))
            }
            populateActiveBreakpointsConfig() {
                this.config.responsive.activeBreakpoints = {},
                    Object.entries(this.config.responsive.breakpoints).forEach((([e, t]) => {
                        t.is_enabled && (this.config.responsive.activeBreakpoints[e] = t)
                    }
                    ))
            }
            init() {
                this.hooks = new b,
                    this.breakpoints = new g.default(this.config.responsive),
                    this.storage = new o.default,
                    this.elementsHandler = new y(jQuery),
                    this.modulesHandlers = {},
                    this.addUserAgentClasses(),
                    this.setDeviceModeData(),
                    this.initDialogsManager(),
                    this.isEditMode() && this.muteMigrationTraces(),
                    p.default.dispatch(this.elements.$window, "elementor/frontend/init"),
                    this.initModules(),
                    this.initOnReadyElements(),
                    this.initOnReadyComponents()
            }
            onDocumentLoaded() {
                this.documentsManager = new s.default,
                    this.trigger("components:init"),
                    new h.default
            }
        }
        window.elementorFrontend = new Frontend,
            elementorFrontend.isEditMode() || jQuery((() => elementorFrontend.init()))
    }
    ,
    4058: (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class BackgroundSlideshow extends elementorModules.frontend.handlers.SwiperBase {
            getDefaultSettings() {
                return {
                    classes: {
                        swiperContainer: "elementor-background-slideshow swiper-container",
                        swiperWrapper: "swiper-wrapper",
                        swiperSlide: "elementor-background-slideshow__slide swiper-slide",
                        slideBackground: "elementor-background-slideshow__slide__image",
                        kenBurns: "elementor-ken-burns",
                        kenBurnsActive: "elementor-ken-burns--active",
                        kenBurnsIn: "elementor-ken-burns--in",
                        kenBurnsOut: "elementor-ken-burns--out"
                    }
                }
            }
            getSwiperOptions() {
                const e = this.getElementSettings()
                    , t = {
                        grabCursor: !1,
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        loop: "yes" === e.background_slideshow_loop,
                        speed: e.background_slideshow_transition_duration,
                        autoplay: {
                            delay: e.background_slideshow_slide_duration,
                            stopOnLastSlide: !e.background_slideshow_loop
                        },
                        handleElementorBreakpoints: !0,
                        on: {
                            slideChange: () => {
                                e.background_slideshow_ken_burns && this.handleKenBurns()
                            }
                        }
                    };
                switch ("yes" === e.background_slideshow_loop && (t.loopedSlides = this.getSlidesCount()),
                e.background_slideshow_slide_transition) {
                    case "fade":
                        t.effect = "fade",
                            t.fadeEffect = {
                                crossFade: !0
                            };
                        break;
                    case "slide_down":
                        t.autoplay.reverseDirection = !0;
                    case "slide_up":
                        t.direction = "vertical"
                }
                return t
            }
            buildSwiperElements() {
                const e = this.getSettings("classes")
                    , t = this.getElementSettings()
                    , n = "slide_left" === t.background_slideshow_slide_transition ? "ltr" : "rtl"
                    , i = jQuery("<div>", {
                        class: e.swiperContainer,
                        dir: n
                    })
                    , s = jQuery("<div>", {
                        class: e.swiperWrapper
                    })
                    , o = t.background_slideshow_ken_burns;
                let r = e.slideBackground;
                if (o) {
                    r += " " + e.kenBurns;
                    const n = "in" === t.background_slideshow_ken_burns_zoom_direction ? "kenBurnsIn" : "kenBurnsOut";
                    r += " " + e[n]
                }
                this.elements.$slides = jQuery(),
                    t.background_slideshow_gallery.forEach((t => {
                        const n = jQuery("<div>", {
                            class: e.swiperSlide
                        })
                            , i = jQuery("<div>", {
                                class: r,
                                style: 'background-image: url("' + t.url + '");'
                            });
                        n.append(i),
                            s.append(n),
                            this.elements.$slides = this.elements.$slides.add(n)
                    }
                    )),
                    i.append(s),
                    this.$element.prepend(i),
                    this.elements.$backgroundSlideShowContainer = i
            }
            async initSlider() {
                if (1 >= this.getSlidesCount())
                    return;
                const e = this.getElementSettings()
                    , t = elementorFrontend.utils.swiper;
                this.swiper = await new t(this.elements.$backgroundSlideShowContainer, this.getSwiperOptions()),
                    this.elements.$backgroundSlideShowContainer.data("swiper", this.swiper),
                    e.background_slideshow_ken_burns && this.handleKenBurns()
            }
            activate() {
                this.buildSwiperElements(),
                    this.initSlider()
            }
            deactivate() {
                this.swiper && (this.swiper.destroy(),
                    this.elements.$backgroundSlideShowContainer.remove())
            }
            run() {
                "slideshow" === this.getElementSettings("background_background") ? this.activate() : this.deactivate()
            }
            onInit() {
                super.onInit(),
                    this.getElementSettings("background_slideshow_gallery") && this.run()
            }
            onDestroy() {
                super.onDestroy(),
                    this.deactivate()
            }
            onElementChange(e) {
                "background_background" === e && this.run()
            }
        }
        t.default = BackgroundSlideshow
    }
    ,
    7537: (e, t, n) => {
        var i = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var s = [i(n(4058)).default];
        t.default = s
    }
    ,
    6397: (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class GlobalHandler extends elementorModules.frontend.handlers.Base {
            getWidgetType() {
                return "global"
            }
            animate() {
                const e = this.$element
                    , t = this.getAnimation();
                if ("none" === t)
                    return void e.removeClass("elementor-invisible");
                const n = this.getElementSettings()
                    , i = n._animation_delay || n.animation_delay || 0;
                e.removeClass(t),
                    this.currentAnimation && e.removeClass(this.currentAnimation),
                    this.currentAnimation = t,
                    setTimeout((() => {
                        e.removeClass("elementor-invisible").addClass("animated " + t)
                    }
                    ), i)
            }
            getAnimation() {
                return this.getCurrentDeviceSetting("animation") || this.getCurrentDeviceSetting("_animation")
            }
            onInit(...e) {
                if (super.onInit(...e),
                    this.getAnimation()) {
                    const e = elementorModules.utils.Scroll.scrollObserver({
                        callback: t => {
                            t.isInViewport && (this.animate(),
                                e.unobserve(this.$element[0]))
                        }
                    });
                    e.observe(this.$element[0])
                }
            }
            onElementChange(e) {
                /^_?animation/.test(e) && this.animate()
            }
        }
        t.default = e => {
            elementorFrontend.elementsHandler.addHandler(GlobalHandler, {
                $element: e
            })
        }
    }
    ,
    2987: (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class BackgroundVideo extends elementorModules.frontend.handlers.Base {
            getDefaultSettings() {
                return {
                    selectors: {
                        backgroundVideoContainer: ".elementor-background-video-container",
                        backgroundVideoEmbed: ".elementor-background-video-embed",
                        backgroundVideoHosted: ".elementor-background-video-hosted"
                    }
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors")
                    , t = {
                        $backgroundVideoContainer: this.$element.find(e.backgroundVideoContainer)
                    };
                return t.$backgroundVideoEmbed = t.$backgroundVideoContainer.children(e.backgroundVideoEmbed),
                    t.$backgroundVideoHosted = t.$backgroundVideoContainer.children(e.backgroundVideoHosted),
                    t
            }
            calcVideosSize(e) {
                let t = "16:9";
                "vimeo" === this.videoType && (t = e[0].width + ":" + e[0].height);
                const n = this.elements.$backgroundVideoContainer.outerWidth()
                    , i = this.elements.$backgroundVideoContainer.outerHeight()
                    , s = t.split(":")
                    , o = s[0] / s[1]
                    , r = n / i > o;
                return {
                    width: r ? n : i * o,
                    height: r ? n / o : i
                }
            }
            changeVideoSize() {
                if ("hosted" !== this.videoType && !this.player)
                    return;
                let e;
                if ("youtube" === this.videoType ? e = jQuery(this.player.getIframe()) : "vimeo" === this.videoType ? e = jQuery(this.player.element) : "hosted" === this.videoType && (e = this.elements.$backgroundVideoHosted),
                    !e)
                    return;
                const t = this.calcVideosSize(e);
                e.width(t.width).height(t.height)
            }
            startVideoLoop(e) {
                if (!this.player.getIframe().contentWindow)
                    return;
                const t = this.getElementSettings()
                    , n = t.background_video_start || 0
                    , i = t.background_video_end;
                if (!t.background_play_once || e) {
                    if (this.player.seekTo(n),
                        i) {
                        setTimeout((() => {
                            this.startVideoLoop(!1)
                        }
                        ), 1e3 * (i - n + 1))
                    }
                } else
                    this.player.stopVideo()
            }
            prepareVimeoVideo(e, t) {
                const n = this.getElementSettings()
                    , i = {
                        url: t,
                        width: this.elements.$backgroundVideoContainer.outerWidth().width,
                        autoplay: !0,
                        loop: !n.background_play_once,
                        transparent: !1,
                        background: !0,
                        muted: !0
                    };
                this.player = new e.Player(this.elements.$backgroundVideoContainer, i),
                    this.handleVimeoStartEndTimes(n),
                    this.player.ready().then((() => {
                        jQuery(this.player.element).addClass("elementor-background-video-embed"),
                            this.changeVideoSize()
                    }
                    ))
            }
            handleVimeoStartEndTimes(e) {
                e.background_video_start && this.player.on("play", (t => {
                    0 === t.seconds && this.player.setCurrentTime(e.background_video_start)
                }
                )),
                    this.player.on("timeupdate", (t => {
                        e.background_video_end && e.background_video_end < t.seconds && (e.background_play_once ? this.player.pause() : this.player.setCurrentTime(e.background_video_start)),
                            this.player.getDuration().then((n => {
                                e.background_video_start && !e.background_video_end && t.seconds > n - .5 && this.player.setCurrentTime(e.background_video_start)
                            }
                            ))
                    }
                    ))
            }
            prepareYTVideo(e, t) {
                const n = this.elements.$backgroundVideoContainer
                    , i = this.getElementSettings();
                let s = e.PlayerState.PLAYING;
                window.chrome && (s = e.PlayerState.UNSTARTED);
                const o = {
                    videoId: t,
                    events: {
                        onReady: () => {
                            this.player.mute(),
                                this.changeVideoSize(),
                                this.startVideoLoop(!0),
                                this.player.playVideo()
                        }
                        ,
                        onStateChange: t => {
                            switch (t.data) {
                                case s:
                                    n.removeClass("elementor-invisible elementor-loading");
                                    break;
                                case e.PlayerState.ENDED:
                                    this.player.seekTo(i.background_video_start || 0),
                                        i.background_play_once && this.player.destroy()
                            }
                        }
                    },
                    playerVars: {
                        controls: 0,
                        rel: 0,
                        playsinline: 1
                    }
                };
                i.background_privacy_mode && (o.host = "https://www.youtube-nocookie.com",
                    o.origin = window.location.hostname),
                    n.addClass("elementor-loading elementor-invisible"),
                    this.player = new e.Player(this.elements.$backgroundVideoEmbed[0], o)
            }
            activate() {
                let e, t = this.getElementSettings("background_video_link");
                const n = this.getElementSettings("background_play_once");
                if (-1 !== t.indexOf("vimeo.com") ? (this.videoType = "vimeo",
                    this.apiProvider = elementorFrontend.utils.vimeo) : t.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/) && (this.videoType = "youtube",
                        this.apiProvider = elementorFrontend.utils.youtube),
                    this.apiProvider)
                    e = this.apiProvider.getVideoIDFromURL(t),
                        this.apiProvider.onApiReady((n => {
                            "youtube" === this.videoType && this.prepareYTVideo(n, e),
                                "vimeo" === this.videoType && this.prepareVimeoVideo(n, t)
                        }
                        ));
                else {
                    this.videoType = "hosted";
                    const e = this.getElementSettings("background_video_start")
                        , i = this.getElementSettings("background_video_end");
                    (e || i) && (t += "#t=" + (e || 0) + (i ? "," + i : "")),
                        this.elements.$backgroundVideoHosted.attr("src", t).one("canplay", this.changeVideoSize.bind(this)),
                        n && this.elements.$backgroundVideoHosted.on("ended", (() => {
                            this.elements.$backgroundVideoHosted.hide()
                        }
                        ))
                }
                elementorFrontend.elements.$window.on("resize", this.changeVideoSize)
            }
            deactivate() {
                "youtube" === this.videoType && this.player.getIframe() || "vimeo" === this.videoType ? this.player.destroy() : this.elements.$backgroundVideoHosted.removeAttr("src").off("ended"),
                    elementorFrontend.elements.$window.off("resize", this.changeVideoSize)
            }
            run() {
                const e = this.getElementSettings();
                (e.background_play_on_mobile || "mobile" !== elementorFrontend.getCurrentDeviceMode()) && ("video" === e.background_background && e.background_video_link ? this.activate() : this.deactivate())
            }
            onInit(...e) {
                super.onInit(...e),
                    this.changeVideoSize = this.changeVideoSize.bind(this),
                    this.run()
            }
            onElementChange(e) {
                "background_background" === e && this.run()
            }
        }
        t.default = BackgroundVideo
    }
    ,
    355: (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class HandlesPosition extends elementorModules.frontend.handlers.Base {
            isActive() {
                return elementorFrontend.isEditMode()
            }
            isFirstSection() {
                return this.$element[0] === document.querySelector(".elementor-edit-mode .elementor-top-section")
            }
            isOverflowHidden() {
                return "hidden" === this.$element.css("overflow")
            }
            getOffset() {
                if ("body" === elementor.config.document.container)
                    return this.$element.offset().top;
                const e = jQuery(elementor.config.document.container);
                return this.$element.offset().top - e.offset().top
            }
            setHandlesPosition() {
                const e = elementor.documents.getCurrent();
                if (!e || !e.container.isEditable())
                    return;
                const t = "elementor-section--handles-inside"
                    , n = this.$element.find("> .elementor-element-overlay > .elementor-editor-section-settings");
                if (elementor.settings.page.model.attributes.scroll_snap)
                    return void this.$element.addClass(t);
                const i = this.isOverflowHidden();
                if (!i && !this.isFirstSection())
                    return;
                const s = i ? 0 : this.getOffset();
                s < 25 ? (this.$element.addClass(t),
                    s < -5 ? n.css("top", -s) : n.css("top", "")) : this.$element.removeClass(t)
            }
            onInit() {
                this.isActive() && (this.setHandlesPosition(),
                    this.$element.on("mouseenter", this.setHandlesPosition.bind(this)))
            }
        }
        t.default = HandlesPosition
    }
    ,
    9320: (e, t, n) => {
        var i = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var s = i(n(4058))
            , o = i(n(2987))
            , r = i(n(355))
            , a = i(n(2804))
            , l = i(n(3384))
            , d = [a.default, s.default, o.default, r.default, l.default];
        t.default = d
    }
    ,
    3384: (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class Shapes extends elementorModules.frontend.handlers.Base {
            getDefaultSettings() {
                return {
                    selectors: {
                        container: "> .elementor-shape-%s"
                    },
                    svgURL: elementorFrontend.config.urls.assets + "shapes/"
                }
            }
            getDefaultElements() {
                const e = {}
                    , t = this.getSettings("selectors");
                return e.$topContainer = this.$element.find(t.container.replace("%s", "top")),
                    e.$bottomContainer = this.$element.find(t.container.replace("%s", "bottom")),
                    e
            }
            isActive() {
                return elementorFrontend.isEditMode()
            }
            getSvgURL(e, t) {
                let n = this.getSettings("svgURL") + t + ".svg";
                return elementor.config.additional_shapes && e in elementor.config.additional_shapes && (n = elementor.config.additional_shapes[e],
                    -1 < t.indexOf("-negative") && (n = n.replace(".svg", "-negative.svg"))),
                    n
            }
            buildSVG(e) {
                const t = "shape_divider_" + e
                    , n = this.getElementSettings(t)
                    , i = this.elements["$" + e + "Container"];
                if (i.attr("data-shape", n),
                    !n)
                    return void i.empty();
                let s = n;
                this.getElementSettings(t + "_negative") && (s += "-negative");
                const o = this.getSvgURL(n, s);
                jQuery.get(o, (e => {
                    i.empty().append(e.childNodes[0])
                }
                )),
                    this.setNegative(e)
            }
            setNegative(e) {
                this.elements["$" + e + "Container"].attr("data-negative", !!this.getElementSettings("shape_divider_" + e + "_negative"))
            }
            onInit(...e) {
                this.isActive(this.getSettings()) && (super.onInit(...e),
                    ["top", "bottom"].forEach((e => {
                        this.getElementSettings("shape_divider_" + e) && this.buildSVG(e)
                    }
                    )))
            }
            onElementChange(e) {
                const t = e.match(/^shape_divider_(top|bottom)$/);
                if (t)
                    return void this.buildSVG(t[1]);
                const n = e.match(/^shape_divider_(top|bottom)_negative$/);
                n && (this.buildSVG(n[1]),
                    this.setNegative(n[1]))
            }
        }
        t.default = Shapes
    }
    ,
    2804: (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class StretchedSection extends elementorModules.frontend.handlers.Base {
            bindEvents() {
                const e = this.getUniqueHandlerID();
                elementorFrontend.addListenerOnce(e, "resize", this.stretch),
                    elementorFrontend.addListenerOnce(e, "sticky:stick", this.stretch, this.$element),
                    elementorFrontend.addListenerOnce(e, "sticky:unstick", this.stretch, this.$element),
                    elementorFrontend.isEditMode() && (this.onKitChangeStretchContainerChange = this.onKitChangeStretchContainerChange.bind(this),
                        elementor.channels.editor.on("kit:change:stretchContainer", this.onKitChangeStretchContainerChange))
            }
            unbindEvents() {
                elementorFrontend.removeListeners(this.getUniqueHandlerID(), "resize", this.stretch),
                    elementorFrontend.isEditMode() && elementor.channels.editor.off("kit:change:stretchContainer", this.onKitChangeStretchContainerChange)
            }
            isActive(e) {
                return elementorFrontend.isEditMode() || e.$element.hasClass("elementor-section-stretched")
            }
            initStretch() {
                this.stretch = this.stretch.bind(this),
                    this.stretchElement = new elementorModules.frontend.tools.StretchElement({
                        element: this.$element,
                        selectors: {
                            container: this.getStretchContainer()
                        }
                    })
            }
            getStretchContainer() {
                return elementorFrontend.getKitSettings("stretched_section_container") || window
            }
            stretch() {
                this.getElementSettings("stretch_section") && this.stretchElement.stretch()
            }
            onInit(...e) {
                this.isActive(this.getSettings()) && (this.initStretch(),
                    super.onInit(...e),
                    this.stretch())
            }
            onElementChange(e) {
                "stretch_section" === e && (this.getElementSettings("stretch_section") ? this.stretch() : this.stretchElement.reset())
            }
            onKitChangeStretchContainerChange() {
                this.stretchElement.setSettings("selectors.container", this.getStretchContainer()),
                    this.stretch()
            }
        }
        t.default = StretchedSection
    }
    ,
    3346: (e, t, n) => {
        var i = n(6028);
        e.exports = elementorModules.ViewModule.extend({
            getDefaultSettings: function () {
                return {
                    scrollDuration: 500,
                    selectors: {
                        links: 'a[href*="#"]',
                        targets: ".elementor-element, .elementor-menu-anchor",
                        scrollable: (0,
                            i.isScrollSnapActive)() ? "body" : "html, body"
                    }
                }
            },
            getDefaultElements: function () {
                return {
                    $scrollable: jQuery(this.getSettings("selectors").scrollable)
                }
            },
            bindEvents: function () {
                elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), this.handleAnchorLinks)
            },
            handleAnchorLinks: function (e) {
                var t, n = e.currentTarget, s = location.pathname === n.pathname;
                if (location.hostname === n.hostname && s && !(n.hash.length < 2)) {
                    try {
                        t = jQuery(n.hash).filter(this.getSettings("selectors.targets"))
                    } catch (e) {
                        return
                    }
                    if (t.length) {
                        var o = t.offset().top
                            , r = elementorFrontend.elements.$wpAdminBar
                            , a = jQuery(".elementor-section.elementor-sticky--active:visible");
                        r.length > 0 && (o -= r.height()),
                            a.length > 0 && (o -= Math.max.apply(null, a.map((function () {
                                return jQuery(this).outerHeight()
                            }
                            )).get())),
                            e.preventDefault(),
                            o = elementorFrontend.hooks.applyFilters("frontend/handlers/menu_anchor/scroll_top_distance", o),
                            (0,
                                i.isScrollSnapActive)() && elementorFrontend.elements.$body.css("scroll-snap-type", "none"),
                            this.elements.$scrollable.animate({
                                scrollTop: o
                            }, this.getSettings("scrollDuration"), "linear", (() => {
                                (0,
                                    i.isScrollSnapActive)() && elementorFrontend.elements.$body.css("scroll-snap-type", "")
                            }
                            ))
                    }
                }
            },
            onInit: function () {
                elementorModules.ViewModule.prototype.onInit.apply(this, arguments)
            }
        })
    }
    ,
    6866: (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class AssetsLoader {
            getScriptElement(e) {
                const t = document.createElement("script");
                return t.src = e,
                    t
            }
            getStyleElement(e) {
                const t = document.createElement("link");
                return t.rel = "stylesheet",
                    t.href = e,
                    t
            }
            load(e, t) {
                const n = AssetsLoader.assets[e][t];
                return n.loader || (n.loader = new Promise((t => {
                    const i = "style" === e ? this.getStyleElement(n.src) : this.getScriptElement(n.src);
                    i.onload = () => t(!0);
                    const s = "head" === n.parent ? n.parent : "body";
                    document[s].appendChild(i)
                }
                ))),
                    n.loader
            }
        }
        t.default = AssetsLoader;
        const n = elementorFrontendConfig.environmentMode.isScriptDebug ? "" : ".min";
        AssetsLoader.assets = {
            script: {
                dialog: {
                    src: `${elementorFrontendConfig.urls.assets}lib/dialog/dialog${n}.js?ver=4.9.0`
                },
                "share-link": {
                    src: `${elementorFrontendConfig.urls.assets}lib/share-link/share-link${n}.js?ver=${elementorFrontendConfig.version}`
                },
                swiper: {
                    src: `${elementorFrontendConfig.urls.assets}lib/swiper/swiper${n}.js?ver=5.3.6`
                }
            },
            style: {}
        }
    }
    ,
    8646: (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class LightboxManager extends elementorModules.ViewModule {
            static getLightbox() {
                const e = new Promise((e => {
                    n.e(723).then(n.t.bind(n, 3896, 23)).then((({ default: t }) => e(new t)))
                }
                ))
                    , t = elementorFrontend.utils.assetsLoader.load("script", "dialog")
                    , i = elementorFrontend.utils.assetsLoader.load("script", "share-link");
                return Promise.all([e, t, i]).then((() => e))
            }
            getDefaultSettings() {
                return {
                    selectors: {
                        links: "a, [data-elementor-lightbox]"
                    }
                }
            }
            getDefaultElements() {
                return {
                    $links: jQuery(this.getSettings("selectors.links"))
                }
            }
            isLightboxLink(e) {
                if ("a" === e.tagName.toLowerCase() && (e.hasAttribute("download") || !/^[^?]+\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i.test(e.href)) && !e.dataset.elementorLightboxVideo)
                    return !1;
                const t = elementorFrontend.getKitSettings("global_image_lightbox")
                    , n = e.dataset.elementorOpenLightbox;
                return "yes" === n || t && "no" !== n
            }
            async onLinkClick(e) {
                const t = e.currentTarget
                    , n = jQuery(e.target)
                    , i = elementorFrontend.isEditMode()
                    , s = i && elementor.$previewContents.find("body").hasClass("elementor-editor__ui-state__color-picker")
                    , o = !!n.closest(".elementor-edit-area").length;
                if (!this.isLightboxLink(t))
                    return void (i && o && e.preventDefault());
                if (e.preventDefault(),
                    i && !elementor.getPreferences("lightbox_in_editor"))
                    return;
                if (s)
                    return;
                (this.isOptimizedAssetsLoading() ? await LightboxManager.getLightbox() : elementorFrontend.utils.lightbox).createLightbox(t)
            }
            isOptimizedAssetsLoading() {
                return elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading
            }
            bindEvents() {
                elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), (e => this.onLinkClick(e)))
            }
            onInit(...e) {
                super.onInit(...e),
                    this.isOptimizedAssetsLoading() && !elementorFrontend.isEditMode() && this.elements.$links.each(((e, t) => {
                        if (this.isLightboxLink(t))
                            return LightboxManager.getLightbox(),
                                !1
                    }
                    ))
            }
        }
        t.default = LightboxManager
    }
    ,
    8628: (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        t.default = class Swiper {
            constructor(e, t) {
                return this.config = t,
                    this.config.breakpoints && (this.config = this.adjustConfig(t)),
                    e.closest(".elementor-widget-wrap").addClass("e-swiper-container"),
                    new Promise((t => {
                        if (!elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading)
                            return t(this.createSwiperInstance(e, this.config));
                        elementorFrontend.utils.assetsLoader.load("script", "swiper").then((() => t(this.createSwiperInstance(e, this.config))))
                    }
                    ))
            }
            createSwiperInstance(e, t) {
                const n = window.Swiper;
                return n.prototype.adjustConfig = this.adjustConfig,
                    new n(e, t)
            }
            adjustConfig(e) {
                if (!e.handleElementorBreakpoints)
                    return e;
                const t = elementorFrontend.config.responsive.activeBreakpoints
                    , n = elementorFrontend.breakpoints.getBreakpointValues();
                return Object.keys(e.breakpoints).forEach((i => {
                    const s = parseInt(i);
                    let o;
                    if (s === t.mobile.value || s + 1 === t.mobile.value)
                        o = 0;
                    else if (!t.widescreen || s !== t.widescreen.value && s + 1 !== t.widescreen.value) {
                        const e = n.findIndex((e => s === e || s + 1 === e));
                        o = n[e - 1]
                    } else
                        o = s;
                    e.breakpoints[o] = e.breakpoints[i],
                        e.breakpoints[i] = {
                            slidesPerView: e.slidesPerView,
                            slidesPerGroup: e.slidesPerGroup ? e.slidesPerGroup : 1
                        }
                }
                )),
                    e
            }
        }
    }
    ,
    2064: (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.ViewModule {
            getDefaultSettings() {
                return {
                    selectors: {
                        links: 'a[href^="%23elementor-action"], a[href^="#elementor-action"]'
                    }
                }
            }
            bindEvents() {
                elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), this.runLinkAction.bind(this))
            }
            initActions() {
                this.actions = {
                    lightbox: async e => {
                        const t = await elementorFrontend.utils.lightbox;
                        e.id ? t.openSlideshow(e.id, e.url) : (e.html && delete e.html,
                            t.showModal(e))
                    }
                }
            }
            addAction(e, t) {
                this.actions[e] = t
            }
            runAction(e, ...t) {
                const n = (e = decodeURIComponent(e)).match(/action=(.+?)&/)
                    , i = e.match(/settings=(.+)/);
                if (!n)
                    return;
                const s = this.actions[n[1]];
                if (!s)
                    return;
                let o = {};
                i && (o = JSON.parse(atob(i[1]))),
                    s(o, ...t)
            }
            runLinkAction(e) {
                e.preventDefault(),
                    this.runAction(jQuery(e.currentTarget).attr("href"), e)
            }
            runHashAction() {
                location.hash && this.runAction(location.hash)
            }
            createActionHash(e, t) {
                return encodeURIComponent(`#elementor-action:action=${e}&settings=${btoa(JSON.stringify(t))}`)
            }
            onInit() {
                super.onInit(),
                    this.initActions(),
                    elementorFrontend.on("components:init", this.runHashAction.bind(this))
            }
        }
        t.default = _default
    }
    ,
    6028: (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.isScrollSnapActive = t.escapeHTML = void 0;
        t.escapeHTML = e => {
            const t = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#39;",
                '"': "&quot;"
            };
            return e.replace(/[&<>'"]/g, (e => t[e] || e))
        }
            ;
        t.isScrollSnapActive = () => {
            var e, t;
            return "yes" === (elementorFrontend.isEditMode() ? null === (e = elementor.settings.page.model.attributes) || void 0 === e ? void 0 : e.scroll_snap : null === (t = elementorFrontend.config.settings.page) || void 0 === t ? void 0 : t.scroll_snap)
        }
    }
    ,
    4773: (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class BaseLoader extends elementorModules.ViewModule {
            getDefaultSettings() {
                return {
                    isInserted: !1,
                    selectors: {
                        firstScript: "script:first"
                    }
                }
            }
            getDefaultElements() {
                return {
                    $firstScript: jQuery(this.getSettings("selectors.firstScript"))
                }
            }
            insertAPI() {
                this.elements.$firstScript.before(jQuery("<script>", {
                    src: this.getApiURL()
                })),
                    this.setSettings("isInserted", !0)
            }
            getVideoIDFromURL(e) {
                const t = e.match(this.getURLRegex());
                return t && t[1]
            }
            onApiReady(e) {
                this.getSettings("isInserted") || this.insertAPI(),
                    this.isApiLoaded() ? e(this.getApiObject()) : setTimeout((() => {
                        this.onApiReady(e)
                    }
                    ), 350)
            }
            getAutoplayURL(e) {
                return e.replace("&autoplay=0", "") + "&autoplay=1"
            }
        }
        t.default = BaseLoader
    }
    ,
    1911: (e, t, n) => {
        var i = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var s = i(n(4773));
        class VimeoLoader extends s.default {
            getApiURL() {
                return "https://player.vimeo.com/api/player.js"
            }
            getURLRegex() {
                return /^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/|external\/)?(\d+)([^.?&#"'>]?)/
            }
            isApiLoaded() {
                return window.Vimeo
            }
            getApiObject() {
                return Vimeo
            }
            getAutoplayURL(e) {
                const t = (e = super.getAutoplayURL(e)).match(/#t=[^&]*/);
                return e.replace(t[0], "") + t
            }
        }
        t.default = VimeoLoader
    }
    ,
    1604: (e, t, n) => {
        var i = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var s = i(n(4773));
        class YoutubeLoader extends s.default {
            getApiURL() {
                return "https://www.youtube.com/iframe_api"
            }
            getURLRegex() {
                return /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/
            }
            isApiLoaded() {
                return window.YT && YT.loaded
            }
            getApiObject() {
                return YT
            }
        }
        t.default = YoutubeLoader
    }
    ,
    59: (e, t, n) => {
        n.p = elementorFrontendConfig.urls.assets + "js/"
    }
    ,
    4375: (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class Breakpoints extends elementorModules.Module {
            constructor(e) {
                super(),
                    this.responsiveConfig = e
            }
            getActiveBreakpointsList(e = {}) {
                e = {
                    largeToSmall: !1,
                    withDesktop: !1,
                    ...e
                };
                const t = Object.keys(this.responsiveConfig.activeBreakpoints);
                if (e.withDesktop) {
                    const e = -1 === t.indexOf("widescreen") ? t.length : t.length - 1;
                    t.splice(e, 0, "desktop")
                }
                return e.largeToSmall && t.reverse(),
                    t
            }
            getBreakpointValues() {
                const { activeBreakpoints: e } = this.responsiveConfig
                    , t = [];
                return Object.values(e).forEach((e => {
                    t.push(e.value)
                }
                )),
                    t
            }
            getDesktopPreviousDeviceKey() {
                let e = "";
                const { activeBreakpoints: t } = this.responsiveConfig
                    , n = Object.keys(t)
                    , i = n.length;
                return e = "min" === t[n[i - 1]].direction ? n[i - 2] : n[i - 1],
                    e
            }
            getDesktopMinPoint() {
                const { activeBreakpoints: e } = this.responsiveConfig;
                return e[this.getDesktopPreviousDeviceKey()].value + 1
            }
            getDeviceMinBreakpoint(e) {
                if ("desktop" === e)
                    return this.getDesktopMinPoint();
                const { activeBreakpoints: t } = this.responsiveConfig
                    , n = Object.keys(t);
                let i;
                if (n[0] === e)
                    i = 320;
                else if ("widescreen" === e)
                    i = t[e] ? t[e].value : this.responsiveConfig.breakpoints.widescreen;
                else {
                    const s = n.indexOf(e);
                    i = t[n[s - 1]].value + 1
                }
                return i
            }
            getActiveMatchRegex() {
                return new RegExp(this.getActiveBreakpointsList().map((e => "_" + e)).join("|") + "$")
            }
        }
        t.default = Breakpoints
    }
    ,
    6404: (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = t.Events = void 0;
        class Events {
            static dispatch(e, t, n = null, i = null) {
                e = e instanceof jQuery ? e[0] : e,
                    i && e.dispatchEvent(new CustomEvent(i, {
                        detail: n
                    })),
                    e.dispatchEvent(new CustomEvent(t, {
                        detail: n
                    }))
            }
        }
        t.Events = Events;
        var n = Events;
        t.default = n
    }
    ,
    9469: e => {
        e.exports = function () {
            var e, t = Array.prototype.slice, n = {
                actions: {},
                filters: {}
            };
            function _removeHook(e, t, i, s) {
                var o, r, a;
                if (n[e][t])
                    if (i)
                        if (o = n[e][t],
                            s)
                            for (a = o.length; a--;)
                                (r = o[a]).callback === i && r.context === s && o.splice(a, 1);
                        else
                            for (a = o.length; a--;)
                                o[a].callback === i && o.splice(a, 1);
                    else
                        n[e][t] = []
            }
            function _addHook(e, t, i, s, o) {
                var r = {
                    callback: i,
                    priority: s,
                    context: o
                }
                    , a = n[e][t];
                if (a) {
                    var l = !1;
                    if (jQuery.each(a, (function () {
                        if (this.callback === i)
                            return l = !0,
                                !1
                    }
                    )),
                        l)
                        return;
                    a.push(r),
                        a = function _hookInsertSort(e) {
                            for (var t, n, i, s = 1, o = e.length; s < o; s++) {
                                for (t = e[s],
                                    n = s; (i = e[n - 1]) && i.priority > t.priority;)
                                    e[n] = e[n - 1],
                                        --n;
                                e[n] = t
                            }
                            return e
                        }(a)
                } else
                    a = [r];
                n[e][t] = a
            }
            function _runHook(e, t, i) {
                var s, o, r = n[e][t];
                if (!r)
                    return "filters" === e && i[0];
                if (o = r.length,
                    "filters" === e)
                    for (s = 0; s < o; s++)
                        i[0] = r[s].callback.apply(r[s].context, i);
                else
                    for (s = 0; s < o; s++)
                        r[s].callback.apply(r[s].context, i);
                return "filters" !== e || i[0]
            }
            return e = {
                removeFilter: function removeFilter(t, n) {
                    return "string" == typeof t && _removeHook("filters", t, n),
                        e
                },
                applyFilters: function applyFilters() {
                    var n = t.call(arguments)
                        , i = n.shift();
                    return "string" == typeof i ? _runHook("filters", i, n) : e
                },
                addFilter: function addFilter(t, n, i, s) {
                    return "string" == typeof t && "function" == typeof n && _addHook("filters", t, n, i = parseInt(i || 10, 10), s),
                        e
                },
                removeAction: function removeAction(t, n) {
                    return "string" == typeof t && _removeHook("actions", t, n),
                        e
                },
                doAction: function doAction() {
                    var n = t.call(arguments)
                        , i = n.shift();
                    return "string" == typeof i && _runHook("actions", i, n),
                        e
                },
                addAction: function addAction(t, n, i, s) {
                    return "string" == typeof t && "function" == typeof n && _addHook("actions", t, n, i = parseInt(i || 10, 10), s),
                        e
                }
            },
                e
        }
    }
    ,
    3308: (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        const matchUserAgent = e => n.indexOf(e) >= 0
            , n = navigator.userAgent
            , i = !!window.opr && !!opr.addons || !!window.opera || matchUserAgent(" OPR/")
            , s = matchUserAgent("Firefox")
            , o = /^((?!chrome|android).)*safari/i.test(n) || /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || "undefined" != typeof safari && safari.pushNotification).toString()
            , r = /Trident|MSIE/.test(n) && !!document.documentMode
            , a = !r && !!window.StyleMedia || matchUserAgent("Edg")
            , l = !!window.chrome && matchUserAgent("Chrome") && !(a || i)
            , d = matchUserAgent("Chrome") && !!window.CSS;
        var c = {
            appleWebkit: matchUserAgent("AppleWebKit") && !d,
            blink: d,
            chrome: l,
            edge: a,
            firefox: s,
            ie: r,
            mac: matchUserAgent("Macintosh"),
            opera: i,
            safari: o,
            webkit: matchUserAgent("AppleWebKit")
        };
        t.default = c
    }
    ,
    5107: (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.Module {
            get(e, t) {
                let n;
                t = t || {};
                try {
                    n = t.session ? sessionStorage : localStorage
                } catch (t) {
                    return e ? void 0 : {}
                }
                let i = n.getItem("elementor");
                i = i ? JSON.parse(i) : {},
                    i.__expiration || (i.__expiration = {});
                const s = i.__expiration;
                let o = [];
                e ? s[e] && (o = [e]) : o = Object.keys(s);
                let r = !1;
                return o.forEach((e => {
                    new Date(s[e]) < new Date && (delete i[e],
                        delete s[e],
                        r = !0)
                }
                )),
                    r && this.save(i, t.session),
                    e ? i[e] : i
            }
            set(e, t, n) {
                n = n || {};
                const i = this.get(null, n);
                if (i[e] = t,
                    n.lifetimeInSeconds) {
                    const t = new Date;
                    t.setTime(t.getTime() + 1e3 * n.lifetimeInSeconds),
                        i.__expiration[e] = t.getTime()
                }
                this.save(i, n.session)
            }
            save(e, t) {
                let n;
                try {
                    n = t ? sessionStorage : localStorage
                } catch (e) {
                    return
                }
                n.setItem("elementor", JSON.stringify(e))
            }
        }
        t.default = _default
    }
    ,
    6046: (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                    elementorFrontend.elementsHandler.attachHandler("text-path", (() => n.e(48).then(n.bind(n, 6468))))
            }
        }
        t.default = _default
    }
}, e => {
    e.O(0, [354], (() => {
        return t = 5654,
            e(e.s = t);
        var t
    }
    ));
    e.O()
}
]);
"use strict";
!function (e, t) {
    e(t).on("elementor/frontend/init", (function () {
        var t, i = elementorModules.frontend.handlers.Base;
        t = i.extend({
            onInit: function () {
                i.prototype.onInit.apply(this, arguments),
                    this.isHarakiri() && (this.$element.addClass("ob-harakiri"),
                        "clip" === this.getElementSettings("_ob_harakiri_text_clip") && this.updateCSS("add"))
            },
            isHarakiri: function () {
                return "yes" === this.getElementSettings("_ob_use_harakiri")
            },
            onElementChange: function (e) {
                "_ob_harakiri_writing_mode" === e && ("inherit" !== this.getElementSettings("_ob_harakiri_writing_mode") ? this.$element.addClass("ob-harakiri") : this.$element.removeClass("ob-harakiri")),
                    "_ob_harakiri_text_clip" === e && ("clip" === this.getElementSettings("_ob_harakiri_text_clip") ? this.updateCSS("add") : "" === this.getElementSettings("_ob_harakiri_text_clip") && this.updateCSS("remove"))
            },
            updateCSS: function (e) {
                "add" === e && this.$element.find(".elementor-heading-title").css("background-clip", "text").css("-webkit-text-fill-color", "transparent"),
                    "remove" === e && this.$element.find(".elementor-heading-title").css("background-clip", "unset").css("-webkit-text-fill-color", "unset")
            }
        });
        var n = {
            "heading.default": t,
            "text-editor.default": t
        };
        e.each(n, (function (e, t) {
            elementorFrontend.hooks.addAction("frontend/element_ready/" + e, (function (e) {
                elementorFrontend.elementsHandler.addHandler(t, {
                    $element: e
                })
            }
            ))
        }
        ))
    }
    ))
}(jQuery, window);
/*!elementor-pro - v3.4.2 - 12-10-2021*/
(self.webpackChunkelementor_pro = self.webpackChunkelementor_pro || []).push([[437], {
    7319: (e, t, n) => {
        "use strict";
        var s = n(7914)
            , o = s(n(556))
            , r = s(n(4113))
            , l = s(n(2398))
            , i = s(n(3615))
            , a = s(n(3524))
            , d = s(n(676))
            , u = s(n(5169))
            , c = s(n(6852))
            , m = s(n(9047))
            , h = s(n(6463))
            , f = s(n(7133))
            , g = s(n(1871))
            , _ = s(n(3781))
            , p = s(n(7786))
            , v = s(n(7466))
            , b = s(n(4173))
            , M = s(n(1273));
        const extendDefaultHandlers = e => ({
            ...e,
            ...{
                animatedText: o.default,
                carousel: r.default,
                countdown: l.default,
                hotspot: i.default,
                form: a.default,
                gallery: d.default,
                lottie: u.default,
                nav_menu: c.default,
                popup: m.default,
                posts: h.default,
                share_buttons: f.default,
                slides: g.default,
                social: _.default,
                themeBuilder: v.default,
                themeElements: b.default,
                woocommerce: M.default,
                tableOfContents: p.default
            }
        });
        elementorProFrontend.on("elementor-pro/modules/init:before", (() => {
            elementorFrontend.hooks.addFilter("elementor-pro/frontend/handlers", extendDefaultHandlers)
        }
        ))
    }
    ,
    2993: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.close = void 0;
        const o = new (s(n(8544)).default)("eicon")
            , r = {
                get element() {
                    return o.createSvgElement("close", {
                        path: "M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z",
                        width: 1e3,
                        height: 1e3
                    })
                }
            };
        t.close = r
    }
    ,
    8544: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var o = s(n(5526));
        class IconsManager {
            constructor(e) {
                if (this.prefix = `${e}-`,
                    !IconsManager.symbolsContainer) {
                    const e = "e-font-icon-svg-symbols";
                    IconsManager.symbolsContainer = document.getElementById(e),
                        IconsManager.symbolsContainer || (IconsManager.symbolsContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
                            IconsManager.symbolsContainer.setAttributeNS(null, "style", "display: none;"),
                            IconsManager.symbolsContainer.setAttributeNS(null, "class", e),
                            document.body.appendChild(IconsManager.symbolsContainer))
                }
            }
            createSvgElement(e, { path: t, width: n, height: s }) {
                const o = this.prefix + e
                    , r = "#" + this.prefix + e;
                if (!IconsManager.iconsUsageList.includes(o)) {
                    if (!IconsManager.symbolsContainer.querySelector(r)) {
                        const e = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
                        e.id = o,
                            e.innerHTML = '<path d="' + t + '"></path>',
                            e.setAttributeNS(null, "viewBox", "0 0 " + n + " " + s),
                            IconsManager.symbolsContainer.appendChild(e)
                    }
                    IconsManager.iconsUsageList.push(o)
                }
                const l = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                return l.innerHTML = '<use xlink:href="' + r + '" />',
                    l.setAttributeNS(null, "class", "e-font-icon-svg e-" + o),
                    l
            }
        }
        t.default = IconsManager,
            (0,
                o.default)(IconsManager, "symbolsContainer", void 0),
            (0,
                o.default)(IconsManager, "iconsUsageList", [])
    }
    ,
    556: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                    elementorFrontend.elementsHandler.attachHandler("animated-headline", (() => n.e(26).then(n.bind(n, 7750))))
            }
        }
        t.default = _default
    }
    ,
    4113: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                    elementorFrontend.elementsHandler.attachHandler("media-carousel", (() => n.e(534).then(n.bind(n, 7393)))),
                    elementorFrontend.elementsHandler.attachHandler("testimonial-carousel", (() => n.e(369).then(n.bind(n, 1507)))),
                    elementorFrontend.elementsHandler.attachHandler("reviews", (() => n.e(369).then(n.bind(n, 1507))))
            }
        }
        t.default = _default
    }
    ,
    2398: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                    elementorFrontend.elementsHandler.attachHandler("countdown", (() => n.e(804).then(n.bind(n, 7097))))
            }
        }
        t.default = _default
    }
    ,
    3524: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                    elementorFrontend.elementsHandler.attachHandler("form", [() => n.e(680).then(n.bind(n, 9706)), () => n.e(680).then(n.bind(n, 7300)), () => n.e(680).then(n.bind(n, 611)), () => n.e(680).then(n.bind(n, 4610)), () => n.e(680).then(n.bind(n, 9228)), () => n.e(680).then(n.bind(n, 6374))]),
                    elementorFrontend.elementsHandler.attachHandler("subscribe", [() => n.e(680).then(n.bind(n, 9706)), () => n.e(680).then(n.bind(n, 7300)), () => n.e(680).then(n.bind(n, 611))])
            }
        }
        t.default = _default
    }
    ,
    676: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                    elementorFrontend.elementsHandler.attachHandler("gallery", (() => n.e(121).then(n.bind(n, 5357))))
            }
        }
        t.default = _default
    }
    ,
    3615: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                    elementorFrontend.elementsHandler.attachHandler("hotspot", (() => n.e(888).then(n.bind(n, 9556))))
            }
        }
        t.default = _default
    }
    ,
    5169: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                    elementorFrontend.elementsHandler.attachHandler("lottie", (() => n.e(288).then(n.bind(n, 4927))))
            }
        }
        t.default = _default
    }
    ,
    6852: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                    jQuery.fn.smartmenus && (jQuery.SmartMenus.prototype.isCSSOn = function () {
                        return !0
                    }
                        ,
                        elementorFrontend.config.is_rtl && (jQuery.fn.smartmenus.defaults.rightToLeftSubMenus = !0)),
                    elementorFrontend.elementsHandler.attachHandler("nav-menu", (() => n.e(42).then(n.bind(n, 5389))))
            }
        }
        t.default = _default
    }
    ,
    2731: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var o = s(n(9545))
            , r = s(n(4339))
            , l = n(2993);
        class _default extends elementorModules.frontend.Document {
            bindEvents() {
                const e = this.getDocumentSettings("open_selector");
                e && elementorFrontend.elements.$body.on("click", e, this.showModal.bind(this))
            }
            startTiming() {
                new r.default(this.getDocumentSettings("timing"), this).check() && this.initTriggers()
            }
            initTriggers() {
                this.triggers = new o.default(this.getDocumentSettings("triggers"), this)
            }
            showModal(e) {
                const t = this.getDocumentSettings();
                if (!this.isEdit) {
                    if (!elementorFrontend.isWPPreviewMode()) {
                        if (this.getStorage("disable"))
                            return;
                        if (e && elementorProFrontend.modules.popup.popupPopped && t.avoid_multiple_popups)
                            return
                    }
                    this.$element = jQuery(this.elementHTML),
                        this.elements.$elements = this.$element.find(this.getSettings("selectors.elements"))
                }
                const n = this.getModal()
                    , s = n.getElements("closeButton");
                n.setMessage(this.$element).show(),
                    this.isEdit || (t.close_button_delay && (s.hide(),
                        clearTimeout(this.closeButtonTimeout),
                        this.closeButtonTimeout = setTimeout((() => s.show()), 1e3 * t.close_button_delay)),
                        super.runElementsHandlers()),
                    this.setEntranceAnimation(),
                    t.timing && t.timing.times_count || this.countTimes(),
                    elementorProFrontend.modules.popup.popupPopped = !0
            }
            setEntranceAnimation() {
                const e = this.getModal().getElements("widgetContent")
                    , t = this.getDocumentSettings()
                    , n = elementorFrontend.getCurrentDeviceSetting(t, "entrance_animation");
                if (this.currentAnimation && e.removeClass(this.currentAnimation),
                    this.currentAnimation = n,
                    !n)
                    return;
                const s = t.entrance_animation_duration.size;
                e.addClass(n),
                    setTimeout((() => e.removeClass(n)), 1e3 * s)
            }
            setExitAnimation() {
                const e = this.getModal()
                    , t = this.getDocumentSettings()
                    , n = e.getElements("widgetContent")
                    , s = elementorFrontend.getCurrentDeviceSetting(t, "exit_animation")
                    , o = s ? t.entrance_animation_duration.size : 0;
                setTimeout((() => {
                    s && n.removeClass(s + " reverse"),
                        this.isEdit || (this.$element.remove(),
                            e.getElements("widget").hide())
                }
                ), 1e3 * o),
                    s && n.addClass(s + " reverse")
            }
            initModal() {
                let e;
                this.getModal = () => {
                    if (!e) {
                        const t = this.getDocumentSettings()
                            , n = this.getSettings("id")
                            , triggerPopupEvent = e => elementorFrontend.elements.$document.trigger("elementor/popup/" + e, [n, this]);
                        let s = "elementor-popup-modal";
                        t.classes && (s += " " + t.classes);
                        const o = {
                            id: "elementor-popup-modal-" + n,
                            className: s,
                            closeButton: !0,
                            preventScroll: t.prevent_scroll,
                            onShow: () => triggerPopupEvent("show"),
                            onHide: () => triggerPopupEvent("hide"),
                            effects: {
                                hide: () => {
                                    t.timing && t.timing.times_count && this.countTimes(),
                                        this.setExitAnimation()
                                }
                                ,
                                show: "show"
                            },
                            hide: {
                                auto: !!t.close_automatically,
                                autoDelay: 1e3 * t.close_automatically,
                                onBackgroundClick: !t.prevent_close_on_background_click,
                                onOutsideClick: !t.prevent_close_on_background_click,
                                onEscKeyPress: !t.prevent_close_on_esc_key,
                                ignore: ".flatpickr-calendar"
                            },
                            position: {
                                enable: !1
                            }
                        };
                        elementorFrontend.config.experimentalFeatures.e_font_icon_svg && (o.closeButtonOptions = {
                            iconElement: l.close.element
                        }),
                            o.closeButtonClass = "eicon-close",
                            e = elementorFrontend.getDialogsManager().createWidget("lightbox", o),
                            e.getElements("widgetContent").addClass("animated");
                        const r = e.getElements("closeButton");
                        this.isEdit && (r.off("click"),
                            e.hide = () => { }
                        ),
                            this.setCloseButtonPosition()
                    }
                    return e
                }
            }
            setCloseButtonPosition() {
                const e = this.getModal()
                    , t = this.getDocumentSettings("close_button_position");
                e.getElements("closeButton").appendTo(e.getElements("outside" === t ? "widget" : "widgetContent"))
            }
            disable() {
                this.setStorage("disable", !0)
            }
            setStorage(e, t, n) {
                elementorFrontend.storage.set(`popup_${this.getSettings("id")}_${e}`, t, n)
            }
            getStorage(e, t) {
                return elementorFrontend.storage.get(`popup_${this.getSettings("id")}_${e}`, t)
            }
            countTimes() {
                const e = this.getStorage("times") || 0;
                this.setStorage("times", e + 1)
            }
            runElementsHandlers() { }
            async onInit() {
                super.onInit(),
                    window.DialogsManager || await elementorFrontend.utils.assetsLoader.load("script", "dialog"),
                    this.initModal(),
                    this.isEdit ? this.showModal() : (this.$element.show().remove(),
                        this.elementHTML = this.$element[0].outerHTML,
                        elementorFrontend.isEditMode() || (elementorFrontend.isWPPreviewMode() && elementorFrontend.config.post.id === this.getSettings("id") ? this.showModal() : this.startTiming()))
            }
            onSettingsChange(e) {
                const t = Object.keys(e.changed)[0];
                -1 !== t.indexOf("entrance_animation") && this.setEntranceAnimation(),
                    "exit_animation" === t && this.setExitAnimation(),
                    "close_button_position" === t && this.setCloseButtonPosition()
            }
        }
        t.default = _default
    }
    ,
    9047: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var o = s(n(2731));
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                    elementorFrontend.hooks.addAction("elementor/frontend/documents-manager/init-classes", this.addDocumentClass),
                    elementorFrontend.elementsHandler.attachHandler("form", (() => n.e(50).then(n.bind(n, 3573)))),
                    elementorFrontend.on("components:init", (() => this.onFrontendComponentsInit())),
                    elementorFrontend.isEditMode() || elementorFrontend.isWPPreviewMode() || this.setViewsAndSessions()
            }
            addDocumentClass(e) {
                e.addDocumentClass("popup", o.default)
            }
            setViewsAndSessions() {
                const e = elementorFrontend.storage.get("pageViews") || 0;
                elementorFrontend.storage.set("pageViews", e + 1);
                if (!elementorFrontend.storage.get("activeSession", {
                    session: !0
                })) {
                    elementorFrontend.storage.set("activeSession", !0, {
                        session: !0
                    });
                    const e = elementorFrontend.storage.get("sessions") || 0;
                    elementorFrontend.storage.set("sessions", e + 1)
                }
            }
            showPopup(e) {
                const t = elementorFrontend.documentsManager.documents[e.id];
                if (!t)
                    return;
                const n = t.getModal();
                e.toggle && n.isVisible() ? n.hide() : t.showModal()
            }
            closePopup(e, t) {
                const n = jQuery(t.target).parents('[data-elementor-type="popup"]').data("elementorId");
                if (!n)
                    return;
                const s = elementorFrontend.documentsManager.documents[n];
                s.getModal().hide(),
                    e.do_not_show_again && s.disable()
            }
            onFrontendComponentsInit() {
                elementorFrontend.utils.urlActions.addAction("popup:open", (e => this.showPopup(e))),
                    elementorFrontend.utils.urlActions.addAction("popup:close", ((e, t) => this.closePopup(e, t)))
            }
        }
        t.default = _default
    }
    ,
    4339: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var o = s(n(275))
            , r = s(n(1795))
            , l = s(n(2894))
            , i = s(n(1306))
            , a = s(n(9912))
            , d = s(n(3245))
            , u = s(n(6850))
            , c = s(n(8937));
        class _default extends elementorModules.Module {
            constructor(e, t) {
                super(e),
                    this.document = t,
                    this.timingClasses = {
                        page_views: o.default,
                        sessions: r.default,
                        url: l.default,
                        sources: i.default,
                        logged_in: a.default,
                        devices: d.default,
                        times: u.default,
                        browsers: c.default
                    }
            }
            check() {
                const e = this.getSettings();
                let t = !0;
                return jQuery.each(this.timingClasses, ((n, s) => {
                    if (!e[n])
                        return;
                    new s(e, this.document).check() || (t = !1)
                }
                )),
                    t
            }
        }
        t.default = _default
    }
    ,
    3565: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.Module {
            constructor(e, t) {
                super(e),
                    this.document = t
            }
            getTimingSetting(e) {
                return this.getSettings(this.getName() + "_" + e)
            }
        }
        t.default = _default
    }
    ,
    8937: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var o = s(n(3565));
        class _default extends o.default {
            getName() {
                return "browsers"
            }
            check() {
                if ("all" === this.getTimingSetting("browsers"))
                    return !0;
                const e = this.getTimingSetting("browsers_options")
                    , t = elementorFrontend.utils.environment;
                return e.some((e => t[e]))
            }
        }
        t.default = _default
    }
    ,
    3245: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var o = s(n(3565));
        class _default extends o.default {
            getName() {
                return "devices"
            }
            check() {
                return -1 !== this.getTimingSetting("devices").indexOf(elementorFrontend.getCurrentDeviceMode())
            }
        }
        t.default = _default
    }
    ,
    9912: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var o = s(n(3565));
        class _default extends o.default {
            getName() {
                return "logged_in"
            }
            check() {
                const e = elementorFrontend.config.user;
                if (!e)
                    return !0;
                if ("all" === this.getTimingSetting("users"))
                    return !1;
                return !this.getTimingSetting("roles").filter((t => -1 !== e.roles.indexOf(t))).length
            }
        }
        t.default = _default
    }
    ,
    275: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var o = s(n(3565));
        class _default extends o.default {
            getName() {
                return "page_views"
            }
            check() {
                const e = elementorFrontend.storage.get("pageViews")
                    , t = this.getName();
                let n = this.document.getStorage(t + "_initialPageViews");
                return n || (this.document.setStorage(t + "_initialPageViews", e),
                    n = e),
                    e - n >= this.getTimingSetting("views")
            }
        }
        t.default = _default
    }
    ,
    1795: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var o = s(n(3565));
        class _default extends o.default {
            getName() {
                return "sessions"
            }
            check() {
                const e = elementorFrontend.storage.get("sessions")
                    , t = this.getName();
                let n = this.document.getStorage(t + "_initialSessions");
                return n || (this.document.setStorage(t + "_initialSessions", e),
                    n = e),
                    e - n >= this.getTimingSetting("sessions")
            }
        }
        t.default = _default
    }
    ,
    1306: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var o = s(n(3565));
        class _default extends o.default {
            getName() {
                return "sources"
            }
            check() {
                const e = this.getTimingSetting("sources");
                if (3 === e.length)
                    return !0;
                const t = document.referrer.replace(/https?:\/\/(?:www\.)?/, "");
                return 0 === t.indexOf(location.host.replace("www.", "")) ? -1 !== e.indexOf("internal") : -1 !== e.indexOf("external") || -1 !== e.indexOf("search") && /^(google|yahoo|bing|yandex|baidu)\./.test(t)
            }
        }
        t.default = _default
    }
    ,
    6850: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var o = s(n(3565));
        class _default extends o.default {
            getName() {
                return "times"
            }
            check() {
                const e = this.document.getStorage("times") || 0;
                return this.getTimingSetting("times") > e
            }
        }
        t.default = _default
    }
    ,
    2894: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var o = s(n(3565));
        class _default extends o.default {
            getName() {
                return "url"
            }
            check() {
                const e = this.getTimingSetting("url")
                    , t = this.getTimingSetting("action")
                    , n = document.referrer;
                if ("regex" !== t)
                    return "hide" === t ^ -1 !== n.indexOf(e);
                let s;
                try {
                    s = new RegExp(e)
                } catch (e) {
                    return !1
                }
                return s.test(n)
            }
        }
        t.default = _default
    }
    ,
    9545: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var o = s(n(974))
            , r = s(n(8330))
            , l = s(n(1220))
            , i = s(n(9863))
            , a = s(n(1055))
            , d = s(n(9972));
        class _default extends elementorModules.Module {
            constructor(e, t) {
                super(e),
                    this.document = t,
                    this.triggers = [],
                    this.triggerClasses = {
                        page_load: o.default,
                        scrolling: r.default,
                        scrolling_to: l.default,
                        click: i.default,
                        inactivity: a.default,
                        exit_intent: d.default
                    },
                    this.runTriggers()
            }
            runTriggers() {
                const e = this.getSettings();
                jQuery.each(this.triggerClasses, ((t, n) => {
                    if (!e[t])
                        return;
                    const s = new n(e, (() => this.onTriggerFired()));
                    s.run(),
                        this.triggers.push(s)
                }
                ))
            }
            destroyTriggers() {
                this.triggers.forEach((e => e.destroy())),
                    this.triggers = []
            }
            onTriggerFired() {
                this.document.showModal(!0),
                    this.destroyTriggers()
            }
        }
        t.default = _default
    }
    ,
    144: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.Module {
            constructor(e, t) {
                super(e),
                    this.callback = t
            }
            getTriggerSetting(e) {
                return this.getSettings(this.getName() + "_" + e)
            }
        }
        t.default = _default
    }
    ,
    9863: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var o = s(n(144));
        class _default extends o.default {
            constructor(...e) {
                super(...e),
                    this.checkClick = this.checkClick.bind(this),
                    this.clicksCount = 0
            }
            getName() {
                return "click"
            }
            checkClick() {
                this.clicksCount++,
                    this.clicksCount === this.getTriggerSetting("times") && this.callback()
            }
            run() {
                elementorFrontend.elements.$body.on("click", this.checkClick)
            }
            destroy() {
                elementorFrontend.elements.$body.off("click", this.checkClick)
            }
        }
        t.default = _default
    }
    ,
    9972: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var o = s(n(144));
        class _default extends o.default {
            constructor(...e) {
                super(...e),
                    this.detectExitIntent = this.detectExitIntent.bind(this)
            }
            getName() {
                return "exit_intent"
            }
            detectExitIntent(e) {
                e.clientY <= 0 && this.callback()
            }
            run() {
                elementorFrontend.elements.$window.on("mouseleave", this.detectExitIntent)
            }
            destroy() {
                elementorFrontend.elements.$window.off("mouseleave", this.detectExitIntent)
            }
        }
        t.default = _default
    }
    ,
    1055: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var o = s(n(144));
        class _default extends o.default {
            constructor(...e) {
                super(...e),
                    this.restartTimer = this.restartTimer.bind(this)
            }
            getName() {
                return "inactivity"
            }
            run() {
                this.startTimer(),
                    elementorFrontend.elements.$document.on("keypress mousemove", this.restartTimer)
            }
            startTimer() {
                this.timeOut = setTimeout(this.callback, 1e3 * this.getTriggerSetting("time"))
            }
            clearTimer() {
                clearTimeout(this.timeOut)
            }
            restartTimer() {
                this.clearTimer(),
                    this.startTimer()
            }
            destroy() {
                this.clearTimer(),
                    elementorFrontend.elements.$document.off("keypress mousemove", this.restartTimer)
            }
        }
        t.default = _default
    }
    ,
    974: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var o = s(n(144));
        class _default extends o.default {
            getName() {
                return "page_load"
            }
            run() {
                this.timeout = setTimeout(this.callback, 1e3 * this.getTriggerSetting("delay"))
            }
            destroy() {
                clearTimeout(this.timeout)
            }
        }
        t.default = _default
    }
    ,
    1220: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var o = s(n(144));
        class _default extends o.default {
            getName() {
                return "scrolling_to"
            }
            run() {
                let e;
                try {
                    e = jQuery(this.getTriggerSetting("selector"))
                } catch (e) {
                    return
                }
                this.waypointInstance = elementorFrontend.waypoint(e, this.callback)[0]
            }
            destroy() {
                this.waypointInstance && this.waypointInstance.destroy()
            }
        }
        t.default = _default
    }
    ,
    8330: (e, t, n) => {
        "use strict";
        var s = n(7914);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var o = s(n(144));
        class _default extends o.default {
            constructor(...e) {
                super(...e),
                    this.checkScroll = this.checkScroll.bind(this),
                    this.lastScrollOffset = 0
            }
            getName() {
                return "scrolling"
            }
            checkScroll() {
                const e = scrollY > this.lastScrollOffset ? "down" : "up"
                    , t = this.getTriggerSetting("direction");
                if (this.lastScrollOffset = scrollY,
                    e !== t)
                    return;
                if ("up" === e)
                    return void this.callback();
                const n = elementorFrontend.elements.$document.height() - innerHeight;
                scrollY / n * 100 >= this.getTriggerSetting("offset") && this.callback()
            }
            run() {
                elementorFrontend.elements.$window.on("scroll", this.checkScroll)
            }
            destroy() {
                elementorFrontend.elements.$window.off("scroll", this.checkScroll)
            }
        }
        t.default = _default
    }
    ,
    6463: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                    ["classic", "full_content", "cards"].forEach((e => {
                        elementorFrontend.elementsHandler.attachHandler("posts", (() => n.e(985).then(n.bind(n, 9738))), e)
                    }
                    )),
                    elementorFrontend.elementsHandler.attachHandler("posts", (() => n.e(287).then(n.bind(n, 2926))), "classic"),
                    elementorFrontend.elementsHandler.attachHandler("posts", (() => n.e(287).then(n.bind(n, 2926))), "full_content"),
                    elementorFrontend.elementsHandler.attachHandler("posts", (() => n.e(287).then(n.bind(n, 8014))), "cards"),
                    elementorFrontend.elementsHandler.attachHandler("portfolio", (() => n.e(824).then(n.bind(n, 2763))))
            }
        }
        t.default = _default
    }
    ,
    7133: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                    elementorFrontend.elementsHandler.attachHandler("share-buttons", (() => n.e(58).then(n.bind(n, 9327))))
            }
        }
        t.default = _default
    }
    ,
    1871: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                    elementorFrontend.elementsHandler.attachHandler("slides", (() => n.e(114).then(n.bind(n, 7956))))
            }
        }
        t.default = _default
    }
    ,
    3781: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                    elementorFrontend.elementsHandler.attachHandler("facebook-button", (() => n.e(443).then(n.bind(n, 908)))),
                    elementorFrontend.elementsHandler.attachHandler("facebook-comments", (() => n.e(443).then(n.bind(n, 908)))),
                    elementorFrontend.elementsHandler.attachHandler("facebook-embed", (() => n.e(443).then(n.bind(n, 908)))),
                    elementorFrontend.elementsHandler.attachHandler("facebook-page", (() => n.e(443).then(n.bind(n, 908))))
            }
        }
        t.default = _default
    }
    ,
    7786: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                    elementorFrontend.elementsHandler.attachHandler("table-of-contents", (() => n.e(838).then(n.bind(n, 5791))))
            }
        }
        t.default = _default
    }
    ,
    7466: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                    elementorFrontend.elementsHandler.attachHandler("archive-posts", (() => n.e(685).then(n.bind(n, 3824))), "archive_classic"),
                    elementorFrontend.elementsHandler.attachHandler("archive-posts", (() => n.e(685).then(n.bind(n, 3824))), "archive_full_content"),
                    elementorFrontend.elementsHandler.attachHandler("archive-posts", (() => n.e(685).then(n.bind(n, 7177))), "archive_cards"),
                    jQuery((function () {
                        var e = location.search.match(/theme_template_id=(\d*)/)
                            , t = e ? jQuery(".elementor-" + e[1]) : [];
                        t.length && jQuery("html, body").animate({
                            scrollTop: t.offset().top - window.innerHeight / 2
                        })
                    }
                    ))
            }
        }
        t.default = _default
    }
    ,
    4173: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                    elementorFrontend.elementsHandler.attachHandler("search-form", (() => n.e(858).then(n.bind(n, 188))))
            }
        }
        t.default = _default
    }
    ,
    1273: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                    elementorFrontend.elementsHandler.attachHandler("woocommerce-menu-cart", (() => n.e(102).then(n.bind(n, 9428))))
            }
        }
        t.default = _default
    }
}, e => {
    "use strict";
    e.O(0, [819], (() => {
        return t = 7319,
            e(e.s = t);
        var t
    }
    ));
    e.O()
}
]);
