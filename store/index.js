import Vuex from 'vuex'
import productsModule from './products'
import usersModule from './users'
import cartsModule from './carts'
import uiModule from './ui'


new Vuex.Store({
  modules: {
    products: productsModule,
    users: usersModule,
    carts: cartsModule,
    ui: uiModule,
  }
})