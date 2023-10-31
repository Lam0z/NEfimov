import { createStore } from "vuex";
import home from "./modules/home";

const store = createStore({
  namespaced: true,
  modules: {
    home,
  },
});

export default store;
