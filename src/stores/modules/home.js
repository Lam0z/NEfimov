export default {
  state: {
    isActive: false,
    images: [
      { path: "@/assets/img/home/html.svg" },
      { path: "@/assets/img/home/css.svg" },
      { path: "@/assets/img/home/js.svg" },
      { path: "@/assets/img/home/tw.svg" },
      { path: "@/assets/img/home/sass.svg" },
      { path: "@/assets/img/home/gitSvg.svg" },
      { path: "@/assets/img/home/vscode.svg" },
      { path: "@/assets/img/home/github.svg" },
      { path: "@/assets/img/home/bootstrap.svg" },
    ],
  },
  getters: {
    getIsActive: (state) => state.isActive,
  },
  mutations: {
    changeIsActive(state) {
      state.isActive = !state.isActive;
      console.log(state.isActive);
    },
  },
};
