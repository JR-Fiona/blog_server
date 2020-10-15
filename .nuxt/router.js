import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7a0ea6c3 = () => interopDefault(import('../pages/editor.vue' /* webpackChunkName: "pages/editor" */))
const _4b249e0e = () => interopDefault(import('../pages/markdow.vue' /* webpackChunkName: "pages/markdow" */))
const _793f8e29 = () => interopDefault(import('../pages/diary/20200803.vue' /* webpackChunkName: "pages/diary/20200803" */))
const _a35fe026 = () => interopDefault(import('../pages/diary/20200906.vue' /* webpackChunkName: "pages/diary/20200906" */))
const _529ab16c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/editor",
    component: _7a0ea6c3,
    name: "editor"
  }, {
    path: "/markdow",
    component: _4b249e0e,
    name: "markdow"
  }, {
    path: "/diary/20200803",
    component: _793f8e29,
    name: "diary-20200803"
  }, {
    path: "/diary/20200906",
    component: _a35fe026,
    name: "diary-20200906"
  }, {
    path: "/",
    component: _529ab16c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
