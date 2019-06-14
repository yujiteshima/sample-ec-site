export const state = () => ({
  signModal: true,
  loginModal: true,
})

export const getters = {}

export const mutations = {
  loginOpen(state, payload) {
    if (state.signModal == false) {
      state.signModal = true
    }
    state.loginModal = false
  },
  signOpen(state, payload) {
    if (state.loginModal == false) {
      state.loginModal = true
    }
    state.signModal = true
  },
  modalClose(state, payload) {
    state.loginModal = true
    state.signModal = true
  }
}



export const actions = {
  loginModal({
    commit
  }) {
    commit('loginOpen')
  },
  signUpModal({
    commit
  }) {
    commit('signOpen')
  },
  modalClose({
    commit
  }) {
    commit('modalClose')
  }
}
