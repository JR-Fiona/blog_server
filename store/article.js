export const state = () => ({
  title: ''
});

export const mutations = {
  setTitle(state, text) {
    state.title = text;
  },
};
