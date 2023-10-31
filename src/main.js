import { createApp } from "vue";
import store from "@/stores/index";
import App from "./App.vue";
import router from "./router";

createApp(App).use(store).use(router).mount("#app");

import "@/assets/styles/tailwind.css";
import "@/assets/styles/scss/main.scss";
