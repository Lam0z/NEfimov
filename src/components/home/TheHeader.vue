<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/solid";
const store = useStore();
let isScroll = ref(false);
const toggleMenu = () => store.commit("changeIsActive");
onMounted(() => {
  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 0) {
      isScroll.value = true;
    } else {
      isScroll.value = false;
    }
  });
});

// const handleScroll =  (e)=>{

// }
</script>

<template>
  <header
    class="dark:text-homeDarkColor border-homeDarkColor fixed left-0 right-0 top-0 bg-white font-medium text-homeColor transition dark:bg-[#191919]"
    :class="[isScroll ? 'scrolled' : 'border-b-0']"
  >
    <div class="mx-auto max-w-[1200px]">
      <div
        class="flex flex-wrap items-center gap-x-[20px] gap-y-0 px-3 py-2 md:gap-y-[10px] lg:gap-x-[65px]"
      >
        <img src="@/assets/img/home/logo.png" alt="" class="mr-auto flex" />
        <nav>
          <ul
            class="hidden flex-wrap gap-y-[10px] sm:gap-x-[20px] md:flex lg:gap-x-[65px]"
          >
            <li><a href="#home">Home</a></li>
            <!-- <li><a href="#about">About</a></li> -->
            <li><a href="#tech">Tech Stack</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div class="hidden gap-x-[20px] md:flex">
          <svg
            height="32"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            width="32"
            data-view-component="true"
            class="dark:fill-homeDarkColor h-5 w-5 fill-black hover:cursor-pointer hover:fill-homeColor"
          >
            <path
              d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
            ></path>
          </svg>
          <svg
            fill="#000000"
            width="800px"
            height="800px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            class="dark:fill-homeDarkColor h-5 w-5 fill-black hover:cursor-pointer hover:fill-homeColor"
          >
            <title>telegram</title>
            <path
              d="M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z"
            ></path>
          </svg>
          <svg
            fill="#000000"
            width="800px"
            height="800px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            class="dark:fill-homeDarkColor h-5 w-5 fill-black hover:cursor-pointer hover:fill-homeColor"
          >
            <title>vk</title>
            <path
              d="M25.217 22.402h-2.179c-0.825 0-1.080-0.656-2.562-2.158-1.291-1.25-1.862-1.418-2.179-1.418-0.445 0-0.572 0.127-0.572 0.741v1.968c0 0.53-0.169 0.847-1.566 0.847-2.818-0.189-5.24-1.726-6.646-3.966l-0.021-0.035c-1.632-2.027-2.835-4.47-3.43-7.142l-0.022-0.117c0-0.317 0.127-0.614 0.741-0.614h2.179c0.55 0 0.762 0.254 0.975 0.846 1.078 3.112 2.878 5.842 3.619 5.842 0.275 0 0.402-0.127 0.402-0.825v-3.219c-0.085-1.482-0.868-1.608-0.868-2.137 0.009-0.283 0.241-0.509 0.525-0.509 0.009 0 0.017 0 0.026 0.001l-0.001-0h3.429c0.466 0 0.635 0.254 0.635 0.804v4.34c0 0.465 0.212 0.635 0.339 0.635 0.275 0 0.509-0.17 1.016-0.677 1.054-1.287 1.955-2.759 2.642-4.346l0.046-0.12c0.145-0.363 0.493-0.615 0.9-0.615 0.019 0 0.037 0.001 0.056 0.002l-0.003-0h2.179c0.656 0 0.805 0.337 0.656 0.804-0.874 1.925-1.856 3.579-2.994 5.111l0.052-0.074c-0.232 0.381-0.317 0.55 0 0.975 0.232 0.317 0.995 0.973 1.503 1.566 0.735 0.727 1.351 1.573 1.816 2.507l0.025 0.055c0.212 0.612-0.106 0.93-0.72 0.93zM20.604 1.004h-9.207c-8.403 0-10.392 1.989-10.392 10.392v9.207c0 8.403 1.989 10.392 10.392 10.392h9.207c8.403 0 10.392-1.989 10.392-10.392v-9.207c0-8.403-2.011-10.392-10.392-10.392z"
            ></path>
          </svg>
        </div>
        <Bars3Icon
          v-if="!store.state.home.isActive"
          class="block h-5 w-5 md:hidden"
          @click="toggleMenu"
        />
      </div>
    </div>
    <div
      v-if="store.state.home.isActive"
      class="absolute right-0 top-0 h-screen w-full bg-white transition dark:bg-homeTitle md:hidden"
      :class="{ menuActive: store.state.home.isActive }"
    >
      <div class="mx-auto flex max-w-[1200px] flex-col p-5 pt-8">
        <XMarkIcon
          v-if="store.state.home.isActive"
          class="h-5 w-5 self-end"
          @click="toggleMenu"
        />
        <nav>
          <ul class="flex flex-col gap-5">
            <li><a href="#home" @click="toggleMenu">Home</a></li>
            <!-- <li><a href="" @click="toggleMenu">About</a></li> -->
            <li><a href="#tech" @click="toggleMenu">Tech Stack</a></li>
            <li><a href="#projects" @click="toggleMenu">Projects</a></li>
            <li><a href="#contact" @click="toggleMenu">Contact</a></li>
          </ul>
          <div class="mt-5 flex gap-x-[20px]">
            <svg
              height="32"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              data-view-component="true"
              class="dark:fill-homeDarkColor h-5 w-5 fill-black hover:cursor-pointer hover:fill-homeColor"
            >
              <path
                d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
              ></path>
            </svg>
            <svg
              fill="#000000"
              width="800px"
              height="800px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              class="dark:fill-homeDarkColor h-5 w-5 fill-black hover:cursor-pointer hover:fill-homeColor"
            >
              <title>telegram</title>
              <path
                d="M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z"
              ></path>
            </svg>
            <svg
              fill="#000000"
              width="800px"
              height="800px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              class="dark:fill-homeDarkColor h-5 w-5 fill-black hover:cursor-pointer hover:fill-homeColor"
            >
              <title>vk</title>
              <path
                d="M25.217 22.402h-2.179c-0.825 0-1.080-0.656-2.562-2.158-1.291-1.25-1.862-1.418-2.179-1.418-0.445 0-0.572 0.127-0.572 0.741v1.968c0 0.53-0.169 0.847-1.566 0.847-2.818-0.189-5.24-1.726-6.646-3.966l-0.021-0.035c-1.632-2.027-2.835-4.47-3.43-7.142l-0.022-0.117c0-0.317 0.127-0.614 0.741-0.614h2.179c0.55 0 0.762 0.254 0.975 0.846 1.078 3.112 2.878 5.842 3.619 5.842 0.275 0 0.402-0.127 0.402-0.825v-3.219c-0.085-1.482-0.868-1.608-0.868-2.137 0.009-0.283 0.241-0.509 0.525-0.509 0.009 0 0.017 0 0.026 0.001l-0.001-0h3.429c0.466 0 0.635 0.254 0.635 0.804v4.34c0 0.465 0.212 0.635 0.339 0.635 0.275 0 0.509-0.17 1.016-0.677 1.054-1.287 1.955-2.759 2.642-4.346l0.046-0.12c0.145-0.363 0.493-0.615 0.9-0.615 0.019 0 0.037 0.001 0.056 0.002l-0.003-0h2.179c0.656 0 0.805 0.337 0.656 0.804-0.874 1.925-1.856 3.579-2.994 5.111l0.052-0.074c-0.232 0.381-0.317 0.55 0 0.975 0.232 0.317 0.995 0.973 1.503 1.566 0.735 0.727 1.351 1.573 1.816 2.507l0.025 0.055c0.212 0.612-0.106 0.93-0.72 0.93zM20.604 1.004h-9.207c-8.403 0-10.392 1.989-10.392 10.392v9.207c0 8.403 1.989 10.392 10.392 10.392h9.207c8.403 0 10.392-1.989 10.392-10.392v-9.207c0-8.403-2.011-10.392-10.392-10.392z"
              ></path>
            </svg>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.scrolled {
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(to right, #13b0f5, #e70faa);
  border-image-slice: 1;
}
</style>
