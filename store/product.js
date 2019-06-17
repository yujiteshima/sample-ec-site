import {
  S_IRUSR
} from "constants";

export const state = () => ({
  products: [],
  current: "",
  // Pagenation用の情報
  paginationDisplay: false,
  pageObject: [],
  mode: "",
  displayItem: "",
  lastPage: "",
  select: "",
  keyword: ""

})

export const getters = {
  products: (state) => state.products
}

export const mutations = {
  setProducts(state, payload) {
    state.products = payload.products
    // Pagenation用Setter
    state.current = payload.current
    state.paginationDisplay = true
    state.pageObject = payload.pageAry
    state.mode = payload.mode
    state.displayItem = payload.displayItem
    state.lastPage = payload.lastPage
    state.select = payload.select
    state.keyword = payload.keyword
  }
}

export const actions = {
  async all({
    commit
  }) {
    const products = await this.$axios.$get(`https://sample-ec-site-api.herokuapp.com/api/v1/searches`)
    commit('setProducts', {
      products
    })
  },
  async nigiri({
    commit
  }) {
    let searchInfo = {
      mode: "nigiri",
      displayItem: 9,
      current: 1,
    }
    let url = "https://sample-ec-site-api.herokuapp.com/api/v1/searches"
    //let url = "http://localhost:3030/api/v1/searches"
    let json = fetch(url, {
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(searchInfo)
    })
    Promise.resolve(json)
      .then(result => {
        return result.json();
      })
      .then(response => {
        commit('setProducts', response)
        // console.log(response);
        // this.$store.state.products = response;
      })
      .catch(error => console.log(error));
  },
  async kaisen({
    commit
  }) {
    let searchInfo = {
      mode: "kaisen",
      displayItem: 9,
      current: 1,
    }
    let url = "https://sample-ec-site-api.herokuapp.com/api/v1/searches"
    //let url = "http://localhost:3030/api/v1/searches"
    let json = fetch(url, {
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(searchInfo)
    })
    Promise.resolve(json)
      .then(result => {
        return result.json();
      })
      .then(response => {
        commit('setProducts', response)
        // console.log(response);
        // this.$store.state.products = response;
      })
      .catch(error => console.log(error));
  },
  async siru({
    commit
  }) {
    let searchInfo = {
      mode: "siru",
      displayItem: 9,
      current: 1,
    }
    let url = "https://sample-ec-site-api.herokuapp.com/api/v1/searches"
    //let url = "http://localhost:3030/api/v1/searches"
    let json = fetch(url, {
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(searchInfo)
    })
    Promise.resolve(json)
      .then(result => {
        return result.json();
      })
      .then(response => {
        commit('setProducts', response)
        // console.log(response);
        // this.$store.state.products = response;
      })
      .catch(error => console.log(error));
  },
  async sousaku({
    commit
  }) {
    let searchInfo = {
      mode: "sousaku",
      displayItem: 9,
      current: 1,
    }
    let url = "https://sample-ec-site-api.herokuapp.com/api/v1/searches"
    //let url = "http://localhost:3030/api/v1/searches"
    let json = fetch(url, {
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(searchInfo)
    })
    Promise.resolve(json)
      .then(result => {
        return result.json();
      })
      .then(response => {
        commit('setProducts', response)
        // console.log(response);
        // this.$store.state.products = response;
      })
      .catch(error => console.log(error));
  },
  async select({
    commit
  }) {
    let searchInfo = {
      mode: "select",
      displayItem: 9,
      current: 1,
    }
    let url = "https://sample-ec-site-api.herokuapp.com/api/v1/searches"
    //let url = "http://localhost:3030/api/v1/searches"
    let json = fetch(url, {
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(searchInfo)
    })
    Promise.resolve(json)
      .then(result => {
        return result.json();
      })
      .then(response => {
        commit('setProducts', response)
        // console.log(response);
        // this.$store.state.products = response;
      })
      .catch(error => console.log(error));
  },
  selected({
    commit
  }, searchIf) {
    console.log(
      "@product.selected!!!!!!!!!!"
    )
    let searchInfo = {
      mode: "select",
      displayItem: 9,
      current: 1,
      select: searchIf.select,
      keyword: searchIf.keyword
    }
    let url = "https://sample-ec-site-api.herokuapp.com/api/v1/searches"
    //let url = "http://localhost:3030/api/v1/searches"
    let json = fetch(url, {
      mode: "cors",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(searchInfo)
    })
    Promise.resolve(json)
      .then(result => {
        return result.json();
      })
      .then(response => {
        commit('setProducts', response)
      })
      .catch(error => console.log(error));

  },
  paging({
    state,
    commit
  }, page) {
    let searchInfo = {
      mode: state.mode,
      displayItem: state.displayItem,
      current: page,
      select: state.select,
      keyword: state.keyword
    }
    let url = "https://sample-ec-site-api.herokuapp.com/api/v1/searches"
    //let url = "http://localhost:3030/api/v1/searches"
    let json = fetch(url, {
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(searchInfo)
    })
    Promise.resolve(json)
      .then(result => {
        return result.json();
      })
      .then(response => {
        commit('setProducts', response)
        // console.log(response);
        // this.$store.state.products = response;
      })
      .catch(error => console.log(error));
  }
}
