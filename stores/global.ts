import { defineStore } from "pinia";
import type { Card } from "~/types/card";

interface Cart extends Card {
  quantity: number;
  size: number;
  checked: boolean;
}

export const useMyGlobalStore = defineStore({
  id: "myGlobalStore",
  state: () => ({
    searchValue: "",
    cart: [] as Cart[],
    selectedProduct: {} as Card,
  }),
  getters: {
    sumPrice: (state) => {
      let total = 0;
      state.cart.forEach((item) => {
        if (item.newPrice) {
          total += Number(item.newPrice) * item.quantity;
        } else total += Number(item.price) * item.quantity;
      });
      return Math.round(total * 100) / 100;
    },

    totalChecked: (state) => {
      return state.cart.every((item) => item.checked == true);
    },

    priceChecked: (state) => {
      let total = 0;
      state.cart.forEach((item) => {
        if (item.checked && item.newPrice) {
          total += Number(item.newPrice) * item.quantity;
        } else if (item.checked && !item.newPrice)
          total += Number(item.price) * item.quantity;
        else total += 0;
      });
      return total;
    },

    quantitySelected: (state) => {
      let index = 0;
      state.cart.forEach((item) => (item.checked == true ? index++ : index));
      return index;
    },
  },
  actions: {
    setAllChecked(state: boolean) {
      this.cart.map((item) => (item.checked = state));
    },

    addToCart(quantity: number, size: number, checked: boolean = false) {
      this.cart.push({
        ...this.selectedProduct,
        quantity,
        size,
        checked,
      });
    },

    removeCart(card: Cart) {
      this.cart.splice(this.cart.indexOf(card), 1);
    },

    fillChecked(boolean: boolean) {
      this.cart.map((item) => (item.checked = boolean));
    },
  },
});
