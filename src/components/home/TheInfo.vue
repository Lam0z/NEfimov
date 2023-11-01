<script setup>
// import { ref } from "vue";
// import { VARIABLE } from "@/constants/constants.js";
</script>

<template>
  <section class="pt-[100px] text-homeColor md:pt-[200px]" id="home">
    <div class="mx-auto max-w-[1200px]">
      <div class="flex flex-col items-center justify-between gap-2 sm:flex-row">
        <img
          src="@/assets/img/home/im.png"
          class="flex h-[250px] w-[250px] sm:order-1 md:h-auto md:w-auto"
          alt="logo"
        />
        <h1
          class="text-3xl font-bold text-homeColor dark:text-[#D9D9D9] md:text-5xl lg:text-6xl"
        >
          Hi 👋, <br />
          My name is <br />
          <span
            class="bggradi bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent"
            >Nick</span
          >
          <br />
          I build things for web
        </h1>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
