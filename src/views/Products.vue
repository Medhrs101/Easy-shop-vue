<template>
  <div>
    <Header></Header>
    <div class="container">
      <div class="select">
        <select id="filter" v-model="selectedGender" class="select-box">
          <option value="">All</option>

          <option
            v-for="type in ['Men', 'Women', 'Boys', 'Girls']"
            :value="type"
          >
            {{ type }}
          </option>
        </select>
      </div>

      <div class="product-container" v-if="loaded">
        <product-card
          v-for="(product, index) in filteredProducts"
          :key="index"
          :productId="product._id"
          :productName="product.name"
          :brand="product.brand"
          :price="product.price"
          :currency="product.currency"
          :ratings="product.rating"
          :image_url="product.images[0]"
          :in_stock="product.in_stock"
        />
      </div>
      <div v-else>
        <h1>Loading Data...</h1>
      </div>
      <!-- <p>{{ JSON.stringify(products) }}</p> -->
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Header.vue'
import ProductCard from '@/components/cards/productCard.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Products',
  components: { Header, ProductCard, Footer },
  data() {
    return {
      products: [],
      loaded: false,
      selectedGender: '',
    }
  },
  async created() {
    this.getProducts()
  },
  methods: {
    getProducts() {
      this.loaded = false
      for (let index = 1; index < 10; index++) {
        axios
          .get(`https://gorana.onrender.com/products/?page=${index}`)
          .then((res) => {
            let prods = res.data.results
              .map((product) => {
                product.rating = Math.floor(Math.random() * 5) + 1
                return product
              })
              .filter((product) => product.brand !== 'PARFAIT')
            this.products = [...this.products, ...prods]
            if (index === 3) this.loaded = true
          })
          .catch((err) => {
            console.log(err)
            this.loaded = false
          })
      }
    },
  },
  computed: {
    filteredProducts() {
      if (this.selectedGender === '') {
        return this.products
      } else {
        return this.products.filter((product) => {
          console.log(product.gender)
          return product.gender === this.selectedGender
        })
      }
    },
  },
}
</script>

<style>
.container {
  width: 85%;
  margin-inline: auto;
  max-width: 1440px;
}

.product-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  padding-block: 4rem;
}

.select {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: normal;
}
.select-box {
  background-color: #9cbbc0;
  border: none;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  border-radius: 5px;
  width: 200px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8'%3E%3Cpath fill='%239fa3b' d='M13.8 1.6l-6.9 6.9c-.2.2-.5.2-.7 0L.2 1.6C0 1.4 0 1.1.2.9c.2-.2.5-.2.7 0L7 7.8 13 1c.2-.2.5-.2.7 0 .3.3.3.6 0 .8z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
}

/* style for select box when opened */
.select-box:focus {
  outline: none;
  box-shadow: 0 0 0 2px #2684ff;
}
</style>