export const state = () => ({
  products: []
})

export const getters = {
  products: (state) => state.getProducts
}

export const mutations = {
  setProducts(state, payload) {
    state.products = payload.products
    console.log(payload.products)
    alert("stateに入れたで！")
  }
}

export const actions = {
  async all({
    commit
  }) {
    alert("all is doing in vuex store!")
    const products = await this.$axios.$get(`http://localhost:3030/api/v1/searches`)
    commit('setProducts', {
      products
    })
  },
  hello({
    commit
  }) {
    alert("hello")
    console.log("OK!!mapAction is doing!!")
  }
}
