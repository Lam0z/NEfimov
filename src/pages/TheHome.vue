<template>
  <TheHeader />
  <TheLayout>
    <TheInfo />
    <TheTech />
    <TheProjects />
  </TheLayout>
  <TheFooter />
</template>
<script setup>
import TheHeader from "@/components/home/TheHeader.vue";
import TheInfo from "@/components/home/TheInfo.vue";
import TheTech from "@/components/home/TheTech.vue";
import TheLayout from "@/components/home/TheLayout.vue";
import TheProjects from "@/components/home/TheProjects.vue";
import TheFooter from "@/components/home/TheFooter.vue";
</script>
