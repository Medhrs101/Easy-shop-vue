<template>
  <div>
    <Header></Header>
    <section>
      <div class="container">
        <form class="info" @submit.prevent="placeOrder">
          <div class="form">
            <h4>Address</h4>
            <div class="form-group">
              <div class="form-field">
                <label>First Name *</label>
                <input type="text" required />
              </div>
              <div class="form-field">
                <label>Last Name *</label>
                <input type="text" required />
              </div>
            </div>
            <div class="form-field">
              <label>Country *</label>
              <input type="text" required />
            </div>
            <div class="form-field">
              <label>Street Address*</label>
              <input type="text" required v-model="userAddress" />
            </div>
            <div class="form-group">
              <div class="form-field">
                <label>Town / City *</label>
                <input type="text" required />
              </div>
              <div class="form-field">
                <label>State / County *</label>
                <input type="text" required v-model="userState" />
              </div>
            </div>
            <div class="form-field">
              <label>Email Address *</label>
              <input type="email" required />
            </div>
          </div>
          <aside>
            <h4>Your Order</h4>
            <table class="table table-summary">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Total</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(item, index) in cart" :key="index">
                  <td>
                    <span>{{ item.name }}</span> <br />
                    Size: {{ item.size }} <br />
                    Qty: {{ item.quantity }}
                  </td>
                  <td>
                    {{ item.price.toFixed(2) }}
                  </td>
                </tr>

                <tr class="summary-subtotal">
                  <td>Subtotal:</td>
                  <td>{{ subtotal.toFixed(2) }}</td>
                </tr>
                <!-- End .summary-subtotal -->
                <tr class="summary-total">
                  <td>Total :</td>
                  <td>
                    {{ subtotal.toFixed(2) }}
                  </td>
                </tr>
                <!-- End .summary-total -->
              </tbody>
            </table>
            <button class="submit">
              <template>
                <span>Order</span>
                <div class="icon">
                  <i class="fa fa-credit-card"></i>
                </div>
              </template>
            </button>
          </aside>
        </form>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Header from '../components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Checkout',
  components: { Header, Footer },
  data() {
    return {
      userState: '',
      userAddress: '',
      price: '',
      email: '',
    }
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['subtotal']),
  },
}
</script>

<style scoped>
section {
  width: 100%;
  padding-block: 30px;
}
.container {
  width: 90%;
  margin-inline: auto;
  max-width: 1440px;
}
.info {
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  margin-top: 10px;
}

.info h4 {
  margin-bottom: 10px;
  text-align: center;
}

.form {
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

form input {
  border-radius: 0px;
  padding: 0px;
  font-size: 1.2rem;
}

.form-group {
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
}
.form-field {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

label {
  font-size: 1.2rem;
}

.form-field input {
  padding: 7px 9px;
  outline: none;
  transition: 0.25s;
  background-color: whitesmoke;
  border: 1px solid rgb(231, 228, 228);
  width: 100%;
}
.form-field input:focus {
  border: 2px solid rgb(105, 102, 102);
}

aside {
  flex: 1;
  padding: 20px;
  border: 1px dashed lightgray;
  background-color: whitesmoke;
  /* height: auto; */
}

aside h4 {
  padding-bottom: 1.3rem;
  border-bottom: 2px solid black;
}

table {
  border-collapse: collapse;
  width: 100%;
}
.table.table-summary thead th,
.table.table-summary .summary-subtotal td {
  color: rgb(43, 42, 42);
  font-weight: 500;
  font-size: 1.3rem;
}
table tbody tr td span {
  width: 200px;
  white-space: nowrap;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 10px;
}
.submit {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  font-size: 1.6rem;
  width: 100%;
  color: green;
  background-color: transparent;
  border-radius: 0px;
  border: 1px solid green;
}

.submit:hover {
  background-color: rgb(198, 197, 197);
}
.icon {
  position: absolute;
  top: 0.5rem;
  right: 3rem;
  font-size: 1rem;
}
</style>