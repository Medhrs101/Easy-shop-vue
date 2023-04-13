<template>
  <div>
    <Header></Header>
    <section>
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h1>Welcome to Easy-shop</h1>
            <p>Get the best deals on your favorite products</p>
            <Button :click="goToProductsPage" btnvalue="Shop now" />
          </div>
        </div>
      </section>
      <div class="container">
        <section class="feature__section">
          <div class="container">
            <featured-products :featuredProducts="featuredProducts" />
          </div>
        </section>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import FeaturedProducts from '@/components/FeaturedProducts.vue'
import Button from '../components/Button.vue'
import Header from '../components/Header.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: { Header, Button, FeaturedProducts, Footer },
  data() {
    return {
      products: [],
    }
  },

  async created() {
    let res1 = await axios.get('https://gorana.onrender.com/products')
    this.products = res1.data.results.map((product) => {
      return product
    })
  },
  computed: {
    featuredProducts() {
      return this.products.slice(1, 5)
    },
  },
  methods: {
    goToProductsPage() {
      this.$router.push('/Products')
    },
  },
}
</script>

<style scoped>
section {
  width: 100%;
  padding-block: 0px;
}
/* .container {
  width: 85%;
  margin-inline: auto;
  max-width: 1440px;
} */
.hero {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: calc(100vh - 3rem);
  background-image: url('@/assets/hero.webp');
  background-position: 70% 10%;
  background-size: cover;
  max-width: 1400px;
  margin-inline: auto;
}

.hero-content {
  max-width: 800px;
  margin: auto;
  text-align: center;
}

.hero h1 {
  font-size: 50px;
  color: #025661;
  margin-bottom: 20px;
}

.hero p {
  font-size: 20px;
  color: #fff;
  margin-bottom: 40px;
}
</style>