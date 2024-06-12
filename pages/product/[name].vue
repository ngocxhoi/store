<template>
  <MainLayout>
    <div class="py-8 text-center">
      <span class="text-lg font-semibold">Home</span>
      <Icon name="mdi:chevron-right" size="30" />
      <span>{{ $route.params.name }}</span>
    </div>
    <div
      v-if="Boolean(selectedProduct)"
      class="w-full box-border px-0 sm:px-10 md:px-16 lg:px-24 xl:px-28 flex flex-col sm:flex-row items-start"
    >
      <div class="[&_input:checked>div]:border hidden lg:block">
        <input type="radio" name="chose" :id="id + '1'" hidden />
        <label :for="id + '1'">
          <div class="border-black">
            <NuxtImg :src="selectedProduct.imgSrc" class="size-32 mb-4" />
          </div>
        </label>

        <input type="radio" name="chose" :id="id + '2'" hidden />
        <label :for="id + '2'">
          <div class="border-black">
            <NuxtImg :src="selectedProduct.imgSrc" class="size-32 mb-4" />
          </div>
        </label>
      </div>

      <div class="w-full mb-8 sm:mb-0 sm:w-1/2 mr-8 lg:mx-8">
        <NuxtImg :src="selectedProduct.imgSrc" class="w-full" />
        <div
          class="[&_input:checked>div]:border lg:hidden flex justify-center mt-4"
        >
          <input type="radio" name="chose" :id="id + '1'" hidden />
          <label :for="id + '1'">
            <div class="border-black">
              <NuxtImg :src="selectedProduct.imgSrc" class="size-32 mr-4" />
            </div>
          </label>

          <input type="radio" name="chose" :id="id + '2'" hidden />
          <label :for="id + '2'">
            <div class="border-black">
              <NuxtImg :src="selectedProduct.imgSrc" class="size-32" />
            </div>
          </label>
        </div>
      </div>

      <div class="w-full sm:w-1/2">
        <div class="w-full flex items-center justify-between mb-6">
          <h1 class="text-3xl font-semibold">{{ selectedProduct.title }}</h1>
          <div
            @click="lovely = !lovely"
            class="min-w-12 min-h-12 border border-gray-700 rounded-full flex items-center justify-center cursor-pointer"
          >
            <Icon v-if="!lovely" name="mdi:heart-outline" size="30" />
            <Icon v-else name="mdi:heart" size="30" class="text-red-500" />
          </div>
        </div>
        <!-- <StatRate/> -->
        <div class="w-full mb-6">
          <p v-if="!Boolean(selectedProduct.newPrice)">
            <span class="font-semibold text-gray-400 dark:text-gray-200 mr-2"
              >As low as</span
            >
            <strong class="text-2xl">${{ selectedProduct.price }}</strong>
          </p>
          <p v-else>
            <span
              class="font-semibold text-gray-400 dark:text-gray-200 mr-2 line-through"
              >{{ selectedProduct.price }}</span
            >
            <strong class="text-2xl">${{ selectedProduct.newPrice }}</strong>
          </p>
        </div>

        <div class="text-lg text-gray-500 font-semibold mb-6">
          Let your little adventurer stand out in our Adventure Seeker Boys'
          Half Sleeve Graphic T-Shirt. The eye-catching graphic design adds a
          playful and trendy element to his outfit. Crafted from a soft and
          breathable fabric, this t-shirt is perfect for various casual
          occasions, ensuring both comfort and style.
        </div>

        <div class="mb-6">
          <h1 class="text-2xl">Select your size</h1>
          <div class="flex my-6">
            <p
              :class="[
                size == 23 && 'bg-red-200 text-red-500 font-semibold border-3',
              ]"
              @click="size = 23"
              class="cursor-pointer rounded-full py-2 px-4 mr-4 text-xl border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              23
            </p>
            <p
              :class="[
                size == 24 && 'bg-red-200 text-red-500 font-semibold border-3',
              ]"
              @click="size = 24"
              class="cursor-pointer rounded-full py-2 px-4 mr-4 text-xl border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              24
            </p>
            <p
              :class="[
                size == 25 && 'bg-red-200 text-red-500 font-semibold border-3',
              ]"
              @click="size = 25"
              class="cursor-pointer rounded-full py-2 px-4 mr-4 text-xl border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              25
            </p>
            <p
              :class="[
                size == 26 && 'bg-red-200 text-red-500 font-semibold border-3',
              ]"
              @click="size = 26"
              class="cursor-pointer rounded-full py-2 px-4 mr-4 text-xl border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              26
            </p>
          </div>
          <div class="flex items-center">
            <div
              class="rounded-xl border flex border-gray-700 dark:border-200 px-5 py-2"
            >
              <Icon
                name="mdi:minus"
                size="30"
                class="cursor-pointer"
                @click="
                  () => {
                    quantity == 1 ? quantity : quantity--;
                  }
                "
              />
              <span class="mx-4 text-lg select-none">{{ quantity }}</span>
              <Icon
                name="mdi:plus"
                size="30"
                @click="quantity++"
                class="cursor-pointer"
              />
            </div>

            <div
              @click="addToCart()"
              class="rounded-xl flex select-none text-lg font-semibold ml-8 cursor-pointer border border-gray-700 dark:border-200 hover:bg-gray-200 dark:hover:bg-gray-700 px-5 py-2"
            >
              <span class="text-nowrap">Add To Cart</span>
              <Icon name="mdi:cart-outline" size="30" class="ml-2" />
            </div>
          </div>
        </div>
        <button
          class="w-full rounded-xl text-lg select-none font-semibold text-gray-200 bg-[#1e244e] hover:bg-[#2b336f] py-4"
        >
          Buy Now
        </button>
      </div>
    </div>

    <SocialMedia />

    <div
      class="my-10 w-full box-border px-0 sm:px-10 md:px-16 lg:px-24 xl:px-28"
    >
      <UTabs v-model="selected" :items="tabItem">
        <template #default="{ item, index, selected }">
          <h1 class="text-xl font-semibold p-4 capitalize">{{ item.label }}</h1>
        </template>

        <template #item="{ item }">
          <div v-if="item.label == 'Description'" class="py-4">
            <p class="text-lg text-gray-400 font-semibold">
              {{ item.content }}
            </p>
          </div>

          <div v-else-if="item.label == 'Additional Information'" class="py-4">
            <ul>
              <li class="text-lg font-medium">
                Brand: <span class="text-gray-400">Nike</span>
              </li>
              <li class="text-lg font-medium">
                Neck: <span class="text-gray-400">Round-Neck</span>
              </li>
              <li class="text-lg font-medium">
                Sleeve: <span class="text-gray-400">Half</span>
              </li>
            </ul>
          </div>

          <div v-else-if="item.label == 'Reviews'" class="py-4">
            <h1 class="text-2xl font-semibold font-serif">Customer Reviews</h1>
            <NuxtImg src="/star.png" class="mx-auto" />
            <p class="text-lg text-center">
              No Review found, be the first to review this product
            </p>
          </div>
        </template>
      </UTabs>
    </div>

    <div
      class="my-10 w-full box-border px-0 sm:px-10 md:px-16 lg:px-24 xl:px-28"
    >
      <section id="RelatedProduct" class="mb-10">
        <div class="w-full flex items-center justify-between mb-10">
          <h1 class="text-2xl font-semibold font-serif">Related Products</h1>
          <div>
            <Icon name="mdi:arrow-left" size="30" class="text-gray-600" />
            <Icon
              name="mdi:arrow-right"
              size="30"
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
      </section>

      <hr class="border-black dark:border-gray-600" />

      <section id="We found other products" class="mt-10">
        <div class="w-full flex items-center justify-between mb-10">
          <h1 class="text-2xl font-semibold font-serif">
            We found other products you might like!
          </h1>
          <div>
            <Icon name="mdi:arrow-left" size="30" class="text-gray-600" />
            <Icon
              name="mdi:arrow-right"
              size="30"
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
      </section>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "~/layouts/MainLayout.vue";

const toast = useToast();
const route = useRoute();
const router = useRouter();
const { $globalStore } = useNuxtApp();
const { selectedProduct, cart } = storeToRefs($globalStore);

// const { textFormat } = useTextFormat();

function textFormat(text: string): string {
  return text.split(" ").join("");
}

const id = computed(() => textFormat(selectedProduct.value.title || ""));
const quantity = ref(1);
const size = ref();
const lovely = ref(false);

const tabItem = [
  {
    label: "Description",
    content:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe officiis reprehenderit recusandae, quo nemo, ratione, unde sunt cumque fugit porro reiciendis architecto atque facere magni similique dignissimos praesentium? Reiciendis nesciunt iure consequuntur provident quibusdam aspernatur omnis quis quia nihil quam. Quae aperiam nemo mollitia esse nesciunt voluptas, harum accusamus non numquam. Obcaecati eum est natus itaque accusantium, quia delectus neque sunt magnam architecto, nostrum harum nisi facilis nobis voluptatibus fugit eos pariatur atque odit! Optio nostrum sequi ut eius perspiciatis exercitationem aut rem, quisquam sed ipsam. Ea odio eveniet neque beatae commodi est, sunt unde vero dolor facere! Mollitia officiis amet ipsam dicta rerum alias totam quisquam numquam ratione corrupti molestiae, laudantium delectus voluptas impedit perferendis harum sunt eum temporibus inventore sint unde id, nesciunt doloremque! Voluptates ipsam doloremque ut architecto distinctio vero quidem non possimus tenetur delectus nulla obcaecati facere exercitationem aliquam sit laborum, eum doloribus provident atque. Error nam quae quisquam consequuntur unde nemo eum odit? Mollitia quisquam voluptatum natus animi architecto veritatis doloremque, modi inventore molestiae harum dolorem similique placeat maxime suscipit delectus provident commodi corporis fugit voluptas labore? Repellendus est blanditiis incidunt sit, illo dolore magni unde iusto, hic placeat vel, nesciunt rem nisi nam quam.",
  },
  {
    label: "Additional Information",
    content: "And, this is the content for Tab2",
  },
  {
    label: "Reviews",
    content: "Finally, this is the content for Tab3",
  },
];

const card = [
  {
    imgSrc: "/images/products/download (1).png",
    title: "Adorable BunnyHop Baby Shoes",
    price: "16.99",
  },
];

const selected = computed({
  get() {
    const index = tabItem.findIndex((item) => item.label === route.query.tab);
    if (index === -1) {
      return 0;
    }

    return index;
  },
  set(value) {
    // Hash is specified here to prevent the page from scrolling to the top
    router.replace({
      query: { tab: tabItem[value].label },
      hash: "#control-the-selected-index",
    });
  },
});

function addToCart() {
  if (!Boolean(size.value)) {
    alert("Please select a size");
    return;
  }
  $globalStore.addToCart(quantity.value, size.value);
  toast.add({
    title: "Added to Cart",
    description: "Product has been added to cart",
    timeout: 3000,
    icon: "i-heroicons-check",
  });
}
</script>

<style></style>
