(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([[9], {
    "2UgN": function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
                return u
            }
        ));
        var r = n("q1tI")
            , a = n.n(r)
            , c = n("vOnD")
            , o = a.a.createElement
            , u = c.d.div.withConfig({
            displayName: "NavigationSecondary__Wrapper",
            componentId: "sc-13y3yjk-0"
        })(["position:", ";top:0;z-index:", ";margin-bottom:", ";border-bottom:1px solid ", ";background-color:", ";.wide-container{display:flex;align-items:center;justify-content:space-between;}"], (function(t) {
                var e;
                return null !== (e = t.options) && void 0 !== e && e.sticky ? "sticky" : "relative"
            }
        ), (function(t) {
                return t.theme.zIndex.third
            }
        ), (function(t) {
                var e;
                return null !== (e = t.options) && void 0 !== e && e.gap ? "3rem" : "0"
            }
        ), (function(t) {
                return t.theme.colors.neutralLightGrey
            }
        ), (function(t) {
                return t.theme.colors.neutralOffWhite
            }
        ))
            , s = c.d.h1.withConfig({
            displayName: "NavigationSecondary__Heading",
            componentId: "sc-13y3yjk-1"
        })(["border-right:1px solid ", ";border-left:1px solid ", ";padding:1.5rem;font-family:", ";font-weight:700;letter-spacing:1px;text-transform:uppercase;white-space:nowrap;@media (min-width:", "){padding:1.5rem 3rem;}"], (function(t) {
                return t.theme.colors.neutralLightGrey
            }
        ), (function(t) {
                return t.theme.colors.neutralLightGrey
            }
        ), (function(t) {
                return t.theme.fonts.secondaryFontFamily
            }
        ), (function(t) {
                return t.theme.breakpoints.tablet
            }
        ));
        e.b = function(t) {
            var e = t.children
                , n = t.options
                , r = t.title;
            return o(u, {
                options: n
            }, o("div", {
                className: "wide-container"
            }, o(s, null, r), e))
        }
    },
    "7xTO": function(t, e, n) {
        "use strict";
        n.d(e, "e", (function() {
                return y
            }
        )),
            n.d(e, "h", (function() {
                    return b
                }
            )),
            n.d(e, "i", (function() {
                    return g
                }
            )),
            n.d(e, "n", (function() {
                    return _
                }
            )),
            n.d(e, "g", (function() {
                    return E
                }
            )),
            n.d(e, "l", (function() {
                    return w
                }
            )),
            n.d(e, "b", (function() {
                    return T
                }
            )),
            n.d(e, "j", (function() {
                    return U
                }
            )),
            n.d(e, "a", (function() {
                    return x
                }
            )),
            n.d(e, "c", (function() {
                    return R
                }
            )),
            n.d(e, "m", (function() {
                    return L
                }
            )),
            n.d(e, "f", (function() {
                    return S
                }
            )),
            n.d(e, "o", (function() {
                    return j
                }
            )),
            n.d(e, "k", (function() {
                    return N
                }
            )),
            n.d(e, "d", (function() {
                    return k
                }
            ));
        var r = n("vJKn")
            , a = n.n(r)
            , c = n("rg98")
            , o = n("vDqi")
            , u = n.n(o)
            , s = n("8cHP")
            , i = n("Od/X")
            , p = n("USnQ")
            , f = n("Plzo")
            , l = n("FyoO")
            , d = n("qUN7")
            , h = n("qgWo")
            , m = n("n/Mz")
            , O = n("DIQ9")
            , v = n("db/H")
            , y = function(t) {
            return function() {
                var e = Object(c.a)(a.a.mark((function e(n) {
                        var r;
                        return a.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0,
                                                e.next = 3,
                                                u.a.post("".concat(i.a.REST_API_URL, "/solutions"), {
                                                    challenge: t
                                                });
                                        case 3:
                                            r = e.sent,
                                                n({
                                                    type: d.e,
                                                    payload: r.data.solution
                                                }),
                                                n(Object(f.b)()),
                                                s.Router.pushRoute("/challenges/".concat(r.data.solution.challenge.slug, "/hub/").concat(r.data.solution.slug, "?intro=true")).then((function() {
                                                        return window.scrollTo(0, 0)
                                                    }
                                                )),
                                                setTimeout((function() {
                                                        n(Object(p.a)({
                                                            type: "success",
                                                            message: "Happy coding!"
                                                        }))
                                                    }
                                                ), 200),
                                                e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10,
                                                e.t0 = e.catch(0),
                                                n(Object(p.a)({
                                                    type: "error",
                                                    message: "Sorry, we couldn't start the challenge. Please try again."
                                                }));
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e, null, [[0, 10]])
                    }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        }
            , b = function(t) {
            return function() {
                var e = Object(c.a)(a.a.mark((function e(n) {
                        var r;
                        return a.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0,
                                                e.next = 3,
                                                u.a.get("".concat(i.a.REST_API_URL, "/solutions/").concat(t));
                                        case 3:
                                            r = e.sent,
                                                n({
                                                    type: d.h,
                                                    payload: r.data.solution
                                                }),
                                                e.next = 10;
                                            break;
                                        case 7:
                                            throw e.prev = 7,
                                                e.t0 = e.catch(0),
                                                new Error(e.t0);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e, null, [[0, 7]])
                    }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        }
            , g = function(t) {
            var e = t.limit
                , n = t.offset
                , r = t.filter;
            return function() {
                var t = Object(c.a)(a.a.mark((function t(c) {
                        var o, s;
                        return a.a.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                        case 0:
                                            return o = "questions" === r ? "questions" : "solutions",
                                                t.prev = 1,
                                                t.next = 4,
                                                u.a.get("".concat(i.a.REST_API_URL, "/").concat(o, "?limit=").concat(e, "&offset=").concat(n));
                                        case 4:
                                            s = t.sent,
                                                c({
                                                    type: d.i,
                                                    payload: s.data.solutions,
                                                    reset: 0 === n
                                                }),
                                                t.next = 11;
                                            break;
                                        case 8:
                                            throw t.prev = 8,
                                                t.t0 = t.catch(1),
                                                new Error(t.t0);
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                            }
                        ), t, null, [[1, 8]])
                    }
                )));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()
        }
            , _ = function(t, e) {
            return function() {
                var n = Object(c.a)(a.a.mark((function n(r, c) {
                        var o, l, h, m;
                        return a.a.wrap((function(n) {
                                for (; ; )
                                    switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0,
                                                n.next = 3,
                                                u.a.put("".concat(i.a.REST_API_URL, "/solutions/").concat(t), e);
                                        case 3:
                                            return o = n.sent,
                                                l = !c().solutions.single.submitted,
                                                h = o.data.solution.submitted,
                                                m = h ? l && h ? "Great work! Your solution was submitted!" : "Solution updated!" : "Done!",
                                                r({
                                                    type: d.p,
                                                    payload: o.data.solution
                                                }),
                                                r(Object(p.a)({
                                                    type: "success",
                                                    message: m
                                                })),
                                                r(Object(f.b)()),
                                                s.Router.pushRoute("/challenges/".concat(o.data.solution.challenge.slug, "/hub/").concat(o.data.solution.slug)),
                                                n.abrupt("return", o.data.solution.submitted);
                                        case 14:
                                            n.prev = 14,
                                                n.t0 = n.catch(0),
                                                r(Object(p.a)({
                                                    type: "error",
                                                    message: n.t0.response.data.message
                                                }));
                                        case 17:
                                        case "end":
                                            return n.stop()
                                    }
                            }
                        ), n, null, [[0, 14]])
                    }
                )));
                return function(t, e) {
                    return n.apply(this, arguments)
                }
            }()
        }
            , E = function(t) {
            return function() {
                var e = Object(c.a)(a.a.mark((function e(n, r) {
                        var c;
                        return a.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0,
                                                e.next = 3,
                                                u.a.delete("".concat(i.a.REST_API_URL, "/solutions/").concat(t));
                                        case 3:
                                            n(Object(f.b)()),
                                                c = r().auth.currentUser.username,
                                                s.Router.pushRoute("/profile/".concat(c, "/my-challenges")).then((function() {
                                                        return window.scrollTo(0, 0)
                                                    }
                                                )),
                                                n(Object(p.a)({
                                                    type: "success",
                                                    message: "Solution successfully deleted"
                                                })),
                                                e.next = 12;
                                            break;
                                        case 9:
                                            throw e.prev = 9,
                                                e.t0 = e.catch(0),
                                                new Error(e.t0);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e, null, [[0, 9]])
                    }
                )));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }()
        }
            , w = function(t, e) {
            return function() {
                var n = Object(c.a)(a.a.mark((function n(r) {
                        return a.a.wrap((function(n) {
                                for (; ; )
                                    switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0,
                                                n.next = 3,
                                                u.a.post("".concat(i.a.REST_API_URL, "/solutions/").concat(t, "/unlock"));
                                        case 3:
                                            r(Object(f.b)()),
                                                r({
                                                    type: d.m
                                                }),
                                                r(Object(l.f)(e, {
                                                    limit: 24,
                                                    offset: 0
                                                })),
                                                n.next = 11;
                                            break;
                                        case 8:
                                            n.prev = 8,
                                                n.t0 = n.catch(0),
                                                r(Object(p.a)({
                                                    type: "error",
                                                    message: "Unable to start the challenge. Please try again and contact us if the issue persists."
                                                }));
                                        case 11:
                                        case "end":
                                            return n.stop()
                                    }
                            }
                        ), n, null, [[0, 8]])
                    }
                )));
                return function(t) {
                    return n.apply(this, arguments)
                }
            }()
        }
            , T = function() {
            return {
                type: d.c
            }
        }
            , U = function(t, e) {
            return function() {
                var n = Object(c.a)(a.a.mark((function n(r) {
                        var c, o;
                        return a.a.wrap((function(n) {
                                for (; ; )
                                    switch (n.prev = n.next) {
                                        case 0:
                                            return c = null,
                                                n.prev = 1,
                                                n.next = 4,
                                                u.a.post("".concat(i.a.REST_API_URL, "/solutions/").concat(t, "/like"));
                                        case 4:
                                            o = n.sent,
                                                "solutions" === e ? c = d.j : "solution" === e ? c = d.k : "profile" === e ? c = v.g : "saved" === e ? c = h.f : "hubSolutions" === e && (c = m.f),
                                                r({
                                                    type: c,
                                                    payload: o.data.solution
                                                }),
                                                r(Object(p.a)({
                                                    type: "success",
                                                    message: "Done!"
                                                })),
                                                n.next = 13;
                                            break;
                                        case 10:
                                            n.prev = 10,
                                                n.t0 = n.catch(1),
                                                r(Object(p.a)({
                                                    type: "error",
                                                    message: n.t0.response.data.message
                                                }));
                                        case 13:
                                        case "end":
                                            return n.stop()
                                    }
                            }
                        ), n, null, [[1, 10]])
                    }
                )));
                return function(t) {
                    return n.apply(this, arguments)
                }
            }()
        }
            , x = function(t, e) {
            return function() {
                var n = Object(c.a)(a.a.mark((function n(r) {
                        var c, o;
                        return a.a.wrap((function(n) {
                                for (; ; )
                                    switch (n.prev = n.next) {
                                        case 0:
                                            return c = null,
                                                n.prev = 1,
                                                n.next = 4,
                                                u.a.post("".concat(i.a.REST_API_URL, "/solutions/").concat(t, "/bookmark"));
                                        case 4:
                                            o = n.sent,
                                                "solutions" === e ? c = d.a : "solution" === e ? c = d.b : "profile" === e ? c = v.a : "saved" === e ? c = h.g : "hubSolutions" === e && (c = m.a),
                                                r({
                                                    type: c,
                                                    payload: o.data.solution
                                                }),
                                                r(Object(p.a)({
                                                    type: "success",
                                                    message: "Done!"
                                                })),
                                                r(Object(f.b)()),
                                                n.next = 14;
                                            break;
                                        case 11:
                                            n.prev = 11,
                                                n.t0 = n.catch(1),
                                                r(Object(p.a)({
                                                    type: "error",
                                                    message: n.t0.response.data.message
                                                }));
                                        case 14:
                                        case "end":
                                            return n.stop()
                                    }
                            }
                        ), n, null, [[1, 11]])
                    }
                )));
                return function(t) {
                    return n.apply(this, arguments)
                }
            }()
        }
            , R = function(t) {
            return function() {
                var e = Object(c.a)(a.a.mark((function e(n) {
                        var r;
                        return a.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0,
                                                e.next = 3,
                                                u.a.post("".concat(i.a.REST_API_URL, "/comments"), t);
                                        case 3:
                                            return r = e.sent,
                                                n(Object(p.a)({
                                                    type: "success",
                                                    message: "Thanks for commenting!"
                                                })),
                                                e.abrupt("return", n({
                                                    type: d.d,
                                                    payload: r.data.comment
                                                }));
                                        case 8:
                                            e.prev = 8,
                                                e.t0 = e.catch(0),
                                                n(Object(p.a)({
                                                    type: "error",
                                                    message: "Oops, something went wrong creating your comment. Please try again."
                                                }));
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e, null, [[0, 8]])
                    }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        }
            , L = function(t, e) {
            return function() {
                var n = Object(c.a)(a.a.mark((function n(r) {
                        var c;
                        return a.a.wrap((function(n) {
                                for (; ; )
                                    switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0,
                                                n.next = 3,
                                                u.a.put("".concat(i.a.REST_API_URL, "/comments/").concat(t), e);
                                        case 3:
                                            c = n.sent,
                                                r({
                                                    type: d.o,
                                                    payload: c.data.comment
                                                }),
                                                r(Object(p.a)({
                                                    type: "success",
                                                    message: "Comment updated"
                                                })),
                                                n.next = 11;
                                            break;
                                        case 8:
                                            n.prev = 8,
                                                n.t0 = n.catch(0),
                                                r(Object(p.a)({
                                                    type: "error",
                                                    message: "Oops, something went wrong updating your comment. Please try again."
                                                }));
                                        case 11:
                                        case "end":
                                            return n.stop()
                                    }
                            }
                        ), n, null, [[0, 8]])
                    }
                )));
                return function(t) {
                    return n.apply(this, arguments)
                }
            }()
        }
            , S = function(t) {
            return function() {
                var e = Object(c.a)(a.a.mark((function e(n) {
                        var r;
                        return a.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0,
                                                e.next = 3,
                                                u.a.delete("".concat(i.a.REST_API_URL, "/comments/").concat(t));
                                        case 3:
                                            (r = e.sent).data ? n({
                                                type: d.o,
                                                payload: r.data.comment
                                            }) : n({
                                                type: d.f,
                                                payload: {
                                                    _id: t
                                                }
                                            }),
                                                n(Object(p.a)({
                                                    type: "success",
                                                    message: "Comment deleted"
                                                })),
                                                e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8,
                                                e.t0 = e.catch(0),
                                                n(Object(p.a)({
                                                    type: "error",
                                                    message: e.t0.response.data.message
                                                }));
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e, null, [[0, 8]])
                    }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        }
            , j = function(t, e) {
            return function() {
                var n = Object(c.a)(a.a.mark((function n(r) {
                        var c, o;
                        return a.a.wrap((function(n) {
                                for (; ; )
                                    switch (n.prev = n.next) {
                                        case 0:
                                            return c = null,
                                                n.prev = 1,
                                                n.next = 4,
                                                u.a.post("".concat(i.a.REST_API_URL, "/comments/").concat(t, "/upvote"));
                                        case 4:
                                            return o = n.sent,
                                                c = "communityFeedback" === e ? O.d : "profileComment" === e ? v.j : d.q,
                                                r({
                                                    type: c,
                                                    payload: o.data.comment
                                                }),
                                                r(Object(p.a)({
                                                    type: "success",
                                                    message: o.data.message
                                                })),
                                                n.abrupt("return", !0);
                                        case 11:
                                            n.prev = 11,
                                                n.t0 = n.catch(1),
                                                r(Object(p.a)({
                                                    type: "error",
                                                    message: n.t0.response.data.message
                                                }));
                                        case 14:
                                        case "end":
                                            return n.stop()
                                    }
                            }
                        ), n, null, [[1, 11]])
                    }
                )));
                return function(t) {
                    return n.apply(this, arguments)
                }
            }()
        }
            , N = function(t) {
            return function() {
                var e = Object(c.a)(a.a.mark((function e(n) {
                        var r;
                        return a.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0,
                                                e.next = 3,
                                                u.a.post("".concat(i.a.REST_API_URL, "/comments/").concat(t, "/helpful"));
                                        case 3:
                                            r = e.sent,
                                                n({
                                                    type: d.l,
                                                    payload: r.data.comment
                                                }),
                                                n(Object(p.a)({
                                                    type: "success",
                                                    message: r.data.message
                                                })),
                                                e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8,
                                                e.t0 = e.catch(0),
                                                n(Object(p.a)({
                                                    type: "error",
                                                    message: e.t0.response.data.message
                                                }));
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e, null, [[0, 8]])
                    }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        }
            , k = function(t) {
            return function() {
                var e = Object(c.a)(a.a.mark((function e(n) {
                        var r;
                        return a.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0,
                                                e.next = 3,
                                                u.a.post("".concat(i.a.REST_API_URL, "/solutions/").concat(t, "/screenshot"));
                                        case 3:
                                            r = e.sent,
                                                fathom.trackGoal("VXGUR68G", 0),
                                                n({
                                                    type: d.p,
                                                    payload: r.data.solution
                                                }),
                                                n(Object(f.b)()),
                                                setTimeout((function() {
                                                        n(Object(p.a)({
                                                            type: "success",
                                                            message: "New screenshot created"
                                                        }))
                                                    }
                                                ), 200),
                                                e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10,
                                                e.t0 = e.catch(0),
                                                n(Object(p.a)({
                                                    type: "error",
                                                    message: "Sorry, we didn't manage to create a new screenshot. Please try again."
                                                }));
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e, null, [[0, 10]])
                    }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        }
    },
    DIQ9: function(t, e, n) {
        "use strict";
        n.d(e, "c", (function() {
                return r
            }
        )),
            n.d(e, "b", (function() {
                    return a
                }
            )),
            n.d(e, "d", (function() {
                    return c
                }
            )),
            n.d(e, "a", (function() {
                    return o
                }
            ));
        var r = "GET_TOP_USERS"
            , a = "GET_COMMUNITY_FEEDBACK"
            , c = "UPVOTE_COMMUNITY_COMMENT"
            , o = "DOWNVOTE_COMMUNITY_COMMENT"
    },
    FyoO: function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
                return h
            }
        )),
            n.d(e, "e", (function() {
                    return m
                }
            )),
            n.d(e, "g", (function() {
                    return O
                }
            )),
            n.d(e, "h", (function() {
                    return v
                }
            )),
            n.d(e, "f", (function() {
                    return y
                }
            )),
            n.d(e, "d", (function() {
                    return b
                }
            )),
            n.d(e, "c", (function() {
                    return g
                }
            )),
            n.d(e, "a", (function() {
                    return _
                }
            ));
        var r = n("vJKn")
            , a = n.n(r)
            , c = n("rg98")
            , o = n("vDqi")
            , u = n.n(o)
            , s = n("8cHP")
            , i = n("FWZJ")
            , p = n("Od/X")
            , f = n("USnQ")
            , l = n("n/Mz")
            , d = n("qUN7")
            , h = function(t) {
            return function() {
                var e = Object(c.a)(a.a.mark((function e(n) {
                        var r;
                        return a.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0,
                                                e.next = 3,
                                                u.a.post("".concat(p.a.REST_API_URL, "/challenges"), t);
                                        case 3:
                                            r = e.sent,
                                                s.Router.pushRoute("/challenges/".concat(r.data.slug)),
                                                n(Object(f.a)({
                                                    type: "success",
                                                    message: "Challenge successfully created!"
                                                })),
                                                e.next = 11;
                                            break;
                                        case 8:
                                            throw e.prev = 8,
                                                e.t0 = e.catch(0),
                                                new Error(e.t0);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e, null, [[0, 8]])
                    }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        }
            , m = function(t) {
            return function() {
                var e = Object(c.a)(a.a.mark((function e(n) {
                        var r;
                        return a.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0,
                                                e.next = 3,
                                                u.a.get("".concat(p.a.REST_API_URL, "/challenges/").concat(t));
                                        case 3:
                                            r = e.sent,
                                                n({
                                                    type: l.c,
                                                    payload: r.data
                                                }),
                                                e.next = 10;
                                            break;
                                        case 7:
                                            throw e.prev = 7,
                                                e.t0 = e.catch(0),
                                                new Error(e.t0);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e, null, [[0, 7]])
                    }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        }
            , O = function(t, e) {
            return function() {
                var n = Object(c.a)(a.a.mark((function n(r) {
                        var c;
                        return a.a.wrap((function(n) {
                                for (; ; )
                                    switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0,
                                                n.next = 3,
                                                u.a.get("".concat(p.a.REST_API_URL, "/challenges"), {
                                                    params: {
                                                        limit: t,
                                                        types: e
                                                    }
                                                });
                                        case 3:
                                            c = n.sent,
                                                r({
                                                    type: l.d,
                                                    payload: c.data
                                                }),
                                                n.next = 10;
                                            break;
                                        case 7:
                                            throw n.prev = 7,
                                                n.t0 = n.catch(0),
                                                new Error(n.t0);
                                        case 10:
                                        case "end":
                                            return n.stop()
                                    }
                            }
                        ), n, null, [[0, 7]])
                    }
                )));
                return function(t) {
                    return n.apply(this, arguments)
                }
            }()
        }
            , v = function(t, e) {
            return function() {
                var n = Object(c.a)(a.a.mark((function n(r) {
                        var c;
                        return a.a.wrap((function(n) {
                                for (; ; )
                                    switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0,
                                                n.next = 3,
                                                u.a.put("".concat(p.a.REST_API_URL, "/challenges/").concat(t), e);
                                        case 3:
                                            c = n.sent,
                                                r({
                                                    type: l.g,
                                                    payload: c.data
                                                }),
                                                r(Object(f.a)({
                                                    type: "success",
                                                    message: "Challenge successfully updated!"
                                                })),
                                                n.next = 11;
                                            break;
                                        case 8:
                                            throw n.prev = 8,
                                                n.t0 = n.catch(0),
                                                new Error(n.t0);
                                        case 11:
                                        case "end":
                                            return n.stop()
                                    }
                            }
                        ), n, null, [[0, 8]])
                    }
                )));
                return function(t) {
                    return n.apply(this, arguments)
                }
            }()
        }
            , y = function(t, e) {
            var n = e.limit
                , r = e.offset;
            return function() {
                var e = Object(c.a)(a.a.mark((function e(c) {
                        var o;
                        return a.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0,
                                                e.next = 3,
                                                u.a.get("".concat(p.a.REST_API_URL, "/challenges/").concat(t, "/solutions?limit=").concat(n, "&offset=").concat(r));
                                        case 3:
                                            o = e.sent,
                                                c({
                                                    type: l.e,
                                                    payload: o.data.solutions,
                                                    reset: 0 === r
                                                }),
                                                e.next = 9;
                                            break;
                                        case 7:
                                            e.prev = 7,
                                                e.t0 = e.catch(0);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e, null, [[0, 7]])
                    }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        }
            , b = function(t) {
            return function() {
                var e = Object(c.a)(a.a.mark((function e(n) {
                        var r;
                        return a.a.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0,
                                                e.next = 3,
                                                u.a.get("".concat(p.a.REST_API_URL, "/challenges/").concat(t, "/starter"));
                                        case 3:
                                            r = e.sent,
                                                Object(i.c)(r.data.downloadUrl),
                                                e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7,
                                                e.t0 = e.catch(0),
                                                n(Object(f.a)({
                                                    type: "error",
                                                    message: "Unable to start the challenge. Please try again and contact us if the issue persists."
                                                }));
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                        ), e, null, [[0, 7]])
                    }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        }
            , g = function(t, e) {
            return function() {
                var n = Object(c.a)(a.a.mark((function n(r) {
                        var c;
                        return a.a.wrap((function(n) {
                                for (; ; )
                                    switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0,
                                                n.next = 3,
                                                u.a.get("".concat(p.a.REST_API_URL, "/challenges/").concat(t, "/design?type=").concat(e));
                                        case 3:
                                            c = n.sent,
                                                r({
                                                    type: d.n
                                                }),
                                                Object(i.c)(c.data.downloadUrl),
                                                n.next = 11;
                                            break;
                                        case 8:
                                            n.prev = 8,
                                                n.t0 = n.catch(0),
                                                r(Object(f.a)({
                                                    type: "error",
                                                    message: n.t0.response ? n.t0.response.data.message : "Sorry, we couldn't download the design. Please try again and contact us if the issue continues."
                                                }));
                                        case 11:
                                        case "end":
                                            return n.stop()
                                    }
                            }
                        ), n, null, [[0, 8]])
                    }
                )));
                return function(t) {
                    return n.apply(this, arguments)
                }
            }()
        }
            , _ = function() {
            return {
                type: l.b
            }
        }
    },
    "db/H": function(t, e, n) {
        "use strict";
        n.d(e, "e", (function() {
                return r
            }
        )),
            n.d(e, "c", (function() {
                    return a
                }
            )),
            n.d(e, "d", (function() {
                    return c
                }
            )),
            n.d(e, "f", (function() {
                    return o
                }
            )),
            n.d(e, "j", (function() {
                    return u
                }
            )),
            n.d(e, "b", (function() {
                    return s
                }
            )),
            n.d(e, "g", (function() {
                    return i
                }
            )),
            n.d(e, "a", (function() {
                    return p
                }
            )),
            n.d(e, "h", (function() {
                    return f
                }
            )),
            n.d(e, "i", (function() {
                    return l
                }
            ));
        var r = "GET_USER_COUNT"
            , a = "GET_USER"
            , c = "GET_USER_COMMENTS"
            , o = "GET_USER_SOLUTIONS"
            , u = "UPVOTE_PROFILE_COMMENT"
            , s = "DOWNVOTE_PROFILE_COMMENT"
            , i = "LIKE_USER_SOLUTION"
            , p = "BOOKMARK_USER_SOLUTION"
            , f = "SET_LOADING"
            , l = "SET_LOADING_MESSAGE"
    },
    "n/Mz": function(t, e, n) {
        "use strict";
        n.d(e, "c", (function() {
                return r
            }
        )),
            n.d(e, "d", (function() {
                    return a
                }
            )),
            n.d(e, "e", (function() {
                    return c
                }
            )),
            n.d(e, "g", (function() {
                    return o
                }
            )),
            n.d(e, "b", (function() {
                    return u
                }
            )),
            n.d(e, "f", (function() {
                    return s
                }
            )),
            n.d(e, "a", (function() {
                    return i
                }
            ));
        var r = "GET_CHALLENGE"
            , a = "GET_CHALLENGES"
            , c = "GET_CHALLENGE_SOLUTIONS"
            , o = "UPDATE_CHALLENGE"
            , u = "CLEAR_CHALLENGE"
            , s = "LIKE_HUB_SOLUTION"
            , i = "BOOKMARK_HUB_SOLUTION"
    },
    qUN7: function(t, e, n) {
        "use strict";
        n.d(e, "c", (function() {
                return r
            }
        )),
            n.d(e, "e", (function() {
                    return a
                }
            )),
            n.d(e, "h", (function() {
                    return c
                }
            )),
            n.d(e, "i", (function() {
                    return o
                }
            )),
            n.d(e, "p", (function() {
                    return u
                }
            )),
            n.d(e, "d", (function() {
                    return s
                }
            )),
            n.d(e, "o", (function() {
                    return i
                }
            )),
            n.d(e, "f", (function() {
                    return p
                }
            )),
            n.d(e, "q", (function() {
                    return f
                }
            )),
            n.d(e, "g", (function() {
                    return l
                }
            )),
            n.d(e, "l", (function() {
                    return d
                }
            )),
            n.d(e, "k", (function() {
                    return h
                }
            )),
            n.d(e, "b", (function() {
                    return m
                }
            )),
            n.d(e, "j", (function() {
                    return O
                }
            )),
            n.d(e, "a", (function() {
                    return v
                }
            )),
            n.d(e, "n", (function() {
                    return y
                }
            )),
            n.d(e, "m", (function() {
                    return b
                }
            ));
        var r = "CLEAR_SOLUTION"
            , a = "CREATE_SOLUTION"
            , c = "GET_SOLUTION"
            , o = "GET_SOLUTIONS"
            , u = "UPDATE_SOLUTION"
            , s = "CREATE_COMMENT"
            , i = "UPDATE_COMMENT"
            , p = "DELETE_COMMENT"
            , f = "UPVOTE_COMMENT"
            , l = "DOWNVOTE_COMMENT"
            , d = "MARK_COMMENT_HELPFUL"
            , h = "LIKE_SOLUTION"
            , m = "BOOKMARK_SOLUTION"
            , O = "LIKE_INDEX_SOLUTION"
            , v = "BOOKMARK_INDEX_SOLUTION"
            , y = "UNLOCK_DESIGN"
            , b = "UNLOCK_CHALLENGE_SOLUTIONS"
    }
}]);
//# sourceMappingURL=c3d598c39eaf0ede8784984ddc3c1aca7a8f1f22.6275036f4d37b9a77d47.js.map
