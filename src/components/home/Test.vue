<script setup>
import { onMounted, ref, computed } from "vue";
const data = ref(["s"]);
// onMounted(async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts/1/comments",
//   );
//   const data = await res.json();
//   data.value = data;
//   console.log(data);
// });
onMounted(async () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      data.value = json;
    });
});
let value = ref("");

const filterList = computed(() => {
  if (value.value) {
    return data.value.filter((i) =>
      i.name.toLowerCase().includes(value.value.toLowerCase()),
    );
  } else {
    return data.value;
  }
});
</script>

<template>
  <section class="pt-[200px]">
    <h1>Images</h1>
    filter
    <input class="block border" type="text" name="" id="" v-model="value" />
    <TransitionGroup name="list" tag="div">
      <div v-for="item in filterList" :key="item">{{ item.name }}</div>
    </TransitionGroup>
  </section>
</template>

<style>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
