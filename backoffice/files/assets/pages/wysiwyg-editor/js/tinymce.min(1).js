// 4.5.1 (2016-12-07)
! function(e, t) {
    "use strict";

    function n(e, t) {
        for (var n, r = [], i = 0; i < e.length; ++i) {
            if (n = s[e[i]] || o(e[i]), !n) throw "module definition dependecy not found: " + e[i];
            r.push(n)
        }
        t.apply(null, r)
    }

    function r(e, r, i) {
        if ("string" != typeof e) throw "invalid module definition, module id must be defined and be a string";
        if (r === t) throw "invalid module definition, dependencies must be specified";
        if (i === t) throw "invalid module definition, definition function must be specified";
        n(r, function() {
            s[e] = i.apply(null, arguments)
        })
    }

    function i(e) {
        return !!s[e]
    }

    function o(t) {
        for (var n = e, r = t.split(/[.\/]/), i = 0; i < r.length; ++i) {
            if (!n[r[i]]) return;
            n = n[r[i]]
        }
        return n
    }

    function a(n) {
        var r, i, o, a, l;
        for (r = 0; r < n.length; r++) {
            i = e, o = n[r], a = o.split(/[.\/]/);
            for (var c = 0; c < a.length - 1; ++c) i[a[c]] === t && (i[a[c]] = {}), i = i[a[c]];
            i[a[a.length - 1]] = s[o]
        }
        if (e.AMDLC_TESTS) {
            l = e.privateModules || {};
            for (o in s) l[o] = s[o];
            for (r = 0; r < n.length; r++) delete l[n[r]];
            e.privateModules = l
        }
    }
    var s = {},
        l = "tinymce/geom/Rect",
        c = "tinymce/util/Promise",
        u = "tinymce/util/Delay",
        d = "tinymce/Env",
        f = "tinymce/dom/EventUtils",
        h = "tinymce/dom/Sizzle",
        p = "tinymce/util/Arr",
        m = "tinymce/util/Tools",
        g = "tinymce/dom/DomQuery",
        v = "tinymce/html/Styles",
        y = "tinymce/dom/TreeWalker",
        b = "tinymce/dom/Range",
        C = "tinymce/html/Entities",
        x = "tinymce/dom/StyleSheetLoader",
        w = "tinymce/dom/DOMUtils",
        E = "tinymce/dom/ScriptLoader",
        N = "tinymce/AddOnManager",
        _ = "tinymce/dom/NodeType",
        S = "tinymce/text/Zwsp",
        k = "tinymce/caret/CaretContainer",
        T = "tinymce/dom/RangeUtils",
        R = "tinymce/NodeChange",
        A = "tinymce/html/Node",
        B = "tinymce/html/Schema",
        D = "tinymce/html/SaxParser",
        L = "tinymce/html/DomParser",
        M = "tinymce/html/Writer",
        P = "tinymce/html/Serializer",
        O = "tinymce/dom/Serializer",
        H = "tinymce/dom/TridentSelection",
        I = "tinymce/util/VK",
        F = "tinymce/dom/ControlSelection",
        z = "tinymce/util/Fun",
        U = "tinymce/caret/CaretCandidate",
        W = "tinymce/geom/ClientRect",
        V = "tinymce/text/ExtendingChar",
        $ = "tinymce/caret/CaretPosition",
        q = "tinymce/caret/CaretBookmark",
        j = "tinymce/dom/BookmarkManager",
        Y = "tinymce/dom/Selection",
        X = "tinymce/dom/ElementUtils",
        K = "tinymce/fmt/Preview",
        G = "tinymce/fmt/Hooks",
        J = "tinymce/Formatter",
        Q = "tinymce/undo/Diff",
        Z = "tinymce/undo/Fragments",
        ee = "tinymce/undo/Levels",
        te = "tinymce/UndoManager",
        ne = "tinymce/EnterKey",
        re = "tinymce/ForceBlocks",
        ie = "tinymce/caret/CaretUtils",
        oe = "tinymce/caret/CaretWalker",
        ae = "tinymce/InsertList",
        se = "tinymce/InsertContent",
        le = "tinymce/EditorCommands",
        ce = "tinymce/util/URI",
        ue = "tinymce/util/Class",
        de = "tinymce/util/EventDispatcher",
        fe = "tinymce/data/Binding",
        he = "tinymce/util/Observable",
        pe = "tinymce/data/ObservableObject",
        me = "tinymce/ui/Selector",
        ge = "tinymce/ui/Collection",
        ve = "tinymce/ui/DomUtils",
        ye = "tinymce/ui/BoxUtils",
        be = "tinymce/ui/ClassList",
        Ce = "tinymce/ui/ReflowQueue",
        xe = "tinymce/ui/Control",
        we = "tinymce/ui/Factory",
        Ee = "tinymce/ui/KeyboardNavigation",
        Ne = "tinymce/ui/Container",
        _e = "tinymce/ui/DragHelper",
        Se = "tinymce/ui/Scrollable",
        ke = "tinymce/ui/Panel",
        Te = "tinymce/ui/Movable",
        Re = "tinymce/ui/Resizable",
        Ae = "tinymce/ui/FloatPanel",
        Be = "tinymce/ui/Window",
        De = "tinymce/ui/MessageBox",
        Le = "tinymce/WindowManager",
        Me = "tinymce/ui/Tooltip",
        Pe = "tinymce/ui/Widget",
        Oe = "tinymce/ui/Progress",
        He = "tinymce/ui/Notification",
        Ie = "tinymce/NotificationManager",
        Fe = "tinymce/dom/NodePath",
        ze = "tinymce/util/Quirks",
        Ue = "tinymce/EditorObservable",
        We = "tinymce/Mode",
        Ve = "tinymce/Shortcuts",
        $e = "tinymce/file/Uploader",
        qe = "tinymce/file/Conversions",
        je = "tinymce/file/ImageScanner",
        Ye = "tinymce/file/BlobCache",
        Xe = "tinymce/file/UploadStatus",
        Ke = "tinymce/EditorUpload",
        Ge = "tinymce/caret/FakeCaret",
        Je = "tinymce/dom/Dimensions",
        Qe = "tinymce/caret/LineWalker",
        Ze = "tinymce/caret/LineUtils",
        et = "tinymce/dom/MousePosition",
        tt = "tinymce/DragDropOverrides",
        nt = "tinymce/SelectionOverrides",
        rt = "tinymce/util/Uuid",
        it = "tinymce/ui/Sidebar",
        ot = "tinymce/Editor",
        at = "tinymce/util/I18n",
        st = "tinymce/FocusManager",
        lt = "tinymce/EditorManager",
        ct = "tinymce/LegacyInput",
        ut = "tinymce/util/XHR",
        dt = "tinymce/util/JSON",
        ft = "tinymce/util/JSONRequest",
        ht = "tinymce/util/JSONP",
        pt = "tinymce/util/LocalStorage",
        mt = "tinymce/Compat",
        gt = "tinymce/ui/Layout",
        vt = "tinymce/ui/AbsoluteLayout",
        yt = "tinymce/ui/Button",
        bt = "tinymce/ui/ButtonGroup",
        Ct = "tinymce/ui/Checkbox",
        xt = "tinymce/ui/ComboBox",
        wt = "tinymce/ui/ColorBox",
        Et = "tinymce/ui/PanelButton",
        Nt = "tinymce/ui/ColorButton",
        _t = "tinymce/util/Color",
        St = "tinymce/ui/ColorPicker",
        kt = "tinymce/ui/Path",
        Tt = "tinymce/ui/ElementPath",
        Rt = "tinymce/ui/FormItem",
        At = "tinymce/ui/Form",
        Bt = "tinymce/ui/FieldSet",
        Dt = "tinymce/content/LinkTargets",
        Lt = "tinymce/ui/FilePicker",
        Mt = "tinymce/ui/FitLayout",
        Pt = "tinymce/ui/FlexLayout",
        Ot = "tinymce/ui/FlowLayout",
        Ht = "tinymce/ui/FormatControls",
        It = "tinymce/ui/GridLayout",
        Ft = "tinymce/ui/Iframe",
        zt = "tinymce/ui/InfoBox",
        Ut = "tinymce/ui/Label",
        Wt = "tinymce/ui/Toolbar",
        Vt = "tinymce/ui/MenuBar",
        $t = "tinymce/ui/MenuButton",
        qt = "tinymce/ui/MenuItem",
        jt = "tinymce/ui/Throbber",
        Yt = "tinymce/ui/Menu",
        Xt = "tinymce/ui/ListBox",
        Kt = "tinymce/ui/Radio",
        Gt = "tinymce/ui/ResizeHandle",
        Jt = "tinymce/ui/SelectBox",
        Qt = "tinymce/ui/Slider",
        Zt = "tinymce/ui/Spacer",
        en = "tinymce/ui/SplitButton",
        tn = "tinymce/ui/StackLayout",
        nn = "tinymce/ui/TabPanel",
        rn = "tinymce/ui/TextBox",
        on = "tinymce/Register";
    r(l, [], function() {
        function e(e, t, n) {
            var r, i, a, s, l, u;
            return r = t.x, i = t.y, a = e.w, s = e.h, l = t.w, u = t.h, n = (n || "").split(""), "b" === n[0] && (i += u), "r" === n[1] && (r += l), "c" === n[0] && (i += c(u / 2)), "c" === n[1] && (r += c(l / 2)), "b" === n[3] && (i -= s), "r" === n[4] && (r -= a), "c" === n[3] && (i -= c(s / 2)), "c" === n[4] && (r -= c(a / 2)), o(r, i, a, s)
        }

        function t(t, n, r, i) {
            var o, a;
            for (a = 0; a < i.length; a++)
                if (o = e(t, n, i[a]), o.x >= r.x && o.x + o.w <= r.w + r.x && o.y >= r.y && o.y + o.h <= r.h + r.y) return i[a];
            return null
        }

        function n(e, t, n) {
            return o(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n)
        }

        function r(e, t) {
            var n, r, i, a;
            return n = l(e.x, t.x), r = l(e.y, t.y), i = s(e.x + e.w, t.x + t.w), a = s(e.y + e.h, t.y + t.h), i - n < 0 || a - r < 0 ? null : o(n, r, i - n, a - r)
        }

        function i(e, t, n) {
            var r, i, a, s, c, u, d, f, h, p;
            return c = e.x, u = e.y, d = e.x + e.w, f = e.y + e.h, h = t.x + t.w, p = t.y + t.h, r = l(0, t.x - c), i = l(0, t.y - u), a = l(0, d - h), s = l(0, f - p), c += r, u += i, n && (d += r, f += i, c -= a, u -= s), d -= a, f -= s, o(c, u, d - c, f - u)
        }

        function o(e, t, n, r) {
            return {
                x: e,
                y: t,
                w: n,
                h: r
            }
        }

        function a(e) {
            return o(e.left, e.top, e.width, e.height)
        }
        var s = Math.min,
            l = Math.max,
            c = Math.round;
        return {
            inflate: n,
            relativePosition: e,
            findBestRelativePosition: t,
            intersect: r,
            clamp: i,
            create: o,
            fromClientRect: a
        }
    }), r(c, [], function() {
        function e(e, t) {
            return function() {
                e.apply(t, arguments)
            }
        }

        function t(t) {
            if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof t) throw new TypeError("not a function");
            this._state = null, this._value = null, this._deferreds = [], s(t, e(r, this), e(i, this))
        }

        function n(e) {
            var t = this;
            return null === this._state ? void this._deferreds.push(e) : void l(function() {
                var n = t._state ? e.onFulfilled : e.onRejected;
                if (null === n) return void(t._state ? e.resolve : e.reject)(t._value);
                var r;
                try {
                    r = n(t._value)
                } catch (i) {
                    return void e.reject(i)
                }
                e.resolve(r)
            })
        }

        function r(t) {
            try {
                if (t === this) throw new TypeError("A promise cannot be resolved with itself.");
                if (t && ("object" == typeof t || "function" == typeof t)) {
                    var n = t.then;
                    if ("function" == typeof n) return void s(e(n, t), e(r, this), e(i, this))
                }
                this._state = !0, this._value = t, o.call(this)
            } catch (a) {
                i.call(this, a)
            }
        }

        function i(e) {
            this._state = !1, this._value = e, o.call(this)
        }

        function o() {
            for (var e = 0, t = this._deferreds.length; e < t; e++) n.call(this, this._deferreds[e]);
            this._deferreds = null
        }

        function a(e, t, n, r) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = r
        }

        function s(e, t, n) {
            var r = !1;
            try {
                e(function(e) {
                    r || (r = !0, t(e))
                }, function(e) {
                    r || (r = !0, n(e))
                })
            } catch (i) {
                if (r) return;
                r = !0, n(i)
            }
        }
        if (window.Promise) return window.Promise;
        var l = t.immediateFn || "function" == typeof setImmediate && setImmediate || function(e) {
                setTimeout(e, 1)
            },
            c = Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };
        return t.prototype["catch"] = function(e) {
            return this.then(null, e)
        }, t.prototype.then = function(e, r) {
            var i = this;
            return new t(function(t, o) {
                n.call(i, new a(e, r, t, o))
            })
        }, t.all = function() {
            var e = Array.prototype.slice.call(1 === arguments.length && c(arguments[0]) ? arguments[0] : arguments);
            return new t(function(t, n) {
                function r(o, a) {
                    try {
                        if (a && ("object" == typeof a || "function" == typeof a)) {
                            var s = a.then;
                            if ("function" == typeof s) return void s.call(a, function(e) {
                                r(o, e)
                            }, n)
                        }
                        e[o] = a, 0 === --i && t(e)
                    } catch (l) {
                        n(l)
                    }
                }
                if (0 === e.length) return t([]);
                for (var i = e.length, o = 0; o < e.length; o++) r(o, e[o])
            })
        }, t.resolve = function(e) {
            return e && "object" == typeof e && e.constructor === t ? e : new t(function(t) {
                t(e)
            })
        }, t.reject = function(e) {
            return new t(function(t, n) {
                n(e)
            })
        }, t.race = function(e) {
            return new t(function(t, n) {
                for (var r = 0, i = e.length; r < i; r++) e[r].then(t, n)
            })
        }, t
    }), r(u, [c], function(e) {
        function t(e, t) {
            function n(e) {
                window.setTimeout(e, 0)
            }
            var r, i = window.requestAnimationFrame,
                o = ["ms", "moz", "webkit"];
            for (r = 0; r < o.length && !i; r++) i = window[o[r] + "RequestAnimationFrame"];
            i || (i = n), i(e, t)
        }

        function n(e, t) {
            return "number" != typeof t && (t = 0), setTimeout(e, t)
        }

        function r(e, t) {
            return "number" != typeof t && (t = 1), setInterval(e, t)
        }

        function i(e) {
            return clearTimeout(e)
        }

        function o(e) {
            return clearInterval(e)
        }

        function a(e, t) {
            var r, i;
            return i = function() {
                var i = arguments;
                clearTimeout(r), r = n(function() {
                    e.apply(this, i)
                }, t)
            }, i.stop = function() {
                clearTimeout(r)
            }, i
        }
        var s;
        return {
            requestAnimationFrame: function(n, r) {
                return s ? void s.then(n) : void(s = new e(function(e) {
                    r || (r = document.body), t(e, r)
                }).then(n))
            },
            setTimeout: n,
            setInterval: r,
            setEditorTimeout: function(e, t, r) {
                return n(function() {
                    e.removed || t()
                }, r)
            },
            setEditorInterval: function(e, t, n) {
                var i;
                return i = r(function() {
                    e.removed ? clearInterval(i) : t()
                }, n)
            },
            debounce: a,
            throttle: a,
            clearInterval: o,
            clearTimeout: i
        }
    }), r(d, [], function() {
        function e(e) {
            return "matchMedia" in window && matchMedia(e).matches
        }
        var t = navigator,
            n = t.userAgent,
            r, i, o, a, s, l, c, u, d, f, h, p, m;
        r = window.opera && window.opera.buildNumber, d = /Android/.test(n), i = /WebKit/.test(n), o = !i && !r && /MSIE/gi.test(n) && /Explorer/gi.test(t.appName), o = o && /MSIE (\w+)\./.exec(n)[1], a = n.indexOf("Trident/") != -1 && (n.indexOf("rv:") != -1 || t.appName.indexOf("Netscape") != -1) && 11, s = n.indexOf("Edge/") != -1 && !o && !a && 12, o = o || a || s, l = !i && !a && /Gecko/.test(n), c = n.indexOf("Mac") != -1, u = /(iPad|iPhone)/.test(n), f = "FormData" in window && "FileReader" in window && "URL" in window && !!URL.createObjectURL, h = e("only screen and (max-device-width: 480px)") && (d || u), p = e("only screen and (min-width: 800px)") && (d || u), m = n.indexOf("Windows Phone") != -1, s && (i = !1);
        var g = !u || f || n.match(/AppleWebKit\/(\d*)/)[1] >= 534;
        return {
            opera: r,
            webkit: i,
            ie: o,
            gecko: l,
            mac: c,
            iOS: u,
            android: d,
            contentEditable: g,
            transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            caretAfter: 8 != o,
            range: window.getSelection && "Range" in window,
            documentMode: o && !s ? document.documentMode || 7 : 10,
            fileApi: f,
            ceFalse: o === !1 || o > 8,
            canHaveCSP: o === !1 || o > 11,
            desktop: !h && !p,
            windowsPhone: m
        }
    }), r(f, [u, d], function(e, t) {
        function n(e, t, n, r) {
            e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent && e.attachEvent("on" + t, n)
        }

        function r(e, t, n, r) {
            e.removeEventListener ? e.removeEventListener(t, n, r || !1) : e.detachEvent && e.detachEvent("on" + t, n)
        }

        function i(e, t) {
            var n, r = t;
            return n = e.path, n && n.length > 0 && (r = n[0]), e.deepPath && (n = e.deepPath(), n && n.length > 0 && (r = n[0])), r
        }

        function o(e, n) {
            function r() {
                return !1
            }

            function o() {
                return !0
            }
            var a, s = n || {},
                l;
            for (a in e) u[a] || (s[a] = e[a]);
            if (s.target || (s.target = s.srcElement || document), t.experimentalShadowDom && (s.target = i(e, s.target)), e && c.test(e.type) && e.pageX === l && e.clientX !== l) {
                var d = s.target.ownerDocument || document,
                    f = d.documentElement,
                    h = d.body;
                s.pageX = e.clientX + (f && f.scrollLeft || h && h.scrollLeft || 0) - (f && f.clientLeft || h && h.clientLeft || 0), s.pageY = e.clientY + (f && f.scrollTop || h && h.scrollTop || 0) - (f && f.clientTop || h && h.clientTop || 0)
            }
            return s.preventDefault = function() {
                s.isDefaultPrevented = o, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            }, s.stopPropagation = function() {
                s.isPropagationStopped = o, e && (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0)
            }, s.stopImmediatePropagation = function() {
                s.isImmediatePropagationStopped = o, s.stopPropagation()
            }, s.isDefaultPrevented || (s.isDefaultPrevented = r, s.isPropagationStopped = r, s.isImmediatePropagationStopped = r), "undefined" == typeof s.metaKey && (s.metaKey = !1), s
        }

        function a(t, i, o) {
            function a() {
                o.domLoaded || (o.domLoaded = !0, i(u))
            }

            function s() {
                ("complete" === c.readyState || "interactive" === c.readyState && c.body) && (r(c, "readystatechange", s), a())
            }

            function l() {
                try {
                    c.documentElement.doScroll("left")
                } catch (t) {
                    return void e.setTimeout(l)
                }
                a()
            }
            var c = t.document,
                u = {
                    type: "ready"
                };
            return o.domLoaded ? void i(u) : (c.addEventListener ? "complete" === c.readyState ? a() : n(t, "DOMContentLoaded", a) : (n(c, "readystatechange", s), c.documentElement.doScroll && t.self === t.top && l()), void n(t, "load", a))
        }

        function s() {
            function e(e, t) {
                var n, r, o, a, s = i[t];
                if (n = s && s[e.type])
                    for (r = 0, o = n.length; r < o; r++)
                        if (a = n[r], a && a.func.call(a.scope, e) === !1 && e.preventDefault(), e.isImmediatePropagationStopped()) return
            }
            var t = this,
                i = {},
                s, c, u, d, f;
            c = l + (+new Date).toString(32), d = "onmouseenter" in document.documentElement, u = "onfocusin" in document.documentElement, f = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, s = 1, t.domLoaded = !1, t.events = i, t.bind = function(r, l, h, p) {
                function m(t) {
                    e(o(t || E.event), g)
                }
                var g, v, y, b, C, x, w, E = window;
                if (r && 3 !== r.nodeType && 8 !== r.nodeType) {
                    for (r[c] ? g = r[c] : (g = s++, r[c] = g, i[g] = {}), p = p || r, l = l.split(" "), y = l.length; y--;) b = l[y], x = m, C = w = !1, "DOMContentLoaded" === b && (b = "ready"), t.domLoaded && "ready" === b && "complete" == r.readyState ? h.call(p, o({
                        type: b
                    })) : (d || (C = f[b], C && (x = function(t) {
                        var n, r;
                        if (n = t.currentTarget, r = t.relatedTarget, r && n.contains) r = n.contains(r);
                        else
                            for (; r && r !== n;) r = r.parentNode;
                        r || (t = o(t || E.event), t.type = "mouseout" === t.type ? "mouseleave" : "mouseenter", t.target = n, e(t, g))
                    })), u || "focusin" !== b && "focusout" !== b || (w = !0, C = "focusin" === b ? "focus" : "blur", x = function(t) {
                        t = o(t || E.event), t.type = "focus" === t.type ? "focusin" : "focusout", e(t, g)
                    }), v = i[g][b], v ? "ready" === b && t.domLoaded ? h({
                        type: b
                    }) : v.push({
                        func: h,
                        scope: p
                    }) : (i[g][b] = v = [{
                        func: h,
                        scope: p
                    }], v.fakeName = C, v.capture = w, v.nativeHandler = x, "ready" === b ? a(r, x, t) : n(r, C || b, x, w)));
                    return r = v = 0, h
                }
            }, t.unbind = function(e, n, o) {
                var a, s, l, u, d, f;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return t;
                if (a = e[c]) {
                    if (f = i[a], n) {
                        for (n = n.split(" "), l = n.length; l--;)
                            if (d = n[l], s = f[d]) {
                                if (o)
                                    for (u = s.length; u--;)
                                        if (s[u].func === o) {
                                            var h = s.nativeHandler,
                                                p = s.fakeName,
                                                m = s.capture;
                                            s = s.slice(0, u).concat(s.slice(u + 1)), s.nativeHandler = h, s.fakeName = p, s.capture = m, f[d] = s
                                        }
                                o && 0 !== s.length || (delete f[d], r(e, s.fakeName || d, s.nativeHandler, s.capture))
                            }
                    } else {
                        for (d in f) s = f[d], r(e, s.fakeName || d, s.nativeHandler, s.capture);
                        f = {}
                    }
                    for (d in f) return t;
                    delete i[a];
                    try {
                        delete e[c]
                    } catch (g) {
                        e[c] = null
                    }
                }
                return t
            }, t.fire = function(n, r, i) {
                var a;
                if (!n || 3 === n.nodeType || 8 === n.nodeType) return t;
                i = o(null, i), i.type = r, i.target = n;
                do a = n[c], a && e(i, a), n = n.parentNode || n.ownerDocument || n.defaultView || n.parentWindow; while (n && !i.isPropagationStopped());
                return t
            }, t.clean = function(e) {
                var n, r, i = t.unbind;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return t;
                if (e[c] && i(e), e.getElementsByTagName || (e = e.document), e && e.getElementsByTagName)
                    for (i(e), r = e.getElementsByTagName("*"), n = r.length; n--;) e = r[n], e[c] && i(e);
                return t
            }, t.destroy = function() {
                i = {}
            }, t.cancel = function(e) {
                return e && (e.preventDefault(), e.stopImmediatePropagation()), !1
            }
        }
        var l = "mce-data-",
            c = /^(?:mouse|contextmenu)|click/,
            u = {
                keyLocation: 1,
                layerX: 1,
                layerY: 1,
                returnValue: 1,
                webkitMovementX: 1,
                webkitMovementY: 1,
                keyIdentifier: 1
            };
        return s.Event = new s, s.Event.bind(window, "ready", function() {}), s
    }), r(h, [], function() {
        function e(e, t, n, r) {
            var i, o, a, s, l, c, d, h, p, m;
            if ((t ? t.ownerDocument || t : z) !== D && B(t), t = t || D, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (M && !r) {
                if (i = ve.exec(e))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && I(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (i[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = i[3]) && x.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(a)), n
                    }
                if (x.qsa && (!P || !P.test(e))) {
                    if (h = d = F, p = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (c = _(e), (d = t.getAttribute("id")) ? h = d.replace(be, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", l = c.length; l--;) c[l] = h + f(c[l]);
                        p = ye.test(e) && u(t.parentNode) || t, m = c.join(",")
                    }
                    if (m) try {
                        return Z.apply(n, p.querySelectorAll(m)), n
                    } catch (g) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return k(e.replace(se, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[F] = !0, e
        }

        function i(e) {
            var t = D.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) w.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function u(e) {
            return e && typeof e.getElementsByTagName !== Y && e
        }

        function d() {}

        function f(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function h(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = W++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, a) {
                var s, l, c = [U, o];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (l = t[F] || (t[F] = {}), (s = l[r]) && s[0] === U && s[1] === o) return c[2] = s[2];
                            if (l[r] = c, c[2] = e(t, n, a)) return !0
                        }
            }
        }

        function p(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function m(t, n, r) {
            for (var i = 0, o = n.length; i < o; i++) e(t, n[i], r);
            return r
        }

        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), c && t.push(s)));
            return a
        }

        function v(e, t, n, i, o, a) {
            return i && !i[F] && (i = v(i)), o && !o[F] && (o = v(o, a)), r(function(r, a, s, l) {
                var c, u, d, f = [],
                    h = [],
                    p = a.length,
                    v = r || m(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? v : g(v, f, e, s, l),
                    b = n ? o || (r ? e : p || i) ? [] : a : y;
                if (n && n(y, b, s, l), i)
                    for (c = g(b, h), i(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[h[u]] = !(y[h[u]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                            o(null, b = [], c, l)
                        }
                        for (u = b.length; u--;)(d = b[u]) && (c = o ? te.call(r, d) : f[u]) > -1 && (r[c] = !(a[c] = d))
                    }
                } else b = g(b === a ? b.splice(p, b.length) : b), o ? o(null, a, b, l) : Z.apply(a, b)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, l = h(function(e) {
                    return e === t
                }, a, !0), c = h(function(e) {
                    return te.call(t, e) > -1
                }, a, !0), u = [function(e, n, r) {
                    return !o && (r || n !== T) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                }]; s < i; s++)
                if (n = w.relative[e[s].type]) u = [h(p(u), n)];
                else {
                    if (n = w.filter[e[s].type].apply(null, e[s].matches), n[F]) {
                        for (r = ++s; r < i && !w.relative[e[r].type]; r++);
                        return v(s > 1 && p(u), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, s < r && y(e.slice(s, r)), r < i && y(e = e.slice(r)), r < i && f(e))
                    }
                    u.push(n)
                }
            return p(u)
        }

        function b(t, n) {
            var i = n.length > 0,
                o = t.length > 0,
                a = function(r, a, s, l, c) {
                    var u, d, f, h = 0,
                        p = "0",
                        m = r && [],
                        v = [],
                        y = T,
                        b = r || o && w.find.TAG("*", c),
                        C = U += null == y ? 1 : Math.random() || .1,
                        x = b.length;
                    for (c && (T = a !== D && a); p !== x && null != (u = b[p]); p++) {
                        if (o && u) {
                            for (d = 0; f = t[d++];)
                                if (f(u, a, s)) {
                                    l.push(u);
                                    break
                                }
                            c && (U = C)
                        }
                        i && ((u = !f && u) && h--, r && m.push(u))
                    }
                    if (h += p, i && p !== h) {
                        for (d = 0; f = n[d++];) f(m, v, a, s);
                        if (r) {
                            if (h > 0)
                                for (; p--;) m[p] || v[p] || (v[p] = J.call(l));
                            v = g(v)
                        }
                        Z.apply(l, v), c && !r && v.length > 0 && h + n.length > 1 && e.uniqueSort(l)
                    }
                    return c && (U = C, T = y), m
                };
            return i ? r(a) : a
        }
        var C, x, w, E, N, _, S, k, T, R, A, B, D, L, M, P, O, H, I, F = "sizzle" + -new Date,
            z = window.document,
            U = 0,
            W = 0,
            V = n(),
            $ = n(),
            q = n(),
            j = function(e, t) {
                return e === t && (A = !0), 0
            },
            Y = typeof t,
            X = 1 << 31,
            K = {}.hasOwnProperty,
            G = [],
            J = G.pop,
            Q = G.push,
            Z = G.push,
            ee = G.slice,
            te = G.indexOf || function(e) {
                for (var t = 0, n = this.length; t < n; t++)
                    if (this[t] === e) return t;
                return -1
            },
            ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            re = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = "\\[" + re + "*(" + ie + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + re + "*\\]",
            ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
            le = new RegExp("^" + re + "*," + re + "*"),
            ce = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
            ue = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]", "g"),
            de = new RegExp(ae),
            fe = new RegExp("^" + ie + "$"),
            he = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
            },
            pe = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            be = /'|\\/g,
            Ce = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
            xe = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            Z.apply(G = ee.call(z.childNodes), z.childNodes), G[z.childNodes.length].nodeType
        } catch (we) {
            Z = {
                apply: G.length ? function(e, t) {
                    Q.apply(e, ee.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        x = e.support = {}, N = e.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, B = e.setDocument = function(e) {
            function t(e) {
                try {
                    return e.top
                } catch (t) {}
                return null
            }
            var n, r = e ? e.ownerDocument || e : z,
                o = r.defaultView;
            return r !== D && 9 === r.nodeType && r.documentElement ? (D = r, L = r.documentElement, M = !N(r), o && o !== t(o) && (o.addEventListener ? o.addEventListener("unload", function() {
                B()
            }, !1) : o.attachEvent && o.attachEvent("onunload", function() {
                B()
            })), x.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = i(function(e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = ge.test(r.getElementsByClassName), x.getById = i(function(e) {
                return L.appendChild(e).id = F, !r.getElementsByName || !r.getElementsByName(F).length
            }), x.getById ? (w.find.ID = function(e, t) {
                if (typeof t.getElementById !== Y && M) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, w.filter.ID = function(e) {
                var t = e.replace(Ce, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete w.find.ID, w.filter.ID = function(e) {
                var t = e.replace(Ce, xe);
                return function(e) {
                    var n = typeof e.getAttributeNode !== Y && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), w.find.TAG = x.getElementsByTagName ? function(e, t) {
                if (typeof t.getElementsByTagName !== Y) return t.getElementsByTagName(e)
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, w.find.CLASS = x.getElementsByClassName && function(e, t) {
                if (M) return t.getElementsByClassName(e)
            }, O = [], P = [], (x.qsa = ge.test(r.querySelectorAll)) && (i(function(e) {
                e.innerHTML = "<select msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + re + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || P.push("\\[" + re + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || P.push(":checked")
            }), i(function(e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + re + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
            })), (x.matchesSelector = ge.test(H = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function(e) {
                x.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), O.push("!=", ae)
            }), P = P.length && new RegExp(P.join("|")), O = O.length && new RegExp(O.join("|")), n = ge.test(L.compareDocumentPosition), I = n || ge.test(L.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, j = n ? function(e, t) {
                if (e === t) return A = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === z && I(z, e) ? -1 : t === r || t.ownerDocument === z && I(z, t) ? 1 : R ? te.call(R, e) - te.call(R, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return A = !0, 0;
                var n, i = 0,
                    o = e.parentNode,
                    s = t.parentNode,
                    l = [e],
                    c = [t];
                if (!o || !s) return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : R ? te.call(R, e) - te.call(R, t) : 0;
                if (o === s) return a(e, t);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (n = t; n = n.parentNode;) c.unshift(n);
                for (; l[i] === c[i];) i++;
                return i ? a(l[i], c[i]) : l[i] === z ? -1 : c[i] === z ? 1 : 0
            }, r) : D
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== D && B(t), n = n.replace(ue, "='$1']"), x.matchesSelector && M && (!O || !O.test(n)) && (!P || !P.test(n))) try {
                var r = H.call(t, n);
                if (r || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
            } catch (i) {}
            return e(n, D, null, [t]).length > 0
        }, e.contains = function(e, t) {
            return (e.ownerDocument || e) !== D && B(e), I(e, t)
        }, e.attr = function(e, n) {
            (e.ownerDocument || e) !== D && B(e);
            var r = w.attrHandle[n.toLowerCase()],
                i = r && K.call(w.attrHandle, n.toLowerCase()) ? r(e, n, !M) : t;
            return i !== t ? i : x.attributes || !M ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null
        }, e.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, e.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (A = !x.detectDuplicates, R = !x.sortStable && e.slice(0), e.sort(j), A) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return R = null, e
        }, E = e.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += E(t);
            return n
        }, w = e.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: he,
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(Ce, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(Ce, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = _(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Ce, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = V[e + " "];
                    return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && V(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, r) {
                    return function(i) {
                        var o = e.attr(i, t);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var c, u, d, f, h, p, m = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    p = m = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [a ? g.firstChild : g.lastChild], a && y) {
                                for (u = g[F] || (g[F] = {}), c = u[e] || [], h = c[0] === U && c[1], f = c[0] === U && c[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (f = h = 0) || p.pop();)
                                    if (1 === d.nodeType && ++f && d === t) {
                                        u[e] = [U, h, f];
                                        break
                                    }
                            } else if (y && (c = (t[F] || (t[F] = {}))[e]) && c[0] === U) f = c[1];
                            else
                                for (;
                                    (d = ++h && d && d[m] || (f = h = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[F] || (d[F] = {}))[e] = [U, f]), d !== t)););
                            return f -= i, f === r || f % r === 0 && f / r >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var i, o = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[F] ? o(n) : o.length > 1 ? (i = [t, t, "", n], w.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = te.call(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = S(e.replace(se, "$1"));
                    return i[F] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), !n.pop()
                    }
                }),
                has: r(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(Ce, xe),
                        function(t) {
                            return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function(t) {
                    return fe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(Ce, xe).toLowerCase(),
                        function(e) {
                            var n;
                            do
                                if (n = M ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var t = window.location && window.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === L
                },
                focus: function(e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !w.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return pe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (C in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[C] = s(C);
        for (C in {
                submit: !0,
                reset: !0
            }) w.pseudos[C] = l(C);
        return d.prototype = w.filters = w.pseudos, w.setFilters = new d, _ = e.tokenize = function(t, n) {
            var r, i, o, a, s, l, c, u = $[t + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = t, l = [], c = w.preFilter; s;) {
                r && !(i = le.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(se, " ")
                }), s = s.slice(r.length));
                for (a in w.filter) !(i = he[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? e.error(t) : $(t, l).slice(0)
        }, S = e.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = q[e + " "];
            if (!o) {
                for (t || (t = _(e)), n = t.length; n--;) o = y(t[n]), o[F] ? r.push(o) : i.push(o);
                o = q(e, b(i, r)), o.selector = e
            }
            return o
        }, k = e.select = function(e, t, n, r) {
            var i, o, a, s, l, c = "function" == typeof e && e,
                d = !r && _(e = c.selector || e);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0),
                    o.length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === t.nodeType && M && w.relative[o[1].type]) {
                    if (t = (w.find.ID(a.matches[0].replace(Ce, xe), t) || [])[0], !t) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]);)
                    if ((l = w.find[s]) && (r = l(a.matches[0].replace(Ce, xe), ye.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && f(o), !e) return Z.apply(n, r), n;
                        break
                    }
            }
            return (c || S(e, d))(r, t, !M, n, ye.test(e) && u(t.parentNode) || t), n
        }, x.sortStable = F.split("").sort(j).join("") === F, x.detectDuplicates = !!A, B(), x.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(D.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(ne, function(e, t, n) {
            var r;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), e
    }), r(p, [], function() {
        function e(e) {
            var t = e,
                n, r;
            if (!u(e))
                for (t = [], n = 0, r = e.length; n < r; n++) t[n] = e[n];
            return t
        }

        function n(e, n, r) {
            var i, o;
            if (!e) return 0;
            if (r = r || e, e.length !== t) {
                for (i = 0, o = e.length; i < o; i++)
                    if (n.call(r, e[i], i, e) === !1) return 0
            } else
                for (i in e)
                    if (e.hasOwnProperty(i) && n.call(r, e[i], i, e) === !1) return 0; return 1
        }

        function r(e, t) {
            var r = [];
            return n(e, function(n, i) {
                r.push(t(n, i, e))
            }), r
        }

        function i(e, t) {
            var r = [];
            return n(e, function(n, i) {
                t && !t(n, i, e) || r.push(n)
            }), r
        }

        function o(e, t) {
            var n, r;
            if (e)
                for (n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
            return -1
        }

        function a(e, t, n, r) {
            var i = 0;
            for (arguments.length < 3 && (n = e[0]); i < e.length; i++) n = t.call(r, n, e[i], i);
            return n
        }

        function s(e, t, n) {
            var r, i;
            for (r = 0, i = e.length; r < i; r++)
                if (t.call(n, e[r], r, e)) return r;
            return -1
        }

        function l(e, n, r) {
            var i = s(e, n, r);
            return i !== -1 ? e[i] : t
        }

        function c(e) {
            return e[e.length - 1]
        }
        var u = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        };
        return {
            isArray: u,
            toArray: e,
            each: n,
            map: r,
            filter: i,
            indexOf: o,
            reduce: a,
            findIndex: s,
            find: l,
            last: c
        }
    }), r(m, [d, p], function(e, n) {
        function r(e) {
            return null === e || e === t ? "" : ("" + e).replace(p, "")
        }

        function i(e, r) {
            return r ? !("array" != r || !n.isArray(e)) || typeof e == r : e !== t
        }

        function o(e, t, n) {
            var r;
            for (e = e || [], t = t || ",", "string" == typeof e && (e = e.split(t)), n = n || {}, r = e.length; r--;) n[e[r]] = {};
            return n
        }

        function a(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        function s(e, t, n) {
            var r = this,
                i, o, a, s, l, c = 0;
            if (e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e), a = e[3].match(/(^|\.)(\w+)$/i)[2], o = r.createNS(e[3].replace(/\.\w+$/, ""), n), !o[a]) {
                if ("static" == e[2]) return o[a] = t, void(this.onCreate && this.onCreate(e[2], e[3], o[a]));
                t[a] || (t[a] = function() {}, c = 1), o[a] = t[a], r.extend(o[a].prototype, t), e[5] && (i = r.resolve(e[5]).prototype, s = e[5].match(/\.(\w+)$/i)[1], l = o[a], c ? o[a] = function() {
                    return i[s].apply(this, arguments)
                } : o[a] = function() {
                    return this.parent = i[s], l.apply(this, arguments)
                }, o[a].prototype[a] = o[a], r.each(i, function(e, t) {
                    o[a].prototype[t] = i[t]
                }), r.each(t, function(e, t) {
                    i[t] ? o[a].prototype[t] = function() {
                        return this.parent = i[t], e.apply(this, arguments)
                    } : t != a && (o[a].prototype[t] = e)
                })), r.each(t["static"], function(e, t) {
                    o[a][t] = e
                })
            }
        }

        function l(e, n) {
            var r, i, o, a = arguments,
                s;
            for (r = 1, i = a.length; r < i; r++) {
                n = a[r];
                for (o in n) n.hasOwnProperty(o) && (s = n[o], s !== t && (e[o] = s))
            }
            return e
        }

        function c(e, t, r, i) {
            i = i || this, e && (r && (e = e[r]), n.each(e, function(e, n) {
                return t.call(i, e, n, r) !== !1 && void c(e, t, r, i)
            }))
        }

        function u(e, t) {
            var n, r;
            for (t = t || window, e = e.split("."), n = 0; n < e.length; n++) r = e[n], t[r] || (t[r] = {}), t = t[r];
            return t
        }

        function d(e, t) {
            var n, r;
            for (t = t || window, e = e.split("."), n = 0, r = e.length; n < r && (t = t[e[n]], t); n++);
            return t
        }

        function f(e, t) {
            return !e || i(e, "array") ? e : n.map(e.split(t || ","), r)
        }

        function h(t) {
            var n = e.cacheSuffix;
            return n && (t += (t.indexOf("?") === -1 ? "?" : "&") + n), t
        }
        var p = /^\s*|\s*$/g;
        return {
            trim: r,
            isArray: n.isArray,
            is: i,
            toArray: n.toArray,
            makeMap: o,
            each: n.each,
            map: n.map,
            grep: n.filter,
            inArray: n.indexOf,
            hasOwn: a,
            extend: l,
            create: s,
            walk: c,
            createNS: u,
            resolve: d,
            explode: f,
            _addCacheSuffix: h
        }
    }), r(g, [f, h, m, d], function(e, n, r, i) {
        function o(e) {
            return "undefined" != typeof e
        }

        function a(e) {
            return "string" == typeof e
        }

        function s(e) {
            return e && e == e.window
        }

        function l(e, t) {
            var n, r, i;
            for (t = t || w, i = t.createElement("div"), n = t.createDocumentFragment(), i.innerHTML = e; r = i.firstChild;) n.appendChild(r);
            return n
        }

        function c(e, t, n, r) {
            var i;
            if (a(t)) t = l(t, v(e[0]));
            else if (t.length && !t.nodeType) {
                if (t = f.makeArray(t), r)
                    for (i = t.length - 1; i >= 0; i--) c(e, t[i], n, r);
                else
                    for (i = 0; i < t.length; i++) c(e, t[i], n, r);
                return e
            }
            if (t.nodeType)
                for (i = e.length; i--;) n.call(e[i], t);
            return e
        }

        function u(e, t) {
            return e && t && (" " + e.className + " ").indexOf(" " + t + " ") !== -1
        }

        function d(e, t, n) {
            var r, i;
            return t = f(t)[0], e.each(function() {
                var e = this;
                n && r == e.parentNode ? i.appendChild(e) : (r = e.parentNode, i = t.cloneNode(!1), e.parentNode.insertBefore(i, e), i.appendChild(e))
            }), e
        }

        function f(e, t) {
            return new f.fn.init(e, t)
        }

        function h(e, t) {
            var n;
            if (t.indexOf) return t.indexOf(e);
            for (n = t.length; n--;)
                if (t[n] === e) return n;
            return -1
        }

        function p(e) {
            return null === e || e === k ? "" : ("" + e).replace(P, "")
        }

        function m(e, t) {
            var n, r, i, o, a;
            if (e)
                if (n = e.length, n === o) {
                    for (r in e)
                        if (e.hasOwnProperty(r) && (a = e[r], t.call(a, r, a) === !1)) break
                } else
                    for (i = 0; i < n && (a = e[i], t.call(a, i, a) !== !1); i++);
            return e
        }

        function g(e, t) {
            var n = [];
            return m(e, function(e, r) {
                t(r, e) && n.push(r)
            }), n
        }

        function v(e) {
            return e ? 9 == e.nodeType ? e : e.ownerDocument : w
        }

        function y(e, n, r) {
            var i = [],
                o = e[n];
            for ("string" != typeof r && r instanceof f && (r = r[0]); o && 9 !== o.nodeType;) {
                if (r !== t) {
                    if (o === r) break;
                    if ("string" == typeof r && f(o).is(r)) break
                }
                1 === o.nodeType && i.push(o), o = o[n]
            }
            return i
        }

        function b(e, n, r, i) {
            var o = [];
            for (i instanceof f && (i = i[0]); e; e = e[n])
                if (!r || e.nodeType === r) {
                    if (i !== t) {
                        if (e === i) break;
                        if ("string" == typeof i && f(e).is(i)) break
                    }
                    o.push(e)
                }
            return o
        }

        function C(e, t, n) {
            for (e = e[t]; e; e = e[t])
                if (e.nodeType == n) return e;
            return null
        }

        function x(e, t, n) {
            m(n, function(n, r) {
                e[n] = e[n] || {}, e[n][t] = r
            })
        }
        var w = document,
            E = Array.prototype.push,
            N = Array.prototype.slice,
            _ = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
            S = e.Event,
            k, T = r.makeMap("children,contents,next,prev"),
            R = r.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom", " "),
            A = r.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected", " "),
            B = {
                "for": "htmlFor",
                "class": "className",
                readonly: "readOnly"
            },
            D = {
                "float": "cssFloat"
            },
            L = {},
            M = {},
            P = /^\s*|\s*$/g;
        return f.fn = f.prototype = {
            constructor: f,
            selector: "",
            context: null,
            length: 0,
            init: function(e, t) {
                var n = this,
                    r, i;
                if (!e) return n;
                if (e.nodeType) return n.context = n[0] = e, n.length = 1, n;
                if (t && t.nodeType) n.context = t;
                else {
                    if (t) return f(e).attr(t);
                    n.context = t = document
                }
                if (a(e)) {
                    if (n.selector = e, r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : _.exec(e), !r) return f(t).find(e);
                    if (r[1])
                        for (i = l(e, v(t)).firstChild; i;) E.call(n, i), i = i.nextSibling;
                    else {
                        if (i = v(t).getElementById(r[2]), !i) return n;
                        if (i.id !== r[2]) return n.find(e);
                        n.length = 1, n[0] = i
                    }
                } else this.add(e, !1);
                return n
            },
            toArray: function() {
                return r.toArray(this)
            },
            add: function(e, t) {
                var n = this,
                    r, i;
                if (a(e)) return n.add(f(e));
                if (t !== !1)
                    for (r = f.unique(n.toArray().concat(f.makeArray(e))), n.length = r.length, i = 0; i < r.length; i++) n[i] = r[i];
                else E.apply(n, f.makeArray(e));
                return n
            },
            attr: function(e, t) {
                var n = this,
                    r;
                if ("object" == typeof e) m(e, function(e, t) {
                    n.attr(e, t)
                });
                else {
                    if (!o(t)) {
                        if (n[0] && 1 === n[0].nodeType) {
                            if (r = L[e], r && r.get) return r.get(n[0], e);
                            if (A[e]) return n.prop(e) ? e : k;
                            t = n[0].getAttribute(e, 2), null === t && (t = k)
                        }
                        return t
                    }
                    this.each(function() {
                        var n;
                        if (1 === this.nodeType) {
                            if (n = L[e], n && n.set) return void n.set(this, t);
                            null === t ? this.removeAttribute(e, 2) : this.setAttribute(e, t, 2)
                        }
                    })
                }
                return n
            },
            removeAttr: function(e) {
                return this.attr(e, null)
            },
            prop: function(e, t) {
                var n = this;
                if (e = B[e] || e, "object" == typeof e) m(e, function(e, t) {
                    n.prop(e, t)
                });
                else {
                    if (!o(t)) return n[0] && n[0].nodeType && e in n[0] ? n[0][e] : t;
                    this.each(function() {
                        1 == this.nodeType && (this[e] = t)
                    })
                }
                return n
            },
            css: function(e, t) {
                function n(e) {
                    return e.replace(/-(\D)/g, function(e, t) {
                        return t.toUpperCase()
                    })
                }

                function r(e) {
                    return e.replace(/[A-Z]/g, function(e) {
                        return "-" + e
                    })
                }
                var i = this,
                    a, s;
                if ("object" == typeof e) m(e, function(e, t) {
                    i.css(e, t)
                });
                else if (o(t)) e = n(e), "number" != typeof t || R[e] || (t += "px"), i.each(function() {
                    var n = this.style;
                    if (s = M[e], s && s.set) return void s.set(this, t);
                    try {
                        this.style[D[e] || e] = t
                    } catch (i) {}
                    null !== t && "" !== t || (n.removeProperty ? n.removeProperty(r(e)) : n.removeAttribute(e))
                });
                else {
                    if (a = i[0], s = M[e], s && s.get) return s.get(a);
                    if (a.ownerDocument.defaultView) try {
                        return a.ownerDocument.defaultView.getComputedStyle(a, null).getPropertyValue(r(e))
                    } catch (l) {
                        return k
                    } else if (a.currentStyle) return a.currentStyle[n(e)]
                }
                return i
            },
            remove: function() {
                for (var e = this, t, n = this.length; n--;) t = e[n], S.clean(t), t.parentNode && t.parentNode.removeChild(t);
                return this
            },
            empty: function() {
                for (var e = this, t, n = this.length; n--;)
                    for (t = e[n]; t.firstChild;) t.removeChild(t.firstChild);
                return this
            },
            html: function(e) {
                var t = this,
                    n;
                if (o(e)) {
                    n = t.length;
                    try {
                        for (; n--;) t[n].innerHTML = e
                    } catch (r) {
                        f(t[n]).empty().append(e)
                    }
                    return t
                }
                return t[0] ? t[0].innerHTML : ""
            },
            text: function(e) {
                var t = this,
                    n;
                if (o(e)) {
                    for (n = t.length; n--;) "innerText" in t[n] ? t[n].innerText = e : t[0].textContent = e;
                    return t
                }
                return t[0] ? t[0].innerText || t[0].textContent : ""
            },
            append: function() {
                return c(this, arguments, function(e) {
                    (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.appendChild(e)
                })
            },
            prepend: function() {
                return c(this, arguments, function(e) {
                    (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.insertBefore(e, this.firstChild)
                }, !0)
            },
            before: function() {
                var e = this;
                return e[0] && e[0].parentNode ? c(e, arguments, function(e) {
                    this.parentNode.insertBefore(e, this)
                }) : e
            },
            after: function() {
                var e = this;
                return e[0] && e[0].parentNode ? c(e, arguments, function(e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                }, !0) : e
            },
            appendTo: function(e) {
                return f(e).append(this), this
            },
            prependTo: function(e) {
                return f(e).prepend(this), this
            },
            replaceWith: function(e) {
                return this.before(e).remove()
            },
            wrap: function(e) {
                return d(this, e)
            },
            wrapAll: function(e) {
                return d(this, e, !0)
            },
            wrapInner: function(e) {
                return this.each(function() {
                    f(this).contents().wrapAll(e)
                }), this
            },
            unwrap: function() {
                return this.parent().each(function() {
                    f(this).replaceWith(this.childNodes)
                })
            },
            clone: function() {
                var e = [];
                return this.each(function() {
                    e.push(this.cloneNode(!0))
                }), f(e)
            },
            addClass: function(e) {
                return this.toggleClass(e, !0)
            },
            removeClass: function(e) {
                return this.toggleClass(e, !1)
            },
            toggleClass: function(e, t) {
                var n = this;
                return "string" != typeof e ? n : (e.indexOf(" ") !== -1 ? m(e.split(" "), function() {
                    n.toggleClass(this, t)
                }) : n.each(function(n, r) {
                    var i, o;
                    o = u(r, e), o !== t && (i = r.className, o ? r.className = p((" " + i + " ").replace(" " + e + " ", " ")) : r.className += i ? " " + e : e)
                }), n)
            },
            hasClass: function(e) {
                return u(this[0], e)
            },
            each: function(e) {
                return m(this, e)
            },
            on: function(e, t) {
                return this.each(function() {
                    S.bind(this, e, t)
                })
            },
            off: function(e, t) {
                return this.each(function() {
                    S.unbind(this, e, t)
                })
            },
            trigger: function(e) {
                return this.each(function() {
                    "object" == typeof e ? S.fire(this, e.type, e) : S.fire(this, e)
                })
            },
            show: function() {
                return this.css("display", "")
            },
            hide: function() {
                return this.css("display", "none")
            },
            slice: function() {
                return new f(N.apply(this, arguments))
            },
            eq: function(e) {
                return e === -1 ? this.slice(e) : this.slice(e, +e + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            find: function(e) {
                var t, n, r = [];
                for (t = 0, n = this.length; t < n; t++) f.find(e, this[t], r);
                return f(r)
            },
            filter: function(e) {
                return f("function" == typeof e ? g(this.toArray(), function(t, n) {
                    return e(n, t)
                }) : f.filter(e, this.toArray()))
            },
            closest: function(e) {
                var t = [];
                return e instanceof f && (e = e[0]), this.each(function(n, r) {
                    for (; r;) {
                        if ("string" == typeof e && f(r).is(e)) {
                            t.push(r);
                            break
                        }
                        if (r == e) {
                            t.push(r);
                            break
                        }
                        r = r.parentNode
                    }
                }), f(t)
            },
            offset: function(e) {
                var t, n, r, i = 0,
                    o = 0,
                    a;
                return e ? this.css(e) : (t = this[0], t && (n = t.ownerDocument, r = n.documentElement, t.getBoundingClientRect && (a = t.getBoundingClientRect(), i = a.left + (r.scrollLeft || n.body.scrollLeft) - r.clientLeft, o = a.top + (r.scrollTop || n.body.scrollTop) - r.clientTop)), {
                    left: i,
                    top: o
                })
            },
            push: E,
            sort: [].sort,
            splice: [].splice
        }, r.extend(f, {
            extend: r.extend,
            makeArray: function(e) {
                return s(e) || e.nodeType ? [e] : r.toArray(e)
            },
            inArray: h,
            isArray: r.isArray,
            each: m,
            trim: p,
            grep: g,
            find: n,
            expr: n.selectors,
            unique: n.uniqueSort,
            text: n.getText,
            contains: n.contains,
            filter: function(e, t, n) {
                var r = t.length;
                for (n && (e = ":not(" + e + ")"); r--;) 1 != t[r].nodeType && t.splice(r, 1);
                return t = 1 === t.length ? f.find.matchesSelector(t[0], e) ? [t[0]] : [] : f.find.matches(e, t)
            }
        }), m({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return y(e, "parentNode")
            },
            next: function(e) {
                return C(e, "nextSibling", 1)
            },
            prev: function(e) {
                return C(e, "previousSibling", 1)
            },
            children: function(e) {
                return b(e.firstChild, "nextSibling", 1)
            },
            contents: function(e) {
                return r.toArray(("iframe" === e.nodeName ? e.contentDocument || e.contentWindow.document : e).childNodes)
            }
        }, function(e, t) {
            f.fn[e] = function(n) {
                var r = this,
                    i = [];
                return r.each(function() {
                    var e = t.call(i, this, n, i);
                    e && (f.isArray(e) ? i.push.apply(i, e) : i.push(e))
                }), this.length > 1 && (T[e] || (i = f.unique(i)), 0 === e.indexOf("parents") && (i = i.reverse())), i = f(i), n ? i.filter(n) : i
            }
        }), m({
            parentsUntil: function(e, t) {
                return y(e, "parentNode", t)
            },
            nextUntil: function(e, t) {
                return b(e, "nextSibling", 1, t).slice(1)
            },
            prevUntil: function(e, t) {
                return b(e, "previousSibling", 1, t).slice(1)
            }
        }, function(e, t) {
            f.fn[e] = function(n, r) {
                var i = this,
                    o = [];
                return i.each(function() {
                    var e = t.call(o, this, n, o);
                    e && (f.isArray(e) ? o.push.apply(o, e) : o.push(e))
                }), this.length > 1 && (o = f.unique(o), 0 !== e.indexOf("parents") && "prevUntil" !== e || (o = o.reverse())), o = f(o), r ? o.filter(r) : o
            }
        }), f.fn.is = function(e) {
            return !!e && this.filter(e).length > 0
        }, f.fn.init.prototype = f.fn, f.overrideDefaults = function(e) {
            function t(r, i) {
                return n = n || e(), 0 === arguments.length && (r = n.element), i || (i = n.context), new t.fn.init(r, i)
            }
            var n;
            return f.extend(t, this), t
        }, i.ie && i.ie < 8 && (x(L, "get", {
            maxlength: function(e) {
                var t = e.maxLength;
                return 2147483647 === t ? k : t
            },
            size: function(e) {
                var t = e.size;
                return 20 === t ? k : t
            },
            "class": function(e) {
                return e.className
            },
            style: function(e) {
                var t = e.style.cssText;
                return 0 === t.length ? k : t
            }
        }), x(L, "set", {
            "class": function(e, t) {
                e.className = t
            },
            style: function(e, t) {
                e.style.cssText = t
            }
        })), i.ie && i.ie < 9 && (D["float"] = "styleFloat", x(M, "set", {
            opacity: function(e, t) {
                var n = e.style;
                null === t || "" === t ? n.removeAttribute("filter") : (n.zoom = 1, n.filter = "alpha(opacity=" + 100 * t + ")")
            }
        })), f.attrHooks = L, f.cssHooks = M, f
    }), r(v, [], function() {
        return function(e, t) {
            function n(e, t, n, r) {
                function i(e) {
                    return e = parseInt(e, 10).toString(16), e.length > 1 ? e : "0" + e
                }
                return "#" + i(t) + i(n) + i(r)
            }
            var r = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
                i = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
                o = /\s*([^:]+):\s*([^;]+);?/g,
                a = /\s+$/,
                s, l = {},
                c, u, d, f = "\ufeff";
            for (e = e || {}, t && (u = t.getValidStyles(), d = t.getInvalidStyles()), c = ("\\\" \\' \\; \\: ; : " + f).split(" "), s = 0; s < c.length; s++) l[c[s]] = f + s, l[f + s] = c[s];
            return {
                toHex: function(e) {
                    return e.replace(r, n)
                },
                parse: function(t) {
                    function c(e, t, n) {
                        var r, i, o, a;
                        if (r = y[e + "-top" + t], r && (i = y[e + "-right" + t], i && (o = y[e + "-bottom" + t], o && (a = y[e + "-left" + t])))) {
                            var l = [r, i, o, a];
                            for (s = l.length - 1; s-- && l[s] === l[s + 1];);
                            s > -1 && n || (y[e + t] = s == -1 ? l[0] : l.join(" "), delete y[e + "-top" + t], delete y[e + "-right" + t], delete y[e + "-bottom" + t], delete y[e + "-left" + t])
                        }
                    }

                    function u(e) {
                        var t = y[e],
                            n;
                        if (t) {
                            for (t = t.split(" "), n = t.length; n--;)
                                if (t[n] !== t[0]) return !1;
                            return y[e] = t[0], !0
                        }
                    }

                    function d(e, t, n, r) {
                        u(t) && u(n) && u(r) && (y[e] = y[t] + " " + y[n] + " " + y[r], delete y[t], delete y[n], delete y[r])
                    }

                    function h(e) {
                        return w = !0, l[e]
                    }

                    function p(e, t) {
                        return w && (e = e.replace(/\uFEFF[0-9]/g, function(e) {
                            return l[e]
                        })), t || (e = e.replace(/\\([\'\";:])/g, "$1")), e
                    }

                    function m(e) {
                        return String.fromCharCode(parseInt(e.slice(1), 16))
                    }

                    function g(e) {
                        return e.replace(/\\[0-9a-f]+/gi, m)
                    }

                    function v(t, n, r, i, o, a) {
                        if (o = o || a) return o = p(o), "'" + o.replace(/\'/g, "\\'") + "'";
                        if (n = p(n || r || i), !e.allow_script_urls) {
                            var s = n.replace(/[\s\r\n]+/g, "");
                            if (/(java|vb)script:/i.test(s)) return "";
                            if (!e.allow_svg_data_urls && /^data:image\/svg/i.test(s)) return ""
                        }
                        return E && (n = E.call(N, n, "style")), "url('" + n.replace(/\'/g, "\\'") + "')"
                    }
                    var y = {},
                        b, C, x, w, E = e.url_converter,
                        N = e.url_converter_scope || this;
                    if (t) {
                        for (t = t.replace(/[\u0000-\u001F]/g, ""), t = t.replace(/\\[\"\';:\uFEFF]/g, h).replace(/\"[^\"]+\"|\'[^\']+\'/g, function(e) {
                                return e.replace(/[;:]/g, h)
                            }); b = o.exec(t);)
                            if (o.lastIndex = b.index + b[0].length, C = b[1].replace(a, "").toLowerCase(), x = b[2].replace(a, ""), C && x) {
                                if (C = g(C), x = g(x), C.indexOf(f) !== -1 || C.indexOf('"') !== -1) continue;
                                if (!e.allow_script_urls && ("behavior" == C || /expression\s*\(|\/\*|\*\//.test(x))) continue;
                                "font-weight" === C && "700" === x ? x = "bold" : "color" !== C && "background-color" !== C || (x = x.toLowerCase()), x = x.replace(r, n), x = x.replace(i, v), y[C] = w ? p(x, !0) : x
                            }
                        c("border", "", !0), c("border", "-width"), c("border", "-color"), c("border", "-style"), c("padding", ""), c("margin", ""), d("border", "border-width", "border-style", "border-color"), "medium none" === y.border && delete y.border, "none" === y["border-image"] && delete y["border-image"]
                    }
                    return y
                },
                serialize: function(e, t) {
                    function n(t) {
                        var n, r, o, a;
                        if (n = u[t])
                            for (r = 0, o = n.length; r < o; r++) t = n[r], a = e[t], a && (i += (i.length > 0 ? " " : "") + t + ": " + a + ";")
                    }

                    function r(e, t) {
                        var n;
                        return n = d["*"], (!n || !n[e]) && (n = d[t], !n || !n[e])
                    }
                    var i = "",
                        o, a;
                    if (t && u) n("*"), n(t);
                    else
                        for (o in e) a = e[o], !a || d && !r(o, t) || (i += (i.length > 0 ? " " : "") + o + ": " + a + ";");
                    return i
                }
            }
        }
    }), r(y, [], function() {
        return function(e, t) {
            function n(e, n, r, i) {
                var o, a;
                if (e) {
                    if (!i && e[n]) return e[n];
                    if (e != t) {
                        if (o = e[r]) return o;
                        for (a = e.parentNode; a && a != t; a = a.parentNode)
                            if (o = a[r]) return o
                    }
                }
            }

            function r(e, n, r, i) {
                var o, a, s;
                if (e) {
                    if (o = e[r], t && o === t) return;
                    if (o) {
                        if (!i)
                            for (s = o[n]; s; s = s[n])
                                if (!s[n]) return s;
                        return o
                    }
                    if (a = e.parentNode, a && a !== t) return a
                }
            }
            var i = e;
            this.current = function() {
                return i
            }, this.next = function(e) {
                return i = n(i, "firstChild", "nextSibling", e)
            }, this.prev = function(e) {
                return i = n(i, "lastChild", "previousSibling", e)
            }, this.prev2 = function(e) {
                return i = r(i, "lastChild", "previousSibling", e)
            }
        }
    }), r(b, [m], function(e) {
        function t(n) {
            function r() {
                return P.createDocumentFragment()
            }

            function i(e, t) {
                E(F, e, t)
            }

            function o(e, t) {
                E(z, e, t)
            }

            function a(e) {
                i(e.parentNode, j(e))
            }

            function s(e) {
                i(e.parentNode, j(e) + 1)
            }

            function l(e) {
                o(e.parentNode, j(e))
            }

            function c(e) {
                o(e.parentNode, j(e) + 1)
            }

            function u(e) {
                e ? (M[V] = M[W], M[$] = M[U]) : (M[W] = M[V], M[U] = M[$]), M.collapsed = F
            }

            function d(e) {
                a(e), c(e)
            }

            function f(e) {
                i(e, 0), o(e, 1 === e.nodeType ? e.childNodes.length : e.nodeValue.length)
            }

            function h(e, t) {
                var n = M[W],
                    r = M[U],
                    i = M[V],
                    o = M[$],
                    a = t.startContainer,
                    s = t.startOffset,
                    l = t.endContainer,
                    c = t.endOffset;
                return 0 === e ? w(n, r, a, s) : 1 === e ? w(i, o, a, s) : 2 === e ? w(i, o, l, c) : 3 === e ? w(n, r, l, c) : void 0
            }

            function p() {
                N(I)
            }

            function m() {
                return N(O)
            }

            function g() {
               
                return N(H)
            }

            function v(e) {
                var t = this[W],
                    r = this[U],
                    i, o;
                3 !== t.nodeType && 4 !== t.nodeType || !t.nodeValue ? (t.childNodes.length > 0 && (o = t.childNodes[r]), o ? t.insertBefore(e, o) : 3 == t.nodeType ? n.insertAfter(e, t) : t.appendChild(e)) : r ? r >= t.nodeValue.length ? n.insertAfter(e, t) : (i = t.splitText(r), t.parentNode.insertBefore(e, i)) : t.parentNode.insertBefore(e, t)
            }

            function y(e) {
                var t = M.extractContents();
                M.insertNode(e), e.appendChild(t), M.selectNode(e)
            }

            function b() {
                return q(new t(n), {
                    startContainer: M[W],
                    startOffset: M[U],
                    endContainer: M[V],
                    endOffset: M[$],
                    collapsed: M.collapsed,
                    commonAncestorContainer: M.commonAncestorContainer
                })
            }

            function C(e, t) {
                var n;
                if (3 == e.nodeType) return e;
                if (t < 0) return e;
                for (n = e.firstChild; n && t > 0;) --t, n = n.nextSibling;
                return n ? n : e
            }

            function x() {
                return M[W] == M[V] && M[U] == M[$]
            }

            function w(e, t, r, i) {
                var o, a, s, l, c, u;
                if (e == r) return t == i ? 0 : t < i ? -1 : 1;
                for (o = r; o && o.parentNode != e;) o = o.parentNode;
                if (o) {
                    for (a = 0, s = e.firstChild; s != o && a < t;) a++, s = s.nextSibling;
                    return t <= a ? -1 : 1
                }
                for (o = e; o && o.parentNode != r;) o = o.parentNode;
                if (o) {
                    for (a = 0, s = r.firstChild; s != o && a < i;) a++, s = s.nextSibling;
                    return a < i ? -1 : 1
                }
                for (l = n.findCommonAncestor(e, r), c = e; c && c.parentNode != l;) c = c.parentNode;
                for (c || (c = l), u = r; u && u.parentNode != l;) u = u.parentNode;
                if (u || (u = l), c == u) return 0;
                for (s = l.firstChild; s;) {
                    if (s == c) return -1;
                    if (s == u) return 1;
                    s = s.nextSibling
                }
            }

            function E(e, t, r) {
                var i, o;
                for (e ? (M[W] = t, M[U] = r) : (M[V] = t, M[$] = r), i = M[V]; i.parentNode;) i = i.parentNode;
                for (o = M[W]; o.parentNode;) o = o.parentNode;
                o == i ? w(M[W], M[U], M[V], M[$]) > 0 && M.collapse(e) : M.collapse(e), M.collapsed = x(), M.commonAncestorContainer = n.findCommonAncestor(M[W], M[V])
            }

            function N(e) {
                var t, n = 0,
                    r = 0,
                    i, o, a, s, l, c;
                if (M[W] == M[V]) return _(e);
                for (t = M[V], i = t.parentNode; i; t = i, i = i.parentNode) {
                    if (i == M[W]) return S(t, e);
                    ++n
                }
                for (t = M[W], i = t.parentNode; i; t = i, i = i.parentNode) {
                    if (i == M[V]) return k(t, e);
                    ++r
                }
                for (o = r - n, a = M[W]; o > 0;) a = a.parentNode, o--;
                for (s = M[V]; o < 0;) s = s.parentNode, o++;
                for (l = a.parentNode, c = s.parentNode; l != c; l = l.parentNode, c = c.parentNode) a = l, s = c;
                return T(a, s, e)
            }

            function _(e) {
                var t, n, i, o, a, s, l, c, u;
                if (e != I && (t = r()), M[U] == M[$]) return t;
                if (3 == M[W].nodeType) {
                    if (n = M[W].nodeValue, i = n.substring(M[U], M[$]), e != H && (o = M[W], c = M[U], u = M[$] - M[U], 0 === c && u >= o.nodeValue.length - 1 ? o.parentNode.removeChild(o) : o.deleteData(c, u), M.collapse(F)), e == I) return;
                    return i.length > 0 && t.appendChild(P.createTextNode(i)), t
                }
                for (o = C(M[W], M[U]), a = M[$] - M[U]; o && a > 0;) s = o.nextSibling, l = D(o, e), t && t.appendChild(l), --a, o = s;
                return e != H && M.collapse(F), t
            }

            function S(e, t) {
                var n, i, o, a, s, l;
                if (t != I && (n = r()), i = R(e, t), n && n.appendChild(i), o = j(e), a = o - M[U], a <= 0) return t != H && (M.setEndBefore(e), M.collapse(z)), n;
                for (i = e.previousSibling; a > 0;) s = i.previousSibling, l = D(i, t), n && n.insertBefore(l, n.firstChild), --a, i = s;
                return t != H && (M.setEndBefore(e), M.collapse(z)), n
            }

            function k(e, t) {
                var n, i, o, a, s, l;
                for (t != I && (n = r()), o = A(e, t), n && n.appendChild(o), i = j(e), ++i, a = M[$] - i, o = e.nextSibling; o && a > 0;) s = o.nextSibling, l = D(o, t), n && n.appendChild(l), --a, o = s;
                return t != H && (M.setStartAfter(e), M.collapse(F)), n
            }

            function T(e, t, n) {
                var i, o, a, s, l, c, u;
                for (n != I && (o = r()), i = A(e, n), o && o.appendChild(i), a = j(e), s = j(t), ++a, l = s - a, c = e.nextSibling; l > 0;) u = c.nextSibling, i = D(c, n), o && o.appendChild(i), c = u, --l;
                return i = R(t, n), o && o.appendChild(i), n != H && (M.setStartAfter(e), M.collapse(F)), o
            }

            function R(e, t) {
                var n = C(M[V], M[$] - 1),
                    r, i, o, a, s, l = n != M[V];
                if (n == e) return B(n, l, z, t);
                for (r = n.parentNode, i = B(r, z, z, t); r;) {
                    for (; n;) o = n.previousSibling, a = B(n, l, z, t), t != I && i.insertBefore(a, i.firstChild), l = F, n = o;
                    if (r == e) return i;
                    n = r.previousSibling, r = r.parentNode, s = B(r, z, z, t), t != I && s.appendChild(i), i = s
                }
            }

            function A(e, t) {
                var n = C(M[W], M[U]),
                    r = n != M[W],
                    i, o, a, s, l;
                if (n == e) return B(n, r, F, t);
                for (i = n.parentNode, o = B(i, z, F, t); i;) {
                    for (; n;) a = n.nextSibling, s = B(n, r, F, t), t != I && o.appendChild(s), r = F, n = a;
                    if (i == e) return o;
                    n = i.nextSibling, i = i.parentNode, l = B(i, z, F, t), t != I && l.appendChild(o), o = l
                }
            }

            function B(e, t, r, i) {
                var o, a, s, l, c;
                if (t) return D(e, i);
                if (3 == e.nodeType) {
                    if (o = e.nodeValue, r ? (l = M[U], a = o.substring(l), s = o.substring(0, l)) : (l = M[$], a = o.substring(0, l), s = o.substring(l)), i != H && (e.nodeValue = s), i == I) return;
                    return c = n.clone(e, z), c.nodeValue = a, c
                }
                if (i != I) return n.clone(e, z)
            }

            function D(e, t) {
                return t != I ? t == H ? n.clone(e, F) : e : void e.parentNode.removeChild(e)
            }

            function L() {
                return n.create("body", null, g()).outerText
            }
            var M = this,
                P = n.doc,
                O = 0,
                H = 1,
                I = 2,
                F = !0,
                z = !1,
                U = "startOffset",
                W = "startContainer",
                V = "endContainer",
                $ = "endOffset",
                q = e.extend,
                j = n.nodeIndex;
            return q(M, {
                startContainer: P,
                startOffset: 0,
                endContainer: P,
                endOffset: 0,
                collapsed: F,
                commonAncestorContainer: P,
                START_TO_START: 0,
                START_TO_END: 1,
                END_TO_END: 2,
                END_TO_START: 3,
                setStart: i,
                setEnd: o,
                setStartBefore: a,
                setStartAfter: s,
                setEndBefore: l,
                setEndAfter: c,
                collapse: u,
                selectNode: d,
                selectNodeContents: f,
                compareBoundaryPoints: h,
                deleteContents: p,
                extractContents: m,
                cloneContents: g,
                insertNode: v,
                surroundContents: y,
                cloneRange: b,
                toStringIE: L
            }), M
        }
        return t.prototype.toString = function() {
            return this.toStringIE()
        }, t
    }), r(C, [m], function(e) {
        function t(e) {
            var t;
            return t = document.createElement("div"), t.innerHTML = e, t.textContent || t.innerText || e
        }

        function n(e, t) {
            var n, r, i, a = {};
            if (e) {
                for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2) r = String.fromCharCode(parseInt(e[n], t)), o[r] || (i = "&" + e[n + 1] + ";", a[r] = i, a[i] = r);
                return a
            }
        }
        var r = e.makeMap,
            i, o, a, s = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            l = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            c = /[<>&\"\']/g,
            u = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
            d = {
                128: "\u20ac",
                130: "\u201a",
                131: "\u0192",
                132: "\u201e",
                133: "\u2026",
                134: "\u2020",
                135: "\u2021",
                136: "\u02c6",
                137: "\u2030",
                138: "\u0160",
                139: "\u2039",
                140: "\u0152",
                142: "\u017d",
                145: "\u2018",
                146: "\u2019",
                147: "\u201c",
                148: "\u201d",
                149: "\u2022",
                150: "\u2013",
                151: "\u2014",
                152: "\u02dc",
                153: "\u2122",
                154: "\u0161",
                155: "\u203a",
                156: "\u0153",
                158: "\u017e",
                159: "\u0178"
            };
        o = {
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            "`": "&#96;"
        }, a = {
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&quot;": '"',
            "&apos;": "'"
        }, i = n("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32);
        var f = {
            encodeRaw: function(e, t) {
                return e.replace(t ? s : l, function(e) {
                    return o[e] || e
                })
            },
            encodeAllRaw: function(e) {
                return ("" + e).replace(c, function(e) {
                    return o[e] || e
                })
            },
            encodeNumeric: function(e, t) {
                return e.replace(t ? s : l, function(e) {
                    return e.length > 1 ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : o[e] || "&#" + e.charCodeAt(0) + ";"
                })
            },
            encodeNamed: function(e, t, n) {
                return n = n || i, e.replace(t ? s : l, function(e) {
                    return o[e] || n[e] || e
                })
            },
            getEncodeFunc: function(e, t) {
                function a(e, n) {
                    return e.replace(n ? s : l, function(e) {
                        return o[e] || t[e] || "&#" + e.charCodeAt(0) + ";" || e
                    })
                }

                function c(e, n) {
                    return f.encodeNamed(e, n, t)
                }
                return t = n(t) || i, e = r(e.replace(/\+/g, ",")), e.named && e.numeric ? a : e.named ? t ? c : f.encodeNamed : e.numeric ? f.encodeNumeric : f.encodeRaw
            },
            decode: function(e) {
                return e.replace(u, function(e, n) {
                    return n ? (n = "x" === n.charAt(0).toLowerCase() ? parseInt(n.substr(1), 16) : parseInt(n, 10), n > 65535 ? (n -= 65536, String.fromCharCode(55296 + (n >> 10), 56320 + (1023 & n))) : d[n] || String.fromCharCode(n)) : a[e] || i[e] || t(e)
                })
            }
        };
        return f
    }), r(x, [m, u], function(e, t) {

        return function(n, r) {
            function i(e) {
                n.getElementsByTagName("head")[0].appendChild(e)
            }

            function o(r, o, c) {
                function u() {
                    for (var e = b.passed, t = e.length; t--;) e[t]();
                    b.status = 2, b.passed = [], b.failed = []
                }

                function d() {
                    for (var e = b.failed, t = e.length; t--;) e[t]();
                    b.status = 3, b.passed = [], b.failed = []
                }

                function f() {
                    var e = navigator.userAgent.match(/WebKit\/(\d*)/);
                    return !!(e && e[1] < 536)
                }

                function h(e, n) {
                    e() || ((new Date).getTime() - y < l ? t.setTimeout(n) : d())
                }

                function p() {
                    h(function() {
                        for (var e = n.styleSheets, t, r = e.length, i; r--;)
                            if (t = e[r], i = t.ownerNode ? t.ownerNode : t.owningElement, i && i.id === g.id) return u(), !0
                    }, p)
                }

                function m() {
                    h(function() {
                        try {
                            var e = v.sheet.cssRules;
                            return u(), !!e
                        } catch (t) {}
                    }, m)
                }
                
                var g, v, y, b;
                if (r = e._addCacheSuffix(r), s[r] ? b = s[r] : (b = {
                        passed: [],
                        failed: []
                    }, s[r] = b), o && b.passed.push(o), c && b.failed.push(c), 1 != b.status) {
                    if (2 == b.status) return void u();
                    if (3 == b.status) return void d();
                    if (b.status = 1, g = n.createElement("link"), g.rel = "stylesheet", g.type = "text/css", g.id = "u" + a++, g.async = !1, g.defer = !1, y = (new Date).getTime(), "onload" in g && !f()) g.onload = p, g.onerror = d;
                    else {
                        if (navigator.userAgent.indexOf("Firefox") > 0) return v = n.createElement("style"), v.textContent = '@import "' + r + '"', m(), void i(v);
                        p()
                    }

                    i(g), g.href = r
                }
            }
            var a = 0,
                s = {},
                l;
            r = r || {}, l = r.maxLoadTime || 5e3, this.load = o
        }
    }), r(w, [h, g, v, f, y, b, C, d, m, x], function(e, n, r, i, o, a, s, l, c, u) {
        function d(e, t) {
            var n = {},
                r = t.keep_values,
                i;
            return i = {
                set: function(n, r, i) {
                    t.url_converter && (r = t.url_converter.call(t.url_converter_scope || e, r, i, n[0])), n.attr("data-mce-" + i, r).attr(i, r)
                },
                get: function(e, t) {
                    return e.attr("data-mce-" + t) || e.attr(t)
                }
            }, n = {
                style: {
                    set: function(e, t) {
                        return null !== t && "object" == typeof t ? void e.css(t) : (r && e.attr("data-mce-style", t), void e.attr("style", t))
                    },
                    get: function(t) {
                        var n = t.attr("data-mce-style") || t.attr("style");
                        return n = e.serializeStyle(e.parseStyle(n), t[0].nodeName)
                    }
                }
            }, r && (n.href = n.src = i), n
        }

        function f(e, t) {
            var n = t.attr("style");
            n = e.serializeStyle(e.parseStyle(n), t[0].nodeName), n || (n = null), t.attr("data-mce-style", n)
        }

        function h(e, t) {
            var n = 0,
                r, i;
            if (e)
                for (r = e.nodeType, e = e.previousSibling; e; e = e.previousSibling) i = e.nodeType, (!t || 3 != i || i != r && e.nodeValue.length) && (n++, r = i);
            return n
        }

        function p(e, t) {
            var o = this,
                a;
            o.doc = e, o.win = window, o.files = {}, o.counter = 0, o.stdMode = !b || e.documentMode >= 8, o.boxModel = !b || "CSS1Compat" == e.compatMode || o.stdMode, o.styleSheetLoader = new u(e), o.boundEvents = [], o.settings = t = t || {}, o.schema = t.schema, o.styles = new r({
                url_converter: t.url_converter,
                url_converter_scope: t.url_converter_scope
            }, t.schema), o.fixDoc(e), o.events = t.ownEvents ? new i(t.proxy) : i.Event, o.attrHooks = d(o, t), a = t.schema ? t.schema.getBlockElements() : {}, o.$ = n.overrideDefaults(function() {
                return {
                    context: e,
                    element: o.getRoot()
                }
            }), o.isBlock = function(e) {
                if (!e) return !1;
                var t = e.nodeType;
                return t ? !(1 !== t || !a[e.nodeName]) : !!a[e]
            }
        }
        var m = c.each,
            g = c.is,
            v = c.grep,
            y = c.trim,
            b = l.ie,
            C = /^([a-z0-9],?)+$/i,
            x = /^[ \t\r\n]*$/;
        return p.prototype = {
            $$: function(e) {
                return "string" == typeof e && (e = this.get(e)), this.$(e)
            },
            root: null,
            fixDoc: function(e) {
                var t = this.settings,
                    n;
                if (b && t.schema) {
                    "abbr article aside audio canvas details figcaption figure footer header hgroup mark menu meter nav output progress section summary time video".replace(/\w+/g, function(t) {
                        e.createElement(t)
                    });
                    for (n in t.schema.getCustomElements()) e.createElement(n)
                }
            },
            clone: function(e, t) {
                var n = this,
                    r, i;
                return !b || 1 !== e.nodeType || t ? e.cloneNode(t) : (i = n.doc, t ? r.firstChild : (r = i.createElement(e.nodeName), m(n.getAttribs(e), function(t) {
                    n.setAttrib(r, t.nodeName, n.getAttrib(e, t.nodeName))
                }), r))
            },
            getRoot: function() {
                var e = this;
                return e.settings.root_element || e.doc.body
            },
            getViewPort: function(e) {
                var t, n;
                return e = e ? e : this.win, t = e.document, n = this.boxModel ? t.documentElement : t.body, {
                    x: e.pageXOffset || n.scrollLeft,
                    y: e.pageYOffset || n.scrollTop,
                    w: e.innerWidth || n.clientWidth,
                    h: e.innerHeight || n.clientHeight
                }
            },
            getRect: function(e) {
                var t = this,
                    n, r;
                return e = t.get(e), n = t.getPos(e), r = t.getSize(e), {
                    x: n.x,
                    y: n.y,
                    w: r.w,
                    h: r.h
                }
            },
            getSize: function(e) {
                var t = this,
                    n, r;
                return e = t.get(e), n = t.getStyle(e, "width"), r = t.getStyle(e, "height"), n.indexOf("px") === -1 && (n = 0), r.indexOf("px") === -1 && (r = 0), {
                    w: parseInt(n, 10) || e.offsetWidth || e.clientWidth,
                    h: parseInt(r, 10) || e.offsetHeight || e.clientHeight
                }
            },
            getParent: function(e, t, n) {
                return this.getParents(e, t, n, !1)
            },
            getParents: function(e, n, r, i) {
                var o = this,
                    a, s = [];
                for (e = o.get(e), i = i === t, r = r || ("BODY" != o.getRoot().nodeName ? o.getRoot().parentNode : null), g(n, "string") && (a = n, n = "*" === n ? function(e) {
                        return 1 == e.nodeType
                    } : function(e) {
                        return o.is(e, a)
                    }); e && e != r && e.nodeType && 9 !== e.nodeType;) {
                    if (!n || n(e)) {
                        if (!i) return e;
                        s.push(e)
                    }
                    e = e.parentNode
                }
                return i ? s : null
            },
            get: function(e) {
                var t;
                return e && this.doc && "string" == typeof e && (t = e, e = this.doc.getElementById(e), e && e.id !== t) ? this.doc.getElementsByName(t)[1] : e
            },
            getNext: function(e, t) {
                return this._findSib(e, t, "nextSibling")
            },
            getPrev: function(e, t) {
                return this._findSib(e, t, "previousSibling")
            },
            select: function(t, n) {
                var r = this;
                return e(t, r.get(n) || r.settings.root_element || r.doc, [])
            },
            is: function(n, r) {
                var i;
                if (n.length === t) {
                    if ("*" === r) return 1 == n.nodeType;
                    if (C.test(r)) {
                        for (r = r.toLowerCase().split(/,/), n = n.nodeName.toLowerCase(), i = r.length - 1; i >= 0; i--)
                            if (r[i] == n) return !0;
                        return !1
                    }
                }
                if (n.nodeType && 1 != n.nodeType) return !1;
                var o = n.nodeType ? [n] : n;
                return e(r, o[0].ownerDocument || o[0], null, o).length > 0
            },
            add: function(e, t, n, r, i) {
                var o = this;
                return this.run(e, function(e) {
                    var a;
                    return a = g(t, "string") ? o.doc.createElement(t) : t, o.setAttribs(a, n), r && (r.nodeType ? a.appendChild(r) : o.setHTML(a, r)), i ? a : e.appendChild(a)
                })
            },
            create: function(e, t, n) {
                return this.add(this.doc.createElement(e), e, t, n, 1)
            },
            createHTML: function(e, t, n) {
                var r = "",
                    i;
                r += "<" + e;
                for (i in t) t.hasOwnProperty(i) && null !== t[i] && "undefined" != typeof t[i] && (r += " " + i + '="' + this.encode(t[i]) + '"');
                return "undefined" != typeof n ? r + ">" + n + "</" + e + ">" : r + " />"
            },
            createFragment: function(e) {
                var t, n, r = this.doc,
                    i;
                for (i = r.createElement("div"), t = r.createDocumentFragment(), e && (i.innerHTML = e); n = i.firstChild;) t.appendChild(n);
                return t
            },
            remove: function(e, t) {
                return e = this.$$(e), t ? e.each(function() {
                    for (var e; e = this.firstChild;) 3 == e.nodeType && 0 === e.data.length ? this.removeChild(e) : this.parentNode.insertBefore(e, this)
                }).remove() : e.remove(), e.length > 1 ? e.toArray() : e[0]
            },
            setStyle: function(e, t, n) {
                e = this.$$(e).css(t, n), this.settings.update_styles && f(this, e)
            },
            getStyle: function(e, n, r) {
                return e = this.$$(e), r ? e.css(n) : (n = n.replace(/-(\D)/g, function(e, t) {
                    return t.toUpperCase()
                }), "float" == n && (n = l.ie && l.ie < 12 ? "styleFloat" : "cssFloat"), e[0] && e[0].style ? e[0].style[n] : t)
            },
            setStyles: function(e, t) {
                e = this.$$(e).css(t), this.settings.update_styles && f(this, e)
            },
            removeAllAttribs: function(e) {
                return this.run(e, function(e) {
                    var t, n = e.attributes;
                    for (t = n.length - 1; t >= 0; t--) e.removeAttributeNode(n.item(t))
                })
            },
            setAttrib: function(e, t, n) {
                var r = this,
                    i, o, a = r.settings;
                "" === n && (n = null), e = r.$$(e), i = e.attr(t), e.length && (o = r.attrHooks[t], o && o.set ? o.set(e, n, t) : e.attr(t, n), i != n && a.onSetAttrib && a.onSetAttrib({
                    attrElm: e,
                    attrName: t,
                    attrValue: n
                }))
            },
            setAttribs: function(e, t) {
                var n = this;
                n.$$(e).each(function(e, r) {
                    m(t, function(e, t) {
                        n.setAttrib(r, t, e)
                    })
                })
            },
            getAttrib: function(e, t, n) {
                var r = this,
                    i, o;
                return e = r.$$(e), e.length && (i = r.attrHooks[t], o = i && i.get ? i.get(e, t) : e.attr(t)), "undefined" == typeof o && (o = n || ""), o
            },
            getPos: function(e, t) {
                var r = this,
                    i = 0,
                    o = 0,
                    a, s = r.doc,
                    l = s.body,
                    c;
                if (e = r.get(e), t = t || l, e) {
                    if (t === l && e.getBoundingClientRect && "static" === n(l).css("position")) return c = e.getBoundingClientRect(), t = r.boxModel ? s.documentElement : l, i = c.left + (s.documentElement.scrollLeft || l.scrollLeft) - t.clientLeft, o = c.top + (s.documentElement.scrollTop || l.scrollTop) - t.clientTop, {
                        x: i,
                        y: o
                    };
                    for (a = e; a && a != t && a.nodeType;) i += a.offsetLeft || 0, o += a.offsetTop || 0, a = a.offsetParent;
                    for (a = e.parentNode; a && a != t && a.nodeType;) i -= a.scrollLeft || 0, o -= a.scrollTop || 0, a = a.parentNode
                }
                return {
                    x: i,
                    y: o
                }
            },
            parseStyle: function(e) {
                return this.styles.parse(e)
            },
            serializeStyle: function(e, t) {
                return this.styles.serialize(e, t)
            },
            addStyle: function(e) {

                var t = this,
                    n = t.doc,
                    r, i;
                if (t !== p.DOM && n === document) {
                    var o = p.DOM.addedStyles;
                    if (o = o || [], o[e]) return;
                    o[e] = !0, p.DOM.addedStyles = o
                }

                i = n.getElementById("mceDefaultStyles"), i || (i = n.createElement("style"), i.id = "mceDefaultStyles", i.type = "text/css", r = n.getElementsByTagName("head")[0], r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i)), i.styleSheet ? i.styleSheet.cssText += e : i.appendChild(n.createTextNode(e))
            },
            loadCSS: function(e) {
                var t = this,
                    n = t.doc,
                    r;
                return t !== p.DOM && n === document ? void p.DOM.loadCSS(e) : (e || (e = ""), r = n.getElementsByTagName("head")[0], void m(e.split(","), function(e) {
                    var i;
                    e = c._addCacheSuffix(e), t.files[e] || (t.files[e] = !0, i = t.create("link", {
                        rel: "stylesheet",
                        href: e
                    }), b && n.documentMode && n.recalc && (i.onload = function() {
                        n.recalc && n.recalc(), i.onload = null
                    }), r.appendChild(i))
                }))
            },
            addClass: function(e, t) {
                this.$$(e).addClass(t)
            },
            removeClass: function(e, t) {
                this.toggleClass(e, t, !1)
            },
            hasClass: function(e, t) {
                return this.$$(e).hasClass(t)
            },
            toggleClass: function(e, t, r) {
                this.$$(e).toggleClass(t, r).each(function() {
                    "" === this.className && n(this).attr("class", null)
                })
            },
            show: function(e) {
                this.$$(e).show()
            },
            hide: function(e) {
                this.$$(e).hide()
            },
            isHidden: function(e) {
                return "none" == this.$$(e).css("display")
            },
            uniqueId: function(e) {
                return (e ? e : "mce_") + this.counter++
            },
            setHTML: function(e, t) {
                e = this.$$(e), b ? e.each(function(e, r) {
                    if (r.canHaveHTML !== !1) {
                        for (; r.firstChild;) r.removeChild(r.firstChild);
                        try {
                            r.innerHTML = "<br>" + t, r.removeChild(r.firstChild)
                        } catch (i) {
                            n("<div></div>").html("<br>" + t).contents().slice(1).appendTo(r)
                        }
                        return t
                    }
                }) : e.html(t)
            },
            getOuterHTML: function(e) {
                return e = this.get(e), 1 == e.nodeType && "outerHTML" in e ? e.outerHTML : n("<div></div>").append(n(e).clone()).html()
            },
            setOuterHTML: function(e, t) {
                var r = this;
                r.$$(e).each(function() {
                    try {
                        if ("outerHTML" in this) return void(this.outerHTML = t)
                    } catch (e) {}
                    r.remove(n(this).html(t), !0)
                })
            },
            decode: s.decode,
            encode: s.encodeAllRaw,
            insertAfter: function(e, t) {
                return t = this.get(t), this.run(e, function(e) {
                    var n, r;
                    return n = t.parentNode, r = t.nextSibling, r ? n.insertBefore(e, r) : n.appendChild(e), e
                })
            },
            replace: function(e, t, n) {
                var r = this;
                return r.run(t, function(t) {
                    return g(t, "array") && (e = e.cloneNode(!0)), n && m(v(t.childNodes), function(t) {
                        e.appendChild(t)
                    }), t.parentNode.replaceChild(e, t)
                })
            },
            rename: function(e, t) {
                var n = this,
                    r;
                return e.nodeName != t.toUpperCase() && (r = n.create(t), m(n.getAttribs(e), function(t) {
                    n.setAttrib(r, t.nodeName, n.getAttrib(e, t.nodeName))
                }), n.replace(r, e, 1)), r || e
            },
            findCommonAncestor: function(e, t) {
                for (var n = e, r; n;) {
                    for (r = t; r && n != r;) r = r.parentNode;
                    if (n == r) break;
                    n = n.parentNode
                }
                return !n && e.ownerDocument ? e.ownerDocument.documentElement : n
            },
            toHex: function(e) {
                return this.styles.toHex(c.trim(e))
            },
            run: function(e, t, n) {
                var r = this,
                    i;
                return "string" == typeof e && (e = r.get(e)), !!e && (n = n || this, e.nodeType || !e.length && 0 !== e.length ? t.call(n, e) : (i = [], m(e, function(e, o) {
                    e && ("string" == typeof e && (e = r.get(e)), i.push(t.call(n, e, o)))
                }), i))
            },
            getAttribs: function(e) {
                var t;
                if (e = this.get(e), !e) return [];
                if (b) {
                    if (t = [], "OBJECT" == e.nodeName) return e.attributes;
                    "OPTION" === e.nodeName && this.getAttrib(e, "selected") && t.push({
                        specified: 1,
                        nodeName: "selected"
                    });
                    var n = /<\/?[\w:\-]+ ?|=[\"][^\"]+\"|=\'[^\']+\'|=[\w\-]+|>/gi;
                    return e.cloneNode(!1).outerHTML.replace(n, "").replace(/[\w:\-]+/gi, function(e) {
                        t.push({
                            specified: 1,
                            nodeName: e
                        })
                    }), t
                }
                return e.attributes
            },
            isEmpty: function(e, t) {
                var n = this,
                    r, i, a, s, l, c = 0;
                if (e = e.firstChild) {
                    s = new o(e, e.parentNode), t = t || (n.schema ? n.schema.getNonEmptyElements() : null);
                    do {
                        if (a = e.nodeType, 1 === a) {
                            var u = e.getAttribute("data-mce-bogus");
                            if (u) {
                                e = s.next("all" === u);
                                continue
                            }
                            if (l = e.nodeName.toLowerCase(), t && t[l]) {
                                if ("br" === l) {
                                    c++, e = s.next();
                                    continue
                                }
                                return !1
                            }
                            for (i = n.getAttribs(e), r = i.length; r--;)
                                if (l = i[r].nodeName, "name" === l || "data-mce-bookmark" === l) return !1
                        }
                        if (8 == a) return !1;
                        if (3 === a && !x.test(e.nodeValue)) return !1;
                        e = s.next()
                    } while (e)
                }
                return c <= 1
            },
            createRng: function() {
                var e = this.doc;
                return e.createRange ? e.createRange() : new a(this)
            },
            nodeIndex: h,
            split: function(e, t, n) {
                function r(e) {
                    function t(e) {
                        var t = e.previousSibling && "SPAN" == e.previousSibling.nodeName,
                            n = e.nextSibling && "SPAN" == e.nextSibling.nodeName;
                        return t && n
                    }
                    var n, o = e.childNodes,
                        a = e.nodeType;
                    if (1 != a || "bookmark" != e.getAttribute("data-mce-type")) {
                        for (n = o.length - 1; n >= 0; n--) r(o[n]);
                        if (9 != a) {
                            if (3 == a && e.nodeValue.length > 0) {
                                var s = y(e.nodeValue).length;
                                if (!i.isBlock(e.parentNode) || s > 0 || 0 === s && t(e)) return
                            } else if (1 == a && (o = e.childNodes, 1 == o.length && o[0] && 1 == o[0].nodeType && "bookmark" == o[0].getAttribute("data-mce-type") && e.parentNode.insertBefore(o[0], e), o.length || /^(br|hr|input|img)$/i.test(e.nodeName))) return;
                            i.remove(e)
                        }
                        return e
                    }
                }
                var i = this,
                    o = i.createRng(),
                    a, s, l;
                if (e && t) return o.setStart(e.parentNode, i.nodeIndex(e)), o.setEnd(t.parentNode, i.nodeIndex(t)), a = o.extractContents(), o = i.createRng(), o.setStart(t.parentNode, i.nodeIndex(t) + 1), o.setEnd(e.parentNode, i.nodeIndex(e) + 1), s = o.extractContents(), l = e.parentNode, l.insertBefore(r(a), e), n ? l.insertBefore(n, e) : l.insertBefore(t, e), l.insertBefore(r(s), e), i.remove(e), n || t
            },
            bind: function(e, t, n, r) {
                var i = this;
                if (c.isArray(e)) {
                    for (var o = e.length; o--;) e[o] = i.bind(e[o], t, n, r);
                    return e
                }
                return !i.settings.collect || e !== i.doc && e !== i.win || i.boundEvents.push([e, t, n, r]), i.events.bind(e, t, n, r || i)
            },
            unbind: function(e, t, n) {
                var r = this,
                    i;
                if (c.isArray(e)) {
                    for (i = e.length; i--;) e[i] = r.unbind(e[i], t, n);
                    return e
                }
                if (r.boundEvents && (e === r.doc || e === r.win))
                    for (i = r.boundEvents.length; i--;) {
                        var o = r.boundEvents[i];
                        e != o[0] || t && t != o[1] || n && n != o[2] || this.events.unbind(o[0], o[1], o[2])
                    }
                return this.events.unbind(e, t, n)
            },
            fire: function(e, t, n) {
                return this.events.fire(e, t, n)
            },
            getContentEditable: function(e) {
                var t;
                return e && 1 == e.nodeType ? (t = e.getAttribute("data-mce-contenteditable"), t && "inherit" !== t ? t : "inherit" !== e.contentEditable ? e.contentEditable : null) : null
            },
            getContentEditableParent: function(e) {
                for (var t = this.getRoot(), n = null; e && e !== t && (n = this.getContentEditable(e), null === n); e = e.parentNode);
                return n
            },
            destroy: function() {
                var t = this;
                if (t.boundEvents) {
                    for (var n = t.boundEvents.length; n--;) {
                        var r = t.boundEvents[n];
                        this.events.unbind(r[0], r[1], r[2])
                    }
                    t.boundEvents = null
                }
                e.setDocument && e.setDocument(), t.win = t.doc = t.root = t.events = t.frag = null
            },
            isChildOf: function(e, t) {
                for (; e;) {
                    if (t === e) return !0;
                    e = e.parentNode
                }
                return !1
            },
            dumpRng: function(e) {
                return "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset
            },
            _findSib: function(e, t, n) {
                var r = this,
                    i = t;
                if (e)
                    for ("string" == typeof i && (i = function(e) {
                            return r.is(e, t)
                        }), e = e[n]; e; e = e[n])
                        if (i(e)) return e;
                return null
            }
        }, p.DOM = new p(document), p.nodeIndex = h, p
    }), r(E, [w, m], function(e, t) {
        function n() {
            function e(e, n) {
                function i() {
                    a.remove(l), s && (s.onreadystatechange = s.onload = s = null), n()
                }

                function o() {
                    "undefined" != typeof console && console.log && console.log("Failed to load: " + e)
                }
                var a = r,
                    s, l;
                l = a.uniqueId(), s = document.createElement("script"), s.id = l, s.type = "text/javascript", s.src = t._addCacheSuffix(e), "onreadystatechange" in s ? s.onreadystatechange = function() {
                    /loaded|complete/.test(s.readyState) && i()
                } : s.onload = i, s.onerror = o, (document.getElementsByTagName("head")[0] || document.body).appendChild(s)
            }
            var n = 0,
                a = 1,
                s = 2,
                l = {},
                c = [],
                u = {},
                d = [],
                f = 0,
                h;
            this.isDone = function(e) {
                return l[e] == s
            }, this.markDone = function(e) {
                l[e] = s
            }, this.add = this.load = function(e, t, r) {
                var i = l[e];
                i == h && (c.push(e), l[e] = n), t && (u[e] || (u[e] = []), u[e].push({
                    func: t,
                    scope: r || this
                }))
            }, this.remove = function(e) {
                delete l[e], delete u[e]
            }, this.loadQueue = function(e, t) {
                this.loadScripts(c, e, t)
            }, this.loadScripts = function(t, n, r) {
                function c(e) {
                    i(u[e], function(e) {
                        e.func.call(e.scope)
                    }), u[e] = h
                }
                var p;
                d.push({
                    func: n,
                    scope: r || this
                }), (p = function() {
                    var n = o(t);
                    t.length = 0, i(n, function(t) {
                        return l[t] == s ? void c(t) : void(l[t] != a && (l[t] = a, f++, e(t, function() {
                            l[t] = s, f--, c(t), p()
                        })))
                    }), f || (i(d, function(e) {
                        e.func.call(e.scope)
                    }), d.length = 0)
                })()
            }
        }
        var r = e.DOM,
            i = t.each,
            o = t.grep;
        return n.ScriptLoader = new n, n
    }), r(N, [E, m], function(e, n) {
        function r() {
            var e = this;
            e.items = [], e.urls = {}, e.lookup = {}
        }
        var i = n.each;
        return r.prototype = {
            get: function(e) {
                return this.lookup[e] ? this.lookup[e].instance : t
            },
            dependencies: function(e) {
                var t;
                return this.lookup[e] && (t = this.lookup[e].dependencies), t || []
            },
            requireLangPack: function(t, n) {
                var i = r.language;
                if (i && r.languageLoad !== !1) {
                    if (n)
                        if (n = "," + n + ",", n.indexOf("," + i.substr(0, 2) + ",") != -1) i = i.substr(0, 2);
                        else if (n.indexOf("," + i + ",") == -1) return;
                    e.ScriptLoader.add(this.urls[t] + "/langs/" + i + ".js")
                }
            },
            add: function(e, t, n) {
                return this.items.push(t), this.lookup[e] = {
                    instance: t,
                    dependencies: n
                }, t
            },
            remove: function(e) {
                delete this.urls[e], delete this.lookup[e]
            },
            createUrl: function(e, t) {
                return "object" == typeof t ? t : {
                    prefix: e.prefix,
                    resource: t,
                    suffix: e.suffix
                }
            },
            addComponents: function(t, n) {
                var r = this.urls[t];
                i(n, function(t) {
                    e.ScriptLoader.add(r + "/" + t)
                })
            },
            load: function(n, o, a, s) {
                function l() {
                    var r = c.dependencies(n);
                    i(r, function(e) {
                        var n = c.createUrl(o, e);
                        c.load(n.resource, n, t, t)
                    }), a && (s ? a.call(s) : a.call(e))
                }
                var c = this,
                    u = o;
                c.urls[n] || ("object" == typeof o && (u = o.prefix + o.resource + o.suffix), 0 !== u.indexOf("/") && u.indexOf("://") == -1 && (u = r.baseURL + "/" + u), c.urls[n] = u.substring(0, u.lastIndexOf("/")), c.lookup[n] ? l() : e.ScriptLoader.add(u, l, s))
            }
        }, r.PluginManager = new r, r.ThemeManager = new r, r
    }), r(_, [], function() {
        function e(e) {
            return function(t) {
                return !!t && t.nodeType == e
            }
        }

        function t(e) {
            return e = e.toLowerCase().split(" "),
                function(t) {
                    var n, r;
                    if (t && t.nodeType)
                        for (r = t.nodeName.toLowerCase(), n = 0; n < e.length; n++)
                            if (r === e[n]) return !0;
                    return !1
                }
        }

        function n(e, t) {
            return t = t.toLowerCase().split(" "),
                function(n) {
                    var r, i;
                    if (s(n))
                        for (r = 0; r < t.length; r++)
                            if (i = getComputedStyle(n, null).getPropertyValue(e), i === t[r]) return !0;
                    return !1
                }
        }

        function r(e, t) {
            return function(n) {
                return s(n) && n[e] === t
            }
        }

        function i(e, t) {
            return function(n) {
                return s(n) && n.getAttribute(e) === t
            }
        }

        function o(e) {
            return s(e) && e.hasAttribute("data-mce-bogus")
        }

        function a(e) {
            return function(t) {
                if (s(t)) {
                    if (t.contentEditable === e) return !0;
                    if (t.getAttribute("data-mce-contenteditable") === e) return !0
                }
                return !1
            }
        }
        var s = e(1);
        return {
            isText: e(3),
            isElement: s,
            isComment: e(8),
            isBr: t("br"),
            isContentEditableTrue: a("true"),
            isContentEditableFalse: a("false"),
            matchNodeNames: t,
            hasPropValue: r,
            hasAttributeValue: i,
            matchStyleValues: n,
            isBogus: o
        }
    }), r(S, [], function() {
        function e(e) {
            return e == n
        }

        function t(e) {
            return e.replace(new RegExp(n, "g"), "")
        }
        var n = "\ufeff";
        return {
            isZwsp: e,
            ZWSP: n,
            trim: t
        }
    }), r(k, [_, S], function(e, t) {
        function n(e) {
            return y(e) && (e = e.parentNode), v(e) && e.hasAttribute("data-mce-caret")
        }

        function r(e) {
            return y(e) && t.isZwsp(e.data)
        }

        function i(e) {
            return n(e) || r(e)
        }

        function o(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }

        function a(e) {
            try {
                return e.nodeValue
            } catch (t) {
                return ""
            }
        }

        function s(e, t) {
            0 === t.length ? o(e) : e.nodeValue = t
        }

        function l(e, n) {
            var r, o, a, s;
            if (r = e.ownerDocument, a = r.createTextNode(t.ZWSP), s = e.parentNode, n) {
                if (o = e.previousSibling, y(o)) {
                    if (i(o)) return o;
                    if (p(o)) return o.splitText(o.data.length - 1)
                }
                s.insertBefore(a, e)
            } else {
                if (o = e.nextSibling, y(o)) {
                    if (i(o)) return o;
                    if (h(o)) return o.splitText(1), o
                }
                e.nextSibling ? s.insertBefore(a, e.nextSibling) : s.appendChild(a)
            }
            return a
        }

        function c() {
            var e = document.createElement("br");
            return e.setAttribute("data-mce-bogus", "1"), e
        }

        function u(e, t, n) {
            var r, i, o;
            return r = t.ownerDocument, i = r.createElement(e), i.setAttribute("data-mce-caret", n ? "before" : "after"), i.setAttribute("data-mce-bogus", "all"), i.appendChild(c()), o = t.parentNode, n ? o.insertBefore(i, t) : t.nextSibling ? o.insertBefore(i, t.nextSibling) : o.appendChild(i), i
        }

        function d(t) {
            return t.firstChild !== t.lastChild || !e.isBr(t.firstChild)
        }

        function f(e) {
            if (v(e) && i(e) && (d(e) ? e.removeAttribute("data-mce-caret") : o(e)), y(e)) {
                var n = t.trim(a(e));
                s(e, n)
            }
        }

        function h(e) {
            return y(e) && e.data[0] == t.ZWSP
        }

        function p(e) {
            return y(e) && e.data[e.data.length - 1] == t.ZWSP
        }

        function m(t) {
            var n = t.getElementsByTagName("br"),
                r = n[n.length - 1];
            e.isBogus(r) && r.parentNode.removeChild(r)
        }

        function g(e) {
            return e && e.hasAttribute("data-mce-caret") ? (m(e), e.removeAttribute("data-mce-caret"), e.removeAttribute("data-mce-bogus"), e.removeAttribute("style"), e.removeAttribute("_moz_abspos"), e) : null
        }
        var v = e.isElement,
            y = e.isText;
        return {
            isCaretContainer: i,
            isCaretContainerBlock: n,
            isCaretContainerInline: r,
            showCaretContainerBlock: g,
            insertInline: l,
            insertBlock: u,
            hasContent: d,
            remove: f,
            startsWithCaretContainer: h,
            endsWithCaretContainer: p
        }
    }), r(T, [m, y, _, b, k], function(e, t, n, r, i) {
        function o(e) {
            return m(e) || g(e)
        }

        function a(e, t) {
            var n = e.childNodes;
            return t--, t > n.length - 1 ? t = n.length - 1 : t < 0 && (t = 0), n[t] || e
        }

        function s(e, t, n) {
            for (; e && e !== t;) {
                if (n(e)) return e;
                e = e.parentNode
            }
            return null
        }

        function l(e, t, n) {
            return null !== s(e, t, n)
        }

        function c(e) {
            return "_mce_caret" === e.id
        }

        function u(e, t) {
            return v(e) && l(e, t, c) === !1
        }

        function d(e) {
            this.walk = function(t, n) {
                function r(e) {
                    var t;
                    return t = e[0], 3 === t.nodeType && t === l && c >= t.nodeValue.length && e.splice(0, 1), t = e[e.length - 1], 0 === d && e.length > 0 && t === u && 3 === t.nodeType && e.splice(e.length - 1, 1), e
                }

                function i(e, t, n) {
                    for (var r = []; e && e != n; e = e[t]) r.push(e);
                    return r
                }

                function o(e, t) {
                    do {
                        if (e.parentNode == t) return e;
                        e = e.parentNode
                    } while (e)
                }

                function s(e, t, o) {
                    var a = o ? "nextSibling" : "previousSibling";
                    for (g = e, v = g.parentNode; g && g != t; g = v) v = g.parentNode, y = i(g == e ? g : g[a], a), y.length && (o || y.reverse(), n(r(y)))
                }
                var l = t.startContainer,
                    c = t.startOffset,
                    u = t.endContainer,
                    d = t.endOffset,
                    f, h, m, g, v, y, b;
                if (b = e.select("td[data-mce-selected],th[data-mce-selected]"), b.length > 0) return void p(b, function(e) {
                    n([e])
                });
                if (1 == l.nodeType && l.hasChildNodes() && (l = l.childNodes[c]), 1 == u.nodeType && u.hasChildNodes() && (u = a(u, d)), l == u) return n(r([l]));
                for (f = e.findCommonAncestor(l, u), g = l; g; g = g.parentNode) {
                    if (g === u) return s(l, f, !0);
                    if (g === f) break
                }
                for (g = u; g; g = g.parentNode) {
                    if (g === l) return s(u, f);
                    if (g === f) break
                }
                h = o(l, f) || l, m = o(u, f) || u, s(l, h, !0), y = i(h == l ? h : h.nextSibling, "nextSibling", m == u ? m.nextSibling : m), y.length && n(r(y)), s(u, m)
            }, this.split = function(e) {
                function t(e, t) {
                    return e.splitText(t)
                }
                var n = e.startContainer,
                    r = e.startOffset,
                    i = e.endContainer,
                    o = e.endOffset;
                return n == i && 3 == n.nodeType ? r > 0 && r < n.nodeValue.length && (i = t(n, r), n = i.previousSibling, o > r ? (o -= r, n = i = t(i, o).previousSibling, o = i.nodeValue.length, r = 0) : o = 0) : (3 == n.nodeType && r > 0 && r < n.nodeValue.length && (n = t(n, r), r = 0), 3 == i.nodeType && o > 0 && o < i.nodeValue.length && (i = t(i, o).previousSibling, o = i.nodeValue.length)), {
                    startContainer: n,
                    startOffset: r,
                    endContainer: i,
                    endOffset: o
                }
            }, this.normalize = function(n) {
                function r(r) {
                    function a(e) {
                        return e && /^(TD|TH|CAPTION)$/.test(e.nodeName)
                    }

                    function s(n, r) {
                        for (var i = new t(n, e.getParent(n.parentNode, e.isBlock) || m); n = i[r ? "prev" : "next"]();)
                            if ("BR" === n.nodeName) return !0
                    }

                    function l(e) {
                        for (; e && e != m;) {
                            if (g(e)) return !0;
                            e = e.parentNode
                        }
                        return !1
                    }

                    function c(e, t) {
                        return e.previousSibling && e.previousSibling.nodeName == t
                    }

                    function d(n, r) {
                        var a, s, l;
                        if (r = r || f, l = e.getParent(r.parentNode, e.isBlock) || m, n && "BR" == r.nodeName && x && e.isEmpty(l)) return f = r.parentNode, h = e.nodeIndex(r), void(i = !0);
                        for (a = new t(r, l); y = a[n ? "prev" : "next"]();) {
                            if ("false" === e.getContentEditableParent(y) || u(y, e.getRoot())) return;
                            if (3 === y.nodeType && y.nodeValue.length > 0) return f = y, h = n ? y.nodeValue.length : 0, void(i = !0);
                            if (e.isBlock(y) || b[y.nodeName.toLowerCase()]) return;
                            s = y
                        }
                        o && s && (f = s, i = !0, h = 0)
                    }
                    var f, h, p, m = e.getRoot(),
                        y, b, C, x;
                    if (f = n[(r ? "start" : "end") + "Container"], h = n[(r ? "start" : "end") + "Offset"], x = 1 == f.nodeType && h === f.childNodes.length, b = e.schema.getNonEmptyElements(), C = r, !v(f)) {
                        if (1 == f.nodeType && h > f.childNodes.length - 1 && (C = !1), 9 === f.nodeType && (f = e.getRoot(), h = 0), f === m) {
                            if (C && (y = f.childNodes[h > 0 ? h - 1 : 0])) {
                                if (v(y)) return;
                                if (b[y.nodeName] || "TABLE" == y.nodeName) return
                            }
                            if (f.hasChildNodes()) {
                                if (h = Math.min(!C && h > 0 ? h - 1 : h, f.childNodes.length - 1), f = f.childNodes[h], h = 0, !o && f === m.lastChild && "TABLE" === f.nodeName) return;
                                if (l(f) || v(f)) return;
                                if (f.hasChildNodes() && !/TABLE/.test(f.nodeName)) {
                                    y = f, p = new t(f, m);
                                    do {
                                        if (g(y) || v(y)) {
                                            i = !1;
                                            break
                                        }
                                        if (3 === y.nodeType && y.nodeValue.length > 0) {
                                            h = C ? 0 : y.nodeValue.length, f = y, i = !0;
                                            break
                                        }
                                        if (b[y.nodeName.toLowerCase()] && !a(y)) {
                                            h = e.nodeIndex(y), f = y.parentNode, "IMG" != y.nodeName || C || h++, i = !0;
                                            break
                                        }
                                    } while (y = C ? p.next() : p.prev())
                                }
                            }
                        }
                        o && (3 === f.nodeType && 0 === h && d(!0), 1 === f.nodeType && (y = f.childNodes[h], y || (y = f.childNodes[h - 1]), !y || "BR" !== y.nodeName || c(y, "A") || s(y) || s(y, !0) || d(!0, y))), C && !o && 3 === f.nodeType && h === f.nodeValue.length && d(!1), i && n["set" + (r ? "Start" : "End")](f, h)
                    }
                }
                var i, o;
                return o = n.collapsed, r(!0), o || r(), i && o && n.collapse(!0), i
            }
        }

        function f(t, n, r) {
            var i, o, a;
            if (i = r.elementFromPoint(t, n), o = r.body.createTextRange(), i && "HTML" != i.tagName || (i = r.body), o.moveToElementText(i), a = e.toArray(o.getClientRects()), a = a.sort(function(e, t) {
                    return e = Math.abs(Math.max(e.top - n, e.bottom - n)), t = Math.abs(Math.max(t.top - n, t.bottom - n)), e - t
                }), a.length > 0) {
                n = (a[0].bottom + a[0].top) / 2;
                try {
                    return o.moveToPoint(t, n), o.collapse(!0), o
                } catch (s) {}
            }
            return null
        }

        function h(e, t) {
            var n = e && e.parentElement ? e.parentElement() : null;
            return g(s(n, t, o)) ? null : e
        }
        var p = e.each,
            m = n.isContentEditableTrue,
            g = n.isContentEditableFalse,
            v = i.isCaretContainer;
        return d.compareRanges = function(e, t) {
            if (e && t) {
                if (!e.item && !e.duplicate) return e.startContainer == t.startContainer && e.startOffset == t.startOffset;
                if (e.item && t.item && e.item(0) === t.item(0)) return !0;
                if (e.isEqual && t.isEqual && t.isEqual(e)) return !0
            }
            return !1
        }, d.getCaretRangeFromPoint = function(e, t, n) {
            var r, i;
            if (n.caretPositionFromPoint) i = n.caretPositionFromPoint(e, t), r = n.createRange(), r.setStart(i.offsetNode, i.offset), r.collapse(!0);
            else if (n.caretRangeFromPoint) r = n.caretRangeFromPoint(e, t);
            else if (n.body.createTextRange) {
                r = n.body.createTextRange();
                try {
                    r.moveToPoint(e, t), r.collapse(!0)
                } catch (o) {
                    r = f(e, t, n)
                }
                return h(r, n.body)
            }
            return r
        }, d.getSelectedNode = function(e) {
            var t = e.startContainer,
                n = e.startOffset;
            return t.hasChildNodes() && e.endOffset == n + 1 ? t.childNodes[n] : null
        }, d.getNode = function(e, t) {
            return 1 == e.nodeType && e.hasChildNodes() && (t >= e.childNodes.length && (t = e.childNodes.length - 1), e = e.childNodes[t]), e
        }, d
    }), r(R, [T, d, u], function(e, t, n) {
        return function(r) {
            function i(e) {
                var t, n;
                if (n = r.$(e).parentsUntil(r.getBody()).add(e), n.length === a.length) {
                    for (t = n.length; t >= 0 && n[t] === a[t]; t--);
                    if (t === -1) return a = n, !0
                }
                return a = n, !1
            }
            var o, a = [];
            "onselectionchange" in r.getDoc() || r.on("NodeChange Click MouseUp KeyUp Focus", function(t) {
                var n, i;
                n = r.selection.getRng(), i = {
                    startContainer: n.startContainer,
                    startOffset: n.startOffset,
                    endContainer: n.endContainer,
                    endOffset: n.endOffset
                }, "nodechange" != t.type && e.compareRanges(i, o) || r.fire("SelectionChange"), o = i
            }), r.on("contextmenu", function() {
                r.fire("SelectionChange")
            }), r.on("SelectionChange", function() {
                var e = r.selection.getStart(!0);
                !t.range && r.selection.isCollapsed() || !i(e) && r.dom.isChildOf(e, r.getBody()) && r.nodeChanged({
                    selectionChange: !0
                })
            }), r.on("MouseUp", function(e) {
                e.isDefaultPrevented() || ("IMG" == r.selection.getNode().nodeName ? n.setEditorTimeout(r, function() {
                    r.nodeChanged()
                }) : r.nodeChanged())
            }), this.nodeChanged = function(e) {
                var t = r.selection,
                    n, i, o;
                r.initialized && t && !r.settings.disable_nodechange && !r.readonly && (o = r.getBody(), n = t.getStart() || o, n.ownerDocument == r.getDoc() && r.dom.isChildOf(n, o) || (n = o), "IMG" == n.nodeName && t.isCollapsed() && (n = n.parentNode), i = [], r.dom.getParent(n, function(e) {
                    return e === o || void i.push(e)
                }), e = e || {}, e.element = n, e.parents = i, r.fire("NodeChange", e))
            }
        }
    }), r(A, [], function() {
        function e(e, t, n) {
            var r, i, o = n ? "lastChild" : "firstChild",
                a = n ? "prev" : "next";
            if (e[o]) return e[o];
            if (e !== t) {
                if (r = e[a]) return r;
                for (i = e.parent; i && i !== t; i = i.parent)
                    if (r = i[a]) return r
            }
        }

        function t(e, t) {
            this.name = e, this.type = t, 1 === t && (this.attributes = [], this.attributes.map = {})
        }
        var n = /^[ \t\r\n]*$/,
            r = {
                "#text": 3,
                "#comment": 8,
                "#cdata": 4,
                "#pi": 7,
                "#doctype": 10,
                "#document-fragment": 11
            };
        return t.prototype = {
            replace: function(e) {
                var t = this;
                return e.parent && e.remove(), t.insert(e, t), t.remove(), t
            },
            attr: function(e, t) {
                var n = this,
                    r, i, o;
                if ("string" != typeof e) {
                    for (i in e) n.attr(i, e[i]);
                    return n
                }
                if (r = n.attributes) {
                    if (t !== o) {
                        if (null === t) {
                            if (e in r.map)
                                for (delete r.map[e], i = r.length; i--;)
                                    if (r[i].name === e) return r = r.splice(i, 1), n;
                            return n
                        }
                        if (e in r.map) {
                            for (i = r.length; i--;)
                                if (r[i].name === e) {
                                    r[i].value = t;
                                    break
                                }
                        } else r.push({
                            name: e,
                            value: t
                        });
                        return r.map[e] = t, n
                    }
                    return r.map[e]
                }
            },
            clone: function() {
                var e = this,
                    n = new t(e.name, e.type),
                    r, i, o, a, s;
                if (o = e.attributes) {
                    for (s = [], s.map = {}, r = 0, i = o.length; r < i; r++) a = o[r], "id" !== a.name && (s[s.length] = {
                        name: a.name,
                        value: a.value
                    }, s.map[a.name] = a.value);
                    n.attributes = s
                }
                return n.value = e.value, n.shortEnded = e.shortEnded, n
            },
            wrap: function(e) {
                var t = this;
                return t.parent.insert(e, t), e.append(t), t
            },
            unwrap: function() {
                var e = this,
                    t, n;
                for (t = e.firstChild; t;) n = t.next, e.insert(t, e, !0), t = n;
                e.remove()
            },
            remove: function() {
                var e = this,
                    t = e.parent,
                    n = e.next,
                    r = e.prev;
                return t && (t.firstChild === e ? (t.firstChild = n, n && (n.prev = null)) : r.next = n, t.lastChild === e ? (t.lastChild = r, r && (r.next = null)) : n.prev = r, e.parent = e.next = e.prev = null), e
            },
            append: function(e) {
                var t = this,
                    n;
                return e.parent && e.remove(), n = t.lastChild, n ? (n.next = e, e.prev = n, t.lastChild = e) : t.lastChild = t.firstChild = e, e.parent = t, e
            },
            insert: function(e, t, n) {
                var r;
                return e.parent && e.remove(), r = t.parent || this, n ? (t === r.firstChild ? r.firstChild = e : t.prev.next = e, e.prev = t.prev, e.next = t, t.prev = e) : (t === r.lastChild ? r.lastChild = e : t.next.prev = e, e.next = t.next, e.prev = t, t.next = e), e.parent = r, e
            },
            getAll: function(t) {
                var n = this,
                    r, i = [];
                for (r = n.firstChild; r; r = e(r, n)) r.name === t && i.push(r);
                return i
            },
            empty: function() {
                var t = this,
                    n, r, i;
                if (t.firstChild) {
                    for (n = [], i = t.firstChild; i; i = e(i, t)) n.push(i);
                    for (r = n.length; r--;) i = n[r], i.parent = i.firstChild = i.lastChild = i.next = i.prev = null
                }
                return t.firstChild = t.lastChild = null, t
            },
            isEmpty: function(t) {
                var r = this,
                    i = r.firstChild,
                    o, a;
                if (i)
                    do {
                        if (1 === i.type) {
                            if (i.attributes.map["data-mce-bogus"]) continue;
                            if (t[i.name]) return !1;
                            for (o = i.attributes.length; o--;)
                                if (a = i.attributes[o].name, "name" === a || 0 === a.indexOf("data-mce-bookmark")) return !1
                        }
                        if (8 === i.type) return !1;
                        if (3 === i.type && !n.test(i.value)) return !1
                    } while (i = e(i, r));
                return !0
            },
            walk: function(t) {
                return e(this, null, t)
            }
        }, t.create = function(e, n) {
            var i, o;
            if (i = new t(e, r[e] || 1), n)
                for (o in n) i.attr(o, n[o]);
            return i
        }, t
    }), r(B, [m], function(e) {
        function t(t, n) {
            return t = e.trim(t), t ? t.split(n || " ") : []
        }

        function n(e) {
            function n(e, n, r) {
                function i(e, t) {
                    var n = {},
                        r, i;
                    for (r = 0, i = e.length; r < i; r++) n[e[r]] = t || {};
                    return n
                }
                var s, c, u;
                for (r = r || [], n = n || "", "string" == typeof r && (r = t(r)), e = t(e), s = e.length; s--;) c = t([l, n].join(" ")), u = {
                    attributes: i(c),
                    attributesOrder: c,
                    children: i(r, o)
                }, a[e[s]] = u
            }

            function r(e, n) {
                var r, i, o, s;
                for (e = t(e), r = e.length, n = t(n); r--;)
                    for (i = a[e[r]], o = 0, s = n.length; o < s; o++) i.attributes[n[o]] = {}, i.attributesOrder.push(n[o])
            }
            var a = {},
                l, c, u, d, f, h;
            return i[e] ? i[e] : (l = "id accesskey class dir lang style tabindex title", c = "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul", u = "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment", "html4" != e && (l += " contenteditable contextmenu draggable dropzone hidden spellcheck translate", c += " article aside details dialog figure header footer hgroup section nav", u += " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"), "html5-strict" != e && (l += " xml:lang", h = "acronym applet basefont big font strike tt", u = [u, h].join(" "), s(t(h), function(e) {
                n(e, "", u)
            }), f = "center dir isindex noframes", c = [c, f].join(" "), d = [c, u].join(" "), s(t(f), function(e) {
                n(e, "", d)
            })), d = d || [c, u].join(" "), n("html", "manifest", "head body"), n("head", "", "base command link meta noscript script style title"), n("title hr noscript br"), n("base", "href target"), n("link", "href rel media hreflang type sizes hreflang"), n("meta", "name http-equiv content charset"), n("style", "media type scoped"), n("script", "src async defer type charset"), n("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", d), n("address dt dd div caption", "", d), n("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", u), n("blockquote", "cite", d), n("ol", "reversed start type", "li"), n("ul", "", "li"), n("li", "value", d), n("dl", "", "dt dd"), n("a", "href target rel media hreflang type", u), n("q", "cite", u), n("ins del", "cite datetime", d), n("img", "src sizes srcset alt usemap ismap width height"), n("iframe", "src name width height", d), n("embed", "src type width height"), n("object", "data type typemustmatch name usemap form width height", [d, "param"].join(" ")), n("param", "name value"), n("map", "name", [d, "area"].join(" ")), n("area", "alt coords shape href target rel media hreflang type"), n("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" == e ? " col" : "")), n("colgroup", "span", "col"), n("col", "span"), n("tbody thead tfoot", "", "tr"), n("tr", "", "td th"), n("td", "colspan rowspan headers", d), n("th", "colspan rowspan headers scope abbr", d), n("form", "accept-charset action autocomplete enctype method name novalidate target", d), n("fieldset", "disabled form name", [d, "legend"].join(" ")), n("label", "form for", u), n("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"), n("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" == e ? d : u), n("select", "disabled form multiple name required size", "option optgroup"), n("optgroup", "disabled label", "option"), n("option", "disabled label selected value"), n("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"), n("menu", "type label", [d, "li"].join(" ")), n("noscript", "", d), "html4" != e && (n("wbr"), n("ruby", "", [u, "rt rp"].join(" ")), n("figcaption", "", d), n("mark rt rp summary bdi", "", u), n("canvas", "width height", d), n("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", [d, "track source"].join(" ")), n("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", [d, "track source"].join(" ")), n("picture", "", "img source"), n("source", "src srcset type media sizes"), n("track", "kind src srclang label default"), n("datalist", "", [u, "option"].join(" ")), n("article section nav aside header footer", "", d), n("hgroup", "", "h1 h2 h3 h4 h5 h6"), n("figure", "", [d, "figcaption"].join(" ")), n("time", "datetime", u), n("dialog", "open", d), n("command", "type label icon disabled checked radiogroup command"), n("output", "for form name", u), n("progress", "value max", u), n("meter", "value min max low high optimum", u), n("details", "open", [d, "summary"].join(" ")), n("keygen", "autofocus challenge disabled form keytype name")), "html5-strict" != e && (r("script", "language xml:space"), r("style", "xml:space"), r("object", "declare classid code codebase codetype archive standby align border hspace vspace"), r("embed", "align name hspace vspace"), r("param", "valuetype type"), r("a", "charset name rev shape coords"), r("br", "clear"), r("applet", "codebase archive code object alt name width height align hspace vspace"), r("img", "name longdesc align border hspace vspace"), r("iframe", "longdesc frameborder marginwidth marginheight scrolling align"), r("font basefont", "size color face"), r("input", "usemap align"), r("select", "onchange"), r("textarea"), r("h1 h2 h3 h4 h5 h6 div p legend caption", "align"), r("ul", "type compact"), r("li", "type"), r("ol dl menu dir", "compact"), r("pre", "width xml:space"), r("hr", "align noshade size width"), r("isindex", "prompt"), r("table", "summary width frame rules cellspacing cellpadding align bgcolor"), r("col", "width align char charoff valign"), r("colgroup", "width align char charoff valign"), r("thead", "align char charoff valign"), r("tr", "align char charoff valign bgcolor"), r("th", "axis align char charoff valign nowrap bgcolor width height"), r("form", "accept"), r("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"), r("tfoot", "align char charoff valign"), r("tbody", "align char charoff valign"), r("area", "nohref"), r("body", "background bgcolor text link vlink alink")), "html4" != e && (r("input button select textarea", "autofocus"), r("input textarea", "placeholder"), r("a", "download"), r("link script img", "crossorigin"), r("iframe", "sandbox seamless allowfullscreen")), s(t("a form meter progress dfn"), function(e) {
                a[e] && delete a[e].children[e]
            }), delete a.caption.children.table, delete a.script, i[e] = a, a)
        }

        function r(e, t) {
            var n;
            return e && (n = {}, "string" == typeof e && (e = {
                "*": e
            }), s(e, function(e, r) {
                n[r] = n[r.toUpperCase()] = "map" == t ? a(e, /[, ]/) : c(e, /[, ]/)
            })), n
        }
        var i = {},
            o = {},
            a = e.makeMap,
            s = e.each,
            l = e.extend,
            c = e.explode,
            u = e.inArray;
        return function(e) {
            function o(t, n, r) {
                var o = e[t];
                return o ? o = a(o, /[, ]/, a(o.toUpperCase(), /[, ]/)) : (o = i[t],
                    o || (o = a(n, " ", a(n.toUpperCase(), " ")), o = l(o, r), i[t] = o)), o
            }

            function d(e) {
                return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$")
            }

            function f(e) {
                var n, r, i, o, s, l, c, f, h, p, m, g, v, b, x, w, E, N, _, S = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,
                    k = /^([!\-])?(\w+::\w+|[^=:<]+)?(?:([=:<])(.*))?$/,
                    T = /[*?+]/;
                if (e)
                    for (e = t(e, ","), y["@"] && (w = y["@"].attributes, E = y["@"].attributesOrder), n = 0, r = e.length; n < r; n++)
                        if (s = S.exec(e[n])) {
                            if (b = s[1], h = s[2], x = s[3], f = s[5], g = {}, v = [], l = {
                                    attributes: g,
                                    attributesOrder: v
                                }, "#" === b && (l.paddEmpty = !0), "-" === b && (l.removeEmpty = !0), "!" === s[4] && (l.removeEmptyAttrs = !0), w) {
                                for (N in w) g[N] = w[N];
                                v.push.apply(v, E)
                            }
                            if (f)
                                for (f = t(f, "|"), i = 0, o = f.length; i < o; i++)
                                    if (s = k.exec(f[i])) {
                                        if (c = {}, m = s[1], p = s[2].replace(/::/g, ":"), b = s[3], _ = s[4], "!" === m && (l.attributesRequired = l.attributesRequired || [], l.attributesRequired.push(p), c.required = !0), "-" === m) {
                                            delete g[p], v.splice(u(v, p), 1);
                                            continue
                                        }
                                        b && ("=" === b && (l.attributesDefault = l.attributesDefault || [], l.attributesDefault.push({
                                            name: p,
                                            value: _
                                        }), c.defaultValue = _), ":" === b && (l.attributesForced = l.attributesForced || [], l.attributesForced.push({
                                            name: p,
                                            value: _
                                        }), c.forcedValue = _), "<" === b && (c.validValues = a(_, "?"))), T.test(p) ? (l.attributePatterns = l.attributePatterns || [], c.pattern = d(p), l.attributePatterns.push(c)) : (g[p] || v.push(p), g[p] = c)
                                    }
                            w || "@" != h || (w = g, E = v), x && (l.outputName = h, y[x] = l), T.test(h) ? (l.pattern = d(h), C.push(l)) : y[h] = l
                        }
            }

            function h(e) {
                y = {}, C = [], f(e), s(E, function(e, t) {
                    b[t] = e.children
                })
            }

            function p(e) {
                var n = /^(~)?(.+)$/;
                e && (i.text_block_elements = i.block_elements = null, s(t(e, ","), function(e) {
                    var t = n.exec(e),
                        r = "~" === t[1],
                        i = r ? "span" : "div",
                        o = t[2];
                    if (b[o] = b[i], M[o] = i, r || (R[o.toUpperCase()] = {}, R[o] = {}), !y[o]) {
                        var a = y[i];
                        a = l({}, a), delete a.removeEmptyAttrs, delete a.removeEmpty, y[o] = a
                    }
                    s(b, function(e, t) {
                        e[i] && (b[t] = e = l({}, b[t]), e[o] = e[i])
                    })
                }))
            }

            function m(n) {
                var r = /^([+\-]?)(\w+)\[([^\]]+)\]$/;
                i[e.schema] = null, n && s(t(n, ","), function(e) {
                    var n = r.exec(e),
                        i, o;
                    n && (o = n[1], i = o ? b[n[2]] : b[n[2]] = {
                        "#comment": {}
                    }, i = b[n[2]], s(t(n[3], "|"), function(e) {
                        "-" === o ? delete i[e] : i[e] = {}
                    }))
                })
            }

            function g(e) {
                var t = y[e],
                    n;
                if (t) return t;
                for (n = C.length; n--;)
                    if (t = C[n], t.pattern.test(e)) return t
            }
            var v = this,
                y = {},
                b = {},
                C = [],
                x, w, E, N, _, S, k, T, R, A, B, D, L, M = {},
                P = {};
            e = e || {}, E = n(e.schema), e.verify_html === !1 && (e.valid_elements = "*[*]"), x = r(e.valid_styles), w = r(e.invalid_styles, "map"), T = r(e.valid_classes, "map"), N = o("whitespace_elements", "pre script noscript style textarea video audio iframe object"), _ = o("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"), S = o("short_ended_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"), k = o("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"), A = o("non_empty_elements", "td th iframe video audio object script", S), B = o("move_caret_before_on_enter_elements", "table", A), D = o("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside nav figure"), R = o("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption", D), L = o("text_inline_elements", "span strong b em i font strike u var cite dfn code mark q sup sub samp"), s((e.special || "script noscript style textarea").split(" "), function(e) {
                P[e] = new RegExp("</" + e + "[^>]*>", "gi")
            }), e.valid_elements ? h(e.valid_elements) : (s(E, function(e, t) {
                y[t] = {
                    attributes: e.attributes,
                    attributesOrder: e.attributesOrder
                }, b[t] = e.children
            }), "html5" != e.schema && s(t("strong/b em/i"), function(e) {
                e = t(e, "/"), y[e[1]].outputName = e[0]
            }), s(t("ol ul sub sup blockquote span font a table tbody tr strong em b i"), function(e) {
                y[e] && (y[e].removeEmpty = !0)
            }), s(t("p h1 h2 h3 h4 h5 h6 th td pre div address caption"), function(e) {
                y[e].paddEmpty = !0
            }), s(t("span"), function(e) {
                y[e].removeEmptyAttrs = !0
            })), p(e.custom_elements), m(e.valid_children), f(e.extended_valid_elements), m("+ol[ul|ol],+ul[ul|ol]"), s({
                dd: "dl",
                dt: "dl",
                li: "ul ol",
                td: "tr",
                th: "tr",
                tr: "tbody thead tfoot",
                tbody: "table",
                thead: "table",
                tfoot: "table",
                legend: "fieldset",
                area: "map",
                param: "video audio object"
            }, function(e, n) {
                y[n] && (y[n].parentsRequired = t(e))
            }), e.invalid_elements && s(c(e.invalid_elements), function(e) {
                y[e] && delete y[e]
            }), g("span") || f("span[!data-mce-type|*]"), v.children = b, v.getValidStyles = function() {
                return x
            }, v.getInvalidStyles = function() {
                return w
            }, v.getValidClasses = function() {
                return T
            }, v.getBoolAttrs = function() {
                return k
            }, v.getBlockElements = function() {
                return R
            }, v.getTextBlockElements = function() {
                return D
            }, v.getTextInlineElements = function() {
                return L
            }, v.getShortEndedElements = function() {
                return S
            }, v.getSelfClosingElements = function() {
                return _
            }, v.getNonEmptyElements = function() {
                return A
            }, v.getMoveCaretBeforeOnEnterElements = function() {
                return B
            }, v.getWhiteSpaceElements = function() {
                return N
            }, v.getSpecialElements = function() {
                return P
            }, v.isValidChild = function(e, t) {
                var n = b[e];
                return !(!n || !n[t])
            }, v.isValid = function(e, t) {
                var n, r, i = g(e);
                if (i) {
                    if (!t) return !0;
                    if (i.attributes[t]) return !0;
                    if (n = i.attributePatterns)
                        for (r = n.length; r--;)
                            if (n[r].pattern.test(e)) return !0
                }
                return !1
            }, v.getElementRule = g, v.getCustomElements = function() {
                return M
            }, v.addValidElements = f, v.setValidElements = h, v.addCustomElements = p, v.addValidChildren = m, v.elements = y
        }
    }), r(D, [B, C, m], function(e, t, n) {
        function r(e, t, n) {
            var r = 1,
                i, o, a, s;
            for (s = e.getShortEndedElements(), a = /<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g, a.lastIndex = i = n; o = a.exec(t);) {
                if (i = a.lastIndex, "/" === o[1]) r--;
                else if (!o[1]) {
                    if (o[2] in s) continue;
                    r++
                }
                if (0 === r) break
            }
            return i
        }

        function i(i, a) {
            function s() {}
            var l = this;
            i = i || {}, l.schema = a = a || new e, i.fix_self_closing !== !1 && (i.fix_self_closing = !0), o("comment cdata text start end pi doctype".split(" "), function(e) {
                e && (l[e] = i[e] || s)
            }), l.parse = function(e) {
                function o(e) {
                    var t, n;
                    for (t = h.length; t-- && h[t].name !== e;);
                    if (t >= 0) {
                        for (n = h.length - 1; n >= t; n--) e = h[n], e.valid && l.end(e.name);
                        h.length = t
                    }
                }

                function s(e, t, n, r, o) {
                    var a, s, l = /[\s\u0000-\u001F]+/g;
                    if (t = t.toLowerCase(), n = t in x ? t : z(n || r || o || ""), E && !y && 0 !== t.indexOf("data-")) {
                        if (a = T[t], !a && R) {
                            for (s = R.length; s-- && (a = R[s], !a.pattern.test(t)););
                            s === -1 && (a = null)
                        }
                        if (!a) return;
                        if (a.validValues && !(n in a.validValues)) return
                    }
                    if (W[t] && !i.allow_script_urls) {
                        var c = n.replace(l, "");
                        try {
                            c = decodeURIComponent(c)
                        } catch (u) {
                            c = unescape(c)
                        }
                        if (V.test(c)) return;
                        if (!i.allow_html_data_urls && $.test(c) && !/^data:image\//i.test(c)) return
                    }
                    p.map[t] = n, p.push({
                        name: t,
                        value: n
                    })
                }
                var l = this,
                    c, u = 0,
                    d, f, h = [],
                    p, m, g, v, y, b, C, x, w, E, N, _, S, k, T, R, A, B, D, L, M, P, O, H, I, F = 0,
                    z = t.decode,
                    U, W = n.makeMap("src,href,data,background,formaction,poster"),
                    V = /((java|vb)script|mhtml):/i,
                    $ = /^data:/i;
                for (P = new RegExp("<(?:(?:!--([\\w\\W]*?)-->)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([^>]+)>)|(?:([A-Za-z0-9\\-_\\:\\.]+)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))", "g"), O = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g, C = a.getShortEndedElements(), M = i.self_closing_elements || a.getSelfClosingElements(), x = a.getBoolAttrs(), E = i.validate, b = i.remove_internals, U = i.fix_self_closing, H = a.getSpecialElements(); c = P.exec(e);) {
                    if (u < c.index && l.text(z(e.substr(u, c.index - u))), d = c[6]) d = d.toLowerCase(), ":" === d.charAt(0) && (d = d.substr(1)), o(d);
                    else if (d = c[7]) {
                        if (d = d.toLowerCase(), ":" === d.charAt(0) && (d = d.substr(1)), w = d in C, U && M[d] && h.length > 0 && h[h.length - 1].name === d && o(d), !E || (N = a.getElementRule(d))) {
                            if (_ = !0, E && (T = N.attributes, R = N.attributePatterns), (k = c[8]) ? (y = k.indexOf("data-mce-type") !== -1, y && b && (_ = !1), p = [], p.map = {}, k.replace(O, s)) : (p = [], p.map = {}), E && !y) {
                                if (A = N.attributesRequired, B = N.attributesDefault, D = N.attributesForced, L = N.removeEmptyAttrs, L && !p.length && (_ = !1), D)
                                    for (m = D.length; m--;) S = D[m], v = S.name, I = S.value, "{$uid}" === I && (I = "mce_" + F++), p.map[v] = I, p.push({
                                        name: v,
                                        value: I
                                    });
                                if (B)
                                    for (m = B.length; m--;) S = B[m], v = S.name, v in p.map || (I = S.value, "{$uid}" === I && (I = "mce_" + F++), p.map[v] = I, p.push({
                                        name: v,
                                        value: I
                                    }));
                                if (A) {
                                    for (m = A.length; m-- && !(A[m] in p.map););
                                    m === -1 && (_ = !1)
                                }
                                if (S = p.map["data-mce-bogus"]) {
                                    if ("all" === S) {
                                        u = r(a, e, P.lastIndex), P.lastIndex = u;
                                        continue
                                    }
                                    _ = !1
                                }
                            }
                            _ && l.start(d, p, w)
                        } else _ = !1;
                        if (f = H[d]) {
                            f.lastIndex = u = c.index + c[0].length, (c = f.exec(e)) ? (_ && (g = e.substr(u, c.index - u)), u = c.index + c[0].length) : (g = e.substr(u), u = e.length), _ && (g.length > 0 && l.text(g, !0), l.end(d)), P.lastIndex = u;
                            continue
                        }
                        w || (k && k.indexOf("/") == k.length - 1 ? _ && l.end(d) : h.push({
                            name: d,
                            valid: _
                        }))
                    } else(d = c[1]) ? (">" === d.charAt(0) && (d = " " + d), i.allow_conditional_comments || "[if" !== d.substr(0, 3).toLowerCase() || (d = " " + d), l.comment(d)) : (d = c[2]) ? l.cdata(d) : (d = c[3]) ? l.doctype(d) : (d = c[4]) && l.pi(d, c[5]);
                    u = c.index + c[0].length
                }
                for (u < e.length && l.text(z(e.substr(u))), m = h.length - 1; m >= 0; m--) d = h[m], d.valid && l.end(d.name)
            }
        }
        var o = n.each;
        return i.findEndTag = r, i
    }), r(L, [A, B, D, m], function(e, t, n, r) {
        var i = r.makeMap,
            o = r.each,
            a = r.explode,
            s = r.extend;
        return function(l, c) {
            function u(t) {
                var n, r, o, a, s, l, u, f, h, p, m, g, v, y, b;
                for (m = i("tr,td,th,tbody,thead,tfoot,table"), p = c.getNonEmptyElements(), g = c.getTextBlockElements(), v = c.getSpecialElements(), n = 0; n < t.length; n++)
                    if (r = t[n], r.parent && !r.fixed)
                        if (g[r.name] && "li" == r.parent.name) {
                            for (y = r.next; y && g[y.name];) y.name = "li", y.fixed = !0, r.parent.insert(y, r.parent), y = y.next;
                            r.unwrap(r)
                        } else {
                            for (a = [r], o = r.parent; o && !c.isValidChild(o.name, r.name) && !m[o.name]; o = o.parent) a.push(o);
                            if (o && a.length > 1) {
                                for (a.reverse(), s = l = d.filterNode(a[0].clone()), h = 0; h < a.length - 1; h++) {
                                    for (c.isValidChild(l.name, a[h].name) ? (u = d.filterNode(a[h].clone()), l.append(u)) : u = l, f = a[h].firstChild; f && f != a[h + 1];) b = f.next, u.append(f), f = b;
                                    l = u
                                }
                                s.isEmpty(p) ? o.insert(r, a[0], !0) : (o.insert(s, a[0], !0), o.insert(r, s)), o = a[0], (o.isEmpty(p) || o.firstChild === o.lastChild && "br" === o.firstChild.name) && o.empty().remove()
                            } else if (r.parent) {
                                if ("li" === r.name) {
                                    if (y = r.prev, y && ("ul" === y.name || "ul" === y.name)) {
                                        y.append(r);
                                        continue
                                    }
                                    if (y = r.next, y && ("ul" === y.name || "ul" === y.name)) {
                                        y.insert(r, y.firstChild, !0);
                                        continue
                                    }
                                    r.wrap(d.filterNode(new e("ul", 1)));
                                    continue
                                }
                                c.isValidChild(r.parent.name, "div") && c.isValidChild("div", r.name) ? r.wrap(d.filterNode(new e("div", 1))) : v[r.name] ? r.empty().remove() : r.unwrap()
                            }
                        }
            }
            var d = this,
                f = {},
                h = [],
                p = {},
                m = {};
            l = l || {}, l.validate = !("validate" in l) || l.validate, l.root_name = l.root_name || "body", d.schema = c = c || new t, d.filterNode = function(e) {
                var t, n, r;
                n in f && (r = p[n], r ? r.push(e) : p[n] = [e]), t = h.length;
                for (; t--;) n = h[t].name, n in e.attributes.map && (r = m[n], r ? r.push(e) : m[n] = [e]);
                return e
            }, d.addNodeFilter = function(e, t) {
                o(a(e), function(e) {
                    var n = f[e];
                    n || (f[e] = n = []), n.push(t)
                })
            }, d.addAttributeFilter = function(e, t) {
                o(a(e), function(e) {
                    var n;
                    for (n = 0; n < h.length; n++)
                        if (h[n].name === e) return void h[n].callbacks.push(t);
                    h.push({
                        name: e,
                        callbacks: [t]
                    })
                })
            }, d.parse = function(t, r) {
                function o() {
                    function e(e) {
                        e && (t = e.firstChild, t && 3 == t.type && (t.value = t.value.replace(R, "")), t = e.lastChild, t && 3 == t.type && (t.value = t.value.replace(D, "")))
                    }
                    var t = y.firstChild,
                        n, r;
                    if (c.isValidChild(y.name, I.toLowerCase())) {
                        for (; t;) n = t.next, 3 == t.type || 1 == t.type && "p" !== t.name && !T[t.name] && !t.attr("data-mce-type") ? r ? r.append(t) : (r = a(I, 1), r.attr(l.forced_root_block_attrs), y.insert(r, t), r.append(t)) : (e(r), r = null), t = n;
                        e(r)
                    }
                }

                function a(t, n) {
                    var r = new e(t, n),
                        i;
                    return t in f && (i = p[t], i ? i.push(r) : p[t] = [r]), r
                }

                function d(e) {
                    var t, n, r, i, o = c.getBlockElements();
                    for (t = e.prev; t && 3 === t.type;) {
                        if (r = t.value.replace(D, ""), r.length > 0) return void(t.value = r);
                        if (n = t.next) {
                            if (3 == n.type && n.value.length) {
                                t = t.prev;
                                continue
                            }
                            if (!o[n.name] && "script" != n.name && "style" != n.name) {
                                t = t.prev;
                                continue
                            }
                        }
                        i = t.prev, t.remove(), t = i
                    }
                }

                function g(e) {
                    var t, n = {};
                    for (t in e) "li" !== t && "p" != t && (n[t] = e[t]);
                    return n
                }
                var v, y, b, C, x, w, E, N, _, S, k, T, R, A = [],
                    B, D, L, M, P, O, H, I;
                if (r = r || {}, p = {}, m = {}, T = s(i("script,style,head,html,body,title,meta,param"), c.getBlockElements()), H = c.getNonEmptyElements(), O = c.children, k = l.validate, I = "forced_root_block" in r ? r.forced_root_block : l.forced_root_block, P = c.getWhiteSpaceElements(), R = /^[ \t\r\n]+/, D = /[ \t\r\n]+$/, L = /[ \t\r\n]+/g, M = /^[ \t\r\n]+$/, v = new n({
                        validate: k,
                        allow_script_urls: l.allow_script_urls,
                        allow_conditional_comments: l.allow_conditional_comments,
                        self_closing_elements: g(c.getSelfClosingElements()),
                        cdata: function(e) {
                            b.append(a("#cdata", 4)).value = e
                        },
                        text: function(e, t) {
                            var n;
                            B || (e = e.replace(L, " "), b.lastChild && T[b.lastChild.name] && (e = e.replace(R, ""))), 0 !== e.length && (n = a("#text", 3), n.raw = !!t, b.append(n).value = e)
                        },
                        comment: function(e) {
                            b.append(a("#comment", 8)).value = e
                        },
                        pi: function(e, t) {
                            b.append(a(e, 7)).value = t, d(b)
                        },
                        doctype: function(e) {
                            var t;
                            t = b.append(a("#doctype", 10)), t.value = e, d(b)
                        },
                        start: function(e, t, n) {
                            var r, i, o, s, l;
                            if (o = k ? c.getElementRule(e) : {}) {
                                for (r = a(o.outputName || e, 1), r.attributes = t, r.shortEnded = n, b.append(r), l = O[b.name], l && O[r.name] && !l[r.name] && A.push(r), i = h.length; i--;) s = h[i].name, s in t.map && (_ = m[s], _ ? _.push(r) : m[s] = [r]);
                                T[e] && d(r), n || (b = r), !B && P[e] && (B = !0)
                            }
                        },
                        end: function(t) {
                            var n, r, i, o, a;
                            if (r = k ? c.getElementRule(t) : {}) {
                                if (T[t] && !B) {
                                    if (n = b.firstChild, n && 3 === n.type)
                                        if (i = n.value.replace(R, ""), i.length > 0) n.value = i, n = n.next;
                                        else
                                            for (o = n.next, n.remove(), n = o; n && 3 === n.type;) i = n.value, o = n.next, (0 === i.length || M.test(i)) && (n.remove(), n = o), n = o;
                                    if (n = b.lastChild, n && 3 === n.type)
                                        if (i = n.value.replace(D, ""), i.length > 0) n.value = i, n = n.prev;
                                        else
                                            for (o = n.prev, n.remove(), n = o; n && 3 === n.type;) i = n.value, o = n.prev, (0 === i.length || M.test(i)) && (n.remove(), n = o), n = o
                                }
                                if (B && P[t] && (B = !1), (r.removeEmpty || r.paddEmpty) && b.isEmpty(H))
                                    if (r.paddEmpty) b.empty().append(new e("#text", "3")).value = "\xa0";
                                    else if (!b.attributes.map.name && !b.attributes.map.id) return a = b.parent, T[b.name] ? b.empty().remove() : b.unwrap(), void(b = a);
                                b = b.parent
                            }
                        }
                    }, c), y = b = new e(r.context || l.root_name, 11), v.parse(t), k && A.length && (r.context ? r.invalid = !0 : u(A)), I && ("body" == y.name || r.isRootContent) && o(), !r.invalid) {
                    for (S in p) {
                        for (_ = f[S], C = p[S], E = C.length; E--;) C[E].parent || C.splice(E, 1);
                        for (x = 0, w = _.length; x < w; x++) _[x](C, S, r)
                    }
                    for (x = 0, w = h.length; x < w; x++)
                        if (_ = h[x], _.name in m) {
                            for (C = m[_.name], E = C.length; E--;) C[E].parent || C.splice(E, 1);
                            for (E = 0, N = _.callbacks.length; E < N; E++) _.callbacks[E](C, _.name, r)
                        }
                }
                return y
            }, l.remove_trailing_brs && d.addNodeFilter("br", function(t) {
                var n, r = t.length,
                    i, o = s({}, c.getBlockElements()),
                    a = c.getNonEmptyElements(),
                    l, u, d, f, h, p;
                for (o.body = 1, n = 0; n < r; n++)
                    if (i = t[n], l = i.parent, o[i.parent.name] && i === l.lastChild) {
                        for (d = i.prev; d;) {
                            if (f = d.name, "span" !== f || "bookmark" !== d.attr("data-mce-type")) {
                                if ("br" !== f) break;
                                if ("br" === f) {
                                    i = null;
                                    break
                                }
                            }
                            d = d.prev
                        }
                        i && (i.remove(), l.isEmpty(a) && (h = c.getElementRule(l.name), h && (h.removeEmpty ? l.remove() : h.paddEmpty && (l.empty().append(new e("#text", 3)).value = "\xa0"))))
                    } else {
                        for (u = i; l && l.firstChild === u && l.lastChild === u && (u = l, !o[l.name]);) l = l.parent;
                        u === l && (p = new e("#text", 3), p.value = "\xa0", i.replace(p))
                    }
            }), l.allow_unsafe_link_target || d.addAttributeFilter("href", function(e) {
                function t(e) {
                    return e = n(e), e ? [e, l].join(" ") : l
                }

                function n(e) {
                    var t = new RegExp("(" + l.replace(" ", "|") + ")", "g");
                    return e && (e = r.trim(e.replace(t, ""))), e ? e : null
                }

                function i(e, r) {
                    return r ? t(e) : n(e)
                }
                for (var o = e.length, a, s, l = "noopener noreferrer"; o--;) a = e[o], s = a.attr("rel"), "a" === a.name && a.attr("rel", i(s, "_blank" == a.attr("target")))
            }), l.allow_html_in_named_anchor || d.addAttributeFilter("id,name", function(e) {
                for (var t = e.length, n, r, i, o; t--;)
                    if (o = e[t], "a" === o.name && o.firstChild && !o.attr("href")) {
                        i = o.parent, n = o.lastChild;
                        do r = n.prev, i.insert(n, o), n = r; while (n)
                    }
            }), l.validate && c.getValidClasses() && d.addAttributeFilter("class", function(e) {
                for (var t = e.length, n, r, i, o, a, s = c.getValidClasses(), l, u; t--;) {
                    for (n = e[t], r = n.attr("class").split(" "), a = "", i = 0; i < r.length; i++) o = r[i], u = !1, l = s["*"], l && l[o] && (u = !0), l = s[n.name], !u && l && l[o] && (u = !0), u && (a && (a += " "), a += o);
                    a.length || (a = null), n.attr("class", a)
                }
            })
        }
    }), r(M, [C, m], function(e, t) {
        var n = t.makeMap;
        return function(t) {
            var r = [],
                i, o, a, s, l;
            return t = t || {}, i = t.indent, o = n(t.indent_before || ""), a = n(t.indent_after || ""), s = e.getEncodeFunc(t.entity_encoding || "raw", t.entities), l = "html" == t.element_format, {
                start: function(e, t, n) {
                    var c, u, d, f;
                    if (i && o[e] && r.length > 0 && (f = r[r.length - 1], f.length > 0 && "\n" !== f && r.push("\n")), r.push("<", e), t)
                        for (c = 0, u = t.length; c < u; c++) d = t[c], r.push(" ", d.name, '="', s(d.value, !0), '"');
                    !n || l ? r[r.length] = ">" : r[r.length] = " />", n && i && a[e] && r.length > 0 && (f = r[r.length - 1], f.length > 0 && "\n" !== f && r.push("\n"))
                },
                end: function(e) {
                    var t;
                    r.push("</", e, ">"), i && a[e] && r.length > 0 && (t = r[r.length - 1], t.length > 0 && "\n" !== t && r.push("\n"))
                },
                text: function(e, t) {
                    e.length > 0 && (r[r.length] = t ? e : s(e))
                },
                cdata: function(e) {
                    r.push("<![CDATA[", e, "]]>")
                },
                comment: function(e) {
                    r.push("<!--", e, "-->")
                },
                pi: function(e, t) {
                    t ? r.push("<?", e, " ", s(t), "?>") : r.push("<?", e, "?>"), i && r.push("\n")
                },
                doctype: function(e) {
                    r.push("<!DOCTYPE", e, ">", i ? "\n" : "")
                },
                reset: function() {
                    r.length = 0
                },
                getContent: function() {
                    return r.join("").replace(/\n$/, "")
                }
            }
        }
    }), r(P, [M, B], function(e, t) {
        return function(n, r) {
            var i = this,
                o = new e(n);
            n = n || {}, n.validate = !("validate" in n) || n.validate, i.schema = r = r || new t, i.writer = o, i.serialize = function(e) {
                function t(e) {
                    var n = i[e.type],
                        s, l, c, u, d, f, h, p, m;
                    if (n) n(e);
                    else {
                        if (s = e.name, l = e.shortEnded, c = e.attributes, a && c && c.length > 1 && (f = [], f.map = {}, m = r.getElementRule(e.name))) {
                            for (h = 0, p = m.attributesOrder.length; h < p; h++) u = m.attributesOrder[h], u in c.map && (d = c.map[u], f.map[u] = d, f.push({
                                name: u,
                                value: d
                            }));
                            for (h = 0, p = c.length; h < p; h++) u = c[h].name, u in f.map || (d = c.map[u], f.map[u] = d, f.push({
                                name: u,
                                value: d
                            }));
                            c = f
                        }
                        if (o.start(e.name, c, l), !l) {
                            if (e = e.firstChild)
                                do t(e); while (e = e.next);
                            o.end(s)
                        }
                    }
                }
                var i, a;
                return a = n.validate, i = {
                    3: function(e) {
                        o.text(e.value, e.raw)
                    },
                    8: function(e) {
                        o.comment(e.value)
                    },
                    7: function(e) {
                        o.pi(e.name, e.value)
                    },
                    10: function(e) {
                        o.doctype(e.value)
                    },
                    4: function(e) {
                        o.cdata(e.value)
                    },
                    11: function(e) {
                        if (e = e.firstChild)
                            do t(e); while (e = e.next)
                    }
                }, o.reset(), 1 != e.type || n.inner ? i[11](e) : t(e), o.getContent()
            }
        }
    }), r(O, [w, L, D, C, P, A, B, d, m, S], function(e, t, n, r, i, o, a, s, l, c) {
        function u(e) {
            function t(e) {
                return e && "br" === e.name
            }
            var n, r;
            n = e.lastChild, t(n) && (r = n.prev, t(r) && (n.remove(), r.remove()))
        }
        var d = l.each,
            f = l.trim,
            h = e.DOM;
        return function(e, o) {
            function p(e) {
                var t = new RegExp(["<span[^>]+data-mce-bogus[^>]+>[\u200b\ufeff]+<\\/span>", "\\s?(" + x.join("|") + ')="[^"]+"'].join("|"), "gi");
                return e = c.trim(e.replace(t, ""))
            }

            function m(e) {
                var t = e,
                    r = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,
                    i, a, s, l, c, u = o.schema;
                for (t = p(t), c = u.getShortEndedElements(); l = r.exec(t);) a = r.lastIndex, s = l[0].length, i = c[l[1]] ? a : n.findEndTag(u, t, a), t = t.substring(0, a - s) + t.substring(i), r.lastIndex = a - s;
                return f(t)
            }

            function g() {
                return m(o.getBody().innerHTML)
            }

            function v(e) {
                l.inArray(x, e) === -1 && (C.addAttributeFilter(e, function(e, t) {
                    for (var n = e.length; n--;) e[n].attr(t, null)
                }), x.push(e))
            }
            var y, b, C, x = ["data-mce-selected"];
            return o && (y = o.dom, b = o.schema), y = y || h, b = b || new a(e), e.entity_encoding = e.entity_encoding || "named", e.remove_trailing_brs = !("remove_trailing_brs" in e) || e.remove_trailing_brs, C = new t(e, b), C.addAttributeFilter("data-mce-tabindex", function(e, t) {
                for (var n = e.length, r; n--;) r = e[n], r.attr("tabindex", r.attributes.map["data-mce-tabindex"]), r.attr(t, null)
            }), C.addAttributeFilter("src,href,style", function(t, n) {
                for (var r = t.length, i, o, a = "data-mce-" + n, s = e.url_converter, l = e.url_converter_scope, c; r--;) i = t[r], o = i.attributes.map[a], o !== c ? (i.attr(n, o.length > 0 ? o : null), i.attr(a, null)) : (o = i.attributes.map[n], "style" === n ? o = y.serializeStyle(y.parseStyle(o), i.name) : s && (o = s.call(l, o, n, i.name)), i.attr(n, o.length > 0 ? o : null))
            }), C.addAttributeFilter("class", function(e) {
                for (var t = e.length, n, r; t--;) n = e[t], r = n.attr("class"), r && (r = n.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g, ""), n.attr("class", r.length > 0 ? r : null))
            }), C.addAttributeFilter("data-mce-type", function(e, t, n) {
                for (var r = e.length, i; r--;) i = e[r], "bookmark" !== i.attributes.map["data-mce-type"] || n.cleanup || i.remove()
            }), C.addNodeFilter("noscript", function(e) {
                for (var t = e.length, n; t--;) n = e[t].firstChild, n && (n.value = r.decode(n.value))
            }), C.addNodeFilter("script,style", function(e, t) {
                function n(e) {
                    return e.replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n").replace(/^[\r\n]*|[\r\n]*$/g, "").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "")
                }
                for (var r = e.length, i, o, a; r--;) i = e[r], o = i.firstChild ? i.firstChild.value : "", "script" === t ? (a = i.attr("type"), a && i.attr("type", "mce-no/type" == a ? null : a.replace(/^mce\-/, "")), o.length > 0 && (i.firstChild.value = "// <![CDATA[\n" + n(o) + "\n// ]]>")) : o.length > 0 && (i.firstChild.value = "<!--\n" + n(o) + "\n-->")
            }), C.addNodeFilter("#comment", function(e) {
                for (var t = e.length, n; t--;) n = e[t], 0 === n.value.indexOf("[CDATA[") ? (n.name = "#cdata", n.type = 4, n.value = n.value.replace(/^\[CDATA\[|\]\]$/g, "")) : 0 === n.value.indexOf("mce:protected ") && (n.name = "#text", n.type = 3, n.raw = !0, n.value = unescape(n.value).substr(14))
            }), C.addNodeFilter("xml:namespace,input", function(e, t) {
                for (var n = e.length, r; n--;) r = e[n], 7 === r.type ? r.remove() : 1 === r.type && ("input" !== t || "type" in r.attributes.map || r.attr("type", "text"))
            }), e.fix_list_elements && C.addNodeFilter("ul,ol", function(e) {
                for (var t = e.length, n, r; t--;) n = e[t], r = n.parent, "ul" !== r.name && "ol" !== r.name || n.prev && "li" === n.prev.name && n.prev.append(n)
            }), C.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize", function(e, t) {
                for (var n = e.length; n--;) e[n].attr(t, null)
            }), {
                schema: b,
                addNodeFilter: C.addNodeFilter,
                addAttributeFilter: C.addAttributeFilter,
                serialize: function(t, n) {
                    var r = this,
                        o, a, l, h, p, m;
                    return s.ie && y.select("script,style,select,map").length > 0 ? (p = t.innerHTML, t = t.cloneNode(!1), y.setHTML(t, p)) : t = t.cloneNode(!0), o = document.implementation, o.createHTMLDocument && (a = o.createHTMLDocument(""), d("BODY" == t.nodeName ? t.childNodes : [t], function(e) {
                        a.body.appendChild(a.importNode(e, !0))
                    }), t = "BODY" != t.nodeName ? a.body.firstChild : a.body, l = y.doc, y.doc = a), n = n || {}, n.format = n.format || "html", n.selection && (n.forced_root_block = ""), n.no_events || (n.node = t, r.onPreProcess(n)), m = C.parse(f(n.getInner ? t.innerHTML : y.getOuterHTML(t)), n), u(m), h = new i(e, b), n.content = h.serialize(m), n.cleanup || (n.content = c.trim(n.content), n.content = n.content.replace(/\uFEFF/g, "")), n.no_events || r.onPostProcess(n), l && (y.doc = l), n.node = null, n.content
                },
                addRules: function(e) {
                    b.addValidElements(e)
                },
                setRules: function(e) {
                    b.setValidElements(e)
                },
                onPreProcess: function(e) {
                    o && o.fire("PreProcess", e)
                },
                onPostProcess: function(e) {
                    o && o.fire("PostProcess", e)
                },
                addTempAttr: v,
                trimHtml: p,
                getTrimmedContent: g,
                trimContent: m
            }
        }
    }), r(H, [], function() {
        function e(e) {
            function t(t, n) {
                var r, i = 0,
                    o, a, s, l, c, u, d = -1,
                    f;
                if (r = t.duplicate(), r.collapse(n), f = r.parentElement(), f.ownerDocument === e.dom.doc) {
                    for (;
                        "false" === f.contentEditable;) f = f.parentNode;
                    if (!f.hasChildNodes()) return {
                        node: f,
                        inside: 1
                    };
                    for (s = f.children, o = s.length - 1; i <= o;)
                        if (u = Math.floor((i + o) / 2), l = s[u], r.moveToElementText(l), d = r.compareEndPoints(n ? "StartToStart" : "EndToEnd", t), d > 0) o = u - 1;
                        else {
                            if (!(d < 0)) return {
                                node: l
                            };
                            i = u + 1
                        }
                    if (d < 0)
                        for (l ? r.collapse(!1) : (r.moveToElementText(f), r.collapse(!0), l = f, a = !0), c = 0; 0 !== r.compareEndPoints(n ? "StartToStart" : "StartToEnd", t) && 0 !== r.move("character", 1) && f == r.parentElement();) c++;
                    else
                        for (r.collapse(!0), c = 0; 0 !== r.compareEndPoints(n ? "StartToStart" : "StartToEnd", t) && 0 !== r.move("character", -1) && f == r.parentElement();) c++;
                    return {
                        node: l,
                        position: d,
                        offset: c,
                        inside: a
                    }
                }
            }

            function n() {
                function n(e) {
                    var n = t(o, e),
                        r, i, s = 0,
                        l, c, u;
                    if (r = n.node, i = n.offset, n.inside && !r.hasChildNodes()) return void a[e ? "setStart" : "setEnd"](r, 0);
                    if (i === c) return void a[e ? "setStartBefore" : "setEndAfter"](r);
                    if (n.position < 0) {
                        if (l = n.inside ? r.firstChild : r.nextSibling, !l) return void a[e ? "setStartAfter" : "setEndAfter"](r);
                        if (!i) return void(3 == l.nodeType ? a[e ? "setStart" : "setEnd"](l, 0) : a[e ? "setStartBefore" : "setEndBefore"](l));
                        for (; l;) {
                            if (3 == l.nodeType && (u = l.nodeValue, s += u.length, s >= i)) {
                                r = l, s -= i, s = u.length - s;
                                break
                            }
                            l = l.nextSibling
                        }
                    } else {
                        if (l = r.previousSibling, !l) return a[e ? "setStartBefore" : "setEndBefore"](r);
                        if (!i) return void(3 == r.nodeType ? a[e ? "setStart" : "setEnd"](l, r.nodeValue.length) : a[e ? "setStartAfter" : "setEndAfter"](l));
                        for (; l;) {
                            if (3 == l.nodeType && (s += l.nodeValue.length, s >= i)) {
                                r = l, s -= i;
                                break
                            }
                            l = l.previousSibling
                        }
                    }
                    a[e ? "setStart" : "setEnd"](r, s)
                }
                var o = e.getRng(),
                    a = i.createRng(),
                    s, l, c, u, d;
                if (s = o.item ? o.item(0) : o.parentElement(), s.ownerDocument != i.doc) return a;
                if (l = e.isCollapsed(), o.item) return a.setStart(s.parentNode, i.nodeIndex(s)), a.setEnd(a.startContainer, a.startOffset + 1), a;
                try {
                    n(!0), l || n()
                } catch (f) {
                    if (f.number != -2147024809) throw f;
                    d = r.getBookmark(2), c = o.duplicate(), c.collapse(!0), s = c.parentElement(), l || (c = o.duplicate(), c.collapse(!1), u = c.parentElement(), u.innerHTML = u.innerHTML), s.innerHTML = s.innerHTML, r.moveToBookmark(d), o = e.getRng(), n(!0), l || n()
                }
                return a
            }
            var r = this,
                i = e.dom,
                o = !1;
            this.getBookmark = function(n) {
                function r(e) {
                    var t, n, r, o, a = [];
                    for (t = e.parentNode, n = i.getRoot().parentNode; t != n && 9 !== t.nodeType;) {
                        for (r = t.children, o = r.length; o--;)
                            if (e === r[o]) {
                                a.push(o);
                                break
                            }
                        e = t, t = t.parentNode
                    }
                    return a
                }

                function o(e) {
                    var n;
                    if (n = t(a, e)) return {
                        position: n.position,
                        offset: n.offset,
                        indexes: r(n.node),
                        inside: n.inside
                    }
                }
                var a = e.getRng(),
                    s = {};
                return 2 === n && (a.item ? s.start = {
                    ctrl: !0,
                    indexes: r(a.item(0))
                } : (s.start = o(!0), e.isCollapsed() || (s.end = o()))), s
            }, this.moveToBookmark = function(e) {
                function t(e) {
                    var t, n, r, o;
                    for (t = i.getRoot(), n = e.length - 1; n >= 0; n--) o = t.children, r = e[n], r <= o.length - 1 && (t = o[r]);
                    return t
                }

                function n(n) {
                    var i = e[n ? "start" : "end"],
                        a, s, l, c;
                    i && (a = i.position > 0, s = o.createTextRange(), s.moveToElementText(t(i.indexes)), c = i.offset, c !== l ? (s.collapse(i.inside || a), s.moveStart("character", a ? -c : c)) : s.collapse(n), r.setEndPoint(n ? "StartToStart" : "EndToStart", s), n && r.collapse(!0))
                }
                var r, o = i.doc.body;
                e.start && (e.start.ctrl ? (r = o.createControlRange(), r.addElement(t(e.start.indexes)), r.select()) : (r = o.createTextRange(), n(!0), n(), r.select()))
            }, this.addRange = function(t) {
                function n(e) {
                    var t, n, a, d, p;
                    a = i.create("a"), t = e ? s : c, n = e ? l : u, d = r.duplicate(), t != f && t != f.documentElement || (t = h, n = 0), 3 == t.nodeType ? (t.parentNode.insertBefore(a, t), d.moveToElementText(a), d.moveStart("character", n), i.remove(a), r.setEndPoint(e ? "StartToStart" : "EndToEnd", d)) : (p = t.childNodes, p.length ? (n >= p.length ? i.insertAfter(a, p[p.length - 1]) : t.insertBefore(a, p[n]), d.moveToElementText(a)) : t.canHaveHTML && (t.innerHTML = "<span>&#xFEFF;</span>", a = t.firstChild, d.moveToElementText(a), d.collapse(o)), r.setEndPoint(e ? "StartToStart" : "EndToEnd", d), i.remove(a))
                }
                var r, a, s, l, c, u, d, f = e.dom.doc,
                    h = f.body,
                    p, m;
                if (s = t.startContainer, l = t.startOffset, c = t.endContainer, u = t.endOffset, r = h.createTextRange(), s == c && 1 == s.nodeType) {
                    if (l == u && !s.hasChildNodes()) {
                        if (s.canHaveHTML) return d = s.previousSibling, d && !d.hasChildNodes() && i.isBlock(d) ? d.innerHTML = "&#xFEFF;" : d = null, s.innerHTML = "<span>&#xFEFF;</span><span>&#xFEFF;</span>", r.moveToElementText(s.lastChild), r.select(), i.doc.selection.clear(), s.innerHTML = "", void(d && (d.innerHTML = ""));
                        l = i.nodeIndex(s), s = s.parentNode
                    }
                    if (l == u - 1) try {
                        if (m = s.childNodes[l], a = h.createControlRange(), a.addElement(m), a.select(), p = e.getRng(), p.item && m === p.item(0)) return
                    } catch (g) {}
                }
                n(!0), n(), r.select()
            }, this.getRangeAt = n
        }
        return e
    }), r(I, [d], function(e) {
        return {
            BACKSPACE: 8,
            DELETE: 46,
            DOWN: 40,
            ENTER: 13,
            LEFT: 37,
            RIGHT: 39,
            SPACEBAR: 32,
            TAB: 9,
            UP: 38,
            modifierPressed: function(e) {
                return e.shiftKey || e.ctrlKey || e.altKey || this.metaKeyPressed(e)
            },
            metaKeyPressed: function(t) {
                return e.mac ? t.metaKey : t.ctrlKey && !t.altKey
            }
        }
    }), r(F, [I, m, u, d, _], function(e, t, n, r, i) {
        function o(e, t) {
            for (; t && t != e;) {
                if (s(t) || a(t)) return t;
                t = t.parentNode
            }
            return null
        }
        var a = i.isContentEditableFalse,
            s = i.isContentEditableTrue;
        return function(i, s) {
            function l(e) {
                var t = s.settings.object_resizing;
                return t !== !1 && !r.iOS && ("string" != typeof t && (t = "table,img,div"), "false" !== e.getAttribute("data-mce-resize") && (e != s.getBody() && s.dom.is(e, t)))
            }

            function c(t) {
                var n, r, i, o, a;
                n = t.screenX - L, r = t.screenY - M, U = n * B[2] + H, W = r * B[3] + I, U = U < 5 ? 5 : U, W = W < 5 ? 5 : W, i = "IMG" == k.nodeName && s.settings.resize_img_proportional !== !1 ? !e.modifierPressed(t) : e.modifierPressed(t) || "IMG" == k.nodeName && B[2] * B[3] !== 0, i && (j(n) > j(r) ? (W = Y(U * F), U = Y(W / F)) : (U = Y(W / F), W = Y(U * F))), _.setStyles(T, {
                    width: U,
                    height: W
                }), o = B.startPos.x + n, a = B.startPos.y + r, o = o > 0 ? o : 0, a = a > 0 ? a : 0, _.setStyles(R, {
                    left: o,
                    top: a,
                    display: "block"
                }), R.innerHTML = U + " &times; " + W, B[2] < 0 && T.clientWidth <= U && _.setStyle(T, "left", P + (H - U)), B[3] < 0 && T.clientHeight <= W && _.setStyle(T, "top", O + (I - W)), n = X.scrollWidth - K, r = X.scrollHeight - G, n + r !== 0 && _.setStyles(R, {
                    left: o - n,
                    top: a - r
                }), z || (s.fire("ObjectResizeStart", {
                    target: k,
                    width: H,
                    height: I
                }), z = !0)
            }

            function u() {
                function e(e, t) {
                    t && (k.style[e] || !s.schema.isValid(k.nodeName.toLowerCase(), e) ? _.setStyle(k, e, t) : _.setAttrib(k, e, t))
                }
                z = !1, e("width", U), e("height", W), _.unbind(V, "mousemove", c), _.unbind(V, "mouseup", u), $ != V && (_.unbind($, "mousemove", c), _.unbind($, "mouseup", u)), _.remove(T), _.remove(R), q && "TABLE" != k.nodeName || d(k), s.fire("ObjectResized", {
                    target: k,
                    width: U,
                    height: W
                }), _.setAttrib(k, "style", _.getAttrib(k, "style")), s.nodeChanged()
            }

            function d(e, t, n) {
                var i, o, a, d, h;
                f(), x(), i = _.getPos(e, X), P = i.x, O = i.y, h = e.getBoundingClientRect(), o = h.width || h.right - h.left, a = h.height || h.bottom - h.top, k != e && (C(), k = e, U = W = 0), d = s.fire("ObjectSelected", {
                    target: e
                }), l(e) && !d.isDefaultPrevented() ? S(A, function(e, i) {
                    function s(t) {
                        L = t.screenX, M = t.screenY, H = k.clientWidth, I = k.clientHeight, F = I / H, B = e, e.startPos = {
                            x: o * e[0] + P,
                            y: a * e[1] + O
                        }, K = X.scrollWidth, G = X.scrollHeight, T = k.cloneNode(!0), _.addClass(T, "mce-clonedresizable"), _.setAttrib(T, "data-mce-bogus", "all"), T.contentEditable = !1, T.unSelectabe = !0, _.setStyles(T, {
                            left: P,
                            top: O,
                            margin: 0
                        }), T.removeAttribute("data-mce-selected"), X.appendChild(T), _.bind(V, "mousemove", c), _.bind(V, "mouseup", u), $ != V && (_.bind($, "mousemove", c), _.bind($, "mouseup", u)), R = _.add(X, "div", {
                            "class": "mce-resize-helper",
                            "data-mce-bogus": "all"
                        }, H + " &times; " + I)
                    }
                    var l;
                    return t ? void(i == t && s(n)) : (l = _.get("mceResizeHandle" + i), l && _.remove(l), l = _.add(X, "div", {
                        id: "mceResizeHandle" + i,
                        "data-mce-bogus": "all",
                        "class": "mce-resizehandle",
                        unselectable: !0,
                        style: "cursor:" + i + "-resize; margin:0; padding:0"
                    }), r.ie && (l.contentEditable = !1), _.bind(l, "mousedown", function(e) {
                        e.stopImmediatePropagation(), e.preventDefault(), s(e)
                    }), e.elm = l, void _.setStyles(l, {
                        left: o * e[0] + P - l.offsetWidth / 2,
                        top: a * e[1] + O - l.offsetHeight / 2
                    }))
                }) : f(), k.setAttribute("data-mce-selected", "1")
            }

            function f() {
                var e, t;
                x(), k && k.removeAttribute("data-mce-selected");
                for (e in A) t = _.get("mceResizeHandle" + e), t && (_.unbind(t), _.remove(t))
            }

            function h(e) {
                function t(e, t) {
                    if (e)
                        do
                            if (e === t) return !0;
                    while (e = e.parentNode)
                }
                var n, r;
                if (!z && !s.removed) return S(_.select("img[data-mce-selected],hr[data-mce-selected]"), function(e) {
                    e.removeAttribute("data-mce-selected")
                }), r = "mousedown" == e.type ? e.target : i.getNode(), r = _.$(r).closest(q ? "table" : "table,img,hr")[0], t(r, X) && (w(), n = i.getStart(!0), t(n, r) && t(i.getEnd(!0), r) && (!q || r != n && "IMG" !== n.nodeName)) ? void d(r) : void f()
            }

            function p(e, t, n) {
                e && e.attachEvent && e.attachEvent("on" + t, n)
            }

            function m(e, t, n) {
                e && e.detachEvent && e.detachEvent("on" + t, n)
            }

            function g(e) {
                var t = e.srcElement,
                    n, r, i, o, a, l, c;
                n = t.getBoundingClientRect(), l = D.clientX - n.left, c = D.clientY - n.top;
                for (r in A)
                    if (i = A[r], o = t.offsetWidth * i[0], a = t.offsetHeight * i[1], j(o - l) < 8 && j(a - c) < 8) {
                        B = i;
                        break
                    }
                z = !0, s.fire("ObjectResizeStart", {
                    target: k,
                    width: k.clientWidth,
                    height: k.clientHeight
                }), s.getDoc().selection.empty(), d(t, r, D)
            }

            function v(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            }

            function y(e) {
                return a(o(s.getBody(), e))
            }

            function b(e) {
                var t = e.srcElement;
                if (y(t)) return void v(e);
                if (t != k) {
                    if (s.fire("ObjectSelected", {
                            target: t
                        }), C(), 0 === t.id.indexOf("mceResizeHandle")) return void(e.returnValue = !1);
                    "IMG" != t.nodeName && "TABLE" != t.nodeName || (f(), k = t, p(t, "resizestart", g))
                }
            }

            function C() {
                m(k, "resizestart", g)
            }

            function x() {
                for (var e in A) {
                    var t = A[e];
                    t.elm && (_.unbind(t.elm), delete t.elm)
                }
            }

            function w() {
                try {
                    s.getDoc().execCommand("enableObjectResizing", !1, !1)
                } catch (e) {}
            }

            function E(e) {
                var t;
                if (q) {
                    t = V.body.createControlRange();
                    try {
                        return t.addElement(e), t.select(), !0
                    } catch (n) {}
                }
            }

            function N() {
                k = T = null, q && (C(), m(X, "controlselect", b))
            }
            var _ = s.dom,
                S = t.each,
                k, T, R, A, B, D, L, M, P, O, H, I, F, z, U, W, V = s.getDoc(),
                $ = document,
                q = r.ie && r.ie < 11,
                j = Math.abs,
                Y = Math.round,
                X = s.getBody(),
                K, G;
            A = {
                nw: [0, 0, -1, -1],
                ne: [1, 0, 1, -1],
                se: [1, 1, 1, 1],
                sw: [0, 1, -1, 1]
            };
            var J = ".mce-content-body";
            return s.contentStyles.push(J + " div.mce-resizehandle {position: absolute;border: 1px solid black;box-sizing: box-sizing;background: #FFF;width: 7px;height: 7px;z-index: 10000}" + J + " .mce-resizehandle:hover {background: #000}" + J + " img[data-mce-selected]," + J + " hr[data-mce-selected] {outline: 1px solid black;resize: none}" + J + " .mce-clonedresizable {position: absolute;" + (r.gecko ? "" : "outline: 1px dashed black;") + "opacity: .5;filter: alpha(opacity=50);z-index: 10000}" + J + " .mce-resize-helper {background: #555;background: rgba(0,0,0,0.75);border-radius: 3px;border: 1px;color: white;display: none;font-family: sans-serif;font-size: 12px;white-space: nowrap;line-height: 14px;margin: 5px 10px;padding: 5px;position: absolute;z-index: 10001}"),
                s.on("init", function() {
                    q ? (s.on("ObjectResized", function(e) {
                        "TABLE" != e.target.nodeName && (f(), E(e.target))
                    }), p(X, "controlselect", b), s.on("mousedown", function(e) {
                        D = e
                    })) : (w(), r.ie >= 11 && (s.on("mousedown click", function(e) {
                        var t = e.target,
                            n = t.nodeName;
                        z || !/^(TABLE|IMG|HR)$/.test(n) || y(t) || (s.selection.select(t, "TABLE" == n), "mousedown" == e.type && s.nodeChanged())
                    }), s.dom.bind(X, "mscontrolselect", function(e) {
                        function t(e) {
                            n.setEditorTimeout(s, function() {
                                s.selection.select(e)
                            })
                        }
                        return y(e.target) ? (e.preventDefault(), void t(e.target)) : void(/^(TABLE|IMG|HR)$/.test(e.target.nodeName) && (e.preventDefault(), "IMG" == e.target.tagName && t(e.target)))
                    })));
                    var e = n.throttle(function(e) {
                        s.composing || h(e)
                    });
                    s.on("nodechange ResizeEditor ResizeWindow drop", e), s.on("keyup compositionend", function(t) {
                        k && "TABLE" == k.nodeName && e(t)
                    }), s.on("hide blur", f)
                }), s.on("remove", x), {
                    isResizable: l,
                    showResizeRect: d,
                    hideResizeRect: f,
                    updateResizeRect: h,
                    controlSelect: E,
                    destroy: N
                }
        }
    }), r(z, [], function() {
        function e(e) {
            return function() {
                return e
            }
        }

        function t(e) {
            return function(t) {
                return !e(t)
            }
        }

        function n(e, t) {
            return function(n) {
                return e(t(n))
            }
        }

        function r() {
            var e = s.call(arguments);
            return function(t) {
                for (var n = 0; n < e.length; n++)
                    if (e[n](t)) return !0;
                return !1
            }
        }

        function i() {
            var e = s.call(arguments);
            return function(t) {
                for (var n = 0; n < e.length; n++)
                    if (!e[n](t)) return !1;
                return !0
            }
        }

        function o(e) {
            var t = s.call(arguments);
            return t.length - 1 >= e.length ? e.apply(this, t.slice(1)) : function() {
                var e = t.concat([].slice.call(arguments));
                return o.apply(this, e)
            }
        }

        function a() {}
        var s = [].slice;
        return {
            constant: e,
            negate: t,
            and: i,
            or: r,
            curry: o,
            compose: n,
            noop: a
        }
    }), r(U, [_, p, k], function(e, t, n) {
        function r(e) {
            return !m(e) && (d(e) ? !f(e.parentNode) : h(e) || u(e) || p(e) || c(e))
        }

        function i(e, t) {
            for (e = e.parentNode; e && e != t; e = e.parentNode) {
                if (c(e)) return !1;
                if (l(e)) return !0
            }
            return !0
        }

        function o(e) {
            return !!c(e) && t.reduce(e.getElementsByTagName("*"), function(e, t) {
                return e || l(t)
            }, !1) !== !0
        }

        function a(e) {
            return h(e) || o(e)
        }

        function s(e, t) {
            return r(e) && i(e, t)
        }
        var l = e.isContentEditableTrue,
            c = e.isContentEditableFalse,
            u = e.isBr,
            d = e.isText,
            f = e.matchNodeNames("script style textarea"),
            h = e.matchNodeNames("img input textarea hr iframe video audio object"),
            p = e.matchNodeNames("table"),
            m = n.isCaretContainer;
        return {
            isCaretCandidate: r,
            isInEditable: i,
            isAtomic: a,
            isEditableCaretCandidate: s
        }
    }), r(W, [], function() {
        function e(e) {
            return e ? {
                left: u(e.left),
                top: u(e.top),
                bottom: u(e.bottom),
                right: u(e.right),
                width: u(e.width),
                height: u(e.height)
            } : {
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                width: 0,
                height: 0
            }
        }

        function t(t, n) {
            return t = e(t), n ? t.right = t.left : (t.left = t.left + t.width, t.right = t.left), t.width = 0, t
        }

        function n(e, t) {
            return e.left === t.left && e.top === t.top && e.bottom === t.bottom && e.right === t.right
        }

        function r(e, t, n) {
            return e >= 0 && e <= Math.min(t.height, n.height) / 2
        }

        function i(e, t) {
            return e.bottom < t.top || !(e.top > t.bottom) && r(t.top - e.bottom, e, t)
        }

        function o(e, t) {
            return e.top > t.bottom || !(e.bottom < t.top) && r(t.bottom - e.top, e, t)
        }

        function a(e, t) {
            return e.left < t.left
        }

        function s(e, t) {
            return e.right > t.right
        }

        function l(e, t) {
            return i(e, t) ? -1 : o(e, t) ? 1 : a(e, t) ? -1 : s(e, t) ? 1 : 0
        }

        function c(e, t, n) {
            return t >= e.left && t <= e.right && n >= e.top && n <= e.bottom
        }
        var u = Math.round;
        return {
            clone: e,
            collapse: t,
            isEqual: n,
            isAbove: i,
            isBelow: o,
            isLeft: a,
            isRight: s,
            compare: l,
            containsXY: c
        }
    }), r(V, [], function() {
        function e(e) {
            return "string" == typeof e && e.charCodeAt(0) >= 768 && t.test(e)
        }
        var t = new RegExp("[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]");
        return {
            isExtendingChar: e
        }
    }), r($, [z, _, w, T, U, W, V], function(e, t, n, r, i, o, a) {
        function s(e) {
            return "createRange" in e ? e.createRange() : n.DOM.createRng()
        }

        function l(e) {
            return e && /[\r\n\t ]/.test(e)
        }

        function c(e) {
            var t = e.startContainer,
                n = e.startOffset,
                r;
            return !!(l(e.toString()) && v(t.parentNode) && (r = t.data, l(r[n - 1]) || l(r[n + 1])))
        }

        function u(e) {
            function t(e) {
                var t = e.ownerDocument,
                    n = s(t),
                    r = t.createTextNode("\xa0"),
                    i = e.parentNode,
                    a;
                return i.insertBefore(r, e), n.setStart(r, 0), n.setEnd(r, 1), a = o.clone(n.getBoundingClientRect()), i.removeChild(r), a
            }

            function n(e) {
                var n, r;
                return r = e.getClientRects(), n = r.length > 0 ? o.clone(r[0]) : o.clone(e.getBoundingClientRect()), b(e) && 0 === n.left ? t(e) : n
            }

            function r(e, t) {
                return e = o.collapse(e, t), e.width = 1, e.right = e.left + 1, e
            }

            function i(e) {
                0 !== e.height && (u.length > 0 && o.isEqual(e, u[u.length - 1]) || u.push(e))
            }

            function l(e, t) {
                var o = s(e.ownerDocument);
                if (t < e.data.length) {
                    if (a.isExtendingChar(e.data[t])) return u;
                    if (a.isExtendingChar(e.data[t - 1]) && (o.setStart(e, t), o.setEnd(e, t + 1), !c(o))) return i(r(n(o), !1)), u
                }
                t > 0 && (o.setStart(e, t - 1), o.setEnd(e, t), c(o) || i(r(n(o), !1))), t < e.data.length && (o.setStart(e, t), o.setEnd(e, t + 1), c(o) || i(r(n(o), !0)))
            }
            var u = [],
                d, h;
            if (y(e.container())) return l(e.container(), e.offset()), u;
            if (f(e.container()))
                if (e.isAtEnd()) h = x(e.container(), e.offset()), y(h) && l(h, h.data.length), g(h) && !b(h) && i(r(n(h), !1));
                else {
                    if (h = x(e.container(), e.offset()), y(h) && l(h, 0), g(h) && e.isAtEnd()) return i(r(n(h), !1)), u;
                    d = x(e.container(), e.offset() - 1), g(d) && !b(d) && (p(d) || p(h) || !g(h)) && i(r(n(d), !1)), g(h) && i(r(n(h), !0))
                }
            return u
        }

        function d(t, n, r) {
            function i() {
                return y(t) ? 0 === n : 0 === n
            }

            function o() {
                return y(t) ? n >= t.data.length : n >= t.childNodes.length
            }

            function a() {
                var e;
                return e = s(t.ownerDocument), e.setStart(t, n), e.setEnd(t, n), e
            }

            function l() {
                return r || (r = u(new d(t, n))), r
            }

            function c() {
                return l().length > 0
            }

            function f(e) {
                return e && t === e.container() && n === e.offset()
            }

            function h(e) {
                return x(t, e ? n - 1 : n)
            }
            return {
                container: e.constant(t),
                offset: e.constant(n),
                toRange: a,
                getClientRects: l,
                isVisible: c,
                isAtStart: i,
                isAtEnd: o,
                isEqual: f,
                getNode: h
            }
        }
        var f = t.isElement,
            h = i.isCaretCandidate,
            p = t.matchStyleValues("display", "block table"),
            m = t.matchStyleValues("float", "left right"),
            g = e.and(f, h, e.negate(m)),
            v = e.negate(t.matchStyleValues("white-space", "pre pre-line pre-wrap")),
            y = t.isText,
            b = t.isBr,
            C = n.nodeIndex,
            x = r.getNode;
        return d.fromRangeStart = function(e) {
            return new d(e.startContainer, e.startOffset)
        }, d.fromRangeEnd = function(e) {
            return new d(e.endContainer, e.endOffset)
        }, d.after = function(e) {
            return new d(e.parentNode, C(e) + 1)
        }, d.before = function(e) {
            return new d(e.parentNode, C(e))
        }, d
    }), r(q, [_, w, z, p, $], function(e, t, n, r, i) {
        function o(e) {
            var t = e.parentNode;
            return v(t) ? o(t) : t
        }

        function a(e) {
            return e ? r.reduce(e.childNodes, function(e, t) {
                return v(t) && "BR" != t.nodeName ? e = e.concat(a(t)) : e.push(t), e
            }, []) : []
        }

        function s(e, t) {
            for (;
                (e = e.previousSibling) && g(e);) t += e.data.length;
            return t
        }

        function l(e) {
            return function(t) {
                return e === t
            }
        }

        function c(t) {
            var n, i, s;
            return n = a(o(t)), i = r.findIndex(n, l(t), t), n = n.slice(0, i + 1), s = r.reduce(n, function(e, t, r) {
                return g(t) && g(n[r - 1]) && e++, e
            }, 0), n = r.filter(n, e.matchNodeNames(t.nodeName)), i = r.findIndex(n, l(t), t), i - s
        }

        function u(e) {
            var t;
            return t = g(e) ? "text()" : e.nodeName.toLowerCase(), t + "[" + c(e) + "]"
        }

        function d(e, t, n) {
            var r = [];
            for (t = t.parentNode; t != e && (!n || !n(t)); t = t.parentNode) r.push(t);
            return r
        }

        function f(t, i) {
            var o, a, l = [],
                c, f, h;
            return o = i.container(), a = i.offset(), g(o) ? c = s(o, a) : (f = o.childNodes, a >= f.length ? (c = "after", a = f.length - 1) : c = "before", o = f[a]), l.push(u(o)), h = d(t, o), h = r.filter(h, n.negate(e.isBogus)), l = l.concat(r.map(h, function(e) {
                return u(e)
            })), l.reverse().join("/") + "," + c
        }

        function h(t, n, i) {
            var o = a(t);
            return o = r.filter(o, function(e, t) {
                return !g(e) || !g(o[t - 1])
            }), o = r.filter(o, e.matchNodeNames(n)), o[i]
        }

        function p(e, t) {
            for (var n = e, r = 0, o; g(n);) {
                if (o = n.data.length, t >= r && t <= r + o) {
                    e = n, t -= r;
                    break
                }
                if (!g(n.nextSibling)) {
                    e = n, t = o;
                    break
                }
                r += o, n = n.nextSibling
            }
            return t > e.data.length && (t = e.data.length), new i(e, t)
        }

        function m(e, t) {
            var n, o, a;
            return t ? (n = t.split(","), t = n[0].split("/"), a = n.length > 1 ? n[1] : "before", o = r.reduce(t, function(e, t) {
                return (t = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t)) ? ("text()" === t[1] && (t[1] = "#text"), h(e, t[1], parseInt(t[2], 10))) : null
            }, e), o ? g(o) ? p(o, parseInt(a, 10)) : (a = "after" === a ? y(o) + 1 : y(o), new i(o.parentNode, a)) : null) : null
        }
        var g = e.isText,
            v = e.isBogus,
            y = t.nodeIndex;
        return {
            create: f,
            resolve: m
        }
    }), r(j, [d, m, k, q, $, _, T], function(e, t, n, r, i, o, a) {
        function s(s) {
            var c = s.dom;
            this.getBookmark = function(e, u) {
                function d(e, n) {
                    var r = 0;
                    return t.each(c.select(e), function(e) {
                        if ("all" !== e.getAttribute("data-mce-bogus")) return e != n && void r++
                    }), r
                }

                function f(e) {
                    function t(t) {
                        var n, r, i, o = t ? "start" : "end";
                        n = e[o + "Container"], r = e[o + "Offset"], 1 == n.nodeType && "TR" == n.nodeName && (i = n.childNodes, n = i[Math.min(t ? r : r - 1, i.length - 1)], n && (r = t ? 0 : n.childNodes.length, e["set" + (t ? "Start" : "End")](n, r)))
                    }
                    return t(!0), t(), e
                }

                function h(e) {
                    function t(e, t) {
                        var r = e[t ? "startContainer" : "endContainer"],
                            i = e[t ? "startOffset" : "endOffset"],
                            o = [],
                            a, s, l = 0;
                        if (3 == r.nodeType) {
                            if (u)
                                for (a = r.previousSibling; a && 3 == a.nodeType; a = a.previousSibling) i += a.nodeValue.length;
                            o.push(i)
                        } else s = r.childNodes, i >= s.length && s.length && (l = 1, i = Math.max(0, s.length - 1)), o.push(c.nodeIndex(s[i], u) + l);
                        for (; r && r != n; r = r.parentNode) o.push(c.nodeIndex(r, u));
                        return o
                    }
                    var n = c.getRoot(),
                        r = {};
                    return r.start = t(e, !0), s.isCollapsed() || (r.end = t(e)), r
                }

                function p(e) {
                    function t(e, t) {
                        var r;
                        if (o.isElement(e) && (e = a.getNode(e, t), l(e))) return e;
                        if (n.isCaretContainer(e)) {
                            if (o.isText(e) && n.isCaretContainerBlock(e) && (e = e.parentNode), r = e.previousSibling, l(r)) return r;
                            if (r = e.nextSibling, l(r)) return r
                        }
                    }
                    return t(e.startContainer, e.startOffset) || t(e.endContainer, e.endOffset)
                }
                var m, g, v, y, b, C, x = "&#xFEFF;",
                    w;
                if (2 == e) return C = s.getNode(), b = C ? C.nodeName : null, m = s.getRng(), l(C) || "IMG" == b ? {
                    name: b,
                    index: d(b, C)
                } : s.tridentSel ? s.tridentSel.getBookmark(e) : (C = p(m), C ? (b = C.tagName, {
                    name: b,
                    index: d(b, C)
                }) : h(m));
                if (3 == e) return m = s.getRng(), {
                    start: r.create(c.getRoot(), i.fromRangeStart(m)),
                    end: r.create(c.getRoot(), i.fromRangeEnd(m))
                };
                if (e) return {
                    rng: s.getRng()
                };
                if (m = s.getRng(), v = c.uniqueId(), y = s.isCollapsed(), w = "overflow:hidden;line-height:0px", m.duplicate || m.item) {
                    if (m.item) return C = m.item(0), b = C.nodeName, {
                        name: b,
                        index: d(b, C)
                    };
                    g = m.duplicate();
                    try {
                        m.collapse(), m.pasteHTML('<span data-mce-type="bookmark" id="' + v + '_start" style="' + w + '">' + x + "</span>"), y || (g.collapse(!1), m.moveToElementText(g.parentElement()), 0 === m.compareEndPoints("StartToEnd", g) && g.move("character", -1), g.pasteHTML('<span data-mce-type="bookmark" id="' + v + '_end" style="' + w + '">' + x + "</span>"))
                    } catch (E) {
                        return null
                    }
                } else {
                    if (C = s.getNode(), b = C.nodeName, "IMG" == b) return {
                        name: b,
                        index: d(b, C)
                    };
                    g = f(m.cloneRange()), y || (g.collapse(!1), g.insertNode(c.create("span", {
                        "data-mce-type": "bookmark",
                        id: v + "_end",
                        style: w
                    }, x))), m = f(m), m.collapse(!0), m.insertNode(c.create("span", {
                        "data-mce-type": "bookmark",
                        id: v + "_start",
                        style: w
                    }, x))
                }
                return s.moveToBookmark({
                    id: v,
                    keep: 1
                }), {
                    id: v
                }
            }, this.moveToBookmark = function(n) {
                function i(e) {
                    var t = n[e ? "start" : "end"],
                        r, i, o, a;
                    if (t) {
                        for (o = t[0], i = d, r = t.length - 1; r >= 1; r--) {
                            if (a = i.childNodes, t[r] > a.length - 1) return;
                            i = a[t[r]]
                        }
                        3 === i.nodeType && (o = Math.min(t[0], i.nodeValue.length)), 1 === i.nodeType && (o = Math.min(t[0], i.childNodes.length)), e ? u.setStart(i, o) : u.setEnd(i, o)
                    }
                    return !0
                }

                function o(r) {
                    var i = c.get(n.id + "_" + r),
                        o, a, s, l, u = n.keep;
                    if (i && (o = i.parentNode, "start" == r ? (u ? (o = i.firstChild, a = 1) : a = c.nodeIndex(i), f = h = o, p = m = a) : (u ? (o = i.firstChild, a = 1) : a = c.nodeIndex(i), h = o, m = a), !u)) {
                        for (l = i.previousSibling, s = i.nextSibling, t.each(t.grep(i.childNodes), function(e) {
                                3 == e.nodeType && (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""))
                            }); i = c.get(n.id + "_" + r);) c.remove(i, 1);
                        l && s && l.nodeType == s.nodeType && 3 == l.nodeType && !e.opera && (a = l.nodeValue.length, l.appendData(s.nodeValue), c.remove(s), "start" == r ? (f = h = l, p = m = a) : (h = l, m = a))
                    }
                }

                function a(t) {
                    return !c.isBlock(t) || t.innerHTML || e.ie || (t.innerHTML = '<br data-mce-bogus="1" />'), t
                }

                function l() {
                    var e, t;
                    return e = c.createRng(), t = r.resolve(c.getRoot(), n.start), e.setStart(t.container(), t.offset()), t = r.resolve(c.getRoot(), n.end), e.setEnd(t.container(), t.offset()), e
                }
                var u, d, f, h, p, m;
                if (n)
                    if (t.isArray(n.start)) {
                        if (u = c.createRng(), d = c.getRoot(), s.tridentSel) return s.tridentSel.moveToBookmark(n);
                        i(!0) && i() && s.setRng(u)
                    } else "string" == typeof n.start ? s.setRng(l(n)) : n.id ? (o("start"), o("end"), f && (u = c.createRng(), u.setStart(a(f), p), u.setEnd(a(h), m), s.setRng(u))) : n.name ? s.select(c.select(n.name)[n.index]) : n.rng && s.setRng(n.rng)
            }
        }
        var l = o.isContentEditableFalse;
        return s.isBookmarkNode = function(e) {
            return e && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type")
        }, s
    }), r(Y, [y, H, F, T, j, _, d, m, $], function(e, n, r, i, o, a, s, l, c) {
        function u(e, t, i, a) {
            var s = this;
            s.dom = e, s.win = t, s.serializer = i, s.editor = a, s.bookmarkManager = new o(s), s.controlSelection = new r(s, a), s.win.getSelection || (s.tridentSel = new n(s))
        }
        var d = l.each,
            f = l.trim,
            h = s.ie;
        return u.prototype = {
            setCursorLocation: function(e, t) {
                var n = this,
                    r = n.dom.createRng();
                e ? (r.setStart(e, t), r.setEnd(e, t), n.setRng(r), n.collapse(!1)) : (n._moveEndPoint(r, n.editor.getBody(), !0), n.setRng(r))
            },
            getContent: function(e) {
                var n = this,
                    r = n.getRng(),
                    i = n.dom.create("body"),
                    o = n.getSel(),
                    a, s, l;
                return e = e || {}, a = s = "", e.get = !0, e.format = e.format || "html", e.selection = !0, n.editor.fire("BeforeGetContent", e), "text" == e.format ? n.isCollapsed() ? "" : r.text || (o.toString ? o.toString() : "") : (r.cloneContents ? (l = r.cloneContents(), l && i.appendChild(l)) : r.item !== t || r.htmlText !== t ? (i.innerHTML = "<br>" + (r.item ? r.item(0).outerHTML : r.htmlText), i.removeChild(i.firstChild)) : i.innerHTML = r.toString(), /^\s/.test(i.innerHTML) && (a = " "), /\s+$/.test(i.innerHTML) && (s = " "), e.getInner = !0, e.content = n.isCollapsed() ? "" : a + n.serializer.serialize(i, e) + s, n.editor.fire("GetContent", e), e.content)
            },
            setContent: function(e, t) {
                var n = this,
                    r = n.getRng(),
                    i, o = n.win.document,
                    a, s;
                if (t = t || {
                        format: "html"
                    }, t.set = !0, t.selection = !0, t.content = e, t.no_events || n.editor.fire("BeforeSetContent", t), e = t.content, r.insertNode) {
                    e += '<span id="__caret">_</span>', r.startContainer == o && r.endContainer == o ? o.body.innerHTML = e : (r.deleteContents(), 0 === o.body.childNodes.length ? o.body.innerHTML = e : r.createContextualFragment ? r.insertNode(r.createContextualFragment(e)) : (a = o.createDocumentFragment(), s = o.createElement("div"), a.appendChild(s), s.outerHTML = e, r.insertNode(a))), i = n.dom.get("__caret"), r = o.createRange(), r.setStartBefore(i), r.setEndBefore(i), n.setRng(r), n.dom.remove("__caret");
                    try {
                        n.setRng(r)
                    } catch (l) {}
                } else r.item && (o.execCommand("Delete", !1, null), r = n.getRng()), /^\s+/.test(e) ? (r.pasteHTML('<span id="__mce_tmp">_</span>' + e), n.dom.remove("__mce_tmp")) : r.pasteHTML(e);
                t.no_events || n.editor.fire("SetContent", t)
            },
            getStart: function(e) {
                var t = this,
                    n = t.getRng(),
                    r, i, o, a;
                if (n.duplicate || n.item) {
                    if (n.item) return n.item(0);
                    for (o = n.duplicate(), o.collapse(1), r = o.parentElement(), r.ownerDocument !== t.dom.doc && (r = t.dom.getRoot()), i = a = n.parentElement(); a = a.parentNode;)
                        if (a == r) {
                            r = i;
                            break
                        }
                    return r
                }
                return r = n.startContainer, 1 == r.nodeType && r.hasChildNodes() && (e && n.collapsed || (r = r.childNodes[Math.min(r.childNodes.length - 1, n.startOffset)])), r && 3 == r.nodeType ? r.parentNode : r
            },
            getEnd: function(e) {
                var t = this,
                    n = t.getRng(),
                    r, i;
                return n.duplicate || n.item ? n.item ? n.item(0) : (n = n.duplicate(), n.collapse(0), r = n.parentElement(), r.ownerDocument !== t.dom.doc && (r = t.dom.getRoot()), r && "BODY" == r.nodeName ? r.lastChild || r : r) : (r = n.endContainer, i = n.endOffset, 1 == r.nodeType && r.hasChildNodes() && (e && n.collapsed || (r = r.childNodes[i > 0 ? i - 1 : i])), r && 3 == r.nodeType ? r.parentNode : r)
            },
            getBookmark: function(e, t) {
                return this.bookmarkManager.getBookmark(e, t)
            },
            moveToBookmark: function(e) {
                return this.bookmarkManager.moveToBookmark(e)
            },
            select: function(e, t) {
                var n = this,
                    r = n.dom,
                    i = r.createRng(),
                    o;
                if (n.lastFocusBookmark = null, e) {
                    if (!t && n.controlSelection.controlSelect(e)) return;
                    o = r.nodeIndex(e), i.setStart(e.parentNode, o), i.setEnd(e.parentNode, o + 1), t && (n._moveEndPoint(i, e, !0), n._moveEndPoint(i, e)), n.setRng(i)
                }
                return e
            },
            isCollapsed: function() {
                var e = this,
                    t = e.getRng(),
                    n = e.getSel();
                return !(!t || t.item) && (t.compareEndPoints ? 0 === t.compareEndPoints("StartToEnd", t) : !n || t.collapsed)
            },
            collapse: function(e) {
                var t = this,
                    n = t.getRng(),
                    r;
                n.item && (r = n.item(0), n = t.win.document.body.createTextRange(), n.moveToElementText(r)), n.collapse(!!e), t.setRng(n)
            },
            getSel: function() {
                var e = this.win;
                return e.getSelection ? e.getSelection() : e.document.selection
            },
            getRng: function(e) {
                function t(e, t, n) {
                    try {
                        return t.compareBoundaryPoints(e, n)
                    } catch (r) {
                        return -1
                    }
                }
                var n = this,
                    r, i, o, a, s, l;
                if (!n.win) return null;
                if (a = n.win.document, "undefined" == typeof a || null === a) return null;
                if (!e && n.lastFocusBookmark) {
                    var c = n.lastFocusBookmark;
                    return c.startContainer ? (i = a.createRange(), i.setStart(c.startContainer, c.startOffset), i.setEnd(c.endContainer, c.endOffset)) : i = c, i
                }
                if (e && n.tridentSel) return n.tridentSel.getRangeAt(0);
                try {
                    (r = n.getSel()) && (i = r.rangeCount > 0 ? r.getRangeAt(0) : r.createRange ? r.createRange() : a.createRange())
                } catch (u) {}
                if (l = n.editor.fire("GetSelectionRange", {
                        range: i
                    }), l.range !== i) return l.range;
                if (h && i && i.setStart && a.selection) {
                    try {
                        s = a.selection.createRange()
                    } catch (u) {}
                    s && s.item && (o = s.item(0), i = a.createRange(), i.setStartBefore(o), i.setEndAfter(o))
                }
                return i || (i = a.createRange ? a.createRange() : a.body.createTextRange()), i.setStart && 9 === i.startContainer.nodeType && i.collapsed && (o = n.dom.getRoot(), i.setStart(o, 0), i.setEnd(o, 0)), n.selectedRange && n.explicitRange && (0 === t(i.START_TO_START, i, n.selectedRange) && 0 === t(i.END_TO_END, i, n.selectedRange) ? i = n.explicitRange : (n.selectedRange = null, n.explicitRange = null)), i
            },
            setRng: function(e, t) {
                var n = this,
                    r, i, o;
                if (e)
                    if (e.select) {
                        n.explicitRange = null;
                        try {
                            e.select()
                        } catch (a) {}
                    } else if (n.tridentSel) {
                    if (e.cloneRange) try {
                        n.tridentSel.addRange(e)
                    } catch (a) {}
                } else {
                    if (r = n.getSel(), o = n.editor.fire("SetSelectionRange", {
                            range: e
                        }), e = o.range, r) {
                        n.explicitRange = e;
                        try {
                            r.removeAllRanges(), r.addRange(e)
                        } catch (a) {}
                        t === !1 && r.extend && (r.collapse(e.endContainer, e.endOffset), r.extend(e.startContainer, e.startOffset)), n.selectedRange = r.rangeCount > 0 ? r.getRangeAt(0) : null
                    }
                    e.collapsed || e.startContainer != e.endContainer || !r.setBaseAndExtent || s.ie || e.endOffset - e.startOffset < 2 && e.startContainer.hasChildNodes() && (i = e.startContainer.childNodes[e.startOffset], i && "IMG" == i.tagName && n.getSel().setBaseAndExtent(i, 0, i, 1)), n.editor.fire("AfterSetSelectionRange", {
                        range: e
                    })
                }
            },
            setNode: function(e) {
                var t = this;
                return t.setContent(t.dom.getOuterHTML(e)), e
            },
            getNode: function() {
                function e(e, t) {
                    for (var n = e; e && 3 === e.nodeType && 0 === e.length;) e = t ? e.nextSibling : e.previousSibling;
                    return e || n
                }
                var t = this,
                    n = t.getRng(),
                    r, i, o, a, s, l = t.dom.getRoot();
                return n ? (i = n.startContainer, o = n.endContainer, a = n.startOffset, s = n.endOffset, n.setStart ? (r = n.commonAncestorContainer, !n.collapsed && (i == o && s - a < 2 && i.hasChildNodes() && (r = i.childNodes[a]), 3 === i.nodeType && 3 === o.nodeType && (i = i.length === a ? e(i.nextSibling, !0) : i.parentNode, o = 0 === s ? e(o.previousSibling, !1) : o.parentNode, i && i === o)) ? i : r && 3 == r.nodeType ? r.parentNode : r) : (r = n.item ? n.item(0) : n.parentElement(), r.ownerDocument !== t.win.document && (r = l), r)) : l
            },
            getSelectedBlocks: function(t, n) {
                var r = this,
                    i = r.dom,
                    o, a, s = [];
                if (a = i.getRoot(), t = i.getParent(t || r.getStart(), i.isBlock), n = i.getParent(n || r.getEnd(), i.isBlock), t && t != a && s.push(t), t && n && t != n) {
                    o = t;
                    for (var l = new e(t, a);
                        (o = l.next()) && o != n;) i.isBlock(o) && s.push(o)
                }
                return n && t != n && n != a && s.push(n), s
            },
            isForward: function() {
                var e = this.dom,
                    t = this.getSel(),
                    n, r;
                return !(t && t.anchorNode && t.focusNode) || (n = e.createRng(), n.setStart(t.anchorNode, t.anchorOffset), n.collapse(!0), r = e.createRng(), r.setStart(t.focusNode, t.focusOffset), r.collapse(!0), n.compareBoundaryPoints(n.START_TO_START, r) <= 0)
            },
            normalize: function() {
                var e = this,
                    t = e.getRng();
                return s.range && new i(e.dom).normalize(t) && e.setRng(t, e.isForward()), t
            },
            selectorChanged: function(e, t) {
                var n = this,
                    r;
                return n.selectorChangedData || (n.selectorChangedData = {}, r = {}, n.editor.on("NodeChange", function(e) {
                    var t = e.element,
                        i = n.dom,
                        o = i.getParents(t, null, i.getRoot()),
                        a = {};
                    d(n.selectorChangedData, function(e, t) {
                        d(o, function(n) {
                            if (i.is(n, t)) return r[t] || (d(e, function(e) {
                                e(!0, {
                                    node: n,
                                    selector: t,
                                    parents: o
                                })
                            }), r[t] = e), a[t] = e, !1
                        })
                    }), d(r, function(e, n) {
                        a[n] || (delete r[n], d(e, function(e) {
                            e(!1, {
                                node: t,
                                selector: n,
                                parents: o
                            })
                        }))
                    })
                })), n.selectorChangedData[e] || (n.selectorChangedData[e] = []), n.selectorChangedData[e].push(t), n
            },
            getScrollContainer: function() {
                for (var e, t = this.dom.getRoot(); t && "BODY" != t.nodeName;) {
                    if (t.scrollHeight > t.clientHeight) {
                        e = t;
                        break
                    }
                    t = t.parentNode
                }
                return e
            },
            scrollIntoView: function(e, t) {
                function n(e) {
                    for (var t = 0, n = 0, r = e; r && r.nodeType;) t += r.offsetLeft || 0, n += r.offsetTop || 0, r = r.offsetParent;
                    return {
                        x: t,
                        y: n
                    }
                }
                var r, i, o = this,
                    s = o.dom,
                    l = s.getRoot(),
                    c, u, d = 0;
                if (a.isElement(e)) {
                    if (t === !1 && (d = e.offsetHeight), "BODY" != l.nodeName) {
                        var f = o.getScrollContainer();
                        if (f) return r = n(e).y - n(f).y + d, u = f.clientHeight, c = f.scrollTop, void((r < c || r + 25 > c + u) && (f.scrollTop = r < c ? r : r - u + 25))
                    }
                    i = s.getViewPort(o.editor.getWin()), r = s.getPos(e).y + d, c = i.y, u = i.h, (r < i.y || r + 25 > c + u) && o.editor.getWin().scrollTo(0, r < c ? r : r - u + 25)
                }
            },
            placeCaretAt: function(e, t) {
                this.setRng(i.getCaretRangeFromPoint(e, t, this.editor.getDoc()))
            },
            _moveEndPoint: function(t, n, r) {
                var i = n,
                    o = new e(n, i),
                    a = this.dom.schema.getNonEmptyElements();
                do {
                    if (3 == n.nodeType && 0 !== f(n.nodeValue).length) return void(r ? t.setStart(n, 0) : t.setEnd(n, n.nodeValue.length));
                    if (a[n.nodeName] && !/^(TD|TH)$/.test(n.nodeName)) return void(r ? t.setStartBefore(n) : "BR" == n.nodeName ? t.setEndBefore(n) : t.setEndAfter(n));
                    if (s.ie && s.ie < 11 && this.dom.isBlock(n) && this.dom.isEmpty(n)) return void(r ? t.setStart(n, 0) : t.setEnd(n, 0))
                } while (n = r ? o.next() : o.prev());
                "BODY" == i.nodeName && (r ? t.setStart(i, 0) : t.setEnd(i, i.childNodes.length))
            },
            getBoundingClientRect: function() {
                var e = this.getRng();
                return e.collapsed ? c.fromRangeStart(e).getClientRects()[0] : e.getBoundingClientRect()
            },
            destroy: function() {
                this.win = null, this.controlSelection.destroy()
            }
        }, u
    }), r(X, [j, m], function(e, t) {
        function n(t) {
            this.compare = function(n, i) {
                function o(e) {
                    var n = {};
                    return r(t.getAttribs(e), function(r) {
                        var i = r.nodeName.toLowerCase();
                        0 !== i.indexOf("_") && "style" !== i && 0 !== i.indexOf("data-") && (n[i] = t.getAttrib(e, i))
                    }), n
                }

                function a(e, t) {
                    var n, r;
                    for (r in e)
                        if (e.hasOwnProperty(r)) {
                            if (n = t[r], "undefined" == typeof n) return !1;
                            if (e[r] != n) return !1;
                            delete t[r]
                        }
                    for (r in t)
                        if (t.hasOwnProperty(r)) return !1;
                    return !0
                }
                return n.nodeName == i.nodeName && (!!a(o(n), o(i)) && (!!a(t.parseStyle(t.getAttrib(n, "style")), t.parseStyle(t.getAttrib(i, "style"))) && (!e.isBookmarkNode(n) && !e.isBookmarkNode(i))))
            }
        }
        var r = t.each;
        return n
    }), r(K, [w, m, B], function(e, t, n) {
        function r(e, r) {
            function i(e, t) {
                t.classes.length && c.addClass(e, t.classes.join(" ")), c.setAttribs(e, t.attrs)
            }

            function o(e) {
                var t;
                return u = "string" == typeof e ? {
                    name: e,
                    classes: [],
                    attrs: {}
                } : e, t = c.create(u.name), i(t, u), t
            }

            function a(e, n) {
                var r = "string" != typeof e ? e.nodeName.toLowerCase() : e,
                    i = f.getElementRule(r),
                    o = i.parentsRequired;
                return !(!o || !o.length) && (n && t.inArray(o, n) !== -1 ? n : o[0])
            }

            function s(e, n, r) {
                var i, l, u, d = n.length && n[0],
                    f = d && d.name;
                if (u = a(e, f)) f == u ? (l = n[0], n = n.slice(1)) : l = u;
                else if (d) l = n[0], n = n.slice(1);
                else if (!r) return e;
                return l && (i = o(l), i.appendChild(e)), r && (i || (i = c.create("div"), i.appendChild(e)), t.each(r, function(t) {
                    var n = o(t);
                    i.insertBefore(n, e)
                })), s(i, n, l && l.siblings)
            }
            var l, u, d, f = r && r.schema || new n({});
            return e && e.length ? (u = e[0], l = o(u), d = c.create("div"), d.appendChild(s(l, e.slice(1), u.siblings)), d) : ""
        }

        function i(e, t) {
            return r(a(e, t))
        }

        function o(e) {
            var n, r = {
                classes: [],
                attrs: {}
            };
            return e = r.selector = t.trim(e), "*" !== e && (n = e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, function(e, n, i, o, a) {
                switch (n) {
                    case "#":
                        r.attrs.id = i;
                        break;
                    case ".":
                        r.classes.push(i);
                        break;
                    case ":":
                        t.inArray("checked disabled enabled read-only required".split(" "), i) !== -1 && (r.attrs[i] = i)
                }
                if ("[" == o) {
                    var s = a.match(/([\w\-]+)(?:\=\"([^\"]+))?/);
                    s && (r.attrs[s[1]] = s[2])
                }
                return ""
            })), r.name = n || "div", r
        }

        function a(e) {
            return e && "string" == typeof e ? (e = e.split(/\s*,\s*/)[0], e = e.replace(/\s*(~\+|~|\+|>)\s*/g, "$1"), t.map(e.split(/(?:>|\s+(?![^\[\]]+\]))/), function(e) {
                var n = t.map(e.split(/(?:~\+|~|\+)/), o),
                    r = n.pop();
                return n.length && (r.siblings = n), r
            }).reverse()) : []
        }

        function s(e, t) {
            function n(e) {
                return e.replace(/%(\w+)/g, "")
            }
            var i, o, s, u, d = "",
                f, h;
            if (h = e.settings.preview_styles, h === !1) return "";
            if ("string" != typeof h && (h = "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"), "string" == typeof t) {
                if (t = e.formatter.get(t), !t) return;
                t = t[0]
            }
            return "preview" in t && (h = t.preview, h === !1) ? "" : (i = t.block || t.inline || "span", u = a(t.selector), u.length ? (u[0].name || (u[0].name = i), i = t.selector, o = r(u)) : o = r([i]), s = c.select(i, o)[0] || o.firstChild, l(t.styles, function(e, t) {
                e = n(e), e && c.setStyle(s, t, e)
            }), l(t.attributes, function(e, t) {
                e = n(e), e && c.setAttrib(s, t, e)
            }), l(t.classes, function(e) {
                e = n(e), c.hasClass(s, e) || c.addClass(s, e)
            }), e.fire("PreviewFormats"), c.setStyles(o, {
                position: "absolute",
                left: -65535
            }), e.getBody().appendChild(o), f = c.getStyle(e.getBody(), "fontSize", !0), f = /px$/.test(f) ? parseInt(f, 10) : 0, l(h.split(" "), function(t) {
                var n = c.getStyle(s, t, !0);
                if (!("background-color" == t && /transparent|rgba\s*\([^)]+,\s*0\)/.test(n) && (n = c.getStyle(e.getBody(), t, !0), "#ffffff" == c.toHex(n).toLowerCase()) || "color" == t && "#000000" == c.toHex(n).toLowerCase())) {
                    if ("font-size" == t && /em|%$/.test(n)) {
                        if (0 === f) return;
                        n = parseFloat(n, 10) / (/%$/.test(n) ? 100 : 1), n = n * f + "px"
                    }
                    "border" == t && n && (d += "padding:0 2px;"), d += t + ":" + n + ";"
                }
            }), e.fire("AfterPreviewFormats"), c.remove(o), d)
        }
        var l = t.each,
            c = e.DOM;
        return {
            getCssText: s,
            parseSelector: a,
            selectorToHtml: i
        }
    }), r(G, [p, _, g], function(e, t, n) {
        function r(e, t) {
            var n = o[e];
            n || (o[e] = n = []), o[e].push(t)
        }

        function i(e, t) {
            s(o[e], function(e) {
                e(t)
            })
        }
        var o = {},
            a = e.filter,
            s = e.each;
        return r("pre", function(r) {
            function i(t) {
                return c(t.previousSibling) && e.indexOf(u, t.previousSibling) != -1
            }

            function o(e, t) {
                n(t).remove(), n(e).append("<br><br>").append(t.childNodes)
            }
            var l = r.selection.getRng(),
                c, u;
            c = t.matchNodeNames("pre"), l.collapsed || (u = r.selection.getSelectedBlocks(), s(a(a(u, c), i), function(e) {
                o(e.previousSibling, e)
            }))
        }), {
            postProcess: i
        }
    }), r(J, [y, T, j, X, m, K, G], function(e, t, n, r, i, o, a) {
        return function(s) {
            function l(e) {
                return e.nodeType && (e = e.nodeName), !!s.schema.getTextBlockElements()[e.toLowerCase()]
            }

            function c(e) {
                return /^(TH|TD)$/.test(e.nodeName)
            }

            function u(e) {
                return e && /^(IMG)$/.test(e.nodeName)
            }

            function d(e, t) {
                return Y.getParents(e, t, Y.getRoot())
            }

            function f(e) {
                return 1 === e.nodeType && "_mce_caret" === e.id
            }

            function h() {
                g({
                    valigntop: [{
                        selector: "td,th",
                        styles: {
                            verticalAlign: "top"
                        }
                    }],
                    valignmiddle: [{
                        selector: "td,th",
                        styles: {
                            verticalAlign: "middle"
                        }
                    }],
                    valignbottom: [{
                        selector: "td,th",
                        styles: {
                            verticalAlign: "bottom"
                        }
                    }],
                    alignleft: [{
                        selector: "figure.image",
                        collapsed: !1,
                        classes: "align-left",
                        ceFalseOverride: !0,
                        preview: "font-family font-size"
                    }, {
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {
                            textAlign: "left"
                        },
                        inherit: !1,
                        preview: !1,
                        defaultBlock: "div"
                    }, {
                        selector: "img,table",
                        collapsed: !1,
                        styles: {
                            "float": "left"
                        },
                        preview: "font-family font-size"
                    }],
                    aligncenter: [{
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {
                            textAlign: "center"
                        },
                        inherit: !1,
                        preview: !1,
                        defaultBlock: "div"
                    }, {
                        selector: "figure.image",
                        collapsed: !1,
                        classes: "align-center",
                        ceFalseOverride: !0,
                        preview: "font-family font-size"
                    }, {
                        selector: "img",
                        collapsed: !1,
                        styles: {
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto"
                        },
                        preview: !1
                    }, {
                        selector: "table",
                        collapsed: !1,
                        styles: {
                            marginLeft: "auto",
                            marginRight: "auto"
                        },
                        preview: "font-family font-size"
                    }],
                    alignright: [{
                        selector: "figure.image",
                        collapsed: !1,
                        classes: "align-right",
                        ceFalseOverride: !0,
                        preview: "font-family font-size"
                    }, {
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {
                            textAlign: "right"
                        },
                        inherit: !1,
                        preview: "font-family font-size",
                        defaultBlock: "div"
                    }, {
                        selector: "img,table",
                        collapsed: !1,
                        styles: {
                            "float": "right"
                        },
                        preview: "font-family font-size"
                    }],
                    alignjustify: [{
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {
                            textAlign: "justify"
                        },
                        inherit: !1,
                        defaultBlock: "div",
                        preview: "font-family font-size"
                    }],
                    bold: [{
                        inline: "strong",
                        remove: "all"
                    }, {
                        inline: "span",
                        styles: {
                            fontWeight: "bold"
                        }
                    }, {
                        inline: "b",
                        remove: "all"
                    }],
                    italic: [{
                        inline: "em",
                        remove: "all"
                    }, {
                        inline: "span",
                        styles: {
                            fontStyle: "italic"
                        }
                    }, {
                        inline: "i",
                        remove: "all"
                    }],
                    underline: [{
                        inline: "span",
                        styles: {
                            textDecoration: "underline"
                        },
                        exact: !0
                    }, {
                        inline: "u",
                        remove: "all"
                    }],
                    strikethrough: [{
                        inline: "span",
                        styles: {
                            textDecoration: "line-through"
                        },
                        exact: !0
                    }, {
                        inline: "strike",
                        remove: "all"
                    }],
                    forecolor: {
                        inline: "span",
                        styles: {
                            color: "%value"
                        },
                        links: !0,
                        remove_similar: !0
                    },
                    hilitecolor: {
                        inline: "span",
                        styles: {
                            backgroundColor: "%value"
                        },
                        links: !0,
                        remove_similar: !0
                    },
                    fontname: {
                        inline: "span",
                        styles: {
                            fontFamily: "%value"
                        }
                    },
                    fontsize: {
                        inline: "span",
                        styles: {
                            fontSize: "%value"
                        }
                    },
                    fontsize_class: {
                        inline: "span",
                        attributes: {
                            "class": "%value"
                        }
                    },
                    blockquote: {
                        block: "blockquote",
                        wrapper: 1,
                        remove: "all"
                    },
                    subscript: {
                        inline: "sub"
                    },
                    superscript: {
                        inline: "sup"
                    },
                    code: {
                        inline: "code"
                    },
                    link: {
                        inline: "a",
                        selector: "a",
                        remove: "all",
                        split: !0,
                        deep: !0,
                        onmatch: function() {
                            return !0
                        },
                        onformat: function(e, t, n) {
                            ue(n, function(t, n) {
                                Y.setAttrib(e, n, t)
                            })
                        }
                    },
                    removeformat: [{
                        selector: "b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",
                        remove: "all",
                        split: !0,
                        expand: !1,
                        block_expand: !0,
                        deep: !0
                    }, {
                        selector: "span",
                        attributes: ["style", "class"],
                        remove: "empty",
                        split: !0,
                        expand: !1,
                        deep: !0
                    }, {
                        selector: "*",
                        attributes: ["style", "class"],
                        split: !1,
                        expand: !1,
                        deep: !0
                    }]
                }), ue("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/), function(e) {
                    g(e, {
                        block: e,
                        remove: "all"
                    })
                }), g(s.settings.formats)
            }

            function p() {
                s.addShortcut("meta+b", "bold_desc", "Bold"), s.addShortcut("meta+i", "italic_desc", "Italic"), s.addShortcut("meta+u", "underline_desc", "Underline");
                for (var e = 1; e <= 6; e++) s.addShortcut("access+" + e, "", ["FormatBlock", !1, "h" + e]);
                s.addShortcut("access+7", "", ["FormatBlock", !1, "p"]), s.addShortcut("access+8", "", ["FormatBlock", !1, "div"]), s.addShortcut("access+9", "", ["FormatBlock", !1, "address"])
            }

            function m(e) {
                return e ? j[e] : j
            }

            function g(e, t) {
                e && ("string" != typeof e ? ue(e, function(e, t) {
                    g(t, e)
                }) : (t = t.length ? t : [t], ue(t, function(e) {
                    e.deep === oe && (e.deep = !e.selector), e.split === oe && (e.split = !e.selector || e.inline), e.remove === oe && e.selector && !e.inline && (e.remove = "none"), e.selector && e.inline && (e.mixed = !0, e.block_expand = !0), "string" == typeof e.classes && (e.classes = e.classes.split(/\s+/))
                }), j[e] = t))
            }

            function v(e) {
                return e && j[e] && delete j[e], j
            }

            function y(e, t) {
                var n = m(t);
                if (n)
                    for (var r = 0; r < n.length; r++)
                        if (n[r].inherit === !1 && Y.is(e, n[r].selector)) return !0;
                return !1
            }

            function b(e) {
                var t;
                return s.dom.getParent(e, function(e) {
                    return t = s.dom.getStyle(e, "text-decoration"), t && "none" !== t
                }), t
            }

            function C(e) {
                var t;
                1 === e.nodeType && e.parentNode && 1 === e.parentNode.nodeType && (t = b(e.parentNode), s.dom.getStyle(e, "color") && t ? s.dom.setStyle(e, "text-decoration", t) : s.dom.getStyle(e, "text-decoration") === t && s.dom.setStyle(e, "text-decoration", null));
            }

            function x(t, n, r) {
                function i(e, t) {
                    if (t = t || h, e) {
                        if (t.onformat && t.onformat(e, t, n, r), ue(t.styles, function(t, r) {
                                Y.setStyle(e, r, M(t, n))
                            }), t.styles) {
                            var i = Y.getAttrib(e, "style");
                            i && e.setAttribute("data-mce-style", i)
                        }
                        ue(t.attributes, function(t, r) {
                            Y.setAttrib(e, r, M(t, n))
                        }), ue(t.classes, function(t) {
                            t = M(t, n), Y.hasClass(e, t) || Y.addClass(e, t)
                        })
                    }
                }

                function o(e, t) {
                    var n = !1;
                    return !!h.selector && (ue(e, function(e) {
                        if (!("collapsed" in e && e.collapsed !== v)) return Y.is(t, e.selector) && !f(t) ? (i(t, e), n = !0, !1) : void 0
                    }), n)
                }

                function c() {
                    function t(t, n) {
                        var i = new e(n);
                        for (r = i.prev2(); r; r = i.prev2()) {
                            if (3 == r.nodeType && r.data.length > 0) return r;
                            if (r.childNodes.length > 1 || r == t || "BR" == r.tagName) return r
                        }
                    }
                    var n = s.selection.getRng(),
                        i = n.startContainer,
                        o = n.endContainer;
                    if (i != o && 0 === n.endOffset) {
                        var a = t(i, o),
                            l = 3 == a.nodeType ? a.data.length : a.childNodes.length;
                        n.setEnd(a, l)
                    }
                    return n
                }

                function u(e, r, a) {
                    var s = [],
                        c, u, p = !0;
                    c = h.inline || h.block, u = Y.create(c), i(u), K.walk(e, function(e) {
                        function r(e) {
                            var g, v, y, b;
                            if (b = p, g = e.nodeName.toLowerCase(), v = e.parentNode.nodeName.toLowerCase(), 1 === e.nodeType && ae(e) && (b = p, p = "true" === ae(e), y = !0), B(g, "br")) return m = 0, void(h.block && Y.remove(e));
                            if (h.wrapper && N(e, t, n)) return void(m = 0);
                            if (p && !y && h.block && !h.wrapper && l(g) && G(v, c)) return e = Y.rename(e, c), i(e), s.push(e), void(m = 0);
                            if (h.selector) {
                                var C = o(d, e);
                                if (!h.inline || C) return void(m = 0)
                            }!p || y || !G(c, g) || !G(v, c) || !a && 3 === e.nodeType && 1 === e.nodeValue.length && 65279 === e.nodeValue.charCodeAt(0) || f(e) || h.inline && J(e) ? (m = 0, ue(de(e.childNodes), r), y && (p = b), m = 0) : (m || (m = Y.clone(u, ne), e.parentNode.insertBefore(m, e), s.push(m)), m.appendChild(e))
                        }
                        var m;
                        ue(e, r)
                    }), h.links === !0 && ue(s, function(e) {
                        function t(e) {
                            "A" === e.nodeName && i(e, h), ue(de(e.childNodes), t)
                        }
                        t(e)
                    }), ue(s, function(e) {
                        function r(e) {
                            var t = 0;
                            return ue(e.childNodes, function(e) {
                                P(e) || ce(e) || t++
                            }), t
                        }

                        function o(e) {
                            var t, n;
                            return ue(e.childNodes, function(e) {
                                if (1 == e.nodeType && !ce(e) && !f(e)) return t = e, ne
                            }), t && !ce(t) && A(t, h) && (n = Y.clone(t, ne), i(n), Y.replace(n, e, re), Y.remove(t, 1)), n || e
                        }
                        var a;
                        if (a = r(e), (s.length > 1 || !J(e)) && 0 === a) return void Y.remove(e, 1);
                        if (h.inline || h.wrapper) {
                            if (h.exact || 1 !== a || (e = o(e)), ue(d, function(t) {
                                    ue(Y.select(t.inline, e), function(e) {
                                        ce(e) || F(t, n, e, t.exact ? e : null)
                                    })
                                }), N(e.parentNode, t, n)) return Y.remove(e, 1), e = 0, re;
                            h.merge_with_parents && Y.getParent(e.parentNode, function(r) {
                                if (N(r, t, n)) return Y.remove(e, 1), e = 0, re
                            }), e && h.merge_siblings !== !1 && (e = W(U(e), e), e = W(e, U(e, re)))
                        }
                    })
                }
                var d = m(t),
                    h = d[0],
                    p, g, v = !r && X.isCollapsed();
                if ("false" !== ae(X.getNode())) {
                    if (h) {
                        if (r) r.nodeType ? o(d, r) || (g = Y.createRng(), g.setStartBefore(r), g.setEndAfter(r), u(H(g, d), null, !0)) : u(r, null, !0);
                        else if (v && h.inline && !Y.select("td[data-mce-selected],th[data-mce-selected]").length) $("apply", t, n);
                        else {
                            var y = s.selection.getNode();
                            Q || !d[0].defaultBlock || Y.getParent(y, Y.isBlock) || x(d[0].defaultBlock), s.selection.setRng(c()), p = X.getBookmark(), u(H(X.getRng(re), d), p), h.styles && (h.styles.color || h.styles.textDecoration) && (fe(y, C, "childNodes"), C(y)), X.moveToBookmark(p), q(X.getRng(re)), s.nodeChanged()
                        }
                        a.postProcess(t, s)
                    }
                } else {
                    r = X.getNode();
                    for (var b = 0, w = d.length; b < w; b++)
                        if (d[b].ceFalseOverride && Y.is(r, d[b].selector)) return void i(r, d[b])
                }
            }

            function w(e, t, n, r) {
                function i(e) {
                    var n, r, o, a, s;
                    if (1 === e.nodeType && ae(e) && (a = y, y = "true" === ae(e), s = !0), n = de(e.childNodes), y && !s)
                        for (r = 0, o = h.length; r < o && !F(h[r], t, e, e); r++);
                    if (p.deep && n.length) {
                        for (r = 0, o = n.length; r < o; r++) i(n[r]);
                        s && (y = a)
                    }
                }

                function o(n) {
                    var i;
                    return ue(d(n.parentNode).reverse(), function(n) {
                        var o;
                        i || "_start" == n.id || "_end" == n.id || (o = N(n, e, t, r), o && o.split !== !1 && (i = n))
                    }), i
                }

                function a(e, n, r, i) {
                    var o, a, s, l, c, u;
                    if (e) {
                        for (u = e.parentNode, o = n.parentNode; o && o != u; o = o.parentNode) {
                            for (a = Y.clone(o, ne), c = 0; c < h.length; c++)
                                if (F(h[c], t, a, a)) {
                                    a = 0;
                                    break
                                }
                            a && (s && a.appendChild(s), l || (l = a), s = a)
                        }!i || p.mixed && J(e) || (n = Y.split(e, n)), s && (r.parentNode.insertBefore(s, r), l.appendChild(r))
                    }
                    return n
                }

                function l(e) {
                    return a(o(e), e, e, !0)
                }

                function u(e) {
                    var t = Y.get(e ? "_start" : "_end"),
                        n = t[e ? "firstChild" : "lastChild"];
                    return ce(n) && (n = n[e ? "firstChild" : "lastChild"]), 3 == n.nodeType && 0 === n.data.length && (n = e ? t.previousSibling || t.nextSibling : t.nextSibling || t.previousSibling), Y.remove(t, !0), n
                }

                function f(e) {
                    var t, n, r = e.commonAncestorContainer;
                    if (e = H(e, h, re), p.split) {
                        if (t = V(e, re), n = V(e), t != n) {
                            if (/^(TR|TH|TD)$/.test(t.nodeName) && t.firstChild && (t = "TR" == t.nodeName ? t.firstChild.firstChild || t : t.firstChild || t), r && /^T(HEAD|BODY|FOOT|R)$/.test(r.nodeName) && c(n) && n.firstChild && (n = n.firstChild || n), Y.isChildOf(t, n) && !J(n) && !c(t) && !c(n)) return t = O(t, "span", {
                                id: "_start",
                                "data-mce-type": "bookmark"
                            }), l(t), void(t = u(re));
                            t = O(t, "span", {
                                id: "_start",
                                "data-mce-type": "bookmark"
                            }), n = O(n, "span", {
                                id: "_end",
                                "data-mce-type": "bookmark"
                            }), l(t), l(n), t = u(re), n = u()
                        } else t = n = l(t);
                        e.startContainer = t.parentNode ? t.parentNode : t, e.startOffset = Z(t), e.endContainer = n.parentNode ? n.parentNode : n, e.endOffset = Z(n) + 1
                    }
                    K.walk(e, function(e) {
                        ue(e, function(e) {
                            i(e), 1 === e.nodeType && "underline" === s.dom.getStyle(e, "text-decoration") && e.parentNode && "underline" === b(e.parentNode) && F({
                                deep: !1,
                                exact: !0,
                                inline: "span",
                                styles: {
                                    textDecoration: "underline"
                                }
                            }, null, e)
                        })
                    })
                }
                var h = m(e),
                    p = h[0],
                    g, v, y = !0;
                if (n) return void(n.nodeType ? (v = Y.createRng(), v.setStartBefore(n), v.setEndAfter(n), f(v)) : f(n));
                if ("false" !== ae(X.getNode())) X.isCollapsed() && p.inline && !Y.select("td[data-mce-selected],th[data-mce-selected]").length ? $("remove", e, t, r) : (g = X.getBookmark(), f(X.getRng(re)), X.moveToBookmark(g), p.inline && _(e, t, X.getStart()) && q(X.getRng(!0)), s.nodeChanged());
                else {
                    n = X.getNode();
                    for (var C = 0, x = h.length; C < x && (!h[C].ceFalseOverride || !F(h[C], t, n, n)); C++);
                }
            }

            function E(e, t, n) {
                var r = m(e);
                !_(e, t, n) || "toggle" in r[0] && !r[0].toggle ? x(e, t, n) : w(e, t, n)
            }

            function N(e, t, n, r) {
                function i(e, t, i) {
                    var o, a, s = t[i],
                        l;
                    if (t.onmatch) return t.onmatch(e, t, i);
                    if (s)
                        if (s.length === oe) {
                            for (o in s)
                                if (s.hasOwnProperty(o)) {
                                    if (a = "attributes" === i ? Y.getAttrib(e, o) : D(e, o), r && !a && !t.exact) return;
                                    if ((!r || t.exact) && !B(a, L(M(s[o], n), o))) return
                                }
                        } else
                            for (l = 0; l < s.length; l++)
                                if ("attributes" === i ? Y.getAttrib(e, s[l]) : D(e, s[l])) return t;
                    return t
                }
                var o = m(t),
                    a, s, l;
                if (o && e)
                    for (s = 0; s < o.length; s++)
                        if (a = o[s], A(e, a) && i(e, a, "attributes") && i(e, a, "styles")) {
                            if (l = a.classes)
                                for (s = 0; s < l.length; s++)
                                    if (!Y.hasClass(e, l[s])) return;
                            return a
                        }
            }

            function _(e, t, n) {
                function r(n) {
                    var r = Y.getRoot();
                    return n !== r && (n = Y.getParent(n, function(n) {
                        return !!y(n, e) || (n.parentNode === r || !!N(n, e, t, !0))
                    }), N(n, e, t))
                }
                var i;
                return n ? r(n) : (n = X.getNode(), r(n) ? re : (i = X.getStart(), i != n && r(i) ? re : ne))
            }

            function S(e, t) {
                var n, r = [],
                    i = {};
                return n = X.getStart(), Y.getParent(n, function(n) {
                    var o, a;
                    for (o = 0; o < e.length; o++) a = e[o], !i[a] && N(n, a, t) && (i[a] = !0, r.push(a))
                }, Y.getRoot()), r
            }

            function k(e) {
                var t = m(e),
                    n, r, i, o, a;
                if (t)
                    for (n = X.getStart(), r = d(n), o = t.length - 1; o >= 0; o--) {
                        if (a = t[o].selector, !a || t[o].defaultBlock) return re;
                        for (i = r.length - 1; i >= 0; i--)
                            if (Y.is(r[i], a)) return re
                    }
                return ne
            }

            function T(e, t, n) {
                var r;
                return ie || (ie = {}, r = {}, s.on("NodeChange", function(e) {
                    var t = d(e.element),
                        n = {};
                    t = i.grep(t, function(e) {
                        return 1 == e.nodeType && !e.getAttribute("data-mce-bogus")
                    }), ue(ie, function(e, i) {
                        ue(t, function(o) {
                            return N(o, i, {}, e.similar) ? (r[i] || (ue(e, function(e) {
                                e(!0, {
                                    node: o,
                                    format: i,
                                    parents: t
                                })
                            }), r[i] = e), n[i] = e, !1) : !y(o, i) && void 0
                        })
                    }), ue(r, function(i, o) {
                        n[o] || (delete r[o], ue(i, function(n) {
                            n(!1, {
                                node: e.element,
                                format: o,
                                parents: t
                            })
                        }))
                    })
                })), ue(e.split(","), function(e) {
                    ie[e] || (ie[e] = [], ie[e].similar = n), ie[e].push(t)
                }), this
            }

            function R(e) {
                return o.getCssText(s, e)
            }

            function A(e, t) {
                return B(e, t.inline) ? re : B(e, t.block) ? re : t.selector ? 1 == e.nodeType && Y.is(e, t.selector) : void 0
            }

            function B(e, t) {
                return e = e || "", t = t || "", e = "" + (e.nodeName || e), t = "" + (t.nodeName || t), e.toLowerCase() == t.toLowerCase()
            }

            function D(e, t) {
                return L(Y.getStyle(e, t), t)
            }

            function L(e, t) {
                return "color" != t && "backgroundColor" != t || (e = Y.toHex(e)), "fontWeight" == t && 700 == e && (e = "bold"), "fontFamily" == t && (e = e.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")), "" + e
            }

            function M(e, t) {
                return "string" != typeof e ? e = e(t) : t && (e = e.replace(/%(\w+)/g, function(e, n) {
                    return t[n] || e
                })), e
            }

            function P(e) {
                return e && 3 === e.nodeType && /^([\t \r\n]+|)$/.test(e.nodeValue)
            }

            function O(e, t, n) {
                var r = Y.create(t, n);
                return e.parentNode.insertBefore(r, e), r.appendChild(e), r
            }

            function H(t, n, r) {
                function i(e) {
                    function t(e) {
                        return "BR" == e.nodeName && e.getAttribute("data-mce-bogus") && !e.nextSibling
                    }
                    var r, i, o, a, s;
                    if (r = i = e ? g : y, a = e ? "previousSibling" : "nextSibling", s = Y.getRoot(), 3 == r.nodeType && !P(r) && (e ? v > 0 : b < r.nodeValue.length)) return r;
                    for (;;) {
                        if (!n[0].block_expand && J(i)) return i;
                        for (o = i[a]; o; o = o[a])
                            if (!ce(o) && !P(o) && !t(o)) return i;
                        if (i == s || i.parentNode == s) {
                            r = i;
                            break
                        }
                        i = i.parentNode
                    }
                    return r
                }

                function o(e, t) {
                    for (t === oe && (t = 3 === e.nodeType ? e.length : e.childNodes.length); e && e.hasChildNodes();) e = e.childNodes[t], e && (t = 3 === e.nodeType ? e.length : e.childNodes.length);
                    return {
                        node: e,
                        offset: t
                    }
                }

                function a(e) {
                    for (var t = e; t;) {
                        if (1 === t.nodeType && ae(t)) return "false" === ae(t) ? t : e;
                        t = t.parentNode
                    }
                    return e
                }

                function c(t, n, i) {
                    function o(e, t) {
                        var n, o, a = e.nodeValue;
                        return "undefined" == typeof t && (t = i ? a.length : 0), i ? (n = a.lastIndexOf(" ", t), o = a.lastIndexOf("\xa0", t), n = n > o ? n : o, n === -1 || r || n++) : (n = a.indexOf(" ", t), o = a.indexOf("\xa0", t), n = n !== -1 && (o === -1 || n < o) ? n : o), n
                    }
                    var a, l, c, u;
                    if (3 === t.nodeType) {
                        if (c = o(t, n), c !== -1) return {
                            container: t,
                            offset: c
                        };
                        u = t
                    }
                    for (a = new e(t, Y.getParent(t, J) || s.getBody()); l = a[i ? "prev" : "next"]();)
                        if (3 === l.nodeType) {
                            if (u = l, c = o(l), c !== -1) return {
                                container: l,
                                offset: c
                            }
                        } else if (J(l)) break;
                    if (u) return n = i ? 0 : u.length, {
                        container: u,
                        offset: n
                    }
                }

                function u(e, r) {
                    var i, o, a, s;
                    for (3 == e.nodeType && 0 === e.nodeValue.length && e[r] && (e = e[r]), i = d(e), o = 0; o < i.length; o++)
                        for (a = 0; a < n.length; a++)
                            if (s = n[a], !("collapsed" in s && s.collapsed !== t.collapsed) && Y.is(i[o], s.selector)) return i[o];
                    return e
                }

                function f(e, t) {
                    var r, i = Y.getRoot();
                    if (n[0].wrapper || (r = Y.getParent(e, n[0].block, i)), r || (r = Y.getParent(3 == e.nodeType ? e.parentNode : e, function(e) {
                            return e != i && l(e)
                        })), r && n[0].wrapper && (r = d(r, "ul,ol").reverse()[0] || r), !r)
                        for (r = e; r[t] && !J(r[t]) && (r = r[t], !B(r, "br")););
                    return r || e
                }
                var h, p, m, g = t.startContainer,
                    v = t.startOffset,
                    y = t.endContainer,
                    b = t.endOffset;
                if (1 == g.nodeType && g.hasChildNodes() && (h = g.childNodes.length - 1, g = g.childNodes[v > h ? h : v], 3 == g.nodeType && (v = 0)), 1 == y.nodeType && y.hasChildNodes() && (h = y.childNodes.length - 1, y = y.childNodes[b > h ? h : b - 1], 3 == y.nodeType && (b = y.nodeValue.length)), g = a(g), y = a(y), (ce(g.parentNode) || ce(g)) && (g = ce(g) ? g : g.parentNode, g = g.nextSibling || g, 3 == g.nodeType && (v = 0)), (ce(y.parentNode) || ce(y)) && (y = ce(y) ? y : y.parentNode, y = y.previousSibling || y, 3 == y.nodeType && (b = y.length)), n[0].inline && (t.collapsed && (m = c(g, v, !0), m && (g = m.container, v = m.offset), m = c(y, b), m && (y = m.container, b = m.offset)), p = o(y, b), p.node)) {
                    for (; p.node && 0 === p.offset && p.node.previousSibling;) p = o(p.node.previousSibling);
                    p.node && p.offset > 0 && 3 === p.node.nodeType && " " === p.node.nodeValue.charAt(p.offset - 1) && p.offset > 1 && (y = p.node, y.splitText(p.offset - 1))
                }
                return (n[0].inline || n[0].block_expand) && (n[0].inline && 3 == g.nodeType && 0 !== v || (g = i(!0)), n[0].inline && 3 == y.nodeType && b !== y.nodeValue.length || (y = i())), n[0].selector && n[0].expand !== ne && !n[0].inline && (g = u(g, "previousSibling"), y = u(y, "nextSibling")), (n[0].block || n[0].selector) && (g = f(g, "previousSibling"), y = f(y, "nextSibling"), n[0].block && (J(g) || (g = i(!0)), J(y) || (y = i()))), 1 == g.nodeType && (v = Z(g), g = g.parentNode), 1 == y.nodeType && (b = Z(y) + 1, y = y.parentNode), {
                    startContainer: g,
                    startOffset: v,
                    endContainer: y,
                    endOffset: b
                }
            }

            function I(e, t) {
                return t.links && "A" == e.tagName
            }

            function F(e, t, n, r) {
                var i, o, a;
                if (!A(n, e) && !I(n, e)) return ne;
                if ("all" != e.remove)
                    for (ue(e.styles, function(i, o) {
                            i = L(M(i, t), o), "number" == typeof o && (o = i, r = 0), (e.remove_similar || !r || B(D(r, o), i)) && Y.setStyle(n, o, ""), a = 1
                        }), a && "" === Y.getAttrib(n, "style") && (n.removeAttribute("style"), n.removeAttribute("data-mce-style")), ue(e.attributes, function(e, i) {
                            var o;
                            if (e = M(e, t), "number" == typeof i && (i = e, r = 0), !r || B(Y.getAttrib(r, i), e)) {
                                if ("class" == i && (e = Y.getAttrib(n, i), e && (o = "", ue(e.split(/\s+/), function(e) {
                                        /mce\-\w+/.test(e) && (o += (o ? " " : "") + e)
                                    }), o))) return void Y.setAttrib(n, i, o);
                                "class" == i && n.removeAttribute("className"), te.test(i) && n.removeAttribute("data-mce-" + i), n.removeAttribute(i)
                            }
                        }), ue(e.classes, function(e) {
                            e = M(e, t), r && !Y.hasClass(r, e) || Y.removeClass(n, e)
                        }), o = Y.getAttribs(n), i = 0; i < o.length; i++) {
                        var s = o[i].nodeName;
                        if (0 !== s.indexOf("_") && 0 !== s.indexOf("data-")) return ne
                    }
                return "none" != e.remove ? (z(n, e), re) : void 0
            }

            function z(e, t) {
                function n(e, t, n) {
                    return e = U(e, t, n), !e || "BR" == e.nodeName || J(e)
                }
                var r = e.parentNode,
                    i;
                t.block && (Q ? r == Y.getRoot() && (t.list_block && B(e, t.list_block) || ue(de(e.childNodes), function(e) {
                    G(Q, e.nodeName.toLowerCase()) ? i ? i.appendChild(e) : (i = O(e, Q), Y.setAttribs(i, s.settings.forced_root_block_attrs)) : i = 0
                })) : J(e) && !J(r) && (n(e, ne) || n(e.firstChild, re, 1) || e.insertBefore(Y.create("br"), e.firstChild), n(e, re) || n(e.lastChild, ne, 1) || e.appendChild(Y.create("br")))), t.selector && t.inline && !B(t.inline, e) || Y.remove(e, 1)
            }

            function U(e, t, n) {
                if (e)
                    for (t = t ? "nextSibling" : "previousSibling", e = n ? e : e[t]; e; e = e[t])
                        if (1 == e.nodeType || !P(e)) return e
            }

            function W(e, t) {
                function n(e, t) {
                    for (i = e; i; i = i[t]) {
                        if (3 == i.nodeType && 0 !== i.nodeValue.length) return e;
                        if (1 == i.nodeType && !ce(i)) return i
                    }
                    return e
                }
                var i, o, a = new r(Y);
                if (e && t && (e = n(e, "previousSibling"), t = n(t, "nextSibling"), a.compare(e, t))) {
                    for (i = e.nextSibling; i && i != t;) o = i, i = i.nextSibling, e.appendChild(o);
                    return Y.remove(t), ue(de(t.childNodes), function(t) {
                        e.appendChild(t)
                    }), e
                }
                return t
            }

            function V(t, n) {
                var r, i, o;
                return r = t[n ? "startContainer" : "endContainer"], i = t[n ? "startOffset" : "endOffset"], 1 == r.nodeType && (o = r.childNodes.length - 1, !n && i && i--, r = r.childNodes[i > o ? o : i]), 3 === r.nodeType && n && i >= r.nodeValue.length && (r = new e(r, s.getBody()).next() || r), 3 !== r.nodeType || n || 0 !== i || (r = new e(r, s.getBody()).prev() || r), r
            }

            function $(t, n, r, i) {
                function o(e) {
                    var t = Y.create("span", {
                        id: g,
                        "data-mce-bogus": !0,
                        style: v ? "color:red" : ""
                    });
                    return e && t.appendChild(s.getDoc().createTextNode(ee)), t
                }

                function a(e, t) {
                    for (; e;) {
                        if (3 === e.nodeType && e.nodeValue !== ee || e.childNodes.length > 1) return !1;
                        t && 1 === e.nodeType && t.push(e), e = e.firstChild
                    }
                    return !0
                }

                function c(e) {
                    for (; e;) {
                        if (e.id === g) return e;
                        e = e.parentNode
                    }
                }

                function u(t) {
                    var n;
                    if (t)
                        for (n = new e(t, t), t = n.current(); t; t = n.next())
                            if (3 === t.nodeType) return t
                }

                function d(e, t) {
                    var n, r;
                    if (e) r = X.getRng(!0), a(e) ? (t !== !1 && (r.setStartBefore(e), r.setEndBefore(e)), Y.remove(e)) : (n = u(e), n.nodeValue.charAt(0) === ee && (n.deleteData(0, 1), r.startContainer == n && r.startOffset > 0 && r.setStart(n, r.startOffset - 1), r.endContainer == n && r.endOffset > 0 && r.setEnd(n, r.endOffset - 1)), Y.remove(e, 1)), X.setRng(r);
                    else if (e = c(X.getStart()), !e)
                        for (; e = Y.get(g);) d(e, !1)
                }

                function f() {
                    var e, t, i, a, s, l, d;
                    e = X.getRng(!0), a = e.startOffset, l = e.startContainer, d = l.nodeValue, t = c(X.getStart()), t && (i = u(t)), d && a > 0 && a < d.length && /\w/.test(d.charAt(a)) && /\w/.test(d.charAt(a - 1)) ? (s = X.getBookmark(), e.collapse(!0), e = H(e, m(n)), e = K.split(e), x(n, r, e), X.moveToBookmark(s)) : (t && i.nodeValue === ee ? x(n, r, t) : (t = o(!0), i = t.firstChild, e.insertNode(t), a = 1, x(n, r, t)), X.setCursorLocation(i, a))
                }

                function h() {
                    var e = X.getRng(!0),
                        t, a, s, c, u, d, f = [],
                        h, p;
                    for (t = e.startContainer, a = e.startOffset, u = t, 3 == t.nodeType && (a != t.nodeValue.length && (c = !0), u = u.parentNode); u;) {
                        if (N(u, n, r, i)) {
                            d = u;
                            break
                        }
                        u.nextSibling && (c = !0), f.push(u), u = u.parentNode
                    }
                    if (d)
                        if (c) s = X.getBookmark(), e.collapse(!0), e = H(e, m(n), !0), e = K.split(e), w(n, r, e), X.moveToBookmark(s);
                        else {
                            for (p = o(), u = p, h = f.length - 1; h >= 0; h--) u.appendChild(Y.clone(f[h], !1)), u = u.firstChild;
                            u.appendChild(Y.doc.createTextNode(ee)), u = u.firstChild;
                            var g = Y.getParent(d, l);
                            g && Y.isEmpty(g) ? d.parentNode.replaceChild(p, d) : Y.insertAfter(p, d), X.setCursorLocation(u, 1), Y.isEmpty(d) && Y.remove(d)
                        }
                }

                function p() {
                    var e;
                    e = c(X.getStart()), e && !Y.isEmpty(e) && fe(e, function(e) {
                        1 != e.nodeType || e.id === g || Y.isEmpty(e) || Y.setAttrib(e, "data-mce-bogus", null)
                    }, "childNodes")
                }
                var g = "_mce_caret",
                    v = s.settings.caret_debug;
                s._hasCaretEvents || (le = function() {
                    var e = [],
                        t;
                    if (a(c(X.getStart()), e))
                        for (t = e.length; t--;) Y.setAttrib(e[t], "data-mce-bogus", "1")
                }, se = function(e) {
                    var t = e.keyCode;
                    d(), 8 == t && X.isCollapsed() && X.getStart().innerHTML == ee && d(c(X.getStart())), 37 != t && 39 != t || d(c(X.getStart())), p()
                }, s.on("SetContent", function(e) {
                    e.selection && p()
                }), s._hasCaretEvents = !0), "apply" == t ? f() : h()
            }

            function q(t) {
                var n = t.startContainer,
                    r = t.startOffset,
                    i, o, a, s, l;
                if ((t.startContainer != t.endContainer || !u(t.startContainer.childNodes[t.startOffset])) && (3 == n.nodeType && r >= n.nodeValue.length && (r = Z(n), n = n.parentNode, i = !0), 1 == n.nodeType))
                    for (s = n.childNodes, n = s[Math.min(r, s.length - 1)], o = new e(n, Y.getParent(n, Y.isBlock)), (r > s.length - 1 || i) && o.next(), a = o.current(); a; a = o.next())
                        if (3 == a.nodeType && !P(a)) return l = Y.create("a", {
                            "data-mce-bogus": "all"
                        }, ee), a.parentNode.insertBefore(l, a), t.setStart(a, 0), X.setRng(t), void Y.remove(l)
            }
            var j = {},
                Y = s.dom,
                X = s.selection,
                K = new t(Y),
                G = s.schema.isValidChild,
                J = Y.isBlock,
                Q = s.settings.forced_root_block,
                Z = Y.nodeIndex,
                ee = "\ufeff",
                te = /^(src|href|style)$/,
                ne = !1,
                re = !0,
                ie, oe, ae = Y.getContentEditable,
                se, le, ce = n.isBookmarkNode,
                ue = i.each,
                de = i.grep,
                fe = i.walk,
                he = i.extend;
            he(this, {
                get: m,
                register: g,
                unregister: v,
                apply: x,
                remove: w,
                toggle: E,
                match: _,
                matchAll: S,
                matchNode: N,
                canApply: k,
                formatChanged: T,
                getCssText: R
            }), h(), p(), s.on("BeforeGetContent", function(e) {
                le && "raw" != e.format && le()
            }), s.on("mouseup keydown", function(e) {
                se && se(e)
            })
        }
    }), r(Q, [], function() {
        var e = 0,
            t = 1,
            n = 2,
            r = function(r, i) {
                var o = r.length + i.length + 2,
                    a = new Array(o),
                    s = new Array(o),
                    l = function(e, t, n) {
                        return {
                            start: e,
                            end: t,
                            diag: n
                        }
                    },
                    c = function(o, a, s, l, u) {
                        var f = d(o, a, s, l);
                        if (null === f || f.start === a && f.diag === a - l || f.end === o && f.diag === o - s)
                            for (var h = o, p = s; h < a || p < l;) h < a && p < l && r[h] === i[p] ? (u.push([e, r[h]]), ++h, ++p) : a - o > l - s ? (u.push([n, r[h]]), ++h) : (u.push([t, i[p]]), ++p);
                        else {
                            c(o, f.start, s, f.start - f.diag, u);
                            for (var m = f.start; m < f.end; ++m) u.push([e, r[m]]);
                            c(f.end, a, f.end - f.diag, l, u)
                        }
                    },
                    u = function(e, t, n, o) {
                        for (var a = e; a - t < o && a < n && r[a] === i[a - t];) ++a;
                        return l(e, a, t)
                    },
                    d = function(e, t, n, o) {
                        var l = t - e,
                            c = o - n;
                        if (0 === l || 0 === c) return null;
                        var d = l - c,
                            f = c + l,
                            h = (f % 2 === 0 ? f : f + 1) / 2;
                        a[1 + h] = e, s[1 + h] = t + 1;
                        for (var p = 0; p <= h; ++p) {
                            for (var m = -p; m <= p; m += 2) {
                                var g = m + h;
                                m === -p || m != p && a[g - 1] < a[g + 1] ? a[g] = a[g + 1] : a[g] = a[g - 1] + 1;
                                for (var v = a[g], y = v - e + n - m; v < t && y < o && r[v] === i[y];) a[g] = ++v, ++y;
                                if (d % 2 != 0 && d - p <= m && m <= d + p && s[g - d] <= a[g]) return u(s[g - d], m + e - n, t, o)
                            }
                            for (m = d - p; m <= d + p; m += 2) {
                                for (g = m + h - d, m === d - p || m != d + p && s[g + 1] <= s[g - 1] ? s[g] = s[g + 1] - 1 : s[g] = s[g - 1], v = s[g] - 1, y = v - e + n - m; v >= e && y >= n && r[v] === i[y];) s[g] = v--, y--;
                                if (d % 2 === 0 && -p <= m && m <= p && s[g] <= a[g + d]) return u(s[g], m + e - n, t, o)
                            }
                        }
                    },
                    f = [];
                return c(0, r.length, 0, i.length, f), f
            };
        return {
            KEEP: e,
            DELETE: n,
            INSERT: t,
            diff: r
        }
    }), r(Z, [p, C, Q], function(e, t, n) {
        var r = function(e) {
                return 1 === e.nodeType ? e.outerHTML : 3 === e.nodeType ? t.encodeRaw(e.data, !1) : 8 === e.nodeType ? "<!--" + e.data + "-->" : ""
            },
            i = function(e) {
                var t, n, r;
                for (r = document.createElement("div"), t = document.createDocumentFragment(), e && (r.innerHTML = e); n = r.firstChild;) t.appendChild(n);
                return t
            },
            o = function(e, t, n) {
                var r = i(t);
                if (e.hasChildNodes() && n < e.childNodes.length) {
                    var o = e.childNodes[n];
                    o.parentNode.insertBefore(r, o)
                } else e.appendChild(r)
            },
            a = function(e, t) {
                if (e.hasChildNodes() && t < e.childNodes.length) {
                    var n = e.childNodes[t];
                    n.parentNode.removeChild(n)
                }
            },
            s = function(t, r) {
                var i = 0;
                e.each(t, function(e) {
                    e[0] === n.KEEP ? i++ : e[0] === n.INSERT ? (o(r, e[1], i), i++) : e[0] === n.DELETE && a(r, i)
                })
            },
            l = function(t) {
                return e.map(t.childNodes, r)
            },
            c = function(t, i) {
                var o = e.map(i.childNodes, r);
                return s(n.diff(o, t), i), i
            };
        return {
            read: l,
            write: c
        }
    }), r(ee, [p, Z], function(e, t) {
        var n = function(e) {
                return e.indexOf("</iframe>") !== -1
            },
            r = function(e) {
                return {
                    type: "fragmented",
                    fragments: e,
                    content: "",
                    bookmark: null,
                    beforeBookmark: null
                }
            },
            i = function(e) {
                return {
                    type: "complete",
                    fragments: null,
                    content: e,
                    bookmark: null,
                    beforeBookmark: null
                }
            },
            o = function(o) {
                var a, s;
                return a = t.read(o.getBody()), s = e.map(a, function(e) {
                    return o.serializer.trimContent(e)
                }).join(""), n(s) ? r(a) : i(s)
            },
            a = function(e, n, r) {
                "fragmented" === n.type ? t.write(n.fragments, e.getBody()) : e.setContent(n.content, {
                    format: "raw"
                }), e.selection.moveToBookmark(r ? n.beforeBookmark : n.bookmark)
            },
            s = function(e) {
                return "fragmented" === e.type ? e.fragments.join("") : e.content
            },
            l = function(e, t) {
                return s(e) === s(t)
            };
        return {
            createFragmentedLevel: r,
            createCompleteLevel: i,
            createFromEditor: o,
            applyToEditor: a,
            isEq: l
        }
    }), r(te, [I, m, ee, d], function(e, t, n, r) {
        return function(e) {
            function i(t) {
                e.setDirty(t)
            }

            function o(e) {
                s.typing = !1, s.add({}, e)
            }

            function a() {
                s.typing && (s.typing = !1, s.add())
            }
            var s = this,
                l = 0,
                c = [],
                u, d, f = 0;
            return e.on("init", function() {
                s.add()
            }), e.on("BeforeExecCommand", function(e) {
                var t = e.command;
                "Undo" !== t && "Redo" !== t && "mceRepaint" !== t && (a(), s.beforeChange())
            }), e.on("ExecCommand", function(e) {
                var t = e.command;
                "Undo" !== t && "Redo" !== t && "mceRepaint" !== t && o(e)
            }), e.on("ObjectResizeStart Cut", function() {
                s.beforeChange()
            }), e.on("SaveContent ObjectResized blur", o), e.on("DragEnd", o), e.on("KeyUp", function(t) {
                var a = t.keyCode;
                t.isDefaultPrevented() || ((a >= 33 && a <= 36 || a >= 37 && a <= 40 || 45 === a || t.ctrlKey) && (o(), e.nodeChanged()), (46 === a || 8 === a || r.mac && (91 === a || 93 === a)) && e.nodeChanged(), d && s.typing && (e.isDirty() || (i(c[0] && !n.isEq(n.createFromEditor(e), c[0])), e.isDirty() && e.fire("change", {
                    level: c[0],
                    lastLevel: null
                })), e.fire("TypingUndo"), d = !1, e.nodeChanged()))
            }), e.on("KeyDown", function(e) {
                var t = e.keyCode;
                if (!e.isDefaultPrevented()) {
                    if (t >= 33 && t <= 36 || t >= 37 && t <= 40 || 45 === t) return void(s.typing && o(e));
                    var n = e.ctrlKey && !e.altKey || e.metaKey;
                    !(t < 16 || t > 20) || 224 === t || 91 === t || s.typing || n || (s.beforeChange(), s.typing = !0, s.add({}, e), d = !0)
                }
            }), e.on("MouseDown", function(e) {
                s.typing && o(e)
            }), e.addShortcut("meta+z", "", "Undo"), e.addShortcut("meta+y,meta+shift+z", "", "Redo"), e.on("AddUndo Undo Redo ClearUndos", function(t) {
                t.isDefaultPrevented() || e.nodeChanged()
            }), s = {
                data: c,
                typing: !1,
                beforeChange: function() {
                    f || (u = e.selection.getBookmark(2, !0))
                },
                add: function(r, o) {
                    var a, s = e.settings,
                        d, h;
                    if (h = n.createFromEditor(e), r = r || {}, r = t.extend(r, h), f || e.removed) return null;
                    if (d = c[l], e.fire("BeforeAddUndo", {
                            level: r,
                            lastLevel: d,
                            originalEvent: o
                        }).isDefaultPrevented()) return null;
                    if (d && n.isEq(d, r)) return null;
                    if (c[l] && (c[l].beforeBookmark = u), s.custom_undo_redo_levels && c.length > s.custom_undo_redo_levels) {
                        for (a = 0; a < c.length - 1; a++) c[a] = c[a + 1];
                        c.length--, l = c.length
                    }
                    r.bookmark = e.selection.getBookmark(2, !0), l < c.length - 1 && (c.length = l + 1), c.push(r), l = c.length - 1;
                    var p = {
                        level: r,
                        lastLevel: d,
                        originalEvent: o
                    };
                    return e.fire("AddUndo", p), l > 0 && (i(!0), e.fire("change", p)), r
                },
                undo: function() {
                    var t;
                    return s.typing && (s.add(), s.typing = !1), l > 0 && (t = c[--l], n.applyToEditor(e, t, !0), i(!0), e.fire("undo", {
                        level: t
                    })), t
                },
                redo: function() {
                    var t;
                    return l < c.length - 1 && (t = c[++l], n.applyToEditor(e, t, !1), i(!0), e.fire("redo", {
                        level: t
                    })), t
                },
                clear: function() {
                    c = [], l = 0, s.typing = !1, s.data = c, e.fire("ClearUndos")
                },
                hasUndo: function() {
                    return l > 0 || s.typing && c[0] && !n.isEq(n.createFromEditor(e), c[0])
                },
                hasRedo: function() {
                    return l < c.length - 1 && !s.typing
                },
                transact: function(e) {
                    a(), s.beforeChange();
                    try {
                        f++, e()
                    } finally {
                        f--
                    }
                    return s.add()
                },
                extra: function(t, r) {
                    var i, o;
                    s.transact(t) && (o = c[l].bookmark, i = c[l - 1], n.applyToEditor(e, i, !0), s.transact(r) && (c[l - 1].beforeBookmark = o))
                }
            }
        }
    }), r(ne, [y, T, k, d], function(e, t, n, r) {
        var i = r.ie && r.ie < 11;
        return function(o) {
            function a(a) {
                function p(e) {
                    return e && s.isBlock(e) && !/^(TD|TH|CAPTION|FORM)$/.test(e.nodeName) && !/^(fixed|absolute)/i.test(e.style.position) && "true" !== s.getContentEditable(e)
                }

                function m(e) {
                    return e && /^(TD|TH|CAPTION)$/.test(e.nodeName)
                }

                function g(e) {
                    var t;
                    s.isBlock(e) && (t = l.getRng(), e.appendChild(s.create("span", null, "\xa0")), l.select(e), e.lastChild.outerHTML = "", l.setRng(t))
                }

                function v(e) {
                    var t = e,
                        n = [],
                        r;
                    if (t) {
                        for (; t = t.firstChild;) {
                            if (s.isBlock(t)) return;
                            1 != t.nodeType || f[t.nodeName.toLowerCase()] || n.push(t)
                        }
                        for (r = n.length; r--;) t = n[r], !t.hasChildNodes() || t.firstChild == t.lastChild && "" === t.firstChild.nodeValue ? s.remove(t) : "A" == t.nodeName && " " === (t.innerText || t.textContent) && s.remove(t)
                    }
                }

                function y(t) {
                    function n(e) {
                        for (; e;) {
                            if (1 == e.nodeType || 3 == e.nodeType && e.data && /[\r\n\s]/.test(e.data)) return e;
                            e = e.nextSibling
                        }
                    }
                    var i, o, a, c = t,
                        u;
                    if (t) {
                        if (r.ie && r.ie < 9 && P && P.firstChild && P.firstChild == P.lastChild && "BR" == P.firstChild.tagName && s.remove(P.firstChild), /^(LI|DT|DD)$/.test(t.nodeName)) {
                            var d = n(t.firstChild);
                            d && /^(UL|OL|DL)$/.test(d.nodeName) && t.insertBefore(s.doc.createTextNode("\xa0"), t.firstChild)
                        }
                        if (a = s.createRng(), r.ie || t.normalize(), t.hasChildNodes()) {
                            for (i = new e(t, t); o = i.current();) {
                                if (3 == o.nodeType) {
                                    a.setStart(o, 0), a.setEnd(o, 0);
                                    break
                                }
                                if (h[o.nodeName.toLowerCase()]) {
                                    a.setStartBefore(o), a.setEndBefore(o);
                                    break
                                }
                                c = o, o = i.next()
                            }
                            o || (a.setStart(c, 0), a.setEnd(c, 0))
                        } else "BR" == t.nodeName ? t.nextSibling && s.isBlock(t.nextSibling) ? ((!O || O < 9) && (u = s.create("br"), t.parentNode.insertBefore(u, t)), a.setStartBefore(t), a.setEndBefore(t)) : (a.setStartAfter(t), a.setEndAfter(t)) : (a.setStart(t, 0), a.setEnd(t, 0));
                        l.setRng(a), s.remove(u), l.scrollIntoView(t)
                    }
                }

                function b(e) {
                    var t = c.forced_root_block;
                    t && t.toLowerCase() === e.tagName.toLowerCase() && s.setAttribs(e, c.forced_root_block_attrs)
                }

                function C(e) {
                    e.innerHTML = i ? "" : '<br data-mce-bogus="1">'
                }

                function x(e) {
                    var t = L,
                        n, r, o, a = d.getTextInlineElements();
                    if (e || "TABLE" == U ? (n = s.create(e || V), b(n)) : n = P.cloneNode(!1), o = n, c.keep_styles !== !1)
                        do
                            if (a[t.nodeName]) {
                                if ("_mce_caret" == t.id) continue;
                                r = t.cloneNode(!1), s.setAttrib(r, "id", ""), n.hasChildNodes() ? (r.appendChild(n.firstChild), n.appendChild(r)) : (o = r, n.appendChild(r))
                            }
                    while ((t = t.parentNode) && t != D);
                    return i || (o.innerHTML = '<br data-mce-bogus="1">'), n
                }

                function w(t) {
                    var n, r, i;
                    if (3 == L.nodeType && (t ? M > 0 : M < L.nodeValue.length)) return !1;
                    if (L.parentNode == P && $ && !t) return !0;
                    if (t && 1 == L.nodeType && L == P.firstChild) return !0;
                    if ("TABLE" === L.nodeName || L.previousSibling && "TABLE" == L.previousSibling.nodeName) return $ && !t || !$ && t;
                    for (n = new e(L, P), 3 == L.nodeType && (t && 0 === M ? n.prev() : t || M != L.nodeValue.length || n.next()); r = n.current();) {
                        if (1 === r.nodeType) {
                            if (!r.getAttribute("data-mce-bogus") && (i = r.nodeName.toLowerCase(), f[i] && "br" !== i)) return !1
                        } else if (3 === r.nodeType && !/^[ \t\r\n]*$/.test(r.nodeValue)) return !1;
                        t ? n.prev() : n.next()
                    }
                    return !0
                }

                function E(e, t) {
                    var n, r, i, a, l, c, u = V || "P";
                    if (r = s.getParent(e, s.isBlock), !r || !p(r)) {
                        if (r = r || D, c = r == o.getBody() || m(r) ? r.nodeName.toLowerCase() : r.parentNode.nodeName.toLowerCase(), !r.hasChildNodes()) return n = s.create(u), b(n), r.appendChild(n), A.setStart(n, 0), A.setEnd(n, 0), n;
                        for (a = e; a.parentNode != r;) a = a.parentNode;
                        for (; a && !s.isBlock(a);) i = a, a = a.previousSibling;
                        if (i && d.isValidChild(c, u.toLowerCase())) {
                            for (n = s.create(u), b(n), i.parentNode.insertBefore(n, i), a = i; a && !s.isBlock(a);) l = a.nextSibling, n.appendChild(a), a = l;
                            A.setStart(e, t), A.setEnd(e, t)
                        }
                    }
                    return e
                }

                function N() {
                    function e(e) {
                        for (var t = z[e ? "firstChild" : "lastChild"]; t && 1 != t.nodeType;) t = t[e ? "nextSibling" : "previousSibling"];
                        return t === P
                    }

                    function t() {
                        var e = z.parentNode;
                        return /^(LI|DT|DD)$/.test(e.nodeName) ? e : z
                    }
                    if (z != o.getBody()) {
                        var n = z.parentNode.nodeName;
                        /^(OL|UL|LI)$/.test(n) && (V = "LI"), I = V ? x(V) : s.create("BR"), e(!0) && e() ? "LI" == n ? s.insertAfter(I, t()) : s.replace(I, z) : e(!0) ? "LI" == n ? (s.insertAfter(I, t()), I.appendChild(s.doc.createTextNode(" ")), I.appendChild(z)) : z.parentNode.insertBefore(I, z) : e() ? (s.insertAfter(I, t()), g(I)) : (z = t(), B = A.cloneRange(), B.setStartAfter(P), B.setEndAfter(z), F = B.extractContents(), "LI" == V && "LI" == F.firstChild.nodeName ? (I = F.firstChild, s.insertAfter(F, z)) : (s.insertAfter(F, z), s.insertAfter(I, z))), s.remove(P), y(I), u.add()
                    }
                }

                function _() {
                    o.execCommand("InsertLineBreak", !1, a)
                }

                function S(e) {
                    do 3 === e.nodeType && (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")), e = e.firstChild; while (e)
                }

                function k(e) {
                    var t = s.getRoot(),
                        n, r;
                    for (n = e; n !== t && "false" !== s.getContentEditable(n);) "true" === s.getContentEditable(n) && (r = n), n = n.parentNode;
                    return n !== t ? r : t
                }

                function T(e) {
                    var t;
                    i || (e.normalize(), t = e.lastChild, t && !/^(left|right)$/gi.test(s.getStyle(t, "float", !0)) || s.add(e, "br"))
                }

                function R() {
                    I = /^(H[1-6]|PRE|FIGURE)$/.test(U) && "HGROUP" != W ? x(V) : x(), c.end_container_on_empty_block && p(z) && s.isEmpty(P) ? I = s.split(z, P) : s.insertAfter(I, P), y(I)
                }
                var A, B, D, L, M, P, O, H, I, F, z, U, W, V, $;
                if (A = l.getRng(!0), !a.isDefaultPrevented()) {
                    if (!A.collapsed) return void o.execCommand("Delete");
                    if (new t(s).normalize(A), L = A.startContainer, M = A.startOffset, V = (c.force_p_newlines ? "p" : "") || c.forced_root_block, V = V ? V.toUpperCase() : "", O = s.doc.documentMode, H = a.shiftKey, 1 == L.nodeType && L.hasChildNodes() && ($ = M > L.childNodes.length - 1, L = L.childNodes[Math.min(M, L.childNodes.length - 1)] || L, M = $ && 3 == L.nodeType ? L.nodeValue.length : 0), D = k(L)) {
                        if (u.beforeChange(), !s.isBlock(D) && D != s.getRoot()) return void(V && !H || _());
                        if ((V && !H || !V && H) && (L = E(L, M)), P = s.getParent(L, s.isBlock), z = P ? s.getParent(P.parentNode, s.isBlock) : null, U = P ? P.nodeName.toUpperCase() : "", W = z ? z.nodeName.toUpperCase() : "", "LI" != W || a.ctrlKey || (P = z, U = W), o.undoManager.typing && (o.undoManager.typing = !1, o.undoManager.add()), /^(LI|DT|DD)$/.test(U)) {
                            if (!V && H) return void _();
                            if (s.isEmpty(P)) return void N()
                        }
                        if ("PRE" == U && c.br_in_pre !== !1) {
                            if (!H) return void _()
                        } else if (!V && !H && "LI" != U || V && H) return void _();
                        V && P === o.getBody() || (V = V || "P", n.isCaretContainerBlock(P) ? I = n.showCaretContainerBlock(P) : w() ? R() : w(!0) ? (I = P.parentNode.insertBefore(x(), P), g(I), y(P)) : (B = A.cloneRange(), B.setEndAfter(P), F = B.extractContents(), S(F), I = F.firstChild, s.insertAfter(F, P), v(I), T(P), s.isEmpty(P) && C(P), I.normalize(), s.isEmpty(I) ? (s.remove(I), R()) : y(I)), s.setAttrib(I, "id", ""), o.fire("NewBlock", {
                            newBlock: I
                        }), u.typing = !1, u.add())
                    }
                }
            }
            var s = o.dom,
                l = o.selection,
                c = o.settings,
                u = o.undoManager,
                d = o.schema,
                f = d.getNonEmptyElements(),
                h = d.getMoveCaretBeforeOnEnterElements();
            o.on("keydown", function(e) {
                13 == e.keyCode && a(e) !== !1 && e.preventDefault()
            })
        }
    }), r(re, [], function() {
        return function(e) {
            function t() {
                var t = i.getStart(),
                    s = e.getBody(),
                    l, c, u, d, f, h, p, m = -16777215,
                    g, v, y, b, C;
                if (C = n.forced_root_block, t && 1 === t.nodeType && C) {
                    for (; t && t != s;) {
                        if (a[t.nodeName]) return;
                        t = t.parentNode
                    }
                    if (l = i.getRng(), l.setStart) {
                        c = l.startContainer, u = l.startOffset, d = l.endContainer, f = l.endOffset;
                        try {
                            v = e.getDoc().activeElement === s
                        } catch (x) {}
                    } else l.item && (t = l.item(0), l = e.getDoc().body.createTextRange(), l.moveToElementText(t)), v = l.parentElement().ownerDocument === e.getDoc(), y = l.duplicate(), y.collapse(!0), u = y.move("character", m) * -1, y.collapsed || (y = l.duplicate(), y.collapse(!1), f = y.move("character", m) * -1 - u);
                    for (t = s.firstChild, b = s.nodeName.toLowerCase(); t;)
                        if ((3 === t.nodeType || 1 == t.nodeType && !a[t.nodeName]) && o.isValidChild(b, C.toLowerCase())) {
                            if (3 === t.nodeType && 0 === t.nodeValue.length) {
                                p = t, t = t.nextSibling, r.remove(p);
                                continue
                            }
                            h || (h = r.create(C, e.settings.forced_root_block_attrs), t.parentNode.insertBefore(h, t), g = !0), p = t, t = t.nextSibling, h.appendChild(p)
                        } else h = null, t = t.nextSibling;
                    if (g && v) {
                        if (l.setStart) l.setStart(c, u), l.setEnd(d, f), i.setRng(l);
                        else try {
                            l = e.getDoc().body.createTextRange(), l.moveToElementText(s), l.collapse(!0), l.moveStart("character", u), f > 0 && l.moveEnd("character", f), l.select()
                        } catch (x) {}
                        e.nodeChanged()
                    }
                }
            }
            var n = e.settings,
                r = e.dom,
                i = e.selection,
                o = e.schema,
                a = o.getBlockElements();
            n.forced_root_block && e.on("NodeChange", t)
        }
    }), r(ie, [z, y, _, $, k, U], function(e, t, n, r, i, o) {
        function a(e) {
            return e > 0
        }

        function s(e) {
            return e < 0
        }

        function l(e, t) {
            for (var n; n = e(t);)
                if (!N(n)) return n;
            return null
        }

        function c(e, n, r, i, o) {
            var c = new t(e, i);
            if (s(n)) {
                if ((x(e) || N(e)) && (e = l(c.prev, !0), r(e))) return e;
                for (; e = l(c.prev, o);)
                    if (r(e)) return e
            }
            if (a(n)) {
                if ((x(e) || N(e)) && (e = l(c.next, !0), r(e))) return e;
                for (; e = l(c.next, o);)
                    if (r(e)) return e
            }
            return null
        }

        function u(e, t) {
            for (e = e.parentNode; e && e != t; e = e.parentNode)
                if (C(e)) return e;
            return t
        }

        function d(e, t) {
            for (; e && e != t;) {
                if (w(e)) return e;
                e = e.parentNode
            }
            return null
        }

        function f(e, t, n) {
            return d(e.container(), n) == d(t.container(), n)
        }

        function h(e, t, n) {
            return u(e.container(), n) == u(t.container(), n)
        }

        function p(e, t) {
            var n, r;
            return t ? (n = t.container(), r = t.offset(), S(n) ? n.childNodes[r + e] : null) : null
        }

        function m(e, t) {
            var n = t.ownerDocument.createRange();
            return e ? (n.setStartBefore(t), n.setEndBefore(t)) : (n.setStartAfter(t), n.setEndAfter(t)), n
        }

        function g(e, t, n) {
            return d(t, e) == d(n, e)
        }

        function v(e, t, n) {
            var r, i;
            for (i = e ? "previousSibling" : "nextSibling"; n && n != t;) {
                if (r = n[i], E(r) && (r = r[i]), x(r)) {
                    if (g(t, r, n)) return r;
                    break
                }
                if (k(r)) break;
                n = n.parentNode
            }
            return null
        }

        function y(e, t, r) {
            var o, a, s, l, c = _(v, !0, t),
                u = _(v, !1, t);
            if (a = r.startContainer, s = r.startOffset, i.isCaretContainerBlock(a)) {
                if (S(a) || (a = a.parentNode), l = a.getAttribute("data-mce-caret"), "before" == l && (o = a.nextSibling, x(o))) return T(o);
                if ("after" == l && (o = a.previousSibling, x(o))) return R(o)
            }
            if (!r.collapsed) return r;
            if (n.isText(a)) {
                if (E(a)) {
                    if (1 === e) {
                        if (o = u(a)) return T(o);
                        if (o = c(a)) return R(o)
                    }
                    if (e === -1) {
                        if (o = c(a)) return R(o);
                        if (o = u(a)) return T(o)
                    }
                    return r
                }
                if (i.endsWithCaretContainer(a) && s >= a.data.length - 1) return 1 === e && (o = u(a)) ? T(o) : r;
                if (i.startsWithCaretContainer(a) && s <= 1) return e === -1 && (o = c(a)) ? R(o) : r;
                if (s === a.data.length) return o = u(a), o ? T(o) : r;
                if (0 === s) return o = c(a), o ? R(o) : r
            }
            return r
        }

        function b(e, t) {
            return x(p(e, t))
        }
        var C = n.isContentEditableTrue,
            x = n.isContentEditableFalse,
            w = n.matchStyleValues("display", "block table table-cell table-caption"),
            E = i.isCaretContainer,
            N = i.isCaretContainerBlock,
            _ = e.curry,
            S = n.isElement,
            k = o.isCaretCandidate,
            T = _(m, !0),
            R = _(m, !1);
        return {
            isForwards: a,
            isBackwards: s,
            findNode: c,
            getEditingHost: u,
            getParentBlock: d,
            isInSameBlock: f,
            isInSameEditingHost: h,
            isBeforeContentEditableFalse: _(b, 0),
            isAfterContentEditableFalse: _(b, -1),
            normalizeRange: y
        }
    }), r(oe, [_, U, $, ie, p, z], function(e, t, n, r, i, o) {
        function a(e, t) {
            for (var n = []; e && e != t;) n.push(e), e = e.parentNode;
            return n
        }

        function s(e, t) {
            return e.hasChildNodes() && t < e.childNodes.length ? e.childNodes[t] : null
        }

        function l(e, t) {
            if (m(e)) {
                if (v(t.previousSibling) && !f(t.previousSibling)) return n.before(t);
                if (f(t)) return n(t, 0)
            }
            if (g(e)) {
                if (v(t.nextSibling) && !f(t.nextSibling)) return n.after(t);
                if (f(t)) return n(t, t.data.length)
            }
            return g(e) ? p(t) ? n.before(t) : n.after(t) : n.before(t)
        }

        function c(t, i) {
            var o;
            return !!e.isBr(t) && (o = u(1, n.after(t), i), !!o && !r.isInSameBlock(n.before(t), n.before(o), i))
        }

        function u(e, t, p) {
            var C, x, w, E, N, _, S;
            if (!h(p) || !t) return null;
            if (S = t, C = S.container(), x = S.offset(), f(C)) {
                if (g(e) && x > 0) return n(C, --x);
                if (m(e) && x < C.length) return n(C, ++x);
                w = C
            } else {
                if (g(e) && x > 0 && (E = s(C, x - 1), v(E))) return !y(E) && (N = r.findNode(E, e, b, E)) ? f(N) ? n(N, N.data.length) : n.after(N) : f(E) ? n(E, E.data.length) : n.before(E);
                if (m(e) && x < C.childNodes.length && (E = s(C, x), v(E))) return c(E, p) ? u(e, n.after(E), p) : !y(E) && (N = r.findNode(E, e, b, E)) ? f(N) ? n(N, 0) : n.before(N) : f(E) ? n(E, 0) : n.after(E);
                w = S.getNode()
            }
            return (m(e) && S.isAtEnd() || g(e) && S.isAtStart()) && (w = r.findNode(w, e, o.constant(!0), p, !0), b(w)) ? l(e, w) : (E = r.findNode(w, e, b, p), _ = i.last(i.filter(a(C, p), d)), !_ || E && _.contains(E) ? E ? l(e, E) : null : S = m(e) ? n.after(_) : n.before(_))
        }
        var d = e.isContentEditableFalse,
            f = e.isText,
            h = e.isElement,
            p = e.isBr,
            m = r.isForwards,
            g = r.isBackwards,
            v = t.isCaretCandidate,
            y = t.isAtomic,
            b = t.isEditableCaretCandidate;
        return function(e) {
            return {
                next: function(t) {
                    return u(1, t, e)
                },
                prev: function(t) {
                    return u(-1, t, e)
                }
            }
        }
    }), r(ae, [m, oe, $], function(e, t, n) {
        var r = function(e) {
                var t = e.firstChild,
                    n = e.lastChild;
                return t && "meta" === t.name && (t = t.next), n && "mce_marker" === n.attr("id") && (n = n.prev), !(!t || t !== n) && ("ul" === t.name || "ol" === t.name)
            },
            i = function(e) {
                var t = e.firstChild,
                    n = e.lastChild;
                return t && "META" === t.nodeName && t.parentNode.removeChild(t), n && "mce_marker" === n.id && n.parentNode.removeChild(n), e
            },
            o = function(e, t, n) {
                var r = t.serialize(n),
                    o = e.createFragment(r);
                return i(o)
            },
            a = function(t) {
                return e.grep(t.childNodes, function(e) {
                    return "LI" === e.nodeName
                })
            },
            s = function(e) {
                return !e.firstChild
            },
            l = function(e) {
                return e.length > 0 && s(e[e.length - 1]) ? e.slice(0, -1) : e
            },
            c = function(e, t) {
                var n = e.getParent(t, e.isBlock);
                return n && "LI" === n.nodeName ? n : null
            },
            u = function(e, t) {
                return !!c(e, t)
            },
            d = function(e, t) {
                var n = t.cloneRange(),
                    r = t.cloneRange();
                return n.setStartBefore(e), r.setEndAfter(e), [n.cloneContents(), r.cloneContents()]
            },
            f = function(e, r) {
                var i = n.before(e),
                    o = new t(r),
                    a = o.next(i);
                return a ? a.toRange() : null
            },
            h = function(e, r) {
                var i = n.after(e),
                    o = new t(r),
                    a = o.prev(i);
                return a ? a.toRange() : null
            },
            p = function(t, n, r, i) {
                var o = d(t, i),
                    a = t.parentNode;
                return a.insertBefore(o[0], t), e.each(n, function(e) {
                    a.insertBefore(e, t)
                }), a.insertBefore(o[1], t), a.removeChild(t), h(n[n.length - 1], r)
            },
            m = function(t, n, r) {
                var i = t.parentNode;
                return e.each(n, function(e) {
                    i.insertBefore(e, t)
                }), f(t, r)
            },
            g = function(e, t, n, r) {
                return r.insertAfter(t.reverse(), e), h(t[0], n)
            },
            v = function(e, r, i, s) {
                var u = o(r, e, s),
                    d = c(r, i.startContainer),
                    f = l(a(u.firstChild)),
                    h = 1,
                    v = 2,
                    y = r.getRoot(),
                    b = function(e) {
                        var o = n.fromRangeStart(i),
                            a = new t(r.getRoot()),
                            s = e === h ? a.prev(o) : a.next(o);
                        return !s || c(r, s.getNode()) !== d
                    };
                return b(h) ? m(d, f, y) : b(v) ? g(d, f, y, r) : p(d, f, y, i)
            };
        return {
            isListFragment: r,
            insertAtCaret: v,
            isParentBlockLi: u,
            trimListItems: l,
            listItems: a
        }
    }), r(se, [d, m, P, oe, $, X, _, ae], function(e, t, n, r, i, o, a, s) {
        var l = a.matchNodeNames("td th"),
            c = function(a, c, u) {
                function d(e) {
                    function t(e) {
                        return r[e] && 3 == r[e].nodeType
                    }
                    var n, r, i;
                    return n = D.getRng(!0), r = n.startContainer, i = n.startOffset, 3 == r.nodeType && (i > 0 ? e = e.replace(/^&nbsp;/, " ") : t("previousSibling") || (e = e.replace(/^ /, "&nbsp;")), i < r.length ? e = e.replace(/&nbsp;(<br>|)$/, " ") : t("nextSibling") || (e = e.replace(/(&nbsp;| )(<br>|)$/, "&nbsp;"))), e
                }

                function f() {
                    var e, t, n;
                    e = D.getRng(!0), t = e.startContainer, n = e.startOffset, 3 == t.nodeType && e.collapsed && ("\xa0" === t.data[n] ? (t.deleteData(n, 1), /[\u00a0| ]$/.test(c) || (c += " ")) : "\xa0" === t.data[n - 1] && (t.deleteData(n - 1, 1), /[\u00a0| ]$/.test(c) || (c = " " + c)))
                }

                function h() {
                    if (A) {
                        var e = a.getBody(),
                            n = new o(L);
                        t.each(L.select("*[data-mce-fragment]"), function(t) {
                            for (var r = t.parentNode; r && r != e; r = r.parentNode) B[t.nodeName.toLowerCase()] && n.compare(r, t) && L.remove(t, !0)
                        })
                    }
                }

                function p(e) {
                    for (var t = e; t = t.walk();) 1 === t.type && t.attr("data-mce-fragment", "1")
                }

                function m(e) {
                    t.each(e.getElementsByTagName("*"), function(e) {
                        e.removeAttribute("data-mce-fragment")
                    })
                }

                function g(e) {
                    return !!e.getAttribute("data-mce-fragment")
                }

                function v(e) {
                    return e && !a.schema.getShortEndedElements()[e.nodeName]
                }

                function y(t) {
                    function n(e) {
                        for (var t = a.getBody(); e && e !== t; e = e.parentNode)
                            if ("false" === a.dom.getContentEditable(e)) return e;
                        return null
                    }

                    function o(e) {
                        var t = i.fromRangeStart(e),
                            n = new r(a.getBody());
                        if (t = n.next(t)) return t.toRange()
                    }
                    var s, c, u;
                    if (t) {
                        if (D.scrollIntoView(t), s = n(t)) return L.remove(t), void D.select(s);
                        S = L.createRng(), k = t.previousSibling, k && 3 == k.nodeType ? (S.setStart(k, k.nodeValue.length), e.ie || (T = t.nextSibling, T && 3 == T.nodeType && (k.appendData(T.data), T.parentNode.removeChild(T)))) : (S.setStartBefore(t), S.setEndBefore(t)), c = L.getParent(t, L.isBlock), L.remove(t), c && L.isEmpty(c) && (a.$(c).empty(), S.setStart(c, 0), S.setEnd(c, 0), l(c) || g(c) || !(u = o(S)) ? L.add(c, L.create("br", {
                            "data-mce-bogus": "1"
                        })) : (S = u, L.remove(c))), D.setRng(S)
                    }
                }
                var b, C, x, w, E, N, _, S, k, T, R, A, B = a.schema.getTextInlineElements(),
                    D = a.selection,
                    L = a.dom;
                /^ | $/.test(c) && (c = d(c)), b = a.parser, A = u.merge, C = new n({
                    validate: a.settings.validate
                }, a.schema), R = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#x200B;</span>', N = {
                    content: c,
                    format: "html",
                    selection: !0
                }, a.fire("BeforeSetContent", N), c = N.content, c.indexOf("{$caret}") == -1 && (c += "{$caret}"), c = c.replace(/\{\$caret\}/, R), S = D.getRng();
                var M = S.startContainer || (S.parentElement ? S.parentElement() : null),
                    P = a.getBody();
                M === P && D.isCollapsed() && L.isBlock(P.firstChild) && v(P.firstChild) && L.isEmpty(P.firstChild) && (S = L.createRng(), S.setStart(P.firstChild, 0), S.setEnd(P.firstChild, 0), D.setRng(S)), D.isCollapsed() || (a.selection.setRng(a.selection.getRng()), a.getDoc().execCommand("Delete", !1, null), f()), x = D.getNode();
                var O = {
                    context: x.nodeName.toLowerCase(),
                    data: u.data
                };
                if (E = b.parse(c, O), u.paste === !0 && s.isListFragment(E) && s.isParentBlockLi(L, x)) return S = s.insertAtCaret(C, L, a.selection.getRng(!0), E), a.selection.setRng(S), void a.fire("SetContent", N);
                if (p(E), k = E.lastChild, "mce_marker" == k.attr("id"))
                    for (_ = k, k = k.prev; k; k = k.walk(!0))
                        if (3 == k.type || !L.isBlock(k.name)) {
                            a.schema.isValidChild(k.parent.name, "span") && k.parent.insert(_, k, "br" === k.name);
                            break
                        }
                if (a._selectionOverrides.showBlockCaretContainer(x), O.invalid) {
                    for (D.setContent(R), x = D.getNode(), w = a.getBody(), 9 == x.nodeType ? x = k = w : k = x; k !== w;) x = k, k = k.parentNode;
                    c = x == w ? w.innerHTML : L.getOuterHTML(x), c = C.serialize(b.parse(c.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i, function() {
                        return C.serialize(E)
                    }))), x == w ? L.setHTML(w, c) : L.setOuterHTML(x, c)
                } else c = C.serialize(E), k = x.firstChild, T = x.lastChild, !k || k === T && "BR" === k.nodeName ? L.setHTML(x, c) : D.setContent(c);
                h(), y(L.get("mce_marker")), m(a.getBody()), a.fire("SetContent", N), a.addVisual()
            },
            u = function(e) {
                var n;
                return "string" != typeof e ? (n = t.extend({
                    paste: e.paste,
                    data: {
                        paste: e.paste
                    }
                }, e), {
                    content: e.content,
                    details: n
                }) : {
                    content: e,
                    details: {}
                }
            },
            d = function(e, t) {
                var n = u(t);
                c(e, n.content, n.details)
            };
        return {
            insertAtCaret: d
        }
    }), r(le, [d, m, T, y, se], function(e, n, r, i, o) {
        var a = n.each,
            s = n.extend,
            l = n.map,
            c = n.inArray,
            u = n.explode,
            d = e.ie && e.ie < 11,
            f = !0,
            h = !1;
        return function(n) {
            function p(e, t, r, i) {
                var o, s, l = 0;
                if (/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(e) || i && i.skip_focus || n.focus(), i = n.fire("BeforeExecCommand", {
                        command: e,
                        ui: t,
                        value: r
                    }), i.isDefaultPrevented()) return !1;
                if (s = e.toLowerCase(), o = B.exec[s]) return o(s, t, r), n.fire("ExecCommand", {
                    command: e,
                    ui: t,
                    value: r
                }), !0;
                if (a(n.plugins, function(i) {
                        if (i.execCommand && i.execCommand(e, t, r)) return n.fire("ExecCommand", {
                            command: e,
                            ui: t,
                            value: r
                        }), l = !0, !1
                    }), l) return l;
                if (n.theme && n.theme.execCommand && n.theme.execCommand(e, t, r)) return n.fire("ExecCommand", {
                    command: e,
                    ui: t,
                    value: r
                }), !0;
                try {
                    l = n.getDoc().execCommand(e, t, r)
                } catch (c) {}
                return !!l && (n.fire("ExecCommand", {
                    command: e,
                    ui: t,
                    value: r
                }), !0)
            }

            function m(e) {
                var t;
                if (!n.quirks.isHidden()) {
                    if (e = e.toLowerCase(), t = B.state[e]) return t(e);
                    try {
                        return n.getDoc().queryCommandState(e)
                    } catch (r) {}
                    return !1
                }
            }

            function g(e) {
                var t;
                if (!n.quirks.isHidden()) {
                    if (e = e.toLowerCase(), t = B.value[e]) return t(e);
                    try {
                        return n.getDoc().queryCommandValue(e)
                    } catch (r) {}
                }
            }

            function v(e, t) {
                t = t || "exec", a(e, function(e, n) {
                    a(n.toLowerCase().split(","), function(n) {
                        B[t][n] = e
                    })
                })
            }

            function y(e, t, r) {
                e = e.toLowerCase(), B.exec[e] = function(e, i, o, a) {
                    return t.call(r || n, i, o, a)
                }
            }

            function b(e) {
                if (e = e.toLowerCase(), B.exec[e]) return !0;
                try {
                    return n.getDoc().queryCommandSupported(e)
                } catch (t) {}
                return !1
            }

            function C(e, t, r) {
                e = e.toLowerCase(), B.state[e] = function() {
                    return t.call(r || n)
                }
            }

            function x(e, t, r) {
                e = e.toLowerCase(), B.value[e] = function() {
                    return t.call(r || n)
                }
            }

            function w(e) {
                return e = e.toLowerCase(), !!B.exec[e]
            }

            function E(e, r, i) {
                return r === t && (r = h), i === t && (i = null), n.getDoc().execCommand(e, r, i)
            }

            function N(e) {
                return A.match(e)
            }

            function _(e, r) {
                A.toggle(e, r ? {
                    value: r
                } : t), n.nodeChanged()
            }

            function S(e) {
                L = R.getBookmark(e)
            }

            function k() {
                R.moveToBookmark(L)
            }
            var T, R, A, B = {
                    state: {},
                    exec: {},
                    value: {}
                },
                D = n.settings,
                L;
            n.on("PreInit", function() {
                T = n.dom, R = n.selection, D = n.settings, A = n.formatter
            }), s(this, {
                execCommand: p,
                queryCommandState: m,
                queryCommandValue: g,
                queryCommandSupported: b,
                addCommands: v,
                addCommand: y,
                addQueryStateHandler: C,
                addQueryValueHandler: x,
                hasCustomCommand: w
            }), v({
                "mceResetDesignMode,mceBeginUndoLevel": function() {},
                "mceEndUndoLevel,mceAddUndoLevel": function() {
                    n.undoManager.add()
                },
                "Cut,Copy,Paste": function(t) {
                    var r = n.getDoc(),
                        i;
                    try {
                        E(t)
                    } catch (o) {
                        i = f
                    }
                    if ("paste" !== t || r.queryCommandEnabled(t) || (i = !0), i || !r.queryCommandSupported(t)) {
                        var a = n.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");
                        e.mac && (a = a.replace(/Ctrl\+/g, "\u2318+")), n.notificationManager.open({
                            text: a,
                            type: "error"
                        })
                    }
                },
                unlink: function() {
                    if (R.isCollapsed()) {
                        var e = n.dom.getParent(n.selection.getStart(), "a");
                        return void(e && n.dom.remove(e, !0))
                    }
                    A.remove("link")
                },
                "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone": function(e) {
                    var t = e.substring(7);
                    "full" == t && (t = "justify"), a("left,center,right,justify".split(","), function(e) {
                        t != e && A.remove("align" + e)
                    }), "none" != t && _("align" + t)
                },
                "InsertUnorderedList,InsertOrderedList": function(e) {
                    var t, n;
                    E(e), t = T.getParent(R.getNode(), "ol,ul"), t && (n = t.parentNode, /^(H[1-6]|P|ADDRESS|PRE)$/.test(n.nodeName) && (S(), T.split(n, t), k()))
                },
                "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(e) {
                    _(e)
                },
                "ForeColor,HiliteColor,FontName": function(e, t, n) {
                    _(e, n)
                },
                FontSize: function(e, t, n) {
                    var r, i;
                    n >= 1 && n <= 7 && (i = u(D.font_size_style_values), r = u(D.font_size_classes), n = r ? r[n - 1] || n : i[n - 1] || n), _(e, n)
                },
                RemoveFormat: function(e) {
                    A.remove(e)
                },
                mceBlockQuote: function() {
                    _("blockquote")
                },
                FormatBlock: function(e, t, n) {
                    return _(n || "p")
                },
                mceCleanup: function() {
                    var e = R.getBookmark();
                    n.setContent(n.getContent({
                        cleanup: f
                    }), {
                        cleanup: f
                    }), R.moveToBookmark(e)
                },
                mceRemoveNode: function(e, t, r) {
                    var i = r || R.getNode();
                    i != n.getBody() && (S(), n.dom.remove(i, f), k())
                },
                mceSelectNodeDepth: function(e, t, r) {
                    var i = 0;
                    T.getParent(R.getNode(), function(e) {
                        if (1 == e.nodeType && i++ == r) return R.select(e), h
                    }, n.getBody())
                },
                mceSelectNode: function(e, t, n) {
                    R.select(n)
                },
                mceInsertContent: function(e, t, r) {
                    o.insertAtCaret(n, r)
                },
                mceInsertRawHTML: function(e, t, r) {
                    R.setContent("tiny_mce_marker"), n.setContent(n.getContent().replace(/tiny_mce_marker/g, function() {
                        return r
                    }))
                },
                mceToggleFormat: function(e, t, n) {
                    _(n)
                },
                mceSetContent: function(e, t, r) {
                    n.setContent(r)
                },
                "Indent,Outdent": function(e) {
                    var t, r, i;
                    t = D.indentation, r = /[a-z%]+$/i.exec(t), t = parseInt(t, 10), m("InsertUnorderedList") || m("InsertOrderedList") ? E(e) : (D.forced_root_block || T.getParent(R.getNode(), T.isBlock) || A.apply("div"), a(R.getSelectedBlocks(), function(o) {
                        if ("false" !== T.getContentEditable(o) && "LI" !== o.nodeName) {
                            var a = n.getParam("indent_use_margin", !1) ? "margin" : "padding";
                            a = "TABLE" === o.nodeName ? "margin" : a, a += "rtl" == T.getStyle(o, "direction", !0) ? "Right" : "Left", "outdent" == e ? (i = Math.max(0, parseInt(o.style[a] || 0, 10) - t), T.setStyle(o, a, i ? i + r : "")) : (i = parseInt(o.style[a] || 0, 10) + t + r, T.setStyle(o, a, i))
                        }
                    }))
                },
                mceRepaint: function() {},
                InsertHorizontalRule: function() {
                    n.execCommand("mceInsertContent", !1, "<hr />")
                },
                mceToggleVisualAid: function() {
                    n.hasVisual = !n.hasVisual, n.addVisual()
                },
                mceReplaceContent: function(e, t, r) {
                    n.execCommand("mceInsertContent", !1, r.replace(/\{\$selection\}/g, R.getContent({
                        format: "text"
                    })))
                },
                mceInsertLink: function(e, t, n) {
                    var r;
                    "string" == typeof n && (n = {
                        href: n
                    }), r = T.getParent(R.getNode(), "a"), n.href = n.href.replace(" ", "%20"), r && n.href || A.remove("link"), n.href && A.apply("link", n, r)
                },
                selectAll: function() {
                    var e = T.getRoot(),
                        t;
                    R.getRng().setStart ? (t = T.createRng(), t.setStart(e, 0), t.setEnd(e, e.childNodes.length), R.setRng(t)) : (t = R.getRng(), t.item || (t.moveToElementText(e), t.select()))
                },
                "delete": function() {
                    E("Delete");
                    var e = n.getBody();
                    T.isEmpty(e) && (n.setContent(""), e.firstChild && T.isBlock(e.firstChild) ? n.selection.setCursorLocation(e.firstChild, 0) : n.selection.setCursorLocation(e, 0))
                },
                mceNewDocument: function() {
                    n.setContent("")
                },
                InsertLineBreak: function(e, t, o) {
                    function a() {
                        for (var e = new i(m, v), t, r = n.schema.getNonEmptyElements(); t = e.next();)
                            if (r[t.nodeName.toLowerCase()] || t.length > 0) return !0
                    }
                    var s = o,
                        l, c, u, h = R.getRng(!0);
                    new r(T).normalize(h);
                    var p = h.startOffset,
                        m = h.startContainer;
                    if (1 == m.nodeType && m.hasChildNodes()) {
                        var g = p > m.childNodes.length - 1;
                        m = m.childNodes[Math.min(p, m.childNodes.length - 1)] || m, p = g && 3 == m.nodeType ? m.nodeValue.length : 0
                    }
                    var v = T.getParent(m, T.isBlock),
                        y = v ? v.nodeName.toUpperCase() : "",
                        b = v ? T.getParent(v.parentNode, T.isBlock) : null,
                        C = b ? b.nodeName.toUpperCase() : "",
                        x = s && s.ctrlKey;
                    "LI" != C || x || (v = b, y = C), m && 3 == m.nodeType && p >= m.nodeValue.length && (d || a() || (l = T.create("br"), h.insertNode(l), h.setStartAfter(l), h.setEndAfter(l), c = !0)), l = T.create("br"), h.insertNode(l);
                    var w = T.doc.documentMode;
                    return d && "PRE" == y && (!w || w < 8) && l.parentNode.insertBefore(T.doc.createTextNode("\r"), l), u = T.create("span", {}, "&nbsp;"), l.parentNode.insertBefore(u, l), R.scrollIntoView(u), T.remove(u), c ? (h.setStartBefore(l), h.setEndBefore(l)) : (h.setStartAfter(l), h.setEndAfter(l)), R.setRng(h), n.undoManager.add(), f
                }
            }), v({
                "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull": function(e) {
                    var t = "align" + e.substring(7),
                        n = R.isCollapsed() ? [T.getParent(R.getNode(), T.isBlock)] : R.getSelectedBlocks(),
                        r = l(n, function(e) {
                            return !!A.matchNode(e, t)
                        });
                    return c(r, f) !== -1
                },
                "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(e) {
                    return N(e)
                },
                mceBlockQuote: function() {
                    return N("blockquote")
                },
                Outdent: function() {
                    var e;
                    if (D.inline_styles) {
                        if ((e = T.getParent(R.getStart(), T.isBlock)) && parseInt(e.style.paddingLeft, 10) > 0) return f;
                        if ((e = T.getParent(R.getEnd(), T.isBlock)) && parseInt(e.style.paddingLeft, 10) > 0) return f
                    }
                    return m("InsertUnorderedList") || m("InsertOrderedList") || !D.inline_styles && !!T.getParent(R.getNode(), "BLOCKQUOTE")
                },
                "InsertUnorderedList,InsertOrderedList": function(e) {
                    var t = T.getParent(R.getNode(), "ul,ol");
                    return t && ("insertunorderedlist" === e && "UL" === t.tagName || "insertorderedlist" === e && "OL" === t.tagName)
                }
            }, "state"), v({
                "FontSize,FontName": function(e) {
                    var t = 0,
                        n;
                    return (n = T.getParent(R.getNode(), "span")) && (t = "fontsize" == e ? n.style.fontSize : n.style.fontFamily.replace(/, /g, ",").replace(/[\'\"]/g, "").toLowerCase()), t
                }
            }, "value"), v({
                Undo: function() {
                    n.undoManager.undo()
                },
                Redo: function() {
                    n.undoManager.redo()
                }
            })
        }
    }), r(ce, [m], function(e) {
        function t(e, o) {
            var a = this,
                s, l;
            if (e = r(e), o = a.settings = o || {}, s = o.base_uri, /^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e)) return void(a.source = e);
            var c = 0 === e.indexOf("//");
            0 !== e.indexOf("/") || c || (e = (s ? s.protocol || "http" : "http") + "://mce_host" + e), /^[\w\-]*:?\/\//.test(e) || (l = o.base_uri ? o.base_uri.path : new t(location.href).directory, "" === o.base_uri.protocol ? e = "//mce_host" + a.toAbsPath(l, e) : (e = /([^#?]*)([#?]?.*)/.exec(e), e = (s && s.protocol || "http") + "://mce_host" + a.toAbsPath(l, e[1]) + e[2])), e = e.replace(/@@/g, "(mce_at)"), e = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e), n(i, function(t, n) {
                var r = e[n];
                r && (r = r.replace(/\(mce_at\)/g, "@@")), a[t] = r
            }), s && (a.protocol || (a.protocol = s.protocol), a.userInfo || (a.userInfo = s.userInfo), a.port || "mce_host" !== a.host || (a.port = s.port), a.host && "mce_host" !== a.host || (a.host = s.host), a.source = ""), c && (a.protocol = "")
        }
        var n = e.each,
            r = e.trim,
            i = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
            o = {
                ftp: 21,
                http: 80,
                https: 443,
                mailto: 25
            };
        return t.prototype = {
            setPath: function(e) {
                var t = this;
                e = /^(.*?)\/?(\w+)?$/.exec(e), t.path = e[0], t.directory = e[1], t.file = e[2], t.source = "", t.getURI()
            },
            toRelative: function(e) {
                var n = this,
                    r;
                if ("./" === e) return e;
                if (e = new t(e, {
                        base_uri: n
                    }), "mce_host" != e.host && n.host != e.host && e.host || n.port != e.port || n.protocol != e.protocol && "" !== e.protocol) return e.getURI();
                var i = n.getURI(),
                    o = e.getURI();
                return i == o || "/" == i.charAt(i.length - 1) && i.substr(0, i.length - 1) == o ? i : (r = n.toRelPath(n.path, e.path), e.query && (r += "?" + e.query), e.anchor && (r += "#" + e.anchor), r)
            },
            toAbsolute: function(e, n) {
                return e = new t(e, {
                    base_uri: this
                }), e.getURI(n && this.isSameOrigin(e))
            },
            isSameOrigin: function(e) {
                if (this.host == e.host && this.protocol == e.protocol) {
                    if (this.port == e.port) return !0;
                    var t = o[this.protocol];
                    if (t && (this.port || t) == (e.port || t)) return !0
                }
                return !1
            },
            toRelPath: function(e, t) {
                var n, r = 0,
                    i = "",
                    o, a;
                if (e = e.substring(0, e.lastIndexOf("/")), e = e.split("/"), n = t.split("/"), e.length >= n.length)
                    for (o = 0, a = e.length; o < a; o++)
                        if (o >= n.length || e[o] != n[o]) {
                            r = o + 1;
                            break
                        }
                if (e.length < n.length)
                    for (o = 0, a = n.length; o < a; o++)
                        if (o >= e.length || e[o] != n[o]) {
                            r = o + 1;
                            break
                        }
                if (1 === r) return t;
                for (o = 0, a = e.length - (r - 1); o < a; o++) i += "../";
                for (o = r - 1, a = n.length; o < a; o++) i += o != r - 1 ? "/" + n[o] : n[o];
                return i
            },
            toAbsPath: function(e, t) {
                var r, i = 0,
                    o = [],
                    a, s;
                for (a = /\/$/.test(t) ? "/" : "", e = e.split("/"), t = t.split("/"), n(e, function(e) {
                        e && o.push(e)
                    }), e = o, r = t.length - 1, o = []; r >= 0; r--) 0 !== t[r].length && "." !== t[r] && (".." !== t[r] ? i > 0 ? i-- : o.push(t[r]) : i++);
                return r = e.length - i, s = r <= 0 ? o.reverse().join("/") : e.slice(0, r).join("/") + "/" + o.reverse().join("/"), 0 !== s.indexOf("/") && (s = "/" + s), a && s.lastIndexOf("/") !== s.length - 1 && (s += a), s
            },
            getURI: function(e) {
                var t, n = this;
                return n.source && !e || (t = "", e || (t += n.protocol ? n.protocol + "://" : "//", n.userInfo && (t += n.userInfo + "@"), n.host && (t += n.host), n.port && (t += ":" + n.port)), n.path && (t += n.path), n.query && (t += "?" + n.query), n.anchor && (t += "#" + n.anchor), n.source = t), n.source
            }
        }, t.parseDataUri = function(e) {
            var t, n;
            return e = decodeURIComponent(e).split(","), n = /data:([^;]+)/.exec(e[0]), n && (t = n[1]), {
                type: t,
                data: e[1]
            }
        }, t.getDocumentBaseUrl = function(e) {
            var t;
            return t = 0 !== e.protocol.indexOf("http") && "file:" !== e.protocol ? e.href : e.protocol + "//" + e.host + e.pathname, /^[^:]+:\/\/\/?[^\/]+\//.test(t) && (t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(t) || (t += "/")), t
        }, t
    }), r(ue, [m], function(e) {
        function t() {}
        var n = e.each,
            r = e.extend,
            i, o;
        return t.extend = i = function(e) {
            function t() {
                var e, t, n, r = this;
                if (!o && (r.init && r.init.apply(r, arguments), t = r.Mixins))
                    for (e = t.length; e--;) n = t[e], n.init && n.init.apply(r, arguments)
            }

            function a() {
                return this
            }

            function s(e, t) {
                return function() {
                    var n = this,
                        r = n._super,
                        i;
                    return n._super = c[e], i = t.apply(n, arguments), n._super = r, i
                }
            }
            var l = this,
                c = l.prototype,
                u, d, f;
            o = !0, u = new l, o = !1, e.Mixins && (n(e.Mixins, function(t) {
                for (var n in t) "init" !== n && (e[n] = t[n])
            }), c.Mixins && (e.Mixins = c.Mixins.concat(e.Mixins))), e.Methods && n(e.Methods.split(","), function(t) {
                e[t] = a
            }), e.Properties && n(e.Properties.split(","), function(t) {
                var n = "_" + t;
                e[t] = function(e) {
                    var t = this,
                        r;
                    return e !== r ? (t[n] = e, t) : t[n]
                }
            }), e.Statics && n(e.Statics, function(e, n) {
                t[n] = e
            }), e.Defaults && c.Defaults && (e.Defaults = r({}, c.Defaults, e.Defaults));
            for (d in e) f = e[d], "function" == typeof f && c[d] ? u[d] = s(d, f) : u[d] = f;
            return t.prototype = u, t.constructor = t, t.extend = i, t
        }, t
    }), r(de, [m], function(e) {
        function t(t) {
            function n() {
                return !1
            }

            function r() {
                return !0
            }

            function i(e, i) {
                var o, s, l, c;
                if (e = e.toLowerCase(), i = i || {}, i.type = e, i.target || (i.target = u), i.preventDefault || (i.preventDefault = function() {
                        i.isDefaultPrevented = r
                    }, i.stopPropagation = function() {
                        i.isPropagationStopped = r
                    }, i.stopImmediatePropagation = function() {
                        i.isImmediatePropagationStopped = r
                    }, i.isDefaultPrevented = n, i.isPropagationStopped = n, i.isImmediatePropagationStopped = n), t.beforeFire && t.beforeFire(i), o = d[e])
                    for (s = 0, l = o.length; s < l; s++) {
                        if (c = o[s], c.once && a(e, c.func), i.isImmediatePropagationStopped()) return i.stopPropagation(), i;
                        if (c.func.call(u, i) === !1) return i.preventDefault(), i
                    }
                return i
            }

            function o(t, r, i, o) {
                var a, s, l;
                if (r === !1 && (r = n), r)
                    for (r = {
                            func: r
                        }, o && e.extend(r, o), s = t.toLowerCase().split(" "), l = s.length; l--;) t = s[l], a = d[t], a || (a = d[t] = [], f(t, !0)), i ? a.unshift(r) : a.push(r);
                return c
            }

            function a(e, t) {
                var n, r, i, o, a;
                if (e)
                    for (o = e.toLowerCase().split(" "), n = o.length; n--;) {
                        if (e = o[n], r = d[e], !e) {
                            for (i in d) f(i, !1), delete d[i];
                            return c
                        }
                        if (r) {
                            if (t)
                                for (a = r.length; a--;) r[a].func === t && (r = r.slice(0, a).concat(r.slice(a + 1)), d[e] = r);
                            else r.length = 0;
                            r.length || (f(e, !1), delete d[e])
                        }
                    } else {
                        for (e in d) f(e, !1);
                        d = {}
                    }
                return c
            }

            function s(e, t, n) {
                return o(e, t, n, {
                    once: !0
                })
            }

            function l(e) {
                return e = e.toLowerCase(), !(!d[e] || 0 === d[e].length)
            }
            var c = this,
                u, d = {},
                f;
            t = t || {}, u = t.scope || c, f = t.toggleEvent || n, c.fire = i, c.on = o, c.off = a, c.once = s, c.has = l
        }
        var n = e.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend", " ");
        return t.isNative = function(e) {
            return !!n[e.toLowerCase()]
        }, t
    }), r(fe, [], function() {
        function e(e) {
            this.create = e.create
        }
        return e.create = function(t, n) {
            return new e({
                create: function(e, r) {
                    function i(t) {
                        e.set(r, t.value)
                    }

                    function o(e) {
                        t.set(n, e.value)
                    }
                    var a;
                    return e.on("change:" + r, o), t.on("change:" + n, i), a = e._bindings, a || (a = e._bindings = [], e.on("destroy", function() {
                        for (var e = a.length; e--;) a[e]()
                    })), a.push(function() {
                        t.off("change:" + n, i)
                    }), t.get(n)
                }
            })
        }, e
    }), r(he, [de], function(e) {
        function t(t) {
            return t._eventDispatcher || (t._eventDispatcher = new e({
                scope: t,
                toggleEvent: function(n, r) {
                    e.isNative(n) && t.toggleNativeEvent && t.toggleNativeEvent(n, r)
                }
            })), t._eventDispatcher
        }
        return {
            fire: function(e, n, r) {
                var i = this;
                if (i.removed && "remove" !== e) return n;
                if (n = t(i).fire(e, n, r), r !== !1 && i.parent)
                    for (var o = i.parent(); o && !n.isPropagationStopped();) o.fire(e, n, !1), o = o.parent();
                return n
            },
            on: function(e, n, r) {
                return t(this).on(e, n, r)
            },
            off: function(e, n) {
                return t(this).off(e, n)
            },
            once: function(e, n) {
                return t(this).once(e, n)
            },
            hasEventListeners: function(e) {
                return t(this).has(e)
            }
        }
    }), r(pe, [fe, he, ue, m], function(e, t, n, r) {
        function i(e) {
            return e.nodeType > 0
        }

        function o(e, t) {
            var n, a;
            if (e === t) return !0;
            if (null === e || null === t) return e === t;
            if ("object" != typeof e || "object" != typeof t) return e === t;
            if (r.isArray(t)) {
                if (e.length !== t.length) return !1;
                for (n = e.length; n--;)
                    if (!o(e[n], t[n])) return !1
            }
            if (i(e) || i(t)) return e === t;
            a = {};
            for (n in t) {
                if (!o(e[n], t[n])) return !1;
                a[n] = !0
            }
            for (n in e)
                if (!a[n] && !o(e[n], t[n])) return !1;
            return !0
        }
        return n.extend({
            Mixins: [t],
            init: function(t) {
                var n, r;
                t = t || {};
                for (n in t) r = t[n], r instanceof e && (t[n] = r.create(this, n));
                this.data = t
            },
            set: function(t, n) {
                var r, i, a = this.data[t];
                if (n instanceof e && (n = n.create(this, t)), "object" == typeof t) {
                    for (r in t) this.set(r, t[r]);
                    return this
                }
                return o(a, n) || (this.data[t] = n, i = {
                    target: this,
                    name: t,
                    value: n,
                    oldValue: a
                }, this.fire("change:" + t, i), this.fire("change", i)), this
            },
            get: function(e) {
                return this.data[e]
            },
            has: function(e) {
                return e in this.data
            },
            bind: function(t) {
                return e.create(this, t)
            },
            destroy: function() {
                this.fire("destroy")
            }
        })
    }), r(me, [ue], function(e) {
        function t(e) {
            for (var t = [], n = e.length, r; n--;) r = e[n], r.__checked || (t.push(r), r.__checked = 1);
            for (n = t.length; n--;) delete t[n].__checked;
            return t
        }
        var n = /^([\w\\*]+)?(?:#([\w\-\\]+))?(?:\.([\w\\\.]+))?(?:\[\@?([\w\\]+)([\^\$\*!~]?=)([\w\\]+)\])?(?:\:(.+))?/i,
            r = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            i = /^\s*|\s*$/g,
            o, a = e.extend({
                init: function(e) {
                    function t(e) {
                        if (e) return e = e.toLowerCase(),
                            function(t) {
                                return "*" === e || t.type === e
                            }
                    }

                    function o(e) {
                        if (e) return function(t) {
                            return t._name === e
                        }
                    }

                    function a(e) {
                        if (e) return e = e.split("."),
                            function(t) {
                                for (var n = e.length; n--;)
                                    if (!t.classes.contains(e[n])) return !1;
                                return !0
                            }
                    }

                    function s(e, t, n) {
                        if (e) return function(r) {
                            var i = r[e] ? r[e]() : "";
                            return t ? "=" === t ? i === n : "*=" === t ? i.indexOf(n) >= 0 : "~=" === t ? (" " + i + " ").indexOf(" " + n + " ") >= 0 : "!=" === t ? i != n : "^=" === t ? 0 === i.indexOf(n) : "$=" === t && i.substr(i.length - n.length) === n : !!n
                        }
                    }

                    function l(e) {
                        var t;
                        if (e) return e = /(?:not\((.+)\))|(.+)/i.exec(e), e[1] ? (t = u(e[1], []), function(e) {
                            return !d(e, t)
                        }) : (e = e[2], function(t, n, r) {
                            return "first" === e ? 0 === n : "last" === e ? n === r - 1 : "even" === e ? n % 2 === 0 : "odd" === e ? n % 2 === 1 : !!t[e] && t[e]()
                        })
                    }

                    function c(e, r, c) {
                        function u(e) {
                            e && r.push(e)
                        }
                        var d;
                        return d = n.exec(e.replace(i, "")), u(t(d[1])), u(o(d[2])), u(a(d[3])), u(s(d[4], d[5], d[6])), u(l(d[7])), r.pseudo = !!d[7], r.direct = c, r
                    }

                    function u(e, t) {
                        var n = [],
                            i, o, a;
                        do
                            if (r.exec(""), o = r.exec(e), o && (e = o[3], n.push(o[1]), o[2])) {
                                i = o[3];
                                break
                            }
                        while (o);
                        for (i && u(i, t), e = [], a = 0; a < n.length; a++) ">" != n[a] && e.push(c(n[a], [], ">" === n[a - 1]));
                        return t.push(e), t
                    }
                    var d = this.match;
                    this._selectors = u(e, [])
                },
                match: function(e, t) {
                    var n, r, i, o, a, s, l, c, u, d, f, h, p;
                    for (t = t || this._selectors, n = 0, r = t.length; n < r; n++) {
                        for (a = t[n], o = a.length, p = e, h = 0, i = o - 1; i >= 0; i--)
                            for (c = a[i]; p;) {
                                if (c.pseudo)
                                    for (f = p.parent().items(), u = d = f.length; u-- && f[u] !== p;);
                                for (s = 0, l = c.length; s < l; s++)
                                    if (!c[s](p, u, d)) {
                                        s = l + 1;
                                        break
                                    }
                                if (s === l) {
                                    h++;
                                    break
                                }
                                if (i === o - 1) break;
                                p = p.parent()
                            }
                        if (h === o) return !0
                    }
                    return !1
                },
                find: function(e) {
                    function n(e, t, i) {
                        var o, a, s, l, c, u = t[i];
                        for (o = 0, a = e.length; o < a; o++) {
                            for (c = e[o], s = 0, l = u.length; s < l; s++)
                                if (!u[s](c, o, a)) {
                                    s = l + 1;
                                    break
                                }
                            if (s === l) i == t.length - 1 ? r.push(c) : c.items && n(c.items(), t, i + 1);
                            else if (u.direct) return;
                            c.items && n(c.items(), t, i)
                        }
                    }
                    var r = [],
                        i, s, l = this._selectors;
                    if (e.items) {
                        for (i = 0, s = l.length; i < s; i++) n(e.items(), l[i], 0);
                        s > 1 && (r = t(r))
                    }
                    return o || (o = a.Collection), new o(r)
                }
            });
        return a
    }), r(ge, [m, me, ue], function(e, t, n) {
        var r, i, o = Array.prototype.push,
            a = Array.prototype.slice;
        return i = {
            length: 0,
            init: function(e) {
                e && this.add(e)
            },
            add: function(t) {
                var n = this;
                return e.isArray(t) ? o.apply(n, t) : t instanceof r ? n.add(t.toArray()) : o.call(n, t), n
            },
            set: function(e) {
                var t = this,
                    n = t.length,
                    r;
                for (t.length = 0, t.add(e), r = t.length; r < n; r++) delete t[r];
                return t
            },
            filter: function(e) {
                var n = this,
                    i, o, a = [],
                    s, l;
                for ("string" == typeof e ? (e = new t(e), l = function(t) {
                        return e.match(t)
                    }) : l = e, i = 0, o = n.length; i < o; i++) s = n[i], l(s) && a.push(s);
                return new r(a)
            },
            slice: function() {
                return new r(a.apply(this, arguments))
            },
            eq: function(e) {
                return e === -1 ? this.slice(e) : this.slice(e, +e + 1)
            },
            each: function(t) {
                return e.each(this, t), this
            },
            toArray: function() {
                return e.toArray(this)
            },
            indexOf: function(e) {
                for (var t = this, n = t.length; n-- && t[n] !== e;);
                return n
            },
            reverse: function() {
                return new r(e.toArray(this).reverse())
            },
            hasClass: function(e) {
                return !!this[0] && this[0].classes.contains(e)
            },
            prop: function(e, t) {
                var n = this,
                    r, i;
                return t !== r ? (n.each(function(n) {
                    n[e] && n[e](t)
                }), n) : (i = n[0], i && i[e] ? i[e]() : void 0)
            },
            exec: function(t) {
                var n = this,
                    r = e.toArray(arguments).slice(1);
                return n.each(function(e) {
                    e[t] && e[t].apply(e, r)
                }), n
            },
            remove: function() {
                for (var e = this.length; e--;) this[e].remove();
                return this
            },
            addClass: function(e) {
                return this.each(function(t) {
                    t.classes.add(e)
                })
            },
            removeClass: function(e) {
                return this.each(function(t) {
                    t.classes.remove(e)
                })
            }
        }, e.each("fire on off show hide append prepend before after reflow".split(" "), function(t) {
            i[t] = function() {
                var n = e.toArray(arguments);
                return this.each(function(e) {
                    t in e && e[t].apply(e, n)
                }), this
            }
        }), e.each("text name disabled active selected checked visible parent value data".split(" "), function(e) {
            i[e] = function(t) {
                return this.prop(e, t)
            }
        }), r = n.extend(i), t.Collection = r, r
    }), r(ve, [d, m, w], function(e, t, n) {
        var r = 0,
            i = {
                id: function() {
                    return "mceu_" + r++
                },
                create: function(e, r, i) {
                    var o = document.createElement(e);
                    return n.DOM.setAttribs(o, r), "string" == typeof i ? o.innerHTML = i : t.each(i, function(e) {
                        e.nodeType && o.appendChild(e)
                    }), o
                },
                createFragment: function(e) {
                    return n.DOM.createFragment(e)
                },
                getWindowSize: function() {
                    return n.DOM.getViewPort()
                },
                getSize: function(e) {
                    var t, n;
                    if (e.getBoundingClientRect) {
                        var r = e.getBoundingClientRect();
                        t = Math.max(r.width || r.right - r.left, e.offsetWidth), n = Math.max(r.height || r.bottom - r.bottom, e.offsetHeight)
                    } else t = e.offsetWidth, n = e.offsetHeight;
                    return {
                        width: t,
                        height: n
                    }
                },
                getPos: function(e, t) {
                    return n.DOM.getPos(e, t || i.getContainer())
                },
                getContainer: function() {
                    return e.container ? e.container : document.body
                },
                getViewPort: function(e) {
                    return n.DOM.getViewPort(e)
                },
                get: function(e) {
                    return document.getElementById(e)
                },
                addClass: function(e, t) {
                    return n.DOM.addClass(e, t)
                },
                removeClass: function(e, t) {
                    return n.DOM.removeClass(e, t)
                },
                hasClass: function(e, t) {
                    return n.DOM.hasClass(e, t)
                },
                toggleClass: function(e, t, r) {
                    return n.DOM.toggleClass(e, t, r)
                },
                css: function(e, t, r) {
                    return n.DOM.setStyle(e, t, r)
                },
                getRuntimeStyle: function(e, t) {
                    return n.DOM.getStyle(e, t, !0)
                },
                on: function(e, t, r, i) {
                    return n.DOM.bind(e, t, r, i)
                },
                off: function(e, t, r) {
                    return n.DOM.unbind(e, t, r)
                },
                fire: function(e, t, r) {
                    return n.DOM.fire(e, t, r)
                },
                innerHtml: function(e, t) {
                    n.DOM.setHTML(e, t)
                }
            };
        return i
    }), r(ye, [], function() {
        return {
            parseBox: function(e) {
                var t, n = 10;
                if (e) return "number" == typeof e ? (e = e || 0, {
                    top: e,
                    left: e,
                    bottom: e,
                    right: e
                }) : (e = e.split(" "), t = e.length, 1 === t ? e[1] = e[2] = e[3] = e[0] : 2 === t ? (e[2] = e[0], e[3] = e[1]) : 3 === t && (e[3] = e[1]), {
                    top: parseInt(e[0], n) || 0,
                    right: parseInt(e[1], n) || 0,
                    bottom: parseInt(e[2], n) || 0,
                    left: parseInt(e[3], n) || 0
                })
            },
            measureBox: function(e, t) {
                function n(t) {
                    var n = document.defaultView;
                    return n ? (t = t.replace(/[A-Z]/g, function(e) {
                        return "-" + e
                    }), n.getComputedStyle(e, null).getPropertyValue(t)) : e.currentStyle[t]
                }

                function r(e) {
                    var t = parseFloat(n(e), 10);
                    return isNaN(t) ? 0 : t
                }
                return {
                    top: r(t + "TopWidth"),
                    right: r(t + "RightWidth"),
                    bottom: r(t + "BottomWidth"),
                    left: r(t + "LeftWidth")
                }
            }
        }
    }), r(be, [m], function(e) {
        function t() {}

        function n(e) {
            this.cls = [], this.cls._map = {}, this.onchange = e || t, this.prefix = ""
        }
        return e.extend(n.prototype, {
            add: function(e) {
                return e && !this.contains(e) && (this.cls._map[e] = !0, this.cls.push(e), this._change()), this
            },
            remove: function(e) {
                if (this.contains(e)) {
                    for (var t = 0; t < this.cls.length && this.cls[t] !== e; t++);
                    this.cls.splice(t, 1), delete this.cls._map[e], this._change()
                }
                return this
            },
            toggle: function(e, t) {
                var n = this.contains(e);
                return n !== t && (n ? this.remove(e) : this.add(e), this._change()), this
            },
            contains: function(e) {
                return !!this.cls._map[e]
            },
            _change: function() {
                delete this.clsValue, this.onchange.call(this)
            }
        }), n.prototype.toString = function() {
            var e;
            if (this.clsValue) return this.clsValue;
            e = "";
            for (var t = 0; t < this.cls.length; t++) t > 0 && (e += " "), e += this.prefix + this.cls[t];
            return e
        }, n
    }), r(Ce, [u], function(e) {
        var t = {},
            n;
        return {
            add: function(r) {
                var i = r.parent();
                if (i) {
                    if (!i._layout || i._layout.isNative()) return;
                    t[i._id] || (t[i._id] = i), n || (n = !0, e.requestAnimationFrame(function() {
                        var e, r;
                        n = !1;
                        for (e in t) r = t[e], r.state.get("rendered") && r.reflow();
                        t = {}
                    }, document.body))
                }
            },
            remove: function(e) {
                t[e._id] && delete t[e._id]
            }
        }
    }), r(xe, [ue, m, de, pe, ge, ve, g, ye, be, Ce], function(e, t, n, r, i, o, a, s, l, c) {
        function u(e) {
            return e._eventDispatcher || (e._eventDispatcher = new n({
                scope: e,
                toggleEvent: function(t, r) {
                    r && n.isNative(t) && (e._nativeEvents || (e._nativeEvents = {}), e._nativeEvents[t] = !0, e.state.get("rendered") && d(e))
                }
            })), e._eventDispatcher
        }

        function d(e) {
            function t(t) {
                var n = e.getParentCtrl(t.target);
                n && n.fire(t.type, t)
            }

            function n() {
                var e = c._lastHoverCtrl;
                e && (e.fire("mouseleave", {
                    target: e.getEl()
                }), e.parents().each(function(e) {
                    e.fire("mouseleave", {
                        target: e.getEl()
                    })
                }), c._lastHoverCtrl = null)
            }

            function r(t) {
                var n = e.getParentCtrl(t.target),
                    r = c._lastHoverCtrl,
                    i = 0,
                    o, a, s;
                if (n !== r) {
                    if (c._lastHoverCtrl = n, a = n.parents().toArray().reverse(), a.push(n), r) {
                        for (s = r.parents().toArray().reverse(), s.push(r), i = 0; i < s.length && a[i] === s[i]; i++);
                        for (o = s.length - 1; o >= i; o--) r = s[o], r.fire("mouseleave", {
                            target: r.getEl()
                        })
                    }
                    for (o = i; o < a.length; o++) n = a[o], n.fire("mouseenter", {
                        target: n.getEl()
                    })
                }
            }

            function i(t) {
                t.preventDefault(), "mousewheel" == t.type ? (t.deltaY = -.025 * t.wheelDelta, t.wheelDeltaX && (t.deltaX = -.025 * t.wheelDeltaX)) : (t.deltaX = 0, t.deltaY = t.detail), t = e.fire("wheel", t)
            }
            var o, s, l, c, u, d;
            if (u = e._nativeEvents) {
                for (l = e.parents().toArray(), l.unshift(e), o = 0, s = l.length; !c && o < s; o++) c = l[o]._eventsRoot;
                for (c || (c = l[l.length - 1] || e), e._eventsRoot = c, s = o, o = 0; o < s; o++) l[o]._eventsRoot = c;
                var p = c._delegates;
                p || (p = c._delegates = {});
                for (d in u) {
                    if (!u) return !1;
                    "wheel" !== d || h ? ("mouseenter" === d || "mouseleave" === d ? c._hasMouseEnter || (a(c.getEl()).on("mouseleave", n).on("mouseover", r), c._hasMouseEnter = 1) : p[d] || (a(c.getEl()).on(d, t), p[d] = !0), u[d] = !1) : f ? a(e.getEl()).on("mousewheel", i) : a(e.getEl()).on("DOMMouseScroll", i)
                }
            }
        }
        var f = "onmousewheel" in document,
            h = !1,
            p = "mce-",
            m, g = 0,
            v = {
                Statics: {
                    classPrefix: p
                },
                isRtl: function() {
                    return m.rtl
                },
                classPrefix: p,
                init: function(e) {
                    function n(e) {
                        var t;
                        for (e = e.split(" "), t = 0; t < e.length; t++) i.classes.add(e[t])
                    }
                    var i = this,
                        o, c;
                    i.settings = e = t.extend({}, i.Defaults, e), i._id = e.id || "mceu_" + g++, i._aria = {
                        role: e.role
                    }, i._elmCache = {}, i.$ = a, i.state = new r({
                        visible: !0,
                        active: !1,
                        disabled: !1,
                        value: ""
                    }), i.data = new r(e.data), i.classes = new l(function() {
                        i.state.get("rendered") && (i.getEl().className = this.toString())
                    }), i.classes.prefix = i.classPrefix, o = e.classes, o && (i.Defaults && (c = i.Defaults.classes, c && o != c && n(c)), n(o)), t.each("title text name visible disabled active value".split(" "), function(t) {
                        t in e && i[t](e[t])
                    }), i.on("click", function() {
                        if (i.disabled()) return !1
                    }), i.settings = e, i.borderBox = s.parseBox(e.border), i.paddingBox = s.parseBox(e.padding), i.marginBox = s.parseBox(e.margin), e.hidden && i.hide()
                },
                Properties: "parent,name",
                getContainerElm: function() {
                    return o.getContainer()
                },
                getParentCtrl: function(e) {
                    for (var t, n = this.getRoot().controlIdLookup; e && n && !(t = n[e.id]);) e = e.parentNode;
                    return t
                },
                initLayoutRect: function() {
                    var e = this,
                        t = e.settings,
                        n, r, i = e.getEl(),
                        a, l, c, u, d, f, h, p;
                    n = e.borderBox = e.borderBox || s.measureBox(i, "border"), e.paddingBox = e.paddingBox || s.measureBox(i, "padding"), e.marginBox = e.marginBox || s.measureBox(i, "margin"), p = o.getSize(i), f = t.minWidth, h = t.minHeight, c = f || p.width, u = h || p.height, a = t.width, l = t.height, d = t.autoResize, d = "undefined" != typeof d ? d : !a && !l, a = a || c, l = l || u;
                    var m = n.left + n.right,
                        g = n.top + n.bottom,
                        v = t.maxWidth || 65535,
                        y = t.maxHeight || 65535;
                    return e._layoutRect = r = {
                        x: t.x || 0,
                        y: t.y || 0,
                        w: a,
                        h: l,
                        deltaW: m,
                        deltaH: g,
                        contentW: a - m,
                        contentH: l - g,
                        innerW: a - m,
                        innerH: l - g,
                        startMinWidth: f || 0,
                        startMinHeight: h || 0,
                        minW: Math.min(c, v),
                        minH: Math.min(u, y),
                        maxW: v,
                        maxH: y,
                        autoResize: d,
                        scrollW: 0
                    }, e._lastLayoutRect = {}, r
                },
                layoutRect: function(e) {
                    var t = this,
                        n = t._layoutRect,
                        r, i, o, a, s, l;
                    return n || (n = t.initLayoutRect()), e ? (o = n.deltaW, a = n.deltaH, e.x !== s && (n.x = e.x), e.y !== s && (n.y = e.y), e.minW !== s && (n.minW = e.minW), e.minH !== s && (n.minH = e.minH), i = e.w, i !== s && (i = i < n.minW ? n.minW : i, i = i > n.maxW ? n.maxW : i, n.w = i, n.innerW = i - o), i = e.h, i !== s && (i = i < n.minH ? n.minH : i, i = i > n.maxH ? n.maxH : i, n.h = i, n.innerH = i - a), i = e.innerW, i !== s && (i = i < n.minW - o ? n.minW - o : i, i = i > n.maxW - o ? n.maxW - o : i, n.innerW = i, n.w = i + o), i = e.innerH, i !== s && (i = i < n.minH - a ? n.minH - a : i, i = i > n.maxH - a ? n.maxH - a : i, n.innerH = i, n.h = i + a), e.contentW !== s && (n.contentW = e.contentW), e.contentH !== s && (n.contentH = e.contentH), r = t._lastLayoutRect, r.x === n.x && r.y === n.y && r.w === n.w && r.h === n.h || (l = m.repaintControls, l && l.map && !l.map[t._id] && (l.push(t), l.map[t._id] = !0), r.x = n.x, r.y = n.y, r.w = n.w, r.h = n.h), t) : n
                },
                repaint: function() {
                    var e = this,
                        t, n, r, i, o, a, s, l, c, u;
                    c = document.createRange ? function(e) {
                        return e
                    } : Math.round, t = e.getEl().style, i = e._layoutRect, l = e._lastRepaintRect || {}, o = e.borderBox, a = o.left + o.right, s = o.top + o.bottom, i.x !== l.x && (t.left = c(i.x) + "px", l.x = i.x), i.y !== l.y && (t.top = c(i.y) + "px", l.y = i.y), i.w !== l.w && (u = c(i.w - a), t.width = (u >= 0 ? u : 0) + "px", l.w = i.w), i.h !== l.h && (u = c(i.h - s), t.height = (u >= 0 ? u : 0) + "px", l.h = i.h), e._hasBody && i.innerW !== l.innerW && (u = c(i.innerW), r = e.getEl("body"), r && (n = r.style, n.width = (u >= 0 ? u : 0) + "px"), l.innerW = i.innerW), e._hasBody && i.innerH !== l.innerH && (u = c(i.innerH), r = r || e.getEl("body"), r && (n = n || r.style, n.height = (u >= 0 ? u : 0) + "px"), l.innerH = i.innerH), e._lastRepaintRect = l, e.fire("repaint", {}, !1)
                },
                updateLayoutRect: function() {
                    var e = this;
                    e.parent()._lastRect = null, o.css(e.getEl(), {
                        width: "",
                        height: ""
                    }), e._layoutRect = e._lastRepaintRect = e._lastLayoutRect = null, e.initLayoutRect()
                },
                on: function(e, t) {
                    function n(e) {
                        var t, n;
                        return "string" != typeof e ? e : function(i) {
                            return t || r.parentsAndSelf().each(function(r) {
                                var i = r.settings.callbacks;
                                if (i && (t = i[e])) return n = r, !1
                            }), t ? t.call(n, i) : (i.action = e, void this.fire("execute", i))
                        }
                    }
                    var r = this;
                    return u(r).on(e, n(t)), r
                },
                off: function(e, t) {
                    return u(this).off(e, t), this
                },
                fire: function(e, t, n) {
                    var r = this;
                    if (t = t || {}, t.control || (t.control = r), t = u(r).fire(e, t), n !== !1 && r.parent)
                        for (var i = r.parent(); i && !t.isPropagationStopped();) i.fire(e, t, !1), i = i.parent();
                    return t
                },
                hasEventListeners: function(e) {
                    return u(this).has(e)
                },
                parents: function(e) {
                    var t = this,
                        n, r = new i;
                    for (n = t.parent(); n; n = n.parent()) r.add(n);
                    return e && (r = r.filter(e)), r
                },
                parentsAndSelf: function(e) {
                    return new i(this).add(this.parents(e))
                },
                next: function() {
                    var e = this.parent().items();
                    return e[e.indexOf(this) + 1]
                },
                prev: function() {
                    var e = this.parent().items();
                    return e[e.indexOf(this) - 1]
                },
                innerHtml: function(e) {
                    return this.$el.html(e), this
                },
                getEl: function(e) {
                    var t = e ? this._id + "-" + e : this._id;
                    return this._elmCache[t] || (this._elmCache[t] = a("#" + t)[0]), this._elmCache[t]
                },
                show: function() {
                    return this.visible(!0)
                },
                hide: function() {
                    return this.visible(!1)
                },
                focus: function() {
                    try {
                        this.getEl().focus()
                    } catch (e) {}
                    return this
                },
                blur: function() {
                    return this.getEl().blur(), this
                },
                aria: function(e, t) {
                    var n = this,
                        r = n.getEl(n.ariaTarget);
                    return "undefined" == typeof t ? n._aria[e] : (n._aria[e] = t, n.state.get("rendered") && r.setAttribute("role" == e ? e : "aria-" + e, t), n)
                },
                encode: function(e, t) {
                    return t !== !1 && (e = this.translate(e)), (e || "").replace(/[&<>"]/g, function(e) {
                        return "&#" + e.charCodeAt(0) + ";"
                    })
                },
                translate: function(e) {
                    return m.translate ? m.translate(e) : e
                },
                before: function(e) {
                    var t = this,
                        n = t.parent();
                    return n && n.insert(e, n.items().indexOf(t), !0), t
                },
                after: function(e) {
                    var t = this,
                        n = t.parent();
                    return n && n.insert(e, n.items().indexOf(t)), t
                },
                remove: function() {
                    var e = this,
                        t = e.getEl(),
                        n = e.parent(),
                        r, i;
                    if (e.items) {
                        var o = e.items().toArray();
                        for (i = o.length; i--;) o[i].remove()
                    }
                    n && n.items && (r = [], n.items().each(function(t) {
                        t !== e && r.push(t)
                    }), n.items().set(r), n._lastRect = null), e._eventsRoot && e._eventsRoot == e && a(t).off();
                    var s = e.getRoot().controlIdLookup;
                    return s && delete s[e._id], t && t.parentNode && t.parentNode.removeChild(t), e.state.set("rendered", !1), e.state.destroy(), e.fire("remove"), e
                },
                renderBefore: function(e) {
                    return a(e).before(this.renderHtml()), this.postRender(), this
                },
                renderTo: function(e) {
                    return a(e || this.getContainerElm()).append(this.renderHtml()), this.postRender(), this
                },
                preRender: function() {},
                render: function() {},
                renderHtml: function() {
                    return '<div id="' + this._id + '" class="' + this.classes + '"></div>'
                },
                postRender: function() {
                    var e = this,
                        t = e.settings,
                        n, r, i, o, s;
                    e.$el = a(e.getEl()), e.state.set("rendered", !0);
                    for (o in t) 0 === o.indexOf("on") && e.on(o.substr(2), t[o]);
                    if (e._eventsRoot) {
                        for (i = e.parent(); !s && i; i = i.parent()) s = i._eventsRoot;
                        if (s)
                            for (o in s._nativeEvents) e._nativeEvents[o] = !0
                    }
                    d(e), t.style && (n = e.getEl(), n && (n.setAttribute("style", t.style), n.style.cssText = t.style)), e.settings.border && (r = e.borderBox, e.$el.css({
                        "border-top-width": r.top,
                        "border-right-width": r.right,
                        "border-bottom-width": r.bottom,
                        "border-left-width": r.left
                    }));
                    var l = e.getRoot();
                    l.controlIdLookup || (l.controlIdLookup = {}), l.controlIdLookup[e._id] = e;
                    for (var u in e._aria) e.aria(u, e._aria[u]);
                    e.state.get("visible") === !1 && (e.getEl().style.display = "none"), e.bindStates(), e.state.on("change:visible", function(t) {
                        var n = t.value,
                            r;
                        e.state.get("rendered") && (e.getEl().style.display = n === !1 ? "none" : "", e.getEl().getBoundingClientRect()), r = e.parent(), r && (r._lastRect = null), e.fire(n ? "show" : "hide"), c.add(e)
                    }), e.fire("postrender", {}, !1)
                },
                bindStates: function() {},
                scrollIntoView: function(e) {
                    function t(e, t) {
                        var n, r, i = e;
                        for (n = r = 0; i && i != t && i.nodeType;) n += i.offsetLeft || 0, r += i.offsetTop || 0, i = i.offsetParent;
                        return {
                            x: n,
                            y: r
                        }
                    }
                    var n = this.getEl(),
                        r = n.parentNode,
                        i, o, a, s, l, c, u = t(n, r);
                    return i = u.x, o = u.y, a = n.offsetWidth, s = n.offsetHeight, l = r.clientWidth, c = r.clientHeight, "end" == e ? (i -= l - a, o -= c - s) : "center" == e && (i -= l / 2 - a / 2, o -= c / 2 - s / 2), r.scrollLeft = i, r.scrollTop = o, this
                },
                getRoot: function() {
                    for (var e = this, t, n = []; e;) {
                        if (e.rootControl) {
                            t = e.rootControl;
                            break
                        }
                        n.push(e), t = e, e = e.parent()
                    }
                    t || (t = this);
                    for (var r = n.length; r--;) n[r].rootControl = t;
                    return t
                },
                reflow: function() {
                    c.remove(this);
                    var e = this.parent();
                    return e._layout && !e._layout.isNative() && e.reflow(), this
                }
            };
        return t.each("text title visible disabled active value".split(" "), function(e) {
            v[e] = function(t) {
                return 0 === arguments.length ? this.state.get(e) : ("undefined" != typeof t && this.state.set(e, t), this)
            }
        }), m = e.extend(v)
    }), r(we, [], function() {
        var e = {},
            t;
        return {
            add: function(t, n) {
                e[t.toLowerCase()] = n
            },
            has: function(t) {
                return !!e[t.toLowerCase()]
            },
            create: function(n, r) {
                var i, o, a;
                if (!t) {
                    a = tinymce.ui;
                    for (o in a) e[o.toLowerCase()] = a[o];
                    t = !0
                }
                if ("string" == typeof n ? (r = r || {}, r.type = n) : (r = n, n = r.type), n = n.toLowerCase(), i = e[n], !i) throw new Error("Could not find control by type: " + n);
                return i = new i(r), i.type = n, i
            }
        }
    }), r(Ee, [], function() {
        return function(e) {
            function t(e) {
                return e && 1 === e.nodeType
            }

            function n(e) {
                return e = e || C, t(e) ? e.getAttribute("role") : null
            }

            function r(e) {
                for (var t, r = e || C; r = r.parentNode;)
                    if (t = n(r)) return t
            }

            function i(e) {
                var n = C;
                if (t(n)) return n.getAttribute("aria-" + e)
            }

            function o(e) {
                var t = e.tagName.toUpperCase();
                return "INPUT" == t || "TEXTAREA" == t || "SELECT" == t
            }

            function a(e) {
                return !(!o(e) || e.hidden) || !!/^(button|menuitem|checkbox|tab|menuitemcheckbox|option|gridcell|slider)$/.test(n(e))
            }

            function s(e) {
                function t(e) {
                    if (1 == e.nodeType && "none" != e.style.display && !e.disabled) {
                        a(e) && n.push(e);
                        for (var r = 0; r < e.childNodes.length; r++) t(e.childNodes[r])
                    }
                }
                var n = [];
                return t(e || b.getEl()), n
            }

            function l(e) {
                var t, n;
                e = e || x, n = e.parents().toArray(), n.unshift(e);
                for (var r = 0; r < n.length && (t = n[r], !t.settings.ariaRoot); r++);
                return t
            }

            function c(e) {
                var t = l(e),
                    n = s(t.getEl());
                t.settings.ariaRemember && "lastAriaIndex" in t ? u(t.lastAriaIndex, n) : u(0, n)
            }

            function u(e, t) {
                return e < 0 ? e = t.length - 1 : e >= t.length && (e = 0), t[e] && t[e].focus(), e
            }

            function d(e, t) {
                var n = -1,
                    r = l();
                t = t || s(r.getEl());
                for (var i = 0; i < t.length; i++) t[i] === C && (n = i);
                n += e, r.lastAriaIndex = u(n, t)
            }

            function f() {
                var e = r();
                "tablist" == e ? d(-1, s(C.parentNode)) : x.parent().submenu ? v() : d(-1)
            }

            function h() {
                var e = n(),
                    t = r();
                "tablist" == t ? d(1, s(C.parentNode)) : "menuitem" == e && "menu" == t && i("haspopup") ? y() : d(1)
            }

            function p() {
                d(-1)
            }

            function m() {
                var e = n(),
                    t = r();
                "menuitem" == e && "menubar" == t ? y() : "button" == e && i("haspopup") ? y({
                    key: "down"
                }) : d(1)
            }

            function g(e) {
                var t = r();
                if ("tablist" == t) {
                    var n = s(x.getEl("body"))[0];
                    n && n.focus()
                } else d(e.shiftKey ? -1 : 1)
            }

            function v() {
                x.fire("cancel")
            }

            function y(e) {
                e = e || {}, x.fire("click", {
                    target: C,
                    aria: e
                })
            }
            var b = e.root,
                C, x;
            try {
                C = document.activeElement
            } catch (w) {
                C = document.body
            }
            return x = b.getParentCtrl(C), b.on("keydown", function(e) {
                function t(e, t) {
                    o(C) || "slider" !== n(C) && t(e) !== !1 && e.preventDefault()
                }
                if (!e.isDefaultPrevented()) switch (e.keyCode) {
                    case 37:
                        t(e, f);
                        break;
                    case 39:
                        t(e, h);
                        break;
                    case 38:
                        t(e, p);
                        break;
                    case 40:
                        t(e, m);
                        break;
                    case 27:
                        v();
                        break;
                    case 14:
                    case 13:
                    case 32:
                        t(e, y);
                        break;
                    case 9:
                        g(e) !== !1 && e.preventDefault()
                }
            }), b.on("focusin", function(e) {
                C = e.target, x = e.control
            }), {
                focusFirst: c
            }
        }
    }), r(Ne, [xe, ge, me, we, Ee, m, g, be, Ce], function(e, t, n, r, i, o, a, s, l) {
        var c = {};
        return e.extend({
            init: function(e) {
                var n = this;
                n._super(e), e = n.settings, e.fixed && n.state.set("fixed", !0), n._items = new t, n.isRtl() && n.classes.add("rtl"), n.bodyClasses = new s(function() {
                    n.state.get("rendered") && (n.getEl("body").className = this.toString())
                }), n.bodyClasses.prefix = n.classPrefix, n.classes.add("container"), n.bodyClasses.add("container-body"), e.containerCls && n.classes.add(e.containerCls), n._layout = r.create((e.layout || "") + "layout"), n.settings.items ? n.add(n.settings.items) : n.add(n.render()), n._hasBody = !0
            },
            items: function() {
                return this._items
            },
            find: function(e) {
                return e = c[e] = c[e] || new n(e), e.find(this)
            },
            add: function(e) {
                var t = this;
                return t.items().add(t.create(e)).parent(t), t
            },
            focus: function(e) {
                var t = this,
                    n, r, i;
                return e && (r = t.keyboardNav || t.parents().eq(-1)[0].keyboardNav) ? void r.focusFirst(t) : (i = t.find("*"), t.statusbar && i.add(t.statusbar.items()), i.each(function(e) {
                    return e.settings.autofocus ? (n = null, !1) : void(e.canFocus && (n = n || e))
                }), n && n.focus(), t)
            },
            replace: function(e, t) {
                for (var n, r = this.items(), i = r.length; i--;)
                    if (r[i] === e) {
                        r[i] = t;
                        break
                    }
                i >= 0 && (n = t.getEl(), n && n.parentNode.removeChild(n), n = e.getEl(), n && n.parentNode.removeChild(n)), t.parent(this)
            },
            create: function(t) {
                var n = this,
                    i, a = [];
                return o.isArray(t) || (t = [t]), o.each(t, function(t) {
                    t && (t instanceof e || ("string" == typeof t && (t = {
                        type: t
                    }), i = o.extend({}, n.settings.defaults, t), t.type = i.type = i.type || t.type || n.settings.defaultType || (i.defaults ? i.defaults.type : null), t = r.create(i)), a.push(t))
                }), a
            },
            renderNew: function() {
                var e = this;
                return e.items().each(function(t, n) {
                    var r;
                    t.parent(e), t.state.get("rendered") || (r = e.getEl("body"), r.hasChildNodes() && n <= r.childNodes.length - 1 ? a(r.childNodes[n]).before(t.renderHtml()) : a(r).append(t.renderHtml()), t.postRender(), l.add(t))
                }), e._layout.applyClasses(e.items().filter(":visible")), e._lastRect = null, e
            },
            append: function(e) {
                return this.add(e).renderNew()
            },
            prepend: function(e) {
                var t = this;
                return t.items().set(t.create(e).concat(t.items().toArray())), t.renderNew()
            },
            insert: function(e, t, n) {
                var r = this,
                    i, o, a;
                return e = r.create(e), i = r.items(), !n && t < i.length - 1 && (t += 1), t >= 0 && t < i.length && (o = i.slice(0, t).toArray(), a = i.slice(t).toArray(), i.set(o.concat(e, a))), r.renderNew()
            },
            fromJSON: function(e) {
                var t = this;
                for (var n in e) t.find("#" + n).value(e[n]);
                return t
            },
            toJSON: function() {
                var e = this,
                    t = {};
                return e.find("*").each(function(e) {
                    var n = e.name(),
                        r = e.value();
                    n && "undefined" != typeof r && (t[n] = r)
                }), t
            },
            renderHtml: function() {
                var e = this,
                    t = e._layout,
                    n = this.settings.role;
                return e.preRender(), t.preRender(e), '<div id="' + e._id + '" class="' + e.classes + '"' + (n ? ' role="' + this.settings.role + '"' : "") + '><div id="' + e._id + '-body" class="' + e.bodyClasses + '">' + (e.settings.html || "") + t.renderHtml(e) + "</div></div>"
            },
            postRender: function() {
                var e = this,
                    t;
                return e.items().exec("postRender"), e._super(), e._layout.postRender(e), e.state.set("rendered", !0), e.settings.style && e.$el.css(e.settings.style), e.settings.border && (t = e.borderBox, e.$el.css({
                    "border-top-width": t.top,
                    "border-right-width": t.right,
                    "border-bottom-width": t.bottom,
                    "border-left-width": t.left
                })), e.parent() || (e.keyboardNav = new i({
                    root: e
                })), e
            },
            initLayoutRect: function() {
                var e = this,
                    t = e._super();
                return e._layout.recalc(e), t
            },
            recalc: function() {
                var e = this,
                    t = e._layoutRect,
                    n = e._lastRect;
                if (!n || n.w != t.w || n.h != t.h) return e._layout.recalc(e), t = e.layoutRect(), e._lastRect = {
                    x: t.x,
                    y: t.y,
                    w: t.w,
                    h: t.h
                }, !0
            },
            reflow: function() {
                var t;
                if (l.remove(this), this.visible()) {
                    for (e.repaintControls = [], e.repaintControls.map = {}, this.recalc(), t = e.repaintControls.length; t--;) e.repaintControls[t].repaint();
                    "flow" !== this.settings.layout && "stack" !== this.settings.layout && this.repaint(), e.repaintControls = []
                }
                return this
            }
        })
    }), r(_e, [g], function(e) {
        function t(e) {
            var t, n, r, i, o, a, s, l, c = Math.max;
            return t = e.documentElement, n = e.body, r = c(t.scrollWidth, n.scrollWidth), i = c(t.clientWidth, n.clientWidth), o = c(t.offsetWidth, n.offsetWidth), a = c(t.scrollHeight, n.scrollHeight), s = c(t.clientHeight, n.clientHeight), l = c(t.offsetHeight, n.offsetHeight), {
                width: r < o ? i : r,
                height: a < l ? s : a
            }
        }

        function n(e) {
            var t, n;
            if (e.changedTouches)
                for (t = "screenX screenY pageX pageY clientX clientY".split(" "), n = 0; n < t.length; n++) e[t[n]] = e.changedTouches[0][t[n]]
        }
        return function(r, i) {
            function o() {
                return s.getElementById(i.handle || r)
            }
            var a, s = i.document || document,
                l, c, u, d, f, h;
            i = i || {}, c = function(r) {
                var c = t(s),
                    p, m;
                n(r), r.preventDefault(), l = r.button, p = o(), f = r.screenX, h = r.screenY, m = window.getComputedStyle ? window.getComputedStyle(p, null).getPropertyValue("cursor") : p.runtimeStyle.cursor, a = e("<div></div>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: c.width,
                    height: c.height,
                    zIndex: 2147483647,
                    opacity: 1e-4,
                    cursor: m
                }).appendTo(s.body), e(s).on("mousemove touchmove", d).on("mouseup touchend", u), i.start(r)
            }, d = function(e) {
                return n(e), e.button !== l ? u(e) : (e.deltaX = e.screenX - f, e.deltaY = e.screenY - h, e.preventDefault(), void i.drag(e))
            }, u = function(t) {
                n(t), e(s).off("mousemove touchmove", d).off("mouseup touchend", u), a.remove(), i.stop && i.stop(t)
            }, this.destroy = function() {
                e(o()).off()
            }, e(o()).on("mousedown touchstart", c)
        }
    }), r(Se, [g, _e], function(e, t) {
        return {
            init: function() {
                var e = this;
                e.on("repaint", e.renderScroll)
            },
            renderScroll: function() {
                function n() {
                    function t(t, a, s, l, c, u) {
                        var d, f, h, p, m, g, v, y, b;
                        if (f = i.getEl("scroll" + t)) {
                            if (y = a.toLowerCase(), b = s.toLowerCase(), e(i.getEl("absend")).css(y, i.layoutRect()[l] - 1), !c) return void e(f).css("display", "none");
                            e(f).css("display", "block"), d = i.getEl("body"), h = i.getEl("scroll" + t + "t"), p = d["client" + s] - 2 * o, p -= n && r ? f["client" + u] : 0, m = d["scroll" + s], g = p / m, v = {}, v[y] = d["offset" + a] + o, v[b] = p, e(f).css(v), v = {}, v[y] = d["scroll" + a] * g, v[b] = p * g, e(h).css(v)
                        }
                    }
                    var n, r, a;
                    a = i.getEl("body"), n = a.scrollWidth > a.clientWidth, r = a.scrollHeight > a.clientHeight, t("h", "Left", "Width", "contentW", n, "Height"), t("v", "Top", "Height", "contentH", r, "Width")
                }

                function r() {
                    function n(n, r, a, s, l) {
                        var c, u = i._id + "-scroll" + n,
                            d = i.classPrefix;
                        e(i.getEl()).append('<div id="' + u + '" class="' + d + "scrollbar " + d + "scrollbar-" + n + '"><div id="' + u + 't" class="' + d + 'scrollbar-thumb"></div></div>'), i.draghelper = new t(u + "t", {
                            start: function() {
                                c = i.getEl("body")["scroll" + r], e("#" + u).addClass(d + "active")
                            },
                            drag: function(e) {
                                var t, u, d, f, h = i.layoutRect();
                                u = h.contentW > h.innerW, d = h.contentH > h.innerH, f = i.getEl("body")["client" + a] - 2 * o, f -= u && d ? i.getEl("scroll" + n)["client" + l] : 0, t = f / i.getEl("body")["scroll" + a], i.getEl("body")["scroll" + r] = c + e["delta" + s] / t
                            },
                            stop: function() {
                                e("#" + u).removeClass(d + "active")
                            }
                        })
                    }
                    i.classes.add("scroll"), n("v", "Top", "Height", "Y", "Width"), n("h", "Left", "Width", "X", "Height")
                }
                var i = this,
                    o = 2;
                i.settings.autoScroll && (i._hasScroll || (i._hasScroll = !0, r(), i.on("wheel", function(e) {
                    var t = i.getEl("body");
                    t.scrollLeft += 10 * (e.deltaX || 0), t.scrollTop += 10 * e.deltaY, n()
                }), e(i.getEl("body")).on("scroll", n)), n())
            }
        }
    }), r(ke, [Ne, Se], function(e, t) {
        return e.extend({
            Defaults: {
                layout: "fit",
                containerCls: "panel"
            },
            Mixins: [t],
            renderHtml: function() {
                var e = this,
                    t = e._layout,
                    n = e.settings.html;
                return e.preRender(), t.preRender(e), "undefined" == typeof n ? n = '<div id="' + e._id + '-body" class="' + e.bodyClasses + '">' + t.renderHtml(e) + "</div>" : ("function" == typeof n && (n = n.call(e)), e._hasBody = !1), '<div id="' + e._id + '" class="' + e.classes + '" hidefocus="1" tabindex="-1" role="group">' + (e._preBodyHtml || "") + n + "</div>"
            }
        })
    }), r(Te, [ve], function(e) {
        function t(t, n, r) {
            var i, o, a, s, l, c, u, d, f, h;
            return f = e.getViewPort(), o = e.getPos(n), a = o.x, s = o.y, t.state.get("fixed") && "static" == e.getRuntimeStyle(document.body, "position") && (a -= f.x, s -= f.y), i = t.getEl(), h = e.getSize(i), l = h.width, c = h.height, h = e.getSize(n), u = h.width, d = h.height, r = (r || "").split(""), "b" === r[0] && (s += d), "r" === r[1] && (a += u), "c" === r[0] && (s += Math.round(d / 2)), "c" === r[1] && (a += Math.round(u / 2)), "b" === r[3] && (s -= c), "r" === r[4] && (a -= l), "c" === r[3] && (s -= Math.round(c / 2)), "c" === r[4] && (a -= Math.round(l / 2)), {
                x: a,
                y: s,
                w: l,
                h: c
            }
        }
        return {
            testMoveRel: function(n, r) {
                for (var i = e.getViewPort(), o = 0; o < r.length; o++) {
                    var a = t(this, n, r[o]);
                    if (this.state.get("fixed")) {
                        if (a.x > 0 && a.x + a.w < i.w && a.y > 0 && a.y + a.h < i.h) return r[o]
                    } else if (a.x > i.x && a.x + a.w < i.w + i.x && a.y > i.y && a.y + a.h < i.h + i.y) return r[o]
                }
                return r[0]
            },
            moveRel: function(e, n) {
                "string" != typeof n && (n = this.testMoveRel(e, n));
                var r = t(this, e, n);
                return this.moveTo(r.x, r.y)
            },
            moveBy: function(e, t) {
                var n = this,
                    r = n.layoutRect();
                return n.moveTo(r.x + e, r.y + t), n
            },
            moveTo: function(t, n) {
                function r(e, t, n) {
                    return e < 0 ? 0 : e + n > t ? (e = t - n, e < 0 ? 0 : e) : e
                }
                var i = this;
                if (i.settings.constrainToViewport) {
                    var o = e.getViewPort(window),
                        a = i.layoutRect();
                    t = r(t, o.w + o.x, a.w), n = r(n, o.h + o.y, a.h)
                }
                return i.state.get("rendered") ? i.layoutRect({
                    x: t,
                    y: n
                }).repaint() : (i.settings.x = t, i.settings.y = n), i.fire("move", {
                    x: t,
                    y: n
                }), i
            }
        }
    }), r(Re, [ve], function(e) {
        return {
            resizeToContent: function() {
                this._layoutRect.autoResize = !0, this._lastRect = null, this.reflow()
            },
            resizeTo: function(t, n) {
                if (t <= 1 || n <= 1) {
                    var r = e.getWindowSize();
                    t = t <= 1 ? t * r.w : t, n = n <= 1 ? n * r.h : n
                }
                return this._layoutRect.autoResize = !1, this.layoutRect({
                    minW: t,
                    minH: n,
                    w: t,
                    h: n
                }).reflow()
            },
            resizeBy: function(e, t) {
                var n = this,
                    r = n.layoutRect();
                return n.resizeTo(r.w + e, r.h + t)
            }
        }
    }), r(Ae, [ke, Te, Re, ve, g, u], function(e, t, n, r, i, o) {
        function a(e, t) {
            for (; e;) {
                if (e == t) return !0;
                e = e.parent()
            }
        }

        function s(e) {
            for (var t = v.length; t--;) {
                var n = v[t],
                    r = n.getParentCtrl(e.target);
                if (n.settings.autohide) {
                    if (r && (a(r, n) || n.parent() === r)) continue;
                    e = n.fire("autohide", {
                        target: e.target
                    }), e.isDefaultPrevented() || n.hide()
                }
            }
        }

        function l() {
            p || (p = function(e) {
                2 != e.button && s(e)
            }, i(document).on("click touchstart", p))
        }

        function c() {
            m || (m = function() {
                var e;
                for (e = v.length; e--;) d(v[e])
            }, i(window).on("scroll", m))
        }

        function u() {
            if (!g) {
                var e = document.documentElement,
                    t = e.clientWidth,
                    n = e.clientHeight;
                g = function() {
                    document.all && t == e.clientWidth && n == e.clientHeight || (t = e.clientWidth, n = e.clientHeight, C.hideAll())
                }, i(window).on("resize", g)
            }
        }

        function d(e) {
            function t(t, n) {
                for (var r, i = 0; i < v.length; i++)
                    if (v[i] != e)
                        for (r = v[i].parent(); r && (r = r.parent());) r == e && v[i].fixed(t).moveBy(0, n).repaint()
            }
            var n = r.getViewPort().y;
            e.settings.autofix && (e.state.get("fixed") ? e._autoFixY > n && (e.fixed(!1).layoutRect({
                y: e._autoFixY
            }).repaint(), t(!1, e._autoFixY - n)) : (e._autoFixY = e.layoutRect().y, e._autoFixY < n && (e.fixed(!0).layoutRect({
                y: 0
            }).repaint(), t(!0, n - e._autoFixY))))
        }

        function f(e, t) {
            var n, r = C.zIndex || 65535,
                o;
            if (e) y.push(t);
            else
                for (n = y.length; n--;) y[n] === t && y.splice(n, 1);
            if (y.length)
                for (n = 0; n < y.length; n++) y[n].modal && (r++, o = y[n]), y[n].getEl().style.zIndex = r, y[n].zIndex = r, r++;
            var a = i("#" + t.classPrefix + "modal-block", t.getContainerElm())[0];
            o ? i(a).css("z-index", o.zIndex - 1) : a && (a.parentNode.removeChild(a), b = !1), C.currentZIndex = r
        }

        function h(e) {
            var t;
            for (t = v.length; t--;) v[t] === e && v.splice(t, 1);
            for (t = y.length; t--;) y[t] === e && y.splice(t, 1)
        }
        var p, m, g, v = [],
            y = [],
            b, C = e.extend({
                Mixins: [t, n],
                init: function(e) {
                    var t = this;
                    t._super(e), t._eventsRoot = t, t.classes.add("floatpanel"), e.autohide && (l(), u(), v.push(t)), e.autofix && (c(), t.on("move", function() {
                        d(this)
                    })), t.on("postrender show", function(e) {
                        if (e.control == t) {
                            var n, r = t.classPrefix;
                            t.modal && !b && (n = i("#" + r + "modal-block", t.getContainerElm()), n[0] || (n = i('<div id="' + r + 'modal-block" class="' + r + "reset " + r + 'fade"></div>').appendTo(t.getContainerElm())), o.setTimeout(function() {
                                n.addClass(r + "in"), i(t.getEl()).addClass(r + "in")
                            }), b = !0), f(!0, t)
                        }
                    }), t.on("show", function() {
                        t.parents().each(function(e) {
                            if (e.state.get("fixed")) return t.fixed(!0), !1
                        })
                    }), e.popover && (t._preBodyHtml = '<div class="' + t.classPrefix + 'arrow"></div>', t.classes.add("popover").add("bottom").add(t.isRtl() ? "end" : "start")), t.aria("label", e.ariaLabel), t.aria("labelledby", t._id), t.aria("describedby", t.describedBy || t._id + "-none")
                },
                fixed: function(e) {
                    var t = this;
                    if (t.state.get("fixed") != e) {
                        if (t.state.get("rendered")) {
                            var n = r.getViewPort();
                            e ? t.layoutRect().y -= n.y : t.layoutRect().y += n.y
                        }
                        t.classes.toggle("fixed", e), t.state.set("fixed", e)
                    }
                    return t
                },
                show: function() {
                    var e = this,
                        t, n = e._super();
                    for (t = v.length; t-- && v[t] !== e;);
                    return t === -1 && v.push(e), n
                },
                hide: function() {
                    return h(this), f(!1, this), this._super()
                },
                hideAll: function() {
                    C.hideAll()
                },
                close: function() {
                    var e = this;
                    return e.fire("close").isDefaultPrevented() || (e.remove(), f(!1, e)), e
                },
                remove: function() {
                    h(this), this._super()
                },
                postRender: function() {
                    var e = this;
                    return e.settings.bodyRole && this.getEl("body").setAttribute("role", e.settings.bodyRole), e._super()
                }
            });
        return C.hideAll = function() {
            for (var e = v.length; e--;) {
                var t = v[e];
                t && t.settings.autohide && (t.hide(), v.splice(e, 1))
            }
        }, C
    }), r(Be, [Ae, ke, ve, g, _e, ye, d, u], function(e, t, n, r, i, o, a, s) {
        function l(e) {
            var t = "width=device-width,initial-scale=1.0,user-scalable=0,minimum-scale=1.0,maximum-scale=1.0",
                n = r("meta[name=viewport]")[0],
                i;
            a.overrideViewPort !== !1 && (n || (n = document.createElement("meta"), n.setAttribute("name", "viewport"), document.getElementsByTagName("head")[0].appendChild(n)), i = n.getAttribute("content"), i && "undefined" != typeof h && (h = i), n.setAttribute("content", e ? t : h))
        }

        function c(e, t) {
            u() && t === !1 && r([document.documentElement, document.body]).removeClass(e + "fullscreen")
        }

        function u() {
            for (var e = 0; e < f.length; e++)
                if (f[e]._fullscreen) return !0;
            return !1
        }

        function d() {
            function e() {
                var e, t = n.getWindowSize(),
                    r;
                for (e = 0; e < f.length; e++) r = f[e].layoutRect(), f[e].moveTo(f[e].settings.x || Math.max(0, t.w / 2 - r.w / 2), f[e].settings.y || Math.max(0, t.h / 2 - r.h / 2))
            }
            if (!a.desktop) {
                var t = {
                    w: window.innerWidth,
                    h: window.innerHeight
                };
                s.setInterval(function() {
                    var e = window.innerWidth,
                        n = window.innerHeight;
                    t.w == e && t.h == n || (t = {
                        w: e,
                        h: n
                    }, r(window).trigger("resize"))
                }, 100)
            }
            r(window).on("resize", e)
        }
        var f = [],
            h = "",
            p = e.extend({
                modal: !0,
                Defaults: {
                    border: 1,
                    layout: "flex",
                    containerCls: "panel",
                    role: "dialog",
                    callbacks: {
                        submit: function() {
                            this.fire("submit", {
                                data: this.toJSON()
                            })
                        },
                        close: function() {
                            this.close()
                        }
                    }
                },
                init: function(e) {
                    var r = this;
                    r._super(e), r.isRtl() && r.classes.add("rtl"), r.classes.add("window"), r.bodyClasses.add("window-body"), r.state.set("fixed", !0), e.buttons && (r.statusbar = new t({
                        layout: "flex",
                        border: "1 0 0 0",
                        spacing: 3,
                        padding: 10,
                        align: "center",
                        pack: r.isRtl() ? "start" : "end",
                        defaults: {
                            type: "button"
                        },
                        items: e.buttons
                    }), r.statusbar.classes.add("foot"), r.statusbar.parent(r)), r.on("click", function(e) {
                        var t = r.classPrefix + "close";
                        (n.hasClass(e.target, t) || n.hasClass(e.target.parentNode, t)) && r.close()
                    }), r.on("cancel", function() {
                        r.close()
                    }), r.aria("describedby", r.describedBy || r._id + "-none"), r.aria("label", e.title), r._fullscreen = !1
                },
                recalc: function() {
                    var e = this,
                        t = e.statusbar,
                        r, i, o, a;
                    e._fullscreen && (e.layoutRect(n.getWindowSize()), e.layoutRect().contentH = e.layoutRect().innerH), e._super(), r = e.layoutRect(), e.settings.title && !e._fullscreen && (i = r.headerW, i > r.w && (o = r.x - Math.max(0, i / 2), e.layoutRect({
                        w: i,
                        x: o
                    }), a = !0)), t && (t.layoutRect({
                        w: e.layoutRect().innerW
                    }).recalc(), i = t.layoutRect().minW + r.deltaW, i > r.w && (o = r.x - Math.max(0, i - r.w), e.layoutRect({
                        w: i,
                        x: o
                    }), a = !0)), a && e.recalc()
                },
                initLayoutRect: function() {
                    var e = this,
                        t = e._super(),
                        r = 0,
                        i;
                    if (e.settings.title && !e._fullscreen) {
                        i = e.getEl("head");
                        var o = n.getSize(i);
                        t.headerW = o.width, t.headerH = o.height, r += t.headerH
                    }
                    e.statusbar && (r += e.statusbar.layoutRect().h), t.deltaH += r, t.minH += r, t.h += r;
                    var a = n.getWindowSize();
                    return t.x = e.settings.x || Math.max(0, a.w / 2 - t.w / 2), t.y = e.settings.y || Math.max(0, a.h / 2 - t.h / 2), t
                },
                renderHtml: function() {
                    var e = this,
                        t = e._layout,
                        n = e._id,
                        r = e.classPrefix,
                        i = e.settings,
                        o = "",
                        a = "",
                        s = i.html;
                    return e.preRender(), t.preRender(e), i.title && (o = '<div id="' + n + '-head" class="' + r + 'window-head"><div id="' + n + '-title" class="' + r + 'title">' + e.encode(i.title) + '</div><div id="' + n + '-dragh" class="' + r + 'dragh"></div><button type="button" class="' + r + 'close" aria-hidden="true"><i class="mce-ico mce-i-remove"></i></button></div>'), i.url && (s = '<iframe src="' + i.url + '" tabindex="-1"></iframe>'), "undefined" == typeof s && (s = t.renderHtml(e)), e.statusbar && (a = e.statusbar.renderHtml()), '<div id="' + n + '" class="' + e.classes + '" hidefocus="1"><div class="' + e.classPrefix + 'reset" role="application">' + o + '<div id="' + n + '-body" class="' + e.bodyClasses + '">' + s + "</div>" + a + "</div></div>"
                },
                fullscreen: function(e) {
                    var t = this,
                        i = document.documentElement,
                        a, l = t.classPrefix,
                        c;
                    if (e != t._fullscreen)
                        if (r(window).on("resize", function() {
                                var e;
                                if (t._fullscreen)
                                    if (a) t._timer || (t._timer = s.setTimeout(function() {
                                        var e = n.getWindowSize();
                                        t.moveTo(0, 0).resizeTo(e.w, e.h), t._timer = 0
                                    }, 50));
                                    else {
                                        e = (new Date).getTime();
                                        var r = n.getWindowSize();
                                        t.moveTo(0, 0).resizeTo(r.w, r.h), (new Date).getTime() - e > 50 && (a = !0)
                                    }
                            }), c = t.layoutRect(), t._fullscreen = e, e) {
                            t._initial = {
                                x: c.x,
                                y: c.y,
                                w: c.w,
                                h: c.h
                            }, t.borderBox = o.parseBox("0"), t.getEl("head").style.display = "none", c.deltaH -= c.headerH + 2, r([i, document.body]).addClass(l + "fullscreen"), t.classes.add("fullscreen");
                            var u = n.getWindowSize();
                            t.moveTo(0, 0).resizeTo(u.w, u.h)
                        } else t.borderBox = o.parseBox(t.settings.border), t.getEl("head").style.display = "", c.deltaH += c.headerH, r([i, document.body]).removeClass(l + "fullscreen"), t.classes.remove("fullscreen"), t.moveTo(t._initial.x, t._initial.y).resizeTo(t._initial.w, t._initial.h);
                    return t.reflow()
                },
                postRender: function() {
                    var e = this,
                        t;
                    setTimeout(function() {
                        e.classes.add("in"), e.fire("open")
                    }, 0), e._super(), e.statusbar && e.statusbar.postRender(), e.focus(), this.dragHelper = new i(e._id + "-dragh", {
                        start: function() {
                            t = {
                                x: e.layoutRect().x,
                                y: e.layoutRect().y
                            }
                        },
                        drag: function(n) {
                            e.moveTo(t.x + n.deltaX, t.y + n.deltaY)
                        }
                    }), e.on("submit", function(t) {
                        t.isDefaultPrevented() || e.close()
                    }), f.push(e), l(!0)
                },
                submit: function() {
                    return this.fire("submit", {
                        data: this.toJSON()
                    })
                },
                remove: function() {
                    var e = this,
                        t;
                    for (e.dragHelper.destroy(), e._super(), e.statusbar && this.statusbar.remove(), c(e.classPrefix, !1), t = f.length; t--;) f[t] === e && f.splice(t, 1);
                    l(f.length > 0)
                },
                getContentWindow: function() {
                    var e = this.getEl().getElementsByTagName("iframe")[0];
                    return e ? e.contentWindow : null
                }
            });
        return d(), p
    }), r(De, [Be], function(e) {
        var t = e.extend({
            init: function(e) {
                e = {
                    border: 1,
                    padding: 20,
                    layout: "flex",
                    pack: "center",
                    align: "center",
                    containerCls: "panel",
                    autoScroll: !0,
                    buttons: {
                        type: "button",
                        text: "Ok",
                        action: "ok"
                    },
                    items: {
                        type: "label",
                        multiline: !0,
                        maxWidth: 500,
                        maxHeight: 200
                    }
                }, this._super(e)
            },
            Statics: {
                OK: 1,
                OK_CANCEL: 2,
                YES_NO: 3,
                YES_NO_CANCEL: 4,
                msgBox: function(n) {
                    function r(e, t, n) {
                        return {
                            type: "button",
                            text: e,
                            subtype: n ? "primary" : "",
                            onClick: function(e) {
                                e.control.parents()[1].close(), o(t)
                            }
                        }
                    }
                    var i, o = n.callback || function() {};
                    switch (n.buttons) {
                        case t.OK_CANCEL:
                            i = [r("Ok", !0, !0), r("Cancel", !1)];
                            break;
                        case t.YES_NO:
                        case t.YES_NO_CANCEL:
                            i = [r("Yes", 1, !0), r("No", 0)], n.buttons == t.YES_NO_CANCEL && i.push(r("Cancel", -1));
                            break;
                        default:
                            i = [r("Ok", !0, !0)]
                    }
                    return new e({
                        padding: 20,
                        x: n.x,
                        y: n.y,
                        minWidth: 300,
                        minHeight: 100,
                        layout: "flex",
                        pack: "center",
                        align: "center",
                        buttons: i,
                        title: n.title,
                        role: "alertdialog",
                        items: {
                            type: "label",
                            multiline: !0,
                            maxWidth: 500,
                            maxHeight: 200,
                            text: n.text
                        },
                        onPostRender: function() {
                            this.aria("describedby", this.items()[0]._id)
                        },
                        onClose: n.onClose,
                        onCancel: function() {
                            o(!1)
                        }
                    }).renderTo(document.body).reflow()
                },
                alert: function(e, n) {
                    return "string" == typeof e && (e = {
                        text: e
                    }), e.callback = n, t.msgBox(e)
                },
                confirm: function(e, n) {
                    return "string" == typeof e && (e = {
                        text: e
                    }), e.callback = n, e.buttons = t.OK_CANCEL, t.msgBox(e)
                }
            }
        });
        return t
    }), r(Le, [Be, De], function(e, t) {
        return function(n) {
            function r() {
                if (s.length) return s[s.length - 1]
            }

            function i(e) {
                n.fire("OpenWindow", {
                    win: e
                })
            }

            function o(e) {
                n.fire("CloseWindow", {
                    win: e
                })
            }
            var a = this,
                s = [];
            a.windows = s, n.on("remove", function() {
                for (var e = s.length; e--;) s[e].close()
            }), a.open = function(t, r) {
                var a;
                return n.editorManager.setActive(n), t.title = t.title || " ", t.url = t.url || t.file, t.url && (t.width = parseInt(t.width || 320, 10), t.height = parseInt(t.height || 240, 10)), t.body && (t.items = {
                    defaults: t.defaults,
                    type: t.bodyType || "form",
                    items: t.body,
                    data: t.data,
                    callbacks: t.commands
                }), t.url || t.buttons || (t.buttons = [{
                    text: "Ok",
                    subtype: "primary",
                    onclick: function() {
                        a.find("form")[0].submit()
                    }
                }, {
                    text: "Cancel",
                    onclick: function() {
                        a.close()
                    }
                }]), a = new e(t), s.push(a), a.on("close", function() {
                    for (var e = s.length; e--;) s[e] === a && s.splice(e, 1);
                    s.length || n.focus(), o(a)
                }), t.data && a.on("postRender", function() {
                    this.find("*").each(function(e) {
                        var n = e.name();
                        n in t.data && e.value(t.data[n])
                    })
                }), a.features = t || {}, a.params = r || {}, 1 === s.length && n.nodeChanged(), a = a.renderTo().reflow(), i(a), a
            }, a.alert = function(e, r, a) {
                var s;
                s = t.alert(e, function() {
                    r ? r.call(a || this) : n.focus()
                }), s.on("close", function() {
                    o(s)
                }), i(s)
            }, a.confirm = function(e, n, r) {
                var a;
                a = t.confirm(e, function(e) {
                    n.call(r || this, e)
                }), a.on("close", function() {
                    o(a)
                }), i(a)
            }, a.close = function() {
                r() && r().close()
            }, a.getParams = function() {
                return r() ? r().params : null
            }, a.setParams = function(e) {
                r() && (r().params = e)
            }, a.getWindows = function() {
                return s
            }
        }
    }), r(Me, [xe, Te], function(e, t) {
        return e.extend({
            Mixins: [t],
            Defaults: {
                classes: "widget tooltip tooltip-n"
            },
            renderHtml: function() {
                var e = this,
                    t = e.classPrefix;
                return '<div id="' + e._id + '" class="' + e.classes + '" role="presentation"><div class="' + t + 'tooltip-arrow"></div><div class="' + t + 'tooltip-inner">' + e.encode(e.state.get("text")) + "</div></div>"
            },
            bindStates: function() {
                var e = this;
                return e.state.on("change:text", function(t) {
                    e.getEl().lastChild.innerHTML = e.encode(t.value)
                }), e._super()
            },
            repaint: function() {
                var e = this,
                    t, n;
                t = e.getEl().style, n = e._layoutRect, t.left = n.x + "px", t.top = n.y + "px", t.zIndex = 131070
            }
        })
    }), r(Pe, [xe, Me], function(e, t) {
        var n, r = e.extend({
            init: function(e) {
                var t = this;
                t._super(e), e = t.settings, t.canFocus = !0, e.tooltip && r.tooltips !== !1 && (t.on("mouseenter", function(n) {
                    var r = t.tooltip().moveTo(-65535);
                    if (n.control == t) {
                        var i = r.text(e.tooltip).show().testMoveRel(t.getEl(), ["bc-tc", "bc-tl", "bc-tr"]);
                        r.classes.toggle("tooltip-n", "bc-tc" == i), r.classes.toggle("tooltip-nw", "bc-tl" == i), r.classes.toggle("tooltip-ne", "bc-tr" == i), r.moveRel(t.getEl(), i)
                    } else r.hide()
                }), t.on("mouseleave mousedown click", function() {
                    t.tooltip().hide()
                })), t.aria("label", e.ariaLabel || e.tooltip)
            },
            tooltip: function() {
                return n || (n = new t({
                    type: "tooltip"
                }), n.renderTo()), n
            },
            postRender: function() {
                var e = this,
                    t = e.settings;
                e._super(), e.parent() || !t.width && !t.height || (e.initLayoutRect(), e.repaint()), t.autofocus && e.focus()
            },
            bindStates: function() {
                function e(e) {
                    n.aria("disabled", e), n.classes.toggle("disabled", e)
                }

                function t(e) {
                    n.aria("pressed", e), n.classes.toggle("active", e)
                }
                var n = this;
                return n.state.on("change:disabled", function(t) {
                    e(t.value)
                }), n.state.on("change:active", function(e) {
                    t(e.value)
                }), n.state.get("disabled") && e(!0), n.state.get("active") && t(!0), n._super()
            },
            remove: function() {
                this._super(), n && (n.remove(), n = null)
            }
        });
        return r
    }), r(Oe, [Pe], function(e) {
        return e.extend({
            Defaults: {
                value: 0
            },
            init: function(e) {
                var t = this;
                t._super(e), t.classes.add("progress"), t.settings.filter || (t.settings.filter = function(e) {
                    return Math.round(e)
                })
            },
            renderHtml: function() {
                var e = this,
                    t = e._id,
                    n = this.classPrefix;
                return '<div id="' + t + '" class="' + e.classes + '"><div class="' + n + 'bar-container"><div class="' + n + 'bar"></div></div><div class="' + n + 'text">0%</div></div>'
            },
            postRender: function() {
                var e = this;
                return e._super(), e.value(e.settings.value), e
            },
            bindStates: function() {
                function e(e) {
                    e = t.settings.filter(e), t.getEl().lastChild.innerHTML = e + "%", t.getEl().firstChild.firstChild.style.width = e + "%"
                }
                var t = this;
                return t.state.on("change:value", function(t) {
                    e(t.value)
                }), e(t.state.get("value")), t._super()
            }
        })
    }), r(He, [xe, Te, Oe, u], function(e, t, n, r) {
        return e.extend({
            Mixins: [t],
            Defaults: {
                classes: "widget notification"
            },
            init: function(e) {
                var t = this;
                t._super(e), e.text && t.text(e.text), e.icon && (t.icon = e.icon), e.color && (t.color = e.color), e.type && t.classes.add("notification-" + e.type), e.timeout && (e.timeout < 0 || e.timeout > 0) && !e.closeButton ? t.closeButton = !1 : (t.classes.add("has-close"), t.closeButton = !0), e.progressBar && (t.progressBar = new n), t.on("click", function(e) {
                    e.target.className.indexOf(t.classPrefix + "close") != -1 && t.close()
                })
            },
            renderHtml: function() {
                var e = this,
                    t = e.classPrefix,
                    n = "",
                    r = "",
                    i = "",
                    o = "";
                return e.icon && (n = '<i class="' + t + "ico " + t + "i-" + e.icon + '"></i>'), e.color && (o = ' style="background-color: ' + e.color + '"'), e.closeButton && (r = '<button type="button" class="' + t + 'close" aria-hidden="true">\xd7</button>'), e.progressBar && (i = e.progressBar.renderHtml()), '<div id="' + e._id + '" class="' + e.classes + '"' + o + ' role="presentation">' + n + '<div class="' + t + 'notification-inner">' + e.state.get("text") + "</div>" + i + r + "</div>"
            },
            postRender: function() {
                var e = this;
                return r.setTimeout(function() {
                    e.$el.addClass(e.classPrefix + "in")
                }), e._super()
            },
            bindStates: function() {
                var e = this;
                return e.state.on("change:text", function(t) {
                    e.getEl().childNodes[1].innerHTML = t.value
                }), e.progressBar && e.progressBar.bindStates(), e._super()
            },
            close: function() {
                var e = this;
                return e.fire("close").isDefaultPrevented() || e.remove(), e
            },
            repaint: function() {
                var e = this,
                    t, n;
                t = e.getEl().style, n = e._layoutRect, t.left = n.x + "px", t.top = n.y + "px", t.zIndex = 65534
            }
        })
    }), r(Ie, [He, u, m], function(e, t, n) {
        return function(r) {
            function i() {
                if (f.length) return f[f.length - 1]
            }

            function o() {
                t.requestAnimationFrame(function() {
                    a(), s()
                })
            }

            function a() {
                for (var e = 0; e < f.length; e++) f[e].moveTo(0, 0)
            }

            function s() {
                if (f.length > 0) {
                    var e = f.slice(0, 1)[0],
                        t = r.inline ? r.getElement() : r.getContentAreaContainer();
                    if (e.moveRel(t, "tc-tc"), f.length > 1)
                        for (var n = 1; n < f.length; n++) f[n].moveRel(f[n - 1].getEl(), "bc-tc")
                }
            }

            function l(e, t) {
                if (!u(t)) return null;
                var r = n.grep(e, function(e) {
                    return c(t, e)
                });
                return 0 === r.length ? null : r[0]
            }

            function c(e, t) {
                return e.type === t.settings.type && e.text === t.settings.text
            }

            function u(e) {
                return !e.progressBar && !e.timeout
            }
            var d = this,
                f = [];
            d.notifications = f, r.on("remove", function() {
                for (var e = f.length; e--;) f[e].close()
            }), r.on("ResizeEditor", s), r.on("ResizeWindow", o), d.open = function(t) {
                if (!r.removed) {
                    var n;
                    r.editorManager.setActive(r);
                    var i = l(f, t);
                    return null === i ? (n = new e(t), f.push(n), t.timeout > 0 && (n.timer = setTimeout(function() {
                        n.close()
                    }, t.timeout)), n.on("close", function() {
                        var e = f.length;
                        for (n.timer && r.getWin().clearTimeout(n.timer); e--;) f[e] === n && f.splice(e, 1);
                        s()
                    }), n.renderTo(), s()) : n = i, n
                }
            }, d.close = function() {
                i() && i().close()
            }, d.getNotifications = function() {
                return f
            }, r.on("SkinLoaded", function() {
                var e = r.settings.service_message;
                e && r.notificationManager.open({
                    text: e,
                    type: "warning",
                    timeout: 0,
                    icon: ""
                })
            })
        }
    }), r(Fe, [w], function(e) {
        function t(t, n, r) {
            for (var i = []; n && n != t; n = n.parentNode) i.push(e.nodeIndex(n, r));
            return i
        }

        function n(e, t) {
            var n, r, i;
            for (r = e, n = t.length - 1; n >= 0; n--) {
                if (i = r.childNodes, t[n] > i.length - 1) return null;
                r = i[t[n]]
            }
            return r
        }
        return {
            create: t,
            resolve: n
        }
    }), r(ze, [I, T, y, Fe, A, C, d, m, u, k, $, oe], function(e, t, n, r, i, o, a, s, l, c, u, d) {
        return function(f) {
            function h(e, t) {
                try {
                    f.getDoc().execCommand(e, !1, t)
                } catch (n) {}
            }

            function p() {
                var e = f.getDoc().documentMode;
                return e ? e : 6
            }

            function m(e) {
                return e.isDefaultPrevented()
            }

            function g(e) {
                var t, n;
                e.dataTransfer && (f.selection.isCollapsed() && "IMG" == e.target.tagName && re.select(e.target), t = f.selection.getContent(), t.length > 0 && (n = ue + escape(f.id) + "," + escape(t), e.dataTransfer.setData(de, n)))
            }

            function v(e) {
                var t;
                return e.dataTransfer && (t = e.dataTransfer.getData(de), t && t.indexOf(ue) >= 0) ? (t = t.substr(ue.length).split(","), {
                    id: unescape(t[0]),
                    html: unescape(t[1])
                }) : null
            }

            function y(e) {
                f.queryCommandSupported("mceInsertClipboardContent") ? f.execCommand("mceInsertClipboardContent", !1, {
                    content: e
                }) : f.execCommand("mceInsertContent", !1, e)
            }

            function b() {
                function i(e) {
                    var t = x.schema.getBlockElements(),
                        n = f.getBody();
                    if ("BR" != e.nodeName) return !1;
                    for (; e != n && !t[e.nodeName]; e = e.parentNode)
                        if (e.nextSibling) return !1;
                    return !0
                }

                function o(e, t) {
                    var n;
                    for (n = e.nextSibling; n && n != t; n = n.nextSibling)
                        if ((3 != n.nodeType || 0 !== Z.trim(n.data).length) && n !== t) return !1;
                    return n === t
                }

                function a(e, t, r) {
                    var o, a, s;
                    if (x.isChildOf(e, f.getBody()))
                        for (s = x.schema.getNonEmptyElements(), o = new n(r || e, e); a = o[t ? "next" : "prev"]();) {
                            if (s[a.nodeName] && !i(a)) return a;
                            if (3 == a.nodeType && a.data.length > 0) return a
                        }
                }

                function c(e) {
                    var n, r, i, o, s;
                    if (!e.collapsed && (n = x.getParent(t.getNode(e.startContainer, e.startOffset), x.isBlock), r = x.getParent(t.getNode(e.endContainer, e.endOffset), x.isBlock), s = f.schema.getTextBlockElements(), n != r && s[n.nodeName] && s[r.nodeName] && "false" !== x.getContentEditable(n) && "false" !== x.getContentEditable(r))) return e.deleteContents(), i = a(n, !1), o = a(r, !0), x.isEmpty(r) || Z(n).append(r.childNodes), Z(r).remove(), i ? 1 == i.nodeType ? "BR" == i.nodeName ? (e.setStartBefore(i), e.setEndBefore(i)) : (e.setStartAfter(i), e.setEndAfter(i)) : (e.setStart(i, i.data.length), e.setEnd(i, i.data.length)) : o && (1 == o.nodeType ? (e.setStartBefore(o), e.setEndBefore(o)) : (e.setStart(o, 0), e.setEnd(o, 0))), w.setRng(e), !0
                }

                function u(e, n) {
                    var r, i, s, l, c, u;
                    if (!e.collapsed) return e;
                    if (c = e.startContainer, u = e.startOffset, 3 == c.nodeType)
                        if (n) {
                            if (u < c.data.length) return e
                        } else if (u > 0) return e;
                    r = t.getNode(c, u), s = x.getParent(r, x.isBlock), i = a(f.getBody(), n, r), l = x.getParent(i, x.isBlock);
                    var d = 1 === c.nodeType && u > c.childNodes.length - 1;
                    if (!r || !i) return e;
                    if (l && s != l)
                        if (n) {
                            if (!o(s, l)) return e;
                            1 == r.nodeType ? "BR" == r.nodeName ? e.setStartBefore(r) : e.setStartAfter(r) : e.setStart(r, r.data.length), 1 == i.nodeType ? e.setEnd(i, 0) : e.setEndBefore(i)
                        } else {
                            if (!o(l, s)) return e;
                            1 == i.nodeType ? "BR" == i.nodeName ? e.setStartBefore(i) : e.setStartAfter(i) : e.setStart(i, i.data.length), 1 == r.nodeType && d ? e.setEndAfter(r) : e.setEndBefore(r)
                        }
                    return e
                }

                function d(e) {
                    var t = w.getRng();
                    if (t = u(t, e), c(t)) return !0
                }

                function h(e, t) {
                    function n(e, n) {
                        return m = Z(n).parents().filter(function(e, t) {
                            return !!f.schema.getTextInlineElements()[t.nodeName]
                        }), l = e.cloneNode(!1), m = s.map(m, function(e) {
                            return e = e.cloneNode(!1), l.hasChildNodes() ? (e.appendChild(l.firstChild), l.appendChild(e)) : l.appendChild(e), l.appendChild(e), e
                        }), m.length ? (p = x.create("br"), m[0].appendChild(p), x.replace(l, e), t.setStartBefore(p), t.setEndBefore(p), f.selection.setRng(t), p) : null
                    }

                    function i(e) {
                        return e && f.schema.getTextBlockElements()[e.tagName]
                    }
                    var o, a, l, c, u, d, h, p, m;
                    if (t.collapsed && (d = t.startContainer, h = t.startOffset, a = x.getParent(d, x.isBlock), i(a)))
                        if (1 == d.nodeType) {
                            if (d = d.childNodes[h], d && "BR" != d.tagName) return;
                            if (u = e ? a.nextSibling : a.previousSibling, x.isEmpty(a) && i(u) && x.isEmpty(u) && n(a, d)) return x.remove(u), !0
                        } else if (3 == d.nodeType) {
                        if (o = r.create(a, d), c = a.cloneNode(!0), d = r.resolve(c, o), e) {
                            if (h >= d.data.length) return;
                            d.deleteData(h, 1)
                        } else {
                            if (h <= 0) return;
                            d.deleteData(h - 1, 1)
                        }
                        if (x.isEmpty(c)) return n(a, d)
                    }
                }

                function p(e) {
                    var t, n, r;
                    d(e) || (s.each(f.getBody().getElementsByTagName("*"), function(e) {
                        "SPAN" == e.tagName && e.setAttribute("mce-data-marked", 1), !e.hasAttribute("data-mce-style") && e.hasAttribute("style") && f.dom.setAttrib(e, "style", f.dom.getAttrib(e, "style"))
                    }), t = new E(function() {}), t.observe(f.getDoc(), {
                        childList: !0,
                        attributes: !0,
                        subtree: !0,
                        attributeFilter: ["style"]
                    }), f.getDoc().execCommand(e ? "ForwardDelete" : "Delete", !1, null), n = f.selection.getRng(), r = n.startContainer.parentNode, s.each(t.takeRecords(), function(e) {
                        if (x.isChildOf(e.target, f.getBody())) {
                            if ("style" == e.attributeName) {
                                var t = e.target.getAttribute("data-mce-style");
                                t ? e.target.setAttribute("style", t) : e.target.removeAttribute("style")
                            }
                            s.each(e.addedNodes, function(e) {
                                if ("SPAN" == e.nodeName && !e.getAttribute("mce-data-marked")) {
                                    var t, i;
                                    e == r && (t = n.startOffset, i = e.firstChild), x.remove(e, !0), i && (n.setStart(i, t), n.setEnd(i, t), f.selection.setRng(n))
                                }
                            })
                        }
                    }), t.disconnect(), s.each(f.dom.select("span[mce-data-marked]"), function(e) {
                        e.removeAttribute("mce-data-marked")
                    }))
                }

                function b(e) {
                    f.undoManager.transact(function() {
                        p(e)
                    })
                }
                var C = f.getDoc(),
                    x = f.dom,
                    w = f.selection,
                    E = window.MutationObserver,
                    N, _;
                E || (N = !0, E = function() {
                    function e(e) {
                        var t = e.relatedNode || e.target;
                        n.push({
                            target: t,
                            addedNodes: [t]
                        })
                    }

                    function t(e) {
                        var t = e.relatedNode || e.target;
                        n.push({
                            target: t,
                            attributeName: e.attrName
                        })
                    }
                    var n = [],
                        r;
                    this.observe = function(n) {
                        r = n, r.addEventListener("DOMSubtreeModified", e, !1), r.addEventListener("DOMNodeInsertedIntoDocument", e, !1), r.addEventListener("DOMNodeInserted", e, !1), r.addEventListener("DOMAttrModified", t, !1)
                    }, this.disconnect = function() {
                        r.removeEventListener("DOMSubtreeModified", e, !1), r.removeEventListener("DOMNodeInsertedIntoDocument", e, !1), r.removeEventListener("DOMNodeInserted", e, !1), r.removeEventListener("DOMAttrModified", t, !1)
                    }, this.takeRecords = function() {
                        return n
                    }
                }), f.on("keydown", function(e) {
                    var t = e.keyCode == te,
                        n = e.ctrlKey || e.metaKey;
                    if (!m(e) && (t || e.keyCode == ee)) {
                        var r = f.selection.getRng(),
                            i = r.startContainer,
                            o = r.startOffset;
                        if (t && e.shiftKey) return;
                        if (h(t, r)) return void e.preventDefault();
                        if (!n && r.collapsed && 3 == i.nodeType && (t ? o < i.data.length : o > 0)) return;
                        e.preventDefault(), n && f.selection.getSel().modify("extend", t ? "forward" : "backward", e.metaKey ? "lineboundary" : "word"), p(t)
                    }
                }), f.on("keypress", function(t) {
                    if (!m(t) && !w.isCollapsed() && t.charCode > 31 && !e.metaKeyPressed(t)) {
                        var n, r, i, o, a, s;
                        n = f.selection.getRng(), s = String.fromCharCode(t.charCode), t.preventDefault(), r = Z(n.startContainer).parents().filter(function(e, t) {
                            return !!f.schema.getTextInlineElements()[t.nodeName]
                        }), p(!0), r = r.filter(function(e, t) {
                            return !Z.contains(f.getBody(), t)
                        }), r.length ? (i = x.createFragment(), r.each(function(e, t) {
                            t = t.cloneNode(!1), i.hasChildNodes() ? (t.appendChild(i.firstChild), i.appendChild(t)) : (a = t, i.appendChild(t)), i.appendChild(t)
                        }), a.appendChild(f.getDoc().createTextNode(s)), o = x.getParent(n.startContainer, x.isBlock), x.isEmpty(o) ? Z(o).empty().append(i) : n.insertNode(i), n.setStart(a.firstChild, 1), n.setEnd(a.firstChild, 1), f.selection.setRng(n)) : f.selection.setContent(s)
                    }
                }), f.addCommand("Delete", function() {
                    p()
                }), f.addCommand("ForwardDelete", function() {
                    p(!0)
                }), N || (f.on("dragstart", function(e) {
                    _ = w.getRng(), g(e)
                }), f.on("drop", function(e) {
                    if (!m(e)) {
                        var n = v(e);
                        n && (e.preventDefault(), l.setEditorTimeout(f, function() {
                            var r = t.getCaretRangeFromPoint(e.x, e.y, C);
                            _ && (w.setRng(_), _ = null, b()), w.setRng(r), y(n.html)
                        }))
                    }
                }), f.on("cut", function(e) {
                    m(e) || !e.clipboardData || f.selection.isCollapsed() || (e.preventDefault(), e.clipboardData.clearData(), e.clipboardData.setData("text/html", f.selection.getContent()), e.clipboardData.setData("text/plain", f.selection.getContent({
                        format: "text"
                    })), l.setEditorTimeout(f, function() {
                        b(!0)
                    }))
                }))
            }

            function C() {
                function e(e) {
                    var t = ne.create("body"),
                        n = e.cloneContents();
                    return t.appendChild(n), re.serializer.serialize(t, {
                        format: "html"
                    })
                }

                function n(n) {
                    if (!n.setStart) {
                        if (n.item) return !1;
                        var r = n.duplicate();
                        return r.moveToElementText(f.getBody()), t.compareRanges(n, r)
                    }
                    var i = e(n),
                        o = ne.createRng();
                    o.selectNode(f.getBody());
                    var a = e(o);
                    return i === a
                }
                f.on("keydown", function(e) {
                    var t = e.keyCode,
                        r, i;
                    if (!m(e) && (t == te || t == ee)) {
                        if (r = f.selection.isCollapsed(), i = f.getBody(), r && !ne.isEmpty(i)) return;
                        if (!r && !n(f.selection.getRng())) return;
                        e.preventDefault(), f.setContent(""), i.firstChild && ne.isBlock(i.firstChild) ? f.selection.setCursorLocation(i.firstChild, 0) : f.selection.setCursorLocation(i, 0), f.nodeChanged()
                    }
                })
            }

            function x() {
                f.shortcuts.add("meta+a", null, "SelectAll")
            }

            function w() {
                f.settings.content_editable || ne.bind(f.getDoc(), "mousedown mouseup", function(e) {
                    var t;
                    if (e.target == f.getDoc().documentElement)
                        if (t = re.getRng(), f.getBody().focus(), "mousedown" == e.type) {
                            if (c.isCaretContainer(t.startContainer)) return;
                            re.placeCaretAt(e.clientX, e.clientY)
                        } else re.setRng(t)
                })
            }

            function E() {
                f.on("keydown", function(e) {
                    if (!m(e) && e.keyCode === ee) {
                        if (!f.getBody().getElementsByTagName("hr").length) return;
                        if (re.isCollapsed() && 0 === re.getRng(!0).startOffset) {
                            var t = re.getNode(),
                                n = t.previousSibling;
                            if ("HR" == t.nodeName) return ne.remove(t), void e.preventDefault();
                            n && n.nodeName && "hr" === n.nodeName.toLowerCase() && (ne.remove(n), e.preventDefault())
                        }
                    }
                })
            }

            function N() {
                window.Range.prototype.getClientRects || f.on("mousedown", function(e) {
                    if (!m(e) && "HTML" === e.target.nodeName) {
                        var t = f.getBody();
                        t.blur(), l.setEditorTimeout(f, function() {
                            t.focus()
                        })
                    }
                })
            }

            function _() {
                f.on("click", function(e) {
                    var t = e.target;
                    /^(IMG|HR)$/.test(t.nodeName) && "false" !== ne.getContentEditableParent(t) && (e.preventDefault(), re.getSel().setBaseAndExtent(t, 0, t, 1), f.nodeChanged()), "A" == t.nodeName && ne.hasClass(t, "mce-item-anchor") && (e.preventDefault(), re.select(t))
                })
            }

            function S() {
                function e() {
                    var e = ne.getAttribs(re.getStart().cloneNode(!1));
                    return function() {
                        var t = re.getStart();
                        t !== f.getBody() && (ne.setAttrib(t, "style", null), Q(e, function(e) {
                            t.setAttributeNode(e.cloneNode(!0))
                        }))
                    }
                }

                function t() {
                    return !re.isCollapsed() && ne.getParent(re.getStart(), ne.isBlock) != ne.getParent(re.getEnd(), ne.isBlock)
                }
                f.on("keypress", function(n) {
                    var r;
                    if (!m(n) && (8 == n.keyCode || 46 == n.keyCode) && t()) return r = e(), f.getDoc().execCommand("delete", !1, null), r(), n.preventDefault(), !1
                }), ne.bind(f.getDoc(), "cut", function(n) {
                    var r;
                    !m(n) && t() && (r = e(), l.setEditorTimeout(f, function() {
                        r()
                    }))
                })
            }

            function k() {
                document.body.setAttribute("role", "application")
            }

            function T() {
                f.on("keydown", function(e) {
                    if (!m(e) && e.keyCode === ee && re.isCollapsed() && 0 === re.getRng(!0).startOffset) {
                        var t = re.getNode().previousSibling;
                        if (t && t.nodeName && "table" === t.nodeName.toLowerCase()) return e.preventDefault(), !1
                    }
                })
            }

            function R() {
                p() > 7 || (h("RespectVisibilityInDesign", !0), f.contentStyles.push(".mceHideBrInPre pre br {display: none}"), ne.addClass(f.getBody(), "mceHideBrInPre"), oe.addNodeFilter("pre", function(e) {
                    for (var t = e.length, n, r, o, a; t--;)
                        for (n = e[t].getAll("br"), r = n.length; r--;) o = n[r], a = o.prev, a && 3 === a.type && "\n" != a.value.charAt(a.value - 1) ? a.value += "\n" : o.parent.insert(new i("#text", 3), o, !0).value = "\n"
                }), ae.addNodeFilter("pre", function(e) {
                    for (var t = e.length, n, r, i, o; t--;)
                        for (n = e[t].getAll("br"), r = n.length; r--;) i = n[r], o = i.prev, o && 3 == o.type && (o.value = o.value.replace(/\r?\n$/, ""))
                }))
            }

            function A() {
                ne.bind(f.getBody(), "mouseup", function() {
                    var e, t = re.getNode();
                    "IMG" == t.nodeName && ((e = ne.getStyle(t, "width")) && (ne.setAttrib(t, "width", e.replace(/[^0-9%]+/g, "")), ne.setStyle(t, "width", "")), (e = ne.getStyle(t, "height")) && (ne.setAttrib(t, "height", e.replace(/[^0-9%]+/g, "")), ne.setStyle(t, "height", "")))
                })
            }

            function B() {
                f.on("keydown", function(t) {
                    var n, r, i, o, a;
                    if (!m(t) && t.keyCode == e.BACKSPACE && (n = re.getRng(), r = n.startContainer, i = n.startOffset, o = ne.getRoot(), a = r, n.collapsed && 0 === i)) {
                        for (; a && a.parentNode && a.parentNode.firstChild == a && a.parentNode != o;) a = a.parentNode;
                        "BLOCKQUOTE" === a.tagName && (f.formatter.toggle("blockquote", null, a), n = ne.createRng(), n.setStart(r, 0), n.setEnd(r, 0), re.setRng(n))
                    }
                })
            }

            function D() {
                function e() {
                    K(), h("StyleWithCSS", !1), h("enableInlineTableEditing", !1), ie.object_resizing || h("enableObjectResizing", !1)
                }
                ie.readonly || f.on("BeforeExecCommand MouseDown", e)
            }

            function L() {
                function e() {
                    Q(ne.select("a"), function(e) {
                        var t = e.parentNode,
                            n = ne.getRoot();
                        if (t.lastChild === e) {
                            for (; t && !ne.isBlock(t);) {
                                if (t.parentNode.lastChild !== t || t === n) return;
                                t = t.parentNode
                            }
                            ne.add(t, "br", {
                                "data-mce-bogus": 1
                            })
                        }
                    })
                }
                f.on("SetContent ExecCommand", function(t) {
                    "setcontent" != t.type && "mceInsertLink" !== t.command || e()
                })
            }

            function M() {
                ie.forced_root_block && f.on("init", function() {
                    h("DefaultParagraphSeparator", ie.forced_root_block)
                })
            }

            function P() {
                f.on("keydown", function(e) {
                    var t;
                    m(e) || e.keyCode != ee || (t = f.getDoc().selection.createRange(), t && t.item && (e.preventDefault(), f.undoManager.beforeChange(), ne.remove(t.item(0)), f.undoManager.add()))
                })
            }

            function O() {
                var e;
                p() >= 10 && (e = "", Q("p div h1 h2 h3 h4 h5 h6".split(" "), function(t, n) {
                    e += (n > 0 ? "," : "") + t + ":empty"
                }), f.contentStyles.push(e + "{padding-right: 1px !important}"))
            }

            function H() {
                p() < 9 && (oe.addNodeFilter("noscript", function(e) {
                    for (var t = e.length, n, r; t--;) n = e[t], r = n.firstChild, r && n.attr("data-mce-innertext", r.value)
                }), ae.addNodeFilter("noscript", function(e) {
                    for (var t = e.length, n, r, a; t--;) n = e[t], r = e[t].firstChild, r ? r.value = o.decode(r.value) : (a = n.attributes.map["data-mce-innertext"], a && (n.attr("data-mce-innertext", null), r = new i("#text", 3), r.value = a, r.raw = !0, n.append(r)))
                }))
            }

            function I() {
                function e(e, t) {
                    var n = i.createTextRange();
                    try {
                        n.moveToPoint(e, t)
                    } catch (r) {
                        n = null
                    }
                    return n
                }

                function t(t) {
                    var r;
                    t.button ? (r = e(t.x, t.y), r && (r.compareEndPoints("StartToStart", a) > 0 ? r.setEndPoint("StartToStart", a) : r.setEndPoint("EndToEnd", a), r.select())) : n()
                }

                function n() {
                    var e = r.selection.createRange();
                    a && !e.item && 0 === e.compareEndPoints("StartToEnd", e) && a.select(), ne.unbind(r, "mouseup", n), ne.unbind(r, "mousemove", t), a = o = 0
                }
                var r = ne.doc,
                    i = r.body,
                    o, a, s;
                r.documentElement.unselectable = !0, ne.bind(r, "mousedown contextmenu", function(i) {
                    if ("HTML" === i.target.nodeName) {
                        if (o && n(), s = r.documentElement, s.scrollHeight > s.clientHeight) return;
                        o = 1, a = e(i.x, i.y), a && (ne.bind(r, "mouseup", n), ne.bind(r, "mousemove", t), ne.getRoot().focus(), a.select())
                    }
                })
            }

            function F() {
                f.on("keyup focusin mouseup", function(t) {
                    65 == t.keyCode && e.metaKeyPressed(t) || re.normalize()
                }, !0)
            }

            function z() {
                f.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}")
            }

            function U() {
                f.inline || f.on("keydown", function() {
                    document.activeElement == document.body && f.getWin().focus()
                })
            }

            function W() {
                f.inline || (f.contentStyles.push("body {min-height: 150px}"), f.on("click", function(e) {
                    var t;
                    if ("HTML" == e.target.nodeName) {
                        if (a.ie > 11) return void f.getBody().focus();
                        t = f.selection.getRng(), f.getBody().focus(), f.selection.setRng(t), f.selection.normalize(), f.nodeChanged()
                    }
                }))
            }

            function V() {
                a.mac && f.on("keydown", function(t) {
                    !e.metaKeyPressed(t) || t.shiftKey || 37 != t.keyCode && 39 != t.keyCode || (t.preventDefault(), f.selection.getSel().modify("move", 37 == t.keyCode ? "backward" : "forward", "lineboundary"))
                })
            }

            function $() {
                h("AutoUrlDetect", !1)
            }

            function q() {
                f.on("click", function(e) {
                    var t = e.target;
                    do
                        if ("A" === t.tagName) return void e.preventDefault();
                    while (t = t.parentNode)
                }), f.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")
            }

            function j() {
                f.on("init", function() {
                    f.dom.bind(f.getBody(), "submit", function(e) {
                        e.preventDefault()
                    })
                })
            }

            function Y() {
                oe.addNodeFilter("br", function(e) {
                    for (var t = e.length; t--;) "Apple-interchange-newline" == e[t].attr("class") && e[t].remove()
                })
            }

            function X() {
                f.on("dragstart", function(e) {
                    g(e)
                }), f.on("drop", function(e) {
                    if (!m(e)) {
                        var n = v(e);
                        if (n && n.id != f.id) {
                            e.preventDefault();
                            var r = t.getCaretRangeFromPoint(e.x, e.y, f.getDoc());
                            re.setRng(r), y(n.html)
                        }
                    }
                })
            }

            function K() {}

            function G() {
                var e;
                return se ? (e = f.selection.getSel(), !e || !e.rangeCount || 0 === e.rangeCount) : 0
            }

            function J() {
                function t(e) {
                    var t = new d(e.getBody()),
                        n = e.selection.getRng(),
                        r = u.fromRangeStart(n),
                        i = u.fromRangeEnd(n);
                    return !e.selection.isCollapsed() && !t.prev(r) && !t.next(i)
                }
                f.on("keypress", function(n) {
                    !m(n) && !re.isCollapsed() && n.charCode > 31 && !e.metaKeyPressed(n) && t(f) && (n.preventDefault(), f.setContent(String.fromCharCode(n.charCode)), f.selection.select(f.getBody(), !0), f.selection.collapse(!1), f.nodeChanged())
                }), f.on("keydown", function(e) {
                    var n = e.keyCode;
                    m(e) || n != te && n != ee || t(f) && (e.preventDefault(), f.setContent(""), f.nodeChanged())
                })
            }
            var Q = s.each,
                Z = f.$,
                ee = e.BACKSPACE,
                te = e.DELETE,
                ne = f.dom,
                re = f.selection,
                ie = f.settings,
                oe = f.parser,
                ae = f.serializer,
                se = a.gecko,
                le = a.ie,
                ce = a.webkit,
                ue = "data:text/mce-internal,",
                de = le ? "Text" : "URL";
            return B(), C(), a.windowsPhone || F(), ce && (J(), b(), w(), _(), M(), j(), T(), Y(), a.iOS ? (U(), W(), q()) : x()), le && a.ie < 11 && (E(), k(), R(), A(), P(), O(), H(), I()), a.ie >= 11 && (W(), T()), a.ie && (x(), $(), X()), se && (J(), E(), N(), S(), D(), L(), z(), V(), T()), {
                refreshContentEditable: K,
                isHidden: G
            }
        }
    }), r(Ue, [he, w, m], function(e, t, n) {
        function r(e, t) {
            return "selectionchange" == t ? e.getDoc() : !e.inline && /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t) ? e.getDoc().documentElement : e.settings.event_root ? (e.eventRoot || (e.eventRoot = o.select(e.settings.event_root)[0]), e.eventRoot) : e.getBody()
        }

        function i(e, t) {
            function n(e) {
                return !e.hidden && !e.readonly
            }
            var i = r(e, t),
                s;
            if (e.delegates || (e.delegates = {}), !e.delegates[t])
                if (e.settings.event_root) {
                    if (a || (a = {}, e.editorManager.on("removeEditor", function() {
                            var t;
                            if (!e.editorManager.activeEditor && a) {
                                for (t in a) e.dom.unbind(r(e, t));
                                a = null
                            }
                        })), a[t]) return;
                    s = function(r) {
                        for (var i = r.target, a = e.editorManager.editors, s = a.length; s--;) {
                            var l = a[s].getBody();
                            (l === i || o.isChildOf(i, l)) && n(a[s]) && a[s].fire(t, r)
                        }
                    }, a[t] = s, o.bind(i, t, s)
                } else s = function(r) {
                    n(e) && e.fire(t, r)
                }, o.bind(i, t, s), e.delegates[t] = s
        }
        var o = t.DOM,
            a, s = {
                bindPendingEventDelegates: function() {
                    var e = this;
                    n.each(e._pendingNativeEvents, function(t) {
                        i(e, t)
                    })
                },
                toggleNativeEvent: function(e, t) {
                    var n = this;
                    "focus" != e && "blur" != e && (t ? n.initialized ? i(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : n._pendingNativeEvents = [e] : n.initialized && (n.dom.unbind(r(n, e), e, n.delegates[e]), delete n.delegates[e]))
                },
                unbindAllNativeEvents: function() {
                    var e = this,
                        t;
                    if (e.delegates) {
                        for (t in e.delegates) e.dom.unbind(r(e, t), t, e.delegates[t]);
                        delete e.delegates
                    }
                    e.inline || (e.getBody().onload = null, e.dom.unbind(e.getWin()), e.dom.unbind(e.getDoc())), e.dom.unbind(e.getBody()), e.dom.unbind(e.getContainer())
                }
            };
        return s = n.extend({}, e, s)
    }), r(We, [], function() {
        function e(e, t, n) {
            try {
                e.getDoc().execCommand(t, !1, n)
            } catch (r) {}
        }

        function t(e) {
            var t, n;
            return t = e.getBody(), n = function(t) {
                e.dom.getParents(t.target, "a").length > 0 && t.preventDefault()
            }, e.dom.bind(t, "click", n), {
                unbind: function() {
                    e.dom.unbind(t, "click", n)
                }
            }
        }

        function n(n, r) {
            n._clickBlocker && (n._clickBlocker.unbind(), n._clickBlocker = null), r ? (n._clickBlocker = t(n), n.selection.controlSelection.hideResizeRect(), n.readonly = !0, n.getBody().contentEditable = !1) : (n.readonly = !1, n.getBody().contentEditable = !0, e(n, "StyleWithCSS", !1), e(n, "enableInlineTableEditing", !1), e(n, "enableObjectResizing", !1), n.focus(), n.nodeChanged())
        }

        function r(e, t) {
            var r = e.readonly ? "readonly" : "design";
            t != r && (e.initialized ? n(e, "readonly" == t) : e.on("init", function() {
                n(e, "readonly" == t)
            }), e.fire("SwitchMode", {
                mode: t
            }))
        }
        return {
            setMode: r
        }
    }), r(Ve, [m, d], function(e, t) {
        var n = e.each,
            r = e.explode,
            i = {
                f9: 120,
                f10: 121,
                f11: 122
            },
            o = e.makeMap("alt,ctrl,shift,meta,access");
        return function(a) {
            function s(e) {
                var a, s, l = {};
                n(r(e, "+"), function(e) {
                    e in o ? l[e] = !0 : /^[0-9]{2,}$/.test(e) ? l.keyCode = parseInt(e, 10) : (l.charCode = e.charCodeAt(0), l.keyCode = i[e] || e.toUpperCase().charCodeAt(0))
                }), a = [l.keyCode];
                for (s in o) l[s] ? a.push(s) : l[s] = !1;
                return l.id = a.join(","), l.access && (l.alt = !0, t.mac ? l.ctrl = !0 : l.shift = !0), l.meta && (t.mac ? l.meta = !0 : (l.ctrl = !0, l.meta = !1)), l
            }

            function l(t, n, i, o) {
                var l;
                return l = e.map(r(t, ">"), s), l[l.length - 1] = e.extend(l[l.length - 1], {
                    func: i,
                    scope: o || a
                }), e.extend(l[0], {
                    desc: a.translate(n),
                    subpatterns: l.slice(1)
                })
            }

            function c(e) {
                return e.altKey || e.ctrlKey || e.metaKey
            }

            function u(e) {
                return "keydown" === e.type && e.keyCode >= 112 && e.keyCode <= 123
            }

            function d(e, t) {
                return !!t && (t.ctrl == e.ctrlKey && t.meta == e.metaKey && (t.alt == e.altKey && t.shift == e.shiftKey && (!!(e.keyCode == t.keyCode || e.charCode && e.charCode == t.charCode) && (e.preventDefault(), !0))))
            }

            function f(e) {
                return e.func ? e.func.call(e.scope) : null
            }
            var h = this,
                p = {},
                m = [];
            a.on("keyup keypress keydown", function(e) {
                !c(e) && !u(e) || e.isDefaultPrevented() || (n(p, function(t) {
                    if (d(e, t)) return m = t.subpatterns.slice(0), "keydown" == e.type && f(t), !0
                }), d(e, m[0]) && (1 === m.length && "keydown" == e.type && f(m[0]), m.shift()))
            }), h.add = function(t, i, o, s) {
                var c;
                return c = o, "string" == typeof o ? o = function() {
                    a.execCommand(c, !1, null)
                } : e.isArray(c) && (o = function() {
                    a.execCommand(c[0], c[1], c[2])
                }), n(r(e.trim(t.toLowerCase())), function(e) {
                    var t = l(e, i, o, s);
                    p[t.id] = t
                }), !0
            }, h.remove = function(e) {
                var t = l(e);
                return !!p[t.id] && (delete p[t.id], !0)
            }
        }
    }), r($e, [c, m, z], function(e, t, n) {
        return function(r, i) {
            function o(e) {
                var t, n;
                return n = {
                    "image/jpeg": "jpg",
                    "image/jpg": "jpg",
                    "image/gif": "gif",
                    "image/png": "png"
                }, t = n[e.blob().type.toLowerCase()] || "dat", e.filename() + "." + t
            }

            function a(e, t) {
                return e ? e.replace(/\/$/, "") + "/" + t.replace(/^\//, "") : t
            }

            function s(e) {
                return {
                    id: e.id,
                    blob: e.blob,
                    base64: e.base64,
                    filename: n.constant(o(e))
                }
            }

            function l(e, t, n, r) {
                var o, s;
                o = new XMLHttpRequest, o.open("POST", i.url), o.withCredentials = i.credentials, o.upload.onprogress = function(e) {
                    r(e.loaded / e.total * 100)
                }, o.onerror = function() {
                    n("Image upload failed due to a XHR Transport error. Code: " + o.status)
                }, o.onload = function() {
                    var e;
                    return 200 != o.status ? void n("HTTP Error: " + o.status) : (e = JSON.parse(o.responseText), e && "string" == typeof e.location ? void t(a(i.basePath, e.location)) : void n("Invalid JSON: " + o.responseText))
                }, s = new FormData, s.append("file", e.blob(), e.filename()), o.send(s)
            }

            function c() {
                return new e(function(e) {
                    e([])
                })
            }

            function u(e, t) {
                return {
                    url: t,
                    blobInfo: e,
                    status: !0
                }
            }

            function d(e, t) {
                return {
                    url: "",
                    blobInfo: e,
                    status: !1,
                    error: t
                }
            }

            function f(e, n) {
                t.each(y[e], function(e) {
                    e(n)
                }), delete y[e]
            }

            function h(t, n, i) {
                return r.markPending(t.blobUri()), new e(function(e) {
                    var o, a, l = function() {};
                    try {
                        var c = function() {
                                o && (o.close(), a = l)
                            },
                            h = function(n) {
                                c(), r.markUploaded(t.blobUri(), n), f(t.blobUri(), u(t, n)), e(u(t, n))
                            },
                            p = function() {
                                c(), r.removeFailed(t.blobUri()), f(t.blobUri(), d(t, p)), e(d(t, p))
                            };
                        a = function(e) {
                            e < 0 || e > 100 || (o || (o = i()), o.progressBar.value(e))
                        }, n(s(t), h, p, a)
                    } catch (m) {
                        e(d(t, m.message))
                    }
                })
            }

            function p(e) {
                return e === l
            }

            function m(t) {
                var n = t.blobUri();
                return new e(function(e) {
                    y[n] = y[n] || [], y[n].push(e)
                })
            }

            function g(n, o) {
                return n = t.grep(n, function(e) {
                    return !r.isUploaded(e.blobUri())
                }), e.all(t.map(n, function(e) {
                    return r.isPending(e.blobUri()) ? m(e) : h(e, i.handler, o)
                }))
            }

            function v(e, t) {
                return !i.url && p(i.handler) ? c() : g(e, t)
            }
            var y = {};
            return i = t.extend({
                credentials: !1,
                handler: l
            }, i), {
                upload: v
            }
        }
    }), r(qe, [c], function(e) {
        function t(t) {
            return new e(function(e) {
                var n = new XMLHttpRequest;
                n.open("GET", t, !0), n.responseType = "blob", n.onload = function() {
                    200 == this.status && e(this.response)
                }, n.send()
            })
        }

        function n(e) {
            var t, n;
            return e = decodeURIComponent(e).split(","), n = /data:([^;]+)/.exec(e[0]), n && (t = n[1]), {
                type: t,
                data: e[1]
            }
        }

        function r(t) {
            return new e(function(e) {
                var r, i, o;
                t = n(t);
                try {
                    r = atob(t.data)
                } catch (a) {
                    return void e(new Blob([]))
                }
                for (i = new Uint8Array(r.length), o = 0; o < i.length; o++) i[o] = r.charCodeAt(o);
                e(new Blob([i], {
                    type: t.type
                }))
            })
        }

        function i(e) {
            return 0 === e.indexOf("blob:") ? t(e) : 0 === e.indexOf("data:") ? r(e) : null
        }

        function o(t) {
            return new e(function(e) {
                var n = new FileReader;
                n.onloadend = function() {
                    e(n.result)
                }, n.readAsDataURL(t)
            })
        }
        return {
            uriToBlob: i,
            blobToDataUri: o,
            parseDataUri: n
        }
    }), r(je, [c, p, z, qe, d], function(e, t, n, r, i) {
        var o = 0;
        return function(a, s) {
            function l(l, u) {
                function d(e, t) {
                    var n, i;
                    return 0 === e.src.indexOf("blob:") ? (i = s.getByUri(e.src), void(i && t({
                        image: e,
                        blobInfo: i
                    }))) : (n = r.parseDataUri(e.src).data, i = s.findFirst(function(e) {
                        return e.base64() === n
                    }), void(i ? t({
                        image: e,
                        blobInfo: i
                    }) : r.uriToBlob(e.src).then(function(r) {
                        var i = "blobid" + o++,
                            a = s.create(i, r, n);
                        s.add(a), t({
                            image: e,
                            blobInfo: a
                        })
                    })))
                }
                var f, h;
                return u || (u = n.constant(!0)), f = t.filter(l.getElementsByTagName("img"), function(e) {
                    var t = e.src;
                    return !!i.fileApi && (!e.hasAttribute("data-mce-bogus") && (!e.hasAttribute("data-mce-placeholder") && (!(!t || t == i.transparentSrc) && (0 === t.indexOf("blob:") ? !a.isUploaded(t) : 0 === t.indexOf("data:") && u(e)))))
                }), h = t.map(f, function(t) {
                    var n;
                    return c[t.src] ? new e(function(e) {
                        c[t.src].then(function(n) {
                            e({
                                image: t,
                                blobInfo: n.blobInfo
                            })
                        })
                    }) : (n = new e(function(e) {
                        d(t, e)
                    }).then(function(e) {
                        return delete c[e.image.src], e
                    })["catch"](function(e) {
                        return delete c[t.src], e
                    }), c[t.src] = n, n)
                }), e.all(h)
            }
            var c = {};
            return {
                findAll: l
            }
        }
    }), r(Ye, [p, z], function(e, t) {
        return function() {
            function n(e, t, n, r) {
                return {
                    id: u(e),
                    filename: u(r || e),
                    blob: u(t),
                    base64: u(n),
                    blobUri: u(URL.createObjectURL(t))
                }
            }

            function r(e) {
                i(e.id()) || c.push(e)
            }

            function i(e) {
                return o(function(t) {
                    return t.id() === e
                })
            }

            function o(t) {
                return e.filter(c, t)[0]
            }

            function a(e) {
                return o(function(t) {
                    return t.blobUri() == e
                })
            }

            function s(t) {
                c = e.filter(c, function(e) {
                    return e.blobUri() !== t || (URL.revokeObjectURL(e.blobUri()), !1)
                })
            }

            function l() {
                e.each(c, function(e) {
                    URL.revokeObjectURL(e.blobUri())
                }), c = []
            }
            var c = [],
                u = t.constant;
            return {
                create: n,
                add: r,
                get: i,
                getByUri: a,
                findFirst: o,
                removeByUri: s,
                destroy: l
            }
        }
    }), r(Xe, [], function() {
        return function() {
            function e(e, t) {
                return {
                    status: e,
                    resultUri: t
                }
            }

            function t(e) {
                return e in d
            }

            function n(e) {
                var t = d[e];
                return t ? t.resultUri : null
            }

            function r(e) {
                return !!t(e) && d[e].status === c
            }

            function i(e) {
                return !!t(e) && d[e].status === u
            }

            function o(t) {
                d[t] = e(c, null)
            }

            function a(t, n) {
                d[t] = e(u, n)
            }

            function s(e) {
                delete d[e]
            }

            function l() {
                d = {}
            }
            var c = 1,
                u = 2,
                d = {};
            return {
                hasBlobUri: t,
                getResultUri: n,
                isPending: r,
                isUploaded: i,
                markPending: o,
                markUploaded: a,
                removeFailed: s,
                destroy: l
            }
        }
    }), r(Ke, [p, $e, je, Ye, Xe], function(e, t, n, r, i) {
        return function(o) {
            function a(e) {
                return function(t) {
                    return o.selection ? e(t) : []
                }
            }

            function s() {
                return "?" + (new Date).getTime()
            }

            function l(e, t, n) {
                var r = 0;
                do r = e.indexOf(t, r), r !== -1 && (e = e.substring(0, r) + n + e.substr(r + t.length), r += n.length - t.length + 1); while (r !== -1);
                return e
            }

            function c(e, t, n) {
                return e = l(e, 'src="' + t + '"', 'src="' + n + '"'), e = l(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"')
            }

            function u(t, n) {
                e.each(o.undoManager.data, function(r) {
                    "fragmented" === r.type ? r.fragments = e.map(r.fragments, function(e) {
                        return c(e, t, n)
                    }) : r.content = c(r.content, t, n)
                })
            }

            function d() {
                return o.notificationManager.open({
                    text: o.translate("Image uploading..."),
                    type: "info",
                    timeout: -1,
                    progressBar: !0
                })
            }

            function f(e, t) {
                b.removeByUri(e.src), u(e.src, t), o.$(e).attr({
                    src: w.images_reuse_filename ? t + s() : t,
                    "data-mce-src": o.convertURL(t, "src")
                })
            }

            function h(n) {
                return C || (C = new t(E, {
                    url: w.images_upload_url,
                    basePath: w.images_upload_base_path,
                    credentials: w.images_upload_credentials,
                    handler: w.images_upload_handler
                })), g().then(a(function(t) {
                    var r;
                    return r = e.map(t, function(e) {
                        return e.blobInfo
                    }), C.upload(r, d).then(a(function(r) {
                        return r = e.map(r, function(e, n) {
                            var r = t[n].image;
                            return e.status && o.settings.images_replace_blob_uris !== !1 && f(r, e.url), {
                                element: r,
                                status: e.status
                            }
                        }), n && n(r), r
                    }))
                }))
            }

            function p(e) {
                if (w.automatic_uploads !== !1) return h(e)
            }

            function m(e) {
                return !w.images_dataimg_filter || w.images_dataimg_filter(e)
            }

            function g() {
                return x || (x = new n(E, b)), x.findAll(o.getBody(), m).then(a(function(t) {
                    return e.each(t, function(e) {
                        u(e.image.src, e.blobInfo.blobUri()), e.image.src = e.blobInfo.blobUri(), e.image.removeAttribute("data-mce-src")
                    }), t
                }))
            }

            function v() {
                b.destroy(), E.destroy(), x = C = null
            }

            function y(t) {
                return t.replace(/src="(blob:[^"]+)"/g, function(t, n) {
                    var r = E.getResultUri(n);
                    if (r) return 'src="' + r + '"';
                    var i = b.getByUri(n);
                    return i || (i = e.reduce(o.editorManager.editors, function(e, t) {
                        return e || t.editorUpload.blobCache.getByUri(n)
                    }, null)), i ? 'src="data:' + i.blob().type + ";base64," + i.base64() + '"' : t
                })
            }
            var b = new r,
                C, x, w = o.settings,
                E = new i;
            return o.on("setContent", function() {
                o.settings.automatic_uploads !== !1 ? p() : g()
            }), o.on("RawSaveContent", function(e) {
                e.content = y(e.content)
            }), o.on("getContent", function(e) {
                e.source_view || "raw" == e.format || (e.content = y(e.content))
            }), o.on("PostRender", function() {
                o.parser.addNodeFilter("img", function(t) {
                    e.each(t, function(e) {
                        var t = e.attr("src");
                        if (!b.getByUri(t)) {
                            var n = E.getResultUri(t);
                            n && e.attr("src", n)
                        }
                    })
                })
            }), {
                blobCache: b,
                uploadImages: h,
                uploadImagesAuto: p,
                scanForImages: g,
                destroy: v
            }
        }
    }), r(Ge, [k, $, _, T, g, W, u], function(e, t, n, r, i, o, a) {
        var s = n.isContentEditableFalse;
        return function(t, n) {
            function r(e, n) {
                var r = o.collapse(e.getBoundingClientRect(), n),
                    i, a, s, l, c;
                return "BODY" == t.tagName ? (i = t.ownerDocument.documentElement, a = t.scrollLeft || i.scrollLeft, s = t.scrollTop || i.scrollTop) : (c = t.getBoundingClientRect(), a = t.scrollLeft - c.left, s = t.scrollTop - c.top), r.left += a, r.right += a, r.top += s, r.bottom += s, r.width = 1, l = e.offsetWidth - e.clientWidth, l > 0 && (n && (l *= -1), r.left += l, r.right += l), r
            }

            function l() {
                var n, r, o, a, s;
                for (n = i("*[contentEditable=false]", t), a = 0; a < n.length; a++) r = n[a], o = r.previousSibling, e.endsWithCaretContainer(o) && (s = o.data, 1 == s.length ? o.parentNode.removeChild(o) : o.deleteData(s.length - 1, 1)), o = r.nextSibling, e.startsWithCaretContainer(o) && (s = o.data, 1 == s.length ? o.parentNode.removeChild(o) : o.deleteData(0, 1));
                return null
            }

            function c(o, a) {
                var l, c;
                return u(), n(a) ? (g = e.insertBlock("p", a, o), l = r(a, o), i(g).css("top", l.top), m = i('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(l).appendTo(t), o && m.addClass("mce-visual-caret-before"), d(), c = a.ownerDocument.createRange(), c.setStart(g, 0), c.setEnd(g, 0), c) : (g = e.insertInline(a, o), c = a.ownerDocument.createRange(), s(g.nextSibling) ? (c.setStart(g, 0), c.setEnd(g, 0)) : (c.setStart(g, 1), c.setEnd(g, 1)), c)
            }

            function u() {
                l(), g && (e.remove(g), g = null), m && (m.remove(), m = null), clearInterval(p)
            }

            function d() {
                p = a.setInterval(function() {
                    i("div.mce-visual-caret", t).toggleClass("mce-visual-caret-hidden")
                }, 500)
            }

            function f() {
                a.clearInterval(p)
            }

            function h() {
                return ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"
            }
            var p, m, g;
            return {
                show: c,
                hide: u,
                getCss: h,
                destroy: f
            }
        }
    }), r(Je, [p, _, W], function(e, t, n) {
        function r(i) {
            function o(t) {
                return e.map(t, function(e) {
                    return e = n.clone(e), e.node = i, e
                })
            }
            if (e.isArray(i)) return e.reduce(i, function(e, t) {
                return e.concat(r(t))
            }, []);
            if (t.isElement(i)) return o(i.getClientRects());
            if (t.isText(i)) {
                var a = i.ownerDocument.createRange();
                return a.setStart(i, 0), a.setEnd(i, i.data.length), o(a.getClientRects())
            }
        }
        return {
            getClientRects: r
        }
    }), r(Qe, [z, p, Je, U, ie, oe, $, W], function(e, t, n, r, i, o, a, s) {
        function l(e, t, n, o) {
            for (; o = i.findNode(o, e, r.isEditableCaretCandidate, t);)
                if (n(o)) return
        }

        function c(e, r, i, o, a, s) {
            function c(o) {
                var s, l, c;
                for (c = n.getClientRects(o), e == -1 && (c = c.reverse()), s = 0; s < c.length; s++)
                    if (l = c[s], !i(l, h)) {
                        if (f.length > 0 && r(l, t.last(f)) && u++, l.line = u, a(l)) return !0;
                        f.push(l)
                    }
            }
            var u = 0,
                d, f = [],
                h;
            return (h = t.last(s.getClientRects())) ? (d = s.getNode(), c(d), l(e, o, c, d), f) : f
        }

        function u(e, t) {
            return t.line > e
        }

        function d(e, t) {
            return t.line === e
        }

        function f(e, n, r, i) {
            function l(n) {
                return 1 == e ? t.last(n.getClientRects()) : t.last(n.getClientRects())
            }
            var c = new o(n),
                u, d, f, h, p = [],
                m = 0,
                g, v;
            1 == e ? (u = c.next, d = s.isBelow, f = s.isAbove, h = a.after(i)) : (u = c.prev, d = s.isAbove, f = s.isBelow, h = a.before(i)), v = l(h);
            do
                if (h.isVisible() && (g = l(h), !f(g, v))) {
                    if (p.length > 0 && d(g, t.last(p)) && m++, g = s.clone(g), g.position = h, g.line = m, r(g)) return p;
                    p.push(g)
                }
            while (h = u(h));
            return p
        }
        var h = e.curry,
            p = h(c, -1, s.isAbove, s.isBelow),
            m = h(c, 1, s.isBelow, s.isAbove);
        return {
            upUntil: p,
            downUntil: m,
            positionsUntil: f,
            isAboveLine: h(u),
            isLine: h(d)
        }
    }), r(Ze, [z, p, _, Je, W, ie, U], function(e, t, n, r, i, o, a) {
        function s(e, t) {
            return Math.abs(e.left - t)
        }

        function l(e, t) {
            return Math.abs(e.right - t)
        }

        function c(e, n) {
            function r(e, t) {
                return e >= t.left && e <= t.right
            }
            return t.reduce(e, function(e, t) {
                var i, o;
                return i = Math.min(s(e, n), l(e, n)), o = Math.min(s(t, n), l(t, n)), r(n, t) ? t : r(n, e) ? e : o == i && m(t.node) ? t : o < i ? t : e
            })
        }

        function u(e, t, n, r) {
            for (; r = g(r, e, a.isEditableCaretCandidate, t);)
                if (n(r)) return
        }

        function d(e, n) {
            function o(e, i) {
                var o;
                return o = t.filter(r.getClientRects(i), function(t) {
                    return !e(t, n)
                }), a = a.concat(o), 0 === o.length
            }
            var a = [];
            return a.push(n), u(-1, e, v(o, i.isAbove), n.node), u(1, e, v(o, i.isBelow), n.node), a
        }

        function f(e) {
            return t.filter(t.toArray(e.getElementsByTagName("*")), m)
        }

        function h(e, t) {
            return {
                node: e.node,
                before: s(e, t) < l(e, t)
            }
        }

        function p(e, n, i) {
            var o, a;
            return o = r.getClientRects(f(e)), o = t.filter(o, function(e) {
                return i >= e.top && i <= e.bottom
            }), a = c(o, n), a && (a = c(d(e, a), n), a && m(a.node)) ? h(a, n) : null
        }
        var m = n.isContentEditableFalse,
            g = o.findNode,
            v = e.curry;
        return {
            findClosestClientRect: c,
            findLineNodeRects: d,
            closestCaret: p
        }
    }), r(et, [], function() {
        var e = function(e) {
                var t, n, r, i;
                return i = e.getBoundingClientRect(), t = e.ownerDocument, n = t.documentElement, r = t.defaultView, {
                    top: i.top + r.pageYOffset - n.clientTop,
                    left: i.left + r.pageXOffset - n.clientLeft
                }
            },
            t = function(t) {
                return t.inline ? e(t.getBody()) : {
                    left: 0,
                    top: 0
                }
            },
            n = function(e) {
                var t = e.getBody();
                return e.inline ? {
                    left: t.scrollLeft,
                    top: t.scrollTop
                } : {
                    left: 0,
                    top: 0
                }
            },
            r = function(e) {
                var t = e.getBody(),
                    n = e.getDoc().documentElement,
                    r = {
                        left: t.scrollLeft,
                        top: t.scrollTop
                    },
                    i = {
                        left: t.scrollLeft || n.scrollLeft,
                        top: t.scrollTop || n.scrollTop
                    };
                return e.inline ? r : i
            },
            i = function(t, n) {
                if (n.target.ownerDocument !== t.getDoc()) {
                    var i = e(t.getContentAreaContainer()),
                        o = r(t);
                    return {
                        left: n.pageX - i.left + o.left,
                        top: n.pageY - i.top + o.top
                    }
                }
                return {
                    left: n.pageX,
                    top: n.pageY
                }
            },
            o = function(e, t, n) {
                return {
                    pageX: n.left - e.left + t.left,
                    pageY: n.top - e.top + t.top
                }
            },
            a = function(e, r) {
                return o(t(e), n(e), i(e, r))
            };
        return {
            calc: a
        }
    }), r(tt, [_, p, z, u, w, et], function(e, t, n, r, i, o) {
        var a = e.isContentEditableFalse,
            s = e.isContentEditableTrue,
            l = function(e) {
                return a(e)
            },
            c = function(e, t, n) {
                return t !== n && !e.dom.isChildOf(t, n) && !a(t)
            },
            u = function(e) {
                var t = e.cloneNode(!0);
                return t.removeAttribute("data-mce-selected"), t
            },
            d = function(e, t, n, r) {
                var i = t.cloneNode(!0);
                e.dom.setStyles(i, {
                    width: n,
                    height: r
                }), e.dom.setAttrib(i, "data-mce-selected", null);
                var o = e.dom.create("div", {
                    "class": "mce-drag-container",
                    "data-mce-bogus": "all",
                    unselectable: "on",
                    contenteditable: "false"
                });
                return e.dom.setStyles(o, {
                    position: "absolute",
                    opacity: .5,
                    overflow: "hidden",
                    border: 0,
                    padding: 0,
                    margin: 0,
                    width: n,
                    height: r
                }), e.dom.setStyles(i, {
                    margin: 0,
                    boxSizing: "border-box"
                }), o.appendChild(i), o
            },
            f = function(e, t) {
                e.parentNode !== t && t.appendChild(e)
            },
            h = function(e, t, n, r, i, o) {
                var a = 0,
                    s = 0;
                e.style.left = t.pageX + "px", e.style.top = t.pageY + "px", t.pageX + n > i && (a = t.pageX + n - i), t.pageY + r > o && (s = t.pageY + r - o), e.style.width = n - a + "px", e.style.height = r - s + "px"
            },
            p = function(e) {
                e && e.parentNode && e.parentNode.removeChild(e)
            },
            m = function(e) {
                return 0 === e.button
            },
            g = function(e) {
                return e.element
            },
            v = function(e, t) {
                return {
                    pageX: t.pageX - e.relX,
                    pageY: t.pageY + 5
                }
            },
            y = function(e, r) {
                return function(i) {
                    if (m(i)) {
                        var o = t.find(r.dom.getParents(i.target), n.or(a, s));
                        if (l(o)) {
                            var c = r.dom.getPos(o),
                                u = r.getBody(),
                                f = r.getDoc().documentElement;
                            e.element = o, e.screenX = i.screenX, e.screenY = i.screenY, e.maxX = (r.inline ? u.scrollWidth : f.offsetWidth) - 2, e.maxY = (r.inline ? u.scrollHeight : f.offsetHeight) - 2, e.relX = i.pageX - c.x, e.relY = i.pageY - c.y, e.width = o.offsetWidth, e.height = o.offsetHeight, e.ghost = d(r, o, e.width, e.height)
                        }
                    }
                }
            },
            b = function(e, t) {
                var n = r.throttle(function(e, n) {
                    t._selectionOverrides.hideFakeCaret(), t.selection.placeCaretAt(e, n)
                }, 0);
                return function(r) {
                    var i = Math.max(Math.abs(r.screenX - e.screenX), Math.abs(r.screenY - e.screenY));
                    if (g(e) && !e.dragging && i > 10) {
                        var a = t.fire("dragstart", {
                            target: e.element
                        });
                        if (a.isDefaultPrevented()) return;
                        e.dragging = !0, t.focus()
                    }
                    if (e.dragging) {
                        var s = v(e, o.calc(t, r));
                        f(e.ghost, t.getBody()), h(e.ghost, s, e.width, e.height, e.maxX, e.maxY), n(r.clientX, r.clientY)
                    }
                }
            },
            C = function(e) {
                var t = e.getSel().getRangeAt(0),
                    n = t.startContainer;
                return 3 === n.nodeType ? n.parentNode : n
            },
            x = function(e, t) {
                return function(n) {
                    if (e.dragging && c(t, C(t.selection), e.element)) {
                        var r = u(e.element),
                            i = t.fire("drop", {
                                targetClone: r,
                                clientX: n.clientX,
                                clientY: n.clientY
                            });
                        i.isDefaultPrevented() || (r = i.targetClone, t.undoManager.transact(function() {
                            p(e.element), t.insertContent(t.dom.getOuterHTML(r)), t._selectionOverrides.hideFakeCaret()
                        }))
                    }
                    E(e)
                }
            },
            w = function(e, t) {
                return function() {
                    E(e), e.dragging && t.fire("dragend")
                }
            },
            E = function(e) {
                e.dragging = !1, e.element = null, p(e.ghost)
            },
            N = function(e) {
                var t = {},
                    n, r, o, a, s, l;
                n = i.DOM, l = document, r = y(t, e), o = b(t, e), a = x(t, e), s = w(t, e), e.on("mousedown", r), e.on("mousemove", o), e.on("mouseup", a), n.bind(l, "mousemove", o), n.bind(l, "mouseup", s), e.on("remove", function() {
                    n.unbind(l, "mousemove", o), n.unbind(l, "mouseup", s)
                })
            },
            _ = function(e) {
                e.on("drop", function(t) {
                    var n = "undefined" != typeof t.clientX ? e.getDoc().elementFromPoint(t.clientX, t.clientY) : null;
                    (a(n) || a(e.dom.getContentEditableParent(n))) && t.preventDefault()
                })
            },
            S = function(e) {
                N(e), _(e)
            };
        return {
            init: S
        }
    }), r(nt, [d, oe, $, k, ie, Ge, Qe, Ze, _, T, W, I, z, p, u, tt], function(e, t, n, r, i, o, a, s, l, c, u, d, f, h, p, m) {
        function g(e, t) {
            for (; t = e(t);)
                if (t.isVisible()) return t;
            return t
        }

        function v(c) {
            function v(e) {
                return c.dom.hasClass(e, "mce-offscreen-selection")
            }

            function _() {
                var e = c.dom.get(le);
                return e ? e.getElementsByTagName("*")[0] : e
            }

            function S(e) {
                return c.dom.isBlock(e)
            }

            function k(e) {
                e && c.selection.setRng(e)
            }

            function T() {
                return c.selection.getRng()
            }

            function R(e, t) {
                c.selection.scrollIntoView(e, t)
            }

            function A(e, t, n) {
                var r;
                return r = c.fire("ShowCaret", {
                    target: t,
                    direction: e,
                    before: n
                }), r.isDefaultPrevented() ? null : (R(t, e === -1), se.show(n, t))
            }

            function B(e) {
                var t;
                return t = c.fire("BeforeObjectSelected", {
                    target: e
                }), t.isDefaultPrevented() ? null : D(e)
            }

            function D(e) {
                var t = e.ownerDocument.createRange();
                return t.selectNode(e), t
            }

            function L(e, t) {
                var n = i.isInSameBlock(e, t);
                return !(n || !l.isBr(e.getNode())) || n
            }

            function M(e, t) {
                return t = i.normalizeRange(e, re, t), e == -1 ? n.fromRangeStart(t) : n.fromRangeEnd(t)
            }

            function P(e) {
                return r.isCaretContainerBlock(e.startContainer)
            }

            function O(e, t, n, r) {
                var i, o, a, s;
                return !r.collapsed && (i = N(r), C(i)) ? A(e, i, e == -1) : (s = P(r), o = M(e, r), n(o) ? B(o.getNode(e == -1)) : (o = t(o)) ? n(o) ? A(e, o.getNode(e == -1), 1 == e) : (a = t(o), n(a) && L(o, a) ? A(e, a.getNode(e == -1), 1 == e) : s ? $(o.toRange()) : null) : s ? r : null)
            }

            function H(e, t, n) {
                var r, i, o, l, c, u, d, f, p;
                if (p = N(n), r = M(e, n), i = t(re, a.isAboveLine(1), r), o = h.filter(i, a.isLine(1)), c = h.last(r.getClientRects()), E(r) && (p = r.getNode()), w(r) && (p = r.getNode(!0)), !c) return null;
                if (u = c.left, l = s.findClosestClientRect(o, u), l && C(l.node)) return d = Math.abs(u - l.left), f = Math.abs(u - l.right), A(e, l.node, d < f);
                if (p) {
                    var m = a.positionsUntil(e, re, a.isAboveLine(1), p);
                    if (l = s.findClosestClientRect(h.filter(m, a.isLine(1)), u)) return $(l.position.toRange());
                    if (l = h.last(h.filter(m, a.isLine(0)))) return $(l.position.toRange())
                }
            }

            function I(t, r) {
                function i() {
                    var t = c.dom.create(c.settings.forced_root_block);
                    return (!e.ie || e.ie >= 11) && (t.innerHTML = '<br data-mce-bogus="1">'), t
                }
                var o, a, s;
                if (r.collapsed && c.settings.forced_root_block) {
                    if (o = c.dom.getParent(r.startContainer, "PRE"), !o) return;
                    a = 1 == t ? oe(n.fromRangeStart(r)) : ae(n.fromRangeStart(r)), a || (s = i(), 1 == t ? c.$(o).after(s) : c.$(o).before(s), c.selection.select(s, !0), c.selection.collapse())
                }
            }

            function F(e, t, n, r) {
                var i;
                return (i = O(e, t, n, r)) ? i : (i = I(e, r), i ? i : null)
            }

            function z(e, t, n) {
                var r;
                return (r = H(e, t, n)) ? r : (r = I(e, n), r ? r : null)
            }

            function U() {
                return ue("*[data-mce-caret]")[0]
            }

            function W(e) {
                e.hasAttribute("data-mce-caret") && (r.showCaretContainerBlock(e), k(T()), R(e[0]))
            }

            function V(e) {
                var t, r;
                return e = i.normalizeRange(1, re, e), t = n.fromRangeStart(e), C(t.getNode()) ? A(1, t.getNode(), !t.isAtEnd()) : C(t.getNode(!0)) ? A(1, t.getNode(!0), !1) : (r = c.dom.getParent(t.getNode(), f.or(C, b)), C(r) ? A(1, r, !1) : null)
            }

            function $(e) {
                var t;
                return e && e.collapsed ? (t = V(e), t ? t : e) : e
            }

            function q(e) {
                var t, i, o, a;
                return C(e) ? (C(e.previousSibling) && (o = e.previousSibling), i = ae(n.before(e)), i || (t = oe(n.after(e))), t && x(t.getNode()) && (a = t.getNode()), r.remove(e.previousSibling), r.remove(e.nextSibling), c.dom.remove(e), c.dom.isEmpty(c.getBody()) ? (c.setContent(""), void c.focus()) : o ? n.after(o).toRange() : a ? n.before(a).toRange() : i ? i.toRange() : t ? t.toRange() : null) : null
            }

            function j(e) {
                var t = c.schema.getTextBlockElements();
                return e.nodeName in t
            }

            function Y(e) {
                return c.dom.isEmpty(e)
            }

            function X(e, t, r) {
                var i = c.dom,
                    o, a, s, l;
                if (o = i.getParent(t.getNode(), i.isBlock), a = i.getParent(r.getNode(), i.isBlock), e === -1) {
                    if (l = r.getNode(!0), w(r) && S(l)) return j(o) ? (Y(o) && i.remove(o), n.after(l).toRange()) : q(r.getNode(!0))
                } else if (l = t.getNode(), E(t) && S(l)) return j(a) ? (Y(a) && i.remove(a), n.before(l).toRange()) : q(t.getNode());
                if (o === a || !j(o) || !j(a)) return null;
                for (; s = o.firstChild;) a.appendChild(s);
                return c.dom.remove(o), r.toRange()
            }

            function K(e, t, n, i) {
                var o, a, s, l;
                return !i.collapsed && (o = N(i), C(o)) ? $(q(o)) : (a = M(e, i), n(a) && r.isCaretContainerBlock(i.startContainer) ? (l = e == -1 ? ie.prev(a) : ie.next(a), l ? $(l.toRange()) : i) : t(a) ? $(q(a.getNode(e == -1))) : (s = e == -1 ? ie.prev(a) : ie.next(a), t(s) ? e === -1 ? X(e, a, s) : X(e, s, a) : void 0))
            }

            function G() {
                function i(e, t) {
                    var n = t(T());
                    n && !e.isDefaultPrevented() && (e.preventDefault(), k(n))
                }

                function o(e) {
                    for (var t = c.getBody(); e && e != t;) {
                        if (b(e) || C(e)) return e;
                        e = e.parentNode
                    }
                    return null
                }

                function l(e, t, n) {
                    return !n.collapsed && h.reduce(n.getClientRects(), function(n, r) {
                        return n || u.containsXY(r, e, t)
                    }, !1)
                }

                function f(e) {
                    var t = !1;
                    e.on("touchstart", function() {
                        t = !1
                    }), e.on("touchmove", function() {
                        t = !0
                    }), e.on("touchend", function(e) {
                        var n = o(e.target);
                        C(n) && (t || (e.preventDefault(), Z(B(n))))
                    })
                }

                function g() {
                    var e, t = o(c.selection.getNode());
                    b(t) && S(t) && c.dom.isEmpty(t) && (e = c.dom.create("br", {
                        "data-mce-bogus": "1"
                    }), c.$(t).empty().append(e), c.selection.setRng(n.before(e).toRange()))
                }

                function x(e) {
                    var t = U();
                    if (t) return "compositionstart" == e.type ? (e.preventDefault(), e.stopPropagation(), void W(t)) : void(r.hasContent(t) && W(t))
                }

                function N(e) {
                    var t;
                    switch (e.keyCode) {
                        case d.DELETE:
                            t = g();
                            break;
                        case d.BACKSPACE:
                            t = g()
                    }
                    t && e.preventDefault()
                }
                var R = y(F, 1, oe, E),
                    D = y(F, -1, ae, w),
                    L = y(K, 1, E, w),
                    M = y(K, -1, w, E),
                    P = y(z, -1, a.upUntil),
                    O = y(z, 1, a.downUntil);
                c.on("mouseup", function() {
                    var e = T();
                    e.collapsed && k(V(e))
                }), c.on("click", function(e) {
                    var t;
                    t = o(e.target), t && (C(t) && (e.preventDefault(), c.focus()), b(t) && c.dom.isChildOf(t, c.selection.getNode()) && ee())
                }), c.on("blur NewBlock", function() {
                    ee(), ne()
                });
                var H = function(e) {
                        var r = new t(e);
                        if (!e.firstChild) return !1;
                        var i = n.before(e.firstChild),
                            o = r.next(i);
                        return o && !E(o) && !w(o)
                    },
                    I = function(e, t) {
                        var n = c.dom.getParent(e, c.dom.isBlock),
                            r = c.dom.getParent(t, c.dom.isBlock);
                        return n === r
                    },
                    j = function(e) {
                        return !(e.keyCode >= 112 && e.keyCode <= 123)
                    },
                    Y = function(e, t) {
                        var n = c.dom.getParent(e, c.dom.isBlock),
                            r = c.dom.getParent(t, c.dom.isBlock);
                        return n && !I(n, r) && H(n)
                    };
                f(c), c.on("mousedown", function(e) {
                    var t;
                    if (t = o(e.target)) C(t) ? (e.preventDefault(), Z(B(t))) : l(e.clientX, e.clientY, c.selection.getRng()) || c.selection.placeCaretAt(e.clientX, e.clientY);
                    else {
                        ee(), ne();
                        var n = s.closestCaret(re, e.clientX, e.clientY);
                        n && (Y(e.target, n.node) || (e.preventDefault(), c.getBody().focus(), k(A(1, n.node, n.before))))
                    }
                }), c.on("keydown", function(e) {
                    if (!d.modifierPressed(e)) switch (e.keyCode) {
                        case d.RIGHT:
                            i(e, R);
                            break;
                        case d.DOWN:
                            i(e, O);
                            break;
                        case d.LEFT:
                            i(e, D);
                            break;
                        case d.UP:
                            i(e, P);
                            break;
                        case d.DELETE:
                            i(e, L);
                            break;
                        case d.BACKSPACE:
                            i(e, M);
                            break;
                        default:
                            C(c.selection.getNode()) && j(e) && e.preventDefault()
                    }
                }), c.on("keyup compositionstart", function(e) {
                    x(e), N(e)
                }, !0), c.on("cut", function() {
                    var e = c.selection.getNode();
                    C(e) && p.setEditorTimeout(c, function() {
                        k($(q(e)))
                    })
                }), c.on("getSelectionRange", function(e) {
                    var t = e.range;
                    if (ce) {
                        if (!ce.parentNode) return void(ce = null);
                        t = t.cloneRange(), t.selectNode(ce), e.range = t
                    }
                }), c.on("setSelectionRange", function(e) {
                    var t;
                    t = Z(e.range), t && (e.range = t)
                }), c.on("AfterSetSelectionRange", function(e) {
                    var t = e.range;
                    Q(t) || ne(), v(t.startContainer.parentNode) || ee()
                }), c.on("focus", function() {
                    p.setEditorTimeout(c, function() {
                        c.selection.setRng($(c.selection.getRng()))
                    }, 0)
                }), c.on("copy", function(t) {
                    var n = t.clipboardData;
                    if (!t.isDefaultPrevented() && t.clipboardData && !e.ie) {
                        var r = _();
                        r && (t.preventDefault(), n.clearData(), n.setData("text/html", r.outerHTML), n.setData("text/plain", r.outerText))
                    }
                }), m.init(c)
            }

            function J() {
                var e = c.contentStyles,
                    t = ".mce-content-body";
                e.push(se.getCss()), e.push(t + " .mce-offscreen-selection {position: absolute;left: -9999999999px;max-width: 1000000px;}" + t + " *[contentEditable=false] {cursor: default;}" + t + " *[contentEditable=true] {cursor: text;}")
            }

            function Q(e) {
                return r.isCaretContainer(e.startContainer) || r.isCaretContainer(e.endContainer)
            }

            function Z(t) {
                var n, r = c.$,
                    i = c.dom,
                    o, a, s, l, u, d, f, h, p;
                if (!t) return null;
                if (t.collapsed) {
                    if (!Q(t)) {
                        if (f = M(1, t), C(f.getNode())) return A(1, f.getNode(), !f.isAtEnd());
                        if (C(f.getNode(!0))) return A(1, f.getNode(!0), !1)
                    }
                    return null
                }
                return s = t.startContainer, l = t.startOffset, u = t.endOffset, 3 == s.nodeType && 0 == l && C(s.parentNode) && (s = s.parentNode, l = i.nodeIndex(s), s = s.parentNode), 1 != s.nodeType ? null : (u == l + 1 && (n = s.childNodes[l]), C(n) ? (h = p = n.cloneNode(!0), d = c.fire("ObjectSelected", {
                    target: n,
                    targetClone: h
                }), d.isDefaultPrevented() ? null : (h = d.targetClone, o = r("#" + le), 0 === o.length && (o = r('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id", le), o.appendTo(c.getBody())), t = c.dom.createRng(), h === p && e.ie ? (o.empty().append('<p style="font-size: 0" data-mce-bogus="all">\xa0</p>').append(h), t.setStartAfter(o[0].firstChild.firstChild), t.setEndAfter(h)) : (o.empty().append("\xa0").append(h).append("\xa0"), t.setStart(o[0].firstChild, 1), t.setEnd(o[0].lastChild, 0)), o.css({
                    top: i.getPos(n, c.getBody()).y
                }), o[0].focus(), a = c.selection.getSel(), a.removeAllRanges(), a.addRange(t), c.$("*[data-mce-selected]").removeAttr("data-mce-selected"), n.setAttribute("data-mce-selected", 1), ce = n, t)) : null)
            }

            function ee() {
                ce && (ce.removeAttribute("data-mce-selected"), c.$("#" + le).remove(), ce = null)
            }

            function te() {
                se.destroy(), ce = null
            }

            function ne() {
                se.hide()
            }
            var re = c.getBody(),
                ie = new t(re),
                oe = y(g, ie.next),
                ae = y(g, ie.prev),
                se = new o(c.getBody(), S),
                le = "sel-" + c.dom.uniqueId(),
                ce, ue = c.$;
            return e.ceFalse && (G(), J()), {
                showBlockCaretContainer: W,
                hideFakeCaret: ne,
                destroy: te
            }
        }
        var y = f.curry,
            b = l.isContentEditableTrue,
            C = l.isContentEditableFalse,
            x = l.isElement,
            w = i.isAfterContentEditableFalse,
            E = i.isBeforeContentEditableFalse,
            N = c.getSelectedNode;
        return v
    }), r(rt, [], function() {
        var e = 0,
            t = function() {
                var e = function() {
                        return Math.round(4294967295 * Math.random()).toString(36)
                    },
                    t = (new Date).getTime();
                return "s" + t.toString(36) + e() + e() + e()
            },
            n = function(n) {
                return n + e++ +t()
            };
        return {
            uuid: n
        }
    }), r(it, [], function() {
        var e = function(e, t, n) {
            var r = e.sidebars ? e.sidebars : [];
            r.push({
                name: t,
                settings: n
            }), e.sidebars = r
        };
        return {
            add: e
        }
    }), r(ot, [w, g, N, R, A, O, P, Y, J, te, ne, re, le, ce, E, f, Le, Ie, B, L, ze, d, m, u, Ue, We, Ve, Ke, nt, rt, it], function(e, n, r, i, o, a, s, l, c, u, d, f, h, p, m, g, v, y, b, C, x, w, E, N, _, S, k, T, R, A, B) {
        function D(e, t, i) {
            var o = this,
                a, s, l;
            a = o.documentBaseUrl = i.documentBaseURL, s = i.baseURI, l = i.defaultSettings, t = O({
                id: e,
                theme: "modern",
                delta_width: 0,
                delta_height: 0,
                popup_css: "",
                plugins: "",
                document_base_url: a,
                add_form_submit_trigger: !0,
                submit_patch: !0,
                add_unload_trigger: !0,
                convert_urls: !0,
                relative_urls: !0,
                remove_script_host: !0,
                object_resizing: !0,
                doctype: "<!DOCTYPE html>",
                visual: !0,
                font_size_style_values: "xx-small,x-small,small,medium,large,x-large,xx-large",
                font_size_legacy_values: "xx-small,small,medium,large,x-large,xx-large,300%",
                forced_root_block: "p",
                hidden_input: !0,
                padd_empty_editor: !0,
                render_ui: !0,
                indentation: "30px",
                inline_styles: !0,
                convert_fonts_to_spans: !0,
                indent: "simple",
                indent_before: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                indent_after: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
                validate: !0,
                entity_encoding: "named",
                url_converter: o.convertURL,
                url_converter_scope: o,
                ie7_compat: !0
            }, l, t), l && l.external_plugins && t.external_plugins && (t.external_plugins = O({}, l.external_plugins, t.external_plugins)), o.settings = t, r.language = t.language || "en", r.languageLoad = t.language_load, r.baseURL = i.baseURL, o.id = t.id = e, o.setDirty(!1), o.plugins = {}, o.documentBaseURI = new p(t.document_base_url || a, {
                base_uri: s
            }), o.baseURI = s, o.contentCSS = [], o.contentStyles = [], o.shortcuts = new k(o), o.loadedCSS = {}, o.editorCommands = new h(o), o.suffix = i.suffix, o.editorManager = i, o.inline = t.inline, o.settings.content_editable = o.inline, t.cache_suffix && (w.cacheSuffix = t.cache_suffix.replace(/^[\?\&]+/, "")), t.override_viewport === !1 && (w.overrideViewPort = !1), i.fire("SetupEditor", o), o.execCallback("setup", o), o.$ = n.overrideDefaults(function() {
                return {
                    context: o.inline ? o.getBody() : o.getDoc(),
                    element: o.getBody()
                }
            })
        }
        var L = e.DOM,
            M = r.ThemeManager,
            P = r.PluginManager,
            O = E.extend,
            H = E.each,
            I = E.explode,
            F = E.inArray,
            z = E.trim,
            U = E.resolve,
            W = g.Event,
            V = w.gecko,
            $ = w.ie;
        return D.prototype = {
            render: function() {
                function e() {
                    L.unbind(window, "ready", e), n.render()
                }

                function t() {
                    var e = m.ScriptLoader;
                    if (r.language && "en" != r.language && !r.language_url && (r.language_url = n.editorManager.baseURL + "/langs/" + r.language + ".js"), r.language_url && e.add(r.language_url), r.theme && "function" != typeof r.theme && "-" != r.theme.charAt(0) && !M.urls[r.theme]) {
                        var t = r.theme_url;
                        t = t ? n.documentBaseURI.toAbsolute(t) : "" + r.theme + "/theme" + o + ".js", M.load(r.theme, t)
                    }
                    E.isArray(r.plugins) && (r.plugins = r.plugins.join(" ")), H(r.external_plugins, function(e, t) {
                        P.load(t, e), r.plugins += " " + t
                    }), H(r.plugins.split(/[ ,]/), function(e) {
                        if (e = z(e), e && !P.urls[e])
                            if ("-" == e.charAt(0)) {
                                e = e.substr(1, e.length);
                                var t = P.dependencies(e);
                                H(t, function(e) {
                                    var t = {
                                        prefix: "plugins/",
                                        resource: e,
                                        suffix: "/plugin" + o + ".js"
                                    };
                                    e = P.createUrl(t, e), P.load(e.resource, e)
                                })
                            } else P.load(e, {
                                prefix: "plugins/",
                                resource: e,
                                suffix: "/plugin" + o + ".js"
                            })
                    }), e.loadQueue(function() {
                        n.removed || n.init()
                    })
                }
                var n = this,
                    r = n.settings,
                    i = n.id,
                    o = n.suffix;
                if (!W.domLoaded) return void L.bind(window, "ready", e);
                if (n.getElement() && w.contentEditable) {
                    r.inline ? n.inline = !0 : (n.orgVisibility = n.getElement().style.visibility, n.getElement().style.visibility = "hidden");
                    var a = n.getElement().form || L.getParent(i, "form");
                    a && (n.formElement = a, r.hidden_input && !/TEXTAREA|INPUT/i.test(n.getElement().nodeName) && (L.insertAfter(L.create("input", {
                        type: "hidden",
                        name: i
                    }), i), n.hasHiddenInput = !0), n.formEventDelegate = function(e) {
                        n.fire(e.type, e)
                    }, L.bind(a, "submit reset", n.formEventDelegate), n.on("reset", function() {
                        n.setContent(n.startContent, {
                            format: "raw"
                        })
                    }), !r.submit_patch || a.submit.nodeType || a.submit.length || a._mceOldSubmit || (a._mceOldSubmit = a.submit, a.submit = function() {
                        return n.editorManager.triggerSave(), n.setDirty(!1), a._mceOldSubmit(a)
                    })), n.windowManager = new v(n), n.notificationManager = new y(n), "xml" == r.encoding && n.on("GetContent", function(e) {
                        e.save && (e.content = L.encode(e.content))
                    }), r.add_form_submit_trigger && n.on("submit", function() {
                        n.initialized && n.save()
                    }), r.add_unload_trigger && (n._beforeUnload = function() {
                        !n.initialized || n.destroyed || n.isHidden() || n.save({
                            format: "raw",
                            no_events: !0,
                            set_dirty: !1
                        })
                    }, n.editorManager.on("BeforeUnload", n._beforeUnload)), n.editorManager.add(n), t()
                }
            },
            init: function() {
                function e(n) {
                    var r = P.get(n),
                        i, o;
                    if (i = P.urls[n] || t.documentBaseUrl.replace(/\/$/, ""), n = z(n), r && F(m, n) === -1) {
                        if (H(P.dependencies(n), function(t) {
                                e(t)
                            }), t.plugins[n]) return;
                        o = new r(t, i, t.$), t.plugins[n] = o, o.init && (o.init(t, i), m.push(n))
                    }
                }
                var t = this,
                    n = t.settings,
                    r = t.getElement(),
                    i, o, a, s, l, c, u, d, f, h, p, m = [];
                if (t.rtl = n.rtl_ui || t.editorManager.i18n.rtl, t.editorManager.i18n.setCode(n.language), n.aria_label = n.aria_label || L.getAttrib(r, "aria-label", t.getLang("aria.rich_text_area")), t.fire("ScriptsLoaded"), n.theme && ("function" != typeof n.theme ? (n.theme = n.theme.replace(/-/, ""), c = M.get(n.theme), t.theme = new c(t, M.urls[n.theme]), t.theme.init && t.theme.init(t, M.urls[n.theme] || t.documentBaseUrl.replace(/\/$/, ""), t.$)) : t.theme = n.theme), H(n.plugins.replace(/\-/g, "").split(/[ ,]/), e), n.render_ui && t.theme && (t.orgDisplay = r.style.display, "function" != typeof n.theme ? (i = n.width || r.style.width || r.offsetWidth, o = n.height || r.style.height || r.offsetHeight, a = n.min_height || 100, h = /^[0-9\.]+(|px)$/i, h.test("" + i) && (i = Math.max(parseInt(i, 10), 100)), h.test("" + o) && (o = Math.max(parseInt(o, 10), a)), l = t.theme.renderUI({
                        targetNode: r,
                        width: i,
                        height: o,
                        deltaWidth: n.delta_width,
                        deltaHeight: n.delta_height
                    }), n.content_editable || (o = (l.iframeHeight || o) + ("number" == typeof o ? l.deltaHeight || 0 : ""), o < a && (o = a))) : (l = n.theme(t, r), l.editorContainer.nodeType && (l.editorContainer.id = l.editorContainer.id || t.id + "_parent"), l.iframeContainer.nodeType && (l.iframeContainer.id = l.iframeContainer.id || t.id + "_iframecontainer"), o = l.iframeHeight || r.offsetHeight), t.editorContainer = l.editorContainer), n.content_css && H(I(n.content_css), function(e) {
                        t.contentCSS.push(t.documentBaseURI.toAbsolute(e))
                    }), n.content_style && t.contentStyles.push(n.content_style), n.content_editable) return r = s = l = null, t.initContentBody();
                if (t.iframeHTML = n.doctype + "<html><head>", n.document_base_url != t.documentBaseUrl && (t.iframeHTML += '<base href="' + t.documentBaseURI.getURI() + '" />'), !w.caretAfter && n.ie7_compat && (t.iframeHTML += '<meta http-equiv="X-UA-Compatible" content="IE=7" />'), t.iframeHTML += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />', !/#$/.test(document.location.href))
                    for (p = 0; p < t.contentCSS.length; p++) {
                        var g = t.contentCSS[p];
                        t.iframeHTML += '<link type="text/css" rel="stylesheet" href="' + E._addCacheSuffix(g) + '" />', t.loadedCSS[g] = !0
                    }
                d = n.body_id || "tinymce", d.indexOf("=") != -1 && (d = t.getParam("body_id", "", "hash"), d = d[t.id] || d), f = n.body_class || "", f.indexOf("=") != -1 && (f = t.getParam("body_class", "", "hash"), f = f[t.id] || ""), n.content_security_policy && (t.iframeHTML += '<meta http-equiv="Content-Security-Policy" content="' + n.content_security_policy + '" />'), t.iframeHTML += '</head><body id="' + d + '" class="mce-content-body ' + f + '" data-id="' + t.id + '"><br></body></html>';
                var v = 'javascript:(function(){document.open();document.domain="' + document.domain + '";var ed = window.parent.tinymce.get("' + t.id + '");document.write(ed.iframeHTML);document.close();ed.initContentBody(true);})()';
                document.domain != location.hostname && w.ie && w.ie < 12 && (u = v);
                var y = L.create("iframe", {
                    id: t.id + "_ifr",
                    frameBorder: "0",
                    allowTransparency: "true",
                    title: t.editorManager.translate("Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help"),
                    style: {
                        width: "100%",
                        height: o,
                        display: "block"
                    }
                });
                if (y.onload = function() {
                        y.onload = null, t.fire("load")
                    }, L.setAttrib(y, "src", u || 'javascript:""'), t.contentAreaContainer = l.iframeContainer, t.iframeElement = y, s = L.add(l.iframeContainer, y), $) try {
                    t.getDoc()
                } catch (b) {
                    s.src = u = v
                }
                l.editorContainer && (L.get(l.editorContainer).style.display = t.orgDisplay, t.hidden = L.isHidden(l.editorContainer)), t.getElement().style.display = "none", L.setAttrib(t.id, "aria-hidden", !0), u || t.initContentBody(), r = s = l = null
            },
            initContentBody: function(t) {
                var n = this,
                    r = n.settings,
                    s = n.getElement(),
                    h = n.getDoc(),
                    p, m;
                r.inline || (n.getElement().style.visibility = n.orgVisibility), t || r.content_editable || (h.open(), h.write(n.iframeHTML), h.close()), r.content_editable && (n.on("remove", function() {
                    var e = this.getBody();
                    L.removeClass(e, "mce-content-body"), L.removeClass(e, "mce-edit-focus"), L.setAttrib(e, "contentEditable", null)
                }), L.addClass(s, "mce-content-body"), n.contentDocument = h = r.content_document || document, n.contentWindow = r.content_window || window, n.bodyElement = s, r.content_document = r.content_window = null, r.root_name = s.nodeName.toLowerCase()), p = n.getBody(), p.disabled = !0, n.readonly = r.readonly, n.readonly || (n.inline && "static" == L.getStyle(p, "position", !0) && (p.style.position = "relative"), p.contentEditable = n.getParam("content_editable_state", !0)), p.disabled = !1, n.editorUpload = new T(n), n.schema = new b(r), n.dom = new e(h, {
                    keep_values: !0,
                    url_converter: n.convertURL,
                    url_converter_scope: n,
                    hex_colors: r.force_hex_style_colors,
                    class_filter: r.class_filter,
                    update_styles: !0,
                    root_element: n.inline ? n.getBody() : null,
                    collect: r.content_editable,
                    schema: n.schema,
                    onSetAttrib: function(e) {
                        n.fire("SetAttrib", e)
                    }
                }), n.parser = new C(r, n.schema), n.parser.addAttributeFilter("src,href,style,tabindex", function(e, t) {
                    for (var r = e.length, i, o = n.dom, a, s; r--;)
                        if (i = e[r], a = i.attr(t), s = "data-mce-" + t, !i.attributes.map[s]) {
                            if (0 === a.indexOf("data:") || 0 === a.indexOf("blob:")) continue;
                            "style" === t ? (a = o.serializeStyle(o.parseStyle(a), i.name), a.length || (a = null), i.attr(s, a), i.attr(t, a)) : "tabindex" === t ? (i.attr(s, a), i.attr(t, null)) : i.attr(s, n.convertURL(a, t, i.name))
                        }
                }), n.parser.addNodeFilter("script", function(e) {
                    for (var t = e.length, n, r; t--;) n = e[t], r = n.attr("type") || "no/type", 0 !== r.indexOf("mce-") && n.attr("type", "mce-" + r)
                }), n.parser.addNodeFilter("#cdata", function(e) {
                    for (var t = e.length, n; t--;) n = e[t], n.type = 8, n.name = "#comment", n.value = "[CDATA[" + n.value + "]]"
                }), n.parser.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function(e) {
                    for (var t = e.length, r, i = n.schema.getNonEmptyElements(); t--;) r = e[t], r.isEmpty(i) && (r.append(new o("br", 1)).shortEnded = !0)
                }), n.serializer = new a(r, n), n.selection = new l(n.dom, n.getWin(), n.serializer, n), n.formatter = new c(n), n.undoManager = new u(n), n.forceBlocks = new f(n), n.enterKey = new d(n), n._nodeChangeDispatcher = new i(n), n._selectionOverrides = new R(n), n.fire("PreInit"), r.browser_spellcheck || r.gecko_spellcheck || (h.body.spellcheck = !1, L.setAttrib(p, "spellcheck", "false")), n.quirks = new x(n), n.fire("PostRender"), r.directionality && (p.dir = r.directionality), r.nowrap && (p.style.whiteSpace = "nowrap"), r.protect && n.on("BeforeSetContent", function(e) {
                    H(r.protect, function(t) {
                        e.content = e.content.replace(t, function(e) {
                            return "<!--mce:protected " + escape(e) + "-->"
                        })
                    })
                }), n.on("SetContent", function() {
                    n.addVisual(n.getBody())
                }), r.padd_empty_editor && n.on("PostProcess", function(e) {
                    e.content = e.content.replace(/^(<p[^>]*>(&nbsp;|&#160;|\s|\u00a0|)<\/p>[\r\n]*|<br \/>[\r\n]*)$/, "")
                }), n.load({
                    initial: !0,
                    format: "html"
                }), n.startContent = n.getContent({
                    format: "raw"
                }), n.initialized = !0, n.bindPendingEventDelegates(), n.fire("init"), n.focus(!0), n.nodeChanged({
                    initial: !0
                }), n.execCallback("init_instance_callback", n), n.on("compositionstart compositionend", function(e) {
                    n.composing = "compositionstart" === e.type
                }), n.contentStyles.length > 0 && (m = "", H(n.contentStyles, function(e) {
                    m += e + "\r\n"
                }), n.dom.addStyle(m)), H(n.contentCSS, function(e) {
                    n.loadedCSS[e] || (n.dom.loadCSS(e), n.loadedCSS[e] = !0)
                }), r.auto_focus && N.setEditorTimeout(n, function() {
                    var e;
                    e = r.auto_focus === !0 ? n : n.editorManager.get(r.auto_focus), e.destroyed || e.focus()
                }, 100), s = h = p = null
            },
            focus: function(e) {
                function t(e) {
                    return n.dom.getParent(e, function(e) {
                        return "true" === n.dom.getContentEditable(e)
                    })
                }
                var n = this,
                    r = n.selection,
                    i = n.settings.content_editable,
                    o, a, s = n.getDoc(),
                    l = n.getBody(),
                    c;
                if (!e) {
                    if (o = r.getRng(), o.item && (a = o.item(0)), n.quirks.refreshContentEditable(), c = t(r.getNode()), n.$.contains(l, c)) return c.focus(), r.normalize(), void n.editorManager.setActive(n);
                    if (i || (w.opera || n.getBody().focus(), n.getWin().focus()), V || i) {
                        if (l.setActive) try {
                            l.setActive()
                        } catch (u) {
                            l.focus()
                        } else l.focus();
                        i && r.normalize()
                    }
                    a && a.ownerDocument == s && (o = s.body.createControlRange(), o.addElement(a), o.select())
                }
                n.editorManager.setActive(n)
            },
            execCallback: function(e) {
                var t = this,
                    n = t.settings[e],
                    r;
                if (n) return t.callbackLookup && (r = t.callbackLookup[e]) && (n = r.func, r = r.scope), "string" == typeof n && (r = n.replace(/\.\w+$/, ""), r = r ? U(r) : 0, n = U(n), t.callbackLookup = t.callbackLookup || {}, t.callbackLookup[e] = {
                    func: n,
                    scope: r
                }), n.apply(r || t, Array.prototype.slice.call(arguments, 1))
            },
            translate: function(e) {
                var t = this.settings.language || "en",
                    n = this.editorManager.i18n;
                return e ? (e = n.data[t + "." + e] || e.replace(/\{\#([^\}]+)\}/g, function(e, r) {
                    return n.data[t + "." + r] || "{#" + r + "}"
                }), this.editorManager.translate(e)) : ""
            },
            getLang: function(e, n) {
                return this.editorManager.i18n.data[(this.settings.language || "en") + "." + e] || (n !== t ? n : "{#" + e + "}")
            },
            getParam: function(e, t, n) {
                var r = e in this.settings ? this.settings[e] : t,
                    i;
                return "hash" === n ? (i = {}, "string" == typeof r ? H(r.indexOf("=") > 0 ? r.split(/[;,](?![^=;,]*(?:[;,]|$))/) : r.split(","), function(e) {
                    e = e.split("="), e.length > 1 ? i[z(e[0])] = z(e[1]) : i[z(e[0])] = z(e)
                }) : i = r, i) : r
            },
            nodeChanged: function(e) {
                this._nodeChangeDispatcher.nodeChanged(e)
            },
            addButton: function(e, t) {
                var n = this;
                t.cmd && (t.onclick = function() {
                    n.execCommand(t.cmd)
                }), t.text || t.icon || (t.icon = e), n.buttons = n.buttons || {}, t.tooltip = t.tooltip || t.title, n.buttons[e] = t
            },
            addSidebar: function(e, t) {
                return B.add(this, e, t)
            },
            addMenuItem: function(e, t) {
                var n = this;
                t.cmd && (t.onclick = function() {
                    n.execCommand(t.cmd)
                }), n.menuItems = n.menuItems || {}, n.menuItems[e] = t
            },
            addContextToolbar: function(e, t) {
                var n = this,
                    r;
                n.contextToolbars = n.contextToolbars || [], "string" == typeof e && (r = e, e = function(e) {
                    return n.dom.is(e, r)
                }), n.contextToolbars.push({
                    id: A.uuid("mcet"),
                    predicate: e,
                    items: t
                })
            },
            addCommand: function(e, t, n) {
                this.editorCommands.addCommand(e, t, n)
            },
            addQueryStateHandler: function(e, t, n) {
                this.editorCommands.addQueryStateHandler(e, t, n)
            },
            addQueryValueHandler: function(e, t, n) {
                this.editorCommands.addQueryValueHandler(e, t, n)
            },
            addShortcut: function(e, t, n, r) {
                this.shortcuts.add(e, t, n, r)
            },
            execCommand: function(e, t, n, r) {
                return this.editorCommands.execCommand(e, t, n, r)
            },
            queryCommandState: function(e) {
                return this.editorCommands.queryCommandState(e)
            },
            queryCommandValue: function(e) {
                return this.editorCommands.queryCommandValue(e)
            },
            queryCommandSupported: function(e) {
                return this.editorCommands.queryCommandSupported(e)
            },
            show: function() {
                var e = this;
                e.hidden && (e.hidden = !1, e.inline ? e.getBody().contentEditable = !0 : (L.show(e.getContainer()), L.hide(e.id)), e.load(), e.fire("show"))
            },
            hide: function() {
                var e = this,
                    t = e.getDoc();
                e.hidden || ($ && t && !e.inline && t.execCommand("SelectAll"), e.save(), e.inline ? (e.getBody().contentEditable = !1, e == e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : (L.hide(e.getContainer()), L.setStyle(e.id, "display", e.orgDisplay)), e.hidden = !0, e.fire("hide"))
            },
            isHidden: function() {
                return !!this.hidden
            },
            setProgressState: function(e, t) {
                this.fire("ProgressState", {
                    state: e,
                    time: t
                })
            },
            load: function(e) {
                var n = this,
                    r = n.getElement(),
                    i;
                if (r) return e = e || {}, e.load = !0, i = n.setContent(r.value !== t ? r.value : r.innerHTML, e), e.element = r, e.no_events || n.fire("LoadContent", e), e.element = r = null, i
            },
            save: function(e) {
                var t = this,
                    n = t.getElement(),
                    r, i;
                if (n && t.initialized) return e = e || {}, e.save = !0, e.element = n, r = e.content = t.getContent(e), e.no_events || t.fire("SaveContent", e), "raw" == e.format && t.fire("RawSaveContent", e), r = e.content, /TEXTAREA|INPUT/i.test(n.nodeName) ? n.value = r : (t.inline || (n.innerHTML = r), (i = L.getParent(t.id, "form")) && H(i.elements, function(e) {
                    if (e.name == t.id) return e.value = r, !1
                })), e.element = n = null, e.set_dirty !== !1 && t.setDirty(!1), r
            },
            setContent: function(e, t) {
                var n = this,
                    r = n.getBody(),
                    i, o;
                return t = t || {}, t.format = t.format || "html", t.set = !0, t.content = e, t.no_events || n.fire("BeforeSetContent", t), e = t.content, 0 === e.length || /^\s+$/.test(e) ? (o = $ && $ < 11 ? "" : '<br data-mce-bogus="1">', "TABLE" == r.nodeName ? e = "<tr><td>" + o + "</td></tr>" : /^(UL|OL)$/.test(r.nodeName) && (e = "<li>" + o + "</li>"), i = n.settings.forced_root_block, i && n.schema.isValidChild(r.nodeName.toLowerCase(), i.toLowerCase()) ? (e = o, e = n.dom.createHTML(i, n.settings.forced_root_block_attrs, e)) : $ || e || (e = '<br data-mce-bogus="1">'), n.dom.setHTML(r, e), n.fire("SetContent", t)) : ("raw" !== t.format && (e = new s({
                    validate: n.validate
                }, n.schema).serialize(n.parser.parse(e, {
                    isRootContent: !0
                }))), t.content = z(e), n.dom.setHTML(r, t.content), t.no_events || n.fire("SetContent", t)), t.content
            },
            getContent: function(e) {
                var t = this,
                    n, r = t.getBody();
                return e = e || {}, e.format = e.format || "html", e.get = !0, e.getInner = !0, e.no_events || t.fire("BeforeGetContent", e), n = "raw" == e.format ? t.serializer.getTrimmedContent() : "text" == e.format ? r.innerText || r.textContent : t.serializer.serialize(r, e), "text" != e.format ? e.content = z(n) : e.content = n, e.no_events || t.fire("GetContent", e), e.content
            },
            insertContent: function(e, t) {
                t && (e = O({
                    content: e
                }, t)), this.execCommand("mceInsertContent", !1, e)
            },
            isDirty: function() {
                return !this.isNotDirty
            },
            setDirty: function(e) {
                var t = !this.isNotDirty;
                this.isNotDirty = !e, e && e != t && this.fire("dirty")
            },
            setMode: function(e) {
                S.setMode(this, e)
            },
            getContainer: function() {
                var e = this;
                return e.container || (e.container = L.get(e.editorContainer || e.id + "_parent")), e.container
            },
            getContentAreaContainer: function() {
                return this.contentAreaContainer
            },
            getElement: function() {
                return this.targetElm || (this.targetElm = L.get(this.id)), this.targetElm
            },
            getWin: function() {
                var e = this,
                    t;
                return e.contentWindow || (t = e.iframeElement, t && (e.contentWindow = t.contentWindow)), e.contentWindow
            },
            getDoc: function() {
                var e = this,
                    t;
                return e.contentDocument || (t = e.getWin(), t && (e.contentDocument = t.document)), e.contentDocument
            },
            getBody: function() {
                var e = this.getDoc();
                return this.bodyElement || (e ? e.body : null)
            },
            convertURL: function(e, t, n) {
                var r = this,
                    i = r.settings;
                return i.urlconverter_callback ? r.execCallback("urlconverter_callback", e, n, !0, t) : !i.convert_urls || n && "LINK" == n.nodeName || 0 === e.indexOf("file:") || 0 === e.length ? e : i.relative_urls ? r.documentBaseURI.toRelative(e) : e = r.documentBaseURI.toAbsolute(e, i.remove_script_host)
            },
            addVisual: function(e) {
                var n = this,
                    r = n.settings,
                    i = n.dom,
                    o;
                e = e || n.getBody(), n.hasVisual === t && (n.hasVisual = r.visual), H(i.select("table,a", e), function(e) {
                    var t;
                    switch (e.nodeName) {
                        case "TABLE":
                            return o = r.visual_table_class || "mce-item-table", t = i.getAttrib(e, "border"), void(t && "0" != t || !n.hasVisual ? i.removeClass(e, o) : i.addClass(e, o));
                        case "A":
                            return void(i.getAttrib(e, "href", !1) || (t = i.getAttrib(e, "name") || e.id, o = r.visual_anchor_class || "mce-item-anchor", t && n.hasVisual ? i.addClass(e, o) : i.removeClass(e, o)))
                    }
                }), n.fire("VisualAid", {
                    element: e,
                    hasVisual: n.hasVisual
                })
            },
            remove: function() {
                var e = this;
                e.removed || (e.save(), e.removed = 1, e.unbindAllNativeEvents(), e.hasHiddenInput && L.remove(e.getElement().nextSibling), e.inline || ($ && $ < 10 && e.getDoc().execCommand("SelectAll", !1, null), L.setStyle(e.id, "display", e.orgDisplay), e.getBody().onload = null), e.fire("remove"), e.editorManager.remove(e), L.remove(e.getContainer()), e._selectionOverrides.destroy(), e.editorUpload.destroy(), e.destroy())
            },
            destroy: function(e) {
                var t = this,
                    n;
                if (!t.destroyed) {
                    if (!e && !t.removed) return void t.remove();
                    e || (t.editorManager.off("beforeunload", t._beforeUnload), t.theme && t.theme.destroy && t.theme.destroy(), t.selection.destroy(), t.dom.destroy()), n = t.formElement, n && (n._mceOldSubmit && (n.submit = n._mceOldSubmit, n._mceOldSubmit = null), L.unbind(n, "submit reset", t.formEventDelegate)), t.contentAreaContainer = t.formElement = t.container = t.editorContainer = null, t.bodyElement = t.contentDocument = t.contentWindow = null, t.iframeElement = t.targetElm = null, t.selection && (t.selection = t.selection.win = t.selection.dom = t.selection.dom.doc = null), t.destroyed = 1
                }
            },
            uploadImages: function(e) {
                return this.editorUpload.uploadImages(e)
            },
            _scanForImages: function() {
                return this.editorUpload.scanForImages()
            }
        }, O(D.prototype, _), D
    }), r(at, [m], function(e) {
        var t = {},
            n = "en";
        return {
            setCode: function(e) {
                e && (n = e, this.rtl = !!this.data[e] && "rtl" === this.data[e]._dir)
            },
            getCode: function() {
                return n
            },
            rtl: !1,
            add: function(e, n) {
                var r = t[e];
                r || (t[e] = r = {});
                for (var i in n) r[i] = n[i];
                this.setCode(e)
            },
            translate: function(r) {
                function i(t) {
                    return e.is(t, "function") ? Object.prototype.toString.call(t) : o(t) ? "" : "" + t
                }

                function o(t) {
                    return "" === t || null === t || e.is(t, "undefined")
                }

                function a(t) {
                    return t = i(t), e.hasOwn(s, t) ? i(s[t]) : t
                }
                var s = t[n] || {};
                if (o(r)) return "";
                if (e.is(r, "object") && e.hasOwn(r, "raw")) return i(r.raw);
                if (e.is(r, "array")) {
                    var l = r.slice(1);
                    r = a(r[0]).replace(/\{([0-9]+)\}/g, function(t, n) {
                        return e.hasOwn(l, n) ? i(l[n]) : t
                    })
                }
                return a(r).replace(/{context:\w+}$/, "")
            },
            data: t
        }
    }), r(st, [w, u, d], function(e, t, n) {
        function r(e) {
            function l() {
                try {
                    return document.activeElement
                } catch (e) {
                    return document.body
                }
            }

            function c(e, t) {
                if (t && t.startContainer) {
                    if (!e.isChildOf(t.startContainer, e.getRoot()) || !e.isChildOf(t.endContainer, e.getRoot())) return;
                    return {
                        startContainer: t.startContainer,
                        startOffset: t.startOffset,
                        endContainer: t.endContainer,
                        endOffset: t.endOffset
                    }
                }
                return t
            }

            function u(e, t) {
                var n;
                return t.startContainer ? (n = e.getDoc().createRange(), n.setStart(t.startContainer, t.startOffset), n.setEnd(t.endContainer, t.endOffset)) : n = t, n
            }

            function d(e) {
                return !!s.getParent(e, r.isEditorUIElement)
            }

            function f(r) {
                var f = r.editor;
                f.on("init", function() {
                    (f.inline || n.ie) && ("onbeforedeactivate" in document && n.ie < 9 ? f.dom.bind(f.getBody(), "beforedeactivate", function(e) {
                        if (e.target == f.getBody()) try {
                            f.lastRng = f.selection.getRng()
                        } catch (t) {}
                    }) : f.on("nodechange mouseup keyup", function(e) {
                        var t = l();
                        "nodechange" == e.type && e.selectionChange || (t && t.id == f.id + "_ifr" && (t = f.getBody()), f.dom.isChildOf(t, f.getBody()) && (f.lastRng = f.selection.getRng()))
                    }), n.webkit && !i && (i = function() {
                        var t = e.activeEditor;
                        if (t && t.selection) {
                            var n = t.selection.getRng();
                            n && !n.collapsed && (f.lastRng = n)
                        }
                    }, s.bind(document, "selectionchange", i)))
                }), f.on("setcontent", function() {
                    f.lastRng = null
                }), f.on("mousedown", function() {
                    f.selection.lastFocusBookmark = null
                }), f.on("focusin", function() {
                    var t = e.focusedEditor,
                        n;
                    f.selection.lastFocusBookmark && (n = u(f, f.selection.lastFocusBookmark), f.selection.lastFocusBookmark = null, f.selection.setRng(n)), t != f && (t && t.fire("blur", {
                        focusedEditor: f
                    }), e.setActive(f), e.focusedEditor = f, f.fire("focus", {
                        blurredEditor: t
                    }), f.focus(!0)), f.lastRng = null
                }), f.on("focusout", function() {
                    t.setEditorTimeout(f, function() {
                        var t = e.focusedEditor;
                        d(l()) || t != f || (f.fire("blur", {
                            focusedEditor: null
                        }), e.focusedEditor = null, f.selection && (f.selection.lastFocusBookmark = null))
                    })
                }), o || (o = function(t) {
                    var n = e.activeEditor,
                        r;
                    r = t.target, n && r.ownerDocument == document && (n.selection && r != n.getBody() && (n.selection.lastFocusBookmark = c(n.dom, n.lastRng)), r == document.body || d(r) || e.focusedEditor != n || (n.fire("blur", {
                        focusedEditor: null
                    }), e.focusedEditor = null))
                }, s.bind(document, "focusin", o)), f.inline && !a && (a = function(t) {
                    var n = e.activeEditor,
                        r = n.dom;
                    if (n.inline && r && !r.isChildOf(t.target, n.getBody())) {
                        var i = n.selection.getRng();
                        i.collapsed || (n.lastRng = i)
                    }
                }, s.bind(document, "mouseup", a))
            }

            function h(t) {
                e.focusedEditor == t.editor && (e.focusedEditor = null), e.activeEditor || (s.unbind(document, "selectionchange", i), s.unbind(document, "focusin", o), s.unbind(document, "mouseup", a), i = o = a = null)
            }
            e.on("AddEditor", f), e.on("RemoveEditor", h)
        }
        var i, o, a, s = e.DOM;
        return r.isEditorUIElement = function(e) {
            return e.className.toString().indexOf("mce-") !== -1
        }, r
    }), r(lt, [ot, g, w, ce, d, m, c, he, at, st, N], function(e, t, n, r, i, o, a, s, l, c, u) {
        function d(e) {
            v(x.editors, function(t) {
                "scroll" === e.type ? t.fire("ScrollWindow", e) : t.fire("ResizeWindow", e)
            })
        }

        function f(e, n) {
            n !== w && (n ? t(window).on("resize scroll", d) : t(window).off("resize scroll", d), w = n)
        }

        function h(e) {
            var t = x.editors,
                n;
            delete t[e.id];
            for (var r = 0; r < t.length; r++)
                if (t[r] == e) {
                    t.splice(r, 1), n = !0;
                    break
                }
            return x.activeEditor == e && (x.activeEditor = t[0]), x.focusedEditor == e && (x.focusedEditor = null), n
        }

        function p(e) {
            return e && e.initialized && !(e.getContainer() || e.getBody()).parentNode && (h(e), e.unbindAllNativeEvents(), e.destroy(!0), e.removed = !0, e = null), e
        }
        var m = n.DOM,
            g = o.explode,
            v = o.each,
            y = o.extend,
            b = 0,
            C, x, w = !1;
        return x = {
            $: t,
            majorVersion: "4",
            minorVersion: "5.1",
            releaseDate: "2016-12-07",
            editors: [],
            i18n: l,
            activeEditor: null,
            setup: function() {
                var e = this,
                    t, n, i = "",
                    o, a;
                if (n = r.getDocumentBaseUrl(document.location), /^[^:]+:\/\/\/?[^\/]+\//.test(n) && (n = n.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(n) || (n += "/")), o = window.tinymce || window.tinyMCEPreInit) t = o.base || o.baseURL, i = o.suffix;
                else {
                    for (var s = document.getElementsByTagName("script"), l = 0; l < s.length; l++) {
                        a = s[l].src;
                        var u = a.substring(a.lastIndexOf("/"));
                        if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(a)) {
                            u.indexOf(".min") != -1 && (i = ".min"), t = a.substring(0, a.lastIndexOf("/"));
                            break
                        }
                    }!t && document.currentScript && (a = document.currentScript.src, a.indexOf(".min") != -1 && (i = ".min"), t = a.substring(0, a.lastIndexOf("/")))
                }
                e.baseURL = new r(n).toAbsolute(t), e.documentBaseURL = n, e.baseURI = new r(e.baseURL), e.suffix = i, e.focusManager = new c(e)
            },
            overrideDefaults: function(e) {
                var t, n;
                t = e.base_url, t && (this.baseURL = new r(this.documentBaseURL).toAbsolute(t.replace(/\/+$/, "")), this.baseURI = new r(this.baseURL)), n = e.suffix, e.suffix && (this.suffix = n), this.defaultSettings = e;
                var i = e.plugin_base_urls;
                for (var o in i) u.PluginManager.urls[o] = i[o]
            },
            init: function(n) {
                function r(e, t) {
                    return e.inline && t.tagName.toLowerCase() in C
                }

                function i(e, t) {
                    window.console && !window.test && window.console.log(e, t)
                }

                function s(e) {
                    var t = e.id;
                    return t || (t = e.name, t = t && !m.get(t) ? e.name : m.uniqueId(), e.setAttribute("id", t)), t
                }

                function l(e) {
                    var t = n[e];
                    if (t) return t.apply(f, Array.prototype.slice.call(arguments, 2))
                }

                function c(e, t) {
                    return t.constructor === RegExp ? t.test(e.className) : m.hasClass(e, t)
                }

                function u(e) {
                    var t, n = [];
                    if (e.types) return v(e.types, function(e) {
                        n = n.concat(m.select(e.selector))
                    }), n;
                    if (e.selector) return m.select(e.selector);
                    if (e.target) return [e.target];
                    switch (e.mode) {
                        case "exact":
                            t = e.elements || "", t.length > 0 && v(g(t), function(e) {
                                var t;
                                (t = m.get(e)) ? n.push(t): v(document.forms, function(t) {
                                    v(t.elements, function(t) {
                                        t.name === e && (e = "mce_editor_" + b++, m.setAttrib(t, "id", e), n.push(t))
                                    })
                                })
                            });
                            break;
                        case "textareas":
                        case "specific_textareas":
                            v(m.select("textarea"), function(t) {
                                e.editor_deselector && c(t, e.editor_deselector) || e.editor_selector && !c(t, e.editor_selector) || n.push(t)
                            })
                    }
                    return n
                }

                function d() {
                    function a(t, n, r) {
                        var i = new e(t, n, f);
                        h.push(i), i.on("init", function() {
                            ++c === g.length && x(h)
                        }), i.targetElm = i.targetElm || r, i.render()
                    }
                    var c = 0,
                        h = [],
                        g;
                    return m.unbind(window, "ready", d), l("onpageload"), g = t.unique(u(n)), n.types ? void v(n.types, function(e) {
                        o.each(g, function(t) {
                            return !m.is(t, e.selector) || (a(s(t), y({}, n, e), t), !1)
                        })
                    }) : (o.each(g, function(e) {
                        p(f.get(e.id))
                    }), g = o.grep(g, function(e) {
                        return !f.get(e.id)
                    }), void v(g, function(e) {
                        r(n, e) ? i("Could not initialize inline editor on invalid inline target element", e) : a(s(e), n, e)
                    }))
                }
                var f = this,
                    h, C;
                C = o.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option tbody tfoot thead tr script noscript style textarea video audio iframe object menu", " ");
                var x = function(e) {
                    h = e
                };
                return f.settings = n, m.bind(window, "ready", d), new a(function(e) {
                    h ? e(h) : x = function(t) {
                        e(t)
                    }
                })
            },
            get: function(e) {
                return arguments.length ? e in this.editors ? this.editors[e] : null : this.editors
            },
            add: function(e) {
                var t = this,
                    n = t.editors;
                return n[e.id] = e, n.push(e), f(n, !0), t.activeEditor = e, t.fire("AddEditor", {
                    editor: e
                }), C || (C = function() {
                    t.fire("BeforeUnload")
                }, m.bind(window, "beforeunload", C)), e
            },
            createEditor: function(t, n) {
                return this.add(new e(t, n, this))
            },
            remove: function(e) {
                var t = this,
                    n, r = t.editors,
                    i; {
                    if (e) return "string" == typeof e ? (e = e.selector || e, void v(m.select(e), function(e) {
                        i = r[e.id], i && t.remove(i)
                    })) : (i = e, r[i.id] ? (h(i) && t.fire("RemoveEditor", {
                        editor: i
                    }), r.length || m.unbind(window, "beforeunload", C), i.remove(), f(r, r.length > 0), i) : null);
                    for (n = r.length - 1; n >= 0; n--) t.remove(r[n])
                }
            },
            execCommand: function(t, n, r) {
                var i = this,
                    o = i.get(r);
                switch (t) {
                    case "mceAddEditor":
                        return i.get(r) || new e(r, i.settings, i).render(), !0;
                    case "mceRemoveEditor":
                        return o && o.remove(), !0;
                    case "mceToggleEditor":
                        return o ? (o.isHidden() ? o.show() : o.hide(), !0) : (i.execCommand("mceAddEditor", 0, r), !0)
                }
                return !!i.activeEditor && i.activeEditor.execCommand(t, n, r)
            },
            triggerSave: function() {
                v(this.editors, function(e) {
                    e.save()
                })
            },
            addI18n: function(e, t) {
                l.add(e, t)
            },
            translate: function(e) {
                return l.translate(e)
            },
            setActive: function(e) {
                var t = this.activeEditor;
                this.activeEditor != e && (t && t.fire("deactivate", {
                    relatedTarget: e
                }), e.fire("activate", {
                    relatedTarget: t
                })), this.activeEditor = e
            }
        }, y(x, s), x.setup(), window.tinymce = window.tinyMCE = x, x
    }), r(ct, [lt, m], function(e, t) {
        var n = t.each,
            r = t.explode;
        e.on("AddEditor", function(e) {
            var t = e.editor;
            t.on("preInit", function() {
                function e(e, t) {
                    n(t, function(t, n) {
                        t && s.setStyle(e, n, t)
                    }), s.rename(e, "span")
                }

                function i(e) {
                    s = t.dom, l.convert_fonts_to_spans && n(s.select("font,u,strike", e.node), function(e) {
                        o[e.nodeName.toLowerCase()](s, e)
                    })
                }
                var o, a, s, l = t.settings;
                l.inline_styles && (a = r(l.font_size_legacy_values), o = {
                    font: function(t, n) {
                        e(n, {
                            backgroundColor: n.style.backgroundColor,
                            color: n.color,
                            fontFamily: n.face,
                            fontSize: a[parseInt(n.size, 10) - 1]
                        })
                    },
                    u: function(n, r) {
                        "html4" === t.settings.schema && e(r, {
                            textDecoration: "underline"
                        })
                    },
                    strike: function(t, n) {
                        e(n, {
                            textDecoration: "line-through"
                        })
                    }
                }, t.on("PreProcess SetContent", i))
            })
        })
    }), r(ut, [he, m], function(e, t) {
        var n = {
            send: function(e) {
                function r() {
                    !e.async || 4 == i.readyState || o++ > 1e4 ? (e.success && o < 1e4 && 200 == i.status ? e.success.call(e.success_scope, "" + i.responseText, i, e) : e.error && e.error.call(e.error_scope, o > 1e4 ? "TIMED_OUT" : "GENERAL", i, e), i = null) : setTimeout(r, 10)
                }
                var i, o = 0;
                if (e.scope = e.scope || this, e.success_scope = e.success_scope || e.scope, e.error_scope = e.error_scope || e.scope, e.async = e.async !== !1, e.data = e.data || "", n.fire("beforeInitialize", {
                        settings: e
                    }), i = new XMLHttpRequest) {
                    if (i.overrideMimeType && i.overrideMimeType(e.content_type), i.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async), e.crossDomain && (i.withCredentials = !0), e.content_type && i.setRequestHeader("Content-Type", e.content_type), e.requestheaders && t.each(e.requestheaders, function(e) {
                            i.setRequestHeader(e.key, e.value)
                        }), i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i = n.fire("beforeSend", {
                            xhr: i,
                            settings: e
                        }).xhr, i.send(e.data), !e.async) return r();
                    setTimeout(r, 10)
                }
            }
        };
        return t.extend(n, e), n
    }), r(dt, [], function() {
        function e(t, n) {
            var r, i, o, a;
            if (n = n || '"', null === t) return "null";
            if (o = typeof t, "string" == o) return i = "\bb\tt\nn\ff\rr\"\"''\\\\", n + t.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g, function(e, t) {
                return '"' === n && "'" === e ? e : (r = i.indexOf(t), r + 1 ? "\\" + i.charAt(r + 1) : (e = t.charCodeAt().toString(16), "\\u" + "0000".substring(e.length) + e))
            }) + n;
            if ("object" == o) {
                if (t.hasOwnProperty && "[object Array]" === Object.prototype.toString.call(t)) {
                    for (r = 0, i = "["; r < t.length; r++) i += (r > 0 ? "," : "") + e(t[r], n);
                    return i + "]"
                }
                i = "{";
                for (a in t) t.hasOwnProperty(a) && (i += "function" != typeof t[a] ? (i.length > 1 ? "," + n : n) + a + n + ":" + e(t[a], n) : "");
                return i + "}"
            }
            return "" + t
        }
        return {
            serialize: e,
            parse: function(e) {
                try {
                    return window[String.fromCharCode(101) + "val"]("(" + e + ")")
                } catch (t) {}
            }
        }
    }), r(ft, [dt, ut, m], function(e, t, n) {
        function r(e) {
            this.settings = i({}, e), this.count = 0
        }
        var i = n.extend;
        return r.sendRPC = function(e) {
            return (new r).send(e)
        }, r.prototype = {
            send: function(n) {
                var r = n.error,
                    o = n.success;
                n = i(this.settings, n), n.success = function(t, i) {
                    t = e.parse(t), "undefined" == typeof t && (t = {
                        error: "JSON Parse error."
                    }), t.error ? r.call(n.error_scope || n.scope, t.error, i) : o.call(n.success_scope || n.scope, t.result)
                }, n.error = function(e, t) {
                    r && r.call(n.error_scope || n.scope, e, t)
                }, n.data = e.serialize({
                    id: n.id || "c" + this.count++,
                    method: n.method,
                    params: n.params
                }), n.content_type = "application/json", t.send(n)
            }
        }, r
    }), r(ht, [w], function(e) {
        return {
            callbacks: {},
            count: 0,
            send: function(n) {
                var r = this,
                    i = e.DOM,
                    o = n.count !== t ? n.count : r.count,
                    a = "tinymce_jsonp_" + o;
                r.callbacks[o] = function(e) {
                    i.remove(a), delete r.callbacks[o], n.callback(e)
                }, i.add(i.doc.body, "script", {
                    id: a,
                    src: n.url,
                    type: "text/javascript"
                }), r.count++
            }
        }
    }), r(pt, [], function() {
        function e() {
            s = [];
            for (var e in a) s.push(e);
            i.length = s.length
        }

        function n() {
            function n(e) {
                var n, r;
                return r = e !== t ? u + e : i.indexOf(",", u), r === -1 || r > i.length ? null : (n = i.substring(u, r), u = r + 1, n)
            }
            var r, i, s, u = 0;
            if (a = {}, c) {
                o.load(l), i = o.getAttribute(l) || "";
                do {
                    var d = n();
                    if (null === d) break;
                    if (r = n(parseInt(d, 32) || 0), null !== r) {
                        if (d = n(), null === d) break;
                        s = n(parseInt(d, 32) || 0), r && (a[r] = s)
                    }
                } while (null !== r);
                e()
            }
        }

        function r() {
            var t, n = "";
            if (c) {
                for (var r in a) t = a[r], n += (n ? "," : "") + r.length.toString(32) + "," + r + "," + t.length.toString(32) + "," + t;
                o.setAttribute(l, n);
                try {
                    o.save(l)
                } catch (i) {}
                e()
            }
        }
        var i, o, a, s, l, c;
        try {
            if (window.localStorage) return localStorage
        } catch (u) {}
        return l = "tinymce", o = document.documentElement, c = !!o.addBehavior, c && o.addBehavior("#default#userData"), i = {
            key: function(e) {
                return s[e]
            },
            getItem: function(e) {
                return e in a ? a[e] : null
            },
            setItem: function(e, t) {
                a[e] = "" + t, r()
            },
            removeItem: function(e) {
                delete a[e], r()
            },
            clear: function() {
                a = {}, r()
            }
        }, n(), i
    }), r(mt, [w, f, E, N, m, d], function(e, t, n, r, i, o) {
        var a = window.tinymce;
        return a.DOM = e.DOM, a.ScriptLoader = n.ScriptLoader, a.PluginManager = r.PluginManager, a.ThemeManager = r.ThemeManager, a.dom = a.dom || {}, a.dom.Event = t.Event, i.each("trim isArray is toArray makeMap each map grep inArray extend create walk createNS resolve explode _addCacheSuffix".split(" "), function(e) {
            a[e] = i[e]
        }), i.each("isOpera isWebKit isIE isGecko isMac".split(" "), function(e) {
            a[e] = o[e.substr(2).toLowerCase()]
        }), {}
    }), r(gt, [ue, m], function(e, t) {
        return e.extend({
            Defaults: {
                firstControlClass: "first",
                lastControlClass: "last"
            },
            init: function(e) {
                this.settings = t.extend({}, this.Defaults, e)
            },
            preRender: function(e) {
                e.bodyClasses.add(this.settings.containerClass)
            },
            applyClasses: function(e) {
                var t = this,
                    n = t.settings,
                    r, i, o, a;
                r = n.firstControlClass, i = n.lastControlClass, e.each(function(e) {
                    e.classes.remove(r).remove(i).add(n.controlClass), e.visible() && (o || (o = e), a = e)
                }), o && o.classes.add(r), a && a.classes.add(i)
            },
            renderHtml: function(e) {
                var t = this,
                    n = "";
                return t.applyClasses(e.items()), e.items().each(function(e) {
                    n += e.renderHtml()
                }), n
            },
            recalc: function() {},
            postRender: function() {},
            isNative: function() {
                return !1
            }
        })
    }), r(vt, [gt], function(e) {
        return e.extend({
            Defaults: {
                containerClass: "abs-layout",
                controlClass: "abs-layout-item"
            },
            recalc: function(e) {
                e.items().filter(":visible").each(function(e) {
                    var t = e.settings;
                    e.layoutRect({
                        x: t.x,
                        y: t.y,
                        w: t.w,
                        h: t.h
                    }), e.recalc && e.recalc()
                })
            },
            renderHtml: function(e) {
                return '<div id="' + e._id + '-absend" class="' + e.classPrefix + 'abs-end"></div>' + this._super(e)
            }
        })
    }), r(yt, [Pe], function(e) {
        return e.extend({
            Defaults: {
                classes: "widget btn",
                role: "button"
            },
            init: function(e) {
                var t = this,
                    n;
                t._super(e), e = t.settings, n = t.settings.size, t.on("click mousedown", function(e) {
                    e.preventDefault()
                }), t.on("touchstart", function(e) {
                    t.fire("click", e), e.preventDefault()
                }), e.subtype && t.classes.add(e.subtype), n && t.classes.add("btn-" + n), e.icon && t.icon(e.icon)
            },
            icon: function(e) {
                return arguments.length ? (this.state.set("icon", e), this) : this.state.get("icon")
            },
            repaint: function() {
                var e = this.getEl().firstChild,
                    t;
                e && (t = e.style, t.width = t.height = "100%"), this._super()
            },
            renderHtml: function() {
                var e = this,
                    t = e._id,
                    n = e.classPrefix,
                    r = e.state.get("icon"),
                    i, o = e.state.get("text"),
                    a = "";
                return i = e.settings.image, i ? (r = "none", "string" != typeof i && (i = window.getSelection ? i[0] : i[1]), i = " style=\"background-image: url('" + i + "')\"") : i = "", o && (e.classes.add("btn-has-text"), a = '<span class="' + n + 'txt">' + e.encode(o) + "</span>"), r = r ? n + "ico " + n + "i-" + r : "", '<div id="' + t + '" class="' + e.classes + '" tabindex="-1" aria-labelledby="' + t + '"><button role="presentation" type="button" tabindex="-1">' + (r ? '<i class="' + r + '"' + i + "></i>" : "") + a + "</button></div>"
            },
            bindStates: function() {
                function e(e) {
                    var i = n("span." + r, t.getEl());
                    e ? (i[0] || (n("button:first", t.getEl()).append('<span class="' + r + '"></span>'), i = n("span." + r, t.getEl())), i.html(t.encode(e))) : i.remove(), t.classes.toggle("btn-has-text", !!e)
                }
                var t = this,
                    n = t.$,
                    r = t.classPrefix + "txt";
                return t.state.on("change:text", function(t) {
                    e(t.value)
                }), t.state.on("change:icon", function(n) {
                    var r = n.value,
                        i = t.classPrefix;
                    t.settings.icon = r, r = r ? i + "ico " + i + "i-" + t.settings.icon : "";
                    var o = t.getEl().firstChild,
                        a = o.getElementsByTagName("i")[0];
                    r ? (a && a == o.firstChild || (a = document.createElement("i"), o.insertBefore(a, o.firstChild)), a.className = r) : a && o.removeChild(a), e(t.state.get("text"))
                }), t._super()
            }
        })
    }), r(bt, [Ne], function(e) {
        return e.extend({
            Defaults: {
                defaultType: "button",
                role: "group"
            },
            renderHtml: function() {
                var e = this,
                    t = e._layout;
                return e.classes.add("btn-group"), e.preRender(), t.preRender(e), '<div id="' + e._id + '" class="' + e.classes + '"><div id="' + e._id + '-body">' + (e.settings.html || "") + t.renderHtml(e) + "</div></div>"
            }
        })
    }), r(Ct, [Pe], function(e) {
        return e.extend({
            Defaults: {
                classes: "checkbox",
                role: "checkbox",
                checked: !1
            },
            init: function(e) {
                var t = this;
                t._super(e), t.on("click mousedown", function(e) {
                    e.preventDefault()
                }), t.on("click", function(e) {
                    e.preventDefault(), t.disabled() || t.checked(!t.checked())
                }), t.checked(t.settings.checked)
            },
            checked: function(e) {
                return arguments.length ? (this.state.set("checked", e), this) : this.state.get("checked")
            },
            value: function(e) {
                return arguments.length ? this.checked(e) : this.checked()
            },
            renderHtml: function() {
                var e = this,
                    t = e._id,
                    n = e.classPrefix;
                return '<div id="' + t + '" class="' + e.classes + '" unselectable="on" aria-labelledby="' + t + '-al" tabindex="-1"><i class="' + n + "ico " + n + 'i-checkbox"></i><span id="' + t + '-al" class="' + n + 'label">' + e.encode(e.state.get("text")) + "</span></div>"
            },
            bindStates: function() {
                function e(e) {
                    t.classes.toggle("checked", e), t.aria("checked", e)
                }
                var t = this;
                return t.state.on("change:text", function(e) {
                    t.getEl("al").firstChild.data = t.translate(e.value)
                }), t.state.on("change:checked change:value", function(n) {
                    t.fire("change"), e(n.value)
                }), t.state.on("change:icon", function(e) {
                    var n = e.value,
                        r = t.classPrefix;
                    if ("undefined" == typeof n) return t.settings.icon;
                    t.settings.icon = n, n = n ? r + "ico " + r + "i-" + t.settings.icon : "";
                    var i = t.getEl().firstChild,
                        o = i.getElementsByTagName("i")[0];
                    n ? (o && o == i.firstChild || (o = document.createElement("i"), i.insertBefore(o, i.firstChild)), o.className = n) : o && i.removeChild(o)
                }), t.state.get("checked") && e(!0), t._super()
            }
        })
    }), r(xt, [Pe, we, ve, g, I, m], function(e, t, n, r, i, o) {
        return e.extend({
            init: function(e) {
                var t = this;
                t._super(e), e = t.settings, t.classes.add("combobox"), t.subinput = !0, t.ariaTarget = "inp", e.menu = e.menu || e.values, e.menu && (e.icon = "caret"), t.on("click", function(n) {
                    var i = n.target,
                        o = t.getEl();
                    if (r.contains(o, i) || i == o)
                        for (; i && i != o;) i.id && i.id.indexOf("-open") != -1 && (t.fire("action"), e.menu && (t.showMenu(), n.aria && t.menu.items()[0].focus())), i = i.parentNode
                }), t.on("keydown", function(e) {
                    var n;
                    13 == e.keyCode && "INPUT" === e.target.nodeName && (e.preventDefault(), t.parents().reverse().each(function(e) {
                        if (e.toJSON) return n = e, !1
                    }), t.fire("submit", {
                        data: n.toJSON()
                    }))
                }), t.on("keyup", function(e) {
                    if ("INPUT" == e.target.nodeName) {
                        var n = t.state.get("value"),
                            r = e.target.value;
                        r !== n && (t.state.set("value", r), t.fire("autocomplete", e))
                    }
                }), t.on("mouseover", function(e) {
                    var n = t.tooltip().moveTo(-65535);
                    if (t.statusLevel() && e.target.className.indexOf(t.classPrefix + "status") !== -1) {
                        var r = t.statusMessage() || "Ok",
                            i = n.text(r).show().testMoveRel(e.target, ["bc-tc", "bc-tl", "bc-tr"]);
                        n.classes.toggle("tooltip-n", "bc-tc" == i), n.classes.toggle("tooltip-nw", "bc-tl" == i), n.classes.toggle("tooltip-ne", "bc-tr" == i), n.moveRel(e.target, i)
                    }
                })
            },
            statusLevel: function(e) {
                return arguments.length > 0 && this.state.set("statusLevel", e), this.state.get("statusLevel")
            },
            statusMessage: function(e) {
                return arguments.length > 0 && this.state.set("statusMessage", e), this.state.get("statusMessage")
            },
            showMenu: function() {
                var e = this,
                    n = e.settings,
                    r;
                e.menu || (r = n.menu || [], r.length ? r = {
                    type: "menu",
                    items: r
                } : r.type = r.type || "menu", e.menu = t.create(r).parent(e).renderTo(e.getContainerElm()), e.fire("createmenu"), e.menu.reflow(), e.menu.on("cancel", function(t) {
                    t.control === e.menu && e.focus()
                }), e.menu.on("show hide", function(t) {
                    t.control.items().each(function(t) {
                        t.active(t.value() == e.value())
                    })
                }).fire("show"), e.menu.on("select", function(t) {
                    e.value(t.control.value())
                }), e.on("focusin", function(t) {
                    "INPUT" == t.target.tagName.toUpperCase() && e.menu.hide()
                }), e.aria("expanded", !0)), e.menu.show(), e.menu.layoutRect({
                    w: e.layoutRect().w
                }), e.menu.moveRel(e.getEl(), e.isRtl() ? ["br-tr", "tr-br"] : ["bl-tl", "tl-bl"])
            },
            focus: function() {
                this.getEl("inp").focus()
            },
            repaint: function() {
                var e = this,
                    t = e.getEl(),
                    i = e.getEl("open"),
                    o = e.layoutRect(),
                    a, s, l = 0,
                    c = t.firstChild;
                e.statusLevel() && "none" !== e.statusLevel() && (l = parseInt(n.getRuntimeStyle(c, "padding-right"), 10) - parseInt(n.getRuntimeStyle(c, "padding-left"), 10)), a = i ? o.w - n.getSize(i).width - 10 : o.w - 10;
                var u = document;
                return u.all && (!u.documentMode || u.documentMode <= 8) && (s = e.layoutRect().h - 2 + "px"), r(c).css({
                    width: a - l,
                    lineHeight: s
                }), e._super(), e
            },
            postRender: function() {
                var e = this;
                return r(this.getEl("inp")).on("change", function(t) {
                    e.state.set("value", t.target.value), e.fire("change", t)
                }), e._super()
            },
            renderHtml: function() {
                var e = this,
                    t = e._id,
                    n = e.settings,
                    r = e.classPrefix,
                    i = e.state.get("value") || "",
                    o, a, s = "",
                    l = "",
                    c = "";
                return "spellcheck" in n && (l += ' spellcheck="' + n.spellcheck + '"'), n.maxLength && (l += ' maxlength="' + n.maxLength + '"'), n.size && (l += ' size="' + n.size + '"'), n.subtype && (l += ' type="' + n.subtype + '"'), c = '<i id="' + t + '-status" class="mce-status mce-ico" style="display: none"></i>', e.disabled() && (l += ' disabled="disabled"'), o = n.icon, o && "caret" != o && (o = r + "ico " + r + "i-" + n.icon), a = e.state.get("text"), (o || a) && (s = '<div id="' + t + '-open" class="' + r + "btn " + r + 'open" tabIndex="-1" role="button"><button id="' + t + '-action" type="button" hidefocus="1" tabindex="-1">' + ("caret" != o ? '<i class="' + o + '"></i>' : '<i class="' + r + 'caret"></i>') + (a ? (o ? " " : "") + a : "") + "</button></div>", e.classes.add("has-open")), '<div id="' + t + '" class="' + e.classes + '"><input id="' + t + '-inp" class="' + r + 'textbox" value="' + e.encode(i, !1) + '" hidefocus="1"' + l + ' placeholder="' + e.encode(n.placeholder) + '" />' + c + s + "</div>"
            },
            value: function(e) {
                return arguments.length ? (this.state.set("value", e), this) : (this.state.get("rendered") && this.state.set("value", this.getEl("inp").value), this.state.get("value"))
            },
            showAutoComplete: function(e, n) {
                var r = this;
                if (0 === e.length) return void r.hideMenu();
                var i = function(e, t) {
                    return function() {
                        r.fire("selectitem", {
                            title: t,
                            value: e
                        })
                    }
                };
                r.menu ? r.menu.items().remove() : r.menu = t.create({
                    type: "menu",
                    classes: "combobox-menu",
                    layout: "flow"
                }).parent(r).renderTo(), o.each(e, function(e) {
                    r.menu.add({
                        text: e.title,
                        url: e.previewUrl,
                        match: n,
                        classes: "menu-item-ellipsis",
                        onclick: i(e.value, e.title)
                    })
                }), r.menu.renderNew(), r.hideMenu(), r.menu.on("cancel", function(e) {
                    e.control.parent() === r.menu && (e.stopPropagation(), r.focus(), r.hideMenu())
                }), r.menu.on("select", function() {
                    r.focus()
                });
                var a = r.layoutRect().w;
                r.menu.layoutRect({
                    w: a,
                    minW: 0,
                    maxW: a
                }), r.menu.reflow(), r.menu.show(), r.menu.moveRel(r.getEl(), r.isRtl() ? ["br-tr", "tr-br"] : ["bl-tl", "tl-bl"])
            },
            hideMenu: function() {
                this.menu && this.menu.hide()
            },
            bindStates: function() {
                var e = this;
                e.state.on("change:value", function(t) {
                    e.getEl("inp").value != t.value && (e.getEl("inp").value = t.value)
                }), e.state.on("change:disabled", function(t) {
                    e.getEl("inp").disabled = t.value
                }), e.state.on("change:statusLevel", function(t) {
                    var r = e.getEl("status"),
                        i = e.classPrefix,
                        o = t.value;
                    n.css(r, "display", "none" === o ? "none" : ""), n.toggleClass(r, i + "i-checkmark", "ok" === o), n.toggleClass(r, i + "i-warning", "warn" === o), n.toggleClass(r, i + "i-error", "error" === o), e.classes.toggle("has-status", "none" !== o), e.repaint()
                }), n.on(e.getEl("status"), "mouseleave", function() {
                    e.tooltip().hide()
                }), e.on("cancel", function(t) {
                    e.menu && e.menu.visible() && (t.stopPropagation(), e.hideMenu())
                });
                var t = function(e, t) {
                    t && t.items().length > 0 && t.items().eq(e)[0].focus()
                };
                return e.on("keydown", function(n) {
                    var r = n.keyCode;
                    "INPUT" === n.target.nodeName && (r === i.DOWN ? (n.preventDefault(), e.fire("autocomplete"), t(0, e.menu)) : r === i.UP && (n.preventDefault(), t(-1, e.menu)))
                }), e._super()
            },
            remove: function() {
                r(this.getEl("inp")).off(), this.menu && this.menu.remove(), this._super()
            }
        })
    }), r(wt, [xt], function(e) {
        return e.extend({
            init: function(e) {
                var t = this;
                e.spellcheck = !1, e.onaction && (e.icon = "none"), t._super(e), t.classes.add("colorbox"), t.on("change keyup postrender", function() {
                    t.repaintColor(t.value())
                })
            },
            repaintColor: function(e) {
                var t = this.getEl("open"),
                    n = t ? t.getElementsByTagName("i")[0] : null;
                if (n) try {
                    n.style.background = e
                } catch (r) {}
            },
            bindStates: function() {
                var e = this;
                return e.state.on("change:value", function(t) {
                    e.state.get("rendered") && e.repaintColor(t.value)
                }), e._super()
            }
        })
    }), r(Et, [yt, Ae], function(e, t) {
        return e.extend({
            showPanel: function() {
                var e = this,
                    n = e.settings;
                if (e.active(!0), e.panel) e.panel.show();
                else {
                    var r = n.panel;
                    r.type && (r = {
                        layout: "grid",
                        items: r
                    }), r.role = r.role || "dialog", r.popover = !0, r.autohide = !0, r.ariaRoot = !0, e.panel = new t(r).on("hide", function() {
                        e.active(!1)
                    }).on("cancel", function(t) {
                        t.stopPropagation(), e.focus(), e.hidePanel()
                    }).parent(e).renderTo(e.getContainerElm()), e.panel.fire("show"), e.panel.reflow()
                }
                e.panel.moveRel(e.getEl(), n.popoverAlign || (e.isRtl() ? ["bc-tr", "bc-tc"] : ["bc-tl", "bc-tc"]))
            },
            hidePanel: function() {
                var e = this;
                e.panel && e.panel.hide()
            },
            postRender: function() {
                var e = this;
                return e.aria("haspopup", !0), e.on("click", function(t) {
                    t.control === e && (e.panel && e.panel.visible() ? e.hidePanel() : (e.showPanel(), e.panel.focus(!!t.aria)))
                }), e._super()
            },
            remove: function() {
                return this.panel && (this.panel.remove(), this.panel = null), this._super()
            }
        })
    }), r(Nt, [Et, w], function(e, t) {
        var n = t.DOM;
        return e.extend({
            init: function(e) {
                this._super(e), this.classes.add("colorbutton")
            },
            color: function(e) {
                return e ? (this._color = e, this.getEl("preview").style.backgroundColor = e, this) : this._color
            },
            resetColor: function() {
                return this._color = null, this.getEl("preview").style.backgroundColor = null, this
            },
            renderHtml: function() {
                var e = this,
                    t = e._id,
                    n = e.classPrefix,
                    r = e.state.get("text"),
                    i = e.settings.icon ? n + "ico " + n + "i-" + e.settings.icon : "",
                    o = e.settings.image ? " style=\"background-image: url('" + e.settings.image + "')\"" : "",
                    a = "";
                return r && (e.classes.add("btn-has-text"), a = '<span class="' + n + 'txt">' + e.encode(r) + "</span>"), '<div id="' + t + '" class="' + e.classes + '" role="button" tabindex="-1" aria-haspopup="true"><button role="presentation" hidefocus="1" type="button" tabindex="-1">' + (i ? '<i class="' + i + '"' + o + "></i>" : "") + '<span id="' + t + '-preview" class="' + n + 'preview"></span>' + a + '</button><button type="button" class="' + n + 'open" hidefocus="1" tabindex="-1"> <i class="' + n + 'caret"></i></button></div>'
            },
            postRender: function() {
                var e = this,
                    t = e.settings.onclick;
                return e.on("click", function(r) {
                    r.aria && "down" == r.aria.key || r.control != e || n.getParent(r.target, "." + e.classPrefix + "open") || (r.stopImmediatePropagation(), t.call(e, r))
                }), delete e.settings.onclick, e._super()
            }
        })
    }), r(_t, [], function() {
        function e(e) {
            function i(e, i, o) {
                var a, s, l, c, u, d;
                return a = 0, s = 0, l = 0, e /= 255, i /= 255, o /= 255, u = t(e, t(i, o)), d = n(e, n(i, o)), u == d ? (l = u, {
                    h: 0,
                    s: 0,
                    v: 100 * l
                }) : (c = e == u ? i - o : o == u ? e - i : o - e, a = e == u ? 3 : o == u ? 1 : 5, a = 60 * (a - c / (d - u)), s = (d - u) / d, l = d, {
                    h: r(a),
                    s: r(100 * s),
                    v: r(100 * l)
                })
            }

            function o(e, i, o) {
                var a, s, l, c;
                if (e = (parseInt(e, 10) || 0) % 360, i = parseInt(i, 10) / 100, o = parseInt(o, 10) / 100, i = n(0, t(i, 1)), o = n(0, t(o, 1)), 0 === i) return void(d = f = h = r(255 * o));
                switch (a = e / 60, s = o * i, l = s * (1 - Math.abs(a % 2 - 1)), c = o - s, Math.floor(a)) {
                    case 0:
                        d = s, f = l, h = 0;
                        break;
                    case 1:
                        d = l, f = s, h = 0;
                        break;
                    case 2:
                        d = 0, f = s, h = l;
                        break;
                    case 3:
                        d = 0, f = l, h = s;
                        break;
                    case 4:
                        d = l, f = 0, h = s;
                        break;
                    case 5:
                        d = s, f = 0, h = l;
                        break;
                    default:
                        d = f = h = 0
                }
                d = r(255 * (d + c)), f = r(255 * (f + c)), h = r(255 * (h + c))
            }

            function a() {
                function e(e) {
                    return e = parseInt(e, 10).toString(16), e.length > 1 ? e : "0" + e
                }
                return "#" + e(d) + e(f) + e(h)
            }

            function s() {
                return {
                    r: d,
                    g: f,
                    b: h
                }
            }

            function l() {
                return i(d, f, h)
            }

            function c(e) {
                var t;
                return "object" == typeof e ? "r" in e ? (d = e.r, f = e.g, h = e.b) : "v" in e && o(e.h, e.s, e.v) : (t = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e)) ? (d = parseInt(t[1], 10), f = parseInt(t[2], 10), h = parseInt(t[3], 10)) : (t = /#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e)) ? (d = parseInt(t[1], 16), f = parseInt(t[2], 16), h = parseInt(t[3], 16)) : (t = /#([0-F])([0-F])([0-F])/gi.exec(e)) && (d = parseInt(t[1] + t[1], 16), f = parseInt(t[2] + t[2], 16), h = parseInt(t[3] + t[3], 16)), d = d < 0 ? 0 : d > 255 ? 255 : d, f = f < 0 ? 0 : f > 255 ? 255 : f, h = h < 0 ? 0 : h > 255 ? 255 : h, u
            }
            var u = this,
                d = 0,
                f = 0,
                h = 0;
            e && c(e), u.toRgb = s, u.toHsv = l, u.toHex = a, u.parse = c
        }
        var t = Math.min,
            n = Math.max,
            r = Math.round;
        return e
    }), r(St, [Pe, _e, ve, _t], function(e, t, n, r) {
        return e.extend({
            Defaults: {
                classes: "widget colorpicker"
            },
            init: function(e) {
                this._super(e)
            },
            postRender: function() {
                function e(e, t) {
                    var r = n.getPos(e),
                        i, o;
                    return i = t.pageX - r.x, o = t.pageY - r.y, i = Math.max(0, Math.min(i / e.clientWidth, 1)), o = Math.max(0, Math.min(o / e.clientHeight, 1)), {
                        x: i,
                        y: o
                    }
                }

                function i(e, t) {
                    var i = (360 - e.h) / 360;
                    n.css(d, {
                        top: 100 * i + "%"
                    }), t || n.css(h, {
                        left: e.s + "%",
                        top: 100 - e.v + "%"
                    }), f.style.background = new r({
                        s: 100,
                        v: 100,
                        h: e.h
                    }).toHex(), s.color().parse({
                        s: e.s,
                        v: e.v,
                        h: e.h
                    })
                }

                function o(t) {
                    var n;
                    n = e(f, t), c.s = 100 * n.x, c.v = 100 * (1 - n.y), i(c), s.fire("change")
                }

                function a(t) {
                    var n;
                    n = e(u, t), c = l.toHsv(), c.h = 360 * (1 - n.y), i(c, !0), s.fire("change")
                }
                var s = this,
                    l = s.color(),
                    c, u, d, f, h;
                u = s.getEl("h"), d = s.getEl("hp"), f = s.getEl("sv"), h = s.getEl("svp"), s._repaint = function() {
                    c = l.toHsv(), i(c)
                }, s._super(), s._svdraghelper = new t(s._id + "-sv", {
                    start: o,
                    drag: o
                }), s._hdraghelper = new t(s._id + "-h", {
                    start: a,
                    drag: a
                }), s._repaint()
            },
            rgb: function() {
                return this.color().toRgb()
            },
            value: function(e) {
                var t = this;
                return arguments.length ? (t.color().parse(e), void(t._rendered && t._repaint())) : t.color().toHex()
            },
            color: function() {
                return this._color || (this._color = new r), this._color
            },
            renderHtml: function() {
                function e() {
                    var e, t, n = "",
                        i, a;
                    for (i = "filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=", a = o.split(","), e = 0, t = a.length - 1; e < t; e++) n += '<div class="' + r + 'colorpicker-h-chunk" style="height:' + 100 / t + "%;" + i + a[e] + ",endColorstr=" + a[e + 1] + ");-ms-" + i + a[e] + ",endColorstr=" + a[e + 1] + ')"></div>';
                    return n
                }
                var t = this,
                    n = t._id,
                    r = t.classPrefix,
                    i, o = "#ff0000,#ff0080,#ff00ff,#8000ff,#0000ff,#0080ff,#00ffff,#00ff80,#00ff00,#80ff00,#ffff00,#ff8000,#ff0000",
                    a = "background: -ms-linear-gradient(top," + o + ");background: linear-gradient(to bottom," + o + ");";
                return i = '<div id="' + n + '-h" class="' + r + 'colorpicker-h" style="' + a + '">' + e() + '<div id="' + n + '-hp" class="' + r + 'colorpicker-h-marker"></div></div>', '<div id="' + n + '" class="' + t.classes + '"><div id="' + n + '-sv" class="' + r + 'colorpicker-sv"><div class="' + r + 'colorpicker-overlay1"><div class="' + r + 'colorpicker-overlay2"><div id="' + n + '-svp" class="' + r + 'colorpicker-selector1"><div class="' + r + 'colorpicker-selector2"></div></div></div></div></div>' + i + "</div>"
            }
        })
    }), r(kt, [Pe], function(e) {
        return e.extend({
            init: function(e) {
                var t = this;
                e.delimiter || (e.delimiter = "\xbb"), t._super(e), t.classes.add("path"), t.canFocus = !0, t.on("click", function(e) {
                    var n, r = e.target;
                    (n = r.getAttribute("data-index")) && t.fire("select", {
                        value: t.row()[n],
                        index: n
                    })
                }), t.row(t.settings.row)
            },
            focus: function() {
                var e = this;
                return e.getEl().firstChild.focus(), e
            },
            row: function(e) {
                return arguments.length ? (this.state.set("row", e), this) : this.state.get("row")
            },
            renderHtml: function() {
                var e = this;
                return '<div id="' + e._id + '" class="' + e.classes + '">' + e._getDataPathHtml(e.state.get("row")) + "</div>"
            },
            bindStates: function() {
                var e = this;
                return e.state.on("change:row", function(t) {
                    e.innerHtml(e._getDataPathHtml(t.value))
                }), e._super()
            },
            _getDataPathHtml: function(e) {
                var t = this,
                    n = e || [],
                    r, i, o = "",
                    a = t.classPrefix;
                for (r = 0, i = n.length; r < i; r++) o += (r > 0 ? '<div class="' + a + 'divider" aria-hidden="true"> ' + t.settings.delimiter + " </div>" : "") + '<div role="button" class="' + a + "path-item" + (r == i - 1 ? " " + a + "last" : "") + '" data-index="' + r + '" tabindex="-1" id="' + t._id + "-" + r + '" aria-level="' + (r + 1) + '">' + n[r].name + "</div>";
                return o || (o = '<div class="' + a + 'path-item">\xa0</div>'), o
            }
        })
    }), r(Tt, [kt], function(e) {
        return e.extend({
            postRender: function() {
                function e(e) {
                    if (1 === e.nodeType) {
                        if ("BR" == e.nodeName || e.getAttribute("data-mce-bogus")) return !0;
                        if ("bookmark" === e.getAttribute("data-mce-type")) return !0
                    }
                    return !1
                }
                var t = this,
                    n = t.settings.editor;
                return n.settings.elementpath !== !1 && (t.on("select", function(e) {
                    n.focus(), n.selection.select(this.row()[e.index].element), n.nodeChanged()
                }), n.on("nodeChange", function(r) {
                    for (var i = [], o = r.parents, a = o.length; a--;)
                        if (1 == o[a].nodeType && !e(o[a])) {
                            var s = n.fire("ResolveName", {
                                name: o[a].nodeName.toLowerCase(),
                                target: o[a]
                            });
                            if (s.isDefaultPrevented() || i.push({
                                    name: s.name,
                                    element: o[a]
                                }), s.isPropagationStopped()) break
                        }
                    t.row(i)
                })), t._super()
            }
        })
    }), r(Rt, [Ne], function(e) {
        return e.extend({
            Defaults: {
                layout: "flex",
                align: "center",
                defaults: {
                    flex: 1
                }
            },
            renderHtml: function() {
                var e = this,
                    t = e._layout,
                    n = e.classPrefix;
                return e.classes.add("formitem"), t.preRender(e), '<div id="' + e._id + '" class="' + e.classes + '" hidefocus="1" tabindex="-1">' + (e.settings.title ? '<div id="' + e._id + '-title" class="' + n + 'title">' + e.settings.title + "</div>" : "") + '<div id="' + e._id + '-body" class="' + e.bodyClasses + '">' + (e.settings.html || "") + t.renderHtml(e) + "</div></div>"
            }
        })
    }), r(At, [Ne, Rt, m], function(e, t, n) {
        return e.extend({
            Defaults: {
                containerCls: "form",
                layout: "flex",
                direction: "column",
                align: "stretch",
                flex: 1,
                padding: 20,
                labelGap: 30,
                spacing: 10,
                callbacks: {
                    submit: function() {
                        this.submit()
                    }
                }
            },
            preRender: function() {
                var e = this,
                    r = e.items();
                e.settings.formItemDefaults || (e.settings.formItemDefaults = {
                    layout: "flex",
                    autoResize: "overflow",
                    defaults: {
                        flex: 1
                    }
                }), r.each(function(r) {
                    var i, o = r.settings.label;
                    o && (i = new t(n.extend({
                        items: {
                            type: "label",
                            id: r._id + "-l",
                            text: o,
                            flex: 0,
                            forId: r._id,
                            disabled: r.disabled()
                        }
                    }, e.settings.formItemDefaults)), i.type = "formitem", r.aria("labelledby", r._id + "-l"), "undefined" == typeof r.settings.flex && (r.settings.flex = 1), e.replace(r, i), i.add(r))
                })
            },
            submit: function() {
                return this.fire("submit", {
                    data: this.toJSON()
                })
            },
            postRender: function() {
                var e = this;
                e._super(), e.fromJSON(e.settings.data)
            },
            bindStates: function() {
                function e() {
                    var e = 0,
                        n = [],
                        r, i, o;
                    if (t.settings.labelGapCalc !== !1)
                        for (o = "children" == t.settings.labelGapCalc ? t.find("formitem") : t.items(), o.filter("formitem").each(function(t) {
                                var r = t.items()[0],
                                    i = r.getEl().clientWidth;
                                e = i > e ? i : e, n.push(r)
                            }), i = t.settings.labelGap || 0, r = n.length; r--;) n[r].settings.minWidth = e + i
                }
                var t = this;
                t._super(), t.on("show", e), e()
            }
        })
    }), r(Bt, [At], function(e) {
        return e.extend({
            Defaults: {
                containerCls: "fieldset",
                layout: "flex",
                direction: "column",
                align: "stretch",
                flex: 1,
                padding: "25 15 5 15",
                labelGap: 30,
                spacing: 10,
                border: 1
            },
            renderHtml: function() {
                var e = this,
                    t = e._layout,
                    n = e.classPrefix;
                return e.preRender(), t.preRender(e), '<fieldset id="' + e._id + '" class="' + e.classes + '" hidefocus="1" tabindex="-1">' + (e.settings.title ? '<legend id="' + e._id + '-title" class="' + n + 'fieldset-title">' + e.settings.title + "</legend>" : "") + '<div id="' + e._id + '-body" class="' + e.bodyClasses + '">' + (e.settings.html || "") + t.renderHtml(e) + "</div></fieldset>"
            }
        })
    }), r(Dt, [w, z, p, rt, m, _], function(e, t, n, r, i, o) {
        var a = i.trim,
            s = function(e, t, n, r, i) {
                return {
                    type: e,
                    title: t,
                    url: n,
                    level: r,
                    attach: i
                }
            },
            l = function(e) {
                for (; e = e.parentNode;) {
                    var t = e.contentEditable;
                    if (t && "inherit" !== t) return o.isContentEditableTrue(e)
                }
                return !1
            },
            c = function(t, n) {
                return e.DOM.select(t, n)
            },
            u = function(e) {
                return e.innerText || e.textContent
            },
            d = function(e) {
                return e.id ? e.id : r.uuid("h")
            },
            f = function(e) {
                return e && "A" === e.nodeName && (e.id || e.name)
            },
            h = function(e) {
                return f(e) && m(e)
            },
            p = function(e) {
                return e && /^(H[1-6])$/.test(e.nodeName)
            },
            m = function(e) {
                return l(e) && !o.isContentEditableFalse(e)
            },
            g = function(e) {
                return p(e) && m(e)
            },
            v = function(e) {
                return p(e) ? parseInt(e.nodeName.substr(1), 10) : 0
            },
            y = function(e) {
                var t = d(e),
                    n = function() {
                        e.id = t
                    };
                return s("header", u(e), "#" + t, v(e), n)
            },
            b = function(e) {
                var n = e.id || e.name,
                    r = u(e);
                return s("anchor", r ? r : "#" + n, "#" + n, 0, t.noop)
            },
            C = function(e) {
                return n.map(n.filter(e, g), y)
            },
            x = function(e) {
                return n.map(n.filter(e, h), b)
            },
            w = function(e) {
                var t = c("h1,h2,h3,h4,h5,h6,a:not([href])", e);
                return t
            },
            E = function(e) {
                return a(e.title).length > 0
            },
            N = function(e) {
                var t = w(e);
                return n.filter(C(t).concat(x(t)), E)
            };
        return {
            find: N
        }
    }), r(Lt, [xt, m, p, z, I, Dt], function(e, t, n, r, i, o) {
        var a = {},
            s = 5,
            l = function(e) {
                return {
                    title: e.title,
                    value: {
                        title: {
                            raw: e.title
                        },
                        url: e.url,
                        attach: e.attach
                    }
                }
            },
            c = function(e) {
                return t.map(e, l)
            },
            u = function(e, t) {
                return {
                    title: e,
                    value: {
                        title: e,
                        url: t,
                        attach: r.noop
                    }
                }
            },
            d = function(e, t) {
                var r = n.find(t, function(t) {
                    return t.url === e
                });
                return !r
            },
            f = function(e, t, n) {
                var r = t in e ? e[t] : n;
                return r === !1 ? null : r
            },
            h = function(e, i, o, s) {
                var l = {
                        title: "-"
                    },
                    h = function(e) {
                        var a = n.filter(e[o], function(e) {
                            return d(e, i)
                        });
                        return t.map(a, function(e) {
                            return {
                                title: e,
                                value: {
                                    title: e,
                                    url: e,
                                    attach: r.noop
                                }
                            }
                        })
                    },
                    p = function(e) {
                        var t = n.filter(i, function(t) {
                            return t.type == e
                        });
                        return c(t)
                    },
                    g = function() {
                        var e = p("anchor"),
                            t = f(s, "anchor_top", "#top"),
                            n = f(s, "anchor_bottom", "#bottom");
                        return null !== t && e.unshift(u("<top>", t)), null !== n && e.push(u("<bottom>", n)), e
                    },
                    v = function(e) {
                        return n.reduce(e, function(e, t) {
                            var n = 0 === e.length || 0 === t.length;
                            return n ? e.concat(t) : e.concat(l, t)
                        }, [])
                    };
                return s.typeahead_urls === !1 ? [] : "file" === o ? v([m(e, h(a)), m(e, p("header")), m(e, g())]) : m(e, h(a))
            },
            p = function(e, t) {
                var r = a[t];
                /^https?/.test(e) && (r ? n.indexOf(r, e) === -1 && (a[t] = r.slice(0, s).concat(e)) : a[t] = [e])
            },
            m = function(e, n) {
                var r = e.toLowerCase(),
                    i = t.grep(n, function(e) {
                        return e.title.toLowerCase().indexOf(r) !== -1
                    });
                return 1 === i.length && i[0].title === e ? [] : i
            },
            g = function(e) {
                var t = e.title;
                return t.raw ? t.raw : t
            },
            v = function(e, t, n, r) {
                var i = function(i) {
                    var a = o.find(n),
                        s = h(i, a, r, t);
                    e.showAutoComplete(s, i)
                };
                e.on("autocomplete", function() {
                    i(e.value())
                }), e.on("selectitem", function(t) {
                    var n = t.value;
                    e.value(n.url);
                    var i = g(n);
                    "image" === r ? e.fire("change", {
                        meta: {
                            alt: i,
                            attach: n.attach
                        }
                    }) : e.fire("change", {
                        meta: {
                            text: i,
                            attach: n.attach
                        }
                    }), e.focus()
                }), e.on("click", function(t) {
                    0 === e.value().length && "INPUT" === t.target.nodeName && i("")
                }), e.on("PostRender", function() {
                    e.getRoot().on("submit", function(t) {
                        t.isDefaultPrevented() || p(e.value(), r)
                    })
                })
            },
            y = function(e) {
                var t = e.status,
                    n = e.message;
                return "valid" === t ? {
                    status: "ok",
                    message: n
                } : "unknown" === t ? {
                    status: "warn",
                    message: n
                } : "invalid" === t ? {
                    status: "warn",
                    message: n
                } : {
                    status: "none",
                    message: ""
                }
            },
            b = function(e, t, n) {
                var r = t.filepicker_validator_handler;
                if (r) {
                    var i = function(t) {
                        return 0 === t.length ? void e.statusLevel("none") : void r({
                            url: t,
                            type: n
                        }, function(t) {
                            var n = y(t);
                            e.statusMessage(n.message), e.statusLevel(n.status)
                        })
                    };
                    e.state.on("change:value", function(e) {
                        i(e.value)
                    })
                }
            };
        return e.extend({
            init: function(e) {
                var n = this,
                    r = tinymce.activeEditor,
                    i = r.settings,
                    o, a, s, l = e.filetype;
                e.spellcheck = !1, s = i.file_picker_types || i.file_browser_callback_types, s && (s = t.makeMap(s, /[, ]/)), s && !s[l] || (a = i.file_picker_callback, !a || s && !s[l] ? (a = i.file_browser_callback, !a || s && !s[l] || (o = function() {
                    a(n.getEl("inp").id, n.value(), l, window)
                })) : o = function() {
                    var e = n.fire("beforecall").meta;
                    e = t.extend({
                        filetype: l
                    }, e), a.call(r, function(e, t) {
                        n.value(e).fire("change", {
                            meta: t
                        })
                    }, n.value(), e)
                }), o && (e.icon = "browse", e.onaction = o), n._super(e), v(n, i, r.getBody(), l), b(n, i, l)
            }
        })
    }), r(Mt, [vt], function(e) {
        return e.extend({
            recalc: function(e) {
                var t = e.layoutRect(),
                    n = e.paddingBox;
                e.items().filter(":visible").each(function(e) {
                    e.layoutRect({
                        x: n.left,
                        y: n.top,
                        w: t.innerW - n.right - n.left,
                        h: t.innerH - n.top - n.bottom
                    }), e.recalc && e.recalc()
                })
            }
        })
    }), r(Pt, [vt], function(e) {
        return e.extend({
            recalc: function(e) {
                var t, n, r, i, o, a, s, l, c, u, d, f, h, p, m, g, v = [],
                    y, b, C, x, w, E, N, _, S, k, T, R, A, B, D, L, M, P, O, H, I, F, z = Math.max,
                    U = Math.min;
                for (r = e.items().filter(":visible"), i = e.layoutRect(), o = e.paddingBox, a = e.settings, f = e.isRtl() ? a.direction || "row-reversed" : a.direction, s = a.align, l = e.isRtl() ? a.pack || "end" : a.pack, c = a.spacing || 0, "row-reversed" != f && "column-reverse" != f || (r = r.set(r.toArray().reverse()), f = f.split("-")[0]), "column" == f ? (S = "y", N = "h", _ = "minH", k = "maxH", R = "innerH", T = "top", A = "deltaH", B = "contentH", O = "left", M = "w", D = "x", L = "innerW", P = "minW", H = "right", I = "deltaW", F = "contentW") : (S = "x", N = "w", _ = "minW", k = "maxW", R = "innerW", T = "left", A = "deltaW", B = "contentW", O = "top", M = "h", D = "y", L = "innerH", P = "minH", H = "bottom", I = "deltaH", F = "contentH"), d = i[R] - o[T] - o[T], E = u = 0, t = 0, n = r.length; t < n; t++) h = r[t], p = h.layoutRect(), m = h.settings, g = m.flex, d -= t < n - 1 ? c : 0, g > 0 && (u += g, p[k] && v.push(h), p.flex = g), d -= p[_], y = o[O] + p[P] + o[H], y > E && (E = y);
                if (x = {}, d < 0 ? x[_] = i[_] - d + i[A] : x[_] = i[R] - d + i[A], x[P] = E + i[I], x[B] = i[R] - d, x[F] = E, x.minW = U(x.minW, i.maxW), x.minH = U(x.minH, i.maxH), x.minW = z(x.minW, i.startMinWidth), x.minH = z(x.minH, i.startMinHeight), !i.autoResize || x.minW == i.minW && x.minH == i.minH) {
                    for (C = d / u, t = 0, n = v.length; t < n; t++) h = v[t], p = h.layoutRect(), b = p[k], y = p[_] + p.flex * C, y > b ? (d -= p[k] - p[_], u -= p.flex, p.flex = 0, p.maxFlexSize = b) : p.maxFlexSize = 0;
                    for (C = d / u, w = o[T], x = {}, 0 === u && ("end" == l ? w = d + o[T] : "center" == l ? (w = Math.round(i[R] / 2 - (i[R] - d) / 2) + o[T], w < 0 && (w = o[T])) : "justify" == l && (w = o[T], c = Math.floor(d / (r.length - 1)))), x[D] = o[O], t = 0, n = r.length; t < n; t++) h = r[t], p = h.layoutRect(), y = p.maxFlexSize || p[_], "center" === s ? x[D] = Math.round(i[L] / 2 - p[M] / 2) : "stretch" === s ? (x[M] = z(p[P] || 0, i[L] - o[O] - o[H]), x[D] = o[O]) : "end" === s && (x[D] = i[L] - p[M] - o.top), p.flex > 0 && (y += p.flex * C), x[N] = y, x[S] = w, h.layoutRect(x), h.recalc && h.recalc(), w += y + c
                } else if (x.w = x.minW, x.h = x.minH, e.layoutRect(x), this.recalc(e), null === e._lastRect) {
                    var W = e.parent();
                    W && (W._lastRect = null, W.recalc())
                }
            }
        })
    }), r(Ot, [gt], function(e) {
        return e.extend({
            Defaults: {
                containerClass: "flow-layout",
                controlClass: "flow-layout-item",
                endClass: "break"
            },
            recalc: function(e) {
                e.items().filter(":visible").each(function(e) {
                    e.recalc && e.recalc()
                })
            },
            isNative: function() {
                return !0
            }
        })
    }), r(Ht, [xe, Pe, Ae, m, p, w, lt, d], function(e, t, n, r, i, o, a, s) {
        function l(e) {
            e.settings.ui_container && (s.container = o.DOM.select(e.settings.ui_container)[0])
        }

        function c(t) {
            t.on("ScriptsLoaded", function() {
                t.rtl && (e.rtl = !0)
            })
        }

        function u(e) {
            function t(t, n) {
                return function() {
                    var r = this;
                    e.on("nodeChange", function(i) {
                        var o = e.formatter,
                            a = null;
                        d(i.parents, function(e) {
                            if (d(t, function(t) {
                                    if (n ? o.matchNode(e, n, {
                                            value: t.value
                                        }) && (a = t.value) : o.matchNode(e, t.value) && (a = t.value), a) return !1
                                }), a) return !1
                        }), r.value(a)
                    })
                }
            }

            function i(e) {
                e = e.replace(/;$/, "").split(";");
                for (var t = e.length; t--;) e[t] = e[t].split("=");
                return e
            }

            function o() {
                function t(e) {
                    var n = [];
                    if (e) return d(e, function(e) {
                        var o = {
                            text: e.title,
                            icon: e.icon
                        };
                        if (e.items) o.menu = t(e.items);
                        else {
                            var a = e.format || "custom" + r++;
                            e.format || (e.name = a, i.push(e)), o.format = a, o.cmd = e.cmd
                        }
                        n.push(o)
                    }), n
                }

                function n() {
                    var n;
                    return n = t(e.settings.style_formats_merge ? e.settings.style_formats ? o.concat(e.settings.style_formats) : o : e.settings.style_formats || o)
                }
                var r = 0,
                    i = [],
                    o = [{
                        title: "Headings",
                        items: [{
                            title: "Heading 1",
                            format: "h1"
                        }, {
                            title: "Heading 2",
                            format: "h2"
                        }, {
                            title: "Heading 3",
                            format: "h3"
                        }, {
                            title: "Heading 4",
                            format: "h4"
                        }, {
                            title: "Heading 5",
                            format: "h5"
                        }, {
                            title: "Heading 6",
                            format: "h6"
                        }]
                    }, {
                        title: "Inline",
                        items: [{
                            title: "Bold",
                            icon: "bold",
                            format: "bold"
                        }, {
                            title: "Italic",
                            icon: "italic",
                            format: "italic"
                        }, {
                            title: "Underline",
                            icon: "underline",
                            format: "underline"
                        }, {
                            title: "Strikethrough",
                            icon: "strikethrough",
                            format: "strikethrough"
                        }, {
                            title: "Superscript",
                            icon: "superscript",
                            format: "superscript"
                        }, {
                            title: "Subscript",
                            icon: "subscript",
                            format: "subscript"
                        }, {
                            title: "Code",
                            icon: "code",
                            format: "code"
                        }]
                    }, {
                        title: "Blocks",
                        items: [{
                            title: "Paragraph",
                            format: "p"
                        }, {
                            title: "Blockquote",
                            format: "blockquote"
                        }, {
                            title: "Div",
                            format: "div"
                        }, {
                            title: "Pre",
                            format: "pre"
                        }]
                    }, {
                        title: "Alignment",
                        items: [{
                            title: "Left",
                            icon: "alignleft",
                            format: "alignleft"
                        }, {
                            title: "Center",
                            icon: "aligncenter",
                            format: "aligncenter"
                        }, {
                            title: "Right",
                            icon: "alignright",
                            format: "alignright"
                        }, {
                            title: "Justify",
                            icon: "alignjustify",
                            format: "alignjustify"
                        }]
                    }];
                return e.on("init", function() {
                    d(i, function(t) {
                        e.formatter.register(t.name, t)
                    })
                }), {
                    type: "menu",
                    items: n(),
                    onPostRender: function(t) {
                        e.fire("renderFormatsMenu", {
                            control: t.control
                        })
                    },
                    itemDefaults: {
                        preview: !0,
                        textStyle: function() {
                            if (this.settings.format) return e.formatter.getCssText(this.settings.format)
                        },
                        onPostRender: function() {
                            var t = this;
                            t.parent().on("show", function() {
                                var n, r;
                                n = t.settings.format, n && (t.disabled(!e.formatter.canApply(n)), t.active(e.formatter.match(n))), r = t.settings.cmd, r && t.active(e.queryCommandState(r))
                            })
                        },
                        onclick: function() {
                            this.settings.format && c(this.settings.format), this.settings.cmd && e.execCommand(this.settings.cmd)
                        }
                    }
                }
            }

            function a(t) {
                return function() {
                    var n = this;
                    e.formatter ? e.formatter.formatChanged(t, function(e) {
                        n.active(e)
                    }) : e.on("init", function() {
                        e.formatter.formatChanged(t, function(e) {
                            n.active(e)
                        })
                    })
                }
            }

            function s(t) {
                return function() {
                    function n() {
                        return !!e.undoManager && e.undoManager[t]()
                    }
                    var r = this;
                    t = "redo" == t ? "hasRedo" : "hasUndo", r.disabled(!n()), e.on("Undo Redo AddUndo TypingUndo ClearUndos SwitchMode", function() {
                        r.disabled(e.readonly || !n())
                    })
                }
            }

            function l() {
                var t = this;
                e.on("VisualAid", function(e) {
                    t.active(e.hasVisual)
                }), t.active(e.hasVisual)
            }

            function c(t) {
                t.control && (t = t.control.value()), t && e.execCommand("mceToggleFormat", !1, t)
            }

            function u(t) {
                var n = t.length;
                return r.each(t, function(t) {
                    t.menu && (t.hidden = 0 === u(t.menu));
                    var r = t.format;
                    r && (t.hidden = !e.formatter.canApply(r)), t.hidden && n--
                }), n
            }

            function h(t) {
                var n = t.items().length;
                return t.items().each(function(t) {
                    t.menu && t.visible(h(t.menu) > 0), !t.menu && t.settings.menu && t.visible(u(t.settings.menu) > 0);
                    var r = t.settings.format;
                    r && t.visible(e.formatter.canApply(r)), t.visible() || n--
                }), n
            }
            var p;
            p = o(), d({
                bold: "Bold",
                italic: "Italic",
                underline: "Underline",
                strikethrough: "Strikethrough",
                subscript: "Subscript",
                superscript: "Superscript"
            }, function(t, n) {
                e.addButton(n, {
                    tooltip: t,
                    onPostRender: a(n),
                    onclick: function() {
                        c(n)
                    }
                })
            }), d({
                outdent: ["Decrease indent", "Outdent"],
                indent: ["Increase indent", "Indent"],
                cut: ["Cut", "Cut"],
                copy: ["Copy", "Copy"],
                paste: ["Paste", "Paste"],
                help: ["Help", "mceHelp"],
                selectall: ["Select all", "SelectAll"],
                removeformat: ["Clear formatting", "RemoveFormat"],
                visualaid: ["Visual aids", "mceToggleVisualAid"],
                newdocument: ["New document", "mceNewDocument"]
            }, function(t, n) {
                e.addButton(n, {
                    tooltip: t[0],
                    cmd: t[1]
                })
            }), d({
                blockquote: ["Blockquote", "mceBlockQuote"],
                subscript: ["Subscript", "Subscript"],
                superscript: ["Superscript", "Superscript"],
                alignleft: ["Align left", "JustifyLeft"],
                aligncenter: ["Align center", "JustifyCenter"],
                alignright: ["Align right", "JustifyRight"],
                alignjustify: ["Justify", "JustifyFull"],
                alignnone: ["No alignment", "JustifyNone"]
            }, function(t, n) {
                e.addButton(n, {
                    tooltip: t[0],
                    cmd: t[1],
                    onPostRender: a(n)
                })
            });
            var m = function(e) {
                    var t = e;
                    return t.length > 0 && "-" === t[0].text && (t = t.slice(1)), t.length > 0 && "-" === t[t.length - 1].text && (t = t.slice(0, t.length - 1)), t
                },
                g = function(t) {
                    var n, i;
                    if ("string" == typeof t) i = t.split(" ");
                    else if (r.isArray(t)) return f(r.map(t, g));
                    return n = r.grep(i, function(t) {
                        return "|" === t || t in e.menuItems
                    }), r.map(n, function(t) {
                        return "|" === t ? {
                            text: "-"
                        } : e.menuItems[t]
                    })
                },
                v = function(t) {
                    var n = [{
                            text: "-"
                        }],
                        i = r.grep(e.menuItems, function(e) {
                            return e.context === t
                        });
                    return r.each(i, function(e) {
                        "before" == e.separator && n.push({
                            text: "|"
                        }), e.prependToContext ? n.unshift(e) : n.push(e), "after" == e.separator && n.push({
                            text: "|"
                        })
                    }), n
                },
                y = function(e) {
                    return m(e.insert_button_items ? g(e.insert_button_items) : v("insert"))
                };
            e.addButton("undo", {
                tooltip: "Undo",
                onPostRender: s("undo"),
                cmd: "undo"
            }), e.addButton("redo", {
                tooltip: "Redo",
                onPostRender: s("redo"),
                cmd: "redo"
            }), e.addMenuItem("newdocument", {
                text: "New document",
                icon: "newdocument",
                cmd: "mceNewDocument"
            }), e.addMenuItem("undo", {
                text: "Undo",
                icon: "undo",
                shortcut: "Meta+Z",
                onPostRender: s("undo"),
                cmd: "undo"
            }), e.addMenuItem("redo", {
                text: "Redo",
                icon: "redo",
                shortcut: "Meta+Y",
                onPostRender: s("redo"),
                cmd: "redo"
            }), e.addMenuItem("visualaid", {
                text: "Visual aids",
                selectable: !0,
                onPostRender: l,
                cmd: "mceToggleVisualAid"
            }), e.addButton("remove", {
                tooltip: "Remove",
                icon: "remove",
                cmd: "Delete"
            }), e.addButton("insert", {
                type: "menubutton",
                icon: "insert",
                menu: [],
                oncreatemenu: function() {
                    this.menu.add(y(e.settings)), this.menu.renderNew()
                }
            }), d({
                cut: ["Cut", "Cut", "Meta+X"],
                copy: ["Copy", "Copy", "Meta+C"],
                paste: ["Paste", "Paste", "Meta+V"],
                selectall: ["Select all", "SelectAll", "Meta+A"],
                bold: ["Bold", "Bold", "Meta+B"],
                italic: ["Italic", "Italic", "Meta+I"],
                underline: ["Underline", "Underline"],
                strikethrough: ["Strikethrough", "Strikethrough"],
                subscript: ["Subscript", "Subscript"],
                superscript: ["Superscript", "Superscript"],
                removeformat: ["Clear formatting", "RemoveFormat"]
            }, function(t, n) {
                e.addMenuItem(n, {
                    text: t[0],
                    icon: n,
                    shortcut: t[2],
                    cmd: t[1]
                })
            }), e.on("mousedown", function() {
                n.hideAll()
            }), e.addButton("styleselect", {
                type: "menubutton",
                text: "Formats",
                menu: p,
                onShowMenu: function() {
                    e.settings.style_formats_autohide && h(this.menu)
                }
            }), e.addButton("formatselect", function() {
                var n = [],
                    r = i(e.settings.block_formats || "Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Preformatted=pre");
                return d(r, function(t) {
                    n.push({
                        text: t[0],
                        value: t[1],
                        textStyle: function() {
                            return e.formatter.getCssText(t[1])
                        }
                    })
                }), {
                    type: "listbox",
                    text: r[0][0],
                    values: n,
                    fixedWidth: !0,
                    onselect: c,
                    onPostRender: t(n)
                }
            }), e.addButton("fontselect", function() {
                var n = "Andale Mono=andale mono,monospace;Arial=arial,helvetica,sans-serif;Arial Black=arial black,sans-serif;Book Antiqua=book antiqua,palatino,serif;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier,monospace;Georgia=georgia,palatino,serif;Helvetica=helvetica,arial,sans-serif;Impact=impact,sans-serif;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco,monospace;Times New Roman=times new roman,times,serif;Trebuchet MS=trebuchet ms,geneva,sans-serif;Verdana=verdana,geneva,sans-serif;Webdings=webdings;Wingdings=wingdings,zapf dingbats",
                    r = [],
                    o = i(e.settings.font_formats || n);
                return d(o, function(e) {
                    r.push({
                        text: {
                            raw: e[0]
                        },
                        value: e[1],
                        textStyle: e[1].indexOf("dings") == -1 ? "font-family:" + e[1] : ""
                    })
                }), {
                    type: "listbox",
                    text: "Font Family",
                    tooltip: "Font Family",
                    values: r,
                    fixedWidth: !0,
                    onPostRender: t(r, "fontname"),
                    onselect: function(t) {
                        t.control.settings.value && e.execCommand("FontName", !1, t.control.settings.value)
                    }
                }
            }), e.addButton("fontsizeselect", function() {
                var n = [],
                    r = "8pt 10pt 12pt 14pt 18pt 24pt 36pt",
                    i = e.settings.fontsize_formats || r;
                return d(i.split(" "), function(e) {
                    var t = e,
                        r = e,
                        i = e.split("=");
                    i.length > 1 && (t = i[0], r = i[1]), n.push({
                        text: t,
                        value: r
                    })
                }), {
                    type: "listbox",
                    text: "Font Sizes",
                    tooltip: "Font Sizes",
                    values: n,
                    fixedWidth: !0,
                    onPostRender: t(n, "fontsize"),
                    onclick: function(t) {
                        t.control.settings.value && e.execCommand("FontSize", !1, t.control.settings.value)
                    }
                }
            }), e.addMenuItem("formats", {
                text: "Formats",
                menu: p
            })
        }
        var d = r.each,
            f = function(e) {
                return i.reduce(e, function(e, t) {
                    return e.concat(t)
                }, [])
            };
        a.on("AddEditor", function(e) {
            var t = e.editor;
            c(t), u(t), l(t)
        }), e.translate = function(e) {
            return a.translate(e)
        }, t.tooltips = !s.iOS
    }), r(It, [vt], function(e) {
        return e.extend({
            recalc: function(e) {
                var t, n, r, i, o, a, s, l, c, u, d, f, h, p, m, g, v, y, b, C, x, w, E, N = [],
                    _ = [],
                    S, k, T, R, A, B;
                t = e.settings, i = e.items().filter(":visible"), o = e.layoutRect(), r = t.columns || Math.ceil(Math.sqrt(i.length)), n = Math.ceil(i.length / r), y = t.spacingH || t.spacing || 0, b = t.spacingV || t.spacing || 0, C = t.alignH || t.align, x = t.alignV || t.align, g = e.paddingBox, A = "reverseRows" in t ? t.reverseRows : e.isRtl(), C && "string" == typeof C && (C = [C]), x && "string" == typeof x && (x = [x]);
                for (d = 0; d < r; d++) N.push(0);
                for (f = 0; f < n; f++) _.push(0);
                for (f = 0; f < n; f++)
                    for (d = 0; d < r && (u = i[f * r + d], u); d++) c = u.layoutRect(), S = c.minW, k = c.minH, N[d] = S > N[d] ? S : N[d], _[f] = k > _[f] ? k : _[f];
                for (T = o.innerW - g.left - g.right, w = 0, d = 0; d < r; d++) w += N[d] + (d > 0 ? y : 0), T -= (d > 0 ? y : 0) + N[d];
                for (R = o.innerH - g.top - g.bottom, E = 0, f = 0; f < n; f++) E += _[f] + (f > 0 ? b : 0), R -= (f > 0 ? b : 0) + _[f];
                if (w += g.left + g.right, E += g.top + g.bottom, l = {}, l.minW = w + (o.w - o.innerW), l.minH = E + (o.h - o.innerH), l.contentW = l.minW - o.deltaW, l.contentH = l.minH - o.deltaH, l.minW = Math.min(l.minW, o.maxW), l.minH = Math.min(l.minH, o.maxH), l.minW = Math.max(l.minW, o.startMinWidth), l.minH = Math.max(l.minH, o.startMinHeight), !o.autoResize || l.minW == o.minW && l.minH == o.minH) {
                    o.autoResize && (l = e.layoutRect(l), l.contentW = l.minW - o.deltaW, l.contentH = l.minH - o.deltaH);
                    var D;
                    D = "start" == t.packV ? 0 : R > 0 ? Math.floor(R / n) : 0;
                    var L = 0,
                        M = t.flexWidths;
                    if (M)
                        for (d = 0; d < M.length; d++) L += M[d];
                    else L = r;
                    var P = T / L;
                    for (d = 0; d < r; d++) N[d] += M ? M[d] * P : P;
                    for (p = g.top, f = 0; f < n; f++) {
                        for (h = g.left, s = _[f] + D, d = 0; d < r && (B = A ? f * r + r - 1 - d : f * r + d, u = i[B], u); d++) m = u.settings, c = u.layoutRect(), a = Math.max(N[d], c.startMinWidth), c.x = h, c.y = p, v = m.alignH || (C ? C[d] || C[0] : null), "center" == v ? c.x = h + a / 2 - c.w / 2 : "right" == v ? c.x = h + a - c.w : "stretch" == v && (c.w = a), v = m.alignV || (x ? x[d] || x[0] : null), "center" == v ? c.y = p + s / 2 - c.h / 2 : "bottom" == v ? c.y = p + s - c.h : "stretch" == v && (c.h = s), u.layoutRect(c), h += a + y, u.recalc && u.recalc();
                        p += s + b
                    }
                } else if (l.w = l.minW, l.h = l.minH, e.layoutRect(l), this.recalc(e), null === e._lastRect) {
                    var O = e.parent();
                    O && (O._lastRect = null, O.recalc())
                }
            }
        })
    }), r(Ft, [Pe, u], function(e, t) {
        return e.extend({
            renderHtml: function() {
                var e = this;
                return e.classes.add("iframe"), e.canFocus = !1, '<iframe id="' + e._id + '" class="' + e.classes + '" tabindex="-1" src="' + (e.settings.url || "javascript:''") + '" frameborder="0"></iframe>'
            },
            src: function(e) {
                this.getEl().src = e
            },
            html: function(e, n) {
                var r = this,
                    i = this.getEl().contentWindow.document.body;
                return i ? (i.innerHTML = e, n && n()) : t.setTimeout(function() {
                    r.html(e)
                }), this
            }
        })
    }), r(zt, [Pe], function(e) {
        return e.extend({
            init: function(e) {
                var t = this;
                t._super(e), t.classes.add("widget").add("infobox"), t.canFocus = !1
            },
            severity: function(e) {
                this.classes.remove("error"), this.classes.remove("warning"), this.classes.remove("success"), this.classes.add(e)
            },
            help: function(e) {
                this.state.set("help", e)
            },
            renderHtml: function() {
                var e = this,
                    t = e.classPrefix;
                return '<div id="' + e._id + '" class="' + e.classes + '"><div id="' + e._id + '-body">' + e.encode(e.state.get("text")) + '<button role="button" tabindex="-1"><i class="' + t + "ico " + t + 'i-help"></i></button></div></div>'
            },
            bindStates: function() {
                var e = this;
                return e.state.on("change:text", function(t) {
                    e.getEl("body").firstChild.data = e.encode(t.value), e.state.get("rendered") && e.updateLayoutRect()
                }), e.state.on("change:help", function(t) {
                    e.classes.toggle("has-help", t.value), e.state.get("rendered") && e.updateLayoutRect()
                }), e._super()
            }
        })
    }), r(Ut, [Pe, ve], function(e, t) {
        return e.extend({
            init: function(e) {
                var t = this;
                t._super(e), t.classes.add("widget").add("label"), t.canFocus = !1, e.multiline && t.classes.add("autoscroll"), e.strong && t.classes.add("strong")
            },
            initLayoutRect: function() {
                var e = this,
                    n = e._super();
                if (e.settings.multiline) {
                    var r = t.getSize(e.getEl());
                    r.width > n.maxW && (n.minW = n.maxW, e.classes.add("multiline")), e.getEl().style.width = n.minW + "px", n.startMinH = n.h = n.minH = Math.min(n.maxH, t.getSize(e.getEl()).height)
                }
                return n
            },
            repaint: function() {
                var e = this;
                return e.settings.multiline || (e.getEl().style.lineHeight = e.layoutRect().h + "px"), e._super()
            },
            severity: function(e) {
                this.classes.remove("error"), this.classes.remove("warning"), this.classes.remove("success"), this.classes.add(e)
            },
            renderHtml: function() {
                var e = this,
                    t, n, r = e.settings.forId;
                return !r && (n = e.settings.forName) && (t = e.getRoot().find("#" + n)[0], t && (r = t._id)), r ? '<label id="' + e._id + '" class="' + e.classes + '"' + (r ? ' for="' + r + '"' : "") + ">" + e.encode(e.state.get("text")) + "</label>" : '<span id="' + e._id + '" class="' + e.classes + '">' + e.encode(e.state.get("text")) + "</span>"
            },
            bindStates: function() {
                var e = this;
                return e.state.on("change:text", function(t) {
                    e.innerHtml(e.encode(t.value)), e.state.get("rendered") && e.updateLayoutRect()
                }), e._super()
            }
        })
    }), r(Wt, [Ne], function(e) {
        return e.extend({
            Defaults: {
                role: "toolbar",
                layout: "flow"
            },
            init: function(e) {
                var t = this;
                t._super(e), t.classes.add("toolbar")
            },
            postRender: function() {
                var e = this;
                return e.items().each(function(e) {
                    e.classes.add("toolbar-item")
                }), e._super()
            }
        })
    }), r(Vt, [Wt], function(e) {
        return e.extend({
            Defaults: {
                role: "menubar",
                containerCls: "menubar",
                ariaRoot: !0,
                defaults: {
                    type: "menubutton"
                }
            }
        })
    }), r($t, [yt, we, Vt], function(e, t, n) {
        function r(e, t) {
            for (; e;) {
                if (t === e) return !0;
                e = e.parentNode
            }
            return !1
        }
        var i = e.extend({
            init: function(e) {
                var t = this;
                t._renderOpen = !0, t._super(e), e = t.settings, t.classes.add("menubtn"), e.fixedWidth && t.classes.add("fixed-width"), t.aria("haspopup", !0), t.state.set("menu", e.menu || t.render())
            },
            showMenu: function() {
                var e = this,
                    n;
                return e.menu && e.menu.visible() ? e.hideMenu() : (e.menu || (n = e.state.get("menu") || [], n.length ? n = {
                    type: "menu",
                    items: n
                } : n.type = n.type || "menu", n.renderTo ? e.menu = n.parent(e).show().renderTo() : e.menu = t.create(n).parent(e).renderTo(), e.fire("createmenu"), e.menu.reflow(), e.menu.on("cancel", function(t) {
                    t.control.parent() === e.menu && (t.stopPropagation(), e.focus(), e.hideMenu())
                }), e.menu.on("select", function() {
                    e.focus()
                }), e.menu.on("show hide", function(t) {
                    t.control == e.menu && e.activeMenu("show" == t.type), e.aria("expanded", "show" == t.type)
                }).fire("show")), e.menu.show(), e.menu.layoutRect({
                    w: e.layoutRect().w
                }), e.menu.moveRel(e.getEl(), e.isRtl() ? ["br-tr", "tr-br"] : ["bl-tl", "tl-bl"]), void e.fire("showmenu"))
            },
            hideMenu: function() {
                var e = this;
                e.menu && (e.menu.items().each(function(e) {
                    e.hideMenu && e.hideMenu()
                }), e.menu.hide())
            },
            activeMenu: function(e) {
                this.classes.toggle("active", e)
            },
            renderHtml: function() {
                var e = this,
                    t = e._id,
                    r = e.classPrefix,
                    i = e.settings.icon,
                    o, a = e.state.get("text"),
                    s = "";
                return o = e.settings.image, o ? (i = "none", "string" != typeof o && (o = window.getSelection ? o[0] : o[1]), o = " style=\"background-image: url('" + o + "')\"") : o = "", a && (e.classes.add("btn-has-text"), s = '<span class="' + r + 'txt">' + e.encode(a) + "</span>"), i = e.settings.icon ? r + "ico " + r + "i-" + i : "", e.aria("role", e.parent() instanceof n ? "menuitem" : "button"), '<div id="' + t + '" class="' + e.classes + '" tabindex="-1" aria-labelledby="' + t + '"><button id="' + t + '-open" role="presentation" type="button" tabindex="-1">' + (i ? '<i class="' + i + '"' + o + "></i>" : "") + s + ' <i class="' + r + 'caret"></i></button></div>'
            },
            postRender: function() {
                var e = this;
                return e.on("click", function(t) {
                    t.control === e && r(t.target, e.getEl()) && (e.showMenu(), t.aria && e.menu.items().filter(":visible")[0].focus())
                }), e.on("mouseenter", function(t) {
                    var n = t.control,
                        r = e.parent(),
                        o;
                    n && r && n instanceof i && n.parent() == r && (r.items().filter("MenuButton").each(function(e) {
                        e.hideMenu && e != n && (e.menu && e.menu.visible() && (o = !0), e.hideMenu())
                    }), o && (n.focus(), n.showMenu()))
                }), e._super()
            },
            bindStates: function() {
                var e = this;
                return e.state.on("change:menu", function() {
                    e.menu && e.menu.remove(), e.menu = null
                }), e._super()
            },
            remove: function() {
                this._super(), this.menu && this.menu.remove()
            }
        });
        return i
    }), r(qt, [Pe, we, d, u], function(e, t, n, r) {
        return e.extend({
            Defaults: {
                border: 0,
                role: "menuitem"
            },
            init: function(e) {
                var t = this,
                    n;
                t._super(e), e = t.settings, t.classes.add("menu-item"), e.menu && t.classes.add("menu-item-expand"), e.preview && t.classes.add("menu-item-preview"), n = t.state.get("text"), "-" !== n && "|" !== n || (t.classes.add("menu-item-sep"), t.aria("role", "separator"),
                    t.state.set("text", "-")), e.selectable && (t.aria("role", "menuitemcheckbox"), t.classes.add("menu-item-checkbox"), e.icon = "selected"), e.preview || e.selectable || t.classes.add("menu-item-normal"), t.on("mousedown", function(e) {
                    e.preventDefault()
                }), e.menu && !e.ariaHideMenu && t.aria("haspopup", !0)
            },
            hasMenus: function() {
                return !!this.settings.menu
            },
            showMenu: function() {
                var e = this,
                    n = e.settings,
                    r, i = e.parent();
                if (i.items().each(function(t) {
                        t !== e && t.hideMenu()
                    }), n.menu) {
                    r = e.menu, r ? r.show() : (r = n.menu, r.length ? r = {
                        type: "menu",
                        items: r
                    } : r.type = r.type || "menu", i.settings.itemDefaults && (r.itemDefaults = i.settings.itemDefaults), r = e.menu = t.create(r).parent(e).renderTo(), r.reflow(), r.on("cancel", function(t) {
                        t.stopPropagation(), e.focus(), r.hide()
                    }), r.on("show hide", function(e) {
                        e.control.items && e.control.items().each(function(e) {
                            e.active(e.settings.selected)
                        })
                    }).fire("show"), r.on("hide", function(t) {
                        t.control === r && e.classes.remove("selected")
                    }), r.submenu = !0), r._parentMenu = i, r.classes.add("menu-sub");
                    var o = r.testMoveRel(e.getEl(), e.isRtl() ? ["tl-tr", "bl-br", "tr-tl", "br-bl"] : ["tr-tl", "br-bl", "tl-tr", "bl-br"]);
                    r.moveRel(e.getEl(), o), r.rel = o, o = "menu-sub-" + o, r.classes.remove(r._lastRel).add(o), r._lastRel = o, e.classes.add("selected"), e.aria("expanded", !0)
                }
            },
            hideMenu: function() {
                var e = this;
                return e.menu && (e.menu.items().each(function(e) {
                    e.hideMenu && e.hideMenu()
                }), e.menu.hide(), e.aria("expanded", !1)), e
            },
            renderHtml: function() {
                function e(e) {
                    var t, r, i = {};
                    for (i = n.mac ? {
                            alt: "&#x2325;",
                            ctrl: "&#x2318;",
                            shift: "&#x21E7;",
                            meta: "&#x2318;"
                        } : {
                            meta: "Ctrl"
                        }, e = e.split("+"), t = 0; t < e.length; t++) r = i[e[t].toLowerCase()], r && (e[t] = r);
                    return e.join("+")
                }

                function t(e) {
                    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                }

                function r(e) {
                    var n = s.match || "";
                    return n ? e.replace(new RegExp(t(n), "gi"), function(e) {
                        return "!mce~match[" + e + "]mce~match!"
                    }) : e
                }

                function i(e) {
                    return e.replace(new RegExp(t("!mce~match["), "g"), "<b>").replace(new RegExp(t("]mce~match!"), "g"), "</b>")
                }
                var o = this,
                    a = o._id,
                    s = o.settings,
                    l = o.classPrefix,
                    c = o.state.get("text"),
                    u = o.settings.icon,
                    d = "",
                    f = s.shortcut,
                    h = o.encode(s.url),
                    p = "";
                return u && o.parent().classes.add("menu-has-icons"), s.image && (d = " style=\"background-image: url('" + s.image + "')\""), f && (f = e(f)), u = l + "ico " + l + "i-" + (o.settings.icon || "none"), p = "-" !== c ? '<i class="' + u + '"' + d + "></i>\xa0" : "", c = i(o.encode(r(c))), h = i(o.encode(r(h))), '<div id="' + a + '" class="' + o.classes + '" tabindex="-1">' + p + ("-" !== c ? '<span id="' + a + '-text" class="' + l + 'text">' + c + "</span>" : "") + (f ? '<div id="' + a + '-shortcut" class="' + l + 'menu-shortcut">' + f + "</div>" : "") + (s.menu ? '<div class="' + l + 'caret"></div>' : "") + (h ? '<div class="' + l + 'menu-item-link">' + h + "</div>" : "") + "</div>"
            },
            postRender: function() {
                var e = this,
                    t = e.settings,
                    n = t.textStyle;
                if ("function" == typeof n && (n = n.call(this)), n) {
                    var i = e.getEl("text");
                    i && i.setAttribute("style", n)
                }
                return e.on("mouseenter click", function(n) {
                    n.control === e && (t.menu || "click" !== n.type ? (e.showMenu(), n.aria && e.menu.focus(!0)) : (e.fire("select"), r.requestAnimationFrame(function() {
                        e.parent().hideAll()
                    })))
                }), e._super(), e
            },
            hover: function() {
                var e = this;
                return e.parent().items().each(function(e) {
                    e.classes.remove("selected")
                }), e.classes.toggle("selected", !0), e
            },
            active: function(e) {
                return "undefined" != typeof e && this.aria("checked", e), this._super(e)
            },
            remove: function() {
                this._super(), this.menu && this.menu.remove()
            }
        })
    }), r(jt, [g, xe, u], function(e, t, n) {
        return function(r, i) {
            var o = this,
                a, s = t.classPrefix,
                l;
            o.show = function(t, c) {
                function u() {
                    a && (e(r).append('<div class="' + s + "throbber" + (i ? " " + s + "throbber-inline" : "") + '"></div>'), c && c())
                }
                return o.hide(), a = !0, t ? l = n.setTimeout(u, t) : u(), o
            }, o.hide = function() {
                var e = r.lastChild;
                return n.clearTimeout(l), e && e.className.indexOf("throbber") != -1 && e.parentNode.removeChild(e), a = !1, o
            }
        }
    }), r(Yt, [Ae, qt, jt, m], function(e, t, n, r) {
        return e.extend({
            Defaults: {
                defaultType: "menuitem",
                border: 1,
                layout: "stack",
                role: "application",
                bodyRole: "menu",
                ariaRoot: !0
            },
            init: function(e) {
                var t = this;
                if (e.autohide = !0, e.constrainToViewport = !0, "function" == typeof e.items && (e.itemsFactory = e.items, e.items = []), e.itemDefaults)
                    for (var n = e.items, i = n.length; i--;) n[i] = r.extend({}, e.itemDefaults, n[i]);
                t._super(e), t.classes.add("menu")
            },
            repaint: function() {
                return this.classes.toggle("menu-align", !0), this._super(), this.getEl().style.height = "", this.getEl("body").style.height = "", this
            },
            cancel: function() {
                var e = this;
                e.hideAll(), e.fire("select")
            },
            load: function() {
                function e() {
                    t.throbber && (t.throbber.hide(), t.throbber = null)
                }
                var t = this,
                    r, i;
                i = t.settings.itemsFactory, i && (t.throbber || (t.throbber = new n(t.getEl("body"), !0), 0 === t.items().length ? (t.throbber.show(), t.fire("loading")) : t.throbber.show(100, function() {
                    t.items().remove(), t.fire("loading")
                }), t.on("hide close", e)), t.requestTime = r = (new Date).getTime(), t.settings.itemsFactory(function(n) {
                    return 0 === n.length ? void t.hide() : void(t.requestTime === r && (t.getEl().style.width = "", t.getEl("body").style.width = "", e(), t.items().remove(), t.getEl("body").innerHTML = "", t.add(n), t.renderNew(), t.fire("loaded")))
                }))
            },
            hideAll: function() {
                var e = this;
                return this.find("menuitem").exec("hideMenu"), e._super()
            },
            preRender: function() {
                var e = this;
                return e.items().each(function(t) {
                    var n = t.settings;
                    if (n.icon || n.image || n.selectable) return e._hasIcons = !0, !1
                }), e.settings.itemsFactory && e.on("postrender", function() {
                    e.settings.itemsFactory && e.load()
                }), e._super()
            }
        })
    }), r(Xt, [$t, Yt], function(e, t) {
        return e.extend({
            init: function(e) {
                function t(r) {
                    for (var a = 0; a < r.length; a++) {
                        if (i = r[a].selected || e.value === r[a].value) return o = o || r[a].text, n.state.set("value", r[a].value), !0;
                        if (r[a].menu && t(r[a].menu)) return !0
                    }
                }
                var n = this,
                    r, i, o, a;
                n._super(e), e = n.settings, n._values = r = e.values, r && ("undefined" != typeof e.value && t(r), !i && r.length > 0 && (o = r[0].text, n.state.set("value", r[0].value)), n.state.set("menu", r)), n.state.set("text", e.text || o), n.classes.add("listbox"), n.on("select", function(t) {
                    var r = t.control;
                    a && (t.lastControl = a), e.multiple ? r.active(!r.active()) : n.value(t.control.value()), a = r
                })
            },
            bindStates: function() {
                function e(e, n) {
                    e instanceof t && e.items().each(function(e) {
                        e.hasMenus() || e.active(e.value() === n)
                    })
                }

                function n(e, t) {
                    var r;
                    if (e)
                        for (var i = 0; i < e.length; i++) {
                            if (e[i].value === t) return e[i];
                            if (e[i].menu && (r = n(e[i].menu, t))) return r
                        }
                }
                var r = this;
                return r.on("show", function(t) {
                    e(t.control, r.value())
                }), r.state.on("change:value", function(e) {
                    var t = n(r.state.get("menu"), e.value);
                    t ? r.text(t.text) : r.text(r.settings.text)
                }), r._super()
            }
        })
    }), r(Kt, [Ct], function(e) {
        return e.extend({
            Defaults: {
                classes: "radio",
                role: "radio"
            }
        })
    }), r(Gt, [Pe, _e], function(e, t) {
        return e.extend({
            renderHtml: function() {
                var e = this,
                    t = e.classPrefix;
                return e.classes.add("resizehandle"), "both" == e.settings.direction && e.classes.add("resizehandle-both"), e.canFocus = !1, '<div id="' + e._id + '" class="' + e.classes + '"><i class="' + t + "ico " + t + 'i-resize"></i></div>'
            },
            postRender: function() {
                var e = this;
                e._super(), e.resizeDragHelper = new t(this._id, {
                    start: function() {
                        e.fire("ResizeStart")
                    },
                    drag: function(t) {
                        "both" != e.settings.direction && (t.deltaX = 0), e.fire("Resize", t)
                    },
                    stop: function() {
                        e.fire("ResizeEnd")
                    }
                })
            },
            remove: function() {
                return this.resizeDragHelper && this.resizeDragHelper.destroy(), this._super()
            }
        })
    }), r(Jt, [Pe], function(e) {
        function t(e) {
            var t = "";
            if (e)
                for (var n = 0; n < e.length; n++) t += '<option value="' + e[n] + '">' + e[n] + "</option>";
            return t
        }
        return e.extend({
            Defaults: {
                classes: "selectbox",
                role: "selectbox",
                options: []
            },
            init: function(e) {
                var t = this;
                t._super(e), t.settings.size && (t.size = t.settings.size), t.settings.options && (t._options = t.settings.options), t.on("keydown", function(e) {
                    var n;
                    13 == e.keyCode && (e.preventDefault(), t.parents().reverse().each(function(e) {
                        if (e.toJSON) return n = e, !1
                    }), t.fire("submit", {
                        data: n.toJSON()
                    }))
                })
            },
            options: function(e) {
                return arguments.length ? (this.state.set("options", e), this) : this.state.get("options")
            },
            renderHtml: function() {
                var e = this,
                    n, r = "";
                return n = t(e._options), e.size && (r = ' size = "' + e.size + '"'), '<select id="' + e._id + '" class="' + e.classes + '"' + r + ">" + n + "</select>"
            },
            bindStates: function() {
                var e = this;
                return e.state.on("change:options", function(n) {
                    e.getEl().innerHTML = t(n.value)
                }), e._super()
            }
        })
    }), r(Qt, [Pe, _e, ve], function(e, t, n) {
        function r(e, t, n) {
            return e < t && (e = t), e > n && (e = n), e
        }

        function i(e, t, n) {
            e.setAttribute("aria-" + t, n)
        }

        function o(e, t) {
            var r, o, a, s, l, c;
            "v" == e.settings.orientation ? (s = "top", a = "height", o = "h") : (s = "left", a = "width", o = "w"), c = e.getEl("handle"), r = (e.layoutRect()[o] || 100) - n.getSize(c)[a], l = r * ((t - e._minValue) / (e._maxValue - e._minValue)) + "px", c.style[s] = l, c.style.height = e.layoutRect().h + "px", i(c, "valuenow", t), i(c, "valuetext", "" + e.settings.previewFilter(t)), i(c, "valuemin", e._minValue), i(c, "valuemax", e._maxValue)
        }
        return e.extend({
            init: function(e) {
                var t = this;
                e.previewFilter || (e.previewFilter = function(e) {
                    return Math.round(100 * e) / 100
                }), t._super(e), t.classes.add("slider"), "v" == e.orientation && t.classes.add("vertical"), t._minValue = e.minValue || 0, t._maxValue = e.maxValue || 100, t._initValue = t.state.get("value")
            },
            renderHtml: function() {
                var e = this,
                    t = e._id,
                    n = e.classPrefix;
                return '<div id="' + t + '" class="' + e.classes + '"><div id="' + t + '-handle" class="' + n + 'slider-handle" role="slider" tabindex="-1"></div></div>'
            },
            reset: function() {
                this.value(this._initValue).repaint()
            },
            postRender: function() {
                function e(e, t, n) {
                    return (n + e) / (t - e)
                }

                function i(e, t, n) {
                    return n * (t - e) - e
                }

                function o(t, n) {
                    function o(o) {
                        var a;
                        a = s.value(), a = i(t, n, e(t, n, a) + .05 * o), a = r(a, t, n), s.value(a), s.fire("dragstart", {
                            value: a
                        }), s.fire("drag", {
                            value: a
                        }), s.fire("dragend", {
                            value: a
                        })
                    }
                    s.on("keydown", function(e) {
                        switch (e.keyCode) {
                            case 37:
                            case 38:
                                o(-1);
                                break;
                            case 39:
                            case 40:
                                o(1)
                        }
                    })
                }

                function a(e, i, o) {
                    var a, l, c, p, m;
                    s._dragHelper = new t(s._id, {
                        handle: s._id + "-handle",
                        start: function(e) {
                            a = e[u], l = parseInt(s.getEl("handle").style[d], 10), c = (s.layoutRect()[h] || 100) - n.getSize(o)[f], s.fire("dragstart", {
                                value: m
                            })
                        },
                        drag: function(t) {
                            var n = t[u] - a;
                            p = r(l + n, 0, c), o.style[d] = p + "px", m = e + p / c * (i - e), s.value(m), s.tooltip().text("" + s.settings.previewFilter(m)).show().moveRel(o, "bc tc"), s.fire("drag", {
                                value: m
                            })
                        },
                        stop: function() {
                            s.tooltip().hide(), s.fire("dragend", {
                                value: m
                            })
                        }
                    })
                }
                var s = this,
                    l, c, u, d, f, h;
                l = s._minValue, c = s._maxValue, "v" == s.settings.orientation ? (u = "screenY", d = "top", f = "height", h = "h") : (u = "screenX", d = "left", f = "width", h = "w"), s._super(), o(l, c, s.getEl("handle")), a(l, c, s.getEl("handle"))
            },
            repaint: function() {
                this._super(), o(this, this.value())
            },
            bindStates: function() {
                var e = this;
                return e.state.on("change:value", function(t) {
                    o(e, t.value)
                }), e._super()
            }
        })
    }), r(Zt, [Pe], function(e) {
        return e.extend({
            renderHtml: function() {
                var e = this;
                return e.classes.add("spacer"), e.canFocus = !1, '<div id="' + e._id + '" class="' + e.classes + '"></div>'
            }
        })
    }), r(en, [$t, ve, g], function(e, t, n) {
        return e.extend({
            Defaults: {
                classes: "widget btn splitbtn",
                role: "button"
            },
            repaint: function() {
                var e = this,
                    r = e.getEl(),
                    i = e.layoutRect(),
                    o, a;
                return e._super(), o = r.firstChild, a = r.lastChild, n(o).css({
                    width: i.w - t.getSize(a).width,
                    height: i.h - 2
                }), n(a).css({
                    height: i.h - 2
                }), e
            },
            activeMenu: function(e) {
                var t = this;
                n(t.getEl().lastChild).toggleClass(t.classPrefix + "active", e)
            },
            renderHtml: function() {
                var e = this,
                    t = e._id,
                    n = e.classPrefix,
                    r, i = e.state.get("icon"),
                    o = e.state.get("text"),
                    a = "";
                return r = e.settings.image, r ? (i = "none", "string" != typeof r && (r = window.getSelection ? r[0] : r[1]), r = " style=\"background-image: url('" + r + "')\"") : r = "", i = e.settings.icon ? n + "ico " + n + "i-" + i : "", o && (e.classes.add("btn-has-text"), a = '<span class="' + n + 'txt">' + e.encode(o) + "</span>"), '<div id="' + t + '" class="' + e.classes + '" role="button" tabindex="-1"><button type="button" hidefocus="1" tabindex="-1">' + (i ? '<i class="' + i + '"' + r + "></i>" : "") + a + '</button><button type="button" class="' + n + 'open" hidefocus="1" tabindex="-1">' + (e._menuBtnText ? (i ? "\xa0" : "") + e._menuBtnText : "") + ' <i class="' + n + 'caret"></i></button></div>'
            },
            postRender: function() {
                var e = this,
                    t = e.settings.onclick;
                return e.on("click", function(e) {
                    var n = e.target;
                    if (e.control == this)
                        for (; n;) {
                            if (e.aria && "down" != e.aria.key || "BUTTON" == n.nodeName && n.className.indexOf("open") == -1) return e.stopImmediatePropagation(), void(t && t.call(this, e));
                            n = n.parentNode
                        }
                }), delete e.settings.onclick, e._super()
            }
        })
    }), r(tn, [Ot], function(e) {
        return e.extend({
            Defaults: {
                containerClass: "stack-layout",
                controlClass: "stack-layout-item",
                endClass: "break"
            },
            isNative: function() {
                return !0
            }
        })
    }), r(nn, [ke, g, ve], function(e, t, n) {
        return e.extend({
            Defaults: {
                layout: "absolute",
                defaults: {
                    type: "panel"
                }
            },
            activateTab: function(e) {
                var n;
                this.activeTabId && (n = this.getEl(this.activeTabId), t(n).removeClass(this.classPrefix + "active"), n.setAttribute("aria-selected", "false")), this.activeTabId = "t" + e, n = this.getEl("t" + e), n.setAttribute("aria-selected", "true"), t(n).addClass(this.classPrefix + "active"), this.items()[e].show().fire("showtab"), this.reflow(), this.items().each(function(t, n) {
                    e != n && t.hide()
                })
            },
            renderHtml: function() {
                var e = this,
                    t = e._layout,
                    n = "",
                    r = e.classPrefix;
                return e.preRender(), t.preRender(e), e.items().each(function(t, i) {
                    var o = e._id + "-t" + i;
                    t.aria("role", "tabpanel"), t.aria("labelledby", o), n += '<div id="' + o + '" class="' + r + 'tab" unselectable="on" role="tab" aria-controls="' + t._id + '" aria-selected="false" tabIndex="-1">' + e.encode(t.settings.title) + "</div>"
                }), '<div id="' + e._id + '" class="' + e.classes + '" hidefocus="1" tabindex="-1"><div id="' + e._id + '-head" class="' + r + 'tabs" role="tablist">' + n + '</div><div id="' + e._id + '-body" class="' + e.bodyClasses + '">' + t.renderHtml(e) + "</div></div>"
            },
            postRender: function() {
                var e = this;
                e._super(), e.settings.activeTab = e.settings.activeTab || 0, e.activateTab(e.settings.activeTab), this.on("click", function(t) {
                    var n = t.target.parentNode;
                    if (n && n.id == e._id + "-head")
                        for (var r = n.childNodes.length; r--;) n.childNodes[r] == t.target && e.activateTab(r)
                })
            },
            initLayoutRect: function() {
                var e = this,
                    t, r, i;
                r = n.getSize(e.getEl("head")).width, r = r < 0 ? 0 : r, i = 0, e.items().each(function(e) {
                    r = Math.max(r, e.layoutRect().minW), i = Math.max(i, e.layoutRect().minH)
                }), e.items().each(function(e) {
                    e.settings.x = 0, e.settings.y = 0, e.settings.w = r, e.settings.h = i, e.layoutRect({
                        x: 0,
                        y: 0,
                        w: r,
                        h: i
                    })
                });
                var o = n.getSize(e.getEl("head")).height;
                return e.settings.minWidth = r, e.settings.minHeight = i + o, t = e._super(), t.deltaH += o, t.innerH = t.h - t.deltaH, t
            }
        })
    }), r(rn, [Pe, m, ve], function(e, t, n) {
        return e.extend({
            init: function(e) {
                var t = this;
                t._super(e), t.classes.add("textbox"), e.multiline ? t.classes.add("multiline") : (t.on("keydown", function(e) {
                    var n;
                    13 == e.keyCode && (e.preventDefault(), t.parents().reverse().each(function(e) {
                        if (e.toJSON) return n = e, !1
                    }), t.fire("submit", {
                        data: n.toJSON()
                    }))
                }), t.on("keyup", function(e) {
                    t.state.set("value", e.target.value)
                }))
            },
            repaint: function() {
                var e = this,
                    t, n, r, i, o = 0,
                    a;
                t = e.getEl().style, n = e._layoutRect, a = e._lastRepaintRect || {};
                var s = document;
                return !e.settings.multiline && s.all && (!s.documentMode || s.documentMode <= 8) && (t.lineHeight = n.h - o + "px"), r = e.borderBox, i = r.left + r.right + 8, o = r.top + r.bottom + (e.settings.multiline ? 8 : 0), n.x !== a.x && (t.left = n.x + "px", a.x = n.x), n.y !== a.y && (t.top = n.y + "px", a.y = n.y), n.w !== a.w && (t.width = n.w - i + "px", a.w = n.w), n.h !== a.h && (t.height = n.h - o + "px", a.h = n.h), e._lastRepaintRect = a, e.fire("repaint", {}, !1), e
            },
            renderHtml: function() {
                var e = this,
                    r = e.settings,
                    i, o;
                return i = {
                    id: e._id,
                    hidefocus: "1"
                }, t.each(["rows", "spellcheck", "maxLength", "size", "readonly", "min", "max", "step", "list", "pattern", "placeholder", "required", "multiple"], function(e) {
                    i[e] = r[e]
                }), e.disabled() && (i.disabled = "disabled"), r.subtype && (i.type = r.subtype), o = n.create(r.multiline ? "textarea" : "input", i), o.value = e.state.get("value"), o.className = e.classes, o.outerHTML
            },
            value: function(e) {
                return arguments.length ? (this.state.set("value", e), this) : (this.state.get("rendered") && this.state.set("value", this.getEl().value), this.state.get("value"))
            },
            postRender: function() {
                var e = this;
                e.getEl().value = e.state.get("value"), e._super(), e.$el.on("change", function(t) {
                    e.state.set("value", t.target.value), e.fire("change", t)
                })
            },
            bindStates: function() {
                var e = this;
                return e.state.on("change:value", function(t) {
                    e.getEl().value != t.value && (e.getEl().value = t.value)
                }), e.state.on("change:disabled", function(t) {
                    e.getEl().disabled = t.value
                }), e._super()
            },
            remove: function() {
                this.$el.off(), this._super()
            }
        })
    }), r(on, [], function() {
        var e = this || window,
            t = function() {
                return e.tinymce
            };
        return "function" == typeof e.define && (e.define.amd || e.define("ephox/tinymce", [], t)), "object" == typeof module && (module.exports = window.tinymce), {}
    }), a([l, c, u, d, f, h, m, g, v, y, C, w, E, N, T, A, B, D, L, M, P, O, I, F, j, Y, J, te, le, ce, ue, de, he, me, ge, Ce, xe, we, Ee, Ne, _e, Se, ke, Te, Re, Ae, Be, De, Le, Me, Pe, Oe, He, Ie, Ue, Ve, ot, at, st, lt, ut, dt, ft, ht, pt, mt, gt, vt, yt, bt, Ct, xt, wt, Et, Nt, _t, St, kt, Tt, Rt, At, Bt, Lt, Mt, Pt, Ot, Ht, It, Ft, zt, Ut, Wt, Vt, $t, qt, jt, Yt, Xt, Kt, Gt, Jt, Qt, Zt, en, tn, nn, rn])
}(window);