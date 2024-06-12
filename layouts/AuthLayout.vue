<template>
  <div class="grid lg:grid-cols-2 h-screen w-full bg-transparent">
    <div
      class="left place-self-center w-full px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-52"
    >
      <div class="header text-center mb-6">
        <div class="flex justify-center">
          <Logo />
        </div>

        <!-- Form -->
        <slot />
      </div>
    </div>

    <div class="right hidden lg:block"></div>
  </div>
</template>

<style scoped>
.right {
  background: linear-gradient(-45deg, #b3e2a7, #80b9ad, #6295a2, #6295a2);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
