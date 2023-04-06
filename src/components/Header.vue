<template>
  <header>
    <div class="container">
      <nav class="navigation">
        <h3 class="logo">EASY-SHOP</h3>
        <div class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link to="/Products">Products</router-link>
          <router-link to="/CartView" class="desktop-cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              class="bi bi-bag"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
              />
            </svg>
            <div class="qty" v-if="cart.length >= 1">
              <span>{{ cart.length }}</span>
            </div>
          </router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapState(['cart']),
  },
}
</script>

<style scoped>
header {
  background-color: #a0c5ca;
  box-shadow: 0 1px 10px 3px rgba(0, 0, 0, 0.03);
  padding-block: 1rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 3;
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  color: #025661;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 2rem;
}

.nav-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
.nav-links a {
  text-decoration: none;
  font-size: 1.5rem;
  color: black;
  font-weight: 500;
}

.nav-links a:hover {
  text-decoration: none;
  font-size: 1.5rem;
  color: black;
  font-weight: 500;
  border-bottom: 3px solid green;
}
.nav-links a::after {
  content: '';
  display: block;
  position: relative;
  top: 2px;
  height: 2px;
  left: 0;
  width: 0;
  background-color: #2f4858;
  border-radius: 6px;
  transition: width 0.25s ease;
}

.nav__links a:hover::after {
  width: 70%;
}

.desktop-cart {
  display: flex;
  align-items: center;
  position: relative;
}

.qty {
  background-color: #007bff;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  right: -5px;
}
</style>