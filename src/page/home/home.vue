<template>
  <div>
    <h1>
      home
    </h1>

    <div>
      {{ $store.state.count }}
    </div>

    <div>
      <button @click="sub">-</button>
      <button @click="add">+</button>
    </div>


  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    add: function () {
      this.$store.commit('increment');
    },
    sub: function () {
      this.$store.commit('decrement');
    },
  },
}
</script>

<style scoped>

</style>