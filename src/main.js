import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initializeApp } from 'firebase/app'

Vue.config.productionTip = false
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAX-Q6FSN9ZQgag4XkBI_YsWwpqeGQaVVo',
  authDomain: 'easy-shop-kh.firebaseapp.com',
  projectId: 'easy-shop-kh',
  storageBucket: 'easy-shop-kh.appspot.com',
  messagingSenderId: '1053613259333',
  appId: '1:1053613259333:web:3125173819dd3a2bc9412c',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
