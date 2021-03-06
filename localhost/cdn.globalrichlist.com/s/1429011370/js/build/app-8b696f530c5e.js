/**
 * @license RequireJS domReady 2.0.1 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/domReady for details
 */

/*!
 * jQuery JavaScript Library v1.9.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-1-14
 */

/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */

//     Underscore.js 1.4.3
//     http://underscorejs.org
//     (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore may be freely distributed under the MIT license.

//     (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

/*!
 * VERSION: beta 1.8.4
 * DATE: 2013-02-13
 * JavaScript (ActionScript 3 and 2 also available)
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms in http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */

/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */

/*
 * Copyright (C) 2012 Eike Send
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

// moment.js
// version : 2.0.0
// author : Tim Wood
// license : MIT
// momentjs.com

define("domReady", [], function() {
        function u(e) {
            var t;
            for (t = 0; t < e.length; t += 1) e[t](s)
        }

        function a() {
            var e = o;
            i && e.length && (o = [], u(e))
        }

        function f() {
            i || (i = !0, n && clearInterval(n), a())
        }

        function c(e) {
            return i ? e(s) : o.push(e), c
        }
        var e, t, n, r = typeof window != "undefined" && window.document,
            i = !r,
            s = r ? document : null,
            o = [];
        if (r) {
            if (document.addEventListener) document.addEventListener("DOMContentLoaded", f, !1), window.addEventListener("load", f, !1);
            else if (window.attachEvent) {
                window.attachEvent("onload", f), t = document.createElement("div");
                try {
                    e = window.frameElement === null
                } catch (l) {}
                t.doScroll && e && window.external && (n = setInterval(function() {
                    try {
                        t.doScroll(), f()
                    } catch (e) {}
                }, 30))
            }
            document.readyState === "complete" && f()
        }
        return c.version = "2.0.1", c.load = function(e, t, n, r) {
            r.isBuild ? n(null) : c(n)
        }, c
    }),
    function(e, t) {
        function _(e) {
            var t = e.length,
                n = y.type(e);
            return y.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || n !== "function" && (t === 0 || typeof t == "number" && t > 0 && t - 1 in e)
        }

        function P(e) {
            var t = D[e] = {};
            return y.each(e.match(w) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function j(e, n, r, i) {
            if (!y.acceptData(e)) return;
            var s, o, u = y.expando,
                a = typeof n == "string",
                l = e.nodeType,
                c = l ? y.cache : e,
                h = l ? e[u] : e[u] && u;
            if ((!h || !c[h] || !i && !c[h].data) && a && r === t) return;
            h || (l ? e[u] = h = f.pop() || y.guid++ : h = u), c[h] || (c[h] = {}, l || (c[h].toJSON = y.noop));
            if (typeof n == "object" || typeof n == "function") i ? c[h] = y.extend(c[h], n) : c[h].data = y.extend(c[h].data, n);
            return s = c[h], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[y.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[y.camelCase(n)])) : o = s, o
        }

        function F(e, t, n) {
            if (!y.acceptData(e)) return;
            var r, i, s, o = e.nodeType,
                u = o ? y.cache : e,
                a = o ? e[y.expando] : y.expando;
            if (!u[a]) return;
            if (t) {
                r = n ? u[a] : u[a].data;
                if (r) {
                    y.isArray(t) ? t = t.concat(y.map(t, y.camelCase)) : t in r ? t = [t] : (t = y.camelCase(t), t in r ? t = [t] : t = t.split(" "));
                    for (i = 0, s = t.length; i < s; i++) delete r[t[i]];
                    if (!(n ? q : y.isEmptyObject)(r)) return
                }
            }
            if (!n) {
                delete u[a].data;
                if (!q(u[a])) return
            }
            o ? y.cleanData([e], !0) : y.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null
        }

        function I(e, n, r) {
            if (r === t && e.nodeType === 1) {
                var i = "data-" + n.replace(B, "-$1").toLowerCase();
                r = e.getAttribute(i);
                if (typeof r == "string") {
                    try {
                        r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : H.test(r) ? y.parseJSON(r) : r
                    } catch (s) {}
                    y.data(e, n, r)
                } else r = t
            }
            return r
        }

        function q(e) {
            var t;
            for (t in e) {
                if (t === "data" && y.isEmptyObject(e[t])) continue;
                if (t !== "toJSON") return !1
            }
            return !0
        }

        function nt() {
            return !0
        }

        function rt() {
            return !1
        }

        function ft(e, t) {
            do e = e[t]; while (e && e.nodeType !== 1);
            return e
        }

        function lt(e, t, n) {
            t = t || 0;
            if (y.isFunction(t)) return y.grep(e, function(e, r) {
                var i = !!t.call(e, r, e);
                return i === n
            });
            if (t.nodeType) return y.grep(e, function(e) {
                return e === t === n
            });
            if (typeof t == "string") {
                var r = y.grep(e, function(e) {
                    return e.nodeType === 1
                });
                if (ot.test(t)) return y.filter(t, r, !n);
                t = y.filter(t, r)
            }
            return y.grep(e, function(e) {
                return y.inArray(e, t) >= 0 === n
            })
        }

        function ct(e) {
            var t = ht.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                while (t.length) n.createElement(t.pop());
            return n
        }

        function At(e, t) {
            return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
        }

        function Ot(e) {
            var t = e.getAttributeNode("type");
            return e.type = (t && t.specified) + "/" + e.type, e
        }

        function Mt(e) {
            var t = Tt.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function _t(e, t) {
            var n, r = 0;
            for (;
                (n = e[r]) != null; r++) y._data(n, "globalEval", !t || y._data(t[r], "globalEval"))
        }

        function Dt(e, t) {
            if (t.nodeType !== 1 || !y.hasData(e)) return;
            var n, r, i, s = y._data(e),
                o = y._data(t, s),
                u = s.events;
            if (u) {
                delete o.handle, o.events = {};
                for (n in u)
                    for (r = 0, i = u[n].length; r < i; r++) y.event.add(t, n, u[n][r])
            }
            o.data && (o.data = y.extend({}, o.data))
        }

        function Pt(e, t) {
            var n, r, i;
            if (t.nodeType !== 1) return;
            n = t.nodeName.toLowerCase();
            if (!y.support.noCloneEvent && t[y.expando]) {
                r = y._data(t);
                for (i in r.events) y.removeEvent(t, i, r.handle);
                t.removeAttribute(y.expando)
            }
            if (n === "script" && t.text !== e.text) Ot(t).text = e.text, Mt(t);
            else if (n === "object") t.parentNode && (t.outerHTML = e.outerHTML), y.support.html5Clone && e.innerHTML && !y.trim(t.innerHTML) && (t.innerHTML = e.innerHTML);
            else if (n === "input" && Et.test(e.type)) t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value);
            else if (n === "option") t.defaultSelected = t.selected = e.defaultSelected;
            else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
        }

        function Ht(e, n) {
            var r, i, s = 0,
                o = typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll(n || "*") : t;
            if (!o)
                for (o = [], r = e.childNodes || e;
                    (i = r[s]) != null; s++) !n || y.nodeName(i, n) ? o.push(i) : y.merge(o, Ht(i, n));
            return n === t || n && y.nodeName(e, n) ? y.merge([e], o) : o
        }

        function Bt(e) {
            Et.test(e.type) && (e.defaultChecked = e.checked)
        }

        function Zt(e, t) {
            if (t in e) return t;
            var n = t.charAt(0).toUpperCase() + t.slice(1),
                r = t,
                i = Yt.length;
            while (i--) {
                t = Yt[i] + n;
                if (t in e) return t
            }
            return r
        }

        function en(e, t) {
            return e = t || e, y.css(e, "display") === "none" || !y.contains(e.ownerDocument, e)
        }

        function tn(e, t) {
            var n, r = [],
                i = 0,
                s = e.length;
            for (; i < s; i++) {
                n = e[i];
                if (!n.style) continue;
                r[i] = y._data(n, "olddisplay"), t ? (!r[i] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && en(n) && (r[i] = y._data(n, "olddisplay", on(n.nodeName)))) : !r[i] && !en(n) && y._data(n, "olddisplay", y.css(n, "display"))
            }
            for (i = 0; i < s; i++) {
                n = e[i];
                if (!n.style) continue;
                if (!t || n.style.display === "none" || n.style.display === "") n.style.display = t ? r[i] || "" : "none"
            }
            return e
        }

        function nn(e, t, n) {
            var r = Xt.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }

        function rn(e, t, n, r, i) {
            var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
                o = 0;
            for (; s < 4; s += 2) n === "margin" && (o += y.css(e, n + Gt[s], !0, i)), r ? (n === "content" && (o -= y.css(e, "padding" + Gt[s], !0, i)), n !== "margin" && (o -= y.css(e, "border" + Gt[s] + "Width", !0, i))) : (o += y.css(e, "padding" + Gt[s], !0, i), n !== "padding" && (o += y.css(e, "border" + Gt[s] + "Width", !0, i)));
            return o
        }

        function sn(e, t, n) {
            var r = !0,
                i = t === "width" ? e.offsetWidth : e.offsetHeight,
                s = Ft(e),
                o = y.support.boxSizing && y.css(e, "boxSizing", !1, s) === "border-box";
            if (i <= 0 || i == null) {
                i = jt(e, t, s);
                if (i < 0 || i == null) i = e.style[t];
                if (Vt.test(i)) return i;
                r = o && (y.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
            }
            return i + rn(e, t, n || (o ? "border" : "content"), r, s) + "px"
        }

        function on(e) {
            var t = i,
                n = Jt[e];
            if (!n) {
                n = un(e, t);
                if (n === "none" || !n) It = (It || y("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (It[0].contentWindow || It[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), It.detach();
                Jt[e] = n
            }
            return n
        }

        function un(e, t) {
            var n = y(t.createElement(e)).appendTo(t.body),
                r = y.css(n[0], "display");
            return n.remove(), r
        }

        function pn(e, t, n, r) {
            var i;
            if (y.isArray(t)) y.each(t, function(t, i) {
                n || fn.test(e) ? r(e, i) : pn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
            });
            else if (!n && y.type(t) === "object")
                for (i in t) pn(e + "[" + i + "]", t[i], n, r);
            else r(e, t)
        }

        function On(e) {
            return function(t, n) {
                typeof t != "string" && (n = t, t = "*");
                var r, i = 0,
                    s = t.toLowerCase().match(w) || [];
                if (y.isFunction(n))
                    while (r = s[i++]) r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function Mn(e, t, n, r) {
            function o(u) {
                var a;
                return i[u] = !0, y.each(e[u] || [], function(e, u) {
                    var f = u(t, n, r);
                    if (typeof f == "string" && !s && !i[f]) return t.dataTypes.unshift(f), o(f), !1;
                    if (s) return !(a = f)
                }), a
            }
            var i = {},
                s = e === kn;
            return o(t.dataTypes[0]) || !i["*"] && o("*")
        }

        function _n(e, n) {
            var r, i, s = y.ajaxSettings.flatOptions || {};
            for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
            return i && y.extend(!0, e, i), e
        }

        function Dn(e, n, r) {
            var i, s, o, u, a = e.contents,
                f = e.dataTypes,
                l = e.responseFields;
            for (s in l) s in r && (n[l[s]] = r[s]);
            while (f[0] === "*") f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"));
            if (i)
                for (s in a)
                    if (a[s] && a[s].test(i)) {
                        f.unshift(s);
                        break
                    }
            if (f[0] in r) o = f[0];
            else {
                for (s in r) {
                    if (!f[0] || e.converters[s + " " + f[0]]) {
                        o = s;
                        break
                    }
                    u || (u = s)
                }
                o = o || u
            }
            if (o) return o !== f[0] && f.unshift(o), r[o]
        }

        function Pn(e, t) {
            var n, r, i, s, o = {},
                u = 0,
                a = e.dataTypes.slice(),
                f = a[0];
            e.dataFilter && (t = e.dataFilter(t, e.dataType));
            if (a[1])
                for (n in e.converters) o[n.toLowerCase()] = e.converters[n];
            for (; i = a[++u];)
                if (i !== "*") {
                    if (f !== "*" && f !== i) {
                        n = o[f + " " + i] || o["* " + i];
                        if (!n)
                            for (r in o) {
                                s = r.split(" ");
                                if (s[1] === i) {
                                    n = o[f + " " + s[0]] || o["* " + s[0]];
                                    if (n) {
                                        n === !0 ? n = o[r] : o[r] !== !0 && (i = s[0], a.splice(u--, 0, i));
                                        break
                                    }
                                }
                            }
                        if (n !== !0)
                            if (n && e["throws"]) t = n(t);
                            else try {
                                t = n(t)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: n ? l : "No conversion from " + f + " to " + i
                                }
                            }
                    }
                    f = i
                }
            return {
                state: "success",
                data: t
            }
        }

        function Rn() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }

        function Un() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function Qn() {
            return setTimeout(function() {
                zn = t
            }), zn = y.now()
        }

        function Gn(e, t) {
            y.each(t, function(t, n) {
                var r = (Kn[t] || []).concat(Kn["*"]),
                    i = 0,
                    s = r.length;
                for (; i < s; i++)
                    if (r[i].call(e, t, n)) return
            })
        }

        function Yn(e, t, n) {
            var r, i, s = 0,
                o = Jn.length,
                u = y.Deferred().always(function() {
                    delete a.elem
                }),
                a = function() {
                    if (i) return !1;
                    var t = zn || Qn(),
                        n = Math.max(0, f.startTime + f.duration - t),
                        r = n / f.duration || 0,
                        s = 1 - r,
                        o = 0,
                        a = f.tweens.length;
                    for (; o < a; o++) f.tweens[o].run(s);
                    return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (u.resolveWith(e, [f]), !1)
                },
                f = u.promise({
                    elem: e,
                    props: y.extend({}, t),
                    opts: y.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: zn || Qn(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = y.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                        return f.tweens.push(r), r
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? f.tweens.length : 0;
                        if (i) return this;
                        i = !0;
                        for (; n < r; n++) f.tweens[n].run(1);
                        return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                    }
                }),
                l = f.props;
            Zn(l, f.opts.specialEasing);
            for (; s < o; s++) {
                r = Jn[s].call(f, e, l, f.opts);
                if (r) return r
            }
            return Gn(f, l), y.isFunction(f.opts.start) && f.opts.start.call(e, f), y.fx.timer(y.extend(a, {
                elem: e,
                anim: f,
                queue: f.opts.queue
            })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
        }

        function Zn(e, t) {
            var n, r, i, s, o;
            for (n in e) {
                r = y.camelCase(n), i = t[r], s = e[n], y.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = y.cssHooks[r];
                if (o && "expand" in o) {
                    s = o.expand(s), delete e[r];
                    for (n in s) n in e || (e[n] = s[n], t[n] = i)
                } else t[r] = i
            }
        }

        function er(e, t, n) {
            var r, i, s, o, u, a, f, l, c, h = this,
                p = e.style,
                d = {},
                v = [],
                m = e.nodeType && en(e);
            n.queue || (l = y._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
                l.unqueued || c()
            }), l.unqueued++, h.always(function() {
                h.always(function() {
                    l.unqueued--, y.queue(e, "fx").length || l.empty.fire()
                })
            })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], y.css(e, "display") === "inline" && y.css(e, "float") === "none" && (!y.support.inlineBlockNeedsLayout || on(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", y.support.shrinkWrapBlocks || h.done(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (r in t) {
                s = t[r];
                if (Xn.exec(s)) {
                    delete t[r], a = a || s === "toggle";
                    if (s === (m ? "hide" : "show")) continue;
                    v.push(r)
                }
            }
            o = v.length;
            if (o) {
                u = y._data(e, "fxshow") || y._data(e, "fxshow", {}), "hidden" in u && (m = u.hidden), a && (u.hidden = !m), m ? y(e).show() : h.done(function() {
                    y(e).hide()
                }), h.done(function() {
                    var t;
                    y._removeData(e, "fxshow");
                    for (t in d) y.style(e, t, d[t])
                });
                for (r = 0; r < o; r++) i = v[r], f = h.createTween(i, m ? u[i] : 0), d[i] = u[i] || y.style(e, i), i in u || (u[i] = f.start, m && (f.end = f.start, f.start = i === "width" || i === "height" ? 1 : 0))
            }
        }

        function tr(e, t, n, r, i) {
            return new tr.prototype.init(e, t, n, r, i)
        }

        function nr(e, t) {
            var n, r = {
                    height: e
                },
                i = 0;
            t = t ? 1 : 0;
            for (; i < 4; i += 2 - t) n = Gt[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function rr(e) {
            return y.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
        }
        var n, r, i = e.document,
            s = e.location,
            o = e.jQuery,
            u = e.$,
            a = {},
            f = [],
            l = "1.9.0",
            c = f.concat,
            h = f.push,
            p = f.slice,
            d = f.indexOf,
            v = a.toString,
            m = a.hasOwnProperty,
            g = l.trim,
            y = function(e, t) {
                return new y.fn.init(e, t, n)
            },
            b = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            w = /\S+/g,
            E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            S = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            x = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            T = /^[\],:{}\s]*$/,
            N = /(?:^|:|,)(?:\s*\[)+/g,
            C = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            k = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            L = /^-ms-/,
            A = /-([\da-z])/gi,
            O = function(e, t) {
                return t.toUpperCase()
            },
            M = function() {
                i.addEventListener ? (i.removeEventListener("DOMContentLoaded", M, !1), y.ready()) : i.readyState === "complete" && (i.detachEvent("onreadystatechange", M), y.ready())
            };
        y.fn = y.prototype = {
            jquery: l,
            constructor: y,
            init: function(e, n, r) {
                var s, o;
                if (!e) return this;
                if (typeof e == "string") {
                    e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [null, e, null] : s = S.exec(e);
                    if (s && (s[1] || !n)) {
                        if (s[1]) {
                            n = n instanceof y ? n[0] : n, y.merge(this, y.parseHTML(s[1], n && n.nodeType ? n.ownerDocument || n : i, !0));
                            if (x.test(s[1]) && y.isPlainObject(n))
                                for (s in n) y.isFunction(this[s]) ? this[s](n[s]) : this.attr(s, n[s]);
                            return this
                        }
                        o = i.getElementById(s[2]);
                        if (o && o.parentNode) {
                            if (o.id !== s[2]) return r.find(e);
                            this.length = 1, this[0] = o
                        }
                        return this.context = i, this.selector = e, this
                    }
                    return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : y.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), y.makeArray(e, this))
            },
            selector: "",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return p.call(this)
            },
            get: function(e) {
                return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
            },
            pushStack: function(e) {
                var t = y.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return y.each(this, e, t)
            },
            ready: function(e) {
                return y.ready.promise().done(e), this
            },
            slice: function() {
                return this.pushStack(p.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            map: function(e) {
                return this.pushStack(y.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: h,
            sort: [].sort,
            splice: [].splice
        }, y.fn.init.prototype = y.fn, y.extend = y.fn.extend = function() {
            var e, n, r, i, s, o, u = arguments[0] || {},
                a = 1,
                f = arguments.length,
                l = !1;
            typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !y.isFunction(u) && (u = {}), f === a && (u = this, --a);
            for (; a < f; a++)
                if ((e = arguments[a]) != null)
                    for (n in e) {
                        r = u[n], i = e[n];
                        if (u === i) continue;
                        l && i && (y.isPlainObject(i) || (s = y.isArray(i))) ? (s ? (s = !1, o = r && y.isArray(r) ? r : []) : o = r && y.isPlainObject(r) ? r : {}, u[n] = y.extend(l, o, i)) : i !== t && (u[n] = i)
                    }
            return u
        }, y.extend({
            noConflict: function(t) {
                return e.$ === y && (e.$ = u), t && e.jQuery === y && (e.jQuery = o), y
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? y.readyWait++ : y.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? --y.readyWait : y.isReady) return;
                if (!i.body) return setTimeout(y.ready);
                y.isReady = !0;
                if (e !== !0 && --y.readyWait > 0) return;
                r.resolveWith(i, [y]), y.fn.trigger && y(i).trigger("ready").off("ready")
            },
            isFunction: function(e) {
                return y.type(e) === "function"
            },
            isArray: Array.isArray || function(e) {
                return y.type(e) === "array"
            },
            isWindow: function(e) {
                return e != null && e == e.window
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return e == null ? String(e) : typeof e == "object" || typeof e == "function" ? a[v.call(e)] || "object" : typeof e
            },
            isPlainObject: function(e) {
                if (!e || y.type(e) !== "object" || e.nodeType || y.isWindow(e)) return !1;
                try {
                    if (e.constructor && !m.call(e, "constructor") && !m.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                var r;
                for (r in e);
                return r === t || m.call(e, r)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            error: function(e) {
                throw new Error(e)
            },
            parseHTML: function(e, t, n) {
                if (!e || typeof e != "string") return null;
                typeof t == "boolean" && (n = t, t = !1), t = t || i;
                var r = x.exec(e),
                    s = !n && [];
                return r ? [t.createElement(r[1])] : (r = y.buildFragment([e], t, s), s && y(s).remove(), y.merge([], r.childNodes))
            },
            parseJSON: function(t) {
                if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
                if (t === null) return t;
                if (typeof t == "string") {
                    t = y.trim(t);
                    if (t && T.test(t.replace(C, "@").replace(k, "]").replace(N, ""))) return (new Function("return " + t))()
                }
                y.error("Invalid JSON: " + t)
            },
            parseXML: function(n) {
                var r, i;
                if (!n || typeof n != "string") return null;
                try {
                    e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                } catch (s) {
                    r = t
                }
                return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && y.error("Invalid XML: " + n), r
            },
            noop: function() {},
            globalEval: function(t) {
                t && y.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(L, "ms-").replace(A, O)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, n) {
                var r, i = 0,
                    s = e.length,
                    o = _(e);
                if (n)
                    if (o)
                        for (; i < s; i++) {
                            r = t.apply(e[i], n);
                            if (r === !1) break
                        } else
                            for (i in e) {
                                r = t.apply(e[i], n);
                                if (r === !1) break
                            } else if (o)
                                for (; i < s; i++) {
                                    r = t.call(e[i], i, e[i]);
                                    if (r === !1) break
                                } else
                                    for (i in e) {
                                        r = t.call(e[i], i, e[i]);
                                        if (r === !1) break
                                    }
                return e
            },
            trim: g && !g.call("?????") ? function(e) {
                return e == null ? "" : g.call(e)
            } : function(e) {
                return e == null ? "" : (e + "").replace(E, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return e != null && (_(Object(e)) ? y.merge(n, typeof e == "string" ? [e] : e) : h.call(n, e)), n
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (d) return d.call(t, e, n);
                    r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                    for (; n < r; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, n) {
                var r = n.length,
                    i = e.length,
                    s = 0;
                if (typeof r == "number")
                    for (; s < r; s++) e[i++] = n[s];
                else
                    while (n[s] !== t) e[i++] = n[s++];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                var r, i = [],
                    s = 0,
                    o = e.length;
                n = !!n;
                for (; s < o; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);
                return i
            },
            map: function(e, t, n) {
                var r, i = 0,
                    s = e.length,
                    o = _(e),
                    u = [];
                if (o)
                    for (; i < s; i++) r = t(e[i], i, n), r != null && (u[u.length] = r);
                else
                    for (i in e) r = t(e[i], i, n), r != null && (u[u.length] = r);
                return c.apply([], u)
            },
            guid: 1,
            proxy: function(e, n) {
                var r, i, s;
                return typeof n == "string" && (r = e[n], n = e, e = r), y.isFunction(e) ? (i = p.call(arguments, 2), s = function() {
                    return e.apply(n || this, i.concat(p.call(arguments)))
                }, s.guid = e.guid = e.guid || y.guid++, s) : t
            },
            access: function(e, n, r, i, s, o, u) {
                var a = 0,
                    f = e.length,
                    l = r == null;
                if (y.type(r) === "object") {
                    s = !0;
                    for (a in r) y.access(e, n, a, r[a], !0, o, u)
                } else if (i !== t) {
                    s = !0, y.isFunction(i) || (u = !0), l && (u ? (n.call(e, i), n = null) : (l = n, n = function(e, t, n) {
                        return l.call(y(e), n)
                    }));
                    if (n)
                        for (; a < f; a++) n(e[a], r, u ? i : i.call(e[a], a, n(e[a], r)))
                }
                return s ? e : l ? n.call(e) : f ? n(e[0], r) : o
            },
            now: function() {
                return (new Date).getTime()
            }
        }), y.ready.promise = function(t) {
            if (!r) {
                r = y.Deferred();
                if (i.readyState === "complete") setTimeout(y.ready);
                else if (i.addEventListener) i.addEventListener("DOMContentLoaded", M, !1), e.addEventListener("load", y.ready, !1);
                else {
                    i.attachEvent("onreadystatechange", M), e.attachEvent("onload", y.ready);
                    var n = !1;
                    try {
                        n = e.frameElement == null && i.documentElement
                    } catch (s) {}
                    n && n.doScroll && function o() {
                        if (!y.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (e) {
                                return setTimeout(o, 50)
                            }
                            y.ready()
                        }
                    }()
                }
            }
            return r.promise(t)
        }, y.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            a["[object " + t + "]"] = t.toLowerCase()
        }), n = y(i);
        var D = {};
        y.Callbacks = function(e) {
            e = typeof e == "string" ? D[e] || P(e) : y.extend({}, e);
            var n, r, i, s, o, u, a = [],
                f = !e.once && [],
                l = function(t) {
                    n = e.memory && t, r = !0, u = s || 0, s = 0, o = a.length, i = !0;
                    for (; a && u < o; u++)
                        if (a[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                            n = !1;
                            break
                        }
                    i = !1, a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable())
                },
                c = {
                    add: function() {
                        if (a) {
                            var t = a.length;
                            (function r(t) {
                                y.each(t, function(t, n) {
                                    var i = y.type(n);
                                    i === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && i !== "string" && r(n)
                                })
                            })(arguments), i ? o = a.length : n && (s = t, l(n))
                        }
                        return this
                    },
                    remove: function() {
                        return a && y.each(arguments, function(e, t) {
                            var n;
                            while ((n = y.inArray(t, a, n)) > -1) a.splice(n, 1), i && (n <= o && o--, n <= u && u--)
                        }), this
                    },
                    has: function(e) {
                        return y.inArray(e, a) > -1
                    },
                    empty: function() {
                        return a = [], this
                    },
                    disable: function() {
                        return a = f = n = t, this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return f = t, n || c.disable(), this
                    },
                    locked: function() {
                        return !f
                    },
                    fireWith: function(e, t) {
                        return t = t || [], t = [e, t.slice ? t.slice() : t], a && (!r || f) && (i ? f.push(t) : l(t)), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return c
        }, y.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", y.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", y.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", y.Callbacks("memory")]
                    ],
                    n = "pending",
                    r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return y.Deferred(function(n) {
                                y.each(t, function(t, s) {
                                    var o = s[0],
                                        u = y.isFunction(e[t]) && e[t];
                                    i[s[1]](function() {
                                        var e = u && u.apply(this, arguments);
                                        e && y.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, u ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return e != null ? y.extend(e, r) : r
                        }
                    },
                    i = {};
                return r.pipe = r.then, y.each(t, function(e, s) {
                    var o = s[2],
                        u = s[3];
                    r[s[1]] = o.add, u && o.add(function() {
                        n = u
                    }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = function() {
                        return i[s[0] + "With"](this === i ? r : this, arguments), this
                    }, i[s[0] + "With"] = o.fireWith
                }), r.promise(i), e && e.call(i, i), i
            },
            when: function(e) {
                var t = 0,
                    n = p.call(arguments),
                    r = n.length,
                    i = r !== 1 || e && y.isFunction(e.promise) ? r : 0,
                    s = i === 1 ? e : y.Deferred(),
                    o = function(e, t, n) {
                        return function(r) {
                            t[e] = this, n[e] = arguments.length > 1 ? p.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                        }
                    },
                    u, a, f;
                if (r > 1) {
                    u = new Array(r), a = new Array(r), f = new Array(r);
                    for (; t < r; t++) n[t] && y.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
                }
                return i || s.resolveWith(f, n), s.promise()
            }
        }), y.support = function() {
            var t, n, r, s, o, u, a, f, l, c, h = i.createElement("div");
            h.setAttribute("className", "t"), h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = h.getElementsByTagName("*"), r = h.getElementsByTagName("a")[0];
            if (!n || !r || !n.length) return {};
            s = i.createElement("select"), o = s.appendChild(i.createElement("option")), u = h.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
                getSetAttribute: h.className !== "t",
                leadingWhitespace: h.firstChild.nodeType === 3,
                tbody: !h.getElementsByTagName("tbody").length,
                htmlSerialize: !!h.getElementsByTagName("link").length,
                style: /top/.test(r.getAttribute("style")),
                hrefNormalized: r.getAttribute("href") === "/a",
                opacity: /^0.5/.test(r.style.opacity),
                cssFloat: !!r.style.cssFloat,
                checkOn: !!u.value,
                optSelected: o.selected,
                enctype: !!i.createElement("form").enctype,
                html5Clone: i.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
                boxModel: i.compatMode === "CSS1Compat",
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1
            }, u.checked = !0, t.noCloneChecked = u.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !o.disabled;
            try {
                delete h.test
            } catch (p) {
                t.deleteExpando = !1
            }
            u = i.createElement("input"), u.setAttribute("value", ""), t.input = u.getAttribute("value") === "", u.value = "t", u.setAttribute("type", "radio"), t.radioValue = u.value === "t", u.setAttribute("checked", "t"), u.setAttribute("name", "t"), a = i.createDocumentFragment(), a.appendChild(u), t.appendChecked = u.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, h.attachEvent && (h.attachEvent("onclick", function() {
                t.noCloneEvent = !1
            }), h.cloneNode(!0).click());
            for (c in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) h.setAttribute(f = "on" + c, "t"), t[c + "Bubbles"] = f in e || h.attributes[f].expando === !1;
            return h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = h.style.backgroundClip === "content-box", y(function() {
                var n, r, s, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    u = i.getElementsByTagName("body")[0];
                if (!u) return;
                n = i.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u.appendChild(n).appendChild(h), h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = h.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = l && s[0].offsetHeight === 0, h.innerHTML = "", h.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = h.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = u.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(h, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(h, null) || {
                    width: "4px"
                }).width === "4px", r = h.appendChild(i.createElement("div")), r.style.cssText = h.style.cssText = o, r.style.marginRight = r.style.width = "0", h.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof h.style.zoom != "undefined" && (h.innerHTML = "", h.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = h.offsetWidth === 3, h.style.display = "block", h.innerHTML = "<div></div>", h.firstChild.style.width = "5px", t.shrinkWrapBlocks = h.offsetWidth !== 3, u.style.zoom = 1), u.removeChild(n), n = h = s = r = null
            }), n = s = a = o = r = u = null, t
        }();
        var H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            B = /([A-Z])/g;
        y.extend({
            cache: {},
            expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(e) {
                return e = e.nodeType ? y.cache[e[y.expando]] : e[y.expando], !!e && !q(e)
            },
            data: function(e, t, n) {
                return j(e, t, n, !1)
            },
            removeData: function(e, t) {
                return F(e, t, !1)
            },
            _data: function(e, t, n) {
                return j(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return F(e, t, !0)
            },
            acceptData: function(e) {
                var t = e.nodeName && y.noData[e.nodeName.toLowerCase()];
                return !t || t !== !0 && e.getAttribute("classid") === t
            }
        }), y.fn.extend({
            data: function(e, n) {
                var r, i, s = this[0],
                    o = 0,
                    u = null;
                if (e === t) {
                    if (this.length) {
                        u = y.data(s);
                        if (s.nodeType === 1 && !y._data(s, "parsedAttrs")) {
                            r = s.attributes;
                            for (; o < r.length; o++) i = r[o].name, i.indexOf("data-") || (i = y.camelCase(i.substring(5)), I(s, i, u[i]));
                            y._data(s, "parsedAttrs", !0)
                        }
                    }
                    return u
                }
                return typeof e == "object" ? this.each(function() {
                    y.data(this, e)
                }) : y.access(this, function(n) {
                    if (n === t) return s ? I(s, e, y.data(s, e)) : null;
                    this.each(function() {
                        y.data(this, e, n)
                    })
                }, null, n, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    y.removeData(this, e)
                })
            }
        }), y.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = y._data(e, t), n && (!r || y.isArray(n) ? r = y._data(e, t, y.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = y.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    s = y._queueHooks(e, t),
                    o = function() {
                        y.dequeue(e, t)
                    };
                i === "inprogress" && (i = n.shift(), r--), s.cur = i, i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return y._data(e, n) || y._data(e, n, {
                    empty: y.Callbacks("once memory").add(function() {
                        y._removeData(e, t + "queue"), y._removeData(e, n)
                    })
                })
            }
        }), y.fn.extend({
            queue: function(e, n) {
                var r = 2;
                return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? y.queue(this[0], e) : n === t ? this : this.each(function() {
                    var t = y.queue(this, e, n);
                    y._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && y.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    y.dequeue(this, e)
                })
            },
            delay: function(e, t) {
                return e = y.fx ? y.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(r)
                    }
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, n) {
                var r, i = 1,
                    s = y.Deferred(),
                    o = this,
                    u = this.length,
                    a = function() {
                        --i || s.resolveWith(o, [o])
                    };
                typeof e != "string" && (n = e, e = t), e = e || "fx";
                while (u--) r = y._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
                return a(), s.promise(n)
            }
        });
        var R, U, z = /[\t\r\n]/g,
            W = /\r/g,
            X = /^(?:input|select|textarea|button|object)$/i,
            V = /^(?:a|area)$/i,
            $ = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
            J = /^(?:checked|selected)$/i,
            K = y.support.getSetAttribute,
            Q = y.support.input;
        y.fn.extend({
            attr: function(e, t) {
                return y.access(this, y.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    y.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return y.access(this, y.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = y.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = t, delete this[e]
                    } catch (n) {}
                })
            },
            addClass: function(e) {
                var t, n, r, i, s, o = 0,
                    u = this.length,
                    a = typeof e == "string" && e;
                if (y.isFunction(e)) return this.each(function(t) {
                    y(this).addClass(e.call(this, t, this.className))
                });
                if (a) {
                    t = (e || "").match(w) || [];
                    for (; o < u; o++) {
                        n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(z, " ") : " ");
                        if (r) {
                            s = 0;
                            while (i = t[s++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            n.className = y.trim(r)
                        }
                    }
                }
                return this
            },
            removeClass: function(e) {
                var t, n, r, i, s, o = 0,
                    u = this.length,
                    a = arguments.length === 0 || typeof e == "string" && e;
                if (y.isFunction(e)) return this.each(function(t) {
                    y(this).removeClass(e.call(this, t, this.className))
                });
                if (a) {
                    t = (e || "").match(w) || [];
                    for (; o < u; o++) {
                        n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(z, " ") : "");
                        if (r) {
                            s = 0;
                            while (i = t[s++])
                                while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                            n.className = e ? y.trim(r) : ""
                        }
                    }
                }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    r = typeof t == "boolean";
                return y.isFunction(e) ? this.each(function(n) {
                    y(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if (n === "string") {
                        var i, s = 0,
                            o = y(this),
                            u = t,
                            a = e.match(w) || [];
                        while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
                    } else if (n === "undefined" || n === "boolean") this.className && y._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : y._data(this, "__className__") || ""
                })
            },
            hasClass: function(e) {
                var t = " " + e + " ",
                    n = 0,
                    r = this.length;
                for (; n < r; n++)
                    if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(z, " ").indexOf(t) >= 0) return !0;
                return !1
            },
            val: function(e) {
                var n, r, i, s = this[0];
                if (!arguments.length) {
                    if (s) return n = y.valHooks[s.type] || y.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(W, "") : r == null ? "" : r);
                    return
                }
                return i = y.isFunction(e), this.each(function(r) {
                    var s, o = y(this);
                    if (this.nodeType !== 1) return;
                    i ? s = e.call(this, r, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : y.isArray(s) && (s = y.map(s, function(e) {
                        return e == null ? "" : e + ""
                    })), n = y.valHooks[this.type] || y.valHooks[this.nodeName.toLowerCase()];
                    if (!n || !("set" in n) || n.set(this, s, "value") === t) this.value = s
                })
            }
        }), y.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r = e.options,
                            i = e.selectedIndex,
                            s = e.type === "select-one" || i < 0,
                            o = s ? null : [],
                            u = s ? i + 1 : r.length,
                            a = i < 0 ? u : s ? i : 0;
                        for (; a < u; a++) {
                            n = r[a];
                            if ((n.selected || a === i) && (y.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !y.nodeName(n.parentNode, "optgroup"))) {
                                t = y(n).val();
                                if (s) return t;
                                o.push(t)
                            }
                        }
                        return o
                    },
                    set: function(e, t) {
                        var n = y.makeArray(t);
                        return y(e).find("option").each(function() {
                            this.selected = y.inArray(y(this).val(), n) >= 0
                        }), n.length || (e.selectedIndex = -1), n
                    }
                }
            },
            attr: function(e, n, r) {
                var i, s, o, u = e.nodeType;
                if (!e || u === 3 || u === 8 || u === 2) return;
                if (typeof e.getAttribute == "undefined") return y.prop(e, n, r);
                o = u !== 1 || !y.isXMLDoc(e), o && (n = n.toLowerCase(), s = y.attrHooks[n] || ($.test(n) ? U : R));
                if (r === t) return s && o && "get" in s && (i = s.get(e, n)) !== null ? i : (typeof e.getAttribute != "undefined" && (i = e.getAttribute(n)), i == null ? t : i);
                if (r !== null) return s && o && "set" in s && (i = s.set(e, r, n)) !== t ? i : (e.setAttribute(n, r + ""), r);
                y.removeAttr(e, n)
            },
            removeAttr: function(e, t) {
                var n, r, i = 0,
                    s = t && t.match(w);
                if (s && e.nodeType === 1)
                    while (n = s[i++]) r = y.propFix[n] || n, $.test(n) ? !K && J.test(n) ? e[y.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : y.attr(e, n, ""), e.removeAttribute(K ? n : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!y.support.radioValue && t === "radio" && y.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(e, n, r) {
                var i, s, o, u = e.nodeType;
                if (!e || u === 3 || u === 8 || u === 2) return;
                return o = u !== 1 || !y.isXMLDoc(e), o && (n = y.propFix[n] || n, s = y.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var n = e.getAttributeNode("tabindex");
                        return n && n.specified ? parseInt(n.value, 10) : X.test(e.nodeName) || V.test(e.nodeName) && e.href ? 0 : t
                    }
                }
            }
        }), U = {
            get: function(e, n) {
                var r = y.prop(e, n),
                    i = typeof r == "boolean" && e.getAttribute(n),
                    s = typeof r == "boolean" ? Q && K ? i != null : J.test(n) ? e[y.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
                return s && s.value !== !1 ? n.toLowerCase() : t
            },
            set: function(e, t, n) {
                return t === !1 ? y.removeAttr(e, n) : Q && K || !J.test(n) ? e.setAttribute(!K && y.propFix[n] || n, n) : e[y.camelCase("default-" + n)] = e[n] = !0, n
            }
        };
        if (!Q || !K) y.attrHooks.value = {
            get: function(e, n) {
                var r = e.getAttributeNode(n);
                return y.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
            },
            set: function(e, t, n) {
                if (!y.nodeName(e, "input")) return R && R.set(e, t, n);
                e.defaultValue = t
            }
        };
        K || (R = y.valHooks.button = {
            get: function(e, n) {
                var r = e.getAttributeNode(n);
                return r && (n === "id" || n === "name" || n === "coords" ? r.value !== "" : r.specified) ? r.value : t
            },
            set: function(e, n, r) {
                var i = e.getAttributeNode(r);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", r === "value" || n === e.getAttribute(r) ? n : t
            }
        }, y.attrHooks.contenteditable = {
            get: R.get,
            set: function(e, t, n) {
                R.set(e, t === "" ? !1 : t, n)
            }
        }, y.each(["width", "height"], function(e, t) {
            y.attrHooks[t] = y.extend(y.attrHooks[t], {
                set: function(e, n) {
                    if (n === "") return e.setAttribute(t, "auto"), n
                }
            })
        })), y.support.hrefNormalized || (y.each(["href", "src", "width", "height"], function(e, n) {
            y.attrHooks[n] = y.extend(y.attrHooks[n], {
                get: function(e) {
                    var r = e.getAttribute(n, 2);
                    return r == null ? t : r
                }
            })
        }), y.each(["href", "src"], function(e, t) {
            y.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        })), y.support.style || (y.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || t
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        }), y.support.optSelected || (y.propHooks.selected = y.extend(y.propHooks.selected, {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        })), y.support.enctype || (y.propFix.enctype = "encoding"), y.support.checkOn || y.each(["radio", "checkbox"], function() {
            y.valHooks[this] = {
                get: function(e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                }
            }
        }), y.each(["radio", "checkbox"], function() {
            y.valHooks[this] = y.extend(y.valHooks[this], {
                set: function(e, t) {
                    if (y.isArray(t)) return e.checked = y.inArray(y(e).val(), t) >= 0
                }
            })
        });
        var G = /^(?:input|select|textarea)$/i,
            Y = /^key/,
            Z = /^(?:mouse|contextmenu)|click/,
            et = /^(?:focusinfocus|focusoutblur)$/,
            tt = /^([^.]*)(?:\.(.+)|)$/;
        y.event = {
                global: {},
                add: function(e, n, r, i, s) {
                    var o, u, a, f, l, c, h, p, d, v, m, g = e.nodeType !== 3 && e.nodeType !== 8 && y._data(e);
                    if (!g) return;
                    r.handler && (o = r, r = o.handler, s = o.selector), r.guid || (r.guid = y.guid++), (f = g.events) || (f = g.events = {}), (u = g.handle) || (u = g.handle = function(e) {
                        return typeof y == "undefined" || !!e && y.event.triggered === e.type ? t : y.event.dispatch.apply(u.elem, arguments)
                    }, u.elem = e), n = (n || "").match(w) || [""], l = n.length;
                    while (l--) {
                        a = tt.exec(n[l]) || [], d = m = a[1], v = (a[2] || "").split(".").sort(), h = y.event.special[d] || {}, d = (s ? h.delegateType : h.bindType) || d, h = y.event.special[d] || {}, c = y.extend({
                            type: d,
                            origType: m,
                            data: i,
                            handler: r,
                            guid: r.guid,
                            selector: s,
                            needsContext: s && y.expr.match.needsContext.test(s),
                            namespace: v.join(".")
                        }, o);
                        if (!(p = f[d])) {
                            p = f[d] = [], p.delegateCount = 0;
                            if (!h.setup || h.setup.call(e, i, v, u) === !1) e.addEventListener ? e.addEventListener(d, u, !1) : e.attachEvent && e.attachEvent("on" + d, u)
                        }
                        h.add && (h.add.call(e, c), c.handler.guid || (c.handler.guid = r.guid)), s ? p.splice(p.delegateCount++, 0, c) : p.push(c), y.event.global[d] = !0
                    }
                    e = null
                },
                remove: function(e, t, n, r, i) {
                    var s, o, u, a, f, l, c, h, p, d, v, m = y.hasData(e) && y._data(e);
                    if (!m || !(a = m.events)) return;
                    t = (t || "").match(w) || [""], f = t.length;
                    while (f--) {
                        u = tt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort();
                        if (!p) {
                            for (p in a) y.event.remove(e, p + t[f], n, r, !0);
                            continue
                        }
                        c = y.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = a[p] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = h.length;
                        while (s--) l = h[s], (i || v === l.origType) && (!n || n.guid === l.guid) && (!u || u.test(l.namespace)) && (!r || r === l.selector || r === "**" && l.selector) && (h.splice(s, 1), l.selector && h.delegateCount--, c.remove && c.remove.call(e, l));
                        o && !h.length && ((!c.teardown || c.teardown.call(e, d, m.handle) === !1) && y.removeEvent(e, p, m.handle), delete a[p])
                    }
                    y.isEmptyObject(a) && (delete m.handle, y._removeData(e, "events"))
                },
                trigger: function(n, r, s, o) {
                    var u, a, f, l, c, h, p, d = [s || i],
                        v = n.type || n,
                        m = n.namespace ? n.namespace.split(".") : [];
                    a = f = s = s || i;
                    if (s.nodeType === 3 || s.nodeType === 8) return;
                    if (et.test(v + y.event.triggered)) return;
                    v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), c = v.indexOf(":") < 0 && "on" + v, n = n[y.expando] ? n : new y.Event(v, typeof n == "object" && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = s), r = r == null ? [n] : y.makeArray(r, [n]), p = y.event.special[v] || {};
                    if (!o && p.trigger && p.trigger.apply(s, r) === !1) return;
                    if (!o && !p.noBubble && !y.isWindow(s)) {
                        l = p.delegateType || v, et.test(l + v) || (a = a.parentNode);
                        for (; a; a = a.parentNode) d.push(a), f = a;
                        f === (s.ownerDocument || i) && d.push(f.defaultView || f.parentWindow || e)
                    }
                    u = 0;
                    while ((a = d[u++]) && !n.isPropagationStopped()) n.type = u > 1 ? l : p.bindType || v, h = (y._data(a, "events") || {})[n.type] && y._data(a, "handle"), h && h.apply(a, r), h = c && a[c], h && y.acceptData(a) && h.apply && h.apply(a, r) === !1 && n.preventDefault();
                    n.type = v;
                    if (!o && !n.isDefaultPrevented() && (!p._default || p._default.apply(s.ownerDocument, r) === !1) && (v !== "click" || !y.nodeName(s, "a")) && y.acceptData(s) && c && s[v] && !y.isWindow(s)) {
                        f = s[c], f && (s[c] = null), y.event.triggered = v;
                        try {
                            s[v]()
                        } catch (g) {}
                        y.event.triggered = t, f && (s[c] = f)
                    }
                    return n.result
                },
                dispatch: function(e) {
                    e = y.event.fix(e);
                    var n, r, i, s, o, u = [],
                        a = p.call(arguments),
                        f = (y._data(this, "events") || {})[e.type] || [],
                        l = y.event.special[e.type] || {};
                    a[0] = e, e.delegateTarget = this;
                    if (l.preDispatch && l.preDispatch.call(this, e) === !1) return;
                    u = y.event.handlers.call(this, e, f), n = 0;
                    while ((s = u[n++]) && !e.isPropagationStopped()) {
                        e.currentTarget = s.elem, r = 0;
                        while ((o = s.handlers[r++]) && !e.isImmediatePropagationStopped())
                            if (!e.namespace_re || e.namespace_re.test(o.namespace)) e.handleObj = o, e.data = o.data, i = ((y.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation())
                    }
                    return l.postDispatch && l.postDispatch.call(this, e), e.result
                },
                handlers: function(e, n) {
                    var r, i, s, o, u = [],
                        a = n.delegateCount,
                        f = e.target;
                    if (a && f.nodeType && (!e.button || e.type !== "click"))
                        for (; f != this; f = f.parentNode || this)
                            if (f.disabled !== !0 || e.type !== "click") {
                                i = [];
                                for (r = 0; r < a; r++) o = n[r], s = o.selector + " ", i[s] === t && (i[s] = o.needsContext ? y(s, this).index(f) >= 0 : y.find(s, this, null, [f]).length), i[s] && i.push(o);
                                i.length && u.push({
                                    elem: f,
                                    handlers: i
                                })
                            }
                    return a < n.length && u.push({
                        elem: this,
                        handlers: n.slice(a)
                    }), u
                },
                fix: function(e) {
                    if (e[y.expando]) return e;
                    var t, n, r = e,
                        s = y.event.fixHooks[e.type] || {},
                        o = s.props ? this.props.concat(s.props) : this.props;
                    e = new y.Event(r), t = o.length;
                    while (t--) n = o[t], e[n] = r[n];
                    return e.target || (e.target = r.srcElement || i), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, n) {
                        var r, s, o, u = n.button,
                            a = n.fromElement;
                        return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || i, s = r.documentElement, o = r.body, e.pageX = n.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        trigger: function() {
                            if (y.nodeName(this, "input") && this.type === "checkbox" && this.click) return this.click(), !1
                        }
                    },
                    focus: {
                        trigger: function() {
                            if (this !== i.activeElement && this.focus) try {
                                return this.focus(), !1
                            } catch (e) {}
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === i.activeElement && this.blur) return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            e.result !== t && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function(e, t, n, r) {
                    var i = y.extend(new y.Event, n, {
                        type: e,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    r ? y.event.trigger(i, null, t) : y.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
                }
            }, y.removeEvent = i.removeEventListener ? function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            } : function(e, t, n) {
                var r = "on" + t;
                e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n))
            }, y.Event = function(e, t) {
                if (!(this instanceof y.Event)) return new y.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? nt : rt) : this.type = e, t && y.extend(this, t), this.timeStamp = e && e.timeStamp || y.now(), this[y.expando] = !0
            }, y.Event.prototype = {
                isDefaultPrevented: rt,
                isPropagationStopped: rt,
                isImmediatePropagationStopped: rt,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = nt;
                    if (!e) return;
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = nt;
                    if (!e) return;
                    e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
                },
                stopImmediatePropagation: function() {
                    this.isImmediatePropagationStopped = nt, this.stopPropagation()
                }
            }, y.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function(e, t) {
                y.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = this,
                            i = e.relatedTarget,
                            s = e.handleObj;
                        if (!i || i !== r && !y.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                        return n
                    }
                }
            }), y.support.submitBubbles || (y.event.special.submit = {
                setup: function() {
                    if (y.nodeName(this, "form")) return !1;
                    y.event.add(this, "click._submit keypress._submit", function(e) {
                        var n = e.target,
                            r = y.nodeName(n, "input") || y.nodeName(n, "button") ? n.form : t;
                        r && !y._data(r, "submitBubbles") && (y.event.add(r, "submit._submit", function(e) {
                            e._submit_bubble = !0
                        }), y._data(r, "submitBubbles", !0))
                    })
                },
                postDispatch: function(e) {
                    e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && y.event.simulate("submit", this.parentNode, e, !0))
                },
                teardown: function() {
                    if (y.nodeName(this, "form")) return !1;
                    y.event.remove(this, "._submit")
                }
            }), y.support.changeBubbles || (y.event.special.change = {
                setup: function() {
                    if (G.test(this.nodeName)) {
                        if (this.type === "checkbox" || this.type === "radio") y.event.add(this, "propertychange._change", function(e) {
                            e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                        }), y.event.add(this, "click._change", function(e) {
                            this._just_changed && !e.isTrigger && (this._just_changed = !1), y.event.simulate("change", this, e, !0)
                        });
                        return !1
                    }
                    y.event.add(this, "beforeactivate._change", function(e) {
                        var t = e.target;
                        G.test(t.nodeName) && !y._data(t, "changeBubbles") && (y.event.add(t, "change._change", function(e) {
                            this.parentNode && !e.isSimulated && !e.isTrigger && y.event.simulate("change", this.parentNode, e, !0)
                        }), y._data(t, "changeBubbles", !0))
                    })
                },
                handle: function(e) {
                    var t = e.target;
                    if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
                },
                teardown: function() {
                    return y.event.remove(this, "._change"), !G.test(this.nodeName)
                }
            }), y.support.focusinBubbles || y.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = 0,
                    r = function(e) {
                        y.event.simulate(t, e.target, y.event.fix(e), !0)
                    };
                y.event.special[t] = {
                    setup: function() {
                        n++ === 0 && i.addEventListener(e, r, !0)
                    },
                    teardown: function() {
                        --n === 0 && i.removeEventListener(e, r, !0)
                    }
                }
            }), y.fn.extend({
                on: function(e, n, r, i, s) {
                    var o, u;
                    if (typeof e == "object") {
                        typeof n != "string" && (r = r || n, n = t);
                        for (u in e) this.on(u, n, r, e[u], s);
                        return this
                    }
                    r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
                    if (i === !1) i = rt;
                    else if (!i) return this;
                    return s === 1 && (o = i, i = function(e) {
                        return y().off(e), o.apply(this, arguments)
                    }, i.guid = o.guid || (o.guid = y.guid++)), this.each(function() {
                        y.event.add(this, e, i, r, n)
                    })
                },
                one: function(e, t, n, r) {
                    return this.on(e, t, n, r, 1)
                },
                off: function(e, n, r) {
                    var i, s;
                    if (e && e.preventDefault && e.handleObj) return i = e.handleObj, y(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if (typeof e == "object") {
                        for (s in e) this.off(s, n, e[s]);
                        return this
                    }
                    if (n === !1 || typeof n == "function") r = n, n = t;
                    return r === !1 && (r = rt), this.each(function() {
                        y.event.remove(this, e, r, n)
                    })
                },
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
                },
                trigger: function(e, t) {
                    return this.each(function() {
                        y.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return y.event.trigger(e, t, n, !0)
                },
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), y.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
                y.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }, Y.test(t) && (y.event.fixHooks[t] = y.event.keyHooks), Z.test(t) && (y.event.fixHooks[t] = y.event.mouseHooks)
            }),
            function(e, t) {
                function rt(e) {
                    return J.test(e + "")
                }

                function it() {
                    var e, t = [];
                    return e = function(n, r) {
                        return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r
                    }
                }

                function st(e) {
                    return e[w] = !0, e
                }

                function ot(e) {
                    var t = c.createElement("div");
                    try {
                        return e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t = null
                    }
                }

                function ut(e, t, n, r) {
                    var i, s, o, u, a, f, h, v, m, y;
                    (t ? t.ownerDocument || t : E) !== c && l(t), t = t || c, n = n || [];
                    if (!e || typeof e != "string") return n;
                    if ((u = t.nodeType) !== 1 && u !== 9) return [];
                    if (!p && !r) {
                        if (i = K.exec(e))
                            if (o = i[1]) {
                                if (u === 9) {
                                    s = t.getElementById(o);
                                    if (!s || !s.parentNode) return n;
                                    if (s.id === o) return n.push(s), n
                                } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && g(t, s) && s.id === o) return n.push(s), n
                            } else {
                                if (i[2]) return _.apply(n, D.call(t.getElementsByTagName(e), 0)), n;
                                if ((o = i[3]) && S.getByClassName && t.getElementsByClassName) return _.apply(n, D.call(t.getElementsByClassName(o), 0)), n
                            }
                        if (S.qsa && !d.test(e)) {
                            h = !0, v = w, m = t, y = u === 9 && e;
                            if (u === 1 && t.nodeName.toLowerCase() !== "object") {
                                f = ht(e), (h = t.getAttribute("id")) ? v = h.replace(Y, "\\$&") : t.setAttribute("id", v), v = "[id='" + v + "'] ", a = f.length;
                                while (a--) f[a] = v + pt(f[a]);
                                m = $.test(e) && t.parentNode || t, y = f.join(",")
                            }
                            if (y) try {
                                return _.apply(n, D.call(m.querySelectorAll(y), 0)), n
                            } catch (b) {} finally {
                                h || t.removeAttribute("id")
                            }
                        }
                    }
                    return Et(e.replace(R, "$1"), t, n, r)
                }

                function at(e, t) {
                    var n = e && t && e.nextSibling;
                    for (; n; n = n.nextSibling)
                        if (n === t) return -1;
                    return e ? 1 : -1
                }

                function ft(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return n === "input" && t.type === e
                    }
                }

                function lt(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return (n === "input" || n === "button") && t.type === e
                    }
                }

                function ct(e) {
                    return st(function(t) {
                        return t = +t, st(function(n, r) {
                            var i, s = e([], n.length, t),
                                o = s.length;
                            while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function ht(e, t) {
                    var n, r, s, o, u, a, f, l = C[e + " "];
                    if (l) return t ? 0 : l.slice(0);
                    u = e, a = [], f = i.preFilter;
                    while (u) {
                        if (!n || (r = U.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(s = []);
                        n = !1;
                        if (r = z.exec(u)) n = r.shift(), s.push({
                            value: n,
                            type: r[0].replace(R, " ")
                        }), u = u.slice(n.length);
                        for (o in i.filter)(r = V[o].exec(u)) && (!f[o] || (r = f[o](r))) && (n = r.shift(), s.push({
                            value: n,
                            type: o,
                            matches: r
                        }), u = u.slice(n.length));
                        if (!n) break
                    }
                    return t ? u.length : u ? ut.error(e) : C(e, a).slice(0)
                }

                function pt(e) {
                    var t = 0,
                        n = e.length,
                        r = "";
                    for (; t < n; t++) r += e[t].value;
                    return r
                }

                function dt(e, t, n) {
                    var i = t.dir,
                        s = n && t.dir === "parentNode",
                        o = T++;
                    return t.first ? function(t, n, r) {
                        while (t = t[i])
                            if (t.nodeType === 1 || s) return e(t, n, r)
                    } : function(t, n, u) {
                        var a, f, l, c = x + " " + o;
                        if (u) {
                            while (t = t[i])
                                if (t.nodeType === 1 || s)
                                    if (e(t, n, u)) return !0
                        } else
                            while (t = t[i])
                                if (t.nodeType === 1 || s) {
                                    l = t[w] || (t[w] = {});
                                    if ((f = l[i]) && f[0] === c) {
                                        if ((a = f[1]) === !0 || a === r) return a === !0
                                    } else {
                                        f = l[i] = [c], f[1] = e(t, n, u) || r;
                                        if (f[1] === !0) return !0
                                    }
                                }
                    }
                }

                function vt(e) {
                    return e.length > 1 ? function(t, n, r) {
                        var i = e.length;
                        while (i--)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function mt(e, t, n, r, i) {
                    var s, o = [],
                        u = 0,
                        a = e.length,
                        f = t != null;
                    for (; u < a; u++)
                        if (s = e[u])
                            if (!n || n(s, r, i)) o.push(s), f && t.push(u);
                    return o
                }

                function gt(e, t, n, r, i, s) {
                    return r && !r[w] && (r = gt(r)), i && !i[w] && (i = gt(i, s)), st(function(s, o, u, a) {
                        var f, l, c, h = [],
                            p = [],
                            d = o.length,
                            v = s || wt(t || "*", u.nodeType ? [u] : u, []),
                            m = e && (s || !t) ? mt(v, h, e, u, a) : v,
                            g = n ? i || (s ? e : d || r) ? [] : o : m;
                        n && n(m, g, u, a);
                        if (r) {
                            f = mt(g, p), r(f, [], u, a), l = f.length;
                            while (l--)
                                if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
                        }
                        if (s) {
                            if (i || e) {
                                if (i) {
                                    f = [], l = g.length;
                                    while (l--)(c = g[l]) && f.push(m[l] = c);
                                    i(null, g = [], f, a)
                                }
                                l = g.length;
                                while (l--)(c = g[l]) && (f = i ? P.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                            }
                        } else g = mt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : _.apply(o, g)
                    })
                }

                function yt(e) {
                    var t, n, r, s = e.length,
                        o = i.relative[e[0].type],
                        u = o || i.relative[" "],
                        a = o ? 1 : 0,
                        l = dt(function(e) {
                            return e === t
                        }, u, !0),
                        c = dt(function(e) {
                            return P.call(t, e) > -1
                        }, u, !0),
                        h = [function(e, n, r) {
                            return !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                        }];
                    for (; a < s; a++)
                        if (n = i.relative[e[a].type]) h = [dt(vt(h), n)];
                        else {
                            n = i.filter[e[a].type].apply(null, e[a].matches);
                            if (n[w]) {
                                r = ++a;
                                for (; r < s; r++)
                                    if (i.relative[e[r].type]) break;
                                return gt(a > 1 && vt(h), a > 1 && pt(e.slice(0, a - 1)).replace(R, "$1"), n, a < r && yt(e.slice(a, r)), r < s && yt(e = e.slice(r)), r < s && pt(e))
                            }
                            h.push(n)
                        }
                    return vt(h)
                }

                function bt(e, t) {
                    var n = 0,
                        s = t.length > 0,
                        o = e.length > 0,
                        u = function(u, a, l, h, p) {
                            var d, v, m, g = [],
                                y = 0,
                                b = "0",
                                w = u && [],
                                E = p != null,
                                S = f,
                                T = u || o && i.find.TAG("*", p && a.parentNode || a),
                                N = x += S == null ? 1 : Math.E;
                            E && (f = a !== c && a, r = n);
                            for (;
                                (d = T[b]) != null; b++) {
                                if (o && d) {
                                    for (v = 0; m = e[v]; v++)
                                        if (m(d, a, l)) {
                                            h.push(d);
                                            break
                                        }
                                    E && (x = N, r = ++n)
                                }
                                s && ((d = !m && d) && y--, u && w.push(d))
                            }
                            y += b;
                            if (s && b !== y) {
                                for (v = 0; m = t[v]; v++) m(w, g, a, l);
                                if (u) {
                                    if (y > 0)
                                        while (b--) !w[b] && !g[b] && (g[b] = M.call(h));
                                    g = mt(g)
                                }
                                _.apply(h, g), E && !u && g.length > 0 && y + t.length > 1 && ut.uniqueSort(h)
                            }
                            return E && (x = N, f = S), w
                        };
                    return s ? st(u) : u
                }

                function wt(e, t, n) {
                    var r = 0,
                        i = t.length;
                    for (; r < i; r++) ut(e, t[r], n);
                    return n
                }

                function Et(e, t, n, r) {
                    var s, o, a, f, l, c = ht(e);
                    if (!r && c.length === 1) {
                        o = c[0] = c[0].slice(0);
                        if (o.length > 2 && (a = o[0]).type === "ID" && t.nodeType === 9 && !p && i.relative[o[1].type]) {
                            t = i.find.ID(a.matches[0].replace(et, tt), t)[0];
                            if (!t) return n;
                            e = e.slice(o.shift().value.length)
                        }
                        for (s = V.needsContext.test(e) ? -1 : o.length - 1; s >= 0; s--) {
                            a = o[s];
                            if (i.relative[f = a.type]) break;
                            if (l = i.find[f])
                                if (r = l(a.matches[0].replace(et, tt), $.test(o[0].type) && t.parentNode || t)) {
                                    o.splice(s, 1), e = r.length && pt(o);
                                    if (!e) return _.apply(n, D.call(r, 0)), n;
                                    break
                                }
                        }
                    }
                    return u(e, c)(r, t, p, n, $.test(e)), n
                }

                function St() {}
                var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, b, w = "sizzle" + -(new Date),
                    E = e.document,
                    S = {},
                    x = 0,
                    T = 0,
                    N = it(),
                    C = it(),
                    k = it(),
                    L = typeof t,
                    A = 1 << 31,
                    O = [],
                    M = O.pop,
                    _ = O.push,
                    D = O.slice,
                    P = O.indexOf || function(e) {
                        var t = 0,
                            n = this.length;
                        for (; t < n; t++)
                            if (this[t] === e) return t;
                        return -1
                    },
                    H = "[\\x20\\t\\r\\n\\f]",
                    B = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    j = B.replace("w", "w#"),
                    F = "([*^$|!~]?=)",
                    I = "\\[" + H + "*(" + B + ")" + H + "*(?:" + F + H + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + j + ")|)|)" + H + "*\\]",
                    q = ":(" + B + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + I.replace(3, 8) + ")*)|.*)\\)|)",
                    R = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
                    U = new RegExp("^" + H + "*," + H + "*"),
                    z = new RegExp("^" + H + "*([\\x20\\t\\r\\n\\f>+~])" + H + "*"),
                    W = new RegExp(q),
                    X = new RegExp("^" + j + "$"),
                    V = {
                        ID: new RegExp("^#(" + B + ")"),
                        CLASS: new RegExp("^\\.(" + B + ")"),
                        NAME: new RegExp("^\\[name=['\"]?(" + B + ")['\"]?\\]"),
                        TAG: new RegExp("^(" + B.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + I),
                        PSEUDO: new RegExp("^" + q),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                        needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
                    },
                    $ = /[\x20\t\r\n\f]*[+~]/,
                    J = /\{\s*\[native code\]\s*\}/,
                    K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    Q = /^(?:input|select|textarea|button)$/i,
                    G = /^h\d$/i,
                    Y = /'|\\/g,
                    Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                    tt = function(e, t) {
                        var n = "0x" + t - 65536;
                        return n !== n ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320)
                    };
                try {
                    D.call(h.childNodes, 0)[0].nodeType
                } catch (nt) {
                    D = function(e) {
                        var t, n = [];
                        for (; t = this[e]; e++) n.push(t);
                        return n
                    }
                }
                o = ut.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? t.nodeName !== "HTML" : !1
                }, l = ut.setDocument = function(e) {
                    var n = e ? e.ownerDocument || e : E;
                    if (n === c || n.nodeType !== 9 || !n.documentElement) return c;
                    c = n, h = n.documentElement, p = o(n), S.tagNameNoComments = ot(function(e) {
                        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                    }), S.attributes = ot(function(e) {
                        e.innerHTML = "<select></select>";
                        var t = typeof e.lastChild.getAttribute("multiple");
                        return t !== "boolean" && t !== "string"
                    }), S.getByClassName = ot(function(e) {
                        return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)
                    }), S.getByName = ot(function(e) {
                        e.id = w + 0, e.innerHTML = "<a name='" + w + "'></a><div name='" + w + "'></div>", h.insertBefore(e, h.firstChild);
                        var t = n.getElementsByName && n.getElementsByName(w).length === 2 + n.getElementsByName(w + 0).length;
                        return S.getIdNotName = !n.getElementById(w), h.removeChild(e), t
                    }), i.attrHandle = ot(function(e) {
                        return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== L && e.firstChild.getAttribute("href") === "#"
                    }) ? {} : {
                        href: function(e) {
                            return e.getAttribute("href", 2)
                        },
                        type: function(e) {
                            return e.getAttribute("type")
                        }
                    }, S.getIdNotName ? (i.find.ID = function(e, t) {
                        if (typeof t.getElementById !== L && !p) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, i.filter.ID = function(e) {
                        var t = e.replace(et, tt);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (i.find.ID = function(e, n) {
                        if (typeof n.getElementById !== L && !p) {
                            var r = n.getElementById(e);
                            return r ? r.id === e || typeof r.getAttributeNode !== L && r.getAttributeNode("id").value === e ? [r] : t : []
                        }
                    }, i.filter.ID = function(e) {
                        var t = e.replace(et, tt);
                        return function(e) {
                            var n = typeof e.getAttributeNode !== L && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), i.find.TAG = S.tagNameNoComments ? function(e, t) {
                        if (typeof t.getElementsByTagName !== L) return t.getElementsByTagName(e)
                    } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            s = t.getElementsByTagName(e);
                        if (e === "*") {
                            for (; n = s[i]; i++) n.nodeType === 1 && r.push(n);
                            return r
                        }
                        return s
                    }, i.find.NAME = S.getByName && function(e, t) {
                        if (typeof t.getElementsByName !== L) return t.getElementsByName(name)
                    }, i.find.CLASS = S.getByClassName && function(e, t) {
                        if (typeof t.getElementsByClassName !== L && !p) return t.getElementsByClassName(e)
                    }, v = [], d = [":focus"];
                    if (S.qsa = rt(n.querySelectorAll)) ot(function(e) {
                        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + H + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || d.push(":checked")
                    }), ot(function(e) {
                        e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && d.push("[*^$]=" + H + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:")
                    });
                    return (S.matchesSelector = rt(m = h.matchesSelector || h.mozMatchesSelector || h.webkitMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ot(function(e) {
                        S.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), v.push("!=", q)
                    }), d = new RegExp(d.join("|")), v = new RegExp(v.join("|")), g = rt(h.contains) || h.compareDocumentPosition ? function(e, t) {
                        var n = e.nodeType === 9 ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
                    } : function(e, t) {
                        if (t)
                            while (t = t.parentNode)
                                if (t === e) return !0;
                        return !1
                    }, b = h.compareDocumentPosition ? function(e, t) {
                        var r;
                        if (e === t) return a = !0, 0;
                        if (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) return r & 1 || e.parentNode && e.parentNode.nodeType === 11 ? e === n || g(E, e) ? -1 : t === n || g(E, t) ? 1 : 0 : r & 4 ? -1 : 1;
                        return e.compareDocumentPosition ? -1 : 1
                    } : function(e, t) {
                        var r, i = 0,
                            s = e.parentNode,
                            o = t.parentNode,
                            u = [e],
                            f = [t];
                        if (e === t) return a = !0, 0;
                        if (e.sourceIndex && t.sourceIndex) return (~t.sourceIndex || A) - (g(E, e) && ~e.sourceIndex || A);
                        if (!s || !o) return e === n ? -1 : t === n ? 1 : s ? -1 : o ? 1 : 0;
                        if (s === o) return at(e, t);
                        r = e;
                        while (r = r.parentNode) u.unshift(r);
                        r = t;
                        while (r = r.parentNode) f.unshift(r);
                        while (u[i] === f[i]) i++;
                        return i ? at(u[i], f[i]) : u[i] === E ? -1 : f[i] === E ? 1 : 0
                    }, a = !1, [0, 0].sort(b), S.detectDuplicates = a, c
                }, ut.matches = function(e, t) {
                    return ut(e, null, null, t)
                }, ut.matchesSelector = function(e, t) {
                    (e.ownerDocument || e) !== c && l(e), t = t.replace(Z, "='$1']");
                    if (S.matchesSelector && !p && (!v || !v.test(t)) && !d.test(t)) try {
                        var n = m.call(e, t);
                        if (n || S.disconnectedMatch || e.document && e.document.nodeType !== 11) return n
                    } catch (r) {}
                    return ut(t, c, null, [e]).length > 0
                }, ut.contains = function(e, t) {
                    return (e.ownerDocument || e) !== c && l(e), g(e, t)
                }, ut.attr = function(e, t) {
                    var n;
                    return (e.ownerDocument || e) !== c && l(e), p || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : p || S.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
                }, ut.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, ut.uniqueSort = function(e) {
                    var t, n = [],
                        r = 1,
                        i = 0;
                    a = !S.detectDuplicates, e.sort(b);
                    if (a) {
                        for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                        while (i--) e.splice(n[i], 1)
                    }
                    return e
                }, s = ut.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (!i)
                        for (; t = e[r]; r++) n += s(t);
                    else if (i === 1 || i === 9 || i === 11) {
                        if (typeof e.textContent == "string") return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                    } else if (i === 3 || i === 4) return e.nodeValue;
                    return n
                }, i = ut.selectors = {
                    cacheLength: 50,
                    createPseudo: st,
                    match: V,
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
                        ATTR: function(e) {
                            return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || ut.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && ut.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[5] && e[2];
                            return V.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && W.test(n) && (t = ht(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            return e === "*" ? function() {
                                return !0
                            } : (e = e.replace(et, tt).toLowerCase(), function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            })
                        },
                        CLASS: function(e) {
                            var t = N[e + " "];
                            return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && N(e, function(e) {
                                return t.test(e.className || typeof e.getAttribute !== L && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, t, n) {
                            return function(r) {
                                var i = ut.attr(r, e);
                                return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.substr(i.length - n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.substr(0, n.length + 1) === n + "-" : !1) : !0
                            }
                        },
                        CHILD: function(e, t, n, r, i) {
                            var s = e.slice(0, 3) !== "nth",
                                o = e.slice(-4) !== "last",
                                u = t === "of-type";
                            return r === 1 && i === 0 ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, a) {
                                var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    g = u && t.nodeName.toLowerCase(),
                                    y = !a && !u;
                                if (m) {
                                    if (s) {
                                        while (v) {
                                            c = t;
                                            while (c = c[v])
                                                if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
                                            d = v = e === "only" && !d && "nextSibling"
                                        }
                                        return !0
                                    }
                                    d = [o ? m.firstChild : m.lastChild];
                                    if (o && y) {
                                        l = m[w] || (m[w] = {}), f = l[e] || [], p = f[0] === x && f[1], h = f[0] === x && f[2], c = p && m.childNodes[p];
                                        while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                            if (c.nodeType === 1 && ++h && c === t) {
                                                l[e] = [x, p, h];
                                                break
                                            }
                                    } else if (y && (f = (t[w] || (t[w] = {}))[e]) && f[0] === x) h = f[1];
                                    else
                                        while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                            if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                                                y && ((c[w] || (c[w] = {}))[e] = [x, h]);
                                                if (c === t) break
                                            } return h -= i, h === r || h % r === 0 && h / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ut.error("unsupported pseudo: " + e);
                            return r[w] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? st(function(e, n) {
                                var i, s = r(e, t),
                                    o = s.length;
                                while (o--) i = P.call(e, s[o]), e[i] = !(n[i] = s[o])
                            }) : function(e) {
                                return r(e, 0, n)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: st(function(e) {
                            var t = [],
                                n = [],
                                r = u(e.replace(R, "$1"));
                            return r[w] ? st(function(e, t, n, i) {
                                var s, o = r(e, null, i, []),
                                    u = e.length;
                                while (u--)
                                    if (s = o[u]) e[u] = !(t[u] = s)
                            }) : function(e, i, s) {
                                return t[0] = e, r(t, null, s, n), !n.pop()
                            }
                        }),
                        has: st(function(e) {
                            return function(t) {
                                return ut(e, t).length > 0
                            }
                        }),
                        contains: st(function(e) {
                            return function(t) {
                                return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                            }
                        }),
                        lang: st(function(e) {
                            return X.test(e || "") || ut.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(),
                                function(t) {
                                    var n;
                                    do
                                        if (n = p ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0; while ((t = t.parentNode) && t.nodeType === 1);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === h
                        },
                        focus: function(e) {
                            return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return t === "input" && !!e.checked || t === "option" && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !i.pseudos.empty(e)
                        },
                        header: function(e) {
                            return G.test(e.nodeName)
                        },
                        input: function(e) {
                            return Q.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return t === "input" && e.type === "button" || t === "button"
                        },
                        text: function(e) {
                            var t;
                            return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === e.type)
                        },
                        first: ct(function() {
                            return [0]
                        }),
                        last: ct(function(e, t) {
                            return [t - 1]
                        }),
                        eq: ct(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: ct(function(e, t) {
                            var n = 0;
                            for (; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: ct(function(e, t) {
                            var n = 1;
                            for (; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: ct(function(e, t, n) {
                            var r = n < 0 ? n + t : n;
                            for (; --r >= 0;) e.push(r);
                            return e
                        }),
                        gt: ct(function(e, t, n) {
                            var r = n < 0 ? n + t : n;
                            for (; ++r < t;) e.push(r);
                            return e
                        })
                    }
                };
                for (n in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) i.pseudos[n] = ft(n);
                for (n in {
                        submit: !0,
                        reset: !0
                    }) i.pseudos[n] = lt(n);
                u = ut.compile = function(e, t) {
                    var n, r = [],
                        i = [],
                        s = k[e + " "];
                    if (!s) {
                        t || (t = ht(e)), n = t.length;
                        while (n--) s = yt(t[n]), s[w] ? r.push(s) : i.push(s);
                        s = k(e, bt(i, r))
                    }
                    return s
                }, i.pseudos.nth = i.pseudos.eq, i.filters = St.prototype = i.pseudos, i.setFilters = new St, l(), ut.attr = y.attr, y.find = ut, y.expr = ut.selectors, y.expr[":"] = y.expr.pseudos, y.unique = ut.uniqueSort, y.text = ut.getText, y.isXMLDoc = ut.isXML, y.contains = ut.contains
            }(e);
        var it = /Until$/,
            st = /^(?:parents|prev(?:Until|All))/,
            ot = /^.[^:#\[\.,]*$/,
            ut = y.expr.match.needsContext,
            at = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        y.fn.extend({
            find: function(e) {
                var t, n, r;
                if (typeof e != "string") return r = this, this.pushStack(y(e).filter(function() {
                    for (t = 0; t < r.length; t++)
                        if (y.contains(r[t], this)) return !0
                }));
                n = [];
                for (t = 0; t < this.length; t++) y.find(e, this[t], n);
                return n = this.pushStack(y.unique(n)), n.selector = (this.selector ? this.selector + " " : "") + e, n
            },
            has: function(e) {
                var t, n = y(e, this),
                    r = n.length;
                return this.filter(function() {
                    for (t = 0; t < r; t++)
                        if (y.contains(this, n[t])) return !0
                })
            },
            not: function(e) {
                return this.pushStack(lt(this, e, !1))
            },
            filter: function(e) {
                return this.pushStack(lt(this, e, !0))
            },
            is: function(e) {
                return !!e && (typeof e == "string" ? ut.test(e) ? y(e, this.context).index(this[0]) >= 0 : y.filter(e, this).length > 0 : this.filter(e).length > 0)
            },
            closest: function(e, t) {
                var n, r = 0,
                    i = this.length,
                    s = [],
                    o = ut.test(e) || typeof e != "string" ? y(e, t || this.context) : 0;
                for (; r < i; r++) {
                    n = this[r];
                    while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                        if (o ? o.index(n) > -1 : y.find.matchesSelector(n, e)) {
                            s.push(n);
                            break
                        }
                        n = n.parentNode
                    }
                }
                return this.pushStack(s.length > 1 ? y.unique(s) : s)
            },
            index: function(e) {
                return e ? typeof e == "string" ? y.inArray(this[0], y(e)) : y.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                var n = typeof e == "string" ? y(e, t) : y.makeArray(e && e.nodeType ? [e] : e),
                    r = y.merge(this.get(), n);
                return this.pushStack(y.unique(r))
            },
            addBack: function(e) {
                return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
            }
        }), y.fn.andSelf = y.fn.addBack, y.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && t.nodeType !== 11 ? t : null
            },
            parents: function(e) {
                return y.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return y.dir(e, "parentNode", n)
            },
            next: function(e) {
                return ft(e, "nextSibling")
            },
            prev: function(e) {
                return ft(e, "previousSibling")
            },
            nextAll: function(e) {
                return y.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return y.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return y.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return y.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return y.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return y.sibling(e.firstChild)
            },
            contents: function(e) {
                return y.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : y.merge([], e.childNodes)
            }
        }, function(e, t) {
            y.fn[e] = function(n, r) {
                var i = y.map(this, t, n);
                return it.test(e) || (r = n), r && typeof r == "string" && (i = y.filter(r, i)), i = this.length > 1 && !at[e] ? y.unique(i) : i, this.length > 1 && st.test(e) && (i = i.reverse()), this.pushStack(i)
            }
        }), y.extend({
            filter: function(e, t, n) {
                return n && (e = ":not(" + e + ")"), t.length === 1 ? y.find.matchesSelector(t[0], e) ? [t[0]] : [] : y.find.matches(e, t)
            },
            dir: function(e, n, r) {
                var i = [],
                    s = e[n];
                while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !y(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
                return i
            },
            sibling: function(e, t) {
                var n = [];
                for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
                return n
            }
        });
        var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            pt = / jQuery\d+="(?:null|\d+)"/g,
            dt = new RegExp("<(?:" + ht + ")[\\s/>]", "i"),
            vt = /^\s+/,
            mt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            gt = /<([\w:]+)/,
            yt = /<tbody/i,
            bt = /<|&#?\w+;/,
            wt = /<(?:script|style|link)/i,
            Et = /^(?:checkbox|radio)$/i,
            St = /checked\s*(?:[^=]|=\s*.checked.)/i,
            xt = /^$|\/(?:java|ecma)script/i,
            Tt = /^true\/(.*)/,
            Nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ct = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: y.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            kt = ct(i),
            Lt = kt.appendChild(i.createElement("div"));
        Ct.optgroup = Ct.option, Ct.tbody = Ct.tfoot = Ct.colgroup = Ct.caption = Ct.thead, Ct.th = Ct.td, y.fn.extend({
            text: function(e) {
                return y.access(this, function(e) {
                    return e === t ? y.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(e))
                }, null, e, arguments.length)
            },
            wrapAll: function(e) {
                if (y.isFunction(e)) return this.each(function(t) {
                    y(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = y(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        var e = this;
                        while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return y.isFunction(e) ? this.each(function(t) {
                    y(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = y(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = y.isFunction(e);
                return this.each(function(n) {
                    y(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    y.nodeName(this, "body") || y(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(e) {
                    (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.appendChild(e)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(e) {
                    (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.insertBefore(e, this.firstChild)
                })
            },
            before: function() {
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                var n, r = 0;
                for (;
                    (n = this[r]) != null; r++)
                    if (!e || y.filter(e, [n]).length > 0) !t && n.nodeType === 1 && y.cleanData(Ht(n)), n.parentNode && (t && y.contains(n.ownerDocument, n) && _t(Ht(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                var e, t = 0;
                for (;
                    (e = this[t]) != null; t++) {
                    e.nodeType === 1 && y.cleanData(Ht(e, !1));
                    while (e.firstChild) e.removeChild(e.firstChild);
                    e.options && y.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
                    return y.clone(this, e, t)
                })
            },
            html: function(e) {
                return y.access(this, function(e) {
                    var n = this[0] || {},
                        r = 0,
                        i = this.length;
                    if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(pt, "") : t;
                    if (typeof e == "string" && !wt.test(e) && (y.support.htmlSerialize || !dt.test(e)) && (y.support.leadingWhitespace || !vt.test(e)) && !Ct[(gt.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(mt, "<$1></$2>");
                        try {
                            for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (y.cleanData(Ht(n, !1)), n.innerHTML = e);
                            n = 0
                        } catch (s) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function(e) {
                var t = y.isFunction(e);
                return !t && typeof e != "string" && (e = y(e).not(this).detach()), this.domManip([e], !0, function(e) {
                    var t = this.nextSibling,
                        n = this.parentNode;
                    if (n && this.nodeType === 1 || this.nodeType === 11) y(this).remove(), t ? t.parentNode.insertBefore(e, t) : n.appendChild(e)
                })
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, n, r) {
                e = c.apply([], e);
                var i, s, o, u, a, f, l = 0,
                    h = this.length,
                    p = this,
                    d = h - 1,
                    v = e[0],
                    m = y.isFunction(v);
                if (m || !(h <= 1 || typeof v != "string" || y.support.checkClone || !St.test(v))) return this.each(function(i) {
                    var s = p.eq(i);
                    m && (e[0] = v.call(this, i, n ? s.html() : t)), s.domManip(e, n, r)
                });
                if (h) {
                    i = y.buildFragment(e, this[0].ownerDocument, !1, this), s = i.firstChild, i.childNodes.length === 1 && (i = s);
                    if (s) {
                        n = n && y.nodeName(s, "tr"), o = y.map(Ht(i, "script"), Ot), u = o.length;
                        for (; l < h; l++) a = i, l !== d && (a = y.clone(a, !0, !0), u && y.merge(o, Ht(a, "script"))), r.call(n && y.nodeName(this[l], "table") ? At(this[l], "tbody") : this[l], a, l);
                        if (u) {
                            f = o[o.length - 1].ownerDocument, y.map(o, Mt);
                            for (l = 0; l < u; l++) a = o[l], xt.test(a.type || "") && !y._data(a, "globalEval") && y.contains(f, a) && (a.src ? y.ajax({
                                url: a.src,
                                type: "GET",
                                dataType: "script",
                                async: !1,
                                global: !1,
                                "throws": !0
                            }) : y.globalEval((a.text || a.textContent || a.innerHTML || "").replace(Nt, "")))
                        }
                        i = s = null
                    }
                }
                return this
            }
        }), y.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            y.fn[e] = function(e) {
                var n, r = 0,
                    i = [],
                    s = y(e),
                    o = s.length - 1;
                for (; r <= o; r++) n = r === o ? this : this.clone(!0), y(s[r])[t](n), h.apply(i, n.get());
                return this.pushStack(i)
            }
        }), y.extend({
            clone: function(e, t, n) {
                var r, i, s, o, u, a = y.contains(e.ownerDocument, e);
                y.support.html5Clone || y.isXMLDoc(e) || !dt.test("<" + e.nodeName + ">") ? u = e.cloneNode(!0) : (Lt.innerHTML = e.outerHTML, Lt.removeChild(u = Lt.firstChild));
                if ((!y.support.noCloneEvent || !y.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !y.isXMLDoc(e)) {
                    r = Ht(u), i = Ht(e);
                    for (o = 0;
                        (s = i[o]) != null; ++o) r[o] && Pt(s, r[o])
                }
                if (t)
                    if (n) {
                        i = i || Ht(e), r = r || Ht(u);
                        for (o = 0;
                            (s = i[o]) != null; o++) Dt(s, r[o])
                    } else Dt(e, u);
                return r = Ht(u, "script"), r.length > 0 && _t(r, !a && Ht(e, "script")), r = i = s = null, u
            },
            buildFragment: function(e, t, n, r) {
                var i, s, o, u, a, f, l, c = e.length,
                    h = ct(t),
                    p = [],
                    d = 0;
                for (; d < c; d++) {
                    s = e[d];
                    if (s || s === 0)
                        if (y.type(s) === "object") y.merge(p, s.nodeType ? [s] : s);
                        else if (!bt.test(s)) p.push(t.createTextNode(s));
                    else {
                        u = u || h.appendChild(t.createElement("div")), o = (gt.exec(s) || ["", ""])[1].toLowerCase(), a = Ct[o] || Ct._default, u.innerHTML = a[1] + s.replace(mt, "<$1></$2>") + a[2], l = a[0];
                        while (l--) u = u.lastChild;
                        !y.support.leadingWhitespace && vt.test(s) && p.push(t.createTextNode(vt.exec(s)[0]));
                        if (!y.support.tbody) {
                            s = o === "table" && !yt.test(s) ? u.firstChild : a[1] === "<table>" && !yt.test(s) ? u : 0, l = s && s.childNodes.length;
                            while (l--) y.nodeName(f = s.childNodes[l], "tbody") && !f.childNodes.length && s.removeChild(f)
                        }
                        y.merge(p, u.childNodes), u.textContent = "";
                        while (u.firstChild) u.removeChild(u.firstChild);
                        u = h.lastChild
                    }
                }
                u && h.removeChild(u), y.support.appendChecked || y.grep(Ht(p, "input"), Bt), d = 0;
                while (s = p[d++]) {
                    if (r && y.inArray(s, r) !== -1) continue;
                    i = y.contains(s.ownerDocument, s), u = Ht(h.appendChild(s), "script"), i && _t(u);
                    if (n) {
                        l = 0;
                        while (s = u[l++]) xt.test(s.type || "") && n.push(s)
                    }
                }
                return u = null, h
            },
            cleanData: function(e, t) {
                var n, r, i, s, o = 0,
                    u = y.expando,
                    a = y.cache,
                    l = y.support.deleteExpando,
                    c = y.event.special;
                for (;
                    (i = e[o]) != null; o++)
                    if (t || y.acceptData(i)) {
                        r = i[u], n = r && a[r];
                        if (n) {
                            if (n.events)
                                for (s in n.events) c[s] ? y.event.remove(i, s) : y.removeEvent(i, s, n.handle);
                            a[r] && (delete a[r], l ? delete i[u] : typeof i.removeAttribute != "undefined" ? i.removeAttribute(u) : i[u] = null, f.push(r))
                        }
                    }
            }
        });
        var jt, Ft, It, qt = /alpha\([^)]*\)/i,
            Rt = /opacity\s*=\s*([^)]*)/,
            Ut = /^(top|right|bottom|left)$/,
            zt = /^(none|table(?!-c[ea]).+)/,
            Wt = /^margin/,
            Xt = new RegExp("^(" + b + ")(.*)$", "i"),
            Vt = new RegExp("^(" + b + ")(?!px)[a-z%]+$", "i"),
            $t = new RegExp("^([+-])=(" + b + ")", "i"),
            Jt = {
                BODY: "block"
            },
            Kt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Qt = {
                letterSpacing: 0,
                fontWeight: 400
            },
            Gt = ["Top", "Right", "Bottom", "Left"],
            Yt = ["Webkit", "O", "Moz", "ms"];
        y.fn.extend({
            css: function(e, n) {
                return y.access(this, function(e, n, r) {
                    var i, s, o = {},
                        u = 0;
                    if (y.isArray(n)) {
                        i = Ft(e), s = n.length;
                        for (; u < s; u++) o[n[u]] = y.css(e, n[u], !1, i);
                        return o
                    }
                    return r !== t ? y.style(e, n, r) : y.css(e, n)
                }, e, n, arguments.length > 1)
            },
            show: function() {
                return tn(this, !0)
            },
            hide: function() {
                return tn(this)
            },
            toggle: function(e) {
                var t = typeof e == "boolean";
                return this.each(function() {
                    (t ? e : en(this)) ? y(this).show(): y(this).hide()
                })
            }
        }), y.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = jt(e, "opacity");
                            return n === "" ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": y.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, n, r, i) {
                if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
                var s, o, u, a = y.camelCase(n),
                    f = e.style;
                n = y.cssProps[a] || (y.cssProps[a] = Zt(f, a)), u = y.cssHooks[n] || y.cssHooks[a];
                if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
                o = typeof r, o === "string" && (s = $t.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(y.css(e, n)), o = "number");
                if (r == null || o === "number" && isNaN(r)) return;
                o === "number" && !y.cssNumber[a] && (r += "px"), !y.support.clearCloneStyle && r === "" && n.indexOf("background") === 0 && (f[n] = "inherit");
                if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                    f[n] = r
                } catch (l) {}
            },
            css: function(e, n, r, i) {
                var s, o, u, a = y.camelCase(n);
                return n = y.cssProps[a] || (y.cssProps[a] = Zt(e.style, a)), u = y.cssHooks[n] || y.cssHooks[a], u && "get" in u && (s = u.get(e, !0, r)), s === t && (s = jt(e, n, i)), s === "normal" && n in Qt && (s = Qt[n]), r ? (o = parseFloat(s), r === !0 || y.isNumeric(o) ? o || 0 : s) : s
            },
            swap: function(e, t, n, r) {
                var i, s, o = {};
                for (s in t) o[s] = e.style[s], e.style[s] = t[s];
                i = n.apply(e, r || []);
                for (s in t) e.style[s] = o[s];
                return i
            }
        }), e.getComputedStyle ? (Ft = function(t) {
            return e.getComputedStyle(t, null)
        }, jt = function(e, n, r) {
            var i, s, o, u = r || Ft(e),
                a = u ? u.getPropertyValue(n) || u[n] : t,
                f = e.style;
            return u && (a === "" && !y.contains(e.ownerDocument, e) && (a = y.style(e, n)), Vt.test(a) && Wt.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)), a
        }) : i.documentElement.currentStyle && (Ft = function(e) {
            return e.currentStyle
        }, jt = function(e, n, r) {
            var i, s, o, u = r || Ft(e),
                a = u ? u[n] : t,
                f = e.style;
            return a == null && f && f[n] && (a = f[n]), Vt.test(a) && !Ut.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = n === "fontSize" ? "1em" : a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)), a === "" ? "auto" : a
        }), y.each(["height", "width"], function(e, t) {
            y.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n) return e.offsetWidth === 0 && zt.test(y.css(e, "display")) ? y.swap(e, Kt, function() {
                        return sn(e, t, r)
                    }) : sn(e, t, r)
                },
                set: function(e, n, r) {
                    var i = r && Ft(e);
                    return nn(e, n, r ? rn(e, t, r, y.support.boxSizing && y.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
                }
            }
        }), y.support.opacity || (y.cssHooks.opacity = {
            get: function(e, t) {
                return Rt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    r = e.currentStyle,
                    i = y.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                    s = r && r.filter || n.filter || "";
                n.zoom = 1;
                if ((t >= 1 || t === "") && y.trim(s.replace(qt, "")) === "" && n.removeAttribute) {
                    n.removeAttribute("filter");
                    if (t === "" || r && !r.filter) return
                }
                n.filter = qt.test(s) ? s.replace(qt, i) : s + " " + i
            }
        }), y(function() {
            y.support.reliableMarginRight || (y.cssHooks.marginRight = {
                get: function(e, t) {
                    if (t) return y.swap(e, {
                        display: "inline-block"
                    }, jt, [e, "marginRight"])
                }
            }), !y.support.pixelPosition && y.fn.position && y.each(["top", "left"], function(e, t) {
                y.cssHooks[t] = {
                    get: function(e, n) {
                        if (n) return n = jt(e, t), Vt.test(n) ? y(e).position()[t] + "px" : n
                    }
                }
            })
        }), y.expr && y.expr.filters && (y.expr.filters.hidden = function(e) {
            return e.offsetWidth === 0 && e.offsetHeight === 0 || !y.support.reliableHiddenOffsets && (e.style && e.style.display || y.css(e, "display")) === "none"
        }, y.expr.filters.visible = function(e) {
            return !y.expr.filters.hidden(e)
        }), y.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            y.cssHooks[e + t] = {
                expand: function(n) {
                    var r = 0,
                        i = {},
                        s = typeof n == "string" ? n.split(" ") : [n];
                    for (; r < 4; r++) i[e + Gt[r] + t] = s[r] || s[r - 2] || s[0];
                    return i
                }
            }, Wt.test(e) || (y.cssHooks[e + t].set = nn)
        });
        var an = /%20/g,
            fn = /\[\]$/,
            ln = /\r?\n/g,
            cn = /^(?:submit|button|image|reset)$/i,
            hn = /^(?:input|select|textarea|keygen)/i;
        y.fn.extend({
            serialize: function() {
                return y.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = y.prop(this, "elements");
                    return e ? y.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !y(this).is(":disabled") && hn.test(this.nodeName) && !cn.test(e) && (this.checked || !Et.test(e))
                }).map(function(e, t) {
                    var n = y(this).val();
                    return n == null ? null : y.isArray(n) ? y.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(ln, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(ln, "\r\n")
                    }
                }).get()
            }
        }), y.param = function(e, n) {
            var r, i = [],
                s = function(e, t) {
                    t = y.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            n === t && (n = y.ajaxSettings && y.ajaxSettings.traditional);
            if (y.isArray(e) || e.jquery && !y.isPlainObject(e)) y.each(e, function() {
                s(this.name, this.value)
            });
            else
                for (r in e) pn(r, e[r], n, s);
            return i.join("&").replace(an, "+")
        };
        var dn, vn, mn = y.now(),
            gn = /\?/,
            yn = /#.*$/,
            bn = /([?&])_=[^&]*/,
            wn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
            En = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Sn = /^(?:GET|HEAD)$/,
            xn = /^\/\//,
            Tn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Nn = y.fn.load,
            Cn = {},
            kn = {},
            Ln = "*/".concat("*");
        try {
            vn = s.href
        } catch (An) {
            vn = i.createElement("a"), vn.href = "", vn = vn.href
        }
        dn = Tn.exec(vn.toLowerCase()) || [], y.fn.load = function(e, n, r) {
            if (typeof e != "string" && Nn) return Nn.apply(this, arguments);
            var i, s, o, u = this,
                a = e.indexOf(" ");
            return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), y.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (s = "POST"), u.length > 0 && y.ajax({
                url: e,
                type: s,
                dataType: "html",
                data: n
            }).done(function(e) {
                o = arguments, u.html(i ? y("<div>").append(y.parseHTML(e)).find(i) : e)
            }).complete(r && function(e, t) {
                u.each(r, o || [e.responseText, t, e])
            }), this
        }, y.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            y.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), y.each(["get", "post"], function(e, n) {
            y[n] = function(e, r, i, s) {
                return y.isFunction(r) && (s = s || i, i = r, r = t), y.ajax({
                    url: e,
                    type: n,
                    dataType: s,
                    data: r,
                    success: i
                })
            }
        }), y.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: vn,
                type: "GET",
                isLocal: En.test(dn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ln,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": e.String,
                    "text html": !0,
                    "text json": y.parseJSON,
                    "text xml": y.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? _n(_n(e, y.ajaxSettings), t) : _n(y.ajaxSettings, e)
            },
            ajaxPrefilter: On(Cn),
            ajaxTransport: On(kn),
            ajax: function(e, n) {
                function N(e, n, o, a) {
                    var l, g, b, w, S, T = n;
                    if (E === 2) return;
                    E = 2, u && clearTimeout(u), r = t, s = a || "", x.readyState = e > 0 ? 4 : 0, o && (w = Dn(c, x, o));
                    if (e >= 200 && e < 300 || e === 304) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (y.lastModified[i] = S), S = x.getResponseHeader("etag"), S && (y.etag[i] = S)), e === 304 ? (l = !0, T = "notmodified") : (l = Pn(c, w), T = l.state, g = l.data, b = l.error, l = !b);
                    else {
                        b = T;
                        if (e || !T) T = "error", e < 0 && (e = 0)
                    }
                    x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [g, T, x]) : d.rejectWith(h, [x, T, b]), x.statusCode(m), m = t, f && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, c, l ? g : b]), v.fireWith(h, [x, T]), f && (p.trigger("ajaxComplete", [x, c]), --y.active || y.event.trigger("ajaxStop"))
                }
                typeof e == "object" && (n = e, e = t), n = n || {};
                var r, i, s, o, u, a, f, l, c = y.ajaxSetup({}, n),
                    h = c.context || c,
                    p = c.context && (h.nodeType || h.jquery) ? y(h) : y.event,
                    d = y.Deferred(),
                    v = y.Callbacks("once memory"),
                    m = c.statusCode || {},
                    g = {},
                    b = {},
                    E = 0,
                    S = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (E === 2) {
                                if (!o) {
                                    o = {};
                                    while (t = wn.exec(s)) o[t[1].toLowerCase()] = t[2]
                                }
                                t = o[e.toLowerCase()]
                            }
                            return t == null ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return E === 2 ? s : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return E || (e = b[n] = b[n] || e, g[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return E || (c.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (E < 2)
                                    for (t in e) m[t] = [m[t], e[t]];
                                else x.always(e[x.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || S;
                            return r && r.abort(t), N(0, t), this
                        }
                    };
                d.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, c.url = ((e || c.url || vn) + "").replace(yn, "").replace(xn, dn[1] + "//"), c.type = n.method || n.type || c.method || c.type, c.dataTypes = y.trim(c.dataType || "*").toLowerCase().match(w) || [""], c.crossDomain == null && (a = Tn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === dn[1] && a[2] === dn[2] && (a[3] || (a[1] === "http:" ? 80 : 443)) == (dn[3] || (dn[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = y.param(c.data, c.traditional)), Mn(Cn, c, n, x);
                if (E === 2) return x;
                f = c.global, f && y.active++ === 0 && y.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Sn.test(c.type), i = c.url, c.hasContent || (c.data && (i = c.url += (gn.test(i) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = bn.test(i) ? i.replace(bn, "$1_=" + mn++) : i + (gn.test(i) ? "&" : "?") + "_=" + mn++)), c.ifModified && (y.lastModified[i] && x.setRequestHeader("If-Modified-Since", y.lastModified[i]), y.etag[i] && x.setRequestHeader("If-None-Match", y.etag[i])), (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Ln + "; q=0.01" : "") : c.accepts["*"]);
                for (l in c.headers) x.setRequestHeader(l, c.headers[l]);
                if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && E !== 2) {
                    S = "abort";
                    for (l in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) x[l](c[l]);
                    r = Mn(kn, c, n, x);
                    if (!r) N(-1, "No Transport");
                    else {
                        x.readyState = 1, f && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function() {
                            x.abort("timeout")
                        }, c.timeout));
                        try {
                            E = 1, r.send(g, N)
                        } catch (T) {
                            if (!(E < 2)) throw T;
                            N(-1, T)
                        }
                    }
                    return x
                }
                return x.abort()
            },
            getScript: function(e, n) {
                return y.get(e, t, n, "script")
            },
            getJSON: function(e, t, n) {
                return y.get(e, t, n, "json")
            }
        }), y.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return y.globalEval(e), e
                }
            }
        }), y.ajaxPrefilter("script", function(e) {
            e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), y.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var n, r = i.head || y("head")[0] || i.documentElement;
                return {
                    send: function(t, s) {
                        n = i.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                            if (t || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || s(200, "success")
                        }, r.insertBefore(n, r.firstChild)
                    },
                    abort: function() {
                        n && n.onload(t, !0)
                    }
                }
            }
        });
        var Hn = [],
            Bn = /(=)\?(?=&|$)|\?\?/;
        y.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Hn.pop() || y.expando + "_" + mn++;
                return this[e] = !0, e
            }
        }), y.ajaxPrefilter("json jsonp", function(n, r, i) {
            var s, o, u, a = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : typeof n.data == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
            if (a || n.dataTypes[0] === "jsonp") return s = n.jsonpCallback = y.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a ? n[a] = n[a].replace(Bn, "$1" + s) : n.jsonp !== !1 && (n.url += (gn.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
                return u || y.error(s + " was not called"), u[0]
            }, n.dataTypes[0] = "json", o = e[s], e[s] = function() {
                u = arguments
            }, i.always(function() {
                e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, Hn.push(s)), u && y.isFunction(o) && o(u[0]), u = o = t
            }), "script"
        });
        var jn, Fn, In = 0,
            qn = e.ActiveXObject && function() {
                var e;
                for (e in jn) jn[e](t, !0)
            };
        y.ajaxSettings.xhr = e.ActiveXObject ? function() {
            return !this.isLocal && Rn() || Un()
        } : Rn, Fn = y.ajaxSettings.xhr(), y.support.cors = !!Fn && "withCredentials" in Fn, Fn = y.support.ajax = !!Fn, Fn && y.ajaxTransport(function(n) {
            if (!n.crossDomain || y.support.cors) {
                var r;
                return {
                    send: function(i, s) {
                        var o, u, a = n.xhr();
                        n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                        if (n.xhrFields)
                            for (u in n.xhrFields) a[u] = n.xhrFields[u];
                        n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (u in i) a.setRequestHeader(u, i[u])
                        } catch (f) {}
                        a.send(n.hasContent && n.data || null), r = function(e, i) {
                            var u, f, l, c, h;
                            try {
                                if (r && (i || a.readyState === 4)) {
                                    r = t, o && (a.onreadystatechange = y.noop, qn && delete jn[o]);
                                    if (i) a.readyState !== 4 && a.abort();
                                    else {
                                        c = {}, u = a.status, h = a.responseXML, l = a.getAllResponseHeaders(), h && h.documentElement && (c.xml = h), typeof a.responseText == "string" && (c.text = a.responseText);
                                        try {
                                            f = a.statusText
                                        } catch (p) {
                                            f = ""
                                        }!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                    }
                                }
                            } catch (d) {
                                i || s(-1, d)
                            }
                            c && s(u, f, c, l)
                        }, n.async ? a.readyState === 4 ? setTimeout(r) : (o = ++In, qn && (jn || (jn = {}, y(e).unload(qn)), jn[o] = r), a.onreadystatechange = r) : r()
                    },
                    abort: function() {
                        r && r(t, !0)
                    }
                }
            }
        });
        var zn, Wn, Xn = /^(?:toggle|show|hide)$/,
            Vn = new RegExp("^(?:([+-])=|)(" + b + ")([a-z%]*)$", "i"),
            $n = /queueHooks$/,
            Jn = [er],
            Kn = {
                "*": [function(e, t) {
                    var n, r, i = this.createTween(e, t),
                        s = Vn.exec(t),
                        o = i.cur(),
                        u = +o || 0,
                        a = 1,
                        f = 20;
                    if (s) {
                        n = +s[2], r = s[3] || (y.cssNumber[e] ? "" : "px");
                        if (r !== "px" && u) {
                            u = y.css(i.elem, e, !0) || n || 1;
                            do a = a || ".5", u /= a, y.style(i.elem, e, u + r); while (a !== (a = i.cur() / o) && a !== 1 && --f)
                        }
                        i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n
                    }
                    return i
                }]
            };
        y.Animation = y.extend(Yn, {
            tweener: function(e, t) {
                y.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                var n, r = 0,
                    i = e.length;
                for (; r < i; r++) n = e[r], Kn[n] = Kn[n] || [], Kn[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? Jn.unshift(e) : Jn.push(e)
            }
        }), y.Tween = tr, tr.prototype = {
            constructor: tr,
            init: function(e, t, n, r, i, s) {
                this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (y.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = tr.propHooks[this.prop];
                return e && e.get ? e.get(this) : tr.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = tr.propHooks[this.prop];
                return this.options.duration ? this.pos = t = y.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tr.propHooks._default.set(this), this
            }
        }, tr.prototype.init.prototype = tr.prototype, tr.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = y.css(e.elem, e.prop, "auto"), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
                },
                set: function(e) {
                    y.fx.step[e.prop] ? y.fx.step[e.prop](e) : e.elem.style && (e.elem.style[y.cssProps[e.prop]] != null || y.cssHooks[e.prop]) ? y.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, tr.propHooks.scrollTop = tr.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, y.each(["toggle", "show", "hide"], function(e, t) {
            var n = y.fn[t];
            y.fn[t] = function(e, r, i) {
                return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(nr(t, !0), e, r, i)
            }
        }), y.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(en).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = y.isEmptyObject(e),
                    s = y.speed(t, n, r),
                    o = function() {
                        var t = Yn(this, y.extend({}, e), s);
                        o.finish = function() {
                            t.stop(!0)
                        }, (i || y._data(this, "finish")) && t.stop(!0)
                    };
                return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function(e, n, r) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(r)
                };
                return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        n = e != null && e + "queueHooks",
                        s = y.timers,
                        o = y._data(this);
                    if (n) o[n] && o[n].stop && i(o[n]);
                    else
                        for (n in o) o[n] && o[n].stop && $n.test(n) && i(o[n]);
                    for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                    (t || !r) && y.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = y._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        s = y.timers,
                        o = r ? r.length : 0;
                    n.finish = !0, y.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this);
                    for (t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), y.each({
            slideDown: nr("show"),
            slideUp: nr("hide"),
            slideToggle: nr("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            y.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), y.speed = function(e, t, n) {
            var r = e && typeof e == "object" ? y.extend({}, e) : {
                complete: n || !n && t || y.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !y.isFunction(t) && t
            };
            r.duration = y.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in y.fx.speeds ? y.fx.speeds[r.duration] : y.fx.speeds._default;
            if (r.queue == null || r.queue === !0) r.queue = "fx";
            return r.old = r.complete, r.complete = function() {
                y.isFunction(r.old) && r.old.call(this), r.queue && y.dequeue(this, r.queue)
            }, r
        }, y.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, y.timers = [], y.fx = tr.prototype.init, y.fx.tick = function() {
            var e, n = y.timers,
                r = 0;
            zn = y.now();
            for (; r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
            n.length || y.fx.stop(), zn = t
        }, y.fx.timer = function(e) {
            e() && y.timers.push(e) && y.fx.start()
        }, y.fx.interval = 13, y.fx.start = function() {
            Wn || (Wn = setInterval(y.fx.tick, y.fx.interval))
        }, y.fx.stop = function() {
            clearInterval(Wn), Wn = null
        }, y.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, y.fx.step = {}, y.expr && y.expr.filters && (y.expr.filters.animated = function(e) {
            return y.grep(y.timers, function(t) {
                return e === t.elem
            }).length
        }), y.fn.offset = function(e) {
            if (arguments.length) return e === t ? this : this.each(function(t) {
                y.offset.setOffset(this, e, t)
            });
            var n, r, i = {
                    top: 0,
                    left: 0
                },
                s = this[0],
                o = s && s.ownerDocument;
            if (!o) return;
            return n = o.documentElement, y.contains(n, s) ? (typeof s.getBoundingClientRect != "undefined" && (i = s.getBoundingClientRect()), r = rr(o), {
                top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : i
        }, y.offset = {
            setOffset: function(e, t, n) {
                var r = y.css(e, "position");
                r === "static" && (e.style.position = "relative");
                var i = y(e),
                    s = i.offset(),
                    o = y.css(e, "top"),
                    u = y.css(e, "left"),
                    a = (r === "absolute" || r === "fixed") && y.inArray("auto", [o, u]) > -1,
                    f = {},
                    l = {},
                    c, h;
                a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), y.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
            }
        }, y.fn.extend({
            position: function() {
                if (!this[0]) return;
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return y.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), y.nodeName(e[0], "html") || (n = e.offset()), n.top += y.css(e[0], "borderTopWidth", !0), n.left += y.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - y.css(r, "marginTop", !0),
                    left: t.left - n.left - y.css(r, "marginLeft", !0)
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var e = this.offsetParent || i.documentElement;
                    while (e && !y.nodeName(e, "html") && y.css(e, "position") === "static") e = e.offsetParent;
                    return e || i.documentElement
                })
            }
        }), y.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, n) {
            var r = /Y/.test(n);
            y.fn[e] = function(i) {
                return y.access(this, function(e, i, s) {
                    var o = rr(e);
                    if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                    o ? o.scrollTo(r ? y(o).scrollLeft() : s, r ? s : y(o).scrollTop()) : e[i] = s
                }, e, i, arguments.length, null)
            }
        }), y.each({
            Height: "height",
            Width: "width"
        }, function(e, n) {
            y.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            }, function(r, i) {
                y.fn[i] = function(i, s) {
                    var o = arguments.length && (r || typeof i != "boolean"),
                        u = r || (i === !0 || s === !0 ? "margin" : "border");
                    return y.access(this, function(n, r, i) {
                        var s;
                        return y.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? y.css(n, r, u) : y.style(n, r, i, u)
                    }, n, o ? i : t, o, null)
                }
            })
        }), e.jQuery = e.$ = y, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return y
        })
    }(window),
    function() {
        var e = this,
            t = e._,
            n = {},
            r = Array.prototype,
            i = Object.prototype,
            s = Function.prototype,
            o = r.push,
            u = r.slice,
            a = r.concat,
            f = i.toString,
            l = i.hasOwnProperty,
            c = r.forEach,
            h = r.map,
            p = r.reduce,
            d = r.reduceRight,
            v = r.filter,
            m = r.every,
            g = r.some,
            y = r.indexOf,
            b = r.lastIndexOf,
            w = Array.isArray,
            E = Object.keys,
            S = s.bind,
            x = function(e) {
                if (e instanceof x) return e;
                if (!(this instanceof x)) return new x(e);
                this._wrapped = e
            };
        typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.4.3";
        var T = x.each = x.forEach = function(e, t, r) {
            if (e == null) return;
            if (c && e.forEach === c) e.forEach(t, r);
            else if (e.length === +e.length) {
                for (var i = 0, s = e.length; i < s; i++)
                    if (t.call(r, e[i], i, e) === n) return
            } else
                for (var o in e)
                    if (x.has(e, o) && t.call(r, e[o], o, e) === n) return
        };
        x.map = x.collect = function(e, t, n) {
            var r = [];
            return e == null ? r : h && e.map === h ? e.map(t, n) : (T(e, function(e, i, s) {
                r[r.length] = t.call(n, e, i, s)
            }), r)
        };
        var N = "Reduce of empty array with no initial value";
        x.reduce = x.foldl = x.inject = function(e, t, n, r) {
            var i = arguments.length > 2;
            e == null && (e = []);
            if (p && e.reduce === p) return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
            T(e, function(e, s, o) {
                i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
            });
            if (!i) throw new TypeError(N);
            return n
        }, x.reduceRight = x.foldr = function(e, t, n, r) {
            var i = arguments.length > 2;
            e == null && (e = []);
            if (d && e.reduceRight === d) return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
            var s = e.length;
            if (s !== +s) {
                var o = x.keys(e);
                s = o.length
            }
            T(e, function(u, a, f) {
                a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i = !0)
            });
            if (!i) throw new TypeError(N);
            return n
        }, x.find = x.detect = function(e, t, n) {
            var r;
            return C(e, function(e, i, s) {
                if (t.call(n, e, i, s)) return r = e, !0
            }), r
        }, x.filter = x.select = function(e, t, n) {
            var r = [];
            return e == null ? r : v && e.filter === v ? e.filter(t, n) : (T(e, function(e, i, s) {
                t.call(n, e, i, s) && (r[r.length] = e)
            }), r)
        }, x.reject = function(e, t, n) {
            return x.filter(e, function(e, r, i) {
                return !t.call(n, e, r, i)
            }, n)
        }, x.every = x.all = function(e, t, r) {
            t || (t = x.identity);
            var i = !0;
            return e == null ? i : m && e.every === m ? e.every(t, r) : (T(e, function(e, s, o) {
                if (!(i = i && t.call(r, e, s, o))) return n
            }), !!i)
        };
        var C = x.some = x.any = function(e, t, r) {
            t || (t = x.identity);
            var i = !1;
            return e == null ? i : g && e.some === g ? e.some(t, r) : (T(e, function(e, s, o) {
                if (i || (i = t.call(r, e, s, o))) return n
            }), !!i)
        };
        x.contains = x.include = function(e, t) {
            return e == null ? !1 : y && e.indexOf === y ? e.indexOf(t) != -1 : C(e, function(e) {
                return e === t
            })
        }, x.invoke = function(e, t) {
            var n = u.call(arguments, 2);
            return x.map(e, function(e) {
                return (x.isFunction(t) ? t : e[t]).apply(e, n)
            })
        }, x.pluck = function(e, t) {
            return x.map(e, function(e) {
                return e[t]
            })
        }, x.where = function(e, t) {
            return x.isEmpty(t) ? [] : x.filter(e, function(e) {
                for (var n in t)
                    if (t[n] !== e[n]) return !1;
                return !0
            })
        }, x.max = function(e, t, n) {
            if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
            if (!t && x.isEmpty(e)) return -Infinity;
            var r = {
                computed: -Infinity,
                value: -Infinity
            };
            return T(e, function(e, i, s) {
                var o = t ? t.call(n, e, i, s) : e;
                o >= r.computed && (r = {
                    value: e,
                    computed: o
                })
            }), r.value
        }, x.min = function(e, t, n) {
            if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
            if (!t && x.isEmpty(e)) return Infinity;
            var r = {
                computed: Infinity,
                value: Infinity
            };
            return T(e, function(e, i, s) {
                var o = t ? t.call(n, e, i, s) : e;
                o < r.computed && (r = {
                    value: e,
                    computed: o
                })
            }), r.value
        }, x.shuffle = function(e) {
            var t, n = 0,
                r = [];
            return T(e, function(e) {
                t = x.random(n++), r[n - 1] = r[t], r[t] = e
            }), r
        };
        var k = function(e) {
            return x.isFunction(e) ? e : function(t) {
                return t[e]
            }
        };
        x.sortBy = function(e, t, n) {
            var r = k(t);
            return x.pluck(x.map(e, function(e, t, i) {
                return {
                    value: e,
                    index: t,
                    criteria: r.call(n, e, t, i)
                }
            }).sort(function(e, t) {
                var n = e.criteria,
                    r = t.criteria;
                if (n !== r) {
                    if (n > r || n === void 0) return 1;
                    if (n < r || r === void 0) return -1
                }
                return e.index < t.index ? -1 : 1
            }), "value")
        };
        var L = function(e, t, n, r) {
            var i = {},
                s = k(t || x.identity);
            return T(e, function(t, o) {
                var u = s.call(n, t, o, e);
                r(i, u, t)
            }), i
        };
        x.groupBy = function(e, t, n) {
            return L(e, t, n, function(e, t, n) {
                (x.has(e, t) ? e[t] : e[t] = []).push(n)
            })
        }, x.countBy = function(e, t, n) {
            return L(e, t, n, function(e, t) {
                x.has(e, t) || (e[t] = 0), e[t]++
            })
        }, x.sortedIndex = function(e, t, n, r) {
            n = n == null ? x.identity : k(n);
            var i = n.call(r, t),
                s = 0,
                o = e.length;
            while (s < o) {
                var u = s + o >>> 1;
                n.call(r, e[u]) < i ? s = u + 1 : o = u
            }
            return s
        }, x.toArray = function(e) {
            return e ? x.isArray(e) ? u.call(e) : e.length === +e.length ? x.map(e, x.identity) : x.values(e) : []
        }, x.size = function(e) {
            return e == null ? 0 : e.length === +e.length ? e.length : x.keys(e).length
        }, x.first = x.head = x.take = function(e, t, n) {
            return e == null ? void 0 : t != null && !n ? u.call(e, 0, t) : e[0]
        }, x.initial = function(e, t, n) {
            return u.call(e, 0, e.length - (t == null || n ? 1 : t))
        }, x.last = function(e, t, n) {
            return e == null ? void 0 : t != null && !n ? u.call(e, Math.max(e.length - t, 0)) : e[e.length - 1]
        }, x.rest = x.tail = x.drop = function(e, t, n) {
            return u.call(e, t == null || n ? 1 : t)
        }, x.compact = function(e) {
            return x.filter(e, x.identity)
        };
        var A = function(e, t, n) {
            return T(e, function(e) {
                x.isArray(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e)
            }), n
        };
        x.flatten = function(e, t) {
            return A(e, t, [])
        }, x.without = function(e) {
            return x.difference(e, u.call(arguments, 1))
        }, x.uniq = x.unique = function(e, t, n, r) {
            x.isFunction(t) && (r = n, n = t, t = !1);
            var i = n ? x.map(e, n, r) : e,
                s = [],
                o = [];
            return T(i, function(n, r) {
                if (t ? !r || o[o.length - 1] !== n : !x.contains(o, n)) o.push(n), s.push(e[r])
            }), s
        }, x.union = function() {
            return x.uniq(a.apply(r, arguments))
        }, x.intersection = function(e) {
            var t = u.call(arguments, 1);
            return x.filter(x.uniq(e), function(e) {
                return x.every(t, function(t) {
                    return x.indexOf(t, e) >= 0
                })
            })
        }, x.difference = function(e) {
            var t = a.apply(r, u.call(arguments, 1));
            return x.filter(e, function(e) {
                return !x.contains(t, e)
            })
        }, x.zip = function() {
            var e = u.call(arguments),
                t = x.max(x.pluck(e, "length")),
                n = new Array(t);
            for (var r = 0; r < t; r++) n[r] = x.pluck(e, "" + r);
            return n
        }, x.object = function(e, t) {
            if (e == null) return {};
            var n = {};
            for (var r = 0, i = e.length; r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
            return n
        }, x.indexOf = function(e, t, n) {
            if (e == null) return -1;
            var r = 0,
                i = e.length;
            if (n) {
                if (typeof n != "number") return r = x.sortedIndex(e, t), e[r] === t ? r : -1;
                r = n < 0 ? Math.max(0, i + n) : n
            }
            if (y && e.indexOf === y) return e.indexOf(t, n);
            for (; r < i; r++)
                if (e[r] === t) return r;
            return -1
        }, x.lastIndexOf = function(e, t, n) {
            if (e == null) return -1;
            var r = n != null;
            if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
            var i = r ? n : e.length;
            while (i--)
                if (e[i] === t) return i;
            return -1
        }, x.range = function(e, t, n) {
            arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
            var r = Math.max(Math.ceil((t - e) / n), 0),
                i = 0,
                s = new Array(r);
            while (i < r) s[i++] = e, e += n;
            return s
        };
        var O = function() {};
        x.bind = function(e, t) {
            var n, r;
            if (e.bind === S && S) return S.apply(e, u.call(arguments, 1));
            if (!x.isFunction(e)) throw new TypeError;
            return n = u.call(arguments, 2), r = function() {
                if (this instanceof r) {
                    O.prototype = e.prototype;
                    var i = new O;
                    O.prototype = null;
                    var s = e.apply(i, n.concat(u.call(arguments)));
                    return Object(s) === s ? s : i
                }
                return e.apply(t, n.concat(u.call(arguments)))
            }
        }, x.bindAll = function(e) {
            var t = u.call(arguments, 1);
            return t.length == 0 && (t = x.functions(e)), T(t, function(t) {
                e[t] = x.bind(e[t], e)
            }), e
        }, x.memoize = function(e, t) {
            var n = {};
            return t || (t = x.identity),
                function() {
                    var r = t.apply(this, arguments);
                    return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
                }
        }, x.delay = function(e, t) {
            var n = u.call(arguments, 2);
            return setTimeout(function() {
                return e.apply(null, n)
            }, t)
        }, x.defer = function(e) {
            return x.delay.apply(x, [e, 1].concat(u.call(arguments, 1)))
        }, x.throttle = function(e, t) {
            var n, r, i, s, o = 0,
                u = function() {
                    o = new Date, i = null, s = e.apply(n, r)
                };
            return function() {
                var a = new Date,
                    f = t - (a - o);
                return n = this, r = arguments, f <= 0 ? (clearTimeout(i), i = null, o = a, s = e.apply(n, r)) : i || (i = setTimeout(u, f)), s
            }
        }, x.debounce = function(e, t, n) {
            var r, i;
            return function() {
                var s = this,
                    o = arguments,
                    u = function() {
                        r = null, n || (i = e.apply(s, o))
                    },
                    a = n && !r;
                return clearTimeout(r), r = setTimeout(u, t), a && (i = e.apply(s, o)), i
            }
        }, x.once = function(e) {
            var t = !1,
                n;
            return function() {
                return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
            }
        }, x.wrap = function(e, t) {
            return function() {
                var n = [e];
                return o.apply(n, arguments), t.apply(this, n)
            }
        }, x.compose = function() {
            var e = arguments;
            return function() {
                var t = arguments;
                for (var n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
                return t[0]
            }
        }, x.after = function(e, t) {
            return e <= 0 ? t() : function() {
                if (--e < 1) return t.apply(this, arguments)
            }
        }, x.keys = E || function(e) {
            if (e !== Object(e)) throw new TypeError("Invalid object");
            var t = [];
            for (var n in e) x.has(e, n) && (t[t.length] = n);
            return t
        }, x.values = function(e) {
            var t = [];
            for (var n in e) x.has(e, n) && t.push(e[n]);
            return t
        }, x.pairs = function(e) {
            var t = [];
            for (var n in e) x.has(e, n) && t.push([n, e[n]]);
            return t
        }, x.invert = function(e) {
            var t = {};
            for (var n in e) x.has(e, n) && (t[e[n]] = n);
            return t
        }, x.functions = x.methods = function(e) {
            var t = [];
            for (var n in e) x.isFunction(e[n]) && t.push(n);
            return t.sort()
        }, x.extend = function(e) {
            return T(u.call(arguments, 1), function(t) {
                if (t)
                    for (var n in t) e[n] = t[n]
            }), e
        }, x.pick = function(e) {
            var t = {},
                n = a.apply(r, u.call(arguments, 1));
            return T(n, function(n) {
                n in e && (t[n] = e[n])
            }), t
        }, x.omit = function(e) {
            var t = {},
                n = a.apply(r, u.call(arguments, 1));
            for (var i in e) x.contains(n, i) || (t[i] = e[i]);
            return t
        }, x.defaults = function(e) {
            return T(u.call(arguments, 1), function(t) {
                if (t)
                    for (var n in t) e[n] == null && (e[n] = t[n])
            }), e
        }, x.clone = function(e) {
            return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
        }, x.tap = function(e, t) {
            return t(e), e
        };
        var M = function(e, t, n, r) {
            if (e === t) return e !== 0 || 1 / e == 1 / t;
            if (e == null || t == null) return e === t;
            e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
            var i = f.call(e);
            if (i != f.call(t)) return !1;
            switch (i) {
                case "[object String]":
                    return e == String(t);
                case "[object Number]":
                    return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e == +t;
                case "[object RegExp]":
                    return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
            }
            if (typeof e != "object" || typeof t != "object") return !1;
            var s = n.length;
            while (s--)
                if (n[s] == e) return r[s] == t;
            n.push(e), r.push(t);
            var o = 0,
                u = !0;
            if (i == "[object Array]") {
                o = e.length, u = o == t.length;
                if (u)
                    while (o--)
                        if (!(u = M(e[o], t[o], n, r))) break
            } else {
                var a = e.constructor,
                    l = t.constructor;
                if (a !== l && !(x.isFunction(a) && a instanceof a && x.isFunction(l) && l instanceof l)) return !1;
                for (var c in e)
                    if (x.has(e, c)) {
                        o++;
                        if (!(u = x.has(t, c) && M(e[c], t[c], n, r))) break
                    }
                if (u) {
                    for (c in t)
                        if (x.has(t, c) && !(o--)) break;
                    u = !o
                }
            }
            return n.pop(), r.pop(), u
        };
        x.isEqual = function(e, t) {
            return M(e, t, [], [])
        }, x.isEmpty = function(e) {
            if (e == null) return !0;
            if (x.isArray(e) || x.isString(e)) return e.length === 0;
            for (var t in e)
                if (x.has(e, t)) return !1;
            return !0
        }, x.isElement = function(e) {
            return !!e && e.nodeType === 1
        }, x.isArray = w || function(e) {
            return f.call(e) == "[object Array]"
        }, x.isObject = function(e) {
            return e === Object(e)
        }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
            x["is" + e] = function(t) {
                return f.call(t) == "[object " + e + "]"
            }
        }), x.isArguments(arguments) || (x.isArguments = function(e) {
            return !!e && !!x.has(e, "callee")
        }), typeof /./ != "function" && (x.isFunction = function(e) {
            return typeof e == "function"
        }), x.isFinite = function(e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, x.isNaN = function(e) {
            return x.isNumber(e) && e != +e
        }, x.isBoolean = function(e) {
            return e === !0 || e === !1 || f.call(e) == "[object Boolean]"
        }, x.isNull = function(e) {
            return e === null
        }, x.isUndefined = function(e) {
            return e === void 0
        }, x.has = function(e, t) {
            return l.call(e, t)
        }, x.noConflict = function() {
            return e._ = t, this
        }, x.identity = function(e) {
            return e
        }, x.times = function(e, t, n) {
            var r = Array(e);
            for (var i = 0; i < e; i++) r[i] = t.call(n, i);
            return r
        }, x.random = function(e, t) {
            return t == null && (t = e, e = 0), e + (0 | Math.random() * (t - e + 1))
        };
        var _ = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "/": "&#x2F;"
            }
        };
        _.unescape = x.invert(_.escape);
        var D = {
            escape: new RegExp("[" + x.keys(_.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + x.keys(_.unescape).join("|") + ")", "g")
        };
        x.each(["escape", "unescape"], function(e) {
            x[e] = function(t) {
                return t == null ? "" : ("" + t).replace(D[e], function(t) {
                    return _[e][t]
                })
            }
        }), x.result = function(e, t) {
            if (e == null) return null;
            var n = e[t];
            return x.isFunction(n) ? n.call(e) : n
        }, x.mixin = function(e) {
            T(x.functions(e), function(t) {
                var n = x[t] = e[t];
                x.prototype[t] = function() {
                    var e = [this._wrapped];
                    return o.apply(e, arguments), F.call(this, n.apply(x, e))
                }
            })
        };
        var P = 0;
        x.uniqueId = function(e) {
            var t = "" + ++P;
            return e ? e + t : t
        }, x.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var H = /(.)^/,
            B = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "	": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            j = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        x.template = function(e, t, n) {
            n = x.defaults({}, n, x.templateSettings);
            var r = new RegExp([(n.escape || H).source, (n.interpolate || H).source, (n.evaluate || H).source].join("|") + "|$", "g"),
                i = 0,
                s = "__p+='";
            e.replace(r, function(t, n, r, o, u) {
                return s += e.slice(i, u).replace(j, function(e) {
                    return "\\" + B[e]
                }), n && (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), o && (s += "';\n" + o + "\n__p+='"), i = u + t.length, t
            }), s += "';\n", n.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
            try {
                var o = new Function(n.variable || "obj", "_", s)
            } catch (u) {
                throw u.source = s, u
            }
            if (t) return o(t, x);
            var a = function(e) {
                return o.call(this, e, x)
            };
            return a.source = "function(" + (n.variable || "obj") + "){\n" + s + "}", a
        }, x.chain = function(e) {
            return x(e).chain()
        };
        var F = function(e) {
            return this._chain ? x(e).chain() : e
        };
        x.mixin(x), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
            var t = r[e];
            x.prototype[e] = function() {
                var n = this._wrapped;
                return t.apply(n, arguments), (e == "shift" || e == "splice") && n.length === 0 && delete n[0], F.call(this, n)
            }
        }), T(["concat", "join", "slice"], function(e) {
            var t = r[e];
            x.prototype[e] = function() {
                return F.call(this, t.apply(this._wrapped, arguments))
            }
        }), x.extend(x.prototype, {
            chain: function() {
                return this._chain = !0, this
            },
            value: function() {
                return this._wrapped
            }
        }), typeof define == "function" && define.amd && define("underscore", [], function() {
            return x
        })
    }.call(this),
    function(e, t) {
        typeof exports != "undefined" ? t(e, exports, require("underscore")) : typeof define == "function" && define.amd ? define("backbone", ["underscore", "jquery", "exports"], function(n, r, i) {
            e.Backbone = t(e, i, n, r)
        }) : e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender)
    }(this, function(e, t, n, r) {
        var i = e.Backbone,
            s = [],
            o = s.push,
            u = s.slice,
            a = s.splice;
        t.VERSION = "0.9.10", t.$ = r, t.noConflict = function() {
            return e.Backbone = i, this
        }, t.emulateHTTP = !1, t.emulateJSON = !1;
        var f = /\s+/,
            l = function(e, t, n, r) {
                if (!n) return !0;
                if (typeof n == "object")
                    for (var i in n) e[t].apply(e, [i, n[i]].concat(r));
                else {
                    if (!f.test(n)) return !0;
                    var s = n.split(f);
                    for (var o = 0, u = s.length; o < u; o++) e[t].apply(e, [s[o]].concat(r))
                }
            },
            c = function(e, t) {
                var n, r = -1,
                    i = e.length;
                switch (t.length) {
                    case 0:
                        while (++r < i)(n = e[r]).callback.call(n.ctx);
                        return;
                    case 1:
                        while (++r < i)(n = e[r]).callback.call(n.ctx, t[0]);
                        return;
                    case 2:
                        while (++r < i)(n = e[r]).callback.call(n.ctx, t[0], t[1]);
                        return;
                    case 3:
                        while (++r < i)(n = e[r]).callback.call(n.ctx, t[0], t[1], t[2]);
                        return;
                    default:
                        while (++r < i)(n = e[r]).callback.apply(n.ctx, t)
                }
            },
            h = t.Events = {
                on: function(e, t, n) {
                    if (!l(this, "on", e, [t, n]) || !t) return this;
                    this._events || (this._events = {});
                    var r = this._events[e] || (this._events[e] = []);
                    return r.push({
                        callback: t,
                        context: n,
                        ctx: n || this
                    }), this
                },
                once: function(e, t, r) {
                    if (!l(this, "once", e, [t, r]) || !t) return this;
                    var i = this,
                        s = n.once(function() {
                            i.off(e, s), t.apply(this, arguments)
                        });
                    return s._callback = t, this.on(e, s, r), this
                },
                off: function(e, t, r) {
                    var i, s, o, u, a, f, c, h;
                    if (!this._events || !l(this, "off", e, [t, r])) return this;
                    if (!e && !t && !r) return this._events = {}, this;
                    u = e ? [e] : n.keys(this._events);
                    for (a = 0, f = u.length; a < f; a++) {
                        e = u[a];
                        if (i = this._events[e]) {
                            o = [];
                            if (t || r)
                                for (c = 0, h = i.length; c < h; c++) s = i[c], (t && t !== s.callback && t !== s.callback._callback || r && r !== s.context) && o.push(s);
                            this._events[e] = o
                        }
                    }
                    return this
                },
                trigger: function(e) {
                    if (!this._events) return this;
                    var t = u.call(arguments, 1);
                    if (!l(this, "trigger", e, t)) return this;
                    var n = this._events[e],
                        r = this._events.all;
                    return n && c(n, t), r && c(r, arguments), this
                },
                listenTo: function(e, t, r) {
                    var i = this._listeners || (this._listeners = {}),
                        s = e._listenerId || (e._listenerId = n.uniqueId("l"));
                    return i[s] = e, e.on(t, typeof t == "object" ? this : r, this), this
                },
                stopListening: function(e, t, n) {
                    var r = this._listeners;
                    if (!r) return;
                    if (e) e.off(t, typeof t == "object" ? this : n, this), !t && !n && delete r[e._listenerId];
                    else {
                        typeof t == "object" && (n = this);
                        for (var i in r) r[i].off(t, n, this);
                        this._listeners = {}
                    }
                    return this
                }
            };
        h.bind = h.on, h.unbind = h.off, n.extend(t, h);
        var p = t.Model = function(e, t) {
            var r, i = e || {};
            this.cid = n.uniqueId("c"), this.attributes = {}, t && t.collection && (this.collection = t.collection), t && t.parse && (i = this.parse(i, t) || {});
            if (r = n.result(this, "defaults")) i = n.defaults({}, i, r);
            this.set(i, t), this.changed = {}, this.initialize.apply(this, arguments)
        };
        n.extend(p.prototype, h, {
            changed: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function(e) {
                return n.clone(this.attributes)
            },
            sync: function() {
                return t.sync.apply(this, arguments)
            },
            get: function(e) {
                return this.attributes[e]
            },
            escape: function(e) {
                return n.escape(this.get(e))
            },
            has: function(e) {
                return this.get(e) != null
            },
            set: function(e, t, r) {
                var i, s, o, u, a, f, l, c;
                if (e == null) return this;
                typeof e == "object" ? (s = e, r = t) : (s = {})[e] = t, r || (r = {});
                if (!this._validate(s, r)) return !1;
                o = r.unset, a = r.silent, u = [], f = this._changing, this._changing = !0, f || (this._previousAttributes = n.clone(this.attributes), this.changed = {}), c = this.attributes, l = this._previousAttributes, this.idAttribute in s && (this.id = s[this.idAttribute]);
                for (i in s) t = s[i], n.isEqual(c[i], t) || u.push(i), n.isEqual(l[i], t) ? delete this.changed[i] : this.changed[i] = t, o ? delete c[i] : c[i] = t;
                if (!a) {
                    u.length && (this._pending = !0);
                    for (var h = 0, p = u.length; h < p; h++) this.trigger("change:" + u[h], this, c[u[h]], r)
                }
                if (f) return this;
                if (!a)
                    while (this._pending) this._pending = !1, this.trigger("change", this, r);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function(e, t) {
                return this.set(e, void 0, n.extend({}, t, {
                    unset: !0
                }))
            },
            clear: function(e) {
                var t = {};
                for (var r in this.attributes) t[r] = void 0;
                return this.set(t, n.extend({}, e, {
                    unset: !0
                }))
            },
            hasChanged: function(e) {
                return e == null ? !n.isEmpty(this.changed) : n.has(this.changed, e)
            },
            changedAttributes: function(e) {
                if (!e) return this.hasChanged() ? n.clone(this.changed) : !1;
                var t, r = !1,
                    i = this._changing ? this._previousAttributes : this.attributes;
                for (var s in e) {
                    if (n.isEqual(i[s], t = e[s])) continue;
                    (r || (r = {}))[s] = t
                }
                return r
            },
            previous: function(e) {
                return e == null || !this._previousAttributes ? null : this._previousAttributes[e]
            },
            previousAttributes: function() {
                return n.clone(this._previousAttributes)
            },
            fetch: function(e) {
                e = e ? n.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
                var t = e.success;
                return e.success = function(e, n, r) {
                    if (!e.set(e.parse(n, r), r)) return !1;
                    t && t(e, n, r)
                }, this.sync("read", this, e)
            },
            save: function(e, t, r) {
                var i, s, o, u, a = this.attributes;
                return e == null || typeof e == "object" ? (i = e, r = t) : (i = {})[e] = t, i && (!r || !r.wait) && !this.set(i, r) ? !1 : (r = n.extend({
                    validate: !0
                }, r), this._validate(i, r) ? (i && r.wait && (this.attributes = n.extend({}, a, i)), r.parse === void 0 && (r.parse = !0), s = r.success, r.success = function(e, t, r) {
                    e.attributes = a;
                    var o = e.parse(t, r);
                    r.wait && (o = n.extend(i || {}, o));
                    if (n.isObject(o) && !e.set(o, r)) return !1;
                    s && s(e, t, r)
                }, o = this.isNew() ? "create" : r.patch ? "patch" : "update", o === "patch" && (r.attrs = i), u = this.sync(o, this, r), i && r.wait && (this.attributes = a), u) : !1)
            },
            destroy: function(e) {
                e = e ? n.clone(e) : {};
                var t = this,
                    r = e.success,
                    i = function() {
                        t.trigger("destroy", t, t.collection, e)
                    };
                e.success = function(e, t, n) {
                    (n.wait || e.isNew()) && i(), r && r(e, t, n)
                };
                if (this.isNew()) return e.success(this, null, e), !1;
                var s = this.sync("delete", this, e);
                return e.wait || i(), s
            },
            url: function() {
                var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || _();
                return this.isNew() ? e : e + (e.charAt(e.length - 1) === "/" ? "" : "/") + encodeURIComponent(this.id)
            },
            parse: function(e, t) {
                return e
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return this.id == null
            },
            isValid: function(e) {
                return !this.validate || !this.validate(this.attributes, e)
            },
            _validate: function(e, t) {
                if (!t.validate || !this.validate) return !0;
                e = n.extend({}, this.attributes, e);
                var r = this.validationError = this.validate(e, t) || null;
                return r ? (this.trigger("invalid", this, r, t || {}), !1) : !0
            }
        });
        var d = t.Collection = function(e, t) {
            t || (t = {}), t.model && (this.model = t.model), t.comparator !== void 0 && (this.comparator = t.comparator), this.models = [], this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({
                silent: !0
            }, t))
        };
        n.extend(d.prototype, h, {
            model: p,
            initialize: function() {},
            toJSON: function(e) {
                return this.map(function(t) {
                    return t.toJSON(e)
                })
            },
            sync: function() {
                return t.sync.apply(this, arguments)
            },
            add: function(e, t) {
                e = n.isArray(e) ? e.slice() : [e], t || (t = {});
                var r, i, s, u, f, l, c, h, p, d;
                c = [], h = t.at, p = this.comparator && h == null && t.sort != 0, d = n.isString(this.comparator) ? this.comparator : null;
                for (r = 0, i = e.length; r < i; r++) {
                    if (!(s = this._prepareModel(u = e[r], t))) {
                        this.trigger("invalid", this, u, t);
                        continue
                    }
                    if (f = this.get(s)) {
                        t.merge && (f.set(u === s ? s.attributes : u, t), p && !l && f.hasChanged(d) && (l = !0));
                        continue
                    }
                    c.push(s), s.on("all", this._onModelEvent, this), this._byId[s.cid] = s, s.id != null && (this._byId[s.id] = s)
                }
                c.length && (p && (l = !0), this.length += c.length, h != null ? a.apply(this.models, [h, 0].concat(c)) : o.apply(this.models, c)), l && this.sort({
                    silent: !0
                });
                if (t.silent) return this;
                for (r = 0, i = c.length; r < i; r++)(s = c[r]).trigger("add", s, this, t);
                return l && this.trigger("sort", this, t), this
            },
            remove: function(e, t) {
                e = n.isArray(e) ? e.slice() : [e], t || (t = {});
                var r, i, s, o;
                for (r = 0, i = e.length; r < i; r++) {
                    o = this.get(e[r]);
                    if (!o) continue;
                    delete this._byId[o.id], delete this._byId[o.cid], s = this.indexOf(o), this.models.splice(s, 1), this.length--, t.silent || (t.index = s, o.trigger("remove", o, this, t)), this._removeReference(o)
                }
                return this
            },
            push: function(e, t) {
                return e = this._prepareModel(e, t), this.add(e, n.extend({
                    at: this.length
                }, t)), e
            },
            pop: function(e) {
                var t = this.at(this.length - 1);
                return this.remove(t, e), t
            },
            unshift: function(e, t) {
                return e = this._prepareModel(e, t), this.add(e, n.extend({
                    at: 0
                }, t)), e
            },
            shift: function(e) {
                var t = this.at(0);
                return this.remove(t, e), t
            },
            slice: function(e, t) {
                return this.models.slice(e, t)
            },
            get: function(e) {
                return e == null ? void 0 : (this._idAttr || (this._idAttr = this.model.prototype.idAttribute), this._byId[e.id || e.cid || e[this._idAttr] || e])
            },
            at: function(e) {
                return this.models[e]
            },
            where: function(e) {
                return n.isEmpty(e) ? [] : this.filter(function(t) {
                    for (var n in e)
                        if (e[n] !== t.get(n)) return !1;
                    return !0
                })
            },
            sort: function(e) {
                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                return e || (e = {}), n.isString(this.comparator) || this.comparator.length === 1 ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
            },
            pluck: function(e) {
                return n.invoke(this.models, "get", e)
            },
            update: function(e, t) {
                t = n.extend({
                    add: !0,
                    merge: !0,
                    remove: !0
                }, t), t.parse && (e = this.parse(e, t));
                var r, i, s, o, u = [],
                    a = [],
                    f = {};
                n.isArray(e) || (e = e ? [e] : []);
                if (t.add && !t.remove) return this.add(e, t);
                for (i = 0, s = e.length; i < s; i++) r = e[i], o = this.get(r), t.remove && o && (f[o.cid] = !0), (t.add && !o || t.merge && o) && u.push(r);
                if (t.remove)
                    for (i = 0, s = this.models.length; i < s; i++) r = this.models[i], f[r.cid] || a.push(r);
                return a.length && this.remove(a, t), u.length && this.add(u, t), this
            },
            reset: function(e, t) {
                t || (t = {}), t.parse && (e = this.parse(e, t));
                for (var r = 0, i = this.models.length; r < i; r++) this._removeReference(this.models[r]);
                return t.previousModels = this.models.slice(), this._reset(), e && this.add(e, n.extend({
                    silent: !0
                }, t)), t.silent || this.trigger("reset", this, t), this
            },
            fetch: function(e) {
                e = e ? n.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
                var t = e.success;
                return e.success = function(e, n, r) {
                    var i = r.update ? "update" : "reset";
                    e[i](n, r), t && t(e, n, r)
                }, this.sync("read", this, e)
            },
            create: function(e, t) {
                t = t ? n.clone(t) : {};
                if (!(e = this._prepareModel(e, t))) return !1;
                t.wait || this.add(e, t);
                var r = this,
                    i = t.success;
                return t.success = function(e, t, n) {
                    n.wait && r.add(e, n), i && i(e, t, n)
                }, e.save(null, t), e
            },
            parse: function(e, t) {
                return e
            },
            clone: function() {
                return new this.constructor(this.models)
            },
            _reset: function() {
                this.length = 0, this.models.length = 0, this._byId = {}
            },
            _prepareModel: function(e, t) {
                if (e instanceof p) return e.collection || (e.collection = this), e;
                t || (t = {}), t.collection = this;
                var n = new this.model(e, t);
                return n._validate(e, t) ? n : !1
            },
            _removeReference: function(e) {
                this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(e, t, n, r) {
                if ((e === "add" || e === "remove") && n !== this) return;
                e === "destroy" && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], t.id != null && (this._byId[t.id] = t)), this.trigger.apply(this, arguments)
            },
            sortedIndex: function(e, t, r) {
                t || (t = this.comparator);
                var i = n.isFunction(t) ? t : function(e) {
                    return e.get(t)
                };
                return n.sortedIndex(this.models, e, i, r)
            }
        });
        var v = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
        n.each(v, function(e) {
            d.prototype[e] = function() {
                var t = u.call(arguments);
                return t.unshift(this.models), n[e].apply(n, t)
            }
        });
        var m = ["groupBy", "countBy", "sortBy"];
        n.each(m, function(e) {
            d.prototype[e] = function(t, r) {
                var i = n.isFunction(t) ? t : function(e) {
                    return e.get(t)
                };
                return n[e](this.models, i, r)
            }
        });
        var g = t.Router = function(e) {
                e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            y = /\((.*?)\)/g,
            b = /(\(\?)?:\w+/g,
            w = /\*\w+/g,
            E = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        n.extend(g.prototype, h, {
            initialize: function() {},
            route: function(e, r, i) {
                return n.isRegExp(e) || (e = this._routeToRegExp(e)), i || (i = this[r]), t.history.route(e, n.bind(function(n) {
                    var s = this._extractParameters(e, n);
                    i && i.apply(this, s), this.trigger.apply(this, ["route:" + r].concat(s)), this.trigger("route", r, s), t.history.trigger("route", this, r, s)
                }, this)), this
            },
            navigate: function(e, n) {
                return t.history.navigate(e, n), this
            },
            _bindRoutes: function() {
                if (!this.routes) return;
                var e, t = n.keys(this.routes);
                while ((e = t.pop()) != null) this.route(e, this.routes[e])
            },
            _routeToRegExp: function(e) {
                return e = e.replace(E, "\\$&").replace(y, "(?:$1)?").replace(b, function(e, t) {
                    return t ? e : "([^/]+)"
                }).replace(w, "(.*?)"), new RegExp("^" + e + "$")
            },
            _extractParameters: function(e, t) {
                return e.exec(t).slice(1)
            }
        });
        var S = t.History = function() {
                this.handlers = [], n.bindAll(this, "checkUrl"), typeof window != "undefined" && (this.location = window.location, this.history = window.history)
            },
            x = /^[#\/]|\s+$/g,
            T = /^\/+|\/+$/g,
            N = /msie [\w.]+/,
            C = /\/$/;
        S.started = !1, n.extend(S.prototype, h, {
            interval: 50,
            getHash: function(e) {
                var t = (e || this).location.href.match(/#(.*)$/);
                return t ? t[1] : ""
            },
            getFragment: function(e, t) {
                if (e == null)
                    if (this._hasPushState || !this._wantsHashChange || t) {
                        e = this.location.pathname;
                        var n = this.root.replace(C, "");
                        e.indexOf(n) || (e = e.substr(n.length))
                    } else e = this.getHash();
                return e.replace(x, "")
            },
            start: function(e) {
                if (S.started) throw new Error("Backbone.history has already been started");
                S.started = !0, this.options = n.extend({}, {
                    root: "/"
                }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                var r = this.getFragment(),
                    i = document.documentMode,
                    s = N.exec(navigator.userAgent.toLowerCase()) && (!i || i <= 7);
                this.root = ("/" + this.root + "/").replace(T, "/"), s && this._wantsHashChange && (this.iframe = t.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(r)), this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !s ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = r;
                var o = this.location,
                    u = o.pathname.replace(/[^\/]$/, "$&/") === this.root;
                if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !u) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
                this._wantsPushState && this._hasPushState && u && o.hash && (this.fragment = this.getHash().replace(x, ""), this.history.replaceState({}, document.title, this.root + this.fragment + o.search));
                if (!this.options.silent) return this.loadUrl()
            },
            stop: function() {
                t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), S.started = !1
            },
            route: function(e, t) {
                this.handlers.unshift({
                    route: e,
                    callback: t
                })
            },
            checkUrl: function(e) {
                var t = this.getFragment();
                t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
                if (t === this.fragment) return !1;
                this.iframe && this.navigate(t), this.loadUrl() || this.loadUrl(this.getHash())
            },
            loadUrl: function(e) {
                var t = this.fragment = this.getFragment(e),
                    r = n.any(this.handlers, function(e) {
                        if (e.route.test(t)) return e.callback(t), !0
                    });
                return r
            },
            navigate: function(e, t) {
                if (!S.started) return !1;
                if (!t || t === !0) t = {
                    trigger: t
                };
                e = this.getFragment(e || "");
                if (this.fragment === e) return;
                this.fragment = e;
                var n = this.root + e;
                if (this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
                else {
                    if (!this._wantsHashChange) return this.location.assign(n);
                    this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                }
                t.trigger && this.loadUrl(e)
            },
            _updateHash: function(e, t, n) {
                if (n) {
                    var r = e.href.replace(/(javascript:|#).*$/, "");
                    e.replace(r + "#" + t)
                } else e.hash = "#" + t
            }
        }), t.history = new S;
        var k = t.View = function(e) {
                this.cid = n.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
            },
            L = /^(\S+)\s*(.*)$/,
            A = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        n.extend(k.prototype, h, {
            tagName: "div",
            $: function(e) {
                return this.$el.find(e)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this.$el.remove(), this.stopListening(), this
            },
            setElement: function(e, n) {
                return this.$el && this.undelegateEvents(), this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this
            },
            delegateEvents: function(e) {
                if (!e && !(e = n.result(this, "events"))) return;
                this.undelegateEvents();
                for (var t in e) {
                    var r = e[t];
                    n.isFunction(r) || (r = this[e[t]]);
                    if (!r) throw new Error('Method "' + e[t] + '" does not exist');
                    var i = t.match(L),
                        s = i[1],
                        o = i[2];
                    r = n.bind(r, this), s += ".delegateEvents" + this.cid, o === "" ? this.$el.on(s, r) : this.$el.on(s, o, r)
                }
            },
            undelegateEvents: function() {
                this.$el.off(".delegateEvents" + this.cid)
            },
            _configure: function(e) {
                this.options && (e = n.extend({}, n.result(this, "options"), e)), n.extend(this, n.pick(e, A)), this.options = e
            },
            _ensureElement: function() {
                if (!this.el) {
                    var e = n.extend({}, n.result(this, "attributes"));
                    this.id && (e.id = n.result(this, "id")), this.className && (e["class"] = n.result(this, "className"));
                    var r = t.$("<" + n.result(this, "tagName") + ">").attr(e);
                    this.setElement(r, !1)
                } else this.setElement(n.result(this, "el"), !1)
            }
        });
        var O = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            "delete": "DELETE",
            read: "GET"
        };
        t.sync = function(e, r, i) {
            var s = O[e];
            n.defaults(i || (i = {}), {
                emulateHTTP: t.emulateHTTP,
                emulateJSON: t.emulateJSON
            });
            var o = {
                type: s,
                dataType: "json"
            };
            i.url || (o.url = n.result(r, "url") || _()), i.data == null && r && (e === "create" || e === "update" || e === "patch") && (o.contentType = "application/json", o.data = JSON.stringify(i.attrs || r.toJSON(i))), i.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", o.data = o.data ? {
                model: o.data
            } : {});
            if (i.emulateHTTP && (s === "PUT" || s === "DELETE" || s === "PATCH")) {
                o.type = "POST", i.emulateJSON && (o.data._method = s);
                var u = i.beforeSend;
                i.beforeSend = function(e) {
                    e.setRequestHeader("X-HTTP-Method-Override", s);
                    if (u) return u.apply(this, arguments)
                }
            }
            o.type !== "GET" && !i.emulateJSON && (o.processData = !1);
            var a = i.success;
            i.success = function(e) {
                a && a(r, e, i), r.trigger("sync", r, e, i)
            };
            var f = i.error;
            i.error = function(e) {
                f && f(r, e, i), r.trigger("error", r, e, i)
            };
            var l = i.xhr = t.ajax(n.extend(o, i));
            return r.trigger("request", r, l, i), l
        }, t.ajax = function() {
            return t.$.ajax.apply(t.$, arguments)
        };
        var M = function(e, t) {
            var r = this,
                i;
            e && n.has(e, "constructor") ? i = e.constructor : i = function() {
                return r.apply(this, arguments)
            }, n.extend(i, r, t);
            var s = function() {
                this.constructor = i
            };
            return s.prototype = r.prototype, i.prototype = new s, e && n.extend(i.prototype, e), i.__super__ = r.prototype, i
        };
        p.extend = d.extend = g.extend = k.extend = S.extend = M;
        var _ = function() {
            throw new Error('A "url" property or function must be specified')
        };
        return t
    }), define("models/location", ["underscore", "backbone"], function(e, t) {
        var n = t.Model.extend({
            idAttribute: "country_code",
            initialize: function() {
                this.sterlingRate = window.GRL.constants.STERLING_RATE
            },
            inPennies: function(e) {
                var t = this.get("exchange_rate"),
                    n = this.sterlingRate,
                    r = e / t,
                    i = n * r;
                return typeof Raven != "undefined" && isNaN(i) && Raven.captureMessage("NaN Donation", {
                    tags: {
                        location_name: this.get("name"),
                        exchange_rate: t
                    }
                }), Math.round(i * 100)
            },
            inPPP: function(e) {
                var t = this.get("ppp_rate"),
                    n = 1 / t * e;
                return n
            }
        });
        return n
    }), define("collections/locations", ["underscore", "backbone", "models/location"], function(e, t, n) {
        var r = t.Collection.extend({
            model: n,
            initialize: function() {
                var e = window.GRL.locations;
                this.reset(e)
            }
        });
        return new r
    }), define("utils", [], function() {
        var e = {
            getDonationURL: function(e, t) {
                if (undefined in [e, t]) throw "Vars missing for charity URL";
                if (undefined in [window.GRL.constants.BI_APP_ID, window.GRL.constants.CHARITY_ID, window.GRL.constants.DONATE_URL]) throw "Vars missing for charity URL";
                var n = window.GRL.constants.DONATE_URL,
                    r = ["amount=" + e];
                return n += "?" + r.join("&"), n
            },
            isCanvasPolyfill: function(e) {
                var t = !!e.getContext,
                    n = !!document.createElement("canvas").getContext,
                    r = !1;
                return !n && t && (r = !0), r
            },
            scrollTo: function(e, t) {
                var n = Math.floor(e.offset().top),
                    r = {
                        easing: "swing",
                        duration: 600,
                        complete: $.noop,
                        step: $.noop
                    };
                "function" == typeof t && (r.complete = t), $("html, body").stop().animate({
                    scrollTop: n
                }, r)
            }
        };
        return e
    }), define("models/user", ["underscore", "backbone", "collections/locations", "utils"], function(e, t, n, r) {
        function i(e, t) {
            return e * Math.pow(10, t)
        }
        var s = function(t) {
                function r(e) {
                    var t = n[e];
                    return {
                        k1: i(t[0], t[1]),
                        k2: t[2]
                    }
                }
                var n = [
                    [1.11, 11, .6819],
                    [8.12, 10, .6518],
                    [2.93, 9, .4678],
                    [4.83, 17, 1.4809],
                    [1.26, 24, 2.1947],
                    [8.11, 65, 6.6294]
                ];
                return t < 2e3 ? r(5) : t > 2e3 && t < 85e3 ? r(4) : t > 85e3 && t < 6e5 ? r(3) : t > 6e5 && t < 1e6 ? r(2) : t > 1e6 && t < 1e9 ? r(1) : r(0)
            },
            o = function(t) {
                var n;
                return t <= 12e3 ? n = {
                    k1: i(1.15, 20),
                    k2: 1.788
                } : t > 12001 && t <= 72364 ? n = {
                    k1: 25332900,
                    k2: .372
                } : t > 72365 && t <= 2512e3 ? n = {
                    k1: 1299504e6,
                    k2: 1.061
                } : t > 2512001 && t < 89645246 ? n = {
                    k1: 92e7,
                    k2: .478
                } : t > 89645247 && (n = {
                    k1: 288e7,
                    k2: .718
                }), n
            },
            u = t.Model.extend({
                defaults: {
                    country_code: "GBR",
                    income: 0,
                    wealth_1: 0,
                    wealth_2: 0,
                    wealth_3: 0
                },
                schema: {
                    income: {
                        filters: ["integer"]
                    },
                    wealth_1: {
                        filters: ["integer"]
                    },
                    wealth_2: {
                        filters: ["integer"]
                    },
                    wealth_3: {
                        filters: ["integer"]
                    },
                    user_location: {
                        filters: ["fk"],
                        collection: n
                    }
                },
                initialize: function() {
                    var e = this;
                    this.on("change:wealth", this.updateValues), this.on("change:income", this.updateValues), this.on("change:country_code", this.updateValues)
                },
                updateValues: function() {},
                convertToLocal: function(e) {
                    var t = this.get("user_location").get("ppp_rate"),
                        n = t * e;
                    return n
                },
                needsCurrencyConversion: function() {
                    return "GBR" === this.get("user_location").get("country_code") ? !1 : !0
                },
                set: function(e, n) {
                    var r = "set__" + e;
                    return "function" == typeof this[r] ? this[r](n) : t.Model.prototype.set.call(this, e, n)
                },
                set__country_code: function(e) {
                    return t.Model.prototype.set.call(this, "country_code", e), n.get(this.get("country_code"))
                },
                get: function(e) {
                    var n = "get__" + e;
                    return "function" == typeof this[n] ? this[n]() : t.Model.prototype.get.call(this, e)
                },
                get__user_location: function() {
                    return n.get(this.get("country_code"))
                },
                get__wealth: function() {
                    var e = this.get("wealth_1") + this.get("wealth_2") + this.get("wealth_3");
                    if ("number" == typeof e) return e;
                    throw "Cannot total wealth"
                },
                get__ppp_wealth: function() {
                    var e = this.get("user_location").get("ppp_rate"),
                        t = this.get("wealth"),
                        n = 1 / e * t;
                    return n
                },
                get__ppp_income: function() {
                    var e = this.get("user_location").get("ppp_rate"),
                        t = this.get("income"),
                        n = 1 / e * t;
                    return n
                },
                get__rank_wealth: function() {
                    var e = s(this.get("ppp_wealth")),
                        t = this.get("ppp_wealth"),
                        n = Math.pow(e.k1 / t, 1 / e.k2);
                    return n = n > window.GRL.constants.GLOBAL_ADULT_POPULATION ? window.GRL.constants.GLOBAL_ADULT_POPULATION : n, parseInt(n, 10)
                },
                get__rank_income: function() {
                    var e = o(this.get("ppp_income")),
                        t = this.get("ppp_income"),
                        n = Math.pow(e.k1 / t, 1 / e.k2);
                    return n = n > window.GRL.constants.GLOBAL_POPULATION ? window.GRL.constants.GLOBAL_POPULATION : n, parseInt(n, 10)
                },
                get__percent_wealth: function() {
                    var e = this.get("rank_wealth"),
                        t = 100 * e / window.GRL.constants.GLOBAL_ADULT_POPULATION;
                    return t < 1e-4 ? 1e-4 : t
                },
                get__percent_income: function() {
                    var e = this.get("rank_income"),
                        t = 100 * e / window.GRL.constants.GLOBAL_POPULATION;
                    return t < 1e-4 ? 1e-4 : t
                },
                get__rank_wealth_l: function() {
                    return this.get("rank_wealth").toLocaleString()
                },
                get__hourly_income_ppp: function() {
                    var e = this.get("ppp_income"),
                        t = e / window.GRL.constants.HOURS_WORKED_PER_YEAR;
                    return t
                },
                get__hourly_income: function() {
                    var e = this.get("income"),
                        t = e / window.GRL.constants.HOURS_WORKED_PER_YEAR;
                    return t
                },
                get__donation_pennies: function() {
                    var e = this.get("user_location").inPennies(this.get("suggested_donation", 0));
                    return e
                },
                get__suggested_donation: function() {
                    var e = this.get("income"),
                        t = this.get("wealth"),
                        n = window.GRL.constants.SUGGESTED_DONATION / 100,
                        r = 0;
                    return e > t ? r = this.get("hourly_income") : r = this.get("wealth") * n, r
                }
            });
        return new u
    }), define("lib/base64", [], function() {
        var e = function(t) {
            var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                r, i, s, o, u, a, f, l, c = 0,
                h = 0,
                p = "",
                d = [];
            if (!t) return t;
            do r = t.charCodeAt(c++), i = t.charCodeAt(c++), s = t.charCodeAt(c++), l = r << 16 | i << 8 | s, o = l >> 18 & 63, u = l >> 12 & 63, a = l >> 6 & 63, f = l & 63, d[h++] = n.charAt(o) + n.charAt(u) + n.charAt(a) + n.charAt(f); while (c < t.length);
            p = d.join("");
            var v = t.length % 3;
            return (v ? p.slice(0, v - 3) : p) + "===".slice(v || 3)
        };
        return e
    }), define("views/panel-view", ["jquery", "underscore", "backbone", "models/user", "utils", "lib/base64"], function(e, t, n, r, i, s) {
        var o = n.View.extend({
            inview: !1,
            model: r,
            index: 0,
            events: {
                "click a.next": "nextPanel",
                "click a.facebook": "share",
                "click a.googleplus": "share",
                "click a.tumblr": "share",
                "click a.twitter": "shareTwitter",
                "click .donate": "donateLink",
                "click .charity-open, .charity-tooltip": "charityTooltip"
            },
            extraPadding: 0,
            initialize: function() {
                t.bindAll(this, "setPanelHeight", "share"), this.index = this.$el.index(), window.GRL.is_mobile_vp ? this.positionPanel() : (this.$innerEl = this.$(".panel-inner, .header-inner"), this.originalHeight = this.$el.height(), this.originalContentsHeight = this.$innerEl.outerHeight(), this.originalPaddingTop = this.$innerEl.css("padding-top"), this.originalPaddingBottom = this.$innerEl.css("padding-bottom"), this.bottomPaddingOffset = this.$el.data("bottom-padding-offset") || 0, this.setPanelHeight(), e(window).on("resize", this.setPanelHeight), this.on("render", this.setPanelHeight, this)), this.route = window.location.pathname === "/" ? "income" : window.location.pathname, this.route = this.route.replace("/", ""), this.on("view:on", this.trackPanelView, this)
            },
            trackPanelView: function() {
                var e = this.$el.data("view");
                window._gaq = window._gaq || [], window._gaq.push(["_trackPageview", this.route + "/" + e]), this.off("view:on", this.trackPanelView)
            },
            charityTooltip: function(e) {
                this.$(".charity-container").toggleClass("active")
            },
            nextPanel: function(t) {
                t.preventDefault(), e(window).trigger("nextpanel", this.index + 1)
            },
            setPanelHeight: function() {
                var t = e(window).height(),
                    n = 0,
                    r = 0,
                    i = 0;
                t > this.originalHeight ? (n = t - this.originalContentsHeight, r = n / 2, i = this.originalContentsHeight - this.bottomPaddingOffset, this.$innerEl.css({
                    height: i + "px",
                    "padding-top": r + "px",
                    "padding-bottom": r + "px"
                })) : this.$innerEl.css({
                    height: "auto",
                    "padding-top": this.originalPaddingTop,
                    "padding-bottom": this.originalPaddingBottom
                }), this.positionPanel(), e("body").removeClass("preload")
            },
            positionPanel: function() {
                var t = e(window).height();
                window.GRL.is_mobile_vp || t < 600 ? this.offsetTop = this.$el.offset().top + .5 * this.$el.height() : this.offsetTop = this.index * t + .5 * t
            },
            topDist: function(e) {
                var t = this.offsetTop - e.scrollTop();
                return t
            },
            scrollTo: function(e) {
                i.scrollTo(this.$el, e)
            },
            in_view: function() {
                this.inview = !0, this.$el.addClass("inview"), this.trigger("view:on"), e(window).trigger("panel:inview")
            },
            off_view: function() {
                this.inview = !1, this.$el.removeClass("inview"), this.trigger("view:off")
            },
            localise: function(e, t) {
                var n = this.model.get("user_location"),
                    r = n.get("ppp_rate"),
                    i = r * e;
                return t ? n.get("symbol") + i.toFixed(2) : i.toFixed(2)
            },
            ordinalSuffix: function(e) {
                var t = e % 100;
                return t === 11 || t === 12 || t === 13 ? "th" : (t %= 10, t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th")
            },
            donateLink: function(e) {
                var t = this.model.get("percent_income"),
                    n = this.model.get("percent_wealth"),
                    r = Math.min(t, n),
                    s = "I???ve just found out that I???m in the top " + r.toFixed(3) + "% richest people in the world.",
                    o = this.model.get("donation_pennies") / 100,
                    u = i.getDonationURL(o, s);
                e.preventDefault(), window._gaq = window._gaq || [], window._gaq.push(["_trackPageview", this.route + "/Make Donation"]), window.location.href = u
            },
            getCardUrl: function(e, t, n) {
                t = t || 0;
                var r = "/redirect/";
                return r += e + "/", r += t + "/", r += this.encodeNumber(n), r
            },
            replaceTweetLink: function(e, t) {
                t += "/?text=" + encodeURIComponent(e), this.$el.find(".twitter").attr("href", t)
            },
            shareTwitter: function(t) {
                t.preventDefault(), window._gaq = window._gaq || [], window._gaq.push(["_trackEvent", "Share", "Twitter"]), window.open(e(t.target).attr("href"), "_blank", "width=500,height=400,status=no,location=no")
            },
            encodeNumber: function(e) {
                var t = Math.round(e * 100, 10),
                    n = s(t.toString());
                return n
            },
            get_image_url: function(e, t, n, r) {
                var i = n || "med",
                    s = this.encodeNumber(t),
                    o = r || 0,
                    u = window.location.protocol + "//" + window.location.host,
                    a = u + "/share/" + e + "/" + i + "/" + o + "/";
                return a += s + ".png", a
            },
            share: function(e, t, n) {
                window._gaq = window._gaq || [], window._gaq.push(["_trackEvent", "Share", e]);
                var r = window.location.protocol + "//" + window.location.host,
                    i = window.location.protocol + "//" + window.location.host + "/close/",
                    s = window.GRL.staticURL + "img/sharecoin.png";
                if (n) {
                    var o = n.number || this.model.get("percent_" + this.route),
                        u = n.location_id || null,
                        a = this.get_image_url(n.panel, o, "lg", u),
                        f = this.get_image_url(n.panel, o, "med", u);
                    s = this.get_image_url(n.panel, o, "sm", u)
                }
                if (e === "facebook") {
                    var l = {
                        method: "feed",
                        redirect_uri: i,
                        link: r,
                        picture: s,
                        name: t,
                        caption: "www.globalrichlist.com",
                        description: "Didn???t make it onto the yearly roll call of the mega-wealthy? Now???s your chance to find out where you actually sit in comparison to the rest of the world."
                    };
                    FB.ui(l, function(t) {
                        window._gaq = window._gaq || [], window._gaq.push(["_trackEvent", "Share", "FB Success"])
                    })
                } else e === "googleplus" ? window.open("https://plus.google.com/share?url=" + encodeURIComponent(r), "_blank", "width=500,height=400,status=no,location=no") : e === "tumblr" && (a ? window.open("http://www.tumblr.com/share/photo?source=" + encodeURIComponent(a) + "&caption=" + encodeURIComponent('Find out your Global Richlist results <a href="http://globalrichlist.com">here</a>') + "&clickthru=" + encodeURIComponent(r), "_blank", "width=500,height=400,status=no,location=no") : window.open("http://www.tumblr.com/share/link?url=" + encodeURIComponent(r) + "&name=" + encodeURIComponent("Global Rich List") + "&description=" + encodeURIComponent(t), "_blank", "width=500,height=400,status=no,location=no"))
            }
        });
        return o
    }), define("views/home-view", ["jquery", "underscore", "backbone", "views/panel-view", "models/user", "collections/locations", "utils"], function(e, t, n, r, i, s, o) {
        var u = n.View.extend({
            childViews: [],
            time_on_site: 0,
            panel_in_view: null,
            events: {
                "click .find-out-more": "activateFooter"
            },
            initialize: function() {
                var n = this;
                n.$window = e(window), this.$el = this.options.$el, this.decidePlatform(), e("html").removeClass("no-js").addClass("js"), t.bindAll(this, "createPanelView", "updateInView", "unlockFirst", "lockToFirst", "backToTop", "activateFooter", "deactivateFooter"), this.$(".panel").each(this.createPanelView), n.$window.on("scroll", this.updateInView), n.$window.on("nextpanel", function(e, t) {
                    t < n.childViews.length && n.childViews[t].scrollTo()
                }), n.$window.on("unlockfirst", this.unlockFirst), n.$window.on("lockfirst", this.lockToFirst), n.$window.on("resize", this.setFooterMinHeight), e(".back-to-results").on("click", this.deactivateFooter), e(".prev").on("click", this.backToTop), n.$window.on("keypress", function(t) {
                    var r = n.findInView();
                    try {
                        t.charCode === 106 ? (n.childViews[r.index + 1].scrollTo(), t.preventDefault()) : t.charCode === 107 ? (n.childViews[r.index - 1].scrollTo(), t.preventDefault()) : t.charCode === 105 && (r.index !== 0 && n.childViews[0].scrollTo(), e('form input[type="number"]:first').focus(), t.preventDefault())
                    } catch (i) {}
                }), this.lockToFirst(), this.updateInView(), FB.init({
                    appId: window.GRL.constants.FB_APP_ID,
                    status: !0,
                    cookie: !0
                })
            },
            decidePlatform: function() {
                var e = this,
                    t = 768;
                e.$window.on("resize", function() {
                        e.$window.width() >= t && window.GRL.is_mobile_vp ? (window.GRL.is_mobile_vp = !1, e.$window.trigger("resizeWindow", "d")) : e.$window.width() < t && !window.GRL.is_mobile_vp && (window.GRL.is_mobile_vp = !0, e.$window.trigger("resizeWindow", "m"))
                    }), e.$window.width() >= t ? window.GRL.is_mobile_vp = !1 : window.GRL.is_mobile_vp = !0,
                    function() {
                        var e = [],
                            t, n;
                        if (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i)) e = navigator.userAgent.match(/CPU.+(([0-9])_[0-9]_[0-9])/i), e && e.length > 1 && (n = parseInt(e[2], 10), n < 6 && (window.suppress_extra_animation = !0))
                    }()
            },
            activateFooter: function() {
                var t = this;
                this.distanceToFooter = e(".footer-container").offset().top, e("body").addClass("show-footer"), this.setFooterMinHeight(), this.gotoFooter(function() {
                    e("body").addClass("showing-footer").end().scrollTop(0), window._gaq = window._gaq || [], window._gaq.push(["_trackPageview", window.location.path + "/ More Info (Footer)"])
                })
            },
            setFooterMinHeight: function() {
                var t = e(".footer-container .footer-inner"),
                    n = function() {
                        return e(window).height() - e(".copyright").outerHeight() - e(".back-to-results").outerHeight() - parseInt(t.css("padding-top"), 10) - parseInt(t.css("padding-bottom"), 10)
                    };
                t.css({
                    "min-height": n() + "px"
                })
            },
            deactivateFooter: function(t) {
                var n = this,
                    r = e(window).height(),
                    i = {
                        easing: "swing",
                        duration: 600,
                        complete: function() {
                            e("body").removeClass("show-footer")
                        },
                        step: e.noop
                    };
                t.preventDefault(), e("body").removeClass("showing-footer").end().scrollTop(this.distanceToFooter + r), setTimeout(function() {
                    e("html, body").animate({
                        scrollTop: n.distanceToFooter
                    }, i)
                }, 300)
            },
            gotoFooter: function(t) {
                o.scrollTo(e(".footer-container"), t)
            },
            backToTop: function(t) {
                o.scrollTo(e("#panel-0"), t)
            },
            lockToFirst: function() {
                e(document.body).addClass("locked"), e(window).scrollTop(0)
            },
            unlockFirst: function() {
                e(document.body).removeClass("locked"), o.scrollTo(e("#panel-1")), this.childViews[1].trigger("view:on")
            },
            createPanelView: function(t, n) {
                var i = e(n).data("view"),
                    s = {
                        el: n
                    },
                    o;
                i && this.panelViews.hasOwnProperty(i) ? o = new this.panelViews[i](s) : o = new r(s), this.childViews.push(o)
            },
            updateInView: function() {
                var e = this,
                    t = e.findInView();
                e.panel_in_view !== t && (e.panel_in_view && e.panel_in_view.off_view(), e.panel_in_view = t, e.panel_in_view && e.panel_in_view.in_view())
            },
            findInView: function() {
                var e = this,
                    n = t(e.childViews).sort(function(t, n) {
                        return t.topDist(e.$window) - n.topDist(e.$window)
                    });
                return n = t(n).filter(function(t) {
                    return t.topDist(e.$window) > 0
                }), n[0]
            }
        });
        return u
    }), define("models/comparable", ["underscore", "backbone", "collections/locations"], function(e, t, n) {
        var r = t.Model.extend({
            defaults: {},
            initialize: function() {},
            get: function(e) {
                var n = "get__" + e;
                return "function" == typeof this[n] ? this[n]() : t.Model.prototype.get.call(this, e)
            },
            get__annual: function() {
                return this.get("unit_cost")
            },
            get__monthly: function() {
                return this.get("annual") / 12
            },
            get__hourly: function() {
                return this.get("annual") / window.GRL.constants.HOURS_WORKED_PER_YEAR
            }
        });
        return r
    }), define("collections/comparables", ["underscore", "backbone", "models/comparable"], function(e, t, n) {
        var r = t.Collection.extend({
            model: n,
            initialize: function() {
                var e = window.GRL.comparables;
                this.reset(e)
            },
            iNeedA: function(e) {
                var t = this.where({
                    category: e
                });
                if (!t.length) throw "No comparable found for this type (" + e + ")";
                return t[Math.floor(Math.random() * t.length)]
            }
        });
        return new r
    }), define("lib/TweenLite", ["jquery"], function(e) {
        return function(e) {
            var t = e.GreenSockGlobals || e,
                n = function(e) {
                    var n = e.split("."),
                        r = t,
                        i;
                    for (i = 0; i < n.length; i++) r[n[i]] = r = r[n[i]] || {};
                    return r
                },
                r = n("com.greensock"),
                i, s, o, u, a = {},
                f = function(r, i, s, o) {
                    this.sc = a[r] ? a[r].sc : [], a[r] = this, this.gsClass = null, this.func = s;
                    var u = [];
                    this.check = function(l) {
                        var c = i.length,
                            h = c,
                            p, d, v, m;
                        while (--c > -1)(p = a[i[c]] || new f(i[c], [])).gsClass ? (u[c] = p.gsClass, h--) : l && p.sc.push(this);
                        if (h === 0 && s) {
                            d = ("com.greensock." + r).split("."), v = d.pop(), m = n(d.join("."))[v] = this.gsClass = s.apply(s, u), o && (t[v] = m, typeof define == "function" && define.amd ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + r.split(".").join("/"), [], function() {
                                return m
                            }) : typeof module != "undefined" && module.exports && (module.exports = m));
                            for (c = 0; c < this.sc.length; c++) this.sc[c].check()
                        }
                    }, this.check(!0)
                },
                l = e._gsDefine = function(e, t, n, r) {
                    return new f(e, t, n, r)
                },
                c = r._class = function(e, t, n) {
                    return t = t || function() {}, l(e, [], function() {
                        return t
                    }, n), t
                },
                h = [0, 0, 1, 1],
                p = [],
                d = c("easing.Ease", function(e, t, n, r) {
                    this._func = e, this._type = n || 0, this._power = r || 0, this._params = t ? h.concat(t) : h
                }, !0),
                v = d.map = {},
                m = d.register = function(e, t, n, i) {
                    var s = t.split(","),
                        o = s.length,
                        u = (n || "easeIn,easeOut,easeInOut").split(","),
                        a, f, l, h;
                    while (--o > -1) {
                        f = s[o], a = i ? c("easing." + f, null, !0) : r.easing[f] || {}, l = u.length;
                        while (--l > -1) h = u[l], v[f + "." + h] = v[h + f] = a[h] = e.getRatio ? e : e[h] || new e
                    }
                };
            o = d.prototype, o._calcEnd = !1, o.getRatio = function(e) {
                if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                var t = this._type,
                    n = this._power,
                    r = t === 1 ? 1 - e : t === 2 ? e : e < .5 ? e * 2 : (1 - e) * 2;
                return n === 1 ? r *= r : n === 2 ? r *= r * r : n === 3 ? r *= r * r * r : n === 4 && (r *= r * r * r * r), t === 1 ? 1 - r : t === 2 ? r : e < .5 ? r / 2 : 1 - r / 2
            }, i = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], s = i.length;
            while (--s > -1) o = i[s] + ",Power" + s, m(new d(null, null, 1, s), o, "easeOut", !0), m(new d(null, null, 2, s), o, "easeIn" + (s === 0 ? ",easeNone" : "")), m(new d(null, null, 3, s), o, "easeInOut");
            v.linear = r.easing.Linear.easeIn, v.swing = r.easing.Quad.easeInOut;
            var g = c("events.EventDispatcher", function(e) {
                this._listeners = {}, this._eventTarget = e || this
            });
            o = g.prototype, o.addEventListener = function(e, t, n, r, i) {
                i = i || 0;
                var s = this._listeners[e],
                    o = 0,
                    u, a;
                s == null && (this._listeners[e] = s = []), a = s.length;
                while (--a > -1) u = s[a], u.c === t ? s.splice(a, 1) : o === 0 && u.pr < i && (o = a + 1);
                s.splice(o, 0, {
                    c: t,
                    s: n,
                    up: r,
                    pr: i
                })
            }, o.removeEventListener = function(e, t) {
                var n = this._listeners[e],
                    r;
                if (n) {
                    r = n.length;
                    while (--r > -1)
                        if (n[r].c === t) {
                            n.splice(r, 1);
                            return
                        }
                }
            }, o.dispatchEvent = function(e) {
                var t = this._listeners[e];
                if (t) {
                    var n = t.length,
                        r = this._eventTarget,
                        i;
                    while (--n > -1) i = t[n], i.up ? i.c.call(i.s || r, {
                        type: e,
                        target: r
                    }) : i.c.call(i.s || r)
                }
            };
            var y = e.requestAnimationFrame,
                b = e.cancelAnimationFrame,
                w = Date.now || function() {
                    return (new Date).getTime()
                };
            i = ["ms", "moz", "webkit", "o"], s = i.length;
            while (--s > -1 && !y) y = e[i[s] + "RequestAnimationFrame"], b = e[i[s] + "CancelAnimationFrame"] || e[i[s] + "CancelRequestAnimationFrame"];
            c("Ticker", function(t, n) {
                var r = this,
                    i = w(),
                    s = n !== !1 && y,
                    o, u, a, f, l, c = function() {
                        if (a == null) return;
                        !s || !b ? e.clearTimeout(a) : b(a), a = null
                    },
                    h = function(e) {
                        r.time = (w() - i) / 1e3;
                        if (!o || r.time >= l || e === !0) r.frame++, l = r.time > l ? r.time + f - (r.time - l) : r.time + f - .001, l < r.time + .001 && (l = r.time + .001), r.dispatchEvent("tick");
                        e !== !0 && (a = u(h))
                    };
                g.call(r), this.time = this.frame = 0, this.tick = function() {
                    h(!0)
                }, this.fps = function(e) {
                    if (!arguments.length) return o;
                    o = e, f = 1 / (o || 60), l = this.time + f, u = o === 0 ? function() {} : !s || !y ? function(e) {
                        return setTimeout(e, (l - r.time) * 1e3 + 1 >> 0 || 1)
                    } : y, c(), a = u(h)
                }, this.useRAF = function(e) {
                    if (!arguments.length) return s;
                    c(), s = e, r.fps(o)
                }, r.fps(t), setTimeout(function() {
                    s && !a && r.useRAF(!1)
                }, 1e3)
            }), o = r.Ticker.prototype = new r.events.EventDispatcher, o.constructor = r.Ticker;
            var E = c("core.Animation", function(e, t) {
                    this.vars = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(this.vars.delay) || 0, this._timeScale = 1, this._active = this.vars.immediateRender === !0, this.data = this.vars.data, this._reversed = this.vars.reversed === !0;
                    if (!P) return;
                    u || (S.tick(), u = !0);
                    var n = this.vars.useFrames ? D : P;
                    n.add(this, n._time), this.vars.paused && this.paused(!0)
                }),
                S = E.ticker = new r.Ticker;
            o = E.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1, o.play = function(e, t) {
                return arguments.length && this.seek(e, t), this.reversed(!1), this.paused(!1)
            }, o.pause = function(e, t) {
                return arguments.length && this.seek(e, t), this.paused(!0)
            }, o.resume = function(e, t) {
                return arguments.length && this.seek(e, t), this.paused(!1)
            }, o.seek = function(e, t) {
                return this.totalTime(Number(e), t !== !1)
            }, o.restart = function(e, t) {
                return this.reversed(!1), this.paused(!1), this.totalTime(e ? -this._delay : 0, t !== !1)
            }, o.reverse = function(e, t) {
                return arguments.length && this.seek(e || this.totalDuration(), t), this.reversed(!0), this.paused(!1)
            }, o.render = function() {}, o.invalidate = function() {
                return this
            }, o._enabled = function(e, t) {
                return this._gc = !e, this._active = e && !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration, t !== !0 && (e && this.timeline == null ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline != null && this._timeline._remove(this, !0)), !1
            }, o._kill = function(e, t) {
                return this._enabled(!1, !1)
            }, o.kill = function(e, t) {
                return this._kill(e, t), this
            }, o._uncache = function(e) {
                var t = e ? this : this.timeline;
                while (t) t._dirty = !0, t = t.timeline;
                return this
            }, o.eventCallback = function(e, t, n, r) {
                if (e == null) return null;
                if (e.substr(0, 2) === "on") {
                    if (arguments.length === 1) return this.vars[e];
                    if (t == null) delete this.vars[e];
                    else {
                        this.vars[e] = t, this.vars[e + "Params"] = n, this.vars[e + "Scope"] = r;
                        if (n) {
                            var i = n.length;
                            while (--i > -1) n[i] === "{self}" && (n = this.vars[e + "Params"] = n.concat(), n[i] = this)
                        }
                    }
                    e === "onUpdate" && (this._onUpdate = t)
                }
                return this
            }, o.delay = function(e) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
            }, o.duration = function(e) {
                return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && e !== 0 && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, o.totalDuration = function(e) {
                return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
            }, o.time = function(e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this.totalTime(e, t)) : this._time
            }, o.totalTime = function(e, t) {
                if (!arguments.length) return this._totalTime;
                if (this._timeline) {
                    e < 0 && (e += this.totalDuration());
                    if (this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration(), e > this._totalDuration && (e = this._totalDuration), this._startTime = (this._paused ? this._pauseTime : this._timeline._time) - (this._reversed ? this._totalDuration - e : e) / this._timeScale, this._timeline._dirty || this._uncache(!1);
                        if (!this._timeline._active) {
                            var n = this._timeline;
                            while (n._timeline) n.totalTime(n._totalTime, !0), n = n._timeline
                        }
                    }
                    this._gc && this._enabled(!0, !1), this._totalTime !== e && this.render(e, t, !1)
                }
                return this
            }, o.startTime = function(e) {
                return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
            }, o.timeScale = function(e) {
                if (!arguments.length) return this._timeScale;
                e = e || 1e-6;
                if (this._timeline && this._timeline.smoothChildTiming) {
                    var t = this._pauseTime || this._pauseTime === 0 ? this._pauseTime : this._timeline._totalTime;
                    this._startTime = t - (t - this._startTime) * this._timeScale / e
                }
                return this._timeScale = e, this._uncache(!1)
            }, o.reversed = function(e) {
                return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._totalTime, !0)), this) : this._reversed
            }, o.paused = function(e) {
                return arguments.length ? (e != this._paused && this._timeline && (!e && this._timeline.smoothChildTiming && (this._startTime += this._timeline.rawTime() - this._pauseTime, this._uncache(!1)), this._pauseTime = e ? this._timeline.rawTime() : null, this._paused = e, this._active = !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration), this._gc && (e || this._enabled(!0, !1)), this) : this._paused
            };
            var x = c("core.SimpleTimeline", function(e) {
                E.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            o = x.prototype = new E, o.constructor = x, o.kill()._gc = !1, o._first = o._last = null, o._sortChildren = !1, o.add = function(e, t, n, r) {
                var i, s;
                e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), i = this._last;
                if (this._sortChildren) {
                    s = e._startTime;
                    while (i && i._startTime > s) i = i._prev
                }
                return i ? (e._next = i._next, i._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = i, this._timeline && this._uncache(!0), this
            }, o.insert = o.add, o._remove = function(e, t) {
                return e.timeline === this && (t || e._enabled(!1, !0), e.timeline = null, e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), this._timeline && this._uncache(!0)), this
            }, o.render = function(e, t, n) {
                var r = this._first,
                    i;
                this._totalTime = this._time = this._rawPrevTime = e;
                while (r) {
                    i = r._next;
                    if (r._active || e >= r._startTime && !r._paused) r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, !1) : r.render((e - r._startTime) * r._timeScale, t, !1);
                    r = i
                }
            }, o.rawTime = function() {
                return this._totalTime
            };
            var T = c("TweenLite", function(e, t, n) {
                    E.call(this, t, n);
                    if (e == null) throw "Cannot tween an undefined reference.";
                    this.target = e = typeof e != "string" ? e : T.selector(e) || e, this._overwrite = this.vars.overwrite == null ? _[T.defaultOverwrite] : typeof this.vars.overwrite == "number" ? this.vars.overwrite >> 0 : _[this.vars.overwrite];
                    var r = e.jquery || typeof e.each == "function" && e[0] && e[0].nodeType && e[0].style,
                        i, s;
                    if ((r || e instanceof Array) && typeof e[0] != "number") {
                        this._targets = r && !e.slice ? C(e) : e.slice(0), this._propLookup = [], this._siblings = [];
                        for (i = 0; i < this._targets.length; i++) {
                            s = this._targets[i];
                            if (!s) {
                                this._targets.splice(i--, 1);
                                continue
                            }
                            if (typeof s == "string") {
                                s = this._targets[i--] = T.selector(s), typeof s == "string" && this._targets.splice(i + 1, 1);
                                continue
                            }
                            if (typeof s.each == "function" && s[0] && s[0].nodeType && s[0].style) {
                                this._targets.splice(i--, 1), this._targets = this._targets.concat(C(s));
                                continue
                            }
                            this._siblings[i] = H(s, this, !1), this._overwrite === 1 && this._siblings[i].length > 1 && B(s, this, null, 1, this._siblings[i])
                        }
                    } else this._propLookup = {}, this._siblings = H(e, this, !1), this._overwrite === 1 && this._siblings.length > 1 && B(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || t === 0 && this._delay === 0 && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
                }, !0),
                N = function(e) {
                    return typeof e.each == "function" && e[0] && e[0].nodeType && e[0].style
                },
                C = function(e) {
                    var t = [];
                    return e.each(function() {
                        t.push(this)
                    }), t
                },
                k = function(e, t) {
                    var n = {},
                        r;
                    for (r in e) !M[r] && (!(r in t) || r === "x" || r === "y" || r === "width" || r === "height") && (!L[r] || L[r] && L[r]._autoCSS) && (n[r] = e[r], delete e[r]);
                    e.css = n
                };
            o = T.prototype = new E, o.constructor = T, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = null, o._notifyPluginsOfEnabled = !1, T.version = "1.8.4", T.defaultEase = o._ease = new d(null, null, 1, 1), T.defaultOverwrite = "auto", T.ticker = S, T.selector = e.$ || e.jQuery || function(t) {
                return e.$ ? (T.selector = e.$, e.$(t)) : e.document ? e.document.getElementById(t.charAt(0) === "#" ? t.substr(1) : t) : t
            };
            var L = T._plugins = {},
                A = T._tweenLookup = {},
                O = 0,
                M = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    orientToBezier: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1
                },
                _ = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                D = E._rootFramesTimeline = new x,
                P = E._rootTimeline = new x;
            P._startTime = S.time, D._startTime = S.frame, P._active = D._active = !0, E._updateRoot = function() {
                P.render((S.time - P._startTime) * P._timeScale, !1, !1), D.render((S.frame - D._startTime) * D._timeScale, !1, !1);
                if (!(S.frame % 120)) {
                    var e, t, n;
                    for (n in A) {
                        t = A[n].tweens, e = t.length;
                        while (--e > -1) t[e]._gc && t.splice(e, 1);
                        t.length === 0 && delete A[n]
                    }
                }
            }, S.addEventListener("tick", E._updateRoot);
            var H = function(e, t, n) {
                    var r = e._gsTweenID,
                        i, s;
                    A[r || (e._gsTweenID = r = "t" + O++)] || (A[r] = {
                        target: e,
                        tweens: []
                    });
                    if (t) {
                        i = A[r].tweens, i[s = i.length] = t;
                        if (n)
                            while (--s > -1) i[s] === t && i.splice(s, 1)
                    }
                    return A[r].tweens
                },
                B = function(e, t, n, r, i) {
                    var s, o, u, a;
                    if (r === 1 || r >= 4) {
                        a = i.length;
                        for (s = 0; s < a; s++)
                            if ((u = i[s]) !== t) u._gc || u._enabled(!1, !1) && (o = !0);
                            else if (r === 5) break;
                        return o
                    }
                    var f = t._startTime + 1e-10,
                        l = [],
                        c = 0,
                        h = t._duration === 0,
                        p;
                    s = i.length;
                    while (--s > -1)(u = i[s]) !== t && !u._gc && !u._paused && (u._timeline !== t._timeline ? (p = p || j(t, 0, h), j(u, p, h) === 0 && (l[c++] = u)) : u._startTime <= f && u._startTime + u.totalDuration() / u._timeScale + 1e-10 > f && ((h || !u._initted) && f - u._startTime <= 2e-10 || (l[c++] = u)));
                    s = c;
                    while (--s > -1) u = l[s], r === 2 && u._kill(n, e) && (o = !0), (r !== 2 || !u._firstPT && u._initted) && u._enabled(!1, !1) && (o = !0);
                    return o
                },
                j = function(e, t, n) {
                    var r = e._timeline,
                        i = r._timeScale,
                        s = e._startTime;
                    while (r._timeline) {
                        s += r._startTime, i *= r._timeScale;
                        if (r._paused) return -100;
                        r = r._timeline
                    }
                    return s /= i, s > t ? s - t : n && s === t || !e._initted && s - t < 2e-10 ? 1e-10 : (s += e.totalDuration() / e._timeScale / i) > t ? 0 : s - t - 1e-10
                };
            o._init = function() {
                var e = this.vars,
                    t = e.ease,
                    n, r, i;
                e.startAt && (e.startAt.overwrite = 0, e.startAt.immediateRender = !0, T.to(this.target, 0, e.startAt)), t ? t instanceof d ? this._ease = e.easeParams instanceof Array ? t.config.apply(t, e.easeParams) : t : typeof t == "function" ? this._ease = new d(t, e.easeParams) : this._ease = v[t] || T.defaultEase : this._ease = T.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null;
                if (this._targets) {
                    n = this._targets.length;
                    while (--n > -1) this._initProps(this._targets[n], this._propLookup[n] = {}, this._siblings[n], this._overwrittenProps ? this._overwrittenProps[n] : null) && (r = !0)
                } else r = this._initProps(this.target, this._propLookup, this._siblings, this._overwrittenProps);
                r && T._onPluginEvent("_onInitAllProps", this), this._overwrittenProps && this._firstPT == null && typeof this.target != "function" && this._enabled(!1, !1);
                if (e.runBackwards) {
                    i = this._firstPT;
                    while (i) i.s += i.c, i.c = -i.c, i = i._next
                }
                this._onUpdate = e.onUpdate, this._initted = !0
            }, o._initProps = function(e, t, n, r) {
                var i, s, o, u, a, f, l;
                if (e == null) return !1;
                this.vars.css || e.style && e.nodeType && L.css && this.vars.autoCSS !== !1 && k(this.vars, e);
                for (i in this.vars) {
                    if (M[i]) {
                        if (i === "onStartParams" || i === "onUpdateParams" || i === "onCompleteParams" || i === "onReverseCompleteParams" || i === "onRepeatParams")
                            if (a = this.vars[i]) {
                                s = a.length;
                                while (--s > -1) a[s] === "{self}" && (a = this.vars[i] = a.concat(), a[s] = this)
                            }
                    } else if (L[i] && (u = new L[i])._onInitTween(e, this.vars[i], this)) {
                        this._firstPT = f = {
                            _next: this._firstPT,
                            t: u,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: i,
                            pg: !0,
                            pr: u._priority
                        }, s = u._overwriteProps.length;
                        while (--s > -1) t[u._overwriteProps[s]] = this._firstPT;
                        if (u._priority || u._onInitAllProps) o = !0;
                        if (u._onDisable || u._onEnable) this._notifyPluginsOfEnabled = !0
                    } else this._firstPT = t[i] = f = {
                        _next: this._firstPT,
                        t: e,
                        p: i,
                        f: typeof e[i] == "function",
                        n: i,
                        pg: !1,
                        pr: 0
                    }, f.s = f.f ? e[i.indexOf("set") || typeof e["get" + i.substr(3)] != "function" ? i : "get" + i.substr(3)]() : parseFloat(e[i]), l = this.vars[i], f.c = typeof l == "string" && l.charAt(1) === "=" ? parseInt(l.charAt(0) + "1", 10) * Number(l.substr(2)) : Number(l) - f.s || 0;
                    f && f._next && (f._next._prev = f)
                }
                return r && this._kill(r, e) ? this._initProps(e, t, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && B(e, this, t, this._overwrite, n) ? (this._kill(t, e), this._initProps(e, t, n, r)) : o
            }, o.render = function(e, t, n) {
                var r = this._time,
                    i, s, o;
                if (e >= this._duration) this._totalTime = this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (i = !0, s = "onComplete"), this._duration === 0 && ((e === 0 || this._rawPrevTime < 0) && this._rawPrevTime !== e && (n = !0), this._rawPrevTime = e);
                else if (e <= 0) {
                    this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
                    if (r !== 0 || this._duration === 0 && this._rawPrevTime > 0) s = "onReverseComplete", i = this._reversed;
                    e < 0 ? (this._active = !1, this._duration === 0 && (this._rawPrevTime >= 0 && (n = !0), this._rawPrevTime = e)) : this._initted || (n = !0)
                } else {
                    this._totalTime = this._time = e;
                    if (this._easeType) {
                        var u = e / this._duration,
                            a = this._easeType,
                            f = this._easePower;
                        if (a === 1 || a === 3 && u >= .5) u = 1 - u;
                        a === 3 && (u *= 2), f === 1 ? u *= u : f === 2 ? u *= u * u : f === 3 ? u *= u * u * u : f === 4 && (u *= u * u * u * u), a === 1 ? this.ratio = 1 - u : a === 2 ? this.ratio = u : e / this._duration < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2
                    } else this.ratio = this._ease.getRatio(e / this._duration)
                }
                if (this._time === r && !n) return;
                this._initted || (this._init(), !i && this._time && (this.ratio = this._ease.getRatio(this._time / this._duration))), this._active || this._paused || (this._active = !0), r === 0 && this.vars.onStart && (this._time !== 0 || this._duration === 0) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || p)), o = this._firstPT;
                while (o) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || p)), s && (this._gc || (i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), t || this.vars[s] && this.vars[s].apply(this.vars[s + "Scope"] || this, this.vars[s + "Params"] || p)))
            }, o._kill = function(e, t) {
                e === "all" && (e = null);
                if (e == null)
                    if (t == null || t === this.target) return this._enabled(!1, !1);
                t = typeof t != "string" ? t || this._targets || this.target : T.selector(t) || t;
                var n, r, i, s, o, u, a, f;
                if ((t instanceof Array || N(t)) && typeof t[0] != "number") {
                    n = t.length;
                    while (--n > -1) this._kill(e, t[n]) && (u = !0)
                } else {
                    if (this._targets) {
                        n = this._targets.length;
                        while (--n > -1)
                            if (t === this._targets[n]) {
                                o = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (t !== this.target) return !1;
                        o = this._propLookup, r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                    }
                    if (o) {
                        a = e || o, f = e !== r && r !== "all" && e !== o && (e == null || e._tempKill !== !0);
                        for (i in a) {
                            if (s = o[i]) {
                                s.pg && s.t._kill(a) && (u = !0);
                                if (!s.pg || s.t._overwriteProps.length === 0) s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null;
                                delete o[i]
                            }
                            f && (r[i] = 1)
                        }
                    }
                }
                return u
            }, o.invalidate = function() {
                return this._notifyPluginsOfEnabled && T._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
            }, o._enabled = function(e, t) {
                if (e && this._gc)
                    if (this._targets) {
                        var n = this._targets.length;
                        while (--n > -1) this._siblings[n] = H(this._targets[n], this, !0)
                    } else this._siblings = H(this.target, this, !0);
                return E.prototype._enabled.call(this, e, t), this._notifyPluginsOfEnabled && this._firstPT ? T._onPluginEvent(e ? "_onEnable" : "_onDisable", this) : !1
            }, T.to = function(e, t, n) {
                return new T(e, t, n)
            }, T.from = function(e, t, n) {
                return n.runBackwards = !0, n.immediateRender !== !1 && (n.immediateRender = !0), new T(e, t, n)
            }, T.fromTo = function(e, t, n, r) {
                return r.startAt = n, n.immediateRender && (r.immediateRender = !0), new T(e, t, r)
            }, T.delayedCall = function(e, t, n, r, i) {
                return new T(t, 0, {
                    delay: e,
                    onComplete: t,
                    onCompleteParams: n,
                    onCompleteScope: r,
                    onReverseComplete: t,
                    onReverseCompleteParams: n,
                    onReverseCompleteScope: r,
                    immediateRender: !1,
                    useFrames: i,
                    overwrite: 0
                })
            }, T.set = function(e, t) {
                return new T(e, 0, t)
            }, T.killTweensOf = T.killDelayedCallsTo = function(e, t) {
                var n = T.getTweensOf(e),
                    r = n.length;
                while (--r > -1) n[r]._kill(t, e)
            }, T.getTweensOf = function(e) {
                if (e == null) return;
                e = typeof e != "string" ? e : T.selector(e) || e;
                var t, n, r, i;
                if ((e instanceof Array || N(e)) && typeof e[0] != "number") {
                    t = e.length, n = [];
                    while (--t > -1) n = n.concat(T.getTweensOf(e[t]));
                    t = n.length;
                    while (--t > -1) {
                        i = n[t], r = t;
                        while (--r > -1) i === n[r] && n.splice(t, 1)
                    }
                } else {
                    n = H(e).concat(), t = n.length;
                    while (--t > -1) n[t]._gc && n.splice(t, 1)
                }
                return n
            };
            var F = c("plugins.TweenPlugin", function(e, t) {
                this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0
            }, !0);
            o = F.prototype, F.version = 12, F.API = 2, o._firstPT = null, o._addTween = function(e, t, n, r, i, s) {
                var o, u;
                r != null && (o = typeof r == "number" || r.charAt(1) !== "=" ? Number(r) - n : parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2))) && (this._firstPT = u = {
                    _next: this._firstPT,
                    t: e,
                    p: t,
                    s: n,
                    c: o,
                    f: typeof e[t] == "function",
                    n: i || t,
                    r: s
                }, u._next && (u._next._prev = u))
            }, o.setRatio = function(e) {
                var t = this._firstPT,
                    n;
                while (t) n = t.c * e + t.s, t.r && (n = n + (n > 0 ? .5 : -0.5) >> 0), t.f ? t.t[t.p](n) : t.t[t.p] = n, t = t._next
            }, o._kill = function(e) {
                if (e[this._propName] != null) this._overwriteProps = [];
                else {
                    var t = this._overwriteProps.length;
                    while (--t > -1) e[this._overwriteProps[t]] != null && this._overwriteProps.splice(t, 1)
                }
                var n = this._firstPT;
                while (n) e[n.n] != null && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                return !1
            }, o._roundProps = function(e, t) {
                var n = this._firstPT;
                while (n) {
                    if (e[this._propName] || n.n != null && e[n.n.split(this._propName + "_").join("")]) n.r = t;
                    n = n._next
                }
            }, T._onPluginEvent = function(e, t) {
                var n = t._firstPT,
                    r;
                if (e === "_onInitAllProps") {
                    var i, s, o, u;
                    while (n) {
                        u = n._next, i = s;
                        while (i && i.pr > n.pr) i = i._next;
                        (n._prev = i ? i._prev : o) ? n._prev._next = n: s = n, (n._next = i) ? i._prev = n : o = n, n = u
                    }
                    n = t._firstPT = s
                }
                while (n) n.pg && typeof n.t[e] == "function" && n.t[e]() && (r = !0), n = n._next;
                return r
            }, F.activate = function(e) {
                var t = e.length;
                while (--t > -1) e[t].API === F.API && (T._plugins[(new e[t])._propName] = e[t]);
                return !0
            };
            if (i = e._gsQueue) {
                for (s = 0; s < i.length; s++) i[s]();
                for (o in a) a[o].func || e.console.log("GSAP encountered missing dependency: com.greensock." + o)
            }
            u = !1
        }(window), TweenLite
    }), define("anim/counter", ["jquery", "lib/TweenLite"], function(e) {
        var t = function(e) {
            function c() {
                o ? t.text(d(r)) : s ? t.text(h(r.toFixed(f)) + l) : t.text(r.toFixed(f) + l), r = u.domestic, r >= n && (o ? t.text(d(n)) : s ? t.text(h(n.toFixed(f)) + l) : t.text(n.toFixed(f) + l), clearInterval(i))
            }

            function h(e) {
                return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }

            function d(e) {
                var t = e / 3600,
                    n = (t - Math.floor(t)) * 60,
                    r = (n - Math.floor(n)) * 60,
                    i = v(Math.floor(t)) + ":" + v(Math.floor(n)) + ":" + v(Math.floor(r));
                return i
            }

            function v(e) {
                return e < 10 ? "0" + e : e
            }

            function m() {
                return f == 0 ? n * .05 : n * .5
            }

            function g(e, t) {
                return x = ("" + e).length, p = Math.pow, t = p(10, t), x -= x % 3, l = " kmb" [x / 3], Math.round(e * t / p(10, x)) / t
            }

            function y(e, r, p, d, v, y) {
                if (i) return;
                if (a) {
                    a.resume(), i = setInterval(c, 20);
                    return
                }
                n = e, f = r, l = "", p && r == 0 && (p <= 3 ? n >= 1050 && n < 1e4 || n >= 1e5 && n < 1e7 || n >= 1e8 ? (n = g(n, 1), f = 1) : n >= 1e3 && (n = g(n, 0)) : p <= 4 ? n >= 1e5 && n < 1e7 || n >= 1e8 ? (n = g(n, 1), f = 1) : n >= 1e4 && (n = g(n, 0)) : p <= 5 ? n >= 1e5 && n < 1e7 || n >= 1e8 ? (n = g(n, 1), f = 1) : n >= 1e5 && (n = g(n, 0)) : p >= 6 && n >= 1e8 && (n = g(n, 1), f = 1)), y ? o = !0 : r <= 2 && n > 999 && (s = !0), v && (t.css("width", "auto"), s ? t.text(h(n.toFixed(f)) + l) : t.text(n.toFixed(f) + l), t.css("width", t.width())), y = Math.min(n, y) || Math.min(3, m()), y = Math.min(window.GRL.constants.MAX_COKE_ANNIMATION_TIME, y), a = TweenLite.to(u, y, {
                    domestic: n,
                    ease: Linear.easeNone,
                    delay: d
                }), i = setInterval(c, 20), c()
            }

            function b() {
                clearInterval(i), i = null, a && a.pause()
            }

            function w() {
                b(), u = {
                    domestic: 0,
                    counterpart: 0
                }, a = null, n = 0, c()
            }
            var t = e,
                n, r = 0,
                i = null,
                s = !1,
                o = !1,
                u = {
                    domestic: 0,
                    counterpart: 0
                },
                a, f = 0,
                l = "";
            return {
                start: y,
                stop: b,
                reset: w
            }
        };
        return t
    }), define("views/donate-1-panel-view", ["jquery", "underscore", "backbone", "views/panel-view", "models/user", "collections/comparables", "anim/counter"], function(e, t, n, r, i, s, o) {
        var u = r.extend({
            model: i,
            events: {
                "click a.next": "nextPanel",
                "click .btn": "donateLink",
                "click .charity-open, .charity-tooltip": "charityTooltip"
            },
            initialize: function() {
                r.prototype.initialize.call(this), this.on("view:on", this.startAnimation, this), this.on("view:off", this.stopAnimation, this), this.model.on("change", this.update, this), this.counterAnimation = o(this.$(".counter")), this.counterpart = s.iNeedA("wage_earner"), this.render()
            },
            render: function() {
                this.$(".counter").html("0.00");
                var e = this.model.get("donation_pennies") / 100,
                    t = this.model.get("suggested_donation");
                this.$(".txt-suggested").text(t.toFixed(2)), this.$(".lcu").text(this.model.get("user_location").get("symbol")), this.model.needsCurrencyConversion() ? this.$(".conversion").show() : this.$(".conversion").hide(), this.$(".txt-counterpart-income-hourly").text(this.localise(this.counterpart.get("hourly")).toLocaleString()), this.$(".txt-counterpart-location").text(this.counterpart.get("location"))
            },
            update: function() {
                this.counterAnimation.reset(), this.render(), this.$(".num").css({
                    opacity: 0
                })
            },
            startAnimation: function() {
                var e = this.model.get("hourly_income") >= 100 && window.GRL.is_mobile_vp ? 0 : 2;
                this.counterAnimation.start(this.model.get("hourly_income"), e, 6, .4, !0), this.$(".num").transition({
                    opacity: 1,
                    duration: 500,
                    delay: 400
                })
            },
            stopAnimation: function() {
                this.counterAnimation.stop()
            }
        });
        return u
    }), define("lib/jquery.transit", ["jquery"], function(e) {
        (function(e) {
            function r(e) {
                if (e in t.style) return e;
                var n = ["Moz", "Webkit", "O", "ms"],
                    r = e.charAt(0).toUpperCase() + e.substr(1);
                if (e in t.style) return e;
                for (var i = 0; i < n.length; ++i) {
                    var s = n[i] + r;
                    if (s in t.style) return s
                }
            }

            function i() {
                return t.style[n.transform] = "", t.style[n.transform] = "rotateY(90deg)", t.style[n.transform] !== ""
            }

            function f(e) {
                return typeof e == "string" && this.parse(e), this
            }

            function l(e, t, n) {
                t === !0 ? e.queue(n) : t ? e.queue(t, n) : n()
            }

            function c(t) {
                var n = [];
                return e.each(t, function(t) {
                    t = e.camelCase(t), t = e.transit.propertyMap[t] || e.cssProps[t] || t, t = d(t), e.inArray(t, n) === -1 && n.push(t)
                }), n
            }

            function h(t, n, r, i) {
                var s = c(t);
                e.cssEase[r] && (r = e.cssEase[r]);
                var o = "" + m(n) + " " + r;
                parseInt(i, 10) > 0 && (o += " " + m(i));
                var u = [];
                return e.each(s, function(e, t) {
                    u.push(t + " " + o)
                }), u.join(", ")
            }

            function p(t, r) {
                r || (e.cssNumber[t] = !0), e.transit.propertyMap[t] = n.transform, e.cssHooks[t] = {
                    get: function(n) {
                        var r = e(n).css("transit:transform");
                        return r.get(t)
                    },
                    set: function(n, r) {
                        var i = e(n).css("transit:transform");
                        i.setFromString(t, r), e(n).css({
                            "transit:transform": i
                        })
                    }
                }
            }

            function d(e) {
                return e.replace(/([A-Z])/g, function(e) {
                    return "-" + e.toLowerCase()
                })
            }

            function v(e, t) {
                return typeof e == "string" && !e.match(/^[\-0-9\.]+$/) ? e : "" + e + t
            }

            function m(t) {
                var n = t;
                return e.fx.speeds[n] && (n = e.fx.speeds[n]), v(n, "ms")
            }
            e.transit = {
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
            var t = document.createElement("div"),
                n = {},
                s = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
            n.transition = r("transition"), n.transitionDelay = r("transitionDelay"), n.transform = r("transform"), n.transformOrigin = r("transformOrigin"), n.transform3d = i();
            var o = {
                    transition: "transitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    WebkitTransition: "webkitTransitionEnd",
                    msTransition: "MSTransitionEnd"
                },
                u = n.transitionEnd = o[n.transition] || null;
            for (var a in n) n.hasOwnProperty(a) && typeof e.support[a] == "undefined" && (e.support[a] = n[a]);
            t = null, e.cssEase = {
                _default: "ease",
                "in": "ease-in",
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
            }, e.cssHooks["transit:transform"] = {
                get: function(t) {
                    return e(t).data("transform") || new f
                },
                set: function(t, r) {
                    var i = r;
                    i instanceof f || (i = new f(i)), n.transform === "WebkitTransform" && !s ? t.style[n.transform] = i.toString(!0) : t.style[n.transform] = i.toString(), e(t).data("transform", i)
                }
            }, e.cssHooks.transform = {
                set: e.cssHooks["transit:transform"].set
            }, e.fn.jquery < "1.8" && (e.cssHooks.transformOrigin = {
                get: function(e) {
                    return e.style[n.transformOrigin]
                },
                set: function(e, t) {
                    e.style[n.transformOrigin] = t
                }
            }, e.cssHooks.transition = {
                get: function(e) {
                    return e.style[n.transition]
                },
                set: function(e, t) {
                    e.style[n.transition] = t
                }
            }), p("scale"), p("translate"), p("rotate"), p("rotateX"), p("rotateY"), p("rotate3d"), p("perspective"), p("skewX"), p("skewY"), p("x", !0), p("y", !0), f.prototype = {
                setFromString: function(e, t) {
                    var n = typeof t == "string" ? t.split(",") : t.constructor === Array ? t : [t];
                    n.unshift(e), f.prototype.set.apply(this, n)
                },
                set: function(e) {
                    var t = Array.prototype.slice.apply(arguments, [1]);
                    this.setter[e] ? this.setter[e].apply(this, t) : this[e] = t.join(",")
                },
                get: function(e) {
                    return this.getter[e] ? this.getter[e].apply(this) : this[e] || 0
                },
                setter: {
                    rotate: function(e) {
                        this.rotate = v(e, "deg")
                    },
                    rotateX: function(e) {
                        this.rotateX = v(e, "deg")
                    },
                    rotateY: function(e) {
                        this.rotateY = v(e, "deg")
                    },
                    scale: function(e, t) {
                        t === undefined && (t = e), this.scale = e + "," + t
                    },
                    skewX: function(e) {
                        this.skewX = v(e, "deg")
                    },
                    skewY: function(e) {
                        this.skewY = v(e, "deg")
                    },
                    perspective: function(e) {
                        this.perspective = v(e, "px")
                    },
                    x: function(e) {
                        this.set("translate", e, null)
                    },
                    y: function(e) {
                        this.set("translate", null, e)
                    },
                    translate: function(e, t) {
                        this._translateX === undefined && (this._translateX = 0), this._translateY === undefined && (this._translateY = 0), e !== null && e !== undefined && (this._translateX = v(e, "px")), t !== null && t !== undefined && (this._translateY = v(t, "px")), this.translate = this._translateX + "," + this._translateY
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
                        var e = (this.scale || "1,1").split(",");
                        return e[0] && (e[0] = parseFloat(e[0])), e[1] && (e[1] = parseFloat(e[1])), e[0] === e[1] ? e[0] : e
                    },
                    rotate3d: function() {
                        var e = (this.rotate3d || "0,0,0,0deg").split(",");
                        for (var t = 0; t <= 3; ++t) e[t] && (e[t] = parseFloat(e[t]));
                        return e[3] && (e[3] = v(e[3], "deg")), e
                    }
                },
                parse: function(e) {
                    var t = this;
                    e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(e, n, r) {
                        t.setFromString(n, r)
                    })
                },
                toString: function(e) {
                    var t = [];
                    for (var r in this)
                        if (this.hasOwnProperty(r)) {
                            if (!n.transform3d && (r === "rotateX" || r === "rotateY" || r === "perspective" || r === "transformOrigin")) continue;
                            r[0] !== "_" && (e && r === "scale" ? t.push(r + "3d(" + this[r] + ",1)") : e && r === "translate" ? t.push(r + "3d(" + this[r] + ",0)") : t.push(r + "(" + this[r] + ")"))
                        }
                    return t.join(" ")
                }
            }, e.fn.transition = e.fn.transit = function(t, r, i, s) {
                var o = this,
                    a = 0,
                    f = !0;
                typeof r == "function" && (s = r, r = undefined), typeof i == "function" && (s = i, i = undefined), typeof t.easing != "undefined" && (i = t.easing, delete t.easing), typeof t.duration != "undefined" && (r = t.duration, delete t.duration), typeof t.complete != "undefined" && (s = t.complete, delete t.complete), typeof t.queue != "undefined" && (f = t.queue, delete t.queue), typeof t.delay != "undefined" && (a = t.delay, delete t.delay), typeof r == "undefined" && (r = e.fx.speeds._default), typeof i == "undefined" && (i = e.cssEase._default), r = m(r);
                var c = h(t, r, i, a),
                    p = e.transit.enabled && n.transition,
                    d = p ? parseInt(r, 10) + parseInt(a, 10) : 0;
                if (d === 0) {
                    var v = function(e) {
                        o.css(t), s && s.apply(o), e && e()
                    };
                    return l(o, f, v), o
                }
                var g = {},
                    y = function(r) {
                        var i = !1,
                            a = function() {
                                i && o.unbind(u, a), d > 0 && o.each(function() {
                                    this.style[n.transition] = g[this] || null
                                }), typeof s == "function" && s.apply(o), typeof r == "function" && r()
                            };
                        d > 0 && u && e.transit.useTransitionEnd ? (i = !0, o.bind(u, a)) : window.setTimeout(a, d), o.each(function() {
                            d > 0 && (this.style[n.transition] = c), e(this).css(t)
                        })
                    },
                    b = function(e) {
                        this.offsetWidth, y(e)
                    };
                return l(o, f, b), this
            }, e.transit.getTransitionValue = h
        })(e)
    }), define("lib/imgpreload", [], function() {
        var e = function(t, n) {
            var r = 0,
                i = [];
            t = Object.prototype.toString.apply(t) === "[object Array]" ? t : [t];
            var s = function() {
                r += 1, r === t.length && n && n(i)
            };
            for (var o = 0; o < t.length; o++) i[o] = new Image, i[o].onabort = s, i[o].onerror = s, i[o].onload = s, i[o].src = t[o]
        };
        return e
    }), define("anim/cola", ["jquery", "lib/imgpreload", "lib/TweenLite", "utils"], function(e, t, n, r) {
        var i = function(i) {
            function L() {
                window.GRL.is_mobile_vp ? (C = "m", e(i).css({
                    maxWidth: "300px",
                    width: "100%"
                }), window.devicePixelRatio > 1 ? (k = 2, e(i).attr({
                    width: "600",
                    height: "300"
                })) : (k = 1, e(i).attr({
                    width: "300",
                    height: "150"
                })), b = 52 * k, w = 13 * k, E = 32 * k, S = 122 * k, x = 130 * k, T = 85 * k, N = 800) : (C = "d", e(i).css({
                    maxWidth: "555px",
                    width: "555px"
                }), window.devicePixelRatio > 1 ? (k = 2, e(i).attr({
                    width: "1110",
                    height: "600"
                })) : (k = 1, e(i).attr({
                    width: "555",
                    height: "300"
                })), b = 95 * k, w = 25 * k, E = 53 * k, S = 201 * k, x = 255 * k, T = 140 * k, N = 400), p = o + "img/emptycan_" + C + "x" + k + ".png", d = o + "img/fullcan_" + C + "x" + k + ".png"
            }

            function A() {
                L(), t([p, d], function(e) {
                    p = e[0], d = e[1], h = e
                })
            }

            function O(e) {
                if (l || c) {
                    m.resume(), g.resume(), P(), l = setInterval(P, 20);
                    return
                }
                y = e || a, y = Math.min(a, y), D()
            }

            function M() {
                clearTimeout(c), clearInterval(l), m && (m.pause(), g.pause())
            }

            function _() {
                clearTimeout(c), clearInterval(l), c = null, l = null, v = {
                    domestic: T,
                    counterpart: T,
                    can1Y: -S - w - 10,
                    can2Y: -S - w - 10,
                    can1R: 5,
                    can2R: -5
                }, y && h && P()
            }

            function D() {
                if (h) {
                    if (s) {
                        B();
                        return
                    }
                    setTimeout(function() {
                        n.to(v, .2, {
                            can1Y: 0,
                            ease: Quad.easeIn
                        }), n.to(v, .2, {
                            can1R: -2,
                            ease: Quad.easeIn,
                            delay: .1
                        }), n.to(v, .2, {
                            can1R: 0,
                            ease: Quart.easeOut,
                            delay: .3
                        }), n.to(v, .2, {
                            can2Y: 0,
                            ease: Quad.easeIn,
                            delay: .1
                        }), n.to(v, .2, {
                            can2R: 2,
                            ease: Quad.easeIn,
                            delay: .2
                        }), n.to(v, .2, {
                            can2R: 0,
                            ease: Quart.easeOut,
                            delay: .4
                        }), m = n.to(v, u, {
                            domestic: 0,
                            ease: Linear.easeNone,
                            delay: .3
                        }), g = n.to(v, y, {
                            counterpart: 0,
                            ease: Linear.easeNone,
                            delay: .3
                        }), l = setInterval(P, 20)
                    }, N)
                } else c = setTimeout(D, 200)
            }

            function P() {
                f.clearRect(0, 0, 1e3, 500), f.save(), f.translate(b + E, w + v.can1Y + S), f.rotate(v.can1R * Math.PI / 180), f.translate(-E, -S), H(v.domestic), f.restore(), f.save(), f.translate(b + x + E, w + v.can2Y + S), f.rotate(v.can2R * Math.PI / 180), f.translate(-E, -S), H(v.counterpart), f.restore()
            }

            function H(e) {
                f.drawImage(p, 0, 0), f.save(), f.save(), f.translate(0, e), f.beginPath(), C == "d" ? k == 1 ? (f.moveTo(4, 47), f.bezierCurveTo(4, 47, 14, 60, 52, 59), f.bezierCurveTo(90, 59, 104, 47, 104, 47), f.lineTo(104, 200), f.lineTo(4, 200)) : (f.moveTo(8, 94), f.bezierCurveTo(4, 94, 28, 120, 104, 118), f.bezierCurveTo(180, 118, 208, 94, 208, 94), f.lineTo(208, 400), f.lineTo(8, 400)) : k == 1 ? (f.moveTo(2.5, 28.5), f.bezierCurveTo(2.5, 28.5, 8.5, 36.5, 31, 36), f.bezierCurveTo(54, 36, 61, 29, 62.5, 29), f.lineTo(62.5, 120), f.lineTo(2.5, 120)) : (f.moveTo(5, 57), f.bezierCurveTo(5, 57, 17, 73, 62, 72), f.bezierCurveTo(108, 72, 122, 58, 125, 58), f.lineTo(125, 240), f.lineTo(5, 240)), f.closePath(), f.restore(), f.clip(), f.drawImage(d, 0, 0), f.restore()
            }

            function B() {
                f.clearRect(0, 0, 1e3, 500), f.save(), f.translate(b, w), H(0), f.restore(), f.save(), f.translate(b + x, w), H(T * .5), f.restore()
            }
            var s = r.isCanvasPolyfill(i),
                o = window.GRL.staticURL,
                u = window.GRL.constants.DOMESTIC_COKE_ANNIMATION_TIME,
                a = window.GRL.constants.MAX_COKE_ANNIMATION_TIME,
                f = i.getContext("2d"),
                l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k;
            return e(window).on("resizeWindow", function(e, t) {
                C != t && (M(), h = null, A(), y && (_(), O(y)))
            }), A(), {
                start: O,
                stop: M,
                reset: _
            }
        };
        return i
    }),
    function(e) {
        function O(e, t) {
            return function(n) {
                return j(e.call(this, n), t)
            }
        }

        function M(e) {
            return function(t) {
                return this.lang().ordinal(e.call(this, t))
            }
        }

        function _() {}

        function D(e) {
            H(this, e)
        }

        function P(e) {
            var t = this._data = {},
                n = e.years || e.year || e.y || 0,
                r = e.months || e.month || e.M || 0,
                i = e.weeks || e.week || e.w || 0,
                s = e.days || e.day || e.d || 0,
                o = e.hours || e.hour || e.h || 0,
                u = e.minutes || e.minute || e.m || 0,
                a = e.seconds || e.second || e.s || 0,
                f = e.milliseconds || e.millisecond || e.ms || 0;
            this._milliseconds = f + a * 1e3 + u * 6e4 + o * 36e5, this._days = s + i * 7, this._months = r + n * 12, t.milliseconds = f % 1e3, a += B(f / 1e3), t.seconds = a % 60, u += B(a / 60), t.minutes = u % 60, o += B(u / 60), t.hours = o % 24, s += B(o / 24), s += i * 7, t.days = s % 30, r += B(s / 30), t.months = r % 12, n += B(r / 12), t.years = n
        }

        function H(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        }

        function B(e) {
            return e < 0 ? Math.ceil(e) : Math.floor(e)
        }

        function j(e, t) {
            var n = e + "";
            while (n.length < t) n = "0" + n;
            return n
        }

        function F(e, t, n) {
            var r = t._milliseconds,
                i = t._days,
                s = t._months,
                o;
            r && e._d.setTime(+e + r * n), i && e.date(e.date() + i * n), s && (o = e.date(), e.date(1).month(e.month() + s * n).date(Math.min(o, e.daysInMonth())))
        }

        function I(e) {
            return Object.prototype.toString.call(e) === "[object Array]"
        }

        function q(e, t) {
            var n = Math.min(e.length, t.length),
                r = Math.abs(e.length - t.length),
                i = 0,
                s;
            for (s = 0; s < n; s++) ~~e[s] !== ~~t[s] && i++;
            return i + r
        }

        function R(e, t) {
            return t.abbr = e, s[e] || (s[e] = new _), s[e].set(t), s[e]
        }

        function U(e) {
            return e ? (!s[e] && o && require("./lang/" + e), s[e]) : t.fn._lang
        }

        function z(e) {
            return e.match(/\[.*\]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
        }

        function W(e) {
            var t = e.match(a),
                n, r;
            for (n = 0, r = t.length; n < r; n++) A[t[n]] ? t[n] = A[t[n]] : t[n] = z(t[n]);
            return function(i) {
                var s = "";
                for (n = 0; n < r; n++) s += typeof t[n].call == "function" ? t[n].call(i, e) : t[n];
                return s
            }
        }

        function X(e, t) {
            function r(t) {
                return e.lang().longDateFormat(t) || t
            }
            var n = 5;
            while (n-- && f.test(t)) t = t.replace(f, r);
            return C[t] || (C[t] = W(t)), C[t](e)
        }

        function V(e) {
            switch (e) {
                case "DDDD":
                    return p;
                case "YYYY":
                    return d;
                case "YYYYY":
                    return v;
                case "S":
                case "SS":
                case "SSS":
                case "DDD":
                    return h;
                case "MMM":
                case "MMMM":
                case "dd":
                case "ddd":
                case "dddd":
                case "a":
                case "A":
                    return m;
                case "X":
                    return b;
                case "Z":
                case "ZZ":
                    return g;
                case "T":
                    return y;
                case "MM":
                case "DD":
                case "YY":
                case "HH":
                case "hh":
                case "mm":
                case "ss":
                case "M":
                case "D":
                case "d":
                case "H":
                case "h":
                case "m":
                case "s":
                    return c;
                default:
                    return new RegExp(e.replace("\\", ""))
            }
        }

        function $(e, t, n) {
            var r, i, s = n._a;
            switch (e) {
                case "M":
                case "MM":
                    s[1] = t == null ? 0 : ~~t - 1;
                    break;
                case "MMM":
                case "MMMM":
                    r = U(n._l).monthsParse(t), r != null ? s[1] = r : n._isValid = !1;
                    break;
                case "D":
                case "DD":
                case "DDD":
                case "DDDD":
                    t != null && (s[2] = ~~t);
                    break;
                case "YY":
                    s[0] = ~~t + (~~t > 68 ? 1900 : 2e3);
                    break;
                case "YYYY":
                case "YYYYY":
                    s[0] = ~~t;
                    break;
                case "a":
                case "A":
                    n._isPm = (t + "").toLowerCase() === "pm";
                    break;
                case "H":
                case "HH":
                case "h":
                case "hh":
                    s[3] = ~~t;
                    break;
                case "m":
                case "mm":
                    s[4] = ~~t;
                    break;
                case "s":
                case "ss":
                    s[5] = ~~t;
                    break;
                case "S":
                case "SS":
                case "SSS":
                    s[6] = ~~(("0." + t) * 1e3);
                    break;
                case "X":
                    n._d = new Date(parseFloat(t) * 1e3);
                    break;
                case "Z":
                case "ZZ":
                    n._useUTC = !0, r = (t + "").match(x), r && r[1] && (n._tzh = ~~r[1]), r && r[2] && (n._tzm = ~~r[2]), r && r[0] === "+" && (n._tzh = -n._tzh, n._tzm = -n._tzm)
            }
            t == null && (n._isValid = !1)
        }

        function J(e) {
            var t, n, r = [];
            if (e._d) return;
            for (t = 0; t < 7; t++) e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
            r[3] += e._tzh || 0, r[4] += e._tzm || 0, n = new Date(0), e._useUTC ? (n.setUTCFullYear(r[0], r[1], r[2]), n.setUTCHours(r[3], r[4], r[5], r[6])) : (n.setFullYear(r[0], r[1], r[2]), n.setHours(r[3], r[4], r[5], r[6])), e._d = n
        }

        function K(e) {
            var t = e._f.match(a),
                n = e._i,
                r, i;
            e._a = [];
            for (r = 0; r < t.length; r++) i = (V(t[r]).exec(n) || [])[0], i && (n = n.slice(n.indexOf(i) + i.length)), A[t[r]] && $(t[r], i, e);
            e._isPm && e._a[3] < 12 && (e._a[3] += 12), e._isPm === !1 && e._a[3] === 12 && (e._a[3] = 0), J(e)
        }

        function Q(e) {
            var t, n, r, i = 99,
                s, o, u;
            while (e._f.length) {
                t = H({}, e), t._f = e._f.pop(), K(t), n = new D(t);
                if (n.isValid()) {
                    r = n;
                    break
                }
                u = q(t._a, n.toArray()), u < i && (i = u, r = n)
            }
            H(e, r)
        }

        function G(e) {
            var t, n = e._i;
            if (w.exec(n)) {
                e._f = "YYYY-MM-DDT";
                for (t = 0; t < 4; t++)
                    if (S[t][1].exec(n)) {
                        e._f += S[t][0];
                        break
                    }
                g.exec(n) && (e._f += " Z"), K(e)
            } else e._d = new Date(n)
        }

        function Y(t) {
            var n = t._i,
                r = u.exec(n);
            n === e ? t._d = new Date : r ? t._d = new Date(+r[1]) : typeof n == "string" ? G(t) : I(n) ? (t._a = n.slice(0), J(t)) : t._d = n instanceof Date ? new Date(+n) : new Date(n)
        }

        function Z(e, t, n, r, i) {
            return i.relativeTime(t || 1, !!n, e, r)
        }

        function et(e, t, n) {
            var i = r(Math.abs(e) / 1e3),
                s = r(i / 60),
                o = r(s / 60),
                u = r(o / 24),
                a = r(u / 365),
                f = i < 45 && ["s", i] || s === 1 && ["m"] || s < 45 && ["mm", s] || o === 1 && ["h"] || o < 22 && ["hh", o] || u === 1 && ["d"] || u <= 25 && ["dd", u] || u <= 45 && ["M"] || u < 345 && ["MM", r(u / 30)] || a === 1 && ["y"] || ["yy", a];
            return f[2] = t, f[3] = e > 0, f[4] = n, Z.apply({}, f)
        }

        function tt(e, n, r) {
            var i = r - n,
                s = r - e.day();
            return s > i && (s -= 7), s < i - 7 && (s += 7), Math.ceil(t(e).add("d", s).dayOfYear() / 7)
        }

        function nt(e) {
            var n = e._i,
                r = e._f;
            return n === null || n === "" ? null : (typeof n == "string" && (e._i = n = U().preparse(n)), t.isMoment(n) ? (e = H({}, n), e._d = new Date(+n._d)) : r ? I(r) ? Q(e) : K(e) : Y(e), new D(e))
        }

        function rt(e, n) {
            t.fn[e] = t.fn[e + "s"] = function(e) {
                var t = this._isUTC ? "UTC" : "";
                return e != null ? (this._d["set" + t + n](e), this) : this._d["get" + t + n]()
            }
        }

        function it(e) {
            t.duration.fn[e] = function() {
                return this._data[e]
            }
        }

        function st(e, n) {
            t.duration.fn["as" + e] = function() {
                return +this / n
            }
        }
        var t, n = "2.0.0",
            r = Math.round,
            i, s = {},
            o = typeof module != "undefined" && module.exports,
            u = /^\/?Date\((\-?\d+)/i,
            a = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,
            f = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,
            l = /([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,
            c = /\d\d?/,
            h = /\d{1,3}/,
            p = /\d{3}/,
            d = /\d{1,4}/,
            v = /[+\-]?\d{1,6}/,
            m = /[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i,
            g = /Z|[\+\-]\d\d:?\d\d/i,
            y = /T/i,
            b = /[\+\-]?\d+(\.\d{1,3})?/,
            w = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,
            E = "YYYY-MM-DDTHH:mm:ssZ",
            S = [
                ["HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
                ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
                ["HH:mm", /(T| )\d\d:\d\d/],
                ["HH", /(T| )\d\d/]
            ],
            x = /([\+\-]|\d\d)/gi,
            T = "Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),
            N = {
                Milliseconds: 1,
                Seconds: 1e3,
                Minutes: 6e4,
                Hours: 36e5,
                Days: 864e5,
                Months: 2592e6,
                Years: 31536e6
            },
            C = {},
            k = "DDD w W M D d".split(" "),
            L = "M D H h m s w W".split(" "),
            A = {
                M: function() {
                    return this.month() + 1
                },
                MMM: function(e) {
                    return this.lang().monthsShort(this, e)
                },
                MMMM: function(e) {
                    return this.lang().months(this, e)
                },
                D: function() {
                    return this.date()
                },
                DDD: function() {
                    return this.dayOfYear()
                },
                d: function() {
                    return this.day()
                },
                dd: function(e) {
                    return this.lang().weekdaysMin(this, e)
                },
                ddd: function(e) {
                    return this.lang().weekdaysShort(this, e)
                },
                dddd: function(e) {
                    return this.lang().weekdays(this, e)
                },
                w: function() {
                    return this.week()
                },
                W: function() {
                    return this.isoWeek()
                },
                YY: function() {
                    return j(this.year() % 100, 2)
                },
                YYYY: function() {
                    return j(this.year(), 4)
                },
                YYYYY: function() {
                    return j(this.year(), 5)
                },
                a: function() {
                    return this.lang().meridiem(this.hours(), this.minutes(), !0)
                },
                A: function() {
                    return this.lang().meridiem(this.hours(), this.minutes(), !1)
                },
                H: function() {
                    return this.hours()
                },
                h: function() {
                    return this.hours() % 12 || 12
                },
                m: function() {
                    return this.minutes()
                },
                s: function() {
                    return this.seconds()
                },
                S: function() {
                    return ~~(this.milliseconds() / 100)
                },
                SS: function() {
                    return j(~~(this.milliseconds() / 10), 2)
                },
                SSS: function() {
                    return j(this.milliseconds(), 3)
                },
                Z: function() {
                    var e = -this.zone(),
                        t = "+";
                    return e < 0 && (e = -e, t = "-"), t + j(~~(e / 60), 2) + ":" + j(~~e % 60, 2)
                },
                ZZ: function() {
                    var e = -this.zone(),
                        t = "+";
                    return e < 0 && (e = -e, t = "-"), t + j(~~(10 * e / 6), 4)
                },
                X: function() {
                    return this.unix()
                }
            };
        while (k.length) i = k.pop(), A[i + "o"] = M(A[i]);
        while (L.length) i = L.pop(), A[i + i] = O(A[i], 2);
        A.DDDD = O(A.DDD, 3), _.prototype = {
            set: function(e) {
                var t, n;
                for (n in e) t = e[n], typeof t == "function" ? this[n] = t : this["_" + n] = t
            },
            _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            months: function(e) {
                return this._months[e.month()]
            },
            _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            monthsShort: function(e) {
                return this._monthsShort[e.month()]
            },
            monthsParse: function(e) {
                var n, r, i, s;
                this._monthsParse || (this._monthsParse = []);
                for (n = 0; n < 12; n++) {
                    this._monthsParse[n] || (r = t([2e3, n]), i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[n] = new RegExp(i.replace(".", ""), "i"));
                    if (this._monthsParse[n].test(e)) return n
                }
            },
            _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdays: function(e) {
                return this._weekdays[e.day()]
            },
            _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysShort: function(e) {
                return this._weekdaysShort[e.day()]
            },
            _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            weekdaysMin: function(e) {
                return this._weekdaysMin[e.day()]
            },
            _longDateFormat: {
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D YYYY",
                LLL: "MMMM D YYYY LT",
                LLLL: "dddd, MMMM D YYYY LT"
            },
            longDateFormat: function(e) {
                var t = this._longDateFormat[e];
                return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(e) {
                    return e.slice(1)
                }), this._longDateFormat[e] = t), t
            },
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            },
            _calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[last] dddd [at] LT",
                sameElse: "L"
            },
            calendar: function(e, t) {
                var n = this._calendar[e];
                return typeof n == "function" ? n.apply(t) : n
            },
            _relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            relativeTime: function(e, t, n, r) {
                var i = this._relativeTime[n];
                return typeof i == "function" ? i(e, t, n, r) : i.replace(/%d/i, e)
            },
            pastFuture: function(e, t) {
                var n = this._relativeTime[e > 0 ? "future" : "past"];
                return typeof n == "function" ? n(t) : n.replace(/%s/i, t)
            },
            ordinal: function(e) {
                return this._ordinal.replace("%d", e)
            },
            _ordinal: "%d",
            preparse: function(e) {
                return e
            },
            postformat: function(e) {
                return e
            },
            week: function(e) {
                return tt(e, this._week.dow, this._week.doy)
            },
            _week: {
                dow: 0,
                doy: 6
            }
        }, t = function(e, t, n) {
            return nt({
                _i: e,
                _f: t,
                _l: n,
                _isUTC: !1
            })
        }, t.utc = function(e, t, n) {
            return nt({
                _useUTC: !0,
                _isUTC: !0,
                _l: n,
                _i: e,
                _f: t
            })
        }, t.unix = function(e) {
            return t(e * 1e3)
        }, t.duration = function(e, n) {
            var r = t.isDuration(e),
                i = typeof e == "number",
                s = r ? e._data : i ? {} : e,
                o;
            return i && (n ? s[n] = e : s.milliseconds = e), o = new P(s), r && e.hasOwnProperty("_lang") && (o._lang = e._lang), o
        }, t.version = n, t.defaultFormat = E, t.lang = function(e, n) {
            var r;
            if (!e) return t.fn._lang._abbr;
            n ? R(e, n) : s[e] || U(e), t.duration.fn._lang = t.fn._lang = U(e)
        }, t.langData = function(e) {
            return e && e._lang && e._lang._abbr && (e = e._lang._abbr), U(e)
        }, t.isMoment = function(e) {
            return e instanceof D
        }, t.isDuration = function(e) {
            return e instanceof P
        }, t.fn = D.prototype = {
            clone: function() {
                return t(this)
            },
            valueOf: function() {
                return +this._d
            },
            unix: function() {
                return Math.floor(+this._d / 1e3)
            },
            toString: function() {
                return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            },
            toDate: function() {
                return this._d
            },
            toJSON: function() {
                return t.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            },
            toArray: function() {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
            },
            isValid: function() {
                return this._isValid == null && (this._a ? this._isValid = !q(this._a, (this._isUTC ? t.utc(this._a) : t(this._a)).toArray()) : this._isValid = !isNaN(this._d.getTime())), !!this._isValid
            },
            utc: function() {
                return this._isUTC = !0, this
            },
            local: function() {
                return this._isUTC = !1, this
            },
            format: function(e) {
                var n = X(this, e || t.defaultFormat);
                return this.lang().postformat(n)
            },
            add: function(e, n) {
                var r;
                return typeof e == "string" ? r = t.duration(+n, e) : r = t.duration(e, n), F(this, r, 1), this
            },
            subtract: function(e, n) {
                var r;
                return typeof e == "string" ? r = t.duration(+n, e) : r = t.duration(e, n), F(this, r, -1), this
            },
            diff: function(e, n, r) {
                var i = this._isUTC ? t(e).utc() : t(e).local(),
                    s = (this.zone() - i.zone()) * 6e4,
                    o, u;
                return n && (n = n.replace(/s$/, "")), n === "year" || n === "month" ? (o = (this.daysInMonth() + i.daysInMonth()) * 432e5, u = (this.year() - i.year()) * 12 + (this.month() - i.month()), u += (this - t(this).startOf("month") - (i - t(i).startOf("month"))) / o, n === "year" && (u /= 12)) : (o = this - i - s, u = n === "second" ? o / 1e3 : n === "minute" ? o / 6e4 : n === "hour" ? o / 36e5 : n === "day" ? o / 864e5 : n === "week" ? o / 6048e5 : o), r ? u : B(u)
            },
            from: function(e, n) {
                return t.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!n)
            },
            fromNow: function(e) {
                return this.from(t(), e)
            },
            calendar: function() {
                var e = this.diff(t().startOf("day"), "days", !0),
                    n = e < -6 ? "sameElse" : e < -1 ? "lastWeek" : e < 0 ? "lastDay" : e < 1 ? "sameDay" : e < 2 ? "nextDay" : e < 7 ? "nextWeek" : "sameElse";
                return this.format(this.lang().calendar(n, this))
            },
            isLeapYear: function() {
                var e = this.year();
                return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
            },
            isDST: function() {
                return this.zone() < t([this.year()]).zone() || this.zone() < t([this.year(), 5]).zone()
            },
            day: function(e) {
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return e == null ? t : this.add({
                    d: e - t
                })
            },
            startOf: function(e) {
                e = e.replace(/s$/, "");
                switch (e) {
                    case "year":
                        this.month(0);
                    case "month":
                        this.date(1);
                    case "week":
                    case "day":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return e === "week" && this.day(0), this
            },
            endOf: function(e) {
                return this.startOf(e).add(e.replace(/s?$/, "s"), 1).subtract("ms", 1)
            },
            isAfter: function(e, n) {
                return n = typeof n != "undefined" ? n : "millisecond", +this.clone().startOf(n) > +t(e).startOf(n)
            },
            isBefore: function(e, n) {
                return n = typeof n != "undefined" ? n : "millisecond", +this.clone().startOf(n) < +t(e).startOf(n)
            },
            isSame: function(e, n) {
                return n = typeof n != "undefined" ? n : "millisecond", +this.clone().startOf(n) === +t(e).startOf(n)
            },
            zone: function() {
                return this._isUTC ? 0 : this._d.getTimezoneOffset()
            },
            daysInMonth: function() {
                return t.utc([this.year(), this.month() + 1, 0]).date()
            },
            dayOfYear: function(e) {
                var n = r((t(this).startOf("day") - t(this).startOf("year")) / 864e5) + 1;
                return e == null ? n : this.add("d", e - n)
            },
            isoWeek: function(e) {
                var t = tt(this, 1, 4);
                return e == null ? t : this.add("d", (e - t) * 7)
            },
            week: function(e) {
                var t = this.lang().week(this);
                return e == null ? t : this.add("d", (e - t) * 7)
            },
            lang: function(t) {
                return t === e ? this._lang : (this._lang = U(t), this)
            }
        };
        for (i = 0; i < T.length; i++) rt(T[i].toLowerCase().replace(/s$/, ""), T[i]);
        rt("year", "FullYear"), t.fn.days = t.fn.day, t.fn.weeks = t.fn.week, t.fn.isoWeeks = t.fn.isoWeek, t.duration.fn = P.prototype = {
            weeks: function() {
                return B(this.days() / 7)
            },
            valueOf: function() {
                return this._milliseconds + this._days * 864e5 + this._months * 2592e6
            },
            humanize: function(e) {
                var t = +this,
                    n = et(t, !e, this.lang());
                return e && (n = this.lang().pastFuture(t, n)), this.lang().postformat(n)
            },
            lang: t.fn.lang
        };
        for (i in N) N.hasOwnProperty(i) && (st(i, N[i]), it(i.toLowerCase()));
        st("Weeks", 6048e5), t.lang("en", {
            ordinal: function(e) {
                var t = e % 10,
                    n = ~~(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                return e + n
            }
        }), o && (module.exports = t), typeof ender == "undefined" && (this.moment = t), typeof define == "function" && define.amd && define("moment", [], function() {
            return t
        })
    }.call(this), define("views/coke-panel-view", ["lib/jquery.transit", "underscore", "backbone", "views/panel-view", "models/user", "collections/comparables", "anim/cola", "anim/counter", "moment"], function(e, t, n, r, i, s, o, u, a) {
        var f = r.extend({
            model: i,
            initialize: function() {
                r.prototype.initialize.call(this);
                var e = this.$("#canvas-cola")[0];
                this.on("view:on", this.startAnimation, this), this.on("view:off", this.stopAnimation, this), this.model.on("change:income", this.update, this), this.cokeAnimation = o(e), this.counterpart = s.iNeedA("wage_earner"), this.counterAnimation1 = u(this.$(".counter.num-domestic-time")), this.counterAnimation2 = u(this.$(".counter.num-counterpart-time")), this.render(), this.model.on("change", this.tweetText, this)
            },
            render: function() {
                this.$(".counter.num-domestic-time").html("00:00:00"), this.$(".counter.num-counterpart-time").html("00:00:00");
                var e = a.duration(this.getUserCokeTime(), "minutes"),
                    t = a.duration(this.getCounterpartCokeTime(), "minutes");
                this.$(".txt-counterpart-location").text(this.counterpart.get("location")), this.$(".txt-counterpart-coke-time").text(t.humanize()), this.$(".txt-domestic-coke-time").text(e.humanize())
            },
            update: function() {
                this.cokeAnimation && this.cokeAnimation.reset(), this.counterAnimation1.reset(), this.counterAnimation2.reset(), this.render(), this.$("h5").css({
                    opacity: 0
                }), this.$(".cola-time").css({
                    opacity: 0
                })
            },
            startAnimation: function() {
                this.cokeAnimation.start(this.getCounterpartAnimationTime()), this.$("h5").transition({
                    opacity: 1,
                    duration: 400,
                    delay: 400
                });
                if (!window.GRL.is_mobile_vp) {
                    var e = a.duration(this.getUserCokeTime(), "minutes"),
                        t = a.duration(this.getCounterpartCokeTime(), "minutes");
                    this.counterAnimation1.start(Math.max(e.asSeconds(), 1), 0, null, .7, !1, window.GRL.constants.DOMESTIC_COKE_ANNIMATION_TIME), this.counterAnimation2.start(t.asSeconds(), 0, null, .7, !1, this.getCounterpartAnimationTime()), this.$(".cola-time").transition({
                        opacity: 1,
                        duration: 500,
                        delay: 600
                    })
                }
            },
            stopAnimation: function() {
                this.cokeAnimation.stop(), this.counterAnimation1.stop(), this.counterAnimation2.stop()
            },
            getCounterpartCokeTime: function() {
                var e = this.counterpart.get("hourly");
                return this.getCokeTime(e)
            },
            getUserCokeTime: function() {
                var e = this.model.get("hourly_income_ppp");
                return this.getCokeTime(e)
            },
            getCokeTime: function(e) {
                var t = e / window.GRL.constants.COST_COKE,
                    n = 60 / t;
                return n
            },
            getCounterpartAnimationTime: function() {
                var e = this.getUserCokeTime(),
                    t = this.getCounterpartCokeTime(),
                    n = window.GRL.constants.DOMESTIC_COKE_ANNIMATION_TIME,
                    r = e / n,
                    i = t / r;
                return Math.round(i)
            },
            tweetText: function(e) {
                var t = this.getCounterpartCokeTime() - this.getUserCokeTime(),
                    n = this.getCardUrl("cola", this.counterpart.get("location_id"), t);
                this.replaceTweetLink(this.getShareText() + this.getShareSubhead(), n)
            },
            share: function(e) {
                e.preventDefault();
                var t = this.getShareText(),
                    n = e.target.className,
                    i = this.getCounterpartCokeTime() - this.getUserCokeTime(),
                    s = {
                        panel: "cola",
                        number: i,
                        location_id: this.counterpart.get("location_id")
                    };
                r.prototype.share.call(this, n, t, s)
            },
            getShareText: function() {
                if (this.getCounterpartCokeTime() > this.getUserCokeTime()) var e = this.getCounterpartCokeTime() - this.getUserCokeTime(),
                    t = "longer";
                else var e = this.getUserCokeTime() - this.getCounterpartCokeTime(),
                    t = "less";
                return e = a.duration(e, "minutes"), "It takes a labourer in " + this.counterpart.get("location") + " " + e.humanize() + " " + t + " than me to earn a can of cola"
            },
            getShareSubhead: function() {
                return " Global #RichList"
            }
        });
        return f
    }), define("anim/iphone", ["jquery", "lib/imgpreload", "lib/TweenLite", "utils"], function(e, t, n, r) {
        var i = function(i) {
            function H() {
                D = "m", e(i).css({
                    maxWidth: "300px",
                    width: "100%"
                }), window.devicePixelRatio > 1 ? (P = 2, e(i).attr({
                    width: "600",
                    height: "370"
                })) : (P = 1, e(i).attr({
                    width: "300",
                    height: "185"
                })), w = 62 * P, E = 121 * P, S = 118 * P, x = 50 * P, T = 86 * P, N = 12 * P, C = 23 * P, k = 46 * P, L = -10 * P, A = 40 * P, O = 122 * P, M = 30 * P, _ = 4 * P, c = o + "img/iphone_" + D + "x" + P + ".png", h = o + "img/iphonecrack_" + D + "x" + P + ".png", p = o + "img/iphoneshadow_" + D + "x" + P + ".png", d = o + "img/iphonebit_" + D + "x" + P + ".png"
            }

            function B() {
                H(), t([c, h, p, d], function(e) {
                    c = e[0], h = e[1], p = e[2], d = e[3], l = e
                })
            }

            function j() {
                if (a || f) return;
                q()
            }

            function F() {}

            function I() {
                clearTimeout(f), clearInterval(a), f = null, a = null, u.clearRect(0, 0, 600, 370), v = {
                    y: -E - x,
                    r: -5,
                    shadow: 0,
                    crack: 0,
                    x1: C,
                    y1: k,
                    x2: C,
                    y2: k,
                    x3: C,
                    y3: k,
                    x4: C,
                    y4: k,
                    x5: C,
                    y5: k,
                    x6: C,
                    y6: k,
                    x7: C,
                    y7: k,
                    x8: C,
                    y8: k,
                    x9: C,
                    y9: k
                }
            }

            function q() {
                if (l) {
                    if (s) {
                        a = !0, z();
                        return
                    }
                    f = setTimeout(function() {
                        y = n.to(v, .3, {
                            shadow: 1,
                            ease: Quad.easeIn
                        }), m = n.to(v, .3, {
                            y: 0,
                            ease: Quad.easeIn
                        }), g = n.to(v, .3, {
                            r: 0,
                            ease: Quad.easeIn,
                            delay: .1
                        }), g = n.to(v, .3, {
                            r: 2,
                            ease: Quart.easeOut,
                            delay: .4
                        }), g = n.to(v, .2, {
                            r: -1,
                            ease: Quart.easeInOut,
                            delay: .7
                        }), g = n.to(v, .2, {
                            r: 0,
                            ease: Quart.easeIn,
                            delay: .9
                        }), b = n.to(v, .1, {
                            crack: .1 * P,
                            ease: Quart.easeOut,
                            delay: .3
                        }), b = n.to(v, 2, {
                            crack: .25 * P,
                            ease: Quart.easeOut,
                            delay: .4
                        }), a = setInterval(R, 20), f = setTimeout(function() {
                            U()
                        }, 300)
                    }, 800)
                } else f = setTimeout(q, 200)
            }

            function R() {
                u.clearRect(0, 0, 600, 370);
                if (v.r > 0) var e = w;
                else var e = 0;
                u.save(), u.translate(S, x), u.drawImage(p, 15 * P - T * .5 * v.shadow + 15 * P, S - 1 * P, T * v.shadow, N * v.shadow), u.save(), u.translate(e, E), u.rotate(v.r * Math.PI / 180), u.drawImage(c, -e, v.y - E), v.y == 0 && (u.save(), u.translate(11 * P - 75 * v.crack + 11 * P - e, 30 * P - 10 - (100 * P + 100) * .5 * v.crack + (30 * P - 10) - E), u.scale(v.crack, v.crack), u.beginPath(), u.moveTo(12, 239), u.lineTo(2, 329), u.lineTo(51, 255), u.lineTo(61, 353), u.lineTo(105, 305), u.lineTo(165, 349), u.lineTo(174, 315), u.lineTo(213, 344), u.lineTo(201, 300), u.lineTo(217, 296), u.lineTo(188, 205), u.lineTo(224, 191), u.lineTo(187, 132), u.lineTo(217, 109), u.lineTo(174, 94), u.lineTo(225, 39), u.lineTo(165, 45), u.lineTo(154, 0), u.lineTo(112, 47), u.lineTo(57, 0), u.lineTo(52, 39), u.lineTo(13, 35), u.lineTo(24, 72), u.lineTo(0, 86), u.lineTo(42, 146), u.lineTo(6, 185), u.lineTo(12, 239), u.closePath(), u.restore(), u.clip(), u.drawImage(h, 6 * P - e, 17 * P - E)), u.restore(), v.y == 0 && (u.drawImage(d, v.x1, v.y1, 1 * P, 1 * P), u.drawImage(d, v.x2, v.y2, 2 * P, 2 * P), u.drawImage(d, v.x3, v.y3, 3 * P, 3 * P), u.drawImage(d, v.x4, v.y4, 1 * P, 1 * P), u.drawImage(d, v.x5, v.y5, 2 * P, 2 * P), u.drawImage(d, v.x6, v.y6, 3 * P, 3 * P), u.drawImage(d, v.x7, v.y7, 1 * P, 1 * P), u.drawImage(d, v.x8, v.y8, 2 * P, 2 * P), u.drawImage(d, v.x9, v.y9, 3 * P, 3 * P)), u.restore()
            }

            function U() {
                n.to(v, Math.random() * .2 + .2, {
                    x1: Math.round(Math.random() * M) + L,
                    ease: Quart.easeOut
                }), n.to(v, Math.random() * .5 + .2, {
                    y1: Math.round(Math.random() * _) + O,
                    ease: Quad.easeIn
                }), n.to(v, Math.random() * .2 + .2, {
                    x2: Math.round(Math.random() * M) + L,
                    ease: Quart.easeOut
                }), n.to(v, Math.random() * .5 + .2, {
                    y2: Math.round(Math.random() * _) + O,
                    ease: Quad.easeIn
                }), n.to(v, Math.random() * .2 + .2, {
                    x3: Math.round(Math.random() * M) + L,
                    ease: Quart.easeOut
                }), n.to(v, Math.random() * .5 + .2, {
                    y3: Math.round(Math.random() * _) + O,
                    ease: Quad.easeIn
                }), n.to(v, Math.random() * .2 + .2, {
                    x4: Math.round(Math.random() * M) + L,
                    ease: Quart.easeOut
                }), n.to(v, Math.random() * .5 + .2, {
                    y4: Math.round(Math.random() * _) + O,
                    ease: Quad.easeIn
                }), n.to(v, Math.random() * .2 + .2, {
                    x5: Math.round(Math.random() * M) + L,
                    ease: Quart.easeOut
                }), n.to(v, Math.random() * .5 + .2, {
                    y5: Math.round(Math.random() * _) + O,
                    ease: Quad.easeIn
                }), n.to(v, Math.random() * .2 + .2, {
                    x6: Math.round(Math.random() * M) + A,
                    ease: Quart.easeOut
                }), n.to(v, Math.random() * .5 + .2, {
                    y6: Math.round(Math.random() * _) + O,
                    ease: Quad.easeIn
                }), n.to(v, Math.random() * .2 + .2, {
                    x7: Math.round(Math.random() * M) + A,
                    ease: Quart.easeOut
                }), n.to(v, Math.random() * .5 + .2, {
                    y7: Math.round(Math.random() * _) + O,
                    ease: Quad.easeIn
                }), n.to(v, Math.random() * .2 + .2, {
                    x8: Math.round(Math.random() * M) + A,
                    ease: Quart.easeOut
                }), n.to(v, Math.random() * .5 + .2, {
                    y8: Math.round(Math.random() * _) + O,
                    ease: Quad.easeIn
                }), n.to(v, Math.random() * .2 + .2, {
                    x9: Math.round(Math.random() * M) + A,
                    ease: Quart.easeOut
                }), n.to(v, Math.random() * .5 + .2, {
                    y9: Math.round(Math.random() * _) + O,
                    ease: Quad.easeIn
                }), f = setTimeout(function() {
                    clearInterval(a)
                }, 1e3)
            }

            function z() {
                u.clearRect(0, 0, 600, 370), u.save(), u.translate(S, x), u.drawImage(p, 15 * P - T * .5 + 15 * P, S - 1 * P), u.save(), u.translate(0, E), u.drawImage(c, 0, -E), u.drawImage(h, 6 * P - 0, 17 * P - E), u.restore(), u.restore()
            }
            var s = r.isCanvasPolyfill(i),
                o = window.GRL.staticURL,
                u = i.getContext("2d"),
                a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P;
            return B(), {
                start: j,
                stop: F,
                reset: I
            }
        };
        return i
    }), define("views/iphone-panel-view", ["lib/jquery.transit", "underscore", "backbone", "views/panel-view", "models/user", "collections/comparables", "anim/iphone", "anim/counter"], function(e, t, n, r, i, s, o, u) {
        var a = r.extend({
            model: i,
            initialize: function() {
                r.prototype.initialize.call(this);
                var e = this.$("#canvas-iphone")[0];
                this.on("view:on", this.startAnimation, this), this.on("view:off", this.stopAnimation, this), this.model.on("change", this.update, this), this.iphoneAnimation = o(e), this.counterAnimation1 = u(this.$(".counter.domestic-time")), this.counterAnimation2 = u(this.$(".counter.counterpart-time")), this.counterpart = s.iNeedA("wage_earner"), this.render(), this.model.on("change", this.tweetText, this)
            },
            render: function() {
                this.$(".counter.domestic-time").html("0"), this.$(".counter.counterpart-time").html("0");
                var e = moment.duration(this.getUserIphoneTime(), "hours"),
                    t = moment.duration(this.getCounterpartIphoneTime(), "hours");
                userPlural = Math.round(this.getDays(this.getUserIphoneTime())) === 1 ? "day" : "days", counterpartPlural = Math.round(this.getDays(this.getCounterpartIphoneTime())) === 1 ? "day" : "days", e.asHours() >= window.GRL.constants.HOURS_WORKED_PER_DAY ? this.$(".txt-domestic-iphone-time").text(Math.round(this.getDays(this.getUserIphoneTime())) + " " + userPlural) : this.$(".txt-domestic-iphone-time").text(e.humanize()), this.$(".txt-counterpart-iphone-time").text(Math.round(this.getDays(this.getCounterpartIphoneTime())) + " " + counterpartPlural), this.$(".txt-counterpart-location").text(this.counterpart.get("location")), this.$(".plural-user-days").html(userPlural), this.$(".plural-counterpart-days").html(counterpartPlural)
            },
            update: function() {
                this.iphoneAnimation && this.iphoneAnimation.reset(), this.counterAnimation1.reset(), this.counterAnimation2.reset(), this.render(), this.$(".iphone-titles").css({
                    opacity: 0
                })
            },
            startAnimation: function() {
                this.iphoneAnimation.start(), this.counterAnimation1.start(this.getDays(this.getUserIphoneTime()), 0, null, .4), this.counterAnimation2.start(this.getDays(this.getCounterpartIphoneTime()), 0, null, .4), this.$(".iphone-titles").transition({
                    opacity: 1,
                    duration: 500,
                    delay: 400
                })
            },
            stopAnimation: function() {
                this.counterAnimation1.stop(), this.counterAnimation2.stop(), this.iphoneAnimation.stop()
            },
            getDays: function(e) {
                var e = moment.duration(e, "hours"),
                    t = e.asHours() / window.GRL.constants.HOURS_WORKED_PER_DAY;
                return t
            },
            getCounterpartIphoneTime: function() {
                var e = this.counterpart.get("hourly");
                return this.getIphoneTime(e)
            },
            getUserIphoneTime: function() {
                var e = this.model.get("hourly_income_ppp");
                return this.getIphoneTime(e)
            },
            getIphoneTime: function(e) {
                var t = e / window.GRL.constants.COST_IPHONE,
                    n = 1 / t;
                return n
            },
            tweetText: function(e) {
                this.replaceTweetLink(this.getShareText() + this.getShareSubhead())
            },
            share: function(e) {
                e.preventDefault();
                var t = this.getShareText(),
                    n = e.target.className,
                    i = {
                        panel: "iphone",
                        number: this.getUserIphoneTime(),
                        location_id: this.counterpart.get("location_id")
                    };
                r.prototype.share.call(this, n, t, i)
            },
            getShareText: function() {
                if (this.getCounterpartIphoneTime() > this.getUserIphoneTime()) var e = this.getDays(this.getCounterpartIphoneTime()) - this.getDays(this.getUserIphoneTime()),
                    t = "longer";
                else var e = this.getDays(this.getUserIphoneTime()) - this.getDays(this.getCounterpartIphoneTime()),
                    t = "less";
                return e = moment.duration(e, "days"), "It takes a labourer in " + this.counterpart.get("location") + " " + e.humanize() + " " + t + " than me to afford an iPhone"
            },
            getShareSubhead: function() {
                return ". See your Global #RichList results: " + window.GRL.constants.BITLY_URL
            }
        });
        return a
    }), define("anim/people", ["jquery", "lib/imgpreload", "lib/TweenLite", "utils"], function(e, t, n, r) {
        var s = function(s) {
            function H() {
                window.GRL.is_mobile_vp ? (D = "m", e(s).css({
                    maxWidth: "300px",
                    width: "100%"
                }), window.devicePixelRatio > 1 ? (P = 2, e(s).attr({
                    width: "600",
                    height: "500"
                })) : (P = 1, e(s).attr({
                    width: "300",
                    height: "250"
                })), T = 13 * P, N = 29 * P, C = 56 * P, k = 68 * P, L = 4 * P, A = 64 * P, O = 141 * P, M = 149 * P, _ = -25 * P, a.translate(22 * P, 67 * P)) : (D = "d", e(s).css({
                    maxWidth: "430px",
                    width: "430px"
                }), window.devicePixelRatio > 1 ? (P = 2, e(s).attr({
                    width: "860",
                    height: "660"
                })) : (P = 1, e(s).attr({
                    width: "430",
                    height: "330"
                })), T = 19 * P, N = 42 * P, C = 64 * P, k = 79 * P, L = 7 * P, A = 74 * P, O = 260 * P, M = 213 * P, _ = -27 * P, a.translate(27 * P, 75 * P)), h = u + "img/person_" + D + "x" + P + ".png", p = u + "img/rich_" + D + "x" + P + ".png", d = u + "img/poor_" + D + "x" + P + ".png", v = u + "img/you_" + D + "x" + P + ".png", y = u + "img/tag_" + D + "x" + P + ".png", m = u + "img/richer_" + D + "x" + P + ".png", g = u + "img/poorer_" + D + "x" + P + ".png"
            }

            function B() {
                H(), t([h, p, d, v, y, m, g], function(e) {
                    h = e[0], p = e[1], d = e[2], v = e[3], y = e[4], m = e[5], g = e[6], c = e
                })
            }

            function j(e) {
                if (f || l) return;
                x = Math.min(e || 0, 99), q()
            }

            function F() {}

            function I() {
                clearTimeout(l), clearInterval(f), l = null, f = null, a.clearRect(-45, -150, 860, 660), E = {
                    tag: 0,
                    you: 0,
                    richer: 0,
                    poorer: 0
                }, w = [], b = [];
                for (var e = 0; e < 20; e++) b.push({
                    x: e * T,
                    y: 0 * N
                });
                for (var e = 19; e >= 0; e--) b.push({
                    x: e * T,
                    y: 1 * N
                });
                for (var e = 0; e < 20; e++) b.push({
                    x: e * T,
                    y: 2 * N
                });
                for (var e = 19; e >= 0; e--) b.push({
                    x: e * T,
                    y: 3 * N
                });
                for (var e = 0; e < 20; e++) b.push({
                    x: e * T,
                    y: 4 * N
                });
                S = b.length, x && c && R()
            }

            function q() {
                if (c) {
                    if (o) {
                        f = !0, W();
                        return
                    }
                    R(), n.to(E, .3, {
                        tag: 1,
                        delay: .6
                    }), n.to(E, .4, {
                        you: 1,
                        delay: .6
                    }), f = setInterval(U, 20)
                } else l = setTimeout(q, 200)
            }

            function R() {
                a.clearRect(-45, -150, 860, 660);
                for (var e = 0; e < b.length; e++)(e == 99 || e < b.length - w.length - 1) && a.drawImage(h, b[e].x, b[e].y)
            }

            function U() {
                R(), a.save(), a.globalAlpha = E.you, a.drawImage(v, b[b.length - 1].x, b[b.length - 1].y), a.restore(), a.drawImage(y, b[b.length - 1].x - C * .5 * E.tag + L, b[b.length - 1].y - A * E.tag, C * E.tag, k * E.tag), E.you == 1 && (clearInterval(f), E.tag = 0, E.you = 0, l = setTimeout(function() {
                    f = setInterval(z, 20)
                }, 300))
            }

            function z() {
                R(), S--, w.push(b[S]);
                for (i = 0; i < w.length; i++) i < b.length - x ? i == w.length - 1 || i == b.length - (x + 1) ? (a.drawImage(v, w[i].x, w[i].y), a.drawImage(y, w[i].x - C * .5 + L, w[i].y - A)) : a.drawImage(d, w[i].x, w[i].y) : i < b.length && (a.save(), a.globalCompositeOperation = "destination-over", a.drawImage(p, w[i].x, w[i].y), a.restore());
                i == b.length - x && (clearInterval(f), l = setTimeout(function() {
                    f = setInterval(z, 20)
                }, 1e3)), i == 1 && n.to(E, .5, {
                    poorer: 1
                }), x != b.length - 1 && (a.save(), x != 100 - i && (a.globalAlpha = E.poorer), a.drawImage(g, O, M), a.restore()), i > b.length - x && x != 0 && (a.save(), a.globalCompositeOperation = "destination-over", i == b.length - x + 1 && n.to(E, .2, {
                    richer: 1
                }), a.save(), a.globalAlpha = E.richer, a.drawImage(m, 0, _), a.restore(), a.restore()), S < -20 && clearInterval(f)
            }

            function W() {
                a.clearRect(-45, -150, 860, 660), w = b.reverse();
                for (i = 0; i < w.length; i++) i < b.length - x ? i == w.length - 1 || i == b.length - (x + 1) ? (a.drawImage(v, w[i].x, w[i].y), a.drawImage(y, w[i].x - C * .5 + L, w[i].y - A)) : a.drawImage(d, w[i].x, w[i].y) : i < b.length && (a.save(), a.globalCompositeOperation = "destination-over", a.drawImage(p, w[i].x, w[i].y), a.restore());
                x != b.length - 1 && a.drawImage(g, O, M), i > b.length - x && x != 0 && (a.save(), a.globalCompositeOperation = "destination-over", a.drawImage(m, 0, _), a.restore())
            }
            var o = r.isCanvasPolyfill(s),
                u = window.GRL.staticURL,
                a = s.getContext("2d"),
                f, l, c, h, p, d, v, m, g, y, b = [],
                w, E, S, x, T, N, C, k, L, A, O, M, _, D, P;
            return e(window).on("resizeWindow", function(e, t) {
                if (D != t) {
                    F(), c = null, B();
                    if (x || x == 0) I(), j(x)
                }
            }), B(), {
                start: j,
                stop: F,
                reset: I
            }
        };
        return s
    }), define("views/people-panel-view", ["lib/jquery.transit", "underscore", "backbone", "views/panel-view", "models/user", "anim/people", "anim/counter"], function(e, t, n, r, i, s, o) {
        var u = r.extend({
            model: i,
            type: "income",
            initialize: function() {
                var e = this.$("#canvas-people")[0];
                r.prototype.initialize.call(this), t.bindAll(this, "render", "share"), this.on("view:on", this.startAnimation, this), this.on("view:off", this.stopAnimation, this), this.model.on("change", this.update, this), this.peopleAnimation = s(e), this.counterAnimation1 = o(this.$(".counter.num-percent")), this.counterAnimation2 = o(this.$(".counter.num-position")), this.render(), this.model.on("change", this.tweetText, this)
            },
            getRank: function() {
                return Math.max(this.model.get("rank_" + this.type), 1)
            },
            getPercentile: function() {
                return this.model.get("percent_" + this.type)
            },
            getDecimalPlaces: function() {
                var e = 2;
                return this.getPercentile() < .001 ? e = 4 : this.getPercentile() < .01 && (e = 3), e
            },
            render: function() {
                this.$(".counter.num-percent").html("0.00"), this.$(".counter.num-position").html("0"), this.$(".suffix").text(this.ordinalSuffix(this.getRank()))
            },
            update: function() {
                this.peopleAnimation && this.peopleAnimation.reset(), this.counterAnimation1.reset(), this.counterAnimation2.reset(), this.render(), this.$("canvas").css({
                    opacity: 0
                }), this.$(".num").css({
                    opacity: 0
                }), this.$(".suffix").css({
                    opacity: 0
                }), this.$(".suffix").stop()
            },
            startAnimation: function() {
                this.peopleAnimation.start(parseInt(this.getPercentile(), 10)), this.counterAnimation1.start(this.getPercentile(), this.getDecimalPlaces(), null, .7), this.counterAnimation2.start(this.getRank(), 0, null, .7), this.getRank() > 60 ? this.$(".suffix").transition({
                    opacity: 1,
                    duration: 300,
                    delay: 3700
                }) : this.$(".suffix").css({
                    opacity: 1
                }), this.$("canvas").transition({
                    opacity: 1,
                    duration: 800,
                    delay: 300
                }), this.$(".num").transition({
                    opacity: 1,
                    duration: 500,
                    delay: 700
                })
            },
            stopAnimation: function() {
                this.peopleAnimation.stop(), this.counterAnimation1.stop(), this.counterAnimation2.stop()
            },
            tweetText: function(e) {
                var t = this.getCardUrl("people_" + this.route, 0, this.model.get("percent_" + this.route));
                this.replaceTweetLink(this.getShareText() + this.getShareSubhead(), t)
            },
            share: function(e) {
                e.preventDefault();
                var t = this.getShareText(),
                    n = e.target.className,
                    i = {
                        panel: "people_" + this.route,
                        number: this.model.get("percent_" + this.route)
                    };
                r.prototype.share.call(this, n, t, i)
            },
            getShareText: function() {
                var e = "I'm in the top " + this.getPercentile().toFixed(this.getDecimalPlaces()) + "% richest people in the world";
                return "income" === this.route && (e += " by income"), e
            },
            getShareSubhead: function() {
                return ". See your Global #RichList results now: "
            }
        });
        return u
    }), define("anim/calendar", ["jquery"], function(e) {
        var t = function(t) {
            function c() {
                s < 4 ? a.css("background-position", -l * s) : a.css("background-position", 0), s++, s == o ? (s = 0, o = h()) : s == 2 ? (i++, u.text(i)) : s == 1 && i == n && clearInterval(f)
            }

            function h() {
                return 6
            }

            function p(e) {
                n = e || i;
                if (f || i == e) return;
                setTimeout(function() {
                    f = setInterval(c, 40)
                }, 500)
            }

            function d() {
                clearInterval(f), f = null
            }

            function v() {
                d(), r = new Date, i = r.getFullYear(), s = 0, u.text(i)
            }
            var n, r = new Date,
                i = r.getFullYear(),
                s = 0,
                o = h();
            t.append("<div class='calendar-anim'><div class='date'>" + i + "</div><div class='img'></div></div>");
            var u = t.find(".date"),
                a = t.find(".img"),
                f = null,
                l = a.width();
            return e(window).on("resizeWindow", function(e, t) {
                l = a.width()
            }), {
                start: p,
                stop: d,
                reset: v
            }
        };
        return t
    }), define("views/calendar-panel-view", ["lib/jquery.transit", "underscore", "backbone", "views/panel-view", "models/user", "collections/comparables", "anim/calendar", "anim/counter"], function(e, t, n, r, i, s, o, u) {
        var a = r.extend({
            model: i,
            initialize: function() {
                r.prototype.initialize.call(this), this.on("view:on", this.startAnimation, this), this.on("view:off", this.stopAnimation, this), this.model.on("change", this.update, this), this.calendarAnimation = o(this.$(".calendar")), this.counterAnimation = u(this.$(".counter")), this.counterpart = s.iNeedA("wage_earner"), this.render(), this.model.on("change", this.tweetText, this)
            },
            render: function() {
                this.$(".counter").html("0"), this.$(".txt-user-sallary").html(this.model.get("income").toLocaleString()), this.$(".txt-counterpart-years").html(this.getCounterpartSallaryRatio().toLocaleString()), this.$(".plural-year").html(this.getCounterpartSallaryRatio() === 1 ? "year" : "years"), this.$(".lcu").text(this.model.get("user_location").get("symbol")), this.$(".txt-counterpart-location").text(this.counterpart.get("location"))
            },
            getCounterpartSallaryRatio: function() {
                var e = this.model.get("ppp_income"),
                    t = this.counterpart.get("annual"),
                    n = e / t;
                return parseInt(n, 10)
            },
            update: function() {
                var e = new Date,
                    t = e.getFullYear() + this.getCounterpartSallaryRatio();
                this.calendarAnimation.reset(), this.counterAnimation.reset(), this.render(), this.$(".num").css({
                    opacity: 0
                }), this.$(".word").css({
                    x: -50,
                    opacity: 0
                }), this.$(".calendar-anim").css({
                    y: -50,
                    opacity: 0
                })
            },
            startAnimation: function() {
                var e = window.GRL.is_mobile_vp ? 3 : 5,
                    t = new Date,
                    n = t.getFullYear() + this.getCounterpartSallaryRatio();
                this.calendarAnimation.start(n), this.counterAnimation.start(this.getCounterpartSallaryRatio(), 0, e, .4, !0), this.$(".num").transition({
                    opacity: 1,
                    duration: 500,
                    delay: 400
                }), this.$(".word").transition({
                    x: 0,
                    opacity: 1,
                    duration: 300,
                    delay: 600
                }), this.$(".calendar-anim").transition({
                    y: 0,
                    opacity: 1,
                    duration: 300,
                    delay: 800
                })
            },
            durationValue: function(e) {
                return e + "s"
            },
            stopAnimation: function() {
                this.calendarAnimation.stop(), this.counterAnimation.stop()
            },
            tweetText: function(e) {
                var t = this.getCardUrl("calendar", this.counterpart.get("location_id"), this.getCounterpartSallaryRatio());
                this.replaceTweetLink(this.getShareText() + this.getShareSubhead(), t)
            },
            share: function(e) {
                e.preventDefault();
                var t = this.getShareText(),
                    n = e.target.className,
                    i = {
                        panel: "calendar",
                        number: this.getCounterpartSallaryRatio(),
                        location_id: this.counterpart.get("location_id")
                    };
                r.prototype.share.call(this, n, t, i)
            },
            getShareText: function() {
                var e = this.getCounterpartSallaryRatio() === 1 ? "year" : "years";
                return "It takes a labourer in " + this.counterpart.get("location") + " " + this.getCounterpartSallaryRatio().toLocaleString() + " " + e + " to earn what I do in a year"
            },
            getShareSubhead: function() {
                return ". See your Global #RichList results: "
            }
        });
        return a
    }), define("views/doctor-panel-view", ["lib/jquery.transit", "underscore", "backbone", "views/panel-view", "models/user", "collections/comparables", "anim/counter"], function(e, t, n, r, i, s, o) {
        var u = r.extend({
            model: i,
            initialize: function() {
                r.prototype.initialize.call(this), this.on("view:on", this.startAnimation, this), this.on("view:off", this.stopAnimation, this), this.model.on("change", this.update, this), this.counterAnimation = o(this.$(".counter")), this.counterpart = s.iNeedA("doctor"), this.render(), this.model.on("change", this.tweetText, this)
            },
            render: function() {
                this.$(".counter").html("0"), this.$(".txt-equivalent-number").text(this.getCounterpartCostRatio().toLocaleString()), this.$(".plural-doctor").html(this.getCounterpartCostRatio() === 1 ? "doctor" : "doctors"), this.$(".txt-counterpart-location").text(this.counterpart.get("location"))
            },
            getCounterpartCostRatio: function() {
                var e = this.model.get("ppp_income"),
                    t = this.counterpart.get("monthly"),
                    n = e / t;
                return parseInt(n, 10)
            },
            update: function() {
                this.counterAnimation.reset(), this.render(), this.$(".doctor").css({
                    x: -50,
                    opacity: 0
                }), this.$(".word").css({
                    x: 30,
                    opacity: 0
                }), this.$(".counter").css({
                    x: 50,
                    opacity: 0
                })
            },
            startAnimation: function() {
                var e = window.GRL.is_mobile_vp ? 3 : 5;
                this.counterAnimation.start(this.getCounterpartCostRatio(), 0, e, .4, !0), this.$(".doctor").transition({
                    x: 0,
                    opacity: 1,
                    duration: 500,
                    delay: 400
                }), this.$(".word").transition({
                    x: 0,
                    opacity: 1,
                    duration: 200,
                    delay: 700
                }), this.$(".counter").transition({
                    x: 0,
                    opacity: 1,
                    duration: 500,
                    delay: 400
                })
            },
            stopAnimation: function() {
                this.counterAnimation.stop()
            },
            tweetText: function(e) {
                var t = this.getCardUrl("doctor", this.counterpart.get("location_id"), this.getCounterpartCostRatio());
                this.replaceTweetLink(this.getShareText() + this.getShareSubhead(), t)
            },
            share: function(e) {
                e.preventDefault();
                var t = this.getShareText(),
                    n = e.target.className,
                    i = {
                        panel: "doctor",
                        number: this.getCounterpartCostRatio(),
                        location_id: this.counterpart.get("location_id")
                    };
                r.prototype.share.call(this, n, t, i)
            },
            getShareText: function() {
                var e = this.getCounterpartCostRatio() === 1 ? "doctor" : "doctors";
                return "My monthly income could pay the monthly salaries of " + this.getCounterpartCostRatio().toLocaleString() + " " + e + " in " + this.counterpart.get("location")
            },
            getShareSubhead: function() {
                return " Global #RichList"
            }
        });
        return u
    }), define("views/form-panel-view", ["jquery", "underscore", "backbone", "views/panel-view", "models/user"], function(e, t, n, r, i) {
        var s = r.extend({
            model: i,
            events: {
                "click .submit": "triggerSubmit",
                "click .info": "showPopup",
                "click .close": "hidePopup",
                "focus input": "focus",
                "blur form": "blur",
                "click .popup": "hidePopup",
                "click .popup .popup-inner": "preventBub"
            },
            filters: {
                integer: function(e) {
                    if (e.length < 1) return 0;
                    try {
                        var t = e.match(/(([0-9]+.?)+)/);
                        return t = t[0].replace(",", ""), cleanValue = parseInt(t, 10), cleanValue
                    } catch (n) {
                        throw "Please enter a valid number"
                    }
                    return 0
                }
            },
            initialize: function() {
                r.prototype.initialize.call(this), t.bindAll(this, "bindFormInputs", "showPopup", "hidePopup", "triggerSubmit"), this.$form = this.$("form"), this.bindFormInputs(), this.route = window.location.pathname === "/" ? "income" : window.location.pathname
            },
            triggerSubmit: function() {
                this.$form.trigger("submit")
            },
            focus: function(t) {
                e(t.target).parent().addClass("active").siblings().removeClass("active")
            },
            blur: function(t) {
                e(".input-group").removeClass("active")
            },
            showPopup: function(t) {
                t.preventDefault(), window._gaq = window._gaq || [], window._gaq.push(["_trackPageview", this.route + "/Info"]), e("body").addClass("show-popup")
            },
            hidePopup: function(t) {
                t.preventDefault(), e("body").off("touchmove"), e("body").removeClass("show-popup")
            },
            preventBub: function(e) {
                e.stopPropagation()
            },
            validSubmission: function() {
                e(window).trigger("unlockfirst"), window._gaq = window._gaq || [], window._gaq.push(["_trackEvent", "Form", "Valid Submission"])
            },
            invalidSubmission: function() {
                e(window).trigger("lockfirst"), window._gaq = window._gaq || [], window._gaq.push(["_trackEvent", "Form", "In Valid Submission"])
            },
            bindFormInputs: function() {
                function i(t, n) {
                    if (!t.length) return;
                    r.push(t.attr("name")), t.parent().append(e('<p class="error">').text(n))
                }

                function s(e) {
                    var n = t(r).indexOf(e.attr("name"));
                    n > -1 && r.splice(n, 1), e.parent().find(".error").remove()
                }

                function o(e) {
                    var t = n.$form.find("select#country_code"),
                        r = t.val(),
                        o = !1;
                    s(t);
                    if ("false" === r) {
                        i(t, "Please select your location");
                        return
                    }
                    o = n.model.set("country_code", r);
                    if ("object" != typeof o) {
                        i(t, "Can't find that location");
                        return
                    }
                }
                var n = this,
                    r = [];
                this.$form.find("select#country_code").on("change", o), this.$form.on("submit", o), this.$form.on("submit", function(t) {
                    t.preventDefault(), n.$form.find('input[type="text"], input[type="number"]').each(function(t, r) {
                        var o = e(r),
                            u = o.val();
                        s(o);
                        try {
                            u = n.filters.integer(u)
                        } catch (a) {
                            i(o, "Please enter a valid number");
                            return
                        }
                        n.model.set(o.attr("name"), u)
                    }), n.$form.find("#wealth_3").each(function(t, r) {
                        var s = e(r),
                            o = n.filters.integer(s.val()),
                            u = n.model.get("wealth"),
                            a = o + u,
                            f = n.model.get("user_location").inPPP(a);
                        f > window.GRL.constants.MAX_WEALTH && i(s, "Warren Buffett, is that you? If not, please try again"), a === 0 ? i(s, "Please enter a number") : f < window.GRL.constants.MIN_WEALTH && i(s, "Sure about that? Please try again")
                    }), n.model.get("income") === 0 ? i(n.$form.find("#income"), "Please enter an income") : (n.model.get("ppp_income") > window.GRL.constants.MAX_INCOME || n.model.get("ppp_income") < window.GRL.constants.MIN_INCOME) && i(n.$form.find("#income"), "Sure about that? Please try again"), r.length ? n.invalidSubmission() : (n.$form.find("input, select").blur(), setTimeout(n.validSubmission, 200))
                }), this.$form.submit(function(e) {
                    e.preventDefault(), n.trigger("submit")
                })
            }
        });
        return s
    }), define("views/donate-2-panel-view", ["lib/jquery.transit", "underscore", "backbone", "views/panel-view", "models/user"], function(e, t, n, r, i, s, o) {
        var u = r.extend({
            model: i,
            initialize: function() {
                r.prototype.initialize.call(this), this.on("view:on", this.startAnimation, this), this.on("view:off", this.stopAnimation, this), this.model.on("change", this.update, this), this.render()
            },
            render: function() {
                window.suppress_extra_animation || (this.$(".coin").css({
                    rotateY: "810deg"
                }), this.$("h2").css({
                    opacity: 0
                }))
            },
            update: function() {
                this.render()
            },
            startAnimation: function() {
                window.suppress_extra_animation || (this.$(".coin").transition({
                    rotateY: "0deg",
                    delay: 200
                }, 1e3, "easeOutQuad"), this.$("h2").transition({
                    opacity: 1,
                    delay: 300
                }))
            },
            stopAnimation: function() {}
        });
        return u
    }), define("views/income-home-view", ["views/home-view", "views/donate-1-panel-view", "views/coke-panel-view", "views/iphone-panel-view", "views/people-panel-view", "views/calendar-panel-view", "views/doctor-panel-view", "views/form-panel-view", "views/donate-2-panel-view"], function(e, t, n, r, i, s, o, u, a) {
        var f = i.extend({
                type: "income"
            }),
            l = e.extend({
                panelViews: {
                    Donate1PanelView: t,
                    CokePanelView: n,
                    IphonePanelView: r,
                    PeoplePanelView: f,
                    CalendarPanelView: s,
                    DoctorPanelView: o,
                    FormPanelView: u,
                    Donate2PanelView: a
                }
            });
        return l
    }), define("anim/country", ["jquery", "lib/imgpreload", "lib/TweenLite", "utils"], function(e, t, n, r) {
        var s = function(s) {
            function M() {
                window.GRL.is_mobile_vp ? (A = "m", e(s).css({
                    maxWidth: "300px",
                    width: "100%"
                }), window.devicePixelRatio > 1 ? (O = 2, e(s).attr({
                    width: "600",
                    height: "284"
                })) : (O = 1, e(s).attr({
                    width: "300",
                    height: "142"
                })), b = 4 * O, w = 9 * O, E = 53 * O, S = 40 * O, x = 5 * O, T = 80 * O, N = 61 * O, C = 61 * O, k = 167 * O, L = 30 * O) : (A = "d", O = 1, e(s).attr({
                    width: "500",
                    height: "240"
                }), e(s).css({
                    maxWidth: "500px",
                    width: "500px"
                }), b = 7, w = 15, E = 91, S = 68, x = 0, T = 143, N = 100, C = 112, k = 280, L = 56), h = u + "img/countrybig_" + A + "x" + O + ".png", p = u + "img/countrysml_" + A + "x" + O + ".png", d = u + "img/countrytag_" + A + "x" + O + ".png"
            }

            function _() {
                M(), t([h, p, d], function(e) {
                    h = e[0], p = e[1], d = e[2], c = e
                })
            }

            function D(e) {
                if (f || l) return;
                y = e || 44, B()
            }

            function P() {}

            function H() {
                clearTimeout(l), clearInterval(f), l = null, f = null, a.restore(), a.clearRect(0, 0, 600, 284), m = {
                    a: 0,
                    s: 0
                }, v = [];
                for (var e = 0; e < 22; e++) v.push({
                    x: e * b,
                    y: 0 * w
                });
                for (var e = 0; e < 22; e++) v.push({
                    x: e * b,
                    y: 1 * w
                });
                for (var e = 0; e < 22; e++) v.push({
                    x: e * b,
                    y: 2 * w
                });
                for (var e = 0; e < 22; e++) v.push({
                    x: e * b,
                    y: 3 * w
                });
                g = 0, y && c
            }

            function B() {
                if (c) {
                    if (o) {
                        f = !0, I();
                        return
                    }
                    n.to(m, .5, {
                        a: 1,
                        delay: .5
                    }), n.to(m, .3, {
                        s: 1,
                        delay: .7
                    }), f = setInterval(j, 20)
                } else l = setTimeout(B, 200)
            }

            function j() {
                a.clearRect(0, 0, 300, 300), a.save(), a.globalAlpha = m.a, a.drawImage(h, N, C), a.restore(), a.drawImage(d, E + x * 2 - (E + x) * m.s, T - S * .5 * m.s, E * m.s, S * m.s);
                if (m.s == 1 && m.a == 1) {
                    clearInterval(f), a.save();
                    var e = L;
                    y < 23 ? e += 27 : y < 45 ? e += 18 : y < 67 && (e += 9), a.translate(k, e), l = setTimeout(function() {
                        f = setInterval(F, 20)
                    }, 200)
                }
            }

            function F() {
                g < y && g < 88 ? (a.drawImage(p, v[g].x, v[g].y), g++) : clearInterval(f)
            }

            function I() {
                a.clearRect(0, 0, 300, 300), a.drawImage(h, N, C), a.drawImage(d, E + x * 2 - (E + x), T - S * .5, E, S), a.save(), a.translate(k, L);
                for (i = 0; i < Math.min(y, 88); i++) a.drawImage(p, v[i].x, v[i].y);
                a.restore()
            }
            var o = r.isCanvasPolyfill(s),
                u = window.GRL.staticURL,
                a = s.getContext("2d"),
                f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O;
            return e(window).on("resizeWindow", function(e, t) {
                if (A != t) {
                    P(), c = null, _();
                    if (y || y == 0) H(), D(y)
                }
            }), _(), {
                start: D,
                stop: P,
                reset: H
            }
        };
        return s
    }), define("views/country-panel-view", ["lib/jquery.transit", "underscore", "backbone", "views/panel-view", "models/user", "collections/comparables", "anim/country", "anim/counter", "moment"], function(e, t, n, r, i, s, o, u, a) {
        var f = r.extend({
            model: i,
            initialize: function() {
                r.prototype.initialize.call(this);
                var e = this.$("#canvas-country")[0];
                this.on("view:on", this.startAnimation, this), this.on("view:off", this.stopAnimation, this), this.model.on("change", this.update, this), this.countryAnimation = o(e), this.counterAnimation = u(this.$(".counter")), this.counterpart = s.iNeedA("wealth_person"), this.render(), this.model.on("change", this.tweetText, this)
            },
            render: function() {
                this.$(".counter").html("0"), this.$(".txt-counterpart-location").text(this.counterpart.get("location")), this.$(".txt-counterpart-number").text(this.getCounterpartCostRatio().toLocaleString()), this.$(".plural-person").html(this.getCounterpartCostRatio() === 1 ? "person" : "people")
            },
            update: function() {
                this.countryAnimation && this.countryAnimation.reset(), this.counterAnimation.reset(), this.render(), this.$(".num").css({
                    opacity: 0
                })
            },
            getCounterpartCostRatio: function() {
                var e = this.model.get("ppp_wealth"),
                    t = this.counterpart.get("unit_cost"),
                    n = e / t;
                return Math.round(n)
            },
            startAnimation: function() {
                var e = this.getCounterpartCostRatio() || 0,
                    t = window.GRL.is_mobile_vp ? 4 : 3;
                this.countryAnimation.start(e), this.counterAnimation.start(e, 0, t, 1), this.$(".num.static").transition({
                    opacity: 1,
                    duration: 500,
                    delay: 500
                }), this.$(".num.counter").transition({
                    opacity: 1,
                    duration: 500,
                    delay: 1200
                })
            },
            stopAnimation: function() {
                this.countryAnimation.stop(), this.counterAnimation.stop()
            },
            tweetText: function(e) {
                var t = this.getCardUrl("country", this.counterpart.get("location_id"), this.getCounterpartCostRatio());
                this.replaceTweetLink(this.getShareText() + this.getShareSubhead(), t)
            },
            share: function(e) {
                e.preventDefault();
                var t = this.getShareText(),
                    n = e.target.className,
                    i = {
                        panel: "country",
                        number: this.getCounterpartCostRatio(),
                        location_id: this.counterpart.get("location_id")
                    };
                r.prototype.share.call(this, n, t, i)
            },
            getShareText: function() {
                var e = this.getCounterpartCostRatio() === 1 ? "person" : "people";
                return "My personal wealth is equal to the combined wealth of " + this.getCounterpartCostRatio().toLocaleString() + " " + e + " in " + this.counterpart.get("location")
            },
            getShareSubhead: function() {
                return " Global #RichList"
            }
        });
        return f
    }), define("anim/family", ["jquery", "lib/imgpreload", "lib/TweenLite", "utils"], function(e, t, n, r) {
        var i = function(i) {
            function H() {
                window.GRL.is_mobile_vp ? (D = "m", e(i).css({
                    maxWidth: "135px",
                    width: "135px"
                }), window.devicePixelRatio > 1 ? (P = 2, e(i).attr({
                    width: "270",
                    height: "250"
                })) : (P = 1, e(i).attr({
                    width: "135",
                    height: "125"
                })), g = 49 * P, y = 52 * P, b = 0 * P, w = 50 * P, E = 64 * P, S = 55 * P, x = 54 * P, T = 50 * P, N = 27 * P, C = 34 * P, k = 103 * P, L = 82 * P, A = 61 * P, O = 47 * P, M = 22 * P, _ = 77 * P) : (D = "d", e(i).css({
                    maxWidth: "180px",
                    width: "180px"
                }), window.devicePixelRatio > 1 ? (P = 2, e(i).attr({
                    width: "360",
                    height: "314"
                })) : (P = 1, e(i).attr({
                    width: "180",
                    height: "157"
                })), g = 71 * P, y = 76 * P, b = 0 * P, w = 50 * P, E = 87 * P, S = 75 * P, x = 74 * P, T = 50 * P, N = 38 * P, C = 48 * P, k = 141 * P, L = 93 * P, A = 85 * P, O = 66 * P, M = 35 * P, _ = 84 * P), c = o + "img/apple_" + D + "x" + P + ".png", h = o + "img/corn_" + D + "x" + P + ".png", p = o + "img/meat_" + D + "x" + P + ".png", d = o + "img/rice_" + D + "x" + P + ".png"
            }

            function B() {
                H(), t([c, h, p, d], function(e) {
                    c = e[0], h = e[1], p = e[2], d = e[3], l = e
                })
            }

            function j() {
                if (a || f) return;
                q()
            }

            function F() {}

            function I() {
                clearTimeout(f), clearInterval(a), f = null, a = null, u.clearRect(0, 0, 400, 400), v = {
                    appleY: -C - 10,
                    cornY: -y - 10,
                    meatY: -O - 10,
                    riceY: -S - 10,
                    appleR: 6,
                    cornR: 5,
                    meatR: -8,
                    riceR: -5
                }
            }

            function q() {
                if (l) {
                    if (s) {
                        a = !0, U();
                        return
                    }
                    f = setTimeout(function() {
                        n.to(v, .2, {
                            cornY: w,
                            ease: Quad.easeIn,
                            delay: .2
                        }), n.to(v, .2, {
                            cornR: 0,
                            ease: Quad.easeIn,
                            delay: .3
                        }), n.to(v, .3, {
                            riceY: T,
                            ease: Quart.easeIn,
                            delay: .4
                        }), n.to(v, .3, {
                            riceR: 0,
                            ease: Quad.easeIn,
                            delay: .5
                        }), n.to(v, .3, {
                            appleY: L,
                            ease: Quad.easeIn,
                            delay: .5
                        }), n.to(v, .3, {
                            appleR: 3,
                            ease: Quad.easeIn,
                            delay: .6
                        }), n.to(v, .3, {
                            appleR: -3,
                            ease: Quart.easeInOut,
                            delay: .9
                        }), n.to(v, .3, {
                            appleR: 2,
                            ease: Quart.easeInOut,
                            delay: 1.2
                        }), n.to(v, .3, {
                            appleR: -2,
                            ease: Quart.easeInOut,
                            delay: 1.5
                        }), n.to(v, .3, {
                            appleR: 1,
                            ease: Quart.easeInOut,
                            delay: 1.8
                        }), n.to(v, .2, {
                            appleR: -1,
                            ease: Quart.easeInOut,
                            delay: 2.1
                        }), n.to(v, .2, {
                            appleR: .5,
                            ease: Quart.easeInOut,
                            delay: 2.3
                        }), n.to(v, .2, {
                            appleR: -0.5,
                            ease: Quart.easeInOut,
                            delay: 2.5
                        }), n.to(v, .2, {
                            appleR: 0,
                            ease: Quart.easeIn,
                            delay: 2.7
                        }), n.to(v, .3, {
                            meatY: _,
                            ease: Quad.easeIn,
                            delay: .6
                        }), n.to(v, .3, {
                            meatR: 0,
                            ease: Quad.easeIn,
                            delay: .7
                        }), f = setTimeout(function() {
                            clearInterval(a)
                        }, 3e3)
                    }, 500), a = setInterval(R, 20)
                } else f = setTimeout(q, 200)
            }

            function R() {
                u.clearRect(0, 0, 400, 400), u.save();
                if (v.riceR > 0) var e = E;
                else var e = 0;
                u.translate(e + x, v.riceY + S), u.rotate(v.riceR * Math.PI / 180), u.drawImage(d, -e, -S), u.restore(), u.save();
                if (v.cornR > 0) var e = g;
                else var e = 0;
                u.translate(e + b, v.cornY + y), u.rotate(v.cornR * Math.PI / 180), u.drawImage(h, -e, -y), u.restore(), u.save();
                if (v.appleR > 0) var e = N;
                else var e = 0;
                u.translate(e + k, v.appleY + C), u.rotate(v.appleR * Math.PI / 180), u.drawImage(c, -e, -C), u.restore(), u.save();
                if (v.meatR > 0) var e = A;
                else var e = 0;
                u.translate(e + M, v.meatY + O), u.rotate(v.meatR * Math.PI / 180), u.drawImage(p, -e, -O), u.restore()
            }

            function U() {
                u.clearRect(0, 0, 400, 400), u.drawImage(d, x, T), u.drawImage(h, b, w), u.drawImage(c, k, L), u.drawImage(p, M, _)
            }
            var s = r.isCanvasPolyfill(i),
                o = window.GRL.staticURL,
                u = i.getContext("2d"),
                a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P;
            return e(window).on("resizeWindow", function(e, t) {
                D != t && (F(), l = null, B(), I(), j())
            }), B(), {
                start: j,
                stop: F,
                reset: I
            }
        };
        return i
    }), define("views/family-panel-view", ["lib/jquery.transit", "underscore", "backbone", "views/panel-view", "models/user", "collections/comparables", "anim/family", "anim/counter"], function(e, t, n, r, i, s, o, u) {
        var a = r.extend({
            model: i,
            initialize: function() {
                r.prototype.initialize.call(this);
                var e = this.$("#canvas-family")[0];
                this.on("view:on", this.startAnimation, this), this.on("view:off", this.stopAnimation, this), this.model.on("change", this.update, this), this.familyAnimation = o(e), this.counterAnimation = u(this.$(".counter")), this.counterpart = s.iNeedA("family"), this.render(), this.model.on("change", this.tweetText, this)
            },
            getMonthsOrYears: function() {
                var e = this.getMonths();
                if (e > 12) {
                    var t = Math.round(e / 12);
                    return {
                        num: t,
                        unit: "years"
                    }
                }
                return {
                    num: e,
                    unit: "months"
                }
            },
            getMonths: function() {
                var e = this.model.get("ppp_wealth"),
                    t = this.counterpart.get("monthly"),
                    n = e * .01,
                    r = Math.round(n / t);
                return r
            },
            render: function() {
                this.$(".counter").html("0"), this.$(".txt-equivalent-number").text(this.getMonthsOrYears().num.toLocaleString()), this.$(".txt-counterpart-location").text(this.counterpart.get("location"));
                var e = this.getMonthsOrYears().unit === "years" ? "year" : "month";
                plural = this.getMonthsOrYears().num === 1 ? "" : "s", this.$(".timespan").html(e + plural)
            },
            update: function() {
                this.familyAnimation && this.familyAnimation.reset(), this.counterAnimation.reset(), this.render(), this.$(".num").css({
                    opacity: 0
                }), this.$(".word").css({
                    x: -50,
                    opacity: 0
                })
            },
            startAnimation: function() {
                var e = window.GRL.is_mobile_vp ? 3 : 4;
                this.familyAnimation.start(), this.counterAnimation.start(this.getMonthsOrYears().num, 0, e, .4, !0), this.$(".num").transition({
                    opacity: 1,
                    duration: 500,
                    delay: 400
                }), this.$(".word").transition({
                    x: 0,
                    opacity: 1,
                    duration: 200,
                    delay: 700
                })
            },
            stopAnimation: function() {
                this.familyAnimation.stop(), this.counterAnimation.stop()
            },
            tweetText: function(e) {
                var t = this.getCardUrl("family", this.counterpart.get("location_id"), this.getMonths());
                this.replaceTweetLink(this.getShareText() + this.getShareSubhead(), t)
            },
            share: function(e) {
                e.preventDefault();
                var t = this.getShareText(),
                    n = e.target.className,
                    i = {
                        panel: "family",
                        number: this.getMonths(),
                        location_id: this.counterpart.get("location_id")
                    };
                r.prototype.share.call(this, n, t, i)
            },
            getShareText: function() {
                var e = this.getMonthsOrYears().unit === "years" ? "year" : "month";
                return plural = this.getMonthsOrYears().num === 1 ? "" : "s", "1% of my wealth could feed a family in " + this.counterpart.get("location") + " for " + this.getMonthsOrYears().num.toLocaleString() + " " + e + plural
            },
            getShareSubhead: function() {
                return ". See your Global #RichList results now: "
            }
        });
        return a
    }), define("views/mosquito-panel-view", ["lib/jquery.transit", "underscore", "backbone", "views/panel-view", "models/user", "collections/comparables", "anim/counter"], function(e, t, n, r, i, s, o) {
        var u = r.extend({
            model: i,
            initialize: function() {
                r.prototype.initialize.call(this), this.on("view:on", this.startAnimation, this), this.on("view:off", this.stopAnimation, this), this.model.on("change", this.update, this), this.counterAnimation = o(this.$(".counter")), this.counterpart = s.iNeedA("net"), this.render(), this.model.on("change", this.tweetText, this)
            },
            getNets: function() {
                var e = this.model.get("ppp_wealth"),
                    t = this.counterpart.get("unit_cost"),
                    n = e / t;
                return Math.round(n)
            },
            render: function() {
                this.$(".counter").html("0"), this.$(".txt-equivalent-number").text(this.getNets().toLocaleString()), this.$(".txt-counterpart-location").text(this.counterpart.get("location"))
            },
            update: function() {
                this.counterAnimation.reset(), this.render(), this.$(".num").css({
                    y: 100,
                    opacity: 0
                }), this.$(".word").css({
                    y: 10,
                    opacity: 0
                }), this.$(".mosquito").css({
                    y: -100,
                    opacity: 0
                })
            },
            startAnimation: function() {
                var e = window.GRL.is_mobile_vp ? 5 : 6;
                this.counterAnimation.start(this.getNets(), 0, e, .4), this.$(".num").transition({
                    y: 0,
                    opacity: 1,
                    duration: 500,
                    delay: 400
                }), this.$(".word").transition({
                    y: 0,
                    opacity: 1,
                    duration: 300,
                    delay: 900
                }), this.$(".mosquito").transition({
                    y: 0,
                    opacity: 1,
                    duration: 500,
                    delay: 400
                })
            },
            stopAnimation: function() {
                this.counterAnimation.stop()
            },
            tweetText: function(e) {
                var t = this.getCardUrl("mosquito", this.counterpart.get("location_id"), this.getNets());
                this.replaceTweetLink(this.getShareText() + this.getShareSubhead(), t)
            },
            share: function(e) {
                e.preventDefault();
                var t = this.getShareText(),
                    n = e.target.className,
                    i = {
                        panel: "mosquito",
                        number: this.getNets(),
                        location_id: this.counterpart.get("location_id")
                    };
                r.prototype.share.call(this, n, t, i)
            },
            getShareText: function() {
                return "My wealth could pay for " + this.getNets().toLocaleString() + " life saving mosquito nets in " + this.counterpart.get("location")
            },
            getShareSubhead: function() {
                return " Global #RichList"
            }
        });
        return u
    }), define("views/donate-panel-view-wealth-1", ["jquery", "underscore", "backbone", "views/panel-view", "models/user", "anim/counter"], function(e, t, n, r, i, s) {
        var o = r.extend({
            model: i,
            events: {
                "click a.next": "nextPanel",
                "click .btn": "donateLink",
                "click .charity-open, .charity-tooltip": "charityTooltip"
            },
            initialize: function() {
                r.prototype.initialize.call(this), this.on("view:on", this.startAnimation, this), this.on("view:off", this.stopAnimation, this), this.model.on("change", this.update, this), this.render()
            },
            render: function() {
                var e = this.model.get("suggested_donation");
                this.$(".counter").html(window.GRL.constants.SUGGESTED_DONATION), this.$(".txt-suggested").text(e.toFixed(2)), this.$(".lcu").text(this.model.get("user_location").get("symbol")), this.model.needsCurrencyConversion() ? this.$(".conversion").show() : this.$(".conversion").hide()
            },
            update: function() {
                this.render(), this.$(".num").css({
                    opacity: 0
                })
            },
            startAnimation: function() {
                this.$(".num").transition({
                    opacity: 1,
                    duration: 500,
                    delay: 400
                })
            },
            stopAnimation: function() {}
        });
        return o
    }), define("views/wealth-home-view", ["views/home-view", "views/people-panel-view", "views/country-panel-view", "views/family-panel-view", "views/mosquito-panel-view", "views/form-panel-view", "views/donate-panel-view-wealth-1", "views/donate-2-panel-view"], function(e, t, n, r, i, s, o, u) {
        var a = t.extend({
                type: "wealth"
            }),
            f = e.extend({
                panelViews: {
                    PeoplePanelView: a,
                    CountryPanelView: n,
                    FamilyPanelView: r,
                    MosquitoPanelView: i,
                    FormPanelView: s,
                    DonatePanelViewWealth1: o,
                    Donate2PanelView: u
                }
            });
        return f
    }), require(["!domReady", "jquery", "underscore", "backbone", "views/income-home-view", "views/wealth-home-view"], function(e, t, n, r, i, s) {
        e(function() {
            var e = t("#homeView"),
                n;
            window.is_handheld = !1, e.hasClass("income") ? n = new i({
                $el: e
            }) : n = new s({
                $el: e
            })
        })
    }), define("app", function() {});