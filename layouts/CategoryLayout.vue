<template>
  <MainLayout>
    <div class="w-full min-h-screen px-0 sm:px-10 md:px-16 lg:px-24 xl:px-28">
      <div v-if="type == 'search'" class="w-full py-4 text-xl font-semibold">
        Search result for :
        {{ searchValue }}
      </div>
      <div v-else class="w-full py-4 capitalize text-lg">
        {{ type }}
      </div>

      <div class="w-full flex">
        <div
          class="w-full min-w-[200px] md:max-w-[250px] lg:max-w-[300px] xl:max-w-[350px] mr-[50px]"
        >
          <div
            class="w-full flex justify-between items-center py-4 border-b border-gray-700 dark:border-gray-400"
          >
            <h1 class="text-xl font-semibold">Filters:</h1>
            <p class="text-sm text-gray-700 dark:text-gray-300">Clear All</p>
          </div>

          <div class="w-full py-4">
            <div class="flex justify-between items-center">
              <h1 class="text-xl font-semibold">Price</h1>
              <Icon name="mdi:chevron-up" size="30" />
            </div>
            <div class="my-2 flex">
              <p class="mr-2">Range:</p>
              <strong>${{ minPrice }} - ${{ maxPrice }}</strong>
            </div>

            <DoubleRange @setPrice="setPrice" />
          </div>

          <UAccordion :items="accordion" defaultOpen multiple>
            <template #default="{ item, index, open }">
              <div class="w-full flex justify-between items-center">
                <h1 class="text-xl font-semibold capitalize">
                  {{ item.label }}
                </h1>
                <Icon
                  name="mdi:chevron-up"
                  size="30"
                  :class="[!open && 'rotate-180']"
                />
              </div>
            </template>

            <template #item="{ item }">
              <div class="w-full box-border border-b border-b-gray-400 px-4">
                <div
                  v-for="(el, index) in item.contents"
                  :key="index"
                  class="flex items-center capitalize my-3"
                >
                  <input
                    type="checkbox"
                    :name="el"
                    :id="el"
                    v-model="checkbox[el.toString()]"
                    class="size-6 rounded-lg bg-transparent"
                  />
                  <p class="text-lg font-normal ml-3">{{ el }}</p>
                </div>
              </div>
            </template>
          </UAccordion>
        </div>

        <div class="w-full">
          <section class="w-full flex items-center justify-between">
            <UDropdown
              v-model:open="openSortBy"
              :items="sortBy"
              :popper="{ placement: 'bottom-start' }"
            >
              <button
                class="border border-gray-400 transition-colors py-2 px-4 rounded-lg hover:border-black dark:hover:border-blue-300"
              >
                {{ sortedBy }}
                <Icon
                  name="mdi:chevron-down"
                  size="30"
                  :class="[openSortBy && 'rotate-180']"
                />
              </button>
            </UDropdown>

            <div class="flex items-center">
              <UDropdown v-model:open="openQuantity" :items="quantity">
                <button
                  class="border border-gray-400 transition-colors py-2 px-4 rounded-lg hover:border-black dark:hover:border-blue-300"
                >
                  {{ currentQuantity }}
                  <Icon
                    name="mdi:chevron-down"
                    size="30"
                    :class="[openQuantity && 'rotate-180']"
                  />
                </button>
              </UDropdown>
              <Icon
                name="mdi:format-list-bulleted"
                size="30"
                class="ml-4 cursor-pointer hover:text-blue-300"
              />
              <Icon
                name="mdi:view-grid-outline"
                size="30"
                class="ml-4 cursor-pointer hover:text-blue-300"
              />
            </div>
          </section>

          <slot />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from "~/layouts/MainLayout.vue";

const { $globalStore } = useNuxtApp();
const { searchValue } = storeToRefs($globalStore);

// const router: any = useRouter();
const minPrice = ref(0);
const maxPrice = ref(299);

function setPrice(a: number, b: number) {
  minPrice.value = a;
  maxPrice.value = b;
}

const route = useRoute();
const type = computed(() => route.path.split("/").pop());

const accordion = [
  {
    label: "Color",
    contents: [
      "red",
      "green",
      "blue",
      "yellow",
      "black",
      "white",
      "orange",
      "pink",
      "purple",
      "grey",
      "brown",
    ],
  },
  {
    label: "Size",
    contents: ["S", "M", "L", "XL", "XXL"],
  },
  {
    label: "Brand",
    contents: ["Nike", "Adidas", "Puma", "Reebok", "Vans"],
  },
];

const checkbox = ref({
  red: false,
  green: false,
  blue: false,
  yellow: false,
  black: false,
  white: false,
  orange: false,
  pink: false,
  purple: false,
  grey: false,
  brown: false,
  s: false,
  m: false,
  l: false,
  xl: false,
  xxl: false,
  nike: false,
  adidas: false,
  puma: false,
  reebok: false,
  vans: false,
});

const openSortBy = ref(false);
const sortedBy = ref("From A - Z");
const sortBy = [
  [
    {
      label: "From A - Z",
      click: () => (sortedBy.value = "From A - Z"),
    },
  ],
  [
    {
      label: "From Z - A",
      click: () => (sortedBy.value = "From Z - A"),
    },
  ],
  [
    {
      label: "Price: Low to High",
      click: () => (sortedBy.value = "Price: Low to High"),
    },
  ],
  [
    {
      label: "Price: High to Low",
      click: () => (sortedBy.value = "Price: High to Low"),
    },
  ],
  [
    {
      label: "Newest first",
      click: () => (sortedBy.value = "Newest first"),
    },
  ],
  [
    {
      label: "Oldest first",
      click: () => (sortedBy.value = "Oldest first"),
    },
  ],
];

const openQuantity = ref(false);
const currentQuantity = ref(10);
const quantity: any = [
  [
    {
      label: 10,
      click: () => (currentQuantity.value = 10),
    },
  ],
  [
    {
      label: 20,
      click: () => (currentQuantity.value = 20),
    },
  ],
  [
    {
      label: 30,
      click: () => (currentQuantity.value = 30),
    },
  ],
  [
    {
      label: 40,
      click: () => (currentQuantity.value = 40),
    },
  ],
];
</script>

<style scoped>
#range-2 {
  direction: rtl;
}
</style>
