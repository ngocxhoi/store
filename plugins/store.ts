export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      globalStore: useMyGlobalStore(),
    },
  };
});
