<template>
  <div class="container">
    <div class="login-page">
      <div class="form">
        <form class="login-form" @submit.prevent="shopLogin">
          <h3>Login</h3>
          <div class="form-field">
            <label for="username">Username</label>
            <input v-model="username" placeholder="username" required />
          </div>
          <div class="form-field">
            <label for="password">password</label>
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="password"
              required
            />
          </div>
          <button type="submit">Login</button>
          <router-link to="SignUp">SignUp</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
export default {
  name: 'SignIn',
  data() {
    return {
      username: '',
      password: '',
      showPassword: false,
    }
  },
  methods: {
    shopLogin() {
      signInWithEmailAndPassword(getAuth(), this.username, this.password)
        .then(() => {
          this.$router.replace('/Products')
        })
        .catch((error) => {
          alert(`error occured ${error.code}`)
        })
    },
  },
}
</script>

<style scoped>
/* form {
  margin-top: 5rem;
  border: 3px solid rgb(20, 75, 122);
  padding: 1rem;
} */
.container {
  width: 85%;
  margin-inline: auto;
  max-width: 1440px;
}

form h3 {
  margin-bottom: 10px;
  text-align: center;
}
form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 3px solid rgb(20, 75, 122);
  margin-top: 5rem;
  padding: 2rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

form input {
  border-radius: 0px;
  padding: 0px;
  font-size: 1.2rem;
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

button[type='submit'] {
  align-self: center;
  height: 35px;
  font-size: 1.6rem;
  width: 30%;
  background-color: rgb(20, 75, 122);
  color: white;
  border-radius: 5px;
}

button[type='submit']:hover {
  background-color: rgb(198, 197, 197);
}
</style>
