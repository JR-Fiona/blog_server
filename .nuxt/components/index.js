export { default as Catalog } from '../../components/Catalog.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as MyBlockquote } from '../../components/MyBlockquote.vue'
export { default as Navigation } from '../../components/Navigation.vue'

export const LazyCatalog = import('../../components/Catalog.vue' /* webpackChunkName: "components/Catalog'}" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo'}" */).then(c => c.default || c)
export const LazyMyBlockquote = import('../../components/MyBlockquote.vue' /* webpackChunkName: "components/MyBlockquote'}" */).then(c => c.default || c)
export const LazyNavigation = import('../../components/Navigation.vue' /* webpackChunkName: "components/Navigation'}" */).then(c => c.default || c)
