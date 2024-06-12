<template>
  <MainLayout>
    <div
      class="bg-gray-200 w-full box-border px-0 sm:px-10 md:px-16 lg:px-24 xl:px-28"
    >
      <div class="w-full py-4 font-semibold capitalize text-2xl">
        Home > Cart > {{ type }}
      </div>
    </div>

    <div
      class="w-full box-border px-0 sm:px-10 md:px-16 lg:px-24 xl:px-28 py-10 flex justify-center"
    >
      <div class="max-w-2xl w-full">
        <h1 class="text-2xl font-semibold mb-8">Address</h1>

        <div>
          <h2 class="text-xl font-semibold mb-4">Billing Address</h2>

          <UForm
            ref="formBilling"
            :schema="billingSchema"
            :state="billingState"
            @submit="onSubmitBilling"
          >
            <UFormGroup label="Company Name" size="xl" class="mb-4">
              <UInput
                v-model="billingState.companyName"
                placeholder="Company Name"
              />
            </UFormGroup>

            <div class="w-full flex mb-4">
              <UFormGroup
                required
                label="Fist Name"
                size="xl"
                class="w-1/2 mr-4"
              >
                <UInput
                  v-model="billingState.firstName"
                  placeholder="First name"
                />
              </UFormGroup>
              <UFormGroup required label="Last Name" size="xl" class="w-1/2">
                <UInput
                  v-model="billingState.lastName"
                  placeholder="Last name"
                />
              </UFormGroup>
            </div>

            <UFormGroup required label="Email" size="xl" class="mb-4">
              <UInput v-model="billingState.email" placeholder="Email" />
            </UFormGroup>

            <UFormGroup required label="Street Address" size="xl" class="mb-4">
              <UInput
                v-model="billingState.address"
                placeholder="Street Address"
              />
            </UFormGroup>

            <div class="w-full flex mb-4">
              <UFormGroup required label="Country" size="xl" class="w-1/2 mr-4">
                <UInput v-model="billingState.country" placeholder="Country" />
              </UFormGroup>
              <UFormGroup required label="State" size="xl" class="w-1/2">
                <UInput v-model="billingState.state" placeholder="State" />
              </UFormGroup>
            </div>

            <div class="w-full flex mb-4">
              <UFormGroup required label="City" size="xl" class="w-1/2 mr-4">
                <UInput v-model="billingState.city" placeholder="City" />
              </UFormGroup>
              <UFormGroup required label="Zip/Postcode" size="xl" class="w-1/2">
                <UInput v-model="billingState.zip" placeholder="Zip/Postcode" />
              </UFormGroup>
            </div>

            <UFormGroup required label="Telephone" size="xl" class="mb-4">
              <UInput v-model="billingState.phone" placeholder="Phone number" />
            </UFormGroup>

            <button
              v-if="sameShippingAddress"
              type="submit"
              class="float-end px-8 py-2 rounded-xl text-gray-400 font-semibold text-lg bg-[rgb(6,12,59)] hover:text-white dark:bg-[rgb(12,24,113)]"
            >
              Proceed
            </button>
          </UForm>
        </div>

        <UCheckbox
          label="Use same address for shipping?"
          v-model="sameShippingAddress"
          class="cursor-pointer my-10 text-nowrap"
          :class="[sameShippingAddress && 'mt-20']"
        />

        <div v-if="!sameShippingAddress">
          <h2 class="text-xl font-semibold mb-4">Shipping Address</h2>

          <UForm
            ref="formShipping"
            :schema="shippingSchema"
            :state="shippingState"
            @submit="onSubmitShipping"
          >
            <UFormGroup label="Company Name" size="xl" class="mb-4">
              <UInput
                v-model="shippingState.companyName"
                placeholder="Company Name"
              />
            </UFormGroup>

            <div class="w-full flex mb-4">
              <UFormGroup
                required
                label="Fist Name"
                size="xl"
                class="w-1/2 mr-4"
              >
                <UInput
                  v-model="shippingState.firstName"
                  placeholder="First name"
                />
              </UFormGroup>
              <UFormGroup required label="Last Name" size="xl" class="w-1/2">
                <UInput
                  v-model="shippingState.lastName"
                  placeholder="Last name"
                />
              </UFormGroup>
            </div>

            <UFormGroup required label="Email" size="xl" class="mb-4">
              <UInput v-model="shippingState.email" placeholder="Email" />
            </UFormGroup>

            <UFormGroup required label="Street Address" size="xl" class="mb-4">
              <UInput
                v-model="shippingState.address"
                placeholder="Street Address"
              />
            </UFormGroup>

            <div class="w-full flex mb-4">
              <UFormGroup required label="Country" size="xl" class="w-1/2 mr-4">
                <UInput v-model="shippingState.country" placeholder="Country" />
              </UFormGroup>
              <UFormGroup required label="State" size="xl" class="w-1/2">
                <UInput v-model="shippingState.state" placeholder="State" />
              </UFormGroup>
            </div>

            <div class="w-full flex mb-4">
              <UFormGroup required label="City" size="xl" class="w-1/2 mr-4">
                <UInput v-model="shippingState.city" placeholder="City" />
              </UFormGroup>
              <UFormGroup required label="Zip/Postcode" size="xl" class="w-1/2">
                <UInput
                  v-model="shippingState.zip"
                  placeholder="Zip/Postcode"
                />
              </UFormGroup>
            </div>

            <UFormGroup required label="Telephone" size="xl" class="mb-4">
              <UInput
                v-model="shippingState.phone"
                placeholder="Phone number"
              />
            </UFormGroup>

            <button
              type="submit"
              class="float-end px-8 py-2 rounded-xl text-gray-400 font-semibold text-lg bg-[rgb(6,12,59)] hover:text-white dark:bg-[rgb(12,24,113)]"
            >
              Proceed
            </button>
          </UForm>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from "~/layouts/MainLayout.vue";
import { billingSchema, type BillingSchema } from "~/schemas/billing.schema";
import { shippingSchema, type ShippingSchema } from "~/schemas/shipping.schema";
import type { FormSubmitEvent, Form } from "#ui/types";

const toast = useToast();
const route = useRoute();
const router = useRouter();
const { $globalStore } = useNuxtApp();
const { selectedProduct, cart, totalChecked, quantitySelected, priceChecked } =
  storeToRefs($globalStore);

const type = computed(() => route.path.split("/").pop());

const formBilling = ref<Form<BillingSchema>>();
const formShipping = ref<Form<ShippingSchema>>();
const billingState = reactive({
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  phone: undefined,
  address: undefined,
  city: undefined,
  state: undefined,
  zip: undefined,
  country: undefined,
  companyName: undefined,
});
const shippingState = reactive({
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  phone: undefined,
  address: undefined,
  city: undefined,
  state: undefined,
  zip: undefined,
  country: undefined,
  companyName: undefined,
});
const sameShippingAddress = ref(true);

async function onSubmitBilling(event: FormSubmitEvent<BillingSchema>) {
  try {
    console.log(event.data);
  } catch (error) {
    console.log(error);
  }
}

async function onSubmitShipping(event: FormSubmitEvent<ShippingSchema>) {
  try {
    console.log(event.data);
  } catch (error) {
    console.log(error);
  }
}
</script>
