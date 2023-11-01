<template>
  <section class="pt-[100px] md:pt-[150px]" id="projects">
    <div class="mx-auto max-w-[1200px]">
      <div class="">
        <div class="mb-[50px] text-center md:mb-[100px]">
          <h2
            class="dark:text-homeDarkTitle mb-5 text-2xl font-bold text-homeTitle md:text-4xl"
          >
            Projects
          </h2>
          <p
            class="text-1xl dark:text-homeDarkColor font-semibold text-homeColor md:text-3xl"
          >
            Things I’ve built so far
          </p>
        </div>
        <ul
          class="mdgap-[50px] grid grid-cols-1 items-center gap-[20px] sm:grid-cols-2 md:grid-cols-3"
        >
          <li class="flex flex-col gap-y-5 rounded-xl shadow-lg md:rounded-2xl">
            <img
              src="../../assets/img/home/rec.jpg"
              class="rounded-[15px] rounded-b-none"
              alt=""
            />
            <div class="flex flex-col gap-y-5 p-6">
              <h3
                class="dark:text-homeDarkTitle text-xl font-medium text-homeTitle md:text-2xl"
              >
                Project Tile goes here
              </h3>
              <p
                class="dark:text-homeDarkColor text-lg font-light text-homeColor"
              >
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </p>
              <div
                class="dark:text-homeDarkTitle text-sm font-light text-homeColor"
              >
                <span>Tech stack :</span>
                <span class="dark:text-homeDarkColor text-homeColor"
                  >HTML , JavaScript, SASS, React</span
                >
              </div>
              <div class="flex justify-between">
                <a
                  href=""
                  class="dark:text-homeDarkTitle group flex gap-x-1 text-base text-homeTitle underline"
                >
                  <LinkIcon
                    class="fill-homeDarkColor h-5 w-5 hover:cursor-pointer group-hover:fill-homeColor"
                  />
                  <span
                    class="dark:text-homeDarkTitle text-base text-homeTitle underline"
                    >Live Preview</span
                  ></a
                ><a
                  href=""
                  class="dark:text-homeDarkTitle group flex gap-x-1 text-base text-homeTitle underline"
                >
                  <svg
                    height="32"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="32"
                    data-view-component="true"
                    class="fill-homeDarkColor h-5 w-5 hover:cursor-pointer group-hover:fill-homeColor"
                  >
                    <path
                      d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
                    ></path>
                  </svg>
                  <span class="">View Code</span></a
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup>
import { LinkIcon } from "@heroicons/vue/24/solid";
</script>
