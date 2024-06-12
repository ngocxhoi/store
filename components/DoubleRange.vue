<template>
  <div id="app">
    <div class="range-slider">
      <input
        @input="slider"
        v-model.number="minPrice"
        min="0"
        max="299"
        step="1"
        type="range"
      />
      <input
        @input="slider"
        v-model.number="maxPrice"
        min="0"
        max="299"
        step="1"
        type="range"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const minPrice = ref(0);
const maxPrice = ref(299);

const emits = defineEmits(["setPrice"]);

function slider() {
  if (minPrice.value > maxPrice.value) {
    let tmp = maxPrice.value;
    maxPrice.value = minPrice.value;
    minPrice.value = tmp;
  }
  emits("setPrice", minPrice.value, maxPrice.value);
}
</script>

<style scoped>
.range-slider {
  width: 100%;
  margin: auto;
  text-align: center;
  position: relative;
  height: 2rem;
}

.range-slider svg,
.range-slider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 0;
}

input[type="number"] {
  border: 1px solid #ddd;
  text-align: center;
  font-size: 1.6em;
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"]:invalid,
input[type="number"]:out-of-range {
  border: 2px solid #ff6347;
}

input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #2497e3;
}

input[type="range"]:focus::-ms-fill-lower {
  background: #2497e3;
}

input[type="range"]:focus::-ms-fill-upper {
  background: #2497e3;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: #2497e3;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}

input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid #2497e3;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #a1d0ff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}
</style>
