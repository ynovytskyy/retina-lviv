! function(t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }
    var n = {};
    e.m = t, e.c = n, e.d = function(t, n, i) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "/", e(e.s = 12)
}([function(t, e, n) {
    var i, r;
    /*!
     * jQuery JavaScript Library v2.2.4
     * http://jquery.com/
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2016-05-20T17:23Z
     */
    ! function(e, n) {
        "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return n(t)
        } : n(e)
    }("undefined" != typeof window ? window : this, function(n, s) {
        function o(t) {
            var e = !!t && "length" in t && t.length,
                n = ct.type(t);
            return "function" !== n && !ct.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function a(t, e, n) {
            if (ct.isFunction(e)) return ct.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return ct.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (yt.test(e)) return ct.filter(e, t, n);
                e = ct.filter(e, t)
            }
            return ct.grep(t, function(t) {
                return it.call(e, t) > -1 !== n
            })
        }

        function c(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function l(t) {
            var e = {};
            return ct.each(t.match(Ct) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function u() {
            Z.removeEventListener("DOMContentLoaded", u), n.removeEventListener("load", u), ct.ready()
        }

        function h() {
            this.expando = ct.expando + h.uid++
        }

        function f(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(At, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : $t.test(n) ? ct.parseJSON(n) : n)
                    } catch (t) {}
                    Ft.set(t, e, n)
                } else n = void 0;
            return n
        }

        function d(t, e, n, i) {
            var r, s = 1,
                o = 20,
                a = i ? function() {
                    return i.cur()
                } : function() {
                    return ct.css(t, e, "")
                },
                c = a(),
                l = n && n[3] || (ct.cssNumber[e] ? "" : "px"),
                u = (ct.cssNumber[e] || "px" !== l && +c) && It.exec(ct.css(t, e));
            if (u && u[3] !== l) {
                l = l || u[3], n = n || [], u = +c || 1;
                do {
                    s = s || ".5", u /= s, ct.style(t, e, u + l)
                } while (s !== (s = a() / c) && 1 !== s && --o)
            }
            return n && (u = +u || +c || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = u, i.end = r)), r
        }

        function p(t, e) {
            var n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && ct.nodeName(t, e) ? ct.merge([t], n) : n
        }

        function g(t, e) {
            for (var n = 0, i = t.length; n < i; n++) kt.set(t[n], "globalEval", !e || kt.get(e[n], "globalEval"))
        }

        function m(t, e, n, i, r) {
            for (var s, o, a, c, l, u, h = e.createDocumentFragment(), f = [], d = 0, m = t.length; d < m; d++)
                if ((s = t[d]) || 0 === s)
                    if ("object" === ct.type(s)) ct.merge(f, s.nodeType ? [s] : s);
                    else if (jt.test(s)) {
                for (o = o || h.appendChild(e.createElement("div")), a = (Mt.exec(s) || ["", ""])[1].toLowerCase(), c = Rt[a] || Rt._default, o.innerHTML = c[1] + ct.htmlPrefilter(s) + c[2], u = c[0]; u--;) o = o.lastChild;
                ct.merge(f, o.childNodes), o = h.firstChild, o.textContent = ""
            } else f.push(e.createTextNode(s));
            for (h.textContent = "", d = 0; s = f[d++];)
                if (i && ct.inArray(s, i) > -1) r && r.push(s);
                else if (l = ct.contains(s.ownerDocument, s), o = p(h.appendChild(s), "script"), l && g(o), n)
                for (u = 0; s = o[u++];) Lt.test(s.type || "") && n.push(s);
            return h
        }

        function v() {
            return !0
        }

        function y() {
            return !1
        }

        function b() {
            try {
                return Z.activeElement
            } catch (t) {}
        }

        function _(t, e, n, i, r, s) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (a in e) _(t, a, n, i, e[a], s);
                return t
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = y;
            else if (!r) return t;
            return 1 === s && (o = r, r = function(t) {
                return ct().off(t), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = ct.guid++)), t.each(function() {
                ct.event.add(this, e, r, i, n)
            })
        }

        function w(t, e) {
            return ct.nodeName(t, "table") && ct.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function x(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function C(t) {
            var e = Wt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function S(t, e) {
            var n, i, r, s, o, a, c, l;
            if (1 === e.nodeType) {
                if (kt.hasData(t) && (s = kt.access(t), o = kt.set(e, s), l = s.events)) {
                    delete o.handle, o.events = {};
                    for (r in l)
                        for (n = 0, i = l[r].length; n < i; n++) ct.event.add(e, r, l[r][n])
                }
                Ft.hasData(t) && (a = Ft.access(t), c = ct.extend({}, a), Ft.set(e, c))
            }
        }

        function T(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && Ot.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }

        function P(t, e, n, i) {
            e = et.apply([], e);
            var r, s, o, a, c, l, u = 0,
                h = t.length,
                f = h - 1,
                d = e[0],
                g = ct.isFunction(d);
            if (g || h > 1 && "string" == typeof d && !at.checkClone && Ut.test(d)) return t.each(function(r) {
                var s = t.eq(r);
                g && (e[0] = d.call(this, r, s.html())), P(s, e, n, i)
            });
            if (h && (r = m(e, t[0].ownerDocument, !1, t, i), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || i)) {
                for (o = ct.map(p(r, "script"), x), a = o.length; u < h; u++) c = r, u !== f && (c = ct.clone(c, !0, !0), a && ct.merge(o, p(c, "script"))), n.call(t[u], c, u);
                if (a)
                    for (l = o[o.length - 1].ownerDocument, ct.map(o, C), u = 0; u < a; u++) c = o[u], Lt.test(c.type || "") && !kt.access(c, "globalEval") && ct.contains(l, c) && (c.src ? ct._evalUrl && ct._evalUrl(c.src) : ct.globalEval(c.textContent.replace(Vt, "")))
            }
            return t
        }

        function k(t, e, n) {
            for (var i, r = e ? ct.filter(e, t) : t, s = 0; null != (i = r[s]); s++) n || 1 !== i.nodeType || ct.cleanData(p(i)), i.parentNode && (n && ct.contains(i.ownerDocument, i) && g(p(i, "script")), i.parentNode.removeChild(i));
            return t
        }

        function F(t, e) {
            var n = ct(e.createElement(t)).appendTo(e.body),
                i = ct.css(n[0], "display");
            return n.detach(), i
        }

        function $(t) {
            var e = Z,
                n = Yt[t];
            return n || (n = F(t, e), "none" !== n && n || (Xt = (Xt || ct("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Xt[0].contentDocument, e.write(), e.close(), n = F(t, e), Xt.detach()), Yt[t] = n), n
        }

        function A(t, e, n) {
            var i, r, s, o, a = t.style;
            return n = n || Jt(t), o = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== o && void 0 !== o || ct.contains(t.ownerDocument, t) || (o = ct.style(t, e)), n && !at.pixelMarginRight() && Kt.test(o) && Qt.test(e) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s), void 0 !== o ? o + "" : o
        }

        function D(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function I(t) {
            if (t in se) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = re.length; n--;)
                if ((t = re[n] + e) in se) return t
        }

        function N(t, e, n) {
            var i = It.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }

        function E(t, e, n, i, r) {
            for (var s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; s < 4; s += 2) "margin" === n && (o += ct.css(t, n + Nt[s], !0, r)), i ? ("content" === n && (o -= ct.css(t, "padding" + Nt[s], !0, r)), "margin" !== n && (o -= ct.css(t, "border" + Nt[s] + "Width", !0, r))) : (o += ct.css(t, "padding" + Nt[s], !0, r), "padding" !== n && (o += ct.css(t, "border" + Nt[s] + "Width", !0, r)));
            return o
        }

        function O(t, e, n) {
            var i = !0,
                r = "width" === e ? t.offsetWidth : t.offsetHeight,
                s = Jt(t),
                o = "border-box" === ct.css(t, "boxSizing", !1, s);
            if (r <= 0 || null == r) {
                if (r = A(t, e, s), (r < 0 || null == r) && (r = t.style[e]), Kt.test(r)) return r;
                i = o && (at.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
            }
            return r + E(t, e, n || (o ? "border" : "content"), i, s) + "px"
        }

        function M(t, e) {
            for (var n, i, r, s = [], o = 0, a = t.length; o < a; o++) i = t[o], i.style && (s[o] = kt.get(i, "olddisplay"), n = i.style.display, e ? (s[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && Et(i) && (s[o] = kt.access(i, "olddisplay", $(i.nodeName)))) : (r = Et(i), "none" === n && r || kt.set(i, "olddisplay", r ? n : ct.css(i, "display"))));
            for (o = 0; o < a; o++) i = t[o], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? s[o] || "" : "none"));
            return t
        }

        function L(t, e, n, i, r) {
            return new L.prototype.init(t, e, n, i, r)
        }

        function R() {
            return n.setTimeout(function() {
                oe = void 0
            }), oe = ct.now()
        }

        function j(t, e) {
            var n, i = 0,
                r = {
                    height: t
                };
            for (e = e ? 1 : 0; i < 4; i += 2 - e) n = Nt[i], r["margin" + n] = r["padding" + n] = t;
            return e && (r.opacity = r.width = t), r
        }

        function H(t, e, n) {
            for (var i, r = (z.tweeners[e] || []).concat(z.tweeners["*"]), s = 0, o = r.length; s < o; s++)
                if (i = r[s].call(n, e, t)) return i
        }

        function G(t, e, n) {
            var i, r, s, o, a, c, l, u = this,
                h = {},
                f = t.style,
                d = t.nodeType && Et(t),
                p = kt.get(t, "fxshow");
            n.queue || (a = ct._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, c = a.empty.fire, a.empty.fire = function() {
                a.unqueued || c()
            }), a.unqueued++, u.always(function() {
                u.always(function() {
                    a.unqueued--, ct.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], l = ct.css(t, "display"), "inline" === ("none" === l ? kt.get(t, "olddisplay") || $(t.nodeName) : l) && "none" === ct.css(t, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", u.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in e)
                if (r = e[i], ce.exec(r)) {
                    if (delete e[i], s = s || "toggle" === r, r === (d ? "hide" : "show")) {
                        if ("show" !== r || !p || void 0 === p[i]) continue;
                        d = !0
                    }
                    h[i] = p && p[i] || ct.style(t, i)
                } else l = void 0;
            if (ct.isEmptyObject(h)) "inline" === ("none" === l ? $(t.nodeName) : l) && (f.display = l);
            else {
                p ? "hidden" in p && (d = p.hidden) : p = kt.access(t, "fxshow", {}), s && (p.hidden = !d), d ? ct(t).show() : u.done(function() {
                    ct(t).hide()
                }), u.done(function() {
                    var e;
                    kt.remove(t, "fxshow");
                    for (e in h) ct.style(t, e, h[e])
                });
                for (i in h) o = H(d ? p[i] : 0, i, u), i in p || (p[i] = o.start, d && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function B(t, e) {
            var n, i, r, s, o;
            for (n in t)
                if (i = ct.camelCase(n), r = e[i], s = t[n], ct.isArray(s) && (r = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), (o = ct.cssHooks[i]) && "expand" in o) {
                    s = o.expand(s), delete t[i];
                    for (n in s) n in t || (t[n] = s[n], e[n] = r)
                } else e[i] = r
        }

        function z(t, e, n) {
            var i, r, s = 0,
                o = z.prefilters.length,
                a = ct.Deferred().always(function() {
                    delete c.elem
                }),
                c = function() {
                    if (r) return !1;
                    for (var e = oe || R(), n = Math.max(0, l.startTime + l.duration - e), i = n / l.duration || 0, s = 1 - i, o = 0, c = l.tweens.length; o < c; o++) l.tweens[o].run(s);
                    return a.notifyWith(t, [l, s, n]), s < 1 && c ? n : (a.resolveWith(t, [l]), !1)
                },
                l = a.promise({
                    elem: t,
                    props: ct.extend({}, e),
                    opts: ct.extend(!0, {
                        specialEasing: {},
                        easing: ct.easing._default
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: oe || R(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = ct.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                        return l.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? l.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n < i; n++) l.tweens[n].run(1);
                        return e ? (a.notifyWith(t, [l, 1, 0]), a.resolveWith(t, [l, e])) : a.rejectWith(t, [l, e]), this
                    }
                }),
                u = l.props;
            for (B(u, l.opts.specialEasing); s < o; s++)
                if (i = z.prefilters[s].call(l, t, u, l.opts)) return ct.isFunction(i.stop) && (ct._queueHooks(l.elem, l.opts.queue).stop = ct.proxy(i.stop, i)), i;
            return ct.map(u, H, l), ct.isFunction(l.opts.start) && l.opts.start.call(t, l), ct.fx.timer(ct.extend(c, {
                elem: t,
                anim: l,
                queue: l.opts.queue
            })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }

        function q(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function U(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, r = 0,
                    s = e.toLowerCase().match(Ct) || [];
                if (ct.isFunction(n))
                    for (; i = s[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function W(t, e, n, i) {
            function r(a) {
                var c;
                return s[a] = !0, ct.each(t[a] || [], function(t, a) {
                    var l = a(e, n, i);
                    return "string" != typeof l || o || s[l] ? o ? !(c = l) : void 0 : (e.dataTypes.unshift(l), r(l), !1)
                }), c
            }
            var s = {},
                o = t === Fe;
            return r(e.dataTypes[0]) || !s["*"] && r("*")
        }

        function V(t, e) {
            var n, i, r = ct.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
            return i && ct.extend(!0, t, i), t
        }

        function X(t, e, n) {
            for (var i, r, s, o, a = t.contents, c = t.dataTypes;
                "*" === c[0];) c.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i)
                for (r in a)
                    if (a[r] && a[r].test(i)) {
                        c.unshift(r);
                        break
                    } if (c[0] in n) s = c[0];
            else {
                for (r in n) {
                    if (!c[0] || t.converters[r + " " + c[0]]) {
                        s = r;
                        break
                    }
                    o || (o = r)
                }
                s = s || o
            }
            if (s) return s !== c[0] && c.unshift(s), n[s]
        }

        function Y(t, e, n, i) {
            var r, s, o, a, c, l = {},
                u = t.dataTypes.slice();
            if (u[1])
                for (o in t.converters) l[o.toLowerCase()] = t.converters[o];
            for (s = u.shift(); s;)
                if (t.responseFields[s] && (n[t.responseFields[s]] = e), !c && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), c = s, s = u.shift())
                    if ("*" === s) s = c;
                    else if ("*" !== c && c !== s) {
                if (!(o = l[c + " " + s] || l["* " + s]))
                    for (r in l)
                        if (a = r.split(" "), a[1] === s && (o = l[c + " " + a[0]] || l["* " + a[0]])) {
                            !0 === o ? o = l[r] : !0 !== l[r] && (s = a[0], u.unshift(a[1]));
                            break
                        } if (!0 !== o)
                    if (o && t.throws) e = o(e);
                    else try {
                        e = o(e)
                    } catch (t) {
                        return {
                            state: "parsererror",
                            error: o ? t : "No conversion from " + c + " to " + s
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function Q(t, e, n, i) {
            var r;
            if (ct.isArray(e)) ct.each(e, function(e, r) {
                n || Ie.test(t) ? i(t, r) : Q(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
            });
            else if (n || "object" !== ct.type(e)) i(t, e);
            else
                for (r in e) Q(t + "[" + r + "]", e[r], n, i)
        }

        function K(t) {
            return ct.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var J = [],
            Z = n.document,
            tt = J.slice,
            et = J.concat,
            nt = J.push,
            it = J.indexOf,
            rt = {},
            st = rt.toString,
            ot = rt.hasOwnProperty,
            at = {},
            ct = function(t, e) {
                return new ct.fn.init(t, e)
            },
            lt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ut = /^-ms-/,
            ht = /-([\da-z])/gi,
            ft = function(t, e) {
                return e.toUpperCase()
            };
        ct.fn = ct.prototype = {
            jquery: "2.2.4",
            constructor: ct,
            selector: "",
            length: 0,
            toArray: function() {
                return tt.call(this)
            },
            get: function(t) {
                return null != t ? t < 0 ? this[t + this.length] : this[t] : tt.call(this)
            },
            pushStack: function(t) {
                var e = ct.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t) {
                return ct.each(this, t)
            },
            map: function(t) {
                return this.pushStack(ct.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(tt.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: nt,
            sort: J.sort,
            splice: J.splice
        }, ct.extend = ct.fn.extend = function() {
            var t, e, n, i, r, s, o = arguments[0] || {},
                a = 1,
                c = arguments.length,
                l = !1;
            for ("boolean" == typeof o && (l = o, o = arguments[a] || {}, a++), "object" == typeof o || ct.isFunction(o) || (o = {}), a === c && (o = this, a--); a < c; a++)
                if (null != (t = arguments[a]))
                    for (e in t) n = o[e], i = t[e], o !== i && (l && i && (ct.isPlainObject(i) || (r = ct.isArray(i))) ? (r ? (r = !1, s = n && ct.isArray(n) ? n : []) : s = n && ct.isPlainObject(n) ? n : {}, o[e] = ct.extend(l, s, i)) : void 0 !== i && (o[e] = i));
            return o
        }, ct.extend({
            expando: "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === ct.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                var e = t && t.toString();
                return !ct.isArray(t) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(t) {
                var e;
                if ("object" !== ct.type(t) || t.nodeType || ct.isWindow(t)) return !1;
                if (t.constructor && !ot.call(t, "constructor") && !ot.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (e in t);
                return void 0 === e || ot.call(t, e)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? rt[st.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                var e, n = eval;
                (t = ct.trim(t)) && (1 === t.indexOf("use strict") ? (e = Z.createElement("script"), e.text = t, Z.head.appendChild(e).parentNode.removeChild(e)) : n(t))
            },
            camelCase: function(t) {
                return t.replace(ut, "ms-").replace(ht, ft)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e) {
                var n, i = 0;
                if (o(t))
                    for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                else
                    for (i in t)
                        if (!1 === e.call(t[i], i, t[i])) break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(lt, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (o(Object(t)) ? ct.merge(n, "string" == typeof t ? [t] : t) : nt.call(n, t)), n
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : it.call(e, t, n)
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
                return t.length = r, t
            },
            grep: function(t, e, n) {
                for (var i = [], r = 0, s = t.length, o = !n; r < s; r++) !e(t[r], r) !== o && i.push(t[r]);
                return i
            },
            map: function(t, e, n) {
                var i, r, s = 0,
                    a = [];
                if (o(t))
                    for (i = t.length; s < i; s++) null != (r = e(t[s], s, n)) && a.push(r);
                else
                    for (s in t) null != (r = e(t[s], s, n)) && a.push(r);
                return et.apply([], a)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, i, r;
                if ("string" == typeof e && (n = t[e], e = t, t = n), ct.isFunction(t)) return i = tt.call(arguments, 2), r = function() {
                    return t.apply(e || this, i.concat(tt.call(arguments)))
                }, r.guid = t.guid = t.guid || ct.guid++, r
            },
            now: Date.now,
            support: at
        }), "function" == typeof Symbol && (ct.fn[Symbol.iterator] = J[Symbol.iterator]), ct.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            rt["[object " + e + "]"] = e.toLowerCase()
        });
        var dt =
            /*!
             * Sizzle CSS Selector Engine v2.2.1
             * http://sizzlejs.com/
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2015-10-17
             */
            function(t) {
                function e(t, e, n, i) {
                    var r, s, o, a, l, h, f, d, p = e && e.ownerDocument,
                        g = e ? e.nodeType : 9;
                    if (n = n || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g) return n;
                    if (!i && ((e ? e.ownerDocument || e : R) !== A && $(e), e = e || A, I)) {
                        if (11 !== g && (h = gt.exec(t)))
                            if (r = h[1]) {
                                if (9 === g) {
                                    if (!(o = e.getElementById(r))) return n;
                                    if (o.id === r) return n.push(o), n
                                } else if (p && (o = p.getElementById(r)) && M(e, o) && o.id === r) return n.push(o), n
                            } else {
                                if (h[2]) return Q.apply(n, e.getElementsByTagName(t)), n;
                                if ((r = h[3]) && b.getElementsByClassName && e.getElementsByClassName) return Q.apply(n, e.getElementsByClassName(r)), n
                            } if (b.qsa && !z[t + " "] && (!N || !N.test(t))) {
                            if (1 !== g) p = e, d = t;
                            else if ("object" !== e.nodeName.toLowerCase()) {
                                for ((a = e.getAttribute("id")) ? a = a.replace(vt, "\\$&") : e.setAttribute("id", a = L), f = C(t), s = f.length, l = ut.test(a) ? "#" + a : "[id='" + a + "']"; s--;) f[s] = l + " " + u(f[s]);
                                d = f.join(","), p = mt.test(t) && c(e.parentNode) || e
                            }
                            if (d) try {
                                return Q.apply(n, p.querySelectorAll(d)), n
                            } catch (t) {} finally {
                                a === L && e.removeAttribute("id")
                            }
                        }
                    }
                    return T(t.replace(st, "$1"), e, n, i)
                }

                function n() {
                    function t(n, i) {
                        return e.push(n + " ") > _.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }
                    var e = [];
                    return t
                }

                function i(t) {
                    return t[L] = !0, t
                }

                function r(t) {
                    var e = A.createElement("div");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function s(t, e) {
                    for (var n = t.split("|"), i = n.length; i--;) _.attrHandle[n[i]] = e
                }

                function o(t, e) {
                    var n = e && t,
                        i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === e) return -1;
                    return t ? 1 : -1
                }

                function a(t) {
                    return i(function(e) {
                        return e = +e, i(function(n, i) {
                            for (var r, s = t([], n.length, e), o = s.length; o--;) n[r = s[o]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }

                function c(t) {
                    return t && void 0 !== t.getElementsByTagName && t
                }

                function l() {}

                function u(t) {
                    for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                    return i
                }

                function h(t, e, n) {
                    var i = e.dir,
                        r = n && "parentNode" === i,
                        s = H++;
                    return e.first ? function(e, n, s) {
                        for (; e = e[i];)
                            if (1 === e.nodeType || r) return t(e, n, s)
                    } : function(e, n, o) {
                        var a, c, l, u = [j, s];
                        if (o) {
                            for (; e = e[i];)
                                if ((1 === e.nodeType || r) && t(e, n, o)) return !0
                        } else
                            for (; e = e[i];)
                                if (1 === e.nodeType || r) {
                                    if (l = e[L] || (e[L] = {}), c = l[e.uniqueID] || (l[e.uniqueID] = {}), (a = c[i]) && a[0] === j && a[1] === s) return u[2] = a[2];
                                    if (c[i] = u, u[2] = t(e, n, o)) return !0
                                }
                    }
                }

                function f(t) {
                    return t.length > 1 ? function(e, n, i) {
                        for (var r = t.length; r--;)
                            if (!t[r](e, n, i)) return !1;
                        return !0
                    } : t[0]
                }

                function d(t, n, i) {
                    for (var r = 0, s = n.length; r < s; r++) e(t, n[r], i);
                    return i
                }

                function p(t, e, n, i, r) {
                    for (var s, o = [], a = 0, c = t.length, l = null != e; a < c; a++)(s = t[a]) && (n && !n(s, i, r) || (o.push(s), l && e.push(a)));
                    return o
                }

                function g(t, e, n, r, s, o) {
                    return r && !r[L] && (r = g(r)), s && !s[L] && (s = g(s, o)), i(function(i, o, a, c) {
                        var l, u, h, f = [],
                            g = [],
                            m = o.length,
                            v = i || d(e || "*", a.nodeType ? [a] : a, []),
                            y = !t || !i && e ? v : p(v, f, t, a, c),
                            b = n ? s || (i ? t : m || r) ? [] : o : y;
                        if (n && n(y, b, a, c), r)
                            for (l = p(b, g), r(l, [], a, c), u = l.length; u--;)(h = l[u]) && (b[g[u]] = !(y[g[u]] = h));
                        if (i) {
                            if (s || t) {
                                if (s) {
                                    for (l = [], u = b.length; u--;)(h = b[u]) && l.push(y[u] = h);
                                    s(null, b = [], l, c)
                                }
                                for (u = b.length; u--;)(h = b[u]) && (l = s ? J(i, h) : f[u]) > -1 && (i[l] = !(o[l] = h))
                            }
                        } else b = p(b === o ? b.splice(m, b.length) : b), s ? s(null, o, b, c) : Q.apply(o, b)
                    })
                }

                function m(t) {
                    for (var e, n, i, r = t.length, s = _.relative[t[0].type], o = s || _.relative[" "], a = s ? 1 : 0, c = h(function(t) {
                            return t === e
                        }, o, !0), l = h(function(t) {
                            return J(e, t) > -1
                        }, o, !0), d = [function(t, n, i) {
                            var r = !s && (i || n !== P) || ((e = n).nodeType ? c(t, n, i) : l(t, n, i));
                            return e = null, r
                        }]; a < r; a++)
                        if (n = _.relative[t[a].type]) d = [h(f(d), n)];
                        else {
                            if (n = _.filter[t[a].type].apply(null, t[a].matches), n[L]) {
                                for (i = ++a; i < r && !_.relative[t[i].type]; i++);
                                return g(a > 1 && f(d), a > 1 && u(t.slice(0, a - 1).concat({
                                    value: " " === t[a - 2].type ? "*" : ""
                                })).replace(st, "$1"), n, a < i && m(t.slice(a, i)), i < r && m(t = t.slice(i)), i < r && u(t))
                            }
                            d.push(n)
                        } return f(d)
                }

                function v(t, n) {
                    var r = n.length > 0,
                        s = t.length > 0,
                        o = function(i, o, a, c, l) {
                            var u, h, f, d = 0,
                                g = "0",
                                m = i && [],
                                v = [],
                                y = P,
                                b = i || s && _.find.TAG("*", l),
                                w = j += null == y ? 1 : Math.random() || .1,
                                x = b.length;
                            for (l && (P = o === A || o || l); g !== x && null != (u = b[g]); g++) {
                                if (s && u) {
                                    for (h = 0, o || u.ownerDocument === A || ($(u), a = !I); f = t[h++];)
                                        if (f(u, o || A, a)) {
                                            c.push(u);
                                            break
                                        } l && (j = w)
                                }
                                r && ((u = !f && u) && d--, i && m.push(u))
                            }
                            if (d += g, r && g !== d) {
                                for (h = 0; f = n[h++];) f(m, v, o, a);
                                if (i) {
                                    if (d > 0)
                                        for (; g--;) m[g] || v[g] || (v[g] = X.call(c));
                                    v = p(v)
                                }
                                Q.apply(c, v), l && !i && v.length > 0 && d + n.length > 1 && e.uniqueSort(c)
                            }
                            return l && (j = w, P = y), m
                        };
                    return r ? i(o) : o
                }
                var y, b, _, w, x, C, S, T, P, k, F, $, A, D, I, N, E, O, M, L = "sizzle" + 1 * new Date,
                    R = t.document,
                    j = 0,
                    H = 0,
                    G = n(),
                    B = n(),
                    z = n(),
                    q = function(t, e) {
                        return t === e && (F = !0), 0
                    },
                    U = 1 << 31,
                    W = {}.hasOwnProperty,
                    V = [],
                    X = V.pop,
                    Y = V.push,
                    Q = V.push,
                    K = V.slice,
                    J = function(t, e) {
                        for (var n = 0, i = t.length; n < i; n++)
                            if (t[n] === e) return n;
                        return -1
                    },
                    Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    tt = "[\\x20\\t\\r\\n\\f]",
                    et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]",
                    it = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)",
                    rt = new RegExp(tt + "+", "g"),
                    st = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
                    ot = new RegExp("^" + tt + "*," + tt + "*"),
                    at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
                    ct = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
                    lt = new RegExp(it),
                    ut = new RegExp("^" + et + "$"),
                    ht = {
                        ID: new RegExp("^#(" + et + ")"),
                        CLASS: new RegExp("^\\.(" + et + ")"),
                        TAG: new RegExp("^(" + et + "|[*])"),
                        ATTR: new RegExp("^" + nt),
                        PSEUDO: new RegExp("^" + it),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + Z + ")$", "i"),
                        needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
                    },
                    ft = /^(?:input|select|textarea|button)$/i,
                    dt = /^h\d$/i,
                    pt = /^[^{]+\{\s*\[native \w/,
                    gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    mt = /[+~]/,
                    vt = /'|\\/g,
                    yt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
                    bt = function(t, e, n) {
                        var i = "0x" + e - 65536;
                        return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    },
                    _t = function() {
                        $()
                    };
                try {
                    Q.apply(V = K.call(R.childNodes), R.childNodes), V[R.childNodes.length].nodeType
                } catch (t) {
                    Q = {
                        apply: V.length ? function(t, e) {
                            Y.apply(t, K.call(e))
                        } : function(t, e) {
                            for (var n = t.length, i = 0; t[n++] = e[i++];);
                            t.length = n - 1
                        }
                    }
                }
                b = e.support = {}, x = e.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, $ = e.setDocument = function(t) {
                    var e, n, i = t ? t.ownerDocument || t : R;
                    return i !== A && 9 === i.nodeType && i.documentElement ? (A = i, D = A.documentElement, I = !x(A), (n = A.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _t, !1) : n.attachEvent && n.attachEvent("onunload", _t)), b.attributes = r(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), b.getElementsByTagName = r(function(t) {
                        return t.appendChild(A.createComment("")), !t.getElementsByTagName("*").length
                    }), b.getElementsByClassName = pt.test(A.getElementsByClassName), b.getById = r(function(t) {
                        return D.appendChild(t).id = L, !A.getElementsByName || !A.getElementsByName(L).length
                    }), b.getById ? (_.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && I) {
                            var n = e.getElementById(t);
                            return n ? [n] : []
                        }
                    }, _.filter.ID = function(t) {
                        var e = t.replace(yt, bt);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete _.find.ID, _.filter.ID = function(t) {
                        var e = t.replace(yt, bt);
                        return function(t) {
                            var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }), _.find.TAG = b.getElementsByTagName ? function(t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
                    } : function(t, e) {
                        var n, i = [],
                            r = 0,
                            s = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = s[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return s
                    }, _.find.CLASS = b.getElementsByClassName && function(t, e) {
                        if (void 0 !== e.getElementsByClassName && I) return e.getElementsByClassName(t)
                    }, E = [], N = [], (b.qsa = pt.test(A.querySelectorAll)) && (r(function(t) {
                        D.appendChild(t).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || N.push("\\[" + tt + "*(?:value|" + Z + ")"), t.querySelectorAll("[id~=" + L + "-]").length || N.push("~="), t.querySelectorAll(":checked").length || N.push(":checked"), t.querySelectorAll("a#" + L + "+*").length || N.push(".#.+[+~]")
                    }), r(function(t) {
                        var e = A.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && N.push("name" + tt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), N.push(",.*:")
                    })), (b.matchesSelector = pt.test(O = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function(t) {
                        b.disconnectedMatch = O.call(t, "div"), O.call(t, "[s!='']:x"), E.push("!=", it)
                    }), N = N.length && new RegExp(N.join("|")), E = E.length && new RegExp(E.join("|")), e = pt.test(D.compareDocumentPosition), M = e || pt.test(D.contains) ? function(t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                            i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, q = e ? function(t, e) {
                        if (t === e) return F = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n || (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !b.sortDetached && e.compareDocumentPosition(t) === n ? t === A || t.ownerDocument === R && M(R, t) ? -1 : e === A || e.ownerDocument === R && M(R, e) ? 1 : k ? J(k, t) - J(k, e) : 0 : 4 & n ? -1 : 1)
                    } : function(t, e) {
                        if (t === e) return F = !0, 0;
                        var n, i = 0,
                            r = t.parentNode,
                            s = e.parentNode,
                            a = [t],
                            c = [e];
                        if (!r || !s) return t === A ? -1 : e === A ? 1 : r ? -1 : s ? 1 : k ? J(k, t) - J(k, e) : 0;
                        if (r === s) return o(t, e);
                        for (n = t; n = n.parentNode;) a.unshift(n);
                        for (n = e; n = n.parentNode;) c.unshift(n);
                        for (; a[i] === c[i];) i++;
                        return i ? o(a[i], c[i]) : a[i] === R ? -1 : c[i] === R ? 1 : 0
                    }, A) : A
                }, e.matches = function(t, n) {
                    return e(t, null, null, n)
                }, e.matchesSelector = function(t, n) {
                    if ((t.ownerDocument || t) !== A && $(t), n = n.replace(ct, "='$1']"), b.matchesSelector && I && !z[n + " "] && (!E || !E.test(n)) && (!N || !N.test(n))) try {
                        var i = O.call(t, n);
                        if (i || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (t) {}
                    return e(n, A, null, [t]).length > 0
                }, e.contains = function(t, e) {
                    return (t.ownerDocument || t) !== A && $(t), M(t, e)
                }, e.attr = function(t, e) {
                    (t.ownerDocument || t) !== A && $(t);
                    var n = _.attrHandle[e.toLowerCase()],
                        i = n && W.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !I) : void 0;
                    return void 0 !== i ? i : b.attributes || !I ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }, e.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, e.uniqueSort = function(t) {
                    var e, n = [],
                        i = 0,
                        r = 0;
                    if (F = !b.detectDuplicates, k = !b.sortStable && t.slice(0), t.sort(q), F) {
                        for (; e = t[r++];) e === t[r] && (i = n.push(r));
                        for (; i--;) t.splice(n[i], 1)
                    }
                    return k = null, t
                }, w = e.getText = function(t) {
                    var e, n = "",
                        i = 0,
                        r = t.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += w(t)
                        } else if (3 === r || 4 === r) return t.nodeValue
                    } else
                        for (; e = t[i++];) n += w(e);
                    return n
                }, _ = e.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: ht,
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
                        ATTR: function(t) {
                            return t[1] = t[1].replace(yt, bt), t[3] = (t[3] || t[4] || t[5] || "").replace(yt, bt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e, n = !t[6] && t[2];
                            return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && lt.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(yt, bt).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = G[t + " "];
                            return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && G(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, n, i) {
                            return function(r) {
                                var s = e.attr(r, t);
                                return null == s ? "!=" === n : !n || (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(rt, " ") + " ").indexOf(i) > -1 : "|=" === n && (s === i || s.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(t, e, n, i, r) {
                            var s = "nth" !== t.slice(0, 3),
                                o = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === i && 0 === r ? function(t) {
                                return !!t.parentNode
                            } : function(e, n, c) {
                                var l, u, h, f, d, p, g = s !== o ? "nextSibling" : "previousSibling",
                                    m = e.parentNode,
                                    v = a && e.nodeName.toLowerCase(),
                                    y = !c && !a,
                                    b = !1;
                                if (m) {
                                    if (s) {
                                        for (; g;) {
                                            for (f = e; f = f[g];)
                                                if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                            p = g = "only" === t && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [o ? m.firstChild : m.lastChild], o && y) {
                                        for (f = m, h = f[L] || (f[L] = {}), u = h[f.uniqueID] || (h[f.uniqueID] = {}), l = u[t] || [], d = l[0] === j && l[1], b = d && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (b = d = 0) || p.pop();)
                                            if (1 === f.nodeType && ++b && f === e) {
                                                u[t] = [j, d, b];
                                                break
                                            }
                                    } else if (y && (f = e, h = f[L] || (f[L] = {}), u = h[f.uniqueID] || (h[f.uniqueID] = {}), l = u[t] || [], d = l[0] === j && l[1], b = d), !1 === b)
                                        for (;
                                            (f = ++d && f && f[g] || (b = d = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (h = f[L] || (f[L] = {}), u = h[f.uniqueID] || (h[f.uniqueID] = {}), u[t] = [j, b]), f !== e)););
                                    return (b -= r) === i || b % i == 0 && b / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, n) {
                            var r, s = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                            return s[L] ? s(n) : s.length > 1 ? (r = [t, t, "", n], _.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                                for (var i, r = s(t, n), o = r.length; o--;) i = J(t, r[o]), t[i] = !(e[i] = r[o])
                            }) : function(t) {
                                return s(t, 0, r)
                            }) : s
                        }
                    },
                    pseudos: {
                        not: i(function(t) {
                            var e = [],
                                n = [],
                                r = S(t.replace(st, "$1"));
                            return r[L] ? i(function(t, e, n, i) {
                                for (var s, o = r(t, null, i, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
                            }) : function(t, i, s) {
                                return e[0] = t, r(e, null, s, n), e[0] = null, !n.pop()
                            }
                        }),
                        has: i(function(t) {
                            return function(n) {
                                return e(t, n).length > 0
                            }
                        }),
                        contains: i(function(t) {
                            return t = t.replace(yt, bt),
                                function(e) {
                                    return (e.textContent || e.innerText || w(e)).indexOf(t) > -1
                                }
                        }),
                        lang: i(function(t) {
                            return ut.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(yt, bt).toLowerCase(),
                                function(e) {
                                    var n;
                                    do {
                                        if (n = I ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === D
                        },
                        focus: function(t) {
                            return t === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return !1 === t.disabled
                        },
                        disabled: function(t) {
                            return !0 === t.disabled
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !_.pseudos.empty(t)
                        },
                        header: function(t) {
                            return dt.test(t.nodeName)
                        },
                        input: function(t) {
                            return ft.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: a(function() {
                            return [0]
                        }),
                        last: a(function(t, e) {
                            return [e - 1]
                        }),
                        eq: a(function(t, e, n) {
                            return [n < 0 ? n + e : n]
                        }),
                        even: a(function(t, e) {
                            for (var n = 0; n < e; n += 2) t.push(n);
                            return t
                        }),
                        odd: a(function(t, e) {
                            for (var n = 1; n < e; n += 2) t.push(n);
                            return t
                        }),
                        lt: a(function(t, e, n) {
                            for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                            return t
                        }),
                        gt: a(function(t, e, n) {
                            for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                            return t
                        })
                    }
                }, _.pseudos.nth = _.pseudos.eq;
                for (y in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) _.pseudos[y] = function(t) {
                    return function(e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }(y);
                for (y in {
                        submit: !0,
                        reset: !0
                    }) _.pseudos[y] = function(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }(y);
                return l.prototype = _.filters = _.pseudos, _.setFilters = new l, C = e.tokenize = function(t, n) {
                    var i, r, s, o, a, c, l, u = B[t + " "];
                    if (u) return n ? 0 : u.slice(0);
                    for (a = t, c = [], l = _.preFilter; a;) {
                        i && !(r = ot.exec(a)) || (r && (a = a.slice(r[0].length) || a), c.push(s = [])), i = !1, (r = at.exec(a)) && (i = r.shift(), s.push({
                            value: i,
                            type: r[0].replace(st, " ")
                        }), a = a.slice(i.length));
                        for (o in _.filter) !(r = ht[o].exec(a)) || l[o] && !(r = l[o](r)) || (i = r.shift(), s.push({
                            value: i,
                            type: o,
                            matches: r
                        }), a = a.slice(i.length));
                        if (!i) break
                    }
                    return n ? a.length : a ? e.error(t) : B(t, c).slice(0)
                }, S = e.compile = function(t, e) {
                    var n, i = [],
                        r = [],
                        s = z[t + " "];
                    if (!s) {
                        for (e || (e = C(t)), n = e.length; n--;) s = m(e[n]), s[L] ? i.push(s) : r.push(s);
                        s = z(t, v(r, i)), s.selector = t
                    }
                    return s
                }, T = e.select = function(t, e, n, i) {
                    var r, s, o, a, l, h = "function" == typeof t && t,
                        f = !i && C(t = h.selector || t);
                    if (n = n || [], 1 === f.length) {
                        if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && b.getById && 9 === e.nodeType && I && _.relative[s[1].type]) {
                            if (!(e = (_.find.ID(o.matches[0].replace(yt, bt), e) || [])[0])) return n;
                            h && (e = e.parentNode), t = t.slice(s.shift().value.length)
                        }
                        for (r = ht.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !_.relative[a = o.type]);)
                            if ((l = _.find[a]) && (i = l(o.matches[0].replace(yt, bt), mt.test(s[0].type) && c(e.parentNode) || e))) {
                                if (s.splice(r, 1), !(t = i.length && u(s))) return Q.apply(n, i), n;
                                break
                            }
                    }
                    return (h || S(t, f))(i, e, !I, n, !e || mt.test(t) && c(e.parentNode) || e), n
                }, b.sortStable = L.split("").sort(q).join("") === L, b.detectDuplicates = !!F, $(), b.sortDetached = r(function(t) {
                    return 1 & t.compareDocumentPosition(A.createElement("div"))
                }), r(function(t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || s("type|href|height|width", function(t, e, n) {
                    if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), b.attributes && r(function(t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || s("value", function(t, e, n) {
                    if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                }), r(function(t) {
                    return null == t.getAttribute("disabled")
                }) || s(Z, function(t, e, n) {
                    var i;
                    if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }), e
            }(n);
        ct.find = dt, ct.expr = dt.selectors, ct.expr[":"] = ct.expr.pseudos, ct.uniqueSort = ct.unique = dt.uniqueSort, ct.text = dt.getText, ct.isXMLDoc = dt.isXML, ct.contains = dt.contains;
        var pt = function(t, e, n) {
                for (var i = [], r = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && ct(t).is(n)) break;
                        i.push(t)
                    } return i
            },
            gt = function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            },
            mt = ct.expr.match.needsContext,
            vt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            yt = /^.[^:#\[\.,]*$/;
        ct.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ct.find.matchesSelector(i, t) ? [i] : [] : ct.find.matches(t, ct.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, ct.fn.extend({
            find: function(t) {
                var e, n = this.length,
                    i = [],
                    r = this;
                if ("string" != typeof t) return this.pushStack(ct(t).filter(function() {
                    for (e = 0; e < n; e++)
                        if (ct.contains(r[e], this)) return !0
                }));
                for (e = 0; e < n; e++) ct.find(t, r[e], i);
                return i = this.pushStack(n > 1 ? ct.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
            },
            filter: function(t) {
                return this.pushStack(a(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(a(this, t || [], !0))
            },
            is: function(t) {
                return !!a(this, "string" == typeof t && mt.test(t) ? ct(t) : t || [], !1).length
            }
        });
        var bt, _t = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (ct.fn.init = function(t, e, n) {
            var i, r;
            if (!t) return this;
            if (n = n || bt, "string" == typeof t) {
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : _t.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof ct ? e[0] : e, ct.merge(this, ct.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Z, !0)), vt.test(i[1]) && ct.isPlainObject(e))
                        for (i in e) ct.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return r = Z.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Z, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ct.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(ct) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ct.makeArray(t, this))
        }).prototype = ct.fn, bt = ct(Z);
        var wt = /^(?:parents|prev(?:Until|All))/,
            xt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ct.fn.extend({
            has: function(t) {
                var e = ct(t, this),
                    n = e.length;
                return this.filter(function() {
                    for (var t = 0; t < n; t++)
                        if (ct.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                for (var n, i = 0, r = this.length, s = [], o = mt.test(t) || "string" != typeof t ? ct(t, e || this.context) : 0; i < r; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && ct.find.matchesSelector(n, t))) {
                            s.push(n);
                            break
                        } return this.pushStack(s.length > 1 ? ct.uniqueSort(s) : s)
            },
            index: function(t) {
                return t ? "string" == typeof t ? it.call(ct(t), this[0]) : it.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(ct.uniqueSort(ct.merge(this.get(), ct(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), ct.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return pt(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return pt(t, "parentNode", n)
            },
            next: function(t) {
                return c(t, "nextSibling")
            },
            prev: function(t) {
                return c(t, "previousSibling")
            },
            nextAll: function(t) {
                return pt(t, "nextSibling")
            },
            prevAll: function(t) {
                return pt(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return pt(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return pt(t, "previousSibling", n)
            },
            siblings: function(t) {
                return gt((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return gt(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || ct.merge([], t.childNodes)
            }
        }, function(t, e) {
            ct.fn[t] = function(n, i) {
                var r = ct.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = ct.filter(i, r)), this.length > 1 && (xt[t] || ct.uniqueSort(r), wt.test(t) && r.reverse()), this.pushStack(r)
            }
        });
        var Ct = /\S+/g;
        ct.Callbacks = function(t) {
            t = "string" == typeof t ? l(t) : ct.extend({}, t);
            var e, n, i, r, s = [],
                o = [],
                a = -1,
                c = function() {
                    for (r = t.once, i = e = !0; o.length; a = -1)
                        for (n = o.shift(); ++a < s.length;) !1 === s[a].apply(n[0], n[1]) && t.stopOnFalse && (a = s.length, n = !1);
                    t.memory || (n = !1), e = !1, r && (s = n ? [] : "")
                },
                u = {
                    add: function() {
                        return s && (n && !e && (a = s.length - 1, o.push(n)), function e(n) {
                            ct.each(n, function(n, i) {
                                ct.isFunction(i) ? t.unique && u.has(i) || s.push(i) : i && i.length && "string" !== ct.type(i) && e(i)
                            })
                        }(arguments), n && !e && c()), this
                    },
                    remove: function() {
                        return ct.each(arguments, function(t, e) {
                            for (var n;
                                (n = ct.inArray(e, s, n)) > -1;) s.splice(n, 1), n <= a && a--
                        }), this
                    },
                    has: function(t) {
                        return t ? ct.inArray(t, s) > -1 : s.length > 0
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return r = o = [], s = n = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return r = o = [], n || (s = n = ""), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(t, n) {
                        return r || (n = n || [], n = [t, n.slice ? n.slice() : n], o.push(n), e || c()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return u
        }, ct.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", ct.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ct.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ct.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return ct.Deferred(function(n) {
                                ct.each(e, function(e, s) {
                                    var o = ct.isFunction(t[e]) && t[e];
                                    r[s[1]](function() {
                                        var t = o && o.apply(this, arguments);
                                        t && ct.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[s[0] + "With"](this === i ? n.promise() : this, o ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? ct.extend(t, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, ct.each(e, function(t, s) {
                    var o = s[2],
                        a = s[3];
                    i[s[1]] = o.add, a && o.add(function() {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = function() {
                        return r[s[0] + "With"](this === r ? i : this, arguments), this
                    }, r[s[0] + "With"] = o.fireWith
                }), i.promise(r), t && t.call(r, r), r
            },
            when: function(t) {
                var e, n, i, r = 0,
                    s = tt.call(arguments),
                    o = s.length,
                    a = 1 !== o || t && ct.isFunction(t.promise) ? o : 0,
                    c = 1 === a ? t : ct.Deferred(),
                    l = function(t, n, i) {
                        return function(r) {
                            n[t] = this, i[t] = arguments.length > 1 ? tt.call(arguments) : r, i === e ? c.notifyWith(n, i) : --a || c.resolveWith(n, i)
                        }
                    };
                if (o > 1)
                    for (e = new Array(o), n = new Array(o), i = new Array(o); r < o; r++) s[r] && ct.isFunction(s[r].promise) ? s[r].promise().progress(l(r, n, e)).done(l(r, i, s)).fail(c.reject) : --a;
                return a || c.resolveWith(i, s), c.promise()
            }
        });
        var St;
        ct.fn.ready = function(t) {
            return ct.ready.promise().done(t), this
        }, ct.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? ct.readyWait++ : ct.ready(!0)
            },
            ready: function(t) {
                (!0 === t ? --ct.readyWait : ct.isReady) || (ct.isReady = !0, !0 !== t && --ct.readyWait > 0 || (St.resolveWith(Z, [ct]), ct.fn.triggerHandler && (ct(Z).triggerHandler("ready"), ct(Z).off("ready"))))
            }
        }), ct.ready.promise = function(t) {
            return St || (St = ct.Deferred(), "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? n.setTimeout(ct.ready) : (Z.addEventListener("DOMContentLoaded", u), n.addEventListener("load", u))), St.promise(t)
        }, ct.ready.promise();
        var Tt = function(t, e, n, i, r, s, o) {
                var a = 0,
                    c = t.length,
                    l = null == n;
                if ("object" === ct.type(n)) {
                    r = !0;
                    for (a in n) Tt(t, e, a, n[a], !0, s, o)
                } else if (void 0 !== i && (r = !0, ct.isFunction(i) || (o = !0), l && (o ? (e.call(t, i), e = null) : (l = e, e = function(t, e, n) {
                        return l.call(ct(t), n)
                    })), e))
                    for (; a < c; a++) e(t[a], n, o ? i : i.call(t[a], a, e(t[a], n)));
                return r ? t : l ? e.call(t) : c ? e(t[0], n) : s
            },
            Pt = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        h.uid = 1, h.prototype = {
            register: function(t, e) {
                var n = e || {};
                return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
                    value: n,
                    writable: !0,
                    configurable: !0
                }), t[this.expando]
            },
            cache: function(t) {
                if (!Pt(t)) return {};
                var e = t[this.expando];
                return e || (e = {}, Pt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, n) {
                var i, r = this.cache(t);
                if ("string" == typeof e) r[e] = n;
                else
                    for (i in e) r[i] = e[i];
                return r
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
            },
            access: function(t, e, n) {
                var i;
                return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, ct.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
            },
            remove: function(t, e) {
                var n, i, r, s = t[this.expando];
                if (void 0 !== s) {
                    if (void 0 === e) this.register(t);
                    else {
                        ct.isArray(e) ? i = e.concat(e.map(ct.camelCase)) : (r = ct.camelCase(e), e in s ? i = [e, r] : (i = r, i = i in s ? [i] : i.match(Ct) || [])), n = i.length;
                        for (; n--;) delete s[i[n]]
                    }(void 0 === e || ct.isEmptyObject(s)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !ct.isEmptyObject(e)
            }
        };
        var kt = new h,
            Ft = new h,
            $t = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            At = /[A-Z]/g;
        ct.extend({
            hasData: function(t) {
                return Ft.hasData(t) || kt.hasData(t)
            },
            data: function(t, e, n) {
                return Ft.access(t, e, n)
            },
            removeData: function(t, e) {
                Ft.remove(t, e)
            },
            _data: function(t, e, n) {
                return kt.access(t, e, n)
            },
            _removeData: function(t, e) {
                kt.remove(t, e)
            }
        }), ct.fn.extend({
            data: function(t, e) {
                var n, i, r, s = this[0],
                    o = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (r = Ft.get(s), 1 === s.nodeType && !kt.get(s, "hasDataAttrs"))) {
                        for (n = o.length; n--;) o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = ct.camelCase(i.slice(5)), f(s, i, r[i])));
                        kt.set(s, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    Ft.set(this, t)
                }) : Tt(this, function(e) {
                    var n, i;
                    if (s && void 0 === e) {
                        if (void 0 !== (n = Ft.get(s, t) || Ft.get(s, t.replace(At, "-$&").toLowerCase()))) return n;
                        if (i = ct.camelCase(t), void 0 !== (n = Ft.get(s, i))) return n;
                        if (void 0 !== (n = f(s, i, void 0))) return n
                    } else i = ct.camelCase(t), this.each(function() {
                        var n = Ft.get(this, i);
                        Ft.set(this, i, e), t.indexOf("-") > -1 && void 0 !== n && Ft.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    Ft.remove(this, t)
                })
            }
        }), ct.extend({
            queue: function(t, e, n) {
                var i;
                if (t) return e = (e || "fx") + "queue", i = kt.get(t, e), n && (!i || ct.isArray(n) ? i = kt.access(t, e, ct.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = ct.queue(t, e),
                    i = n.length,
                    r = n.shift(),
                    s = ct._queueHooks(t, e),
                    o = function() {
                        ct.dequeue(t, e)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !i && s && s.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return kt.get(t, n) || kt.access(t, n, {
                    empty: ct.Callbacks("once memory").add(function() {
                        kt.remove(t, [e + "queue", n])
                    })
                })
            }
        }), ct.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ct.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = ct.queue(this, t, e);
                    ct._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ct.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    ct.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    r = ct.Deferred(),
                    s = this,
                    o = this.length,
                    a = function() {
                        --i || r.resolveWith(s, [s])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)(n = kt.get(s[o], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var Dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            It = new RegExp("^(?:([+-])=|)(" + Dt + ")([a-z%]*)$", "i"),
            Nt = ["Top", "Right", "Bottom", "Left"],
            Et = function(t, e) {
                return t = e || t, "none" === ct.css(t, "display") || !ct.contains(t.ownerDocument, t)
            },
            Ot = /^(?:checkbox|radio)$/i,
            Mt = /<([\w:-]+)/,
            Lt = /^$|\/(?:java|ecma)script/i,
            Rt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Rt.optgroup = Rt.option, Rt.tbody = Rt.tfoot = Rt.colgroup = Rt.caption = Rt.thead, Rt.th = Rt.td;
        var jt = /<|&#?\w+;/;
        ! function() {
            var t = Z.createDocumentFragment(),
                e = t.appendChild(Z.createElement("div")),
                n = Z.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), at.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", at.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Ht = /^key/,
            Gt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Bt = /^([^.]*)(?:\.(.+)|)/;
        ct.event = {
            global: {},
            add: function(t, e, n, i, r) {
                var s, o, a, c, l, u, h, f, d, p, g, m = kt.get(t);
                if (m)
                    for (n.handler && (s = n, n = s.handler, r = s.selector), n.guid || (n.guid = ct.guid++), (c = m.events) || (c = m.events = {}), (o = m.handle) || (o = m.handle = function(e) {
                            return void 0 !== ct && ct.event.triggered !== e.type ? ct.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(Ct) || [""], l = e.length; l--;) a = Bt.exec(e[l]) || [], d = g = a[1], p = (a[2] || "").split(".").sort(), d && (h = ct.event.special[d] || {}, d = (r ? h.delegateType : h.bindType) || d, h = ct.event.special[d] || {}, u = ct.extend({
                        type: d,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && ct.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, s), (f = c[d]) || (f = c[d] = [], f.delegateCount = 0, h.setup && !1 !== h.setup.call(t, i, p, o) || t.addEventListener && t.addEventListener(d, o)), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, u) : f.push(u), ct.event.global[d] = !0)
            },
            remove: function(t, e, n, i, r) {
                var s, o, a, c, l, u, h, f, d, p, g, m = kt.hasData(t) && kt.get(t);
                if (m && (c = m.events)) {
                    for (e = (e || "").match(Ct) || [""], l = e.length; l--;)
                        if (a = Bt.exec(e[l]) || [], d = g = a[1], p = (a[2] || "").split(".").sort(), d) {
                            for (h = ct.event.special[d] || {}, d = (i ? h.delegateType : h.bindType) || d, f = c[d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = f.length; s--;) u = f[s], !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(s, 1), u.selector && f.delegateCount--, h.remove && h.remove.call(t, u));
                            o && !f.length && (h.teardown && !1 !== h.teardown.call(t, p, m.handle) || ct.removeEvent(t, d, m.handle), delete c[d])
                        } else
                            for (d in c) ct.event.remove(t, d + e[l], n, i, !0);
                    ct.isEmptyObject(c) && kt.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                t = ct.event.fix(t);
                var e, n, i, r, s, o = [],
                    a = tt.call(arguments),
                    c = (kt.get(this, "events") || {})[t.type] || [],
                    l = ct.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, t)) {
                    for (o = ct.event.handlers.call(this, t, c), e = 0;
                        (r = o[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = r.elem, n = 0;
                            (s = r.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(s.namespace) || (t.handleObj = s, t.data = s.data, void 0 !== (i = ((ct.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, a)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var n, i, r, s, o = [],
                    a = e.delegateCount,
                    c = t.target;
                if (a && c.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && (!0 !== c.disabled || "click" !== t.type)) {
                            for (i = [], n = 0; n < a; n++) s = e[n], r = s.selector + " ", void 0 === i[r] && (i[r] = s.needsContext ? ct(r, this).index(c) > -1 : ct.find(r, this, null, [c]).length), i[r] && i.push(s);
                            i.length && o.push({
                                elem: c,
                                handlers: i
                            })
                        } return a < e.length && o.push({
                    elem: this,
                    handlers: e.slice(a)
                }), o
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var n, i, r, s = e.button;
                    return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || Z, i = n.documentElement, r = n.body, t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[ct.expando]) return t;
                var e, n, i, r = t.type,
                    s = t,
                    o = this.fixHooks[r];
                for (o || (this.fixHooks[r] = o = Gt.test(r) ? this.mouseHooks : Ht.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, t = new ct.Event(s), e = i.length; e--;) n = i[e], t[n] = s[n];
                return t.target || (t.target = Z), 3 === t.target.nodeType && (t.target = t.target.parentNode), o.filter ? o.filter(t, s) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== b() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === b() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && ct.nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function(t) {
                        return ct.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, ct.removeEvent = function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, ct.Event = function(t, e) {
            if (!(this instanceof ct.Event)) return new ct.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? v : y) : this.type = t, e && ct.extend(this, e), this.timeStamp = t && t.timeStamp || ct.now(), this[ct.expando] = !0
        }, ct.Event.prototype = {
            constructor: ct.Event,
            isDefaultPrevented: y,
            isPropagationStopped: y,
            isImmediatePropagationStopped: y,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = v, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = v, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = v, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ct.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            ct.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        r = t.relatedTarget,
                        s = t.handleObj;
                    return r && (r === i || ct.contains(i, r)) || (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), ct.fn.extend({
            on: function(t, e, n, i) {
                return _(this, t, e, n, i)
            },
            one: function(t, e, n, i) {
                return _(this, t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, r;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ct(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = y), this.each(function() {
                    ct.event.remove(this, t, n, e)
                })
            }
        });
        var zt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            qt = /<script|<style|<link/i,
            Ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Wt = /^true\/(.*)/,
            Vt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        ct.extend({
            htmlPrefilter: function(t) {
                return t.replace(zt, "<$1></$2>")
            },
            clone: function(t, e, n) {
                var i, r, s, o, a = t.cloneNode(!0),
                    c = ct.contains(t.ownerDocument, t);
                if (!(at.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ct.isXMLDoc(t)))
                    for (o = p(a), s = p(t), i = 0, r = s.length; i < r; i++) T(s[i], o[i]);
                if (e)
                    if (n)
                        for (s = s || p(t), o = o || p(a), i = 0, r = s.length; i < r; i++) S(s[i], o[i]);
                    else S(t, a);
                return o = p(a, "script"), o.length > 0 && g(o, !c && p(t, "script")), a
            },
            cleanData: function(t) {
                for (var e, n, i, r = ct.event.special, s = 0; void 0 !== (n = t[s]); s++)
                    if (Pt(n)) {
                        if (e = n[kt.expando]) {
                            if (e.events)
                                for (i in e.events) r[i] ? ct.event.remove(n, i) : ct.removeEvent(n, i, e.handle);
                            n[kt.expando] = void 0
                        }
                        n[Ft.expando] && (n[Ft.expando] = void 0)
                    }
            }
        }), ct.fn.extend({
            domManip: P,
            detach: function(t) {
                return k(this, t, !0)
            },
            remove: function(t) {
                return k(this, t)
            },
            text: function(t) {
                return Tt(this, function(t) {
                    return void 0 === t ? ct.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return P(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        w(this, t).appendChild(t)
                    }
                })
            },
            prepend: function() {
                return P(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = w(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return P(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return P(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ct.cleanData(p(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return ct.clone(this, t, e)
                })
            },
            html: function(t) {
                return Tt(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !qt.test(t) && !Rt[(Mt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = ct.htmlPrefilter(t);
                        try {
                            for (; n < i; n++) e = this[n] || {}, 1 === e.nodeType && (ct.cleanData(p(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return P(this, arguments, function(e) {
                    var n = this.parentNode;
                    ct.inArray(this, t) < 0 && (ct.cleanData(p(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), ct.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            ct.fn[t] = function(t) {
                for (var n, i = [], r = ct(t), s = r.length - 1, o = 0; o <= s; o++) n = o === s ? this : this.clone(!0), ct(r[o])[e](n), nt.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Xt, Yt = {
                HTML: "block",
                BODY: "block"
            },
            Qt = /^margin/,
            Kt = new RegExp("^(" + Dt + ")(?!px)[a-z%]+$", "i"),
            Jt = function(t) {
                var e = t.ownerDocument.defaultView;
                return e && e.opener || (e = n), e.getComputedStyle(t)
            },
            Zt = function(t, e, n, i) {
                var r, s, o = {};
                for (s in e) o[s] = t.style[s], t.style[s] = e[s];
                r = n.apply(t, i || []);
                for (s in e) t.style[s] = o[s];
                return r
            },
            te = Z.documentElement;
        ! function() {
            function t() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", te.appendChild(o);
                var t = n.getComputedStyle(a);
                e = "1%" !== t.top, s = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", r = "4px" === t.marginRight, te.removeChild(o)
            }
            var e, i, r, s, o = Z.createElement("div"),
                a = Z.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", at.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), ct.extend(at, {
                pixelPosition: function() {
                    return t(), e
                },
                boxSizingReliable: function() {
                    return null == i && t(), i
                },
                pixelMarginRight: function() {
                    return null == i && t(), r
                },
                reliableMarginLeft: function() {
                    return null == i && t(), s
                },
                reliableMarginRight: function() {
                    var t, e = a.appendChild(Z.createElement("div"));
                    return e.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", a.style.width = "1px", te.appendChild(o), t = !parseFloat(n.getComputedStyle(e).marginRight), te.removeChild(o), a.removeChild(e), t
                }
            }))
        }();
        var ee = /^(none|table(?!-c[ea]).+)/,
            ne = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ie = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            re = ["Webkit", "O", "Moz", "ms"],
            se = Z.createElement("div").style;
        ct.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = A(t, "opacity");
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
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, s, o, a = ct.camelCase(e),
                        c = t.style;
                    if (e = ct.cssProps[a] || (ct.cssProps[a] = I(a) || a), o = ct.cssHooks[e] || ct.cssHooks[a], void 0 === n) return o && "get" in o && void 0 !== (r = o.get(t, !1, i)) ? r : c[e];
                    s = typeof n, "string" === s && (r = It.exec(n)) && r[1] && (n = d(t, e, r), s = "number"), null != n && n === n && ("number" === s && (n += r && r[3] || (ct.cssNumber[a] ? "" : "px")), at.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), o && "set" in o && void 0 === (n = o.set(t, n, i)) || (c[e] = n))
                }
            },
            css: function(t, e, n, i) {
                var r, s, o, a = ct.camelCase(e);
                return e = ct.cssProps[a] || (ct.cssProps[a] = I(a) || a), o = ct.cssHooks[e] || ct.cssHooks[a], o && "get" in o && (r = o.get(t, !0, n)), void 0 === r && (r = A(t, e, i)), "normal" === r && e in ie && (r = ie[e]), "" === n || n ? (s = parseFloat(r), !0 === n || isFinite(s) ? s || 0 : r) : r
            }
        }), ct.each(["height", "width"], function(t, e) {
            ct.cssHooks[e] = {
                get: function(t, n, i) {
                    if (n) return ee.test(ct.css(t, "display")) && 0 === t.offsetWidth ? Zt(t, ne, function() {
                        return O(t, e, i)
                    }) : O(t, e, i)
                },
                set: function(t, n, i) {
                    var r, s = i && Jt(t),
                        o = i && E(t, e, i, "border-box" === ct.css(t, "boxSizing", !1, s), s);
                    return o && (r = It.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = ct.css(t, e)), N(t, n, o)
                }
            }
        }), ct.cssHooks.marginLeft = D(at.reliableMarginLeft, function(t, e) {
            if (e) return (parseFloat(A(t, "marginLeft")) || t.getBoundingClientRect().left - Zt(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px"
        }), ct.cssHooks.marginRight = D(at.reliableMarginRight, function(t, e) {
            if (e) return Zt(t, {
                display: "inline-block"
            }, A, [t, "marginRight"])
        }), ct.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            ct.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + Nt[i] + e] = s[i] || s[i - 2] || s[0];
                    return r
                }
            }, Qt.test(t) || (ct.cssHooks[t + e].set = N)
        }), ct.fn.extend({
            css: function(t, e) {
                return Tt(this, function(t, e, n) {
                    var i, r, s = {},
                        o = 0;
                    if (ct.isArray(e)) {
                        for (i = Jt(t), r = e.length; o < r; o++) s[e[o]] = ct.css(t, e[o], !1, i);
                        return s
                    }
                    return void 0 !== n ? ct.style(t, e, n) : ct.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return M(this, !0)
            },
            hide: function() {
                return M(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Et(this) ? ct(this).show() : ct(this).hide()
                })
            }
        }), ct.Tween = L, L.prototype = {
            constructor: L,
            init: function(t, e, n, i, r, s) {
                this.elem = t, this.prop = n, this.easing = r || ct.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (ct.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = L.propHooks[this.prop];
                return t && t.get ? t.get(this) : L.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = L.propHooks[this.prop];
                return this.options.duration ? this.pos = e = ct.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
            }
        }, L.prototype.init.prototype = L.prototype, L.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ct.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                },
                set: function(t) {
                    ct.fx.step[t.prop] ? ct.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ct.cssProps[t.prop]] && !ct.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ct.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, ct.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, ct.fx = L.prototype.init, ct.fx.step = {};
        var oe, ae, ce = /^(?:toggle|show|hide)$/,
            le = /queueHooks$/;
        ct.Animation = ct.extend(z, {
                tweeners: {
                    "*": [function(t, e) {
                        var n = this.createTween(t, e);
                        return d(n.elem, t, It.exec(e), n), n
                    }]
                },
                tweener: function(t, e) {
                    ct.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Ct);
                    for (var n, i = 0, r = t.length; i < r; i++) n = t[i], z.tweeners[n] = z.tweeners[n] || [], z.tweeners[n].unshift(e)
                },
                prefilters: [G],
                prefilter: function(t, e) {
                    e ? z.prefilters.unshift(t) : z.prefilters.push(t)
                }
            }), ct.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? ct.extend({}, t) : {
                    complete: n || !n && e || ct.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !ct.isFunction(e) && e
                };
                return i.duration = ct.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ct.fx.speeds ? ct.fx.speeds[i.duration] : ct.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    ct.isFunction(i.old) && i.old.call(this), i.queue && ct.dequeue(this, i.queue)
                }, i
            }, ct.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter(Et).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    var r = ct.isEmptyObject(t),
                        s = ct.speed(e, n, i),
                        o = function() {
                            var e = z(this, ct.extend({}, t), s);
                            (r || kt.get(this, "finish")) && e.stop(!0)
                        };
                    return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            r = null != t && t + "queueHooks",
                            s = ct.timers,
                            o = kt.get(this);
                        if (r) o[r] && o[r].stop && i(o[r]);
                        else
                            for (r in o) o[r] && o[r].stop && le.test(r) && i(o[r]);
                        for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(n), e = !1, s.splice(r, 1));
                        !e && n || ct.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return !1 !== t && (t = t || "fx"), this.each(function() {
                        var e, n = kt.get(this),
                            i = n[t + "queue"],
                            r = n[t + "queueHooks"],
                            s = ct.timers,
                            o = i ? i.length : 0;
                        for (n.finish = !0, ct.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                        for (e = 0; e < o; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), ct.each(["toggle", "show", "hide"], function(t, e) {
                var n = ct.fn[e];
                ct.fn[e] = function(t, i, r) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(j(e, !0), t, i, r)
                }
            }), ct.each({
                slideDown: j("show"),
                slideUp: j("hide"),
                slideToggle: j("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                ct.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), ct.timers = [], ct.fx.tick = function() {
                var t, e = 0,
                    n = ct.timers;
                for (oe = ct.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
                n.length || ct.fx.stop(), oe = void 0
            }, ct.fx.timer = function(t) {
                ct.timers.push(t), t() ? ct.fx.start() : ct.timers.pop()
            }, ct.fx.interval = 13, ct.fx.start = function() {
                ae || (ae = n.setInterval(ct.fx.tick, ct.fx.interval))
            }, ct.fx.stop = function() {
                n.clearInterval(ae), ae = null
            }, ct.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, ct.fn.delay = function(t, e) {
                return t = ct.fx ? ct.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                    var r = n.setTimeout(e, t);
                    i.stop = function() {
                        n.clearTimeout(r)
                    }
                })
            },
            function() {
                var t = Z.createElement("input"),
                    e = Z.createElement("select"),
                    n = e.appendChild(Z.createElement("option"));
                t.type = "checkbox", at.checkOn = "" !== t.value, at.optSelected = n.selected, e.disabled = !0, at.optDisabled = !n.disabled, t = Z.createElement("input"), t.value = "t", t.type = "radio", at.radioValue = "t" === t.value
            }();
        var ue, he = ct.expr.attrHandle;
        ct.fn.extend({
            attr: function(t, e) {
                return Tt(this, ct.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    ct.removeAttr(this, t)
                })
            }
        }), ct.extend({
            attr: function(t, e, n) {
                var i, r, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? ct.prop(t, e, n) : (1 === s && ct.isXMLDoc(t) || (e = e.toLowerCase(), r = ct.attrHooks[e] || (ct.expr.match.bool.test(e) ? ue : void 0)), void 0 !== n ? null === n ? void ct.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = ct.find.attr(t, e), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!at.radioValue && "radio" === e && ct.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var n, i, r = 0,
                    s = e && e.match(Ct);
                if (s && 1 === t.nodeType)
                    for (; n = s[r++];) i = ct.propFix[n] || n, ct.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
            }
        }), ue = {
            set: function(t, e, n) {
                return !1 === e ? ct.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, ct.each(ct.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = he[e] || ct.find.attr;
            he[e] = function(t, e, i) {
                var r, s;
                return i || (s = he[e], he[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, he[e] = s), r
            }
        });
        var fe = /^(?:input|select|textarea|button)$/i,
            de = /^(?:a|area)$/i;
        ct.fn.extend({
            prop: function(t, e) {
                return Tt(this, ct.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[ct.propFix[t] || t]
                })
            }
        }), ct.extend({
            prop: function(t, e, n) {
                var i, r, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return 1 === s && ct.isXMLDoc(t) || (e = ct.propFix[e] || e, r = ct.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = ct.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : fe.test(t.nodeName) || de.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), at.optSelected || (ct.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), ct.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ct.propFix[this.toLowerCase()] = this
        });
        var pe = /[\t\r\n\f]/g;
        ct.fn.extend({
            addClass: function(t) {
                var e, n, i, r, s, o, a, c = 0;
                if (ct.isFunction(t)) return this.each(function(e) {
                    ct(this).addClass(t.call(this, e, q(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(Ct) || []; n = this[c++];)
                        if (r = q(n), i = 1 === n.nodeType && (" " + r + " ").replace(pe, " ")) {
                            for (o = 0; s = e[o++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                            a = ct.trim(i), r !== a && n.setAttribute("class", a)
                        } return this
            },
            removeClass: function(t) {
                var e, n, i, r, s, o, a, c = 0;
                if (ct.isFunction(t)) return this.each(function(e) {
                    ct(this).removeClass(t.call(this, e, q(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(Ct) || []; n = this[c++];)
                        if (r = q(n), i = 1 === n.nodeType && (" " + r + " ").replace(pe, " ")) {
                            for (o = 0; s = e[o++];)
                                for (; i.indexOf(" " + s + " ") > -1;) i = i.replace(" " + s + " ", " ");
                            a = ct.trim(i), r !== a && n.setAttribute("class", a)
                        } return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ct.isFunction(t) ? this.each(function(n) {
                    ct(this).toggleClass(t.call(this, n, q(this), e), e)
                }) : this.each(function() {
                    var e, i, r, s;
                    if ("string" === n)
                        for (i = 0, r = ct(this), s = t.match(Ct) || []; e = s[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else void 0 !== t && "boolean" !== n || (e = q(this), e && kt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : kt.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + q(n) + " ").replace(pe, " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var ge = /\r/g,
            me = /[\x20\t\r\n\f]+/g;
        ct.fn.extend({
            val: function(t) {
                var e, n, i, r = this[0]; {
                    if (arguments.length) return i = ct.isFunction(t), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? t.call(this, n, ct(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : ct.isArray(r) && (r = ct.map(r, function(t) {
                            return null == t ? "" : t + ""
                        })), (e = ct.valHooks[this.type] || ct.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return (e = ct.valHooks[r.type] || ct.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(ge, "") : null == n ? "" : n)
                }
            }
        }), ct.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = ct.find.attr(t, "value");
                        return null != e ? e : ct.trim(ct.text(t)).replace(me, " ")
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options, r = t.selectedIndex, s = "select-one" === t.type || r < 0, o = s ? null : [], a = s ? r + 1 : i.length, c = r < 0 ? a : s ? r : 0; c < a; c++)
                            if (n = i[c], (n.selected || c === r) && (at.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ct.nodeName(n.parentNode, "optgroup"))) {
                                if (e = ct(n).val(), s) return e;
                                o.push(e)
                            } return o
                    },
                    set: function(t, e) {
                        for (var n, i, r = t.options, s = ct.makeArray(e), o = r.length; o--;) i = r[o], (i.selected = ct.inArray(ct.valHooks.option.get(i), s) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), s
                    }
                }
            }
        }), ct.each(["radio", "checkbox"], function() {
            ct.valHooks[this] = {
                set: function(t, e) {
                    if (ct.isArray(e)) return t.checked = ct.inArray(ct(t).val(), e) > -1
                }
            }, at.checkOn || (ct.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var ve = /^(?:focusinfocus|focusoutblur)$/;
        ct.extend(ct.event, {
            trigger: function(t, e, i, r) {
                var s, o, a, c, l, u, h, f = [i || Z],
                    d = ot.call(t, "type") ? t.type : t,
                    p = ot.call(t, "namespace") ? t.namespace.split(".") : [];
                if (o = a = i = i || Z, 3 !== i.nodeType && 8 !== i.nodeType && !ve.test(d + ct.event.triggered) && (d.indexOf(".") > -1 && (p = d.split("."), d = p.shift(), p.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[ct.expando] ? t : new ct.Event(d, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : ct.makeArray(e, [t]), h = ct.event.special[d] || {}, r || !h.trigger || !1 !== h.trigger.apply(i, e))) {
                    if (!r && !h.noBubble && !ct.isWindow(i)) {
                        for (c = h.delegateType || d, ve.test(c + d) || (o = o.parentNode); o; o = o.parentNode) f.push(o), a = o;
                        a === (i.ownerDocument || Z) && f.push(a.defaultView || a.parentWindow || n)
                    }
                    for (s = 0;
                        (o = f[s++]) && !t.isPropagationStopped();) t.type = s > 1 ? c : h.bindType || d, u = (kt.get(o, "events") || {})[t.type] && kt.get(o, "handle"), u && u.apply(o, e), (u = l && o[l]) && u.apply && Pt(o) && (t.result = u.apply(o, e), !1 === t.result && t.preventDefault());
                    return t.type = d, r || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(f.pop(), e) || !Pt(i) || l && ct.isFunction(i[d]) && !ct.isWindow(i) && (a = i[l], a && (i[l] = null), ct.event.triggered = d, i[d](), ct.event.triggered = void 0, a && (i[l] = a)), t.result
                }
            },
            simulate: function(t, e, n) {
                var i = ct.extend(new ct.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                ct.event.trigger(i, null, e)
            }
        }), ct.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    ct.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                if (n) return ct.event.trigger(t, e, n, !0)
            }
        }), ct.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            ct.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), ct.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), at.focusin = "onfocusin" in n, at.focusin || ct.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                ct.event.simulate(e, t.target, ct.event.fix(t))
            };
            ct.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = kt.access(i, e);
                    r || i.addEventListener(t, n, !0), kt.access(i, e, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = kt.access(i, e) - 1;
                    r ? kt.access(i, e, r) : (i.removeEventListener(t, n, !0), kt.remove(i, e))
                }
            }
        });
        var ye = n.location,
            be = ct.now(),
            _e = /\?/;
        ct.parseJSON = function(t) {
            return JSON.parse(t + "")
        }, ct.parseXML = function(t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new n.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || ct.error("Invalid XML: " + t), e
        };
        var we = /#.*$/,
            xe = /([?&])_=[^&]*/,
            Ce = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Se = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Te = /^(?:GET|HEAD)$/,
            Pe = /^\/\//,
            ke = {},
            Fe = {},
            $e = "*/".concat("*"),
            Ae = Z.createElement("a");
        Ae.href = ye.href, ct.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ye.href,
                type: "GET",
                isLocal: Se.test(ye.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": $e,
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
                    "text json": ct.parseJSON,
                    "text xml": ct.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? V(V(t, ct.ajaxSettings), e) : V(ct.ajaxSettings, t)
            },
            ajaxPrefilter: U(ke),
            ajaxTransport: U(Fe),
            ajax: function(t, e) {
                function i(t, e, i, a) {
                    var l, h, y, b, w, C = e;
                    2 !== _ && (_ = 2, c && n.clearTimeout(c), r = void 0, o = a || "", x.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, i && (b = X(f, x, i)), b = Y(f, b, x, l), l ? (f.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (ct.lastModified[s] = w), (w = x.getResponseHeader("etag")) && (ct.etag[s] = w)), 204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, h = b.data, y = b.error, l = !y)) : (y = C, !t && C || (C = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (e || C) + "", l ? g.resolveWith(d, [h, C, x]) : g.rejectWith(d, [x, C, y]), x.statusCode(v), v = void 0, u && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, f, l ? h : y]), m.fireWith(d, [x, C]), u && (p.trigger("ajaxComplete", [x, f]), --ct.active || ct.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var r, s, o, a, c, l, u, h, f = ct.ajaxSetup({}, e),
                    d = f.context || f,
                    p = f.context && (d.nodeType || d.jquery) ? ct(d) : ct.event,
                    g = ct.Deferred(),
                    m = ct.Callbacks("once memory"),
                    v = f.statusCode || {},
                    y = {},
                    b = {},
                    _ = 0,
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === _) {
                                if (!a)
                                    for (a = {}; e = Ce.exec(o);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === _ ? o : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return _ || (t = b[n] = b[n] || t, y[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return _ || (f.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (_ < 2)
                                    for (e in t) v[e] = [v[e], t[e]];
                                else x.always(t[x.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || w;
                            return r && r.abort(e), i(0, e), this
                        }
                    };
                if (g.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, f.url = ((t || f.url || ye.href) + "").replace(we, "").replace(Pe, ye.protocol + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = ct.trim(f.dataType || "*").toLowerCase().match(Ct) || [""], null == f.crossDomain) {
                    l = Z.createElement("a");
                    try {
                        l.href = f.url, l.href = l.href, f.crossDomain = Ae.protocol + "//" + Ae.host != l.protocol + "//" + l.host
                    } catch (t) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = ct.param(f.data, f.traditional)), W(ke, f, e, x), 2 === _) return x;
                u = ct.event && f.global, u && 0 == ct.active++ && ct.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Te.test(f.type), s = f.url, f.hasContent || (f.data && (s = f.url += (_e.test(s) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = xe.test(s) ? s.replace(xe, "$1_=" + be++) : s + (_e.test(s) ? "&" : "?") + "_=" + be++)), f.ifModified && (ct.lastModified[s] && x.setRequestHeader("If-Modified-Since", ct.lastModified[s]), ct.etag[s] && x.setRequestHeader("If-None-Match", ct.etag[s])), (f.data && f.hasContent && !1 !== f.contentType || e.contentType) && x.setRequestHeader("Content-Type", f.contentType), x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + $e + "; q=0.01" : "") : f.accepts["*"]);
                for (h in f.headers) x.setRequestHeader(h, f.headers[h]);
                if (f.beforeSend && (!1 === f.beforeSend.call(d, x, f) || 2 === _)) return x.abort();
                w = "abort";
                for (h in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[h](f[h]);
                if (r = W(Fe, f, e, x)) {
                    if (x.readyState = 1, u && p.trigger("ajaxSend", [x, f]), 2 === _) return x;
                    f.async && f.timeout > 0 && (c = n.setTimeout(function() {
                        x.abort("timeout")
                    }, f.timeout));
                    try {
                        _ = 1, r.send(y, i)
                    } catch (t) {
                        if (!(_ < 2)) throw t;
                        i(-1, t)
                    }
                } else i(-1, "No Transport");
                return x
            },
            getJSON: function(t, e, n) {
                return ct.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return ct.get(t, void 0, e, "script")
            }
        }), ct.each(["get", "post"], function(t, e) {
            ct[e] = function(t, n, i, r) {
                return ct.isFunction(n) && (r = r || i, i = n, n = void 0), ct.ajax(ct.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: n,
                    success: i
                }, ct.isPlainObject(t) && t))
            }
        }), ct._evalUrl = function(t) {
            return ct.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, ct.fn.extend({
            wrapAll: function(t) {
                var e;
                return ct.isFunction(t) ? this.each(function(e) {
                    ct(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = ct(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function(t) {
                return ct.isFunction(t) ? this.each(function(e) {
                    ct(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = ct(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = ct.isFunction(t);
                return this.each(function(n) {
                    ct(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ct.nodeName(this, "body") || ct(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ct.expr.filters.hidden = function(t) {
            return !ct.expr.filters.visible(t)
        }, ct.expr.filters.visible = function(t) {
            return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
        };
        var De = /%20/g,
            Ie = /\[\]$/,
            Ne = /\r?\n/g,
            Ee = /^(?:submit|button|image|reset|file)$/i,
            Oe = /^(?:input|select|textarea|keygen)/i;
        ct.param = function(t, e) {
            var n, i = [],
                r = function(t, e) {
                    e = ct.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = ct.ajaxSettings && ct.ajaxSettings.traditional), ct.isArray(t) || t.jquery && !ct.isPlainObject(t)) ct.each(t, function() {
                r(this.name, this.value)
            });
            else
                for (n in t) Q(n, t[n], e, r);
            return i.join("&").replace(De, "+")
        }, ct.fn.extend({
            serialize: function() {
                return ct.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = ct.prop(this, "elements");
                    return t ? ct.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !ct(this).is(":disabled") && Oe.test(this.nodeName) && !Ee.test(t) && (this.checked || !Ot.test(t))
                }).map(function(t, e) {
                    var n = ct(this).val();
                    return null == n ? null : ct.isArray(n) ? ct.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Ne, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(Ne, "\r\n")
                    }
                }).get()
            }
        }), ct.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (t) {}
        };
        var Me = {
                0: 200,
                1223: 204
            },
            Le = ct.ajaxSettings.xhr();
        at.cors = !!Le && "withCredentials" in Le, at.ajax = Le = !!Le, ct.ajaxTransport(function(t) {
            var e, i;
            if (at.cors || Le && !t.crossDomain) return {
                send: function(r, s) {
                    var o, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) a[o] = t.xhrFields[o];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (o in r) a.setRequestHeader(o, r[o]);
                    e = function(t) {
                        return function() {
                            e && (e = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Me[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = e(), i = a.onerror = e("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                        4 === a.readyState && n.setTimeout(function() {
                            e && i()
                        })
                    }, e = e("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (t) {
                        if (e) throw t
                    }
                },
                abort: function() {
                    e && e()
                }
            }
        }), ct.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return ct.globalEval(t), t
                }
            }
        }), ct.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), ct.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n;
                return {
                    send: function(i, r) {
                        e = ct("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function(t) {
                            e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                        }), Z.head.appendChild(e[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Re = [],
            je = /(=)\?(?=&|$)|\?\?/;
        ct.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Re.pop() || ct.expando + "_" + be++;
                return this[t] = !0, t
            }
        }), ct.ajaxPrefilter("json jsonp", function(t, e, i) {
            var r, s, o, a = !1 !== t.jsonp && (je.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && je.test(t.data) && "data");
            if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = ct.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(je, "$1" + r) : !1 !== t.jsonp && (t.url += (_e.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                return o || ct.error(r + " was not called"), o[0]
            }, t.dataTypes[0] = "json", s = n[r], n[r] = function() {
                o = arguments
            }, i.always(function() {
                void 0 === s ? ct(n).removeProp(r) : n[r] = s, t[r] && (t.jsonpCallback = e.jsonpCallback, Re.push(r)), o && ct.isFunction(s) && s(o[0]), o = s = void 0
            }), "script"
        }), ct.parseHTML = function(t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || Z;
            var i = vt.exec(t),
                r = !n && [];
            return i ? [e.createElement(i[1])] : (i = m([t], e, r), r && r.length && ct(r).remove(), ct.merge([], i.childNodes))
        };
        var He = ct.fn.load;
        ct.fn.load = function(t, e, n) {
            if ("string" != typeof t && He) return He.apply(this, arguments);
            var i, r, s, o = this,
                a = t.indexOf(" ");
            return a > -1 && (i = ct.trim(t.slice(a)), t = t.slice(0, a)), ct.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), o.length > 0 && ct.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                s = arguments, o.html(i ? ct("<div>").append(ct.parseHTML(t)).find(i) : t)
            }).always(n && function(t, e) {
                o.each(function() {
                    n.apply(this, s || [t.responseText, e, t])
                })
            }), this
        }, ct.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            ct.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), ct.expr.filters.animated = function(t) {
            return ct.grep(ct.timers, function(e) {
                return t === e.elem
            }).length
        }, ct.offset = {
            setOffset: function(t, e, n) {
                var i, r, s, o, a, c, l, u = ct.css(t, "position"),
                    h = ct(t),
                    f = {};
                "static" === u && (t.style.position = "relative"), a = h.offset(), s = ct.css(t, "top"), c = ct.css(t, "left"), l = ("absolute" === u || "fixed" === u) && (s + c).indexOf("auto") > -1, l ? (i = h.position(), o = i.top, r = i.left) : (o = parseFloat(s) || 0, r = parseFloat(c) || 0), ct.isFunction(e) && (e = e.call(t, n, ct.extend({}, a))), null != e.top && (f.top = e.top - a.top + o), null != e.left && (f.left = e.left - a.left + r), "using" in e ? e.using.call(t, f) : h.css(f)
            }
        }, ct.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    ct.offset.setOffset(this, t, e)
                });
                var e, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    },
                    s = i && i.ownerDocument;
                if (s) return e = s.documentElement, ct.contains(e, i) ? (r = i.getBoundingClientRect(), n = K(s), {
                    top: r.top + n.pageYOffset - e.clientTop,
                    left: r.left + n.pageXOffset - e.clientLeft
                }) : r
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === ct.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ct.nodeName(t[0], "html") || (i = t.offset()), i.top += ct.css(t[0], "borderTopWidth", !0), i.left += ct.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - i.top - ct.css(n, "marginTop", !0),
                        left: e.left - i.left - ct.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === ct.css(t, "position");) t = t.offsetParent;
                    return t || te
                })
            }
        }), ct.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = "pageYOffset" === e;
            ct.fn[t] = function(i) {
                return Tt(this, function(t, i, r) {
                    var s = K(t);
                    if (void 0 === r) return s ? s[e] : t[i];
                    s ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset) : t[i] = r
                }, t, i, arguments.length)
            }
        }), ct.each(["top", "left"], function(t, e) {
            ct.cssHooks[e] = D(at.pixelPosition, function(t, n) {
                if (n) return n = A(t, e), Kt.test(n) ? ct(t).position()[e] + "px" : n
            })
        }), ct.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            ct.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                ct.fn[i] = function(i, r) {
                    var s = arguments.length && (n || "boolean" != typeof i),
                        o = n || (!0 === i || !0 === r ? "margin" : "border");
                    return Tt(this, function(e, n, i) {
                        var r;
                        return ct.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? ct.css(e, n, o) : ct.style(e, n, i, o)
                    }, e, s ? i : void 0, s, null)
                }
            })
        }), ct.fn.extend({
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            },
            size: function() {
                return this.length
            }
        }), ct.fn.andSelf = ct.fn.addBack, i = [], void 0 !== (r = function() {
            return ct
        }.apply(e, i)) && (t.exports = r);
        var Ge = n.jQuery,
            Be = n.$;
        return ct.noConflict = function(t) {
            return n.$ === ct && (n.$ = Be), t && n.jQuery === ct && (n.jQuery = Ge), ct
        }, s || (n.jQuery = n.$ = ct), ct
    })
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return "[object Array]" === S.call(t)
    }

    function r(t) {
        return "[object ArrayBuffer]" === S.call(t)
    }

    function s(t) {
        return "undefined" != typeof FormData && t instanceof FormData
    }

    function o(t) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
    }

    function a(t) {
        return "string" == typeof t
    }

    function c(t) {
        return "number" == typeof t
    }

    function l(t) {
        return void 0 === t
    }

    function u(t) {
        return null !== t && "object" == typeof t
    }

    function h(t) {
        return "[object Date]" === S.call(t)
    }

    function f(t) {
        return "[object File]" === S.call(t)
    }

    function d(t) {
        return "[object Blob]" === S.call(t)
    }

    function p(t) {
        return "[object Function]" === S.call(t)
    }

    function g(t) {
        return u(t) && p(t.pipe)
    }

    function m(t) {
        return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
    }

    function v(t) {
        return t.replace(/^\s*/, "").replace(/\s*$/, "")
    }

    function y() {
        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
    }

    function b(t, e) {
        if (null !== t && void 0 !== t)
            if ("object" != typeof t && (t = [t]), i(t))
                for (var n = 0, r = t.length; n < r; n++) e.call(null, t[n], n, t);
            else
                for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && e.call(null, t[s], s, t)
    }

    function _() {
        function t(t, n) {
            "object" == typeof e[n] && "object" == typeof t ? e[n] = _(e[n], t) : e[n] = t
        }
        for (var e = {}, n = 0, i = arguments.length; n < i; n++) b(arguments[n], t);
        return e
    }

    function w(t, e, n) {
        return b(e, function(e, i) {
            t[i] = n && "function" == typeof e ? x(e, n) : e
        }), t
    }
    var x = n(6),
        C = n(39),
        S = Object.prototype.toString;
    t.exports = {
        isArray: i,
        isArrayBuffer: r,
        isBuffer: C,
        isFormData: s,
        isArrayBufferView: o,
        isString: a,
        isNumber: c,
        isObject: u,
        isUndefined: l,
        isDate: h,
        isFile: f,
        isBlob: d,
        isFunction: p,
        isStream: g,
        isURLSearchParams: m,
        isStandardBrowserEnv: y,
        forEach: b,
        merge: _,
        extend: w,
        trim: v
    }
}, function(t, e, n) {
    "use strict";
    (function(e) {
        function i(t, e) {
            !r.isUndefined(t) && r.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
        }
        var r = n(1),
            s = n(41),
            o = {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            a = {
                adapter: function() {
                    var t;
                    return "undefined" != typeof XMLHttpRequest ? t = n(8) : void 0 !== e && (t = n(8)), t
                }(),
                transformRequest: [function(t, e) {
                    return s(e, "Content-Type"), r.isFormData(t) || r.isArrayBuffer(t) || r.isBuffer(t) || r.isStream(t) || r.isFile(t) || r.isBlob(t) ? t : r.isArrayBufferView(t) ? t.buffer : r.isURLSearchParams(t) ? (i(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : r.isObject(t) ? (i(e, "application/json;charset=utf-8"), JSON.stringify(t)) : t
                }],
                transformResponse: [function(t) {
                    if ("string" == typeof t) try {
                        t = JSON.parse(t)
                    } catch (t) {}
                    return t
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function(t) {
                    return t >= 200 && t < 300
                }
            };
        a.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }, r.forEach(["delete", "get", "head"], function(t) {
            a.headers[t] = {}
        }), r.forEach(["post", "put", "patch"], function(t) {
            a.headers[t] = r.merge(o)
        }), t.exports = a
    }).call(e, n(7))
}, function(t, e, n) {
    "use strict";
    /*!
     * classie - class helper functions
     * from bonzo https://github.com/ded/bonzo
     *
     * classie.has( elem, 'my-class' ) -> true/false
     * classie.add( elem, 'my-new-class' )
     * classie.remove( elem, 'my-unwanted-class' )
     * classie.toggle( elem, 'my-class' )
     */
    function i(t) {
        return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
    }

    function r(t, e) {
        (a(t, e) ? l : c)(t, e)
    }
    var s, o, a, c, l;
    "classList" in document.documentElement ? (a = function(t, e) {
        return t.classList.contains(e)
    }, c = function(t, e) {
        t.classList.add(e)
    }, l = function(t, e) {
        t.classList.remove(e)
    }) : (a = function(t, e) {
        return i(e).test(t.className)
    }, c = function(t, e) {
        a(t, e) || (t.className = t.className + " " + e)
    }, l = function(t, e) {
        t.className = t.className.replace(i(e), " ")
    });
    var u = {
        hasClass: a,
        addClass: c,
        removeClass: l,
        toggleClass: r,
        has: a,
        add: c,
        remove: l,
        toggle: r
    };
    s = u, void 0 !== (o = "function" == typeof s ? s.call(e, n, e, t) : s) && (t.exports = o)
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    n.d(e, "a", function() {
        return o
    });
    var r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        s = function() {
            function t() {
                i(this, t), this.searchParams = new window.URL(window.location.href).searchParams
            }
            return r(t, [{
                key: "hasPaymentKey",
                value: function() {
                    return this.searchParams.has("payment")
                }
            }, {
                key: "getPaymentKey",
                value: function() {
                    return this.searchParams.get("payment")
                }
            }, {
                key: "removePaymentKey",
                value: function() {
                    console.log("this.searchParams", this.getPaymentKey()), this.searchParams.delete("payment"), console.log("this.searchParams", this.getPaymentKey())
                }
            }, {
                key: "getLanguage",
                value: function() {
                    return this.searchParams.get("lang")
                }
            }, {
                key: "isUa",
                value: function() {
                    return "ua" === this.searchParams.get("lang")
                }
            }, {
                key: "isEng",
                value: function() {
                    return "en" === this.searchParams.get("lang")
                }
            }]), t
        }(),
        o = new s
}, function(t, e, n) {
    t.exports = n(38)
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        return function() {
            for (var n = new Array(arguments.length), i = 0; i < n.length; i++) n[i] = arguments[i];
            return t.apply(e, n)
        }
    }
}, function(t, e) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function i() {
        throw new Error("clearTimeout has not been defined")
    }

    function r(t) {
        if (u === setTimeout) return setTimeout(t, 0);
        if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);
        try {
            return u(t, 0)
        } catch (e) {
            try {
                return u.call(null, t, 0)
            } catch (e) {
                return u.call(this, t, 0)
            }
        }
    }

    function s(t) {
        if (h === clearTimeout) return clearTimeout(t);
        if ((h === i || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t);
        try {
            return h(t)
        } catch (e) {
            try {
                return h.call(null, t)
            } catch (e) {
                return h.call(this, t)
            }
        }
    }

    function o() {
        g && d && (g = !1, d.length ? p = d.concat(p) : m = -1, p.length && a())
    }

    function a() {
        if (!g) {
            var t = r(o);
            g = !0;
            for (var e = p.length; e;) {
                for (d = p, p = []; ++m < e;) d && d[m].run();
                m = -1, e = p.length
            }
            d = null, g = !1, s(t)
        }
    }

    function c(t, e) {
        this.fun = t, this.array = e
    }

    function l() {}
    var u, h, f = t.exports = {};
    ! function() {
        try {
            u = "function" == typeof setTimeout ? setTimeout : n
        } catch (t) {
            u = n
        }
        try {
            h = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (t) {
            h = i
        }
    }();
    var d, p = [],
        g = !1,
        m = -1;
    f.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        p.push(new c(t, e)), 1 !== p.length || g || r(a)
    }, c.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = l, f.addListener = l, f.once = l, f.off = l, f.removeListener = l, f.removeAllListeners = l, f.emit = l, f.prependListener = l, f.prependOnceListener = l, f.listeners = function(t) {
        return []
    }, f.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, f.cwd = function() {
        return "/"
    }, f.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, f.umask = function() {
        return 0
    }
}, function(t, e, n) {
    "use strict";
    (function(e) {
        var i = n(1),
            r = n(42),
            s = n(44),
            o = n(45),
            a = n(46),
            c = n(9),
            l = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(47);
        t.exports = function(t) {
            return new Promise(function(u, h) {
                var f = t.data,
                    d = t.headers;
                i.isFormData(f) && delete d["Content-Type"];
                var p = new XMLHttpRequest,
                    g = "onreadystatechange",
                    m = !1;
                if ("test" === e.env.NODE_ENV || "undefined" == typeof window || !window.XDomainRequest || "withCredentials" in p || a(t.url) || (p = new window.XDomainRequest, g = "onload", m = !0, p.onprogress = function() {}, p.ontimeout = function() {}), t.auth) {
                    var v = t.auth.username || "",
                        y = t.auth.password || "";
                    d.Authorization = "Basic " + l(v + ":" + y)
                }
                if (p.open(t.method.toUpperCase(), s(t.url, t.params, t.paramsSerializer), !0), p.timeout = t.timeout, p[g] = function() {
                        if (p && (4 === p.readyState || m) && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                            var e = "getAllResponseHeaders" in p ? o(p.getAllResponseHeaders()) : null,
                                n = t.responseType && "text" !== t.responseType ? p.response : p.responseText,
                                i = {
                                    data: n,
                                    status: 1223 === p.status ? 204 : p.status,
                                    statusText: 1223 === p.status ? "No Content" : p.statusText,
                                    headers: e,
                                    config: t,
                                    request: p
                                };
                            r(u, h, i), p = null
                        }
                    }, p.onerror = function() {
                        h(c("Network Error", t, null, p)), p = null
                    }, p.ontimeout = function() {
                        h(c("timeout of " + t.timeout + "ms exceeded", t, "ECONNABORTED", p)), p = null
                    }, i.isStandardBrowserEnv()) {
                    var b = n(48),
                        _ = (t.withCredentials || a(t.url)) && t.xsrfCookieName ? b.read(t.xsrfCookieName) : void 0;
                    _ && (d[t.xsrfHeaderName] = _)
                }
                if ("setRequestHeader" in p && i.forEach(d, function(t, e) {
                        void 0 === f && "content-type" === e.toLowerCase() ? delete d[e] : p.setRequestHeader(e, t)
                    }), t.withCredentials && (p.withCredentials = !0), t.responseType) try {
                    p.responseType = t.responseType
                } catch (e) {
                    if ("json" !== t.responseType) throw e
                }
                "function" == typeof t.onDownloadProgress && p.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && p.upload && p.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then(function(t) {
                    p && (p.abort(), h(t), p = null)
                }), void 0 === f && (f = null), p.send(f)
            })
        }
    }).call(e, n(7))
}, function(t, e, n) {
    "use strict";
    var i = n(43);
    t.exports = function(t, e, n, r, s) {
        var o = new Error(t);
        return i(o, e, n, r, s)
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return !(!t || !t.__CANCEL__)
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        this.message = t
    }
    i.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, i.prototype.__CANCEL__ = !0, t.exports = i
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(13),
        r = (n.n(i), n(0)),
        s = n.n(r),
        o = n(14),
        a = (n.n(o), n(3)),
        c = (n.n(a), n(15), n(16)),
        l = (n.n(c), n(21)),
        u = (n.n(l), n(22)),
        h = (n.n(u), n(23)),
        f = (n.n(h), n(24), n(26), n(28), n(30), n(32), n(34), n(56), n(58), n(60), n(61));
    n.n(f);
    s()(document).ready(function() {
        s()(this).scrollTop(0)
    })
}, function(t, e, n) {
    t.exports = n.p + "favicon.ico"
}, function(t, e, n) {
    var i = n(0);
    /*!
     * Bootstrap v3.3.4 (http://getbootstrap.com)
     * Copyright 2011-2015 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    if (void 0 === i) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
        "use strict";
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
    }(i),
    function(t) {
        "use strict";

        function e() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in e)
                if (void 0 !== t.style[n]) return {
                    end: e[n]
                };
            return !1
        }
        t.fn.emulateTransitionEnd = function(e) {
            var n = !1,
                i = this;
            t(this).one("bsTransitionEnd", function() {
                n = !0
            });
            var r = function() {
                n || t(i).trigger(t.support.transition.end)
            };
            return setTimeout(r, e), this
        }, t(function() {
            t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function(e) {
                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            })
        })
    }(i),
    function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    r = n.data("bs.alert");
                r || n.data("bs.alert", r = new i(this)), "string" == typeof e && r[e].call(n)
            })
        }
        var n = '[data-dismiss="alert"]',
            i = function(e) {
                t(e).on("click", n, this.close)
            };
        i.VERSION = "3.3.4", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
            function n() {
                o.detach().trigger("closed.bs.alert").remove()
            }
            var r = t(this),
                s = r.attr("data-target");
            s || (s = r.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
            var o = t(s);
            e && e.preventDefault(), o.length || (o = r.closest(".alert")), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
        };
        var r = t.fn.alert;
        t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
            return t.fn.alert = r, this
        }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
    }(i),
    function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var i = t(this),
                    r = i.data("bs.button"),
                    s = "object" == typeof e && e;
                r || i.data("bs.button", r = new n(this, s)), "toggle" == e ? r.toggle() : e && r.setState(e)
            })
        }
        var n = function(e, i) {
            this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
        };
        n.VERSION = "3.3.4", n.DEFAULTS = {
            loadingText: "loading..."
        }, n.prototype.setState = function(e) {
            var n = "disabled",
                i = this.$element,
                r = i.is("input") ? "val" : "html",
                s = i.data();
            e += "Text", null == s.resetText && i.data("resetText", i[r]()), setTimeout(t.proxy(function() {
                i[r](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
            }, this), 0)
        }, n.prototype.toggle = function() {
            var t = !0,
                e = this.$element.closest('[data-toggle="buttons"]');
            if (e.length) {
                var n = this.$element.find("input");
                "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
            t && this.$element.toggleClass("active")
        };
        var i = t.fn.button;
        t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
            return t.fn.button = i, this
        }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
            var i = t(n.target);
            i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), n.preventDefault()
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
            t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
        })
    }(i),
    function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var i = t(this),
                    r = i.data("bs.carousel"),
                    s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                    o = "string" == typeof e ? e : s.slide;
                r || i.data("bs.carousel", r = new n(this, s)), "number" == typeof e ? r.to(e) : o ? r[o]() : s.interval && r.pause().cycle()
            })
        }
        var n = function(e, n) {
            this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
        };
        n.VERSION = "3.3.4", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, n.prototype.keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName)) {
                switch (t.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                t.preventDefault()
            }
        }, n.prototype.cycle = function(e) {
            return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
        }, n.prototype.getItemIndex = function(t) {
            return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
        }, n.prototype.getItemForDirection = function(t, e) {
            var n = this.getItemIndex(e);
            if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap) return e;
            var i = "prev" == t ? -1 : 1,
                r = (n + i) % this.$items.length;
            return this.$items.eq(r)
        }, n.prototype.to = function(t) {
            var e = this,
                n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                e.to(t)
            }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
        }, n.prototype.pause = function(e) {
            return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, n.prototype.next = function() {
            if (!this.sliding) return this.slide("next")
        }, n.prototype.prev = function() {
            if (!this.sliding) return this.slide("prev")
        }, n.prototype.slide = function(e, i) {
            var r = this.$element.find(".item.active"),
                s = i || this.getItemForDirection(e, r),
                o = this.interval,
                a = "next" == e ? "left" : "right",
                c = this;
            if (s.hasClass("active")) return this.sliding = !1;
            var l = s[0],
                u = t.Event("slide.bs.carousel", {
                    relatedTarget: l,
                    direction: a
                });
            if (this.$element.trigger(u), !u.isDefaultPrevented()) {
                if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var h = t(this.$indicators.children()[this.getItemIndex(s)]);
                    h && h.addClass("active")
                }
                var f = t.Event("slid.bs.carousel", {
                    relatedTarget: l,
                    direction: a
                });
                return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, r.addClass(a), s.addClass(a), r.one("bsTransitionEnd", function() {
                    s.removeClass([e, a].join(" ")).addClass("active"), r.removeClass(["active", a].join(" ")), c.sliding = !1, setTimeout(function() {
                        c.$element.trigger(f)
                    }, 0)
                }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (r.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(f)), o && this.cycle(), this
            }
        };
        var i = t.fn.carousel;
        t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
            return t.fn.carousel = i, this
        };
        var r = function(n) {
            var i, r = t(this),
                s = t(r.attr("data-target") || (i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
            if (s.hasClass("carousel")) {
                var o = t.extend({}, s.data(), r.data()),
                    a = r.attr("data-slide-to");
                a && (o.interval = !1), e.call(s, o), a && s.data("bs.carousel").to(a), n.preventDefault()
            }
        };
        t(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), t(window).on("load", function() {
            t('[data-ride="carousel"]').each(function() {
                var n = t(this);
                e.call(n, n.data())
            })
        })
    }(i),
    function(t) {
        "use strict";

        function e(e) {
            var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
            return t(i)
        }

        function n(e) {
            return this.each(function() {
                var n = t(this),
                    r = n.data("bs.collapse"),
                    s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
                !r && s.toggle && /show|hide/.test(e) && (s.toggle = !1), r || n.data("bs.collapse", r = new i(this, s)), "string" == typeof e && r[e]()
            })
        }
        var i = function(e, n) {
            this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
        i.VERSION = "3.3.4", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
            toggle: !0
        }, i.prototype.dimension = function() {
            return this.$element.hasClass("width") ? "width" : "height"
        }, i.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var e, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(r && r.length && (e = r.data("bs.collapse")) && e.transitioning)) {
                    var s = t.Event("show.bs.collapse");
                    if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                        r && r.length && (n.call(r, "hide"), e || r.data("bs.collapse", null));
                        var o = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var a = function() {
                            this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!t.support.transition) return a.call(this);
                        var c = t.camelCase(["scroll", o].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[o](this.$element[0][c])
                    }
                }
            }
        }, i.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var e = t.Event("hide.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    var n = this.dimension();
                    this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var r = function() {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    if (!t.support.transition) return r.call(this);
                    this.$element[n](0).one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION)
                }
            }
        }, i.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, i.prototype.getParent = function() {
            return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
                var r = t(i);
                this.addAriaAndCollapsedClass(e(r), r)
            }, this)).end()
        }, i.prototype.addAriaAndCollapsedClass = function(t, e) {
            var n = t.hasClass("in");
            t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
        };
        var r = t.fn.collapse;
        t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() {
            return t.fn.collapse = r, this
        }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
            var r = t(this);
            r.attr("data-target") || i.preventDefault();
            var s = e(r),
                o = s.data("bs.collapse"),
                a = o ? "toggle" : r.data();
            n.call(s, a)
        })
    }(i),
    function(t) {
        "use strict";

        function e(e) {
            e && 3 === e.which || (t(r).remove(), t(s).each(function() {
                var i = t(this),
                    r = n(i),
                    s = {
                        relatedTarget: this
                    };
                r.hasClass("open") && (r.trigger(e = t.Event("hide.bs.dropdown", s)), e.isDefaultPrevented() || (i.attr("aria-expanded", "false"), r.removeClass("open").trigger("hidden.bs.dropdown", s)))
            }))
        }

        function n(e) {
            var n = e.attr("data-target");
            n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
            var i = n && t(n);
            return i && i.length ? i : e.parent()
        }

        function i(e) {
            return this.each(function() {
                var n = t(this),
                    i = n.data("bs.dropdown");
                i || n.data("bs.dropdown", i = new o(this)), "string" == typeof e && i[e].call(n)
            })
        }
        var r = ".dropdown-backdrop",
            s = '[data-toggle="dropdown"]',
            o = function(e) {
                t(e).on("click.bs.dropdown", this.toggle)
            };
        o.VERSION = "3.3.4", o.prototype.toggle = function(i) {
            var r = t(this);
            if (!r.is(".disabled, :disabled")) {
                var s = n(r),
                    o = s.hasClass("open");
                if (e(), !o) {
                    "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                    var a = {
                        relatedTarget: this
                    };
                    if (s.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                    r.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger("shown.bs.dropdown", a)
                }
                return !1
            }
        }, o.prototype.keydown = function(e) {
            if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
                var i = t(this);
                if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                    var r = n(i),
                        o = r.hasClass("open");
                    if (!o && 27 != e.which || o && 27 == e.which) return 27 == e.which && r.find(s).trigger("focus"), i.trigger("click");
                    var a = " li:not(.disabled):visible a",
                        c = r.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                    if (c.length) {
                        var l = c.index(e.target);
                        38 == e.which && l > 0 && l--, 40 == e.which && l < c.length - 1 && l++, ~l || (l = 0), c.eq(l).trigger("focus")
                    }
                }
            }
        };
        var a = t.fn.dropdown;
        t.fn.dropdown = i, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function() {
            return t.fn.dropdown = a, this
        }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
            t.stopPropagation()
        }).on("click.bs.dropdown.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown.data-api", s, o.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', o.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', o.prototype.keydown)
    }(i),
    function(t) {
        "use strict";

        function e(e, i) {
            return this.each(function() {
                var r = t(this),
                    s = r.data("bs.modal"),
                    o = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e);
                s || r.data("bs.modal", s = new n(this, o)), "string" == typeof e ? s[e](i) : o.show && s.show(i)
            })
        }
        var n = function(e, n) {
            this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        n.VERSION = "3.3.4", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, n.prototype.toggle = function(t) {
            return this.isShown ? this.hide() : this.show(t)
        }, n.prototype.show = function(e) {
            var i = this,
                r = t.Event("show.bs.modal", {
                    relatedTarget: e
                });
            this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                    t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function() {
                var r = t.support.transition && i.$element.hasClass("fade");
                i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), r && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
                var s = t.Event("shown.bs.modal", {
                    relatedTarget: e
                });
                r ? i.$dialog.one("bsTransitionEnd", function() {
                    i.$element.trigger("focus").trigger(s)
                }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(s)
            }))
        }, n.prototype.hide = function(e) {
            e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
        }, n.prototype.enforceFocus = function() {
            t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
                this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
            }, this))
        }, n.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
                27 == t.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, n.prototype.resize = function() {
            this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
        }, n.prototype.hideModal = function() {
            var t = this;
            this.$element.hide(), this.backdrop(function() {
                t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
            })
        }, n.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, n.prototype.backdrop = function(e) {
            var i = this,
                r = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var s = t.support.transition && r;
                if (this.$backdrop = t('<div class="modal-backdrop ' + r + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                        if (this.ignoreBackdropClick) return void(this.ignoreBackdropClick = !1);
                        t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                    }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var o = function() {
                    i.removeBackdrop(), e && e()
                };
                t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : o()
            } else e && e()
        }, n.prototype.handleUpdate = function() {
            this.adjustDialog()
        }, n.prototype.adjustDialog = function() {
            var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
            })
        }, n.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }, n.prototype.checkScrollbar = function() {
            var t = window.innerWidth;
            if (!t) {
                var e = document.documentElement.getBoundingClientRect();
                t = e.right - Math.abs(e.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
        }, n.prototype.setScrollbar = function() {
            var t = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
        }, n.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", this.originalBodyPad)
        }, n.prototype.measureScrollbar = function() {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e
        };
        var i = t.fn.modal;
        t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
            return t.fn.modal = i, this
        }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
            var i = t(this),
                r = i.attr("href"),
                s = t(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
                o = s.data("bs.modal") ? "toggle" : t.extend({
                    remote: !/#/.test(r) && r
                }, s.data(), i.data());
            i.is("a") && n.preventDefault(), s.one("show.bs.modal", function(t) {
                t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                    i.is(":visible") && i.trigger("focus")
                })
            }), e.call(s, o, this)
        })
    }(i),
    function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var i = t(this),
                    r = i.data("bs.tooltip"),
                    s = "object" == typeof e && e;
                !r && /destroy|hide/.test(e) || (r || i.data("bs.tooltip", r = new n(this, s)), "string" == typeof e && r[e]())
            })
        }
        var n = function(t, e) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", t, e)
        };
        n.VERSION = "3.3.4", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        }, n.prototype.init = function(e, n, i) {
            if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var r = this.options.trigger.split(" "), s = r.length; s--;) {
                var o = r[s];
                if ("click" == o) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                else if ("manual" != o) {
                    var a = "hover" == o ? "mouseenter" : "focusin",
                        c = "hover" == o ? "mouseleave" : "focusout";
                    this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(c + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, n.prototype.getDefaults = function() {
            return n.DEFAULTS
        }, n.prototype.getOptions = function(e) {
            return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e
        }, n.prototype.getDelegateOptions = function() {
            var e = {},
                n = this.getDefaults();
            return this._options && t.each(this._options, function(t, i) {
                n[t] != i && (e[t] = i)
            }), e
        }, n.prototype.enter = function(e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            return n && n.$tip && n.$tip.is(":visible") ? void(n.hoverState = "in") : (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
                "in" == n.hoverState && n.show()
            }, n.options.delay.show)) : n.show())
        }, n.prototype.leave = function(e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide) return n.hide();
            n.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)
        }, n.prototype.show = function() {
            var e = t.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(e);
                var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (e.isDefaultPrevented() || !i) return;
                var r = this,
                    s = this.tip(),
                    o = this.getUID(this.type);
                this.setContent(), s.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && s.addClass("fade");
                var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                    c = /\s?auto?\s?/i,
                    l = c.test(a);
                l && (a = a.replace(c, "") || "top"), s.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(a).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element);
                var u = this.getPosition(),
                    h = s[0].offsetWidth,
                    f = s[0].offsetHeight;
                if (l) {
                    var d = a,
                        p = this.options.container ? t(this.options.container) : this.$element.parent(),
                        g = this.getPosition(p);
                    a = "bottom" == a && u.bottom + f > g.bottom ? "top" : "top" == a && u.top - f < g.top ? "bottom" : "right" == a && u.right + h > g.width ? "left" : "left" == a && u.left - h < g.left ? "right" : a, s.removeClass(d).addClass(a)
                }
                var m = this.getCalculatedOffset(a, u, h, f);
                this.applyPlacement(m, a);
                var v = function() {
                    var t = r.hoverState;
                    r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == t && r.leave(r)
                };
                t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(n.TRANSITION_DURATION) : v()
            }
        }, n.prototype.applyPlacement = function(e, n) {
            var i = this.tip(),
                r = i[0].offsetWidth,
                s = i[0].offsetHeight,
                o = parseInt(i.css("margin-top"), 10),
                a = parseInt(i.css("margin-left"), 10);
            isNaN(o) && (o = 0), isNaN(a) && (a = 0), e.top = e.top + o, e.left = e.left + a, t.offset.setOffset(i[0], t.extend({
                using: function(t) {
                    i.css({
                        top: Math.round(t.top),
                        left: Math.round(t.left)
                    })
                }
            }, e), 0), i.addClass("in");
            var c = i[0].offsetWidth,
                l = i[0].offsetHeight;
            "top" == n && l != s && (e.top = e.top + s - l);
            var u = this.getViewportAdjustedDelta(n, e, c, l);
            u.left ? e.left += u.left : e.top += u.top;
            var h = /top|bottom/.test(n),
                f = h ? 2 * u.left - r + c : 2 * u.top - s + l,
                d = h ? "offsetWidth" : "offsetHeight";
            i.offset(e), this.replaceArrow(f, i[0][d], h)
        }, n.prototype.replaceArrow = function(t, e, n) {
            this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
        }, n.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
        }, n.prototype.hide = function(e) {
            function i() {
                "in" != r.hoverState && s.detach(), r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), e && e()
            }
            var r = this,
                s = t(this.$tip),
                o = t.Event("hide.bs." + this.type);
            if (this.$element.trigger(o), !o.isDefaultPrevented()) return s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this
        }, n.prototype.fixTitle = function() {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        }, n.prototype.hasContent = function() {
            return this.getTitle()
        }, n.prototype.getPosition = function(e) {
            e = e || this.$element;
            var n = e[0],
                i = "BODY" == n.tagName,
                r = n.getBoundingClientRect();
            null == r.width && (r = t.extend({}, r, {
                width: r.right - r.left,
                height: r.bottom - r.top
            }));
            var s = i ? {
                    top: 0,
                    left: 0
                } : e.offset(),
                o = {
                    scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
                },
                a = i ? {
                    width: t(window).width(),
                    height: t(window).height()
                } : null;
            return t.extend({}, r, o, a, s)
        }, n.prototype.getCalculatedOffset = function(t, e, n, i) {
            return "bottom" == t ? {
                top: e.top + e.height,
                left: e.left + e.width / 2 - n / 2
            } : "top" == t ? {
                top: e.top - i,
                left: e.left + e.width / 2 - n / 2
            } : "left" == t ? {
                top: e.top + e.height / 2 - i / 2,
                left: e.left - n
            } : {
                top: e.top + e.height / 2 - i / 2,
                left: e.left + e.width
            }
        }, n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
            var r = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return r;
            var s = this.options.viewport && this.options.viewport.padding || 0,
                o = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var a = e.top - s - o.scroll,
                    c = e.top + s - o.scroll + i;
                a < o.top ? r.top = o.top - a : c > o.top + o.height && (r.top = o.top + o.height - c)
            } else {
                var l = e.left - s,
                    u = e.left + s + n;
                l < o.left ? r.left = o.left - l : u > o.width && (r.left = o.left + o.width - u)
            }
            return r
        }, n.prototype.getTitle = function() {
            var t = this.$element,
                e = this.options;
            return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
        }, n.prototype.getUID = function(t) {
            do {
                t += ~~(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        }, n.prototype.tip = function() {
            return this.$tip = this.$tip || t(this.options.template)
        }, n.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, n.prototype.enable = function() {
            this.enabled = !0
        }, n.prototype.disable = function() {
            this.enabled = !1
        }, n.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled
        }, n.prototype.toggle = function(e) {
            var n = this;
            e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
        }, n.prototype.destroy = function() {
            var t = this;
            clearTimeout(this.timeout), this.hide(function() {
                t.$element.off("." + t.type).removeData("bs." + t.type)
            })
        };
        var i = t.fn.tooltip;
        t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
            return t.fn.tooltip = i, this
        }
    }(i),
    function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var i = t(this),
                    r = i.data("bs.popover"),
                    s = "object" == typeof e && e;
                !r && /destroy|hide/.test(e) || (r || i.data("bs.popover", r = new n(this, s)), "string" == typeof e && r[e]())
            })
        }
        var n = function(t, e) {
            this.init("popover", t, e)
        };
        if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        n.VERSION = "3.3.4", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
            return n.DEFAULTS
        }, n.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle(),
                n = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
        }, n.prototype.hasContent = function() {
            return this.getTitle() || this.getContent()
        }, n.prototype.getContent = function() {
            var t = this.$element,
                e = this.options;
            return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        }, n.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        };
        var i = t.fn.popover;
        t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
            return t.fn.popover = i, this
        }
    }(i),
    function(t) {
        "use strict";

        function e(n, i) {
            this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
        }

        function n(n) {
            return this.each(function() {
                var i = t(this),
                    r = i.data("bs.scrollspy"),
                    s = "object" == typeof n && n;
                r || i.data("bs.scrollspy", r = new e(this, s)), "string" == typeof n && r[n]()
            })
        }
        e.VERSION = "3.3.4", e.DEFAULTS = {
            offset: 10
        }, e.prototype.getScrollHeight = function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, e.prototype.refresh = function() {
            var e = this,
                n = "offset",
                i = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
                var e = t(this),
                    r = e.data("target") || e.attr("href"),
                    s = /^#./.test(r) && t(r);
                return s && s.length && s.is(":visible") && [
                    [s[n]().top + i, r]
                ] || null
            }).sort(function(t, e) {
                return t[0] - e[0]
            }).each(function() {
                e.offsets.push(this[0]), e.targets.push(this[1])
            })
        }, e.prototype.process = function() {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                n = this.getScrollHeight(),
                i = this.options.offset + n - this.$scrollElement.height(),
                r = this.offsets,
                s = this.targets,
                o = this.activeTarget;
            if (this.scrollHeight != n && this.refresh(), e >= i) return o != (t = s[s.length - 1]) && this.activate(t);
            if (o && e < r[0]) return this.activeTarget = null, this.clear();
            for (t = r.length; t--;) o != s[t] && e >= r[t] && (void 0 === r[t + 1] || e < r[t + 1]) && this.activate(s[t])
        }, e.prototype.activate = function(e) {
            this.activeTarget = e, this.clear();
            var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                i = t(n).parents("li").addClass("active");
            i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
        }, e.prototype.clear = function() {
            t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        };
        var i = t.fn.scrollspy;
        t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
            return t.fn.scrollspy = i, this
        }, t(window).on("load.bs.scrollspy.data-api", function() {
            t('[data-spy="scroll"]').each(function() {
                var e = t(this);
                n.call(e, e.data())
            })
        })
    }(i),
    function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var i = t(this),
                    r = i.data("bs.tab");
                r || i.data("bs.tab", r = new n(this)), "string" == typeof e && r[e]()
            })
        }
        var n = function(e) {
            this.element = t(e)
        };
        n.VERSION = "3.3.4", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
            var e = this.element,
                n = e.closest("ul:not(.dropdown-menu)"),
                i = e.data("target");
            if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                var r = n.find(".active:last a"),
                    s = t.Event("hide.bs.tab", {
                        relatedTarget: e[0]
                    }),
                    o = t.Event("show.bs.tab", {
                        relatedTarget: r[0]
                    });
                if (r.trigger(s), e.trigger(o), !o.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    var a = t(i);
                    this.activate(e.closest("li"), n), this.activate(a, a.parent(), function() {
                        r.trigger({
                            type: "hidden.bs.tab",
                            relatedTarget: e[0]
                        }), e.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: r[0]
                        })
                    })
                }
            }
        }, n.prototype.activate = function(e, i, r) {
            function s() {
                o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r()
            }
            var o = i.find("> .active"),
                a = r && t.support.transition && (o.length && o.hasClass("fade") || !!i.find("> .fade").length);
            o.length && a ? o.one("bsTransitionEnd", s).emulateTransitionEnd(n.TRANSITION_DURATION) : s(), o.removeClass("in")
        };
        var i = t.fn.tab;
        t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
            return t.fn.tab = i, this
        };
        var r = function(n) {
            n.preventDefault(), e.call(t(this), "show")
        };
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
    }(i),
    function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var i = t(this),
                    r = i.data("bs.affix"),
                    s = "object" == typeof e && e;
                r || i.data("bs.affix", r = new n(this, s)), "string" == typeof e && r[e]()
            })
        }
        var n = function(e, i) {
            this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };
        n.VERSION = "3.3.4", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
            offset: 0,
            target: window
        }, n.prototype.getState = function(t, e, n, i) {
            var r = this.$target.scrollTop(),
                s = this.$element.offset(),
                o = this.$target.height();
            if (null != n && "top" == this.affixed) return r < n && "top";
            if ("bottom" == this.affixed) return null != n ? !(r + this.unpin <= s.top) && "bottom" : !(r + o <= t - i) && "bottom";
            var a = null == this.affixed,
                c = a ? r : s.top,
                l = a ? o : e;
            return null != n && r <= n ? "top" : null != i && c + l >= t - i && "bottom"
        }, n.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(n.RESET).addClass("affix");
            var t = this.$target.scrollTop(),
                e = this.$element.offset();
            return this.pinnedOffset = e.top - t
        }, n.prototype.checkPositionWithEventLoop = function() {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }, n.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var e = this.$element.height(),
                    i = this.options.offset,
                    r = i.top,
                    s = i.bottom,
                    o = t(document.body).height();
                "object" != typeof i && (s = r = i), "function" == typeof r && (r = i.top(this.$element)), "function" == typeof s && (s = i.bottom(this.$element));
                var a = this.getState(o, e, r, s);
                if (this.affixed != a) {
                    null != this.unpin && this.$element.css("top", "");
                    var c = "affix" + (a ? "-" + a : ""),
                        l = t.Event(c + ".bs.affix");
                    if (this.$element.trigger(l), l.isDefaultPrevented()) return;
                    this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(c).trigger(c.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == a && this.$element.offset({
                    top: o - e - s
                })
            }
        };
        var i = t.fn.affix;
        t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
            return t.fn.affix = i, this
        }, t(window).on("load", function() {
            t('[data-spy="affix"]').each(function() {
                var n = t(this),
                    i = n.data();
                i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
            })
        })
    }(i)
}, function(t, e, n) {
    "use strict";
    var i = n(3),
        r = n.n(i);
    ! function() {
        function t() {
            e() >= o ? r.a.add(i, "navbar-shrink") : r.a.remove(i, "navbar-shrink"), s = !1
        }

        function e() {
            return window.pageYOffset || n.scrollTop
        }
        var n = document.documentElement,
            i = document.querySelector(".navbar-default"),
            s = !1,
            o = 300;
        ! function() {
            window.addEventListener("scroll", function(e) {
                s || (s = !0, setTimeout(t, 250))
            }, !1)
        }()
    }()
}, function(t, e, n) {
    var i = n(0),
        r = n(17);
    /*!
     * jQuery Final Countdown
     *
     * @author Pragmatic Mates, http://pragmaticmates.com
     * @version 1.1.1
     * @license GPL 2
     * @link https://github.com/PragmaticMates/jquery-final-countdown
     */
    ! function(t) {
        function e() {
            t(window).load(n), t(window).on("redraw", function() {
                switched = !1, n()
            }), t(window).on("resize", n)
        }

        function n() {
            p.draw(), g.draw(), m.draw(), v.draw()
        }

        function i(t) {
            return Math.PI / 180 * t - Math.PI / 180 * 90
        }

        function s() {
            l = {
                total: Math.floor((c.end - c.start) / 86400),
                days: Math.floor((c.end - c.now) / 86400),
                hours: 24 - Math.floor((c.end - c.now) % 86400 / 3600),
                minutes: 60 - Math.floor((c.end - c.now) % 86400 % 3600 / 60),
                seconds: 60 - Math.floor((c.end - c.now) % 86400 % 3600 % 60)
            }
        }

        function o() {
            var e = t("#" + c.selectors.canvas_seconds).width(),
                n = new r.Stage({
                    container: c.selectors.canvas_seconds,
                    width: e,
                    height: e
                });
            u = new r.Shape({
                drawFunc: function(e) {
                    var n = t("#" + c.selectors.canvas_seconds).width(),
                        r = n / 2 - c.seconds.borderWidth / 2,
                        s = n / 2,
                        o = n / 2;
                    e.beginPath(), e.arc(s, o, r, i(0), i(6 * l.seconds)), e.fillStrokeShape(this), t(c.selectors.value_seconds).html(60 - l.seconds)
                },
                stroke: c.seconds.borderColor,
                strokeWidth: c.seconds.borderWidth
            }), p = new r.Layer, p.add(u), n.add(p);
            var s = t("#" + c.selectors.canvas_minutes).width(),
                o = new r.Stage({
                    container: c.selectors.canvas_minutes,
                    width: s,
                    height: s
                });
            h = new r.Shape({
                drawFunc: function(e) {
                    var n = t("#" + c.selectors.canvas_minutes).width(),
                        r = n / 2 - c.minutes.borderWidth / 2,
                        s = n / 2,
                        o = n / 2;
                    e.beginPath(), e.arc(s, o, r, i(0), i(6 * l.minutes)), e.fillStrokeShape(this), t(c.selectors.value_minutes).html(60 - l.minutes)
                },
                stroke: c.minutes.borderColor,
                strokeWidth: c.minutes.borderWidth
            }), g = new r.Layer, g.add(h), o.add(g);
            var a = t("#" + c.selectors.canvas_hours).width(),
                y = new r.Stage({
                    container: c.selectors.canvas_hours,
                    width: a,
                    height: a
                });
            f = new r.Shape({
                drawFunc: function(e) {
                    var n = t("#" + c.selectors.canvas_hours).width(),
                        r = n / 2 - c.hours.borderWidth / 2,
                        s = n / 2,
                        o = n / 2;
                    e.beginPath(), e.arc(s, o, r, i(0), i(360 * l.hours / 24)), e.fillStrokeShape(this), t(c.selectors.value_hours).html(24 - l.hours)
                },
                stroke: c.hours.borderColor,
                strokeWidth: c.hours.borderWidth
            }), m = new r.Layer, m.add(f), y.add(m);
            var b = t("#" + c.selectors.canvas_days).width(),
                _ = new r.Stage({
                    container: c.selectors.canvas_days,
                    width: b,
                    height: b
                });
            d = new r.Shape({
                drawFunc: function(e) {
                    var n = t("#" + c.selectors.canvas_days).width(),
                        r = n / 2 - c.days.borderWidth / 2,
                        s = n / 2,
                        o = n / 2;
                    e.beginPath(), 0 == l.total ? e.arc(s, o, r, i(0), i(360)) : e.arc(s, o, r, i(0), i(360 / l.total * (l.total - l.days))), e.fillStrokeShape(this), t(c.selectors.value_days).html(l.days)
                },
                stroke: c.days.borderColor,
                strokeWidth: c.days.borderWidth
            }), v = new r.Layer, v.add(d), _.add(v)
        }

        function a() {
            var t = setInterval(function() {
                if (l.seconds > 59) {
                    if (60 - l.minutes == 0 && 24 - l.hours == 0 && 0 == l.days) return clearInterval(t), void(void 0 !== b && b.call(this));
                    l.seconds = 1, l.minutes > 59 ? (l.minutes = 1, g.draw(), l.hours > 23 ? (l.hours = 1, l.days > 0 && (l.days--, v.draw())) : l.hours++, m.draw()) : l.minutes++, g.draw()
                } else l.seconds++;
                p.draw()
            }, 1e3)
        }
        var c, l, u, h, f, d, p, g, m, v, y, b;
        t.fn.final_countdown = function(n, i) {
            if (y = t(this), y.is(":visible")) {
                var r = t.extend({
                    start: void 0,
                    end: void 0,
                    now: void 0,
                    selectors: {
                        value_seconds: ".clock-seconds .val",
                        canvas_seconds: "canvas-seconds",
                        value_minutes: ".clock-minutes .val",
                        canvas_minutes: "canvas-minutes",
                        value_hours: ".clock-hours .val",
                        canvas_hours: "canvas-hours",
                        value_days: ".clock-days .val",
                        canvas_days: "canvas-days"
                    },
                    seconds: {
                        borderColor: "#337AB7",
                        borderWidth: "6"
                    },
                    minutes: {
                        borderColor: "#19BEB0",
                        borderWidth: "6"
                    },
                    hours: {
                        borderColor: "#FFC404",
                        borderWidth: "6"
                    },
                    days: {
                        borderColor: "#E2302C",
                        borderWidth: "6"
                    }
                }, n);
                c = t.extend({}, r, n), void 0 === c.start && (c.start = y.data("start")), void 0 === c.end && (c.end = y.data("end")), void 0 === c.now && (c.now = y.data("now")), y.data("border-color") && (c.seconds.borderColor = c.minutes.borderColor = c.hours.borderColor = c.days.borderColor = y.data("border-color")), c.now < c.start && (c.start = c.now, c.end = c.now), c.now > c.end && (c.start = c.now, c.end = c.now), "function" == typeof i && (b = i), e(), s(), o(), a()
            }
        }
    }(i)
}, function(t, e, n) {
    (function(i) {
        var r = {};
        ! function(t) {
            var e = Math.PI / 180;
            r = {
                version: "5.2.0",
                stages: [],
                idCounter: 0,
                ids: {},
                names: {},
                shapes: {},
                listenClickTap: !1,
                inDblClickWindow: !1,
                enableTrace: !1,
                traceArrMax: 100,
                dblClickWindow: 400,
                pixelRatio: void 0,
                dragDistance: 0,
                angleDeg: !0,
                showWarnings: !0,
                Filters: {},
                Node: function(t) {
                    this._init(t)
                },
                Shape: function(t) {
                    this.__init(t)
                },
                Container: function(t) {
                    this.__init(t)
                },
                Stage: function(t) {
                    this.___init(t)
                },
                BaseLayer: function(t) {
                    this.___init(t)
                },
                Layer: function(t) {
                    this.____init(t)
                },
                FastLayer: function(t) {
                    this.____init(t)
                },
                Group: function(t) {
                    this.___init(t)
                },
                isDragging: function() {
                    var t = r.DD;
                    return !!t && t.isDragging
                },
                isDragReady: function() {
                    var t = r.DD;
                    return !!t && !!t.node
                },
                _addId: function(t, e) {
                    void 0 !== e && (this.ids[e] = t)
                },
                _removeId: function(t) {
                    void 0 !== t && delete this.ids[t]
                },
                _addName: function(t, e) {
                    if (void 0 !== e)
                        for (var n = e.split(/\s/g), i = 0; i < n.length; i++) {
                            var r = n[i];
                            r && (void 0 === this.names[r] && (this.names[r] = []), this.names[r].push(t))
                        }
                },
                _removeName: function(t, e) {
                    if (void 0 !== t) {
                        var n = this.names[t];
                        if (void 0 !== n) {
                            for (var i = 0; i < n.length; i++) {
                                n[i]._id === e && n.splice(i, 1)
                            }
                            0 === n.length && delete this.names[t]
                        }
                    }
                },
                getAngle: function(t) {
                    return this.angleDeg ? t * e : t
                },
                _parseUA: function(t) {
                    var e = t.toLowerCase(),
                        n = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [],
                        i = !!t.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i),
                        r = !!t.match(/IEMobile/i);
                    return {
                        browser: n[1] || "",
                        version: n[2] || "0",
                        mobile: i,
                        ieMobile: r
                    }
                },
                UA: void 0
            }, r.UA = r._parseUA(t.navigator && t.navigator.userAgent || "")
        }(this),
        function(e, s) {
            var o = s();
            if (i.window === i) r.document = i.document, r.window = i;
            else {
                var a = n(19),
                    c = n(20).jsdom;
                r.document = c("<!DOCTYPE html><html><head></head><body></body></html>"), r.window = r.document.createWindow(), r.window.Image = a.Image, r._nodeCanvas = a
            }
            r.root = e, t.exports = o
        }(this, function() {
            return r
        }),
        function() {
            r.Collection = function() {
                var t = [].slice.call(arguments),
                    e = t.length,
                    n = 0;
                for (this.length = e; n < e; n++) this[n] = t[n];
                return this
            }, r.Collection.prototype = [], r.Collection.prototype.each = function(t) {
                for (var e = 0; e < this.length; e++) t(this[e], e)
            }, r.Collection.prototype.toArray = function() {
                var t, e = [],
                    n = this.length;
                for (t = 0; t < n; t++) e.push(this[t]);
                return e
            }, r.Collection.toCollection = function(t) {
                var e, n = new r.Collection,
                    i = t.length;
                for (e = 0; e < i; e++) n.push(t[e]);
                return n
            }, r.Collection._mapMethod = function(t) {
                r.Collection.prototype[t] = function() {
                    var e, n = this.length,
                        i = [].slice.call(arguments);
                    for (e = 0; e < n; e++) this[e][t].apply(this[e], i);
                    return this
                }
            }, r.Collection.mapMethods = function(t) {
                var e = t.prototype;
                for (var n in e) r.Collection._mapMethod(n)
            }, r.Transform = function(t) {
                this.m = t && t.slice() || [1, 0, 0, 1, 0, 0]
            }, r.Transform.prototype = {
                copy: function() {
                    return new r.Transform(this.m)
                },
                point: function(t) {
                    var e = this.m;
                    return {
                        x: e[0] * t.x + e[2] * t.y + e[4],
                        y: e[1] * t.x + e[3] * t.y + e[5]
                    }
                },
                translate: function(t, e) {
                    return this.m[4] += this.m[0] * t + this.m[2] * e, this.m[5] += this.m[1] * t + this.m[3] * e, this
                },
                scale: function(t, e) {
                    return this.m[0] *= t, this.m[1] *= t, this.m[2] *= e, this.m[3] *= e, this
                },
                rotate: function(t) {
                    var e = Math.cos(t),
                        n = Math.sin(t),
                        i = this.m[0] * e + this.m[2] * n,
                        r = this.m[1] * e + this.m[3] * n,
                        s = this.m[0] * -n + this.m[2] * e,
                        o = this.m[1] * -n + this.m[3] * e;
                    return this.m[0] = i, this.m[1] = r, this.m[2] = s, this.m[3] = o, this
                },
                getTranslation: function() {
                    return {
                        x: this.m[4],
                        y: this.m[5]
                    }
                },
                skew: function(t, e) {
                    var n = this.m[0] + this.m[2] * e,
                        i = this.m[1] + this.m[3] * e,
                        r = this.m[2] + this.m[0] * t,
                        s = this.m[3] + this.m[1] * t;
                    return this.m[0] = n, this.m[1] = i, this.m[2] = r, this.m[3] = s, this
                },
                multiply: function(t) {
                    var e = this.m[0] * t.m[0] + this.m[2] * t.m[1],
                        n = this.m[1] * t.m[0] + this.m[3] * t.m[1],
                        i = this.m[0] * t.m[2] + this.m[2] * t.m[3],
                        r = this.m[1] * t.m[2] + this.m[3] * t.m[3],
                        s = this.m[0] * t.m[4] + this.m[2] * t.m[5] + this.m[4],
                        o = this.m[1] * t.m[4] + this.m[3] * t.m[5] + this.m[5];
                    return this.m[0] = e, this.m[1] = n, this.m[2] = i, this.m[3] = r, this.m[4] = s, this.m[5] = o, this
                },
                invert: function() {
                    var t = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]),
                        e = this.m[3] * t,
                        n = -this.m[1] * t,
                        i = -this.m[2] * t,
                        r = this.m[0] * t,
                        s = t * (this.m[2] * this.m[5] - this.m[3] * this.m[4]),
                        o = t * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
                    return this.m[0] = e, this.m[1] = n, this.m[2] = i, this.m[3] = r, this.m[4] = s, this.m[5] = o, this
                },
                getMatrix: function() {
                    return this.m
                },
                setAbsolutePosition: function(t, e) {
                    var n = this.m[0],
                        i = this.m[1],
                        r = this.m[2],
                        s = this.m[3],
                        o = this.m[4],
                        a = this.m[5],
                        c = (n * (e - a) - i * (t - o)) / (n * s - i * r),
                        l = (t - o - r * c) / n;
                    return this.translate(l, c)
                }
            };
            var t = Math.PI / 180,
                n = 180 / Math.PI,
                i = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                s = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;
            r.Util = {
                _isElement: function(t) {
                    return !(!t || 1 != t.nodeType)
                },
                _isFunction: function(t) {
                    return !!(t && t.constructor && t.call && t.apply)
                },
                _isObject: function(t) {
                    return !!t && t.constructor == Object
                },
                _isArray: function(t) {
                    return "[object Array]" == Object.prototype.toString.call(t)
                },
                _isNumber: function(t) {
                    return "[object Number]" == Object.prototype.toString.call(t)
                },
                _isString: function(t) {
                    return "[object String]" == Object.prototype.toString.call(t)
                },
                _throttle: function(t, e, n) {
                    var i, r, s, o = null,
                        a = 0,
                        c = n || {},
                        l = function() {
                            a = !1 === c.leading ? 0 : (new Date).getTime(), o = null, s = t.apply(i, r), i = r = null
                        };
                    return function() {
                        var n = (new Date).getTime();
                        a || !1 !== c.leading || (a = n);
                        var u = e - (n - a);
                        return i = this, r = arguments, u <= 0 ? (clearTimeout(o), o = null, a = n, s = t.apply(i, r), i = r = null) : o || !1 === c.trailing || (o = setTimeout(l, u)), s
                    }
                },
                _hasMethods: function(t) {
                    var e, n = [];
                    for (e in t) this._isFunction(t[e]) && n.push(e);
                    return n.length > 0
                },
                createCanvasElement: function() {
                    var t = r.document.createElement("canvas");
                    try {
                        t.style = t.style || {}
                    } catch (t) {}
                    return t
                },
                isBrowser: function() {
                    return "object" != typeof e
                },
                _isInDocument: function(t) {
                    for (; t = t.parentNode;)
                        if (t == r.document) return !0;
                    return !1
                },
                _simplifyArray: function(t) {
                    var e, n, i = [],
                        s = t.length,
                        o = r.Util;
                    for (e = 0; e < s; e++) n = t[e], o._isNumber(n) ? n = Math.round(1e3 * n) / 1e3 : o._isString(n) || (n = n.toString()), i.push(n);
                    return i
                },
                _getImage: function(t, e) {
                    var n, i;
                    if (t)
                        if (this._isElement(t)) e(t);
                        else if (this._isString(t)) n = new r.window.Image, n.onload = function() {
                        e(n)
                    }, n.src = t;
                    else if (t.data) {
                        i = r.Util.createCanvasElement(), i.width = t.width, i.height = t.height;
                        var s = i.getContext("2d");
                        s.putImageData(t, 0, 0), this._getImage(i.toDataURL(), e)
                    } else e(null);
                    else e(null)
                },
                _getRGBAString: function(t) {
                    return ["rgba(", t.red || 0, ",", t.green || 0, ",", t.blue || 0, ",", t.alpha || 1, ")"].join("")
                },
                _rgbToHex: function(t, e, n) {
                    return ((1 << 24) + (t << 16) + (e << 8) + n).toString(16).slice(1)
                },
                _hexToRgb: function(t) {
                    t = t.replace("#", "");
                    var e = parseInt(t, 16);
                    return {
                        r: e >> 16 & 255,
                        g: e >> 8 & 255,
                        b: 255 & e
                    }
                },
                getRandomColor: function() {
                    for (var t = (16777215 * Math.random() << 0).toString(16); t.length < 6;) t = "0" + t;
                    return "#" + t
                },
                get: function(t, e) {
                    return void 0 === t ? e : t
                },
                getRGB: function(t) {
                    var e;
                    return t in i ? (e = i[t], {
                        r: e[0],
                        g: e[1],
                        b: e[2]
                    }) : "#" === t[0] ? this._hexToRgb(t.substring(1)) : "rgb(" === t.substr(0, 4) ? (e = s.exec(t.replace(/ /g, "")), {
                        r: parseInt(e[1], 10),
                        g: parseInt(e[2], 10),
                        b: parseInt(e[3], 10)
                    }) : {
                        r: 0,
                        g: 0,
                        b: 0
                    }
                },
                _merge: function(t, e) {
                    var n = this._clone(e);
                    for (var i in t) this._isObject(t[i]) ? n[i] = this._merge(t[i], n[i]) : n[i] = t[i];
                    return n
                },
                cloneObject: function(t) {
                    var e = {};
                    for (var n in t) this._isObject(t[n]) ? e[n] = this.cloneObject(t[n]) : this._isArray(t[n]) ? e[n] = this.cloneArray(t[n]) : e[n] = t[n];
                    return e
                },
                cloneArray: function(t) {
                    return t.slice(0)
                },
                _degToRad: function(e) {
                    return e * t
                },
                _radToDeg: function(t) {
                    return t * n
                },
                _capitalize: function(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1)
                },
                error: function(t) {
                    throw new Error("Kinetic error: " + t)
                },
                warn: function(t) {
                    r.root.console && console.warn && r.showWarnings && console.warn("Kinetic warning: " + t)
                },
                extend: function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    n.prototype = e.prototype;
                    var i = t.prototype;
                    t.prototype = new n;
                    for (var r in i) i.hasOwnProperty(r) && (t.prototype[r] = i[r]);
                    t.__super__ = e.prototype
                },
                addMethods: function(t, e) {
                    var n;
                    for (n in e) t.prototype[n] = e[n]
                },
                _getControlPoints: function(t, e, n, i, r, s, o) {
                    var a = Math.sqrt(Math.pow(n - t, 2) + Math.pow(i - e, 2)),
                        c = Math.sqrt(Math.pow(r - n, 2) + Math.pow(s - i, 2)),
                        l = o * a / (a + c),
                        u = o * c / (a + c);
                    return [n - l * (r - t), i - l * (s - e), n + u * (r - t), i + u * (s - e)]
                },
                _expandPoints: function(t, e) {
                    var n, i, s = t.length,
                        o = [];
                    for (n = 2; n < s - 2; n += 2) i = r.Util._getControlPoints(t[n - 2], t[n - 1], t[n], t[n + 1], t[n + 2], t[n + 3], e), o.push(i[0]), o.push(i[1]), o.push(t[n]), o.push(t[n + 1]), o.push(i[2]), o.push(i[3]);
                    return o
                },
                _removeLastLetter: function(t) {
                    return t.substring(0, t.length - 1)
                }
            }
        }(),
        function() {
            var t = r.Util.createCanvasElement(),
                e = t.getContext("2d"),
                n = r.UA.mobile ? function() {
                    return (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
                }() : 1;
            r.Canvas = function(t) {
                this.init(t)
            }, r.Canvas.prototype = {
                init: function(t) {
                    var e = t || {},
                        i = e.pixelRatio || r.pixelRatio || n;
                    this.pixelRatio = i, this._canvas = r.Util.createCanvasElement(), this._canvas.style.padding = 0, this._canvas.style.margin = 0, this._canvas.style.border = 0, this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = 0, this._canvas.style.left = 0
                },
                getContext: function() {
                    return this.context
                },
                getPixelRatio: function() {
                    return this.pixelRatio
                },
                setPixelRatio: function(t) {
                    this.pixelRatio = t, this.setSize(this.getWidth(), this.getHeight())
                },
                setWidth: function(t) {
                    this.width = this._canvas.width = t * this.pixelRatio, this._canvas.style.width = t + "px"
                },
                setHeight: function(t) {
                    this.height = this._canvas.height = t * this.pixelRatio, this._canvas.style.height = t + "px"
                },
                getWidth: function() {
                    return this.width
                },
                getHeight: function() {
                    return this.height
                },
                setSize: function(t, e) {
                    this.setWidth(t), this.setHeight(e)
                },
                toDataURL: function(t, e) {
                    try {
                        return this._canvas.toDataURL(t, e)
                    } catch (t) {
                        try {
                            return this._canvas.toDataURL()
                        } catch (t) {
                            return r.Util.warn("Unable to get data URL. " + t.message), ""
                        }
                    }
                }
            }, r.SceneCanvas = function(t) {
                var e = t || {},
                    n = e.width || 0,
                    i = e.height || 0;
                r.Canvas.call(this, e), this.context = new r.SceneContext(this), this.setSize(n, i)
            }, r.SceneCanvas.prototype = {
                setWidth: function(t) {
                    var e = this.pixelRatio,
                        n = this.getContext()._context;
                    r.Canvas.prototype.setWidth.call(this, t), n.scale(e, e)
                },
                setHeight: function(t) {
                    var e = this.pixelRatio,
                        n = this.getContext()._context;
                    r.Canvas.prototype.setHeight.call(this, t), n.scale(e, e)
                }
            }, r.Util.extend(r.SceneCanvas, r.Canvas), r.HitCanvas = function(t) {
                var e = t || {},
                    n = e.width || 0,
                    i = e.height || 0;
                r.Canvas.call(this, e), this.context = new r.HitContext(this), this.setSize(n, i), this.hitCanvas = !0
            }, r.Util.extend(r.HitCanvas, r.Canvas)
        }(),
        function() {
            var t = ["arc", "arcTo", "beginPath", "bezierCurveTo", "clearRect", "clip", "closePath", "createLinearGradient", "createPattern", "createRadialGradient", "drawImage", "fill", "fillText", "getImageData", "createImageData", "lineTo", "moveTo", "putImageData", "quadraticCurveTo", "rect", "restore", "rotate", "save", "scale", "setLineDash", "setTransform", "stroke", "strokeText", "transform", "translate"];
            r.Context = function(t) {
                this.init(t)
            }, r.Context.prototype = {
                init: function(t) {
                    this.canvas = t, this._context = t._canvas.getContext("2d"), r.enableTrace && (this.traceArr = [], this._enableTrace())
                },
                fillShape: function(t) {
                    t.getFillEnabled() && this._fill(t)
                },
                strokeShape: function(t) {
                    t.getStrokeEnabled() && this._stroke(t)
                },
                fillStrokeShape: function(t) {
                    t.getFillEnabled() && this._fill(t), t.getStrokeEnabled() && this._stroke(t)
                },
                getTrace: function(t) {
                    var e, n, i, s, o = this.traceArr,
                        a = o.length,
                        c = "";
                    for (e = 0; e < a; e++) n = o[e], i = n.method, i ? (s = n.args, c += i, t ? c += "()" : r.Util._isArray(s[0]) ? c += "([" + s.join(",") + "])" : c += "(" + s.join(",") + ")") : (c += n.property, t || (c += "=" + n.val)), c += ";";
                    return c
                },
                clearTrace: function() {
                    this.traceArr = []
                },
                _trace: function(t) {
                    var e, n = this.traceArr;
                    n.push(t), (e = n.length) >= r.traceArrMax && n.shift()
                },
                reset: function() {
                    var t = this.getCanvas().getPixelRatio();
                    this.setTransform(1 * t, 0, 0, 1 * t, 0, 0)
                },
                getCanvas: function() {
                    return this.canvas
                },
                clear: function(t) {
                    var e = this.getCanvas();
                    t ? this.clearRect(t.x || 0, t.y || 0, t.width || 0, t.height || 0) : this.clearRect(0, 0, e.getWidth(), e.getHeight())
                },
                _applyLineCap: function(t) {
                    var e = t.getLineCap();
                    e && this.setAttr("lineCap", e)
                },
                _applyOpacity: function(t) {
                    var e = t.getAbsoluteOpacity();
                    1 !== e && this.setAttr("globalAlpha", e)
                },
                _applyLineJoin: function(t) {
                    var e = t.getLineJoin();
                    e && this.setAttr("lineJoin", e)
                },
                setAttr: function(t, e) {
                    this._context[t] = e
                },
                arc: function() {
                    var t = arguments;
                    this._context.arc(t[0], t[1], t[2], t[3], t[4], t[5])
                },
                beginPath: function() {
                    this._context.beginPath()
                },
                bezierCurveTo: function() {
                    var t = arguments;
                    this._context.bezierCurveTo(t[0], t[1], t[2], t[3], t[4], t[5])
                },
                clearRect: function() {
                    var t = arguments;
                    this._context.clearRect(t[0], t[1], t[2], t[3])
                },
                clip: function() {
                    this._context.clip()
                },
                closePath: function() {
                    this._context.closePath()
                },
                createImageData: function() {
                    var t = arguments;
                    return 2 === t.length ? this._context.createImageData(t[0], t[1]) : 1 === t.length ? this._context.createImageData(t[0]) : void 0
                },
                createLinearGradient: function() {
                    var t = arguments;
                    return this._context.createLinearGradient(t[0], t[1], t[2], t[3])
                },
                createPattern: function() {
                    var t = arguments;
                    return this._context.createPattern(t[0], t[1])
                },
                createRadialGradient: function() {
                    var t = arguments;
                    return this._context.createRadialGradient(t[0], t[1], t[2], t[3], t[4], t[5])
                },
                drawImage: function() {
                    var t = arguments,
                        e = this._context;
                    3 === t.length ? e.drawImage(t[0], t[1], t[2]) : 5 === t.length ? e.drawImage(t[0], t[1], t[2], t[3], t[4]) : 9 === t.length && e.drawImage(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8])
                },
                fill: function() {
                    this._context.fill()
                },
                fillText: function() {
                    var t = arguments;
                    this._context.fillText(t[0], t[1], t[2])
                },
                getImageData: function() {
                    var t = arguments;
                    return this._context.getImageData(t[0], t[1], t[2], t[3])
                },
                lineTo: function() {
                    var t = arguments;
                    this._context.lineTo(t[0], t[1])
                },
                moveTo: function() {
                    var t = arguments;
                    this._context.moveTo(t[0], t[1])
                },
                rect: function() {
                    var t = arguments;
                    this._context.rect(t[0], t[1], t[2], t[3])
                },
                putImageData: function() {
                    var t = arguments;
                    this._context.putImageData(t[0], t[1], t[2])
                },
                quadraticCurveTo: function() {
                    var t = arguments;
                    this._context.quadraticCurveTo(t[0], t[1], t[2], t[3])
                },
                restore: function() {
                    this._context.restore()
                },
                rotate: function() {
                    var t = arguments;
                    this._context.rotate(t[0])
                },
                save: function() {
                    this._context.save()
                },
                scale: function() {
                    var t = arguments;
                    this._context.scale(t[0], t[1])
                },
                setLineDash: function() {
                    var t = arguments,
                        e = this._context;
                    this._context.setLineDash ? e.setLineDash(t[0]) : "mozDash" in e ? e.mozDash = t[0] : "webkitLineDash" in e && (e.webkitLineDash = t[0])
                },
                setTransform: function() {
                    var t = arguments;
                    this._context.setTransform(t[0], t[1], t[2], t[3], t[4], t[5])
                },
                stroke: function() {
                    this._context.stroke()
                },
                strokeText: function() {
                    var t = arguments;
                    this._context.strokeText(t[0], t[1], t[2])
                },
                transform: function() {
                    var t = arguments;
                    this._context.transform(t[0], t[1], t[2], t[3], t[4], t[5])
                },
                translate: function() {
                    var t = arguments;
                    this._context.translate(t[0], t[1])
                },
                _enableTrace: function() {
                    var e, n, i = this,
                        s = t.length,
                        o = r.Util._simplifyArray,
                        a = this.setAttr;
                    for (e = 0; e < s; e++) ! function(t) {
                        var e, r = i[t];
                        i[t] = function() {
                            return n = o(Array.prototype.slice.call(arguments, 0)), e = r.apply(i, arguments), i._trace({
                                method: t,
                                args: n
                            }), e
                        }
                    }(t[e]);
                    i.setAttr = function() {
                        a.apply(i, arguments), i._trace({
                            property: arguments[0],
                            val: arguments[1]
                        })
                    }
                }
            }, r.SceneContext = function(t) {
                r.Context.call(this, t)
            }, r.SceneContext.prototype = {
                _fillColor: function(t) {
                    var e = t.fill() || r.Util._getRGBAString({
                        red: t.fillRed(),
                        green: t.fillGreen(),
                        blue: t.fillBlue(),
                        alpha: t.fillAlpha()
                    });
                    this.setAttr("fillStyle", e), t._fillFunc(this)
                },
                _fillPattern: function(t) {
                    var e = t.getFillPatternImage(),
                        n = t.getFillPatternX(),
                        i = t.getFillPatternY(),
                        s = t.getFillPatternScale(),
                        o = r.getAngle(t.getFillPatternRotation()),
                        a = t.getFillPatternOffset(),
                        c = t.getFillPatternRepeat();
                    (n || i) && this.translate(n || 0, i || 0), o && this.rotate(o), s && this.scale(s.x, s.y), a && this.translate(-1 * a.x, -1 * a.y), this.setAttr("fillStyle", this.createPattern(e, c || "repeat")), this.fill()
                },
                _fillLinearGradient: function(t) {
                    var e = t.getFillLinearGradientStartPoint(),
                        n = t.getFillLinearGradientEndPoint(),
                        i = t.getFillLinearGradientColorStops(),
                        r = this.createLinearGradient(e.x, e.y, n.x, n.y);
                    if (i) {
                        for (var s = 0; s < i.length; s += 2) r.addColorStop(i[s], i[s + 1]);
                        this.setAttr("fillStyle", r), this.fill()
                    }
                },
                _fillRadialGradient: function(t) {
                    for (var e = t.getFillRadialGradientStartPoint(), n = t.getFillRadialGradientEndPoint(), i = t.getFillRadialGradientStartRadius(), r = t.getFillRadialGradientEndRadius(), s = t.getFillRadialGradientColorStops(), o = this.createRadialGradient(e.x, e.y, i, n.x, n.y, r), a = 0; a < s.length; a += 2) o.addColorStop(s[a], s[a + 1]);
                    this.setAttr("fillStyle", o), this.fill()
                },
                _fill: function(t) {
                    var e = t.fill() || t.fillRed() || t.fillGreen() || t.fillBlue(),
                        n = t.getFillPatternImage(),
                        i = t.getFillLinearGradientColorStops(),
                        r = t.getFillRadialGradientColorStops(),
                        s = t.getFillPriority();
                    e && "color" === s ? this._fillColor(t) : n && "pattern" === s ? this._fillPattern(t) : i && "linear-gradient" === s ? this._fillLinearGradient(t) : r && "radial-gradient" === s ? this._fillRadialGradient(t) : e ? this._fillColor(t) : n ? this._fillPattern(t) : i ? this._fillLinearGradient(t) : r && this._fillRadialGradient(t)
                },
                _stroke: function(t) {
                    var e = t.dash(),
                        n = t.getStrokeScaleEnabled();
                    t.hasStroke() && (n || (this.save(), this.setTransform(1, 0, 0, 1, 0, 0)), this._applyLineCap(t), e && t.dashEnabled() && this.setLineDash(e), this.setAttr("lineWidth", t.strokeWidth()), this.setAttr("strokeStyle", t.stroke() || r.Util._getRGBAString({
                        red: t.strokeRed(),
                        green: t.strokeGreen(),
                        blue: t.strokeBlue(),
                        alpha: t.strokeAlpha()
                    })), t._strokeFunc(this), n || this.restore())
                },
                _applyShadow: function(t) {
                    var e = r.Util,
                        n = t.getAbsoluteOpacity(),
                        i = e.get(t.getShadowColor(), "black"),
                        s = e.get(t.getShadowBlur(), 5),
                        o = e.get(t.getShadowOpacity(), 1),
                        a = e.get(t.getShadowOffset(), {
                            x: 0,
                            y: 0
                        });
                    o && this.setAttr("globalAlpha", o * n), this.setAttr("shadowColor", i), this.setAttr("shadowBlur", s), this.setAttr("shadowOffsetX", a.x), this.setAttr("shadowOffsetY", a.y)
                }
            }, r.Util.extend(r.SceneContext, r.Context), r.HitContext = function(t) {
                r.Context.call(this, t)
            }, r.HitContext.prototype = {
                _fill: function(t) {
                    this.save(), this.setAttr("fillStyle", t.colorKey), t._fillFuncHit(this), this.restore()
                },
                _stroke: function(t) {
                    t.hasStroke() && (this._applyLineCap(t), this.setAttr("lineWidth", t.strokeWidth()), this.setAttr("strokeStyle", t.colorKey), t._strokeFuncHit(this))
                }
            }, r.Util.extend(r.HitContext, r.Context)
        }(),
        function() {
            r.Factory = {
                addGetterSetter: function(t, e, n, i, r) {
                    this.addGetter(t, e, n), this.addSetter(t, e, i, r), this.addOverloadedGetterSetter(t, e)
                },
                addGetter: function(t, e, n) {
                    var i = "get" + r.Util._capitalize(e);
                    t.prototype[i] = function() {
                        var t = this.attrs[e];
                        return void 0 === t ? n : t
                    }
                },
                addSetter: function(t, e, n, i) {
                    var s = "set" + r.Util._capitalize(e);
                    t.prototype[s] = function(t) {
                        return n && (t = n.call(this, t)), this._setAttr(e, t), i && i.call(this), this
                    }
                },
                addComponentsGetterSetter: function(t, e, n, i, s) {
                    var o, a, c = n.length,
                        l = r.Util._capitalize,
                        u = "get" + l(e),
                        h = "set" + l(e);
                    t.prototype[u] = function() {
                        var t = {};
                        for (o = 0; o < c; o++) a = n[o], t[a] = this.getAttr(e + l(a));
                        return t
                    }, t.prototype[h] = function(t) {
                        var n, r = this.attrs[e];
                        i && (t = i.call(this, t));
                        for (n in t) this._setAttr(e + l(n), t[n]);
                        return this._fireChangeEvent(e, r, t), s && s.call(this), this
                    }, this.addOverloadedGetterSetter(t, e)
                },
                addOverloadedGetterSetter: function(t, e) {
                    var n = r.Util._capitalize(e),
                        i = "set" + n,
                        s = "get" + n;
                    t.prototype[e] = function() {
                        return arguments.length ? (this[i](arguments[0]), this) : this[s]()
                    }
                },
                backCompat: function(t, e) {
                    var n;
                    for (n in e) t.prototype[n] = t.prototype[e[n]]
                },
                afterSetFilter: function() {
                    this._filterUpToDate = !1
                }
            }, r.Validators = {
                RGBComponent: function(t) {
                    return t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
                },
                alphaComponent: function(t) {
                    return t > 1 ? 1 : t < 1e-4 ? 1e-4 : t
                }
            }
        }(),
        function() {
            var t = "Shape",
                e = ["id"],
                n = ["xChange.kinetic", "yChange.kinetic", "scaleXChange.kinetic", "scaleYChange.kinetic", "skewXChange.kinetic", "skewYChange.kinetic", "rotationChange.kinetic", "offsetXChange.kinetic", "offsetYChange.kinetic", "transformsEnabledChange.kinetic"].join(" ");
            r.Util.addMethods(r.Node, {
                _init: function(t) {
                    var e = this;
                    this._id = r.idCounter++, this.eventListeners = {}, this.attrs = {}, this._cache = {}, this._filterUpToDate = !1, this.setAttrs(t), this.on(n, function() {
                        this._clearCache("transform"), e._clearSelfAndDescendantCache("absoluteTransform")
                    }), this.on("visibleChange.kinetic", function() {
                        e._clearSelfAndDescendantCache("visible")
                    }), this.on("listeningChange.kinetic", function() {
                        e._clearSelfAndDescendantCache("listening")
                    }), this.on("opacityChange.kinetic", function() {
                        e._clearSelfAndDescendantCache("absoluteOpacity")
                    })
                },
                _clearCache: function(t) {
                    t ? delete this._cache[t] : this._cache = {}
                },
                _getCache: function(t, e) {
                    return void 0 === this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t]
                },
                _clearSelfAndDescendantCache: function(t) {
                    this._clearCache(t), this.children && this.getChildren().each(function(e) {
                        e._clearSelfAndDescendantCache(t)
                    })
                },
                clearCache: function() {
                    return delete this._cache.canvas, this._filterUpToDate = !1, this
                },
                cache: function(t) {
                    var e = t || {},
                        n = e.x || 0,
                        i = e.y || 0,
                        s = e.width || this.width(),
                        o = e.height || this.height(),
                        a = e.drawBorder || !1;
                    if (0 === s || 0 === o) return void r.Util.warn("Width or height of caching configuration equals 0. Cache is ignored.");
                    var c = new r.SceneCanvas({
                            pixelRatio: 1,
                            width: s,
                            height: o
                        }),
                        l = new r.SceneCanvas({
                            pixelRatio: 1,
                            width: s,
                            height: o
                        }),
                        u = new r.HitCanvas({
                            width: s,
                            height: o
                        }),
                        h = c.getContext(),
                        f = u.getContext();
                    return u.isCache = !0, this.clearCache(), h.save(), f.save(), a && (h.save(), h.beginPath(), h.rect(0, 0, s, o), h.closePath(), h.setAttr("strokeStyle", "red"), h.setAttr("lineWidth", 5), h.stroke(), h.restore()), h.translate(-1 * n, -1 * i), f.translate(-1 * n, -1 * i), "Shape" === this.nodeType && (h.translate(-1 * this.x(), -1 * this.y()), f.translate(-1 * this.x(), -1 * this.y())), this.drawScene(c, this), this.drawHit(u, this), h.restore(), f.restore(), this._cache.canvas = {
                        scene: c,
                        filter: l,
                        hit: u
                    }, this
                },
                _drawCachedSceneCanvas: function(t) {
                    t.save(), this.getLayer()._applyTransform(this, t), t._applyOpacity(this), t.drawImage(this._getCachedSceneCanvas()._canvas, 0, 0), t.restore()
                },
                _getCachedSceneCanvas: function() {
                    var t, e, n, i, s = this.filters(),
                        o = this._cache.canvas,
                        a = o.scene,
                        c = o.filter,
                        l = c.getContext();
                    if (s) {
                        if (!this._filterUpToDate) {
                            try {
                                for (t = s.length, l.clear(), l.drawImage(a._canvas, 0, 0), e = l.getImageData(0, 0, c.getWidth(), c.getHeight()), n = 0; n < t; n++) i = s[n], i.call(this, e), l.putImageData(e, 0, 0)
                            } catch (t) {
                                r.Util.warn("Unable to apply filter. " + t.message)
                            }
                            this._filterUpToDate = !0
                        }
                        return c
                    }
                    return a
                },
                _drawCachedHitCanvas: function(t) {
                    var e = this._cache.canvas,
                        n = e.hit;
                    t.save(), this.getLayer()._applyTransform(this, t), t.drawImage(n._canvas, 0, 0), t.restore()
                },
                on: function(t, e) {
                    var n, i, r, s, o, a = t.split(" "),
                        c = a.length;
                    for (n = 0; n < c; n++) i = a[n], r = i.split("."), s = r[0], o = r[1] || "", this.eventListeners[s] || (this.eventListeners[s] = []), this.eventListeners[s].push({
                        name: o,
                        handler: e
                    });
                    return this
                },
                off: function(t) {
                    var e, n, i, r, s, o, a = (t || "").split(" "),
                        c = a.length;
                    if (!t)
                        for (n in this.eventListeners) this._off(n);
                    for (e = 0; e < c; e++)
                        if (i = a[e], r = i.split("."), s = r[0], o = r[1], s) this.eventListeners[s] && this._off(s, o);
                        else
                            for (n in this.eventListeners) this._off(n, o);
                    return this
                },
                dispatchEvent: function(t) {
                    var e = {
                        target: this,
                        type: t.type,
                        evt: t
                    };
                    this.fire(t.type, e)
                },
                addEventListener: function(t, e) {
                    this.on(t, function(t) {
                        e.call(this, t.evt)
                    })
                },
                removeEventListener: function(t) {
                    this.off(t)
                },
                remove: function() {
                    var t = this.getParent();
                    return t && t.children && (t.children.splice(this.index, 1), t._setChildrenIndices(), delete this.parent), this._clearSelfAndDescendantCache("stage"), this._clearSelfAndDescendantCache("absoluteTransform"), this._clearSelfAndDescendantCache("visible"), this._clearSelfAndDescendantCache("listening"), this._clearSelfAndDescendantCache("absoluteOpacity"), this
                },
                destroy: function() {
                    r._removeId(this.getId()), r._removeName(this.getName(), this._id), this.remove()
                },
                getAttr: function(t) {
                    var e = "get" + r.Util._capitalize(t);
                    return r.Util._isFunction(this[e]) ? this[e]() : this.attrs[t]
                },
                getAncestors: function() {
                    for (var t = this.getParent(), e = new r.Collection; t;) e.push(t), t = t.getParent();
                    return e
                },
                getAttrs: function() {
                    return this.attrs || {}
                },
                setAttrs: function(t) {
                    var e, n;
                    if (t)
                        for (e in t) "children" === e || t[e] instanceof r.Node || (n = "set" + r.Util._capitalize(e), r.Util._isFunction(this[n]) ? this[n](t[e]) : this._setAttr(e, t[e]));
                    return this
                },
                isListening: function() {
                    return this._getCache("listening", this._isListening)
                },
                _isListening: function() {
                    var t = this.getListening(),
                        e = this.getParent();
                    return "inherit" === t ? !e || e.isListening() : t
                },
                isVisible: function() {
                    return this._getCache("visible", this._isVisible)
                },
                _isVisible: function() {
                    var t = this.getVisible(),
                        e = this.getParent();
                    return "inherit" === t ? !e || e.isVisible() : t
                },
                shouldDrawHit: function(t) {
                    var e = this.getLayer();
                    return t && t.isCache || e && e.hitGraphEnabled() && this.isListening() && this.isVisible()
                },
                show: function() {
                    return this.setVisible(!0), this
                },
                hide: function() {
                    return this.setVisible(!1), this
                },
                getZIndex: function() {
                    return this.index || 0
                },
                getAbsoluteZIndex: function() {
                    function e(l) {
                        for (n = [], i = l.length, r = 0; r < i; r++) s = l[r], c++, s.nodeType !== t && (n = n.concat(s.getChildren().toArray())), s._id === a._id && (r = i);
                        n.length > 0 && n[0].getDepth() <= o && e(n)
                    }
                    var n, i, r, s, o = this.getDepth(),
                        a = this,
                        c = 0;
                    return "Stage" !== a.nodeType && e(a.getStage().getChildren()), c
                },
                getDepth: function() {
                    for (var t = 0, e = this.parent; e;) t++, e = e.parent;
                    return t
                },
                setPosition: function(t) {
                    return this.setX(t.x), this.setY(t.y), this
                },
                getPosition: function() {
                    return {
                        x: this.getX(),
                        y: this.getY()
                    }
                },
                getAbsolutePosition: function() {
                    var t = this.getAbsoluteTransform().getMatrix(),
                        e = new r.Transform,
                        n = this.offset();
                    return e.m = t.slice(), e.translate(n.x, n.y), e.getTranslation()
                },
                setAbsolutePosition: function(t) {
                    var e, n = this._clearTransform();
                    return this.attrs.x = n.x, this.attrs.y = n.y, delete n.x, delete n.y, e = this.getAbsoluteTransform(), e.invert(), e.translate(t.x, t.y), t = {
                        x: this.attrs.x + e.getTranslation().x,
                        y: this.attrs.y + e.getTranslation().y
                    }, this.setPosition({
                        x: t.x,
                        y: t.y
                    }), this._setTransform(n), this
                },
                _setTransform: function(t) {
                    var e;
                    for (e in t) this.attrs[e] = t[e];
                    this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform")
                },
                _clearTransform: function() {
                    var t = {
                        x: this.getX(),
                        y: this.getY(),
                        rotation: this.getRotation(),
                        scaleX: this.getScaleX(),
                        scaleY: this.getScaleY(),
                        offsetX: this.getOffsetX(),
                        offsetY: this.getOffsetY(),
                        skewX: this.getSkewX(),
                        skewY: this.getSkewY()
                    };
                    return this.attrs.x = 0, this.attrs.y = 0, this.attrs.rotation = 0, this.attrs.scaleX = 1, this.attrs.scaleY = 1, this.attrs.offsetX = 0, this.attrs.offsetY = 0, this.attrs.skewX = 0, this.attrs.skewY = 0, this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform"), t
                },
                move: function(t) {
                    var e = t.x,
                        n = t.y,
                        i = this.getX(),
                        r = this.getY();
                    return void 0 !== e && (i += e), void 0 !== n && (r += n), this.setPosition({
                        x: i,
                        y: r
                    }), this
                },
                _eachAncestorReverse: function(t, e) {
                    var n, i, r = [],
                        s = this.getParent();
                    if (e && e._id === this._id) return t(this), !0;
                    for (r.unshift(this); s && (!e || s._id !== e._id);) r.unshift(s), s = s.parent;
                    for (n = r.length, i = 0; i < n; i++) t(r[i])
                },
                rotate: function(t) {
                    return this.setRotation(this.getRotation() + t), this
                },
                moveToTop: function() {
                    if (!this.parent) return void r.Util.warn("Node has no parent. moveToTop function is ignored.");
                    var t = this.index;
                    return this.parent.children.splice(t, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0
                },
                moveUp: function() {
                    if (!this.parent) return void r.Util.warn("Node has no parent. moveUp function is ignored.");
                    var t = this.index;
                    return t < this.parent.getChildren().length - 1 && (this.parent.children.splice(t, 1), this.parent.children.splice(t + 1, 0, this), this.parent._setChildrenIndices(), !0)
                },
                moveDown: function() {
                    if (!this.parent) return void r.Util.warn("Node has no parent. moveDown function is ignored.");
                    var t = this.index;
                    return t > 0 && (this.parent.children.splice(t, 1), this.parent.children.splice(t - 1, 0, this), this.parent._setChildrenIndices(), !0)
                },
                moveToBottom: function() {
                    if (!this.parent) return void r.Util.warn("Node has no parent. moveToBottom function is ignored.");
                    var t = this.index;
                    return t > 0 && (this.parent.children.splice(t, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0)
                },
                setZIndex: function(t) {
                    if (!this.parent) return void r.Util.warn("Node has no parent. zIndex parameter is ignored.");
                    var e = this.index;
                    return this.parent.children.splice(e, 1), this.parent.children.splice(t, 0, this), this.parent._setChildrenIndices(), this
                },
                getAbsoluteOpacity: function() {
                    return this._getCache("absoluteOpacity", this._getAbsoluteOpacity)
                },
                _getAbsoluteOpacity: function() {
                    var t = this.getOpacity();
                    return this.getParent() && (t *= this.getParent().getAbsoluteOpacity()), t
                },
                moveTo: function(t) {
                    return this.getParent() !== t && (this.remove(), t.add(this)), this
                },
                toObject: function() {
                    var t, e, n, i, s = r.Util,
                        o = {},
                        a = this.getAttrs();
                    o.attrs = {};
                    for (t in a) e = a[t], s._isFunction(e) || s._isElement(e) || s._isObject(e) && s._hasMethods(e) || (n = this[t], delete a[t], i = n ? n.call(this) : null, a[t] = e, i !== e && (o.attrs[t] = e));
                    return o.className = this.getClassName(), o
                },
                toJSON: function() {
                    return JSON.stringify(this.toObject())
                },
                getParent: function() {
                    return this.parent
                },
                getLayer: function() {
                    var t = this.getParent();
                    return t ? t.getLayer() : null
                },
                getStage: function() {
                    return this._getCache("stage", this._getStage)
                },
                _getStage: function() {
                    var t = this.getParent();
                    return t ? t.getStage() : void 0
                },
                fire: function(t, e, n) {
                    return n ? this._fireAndBubble(t, e || {}) : this._fire(t, e || {}), this
                },
                getAbsoluteTransform: function(t) {
                    return t ? this._getAbsoluteTransform(t) : this._getCache("absoluteTransform", this._getAbsoluteTransform)
                },
                _getAbsoluteTransform: function(t) {
                    var e, n, i = new r.Transform;
                    return this._eachAncestorReverse(function(t) {
                        e = t.transformsEnabled(), n = t.getTransform(), "all" === e ? i.multiply(n) : "position" === e && i.translate(t.x(), t.y())
                    }, t), i
                },
                getTransform: function() {
                    return this._getCache("transform", this._getTransform)
                },
                _getTransform: function() {
                    var t = new r.Transform,
                        e = this.getX(),
                        n = this.getY(),
                        i = r.getAngle(this.getRotation()),
                        s = this.getScaleX(),
                        o = this.getScaleY(),
                        a = this.getSkewX(),
                        c = this.getSkewY(),
                        l = this.getOffsetX(),
                        u = this.getOffsetY();
                    return 0 === e && 0 === n || t.translate(e, n), 0 !== i && t.rotate(i), 0 === a && 0 === c || t.skew(a, c), 1 === s && 1 === o || t.scale(s, o), 0 === l && 0 === u || t.translate(-1 * l, -1 * u), t
                },
                clone: function(t) {
                    var n, i, s, o, a, c = this.getClassName(),
                        l = r.Util.cloneObject(this.attrs);
                    for (var u in e) {
                        delete l[e[u]]
                    }
                    for (n in t) l[n] = t[n];
                    var h = new r[c](l);
                    for (n in this.eventListeners)
                        for (i = this.eventListeners[n], s = i.length, o = 0; o < s; o++) a = i[o], a.name.indexOf("kinetic") < 0 && (h.eventListeners[n] || (h.eventListeners[n] = []), h.eventListeners[n].push(a));
                    return h
                },
                toDataURL: function(t) {
                    t = t || {};
                    var e = t.mimeType || null,
                        n = t.quality || null,
                        i = this.getStage(),
                        s = t.x || 0,
                        o = t.y || 0,
                        a = new r.SceneCanvas({
                            width: t.width || this.getWidth() || (i ? i.getWidth() : 0),
                            height: t.height || this.getHeight() || (i ? i.getHeight() : 0),
                            pixelRatio: 1
                        }),
                        c = a.getContext();
                    return c.save(), (s || o) && c.translate(-1 * s, -1 * o), this.drawScene(a), c.restore(), a.toDataURL(e, n)
                },
                toImage: function(t) {
                    r.Util._getImage(this.toDataURL(t), function(e) {
                        t.callback(e)
                    })
                },
                setSize: function(t) {
                    return this.setWidth(t.width), this.setHeight(t.height), this
                },
                getSize: function() {
                    return {
                        width: this.getWidth(),
                        height: this.getHeight()
                    }
                },
                getWidth: function() {
                    return this.attrs.width || 0
                },
                getHeight: function() {
                    return this.attrs.height || 0
                },
                getClassName: function() {
                    return this.className || this.nodeType
                },
                getType: function() {
                    return this.nodeType
                },
                getDragDistance: function() {
                    return void 0 !== this.attrs.dragDistance ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : r.dragDistance
                },
                _get: function(t) {
                    return this.className === t || this.nodeType === t ? [this] : []
                },
                _off: function(t, e) {
                    var n, i, r = this.eventListeners[t];
                    for (n = 0; n < r.length; n++)
                        if (!("kinetic" === (i = r[n].name) && "kinetic" !== e || e && i !== e)) {
                            if (r.splice(n, 1), 0 === r.length) {
                                delete this.eventListeners[t];
                                break
                            }
                            n--
                        }
                },
                _fireChangeEvent: function(t, e, n) {
                    this._fire(t + "Change", {
                        oldVal: e,
                        newVal: n
                    })
                },
                setId: function(t) {
                    var e = this.getId();
                    return r._removeId(e), r._addId(this, t), this._setAttr("id", t), this
                },
                setName: function(t) {
                    var e = this.getName();
                    return r._removeName(e, this._id), r._addName(this, t), this._setAttr("name", t), this
                },
                setAttr: function(t, e) {
                    var n = "set" + r.Util._capitalize(t),
                        i = this[n];
                    return r.Util._isFunction(i) ? i.call(this, e) : this._setAttr(t, e), this
                },
                _setAttr: function(t, e) {
                    var n;
                    void 0 !== e && (n = this.attrs[t], this.attrs[t] = e, this._fireChangeEvent(t, n, e))
                },
                _setComponentAttr: function(t, e, n) {
                    var i;
                    void 0 !== n && (i = this.attrs[t], i || (this.attrs[t] = this.getAttr(t)), this.attrs[t][e] = n, this._fireChangeEvent(t, i, n))
                },
                _fireAndBubble: function(e, n, i) {
                    var r = !0;
                    if (n && this.nodeType === t && (n.target = this), "mouseenter" === e && i && (this._id === i._id || this.isAncestorOf && this.isAncestorOf(i)) ? r = !1 : "mouseleave" === e && i && (this._id === i._id || this.isAncestorOf && this.isAncestorOf(i)) && (r = !1), r) {
                        this._fire(e, n);
                        var s = ("mouseenter" === e || "mouseleave" === e) && (i && i.isAncestorOf && i.isAncestorOf(this) || !(!i || !i.isAncestorOf));
                        n && !n.cancelBubble && this.parent && this.parent.isListening() && !s && (i && i.parent ? this._fireAndBubble.call(this.parent, e, n, i.parent) : this._fireAndBubble.call(this.parent, e, n))
                    }
                },
                _fire: function(t, e) {
                    var n, i = this.eventListeners[t];
                    if (e.type = t, i)
                        for (n = 0; n < i.length; n++) i[n].handler.call(this, e)
                },
                draw: function() {
                    return this.drawScene(), this.drawHit(), this
                }
            }), r.Node.create = function(t, e) {
                return this._createNode(JSON.parse(t), e)
            }, r.Node._createNode = function(t, e) {
                var n, i, s, o = r.Node.prototype.getClassName.call(t),
                    a = t.children;
                if (e && (t.attrs.container = e), n = new r[o](t.attrs), a)
                    for (i = a.length, s = 0; s < i; s++) n.add(this._createNode(a[s]));
                return n
            }, r.Factory.addOverloadedGetterSetter(r.Node, "position"), r.Factory.addGetterSetter(r.Node, "x", 0), r.Factory.addGetterSetter(r.Node, "y", 0), r.Factory.addGetterSetter(r.Node, "opacity", 1), r.Factory.addGetter(r.Node, "name"), r.Factory.addOverloadedGetterSetter(r.Node, "name"), r.Factory.addGetter(r.Node, "id"), r.Factory.addOverloadedGetterSetter(r.Node, "id"), r.Factory.addGetterSetter(r.Node, "rotation", 0), r.Factory.addComponentsGetterSetter(r.Node, "scale", ["x", "y"]), r.Factory.addGetterSetter(r.Node, "scaleX", 1), r.Factory.addGetterSetter(r.Node, "scaleY", 1), r.Factory.addComponentsGetterSetter(r.Node, "skew", ["x", "y"]), r.Factory.addGetterSetter(r.Node, "skewX", 0), r.Factory.addGetterSetter(r.Node, "skewY", 0), r.Factory.addComponentsGetterSetter(r.Node, "offset", ["x", "y"]), r.Factory.addGetterSetter(r.Node, "offsetX", 0), r.Factory.addGetterSetter(r.Node, "offsetY", 0), r.Factory.addSetter(r.Node, "dragDistance"), r.Factory.addOverloadedGetterSetter(r.Node, "dragDistance"), r.Factory.addSetter(r.Node, "width", 0), r.Factory.addOverloadedGetterSetter(r.Node, "width"), r.Factory.addSetter(r.Node, "height", 0), r.Factory.addOverloadedGetterSetter(r.Node, "height"), r.Factory.addGetterSetter(r.Node, "listening", "inherit"), r.Factory.addGetterSetter(r.Node, "filters", void 0, function(t) {
                return this._filterUpToDate = !1, t
            }), r.Factory.addGetterSetter(r.Node, "visible", "inherit"), r.Factory.addGetterSetter(r.Node, "transformsEnabled", "all"), r.Factory.addOverloadedGetterSetter(r.Node, "size"), r.Factory.backCompat(r.Node, {
                rotateDeg: "rotate",
                setRotationDeg: "setRotation",
                getRotationDeg: "getRotation"
            }), r.Collection.mapMethods(r.Node)
        }(),
        function() {
            r.Filters.Grayscale = function(t) {
                var e, n, i = t.data,
                    r = i.length;
                for (e = 0; e < r; e += 4) n = .34 * i[e] + .5 * i[e + 1] + .16 * i[e + 2], i[e] = n, i[e + 1] = n, i[e + 2] = n
            }
        }(),
        function() {
            r.Filters.Brighten = function(t) {
                var e, n = 255 * this.brightness(),
                    i = t.data,
                    r = i.length;
                for (e = 0; e < r; e += 4) i[e] += n, i[e + 1] += n, i[e + 2] += n
            }, r.Factory.addGetterSetter(r.Node, "brightness", 0, null, r.Factory.afterSetFilter)
        }(),
        function() {
            r.Filters.Invert = function(t) {
                var e, n = t.data,
                    i = n.length;
                for (e = 0; e < i; e += 4) n[e] = 255 - n[e], n[e + 1] = 255 - n[e + 1], n[e + 2] = 255 - n[e + 2]
            }
        }(),
        function() {
            function t() {
                this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null
            }

            function e(e, r) {
                var s, o, a, c, l, u, h, f, d, p, g, m, v, y, b, _, w, x, C, S, T, P, k, F, $ = e.data,
                    A = e.width,
                    D = e.height,
                    I = r + r + 1,
                    N = A - 1,
                    E = D - 1,
                    O = r + 1,
                    M = O * (O + 1) / 2,
                    L = new t,
                    R = null,
                    j = L,
                    H = null,
                    G = null,
                    B = n[r],
                    z = i[r];
                for (a = 1; a < I; a++) j = j.next = new t, a == O && (R = j);
                for (j.next = L, h = u = 0, o = 0; o < D; o++) {
                    for (_ = w = x = C = f = d = p = g = 0, m = O * (S = $[u]), v = O * (T = $[u + 1]), y = O * (P = $[u + 2]), b = O * (k = $[u + 3]), f += M * S, d += M * T, p += M * P, g += M * k, j = L, a = 0; a < O; a++) j.r = S, j.g = T, j.b = P, j.a = k, j = j.next;
                    for (a = 1; a < O; a++) c = u + ((N < a ? N : a) << 2), f += (j.r = S = $[c]) * (F = O - a), d += (j.g = T = $[c + 1]) * F, p += (j.b = P = $[c + 2]) * F, g += (j.a = k = $[c + 3]) * F, _ += S, w += T, x += P, C += k, j = j.next;
                    for (H = L, G = R, s = 0; s < A; s++) $[u + 3] = k = g * B >> z, 0 !== k ? (k = 255 / k, $[u] = (f * B >> z) * k, $[u + 1] = (d * B >> z) * k, $[u + 2] = (p * B >> z) * k) : $[u] = $[u + 1] = $[u + 2] = 0, f -= m, d -= v, p -= y, g -= b, m -= H.r, v -= H.g, y -= H.b, b -= H.a, c = h + ((c = s + r + 1) < N ? c : N) << 2, _ += H.r = $[c], w += H.g = $[c + 1], x += H.b = $[c + 2], C += H.a = $[c + 3], f += _, d += w, p += x, g += C, H = H.next, m += S = G.r, v += T = G.g, y += P = G.b, b += k = G.a, _ -= S, w -= T, x -= P, C -= k, G = G.next, u += 4;
                    h += A
                }
                for (s = 0; s < A; s++) {
                    for (w = x = C = _ = d = p = g = f = 0, u = s << 2, m = O * (S = $[u]), v = O * (T = $[u + 1]), y = O * (P = $[u + 2]), b = O * (k = $[u + 3]), f += M * S, d += M * T, p += M * P, g += M * k, j = L, a = 0; a < O; a++) j.r = S, j.g = T, j.b = P, j.a = k, j = j.next;
                    for (l = A, a = 1; a <= r; a++) u = l + s << 2, f += (j.r = S = $[u]) * (F = O - a), d += (j.g = T = $[u + 1]) * F, p += (j.b = P = $[u + 2]) * F, g += (j.a = k = $[u + 3]) * F, _ += S, w += T, x += P, C += k, j = j.next, a < E && (l += A);
                    for (u = s, H = L, G = R, o = 0; o < D; o++) c = u << 2, $[c + 3] = k = g * B >> z, k > 0 ? (k = 255 / k, $[c] = (f * B >> z) * k, $[c + 1] = (d * B >> z) * k, $[c + 2] = (p * B >> z) * k) : $[c] = $[c + 1] = $[c + 2] = 0, f -= m, d -= v, p -= y, g -= b, m -= H.r, v -= H.g, y -= H.b, b -= H.a, c = s + ((c = o + O) < E ? c : E) * A << 2, f += _ += H.r = $[c], d += w += H.g = $[c + 1], p += x += H.b = $[c + 2], g += C += H.a = $[c + 3], H = H.next, m += S = G.r, v += T = G.g, y += P = G.b, b += k = G.a, _ -= S, w -= T, x -= P, C -= k, G = G.next, u += A
                }
            }
            var n = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
                i = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
            r.Filters.Blur = function(t) {
                var n = Math.round(this.blurRadius());
                n > 0 && e(t, n)
            }, r.Factory.addGetterSetter(r.Node, "blurRadius", 0, null, r.Factory.afterSetFilter)
        }(),
        function() {
            function t(t, e, n) {
                var i = 4 * (n * t.width + e),
                    r = [];
                return r.push(t.data[i++], t.data[i++], t.data[i++], t.data[i++]), r
            }

            function e(t, e) {
                return Math.sqrt(Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2) + Math.pow(t[2] - e[2], 2))
            }

            function n(t) {
                for (var e = [0, 0, 0], n = 0; n < t.length; n++) e[0] += t[n][0], e[1] += t[n][1], e[2] += t[n][2];
                return e[0] /= t.length, e[1] /= t.length, e[2] /= t.length, e
            }

            function i(i, r) {
                var s = t(i, 0, 0),
                    o = t(i, i.width - 1, 0),
                    a = t(i, 0, i.height - 1),
                    c = t(i, i.width - 1, i.height - 1),
                    l = r || 10;
                if (e(s, o) < l && e(o, c) < l && e(c, a) < l && e(a, s) < l) {
                    for (var u = n([o, s, c, a]), h = [], f = 0; f < i.width * i.height; f++) {
                        var d = e(u, [i.data[4 * f], i.data[4 * f + 1], i.data[4 * f + 2]]);
                        h[f] = d < l ? 0 : 255
                    }
                    return h
                }
            }

            function s(t, e) {
                for (var n = 0; n < t.width * t.height; n++) t.data[4 * n + 3] = e[n]
            }

            function o(t, e, n) {
                for (var i = [1, 1, 1, 1, 0, 1, 1, 1, 1], r = Math.round(Math.sqrt(i.length)), s = Math.floor(r / 2), o = [], a = 0; a < n; a++)
                    for (var c = 0; c < e; c++) {
                        for (var l = a * e + c, u = 0, h = 0; h < r; h++)
                            for (var f = 0; f < r; f++) {
                                var d = a + h - s,
                                    p = c + f - s;
                                if (d >= 0 && d < n && p >= 0 && p < e) {
                                    var g = d * e + p,
                                        m = i[h * r + f];
                                    u += t[g] * m
                                }
                            }
                        o[l] = 2040 === u ? 255 : 0
                    }
                return o
            }

            function a(t, e, n) {
                for (var i = [1, 1, 1, 1, 1, 1, 1, 1, 1], r = Math.round(Math.sqrt(i.length)), s = Math.floor(r / 2), o = [], a = 0; a < n; a++)
                    for (var c = 0; c < e; c++) {
                        for (var l = a * e + c, u = 0, h = 0; h < r; h++)
                            for (var f = 0; f < r; f++) {
                                var d = a + h - s,
                                    p = c + f - s;
                                if (d >= 0 && d < n && p >= 0 && p < e) {
                                    var g = d * e + p,
                                        m = i[h * r + f];
                                    u += t[g] * m
                                }
                            }
                        o[l] = u >= 1020 ? 255 : 0
                    }
                return o
            }

            function c(t, e, n) {
                for (var i = [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9], r = Math.round(Math.sqrt(i.length)), s = Math.floor(r / 2), o = [], a = 0; a < n; a++)
                    for (var c = 0; c < e; c++) {
                        for (var l = a * e + c, u = 0, h = 0; h < r; h++)
                            for (var f = 0; f < r; f++) {
                                var d = a + h - s,
                                    p = c + f - s;
                                if (d >= 0 && d < n && p >= 0 && p < e) {
                                    var g = d * e + p,
                                        m = i[h * r + f];
                                    u += t[g] * m
                                }
                            }
                        o[l] = u
                    }
                return o
            }
            r.Filters.Mask = function(t) {
                var e = this.threshold(),
                    n = i(t, e);
                return n && (n = o(n, t.width, t.height), n = a(n, t.width, t.height), n = c(n, t.width, t.height), s(t, n)), t
            }, r.Factory.addGetterSetter(r.Node, "threshold", 0, null, r.Factory.afterSetFilter)
        }(),
        function() {
            r.Filters.RGB = function(t) {
                var e, n, i = t.data,
                    r = i.length,
                    s = this.red(),
                    o = this.green(),
                    a = this.blue();
                for (e = 0; e < r; e += 4) n = (.34 * i[e] + .5 * i[e + 1] + .16 * i[e + 2]) / 255, i[e] = n * s, i[e + 1] = n * o, i[e + 2] = n * a, i[e + 3] = i[e + 3]
            }, r.Factory.addGetterSetter(r.Node, "red", 0, function(t) {
                return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
            }), r.Factory.addGetterSetter(r.Node, "green", 0, function(t) {
                return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
            }), r.Factory.addGetterSetter(r.Node, "blue", 0, r.Validators.RGBComponent, r.Factory.afterSetFilter)
        }(),
        function() {
            r.Filters.HSV = function(t) {
                var e, n, i, r, s, o = t.data,
                    a = o.length,
                    c = Math.pow(2, this.value()),
                    l = Math.pow(2, this.saturation()),
                    u = Math.abs(this.hue() + 360) % 360,
                    h = c * l * Math.cos(u * Math.PI / 180),
                    f = c * l * Math.sin(u * Math.PI / 180),
                    d = .299 * c + .701 * h + .167 * f,
                    p = .587 * c - .587 * h + .33 * f,
                    g = .114 * c - .114 * h - .497 * f,
                    m = .299 * c - .299 * h - .328 * f,
                    v = .587 * c + .413 * h + .035 * f,
                    y = .114 * c - .114 * h + .293 * f,
                    b = .299 * c - .3 * h + 1.25 * f,
                    _ = .587 * c - .586 * h - 1.05 * f,
                    w = .114 * c + .886 * h - .2 * f;
                for (e = 0; e < a; e += 4) n = o[e + 0], i = o[e + 1], r = o[e + 2], s = o[e + 3], o[e + 0] = d * n + p * i + g * r, o[e + 1] = m * n + v * i + y * r, o[e + 2] = b * n + _ * i + w * r, o[e + 3] = s
            }, r.Factory.addGetterSetter(r.Node, "hue", 0, null, r.Factory.afterSetFilter), r.Factory.addGetterSetter(r.Node, "saturation", 0, null, r.Factory.afterSetFilter), r.Factory.addGetterSetter(r.Node, "value", 0, null, r.Factory.afterSetFilter)
        }(),
        function() {
            r.Factory.addGetterSetter(r.Node, "hue", 0, null, r.Factory.afterSetFilter), r.Factory.addGetterSetter(r.Node, "saturation", 0, null, r.Factory.afterSetFilter), r.Factory.addGetterSetter(r.Node, "luminance", 0, null, r.Factory.afterSetFilter), r.Filters.HSL = function(t) {
                var e, n, i, r, s, o = t.data,
                    a = o.length,
                    c = Math.pow(2, this.saturation()),
                    l = Math.abs(this.hue() + 360) % 360,
                    u = 127 * this.luminance(),
                    h = 1 * c * Math.cos(l * Math.PI / 180),
                    f = 1 * c * Math.sin(l * Math.PI / 180),
                    d = .299 + .701 * h + .167 * f,
                    p = .587 - .587 * h + .33 * f,
                    g = .114 - .114 * h - .497 * f,
                    m = .299 - .299 * h - .328 * f,
                    v = .587 + .413 * h + .035 * f,
                    y = .114 - .114 * h + .293 * f,
                    b = .299 - .3 * h + 1.25 * f,
                    _ = .587 - .586 * h - 1.05 * f,
                    w = .114 + .886 * h - .2 * f;
                for (e = 0; e < a; e += 4) n = o[e + 0], i = o[e + 1], r = o[e + 2], s = o[e + 3], o[e + 0] = d * n + p * i + g * r + u, o[e + 1] = m * n + v * i + y * r + u, o[e + 2] = b * n + _ * i + w * r + u, o[e + 3] = s
            }
        }(),
        function() {
            r.Filters.Emboss = function(t) {
                var e = 10 * this.embossStrength(),
                    n = 255 * this.embossWhiteLevel(),
                    i = this.embossDirection(),
                    r = this.embossBlend(),
                    s = 0,
                    o = 0,
                    a = t.data,
                    c = t.width,
                    l = t.height,
                    u = 4 * c,
                    h = l;
                switch (i) {
                    case "top-left":
                        s = -1, o = -1;
                        break;
                    case "top":
                        s = -1, o = 0;
                        break;
                    case "top-right":
                        s = -1, o = 1;
                        break;
                    case "right":
                        s = 0, o = 1;
                        break;
                    case "bottom-right":
                        s = 1, o = 1;
                        break;
                    case "bottom":
                        s = 1, o = 0;
                        break;
                    case "bottom-left":
                        s = 1, o = -1;
                        break;
                    case "left":
                        s = 0, o = -1
                }
                do {
                    var f = (h - 1) * u,
                        d = s;
                    h + d < 1 && (d = 0), h + d > l && (d = 0);
                    var p = (h - 1 + d) * c * 4,
                        g = c;
                    do {
                        var m = f + 4 * (g - 1),
                            v = o;
                        g + v < 1 && (v = 0), g + v > c && (v = 0);
                        var y = p + 4 * (g - 1 + v),
                            b = a[m] - a[y],
                            _ = a[m + 1] - a[y + 1],
                            w = a[m + 2] - a[y + 2],
                            x = b,
                            C = x > 0 ? x : -x,
                            S = _ > 0 ? _ : -_,
                            T = w > 0 ? w : -w;
                        if (S > C && (x = _), T > C && (x = w), x *= e, r) {
                            var P = a[m] + x,
                                k = a[m + 1] + x,
                                F = a[m + 2] + x;
                            a[m] = P > 255 ? 255 : P < 0 ? 0 : P, a[m + 1] = k > 255 ? 255 : k < 0 ? 0 : k, a[m + 2] = F > 255 ? 255 : F < 0 ? 0 : F
                        } else {
                            var $ = n - x;
                            $ < 0 ? $ = 0 : $ > 255 && ($ = 255), a[m] = a[m + 1] = a[m + 2] = $
                        }
                    } while (--g)
                } while (--h)
            }, r.Factory.addGetterSetter(r.Node, "embossStrength", .5, null, r.Factory.afterSetFilter), r.Factory.addGetterSetter(r.Node, "embossWhiteLevel", .5, null, r.Factory.afterSetFilter), r.Factory.addGetterSetter(r.Node, "embossDirection", "top-left", null, r.Factory.afterSetFilter), r.Factory.addGetterSetter(r.Node, "embossBlend", !1, null, r.Factory.afterSetFilter)
        }(),
        function() {
            function t(t, e, n, i, r) {
                var s, o = n - e,
                    a = r - i;
                return 0 === o ? i + a / 2 : 0 === a ? i : (s = (t - e) / o, s = a * s + i)
            }
            r.Filters.Enhance = function(e) {
                var n, i, r, s, o = e.data,
                    a = o.length,
                    c = o[0],
                    l = c,
                    u = o[1],
                    h = u,
                    f = o[2],
                    d = f,
                    p = this.enhance();
                if (0 !== p) {
                    for (s = 0; s < a; s += 4) n = o[s + 0], n < c ? c = n : n > l && (l = n), i = o[s + 1], i < u ? u = i : i > h && (h = i), r = o[s + 2], r < f ? f = r : r > d && (d = r);
                    l === c && (l = 255, c = 0), h === u && (h = 255, u = 0), d === f && (d = 255, f = 0);
                    var g, m, v, y, b, _, w, x, C;
                    for (p > 0 ? (m = l + p * (255 - l), v = c - p * (c - 0), b = h + p * (255 - h), _ = u - p * (u - 0), x = d + p * (255 - d), C = f - p * (f - 0)) : (g = .5 * (l + c), m = l + p * (l - g), v = c + p * (c - g), y = .5 * (h + u), b = h + p * (h - y), _ = u + p * (u - y), w = .5 * (d + f), x = d + p * (d - w), C = f + p * (f - w)), s = 0; s < a; s += 4) o[s + 0] = t(o[s + 0], c, l, v, m), o[s + 1] = t(o[s + 1], u, h, _, b), o[s + 2] = t(o[s + 2], f, d, C, x)
                }
            }, r.Factory.addGetterSetter(r.Node, "enhance", 0, null, r.Factory.afterSetFilter)
        }(),
        function() {
            r.Filters.Posterize = function(t) {
                var e, n = Math.round(254 * this.levels()) + 1,
                    i = t.data,
                    r = i.length,
                    s = 255 / n;
                for (e = 0; e < r; e += 1) i[e] = Math.floor(i[e] / s) * s
            }, r.Factory.addGetterSetter(r.Node, "levels", .5, null, r.Factory.afterSetFilter)
        }(),
        function() {
            r.Filters.Noise = function(t) {
                var e, n = 255 * this.noise(),
                    i = t.data,
                    r = i.length,
                    s = n / 2;
                for (e = 0; e < r; e += 4) i[e + 0] += s - 2 * s * Math.random(), i[e + 1] += s - 2 * s * Math.random(), i[e + 2] += s - 2 * s * Math.random()
            }, r.Factory.addGetterSetter(r.Node, "noise", .2, null, r.Factory.afterSetFilter)
        }(),
        function() {
            r.Filters.Pixelate = function(t) {
                var e, n, i, r, s, o, a, c, l, u, h, f, d, p, g = Math.ceil(this.pixelSize()),
                    m = t.width,
                    v = t.height,
                    y = Math.ceil(m / g),
                    b = Math.ceil(v / g);
                for (t = t.data, f = 0; f < y; f += 1)
                    for (d = 0; d < b; d += 1) {
                        for (r = 0, s = 0, o = 0, a = 0, c = f * g, l = c + g, u = d * g, h = u + g, p = 0, e = c; e < l; e += 1)
                            if (!(e >= m))
                                for (n = u; n < h; n += 1) n >= v || (i = 4 * (m * n + e), r += t[i + 0], s += t[i + 1], o += t[i + 2], a += t[i + 3], p += 1);
                        for (r /= p, s /= p, o /= p, e = c; e < l; e += 1)
                            if (!(e >= m))
                                for (n = u; n < h; n += 1) n >= v || (i = 4 * (m * n + e), t[i + 0] = r, t[i + 1] = s, t[i + 2] = o, t[i + 3] = a)
                    }
            }, r.Factory.addGetterSetter(r.Node, "pixelSize", 8, null, r.Factory.afterSetFilter)
        }(),
        function() {
            r.Filters.Threshold = function(t) {
                var e, n = 255 * this.threshold(),
                    i = t.data,
                    r = i.length;
                for (e = 0; e < r; e += 1) i[e] = i[e] < n ? 0 : 255
            }, r.Factory.addGetterSetter(r.Node, "threshold", .5, null, r.Factory.afterSetFilter)
        }(),
        function() {
            /**
             * Sepia Filter
             * Based on: Pixastic Lib - Sepia filter - v0.1.0
             * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
             * @function
             * @name Sepia
             * @memberof Kinetic.Filters
             * @param {Object} imageData
             * @author Jacob Seidelin <jseidelin@nihilogic.dk>
             * @license MPL v1.1 [http://www.pixastic.com/lib/license.txt]
             * @example
             * node.cache();
             * node.filters([Kinetic.Filters.Sepia]);
             */
            r.Filters.Sepia = function(t) {
                var e, n, i, r, s, o, a, c, l, u = t.data,
                    h = t.width,
                    f = t.height,
                    d = 4 * h;
                do {
                    e = (f - 1) * d, n = h;
                    do {
                        i = e + 4 * (n - 1), r = u[i], s = u[i + 1], o = u[i + 2], a = .393 * r + .769 * s + .189 * o, c = .349 * r + .686 * s + .168 * o, l = .272 * r + .534 * s + .131 * o, u[i] = a > 255 ? 255 : a, u[i + 1] = c > 255 ? 255 : c, u[i + 2] = l > 255 ? 255 : l, u[i + 3] = u[i + 3]
                    } while (--n)
                } while (--f)
            }
        }(),
        function() {
            r.Filters.Solarize = function(t) {
                var e = t.data,
                    n = t.width,
                    i = t.height,
                    r = 4 * n,
                    s = i;
                do {
                    var o = (s - 1) * r,
                        a = n;
                    do {
                        var c = o + 4 * (a - 1),
                            l = e[c],
                            u = e[c + 1],
                            h = e[c + 2];
                        l > 127 && (l = 255 - l), u > 127 && (u = 255 - u), h > 127 && (h = 255 - h), e[c] = l, e[c + 1] = u, e[c + 2] = h
                    } while (--a)
                } while (--s)
            }
        }(),
        function() {
            var t = function(t, e, n) {
                    var i, r, s, o, a = t.data,
                        c = e.data,
                        l = t.width,
                        u = t.height,
                        h = n.polarCenterX || l / 2,
                        f = n.polarCenterY || u / 2,
                        d = 0,
                        p = 0,
                        g = 0,
                        m = 0,
                        v = Math.sqrt(h * h + f * f);
                    r = l - h, s = u - f, o = Math.sqrt(r * r + s * s), v = o > v ? o : v;
                    var y, b, _, w, x = u,
                        C = l,
                        S = 360 / C * Math.PI / 180;
                    for (b = 0; b < C; b += 1)
                        for (_ = Math.sin(b * S), w = Math.cos(b * S), y = 0; y < x; y += 1) r = Math.floor(h + v * y / x * w), s = Math.floor(f + v * y / x * _), i = 4 * (s * l + r), d = a[i + 0], p = a[i + 1], g = a[i + 2], m = a[i + 3], i = 4 * (b + y * l), c[i + 0] = d, c[i + 1] = p, c[i + 2] = g, c[i + 3] = m
                },
                e = function(t, e, n) {
                    var i, r, s, o, a, c, l = t.data,
                        u = e.data,
                        h = t.width,
                        f = t.height,
                        d = n.polarCenterX || h / 2,
                        p = n.polarCenterY || f / 2,
                        g = 0,
                        m = 0,
                        v = 0,
                        y = 0,
                        b = Math.sqrt(d * d + p * p);
                    r = h - d, s = f - p, c = Math.sqrt(r * r + s * s), b = c > b ? c : b;
                    var _, w, x, C, S = f,
                        T = h,
                        P = n.polarRotation || 0;
                    for (r = 0; r < h; r += 1)
                        for (s = 0; s < f; s += 1) o = r - d, a = s - p, _ = Math.sqrt(o * o + a * a) * S / b, w = (180 * Math.atan2(a, o) / Math.PI + 360 + P) % 360, w = w * T / 360, x = Math.floor(w), C = Math.floor(_), i = 4 * (C * h + x), g = l[i + 0], m = l[i + 1], v = l[i + 2], y = l[i + 3], i = 4 * (s * h + r), u[i + 0] = g, u[i + 1] = m, u[i + 2] = v, u[i + 3] = y
                },
                n = r.Util.createCanvasElement();
            r.Filters.Kaleidoscope = function(i) {
                var r, s, o, a, c, l, u, h, f, d, p = i.width,
                    g = i.height,
                    m = Math.round(this.kaleidoscopePower()),
                    v = Math.round(this.kaleidoscopeAngle()),
                    y = Math.floor(p * (v % 360) / 360);
                if (!(m < 1)) {
                    n.width = p, n.height = g;
                    var b = n.getContext("2d").getImageData(0, 0, p, g);
                    t(i, b, {
                        polarCenterX: p / 2,
                        polarCenterY: g / 2
                    });
                    for (var _ = p / Math.pow(2, m); _ <= 8;) _ *= 2, m -= 1;
                    _ = Math.ceil(_);
                    var w = _,
                        x = 0,
                        C = w,
                        S = 1;
                    for (y + _ > p && (x = w, C = 0, S = -1), s = 0; s < g; s += 1)
                        for (r = x; r !== C; r += S) o = Math.round(r + y) % p, f = 4 * (p * s + o), c = b.data[f + 0], l = b.data[f + 1], u = b.data[f + 2], h = b.data[f + 3], d = 4 * (p * s + r), b.data[d + 0] = c, b.data[d + 1] = l, b.data[d + 2] = u, b.data[d + 3] = h;
                    for (s = 0; s < g; s += 1)
                        for (w = Math.floor(_), a = 0; a < m; a += 1) {
                            for (r = 0; r < w + 1; r += 1) f = 4 * (p * s + r), c = b.data[f + 0], l = b.data[f + 1], u = b.data[f + 2], h = b.data[f + 3], d = 4 * (p * s + 2 * w - r - 1), b.data[d + 0] = c, b.data[d + 1] = l, b.data[d + 2] = u, b.data[d + 3] = h;
                            w *= 2
                        }
                    e(b, i, {
                        polarRotation: 0
                    })
                }
            }, r.Factory.addGetterSetter(r.Node, "kaleidoscopePower", 2, null, r.Factory.afterSetFilter), r.Factory.addGetterSetter(r.Node, "kaleidoscopeAngle", 0, null, r.Factory.afterSetFilter)
        }(),
        function() {
            function t(t) {
                setTimeout(t, 1e3 / 60)
            }

            function e() {
                return i.apply(r.root, arguments)
            }
            var n = function() {
                    return r.root.performance && r.root.performance.now ? function() {
                        return r.root.performance.now()
                    } : function() {
                        return (new Date).getTime()
                    }
                }(),
                i = function() {
                    return r.root.requestAnimationFrame || r.root.webkitRequestAnimationFrame || r.root.mozRequestAnimationFrame || r.root.oRequestAnimationFrame || r.root.msRequestAnimationFrame || t
                }();
            r.Animation = function(t, e) {
                var i = r.Animation;
                this.func = t, this.setLayers(e), this.id = i.animIdCounter++, this.frame = {
                    time: 0,
                    timeDiff: 0,
                    lastTime: n()
                }
            }, r.Animation.prototype = {
                setLayers: function(t) {
                    var e = [];
                    e = t ? t.length > 0 ? t : [t] : [], this.layers = e
                },
                getLayers: function() {
                    return this.layers
                },
                addLayer: function(t) {
                    var e, n, i = this.layers;
                    if (i) {
                        for (e = i.length, n = 0; n < e; n++)
                            if (i[n]._id === t._id) return !1
                    } else this.layers = [];
                    return this.layers.push(t), !0
                },
                isRunning: function() {
                    var t, e = r.Animation,
                        n = e.animations,
                        i = n.length;
                    for (t = 0; t < i; t++)
                        if (n[t].id === this.id) return !0;
                    return !1
                },
                start: function() {
                    var t = r.Animation;
                    this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = n(), t._addAnimation(this)
                },
                stop: function() {
                    r.Animation._removeAnimation(this)
                },
                _updateFrameObject: function(t) {
                    this.frame.timeDiff = t - this.frame.lastTime, this.frame.lastTime = t, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff
                }
            }, r.Animation.animations = [], r.Animation.animIdCounter = 0, r.Animation.animRunning = !1, r.Animation._addAnimation = function(t) {
                this.animations.push(t), this._handleAnimation()
            }, r.Animation._removeAnimation = function(t) {
                var e, n = t.id,
                    i = this.animations,
                    r = i.length;
                for (e = 0; e < r; e++)
                    if (i[e].id === n) {
                        this.animations.splice(e, 1);
                        break
                    }
            }, r.Animation._runFrames = function() {
                var t, e, i, r, s, o, a, c, l = {},
                    u = this.animations;
                for (r = 0; r < u.length; r++)
                    if (t = u[r], e = t.layers, i = t.func, t._updateFrameObject(n()), o = e.length, !i || !1 !== i.call(t, t.frame))
                        for (s = 0; s < o; s++) a = e[s], void 0 !== a._id && (l[a._id] = a);
                for (c in l) l[c].draw()
            }, r.Animation._animationLoop = function() {
                var t = r.Animation;
                t.animations.length ? (e(t._animationLoop), t._runFrames()) : t.animRunning = !1
            }, r.Animation._handleAnimation = function() {
                var t = this;
                this.animRunning || (this.animRunning = !0, t._animationLoop())
            };
            var s = r.Node.prototype.moveTo;
            r.Node.prototype.moveTo = function(t) {
                s.call(this, t)
            }, r.BaseLayer.prototype.batchDraw = function() {
                var t = this,
                    e = r.Animation;
                this.batchAnim || (this.batchAnim = new e(function() {
                    t.lastBatchDrawTime && n() - t.lastBatchDrawTime > 500 && t.batchAnim.stop()
                }, this)), this.lastBatchDrawTime = n(), this.batchAnim.isRunning() || (this.draw(), this.batchAnim.start())
            }, r.Stage.prototype.batchDraw = function() {
                this.getChildren().each(function(t) {
                    t.batchDraw()
                })
            }
        }(),
        function() {
            var t = {
                    node: 1,
                    duration: 1,
                    easing: 1,
                    onFinish: 1,
                    yoyo: 1
                },
                e = 0;
            r.Tween = function(i) {
                var s, o, a = this,
                    c = i.node,
                    l = c._id,
                    u = i.easing || r.Easings.Linear,
                    h = !!i.yoyo;
                s = void 0 === i.duration ? 1 : 0 === i.duration ? .001 : i.duration, this.node = c, this._id = e++, this.anim = new r.Animation(function() {
                    a.tween.onEnterFrame()
                }, c.getLayer() || (c instanceof r.Stage ? c.getLayers() : null)), this.tween = new n(o, function(t) {
                    a._tweenFunc(t)
                }, u, 0, 1, 1e3 * s, h), this._addListeners(), r.Tween.attrs[l] || (r.Tween.attrs[l] = {}), r.Tween.attrs[l][this._id] || (r.Tween.attrs[l][this._id] = {}), r.Tween.tweens[l] || (r.Tween.tweens[l] = {});
                for (o in i) void 0 === t[o] && this._addAttr(o, i[o]);
                this.reset(), this.onFinish = i.onFinish, this.onReset = i.onReset
            }, r.Tween.attrs = {}, r.Tween.tweens = {}, r.Tween.prototype = {
                _addAttr: function(t, e) {
                    var n, i, s, o, a, c = this.node,
                        l = c._id;
                    if (s = r.Tween.tweens[l][t], s && delete r.Tween.attrs[l][s][t], n = c.getAttr(t), r.Util._isArray(e))
                        for (i = [], a = e.length, o = 0; o < a; o++) i.push(e[o] - n[o]);
                    else i = e - n;
                    r.Tween.attrs[l][this._id][t] = {
                        start: n,
                        diff: i
                    }, r.Tween.tweens[l][t] = this._id
                },
                _tweenFunc: function(t) {
                    var e, n, i, s, o, a, c, l = this.node,
                        u = r.Tween.attrs[l._id][this._id];
                    for (e in u) {
                        if (n = u[e], i = n.start, s = n.diff, r.Util._isArray(i))
                            for (o = [], c = i.length, a = 0; a < c; a++) o.push(i[a] + s[a] * t);
                        else o = i + s * t;
                        l.setAttr(e, o)
                    }
                },
                _addListeners: function() {
                    var t = this;
                    this.tween.onPlay = function() {
                        t.anim.start()
                    }, this.tween.onReverse = function() {
                        t.anim.start()
                    }, this.tween.onPause = function() {
                        t.anim.stop()
                    }, this.tween.onFinish = function() {
                        t.onFinish && t.onFinish()
                    }, this.tween.onReset = function() {
                        t.onReset && t.onReset()
                    }
                },
                play: function() {
                    return this.tween.play(), this
                },
                reverse: function() {
                    return this.tween.reverse(), this
                },
                reset: function() {
                    return this.tween.reset(), this
                },
                seek: function(t) {
                    return this.tween.seek(1e3 * t), this
                },
                pause: function() {
                    return this.tween.pause(), this
                },
                finish: function() {
                    return this.tween.finish(), this
                },
                destroy: function() {
                    var t, e = this.node._id,
                        n = this._id,
                        i = r.Tween.tweens[e];
                    this.pause();
                    for (t in i) delete r.Tween.tweens[e][t];
                    delete r.Tween.attrs[e][n]
                }
            };
            var n = function(t, e, n, i, r, s, o) {
                this.prop = t, this.propFunc = e, this.begin = i, this._pos = i, this.duration = s, this._change = 0, this.prevPos = 0, this.yoyo = o, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = n, this._change = r - this.begin, this.pause()
            };
            n.prototype = {
                fire: function(t) {
                    var e = this[t];
                    e && e()
                },
                setTime: function(t) {
                    t > this.duration ? this.yoyo ? (this._time = this.duration, this.reverse()) : this.finish() : t < 0 ? this.yoyo ? (this._time = 0, this.play()) : this.reset() : (this._time = t, this.update())
                },
                getTime: function() {
                    return this._time
                },
                setPosition: function(t) {
                    this.prevPos = this._pos, this.propFunc(t), this._pos = t
                },
                getPosition: function(t) {
                    return void 0 === t && (t = this._time), this.func(t, this.begin, this._change, this.duration)
                },
                play: function() {
                    this.state = 2, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onPlay")
                },
                reverse: function() {
                    this.state = 3, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse")
                },
                seek: function(t) {
                    this.pause(), this._time = t, this.update(), this.fire("onSeek")
                },
                reset: function() {
                    this.pause(), this._time = 0, this.update(), this.fire("onReset")
                },
                finish: function() {
                    this.pause(), this._time = this.duration, this.update(), this.fire("onFinish")
                },
                update: function() {
                    this.setPosition(this.getPosition(this._time))
                },
                onEnterFrame: function() {
                    var t = this.getTimer() - this._startTime;
                    2 === this.state ? this.setTime(t) : 3 === this.state && this.setTime(this.duration - t)
                },
                pause: function() {
                    this.state = 1, this.fire("onPause")
                },
                getTimer: function() {
                    return (new Date).getTime()
                }
            }, r.Easings = {
                BackEaseIn: function(t, e, n, i) {
                    var r = 1.70158;
                    return n * (t /= i) * t * ((r + 1) * t - r) + e
                },
                BackEaseOut: function(t, e, n, i) {
                    var r = 1.70158;
                    return n * ((t = t / i - 1) * t * ((r + 1) * t + r) + 1) + e
                },
                BackEaseInOut: function(t, e, n, i) {
                    var r = 1.70158;
                    return (t /= i / 2) < 1 ? n / 2 * (t * t * ((1 + (r *= 1.525)) * t - r)) + e : n / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + e
                },
                ElasticEaseIn: function(t, e, n, i, r, s) {
                    var o = 0;
                    return 0 === t ? e : 1 == (t /= i) ? e + n : (s || (s = .3 * i), !r || r < Math.abs(n) ? (r = n, o = s / 4) : o = s / (2 * Math.PI) * Math.asin(n / r), -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - o) * (2 * Math.PI) / s) + e)
                },
                ElasticEaseOut: function(t, e, n, i, r, s) {
                    var o = 0;
                    return 0 === t ? e : 1 == (t /= i) ? e + n : (s || (s = .3 * i), !r || r < Math.abs(n) ? (r = n, o = s / 4) : o = s / (2 * Math.PI) * Math.asin(n / r), r * Math.pow(2, -10 * t) * Math.sin((t * i - o) * (2 * Math.PI) / s) + n + e)
                },
                ElasticEaseInOut: function(t, e, n, i, r, s) {
                    var o = 0;
                    return 0 === t ? e : 2 == (t /= i / 2) ? e + n : (s || (s = i * (.3 * 1.5)), !r || r < Math.abs(n) ? (r = n, o = s / 4) : o = s / (2 * Math.PI) * Math.asin(n / r), t < 1 ? r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - o) * (2 * Math.PI) / s) * -.5 + e : r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - o) * (2 * Math.PI) / s) * .5 + n + e)
                },
                BounceEaseOut: function(t, e, n, i) {
                    return (t /= i) < 1 / 2.75 ? n * (7.5625 * t * t) + e : t < 2 / 2.75 ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
                },
                BounceEaseIn: function(t, e, n, i) {
                    return n - r.Easings.BounceEaseOut(i - t, 0, n, i) + e
                },
                BounceEaseInOut: function(t, e, n, i) {
                    return t < i / 2 ? .5 * r.Easings.BounceEaseIn(2 * t, 0, n, i) + e : .5 * r.Easings.BounceEaseOut(2 * t - i, 0, n, i) + .5 * n + e
                },
                EaseIn: function(t, e, n, i) {
                    return n * (t /= i) * t + e
                },
                EaseOut: function(t, e, n, i) {
                    return -n * (t /= i) * (t - 2) + e
                },
                EaseInOut: function(t, e, n, i) {
                    return (t /= i / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
                },
                StrongEaseIn: function(t, e, n, i) {
                    return n * (t /= i) * t * t * t * t + e
                },
                StrongEaseOut: function(t, e, n, i) {
                    return n * ((t = t / i - 1) * t * t * t * t + 1) + e
                },
                StrongEaseInOut: function(t, e, n, i) {
                    return (t /= i / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
                },
                Linear: function(t, e, n, i) {
                    return n * t / i + e
                }
            }
        }(),
        function() {
            r.DD = {
                anim: new r.Animation(function() {
                    var t = this.dirty;
                    return this.dirty = !1, t
                }),
                isDragging: !1,
                justDragged: !1,
                offset: {
                    x: 0,
                    y: 0
                },
                node: null,
                _drag: function(t) {
                    var e = r.DD,
                        n = e.node;
                    if (n) {
                        if (!e.isDragging) {
                            var i = n.getStage().getPointerPosition(),
                                s = n.dragDistance();
                            if (Math.max(Math.abs(i.x - e.startPointerPos.x), Math.abs(i.y - e.startPointerPos.y)) < s) return
                        }
                        n._setDragPosition(t), e.isDragging || (e.isDragging = !0, n.fire("dragstart", {
                            type: "dragstart",
                            target: n,
                            evt: t
                        }, !0)), n.fire("dragmove", {
                            type: "dragmove",
                            target: n,
                            evt: t
                        }, !0)
                    }
                },
                _endDragBefore: function(t) {
                    var e, n = r.DD,
                        i = n.node;
                    i && (i.nodeType, e = i.getLayer(), n.anim.stop(), n.isDragging && (n.isDragging = !1, n.justDragged = !0, r.listenClickTap = !1, t && (t.dragEndNode = i)), delete n.node, (e || i).draw())
                },
                _endDragAfter: function(t) {
                    t = t || {};
                    var e = t.dragEndNode;
                    t && e && e.fire("dragend", {
                        type: "dragend",
                        target: e,
                        evt: t
                    }, !0)
                }
            }, r.Node.prototype.startDrag = function() {
                var t = r.DD,
                    e = this.getStage(),
                    n = this.getLayer(),
                    i = e.getPointerPosition(),
                    s = this.getAbsolutePosition();
                i && (t.node && t.node.stopDrag(), t.node = this, t.startPointerPos = i, t.offset.x = i.x - s.x, t.offset.y = i.y - s.y, t.anim.setLayers(n || this.getLayers()), t.anim.start(), this._setDragPosition())
            }, r.Node.prototype._setDragPosition = function(t) {
                var e = r.DD,
                    n = this.getStage().getPointerPosition(),
                    i = this.getDragBoundFunc();
                if (n) {
                    var s = {
                        x: n.x - e.offset.x,
                        y: n.y - e.offset.y
                    };
                    void 0 !== i && (s = i.call(this, s, t)), this.setAbsolutePosition(s), this._lastPos && this._lastPos.x === s.x && this._lastPos.y === s.y || (e.anim.dirty = !0), this._lastPos = s
                }
            }, r.Node.prototype.stopDrag = function() {
                var t = r.DD,
                    e = {};
                t._endDragBefore(e), t._endDragAfter(e)
            }, r.Node.prototype.setDraggable = function(t) {
                this._setAttr("draggable", t), this._dragChange()
            };
            var t = r.Node.prototype.destroy;
            r.Node.prototype.destroy = function() {
                var e = r.DD;
                e.node && e.node._id === this._id && this.stopDrag(), t.call(this)
            }, r.Node.prototype.isDragging = function() {
                var t = r.DD;
                return !(!t.node || t.node._id !== this._id || !t.isDragging)
            }, r.Node.prototype._listenDrag = function() {
                var t = this;
                this._dragCleanup(), "Stage" === this.getClassName() ? this.on("contentMousedown.kinetic contentTouchstart.kinetic", function(e) {
                    r.DD.node || t.startDrag(e)
                }) : this.on("mousedown.kinetic touchstart.kinetic", function(e) {
                    1 !== e.evt.button && 2 !== e.evt.button && (r.DD.node || t.startDrag(e))
                })
            }, r.Node.prototype._dragChange = function() {
                if (this.attrs.draggable) this._listenDrag();
                else {
                    this._dragCleanup();
                    var t = this.getStage(),
                        e = r.DD;
                    t && e.node && e.node._id === this._id && e.node.stopDrag()
                }
            }, r.Node.prototype._dragCleanup = function() {
                "Stage" === this.getClassName() ? (this.off("contentMousedown.kinetic"), this.off("contentTouchstart.kinetic")) : (this.off("mousedown.kinetic"), this.off("touchstart.kinetic"))
            }, r.Factory.addGetterSetter(r.Node, "dragBoundFunc"), r.Factory.addGetter(r.Node, "draggable", !1), r.Factory.addOverloadedGetterSetter(r.Node, "draggable");
            var e = r.document.documentElement;
            e.addEventListener("mouseup", r.DD._endDragBefore, !0), e.addEventListener("touchend", r.DD._endDragBefore, !0), e.addEventListener("mouseup", r.DD._endDragAfter, !1), e.addEventListener("touchend", r.DD._endDragAfter, !1)
        }(),
        function() {
            r.Util.addMethods(r.Container, {
                __init: function(t) {
                    this.children = new r.Collection, r.Node.call(this, t)
                },
                getChildren: function(t) {
                    if (t) {
                        var e = new r.Collection;
                        return this.children.each(function(n) {
                            t(n) && e.push(n)
                        }), e
                    }
                    return this.children
                },
                hasChildren: function() {
                    return this.getChildren().length > 0
                },
                removeChildren: function() {
                    for (var t, e = r.Collection.toCollection(this.children), n = 0; n < e.length; n++) t = e[n], delete t.parent, t.index = 0, t.hasChildren() && t.removeChildren(), t.remove();
                    return e = null, this.children = new r.Collection, this
                },
                destroyChildren: function() {
                    for (var t, e = r.Collection.toCollection(this.children), n = 0; n < e.length; n++) t = e[n], delete t.parent, t.index = 0, t.destroy();
                    return e = null, this.children = new r.Collection, this
                },
                add: function(t) {
                    if (arguments.length > 1) {
                        for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
                        return this
                    }
                    if (t.getParent()) return t.moveTo(this), this;
                    var n = this.children;
                    return this._validateAdd(t), t.index = n.length, t.parent = this, n.push(t), this._fire("add", {
                        child: t
                    }), t.isDragging() && r.DD.anim.setLayers(t.getLayer()), this
                },
                destroy: function() {
                    this.hasChildren() && this.destroyChildren(), r.Node.prototype.destroy.call(this)
                },
                find: function(t) {
                    var e, n, i, s, o, a, c, l = [],
                        u = t.replace(/ /g, "").split(","),
                        h = u.length;
                    for (e = 0; e < h; e++)
                        if (i = u[e], "#" === i.charAt(0))(o = this._getNodeById(i.slice(1))) && l.push(o);
                        else if ("." === i.charAt(0)) s = this._getNodesByName(i.slice(1)), l = l.concat(s);
                    else
                        for (a = this.getChildren(), c = a.length, n = 0; n < c; n++) l = l.concat(a[n]._get(i));
                    return r.Collection.toCollection(l)
                },
                _getNodeById: function(t) {
                    var e = r.ids[t];
                    return void 0 !== e && this.isAncestorOf(e) ? e : null
                },
                _getNodesByName: function(t) {
                    var e = r.names[t] || [];
                    return this._getDescendants(e)
                },
                _get: function(t) {
                    for (var e = r.Node.prototype._get.call(this, t), n = this.getChildren(), i = n.length, s = 0; s < i; s++) e = e.concat(n[s]._get(t));
                    return e
                },
                toObject: function() {
                    var t = r.Node.prototype.toObject.call(this);
                    t.children = [];
                    for (var e = this.getChildren(), n = e.length, i = 0; i < n; i++) {
                        var s = e[i];
                        t.children.push(s.toObject())
                    }
                    return t
                },
                _getDescendants: function(t) {
                    for (var e = [], n = t.length, i = 0; i < n; i++) {
                        var r = t[i];
                        this.isAncestorOf(r) && e.push(r)
                    }
                    return e
                },
                isAncestorOf: function(t) {
                    for (var e = t.getParent(); e;) {
                        if (e._id === this._id) return !0;
                        e = e.getParent()
                    }
                    return !1
                },
                clone: function(t) {
                    var e = r.Node.prototype.clone.call(this, t);
                    return this.getChildren().each(function(t) {
                        e.add(t.clone())
                    }), e
                },
                getAllIntersections: function(t) {
                    var e = [];
                    return this.find("Shape").each(function(n) {
                        n.isVisible() && n.intersects(t) && e.push(n)
                    }), e
                },
                _setChildrenIndices: function() {
                    this.children.each(function(t, e) {
                        t.index = e
                    })
                },
                drawScene: function(t, e) {
                    var n = this.getLayer(),
                        i = t || n && n.getCanvas(),
                        r = i && i.getContext(),
                        s = this._cache.canvas,
                        o = s && s.scene;
                    return this.isVisible() && (o ? this._drawCachedSceneCanvas(r) : this._drawChildren(i, "drawScene", e)), this
                },
                drawHit: function(t, e) {
                    var n = this.getLayer(),
                        i = t || n && n.hitCanvas,
                        r = i && i.getContext(),
                        s = this._cache.canvas,
                        o = s && s.hit;
                    return this.shouldDrawHit(i) && (n && n.clearHitCache(), o ? this._drawCachedHitCanvas(r) : this._drawChildren(i, "drawHit", e)), this
                },
                _drawChildren: function(t, e, n) {
                    var i, r, s = this.getLayer(),
                        o = t && t.getContext(),
                        a = this.getClipWidth(),
                        c = this.getClipHeight(),
                        l = a && c;
                    l && s && (i = this.getClipX(), r = this.getClipY(), o.save(), s._applyTransform(this, o), o.beginPath(), o.rect(i, r, a, c), o.clip(), o.reset()), this.children.each(function(i) {
                        i[e](t, n)
                    }), l && o.restore()
                },
                shouldDrawHit: function(t) {
                    var e = this.getLayer(),
                        n = r.DD,
                        i = n && r.isDragging() && -1 !== r.DD.anim.getLayers().indexOf(e);
                    return t && t.isCache || e && e.hitGraphEnabled() && this.isVisible() && !i
                }
            }), r.Util.extend(r.Container, r.Node), r.Container.prototype.get = r.Container.prototype.find, r.Factory.addComponentsGetterSetter(r.Container, "clip", ["x", "y", "width", "height"]), r.Factory.addGetterSetter(r.Container, "clipX"), r.Factory.addGetterSetter(r.Container, "clipY"), r.Factory.addGetterSetter(r.Container, "clipWidth"), r.Factory.addGetterSetter(r.Container, "clipHeight"), r.Collection.mapMethods(r.Container)
        }(),
        function() {
            function t(t) {
                t.fill()
            }

            function e(t) {
                t.stroke()
            }

            function n(t) {
                t.fill()
            }

            function i(t) {
                t.stroke()
            }

            function s() {
                this._clearCache(o)
            }
            var o = "hasShadow";
            r.Util.addMethods(r.Shape, {
                __init: function(o) {
                    this.nodeType = "Shape", this._fillFunc = t, this._strokeFunc = e, this._fillFuncHit = n, this._strokeFuncHit = i;
                    for (var a, c = r.shapes;;)
                        if ((a = r.Util.getRandomColor()) && !(a in c)) break;
                    this.colorKey = a, c[a] = this, r.Node.call(this, o), this.on("shadowColorChange.kinetic shadowBlurChange.kinetic shadowOffsetChange.kinetic shadowOpacityChange.kinetic shadowEnabledChange.kinetic", s)
                },
                hasChildren: function() {
                    return !1
                },
                getChildren: function() {
                    return []
                },
                getContext: function() {
                    return this.getLayer().getContext()
                },
                getCanvas: function() {
                    return this.getLayer().getCanvas()
                },
                hasShadow: function() {
                    return this._getCache(o, this._hasShadow)
                },
                _hasShadow: function() {
                    return this.getShadowEnabled() && 0 !== this.getShadowOpacity() && !!(this.getShadowColor() || this.getShadowBlur() || this.getShadowOffsetX() || this.getShadowOffsetY())
                },
                hasFill: function() {
                    return !!(this.getFill() || this.getFillPatternImage() || this.getFillLinearGradientColorStops() || this.getFillRadialGradientColorStops())
                },
                hasStroke: function() {
                    return !!(this.stroke() || this.strokeRed() || this.strokeGreen() || this.strokeBlue())
                },
                intersects: function(t) {
                    var e, n = this.getStage(),
                        i = n.bufferHitCanvas;
                    return i.getContext().clear(), this.drawScene(i), e = i.context.getImageData(Math.round(t.x), Math.round(t.y), 1, 1).data, e[3] > 0
                },
                destroy: function() {
                    r.Node.prototype.destroy.call(this), delete r.shapes[this.colorKey]
                },
                _useBufferCanvas: function() {
                    return (this.hasShadow() || 1 !== this.getAbsoluteOpacity()) && this.hasFill() && this.hasStroke() && this.getStage()
                },
                drawScene: function(t, e) {
                    var n, i, r, s = this.getLayer(),
                        o = t || s.getCanvas(),
                        a = o.getContext(),
                        c = this._cache.canvas,
                        l = this.sceneFunc(),
                        u = this.hasShadow();
                    if (this.isVisible())
                        if (c) this._drawCachedSceneCanvas(a);
                        else if (l) {
                        if (a.save(), this._useBufferCanvas()) {
                            if (n = this.getStage(), i = n.bufferCanvas, r = i.getContext(), r.clear(), r.save(), r._applyLineJoin(this), s) s._applyTransform(this, r, e);
                            else {
                                var h = this.getAbsoluteTransform(e).getMatrix();
                                a.transform(h[0], h[1], h[2], h[3], h[4], h[5])
                            }
                            l.call(this, r), r.restore(), u && !o.hitCanvas && (a.save(), a._applyShadow(this), a.drawImage(i._canvas, 0, 0), a.restore()), a._applyOpacity(this), a.drawImage(i._canvas, 0, 0)
                        } else {
                            if (a._applyLineJoin(this), s) s._applyTransform(this, a, e);
                            else {
                                var f = this.getAbsoluteTransform(e).getMatrix();
                                a.transform(f[0], f[1], f[2], f[3], f[4], f[5])
                            }
                            u && !o.hitCanvas && (a.save(), a._applyShadow(this), l.call(this, a), a.restore()), a._applyOpacity(this), l.call(this, a)
                        }
                        a.restore()
                    }
                    return this
                },
                drawHit: function(t, e) {
                    var n = this.getLayer(),
                        i = t || n.hitCanvas,
                        r = i.getContext(),
                        s = this.hitFunc() || this.sceneFunc(),
                        o = this._cache.canvas,
                        a = o && o.hit;
                    if (this.shouldDrawHit(i))
                        if (n && n.clearHitCache(), a) this._drawCachedHitCanvas(r);
                        else if (s) {
                        if (r.save(), r._applyLineJoin(this), n) n._applyTransform(this, r, e);
                        else {
                            var c = this.getAbsoluteTransform(e).getMatrix();
                            r.transform(c[0], c[1], c[2], c[3], c[4], c[5])
                        }
                        s.call(this, r), r.restore()
                    }
                    return this
                },
                drawHitFromCache: function(t) {
                    var e, n, i, s, o, a, c, l = t || 0,
                        u = this._cache.canvas,
                        h = this._getCachedSceneCanvas(),
                        f = h.getContext(),
                        d = u.hit,
                        p = d.getContext(),
                        g = h.getWidth(),
                        m = h.getHeight();
                    p.clear();
                    try {
                        for (e = f.getImageData(0, 0, g, m), n = e.data, i = p.getImageData(0, 0, g, m), s = i.data, o = n.length, a = r.Util._hexToRgb(this.colorKey), c = 0; c < o; c += 4) n[c + 3] > l && (s[c] = a.r, s[c + 1] = a.g, s[c + 2] = a.b, s[c + 3] = 255);
                        p.putImageData(i, 0, 0)
                    } catch (t) {
                        r.Util.warn("Unable to draw hit graph from cached scene canvas. " + t.message)
                    }
                    return this
                }
            }), r.Util.extend(r.Shape, r.Node), r.Factory.addGetterSetter(r.Shape, "stroke"), r.Factory.addGetterSetter(r.Shape, "strokeRed", 0, r.Validators.RGBComponent), r.Factory.addGetterSetter(r.Shape, "strokeGreen", 0, r.Validators.RGBComponent), r.Factory.addGetterSetter(r.Shape, "strokeBlue", 0, r.Validators.RGBComponent), r.Factory.addGetterSetter(r.Shape, "strokeAlpha", 1, r.Validators.alphaComponent), r.Factory.addGetterSetter(r.Shape, "strokeWidth", 2), r.Factory.addGetterSetter(r.Shape, "lineJoin"), r.Factory.addGetterSetter(r.Shape, "lineCap"), r.Factory.addGetterSetter(r.Shape, "sceneFunc"), r.Factory.addGetterSetter(r.Shape, "hitFunc"), r.Factory.addGetterSetter(r.Shape, "dash"), r.Factory.addGetterSetter(r.Shape, "shadowColor"), r.Factory.addGetterSetter(r.Shape, "shadowRed", 0, r.Validators.RGBComponent), r.Factory.addGetterSetter(r.Shape, "shadowGreen", 0, r.Validators.RGBComponent), r.Factory.addGetterSetter(r.Shape, "shadowBlue", 0, r.Validators.RGBComponent), r.Factory.addGetterSetter(r.Shape, "shadowAlpha", 1, r.Validators.alphaComponent), r.Factory.addGetterSetter(r.Shape, "shadowBlur"), r.Factory.addGetterSetter(r.Shape, "shadowOpacity"), r.Factory.addComponentsGetterSetter(r.Shape, "shadowOffset", ["x", "y"]), r.Factory.addGetterSetter(r.Shape, "shadowOffsetX", 0), r.Factory.addGetterSetter(r.Shape, "shadowOffsetY", 0), r.Factory.addGetterSetter(r.Shape, "fillPatternImage"), r.Factory.addGetterSetter(r.Shape, "fill"), r.Factory.addGetterSetter(r.Shape, "fillRed", 0, r.Validators.RGBComponent), r.Factory.addGetterSetter(r.Shape, "fillGreen", 0, r.Validators.RGBComponent), r.Factory.addGetterSetter(r.Shape, "fillBlue", 0, r.Validators.RGBComponent), r.Factory.addGetterSetter(r.Shape, "fillAlpha", 1, r.Validators.alphaComponent), r.Factory.addGetterSetter(r.Shape, "fillPatternX", 0), r.Factory.addGetterSetter(r.Shape, "fillPatternY", 0), r.Factory.addGetterSetter(r.Shape, "fillLinearGradientColorStops"), r.Factory.addGetterSetter(r.Shape, "fillRadialGradientStartRadius", 0), r.Factory.addGetterSetter(r.Shape, "fillRadialGradientEndRadius", 0), r.Factory.addGetterSetter(r.Shape, "fillRadialGradientColorStops"), r.Factory.addGetterSetter(r.Shape, "fillPatternRepeat", "repeat"), r.Factory.addGetterSetter(r.Shape, "fillEnabled", !0), r.Factory.addGetterSetter(r.Shape, "strokeEnabled", !0), r.Factory.addGetterSetter(r.Shape, "shadowEnabled", !0), r.Factory.addGetterSetter(r.Shape, "dashEnabled", !0), r.Factory.addGetterSetter(r.Shape, "strokeScaleEnabled", !0), r.Factory.addGetterSetter(r.Shape, "fillPriority", "color"), r.Factory.addComponentsGetterSetter(r.Shape, "fillPatternOffset", ["x", "y"]), r.Factory.addGetterSetter(r.Shape, "fillPatternOffsetX", 0), r.Factory.addGetterSetter(r.Shape, "fillPatternOffsetY", 0), r.Factory.addComponentsGetterSetter(r.Shape, "fillPatternScale", ["x", "y"]), r.Factory.addGetterSetter(r.Shape, "fillPatternScaleX", 1), r.Factory.addGetterSetter(r.Shape, "fillPatternScaleY", 1), r.Factory.addComponentsGetterSetter(r.Shape, "fillLinearGradientStartPoint", ["x", "y"]), r.Factory.addGetterSetter(r.Shape, "fillLinearGradientStartPointX", 0), r.Factory.addGetterSetter(r.Shape, "fillLinearGradientStartPointY", 0), r.Factory.addComponentsGetterSetter(r.Shape, "fillLinearGradientEndPoint", ["x", "y"]), r.Factory.addGetterSetter(r.Shape, "fillLinearGradientEndPointX", 0), r.Factory.addGetterSetter(r.Shape, "fillLinearGradientEndPointY", 0), r.Factory.addComponentsGetterSetter(r.Shape, "fillRadialGradientStartPoint", ["x", "y"]), r.Factory.addGetterSetter(r.Shape, "fillRadialGradientStartPointX", 0), r.Factory.addGetterSetter(r.Shape, "fillRadialGradientStartPointY", 0), r.Factory.addComponentsGetterSetter(r.Shape, "fillRadialGradientEndPoint", ["x", "y"]), r.Factory.addGetterSetter(r.Shape, "fillRadialGradientEndPointX", 0), r.Factory.addGetterSetter(r.Shape, "fillRadialGradientEndPointY", 0), r.Factory.addGetterSetter(r.Shape, "fillPatternRotation", 0), r.Factory.backCompat(r.Shape, {
                dashArray: "dash",
                getDashArray: "getDash",
                setDashArray: "getDash",
                drawFunc: "sceneFunc",
                getDrawFunc: "getSceneFunc",
                setDrawFunc: "setSceneFunc",
                drawHitFunc: "hitFunc",
                getDrawHitFunc: "getHitFunc",
                setDrawHitFunc: "setHitFunc"
            }), r.Collection.mapMethods(r.Shape)
        }(),
        function() {
            function t(t, n) {
                t.content.addEventListener(n, function(i) {
                    t[e + n](i)
                }, !1)
            }
            var e = "_",
                n = ["mousedown", "mousemove", "mouseup", "mouseout", "touchstart", "touchmove", "touchend", "mouseover", "DOMMouseScroll", "mousewheel", "wheel"],
                i = n.length;
            r.Util.addMethods(r.Stage, {
                ___init: function(t) {
                    this.nodeType = "Stage", r.Container.call(this, t), this._id = r.idCounter++, this._buildDOM(), this._bindContentEvents(), this._enableNestedTransforms = !1, r.stages.push(this)
                },
                _validateAdd: function(t) {
                    "Layer" !== t.getType() && r.Util.error("You may only add layers to the stage.")
                },
                setContainer: function(t) {
                    if ("string" == typeof t) {
                        var e = t;
                        if (!(t = r.document.getElementById(t))) throw "Can not find container in document with id " + e
                    }
                    return this._setAttr("container", t), this
                },
                shouldDrawHit: function() {
                    return !0
                },
                draw: function() {
                    return r.Node.prototype.draw.call(this), this
                },
                setHeight: function(t) {
                    return r.Node.prototype.setHeight.call(this, t), this._resizeDOM(), this
                },
                setWidth: function(t) {
                    return r.Node.prototype.setWidth.call(this, t), this._resizeDOM(), this
                },
                clear: function() {
                    var t, e = this.children,
                        n = e.length;
                    for (t = 0; t < n; t++) e[t].clear();
                    return this
                },
                clone: function(t) {
                    return t || (t = {}), t.container = r.document.createElement("div"), r.Container.prototype.clone.call(this, t)
                },
                destroy: function() {
                    var t = this.content;
                    r.Container.prototype.destroy.call(this), t && r.Util._isInDocument(t) && this.getContainer().removeChild(t);
                    var e = r.stages.indexOf(this);
                    e > -1 && r.stages.splice(e, 1)
                },
                getPointerPosition: function() {
                    return this.pointerPos
                },
                getStage: function() {
                    return this
                },
                getContent: function() {
                    return this.content
                },
                toDataURL: function(t) {
                    function e(s) {
                        var o = l[s],
                            u = o.toDataURL(),
                            h = new r.window.Image;
                        h.onload = function() {
                            c.drawImage(h, 0, 0), s < l.length - 1 ? e(s + 1) : t.callback(a.toDataURL(n, i))
                        }, h.src = u
                    }
                    t = t || {};
                    var n = t.mimeType || null,
                        i = t.quality || null,
                        s = t.x || 0,
                        o = t.y || 0,
                        a = new r.SceneCanvas({
                            width: t.width || this.getWidth(),
                            height: t.height || this.getHeight(),
                            pixelRatio: 1
                        }),
                        c = a.getContext()._context,
                        l = this.children;
                    (s || o) && c.translate(-1 * s, -1 * o), e(0)
                },
                toImage: function(t) {
                    var e = t.callback;
                    t.callback = function(t) {
                        r.Util._getImage(t, function(t) {
                            e(t)
                        })
                    }, this.toDataURL(t)
                },
                getIntersection: function(t) {
                    var e, n, i = this.getChildren(),
                        r = i.length,
                        s = r - 1;
                    for (e = s; e >= 0; e--)
                        if (n = i[e].getIntersection(t)) return n;
                    return null
                },
                _resizeDOM: function() {
                    if (this.content) {
                        var t, e, n = this.getWidth(),
                            i = this.getHeight(),
                            r = this.getChildren(),
                            s = r.length;
                        for (this.content.style.width = n + "px", this.content.style.height = i + "px", this.bufferCanvas.setSize(n, i), this.bufferHitCanvas.setSize(n, i), t = 0; t < s; t++) e = r[t], e.setSize(n, i), e.draw()
                    }
                },
                add: function(t) {
                    if (!(arguments.length > 1)) return r.Container.prototype.add.call(this, t), t._setCanvasSize(this.width(), this.height()), t.draw(), this.content.appendChild(t.canvas._canvas), this;
                    for (var e = 0; e < arguments.length; e++) this.add(arguments[e])
                },
                getParent: function() {
                    return null
                },
                getLayer: function() {
                    return null
                },
                getLayers: function() {
                    return this.getChildren()
                },
                _bindContentEvents: function() {
                    for (var e = 0; e < i; e++) t(this, n[e])
                },
                _mouseover: function(t) {
                    r.UA.mobile || (this._setPointerPosition(t), this._fire("contentMouseover", {
                        evt: t
                    }))
                },
                _mouseout: function(t) {
                    if (!r.UA.mobile) {
                        this._setPointerPosition(t);
                        var e = this.targetShape;
                        e && !r.isDragging() && (e._fireAndBubble("mouseout", {
                            evt: t
                        }), e._fireAndBubble("mouseleave", {
                            evt: t
                        }), this.targetShape = null), this.pointerPos = void 0, this._fire("contentMouseout", {
                            evt: t
                        })
                    }
                },
                _mousemove: function(t) {
                    if (r.UA.ieMobile) return this._touchmove(t);
                    if ((void 0 === t.webkitMovementX && void 0 === t.webkitMovementY || 0 !== t.webkitMovementY || 0 !== t.webkitMovementX) && !r.UA.mobile) {
                        this._setPointerPosition(t);
                        var e, n = r.DD;
                        r.isDragging() || (e = this.getIntersection(this.getPointerPosition()), e && e.isListening() ? r.isDragging() || this.targetShape && this.targetShape._id === e._id ? e._fireAndBubble("mousemove", {
                            evt: t
                        }) : (this.targetShape && (this.targetShape._fireAndBubble("mouseout", {
                            evt: t
                        }, e), this.targetShape._fireAndBubble("mouseleave", {
                            evt: t
                        }, e)), e._fireAndBubble("mouseover", {
                            evt: t
                        }, this.targetShape), e._fireAndBubble("mouseenter", {
                            evt: t
                        }, this.targetShape), this.targetShape = e) : this.targetShape && !r.isDragging() && (this.targetShape._fireAndBubble("mouseout", {
                            evt: t
                        }), this.targetShape._fireAndBubble("mouseleave", {
                            evt: t
                        }), this.targetShape = null), this._fire("contentMousemove", {
                            evt: t
                        })), n && n._drag(t), t.preventDefault && t.preventDefault()
                    }
                },
                _mousedown: function(t) {
                    if (r.UA.ieMobile) return this._touchstart(t);
                    if (!r.UA.mobile) {
                        this._setPointerPosition(t);
                        var e = this.getIntersection(this.getPointerPosition());
                        r.listenClickTap = !0, e && e.isListening() && (this.clickStartShape = e, e._fireAndBubble("mousedown", {
                            evt: t
                        })), this._fire("contentMousedown", {
                            evt: t
                        })
                    }
                    t.preventDefault && t.preventDefault()
                },
                _mouseup: function(t) {
                    if (r.UA.ieMobile) return this._touchend(t);
                    if (!r.UA.mobile) {
                        this._setPointerPosition(t);
                        var e = this.getIntersection(this.getPointerPosition()),
                            n = this.clickStartShape,
                            i = !1,
                            s = r.DD;
                        r.inDblClickWindow ? (i = !0, r.inDblClickWindow = !1) : s && s.justDragged ? s && (s.justDragged = !1) : r.inDblClickWindow = !0, setTimeout(function() {
                            r.inDblClickWindow = !1
                        }, r.dblClickWindow), e && e.isListening() && (e._fireAndBubble("mouseup", {
                            evt: t
                        }), r.listenClickTap && n && n._id === e._id && (e._fireAndBubble("click", {
                            evt: t
                        }), i && e._fireAndBubble("dblclick", {
                            evt: t
                        }))), this._fire("contentMouseup", {
                            evt: t
                        }), r.listenClickTap && (this._fire("contentClick", {
                            evt: t
                        }), i && this._fire("contentDblclick", {
                            evt: t
                        })), r.listenClickTap = !1
                    }
                    t.preventDefault && t.preventDefault()
                },
                _touchstart: function(t) {
                    this._setPointerPosition(t);
                    var e = this.getIntersection(this.getPointerPosition());
                    r.listenClickTap = !0, e && e.isListening() && (this.tapStartShape = e, e._fireAndBubble("touchstart", {
                        evt: t
                    }), e.isListening() && t.preventDefault && t.preventDefault()), this._fire("contentTouchstart", {
                        evt: t
                    })
                },
                _touchend: function(t) {
                    this._setPointerPosition(t);
                    var e = this.getIntersection(this.getPointerPosition()),
                        n = !1;
                    r.inDblClickWindow ? (n = !0, r.inDblClickWindow = !1) : r.inDblClickWindow = !0, setTimeout(function() {
                        r.inDblClickWindow = !1
                    }, r.dblClickWindow), e && e.isListening() && (e._fireAndBubble("touchend", {
                        evt: t
                    }), r.listenClickTap && e._id === this.tapStartShape._id && (e._fireAndBubble("tap", {
                        evt: t
                    }), n && e._fireAndBubble("dbltap", {
                        evt: t
                    })), e.isListening() && t.preventDefault && t.preventDefault()), r.listenClickTap && (this._fire("contentTouchend", {
                        evt: t
                    }), n && this._fire("contentDbltap", {
                        evt: t
                    })), r.listenClickTap = !1
                },
                _touchmove: function(t) {
                    this._setPointerPosition(t);
                    var e, n = r.DD;
                    r.isDragging() || (e = this.getIntersection(this.getPointerPosition()), e && e.isListening() && (e._fireAndBubble("touchmove", {
                        evt: t
                    }), e.isListening() && t.preventDefault && t.preventDefault()), this._fire("contentTouchmove", {
                        evt: t
                    })), n && (n._drag(t), r.isDragging() && t.preventDefault())
                },
                _DOMMouseScroll: function(t) {
                    this._mousewheel(t)
                },
                _mousewheel: function(t) {
                    this._setPointerPosition(t);
                    var e = this.getIntersection(this.getPointerPosition());
                    e && e.isListening() && e._fireAndBubble("mousewheel", {
                        evt: t
                    })
                },
                _wheel: function(t) {
                    this._mousewheel(t)
                },
                _setPointerPosition: function(t) {
                    var e, n = this._getContentPosition(),
                        i = t.offsetX,
                        s = t.clientX,
                        o = null,
                        a = null;
                    t = t || window.event, void 0 !== t.touches ? t.touches.length > 0 && (e = t.touches[0], o = e.clientX - n.left, a = e.clientY - n.top) : void 0 !== i ? (o = i, a = t.offsetY) : "mozilla" === r.UA.browser ? (o = t.layerX, a = t.layerY) : void 0 !== s && n && (o = s - n.left, a = t.clientY - n.top), null !== o && null !== a && (this.pointerPos = {
                        x: o,
                        y: a
                    })
                },
                _getContentPosition: function() {
                    var t = this.content.getBoundingClientRect ? this.content.getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: t.top,
                        left: t.left
                    }
                },
                _buildDOM: function() {
                    var t = this.getContainer();
                    if (!t) {
                        if (r.Util.isBrowser()) throw "Stage has no container. A container is required.";
                        t = r.document.createElement("div")
                    }
                    t.innerHTML = "", this.content = r.document.createElement("div"), this.content.style.position = "relative", this.content.style.display = "inline-block", this.content.className = "kineticjs-content", this.content.setAttribute("role", "presentation"), t.appendChild(this.content), this.bufferCanvas = new r.SceneCanvas({
                        pixelRatio: 1
                    }), this.bufferHitCanvas = new r.HitCanvas, this._resizeDOM()
                },
                _onContent: function(t, e) {
                    var n, i, r = t.split(" "),
                        s = r.length;
                    for (n = 0; n < s; n++) i = r[n], this.content.addEventListener(i, e, !1)
                },
                cache: function() {
                    r.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.")
                },
                clearCache: function() {}
            }), r.Util.extend(r.Stage, r.Container), r.Factory.addGetter(r.Stage, "container"), r.Factory.addOverloadedGetterSetter(r.Stage, "container")
        }(),
        function() {
            r.Util.addMethods(r.BaseLayer, {
                ___init: function(t) {
                    this.nodeType = "Layer", r.Container.call(this, t)
                },
                createPNGStream: function() {
                    return this.canvas._canvas.createPNGStream()
                },
                getCanvas: function() {
                    return this.canvas
                },
                getHitCanvas: function() {
                    return this.hitCanvas
                },
                getContext: function() {
                    return this.getCanvas().getContext()
                },
                clear: function(t) {
                    return this.getContext().clear(t), this.getHitCanvas().getContext().clear(t), this
                },
                clearHitCache: function() {
                    this._hitImageData = void 0
                },
                setZIndex: function(t) {
                    r.Node.prototype.setZIndex.call(this, t);
                    var e = this.getStage();
                    return e && (e.content.removeChild(this.getCanvas()._canvas), t < e.getChildren().length - 1 ? e.content.insertBefore(this.getCanvas()._canvas, e.getChildren()[t + 1].getCanvas()._canvas) : e.content.appendChild(this.getCanvas()._canvas)), this
                },
                moveToTop: function() {
                    r.Node.prototype.moveToTop.call(this);
                    var t = this.getStage();
                    t && (t.content.removeChild(this.getCanvas()._canvas), t.content.appendChild(this.getCanvas()._canvas))
                },
                moveUp: function() {
                    if (r.Node.prototype.moveUp.call(this)) {
                        var t = this.getStage();
                        t && (t.content.removeChild(this.getCanvas()._canvas), this.index < t.getChildren().length - 1 ? t.content.insertBefore(this.getCanvas()._canvas, t.getChildren()[this.index + 1].getCanvas()._canvas) : t.content.appendChild(this.getCanvas()._canvas))
                    }
                },
                moveDown: function() {
                    if (r.Node.prototype.moveDown.call(this)) {
                        var t = this.getStage();
                        if (t) {
                            var e = t.getChildren();
                            t.content.removeChild(this.getCanvas()._canvas), t.content.insertBefore(this.getCanvas()._canvas, e[this.index + 1].getCanvas()._canvas)
                        }
                    }
                },
                moveToBottom: function() {
                    if (r.Node.prototype.moveToBottom.call(this)) {
                        var t = this.getStage();
                        if (t) {
                            var e = t.getChildren();
                            t.content.removeChild(this.getCanvas()._canvas), t.content.insertBefore(this.getCanvas()._canvas, e[1].getCanvas()._canvas)
                        }
                    }
                },
                getLayer: function() {
                    return this
                },
                remove: function() {
                    var t = this.getCanvas()._canvas;
                    return r.Node.prototype.remove.call(this), t && t.parentNode && r.Util._isInDocument(t) && t.parentNode.removeChild(t), this
                },
                getStage: function() {
                    return this.parent
                },
                setSize: function(t, e) {
                    this.canvas.setSize(t, e)
                },
                getWidth: function() {
                    if (this.parent) return this.parent.getWidth()
                },
                setWidth: function() {
                    r.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.')
                },
                getHeight: function() {
                    if (this.parent) return this.parent.getHeight()
                },
                setHeight: function() {
                    r.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.')
                }
            }), r.Util.extend(r.BaseLayer, r.Container), r.Factory.addGetterSetter(r.BaseLayer, "clearBeforeDraw", !0), r.Collection.mapMethods(r.BaseLayer)
        }(),
        function() {
            var t = [{
                    x: 0,
                    y: 0
                }, {
                    x: -1,
                    y: 0
                }, {
                    x: -1,
                    y: -1
                }, {
                    x: 0,
                    y: -1
                }, {
                    x: 1,
                    y: -1
                }, {
                    x: 1,
                    y: 0
                }, {
                    x: 1,
                    y: 1
                }, {
                    x: 0,
                    y: 1
                }, {
                    x: -1,
                    y: 1
                }],
                e = t.length;
            r.Util.addMethods(r.Layer, {
                ____init: function(t) {
                    this.nodeType = "Layer", this.canvas = new r.SceneCanvas, this.hitCanvas = new r.HitCanvas, r.BaseLayer.call(this, t)
                },
                _setCanvasSize: function(t, e) {
                    this.canvas.setSize(t, e), this.hitCanvas.setSize(t, e)
                },
                _validateAdd: function(t) {
                    var e = t.getType();
                    "Group" !== e && "Shape" !== e && r.Util.error("You may only add groups and shapes to a layer.")
                },
                getIntersection: function(n) {
                    var i, r, s, o;
                    if (!this.hitGraphEnabled() || !this.isVisible()) return null;
                    for (var a = 1, c = !1;;) {
                        for (r = 0; r < e; r++) {
                            if (s = t[r], i = this._getIntersection({
                                    x: n.x + s.x * a,
                                    y: n.y + s.y * a
                                }), o = i.shape) return o;
                            i.antialiased && (c = !0)
                        }
                        if (!c) return;
                        a += 1
                    }
                },
                _getImageData: function(t, e) {
                    var n = this.hitCanvas.width || 1,
                        i = this.hitCanvas.height || 1,
                        r = Math.round(e) * n + Math.round(t);
                    return this._hitImageData || (this._hitImageData = this.hitCanvas.context.getImageData(0, 0, n, i)), [this._hitImageData.data[4 * r + 0], this._hitImageData.data[4 * r + 1], this._hitImageData.data[4 * r + 2], this._hitImageData.data[4 * r + 3]]
                },
                _getIntersection: function(t) {
                    var e, n, i = this.hitCanvas.context.getImageData(t.x, t.y, 1, 1).data,
                        s = i[3];
                    return 255 === s ? (e = r.Util._rgbToHex(i[0], i[1], i[2]), n = r.shapes["#" + e], {
                        shape: n
                    }) : s > 0 ? {
                        antialiased: !0
                    } : {}
                },
                drawScene: function(t, e) {
                    var n = this.getLayer(),
                        i = t || n && n.getCanvas();
                    return this._fire("beforeDraw", {
                        node: this
                    }), this.getClearBeforeDraw() && i.getContext().clear(), r.Container.prototype.drawScene.call(this, i, e), this._fire("draw", {
                        node: this
                    }), this
                },
                _applyTransform: function(t, e, n) {
                    var i = t.getAbsoluteTransform(n).getMatrix();
                    e.transform(i[0], i[1], i[2], i[3], i[4], i[5])
                },
                drawHit: function(t, e) {
                    var n = this.getLayer(),
                        i = t || n && n.hitCanvas;
                    return n && n.getClearBeforeDraw() && n.getHitCanvas().getContext().clear(), r.Container.prototype.drawHit.call(this, i, e), this.imageData = null, this
                },
                clear: function(t) {
                    return this.getContext().clear(t), this.getHitCanvas().getContext().clear(t), this.imageData = null, this
                },
                setVisible: function(t) {
                    return r.Node.prototype.setVisible.call(this, t), t ? (this.getCanvas()._canvas.style.display = "block", this.hitCanvas._canvas.style.display = "block") : (this.getCanvas()._canvas.style.display = "none", this.hitCanvas._canvas.style.display = "none"), this
                },
                enableHitGraph: function() {
                    return this.setHitGraphEnabled(!0), this
                },
                disableHitGraph: function() {
                    return this.setHitGraphEnabled(!1), this
                },
                setSize: function(t, e) {
                    r.BaseLayer.prototype.setSize.call(this, t, e), this.hitCanvas.setSize(t, e)
                }
            }), r.Util.extend(r.Layer, r.BaseLayer), r.Factory.addGetterSetter(r.Layer, "hitGraphEnabled", !0), r.Collection.mapMethods(r.Layer)
        }(),
        function() {
            r.Util.addMethods(r.FastLayer, {
                ____init: function(t) {
                    this.nodeType = "Layer", this.canvas = new r.SceneCanvas, r.BaseLayer.call(this, t)
                },
                _validateAdd: function(t) {
                    "Shape" !== t.getType() && r.Util.error("You may only add shapes to a fast layer.")
                },
                _setCanvasSize: function(t, e) {
                    this.canvas.setSize(t, e)
                },
                hitGraphEnabled: function() {
                    return !1
                },
                getIntersection: function() {
                    return null
                },
                drawScene: function(t) {
                    var e = this.getLayer(),
                        n = t || e && e.getCanvas();
                    return this.getClearBeforeDraw() && n.getContext().clear(), r.Container.prototype.drawScene.call(this, n), this
                },
                _applyTransform: function(t, e, n) {
                    if (!n || n._id !== this._id) {
                        var i = t.getTransform().getMatrix();
                        e.transform(i[0], i[1], i[2], i[3], i[4], i[5])
                    }
                },
                draw: function() {
                    return this.drawScene(), this
                },
                clear: function(t) {
                    return this.getContext().clear(t), this
                },
                setVisible: function(t) {
                    return r.Node.prototype.setVisible.call(this, t), this.getCanvas()._canvas.style.display = t ? "block" : "none", this
                }
            }), r.Util.extend(r.FastLayer, r.BaseLayer), r.Collection.mapMethods(r.FastLayer)
        }(),
        function() {
            r.Util.addMethods(r.Group, {
                ___init: function(t) {
                    this.nodeType = "Group", r.Container.call(this, t)
                },
                _validateAdd: function(t) {
                    var e = t.getType();
                    "Group" !== e && "Shape" !== e && r.Util.error("You may only add groups and shapes to groups.")
                }
            }), r.Util.extend(r.Group, r.Container), r.Collection.mapMethods(r.Group)
        }(),
        function() {
            r.Rect = function(t) {
                this.___init(t)
            }, r.Rect.prototype = {
                ___init: function(t) {
                    r.Shape.call(this, t), this.className = "Rect", this.sceneFunc(this._sceneFunc)
                },
                _sceneFunc: function(t) {
                    var e = this.getCornerRadius(),
                        n = this.getWidth(),
                        i = this.getHeight();
                    t.beginPath(), e ? (t.moveTo(e, 0), t.lineTo(n - e, 0), t.arc(n - e, e, e, 3 * Math.PI / 2, 0, !1), t.lineTo(n, i - e), t.arc(n - e, i - e, e, 0, Math.PI / 2, !1), t.lineTo(e, i), t.arc(e, i - e, e, Math.PI / 2, Math.PI, !1), t.lineTo(0, e), t.arc(e, e, e, Math.PI, 3 * Math.PI / 2, !1)) : t.rect(0, 0, n, i), t.closePath(), t.fillStrokeShape(this)
                }
            }, r.Util.extend(r.Rect, r.Shape), r.Factory.addGetterSetter(r.Rect, "cornerRadius", 0), r.Collection.mapMethods(r.Rect)
        }(),
        function() {
            var t = 2 * Math.PI - 1e-4;
            r.Circle = function(t) {
                this.___init(t)
            }, r.Circle.prototype = {
                ___init: function(t) {
                    r.Shape.call(this, t), this.className = "Circle", this.sceneFunc(this._sceneFunc)
                },
                _sceneFunc: function(e) {
                    e.beginPath(), e.arc(0, 0, this.getRadius(), 0, t, !1), e.closePath(), e.fillStrokeShape(this)
                },
                getWidth: function() {
                    return 2 * this.getRadius()
                },
                getHeight: function() {
                    return 2 * this.getRadius()
                },
                setWidth: function(t) {
                    r.Node.prototype.setWidth.call(this, t), this.radius() !== t / 2 && this.setRadius(t / 2)
                },
                setHeight: function(t) {
                    r.Node.prototype.setHeight.call(this, t), this.radius() !== t / 2 && this.setRadius(t / 2)
                },
                setRadius: function(t) {
                    this._setAttr("radius", t), this.setWidth(2 * t), this.setHeight(2 * t)
                }
            }, r.Util.extend(r.Circle, r.Shape), r.Factory.addGetter(r.Circle, "radius", 0), r.Factory.addOverloadedGetterSetter(r.Circle, "radius"), r.Collection.mapMethods(r.Circle)
        }(),
        function() {
            var t = 2 * Math.PI - 1e-4;
            r.Ellipse = function(t) {
                this.___init(t)
            }, r.Ellipse.prototype = {
                ___init: function(t) {
                    r.Shape.call(this, t), this.className = "Ellipse", this.sceneFunc(this._sceneFunc)
                },
                _sceneFunc: function(e) {
                    var n = this.getRadiusX(),
                        i = this.getRadiusY();
                    e.beginPath(), e.save(), n !== i && e.scale(1, i / n), e.arc(0, 0, n, 0, t, !1), e.restore(), e.closePath(), e.fillStrokeShape(this)
                },
                getWidth: function() {
                    return 2 * this.getRadiusX()
                },
                getHeight: function() {
                    return 2 * this.getRadiusY()
                },
                setWidth: function(t) {
                    r.Node.prototype.setWidth.call(this, t), this.setRadius({
                        x: t / 2
                    })
                },
                setHeight: function(t) {
                    r.Node.prototype.setHeight.call(this, t), this.setRadius({
                        y: t / 2
                    })
                }
            }, r.Util.extend(r.Ellipse, r.Shape), r.Factory.addComponentsGetterSetter(r.Ellipse, "radius", ["x", "y"]), r.Factory.addGetterSetter(r.Ellipse, "radiusX", 0), r.Factory.addGetterSetter(r.Ellipse, "radiusY", 0), r.Collection.mapMethods(r.Ellipse)
        }(),
        function() {
            var t = 2 * Math.PI - 1e-4;
            r.Ring = function(t) {
                this.___init(t)
            }, r.Ring.prototype = {
                ___init: function(t) {
                    r.Shape.call(this, t), this.className = "Ring", this.sceneFunc(this._sceneFunc)
                },
                _sceneFunc: function(e) {
                    e.beginPath(), e.arc(0, 0, this.getInnerRadius(), 0, t, !1), e.moveTo(this.getOuterRadius(), 0), e.arc(0, 0, this.getOuterRadius(), t, 0, !0), e.closePath(), e.fillStrokeShape(this)
                },
                getWidth: function() {
                    return 2 * this.getOuterRadius()
                },
                getHeight: function() {
                    return 2 * this.getOuterRadius()
                },
                setWidth: function(t) {
                    r.Node.prototype.setWidth.call(this, t), this.outerRadius() !== t / 2 && this.setOuterRadius(t / 2)
                },
                setHeight: function(t) {
                    r.Node.prototype.setHeight.call(this, t), this.outerRadius() !== t / 2 && this.setOuterRadius(t / 2)
                },
                setOuterRadius: function(t) {
                    this._setAttr("outerRadius", t), this.setWidth(2 * t), this.setHeight(2 * t)
                }
            }, r.Util.extend(r.Ring, r.Shape), r.Factory.addGetterSetter(r.Ring, "innerRadius", 0), r.Factory.addGetter(r.Ring, "outerRadius", 0), r.Factory.addOverloadedGetterSetter(r.Ring, "outerRadius"), r.Collection.mapMethods(r.Ring)
        }(),
        function() {
            r.Wedge = function(t) {
                this.___init(t)
            }, r.Wedge.prototype = {
                ___init: function(t) {
                    r.Shape.call(this, t), this.className = "Wedge", this.sceneFunc(this._sceneFunc)
                },
                _sceneFunc: function(t) {
                    t.beginPath(), t.arc(0, 0, this.getRadius(), 0, r.getAngle(this.getAngle()), this.getClockwise()), t.lineTo(0, 0), t.closePath(), t.fillStrokeShape(this)
                }
            }, r.Util.extend(r.Wedge, r.Shape), r.Factory.addGetterSetter(r.Wedge, "radius", 0), r.Factory.addGetterSetter(r.Wedge, "angle", 0), r.Factory.addGetterSetter(r.Wedge, "clockwise", !1), r.Factory.backCompat(r.Wedge, {
                angleDeg: "angle",
                getAngleDeg: "getAngle",
                setAngleDeg: "setAngle"
            }), r.Collection.mapMethods(r.Wedge)
        }(),
        function() {
            r.Arc = function(t) {
                this.___init(t)
            }, r.Arc.prototype = {
                ___init: function(t) {
                    r.Shape.call(this, t), this.className = "Arc", this.sceneFunc(this._sceneFunc)
                },
                _sceneFunc: function(t) {
                    var e = r.getAngle(this.angle()),
                        n = this.clockwise();
                    t.beginPath(), t.arc(0, 0, this.getOuterRadius(), 0, e, n), t.arc(0, 0, this.getInnerRadius(), e, 0, !n), t.closePath(), t.fillStrokeShape(this)
                }
            }, r.Util.extend(r.Arc, r.Shape), r.Factory.addGetterSetter(r.Arc, "innerRadius", 0), r.Factory.addGetterSetter(r.Arc, "outerRadius", 0), r.Factory.addGetterSetter(r.Arc, "angle", 0), r.Factory.addGetterSetter(r.Arc, "clockwise", !1), r.Collection.mapMethods(r.Arc)
        }(),
        function() {
            r.Image = function(t) {
                this.___init(t)
            }, r.Image.prototype = {
                ___init: function(t) {
                    r.Shape.call(this, t), this.className = "Image", this.sceneFunc(this._sceneFunc), this.hitFunc(this._hitFunc)
                },
                _useBufferCanvas: function() {
                    return (this.hasShadow() || 1 !== this.getAbsoluteOpacity()) && this.hasStroke() && this.getStage()
                },
                _sceneFunc: function(t) {
                    var e, n, i, r = this.getWidth(),
                        s = this.getHeight(),
                        o = this.getImage();
                    o && (e = this.getCropWidth(), n = this.getCropHeight(), i = e && n ? [o, this.getCropX(), this.getCropY(), e, n, 0, 0, r, s] : [o, 0, 0, r, s]), (this.hasFill() || this.hasStroke() || this.hasShadow()) && (t.beginPath(), t.rect(0, 0, r, s), t.closePath(), t.fillStrokeShape(this)), o && t.drawImage.apply(t, i)
                },
                _hitFunc: function(t) {
                    var e = this.getWidth(),
                        n = this.getHeight();
                    t.beginPath(), t.rect(0, 0, e, n), t.closePath(), t.fillStrokeShape(this)
                },
                getWidth: function() {
                    var t = this.getImage();
                    return this.attrs.width || (t ? t.width : 0)
                },
                getHeight: function() {
                    var t = this.getImage();
                    return this.attrs.height || (t ? t.height : 0)
                }
            }, r.Util.extend(r.Image, r.Shape), r.Factory.addGetterSetter(r.Image, "image"), r.Factory.addComponentsGetterSetter(r.Image, "crop", ["x", "y", "width", "height"]), r.Factory.addGetterSetter(r.Image, "cropX", 0), r.Factory.addGetterSetter(r.Image, "cropY", 0), r.Factory.addGetterSetter(r.Image, "cropWidth", 0), r.Factory.addGetterSetter(r.Image, "cropHeight", 0), r.Collection.mapMethods(r.Image)
        }(),
        function() {
            function t(t) {
                t.fillText(this.partialText, 0, 0)
            }

            function e(t) {
                t.strokeText(this.partialText, 0, 0)
            }
            var n = ["fontFamily", "fontSize", "fontStyle", "fontVariant", "padding", "align", "lineHeight", "text", "width", "height", "wrap"],
                i = n.length,
                s = r.Util.createCanvasElement().getContext("2d");
            r.Text = function(t) {
                this.___init(t)
            }, r.Text.prototype = {
                ___init: function(s) {
                    s = s || {}, s.fill = s.fill || "black", void 0 === s.width && (s.width = "auto"), void 0 === s.height && (s.height = "auto"), r.Shape.call(this, s), this._fillFunc = t, this._strokeFunc = e, this.className = "Text";
                    for (var o = 0; o < i; o++) this.on(n[o] + "Change.kinetic", this._setTextData);
                    this._setTextData(), this.sceneFunc(this._sceneFunc), this.hitFunc(this._hitFunc)
                },
                _sceneFunc: function(t) {
                    var e, n = this.getPadding(),
                        i = this.getTextHeight(),
                        r = this.getLineHeight() * i,
                        s = this.textArr,
                        o = s.length,
                        a = this.getWidth();
                    for (t.setAttr("font", this._getContextFont()), t.setAttr("textBaseline", "middle"), t.setAttr("textAlign", "left"), t.save(), t.translate(n, 0), t.translate(0, n + i / 2), e = 0; e < o; e++) {
                        var c = s[e],
                            l = c.text,
                            u = c.width;
                        t.save(), "right" === this.getAlign() ? t.translate(a - u - 2 * n, 0) : "center" === this.getAlign() && t.translate((a - u - 2 * n) / 2, 0), this.partialText = l, t.fillStrokeShape(this), t.restore(), t.translate(0, r)
                    }
                    t.restore()
                },
                _hitFunc: function(t) {
                    var e = this.getWidth(),
                        n = this.getHeight();
                    t.beginPath(), t.rect(0, 0, e, n), t.closePath(), t.fillStrokeShape(this)
                },
                setText: function(t) {
                    var e = r.Util._isString(t) ? t : t.toString();
                    return this._setAttr("text", e), this
                },
                getWidth: function() {
                    return "auto" === this.attrs.width ? this.getTextWidth() + 2 * this.getPadding() : this.attrs.width
                },
                getHeight: function() {
                    return "auto" === this.attrs.height ? this.getTextHeight() * this.textArr.length * this.getLineHeight() + 2 * this.getPadding() : this.attrs.height
                },
                getTextWidth: function() {
                    return this.textWidth
                },
                getTextHeight: function() {
                    return this.textHeight
                },
                _getTextSize: function(t) {
                    var e, n = s,
                        i = this.getFontSize();
                    return n.save(), n.font = this._getContextFont(), e = n.measureText(t), n.restore(), {
                        width: e.width,
                        height: parseInt(i, 10)
                    }
                },
                _getContextFont: function() {
                    return this.getFontStyle() + " " + this.getFontVariant() + " " + this.getFontSize() + "px " + this.getFontFamily()
                },
                _addTextLine: function(t, e) {
                    return this.textArr.push({
                        text: t,
                        width: e
                    })
                },
                _getTextWidth: function(t) {
                    return s.measureText(t).width
                },
                _setTextData: function() {
                    var t = this.getText().split("\n"),
                        e = +this.getFontSize(),
                        n = 0,
                        i = this.getLineHeight() * e,
                        r = this.attrs.width,
                        o = this.attrs.height,
                        a = "auto" !== r,
                        c = "auto" !== o,
                        l = this.getPadding(),
                        u = r - 2 * l,
                        h = o - 2 * l,
                        f = 0,
                        d = this.getWrap(),
                        p = "none" !== d,
                        g = "char" !== d && p;
                    this.textArr = [], s.save(), s.font = this._getContextFont();
                    for (var m = 0, v = t.length; m < v; ++m) {
                        var y = t[m],
                            b = this._getTextWidth(y);
                        if (a && b > u)
                            for (; y.length > 0;) {
                                for (var _ = 0, w = y.length, x = "", C = 0; _ < w;) {
                                    var S = _ + w >>> 1,
                                        T = y.slice(0, S + 1),
                                        P = this._getTextWidth(T);
                                    P <= u ? (_ = S + 1, x = T, C = P) : w = S
                                }
                                if (!x) break;
                                if (g) {
                                    var k = Math.max(x.lastIndexOf(" "), x.lastIndexOf("-")) + 1;
                                    k > 0 && (_ = k, x = x.slice(0, _), C = this._getTextWidth(x))
                                }
                                if (this._addTextLine(x, C), n = Math.max(n, C), f += i, !p || c && f + i > h) break;
                                if (y = y.slice(_), y.length > 0 && (b = this._getTextWidth(y)) <= u) {
                                    this._addTextLine(y, b), f += i, n = Math.max(n, b);
                                    break
                                }
                            } else this._addTextLine(y, b), f += i, n = Math.max(n, b);
                        if (c && f + i > h) break
                    }
                    s.restore(), this.textHeight = e, this.textWidth = n
                }
            }, r.Util.extend(r.Text, r.Shape), r.Factory.addGetterSetter(r.Text, "fontFamily", "Arial"), r.Factory.addGetterSetter(r.Text, "fontSize", 12), r.Factory.addGetterSetter(r.Text, "fontStyle", "normal"), r.Factory.addGetterSetter(r.Text, "fontVariant", "normal"), r.Factory.addGetterSetter(r.Text, "padding", 0), r.Factory.addGetterSetter(r.Text, "align", "left"), r.Factory.addGetterSetter(r.Text, "lineHeight", 1), r.Factory.addGetterSetter(r.Text, "wrap", "word"), r.Factory.addGetter(r.Text, "text", ""), r.Factory.addOverloadedGetterSetter(r.Text, "text"), r.Collection.mapMethods(r.Text)
        }(),
        function() {
            r.Line = function(t) {
                this.___init(t)
            }, r.Line.prototype = {
                ___init: function(t) {
                    r.Shape.call(this, t), this.className = "Line", this.on("pointsChange.kinetic tensionChange.kinetic closedChange.kinetic", function() {
                        this._clearCache("tensionPoints")
                    }), this.sceneFunc(this._sceneFunc)
                },
                _sceneFunc: function(t) {
                    var e, n, i, r = this.getPoints(),
                        s = r.length,
                        o = this.getTension(),
                        a = this.getClosed();
                    if (s) {
                        if (t.beginPath(), t.moveTo(r[0], r[1]), 0 !== o && s > 4) {
                            for (e = this.getTensionPoints(), n = e.length, i = a ? 0 : 4, a || t.quadraticCurveTo(e[0], e[1], e[2], e[3]); i < n - 2;) t.bezierCurveTo(e[i++], e[i++], e[i++], e[i++], e[i++], e[i++]);
                            a || t.quadraticCurveTo(e[n - 2], e[n - 1], r[s - 2], r[s - 1])
                        } else
                            for (i = 2; i < s; i += 2) t.lineTo(r[i], r[i + 1]);
                        a ? (t.closePath(), t.fillStrokeShape(this)) : t.strokeShape(this)
                    }
                },
                getTensionPoints: function() {
                    return this._getCache("tensionPoints", this._getTensionPoints)
                },
                _getTensionPoints: function() {
                    return this.getClosed() ? this._getTensionPointsClosed() : r.Util._expandPoints(this.getPoints(), this.getTension())
                },
                _getTensionPointsClosed: function() {
                    var t = this.getPoints(),
                        e = t.length,
                        n = this.getTension(),
                        i = r.Util,
                        s = i._getControlPoints(t[e - 2], t[e - 1], t[0], t[1], t[2], t[3], n),
                        o = i._getControlPoints(t[e - 4], t[e - 3], t[e - 2], t[e - 1], t[0], t[1], n),
                        a = r.Util._expandPoints(t, n);
                    return [s[2], s[3]].concat(a).concat([o[0], o[1], t[e - 2], t[e - 1], o[2], o[3], s[0], s[1], t[0], t[1]])
                }
            }, r.Util.extend(r.Line, r.Shape), r.Factory.addGetterSetter(r.Line, "closed", !1), r.Factory.addGetterSetter(r.Line, "tension", 0), r.Factory.addGetterSetter(r.Line, "points", []), r.Collection.mapMethods(r.Line)
        }(),
        function() {
            r.Sprite = function(t) {
                this.___init(t)
            }, r.Sprite.prototype = {
                ___init: function(t) {
                    r.Shape.call(this, t), this.className = "Sprite", this._updated = !0;
                    var e = this;
                    this.anim = new r.Animation(function() {
                        var t = e._updated;
                        return e._updated = !1, t
                    }), this.on("animationChange.kinetic", function() {
                        this.frameIndex(0)
                    }), this.on("frameIndexChange.kinetic", function() {
                        this._updated = !0
                    }), this.on("frameRateChange.kinetic", function() {
                        this.anim.isRunning() && (clearInterval(this.interval), this._setInterval())
                    }), this.sceneFunc(this._sceneFunc), this.hitFunc(this._hitFunc)
                },
                _sceneFunc: function(t) {
                    var e = this.getAnimation(),
                        n = this.frameIndex(),
                        i = 4 * n,
                        r = this.getAnimations()[e],
                        s = this.frameOffsets(),
                        o = r[i + 0],
                        a = r[i + 1],
                        c = r[i + 2],
                        l = r[i + 3],
                        u = this.getImage();
                    if (u)
                        if (s) {
                            var h = s[e],
                                f = 2 * n;
                            t.drawImage(u, o, a, c, l, h[f + 0], h[f + 1], c, l)
                        } else t.drawImage(u, o, a, c, l, 0, 0, c, l)
                },
                _hitFunc: function(t) {
                    var e = this.getAnimation(),
                        n = this.frameIndex(),
                        i = 4 * n,
                        r = this.getAnimations()[e],
                        s = this.frameOffsets(),
                        o = r[i + 2],
                        a = r[i + 3];
                    if (t.beginPath(), s) {
                        var c = s[e],
                            l = 2 * n;
                        t.rect(c[l + 0], c[l + 1], o, a)
                    } else t.rect(0, 0, o, a);
                    t.closePath(), t.fillShape(this)
                },
                _useBufferCanvas: function() {
                    return (this.hasShadow() || 1 !== this.getAbsoluteOpacity()) && this.hasStroke()
                },
                _setInterval: function() {
                    var t = this;
                    this.interval = setInterval(function() {
                        t._updateIndex()
                    }, 1e3 / this.getFrameRate())
                },
                start: function() {
                    var t = this.getLayer();
                    this.anim.setLayers(t), this._setInterval(), this.anim.start()
                },
                stop: function() {
                    this.anim.stop(), clearInterval(this.interval)
                },
                isRunning: function() {
                    return this.anim.isRunning()
                },
                _updateIndex: function() {
                    var t = this.frameIndex(),
                        e = this.getAnimation();
                    t < this.getAnimations()[e].length / 4 - 1 ? this.frameIndex(t + 1) : this.frameIndex(0)
                }
            }, r.Util.extend(r.Sprite, r.Shape), r.Factory.addGetterSetter(r.Sprite, "animation"), r.Factory.addGetterSetter(r.Sprite, "animations"), r.Factory.addGetterSetter(r.Sprite, "frameOffsets"), r.Factory.addGetterSetter(r.Sprite, "image"), r.Factory.addGetterSetter(r.Sprite, "frameIndex", 0), r.Factory.addGetterSetter(r.Sprite, "frameRate", 17), r.Factory.backCompat(r.Sprite, {
                index: "frameIndex",
                getIndex: "getFrameIndex",
                setIndex: "setFrameIndex"
            }), r.Collection.mapMethods(r.Sprite)
        }(),
        function() {
            r.Path = function(t) {
                this.___init(t)
            }, r.Path.prototype = {
                ___init: function(t) {
                    this.dataArray = [];
                    var e = this;
                    r.Shape.call(this, t), this.className = "Path", this.dataArray = r.Path.parsePathData(this.getData()), this.on("dataChange.kinetic", function() {
                        e.dataArray = r.Path.parsePathData(this.getData())
                    }), this.sceneFunc(this._sceneFunc)
                },
                _sceneFunc: function(t) {
                    var e = this.dataArray,
                        n = !1;
                    t.beginPath();
                    for (var i = 0; i < e.length; i++) {
                        var r = e[i].command,
                            s = e[i].points;
                        switch (r) {
                            case "L":
                                t.lineTo(s[0], s[1]);
                                break;
                            case "M":
                                t.moveTo(s[0], s[1]);
                                break;
                            case "C":
                                t.bezierCurveTo(s[0], s[1], s[2], s[3], s[4], s[5]);
                                break;
                            case "Q":
                                t.quadraticCurveTo(s[0], s[1], s[2], s[3]);
                                break;
                            case "A":
                                var o = s[0],
                                    a = s[1],
                                    c = s[2],
                                    l = s[3],
                                    u = s[4],
                                    h = s[5],
                                    f = s[6],
                                    d = s[7],
                                    p = c > l ? c : l,
                                    g = c > l ? 1 : c / l,
                                    m = c > l ? l / c : 1;
                                t.translate(o, a), t.rotate(f), t.scale(g, m), t.arc(0, 0, p, u, u + h, 1 - d), t.scale(1 / g, 1 / m), t.rotate(-f), t.translate(-o, -a);
                                break;
                            case "z":
                                t.closePath(), n = !0
                        }
                    }
                    n ? t.fillStrokeShape(this) : t.strokeShape(this)
                }
            }, r.Util.extend(r.Path, r.Shape), r.Path.getLineLength = function(t, e, n, i) {
                return Math.sqrt((n - t) * (n - t) + (i - e) * (i - e))
            }, r.Path.getPointOnLine = function(t, e, n, i, r, s, o) {
                void 0 === s && (s = e), void 0 === o && (o = n);
                var a = (r - n) / (i - e + 1e-8),
                    c = Math.sqrt(t * t / (1 + a * a));
                i < e && (c *= -1);
                var l, u = a * c;
                if (i === e) l = {
                    x: s,
                    y: o + u
                };
                else if ((o - n) / (s - e + 1e-8) === a) l = {
                    x: s + c,
                    y: o + u
                };
                else {
                    var h, f, d = this.getLineLength(e, n, i, r);
                    if (d < 1e-8) return;
                    var p = (s - e) * (i - e) + (o - n) * (r - n);
                    p /= d * d, h = e + p * (i - e), f = n + p * (r - n);
                    var g = this.getLineLength(s, o, h, f),
                        m = Math.sqrt(t * t - g * g);
                    c = Math.sqrt(m * m / (1 + a * a)), i < e && (c *= -1), u = a * c, l = {
                        x: h + c,
                        y: f + u
                    }
                }
                return l
            }, r.Path.getPointOnCubicBezier = function(t, e, n, i, r, s, o, a, c) {
                function l(t) {
                    return t * t * t
                }

                function u(t) {
                    return 3 * t * t * (1 - t)
                }

                function h(t) {
                    return 3 * t * (1 - t) * (1 - t)
                }

                function f(t) {
                    return (1 - t) * (1 - t) * (1 - t)
                }
                return {
                    x: a * l(t) + s * u(t) + i * h(t) + e * f(t),
                    y: c * l(t) + o * u(t) + r * h(t) + n * f(t)
                }
            }, r.Path.getPointOnQuadraticBezier = function(t, e, n, i, r, s, o) {
                function a(t) {
                    return t * t
                }

                function c(t) {
                    return 2 * t * (1 - t)
                }

                function l(t) {
                    return (1 - t) * (1 - t)
                }
                return {
                    x: s * a(t) + i * c(t) + e * l(t),
                    y: o * a(t) + r * c(t) + n * l(t)
                }
            }, r.Path.getPointOnEllipticalArc = function(t, e, n, i, r, s) {
                var o = Math.cos(s),
                    a = Math.sin(s),
                    c = {
                        x: n * Math.cos(r),
                        y: i * Math.sin(r)
                    };
                return {
                    x: t + (c.x * o - c.y * a),
                    y: e + (c.x * a + c.y * o)
                }
            }, r.Path.parsePathData = function(t) {
                if (!t) return [];
                var e = t,
                    n = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"];
                e = e.replace(new RegExp(" ", "g"), ",");
                for (var i = 0; i < n.length; i++) e = e.replace(new RegExp(n[i], "g"), "|" + n[i]);
                var r = e.split("|"),
                    s = [],
                    o = 0,
                    a = 0;
                for (i = 1; i < r.length; i++) {
                    var c = r[i],
                        l = c.charAt(0);
                    c = c.slice(1), c = c.replace(new RegExp(",-", "g"), "-"), c = c.replace(new RegExp("-", "g"), ",-"), c = c.replace(new RegExp("e,-", "g"), "e-");
                    var u = c.split(",");
                    u.length > 0 && "" === u[0] && u.shift();
                    for (var h = 0; h < u.length; h++) u[h] = parseFloat(u[h]);
                    for (; u.length > 0 && !isNaN(u[0]);) {
                        var f, d, p, g, m, v, y, b, _, w, x = null,
                            C = [],
                            S = o,
                            T = a;
                        switch (l) {
                            case "l":
                                o += u.shift(), a += u.shift(), x = "L", C.push(o, a);
                                break;
                            case "L":
                                o = u.shift(), a = u.shift(), C.push(o, a);
                                break;
                            case "m":
                                var P = u.shift(),
                                    k = u.shift();
                                if (o += P, a += k, x = "M", s.length > 2 && "z" === s[s.length - 1].command)
                                    for (var F = s.length - 2; F >= 0; F--)
                                        if ("M" === s[F].command) {
                                            o = s[F].points[0] + P, a = s[F].points[1] + k;
                                            break
                                        } C.push(o, a), l = "l";
                                break;
                            case "M":
                                o = u.shift(), a = u.shift(), x = "M", C.push(o, a), l = "L";
                                break;
                            case "h":
                                o += u.shift(), x = "L", C.push(o, a);
                                break;
                            case "H":
                                o = u.shift(), x = "L", C.push(o, a);
                                break;
                            case "v":
                                a += u.shift(), x = "L", C.push(o, a);
                                break;
                            case "V":
                                a = u.shift(), x = "L", C.push(o, a);
                                break;
                            case "C":
                                C.push(u.shift(), u.shift(), u.shift(), u.shift()), o = u.shift(), a = u.shift(), C.push(o, a);
                                break;
                            case "c":
                                C.push(o + u.shift(), a + u.shift(), o + u.shift(), a + u.shift()), o += u.shift(), a += u.shift(), x = "C", C.push(o, a);
                                break;
                            case "S":
                                d = o, p = a, f = s[s.length - 1], "C" === f.command && (d = o + (o - f.points[2]), p = a + (a - f.points[3])), C.push(d, p, u.shift(), u.shift()), o = u.shift(), a = u.shift(), x = "C", C.push(o, a);
                                break;
                            case "s":
                                d = o, p = a, f = s[s.length - 1], "C" === f.command && (d = o + (o - f.points[2]), p = a + (a - f.points[3])), C.push(d, p, o + u.shift(), a + u.shift()), o += u.shift(), a += u.shift(), x = "C", C.push(o, a);
                                break;
                            case "Q":
                                C.push(u.shift(), u.shift()), o = u.shift(), a = u.shift(), C.push(o, a);
                                break;
                            case "q":
                                C.push(o + u.shift(), a + u.shift()), o += u.shift(), a += u.shift(), x = "Q", C.push(o, a);
                                break;
                            case "T":
                                d = o, p = a, f = s[s.length - 1], "Q" === f.command && (d = o + (o - f.points[0]), p = a + (a - f.points[1])), o = u.shift(), a = u.shift(), x = "Q", C.push(d, p, o, a);
                                break;
                            case "t":
                                d = o, p = a, f = s[s.length - 1], "Q" === f.command && (d = o + (o - f.points[0]), p = a + (a - f.points[1])), o += u.shift(), a += u.shift(), x = "Q", C.push(d, p, o, a);
                                break;
                            case "A":
                                g = u.shift(), m = u.shift(), v = u.shift(), y = u.shift(), b = u.shift(), _ = o, w = a, o = u.shift(), a = u.shift(), x = "A", C = this.convertEndpointToCenterParameterization(_, w, o, a, y, b, g, m, v);
                                break;
                            case "a":
                                g = u.shift(), m = u.shift(), v = u.shift(), y = u.shift(), b = u.shift(), _ = o, w = a, o += u.shift(), a += u.shift(), x = "A", C = this.convertEndpointToCenterParameterization(_, w, o, a, y, b, g, m, v)
                        }
                        s.push({
                            command: x || l,
                            points: C,
                            start: {
                                x: S,
                                y: T
                            },
                            pathLength: this.calcLength(S, T, x || l, C)
                        })
                    }
                    "z" !== l && "Z" !== l || s.push({
                        command: "z",
                        points: [],
                        start: void 0,
                        pathLength: 0
                    })
                }
                return s
            }, r.Path.calcLength = function(t, e, n, i) {
                var s, o, a, c, l = r.Path;
                switch (n) {
                    case "L":
                        return l.getLineLength(t, e, i[0], i[1]);
                    case "C":
                        for (s = 0, o = l.getPointOnCubicBezier(0, t, e, i[0], i[1], i[2], i[3], i[4], i[5]), c = .01; c <= 1; c += .01) a = l.getPointOnCubicBezier(c, t, e, i[0], i[1], i[2], i[3], i[4], i[5]), s += l.getLineLength(o.x, o.y, a.x, a.y), o = a;
                        return s;
                    case "Q":
                        for (s = 0, o = l.getPointOnQuadraticBezier(0, t, e, i[0], i[1], i[2], i[3]), c = .01; c <= 1; c += .01) a = l.getPointOnQuadraticBezier(c, t, e, i[0], i[1], i[2], i[3]), s += l.getLineLength(o.x, o.y, a.x, a.y), o = a;
                        return s;
                    case "A":
                        s = 0;
                        var u = i[4],
                            h = i[5],
                            f = i[4] + h,
                            d = Math.PI / 180;
                        if (Math.abs(u - f) < d && (d = Math.abs(u - f)), o = l.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], u, 0), h < 0)
                            for (c = u - d; c > f; c -= d) a = l.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], c, 0), s += l.getLineLength(o.x, o.y, a.x, a.y), o = a;
                        else
                            for (c = u + d; c < f; c += d) a = l.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], c, 0), s += l.getLineLength(o.x, o.y, a.x, a.y), o = a;
                        return a = l.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], f, 0), s += l.getLineLength(o.x, o.y, a.x, a.y)
                }
                return 0
            }, r.Path.convertEndpointToCenterParameterization = function(t, e, n, i, r, s, o, a, c) {
                var l = c * (Math.PI / 180),
                    u = Math.cos(l) * (t - n) / 2 + Math.sin(l) * (e - i) / 2,
                    h = -1 * Math.sin(l) * (t - n) / 2 + Math.cos(l) * (e - i) / 2,
                    f = u * u / (o * o) + h * h / (a * a);
                f > 1 && (o *= Math.sqrt(f), a *= Math.sqrt(f));
                var d = Math.sqrt((o * o * (a * a) - o * o * (h * h) - a * a * (u * u)) / (o * o * (h * h) + a * a * (u * u)));
                r === s && (d *= -1), isNaN(d) && (d = 0);
                var p = d * o * h / a,
                    g = d * -a * u / o,
                    m = (t + n) / 2 + Math.cos(l) * p - Math.sin(l) * g,
                    v = (e + i) / 2 + Math.sin(l) * p + Math.cos(l) * g,
                    y = function(t) {
                        return Math.sqrt(t[0] * t[0] + t[1] * t[1])
                    },
                    b = function(t, e) {
                        return (t[0] * e[0] + t[1] * e[1]) / (y(t) * y(e))
                    },
                    _ = function(t, e) {
                        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(b(t, e))
                    },
                    w = _([1, 0], [(u - p) / o, (h - g) / a]),
                    x = [(u - p) / o, (h - g) / a],
                    C = [(-1 * u - p) / o, (-1 * h - g) / a],
                    S = _(x, C);
                return b(x, C) <= -1 && (S = Math.PI), b(x, C) >= 1 && (S = 0), 0 === s && S > 0 && (S -= 2 * Math.PI), 1 === s && S < 0 && (S += 2 * Math.PI), [m, v, o, a, w, S, l, s]
            }, r.Factory.addGetterSetter(r.Path, "data"), r.Collection.mapMethods(r.Path)
        }(),
        function() {
            function t(t) {
                t.fillText(this.partialText, 0, 0)
            }

            function e(t) {
                t.strokeText(this.partialText, 0, 0)
            }
            r.TextPath = function(t) {
                this.___init(t)
            }, r.TextPath.prototype = {
                ___init: function(n) {
                    var i = this;
                    this.dummyCanvas = r.Util.createCanvasElement(), this.dataArray = [], r.Shape.call(this, n), this._fillFunc = t, this._strokeFunc = e, this._fillFuncHit = t, this._strokeFuncHit = e, this.className = "TextPath", this.dataArray = r.Path.parsePathData(this.attrs.data), this.on("dataChange.kinetic", function() {
                        i.dataArray = r.Path.parsePathData(this.attrs.data)
                    }), this.on("textChange.kinetic textStroke.kinetic textStrokeWidth.kinetic", i._setTextData), i._setTextData(), this.sceneFunc(this._sceneFunc)
                },
                _sceneFunc: function(t) {
                    t.setAttr("font", this._getContextFont()), t.setAttr("textBaseline", "middle"), t.setAttr("textAlign", "left"), t.save();
                    for (var e = this.glyphInfo, n = 0; n < e.length; n++) {
                        t.save();
                        var i = e[n].p0;
                        t.translate(i.x, i.y), t.rotate(e[n].rotation), this.partialText = e[n].text, t.fillStrokeShape(this), t.restore()
                    }
                    t.restore()
                },
                getTextWidth: function() {
                    return this.textWidth
                },
                getTextHeight: function() {
                    return this.textHeight
                },
                setText: function(t) {
                    r.Text.prototype.setText.call(this, t)
                },
                _getTextSize: function(t) {
                    var e = this.dummyCanvas,
                        n = e.getContext("2d");
                    n.save(), n.font = this._getContextFont();
                    var i = n.measureText(t);
                    return n.restore(), {
                        width: i.width,
                        height: parseInt(this.attrs.fontSize, 10)
                    }
                },
                _setTextData: function() {
                    var t = this,
                        e = this._getTextSize(this.attrs.text);
                    this.textWidth = e.width, this.textHeight = e.height, this.glyphInfo = [];
                    for (var n, i, s, o = this.attrs.text.split(""), a = -1, c = 0, l = function() {
                            c = 0;
                            for (var e = t.dataArray, i = a + 1; i < e.length; i++) {
                                if (e[i].pathLength > 0) return a = i, e[i];
                                "M" == e[i].command && (n = {
                                    x: e[i].points[0],
                                    y: e[i].points[1]
                                })
                            }
                            return {}
                        }, u = 0; u < o.length && (function(e) {
                            var o = t._getTextSize(e).width,
                                a = 0,
                                u = 0;
                            for (i = void 0; Math.abs(o - a) / o > .01 && u < 25;) {
                                u++;
                                for (var h = a; void 0 === s;)(s = l()) && h + s.pathLength < o && (h += s.pathLength, s = void 0);
                                if (s === {} || void 0 === n) return;
                                var f = !1;
                                switch (s.command) {
                                    case "L":
                                        r.Path.getLineLength(n.x, n.y, s.points[0], s.points[1]) > o ? i = r.Path.getPointOnLine(o, n.x, n.y, s.points[0], s.points[1], n.x, n.y) : s = void 0;
                                        break;
                                    case "A":
                                        var d = s.points[4],
                                            p = s.points[5],
                                            g = s.points[4] + p;
                                        0 === c ? c = d + 1e-8 : o > a ? c += Math.PI / 180 * p / Math.abs(p) : c -= Math.PI / 360 * p / Math.abs(p), (p < 0 && c < g || p >= 0 && c > g) && (c = g, f = !0), i = r.Path.getPointOnEllipticalArc(s.points[0], s.points[1], s.points[2], s.points[3], c, s.points[6]);
                                        break;
                                    case "C":
                                        0 === c ? c = o > s.pathLength ? 1e-8 : o / s.pathLength : o > a ? c += (o - a) / s.pathLength : c -= (a - o) / s.pathLength, c > 1 && (c = 1, f = !0), i = r.Path.getPointOnCubicBezier(c, s.start.x, s.start.y, s.points[0], s.points[1], s.points[2], s.points[3], s.points[4], s.points[5]);
                                        break;
                                    case "Q":
                                        0 === c ? c = o / s.pathLength : o > a ? c += (o - a) / s.pathLength : c -= (a - o) / s.pathLength, c > 1 && (c = 1, f = !0), i = r.Path.getPointOnQuadraticBezier(c, s.start.x, s.start.y, s.points[0], s.points[1], s.points[2], s.points[3])
                                }
                                void 0 !== i && (a = r.Path.getLineLength(n.x, n.y, i.x, i.y)), f && (f = !1, s = void 0)
                            }
                        }(o[u]), void 0 !== n && void 0 !== i); u++) {
                        var h = r.Path.getLineLength(n.x, n.y, i.x, i.y),
                            f = r.Path.getPointOnLine(0 + h / 2, n.x, n.y, i.x, i.y),
                            d = Math.atan2(i.y - n.y, i.x - n.x);
                        this.glyphInfo.push({
                            transposeX: f.x,
                            transposeY: f.y,
                            text: o[u],
                            rotation: d,
                            p0: n,
                            p1: i
                        }), n = i
                    }
                }
            }, r.TextPath.prototype._getContextFont = r.Text.prototype._getContextFont, r.Util.extend(r.TextPath, r.Shape), r.Factory.addGetterSetter(r.TextPath, "fontFamily", "Arial"), r.Factory.addGetterSetter(r.TextPath, "fontSize", 12), r.Factory.addGetterSetter(r.TextPath, "fontStyle", "normal"), r.Factory.addGetterSetter(r.TextPath, "fontVariant", "normal"), r.Factory.addGetter(r.TextPath, "text", ""), r.Collection.mapMethods(r.TextPath)
        }(),
        function() {
            r.RegularPolygon = function(t) {
                this.___init(t)
            }, r.RegularPolygon.prototype = {
                ___init: function(t) {
                    r.Shape.call(this, t), this.className = "RegularPolygon", this.sceneFunc(this._sceneFunc)
                },
                _sceneFunc: function(t) {
                    var e, n, i, r = this.attrs.sides,
                        s = this.attrs.radius;
                    for (t.beginPath(), t.moveTo(0, 0 - s), e = 1; e < r; e++) n = s * Math.sin(2 * e * Math.PI / r), i = -1 * s * Math.cos(2 * e * Math.PI / r), t.lineTo(n, i);
                    t.closePath(), t.fillStrokeShape(this)
                }
            }, r.Util.extend(r.RegularPolygon, r.Shape), r.Factory.addGetterSetter(r.RegularPolygon, "radius", 0), r.Factory.addGetterSetter(r.RegularPolygon, "sides", 0), r.Collection.mapMethods(r.RegularPolygon)
        }(),
        function() {
            r.Star = function(t) {
                this.___init(t)
            }, r.Star.prototype = {
                ___init: function(t) {
                    r.Shape.call(this, t), this.className = "Star", this.sceneFunc(this._sceneFunc)
                },
                _sceneFunc: function(t) {
                    var e = this.innerRadius(),
                        n = this.outerRadius(),
                        i = this.numPoints();
                    t.beginPath(), t.moveTo(0, 0 - n);
                    for (var r = 1; r < 2 * i; r++) {
                        var s = r % 2 == 0 ? n : e,
                            o = s * Math.sin(r * Math.PI / i),
                            a = -1 * s * Math.cos(r * Math.PI / i);
                        t.lineTo(o, a)
                    }
                    t.closePath(), t.fillStrokeShape(this)
                }
            }, r.Util.extend(r.Star, r.Shape), r.Factory.addGetterSetter(r.Star, "numPoints", 5), r.Factory.addGetterSetter(r.Star, "innerRadius", 0), r.Factory.addGetterSetter(r.Star, "outerRadius", 0), r.Collection.mapMethods(r.Star)
        }(),
        function() {
            var t = ["fontFamily", "fontSize", "fontStyle", "padding", "lineHeight", "text"],
                e = t.length;
            r.Label = function(t) {
                this.____init(t)
            }, r.Label.prototype = {
                ____init: function(t) {
                    var e = this;
                    r.Group.call(this, t), this.className = "Label", this.on("add.kinetic", function(t) {
                        e._addListeners(t.child), e._sync()
                    })
                },
                getText: function() {
                    return this.find("Text")[0]
                },
                getTag: function() {
                    return this.find("Tag")[0]
                },
                _addListeners: function(n) {
                    var i, r = this,
                        s = function() {
                            r._sync()
                        };
                    for (i = 0; i < e; i++) n.on(t[i] + "Change.kinetic", s)
                },
                getWidth: function() {
                    return this.getText().getWidth()
                },
                getHeight: function() {
                    return this.getText().getHeight()
                },
                _sync: function() {
                    var t, e, n, i, r, s, o, a = this.getText(),
                        c = this.getTag();
                    if (a && c) {
                        switch (t = a.getWidth(), e = a.getHeight(), n = c.getPointerDirection(), i = c.getPointerWidth(), o = c.getPointerHeight(), r = 0, s = 0, n) {
                            case "up":
                                r = t / 2, s = -1 * o;
                                break;
                            case "right":
                                r = t + i, s = e / 2;
                                break;
                            case "down":
                                r = t / 2, s = e + o;
                                break;
                            case "left":
                                r = -1 * i, s = e / 2
                        }
                        c.setAttrs({
                            x: -1 * r,
                            y: -1 * s,
                            width: t,
                            height: e
                        }), a.setAttrs({
                            x: -1 * r,
                            y: -1 * s
                        })
                    }
                }
            }, r.Util.extend(r.Label, r.Group), r.Collection.mapMethods(r.Label), r.Tag = function(t) {
                this.___init(t)
            }, r.Tag.prototype = {
                ___init: function(t) {
                    r.Shape.call(this, t), this.className = "Tag", this.sceneFunc(this._sceneFunc)
                },
                _sceneFunc: function(t) {
                    var e = this.getWidth(),
                        n = this.getHeight(),
                        i = this.getPointerDirection(),
                        r = this.getPointerWidth(),
                        s = this.getPointerHeight(),
                        o = this.getCornerRadius();
                    t.beginPath(), t.moveTo(0, 0), "up" === i && (t.lineTo((e - r) / 2, 0), t.lineTo(e / 2, -1 * s), t.lineTo((e + r) / 2, 0)), o ? (t.lineTo(e - o, 0), t.arc(e - o, o, o, 3 * Math.PI / 2, 0, !1)) : t.lineTo(e, 0), "right" === i && (t.lineTo(e, (n - s) / 2), t.lineTo(e + r, n / 2), t.lineTo(e, (n + s) / 2)), o ? (t.lineTo(e, n - o), t.arc(e - o, n - o, o, 0, Math.PI / 2, !1)) : t.lineTo(e, n), "down" === i && (t.lineTo((e + r) / 2, n), t.lineTo(e / 2, n + s), t.lineTo((e - r) / 2, n)), o ? (t.lineTo(o, n), t.arc(o, n - o, o, Math.PI / 2, Math.PI, !1)) : t.lineTo(0, n), "left" === i && (t.lineTo(0, (n + s) / 2), t.lineTo(-1 * r, n / 2), t.lineTo(0, (n - s) / 2)), o && (t.lineTo(0, o), t.arc(o, o, o, Math.PI, 3 * Math.PI / 2, !1)), t.closePath(), t.fillStrokeShape(this)
                }
            }, r.Util.extend(r.Tag, r.Shape), r.Factory.addGetterSetter(r.Tag, "pointerDirection", "none"), r.Factory.addGetterSetter(r.Tag, "pointerWidth", 0), r.Factory.addGetterSetter(r.Tag, "pointerHeight", 0), r.Factory.addGetterSetter(r.Tag, "cornerRadius", 0), r.Collection.mapMethods(r.Tag)
        }(),
        function() {
            r.Arrow = function(t) {
                this.____init(t)
            }, r.Arrow.prototype = {
                ____init: function(t) {
                    r.Line.call(this, t), this.className = "Arrow"
                },
                _sceneFunc: function(t) {
                    var e = 2 * Math.PI,
                        n = this.points(),
                        i = n.length,
                        s = n[i - 2] - n[i - 4],
                        o = n[i - 1] - n[i - 3],
                        a = (Math.atan2(o, s) + e) % e,
                        c = this.pointerLength(),
                        l = this.pointerWidth();
                    t.save(), t.beginPath(), t.translate(n[i - 2], n[i - 1]), t.rotate(a), t.moveTo(0, 0), t.lineTo(-c, l / 2), t.lineTo(-c, -l / 2), t.closePath(), t.restore(), this.pointerAtBeginning() && (t.save(), t.translate(n[0], n[1]), s = n[2] - n[0], o = n[3] - n[1], t.rotate((Math.atan2(-o, -s) + e) % e), t.moveTo(0, 0), t.lineTo(-10, 6), t.lineTo(-10, -6), t.closePath(), t.restore()), t.fillStrokeShape(this), r.Line.prototype._sceneFunc.apply(this, arguments)
                }
            }, r.Util.extend(r.Arrow, r.Line), r.Factory.addGetterSetter(r.Arrow, "pointerLength", 10), r.Factory.addGetterSetter(r.Arrow, "pointerWidth", 10), r.Factory.addGetterSetter(r.Arrow, "pointerAtBeginning", !1), r.Collection.mapMethods(r.Arrow)
        }()
    }).call(e, n(18))
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e) {}, function(t, e) {}, function(module, exports, __webpack_require__) {
    var jQuery = __webpack_require__(0),
        _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
    ! function($) {
        function sc_setScroll(t, e, n) {
            return "transition" == n.transition && "swing" == e && (e = "ease"), {
                anims: [],
                duration: t,
                orgDuration: t,
                easing: e,
                startTime: getTime()
            }
        }

        function sc_startScroll(t, e) {
            for (var n = 0, i = t.anims.length; n < i; n++) {
                var r = t.anims[n];
                r && r[0][e.transition](r[1], t.duration, t.easing, r[2])
            }
        }

        function sc_stopScroll(t, e) {
            is_boolean(e) || (e = !0), is_object(t.pre) && sc_stopScroll(t.pre, e);
            for (var n = 0, i = t.anims.length; n < i; n++) {
                var r = t.anims[n];
                r[0].stop(!0), e && (r[0].css(r[1]), is_function(r[2]) && r[2]())
            }
            is_object(t.post) && sc_stopScroll(t.post, e)
        }

        function sc_afterScroll(t, e, n) {
            switch (e && e.remove(), n.fx) {
                case "fade":
                case "crossfade":
                case "cover-fade":
                case "uncover-fade":
                    t.css("opacity", 1), t.css("filter", "")
            }
        }

        function sc_fireCallbacks(t, e, n, i, r) {
            if (e[n] && e[n].call(t, i), r[n].length)
                for (var s = 0, o = r[n].length; s < o; s++) r[n][s].call(t, i);
            return []
        }

        function sc_fireQueue(t, e, n) {
            return e.length && (t.trigger(cf_e(e[0][0], n), e[0][1]), e.shift()), e
        }

        function sc_hideHiddenItems(t) {
            t.each(function() {
                var t = $(this);
                t.data("_cfs_isHidden", t.is(":hidden")).hide()
            })
        }

        function sc_showHiddenItems(t) {
            t && t.each(function() {
                var t = $(this);
                t.data("_cfs_isHidden") || t.show()
            })
        }

        function sc_clearTimers(t) {
            return t.auto && clearTimeout(t.auto), t.progress && clearInterval(t.progress), t
        }

        function sc_mapCallbackArguments(t, e, n, i, r, s, o) {
            return {
                width: o.width,
                height: o.height,
                items: {
                    old: t,
                    skipped: e,
                    visible: n
                },
                scroll: {
                    items: i,
                    direction: r,
                    duration: s
                }
            }
        }

        function sc_getDuration(t, e, n, i) {
            var r = t.duration;
            return "none" == t.fx ? 0 : ("auto" == r ? r = e.scroll.duration / e.scroll.items * n : r < 10 && (r = i / r), r < 1 ? 0 : ("fade" == t.fx && (r /= 2), Math.round(r)))
        }

        function nv_showNavi(t, e, n) {
            var i = is_number(t.items.minimum) ? t.items.minimum : t.items.visible + 1;
            if ("show" == e || "hide" == e) var r = e;
            else if (i > e) {
                debug(n, "Not enough items (" + e + " total, " + i + " needed): Hiding navigation.");
                var r = "hide"
            } else var r = "show";
            var s = "show" == r ? "removeClass" : "addClass",
                o = cf_c("hidden", n);
            t.auto.button && t.auto.button[r]()[s](o), t.prev.button && t.prev.button[r]()[s](o), t.next.button && t.next.button[r]()[s](o), t.pagination.container && t.pagination.container[r]()[s](o)
        }

        function nv_enableNavi(t, e, n) {
            if (!t.circular && !t.infinite) {
                var i = ("removeClass" == e || "addClass" == e) && e,
                    r = cf_c("disabled", n);
                if (t.auto.button && i && t.auto.button[i](r), t.prev.button) {
                    var s = i || 0 == e ? "addClass" : "removeClass";
                    t.prev.button[s](r)
                }
                if (t.next.button) {
                    var s = i || e == t.items.visible ? "addClass" : "removeClass";
                    t.next.button[s](r)
                }
            }
        }

        function go_getObject(t, e) {
            return is_function(e) ? e = e.call(t) : is_undefined(e) && (e = {}), e
        }

        function go_getItemsObject(t, e) {
            return e = go_getObject(t, e), is_number(e) ? e = {
                visible: e
            } : "variable" == e ? e = {
                visible: e,
                width: e,
                height: e
            } : is_object(e) || (e = {}), e
        }

        function go_getScrollObject(t, e) {
            return e = go_getObject(t, e), is_number(e) ? e = e <= 50 ? {
                items: e
            } : {
                duration: e
            } : is_string(e) ? e = {
                easing: e
            } : is_object(e) || (e = {}), e
        }

        function go_getNaviObject(t, e) {
            if (e = go_getObject(t, e), is_string(e)) {
                var n = cf_getKeyCode(e);
                e = -1 == n ? $(e) : n
            }
            return e
        }

        function go_getAutoObject(t, e) {
            return e = go_getNaviObject(t, e), is_jquery(e) ? e = {
                button: e
            } : is_boolean(e) ? e = {
                play: e
            } : is_number(e) && (e = {
                timeoutDuration: e
            }), e.progress && (is_string(e.progress) || is_jquery(e.progress)) && (e.progress = {
                bar: e.progress
            }), e
        }

        function go_complementAutoObject(t, e) {
            return is_function(e.button) && (e.button = e.button.call(t)), is_string(e.button) && (e.button = $(e.button)), is_boolean(e.play) || (e.play = !0), is_number(e.delay) || (e.delay = 0), is_undefined(e.pauseOnEvent) && (e.pauseOnEvent = !0), is_boolean(e.pauseOnResize) || (e.pauseOnResize = !0), is_number(e.timeoutDuration) || (e.timeoutDuration = e.duration < 10 ? 2500 : 5 * e.duration), e.progress && (is_function(e.progress.bar) && (e.progress.bar = e.progress.bar.call(t)), is_string(e.progress.bar) && (e.progress.bar = $(e.progress.bar)), e.progress.bar ? (is_function(e.progress.updater) || (e.progress.updater = $.fn.carouFredSel.progressbarUpdater), is_number(e.progress.interval) || (e.progress.interval = 50)) : e.progress = !1), e
        }

        function go_getPrevNextObject(t, e) {
            return e = go_getNaviObject(t, e), is_jquery(e) ? e = {
                button: e
            } : is_number(e) && (e = {
                key: e
            }), e
        }

        function go_complementPrevNextObject(t, e) {
            return is_function(e.button) && (e.button = e.button.call(t)), is_string(e.button) && (e.button = $(e.button)), is_string(e.key) && (e.key = cf_getKeyCode(e.key)), e
        }

        function go_getPaginationObject(t, e) {
            return e = go_getNaviObject(t, e), is_jquery(e) ? e = {
                container: e
            } : is_boolean(e) && (e = {
                keys: e
            }), e
        }

        function go_complementPaginationObject(t, e) {
            return is_function(e.container) && (e.container = e.container.call(t)), is_string(e.container) && (e.container = $(e.container)), is_number(e.items) || (e.items = !1), is_boolean(e.keys) || (e.keys = !1), is_function(e.anchorBuilder) || is_false(e.anchorBuilder) || (e.anchorBuilder = $.fn.carouFredSel.pageAnchorBuilder), is_number(e.deviation) || (e.deviation = 0), e
        }

        function go_getSwipeObject(t, e) {
            return is_function(e) && (e = e.call(t)), is_undefined(e) && (e = {
                onTouch: !1
            }), is_true(e) ? e = {
                onTouch: e
            } : is_number(e) && (e = {
                items: e
            }), e
        }

        function go_complementSwipeObject(t, e) {
            return is_boolean(e.onTouch) || (e.onTouch = !0), is_boolean(e.onMouse) || (e.onMouse = !1), is_object(e.options) || (e.options = {}), is_boolean(e.options.triggerOnTouchEnd) || (e.options.triggerOnTouchEnd = !1), e
        }

        function go_getMousewheelObject(t, e) {
            return is_function(e) && (e = e.call(t)), is_true(e) ? e = {} : is_number(e) ? e = {
                items: e
            } : is_undefined(e) && (e = !1), e
        }

        function go_complementMousewheelObject(t, e) {
            return e
        }

        function gn_getItemIndex(t, e, n, i, r) {
            if (is_string(t) && (t = $(t, r)), is_object(t) && (t = $(t, r)), is_jquery(t) ? (t = r.children().index(t), is_boolean(n) || (n = !1)) : is_boolean(n) || (n = !0), is_number(t) || (t = 0), is_number(e) || (e = 0), n && (t += i.first), t += e, i.total > 0) {
                for (; t >= i.total;) t -= i.total;
                for (; t < 0;) t += i.total
            }
            return t
        }

        function gn_getVisibleItemsPrev(t, e, n) {
            for (var i = 0, r = 0, s = n; s >= 0; s--) {
                var o = t.eq(s);
                if ((i += o.is(":visible") ? o[e.d.outerWidth](!0) : 0) > e.maxDimension) return r;
                0 == s && (s = t.length), r++
            }
        }

        function gn_getVisibleItemsPrevFilter(t, e, n) {
            return gn_getItemsPrevFilter(t, e.items.filter, e.items.visibleConf.org, n)
        }

        function gn_getScrollItemsPrevFilter(t, e, n, i) {
            return gn_getItemsPrevFilter(t, e.items.filter, i, n)
        }

        function gn_getItemsPrevFilter(t, e, n, i) {
            for (var r = 0, s = 0, o = i, a = t.length; o >= 0; o--) {
                if (++s == a) return s;
                if (t.eq(o).is(e) && ++r == n) return s;
                0 == o && (o = a)
            }
        }

        function gn_getVisibleOrg(t, e) {
            return e.items.visibleConf.org || t.children().slice(0, e.items.visible).filter(e.items.filter).length
        }

        function gn_getVisibleItemsNext(t, e, n) {
            for (var i = 0, r = 0, s = n, o = t.length - 1; s <= o; s++) {
                var a = t.eq(s);
                if ((i += a.is(":visible") ? a[e.d.outerWidth](!0) : 0) > e.maxDimension) return r;
                if (++r == o + 1) return r;
                s == o && (s = -1)
            }
        }

        function gn_getVisibleItemsNextTestCircular(t, e, n, i) {
            var r = gn_getVisibleItemsNext(t, e, n);
            return e.circular || n + r > i && (r = i - n), r
        }

        function gn_getVisibleItemsNextFilter(t, e, n) {
            return gn_getItemsNextFilter(t, e.items.filter, e.items.visibleConf.org, n, e.circular)
        }

        function gn_getScrollItemsNextFilter(t, e, n, i) {
            return gn_getItemsNextFilter(t, e.items.filter, i + 1, n, e.circular) - 1
        }

        function gn_getItemsNextFilter(t, e, n, i, r) {
            for (var s = 0, o = 0, a = i, c = t.length - 1; a <= c; a++) {
                if (++o >= c) return o;
                if (t.eq(a).is(e) && ++s == n) return o;
                a == c && (a = -1)
            }
        }

        function gi_getCurrentItems(t, e) {
            return t.slice(0, e.items.visible)
        }

        function gi_getOldItemsPrev(t, e, n) {
            return t.slice(n, e.items.visibleConf.old + n)
        }

        function gi_getNewItemsPrev(t, e) {
            return t.slice(0, e.items.visible)
        }

        function gi_getOldItemsNext(t, e) {
            return t.slice(0, e.items.visibleConf.old)
        }

        function gi_getNewItemsNext(t, e, n) {
            return t.slice(n, e.items.visible + n)
        }

        function sz_storeMargin(t, e, n) {
            e.usePadding && (is_string(n) || (n = "_cfs_origCssMargin"), t.each(function() {
                var t = $(this),
                    i = parseInt(t.css(e.d.marginRight), 10);
                is_number(i) || (i = 0), t.data(n, i)
            }))
        }

        function sz_resetMargin(t, e, n) {
            if (e.usePadding) {
                var i = !!is_boolean(n) && n;
                is_number(n) || (n = 0), sz_storeMargin(t, e, "_cfs_tempCssMargin"), t.each(function() {
                    var t = $(this);
                    t.css(e.d.marginRight, i ? t.data("_cfs_tempCssMargin") : n + t.data("_cfs_origCssMargin"))
                })
            }
        }

        function sz_storeOrigCss(t) {
            t.each(function() {
                var t = $(this);
                t.data("_cfs_origCss", t.attr("style") || "")
            })
        }

        function sz_restoreOrigCss(t) {
            t.each(function() {
                var t = $(this);
                t.attr("style", t.data("_cfs_origCss") || "")
            })
        }

        function sz_setResponsiveSizes(t, e) {
            var n = (t.items.visible, t.items[t.d.width]),
                i = t[t.d.height],
                r = is_percentage(i);
            e.each(function() {
                var e = $(this),
                    s = n - ms_getPaddingBorderMargin(e, t, "Width");
                e[t.d.width](s), r && e[t.d.height](ms_getPercentage(s, i))
            })
        }

        function sz_setSizes(t, e) {
            var n = t.parent(),
                i = t.children(),
                r = gi_getCurrentItems(i, e),
                s = cf_mapWrapperSizes(ms_getSizes(r, e, !0), e, !1);
            if (n.css(s), e.usePadding) {
                var o = e.padding,
                    a = o[e.d[1]];
                e.align && a < 0 && (a = 0);
                var c = r.last();
                c.css(e.d.marginRight, c.data("_cfs_origCssMargin") + a), t.css(e.d.top, o[e.d[0]]), t.css(e.d.left, o[e.d[3]])
            }
            return t.css(e.d.width, s[e.d.width] + 2 * ms_getTotalSize(i, e, "width")), t.css(e.d.height, ms_getLargestSize(i, e, "height")), s
        }

        function ms_getSizes(t, e, n) {
            return [ms_getTotalSize(t, e, "width", n), ms_getLargestSize(t, e, "height", n)]
        }

        function ms_getLargestSize(t, e, n, i) {
            return is_boolean(i) || (i = !1), is_number(e[e.d[n]]) && i ? e[e.d[n]] : is_number(e.items[e.d[n]]) ? e.items[e.d[n]] : (n = n.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight", ms_getTrueLargestSize(t, e, n))
        }

        function ms_getTrueLargestSize(t, e, n) {
            for (var i = 0, r = 0, s = t.length; r < s; r++) {
                var o = t.eq(r),
                    a = o.is(":visible") ? o[e.d[n]](!0) : 0;
                i < a && (i = a)
            }
            return i
        }

        function ms_getTotalSize(t, e, n, i) {
            if (is_boolean(i) || (i = !1), is_number(e[e.d[n]]) && i) return e[e.d[n]];
            if (is_number(e.items[e.d[n]])) return e.items[e.d[n]] * t.length;
            for (var r = n.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight", s = 0, o = 0, a = t.length; o < a; o++) {
                var c = t.eq(o);
                s += c.is(":visible") ? c[e.d[r]](!0) : 0
            }
            return s
        }

        function ms_getParentSize(t, e, n) {
            var i = t.is(":visible");
            i && t.hide();
            var r = t.parent()[e.d[n]]();
            return i && t.show(), r
        }

        function ms_getMaxDimension(t, e) {
            return is_number(t[t.d.width]) ? t[t.d.width] : e
        }

        function ms_hasVariableSizes(t, e, n) {
            for (var i = !1, r = !1, s = 0, o = t.length; s < o; s++) {
                var a = t.eq(s),
                    c = a.is(":visible") ? a[e.d[n]](!0) : 0;
                !1 === i ? i = c : i != c && (r = !0), 0 == i && (r = !0)
            }
            return r
        }

        function ms_getPaddingBorderMargin(t, e, n) {
            return t[e.d["outer" + n]](!0) - t[e.d[n.toLowerCase()]]()
        }

        function ms_getPercentage(t, e) {
            if (is_percentage(e)) {
                if (e = parseInt(e.slice(0, -1), 10), !is_number(e)) return t;
                t *= e / 100
            }
            return t
        }

        function cf_e(t, e, n, i, r) {
            return is_boolean(n) || (n = !0), is_boolean(i) || (i = !0), is_boolean(r) || (r = !1), n && (t = e.events.prefix + t), i && (t = t + "." + e.events.namespace), i && r && (t += e.serialNumber), t
        }

        function cf_c(t, e) {
            return is_string(e.classnames[t]) ? e.classnames[t] : t
        }

        function cf_mapWrapperSizes(t, e, n) {
            is_boolean(n) || (n = !0);
            var i = e.usePadding && n ? e.padding : [0, 0, 0, 0],
                r = {};
            return r[e.d.width] = t[0] + i[1] + i[3], r[e.d.height] = t[1] + i[0] + i[2], r
        }

        function cf_sortParams(t, e) {
            for (var n = [], i = 0, r = t.length; i < r; i++)
                for (var s = 0, o = e.length; s < o; s++)
                    if (e[s].indexOf(_typeof(t[i])) > -1 && is_undefined(n[s])) {
                        n[s] = t[i];
                        break
                    } return n
        }

        function cf_getPadding(t) {
            if (is_undefined(t)) return [0, 0, 0, 0];
            if (is_number(t)) return [t, t, t, t];
            if (is_string(t) && (t = t.split("px").join("").split("em").join("").split(" ")), !is_array(t)) return [0, 0, 0, 0];
            for (var e = 0; e < 4; e++) t[e] = parseInt(t[e], 10);
            switch (t.length) {
                case 0:
                    return [0, 0, 0, 0];
                case 1:
                    return [t[0], t[0], t[0], t[0]];
                case 2:
                    return [t[0], t[1], t[0], t[1]];
                case 3:
                    return [t[0], t[1], t[2], t[1]];
                default:
                    return [t[0], t[1], t[2], t[3]]
            }
        }

        function cf_getAlignPadding(t, e) {
            var n = is_number(e[e.d.width]) ? Math.ceil(e[e.d.width] - ms_getTotalSize(t, e, "width")) : 0;
            switch (e.align) {
                case "left":
                    return [0, n];
                case "right":
                    return [n, 0];
                case "center":
                default:
                    return [Math.ceil(n / 2), Math.floor(n / 2)]
            }
        }

        function cf_getDimensions(t) {
            for (var e = [
                    ["width", "innerWidth", "outerWidth", "height", "innerHeight", "outerHeight", "left", "top", "marginRight", 0, 1, 2, 3],
                    ["height", "innerHeight", "outerHeight", "width", "innerWidth", "outerWidth", "top", "left", "marginBottom", 3, 2, 1, 0]
                ], n = e[0].length, i = "right" == t.direction || "left" == t.direction ? 0 : 1, r = {}, s = 0; s < n; s++) r[e[0][s]] = e[i][s];
            return r
        }

        function cf_getAdjust(t, e, n, i) {
            var r = t;
            if (is_function(n)) r = n.call(i, r);
            else if (is_string(n)) {
                var s = n.split("+"),
                    o = n.split("-");
                if (o.length > s.length) var a = !0,
                    c = o[0],
                    l = o[1];
                else var a = !1,
                    c = s[0],
                    l = s[1];
                switch (c) {
                    case "even":
                        r = t % 2 == 1 ? t - 1 : t;
                        break;
                    case "odd":
                        r = t % 2 == 0 ? t - 1 : t;
                        break;
                    default:
                        r = t
                }
                l = parseInt(l, 10), is_number(l) && (a && (l = -l), r += l)
            }
            return (!is_number(r) || r < 1) && (r = 1), r
        }

        function cf_getItemsAdjust(t, e, n, i) {
            return cf_getItemAdjustMinMax(cf_getAdjust(t, e, n, i), e.items.visibleConf)
        }

        function cf_getItemAdjustMinMax(t, e) {
            return is_number(e.min) && t < e.min && (t = e.min), is_number(e.max) && t > e.max && (t = e.max), t < 1 && (t = 1), t
        }

        function cf_getSynchArr(t) {
            is_array(t) || (t = [
                [t]
            ]), is_array(t[0]) || (t = [t]);
            for (var e = 0, n = t.length; e < n; e++) is_string(t[e][0]) && (t[e][0] = $(t[e][0])), is_boolean(t[e][1]) || (t[e][1] = !0), is_boolean(t[e][2]) || (t[e][2] = !0), is_number(t[e][3]) || (t[e][3] = 0);
            return t
        }

        function cf_getKeyCode(t) {
            return "right" == t ? 39 : "left" == t ? 37 : "up" == t ? 38 : "down" == t ? 40 : -1
        }

        function cf_setCookie(t, e, n) {
            if (t) {
                var i = e.triggerHandler(cf_e("currentPosition", n));
                $.fn.carouFredSel.cookie.set(t, i)
            }
        }

        function cf_getCookie(t) {
            var e = $.fn.carouFredSel.cookie.get(t);
            return "" == e ? 0 : e
        }

        function in_mapCss(t, e) {
            for (var n = {}, i = 0, r = e.length; i < r; i++) n[e[i]] = t.css(e[i]);
            return n
        }

        function in_complementItems(t, e, n, i) {
            return is_object(t.visibleConf) || (t.visibleConf = {}), is_object(t.sizesConf) || (t.sizesConf = {}), 0 == t.start && is_number(i) && (t.start = i), is_object(t.visible) ? (t.visibleConf.min = t.visible.min, t.visibleConf.max = t.visible.max, t.visible = !1) : is_string(t.visible) ? ("variable" == t.visible ? t.visibleConf.variable = !0 : t.visibleConf.adjust = t.visible, t.visible = !1) : is_function(t.visible) && (t.visibleConf.adjust = t.visible, t.visible = !1), is_string(t.filter) || (t.filter = n.filter(":hidden").length > 0 ? ":visible" : "*"), t[e.d.width] || (e.responsive ? (debug(!0, "Set a " + e.d.width + " for the items!"), t[e.d.width] = ms_getTrueLargestSize(n, e, "outerWidth")) : t[e.d.width] = ms_hasVariableSizes(n, e, "outerWidth") ? "variable" : n[e.d.outerWidth](!0)), t[e.d.height] || (t[e.d.height] = ms_hasVariableSizes(n, e, "outerHeight") ? "variable" : n[e.d.outerHeight](!0)), t.sizesConf.width = t.width, t.sizesConf.height = t.height, t
        }

        function in_complementVisibleItems(t, e) {
            return "variable" == t.items[t.d.width] && (t.items.visibleConf.variable = !0), t.items.visibleConf.variable || (is_number(t[t.d.width]) ? t.items.visible = Math.floor(t[t.d.width] / t.items[t.d.width]) : (t.items.visible = Math.floor(e / t.items[t.d.width]), t[t.d.width] = t.items.visible * t.items[t.d.width], t.items.visibleConf.adjust || (t.align = !1)), ("Infinity" == t.items.visible || t.items.visible < 1) && (debug(!0, 'Not a valid number of visible items: Set to "variable".'), t.items.visibleConf.variable = !0)), t
        }

        function in_complementPrimarySize(t, e, n) {
            return "auto" == t && (t = ms_getTrueLargestSize(n, e, "outerWidth")), t
        }

        function in_complementSecondarySize(t, e, n) {
            return "auto" == t && (t = ms_getTrueLargestSize(n, e, "outerHeight")), t || (t = e.items[e.d.height]), t
        }

        function in_getAlignPadding(t, e) {
            var n = cf_getAlignPadding(gi_getCurrentItems(e, t), t);
            return t.padding[t.d[1]] = n[1], t.padding[t.d[3]] = n[0], t
        }

        function in_getResponsiveValues(t, e, n) {
            var i = cf_getItemAdjustMinMax(Math.ceil(t[t.d.width] / t.items[t.d.width]), t.items.visibleConf);
            i > e.length && (i = e.length);
            var r = Math.floor(t[t.d.width] / i);
            return t.items.visible = i, t.items[t.d.width] = r, t[t.d.width] = i * r, t
        }

        function bt_pauseOnHoverConfig(t) {
            if (is_string(t)) var e = t.indexOf("immediate") > -1,
                n = t.indexOf("resume") > -1;
            else var e = n = !1;
            return [e, n]
        }

        function bt_mousesheelNumber(t) {
            return is_number(t) ? t : null
        }

        function is_null(t) {
            return null === t
        }

        function is_undefined(t) {
            return is_null(t) || void 0 === t || "" === t || "undefined" === t
        }

        function is_array(t) {
            return t instanceof Array
        }

        function is_jquery(t) {
            return t instanceof jQuery
        }

        function is_object(t) {
            return (t instanceof Object || "object" == (void 0 === t ? "undefined" : _typeof(t))) && !is_null(t) && !is_jquery(t) && !is_array(t) && !is_function(t)
        }

        function is_number(t) {
            return (t instanceof Number || "number" == typeof t) && !isNaN(t)
        }

        function is_string(t) {
            return (t instanceof String || "string" == typeof t) && !is_undefined(t) && !is_true(t) && !is_false(t)
        }

        function is_function(t) {
            return t instanceof Function || "function" == typeof t
        }

        function is_boolean(t) {
            return t instanceof Boolean || "boolean" == typeof t || is_true(t) || is_false(t)
        }

        function is_true(t) {
            return !0 === t || "true" === t
        }

        function is_false(t) {
            return !1 === t || "false" === t
        }

        function is_percentage(t) {
            return is_string(t) && "%" == t.slice(-1)
        }

        function getTime() {
            return (new Date).getTime()
        }

        function deprecated(t, e) {
            debug(!0, t + " is DEPRECATED, support for it will be removed. Use " + e + " instead.")
        }

        function debug(t, e) {
            if (!is_undefined(window.console) && !is_undefined(window.console.log)) {
                if (is_object(t)) {
                    var n = " (" + t.selector + ")";
                    t = t.debug
                } else var n = "";
                if (!t) return !1;
                // e = is_string(e) ? "carouFredSel" + n + ": " + e : ["carouFredSel" + n + ":", e], window.console.log(e)
            }
            return !1
        }
        $.fn.carouFredSel || ($.fn.caroufredsel = $.fn.carouFredSel = function(options, configs) {
            if (0 == this.length) return debug(!0, 'No element found for "' + this.selector + '".'), this;
            if (this.length > 1) return this.each(function() {
                $(this).carouFredSel(options, configs)
            });
            var $cfs = this,
                $tt0 = this[0],
                starting_position = !1;
            $cfs.data("_cfs_isCarousel") && (starting_position = $cfs.triggerHandler("_cfs_triggerEvent", "currentPosition"), $cfs.trigger("_cfs_triggerEvent", ["destroy", !0]));
            var FN = {};
            FN._init = function(t, e, n) {
                t = go_getObject($tt0, t), t.items = go_getItemsObject($tt0, t.items), t.scroll = go_getScrollObject($tt0, t.scroll), t.auto = go_getAutoObject($tt0, t.auto), t.prev = go_getPrevNextObject($tt0, t.prev), t.next = go_getPrevNextObject($tt0, t.next), t.pagination = go_getPaginationObject($tt0, t.pagination), t.swipe = go_getSwipeObject($tt0, t.swipe), t.mousewheel = go_getMousewheelObject($tt0, t.mousewheel), e && (opts_orig = $.extend(!0, {}, $.fn.carouFredSel.defaults, t)), opts = $.extend(!0, {}, $.fn.carouFredSel.defaults, t), opts.d = cf_getDimensions(opts), crsl.direction = "up" == opts.direction || "left" == opts.direction ? "next" : "prev";
                var i = $cfs.children(),
                    r = ms_getParentSize($wrp, opts, "width");
                if (is_true(opts.cookie) && (opts.cookie = "caroufredsel_cookie_" + conf.serialNumber), opts.maxDimension = ms_getMaxDimension(opts, r), opts.items = in_complementItems(opts.items, opts, i, n), opts[opts.d.width] = in_complementPrimarySize(opts[opts.d.width], opts, i), opts[opts.d.height] = in_complementSecondarySize(opts[opts.d.height], opts, i), opts.responsive && (is_percentage(opts[opts.d.width]) || (opts[opts.d.width] = "100%")), is_percentage(opts[opts.d.width]) && (crsl.upDateOnWindowResize = !0, crsl.primarySizePercentage = opts[opts.d.width], opts[opts.d.width] = ms_getPercentage(r, crsl.primarySizePercentage), opts.items.visible || (opts.items.visibleConf.variable = !0)), opts.responsive ? (opts.usePadding = !1, opts.padding = [0, 0, 0, 0], opts.align = !1, opts.items.visibleConf.variable = !1) : (opts.items.visible || (opts = in_complementVisibleItems(opts, r)), opts[opts.d.width] || (!opts.items.visibleConf.variable && is_number(opts.items[opts.d.width]) && "*" == opts.items.filter ? (opts[opts.d.width] = opts.items.visible * opts.items[opts.d.width], opts.align = !1) : opts[opts.d.width] = "variable"), is_undefined(opts.align) && (opts.align = !!is_number(opts[opts.d.width]) && "center"), opts.items.visibleConf.variable && (opts.items.visible = gn_getVisibleItemsNext(i, opts, 0))), "*" == opts.items.filter || opts.items.visibleConf.variable || (opts.items.visibleConf.org = opts.items.visible, opts.items.visible = gn_getVisibleItemsNextFilter(i, opts, 0)), opts.items.visible = cf_getItemsAdjust(opts.items.visible, opts, opts.items.visibleConf.adjust, $tt0), opts.items.visibleConf.old = opts.items.visible, opts.responsive) opts.items.visibleConf.min || (opts.items.visibleConf.min = opts.items.visible), opts.items.visibleConf.max || (opts.items.visibleConf.max = opts.items.visible), opts = in_getResponsiveValues(opts, i, r);
                else switch (opts.padding = cf_getPadding(opts.padding), "top" == opts.align ? opts.align = "left" : "bottom" == opts.align && (opts.align = "right"), opts.align) {
                    case "center":
                    case "left":
                    case "right":
                        "variable" != opts[opts.d.width] && (opts = in_getAlignPadding(opts, i), opts.usePadding = !0);
                        break;
                    default:
                        opts.align = !1, opts.usePadding = 0 != opts.padding[0] || 0 != opts.padding[1] || 0 != opts.padding[2] || 0 != opts.padding[3]
                }
                is_number(opts.scroll.duration) || (opts.scroll.duration = 500), is_undefined(opts.scroll.items) && (opts.scroll.items = opts.responsive || opts.items.visibleConf.variable || "*" != opts.items.filter ? "visible" : opts.items.visible), opts.auto = $.extend(!0, {}, opts.scroll, opts.auto), opts.prev = $.extend(!0, {}, opts.scroll, opts.prev), opts.next = $.extend(!0, {}, opts.scroll, opts.next), opts.pagination = $.extend(!0, {}, opts.scroll, opts.pagination), opts.auto = go_complementAutoObject($tt0, opts.auto), opts.prev = go_complementPrevNextObject($tt0, opts.prev), opts.next = go_complementPrevNextObject($tt0, opts.next), opts.pagination = go_complementPaginationObject($tt0, opts.pagination), opts.swipe = go_complementSwipeObject($tt0, opts.swipe), opts.mousewheel = go_complementMousewheelObject($tt0, opts.mousewheel), opts.synchronise && (opts.synchronise = cf_getSynchArr(opts.synchronise)), opts.auto.onPauseStart && (opts.auto.onTimeoutStart = opts.auto.onPauseStart, deprecated("auto.onPauseStart", "auto.onTimeoutStart")), opts.auto.onPausePause && (opts.auto.onTimeoutPause = opts.auto.onPausePause, deprecated("auto.onPausePause", "auto.onTimeoutPause")), opts.auto.onPauseEnd && (opts.auto.onTimeoutEnd = opts.auto.onPauseEnd, deprecated("auto.onPauseEnd", "auto.onTimeoutEnd")), opts.auto.pauseDuration && (opts.auto.timeoutDuration = opts.auto.pauseDuration, deprecated("auto.pauseDuration", "auto.timeoutDuration"))
            }, FN._build = function() {
                $cfs.data("_cfs_isCarousel", !0);
                var t = $cfs.children(),
                    e = in_mapCss($cfs, ["textAlign", "float", "position", "top", "right", "bottom", "left", "zIndex", "width", "height", "marginTop", "marginRight", "marginBottom", "marginLeft"]),
                    n = "relative";
                switch (e.position) {
                    case "absolute":
                    case "fixed":
                        n = e.position
                }
                "parent" == conf.wrapper ? sz_storeOrigCss($wrp) : $wrp.css(e), $wrp.css({
                    overflow: "hidden",
                    position: n
                }), sz_storeOrigCss($cfs), $cfs.data("_cfs_origCssZindex", e.zIndex), $cfs.css({
                    textAlign: "left",
                    float: "none",
                    position: "absolute",
                    top: 0,
                    right: "auto",
                    bottom: "auto",
                    left: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0
                }), sz_storeMargin(t, opts), sz_storeOrigCss(t), opts.responsive && sz_setResponsiveSizes(opts, t)
            }, FN._bind_events = function() {
                FN._unbind_events(), $cfs.bind(cf_e("stop", conf), function(t, e) {
                    return t.stopPropagation(), crsl.isStopped || opts.auto.button && opts.auto.button.addClass(cf_c("stopped", conf)), crsl.isStopped = !0, opts.auto.play && (opts.auto.play = !1, $cfs.trigger(cf_e("pause", conf), e)), !0
                }), $cfs.bind(cf_e("finish", conf), function(t) {
                    return t.stopPropagation(), crsl.isScrolling && sc_stopScroll(scrl), !0
                }), $cfs.bind(cf_e("pause", conf), function(t, e, n) {
                    if (t.stopPropagation(), tmrs = sc_clearTimers(tmrs), e && crsl.isScrolling) {
                        scrl.isStopped = !0;
                        var i = getTime() - scrl.startTime;
                        scrl.duration -= i, scrl.pre && (scrl.pre.duration -= i), scrl.post && (scrl.post.duration -= i), sc_stopScroll(scrl, !1)
                    }
                    if (crsl.isPaused || crsl.isScrolling || n && (tmrs.timePassed += getTime() - tmrs.startTime), crsl.isPaused || opts.auto.button && opts.auto.button.addClass(cf_c("paused", conf)), crsl.isPaused = !0, opts.auto.onTimeoutPause) {
                        var r = opts.auto.timeoutDuration - tmrs.timePassed,
                            s = 100 - Math.ceil(100 * r / opts.auto.timeoutDuration);
                        opts.auto.onTimeoutPause.call($tt0, s, r)
                    }
                    return !0
                }), $cfs.bind(cf_e("play", conf), function(t, e, n, i) {
                    t.stopPropagation(), tmrs = sc_clearTimers(tmrs);
                    var r = [e, n, i],
                        s = ["string", "number", "boolean"],
                        o = cf_sortParams(r, s);
                    if (e = o[0], n = o[1], i = o[2], "prev" != e && "next" != e && (e = crsl.direction), is_number(n) || (n = 0), is_boolean(i) || (i = !1), i && (crsl.isStopped = !1, opts.auto.play = !0), !opts.auto.play) return t.stopImmediatePropagation(), debug(conf, "Carousel stopped: Not scrolling.");
                    crsl.isPaused && opts.auto.button && (opts.auto.button.removeClass(cf_c("stopped", conf)), opts.auto.button.removeClass(cf_c("paused", conf))), crsl.isPaused = !1, tmrs.startTime = getTime();
                    var a = opts.auto.timeoutDuration + n;
                    return dur2 = a - tmrs.timePassed, perc = 100 - Math.ceil(100 * dur2 / a), opts.auto.progress && (tmrs.progress = setInterval(function() {
                        var t = getTime() - tmrs.startTime + tmrs.timePassed,
                            e = Math.ceil(100 * t / a);
                        opts.auto.progress.updater.call(opts.auto.progress.bar[0], e)
                    }, opts.auto.progress.interval)), tmrs.auto = setTimeout(function() {
                        opts.auto.progress && opts.auto.progress.updater.call(opts.auto.progress.bar[0], 100), opts.auto.onTimeoutEnd && opts.auto.onTimeoutEnd.call($tt0, perc, dur2), crsl.isScrolling ? $cfs.trigger(cf_e("play", conf), e) : $cfs.trigger(cf_e(e, conf), opts.auto)
                    }, dur2), opts.auto.onTimeoutStart && opts.auto.onTimeoutStart.call($tt0, perc, dur2), !0
                }), $cfs.bind(cf_e("resume", conf), function(t) {
                    return t.stopPropagation(), scrl.isStopped ? (scrl.isStopped = !1, crsl.isPaused = !1, crsl.isScrolling = !0, scrl.startTime = getTime(), sc_startScroll(scrl, conf)) : $cfs.trigger(cf_e("play", conf)), !0
                }), $cfs.bind(cf_e("prev", conf) + " " + cf_e("next", conf), function(t, e, n, i, r) {
                    if (t.stopPropagation(), crsl.isStopped || $cfs.is(":hidden")) return t.stopImmediatePropagation(), debug(conf, "Carousel stopped or hidden: Not scrolling.");
                    var s = is_number(opts.items.minimum) ? opts.items.minimum : opts.items.visible + 1;
                    if (s > itms.total) return t.stopImmediatePropagation(), debug(conf, "Not enough items (" + itms.total + " total, " + s + " needed): Not scrolling.");
                    var o = [e, n, i, r],
                        a = ["object", "number/string", "function", "boolean"],
                        c = cf_sortParams(o, a);
                    e = c[0], n = c[1], i = c[2], r = c[3];
                    var l = t.type.slice(conf.events.prefix.length);
                    if (is_object(e) || (e = {}), is_function(i) && (e.onAfter = i), is_boolean(r) && (e.queue = r), e = $.extend(!0, {}, opts[l], e), e.conditions && !e.conditions.call($tt0, l)) return t.stopImmediatePropagation(), debug(conf, 'Callback "conditions" returned false.');
                    if (!is_number(n)) {
                        if ("*" != opts.items.filter) n = "visible";
                        else
                            for (var u = [n, e.items, opts[l].items], c = 0, h = u.length; c < h; c++)
                                if (is_number(u[c]) || "page" == u[c] || "visible" == u[c]) {
                                    n = u[c];
                                    break
                                } switch (n) {
                            case "page":
                                return t.stopImmediatePropagation(), $cfs.triggerHandler(cf_e(l + "Page", conf), [e, i]);
                            case "visible":
                                opts.items.visibleConf.variable || "*" != opts.items.filter || (n = opts.items.visible)
                        }
                    }
                    if (scrl.isStopped) return $cfs.trigger(cf_e("resume", conf)), $cfs.trigger(cf_e("queue", conf), [l, [e, n, i]]), t.stopImmediatePropagation(), debug(conf, "Carousel resumed scrolling.");
                    if (e.duration > 0 && crsl.isScrolling) return e.queue && ("last" == e.queue && (queu = []), "first" == e.queue && 0 != queu.length || $cfs.trigger(cf_e("queue", conf), [l, [e, n, i]])), t.stopImmediatePropagation(), debug(conf, "Carousel currently scrolling.");
                    if (tmrs.timePassed = 0, $cfs.trigger(cf_e("slide_" + l, conf), [e, n]), opts.synchronise)
                        for (var f = opts.synchronise, d = [e, n], p = 0, h = f.length; p < h; p++) {
                            var g = l;
                            f[p][2] || (g = "prev" == g ? "next" : "prev"), f[p][1] || (d[0] = f[p][0].triggerHandler("_cfs_triggerEvent", ["configuration", g])), d[1] = n + f[p][3], f[p][0].trigger("_cfs_triggerEvent", ["slide_" + g, d])
                        }
                    return !0
                }), $cfs.bind(cf_e("slide_prev", conf), function(t, e, n) {
                    t.stopPropagation();
                    var i = $cfs.children();
                    if (!opts.circular && 0 == itms.first) return opts.infinite && $cfs.trigger(cf_e("next", conf), itms.total - 1), t.stopImmediatePropagation();
                    if (sz_resetMargin(i, opts), !is_number(n)) {
                        if (opts.items.visibleConf.variable) n = gn_getVisibleItemsPrev(i, opts, itms.total - 1);
                        else if ("*" != opts.items.filter) {
                            var r = is_number(e.items) ? e.items : gn_getVisibleOrg($cfs, opts);
                            n = gn_getScrollItemsPrevFilter(i, opts, itms.total - 1, r)
                        } else n = opts.items.visible;
                        n = cf_getAdjust(n, opts, e.items, $tt0)
                    }
                    if (opts.circular || itms.total - n < itms.first && (n = itms.total - itms.first), opts.items.visibleConf.old = opts.items.visible, opts.items.visibleConf.variable) {
                        var s = cf_getItemsAdjust(gn_getVisibleItemsNext(i, opts, itms.total - n), opts, opts.items.visibleConf.adjust, $tt0);
                        opts.items.visible + n <= s && n < itms.total && (n++, s = cf_getItemsAdjust(gn_getVisibleItemsNext(i, opts, itms.total - n), opts, opts.items.visibleConf.adjust, $tt0)), opts.items.visible = s
                    } else if ("*" != opts.items.filter) {
                        var s = gn_getVisibleItemsNextFilter(i, opts, itms.total - n);
                        opts.items.visible = cf_getItemsAdjust(s, opts, opts.items.visibleConf.adjust, $tt0)
                    }
                    if (sz_resetMargin(i, opts, !0), 0 == n) return t.stopImmediatePropagation(), debug(conf, "0 items to scroll: Not scrolling.");
                    for (debug(conf, "Scrolling " + n + " items backward."), itms.first += n; itms.first >= itms.total;) itms.first -= itms.total;
                    opts.circular || (0 == itms.first && e.onEnd && e.onEnd.call($tt0, "prev"), opts.infinite || nv_enableNavi(opts, itms.first, conf)), $cfs.children().slice(itms.total - n, itms.total).prependTo($cfs), itms.total < opts.items.visible + n && $cfs.children().slice(0, opts.items.visible + n - itms.total).clone(!0).appendTo($cfs);
                    var i = $cfs.children(),
                        o = gi_getOldItemsPrev(i, opts, n),
                        a = gi_getNewItemsPrev(i, opts),
                        c = i.eq(n - 1),
                        l = o.last(),
                        u = a.last();
                    sz_resetMargin(i, opts);
                    var h = 0,
                        f = 0;
                    if (opts.align) {
                        var d = cf_getAlignPadding(a, opts);
                        h = d[0], f = d[1]
                    }
                    var p = h < 0 ? opts.padding[opts.d[3]] : 0,
                        g = !1,
                        m = $();
                    if (opts.items.visible < n && (m = i.slice(opts.items.visibleConf.old, n), "directscroll" == e.fx)) {
                        var v = opts.items[opts.d.width];
                        g = m, c = u, sc_hideHiddenItems(g), opts.items[opts.d.width] = "variable"
                    }
                    var y = !1,
                        b = ms_getTotalSize(i.slice(0, n), opts, "width"),
                        _ = cf_mapWrapperSizes(ms_getSizes(a, opts, !0), opts, !opts.usePadding),
                        w = 0,
                        x = {},
                        C = {},
                        S = {},
                        T = {},
                        P = {},
                        k = {},
                        F = {},
                        A = sc_getDuration(e, opts, n, b);
                    switch (e.fx) {
                        case "cover":
                        case "cover-fade":
                            w = ms_getTotalSize(i.slice(0, opts.items.visible), opts, "width")
                    }
                    g && (opts.items[opts.d.width] = v), sz_resetMargin(i, opts, !0), f >= 0 && sz_resetMargin(l, opts, opts.padding[opts.d[1]]), h >= 0 && sz_resetMargin(c, opts, opts.padding[opts.d[3]]), opts.align && (opts.padding[opts.d[1]] = f, opts.padding[opts.d[3]] = h), k[opts.d.left] = -(b - p), F[opts.d.left] = -(w - p), C[opts.d.left] = _[opts.d.width];
                    var D = function() {},
                        I = function() {},
                        N = function() {},
                        E = function() {},
                        O = function() {},
                        M = function() {},
                        L = function() {},
                        R = function() {},
                        j = function() {},
                        H = function() {},
                        G = function() {};
                    switch (e.fx) {
                        case "crossfade":
                        case "cover":
                        case "cover-fade":
                        case "uncover":
                        case "uncover-fade":
                            y = $cfs.clone(!0).appendTo($wrp)
                    }
                    switch (e.fx) {
                        case "crossfade":
                        case "uncover":
                        case "uncover-fade":
                            y.children().slice(0, n).remove(), y.children().slice(opts.items.visibleConf.old).remove();
                            break;
                        case "cover":
                        case "cover-fade":
                            y.children().slice(opts.items.visible).remove(), y.css(F)
                    }
                    if ($cfs.css(k), scrl = sc_setScroll(A, e.easing, conf), x[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0, "variable" != opts[opts.d.width] && "variable" != opts[opts.d.height] || (D = function() {
                            $wrp.css(_)
                        }, I = function() {
                            scrl.anims.push([$wrp, _])
                        }), opts.usePadding) {
                        switch (u.not(c).length && (S[opts.d.marginRight] = c.data("_cfs_origCssMargin"), h < 0 ? c.css(S) : (L = function() {
                            c.css(S)
                        }, R = function() {
                            scrl.anims.push([c, S])
                        })), e.fx) {
                            case "cover":
                            case "cover-fade":
                                y.children().eq(n - 1).css(S)
                        }
                        u.not(l).length && (T[opts.d.marginRight] = l.data("_cfs_origCssMargin"), N = function() {
                            l.css(T)
                        }, E = function() {
                            scrl.anims.push([l, T])
                        }), f >= 0 && (P[opts.d.marginRight] = u.data("_cfs_origCssMargin") + opts.padding[opts.d[1]], O = function() {
                            u.css(P)
                        }, M = function() {
                            scrl.anims.push([u, P])
                        })
                    }
                    G = function() {
                        $cfs.css(x)
                    };
                    var B = opts.items.visible + n - itms.total;
                    H = function() {
                        if (B > 0 && ($cfs.children().slice(itms.total).remove(), o = $($cfs.children().slice(itms.total - (opts.items.visible - B)).get().concat($cfs.children().slice(0, B).get()))), sc_showHiddenItems(g), opts.usePadding) {
                            var t = $cfs.children().eq(opts.items.visible + n - 1);
                            t.css(opts.d.marginRight, t.data("_cfs_origCssMargin"))
                        }
                    };
                    var z = sc_mapCallbackArguments(o, m, a, n, "prev", A, _);
                    switch (j = function() {
                        sc_afterScroll($cfs, y, e), crsl.isScrolling = !1, clbk.onAfter = sc_fireCallbacks($tt0, e, "onAfter", z, clbk), queu = sc_fireQueue($cfs, queu, conf), crsl.isPaused || $cfs.trigger(cf_e("play", conf))
                    }, crsl.isScrolling = !0, tmrs = sc_clearTimers(tmrs), clbk.onBefore = sc_fireCallbacks($tt0, e, "onBefore", z, clbk), e.fx) {
                        case "none":
                            $cfs.css(x), D(), N(), O(), L(), G(), H(), j();
                            break;
                        case "fade":
                            scrl.anims.push([$cfs, {
                                opacity: 0
                            }, function() {
                                D(), N(), O(), L(), G(), H(), scrl = sc_setScroll(A, e.easing, conf), scrl.anims.push([$cfs, {
                                    opacity: 1
                                }, j]), sc_startScroll(scrl, conf)
                            }]);
                            break;
                        case "crossfade":
                            $cfs.css({
                                opacity: 0
                            }), scrl.anims.push([y, {
                                opacity: 0
                            }]), scrl.anims.push([$cfs, {
                                opacity: 1
                            }, j]), I(), N(), O(), L(), G(), H();
                            break;
                        case "cover":
                            scrl.anims.push([y, x, function() {
                                N(), O(), L(), G(), H(), j()
                            }]), I();
                            break;
                        case "cover-fade":
                            scrl.anims.push([$cfs, {
                                opacity: 0
                            }]), scrl.anims.push([y, x, function() {
                                N(), O(), L(), G(), H(), j()
                            }]), I();
                            break;
                        case "uncover":
                            scrl.anims.push([y, C, j]), I(), N(), O(), L(), G(), H();
                            break;
                        case "uncover-fade":
                            $cfs.css({
                                opacity: 0
                            }), scrl.anims.push([$cfs, {
                                opacity: 1
                            }]), scrl.anims.push([y, C, j]), I(), N(), O(), L(), G(), H();
                            break;
                        default:
                            scrl.anims.push([$cfs, x, function() {
                                H(), j()
                            }]), I(), E(), M(), R()
                    }
                    return sc_startScroll(scrl, conf), cf_setCookie(opts.cookie, $cfs, conf), $cfs.trigger(cf_e("updatePageStatus", conf), [!1, _]), !0
                }), $cfs.bind(cf_e("slide_next", conf), function(t, e, n) {
                    t.stopPropagation();
                    var i = $cfs.children();
                    if (!opts.circular && itms.first == opts.items.visible) return opts.infinite && $cfs.trigger(cf_e("prev", conf), itms.total - 1), t.stopImmediatePropagation();
                    if (sz_resetMargin(i, opts), !is_number(n)) {
                        if ("*" != opts.items.filter) {
                            var r = is_number(e.items) ? e.items : gn_getVisibleOrg($cfs, opts);
                            n = gn_getScrollItemsNextFilter(i, opts, 0, r)
                        } else n = opts.items.visible;
                        n = cf_getAdjust(n, opts, e.items, $tt0)
                    }
                    var s = 0 == itms.first ? itms.total : itms.first;
                    if (!opts.circular) {
                        if (opts.items.visibleConf.variable) var o = gn_getVisibleItemsNext(i, opts, n),
                            r = gn_getVisibleItemsPrev(i, opts, s - 1);
                        else var o = opts.items.visible,
                            r = opts.items.visible;
                        n + o > s && (n = s - r)
                    }
                    if (opts.items.visibleConf.old = opts.items.visible, opts.items.visibleConf.variable) {
                        for (var o = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(i, opts, n, s), opts, opts.items.visibleConf.adjust, $tt0); opts.items.visible - n >= o && n < itms.total;) n++, o = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(i, opts, n, s), opts, opts.items.visibleConf.adjust, $tt0);
                        opts.items.visible = o
                    } else if ("*" != opts.items.filter) {
                        var o = gn_getVisibleItemsNextFilter(i, opts, n);
                        opts.items.visible = cf_getItemsAdjust(o, opts, opts.items.visibleConf.adjust, $tt0)
                    }
                    if (sz_resetMargin(i, opts, !0), 0 == n) return t.stopImmediatePropagation(), debug(conf, "0 items to scroll: Not scrolling.");
                    for (debug(conf, "Scrolling " + n + " items forward."), itms.first -= n; itms.first < 0;) itms.first += itms.total;
                    opts.circular || (itms.first == opts.items.visible && e.onEnd && e.onEnd.call($tt0, "next"), opts.infinite || nv_enableNavi(opts, itms.first, conf)), itms.total < opts.items.visible + n && $cfs.children().slice(0, opts.items.visible + n - itms.total).clone(!0).appendTo($cfs);
                    var i = $cfs.children(),
                        a = gi_getOldItemsNext(i, opts),
                        c = gi_getNewItemsNext(i, opts, n),
                        l = i.eq(n - 1),
                        u = a.last(),
                        h = c.last();
                    sz_resetMargin(i, opts);
                    var f = 0,
                        d = 0;
                    if (opts.align) {
                        var p = cf_getAlignPadding(c, opts);
                        f = p[0], d = p[1]
                    }
                    var g = !1,
                        m = $();
                    if (opts.items.visibleConf.old < n && (m = i.slice(opts.items.visibleConf.old, n), "directscroll" == e.fx)) {
                        var v = opts.items[opts.d.width];
                        g = m, l = u, sc_hideHiddenItems(g), opts.items[opts.d.width] = "variable"
                    }
                    var y = !1,
                        b = ms_getTotalSize(i.slice(0, n), opts, "width"),
                        _ = cf_mapWrapperSizes(ms_getSizes(c, opts, !0), opts, !opts.usePadding),
                        w = 0,
                        x = {},
                        C = {},
                        S = {},
                        T = {},
                        P = {},
                        k = sc_getDuration(e, opts, n, b);
                    switch (e.fx) {
                        case "uncover":
                        case "uncover-fade":
                            w = ms_getTotalSize(i.slice(0, opts.items.visibleConf.old), opts, "width")
                    }
                    g && (opts.items[opts.d.width] = v), opts.align && opts.padding[opts.d[1]] < 0 && (opts.padding[opts.d[1]] = 0), sz_resetMargin(i, opts, !0), sz_resetMargin(u, opts, opts.padding[opts.d[1]]), opts.align && (opts.padding[opts.d[1]] = d, opts.padding[opts.d[3]] = f), P[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0;
                    var F = function() {},
                        A = function() {},
                        D = function() {},
                        I = function() {},
                        N = function() {},
                        E = function() {},
                        O = function() {},
                        M = function() {},
                        L = function() {};
                    switch (e.fx) {
                        case "crossfade":
                        case "cover":
                        case "cover-fade":
                        case "uncover":
                        case "uncover-fade":
                            y = $cfs.clone(!0).appendTo($wrp), y.children().slice(opts.items.visibleConf.old).remove()
                    }
                    switch (e.fx) {
                        case "crossfade":
                        case "cover":
                        case "cover-fade":
                            $cfs.css("zIndex", 1), y.css("zIndex", 0)
                    }
                    if (scrl = sc_setScroll(k, e.easing, conf), x[opts.d.left] = -b, C[opts.d.left] = -w, f < 0 && (x[opts.d.left] += f), "variable" != opts[opts.d.width] && "variable" != opts[opts.d.height] || (F = function() {
                            $wrp.css(_)
                        }, A = function() {
                            scrl.anims.push([$wrp, _])
                        }), opts.usePadding) {
                        var R = h.data("_cfs_origCssMargin");
                        d >= 0 && (R += opts.padding[opts.d[1]]), h.css(opts.d.marginRight, R), l.not(u).length && (T[opts.d.marginRight] = u.data("_cfs_origCssMargin")), D = function() {
                            u.css(T)
                        }, I = function() {
                            scrl.anims.push([u, T])
                        };
                        var j = l.data("_cfs_origCssMargin");
                        f > 0 && (j += opts.padding[opts.d[3]]), S[opts.d.marginRight] = j, N = function() {
                            l.css(S)
                        }, E = function() {
                            scrl.anims.push([l, S])
                        }
                    }
                    L = function() {
                        $cfs.css(P)
                    };
                    var H = opts.items.visible + n - itms.total;
                    M = function() {
                        H > 0 && $cfs.children().slice(itms.total).remove();
                        var t = $cfs.children().slice(0, n).appendTo($cfs).last();
                        if (H > 0 && (c = gi_getCurrentItems(i, opts)), sc_showHiddenItems(g), opts.usePadding) {
                            if (itms.total < opts.items.visible + n) {
                                var e = $cfs.children().eq(opts.items.visible - 1);
                                e.css(opts.d.marginRight, e.data("_cfs_origCssMargin") + opts.padding[opts.d[1]])
                            }
                            t.css(opts.d.marginRight, t.data("_cfs_origCssMargin"))
                        }
                    };
                    var G = sc_mapCallbackArguments(a, m, c, n, "next", k, _);
                    switch (O = function() {
                        $cfs.css("zIndex", $cfs.data("_cfs_origCssZindex")), sc_afterScroll($cfs, y, e), crsl.isScrolling = !1, clbk.onAfter = sc_fireCallbacks($tt0, e, "onAfter", G, clbk), queu = sc_fireQueue($cfs, queu, conf), crsl.isPaused || $cfs.trigger(cf_e("play", conf))
                    }, crsl.isScrolling = !0, tmrs = sc_clearTimers(tmrs), clbk.onBefore = sc_fireCallbacks($tt0, e, "onBefore", G, clbk), e.fx) {
                        case "none":
                            $cfs.css(x), F(), D(), N(), L(), M(), O();
                            break;
                        case "fade":
                            scrl.anims.push([$cfs, {
                                opacity: 0
                            }, function() {
                                F(), D(), N(), L(), M(), scrl = sc_setScroll(k, e.easing, conf), scrl.anims.push([$cfs, {
                                    opacity: 1
                                }, O]), sc_startScroll(scrl, conf)
                            }]);
                            break;
                        case "crossfade":
                            $cfs.css({
                                opacity: 0
                            }), scrl.anims.push([y, {
                                opacity: 0
                            }]), scrl.anims.push([$cfs, {
                                opacity: 1
                            }, O]), A(), D(), N(), L(), M();
                            break;
                        case "cover":
                            $cfs.css(opts.d.left, $wrp[opts.d.width]()), scrl.anims.push([$cfs, P, O]), A(), D(), N(), M();
                            break;
                        case "cover-fade":
                            $cfs.css(opts.d.left, $wrp[opts.d.width]()), scrl.anims.push([y, {
                                opacity: 0
                            }]), scrl.anims.push([$cfs, P, O]), A(), D(), N(), M();
                            break;
                        case "uncover":
                            scrl.anims.push([y, C, O]), A(), D(), N(), L(), M();
                            break;
                        case "uncover-fade":
                            $cfs.css({
                                opacity: 0
                            }), scrl.anims.push([$cfs, {
                                opacity: 1
                            }]), scrl.anims.push([y, C, O]), A(), D(), N(), L(), M();
                            break;
                        default:
                            scrl.anims.push([$cfs, x, function() {
                                L(), M(), O()
                            }]), A(), I(), E()
                    }
                    return sc_startScroll(scrl, conf), cf_setCookie(opts.cookie, $cfs, conf), $cfs.trigger(cf_e("updatePageStatus", conf), [!1, _]), !0
                }), $cfs.bind(cf_e("slideTo", conf), function(t, e, n, i, r, s, o) {
                    t.stopPropagation();
                    var a = [e, n, i, r, s, o],
                        c = ["string/number/object", "number", "boolean", "object", "string", "function"],
                        l = cf_sortParams(a, c);
                    return r = l[3], s = l[4], o = l[5], 0 != (e = gn_getItemIndex(l[0], l[1], l[2], itms, $cfs)) && (is_object(r) || (r = !1), "prev" != s && "next" != s && (s = opts.circular ? e <= itms.total / 2 ? "next" : "prev" : 0 == itms.first || itms.first > e ? "next" : "prev"), "prev" == s && (e = itms.total - e), $cfs.trigger(cf_e(s, conf), [r, e, o]), !0)
                }), $cfs.bind(cf_e("prevPage", conf), function(t, e, n) {
                    t.stopPropagation();
                    var i = $cfs.triggerHandler(cf_e("currentPage", conf));
                    return $cfs.triggerHandler(cf_e("slideToPage", conf), [i - 1, e, "prev", n])
                }), $cfs.bind(cf_e("nextPage", conf), function(t, e, n) {
                    t.stopPropagation();
                    var i = $cfs.triggerHandler(cf_e("currentPage", conf));
                    return $cfs.triggerHandler(cf_e("slideToPage", conf), [i + 1, e, "next", n])
                }), $cfs.bind(cf_e("slideToPage", conf), function(t, e, n, i, r) {
                    t.stopPropagation(), is_number(e) || (e = $cfs.triggerHandler(cf_e("currentPage", conf)));
                    var s = opts.pagination.items || opts.items.visible,
                        o = Math.ceil(itms.total / s) - 1;
                    return e < 0 && (e = o), e > o && (e = 0), $cfs.triggerHandler(cf_e("slideTo", conf), [e * s, 0, !0, n, i, r])
                }), $cfs.bind(cf_e("jumpToStart", conf), function(t, e) {
                    if (t.stopPropagation(), e = e ? gn_getItemIndex(e, 0, !0, itms, $cfs) : 0, 0 != (e += itms.first)) {
                        if (itms.total > 0)
                            for (; e > itms.total;) e -= itms.total;
                        $cfs.prepend($cfs.children().slice(e, itms.total))
                    }
                    return !0
                }), $cfs.bind(cf_e("synchronise", conf), function(t, e) {
                    if (t.stopPropagation(), e) e = cf_getSynchArr(e);
                    else {
                        if (!opts.synchronise) return debug(conf, "No carousel to synchronise.");
                        e = opts.synchronise
                    }
                    for (var n = $cfs.triggerHandler(cf_e("currentPosition", conf)), i = !0, r = 0, s = e.length; r < s; r++) e[r][0].triggerHandler(cf_e("slideTo", conf), [n, e[r][3], !0]) || (i = !1);
                    return i
                }), $cfs.bind(cf_e("queue", conf), function(t, e, n) {
                    return t.stopPropagation(), is_function(e) ? e.call($tt0, queu) : is_array(e) ? queu = e : is_undefined(e) || queu.push([e, n]), queu
                }), $cfs.bind(cf_e("insertItem", conf), function(t, e, n, i, r) {
                    t.stopPropagation();
                    var s = [e, n, i, r],
                        o = ["string/object", "string/number/object", "boolean", "number"],
                        a = cf_sortParams(s, o);
                    if (e = a[0], n = a[1], i = a[2], r = a[3], is_object(e) && !is_jquery(e) ? e = $(e) : is_string(e) && (e = $(e)), !is_jquery(e) || 0 == e.length) return debug(conf, "Not a valid object.");
                    is_undefined(n) && (n = "end"), sz_storeMargin(e, opts), sz_storeOrigCss(e);
                    var c = n,
                        l = "before";
                    "end" == n ? i ? (0 == itms.first ? (n = itms.total - 1, l = "after") : (n = itms.first, itms.first += e.length), n < 0 && (n = 0)) : (n = itms.total - 1, l = "after") : n = gn_getItemIndex(n, r, i, itms, $cfs);
                    var u = $cfs.children().eq(n);
                    return u.length ? u[l](e) : (debug(conf, "Correct insert-position not found! Appending item to the end."), $cfs.append(e)), "end" == c || i || n < itms.first && (itms.first += e.length), itms.total = $cfs.children().length, itms.first >= itms.total && (itms.first -= itms.total), $cfs.trigger(cf_e("updateSizes", conf)), $cfs.trigger(cf_e("linkAnchors", conf)), !0
                }), $cfs.bind(cf_e("removeItem", conf), function(t, e, n, i) {
                    t.stopPropagation();
                    var r = [e, n, i],
                        s = ["string/number/object", "boolean", "number"],
                        o = cf_sortParams(r, s);
                    e = o[0], n = o[1], i = o[2];
                    if (e instanceof $ && e.length > 1) return a = $(), e.each(function(t, e) {
                        var r = $cfs.trigger(cf_e("removeItem", conf), [$(this), n, i]);
                        r && (a = a.add(r))
                    }), a;
                    if (is_undefined(e) || "end" == e) a = $cfs.children().last();
                    else {
                        e = gn_getItemIndex(e, i, n, itms, $cfs);
                        var a = $cfs.children().eq(e);
                        a.length && e < itms.first && (itms.first -= a.length)
                    }
                    return a && a.length && (a.detach(), itms.total = $cfs.children().length, $cfs.trigger(cf_e("updateSizes", conf))), a
                }), $cfs.bind(cf_e("onBefore", conf) + " " + cf_e("onAfter", conf), function(t, e) {
                    t.stopPropagation();
                    var n = t.type.slice(conf.events.prefix.length);
                    return is_array(e) && (clbk[n] = e), is_function(e) && clbk[n].push(e), clbk[n]
                }), $cfs.bind(cf_e("currentPosition", conf), function(t, e) {
                    if (t.stopPropagation(), 0 == itms.first) var n = 0;
                    else var n = itms.total - itms.first;
                    return is_function(e) && e.call($tt0, n), n
                }), $cfs.bind(cf_e("currentPage", conf), function(t, e) {
                    t.stopPropagation();
                    var n, i = opts.pagination.items || opts.items.visible,
                        r = Math.ceil(itms.total / i - 1);
                    return n = 0 == itms.first ? 0 : itms.first < itms.total % i ? 0 : itms.first != i || opts.circular ? Math.round((itms.total - itms.first) / i) : r, n < 0 && (n = 0), n > r && (n = r), is_function(e) && e.call($tt0, n), n
                }), $cfs.bind(cf_e("currentVisible", conf), function(t, e) {
                    t.stopPropagation();
                    var n = gi_getCurrentItems($cfs.children(), opts);
                    return is_function(e) && e.call($tt0, n), n
                }), $cfs.bind(cf_e("slice", conf), function(t, e, n, i) {
                    if (t.stopPropagation(), 0 == itms.total) return !1;
                    var r = [e, n, i],
                        s = ["number", "number", "function"],
                        o = cf_sortParams(r, s);
                    if (e = is_number(o[0]) ? o[0] : 0, n = is_number(o[1]) ? o[1] : itms.total, i = o[2], e += itms.first, n += itms.first, items.total > 0) {
                        for (; e > itms.total;) e -= itms.total;
                        for (; n > itms.total;) n -= itms.total;
                        for (; e < 0;) e += itms.total;
                        for (; n < 0;) n += itms.total
                    }
                    var a, c = $cfs.children();
                    return a = n > e ? c.slice(e, n) : $(c.slice(e, itms.total).get().concat(c.slice(0, n).get())), is_function(i) && i.call($tt0, a), a
                }), $cfs.bind(cf_e("isPaused", conf) + " " + cf_e("isStopped", conf) + " " + cf_e("isScrolling", conf), function(t, e) {
                    t.stopPropagation();
                    var n = t.type.slice(conf.events.prefix.length),
                        i = crsl[n];
                    return is_function(e) && e.call($tt0, i), i
                }), $cfs.bind(cf_e("configuration", conf), function(e, a, b, c) {
                    e.stopPropagation();
                    var reInit = !1;
                    if (is_function(a)) a.call($tt0, opts);
                    else if (is_object(a)) opts_orig = $.extend(!0, {}, opts_orig, a), !1 !== b ? reInit = !0 : opts = $.extend(!0, {}, opts, a);
                    else if (!is_undefined(a))
                        if (is_function(b)) {
                            var val = eval("opts." + a);
                            is_undefined(val) && (val = ""), b.call($tt0, val)
                        } else {
                            if (is_undefined(b)) return eval("opts." + a);
                            "boolean" != typeof c && (c = !0), eval("opts_orig." + a + " = b"), !1 !== c ? reInit = !0 : eval("opts." + a + " = b")
                        } if (reInit) {
                        sz_resetMargin($cfs.children(), opts), FN._init(opts_orig), FN._bind_buttons();
                        var sz = sz_setSizes($cfs, opts);
                        $cfs.trigger(cf_e("updatePageStatus", conf), [!0, sz])
                    }
                    return opts
                }), $cfs.bind(cf_e("linkAnchors", conf), function(t, e, n) {
                    return t.stopPropagation(), is_undefined(e) ? e = $("body") : is_string(e) && (e = $(e)), is_jquery(e) && 0 != e.length ? (is_string(n) || (n = "a.caroufredsel"), e.find(n).each(function() {
                        var t = this.hash || "";
                        t.length > 0 && -1 != $cfs.children().index($(t)) && $(this).unbind("click").click(function(e) {
                            e.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), t)
                        })
                    }), !0) : debug(conf, "Not a valid object.")
                }), $cfs.bind(cf_e("updatePageStatus", conf), function(t, e, n) {
                    if (t.stopPropagation(), opts.pagination.container) {
                        var i = opts.pagination.items || opts.items.visible,
                            r = Math.ceil(itms.total / i);
                        e && (opts.pagination.anchorBuilder && (opts.pagination.container.children().remove(), opts.pagination.container.each(function() {
                            for (var t = 0; t < r; t++) {
                                var e = $cfs.children().eq(gn_getItemIndex(t * i, 0, !0, itms, $cfs));
                                $(this).append(opts.pagination.anchorBuilder.call(e[0], t + 1))
                            }
                        })), opts.pagination.container.each(function() {
                            $(this).children().unbind(opts.pagination.event).each(function(t) {
                                $(this).bind(opts.pagination.event, function(e) {
                                    e.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), [t * i, -opts.pagination.deviation, !0, opts.pagination])
                                })
                            })
                        }));
                        var s = $cfs.triggerHandler(cf_e("currentPage", conf)) + opts.pagination.deviation;
                        return s >= r && (s = 0), s < 0 && (s = r - 1), opts.pagination.container.each(function() {
                            $(this).children().removeClass(cf_c("selected", conf)).eq(s).addClass(cf_c("selected", conf))
                        }), !0
                    }
                }), $cfs.bind(cf_e("updateSizes", conf), function(t) {
                    var e = opts.items.visible,
                        n = $cfs.children(),
                        i = ms_getParentSize($wrp, opts, "width");
                    if (itms.total = n.length, crsl.primarySizePercentage ? (opts.maxDimension = i, opts[opts.d.width] = ms_getPercentage(i, crsl.primarySizePercentage)) : opts.maxDimension = ms_getMaxDimension(opts, i), opts.responsive ? (opts.items.width = opts.items.sizesConf.width, opts.items.height = opts.items.sizesConf.height, opts = in_getResponsiveValues(opts, n, i), e = opts.items.visible, sz_setResponsiveSizes(opts, n)) : opts.items.visibleConf.variable ? e = gn_getVisibleItemsNext(n, opts, 0) : "*" != opts.items.filter && (e = gn_getVisibleItemsNextFilter(n, opts, 0)), !opts.circular && 0 != itms.first && e > itms.first) {
                        if (opts.items.visibleConf.variable) var r = gn_getVisibleItemsPrev(n, opts, itms.first) - itms.first;
                        else if ("*" != opts.items.filter) var r = gn_getVisibleItemsPrevFilter(n, opts, itms.first) - itms.first;
                        else var r = opts.items.visible - itms.first;
                        debug(conf, "Preventing non-circular: sliding " + r + " items backward."), $cfs.trigger(cf_e("prev", conf), r)
                    }
                    opts.items.visible = cf_getItemsAdjust(e, opts, opts.items.visibleConf.adjust, $tt0), opts.items.visibleConf.old = opts.items.visible, opts = in_getAlignPadding(opts, n);
                    var s = sz_setSizes($cfs, opts);
                    return $cfs.trigger(cf_e("updatePageStatus", conf), [!0, s]), nv_showNavi(opts, itms.total, conf), nv_enableNavi(opts, itms.first, conf), s
                }), $cfs.bind(cf_e("destroy", conf), function(t, e) {
                    return t.stopPropagation(), tmrs = sc_clearTimers(tmrs), $cfs.data("_cfs_isCarousel", !1), $cfs.trigger(cf_e("finish", conf)), e && $cfs.trigger(cf_e("jumpToStart", conf)), sz_restoreOrigCss($cfs.children()), sz_restoreOrigCss($cfs), FN._unbind_events(), FN._unbind_buttons(), "parent" == conf.wrapper ? sz_restoreOrigCss($wrp) : $wrp.replaceWith($cfs), !0
                }), $cfs.bind(cf_e("debug", conf), function(t) {
                    return debug(conf, "Carousel width: " + opts.width), debug(conf, "Carousel height: " + opts.height), debug(conf, "Item widths: " + opts.items.width), debug(conf, "Item heights: " + opts.items.height), debug(conf, "Number of items visible: " + opts.items.visible), opts.auto.play && debug(conf, "Number of items scrolled automatically: " + opts.auto.items), opts.prev.button && debug(conf, "Number of items scrolled backward: " + opts.prev.items), opts.next.button && debug(conf, "Number of items scrolled forward: " + opts.next.items), conf.debug
                }), $cfs.bind("_cfs_triggerEvent", function(t, e, n) {
                    return t.stopPropagation(), $cfs.triggerHandler(cf_e(e, conf), n)
                })
            }, FN._unbind_events = function() {
                $cfs.unbind(cf_e("", conf)), $cfs.unbind(cf_e("", conf, !1)), $cfs.unbind("_cfs_triggerEvent")
            }, FN._bind_buttons = function() {
                if (FN._unbind_buttons(), nv_showNavi(opts, itms.total, conf), nv_enableNavi(opts, itms.first, conf), opts.auto.pauseOnHover) {
                    var t = bt_pauseOnHoverConfig(opts.auto.pauseOnHover);
                    $wrp.bind(cf_e("mouseenter", conf, !1), function() {
                        $cfs.trigger(cf_e("pause", conf), t)
                    }).bind(cf_e("mouseleave", conf, !1), function() {
                        $cfs.trigger(cf_e("resume", conf))
                    })
                }
                if (opts.auto.button && opts.auto.button.bind(cf_e(opts.auto.event, conf, !1), function(t) {
                        t.preventDefault();
                        var e = !1,
                            n = null;
                        crsl.isPaused ? e = "play" : opts.auto.pauseOnEvent && (e = "pause", n = bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)), e && $cfs.trigger(cf_e(e, conf), n)
                    }), opts.prev.button && (opts.prev.button.bind(cf_e(opts.prev.event, conf, !1), function(t) {
                        t.preventDefault(), $cfs.trigger(cf_e("prev", conf))
                    }), opts.prev.pauseOnHover)) {
                    var t = bt_pauseOnHoverConfig(opts.prev.pauseOnHover);
                    opts.prev.button.bind(cf_e("mouseenter", conf, !1), function() {
                        $cfs.trigger(cf_e("pause", conf), t)
                    }).bind(cf_e("mouseleave", conf, !1), function() {
                        $cfs.trigger(cf_e("resume", conf))
                    })
                }
                if (opts.next.button && (opts.next.button.bind(cf_e(opts.next.event, conf, !1), function(t) {
                        t.preventDefault(), $cfs.trigger(cf_e("next", conf))
                    }), opts.next.pauseOnHover)) {
                    var t = bt_pauseOnHoverConfig(opts.next.pauseOnHover);
                    opts.next.button.bind(cf_e("mouseenter", conf, !1), function() {
                        $cfs.trigger(cf_e("pause", conf), t)
                    }).bind(cf_e("mouseleave", conf, !1), function() {
                        $cfs.trigger(cf_e("resume", conf))
                    })
                }
                if (opts.pagination.container && opts.pagination.pauseOnHover) {
                    var t = bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);
                    opts.pagination.container.bind(cf_e("mouseenter", conf, !1), function() {
                        $cfs.trigger(cf_e("pause", conf), t)
                    }).bind(cf_e("mouseleave", conf, !1), function() {
                        $cfs.trigger(cf_e("resume", conf))
                    })
                }
                if ((opts.prev.key || opts.next.key) && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function(t) {
                        var e = t.keyCode;
                        e == opts.next.key && (t.preventDefault(), $cfs.trigger(cf_e("next", conf))), e == opts.prev.key && (t.preventDefault(), $cfs.trigger(cf_e("prev", conf)))
                    }), opts.pagination.keys && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function(t) {
                        var e = t.keyCode;
                        e >= 49 && e < 58 && (e = (e - 49) * opts.items.visible) <= itms.total && (t.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), [e, 0, !0, opts.pagination]))
                    }), $.fn.swipe) {
                    var e = "ontouchstart" in window;
                    if (e && opts.swipe.onTouch || !e && opts.swipe.onMouse) {
                        var n = $.extend(!0, {}, opts.prev, opts.swipe),
                            i = $.extend(!0, {}, opts.next, opts.swipe),
                            r = function() {
                                $cfs.trigger(cf_e("prev", conf), [n])
                            },
                            s = function() {
                                $cfs.trigger(cf_e("next", conf), [i])
                            };
                        switch (opts.direction) {
                            case "up":
                            case "down":
                                opts.swipe.options.swipeUp = s, opts.swipe.options.swipeDown = r;
                                break;
                            default:
                                opts.swipe.options.swipeLeft = s, opts.swipe.options.swipeRight = r
                        }
                        crsl.swipe && $cfs.swipe("destroy"), $wrp.swipe(opts.swipe.options), $wrp.css("cursor", "move"), crsl.swipe = !0
                    }
                }
                if ($.fn.mousewheel && opts.mousewheel) {
                    var o = $.extend(!0, {}, opts.prev, opts.mousewheel),
                        a = $.extend(!0, {}, opts.next, opts.mousewheel);
                    crsl.mousewheel && $wrp.unbind(cf_e("mousewheel", conf, !1)), $wrp.bind(cf_e("mousewheel", conf, !1), function(t, e) {
                        t.preventDefault(), e > 0 ? $cfs.trigger(cf_e("prev", conf), [o]) : $cfs.trigger(cf_e("next", conf), [a])
                    }), crsl.mousewheel = !0
                }
                if (opts.auto.play && $cfs.trigger(cf_e("play", conf), opts.auto.delay), crsl.upDateOnWindowResize) {
                    var c = function(t) {
                            $cfs.trigger(cf_e("finish", conf)), opts.auto.pauseOnResize && !crsl.isPaused && $cfs.trigger(cf_e("play", conf)), sz_resetMargin($cfs.children(), opts), $cfs.trigger(cf_e("updateSizes", conf))
                        },
                        l = $(window),
                        u = null;
                    if ($.debounce && "debounce" == conf.onWindowResize) u = $.debounce(200, c);
                    else if ($.throttle && "throttle" == conf.onWindowResize) u = $.throttle(300, c);
                    else {
                        var h = 0,
                            f = 0;
                        u = function() {
                            var t = l.width(),
                                e = l.height();
                            t == h && e == f || (c(), h = t, f = e)
                        }
                    }
                    l.bind(cf_e("resize", conf, !1, !0, !0), u)
                }
            }, FN._unbind_buttons = function() {
                var t = (cf_e("", conf), cf_e("", conf, !1));
                ns3 = cf_e("", conf, !1, !0, !0), $(document).unbind(ns3), $(window).unbind(ns3), $wrp.unbind(t), opts.auto.button && opts.auto.button.unbind(t), opts.prev.button && opts.prev.button.unbind(t), opts.next.button && opts.next.button.unbind(t), opts.pagination.container && (opts.pagination.container.unbind(t), opts.pagination.anchorBuilder && opts.pagination.container.children().remove()), crsl.swipe && ($cfs.swipe("destroy"), $wrp.css("cursor", "default"), crsl.swipe = !1), crsl.mousewheel && (crsl.mousewheel = !1), nv_showNavi(opts, "hide", conf), nv_enableNavi(opts, "removeClass", conf)
            }, is_boolean(configs) && (configs = {
                debug: configs
            });
            var crsl = {
                    direction: "next",
                    isPaused: !0,
                    isScrolling: !1,
                    isStopped: !1,
                    mousewheel: !1,
                    swipe: !1
                },
                itms = {
                    total: $cfs.children().length,
                    first: 0
                },
                tmrs = {
                    auto: null,
                    progress: null,
                    startTime: getTime(),
                    timePassed: 0
                },
                scrl = {
                    isStopped: !1,
                    duration: 0,
                    startTime: 0,
                    easing: "",
                    anims: []
                },
                clbk = {
                    onBefore: [],
                    onAfter: []
                },
                queu = [],
                conf = $.extend(!0, {}, $.fn.carouFredSel.configs, configs),
                opts = {},
                opts_orig = $.extend(!0, {}, options),
                $wrp = "parent" == conf.wrapper ? $cfs.parent() : $cfs.wrap("<" + conf.wrapper.element + ' class="' + conf.wrapper.classname + '" />').parent();
            if (conf.selector = $cfs.selector, conf.serialNumber = $.fn.carouFredSel.serialNumber++, conf.transition = conf.transition && $.fn.transition ? "transition" : "animate", FN._init(opts_orig, !0, starting_position), FN._build(), FN._bind_events(), FN._bind_buttons(), is_array(opts.items.start)) var start_arr = opts.items.start;
            else {
                var start_arr = [];
                0 != opts.items.start && start_arr.push(opts.items.start)
            }
            if (opts.cookie && start_arr.unshift(parseInt(cf_getCookie(opts.cookie), 10)), start_arr.length > 0)
                for (var a = 0, l = start_arr.length; a < l; a++) {
                    var s = start_arr[a];
                    if (0 != s) {
                        if (!0 === s) {
                            if (s = window.location.hash, s.length < 1) continue
                        } else "random" === s && (s = Math.floor(Math.random() * itms.total));
                        if ($cfs.triggerHandler(cf_e("slideTo", conf), [s, 0, !0, {
                                fx: "none"
                            }])) break
                    }
                }
            var siz = sz_setSizes($cfs, opts),
                itm = gi_getCurrentItems($cfs.children(), opts);
            return opts.onCreate && opts.onCreate.call($tt0, {
                width: siz.width,
                height: siz.height,
                items: itm
            }), $cfs.trigger(cf_e("updatePageStatus", conf), [!0, siz]), $cfs.trigger(cf_e("linkAnchors", conf)), conf.debug && $cfs.trigger(cf_e("debug", conf)), $cfs
        }, $.fn.carouFredSel.serialNumber = 1, $.fn.carouFredSel.defaults = {
            synchronise: !1,
            infinite: !0,
            circular: !0,
            responsive: !1,
            direction: "left",
            items: {
                start: 0
            },
            scroll: {
                easing: "swing",
                duration: 500,
                pauseOnHover: !1,
                event: "click",
                queue: !1
            }
        }, $.fn.carouFredSel.configs = {
            debug: !1,
            transition: !1,
            onWindowResize: "throttle",
            events: {
                prefix: "",
                namespace: "cfs"
            },
            wrapper: {
                element: "div",
                classname: "caroufredsel_wrapper"
            },
            classnames: {}
        }, $.fn.carouFredSel.pageAnchorBuilder = function(t) {
            return '<a href="#"><span>' + t + "</span></a>"
        }, $.fn.carouFredSel.progressbarUpdater = function(t) {
            $(this).css("width", t + "%")
        }, $.fn.carouFredSel.cookie = {
            get: function(t) {
                t += "=";
                for (var e = document.cookie.split(";"), n = 0, i = e.length; n < i; n++) {
                    for (var r = e[n];
                        " " == r.charAt(0);) r = r.slice(1);
                    if (0 == r.indexOf(t)) return r.slice(t.length)
                }
                return 0
            },
            set: function(t, e, n) {
                var i = "";
                if (n) {
                    var r = new Date;
                    r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3), i = "; expires=" + r.toGMTString()
                }
                document.cookie = t + "=" + e + i + "; path=/"
            },
            remove: function(t) {
                $.fn.carouFredSel.cookie.set(t, "", -1)
            }
        }, $.extend($.easing, {
            quadratic: function(t) {
                var e = t * t;
                return t * (-e * t + 4 * e - 6 * t + 4)
            },
            cubic: function(t) {
                return t * (4 * t * t - 9 * t + 6)
            },
            elastic: function(t) {
                var e = t * t;
                return t * (33 * e * e - 106 * e * t + 126 * e - 67 * t + 15)
            }
        }))
    }(jQuery)
}, function(t, e, n) {
    var i = n(0);
    i.easing.jswing = i.easing.swing, i.extend(i.easing, {
        def: "easeOutQuad",
        swing: function(t, e, n, r, s) {
            return i.easing[i.easing.def](t, e, n, r, s)
        },
        easeInQuad: function(t, e, n, i, r) {
            return i * (e /= r) * e + n
        },
        easeOutQuad: function(t, e, n, i, r) {
            return -i * (e /= r) * (e - 2) + n
        },
        easeInOutQuad: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
        },
        easeInCubic: function(t, e, n, i, r) {
            return i * (e /= r) * e * e + n
        },
        easeOutCubic: function(t, e, n, i, r) {
            return i * ((e = e / r - 1) * e * e + 1) + n
        },
        easeInOutCubic: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
        },
        easeInQuart: function(t, e, n, i, r) {
            return i * (e /= r) * e * e * e + n
        },
        easeOutQuart: function(t, e, n, i, r) {
            return -i * ((e = e / r - 1) * e * e * e - 1) + n
        },
        easeInOutQuart: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e * e * e + n : -i / 2 * ((e -= 2) * e * e * e - 2) + n
        },
        easeInQuint: function(t, e, n, i, r) {
            return i * (e /= r) * e * e * e * e + n
        },
        easeOutQuint: function(t, e, n, i, r) {
            return i * ((e = e / r - 1) * e * e * e * e + 1) + n
        },
        easeInOutQuint: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e * e * e * e + n : i / 2 * ((e -= 2) * e * e * e * e + 2) + n
        },
        easeInSine: function(t, e, n, i, r) {
            return -i * Math.cos(e / r * (Math.PI / 2)) + i + n
        },
        easeOutSine: function(t, e, n, i, r) {
            return i * Math.sin(e / r * (Math.PI / 2)) + n
        },
        easeInOutSine: function(t, e, n, i, r) {
            return -i / 2 * (Math.cos(Math.PI * e / r) - 1) + n
        },
        easeInExpo: function(t, e, n, i, r) {
            return 0 == e ? n : i * Math.pow(2, 10 * (e / r - 1)) + n
        },
        easeOutExpo: function(t, e, n, i, r) {
            return e == r ? n + i : i * (1 - Math.pow(2, -10 * e / r)) + n
        },
        easeInOutExpo: function(t, e, n, i, r) {
            return 0 == e ? n : e == r ? n + i : (e /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --e)) + n
        },
        easeInCirc: function(t, e, n, i, r) {
            return -i * (Math.sqrt(1 - (e /= r) * e) - 1) + n
        },
        easeOutCirc: function(t, e, n, i, r) {
            return i * Math.sqrt(1 - (e = e / r - 1) * e) + n
        },
        easeInOutCirc: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + n : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
        },
        easeInElastic: function(t, e, n, i, r) {
            var s = 1.70158,
                o = 0,
                a = i;
            if (0 == e) return n;
            if (1 == (e /= r)) return n + i;
            if (o || (o = .3 * r), a < Math.abs(i)) {
                a = i;
                var s = o / 4
            } else var s = o / (2 * Math.PI) * Math.asin(i / a);
            return -a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - s) * (2 * Math.PI) / o) + n
        },
        easeOutElastic: function(t, e, n, i, r) {
            var s = 1.70158,
                o = 0,
                a = i;
            if (0 == e) return n;
            if (1 == (e /= r)) return n + i;
            if (o || (o = .3 * r), a < Math.abs(i)) {
                a = i;
                var s = o / 4
            } else var s = o / (2 * Math.PI) * Math.asin(i / a);
            return a * Math.pow(2, -10 * e) * Math.sin((e * r - s) * (2 * Math.PI) / o) + i + n
        },
        easeInOutElastic: function(t, e, n, i, r) {
            var s = 1.70158,
                o = 0,
                a = i;
            if (0 == e) return n;
            if (2 == (e /= r / 2)) return n + i;
            if (o || (o = r * (.3 * 1.5)), a < Math.abs(i)) {
                a = i;
                var s = o / 4
            } else var s = o / (2 * Math.PI) * Math.asin(i / a);
            return e < 1 ? a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - s) * (2 * Math.PI) / o) * -.5 + n : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * r - s) * (2 * Math.PI) / o) * .5 + i + n
        },
        easeInBack: function(t, e, n, i, r, s) {
            return void 0 == s && (s = 1.70158), i * (e /= r) * e * ((s + 1) * e - s) + n
        },
        easeOutBack: function(t, e, n, i, r, s) {
            return void 0 == s && (s = 1.70158), i * ((e = e / r - 1) * e * ((s + 1) * e + s) + 1) + n
        },
        easeInOutBack: function(t, e, n, i, r, s) {
            return void 0 == s && (s = 1.70158), (e /= r / 2) < 1 ? i / 2 * (e * e * ((1 + (s *= 1.525)) * e - s)) + n : i / 2 * ((e -= 2) * e * ((1 + (s *= 1.525)) * e + s) + 2) + n
        },
        easeInBounce: function(t, e, n, r, s) {
            return r - i.easing.easeOutBounce(t, s - e, 0, r, s) + n
        },
        easeOutBounce: function(t, e, n, i, r) {
            return (e /= r) < 1 / 2.75 ? i * (7.5625 * e * e) + n : e < 2 / 2.75 ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : e < 2.5 / 2.75 ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
        },
        easeInOutBounce: function(t, e, n, r, s) {
            return e < s / 2 ? .5 * i.easing.easeInBounce(t, 2 * e, 0, r, s) + n : .5 * i.easing.easeOutBounce(t, 2 * e - s, 0, r, s) + .5 * r + n
        }
    })
}, function(t, e, n) {
    var i = n(0);
    /*!
     * jQuery Transit - CSS3 transitions and transformations
     * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
     * MIT Licensed.
     *
     * http://ricostacruz.com/jquery.transit
     * http://github.com/rstacruz/jquery.transit
     */
    ! function(t) {
        function e(t) {
            if (t in a.style) return t;
            var e = ["Moz", "Webkit", "O", "ms"],
                n = t.charAt(0).toUpperCase() + t.substr(1);
            if (t in a.style) return t;
            for (t = 0; t < e.length; ++t) {
                var i = e[t] + n;
                if (i in a.style) return i
            }
        }

        function n(t) {
            return "string" == typeof t && this.parse(t), this
        }

        function i(e, n, i, r) {
            var s = [];
            t.each(e, function(e) {
                e = t.camelCase(e), e = t.transit.propertyMap[e] || t.cssProps[e] || e, e = e.replace(/([A-Z])/g, function(t) {
                    return "-" + t.toLowerCase()
                }), -1 === t.inArray(e, s) && s.push(e)
            }), t.cssEase[i] && (i = t.cssEase[i]);
            var a = o(n) + " " + i;
            0 < parseInt(r, 10) && (a += " " + o(r));
            var c = [];
            return t.each(s, function(t, e) {
                c.push(e + " " + a)
            }), c.join(", ")
        }

        function r(e, n) {
            n || (t.cssNumber[e] = !0), t.transit.propertyMap[e] = c.transform, t.cssHooks[e] = {
                get: function(n) {
                    return t(n).css("transit:transform").get(e)
                },
                set: function(n, i) {
                    var r = t(n).css("transit:transform");
                    r.setFromString(e, i), t(n).css({
                        "transit:transform": r
                    })
                }
            }
        }

        function s(t, e) {
            return "string" != typeof t || t.match(/^[\-0-9\.]+$/) ? "" + t + e : t
        }

        function o(e) {
            return t.fx.speeds[e] && (e = t.fx.speeds[e]), s(e, "ms")
        }
        t.transit = {
            version: "0.9.9",
            propertyMap: {
                marginLeft: "margin",
                marginRight: "margin",
                marginBottom: "margin",
                marginTop: "margin",
                paddingLeft: "padding",
                paddingRight: "padding",
                paddingBottom: "padding",
                paddingTop: "padding"
            },
            enabled: !0,
            useTransitionEnd: !1
        };
        var a = document.createElement("div"),
            c = {},
            l = -1 < navigator.userAgent.toLowerCase().indexOf("chrome");
        c.transition = e("transition"), c.transitionDelay = e("transitionDelay"), c.transform = e("transform"), c.transformOrigin = e("transformOrigin"), a.style[c.transform] = "", a.style[c.transform] = "rotateY(90deg)", c.transform3d = "" !== a.style[c.transform];
        var u, h = c.transitionEnd = {
            transition: "transitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            WebkitTransition: "webkitTransitionEnd",
            msTransition: "MSTransitionEnd"
        } [c.transition] || null;
        for (u in c) c.hasOwnProperty(u) && void 0 === t.support[u] && (t.support[u] = c[u]);
        a = null, t.cssEase = {
            _default: "ease",
            in: "ease-in",
            out: "ease-out",
            "in-out": "ease-in-out",
            snap: "cubic-bezier(0,1,.5,1)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
        }, t.cssHooks["transit:transform"] = {
            get: function(e) {
                return t(e).data("transform") || new n
            },
            set: function(e, i) {
                var r = i;
                r instanceof n || (r = new n(r)), e.style[c.transform] = "WebkitTransform" !== c.transform || l ? r.toString() : r.toString(!0), t(e).data("transform", r)
            }
        }, t.cssHooks.transform = {
            set: t.cssHooks["transit:transform"].set
        }, "1.8" > t.fn.jquery && (t.cssHooks.transformOrigin = {
            get: function(t) {
                return t.style[c.transformOrigin]
            },
            set: function(t, e) {
                t.style[c.transformOrigin] = e
            }
        }, t.cssHooks.transition = {
            get: function(t) {
                return t.style[c.transition]
            },
            set: function(t, e) {
                t.style[c.transition] = e
            }
        }), r("scale"), r("translate"), r("rotate"), r("rotateX"), r("rotateY"), r("rotate3d"), r("perspective"), r("skewX"), r("skewY"), r("x", !0), r("y", !0), n.prototype = {
            setFromString: function(t, e) {
                var i = "string" == typeof e ? e.split(",") : e.constructor === Array ? e : [e];
                i.unshift(t), n.prototype.set.apply(this, i)
            },
            set: function(t) {
                var e = Array.prototype.slice.apply(arguments, [1]);
                this.setter[t] ? this.setter[t].apply(this, e) : this[t] = e.join(",")
            },
            get: function(t) {
                return this.getter[t] ? this.getter[t].apply(this) : this[t] || 0
            },
            setter: {
                rotate: function(t) {
                    this.rotate = s(t, "deg")
                },
                rotateX: function(t) {
                    this.rotateX = s(t, "deg")
                },
                rotateY: function(t) {
                    this.rotateY = s(t, "deg")
                },
                scale: function(t, e) {
                    void 0 === e && (e = t), this.scale = t + "," + e
                },
                skewX: function(t) {
                    this.skewX = s(t, "deg")
                },
                skewY: function(t) {
                    this.skewY = s(t, "deg")
                },
                perspective: function(t) {
                    this.perspective = s(t, "px")
                },
                x: function(t) {
                    this.set("translate", t, null)
                },
                y: function(t) {
                    this.set("translate", null, t)
                },
                translate: function(t, e) {
                    void 0 === this._translateX && (this._translateX = 0), void 0 === this._translateY && (this._translateY = 0), null !== t && void 0 !== t && (this._translateX = s(t, "px")), null !== e && void 0 !== e && (this._translateY = s(e, "px")), this.translate = this._translateX + "," + this._translateY
                }
            },
            getter: {
                x: function() {
                    return this._translateX || 0
                },
                y: function() {
                    return this._translateY || 0
                },
                scale: function() {
                    var t = (this.scale || "1,1").split(",");
                    return t[0] && (t[0] = parseFloat(t[0])), t[1] && (t[1] = parseFloat(t[1])), t[0] === t[1] ? t[0] : t
                },
                rotate3d: function() {
                    for (var t = (this.rotate3d || "0,0,0,0deg").split(","), e = 0; 3 >= e; ++e) t[e] && (t[e] = parseFloat(t[e]));
                    return t[3] && (t[3] = s(t[3], "deg")), t
                }
            },
            parse: function(t) {
                var e = this;
                t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(t, n, i) {
                    e.setFromString(n, i)
                })
            },
            toString: function(t) {
                var e, n = [];
                for (e in this) this.hasOwnProperty(e) && (c.transform3d || "rotateX" !== e && "rotateY" !== e && "perspective" !== e && "transformOrigin" !== e) && "_" !== e[0] && (t && "scale" === e ? n.push(e + "3d(" + this[e] + ",1)") : t && "translate" === e ? n.push(e + "3d(" + this[e] + ",0)") : n.push(e + "(" + this[e] + ")"));
                return n.join(" ")
            }
        }, t.fn.transition = t.fn.transit = function(e, n, r, s) {
            var a = this,
                l = 0,
                u = !0;
            "function" == typeof n && (s = n, n = void 0), "function" == typeof r && (s = r, r = void 0), void 0 !== e.easing && (r = e.easing, delete e.easing), void 0 !== e.duration && (n = e.duration, delete e.duration), void 0 !== e.complete && (s = e.complete, delete e.complete), void 0 !== e.queue && (u = e.queue, delete e.queue), void 0 !== e.delay && (l = e.delay, delete e.delay), void 0 === n && (n = t.fx.speeds._default), void 0 === r && (r = t.cssEase._default), n = o(n);
            var f = i(e, n, r, l),
                d = t.transit.enabled && c.transition ? parseInt(n, 10) + parseInt(l, 10) : 0;
            if (0 === d) return n = u, r = function(t) {
                a.css(e), s && s.apply(a), t && t()
            }, !0 === n ? a.queue(r) : n ? a.queue(n, r) : r(), a;
            var p = {};
            return n = u, r = function(n) {
                this.offsetWidth;
                var i = !1,
                    r = function t() {
                        i && a.unbind(h, t), 0 < d && a.each(function() {
                            this.style[c.transition] = p[this] || null
                        }), "function" == typeof s && s.apply(a), "function" == typeof n && n()
                    };
                0 < d && h && t.transit.useTransitionEnd ? (i = !0, a.bind(h, r)) : window.setTimeout(r, d), a.each(function() {
                    0 < d && (this.style[c.transition] = f), t(this).css(e)
                })
            }, !0 === n ? a.queue(r) : n ? a.queue(n, r) : r(), this
        }, t.transit.getTransitionValue = i
    }(i)
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n.n(i),
        s = n(25),
        o = (n.n(s), Math.floor(new Date("05/4/2018").getTime() / 1e3)),
        a = Math.floor(new Date("1/7/2017").getTime() / 1e3),
        c = Math.floor((new Date).getTime() / 1e3);
    Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 480 && r()(".countdown").final_countdown({
        start: a,
        end: o,
        now: c
    })
}, function(t, e) {}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n.n(i),
        s = n(27);
    n.n(s);
    r()(function() {
        r()('[data-toggle="tooltip"]').tooltip(), r()().alert(), r()(".navbar-collapse ul li a").click(function() {
            r()(".navbar-toggle:visible").click()
        }), r()("body").scrollspy({
            target: ".navbar-fixed-top"
        }), r()("a.page-scroll").bind("click", function(t) {
            var e = r()(this);
            t.preventDefault(), r()("html, body").stop().animate({
                scrollTop: r()(e.attr("href")).offset().top
            }, 1500, "easeInOutExpo")
        })
    })
}, function(t, e) {}, function(t, e, n) {
    "use strict";
    var i = n(29);
    n.n(i)
}, function(t, e) {}, function(t, e, n) {
    "use strict";

    function i(t) {
        u.attr("disabled", !0), window.fetch("/api/themes", {
            method: "POST",
            body: new FormData(document.querySelector("#theses-modal form"))
        }).then(function(t) {
            if (!t.ok) throw new Error("Filed to submit theme");
            h.css({
                display: "block"
            }), setTimeout(function() {
                return h.css({
                    display: "none"
                })
            }, 5500), u.attr("disabled", !1), document.querySelector("#theses-modal form").reset()
        }).catch(function() {
            u.attr("disabled", !1), f.css({
                display: "block"
            }), setTimeout(function() {
                return f.css({
                    display: "none"
                })
            }, 2500)
        }), t.preventDefault(), t.stopImmediatePropagation()
    }

    function r() {
        a()("#theses-modal #name").focus()
    }

    function s() {
        l.reset()
    }
    var o = n(0),
        a = n.n(o),
        c = n(31),
        l = (n.n(c), document.querySelector("#theses-modal form")),
        u = a()("#theme-submit"),
        h = a()("#alert-success"),
        f = a()("#alert-danger");
    // l.addEventListener("submit", i), a()("#theses-modal").on("shown.bs.modal", r).on("hide.bs.modal", s)
}, function(t, e) {}, function(t, e, n) {
    "use strict";
    var i = n(33);
    n.n(i)
}, function(t, e) {}, function(t, e, n) {
    "use strict";
    var i = n(35);
    n.n(i), n(36)
}, function(t, e) {}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r() {
        h()("#name").focus()
    }

    function s() {
        h()("#register-form")[0].reset(), h()("#finish-message").css({
            display: "none"
        });
        var t = document.querySelectorAll("#pay-insert-area > form");
        t && t.forEach(function(t) {
            return t.remove()
        }), h()("#pay-hide-area").show()
    }
    var o = n(4),
        a = n(37),
        c = (n.n(a), n(5)),
        l = n.n(c),
        u = n(0),
        h = n.n(u),
        f = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        d = function() {
            function t() {
                i(this, t);
                var e = new Date(Date.UTC(2017, 11, 31)),
                    n = new Date(Date.UTC(2018, 2, 31));
                this.firstBarrer = e.getTime(), this.secondBarrer = n.getTime()
            }
            return f(t, [{
                key: "isFirstPeriod",
                value: function() {
                    return (new Date).getTime() < this.firstBarrer
                }
            }, {
                key: "isSecondPeriod",
                value: function() {
                    return (new Date).getTime() < this.secondBarrer
                }
            }]), t
        }(),
        p = function() {
            function t(e) {
                i(this, t), this.dc = e, this.counterView = h()("#total-money"), this.docPrice = 1e3, this.docSecondPrice = 1200, this.docThirdPrice = 1400, this.internPrice = 700, this.internSecondPrice = 800, this.internThirdPrice = 900, this.dinnerPrice = 900, this.dinnerSecondPrice = 1100, this.dinnerThirdPrice = 1100
            }
            return f(t, [{
                key: "render",
                value: function(t) {
                    this.counterView.text(" " + t + " грн")
                }
            }, {
                key: "count",
                value: function() {
                    var t = document.querySelector("input[name=isDoctor]:checked").value,
                        e = document.querySelector("#dinner").checked,
                        n = 0;
                    return this.dc.isFirstPeriod() ? (n += "doctor" === t ? this.docPrice : this.internPrice, n += e ? this.dinnerPrice : 0) : this.dc.isSecondPeriod() ? (n += "doctor" === t ? this.docSecondPrice : this.internSecondPrice, n += e ? this.dinnerSecondPrice : 0) : (n += "doctor" === t ? this.docThirdPrice : this.internThirdPrice, n += e ? this.dinnerThirdPrice : 0), n
                }
            }, {
                key: "recount",
                value: function() {
                    var t = this.count();
                    this.render(t)
                }
            }]), t
        }(),
        g = function() {
            function t(e) {
                i(this, t), this.dc = e, this.counterView = h()("#total-money"), this.docPrice = 60, this.docSecondPrice = 70, this.docThirdPrice = 80, this.internPrice = 40, this.internSecondPrice = 50, this.internThirdPrice = 60, this.dinnerPrice = 40, this.dinnerSecondPrice = 40, this.dinnerThirdPrice = 40
            }
            return f(t, [{
                key: "render",
                value: function(t) {
                    this.counterView.text(" " + t + " EUR")
                }
            }, {
                key: "count",
                value: function() {
                    var t = document.querySelector("input[name=isDoctor]:checked").value,
                        e = document.querySelector("#dinner").checked,
                        n = 0;
                    return this.dc.isFirstPeriod() ? (n += "doctor" === t ? this.docPrice : this.internPrice, n += e ? this.dinnerPrice : 0) : this.dc.isSecondPeriod() ? (n += "doctor" === t ? this.docSecondPrice : this.internSecondPrice, n += e ? this.dinnerSecondPrice : 0) : (n += "doctor" === t ? this.docThirdPrice : this.internThirdPrice, n += e ? this.dinnerThirdPrice : 0), n
                }
            }, {
                key: "recount",
                value: function() {
                    var t = this.count();
                    this.render(t)
                }
            }]), t
        }(),
        m = void 0;
    m = o.a.isUa() ? new p(new d) : new g(new d), m.recount();
    var v = document.getElementById("register-form");
    v.addEventListener("change", function() {
        m.recount()
    }), h()(v).submit(function(t) {
        var e = h()("#register-submit");
        e.attr("disabled", !0);
        var n = document.querySelector("#name").value,
            i = document.querySelector("#email").value,
            r = document.querySelector("#phone").value,
            s = document.querySelector("#message").value || "empty",
            a = document.querySelector("input[name=isDoctor]:checked").value,
            c = document.querySelector("#dinner").checked,
            u = document.querySelector("#register-country").value,
            f = document.querySelector("#register-city").value,
            d = document.querySelector("#register-work-place").value,
            p = m.count(),
            g = {
                name: n,
                email: i,
                phone: r,
                message: s,
                position: a,
                dinner: c,
                amount: p,
                country: u,
                city: f,
                work: d
            };
        l()({
            url: "/api/checkout",
            method: "post",
            params: {
                lang: o.a.getLanguage()
            },
            headers: {
                "Content-Type": "application/json"
            },
            data: g
        }).then(function(t) {
            return t.data
        }).then(function(t) {
            e.attr("disabled", !1), h()("#finish-message").css({
                display: "flex"
            }), h()("#pay-hide-area").hide(), h()("#pay-insert-area").append(t)
        }).catch(function() {
            return e.attr("disabled", !1)
        }), t.preventDefault()
    }), h()("#registration-modal").on("shown.bs.modal", r).on("hide.bs.modal", s)
}, function(t, e) {}, function(t, e, n) {
    "use strict";

    function i(t) {
        var e = new o(t),
            n = s(o.prototype.request, e);
        return r.extend(n, o.prototype, e), r.extend(n, e), n
    }
    var r = n(1),
        s = n(6),
        o = n(40),
        a = n(2),
        c = i(a);
    c.Axios = o, c.create = function(t) {
        return i(r.merge(a, t))
    }, c.Cancel = n(11), c.CancelToken = n(54), c.isCancel = n(10), c.all = function(t) {
        return Promise.all(t)
    }, c.spread = n(55), t.exports = c, t.exports.default = c
}, function(t, e) {
    function n(t) {
        return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
    }

    function i(t) {
        return "function" == typeof t.readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0))
    }
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    t.exports = function(t) {
        return null != t && (n(t) || i(t) || !!t._isBuffer)
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        this.defaults = t, this.interceptors = {
            request: new o,
            response: new o
        }
    }
    var r = n(2),
        s = n(1),
        o = n(49),
        a = n(50);
    i.prototype.request = function(t) {
        "string" == typeof t && (t = s.merge({
            url: arguments[0]
        }, arguments[1])), t = s.merge(r, this.defaults, {
            method: "get"
        }, t), t.method = t.method.toLowerCase();
        var e = [a, void 0],
            n = Promise.resolve(t);
        for (this.interceptors.request.forEach(function(t) {
                e.unshift(t.fulfilled, t.rejected)
            }), this.interceptors.response.forEach(function(t) {
                e.push(t.fulfilled, t.rejected)
            }); e.length;) n = n.then(e.shift(), e.shift());
        return n
    }, s.forEach(["delete", "get", "head", "options"], function(t) {
        i.prototype[t] = function(e, n) {
            return this.request(s.merge(n || {}, {
                method: t,
                url: e
            }))
        }
    }), s.forEach(["post", "put", "patch"], function(t) {
        i.prototype[t] = function(e, n, i) {
            return this.request(s.merge(i || {}, {
                method: t,
                url: e,
                data: n
            }))
        }
    }), t.exports = i
}, function(t, e, n) {
    "use strict";
    var i = n(1);
    t.exports = function(t, e) {
        i.forEach(t, function(n, i) {
            i !== e && i.toUpperCase() === e.toUpperCase() && (t[e] = n, delete t[i])
        })
    }
}, function(t, e, n) {
    "use strict";
    var i = n(9);
    t.exports = function(t, e, n) {
        var r = n.config.validateStatus;
        n.status && r && !r(n.status) ? e(i("Request failed with status code " + n.status, n.config, null, n.request, n)) : t(n)
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e, n, i, r) {
        return t.config = e, n && (t.code = n), t.request = i, t.response = r, t
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    var r = n(1);
    t.exports = function(t, e, n) {
        if (!e) return t;
        var s;
        if (n) s = n(e);
        else if (r.isURLSearchParams(e)) s = e.toString();
        else {
            var o = [];
            r.forEach(e, function(t, e) {
                null !== t && void 0 !== t && (r.isArray(t) && (e += "[]"), r.isArray(t) || (t = [t]), r.forEach(t, function(t) {
                    r.isDate(t) ? t = t.toISOString() : r.isObject(t) && (t = JSON.stringify(t)), o.push(i(e) + "=" + i(t))
                }))
            }), s = o.join("&")
        }
        return s && (t += (-1 === t.indexOf("?") ? "?" : "&") + s), t
    }
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        r = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    t.exports = function(t) {
        var e, n, s, o = {};
        return t ? (i.forEach(t.split("\n"), function(t) {
            if (s = t.indexOf(":"), e = i.trim(t.substr(0, s)).toLowerCase(), n = i.trim(t.substr(s + 1)), e) {
                if (o[e] && r.indexOf(e) >= 0) return;
                o[e] = "set-cookie" === e ? (o[e] ? o[e] : []).concat([n]) : o[e] ? o[e] + ", " + n : n
            }
        }), o) : o
    }
}, function(t, e, n) {
    "use strict";
    var i = n(1);
    t.exports = i.isStandardBrowserEnv() ? function() {
        function t(t) {
            var e = t;
            return n && (r.setAttribute("href", e), e = r.href), r.setAttribute("href", e), {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
            }
        }
        var e, n = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement("a");
        return e = t(window.location.href),
            function(n) {
                var r = i.isString(n) ? t(n) : n;
                return r.protocol === e.protocol && r.host === e.host
            }
    }() : function() {
        return function() {
            return !0
        }
    }()
}, function(t, e, n) {
    "use strict";

    function i() {
        this.message = "String contains an invalid character"
    }

    function r(t) {
        for (var e, n, r = String(t), o = "", a = 0, c = s; r.charAt(0 | a) || (c = "=", a % 1); o += c.charAt(63 & e >> 8 - a % 1 * 8)) {
            if ((n = r.charCodeAt(a += .75)) > 255) throw new i;
            e = e << 8 | n
        }
        return o
    }
    var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    i.prototype = new Error, i.prototype.code = 5, i.prototype.name = "InvalidCharacterError", t.exports = r
}, function(t, e, n) {
    "use strict";
    var i = n(1);
    t.exports = i.isStandardBrowserEnv() ? function() {
        return {
            write: function(t, e, n, r, s, o) {
                var a = [];
                a.push(t + "=" + encodeURIComponent(e)), i.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), i.isString(r) && a.push("path=" + r), i.isString(s) && a.push("domain=" + s), !0 === o && a.push("secure"), document.cookie = a.join("; ")
            },
            read: function(t) {
                var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                return e ? decodeURIComponent(e[3]) : null
            },
            remove: function(t) {
                this.write(t, "", Date.now() - 864e5)
            }
        }
    }() : function() {
        return {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }()
}, function(t, e, n) {
    "use strict";

    function i() {
        this.handlers = []
    }
    var r = n(1);
    i.prototype.use = function(t, e) {
        return this.handlers.push({
            fulfilled: t,
            rejected: e
        }), this.handlers.length - 1
    }, i.prototype.eject = function(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }, i.prototype.forEach = function(t) {
        r.forEach(this.handlers, function(e) {
            null !== e && t(e)
        })
    }, t.exports = i
}, function(t, e, n) {
    "use strict";

    function i(t) {
        t.cancelToken && t.cancelToken.throwIfRequested()
    }
    var r = n(1),
        s = n(51),
        o = n(10),
        a = n(2),
        c = n(52),
        l = n(53);
    t.exports = function(t) {
        return i(t), t.baseURL && !c(t.url) && (t.url = l(t.baseURL, t.url)), t.headers = t.headers || {}, t.data = s(t.data, t.headers, t.transformRequest), t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(e) {
            delete t.headers[e]
        }), (t.adapter || a.adapter)(t).then(function(e) {
            return i(t), e.data = s(e.data, e.headers, t.transformResponse), e
        }, function(e) {
            return o(e) || (i(t), e && e.response && (e.response.data = s(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
        })
    }
}, function(t, e, n) {
    "use strict";
    var i = n(1);
    t.exports = function(t, e, n) {
        return i.forEach(n, function(n) {
            t = n(t, e)
        }), t
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        if ("function" != typeof t) throw new TypeError("executor must be a function.");
        var e;
        this.promise = new Promise(function(t) {
            e = t
        });
        var n = this;
        t(function(t) {
            n.reason || (n.reason = new r(t), e(n.reason))
        })
    }
    var r = n(11);
    i.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason
    }, i.source = function() {
        var t;
        return {
            token: new i(function(e) {
                t = e
            }),
            cancel: t
        }
    }, t.exports = i
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return function(e) {
            return t.apply(null, e)
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(57);
    n.n(i)
}, function(t, e) {}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n.n(i),
        s = n(59);
    n.n(s);
    r()(function() {
        r()(".partners-carousel").carouFredSel({
            items: 4,
            width: "90%",
            height: 300,
            direction: "left",
            transition: !0,
            scroll: {
                items: 2,
                easing: "elastic",
                duration: 500,
                pauseOnHover: !1
            }
        })
    })
}, function(t, e) {}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n.n(i),
        s = n(4),
        o = n(5),
        a = n.n(o);
    r()(function() {
        if (s.a.hasPaymentKey()) {
            var t = s.a.getPaymentKey();
            a()({
                url: "/api/successful/payment",
                method: "post",
                params: {
                    lang: s.a.getLanguage()
                },
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    paymentId: t
                }
            }).then(function() {
                console.log("successful/payment")
            }).catch(function(t) {
                console.log(t)
            })
        }
    })
}, function(t, e) {}]);
/*
     FILE ARCHIVED ON 16:10:18 Oct 07, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:07:21 Sep 17, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.resolve: 180.569
  load_resource: 325.28
  CDXLines.iter: 17.234 (3)
  captures_list: 257.617
  esindex: 0.009
  exclusion.robots: 0.167
  PetaboxLoader3.datanode: 169.034 (4)
  exclusion.robots.policy: 0.155
  RedisCDXSource: 129.354
  LoadShardBlock: 108.008 (3)
*/