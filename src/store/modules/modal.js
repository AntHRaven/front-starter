const state = {
  showModal: {
    title: null,
    modalType: null,
    width: "55%",
  },
};

const actions = {
  setShowModal(context, data) {
    context.commit("setShowModal", data);
  },
};

const mutations = {
  setShowModal(state, data) {
    state.showModal = data;
  },
};

const getters = {
  GETSHOWMODAL: (state) => state.showModal,
};

export default {
  state,
  actions,
  mutations,
  getters,
};
