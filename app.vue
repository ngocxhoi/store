<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
useHead({
  titleTemplate(title): any {
    return title ? `${title} | ${appConfig.title}` : appConfig.title;
  },
});
</script>
