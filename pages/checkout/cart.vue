<template>
  <MainLayout>
    <div
      class="bg-gray-200 w-full box-border px-0 sm:px-10 md:px-16 lg:px-24 xl:px-28"
    >
      <div class="w-full py-4 font-semibold capitalize text-2xl">
        {{ type }}
      </div>
    </div>

    <div
      v-if="Boolean(cart.length)"
      class="w-full box-border px-0 sm:px-10 md:px-16 lg:px-24 xl:px-28 py-10"
    >
      <div class="flex flex-col md:flex-row">
        <div class="w-full mb-10 md:mb-0 md:w-2/3 md:mr-10">
          <div class="flex items-center w-fit mb-8">
            <input
              type="checkbox"
              class="size-5 mr-4 cursor-pointer"
              id="checkedTotal"
              :checked="totalChecked"
              v-model="isTotalChecked"
              @change="$globalStore.fillChecked(isTotalChecked)"
            />
            <label
              for="checkedTotal"
              class="text-xl font-semibold select-none cursor-pointer"
              >{{ quantitySelected }} Items Selected</label
            >
          </div>

          <hr class="border-2 mb-8" />

          <div>
            <div
              v-for="(item, index) in cart"
              :key="textFormat(item.title) + index"
              class="flex items-center mb-8"
            >
              <input
                type="checkbox"
                class="size-5 mr-4 cursor-pointer"
                :id="textFormat(item.title) + index"
                :checked="item.checked"
                @change="item.checked = !item.checked"
              />
              <div class="flex">
                <label
                  :for="textFormat(item.title) + index"
                  class="cursor-pointer mr-4"
                >
                  <NuxtImg :src="item.imgSrc" class="max-w-28 rounded-xl" />
                </label>
                <div class="flex flex-col justify-between">
                  <h1 class="text-xl font-semibold select-none cursor-pointer">
                    {{ item.title }}
                  </h1>
                  <p class="text-lg">
                    <strong>Price: </strong>${{ item.newPrice || item.price }}
                  </p>
                  <p class="text-lg"><strong>Size: </strong>{{ item.size }}</p>
                  <p class="text-lg">
                    <strong>Quantity: </strong>
                    {{ item.quantity }}
                  </p>
                  <UButton
                    label="Delete Product"
                    color="red"
                    class="w-fit mt-2"
                    @click="openConfirmRemove(item)"
                  />
                </div>
              </div>
            </div>

            <div class="w-full flex justify-end mt-10">
              <button
                @click="navigateTo('/')"
                class="px-10 py-3 rounded-xl text-nowrap font-semibold text-lg border border-[#1e244e]"
              >
                Continue Shopping
              </button>
              <button
                @click="openUpdateCart = true"
                class="px-10 py-3 rounded-xl text-nowrap font-semibold text-lg border border-[#1e244e] ml-4"
              >
                Update Cart
              </button>
            </div>
          </div>
        </div>

        <div class="text-start w-full md:w-1/3">
          <h1 class="text-3xl font-semibold mb-10">Cart Summary</h1>
          <div class="flex justify-between items-center mb-4">
            <h1 class="text-lg">Subtotal</h1>
            <h1 class="text-lg">${{ priceChecked }}</h1>
          </div>
          <div class="flex justify-between items-center mb-4">
            <h1 class="text-lg">Delivery Charges</h1>
            <h1 class="text-lg">$0.00</h1>
          </div>
          <div class="flex justify-between items-center mb-4">
            <h1 class="text-lg">Coupon Discount</h1>
            <h1 class="text-lg text-blue-300">Apply Coupon</h1>
          </div>
          <hr class="border-2" />
          <div class="flex justify-between items-center mb-4">
            <h1 class="text-2xl font-semibold">Grand Total</h1>
            <h1 class="text-2xl font-bold">${{ priceChecked }}</h1>
          </div>

          <div class="w-full flex justify-end">
            <button
              @click="navigateTo('/checkout')"
              v-if="quantitySelected != 0"
              class="px-10 py-3 rounded-xl text-nowrap bg-[#1e244e] text-white font-semibold text-lg"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="w-full h-full flex items-center justify-center flex-col">
      <NuxtImg src="/bag.png" class="w-60" />
      <h1 class="text-2xl font-semibold">Your cart is empty</h1>
    </div>

    <UModal v-model="openModel" prevent-close>
      <UCard
        :ui="{
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold leading-6 text-red-500">
              Do you want to delete this product?
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="openModel = false"
            />
          </div>
        </template>

        <div class="flex items-start">
          <NuxtImg :src="confirmItem.imgSrc" class="max-w-20 rounded-xl mr-2" />
          <div>
            <h2 class="font-semibold text-lg">{{ confirmItem.title }}</h2>
            <p>
              <strong>Price: </strong>${{
                confirmItem.newPrice || confirmItem.price
              }}
            </p>
            <p><strong>Size: </strong>{{ confirmItem.size }}</p>
            <p><strong>Quantity: </strong>{{ confirmItem.quantity }}</p>
          </div>
        </div>

        <template #footer>
          <div class="w-full flex justify-end">
            <UButton
              label="Cancel"
              variant="ghost"
              @click="openModel = false"
            />
            <UButton
              :loading="removeLoading"
              label="Delete"
              color="red"
              class="ml-4"
              @click="removeCart()"
            />
          </div>
        </template>
      </UCard>
    </UModal>

    <UModal v-model="openUpdateCart" prevent-close>
      <UCard
        :ui="{
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Update your products
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="openUpdateCart = false"
            />
          </div>
        </template>

        <div v-for="card in cart" class="mb-4">
          <div v-if="card.checked == true" class="flex items-start">
            <NuxtImg :src="card.imgSrc" class="max-w-20 rounded-xl mr-2" />
            <div>
              <h2 class="font-semibold text-lg">{{ card.title }}</h2>
              <div class="flex items-center my-2">
                <p><strong>Size: </strong></p>
                <button
                  :class="[
                    card.size == 23 &&
                      'bg-red-400 text-white font-bold border-3',
                  ]"
                  @click="card.size = 23"
                  class="size-10 flex items-center justify-center rounded-full border-2 border-gray-400 ml-2"
                >
                  23
                </button>
                <button
                  :class="[
                    card.size == 24 &&
                      'bg-red-400 text-white font-bold border-3',
                  ]"
                  @click="card.size = 24"
                  class="size-10 flex items-center justify-center rounded-full border-2 border-gray-400 ml-2"
                >
                  24
                </button>
                <button
                  :class="[
                    card.size == 25 &&
                      'bg-red-400 text-white font-bold border-3',
                  ]"
                  @click="card.size = 25"
                  class="size-10 flex items-center justify-center rounded-full border-2 border-gray-400 ml-2"
                >
                  25
                </button>
                <button
                  :class="[
                    card.size == 26 &&
                      'bg-red-400 text-white font-bold border-3',
                  ]"
                  @click="card.size = 26"
                  class="size-10 flex items-center justify-center rounded-full border-2 border-gray-400 ml-2"
                >
                  26
                </button>
              </div>
              <div class="flex">
                <p><strong>Quantity: </strong></p>
                <button
                  class="py-0.5 px-2 rounded-full border-2 border-gray-400 ml-2"
                >
                  <Icon
                    name="mdi:minus"
                    @click="() => (card.quantity == 1 ? 1 : card.quantity--)"
                  />
                  <span class="mx-2">{{ card.quantity }}</span>
                  <Icon name="mdi:plus" @click="card.quantity++" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-if="cart.every((item) => item.checked == false)">
          <h1 class="text-center text-lg uppercase text-red-500">
            Please select at least one product to update!
          </h1>
        </div>

        <template #footer>
          <div class="flex justify-end">
            <UButton label="Done" @click="openUpdateCart = false" />
          </div>
        </template>
      </UCard>
    </UModal>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from "~/layouts/MainLayout.vue";

const { textFormat } = useTextFormat();

const toast = useToast();
const route = useRoute();
const router = useRouter();
const { $globalStore } = useNuxtApp();
const { selectedProduct, cart, totalChecked, quantitySelected, priceChecked } =
  storeToRefs($globalStore);

const type = computed(() => route.path.split("/").pop());
const isTotalChecked = ref();
const openModel = ref(false);

const confirmItem = ref();

function openConfirmRemove(item: any) {
  openModel.value = true;
  confirmItem.value = item;
}

const removeLoading = ref(false);
function removeCart() {
  try {
    removeLoading.value = true;
    $globalStore.removeCart(confirmItem.value);
  } catch (error: any) {
    console.log(error);
  } finally {
    setTimeout(() => {
      removeLoading.value = false;
      openModel.value = false;
      toast.add({
        title: "Delete product is done",
        description: "This product has been removed from cart",
        icon: "i-heroicons-check",
      });
    }, 1000);
  }
}

const openUpdateCart = ref(false);
function openUpdateCartFunc() {
  openUpdateCart.value = true;
}
</script>
