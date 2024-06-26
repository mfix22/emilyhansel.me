/* eslint-disable */

/**
 * Pure JavaScript implementation of zoom.js.
 *
 * Original preamble:
 * zoom.js - It's the best way to zoom an image
 * @version v0.0.2
 * @link https://github.com/fat/zoom.js
 * @license MIT
 *
 * This is a fork of the original zoom.js implementation by @fat.
 * Copyrights for the original project are held by @fat. All other copyright
 * for changes in the fork are held by Nishanth Shanmugham.
 *
 * Copyright (c) 2013 @fat
 * The MIT License. Copyright © 2016 Nishanth Shanmugham.
 */
!(function () {
  'use strict'
  function t(t, e) {
    if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
  }
  var e = (function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n]
        ;(i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i)
      }
    }
    return function (e, n, i) {
      return n && t(e.prototype, n), i && t(e, i), e
    }
  })()
  !(function (t) {
    function e(i) {
      if (n[i]) return n[i].exports
      var o = (n[i] = { i: i, l: !1, exports: {} })
      return t[i].call(o.exports, o, o.exports, e), (o.l = !0), o.exports
    }
    var n = {}
    return (
      (e.m = t),
      (e.c = n),
      (e.i = function (t) {
        return t
      }),
      (e.d = function (t, n, i) {
        e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: i })
      }),
      (e.n = function (t) {
        var n =
          t && t.__esModule
            ? function () {
                return t.default
              }
            : function () {
                return t
              }
        return e.d(n, 'a', n), n
      }),
      (e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }),
      (e.p = ''),
      e((e.s = 3))
    )
  })([
    function (t, e, n) {
      n.d(e, 'a', function () {
        return i
      }),
        n.d(e, 'b', function () {
          return o
        }),
        n.d(e, 'c', function () {
          return r
        }),
        n.d(e, 'd', function () {
          return a
        })
      var i = function () {
          return document.documentElement.clientWidth
        },
        o = function () {
          return document.documentElement.clientHeight
        },
        r = function (t) {
          var e = t.getBoundingClientRect(),
            n = document.documentElement,
            i = window
          return {
            top: e.top + i.pageYOffset - n.clientTop,
            left: e.left + i.pageXOffset - n.clientLeft,
          }
        },
        a = function (t, e, n) {
          var i = function t(i) {
            i.target.removeEventListener(e, t), n()
          }
          t.addEventListener(e, i)
        }
    },
    function (t, e, n) {
      var i = n(2),
        o = n(0)
      n.d(e, 'a', function () {
        return w
      })
      var r = null,
        a = 80,
        s = -1,
        u = -1,
        c = function (t) {
          t.addEventListener('click', l)
        },
        l = function (t) {
          return document.body.classList.contains('zoom-overlay-open')
            ? void 0
            : t.metaKey || t.ctrlKey
            ? void window.open(t.target.getAttribute('data-original') || t.target.src, '_blank')
            : void (
                t.target.width >= n.i(o.a)() - a ||
                (d(!0), (r = new i.a(t.target, a)), r.zoom(), m())
              )
        },
        d = function (t) {
          null != r && (t ? r.dispose() : r.close(), f(), (r = null))
        },
        m = function () {
          document.addEventListener('scroll', h),
            document.addEventListener('keyup', v),
            document.addEventListener('touchstart', p),
            document.addEventListener('click', y, !0)
        },
        f = function () {
          document.removeEventListener('scroll', h),
            document.removeEventListener('keyup', v),
            document.removeEventListener('touchstart', p),
            document.removeEventListener('click', y, !0)
        },
        h = function () {
          ;-1 == s && (s = window.pageYOffset)
          var t = Math.abs(s - window.pageYOffset)
          t >= 40 && d()
        },
        v = function (t) {
          27 == t.keyCode && d()
        },
        p = function (t) {
          var e = t.touches[0]
          null != e && ((u = e.pageY), t.target.addEventListener('touchmove', g))
        },
        g = function t(e) {
          var n = e.touches[0]
          null != n &&
            Math.abs(n.pageY - u) > 10 &&
            (d(), e.target.removeEventListener('touchmove', t))
        },
        y = function () {
          d()
        },
        w = Object.create(null)
      w.setup = c
    },
    function (n, i, o) {
      var r = o(0),
        a = function e(n, i) {
          t(this, e), (this.w = n), (this.h = i)
        },
        s = (function () {
          function n(e, i) {
            t(this, n),
              (this.img = e),
              (this.preservedTransform = e.style.transform),
              (this.wrap = null),
              (this.overlay = null),
              (this.offset = i)
          }
          return (
            e(n, [
              {
                key: 'forceRepaint',
                value: function () {
                  this.img.offsetWidth
                },
              },
              {
                key: 'zoom',
                value: function () {
                  var t = new a(this.img.naturalWidth, this.img.naturalHeight)
                  ;(this.wrap = document.createElement('div')),
                    this.wrap.classList.add('zoom-img-wrap'),
                    this.img.parentNode.insertBefore(this.wrap, this.img),
                    this.wrap.appendChild(this.img),
                    this.img.classList.add('zoom-img'),
                    this.img.setAttribute('data-action', 'zoom-out'),
                    (this.overlay = document.createElement('div')),
                    this.overlay.classList.add('zoom-overlay'),
                    document.body.appendChild(this.overlay),
                    this.forceRepaint()
                  var e = this.calculateScale(t)
                  this.forceRepaint(),
                    this.animate(e),
                    document.body.classList.add('zoom-overlay-open')
                },
              },
              {
                key: 'calculateScale',
                value: function (t) {
                  var e = t.w / this.img.width,
                    n = o.i(r.a)() - this.offset,
                    i = o.i(r.b)() - this.offset,
                    a = t.w / t.h,
                    s = n / i
                  return t.w < n && t.h < i ? e : s > a ? (i / t.h) * e : (n / t.w) * e
                },
              },
              {
                key: 'animate',
                value: function (t) {
                  var e = o.i(r.c)(this.img),
                    n = window.pageYOffset,
                    i = o.i(r.a)() / 2,
                    a = n + o.i(r.b)() / 2,
                    s = e.left + this.img.width / 2,
                    u = e.top + this.img.height / 2,
                    c = i - s,
                    l = a - u,
                    d = 0,
                    m = 'scale(' + t + ')',
                    f = 'translate3d(' + c + 'px, ' + l + 'px, ' + d + 'px)'
                  ;(this.img.style.transform = m), (this.wrap.style.transform = f)
                },
              },
              {
                key: 'dispose',
                value: function () {
                  null != this.wrap &&
                    null != this.wrap.parentNode &&
                    (this.img.classList.remove('zoom-img'),
                    this.img.setAttribute('data-action', 'zoom'),
                    this.wrap.parentNode.insertBefore(this.img, this.wrap),
                    this.wrap.parentNode.removeChild(this.wrap),
                    document.body.removeChild(this.overlay),
                    document.body.classList.remove('zoom-overlay-transitioning'))
                },
              },
              {
                key: 'close',
                value: function () {
                  var t = this
                  document.body.classList.add('zoom-overlay-transitioning'),
                    (this.img.style.transform = this.preservedTransform),
                    0 === this.img.style.length && this.img.removeAttribute('style'),
                    (this.wrap.style.transform = 'none'),
                    o.i(r.d)(this.img, 'transitionend', function () {
                      t.dispose(), document.body.classList.remove('zoom-overlay-open')
                    })
                },
              },
            ]),
            n
          )
        })()
      i.a = s
    },
    function (t, e, n) {
      Object.defineProperty(e, '__esModule', { value: !0 })
      var i = n(1)
      document.addEventListener('DOMContentLoaded', function () {
        for (var t = document.querySelectorAll("img[data-action='zoom']"), e = 0; e < t.length; e++)
          i.a.setup(t[e])
      })
    },
  ])
})()
