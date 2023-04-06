import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cart: []
    },
    mutations: {
        addToCart(state, payload) {
            const product = payload.product
            const existingCartItem = state.cart.find(item => item.productId === product.id)
            if (existingCartItem) {
                existingCartItem.quantity++
            } else {
                state.cart.push({
                    productId: product.id,
                    name: product.title,
                    price: product.price,
                    quantity: 1
                })
            }
        },
        removeFromCart(state, payload) {
            const productId = payload.productId
            const cartItemIndex = state.cart.findIndex(item => item.productId === productId)
            if (cartItemIndex !== -1) {
                const cartItem = state.cart[cartItemIndex]
                if (cartItem.quantity > 1) {
                    cartItem.quantity--
                } else {
                    state.cart.splice(cartItemIndex, 1)
                }
            }
        }
    },
    actions: {
        addToCart(context, payload) {
            fetch(`https://fakestoreapi.com/products/${payload.productId}`)
                .then(response => response.json())
                .then(data => {
                    context.commit('addToCart', { product: data })
                })
        },
        removeFromCart(context, payload) {
            context.commit('removeFromCart', payload)
        }
    },
    getters: {
        getCartTotal(state) {
            return state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
        }
    }
})