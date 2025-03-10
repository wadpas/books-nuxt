// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true, componentInspector: false },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/color-mode', 'nuxt-auth-utils', '@nuxt/icon', '@nuxt/image'],
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    '/': {
      // Temporary redirect using a 307 status code
      redirect: '/books',
    },
    '/auth': {
      // Temporary redirect using a 307 status code
      redirect: '/auth/login',
    },
  },
})
