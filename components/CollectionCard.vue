<template>
  <div class="relative w-full overflow-hidden rounded-lg">
    <NuxtImg
      loading="lazy"
      :src="collectionCard.imgSrc"
      class="hover:scale-110 transition-transform duration-300 w-full"
    />
    <h1
      class="absolute bottom-5 text-3xl font-serif font-bold left-1/2 -translate-x-1/2 pointer-events-none text-nowrap"
    >
      {{ collectionCard.title }}
    </h1>
  </div>
</template>

<script lang="ts" setup>
import type { CollectionCard } from "~/types/CollectionCard";

const props = defineProps<{
  collectionCard: CollectionCard;
}>();

const { collectionCard } = toRefs(props);
</script>
