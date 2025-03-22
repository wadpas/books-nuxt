// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true, componentInspector: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    'nuxt-auth-utils',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/cloudinary',
  ],
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    '/auth': {
      // Temporary redirect using a 307 status code
      redirect: '/auth/login',
    },
    '/': {
      // Temporary redirect using a 307 status code
      redirect: '/books',
    },
    '/admin': {
      // Temporary redirect using a 307 status code
      redirect: '/admin/books',
    },
  },
  runtimeConfig: {
    stripeSecret: process.env.NUXT_PUBLIC_STRIPE_KEY,
    stripeWebhookSecret: process.env.NUXT_STRIPE_WEBHOOK_SECRET,
    public: {
      cloudinaryCloudName: '',
      uploadPreset: process.env.NUXT_PUBLIC_UPLOAD_PRESET,
      stripeKey: '',
    },
  },
})
