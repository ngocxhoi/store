<template>
  <MainLayout>
    <UCarousel
      v-slot="{ item }"
      :items="carousel"
      :ui="{ item: 'basis-full' }"
      class="rounded-lg overflow-hidden"
      arrows
    >
      <NuxtImg
        :src="item"
        class="w-full min-h-40"
        draggable="false"
        alt="carousel"
      />
    </UCarousel>
    <div class="bg-[#e8edfe] text-center py-6">
      <h1 class="text-xl font-bold font-serif text-black">
        Get UPTO 40% OFF on your 1st order SHOP NOW
      </h1>
    </div>

    <div class="box-border px-0 sm:px-10 md:px-16 lg:px-24 xl:px-28">
      <section class="my-20 flex">
        <div class="mr-10">
          <UAvatar src="/images/type/men.png" size="3xl" />
          <p class="text-lg font-semibold text-center">Men</p>
        </div>
        <div class="mr-10">
          <UAvatar src="/images/type/kids.png" size="3xl" />
          <p class="text-lg font-semibold text-center">Kids</p>
        </div>
        <div class="mr-10">
          <UAvatar src="/images/type/women.png" size="3xl" />
          <p class="text-lg font-semibold text-center">Women</p>
        </div>
        <div class="mr-10">
          <UAvatar src="/images/type/men.png" size="3xl" />
          <p class="text-lg font-semibold text-center">Wellness</p>
        </div>
      </section>

      <section id="Products" class="my-20">
        <div class="w-full flex items-center justify-between mb-10">
          <h1 class="text-3xl font-semibold font-serif">New Products</h1>
          <div>
            <Icon name="mdi:arrow-left" size="40" class="text-gray-600" />
            <Icon
              name="mdi:arrow-right"
              size="40"
              class="ml-10 text-gray-600"
            />
          </div>
        </div>
        <div class="w-full grid grid-cols-12 gap-8">
          <ProductCard
            v-for="el in card"
            :card="el"
            class="col-span-6 md:col-span-4 lg:col-span-3"
          />
        </div>

        <div class="w-full flex justify-center my-20">
          <button
            @click="navigateTo('/search')"
            class="text-xl font-semibold border border-gray-600 rounded-2xl py-3 px-8 hover:bg-gray-200"
          >
            View All
          </button>
        </div>
      </section>

      <section id="Collections">
        <h1 class="text-6xl font-bold font-serif text-center mb-20">
          The game with our <br />
          new additions!
        </h1>

        <div class="w-full grid grid-cols-6 gap-10">
          <CollectionCard
            v-for="card in collectionCard"
            :collectionCard="card"
            class="col-span-6 sm:col-span-3 lg:col-span-2"
          />
        </div>
      </section>

      <section class="my-20 grid grid-cols-2 gap-14">
        <div class="col-span-2 lg:col-span-1 overflow-hidden rounded-lg">
          <NuxtImg src="/images/Banner.png" class="w-full" />
        </div>
        <div
          class="col-span-2 lg:col-span-1 flex flex-col justify-center items-center md:items-start"
        >
          <div class="w-3/4">
            <h1
              class="text-4xl sm:text-5xl md:text-6xl font-semibold font-serif"
            >
              Get Ready for our new Bold Collections!
            </h1>
            <p class="text-lg text-gray-700 dark:text-gray-400 my-10">
              Introducing Our New Bold Collections! Elevate your style with
              daring designs and vibrant statements. Explore striking patterns
              and bold colors that redefine your wardrobe. Get ready to embrace
              the extraordinary!
            </p>
            <button
              @click="navigateTo('/search')"
              class="py-3 px-8 bg-gray-800 text-white rounded-xl"
            >
              View All
            </button>
          </div>
        </div>
      </section>

      <section id="Feature Products" class="my-20">
        <div class="w-full flex items-center justify-between mb-10">
          <h1 class="text-3xl font-semibold font-serif">Feature Products</h1>
          <div>
            <Icon name="mdi:arrow-left" size="40" class="text-gray-600" />
            <Icon
              name="mdi:arrow-right"
              size="40"
              class="ml-10 text-gray-600"
            />
          </div>
        </div>
        <div class="w-full grid grid-cols-12 gap-8">
          <ProductCard
            v-for="el in card"
            :card="el"
            class="col-span-6 md:col-span-4 lg:col-span-3"
          />
        </div>

        <div class="w-full flex justify-center my-20">
          <button
            @click="navigateTo('/search')"
            class="text-xl font-semibold border border-gray-600 rounded-2xl py-3 px-8 hover:bg-gray-200"
          >
            View All
          </button>
        </div>
      </section>

      <section id="Additions">
        <h1
          class="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-center mb-20"
        >
          The game with our <br />
          new additions!
        </h1>

        <div class="my-20 grid grid-cols-2 gap-14">
          <div
            class="relative col-span-2 md:col-span-1 overflow-hidden rounded-lg"
          >
            <NuxtImg src="/images/additions/download (1).png" class="w-full" />
            <h1
              class="absolute bottom-10 left-10 italic text-3xl sm:text-4xl md:text-5xl font-semibold leading-normal text-gray-700 font-serif"
            >
              Our <br />
              Product
            </h1>
          </div>

          <div
            class="relative col-span-2 md:col-span-1 overflow-hidden rounded-lg"
          >
            <NuxtImg src="/images/additions/download (2).png" class="w-full" />
            <h1
              class="absolute bottom-10 left-10 italic text-3xl sm:text-4xl md:text-5xl font-semibold leading-normal text-gray-700 font-serif"
            >
              Our <br />
              Product
            </h1>
          </div>
        </div>
      </section>

      <section id="All Products" class="my-20">
        <div class="w-full flex items-center justify-between mb-10">
          <h1 class="text-3xl font-semibold font-serif">All Products</h1>
          <div>
            <Icon name="mdi:arrow-left" size="40" class="text-gray-600" />
            <Icon
              name="mdi:arrow-right"
              size="40"
              class="ml-10 text-gray-600"
            />
          </div>
        </div>
        <div class="w-full grid grid-cols-12 gap-8">
          <ProductCard
            v-for="el in card"
            :card="el"
            class="col-span-6 md:col-span-4 lg:col-span-3"
          />
        </div>

        <div class="w-full flex justify-center my-20">
          <button
            @click="navigateTo('/search')"
            class="text-xl font-semibold border border-gray-600 rounded-2xl py-3 px-8 hover:bg-gray-200"
          >
            View All
          </button>
        </div>
      </section>

      <section class="my-20 grid grid-cols-2 gap-14">
        <div
          class="col-span-2 md:col-span-1 flex flex-col justify-center items-center md:items-end"
        >
          <div class="w-3/4">
            <h1
              class="text-4xl sm:text-5xl md:text-6xl font-semibold font-serif"
            >
              Get Ready for our new Bold Collections!
            </h1>
            <p class="text-lg text-gray-700 dark:text-gray-400 my-10">
              Introducing Our New Bold Collections! Elevate your style with
              daring designs and vibrant statements. Explore striking patterns
              and bold colors that redefine your wardrobe. Get ready to embrace
              the extraordinary!
            </p>
            <button
              @click="navigateTo('/search')"
              class="py-3 px-8 bg-gray-800 text-white rounded-xl"
            >
              View All
            </button>
          </div>
        </div>
        <div class="col-span-2 md:col-span-1 overflow-hidden rounded-lg">
          <NuxtImg src="/images/Banner-2.png" class="w-full" />
        </div>
      </section>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "~/layouts/MainLayout.vue";
import type { CollectionCard } from "~/types/CollectionCard";
import type { Card } from "~/types/card";
useSeoMeta({
  title: "Home",
});

const carousel = [
  "/images/carousel/carousel-1.png",
  "/images/carousel/carousel-2.png",
  "/images/carousel/carousel-3.png",
  "/images/carousel/carousel-4.png",
];

const card: Card[] = [
  {
    imgSrc: "/images/products/download (1).png",
    title: "Adorable BunnyHop Baby Shoes",
    price: "16.99",
  },
  {
    imgSrc: "/images/products/download (2).png",
    title: "Adventure Seeker Boys' Half Sleeve Graphic T-Shirt",
    price: "49.99",
  },
  {
    imgSrc: "/images/products/download (3).png",
    title: "AeroFit Women's Fitness Performance Jacket",
    price: "87.99",
  },
  {
    imgSrc: "/images/products/download (4).png",
    title: "All-in-One Smart Casual Outfit Set",
    price: "16.99",
    newPrice: "168.96",
  },
];

const collectionCard: CollectionCard[] = [
  {
    imgSrc: "/images/collections/download (1).png",
    title: "Our Collections",
  },
  {
    imgSrc: "/images/collections/download (2).png",
    title: "Our Collections",
  },
  {
    imgSrc: "/images/collections/download (3).png",
    title: "Our Collections",
  },
  {
    imgSrc: "/images/collections/download (4).png",
    title: "Our Collections",
  },
  {
    imgSrc: "/images/collections/download (5).png",
    title: "Our Collections",
  },
  {
    imgSrc: "/images/collections/download (6).png",
    title: "Our Collections",
  },
];
</script>

<style></style>
