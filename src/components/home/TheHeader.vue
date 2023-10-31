<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { BugAntIcon, BellIcon, CalculatorIcon } from "@heroicons/vue/24/solid";
const store = useStore();
const toggleMenu = () => store.commit("changeIsActive");
</script>

<template>
  <header
    class="fixed left-0 right-0 top-0 bg-slate-300 font-medium text-homeColor"
  >
    <div class="mx-auto max-w-[1200px]">
      <div
        class="flex flex-wrap items-center gap-x-[65px] gap-y-[10px] px-3 py-2"
      >
        <img src="@/assets/img/home/logo.png" alt="" class="mr-auto flex" />
        <nav>
          <ul class="hidden flex-wrap gap-x-[65px] gap-y-[10px] md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Tech Stack</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss"></style>
