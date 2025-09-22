(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3046],
  {
    23337: function (e, t, n) {
      "use strict";
      var r = n(50029),
        i = n(87794),
        o = n.n(i),
        a = n(34447),
        c = n(49647),
        s = n(67294),
        l = n(2453),
        p = n(33299),
        u = n(11163),
        h = n(71725),
        d = n(85893);
      t.Z = function (e) {
        var t,
          n = e.templateId,
          i = e.position,
          f = e.size,
          v = void 0 === f ? "medium" : f,
          x = e.isBlock,
          m = e.color,
          b = void 0 === m ? "#ff4d6d" : m,
          g = (0, s.useState)(!1),
          w = g[0],
          y = g[1],
          j = "authenticated" === (0, p.useSession)().status,
          O = (0, u.useRouter)(),
          k = (0, h.M)(),
          P = k.initializeFavorites,
          z = k.toggleFavorite,
          T = k.isFavorite;
        (0, s.useEffect)(
          function () {
            j && P();
          },
          [j, P]
        );
        var _ =
            ((t = (0, r.Z)(
              o().mark(function e() {
                var t;
                return o().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!w) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          if (j) {
                            e.next = 6;
                            break;
                          }
                          return (
                            l.ZP.error("Vui l\xf2ng đăng nhập để th\xeam v\xe0o danh s\xe1ch y\xeau th\xedch"),
                            O.push("/login?redirect=".concat(O.asPath)),
                            e.abrupt("return")
                          );
                        case 6:
                          return y(!0), (e.prev = 7), (t = T(n)), (e.next = 11), z(n);
                        case 11:
                          e.sent
                            ? l.ZP.success(t ? "Đ\xe3 x\xf3a khỏi danh s\xe1ch y\xeau th\xedch" : "Đ\xe3 th\xeam v\xe0o danh s\xe1ch y\xeau th\xedch")
                            : l.ZP.error("Kh\xf4ng thể cập nhật trạng th\xe1i y\xeau th\xedch. Vui l\xf2ng thử lại sau."),
                            (e.next = 19);
                          break;
                        case 15:
                          (e.prev = 15),
                            (e.t0 = e.catch(7)),
                            console.error("Error updating favorite status:", e.t0),
                            l.ZP.error("Đ\xe3 xảy ra lỗi. Vui l\xf2ng thử lại sau.");
                        case 19:
                          return (e.prev = 19), y(!1), e.finish(19);
                        case 22:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[7, 15, 19, 22]]
                );
              })
            )),
            function () {
              return t.apply(this, arguments);
            }),
          E = { small: 20, medium: 24, large: 32 }[v];
        return (0, d.jsx)("button", {
          onClick: _,
          disabled: w,
          className: ""
            .concat(void 0 !== x && x ? "block" : "absolute", " ")
            .concat("small" === v ? "w-8 h-8" : "w-10 h-10", " ")
            .concat(
              { "top-right": "top-3 right-3", "top-left": "top-3 left-3" }[void 0 === i ? "top-right" : i],
              " z-40 flex items-center justify-center bg-white bg-opacity-70 backdrop-blur-sm rounded-full shadow-md hover:bg-opacity-90 transition-all duration-200"
            ),
          "aria-label": T(n) ? "X\xf3a khỏi y\xeau th\xedch" : "Th\xeam v\xe0o y\xeau th\xedch",
          children: T(n) ? (0, d.jsx)(a.Z, { style: { fontSize: E, color: b } }) : (0, d.jsx)(c.Z, { style: { fontSize: E, color: b } }),
        });
      };
    },
    76292: function (e, t, n) {
      "use strict";
      var r = n(19848),
        i = n.n(r);
      n(67294);
      var o = n(85893);
      t.Z = function (e) {
        var t = e.children,
          n = e.containerWidth;
        return (0, o.jsxs)("div", {
          style: { backgroundColor: "#f0f2f5", height: "100vh", width: "100vw", paddingTop: "5vh" },
          className: "jsx-3147566159 pc-container",
          children: [
            (0, o.jsx)("div", {
              style: {
                width: n ? "".concat(n, "px") : "auto",
                height: "90vh",
                margin: "auto",
                position: "relative",
                border: "1px solid #e0e0e0",
                boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                borderRadius: 3,
                overflow: "hidden",
              },
              className: "jsx-3147566159 pc-content",
              children: t,
            }),
            (0, o.jsx)(i(), {
              id: "3147566159",
              children: [
                "#app-view-index{height:100% !important;}",
                ".pc-container #cinelove-toolbar .message-box-button{width:130px;}",
                ".pc-container #cinelove-toolbar .message-box-button,.pc-container #cinelove-toolbar #animation-gift-preview-btn,.pc-container #cinelove-toolbar #cinelove-gift-button,.pc-container #cinelove-toolbar #cinelove-like-button{font-size:12px;height:35px;line-height:35px;border-radius:25px;}",
                ".pc-container #cinelove-toolbar #animation-gift-preview-btn span{font-size:12px;}",
                ".pc-container #cinelove-toolbar #cinelove-like-button,.pc-container #cinelove-toolbar #cinelove-gift-button{width:35px;}",
                ".pc-container .bar-messwin *{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}",
                ".pc-container .bar-gift-new .select-type .option{font-size:17px !important;cursor:pointer;}",
                ".pc-container .bar-gift-new .gift-li .title{font-size:10px !important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;width:70px;}",
                ".pc-container .bar-gift-new .give-tip{font-size:10px !important;}",
                ".pc-container .bar-gift-new .give-username{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}",
                ".pc-container .animate-slide-gift.gift-minibar *{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}",
                ".pc-container #cinelove-canvas-preview,.pc-container #cinelove-canvas{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}",
              ],
            }),
          ],
        });
      };
    },
    57066: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return Z;
          },
        });
      var r = n(4730),
        i = n(59499),
        o = n(16835),
        a = n(50029),
        c = n(87794),
        s = n.n(c),
        l = n(67623),
        p = n(67294),
        u = n(4037),
        h = n.n(u),
        d = n(69260),
        f = n.n(d),
        v = n(71749),
        x = n(93964),
        m = n(76292),
        b = n(39332),
        g = n(46256),
        w = n(2962),
        y = n(26297),
        j = n(30731),
        O = n(83622),
        k = n(23337),
        P = n(92961),
        z = n(9472),
        T = n(85893),
        _ = ["editorViewportWidth"];
      function E(e, t) {
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
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? E(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var Z = !0;
      t.default = function (e) {
        var t = e.templateData,
          n = e.templateId,
          i = e.canonicalUrl,
          c = (0, b.useRouter)(),
          u = (0, g.TN)().setPageId;
        (0, p.useEffect)(
          function () {
            var e;
            u(n),
              ((e = (0, a.Z)(
                s().mark(function e() {
                  return s().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), (0, j.YR)(n);
                          case 3:
                            e.next = 8;
                            break;
                          case 5:
                            (e.prev = 5), (e.t0 = e.catch(0)), console.error("Error tracking template view:", e.t0);
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 5]]
                  );
                })
              )),
              function () {
                return e.apply(this, arguments);
              })();
          },
          [n, c, t.slug]
        );
        var d = JSON.parse(h().decompress(h().decodeBase64(t.templateData))),
          E = (0, p.useState)(!0),
          Z = E[0],
          N = E[1],
          C = (0, p.useState)(d),
          R = C[0],
          L = C[1],
          D = (0, p.useState)(0),
          I = D[0],
          B = D[1];
        (0, p.useEffect)(
          function () {
            var e = function () {
              N(!0);
              var e = parseInt(d.ROOT.props.width),
                t = parseInt(d.ROOT.props.height),
                n = I / e,
                i = Math.max(t * n, 0.9 * window.innerHeight),
                a = Object.entries(d).reduce(function (e, t) {
                  var r = (0, o.Z)(t, 2),
                    i = r[0],
                    a = r[1];
                  if (!a.props) return (e[i] = a), e;
                  var c = S(
                    S({}, a.props),
                    {},
                    {
                      top: a.props.top * n,
                      left: a.props.left * n,
                      width: a.props.width * n,
                      height: a.props.height * n,
                      fontSize: a.props.fontSize * n,
                    }
                  );
                  return (e[i] = S(S({}, a), {}, { props: c })), e;
                }, {}),
                c = d.ROOT.props,
                s = (c.editorViewportWidth, (0, r.Z)(c, _));
              (a.ROOT = S(S({}, d.ROOT), {}, { props: S(S({}, s), {}, { width: I, height: i }) })),
                L(a),
                setTimeout(function () {
                  N(!1);
                }, 1e3);
            };
            return (
              window.addEventListener("resize", e),
              e(),
              function () {
                return window.removeEventListener("resize", e);
              }
            );
          },
          [I]
        ),
          (0, p.useEffect)(function () {
            var e = function () {
              var e = Math.round(0.55 * (0.9 * window.innerHeight));
              e > 500 ? B(500) : B(e);
            };
            return (
              e(),
              window.addEventListener("resize", e),
              function () {
                return window.removeEventListener("resize", e);
              }
            );
          }, []);
        var V = "".concat(t.templateName, " - ").concat((0, z.g)(t.categoryId), " miễn ph\xed");
        return (0, T.jsxs)(T.Fragment, {
          children: [
            (0, T.jsx)(w.PB, {
              title: V,
              titleTemplate: "%s | CineLove",
              defaultTitle: "CineLove",
              description: "".concat(V, " - Thiệp online tr\xean CineLove"),
              canonical: i,
              openGraph: {
                type: "website",
                url: i,
                title: V,
                description: "".concat(V, " - Thiệp online tr\xean CineLove"),
                images: [{ url: t.thumbnail || "/cinelove-default-thumbnail.jpg", width: 1200, height: 630, alt: V }],
                siteName: "CineLove",
              },
              twitter: { handle: "@cinelove", site: "@cinelove", cardType: "summary_large_image" },
            }),
            (0, T.jsx)(m.Z, {
              containerWidth: I,
              children: (0, T.jsx)(x.Z, {
                isTemplatePreview: !0,
                device: "pc",
                pageData: t,
                children: (0, T.jsxs)(y.l, {
                  isProcessing: Z,
                  className: "h-full",
                  scrollSpeed: 0.06,
                  initialDelay: 2e3,
                  rootBackground: R.ROOT.props.backgroundColor,
                  children: [
                    Z &&
                      (0, T.jsx)("div", {
                        className: "absolute inset-0 bg-white z-50 flex items-center justify-center",
                        children: (0, T.jsx)(f(), { animationData: v, loop: !0, style: { width: 200, height: 200 } }),
                      }),
                    (0, T.jsx)(l.ML, { resolver: P.s_, enabled: !1, children: (0, T.jsx)(l.RQ, { data: R }, R.ROOT.props.width) }),
                  ],
                }),
              }),
            }),
          ],
        });
      };
    },
    54443: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/template/pc/[templateSlug]",
        function () {
          return n(57066);
        },
      ]);
    },
  },
  function (e) {
    e.O(
      0,
      [
        2652, 9358, 8706, 741, 6342, 3662, 4321, 3714, 3365, 6660, 4838, 8845, 5970, 8391, 4738, 4817, 594, 711, 509, 2961, 3219, 4106, 296, 8030,
        5870, 2453, 2552, 2567, 9655, 6161, 1390, 4333, 3340, 5017, 4393, 7743, 8499, 5593, 5861, 2352, 1004, 1109, 5518, 1365, 7531, 1473, 93, 221,
        6868, 9104, 2545, 8593, 1476, 818, 6199, 1570, 8534, 4304, 9183, 9774, 2888, 179,
      ],
      function () {
        return e((e.s = 54443));
      }
    ),
      (_N_E = e.O());
  },
]);
