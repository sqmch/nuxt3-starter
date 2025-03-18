// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    // '@nuxtjs/supabase',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
  ],
  // supabase: {
  //   redirect: false,
  // },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})
