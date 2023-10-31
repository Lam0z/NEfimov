export default {
  state: {
    list: [],
  },
  getters: {
    getList: (state) => state.list,
  },
  mutations: {
    add(state, value) {
      if (value != "") state.list.push(value);
    },
    del(state, value) {
      state.list.splice(value, 1);
    },
  },
};
