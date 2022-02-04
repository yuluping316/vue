<template>
  <div class="card">
    <a :href="to" target="_blank">
      <img :src="img" style="width: 100px" />
    </a>
    <p class="card-text">{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["name", "img", "to"]
}
</script>
<style scoped>
</style>