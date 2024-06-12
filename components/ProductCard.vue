<template>
  <div>
    <div
      @mouseover="isHover = true"
      @mouseleave="isHover = false"
      class="relative w-full overflow-hidden group"
    >
      <p
        class="absolute top-5 left-5 z-10 px-4 py-1 rounded-full text-white bg-gray-800 text-sm"
      >
        New
      </p>
      <NuxtImg
        loading="lazy"
        :src="card?.imgSrc"
        :alt="card?.title"
        class="w-full transition-transform duration-300"
        :class="[isHover && 'scale-110']"
      />
      <div
        class="absolute top-5 right-5 z-10 transition-opacity opacity-0 group-hover:opacity-100 duration-300"
      >
        <div
          class="h-8 w-8 cursor-pointer flex items-center justify-center rounded-lg bg-gray-100"
        >
          <Icon name="mdi:heart-outline" size="24" class="text-gray-800" />
        </div>
        <div
          class="mt-2 h-8 w-8 cursor-pointer flex items-center justify-center rounded-lg bg-gray-100"
        >
          <Icon name="mdi:compare-horizontal" size="24" class="text-gray-800" />
        </div>
      </div>

      <button
        @click="
          selectedProduct = card;
          navigateTo(`/product/${card.title}`);
        "
        class="bg-white text-gray-800 h-10 w-1/2 absolute transition-all group-hover:bottom-5 -bottom-full left-1/2 -translate-x-1/2 rounded-full font-semibold duration-300"
      >
        Add to cart
      </button>
    </div>

    <div class="mt-4">
      <h1
        class="text-gray-800 dark:text-gray-100 text-xl font-semibold my-2 cursor-pointer"
      >
        {{ card?.title }}
      </h1>
      <p v-if="!Boolean(card.newPrice)">
        <span class="font-semibold text-gray-400 mr-2">As low as</span>
        <strong class="text-lg">${{ card?.price }}</strong>
      </p>
      <p v-else>
        <span class="font-semibold text-gray-400 mr-2 line-through">{{
          card.price
        }}</span>
        <strong class="text-lg">${{ card.newPrice }}</strong>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Card } from "~/types/card";

const { $globalStore } = useNuxtApp();
const { selectedProduct } = storeToRefs($globalStore);

const props = defineProps<{
  card: Card;
}>();

const { card } = toRefs(props);

const isHover = ref(false);
</script>
