// https://v3.nuxtjs.org/api/configuration/nuxt.config
import "./server/tracing";

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'Sample Nuxt App',
      meta: [
        {name: 'description', content: 'Everything about Nuxt 3'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  // serverInit() {
  //   if (process.server) {
  //     require('./server/tracing.js');
  //   }
  // }
})
