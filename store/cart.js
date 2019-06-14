export const state = () => ({
  items: []
})

export const getters = {
  products(state, getters, rootState) {
    // ここでrootStateはgettersの中では第３引数で渡される。
    // よってstate,gettersを使わなくても、
    // products(rootStateでは拾えない)
    //console.log(rootState.product.products)
    return rootState.product.products
  },

}

export const mutations = {
  setCart(state, payload) {
    //console.log(payload)

    let item = payload.item
    //console.log(item)
    let id = payload.id
    //console.log(id)
    // let item = this.getters.products.find((cart) => {
    //   return cart.id === payload;
    // })
    console.log("this is setCart @cartStore!")
    if (state.items.find((cart) => {
        return cart.id === payload.id
      })) {
      state.items.find((cart) => {
        return cart.id === id
      }).count++
    } else {
      state.items.push(item)
    }
    //console.log(state.items)
  },
  increment(state, payload) {
    let item = state.items.find(cart => {
      return cart.id === payload;
    })
    item.count++
  },
  decrement(state, payload) {
    let item = state.items.find(cart => {
      return cart.id === payload;
    })
    item.count--
  },
  delete(state, payload) {

    console.log("this is delete @cartjs.mutations.delete")
    let item = state.items.find(cart => {
      return cart.id === payload;
    })
    if (confirm(`カートから${item.name}を削除しても宜しいですか？`)) {
      let itemIndex = state.items.indexOf(item);
      state.items.splice(itemIndex, 1);
    }
  },
  thanks(state) {
    console.log("this is thanksmutations @cartjs")
    state.items = [];
  }
}

export const actions = {
  addCart({
    rootState,
    commit
  }, id) {
    let products = rootState.product.products
    let item = products.find((cart) => cart.id === id)
    let setCartData = {
      item,
      id
    }
    console.log(setCartData)
    commit('setCart', setCartData)
  },
  increment({
    commit
  }, id) {
    commit('increment', id)
    console.log(`hi!increment!${id}`)
  },
  decrement({
    commit
  }, id) {
    commit('decrement', id)
    console.log(`hi!decrement!!${id}`)
  },
  itemDel({
    commit
  }, id) {
    // let item = this.state.items.find(cart => {
    //   return cart.id === id;
    // })
    commit('delete', id)
  }
}
