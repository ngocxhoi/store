// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "@nuxt/image", "@pinia/nuxt"],

  appConfig: {
    ui: {
      primary: "red",
    },
    title: "Htore",
  },
});
