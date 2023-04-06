<template>
  <div class="product__card">
    <img :src="image_url" :alt="brand" class="product__image" loading="lazy" />
    <div class="product__header">
      <span class="brand">{{ brand }}</span>
      <span class="product__qty">{{
        in_stock ? 'In Stock' : 'Out of Stock'
      }}</span>
    </div>
    <p class="product__name">{{ productName }}</p>
    <div class="rating">
      <i v-for="rating in ratings" :key="rating" class="fas fa-star"></i>
    </div>
    <div class="price">
      <span>{{ price }}</span>

      <!-- <button @click="($event) => $router.push('/ProductDetails/' + productId)">
        buy
      </button> -->
      <button
        class="cart"
        @click="$router.push('/ProductDetails/' + productId)"
      >
        Show
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productCard',
  props: [
    'productId',
    'image_url',
    'brand',
    'productName',
    'price',
    'currency',
    'ratings',
    'in_stock',
  ],
}
</script>

<style scoped>
.product__card {
  border: 1px solid gray;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.05s ease-in;
  padding: 0.8rem;
  text-align: left;
  border-radius: 15px;
  color: #222;
}

.product__image {
  height: auto;
  max-width: 100%;
  border-radius: 5px;
}

.product__name {
  padding-block: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
}

.brand {
  font-size: 1rem;
  display: inline-block;
  font-weight: 700;
}

.product__qty {
  font-size: 1rem;
  display: inline-block;
  padding-top: 0.5rem;
  background-color: #9cbec3;
  color: white;
  border-radius: 5px;
  padding: 5px;
}

.rating {
  padding-bottom: 5px;
  color: rgb(255, 233, 108);
}

.rating i {
  font-size: 0.8rem;
}

.price {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price span {
  font-size: 1.6rem;
  font-weight: 700;
}

.cart {
  cursor: pointer;
  font-size: 1rem;
  padding: 0.4rem;
  border: 1px solid yellow;
  border-radius: 5px;
  display: grid;
  place-items: center;
  text-align: center;
  background-color: #025661;
  color: white;
}

.cart:hover {
  background-color: #587f85;
}
</style>