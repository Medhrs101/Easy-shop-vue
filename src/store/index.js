import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    addToCart(state, payload) {
      if (state.cart.length != 0) {
        let product = state.cart.find((product) => product._id === payload._id)
        if (product) {
          if (product.size === payload.size) {
            product.quantity += payload.quantity
            product.quantity = product.quantity >= 10 ? 10 : product.quantity
          } else {
            state.cart = [...state.cart, payload]
          }
        } else {
          state.cart = [...state.cart, payload]
        }
      } else {
        state.cart = [...state.cart, payload]
      }
    },
    emptyCart(state, payload) {
      state.cart = []
    },
    deleteProduct(state, payload) {
        let index = state.cart.indexOf(payload);
        state.cart.splice(index, 1);
    },
    updateQuantity(state, payload) {
        // increase the quantity of the item in the cart
        if (payload.quantity > 0) {
            let item = state.cart.find(
                (item) =>
                    item._id === payload._id && item.size === payload.size
            );
            item.quantity = payload.quantity;
        }
    },
  },
  actions: {
    add_product_to_cart(context, payload) {
      context.commit('addToCart', payload)
    },
    delete_product(context, payload) {
      context.commit("deleteProduct", payload);
    },
    update_quantity(context, payload) {
      context.commit("updateQuantity", payload);
    },
  },
  getters: {
    subtotal: (state) => {
      let subtotal = 0
      state.cart.forEach((item) => {
        subtotal += item.price * item.quantity
      })
      return subtotal
    },
  },
})
