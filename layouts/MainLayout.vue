<template>
  <div
    class="bg-gray-100 dark:bg-gray-900 w-full min-h-dvh max-w-full overflow-hidden"
  >
    <div
      id="Navbar"
      class="w-full px-0 md:px-10 lg:px-14 bg-[#f6f2eb] text-black"
    >
      <div
        class="border-b border-b-gray-400 w-full items-center justify-between py-2 hidden lg:flex"
      >
        <div class="flex">
          <Icon name="mdi:currency-usd" size="30" />
          <span class="mx-1">USD</span>
          <Icon name="mdi:chevron-down" />
        </div>
        <p class="text-sm">Get UPTO 40% OFF on your 1st order SHOP NOW</p>
        <ColorSwitcher />
      </div>

      <div
        class="w-full border-b border-gray-400 py-6 flex items-center justify-between"
      >
        <div class="flex">
          <div class="lg:hidden">
            <Icon
              name="mdi:hamburger-close"
              size="30"
              class="cursor-pointer mr-6"
            />
          </div>

          <div class="xl:mr-10 lg:mr-6 mr-0">
            <Logo />
          </div>
          <div
            v-for="el in navbar"
            class="xl:mr-10 lg:mr-6 mr-0 hidden lg:block relative group"
          >
            <NuxtLink :to="el.link">
              <span
                class="before:absolute before:-bottom-5 before:h-1 before:rounded-sm before:w-full before:bg-gray-800 before:left-0 group-hover:before:block before:hidden before:z-30"
              >
                {{ el.name }}
              </span>
            </NuxtLink>
            <div
              class="group-hover:grid hidden absolute top-12 -left-10 shadow-lg rounded z-20 bg-gray-100 h-fit min-w-80 grid-cols-[auto_auto] p-4 after:absolute after:-top-7 after:left-8 after:bg-transparent after:h-10 after:w-20"
            >
              <p
                class="text-nowrap mx-4 my-2 text-lg font-semibold cursor-pointer hover:underline"
                v-for="e in el.list"
              >
                {{ e }}
              </p>
            </div>
          </div>
        </div>

        <div class="flex">
          <form @submit="goToSearch()">
            <UInput
              v-model="searchValue"
              placeholder="Search products here"
              size="lg"
              color="white"
              :ui="{
                icon: { leading: { pointer: '' }, trailing: { pointer: '' } },
              }"
              class="outline-none ml-10 hidden md:block !bg-transparent"
            >
              <template #leading>
                <UButton
                  color="gray"
                  variant="link"
                  icon="i-heroicons-magnifying-glass"
                  :padded="false"
                  @click="goToSearch()"
                />
              </template>

              <template #trailing>
                <UButton
                  v-if="searchValue != ''"
                  color="gray"
                  variant="link"
                  icon="i-heroicons-x-mark-20-solid"
                  :padded="false"
                  @click="searchValue = ''"
                />
                <UButton
                  v-else
                  color="gray"
                  variant="link"
                  icon="i-heroicons-camera"
                  :padded="false"
                />
              </template>
            </UInput>
            <button type="submit" hidden></button>
          </form>
          <Icon name="mdi:compare-horizontal" size="30" class="ml-10" />
          <div @click="sliderOver = true" class="cursor-pointer">
            <UChip :show="cart.length > 0" :text="cart.length || ''" size="3xl">
              <Icon name="mdi:shopping-outline" size="30" class="ml-10" />
            </UChip>
          </div>
          <div class="relative group">
            <Icon
              name="mdi:user-outline"
              size="30"
              class="ml-10 cursor-pointer"
            />
            <div
              class="absolute w-fit right-0 z-30 rounded-2xl bg-white shadow-lg px-8 py-6 border hidden group-hover:block"
            >
              <h2 class="text-lg font-bold">Welcome Guest</h2>
              <p class="text-nowrap">Manage Cart, Orders & Wishlist</p>
              <hr class="my-4" />
              <div class="flex">
                <button
                  @click="navigateTo('/auth/login')"
                  class="rounded-xl px-6 py-2 font-semibold mr-4 bg-slate-700 hover:bg-slate-800 text-white"
                >
                  Sign in
                </button>
                <button
                  @click="navigateTo('/auth/signup')"
                  class="rounded-xl px-6 py-2 font-semibold border-2 border-slate-700 text-slate-700 bg-white hover:bg-gray-200"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-transparent">
      <form @submit="goToSearch()">
        <UInput
          v-model="searchValue"
          placeholder="Search products here"
          size="lg"
          :ui="{
            icon: { leading: { pointer: '' }, trailing: { pointer: '' } },
          }"
          class="outline-none !bg-transparent md:hidden"
        >
          <template #leading>
            <UButton
              color="gray"
              variant="link"
              icon="i-heroicons-magnifying-glass"
              :padded="false"
              @click="goToSearch()"
            />
          </template>

          <template #trailing>
            <UButton
              v-if="searchValue != ''"
              color="gray"
              variant="link"
              icon="i-heroicons-x-mark-20-solid"
              :padded="false"
              @click="searchValue = ''"
            />
            <UButton
              v-else
              color="gray"
              variant="link"
              icon="i-heroicons-camera"
              :padded="false"
            />
          </template>
        </UInput>
        <button type="submit" hidden></button>
      </form>
    </div>

    <div class="w-full min-h-[80vh]">
      <slot />
    </div>
  </div>

  <Banner />

  <footer
    class="bg-[#f6f2eb] dark:bg-[#83807c] box-border py-10 px-4 sm:px-10 md:px-16 lg:px-24 xl:px-28"
  >
    <div
      class="w-full flex flex-col sm:flex-row justify-between sm:items-center"
    >
      <div
        class="flex justify-evenly w-full sm:w-auto mb-10 sm:mb-0 [&_li]:mb-4 [&_li:hover]:underline [&_li]:cursor-pointer"
      >
        <ul class="mr-4 sm:mr-10 md:mr-16 lg:mr-20">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Customer Service</li>
          <li>What's New</li>
          <li>Terms of Use</li>
          <li>Terms of Conditions</li>
        </ul>
        <ul>
          <li>Privacy Policy</li>
          <li>Shipping Policy</li>
          <li>Payment Policy</li>
          <li>Refound Policy</li>
          <li>Returns Policy</li>
        </ul>
      </div>

      <div class="mx-auto">
        <h1 class="text-3xl text-gray-700 italic leading-normal">
          Get Ready for our <br />
          Fun Newsletter!
        </h1>
        <p class="my-4">Subscribe to stay in touch</p>
        <div class="w-fit relative">
          <input
            type="text"
            placeholder="email@example.com"
            required
            class="h-16 w-64 rounded-xl bg-[#ffeed1] border-[#f7d8a4] outline-[#fbba4b] border-2 px-2"
          />
          <button
            class="h-12 w-fit px-2 rounded-xl absolute top-1/2 right-1 -translate-y-1/2 bg-white"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </footer>
  <div
    class="bg-[#f1eadf] dark:bg-[#4d4b47] px-20 py-4 text-center sm:text-start"
  >
    © Copyright 2010 - 2024, Webkul Software (Registered in India). All rights
    reserved.
  </div>

  <USlideover v-model="sliderOver">
    <UCard
      class="flex flex-col flex-1"
      :ui="{
        body: { base: 'flex-1' },
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      }"
    >
      <template #header>
        <div>
          <div class="flex items-center justify-between">
            <h1
              class="text-2xl font-semibold leading-normal text-gray-900 dark:text-white cursor-default"
            >
              Shopping Cart
            </h1>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="sliderOver = false"
            />
          </div>
          <h2 class="text-lg mt-2">Get Up To 30% OFF on your 1st order</h2>
        </div>
      </template>

      <div v-if="cart.length == 0">
        <NuxtImg src="/bag.png" class="mx-auto" />
        <h3 class="text-center text-xl">Your cart is empty</h3>
      </div>

      <div v-else class="w-full overflow-auto max-h-96">
        <div v-for="el in cart" class="w-full flex items-start mb-6">
          <NuxtImg :src="el.imgSrc" class="w-1/4 mr-4 rounded-xl" />
          <div class="w-fit">
            <h2 class="text-lg font-medium">{{ el.title }}</h2>
            <h1
              v-if="!Boolean(el.newPrice)"
              class="text-xl font-semibold leading-normal"
            >
              ${{ Number(el.price) * el.quantity }}
            </h1>
            <h1 v-else class="text-xl font-semibold leading-normal">
              ${{ Number(el.newPrice) * el.quantity }}
            </h1>
            <p>Size: {{ el.size }}</p>
            <div class="flex mt-4">
              <button
                class="min-w-20 h-8 px-2 mr-4 text-xl border-2 border-gray-400 rounded-full flex items-center justify-center"
              >
                <Icon
                  name="mdi:minus"
                  @click="() => (el.quantity == 1 ? 1 : el.quantity--)"
                />
                <span class="mx-3">{{ el.quantity }}</span>
                <Icon
                  name="mdi:plus"
                  @click="
                    el.quantity++;
                    console.log(cart);
                  "
                />
              </button>
              <UButton
                label="Delete"
                variant="ghost"
                @click="$globalStore.removeCart(el)"
              />
            </div>
          </div>
        </div>
      </div>

      <template v-if="Boolean(cart.length)" #footer>
        <div class="w-full">
          <div class="w-full flex items-center justify-between py-4">
            <p>Subtotal</p>
            <h1 class="text-2xl font-semibold">${{ sumPrice }}</h1>
          </div>

          <UButton
            size="xl"
            class="my-2"
            block
            label="Continue to Checkout"
            @click="continueToCheckout()"
          />
          <UButton
            @click="navigateTo('/checkout/cart')"
            size="xl"
            variant="ghost"
            class="my-4"
            block
            label="View cart"
          />
        </div>
      </template>
    </UCard>
  </USlideover>
</template>

<script setup lang="ts">
interface Nav {
  name: string;
  link: string;
  list: string[];
}
const route = useRoute();
const { $globalStore } = useNuxtApp();
const { searchValue, cart, sumPrice } = storeToRefs($globalStore);

const sliderOver = ref(false);

function goToSearch() {
  if (route.path.split("/").pop() == "search") return;
  navigateTo("/search");
}

const navbar: Nav[] = [
  {
    name: "MEN",
    link: "/category/men",
    list: ["Formal wear", "Active wear", "Casual wear", "Foot wear"],
  },
  {
    name: "WOMEN",
    link: "/category/women",
    list: ["Formal wear", "Active wear", "Casual wear", "Foot wear"],
  },
  {
    name: "KIDS",
    link: "/category/kids",
    list: ["Girl clothing", "Girl footwear", "Boy clothing", "Boy footwear"],
  },
  {
    name: "WELLNESS",
    link: "/category/wellness",
    list: ["Downloadable Yoga Tutorial", "Movie Pass", "E-Books"],
  },
];

function continueToCheckout() {
  $globalStore.setAllChecked(true);
  navigateTo("/checkout");
}
</script>
