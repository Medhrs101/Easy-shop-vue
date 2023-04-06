<template>
  <section class="products">
    <h1>Featured Products</h1>
    <p class="highlight">The best selling products we have on sale.</p>
    <div class="product__container" v-if="featuredProducts">
      <ProductCard
        v-for="(product, index) in featuredProducts"
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
      <h3>Loading Data...</h3>
    </div>
  </section>
</template>

<script>
import ProductCard from './cards/productCard.vue'

export default {
  name: 'FeaturedProducts',
  props: ['featuredProducts'],
  components: { ProductCard },
  data() {
    return {
      products: [],
    }
  },
}
</script>

<style>
section {
  width: 100%;
  padding-block: 30px;
}
.products {
  text-align: center;
}

.products h2 {
  display: inline-block;
  margin-bottom: 10px;
}

.products .highlight {
  font-size: 1.9rem;
}

.product__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 30px;
  padding-block: 4rem;
}
</style>