<template>
  <div class="flex h-screen flex-col bg-white dark:bg-[#191919]">
    <!-- <div class="bg-white dark:bg-slate-900"> -->
    <slot name="header"></slot>
    <main class="grow px-3 transition delay-500 md:px-5">
      <slot></slot>
    </main>
    <slot name="footer"></slot>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
const store = useStore();
</script>
