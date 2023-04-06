<template>
  <button @click="click">
    {{ btnvalue }}
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    btnvalue: String,
    click: {
      type: Function,
      required: true,
    },
  },
}
</script>

<style scoped>
button {
  border: none;
  background-color: #025661;
  padding: 7px 16px;
  border: 2px solid #025661;
  font-size: 1.2rem;
  color: white;
}

button:hover {
  background-color: #083e46;
  border-color: #083e46;
}
</style>
