const state = {
  count: 0,
};

const mutations = {
  increment(state, payload) {
    state.count++;
  },
  dicrement(state, payload) {
    state.count--;
  },
};

export default { state, mutations };
