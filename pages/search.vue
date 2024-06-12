<template>
  <CategoryLayout>
    <section id="Products" class="my-10">
      <div class="w-full grid grid-cols-12 gap-8">
        <ProductCard
          v-for="el in card"
          :card="el"
          class="col-span-6 lg:col-span-4"
        />
      </div>

      <div class="w-full flex justify-center my-20">
        <button
          class="text-xl font-semibold border border-gray-600 rounded-2xl py-3 px-8 hover:bg-gray-200"
        >
          Load More
        </button>
      </div>
    </section>
  </CategoryLayout>
</template>

<script setup lang="ts">
import CategoryLayout from "~/layouts/CategoryLayout.vue";
import type { Card } from "~/types/card";
import Men from "~/data/Total/Men.json";
import Women from "~/data/Total/Women.json";
import Kids from "~/data/Total/Kids.json";
import Wellness from "~/data/Total/Wellness.json";

const { $globalStore } = useNuxtApp();
const { searchValue } = storeToRefs($globalStore);

useSeoMeta({
  title: "Search",
});

const card = computed(() => [...Men, ...Kids, ...Wellness, ...Women]);
</script>

<style></style>
