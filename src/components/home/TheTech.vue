<template>
  <section class="pt-[100px] md:pt-[150px]" id="tech">
    <div class="mx-auto max-w-[1200px]">
      <div class="">
        <div class="mb-[50px] text-center md:mb-[100px]">
          <h2
            class="dark:text-homeDarkTitle mb-5 text-2xl font-bold text-homeTitle md:text-4xl"
          >
            My Tech Stack
          </h2>
          <p
            class="text-1xl dark:text-homeDarkColor font-semibold text-homeColor md:text-3xl"
          >
            Technologies I’ve been working with recently
          </p>
        </div>
        <ul
          class="mdgap-[50px] grid grid-cols-2 items-center gap-[20px] md:grid-cols-4"
        >
          <li class="flex justify-center">
            <img src="../../assets/img/home/html.svg" alt="html" />
          </li>
          <li class="flex justify-center">
            <img src="@/assets/img/home/css.svg" alt="html" />
          </li>
          <li class="flex justify-center">
            <img src="@/assets/img/home/js.svg" alt="html" />
          </li>
          <li class="flex justify-center">
            <img src="@/assets/img/home/tw.svg" alt="html" />
          </li>
          <li class="flex justify-center">
            <img src="@/assets/img/home/sass.svg" alt="html" />
          </li>
          <li class="flex justify-center">
            <img src="@/assets/img/home/gitSvg.svg" alt="html" />
          </li>
          <li class="flex justify-center">
            <img src="@/assets/img/home/vscode.svg" alt="html" />
          </li>
          <li class="flex justify-center">
            <img src="@/assets/img/home/bootstrap.svg" alt="html" />
          </li>
          <!-- <li class="flex justify-center" v-for="img in images" :key="img">
            <img :src="img.path" alt="alt-text" />
            <p>{{ img.alt }}</p>
          </li> -->
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      images: [
        { alt: "html", path: "../../assets/img/home/html.svg" },
        { alt: "html", path: "../../assets/img/home/css.svg" },
        { alt: "html", path: "../../assets/img/home/js.svg" },
        { alt: "html", path: "../../assets/img/home/tw.svg" },
        { alt: "html", path: "../../assets/img/home/sass.svg" },
        { alt: "html", path: "../../assets/img/home/gitSvg.svg" },
        { alt: "html", path: "../../assets/img/home/vscode.svg" },
        { alt: "html", path: "../../assets/img/home/github.svg" },
        { alt: "html", path: "../../assets/img/home/bootstrap.svg" },
      ],
    };
  },
};
// import { ref } from "vue";
// import { useStore } from "vuex";
// const store = useStore();
// console.log(store.state.home.images);
// const images = [
//   { path: "@/assets/img/home/html.svg" },
//   { path: "@/assets/img/home/css.svg" },
//   { path: "@/assets/img/home/js.svg" },
//   { path: "@/assets/img/home/tw.svg" },
//   { path: "@/assets/img/home/sass.svg" },
//   { path: "@/assets/img/home/gitSvg.svg" },
//   { path: "@/assets/img/home/vscode.svg" },
//   { path: "@/assets/img/home/github.svg" },
//   { path: "@/assets/img/home/bootstrap.svg" },
// ];
</script>
