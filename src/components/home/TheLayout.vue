<template>
  <main class="px-3 transition delay-500 md:px-5">
    <slot></slot>
  </main>
</template>
<script setup>
import { useStore } from "vuex";
const store = useStore();
</script>
