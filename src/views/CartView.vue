<template>
  <div>
    <Header></Header>
    <h1>This is the Cart view</h1>
    <section>
      <div class="container">
        <section v-if="cart.length">
          <div class="cart-details">
            <table>
              <thead>
                <tr>
                  <td>Remove</td>
                  <td>Image</td>
                  <td>Product</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Subtotal</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in cart" :key="index">
                  <td>
                    <svg
                      @click="deleteItem(index)"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-x-circle delete-btn"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                      />
                      <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </td>
                  <td>
                    <img :src="item.images[0]" :alt="item.brand" class="img" />
                  </td>
                  <td>{{ item.brand }}({{ item.size }})</td>
                  <td>
                    {{ item.price.toFixed(2) }}
                  </td>
                  <td>
                    <input
                      type="number"
                      v-model="item.quantity"
                      placeholder="QTY"
                      min="1"
                      max="10"
                      @input="updateTotalPrice(item)"
                    />
                  </td>
                  <td>
                    {{ (item.quantity * item.price).toFixed(2) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="checkout-section">
            <div class="checkout">
              <h3>Cart Details</h3>
              <table>
                <tbody>
                  <tr>
                    <td><strong>Total</strong></td>
                    <td>
                      <strong> {{ subtotal.toFixed(2) }}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Button
                :click="goToCheckoutPage"
                btnvalue="Proceed to Checkout"
              />
            </div>
          </div>
        </section>
        <div class="no-cart" v-else>
          <div class="no-cart-text">
            <img src="../assets/empty-cart.svg" alt="empty-cart" />
            <h3>cart is empty</h3>
            <p>Browse our Products and discover products.</p>
          </div>
          <router-link to="/shop">
            <button value="Start Shopping"></button>
          </router-link>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import Header from '@/components/Header.vue'
import { mapGetters, mapState } from 'vuex'
import router from '@/router'
import Footer from '@/components/Footer.vue'

export default {
  name: 'CartView',
  components: { Header, Button, Footer },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['subtotal']),
  },
  methods: {
    goToCheckoutPage() {
      router.push('/Checkout')
    },
  },
}
</script>

<style scoped>
section {
  width: 100%;
  padding-block: 30px;
}
.container {
  width: 85%;
  margin-inline: auto;
  max-width: 1440px;
}
.no-cart {
  display: grid;
  place-items: center;
  gap: 30px;
}

.no-cart-text {
  text-align: center;
}

.no-cart img {
  height: 150px;
  width: 30%;
}

.cart-details {
  overflow-x: auto;
}
.img {
  height: 70px;
  width: 70px;
  margin-inline: auto;
  object-fit: contain;
}

table {
  border-collapse: collapse;
  white-space: nowrap;
  width: 100%;
}
td {
  font-size: 1rem;
}

.delete-btn {
  cursor: pointer;
}

.cart-details table thead {
  border: 1px solid lightgrey;
  border-left: none;
  border-right: none;
}

.cart-details table thead tr td {
  font-weight: 300;
  text-transform: uppercase;
  padding-block: 1rem;
  text-align: center;
}

.cart-details table tbody td {
  padding-block: 1rem;
  text-align: center;
}

.cart-details table tbody td i {
  cursor: pointer;
}

/* Checkout */
.checkout-section {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.checkout {
  background-color: rgb(245, 244, 244);
  width: 40%;
  padding: 2.5rem;
  border: 1px solid lightgrey;
}

.checkout table {
  margin-bottom: 2rem;
  margin-top: 1rem;
}

.checkout h3 {
  text-align: center;
}

.checkout td {
  border: 1px solid lightgrey;
  padding: 0.8rem;
}
/* 
@media (max-width: 699px) {
  .cart-details table {
    table-layout: fixed;
  }
  .cart-details table thead td {
    width: 200px;
  }
  .checkout-section {
    flex-direction: column;
    gap: 3rem;
  }
  .checkout,
  .coupon {
    width: 100%;
  }
} */
</style>