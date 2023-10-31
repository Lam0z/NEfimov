<script setup>
// import { ref } from "vue";
// import { VARIABLE } from "@/constants/constants.js";
</script>

<template>
  <nav class="fixed bottom-0 left-0 flex w-full justify-center gap-5">
    <router-link to="/" class="hover:underline">Home</router-link>
    <router-link to="/about" class="hover:underline">About</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss"></style>
