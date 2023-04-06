<template>
  <div>
    <Header></Header>
    <router-link to="/products" id="prev"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
        />
      </svg>
    </router-link>
    <div class="container">
      <div class="cart-item" v-if="loaded">
        <div class="image-section">
          <img :src="activeImage" class="main-img" />
          <div class="img-thumbnails">
            <img
              v-for="(image, index) in product.images?.slice(0, 4)"
              :key="index"
              :src="image"
              class="thumbnail"
              @click="setActiveImage(index)"
            />
          </div>
        </div>
        <div>
          <span>Home / {{ product.brand }}</span>
          <h4>{{ product.name }}</h4>
          <h4>{{ product.price }}</h4>
          <select v-model="size">
            <option disabled>Select Size</option>
            <option>Medium</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
          </select>
          <p class="weak" v-if="validSize">Please select a size</p>
          <div>
            <input
              type="number"
              placeholder="QTY"
              min="1"
              max="10"
              v-model="quantity"
            />
            <br />
            <br />
            <br />
            <Button btnvalue="Add To Cart" :click="addProductToCart" />
          </div>
          <h4>Product Details</h4>
          <p>
            {{ product.description }}
          </p>
        </div>
      </div>
      <div v-else>
        <h1>Lodaing Data...</h1>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import Header from '../components/Header.vue'
import Button from '@/components/Button.vue'
import { mapActions } from 'vuex'
import Footer from '@/components/Footer.vue'

export default {
  name: 'ProductDetails',
  components: {
    Header,
    Button,
    Footer,
  },

  data() {
    return {
      activeImage: '',
      product: [],
      loaded: false,
      size: 'Select Size',
      quantity: 1,
      validSize: false,
    }
  },
  methods: {
    ...mapActions(['add_product_to_cart']),
    setActiveImage(image) {
      this.activeImage = this.product.images[image]
    },
    addProductToCart() {
      if (this.size === 'Select Size') {
        this.validSize = true
      } else {
        let product = {
          ...this.product,
          quantity: this.quantity,
          size: this.size,
        }
        this.add_product_to_cart(product)
      }
    },
  },
  async created() {
    let res = await axios.get(
      `https://gorana.onrender.com/products/${this.$route.params.id}`
    )
    this.product = res.data
    this.activeImage = this.product.images[0]
    this.loaded = true
  },
}
</script>

<style scoped>
.container {
  width: 85%;
  margin-inline: auto;
  max-width: 1440px;
}

#prev {
  padding: 1rem 1rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 50%;
  color: rgb(255, 255, 255);
  font-weight: 600;
  background-color: gray;
  transition: opacity 0.25s;
  display: grid;
  place-content: center;
  width: fit-content;
}

#prev:hover {
  opacity: 0.85;
}

.cart-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 5rem;
  padding-bottom: 2rem;
  margin-top: 10px;
}

.image-section {
  width: 47%;
}

.image-section {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main-img {
  height: 55vh;
  max-width: 100%;
  object-fit: contain;
}
.img-thumbnails {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  padding-top: 1rem;
  width: 100%;
}

.img-thumbnails .thumbnail {
  height: auto;
  max-width: 100%;
  cursor: pointer;
}

.img-thumbnails .thumbnail:hover {
  opacity: 0.7;
}
.product-description {
  line-height: 2.5rem;
}
</style>