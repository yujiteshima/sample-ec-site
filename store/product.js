export const state = () => ({
  products: []
})

export const getters = {
  products: (state) => state.products
}

export const mutations = {
  setProducts(state, payload) {
    state.products = payload.products
  }
}

export const actions = {
  async all({
    commit
  }) {
    const products = await this.$axios.$get(`http://localhost:3030/api/v1/searches`)
    commit('setProducts', {
      products
    })
  }
}
