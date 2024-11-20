<template>
  <div class="main-container">
    <h1>Kuna Amarte</h1>
    <h2>OVERZISE</h2>
  </div>
</template>

<script>
export default {
  name: 'HeadComponent',
}
</script>

<style scoped>
.main-container {
  background: linear-gradient(to bottom, #7e0b28, rgb(89, 0, 255));
  color: #FFE25E;
  padding: 1rem;
  text-align: center;
}

h1 {
  font-family: "Merienda", cursive;
  text-shadow: -1px -1px 0 #00000077, 1px -1px 0 #000000a9, -1px 1px 0 #000000a9, 1px 1px 0 #000000a9;
}

h2 {
  font-family: "Bangers", system-ui;
  text-shadow: -1px -1px 0 #00000077, 1px -1px 0 #000000a9, -1px 1px 0 #000000a9, 1px 1px 0 #000000a9;
}

</style>
