import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _59bb389d = () => interopDefault(import('..\\pages\\editor.vue' /* webpackChunkName: "pages/editor" */))
const _1d7d1d1f = () => interopDefault(import('..\\pages\\markdown.vue' /* webpackChunkName: "pages/markdown" */))
const _56fb0e0a = () => interopDefault(import('..\\pages\\diary\\20200803.vue' /* webpackChunkName: "pages/diary/20200803" */))
const _e7e8e064 = () => interopDefault(import('..\\pages\\diary\\20200906.vue' /* webpackChunkName: "pages/diary/20200906" */))
const _30877c52 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _59bb389d,
    name: "editor"
  }, {
    path: "/markdown",
    component: _1d7d1d1f,
    name: "markdown"
  }, {
    path: "/diary/20200803",
    component: _56fb0e0a,
    name: "diary-20200803"
  }, {
    path: "/diary/20200906",
    component: _e7e8e064,
    name: "diary-20200906"
  }, {
    path: "/",
    component: _30877c52,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
