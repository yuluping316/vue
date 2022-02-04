<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">搜索用户</h3>
    <div>
      <input type="text" placeholder="输入用户名称" ref="inp" />&nbsp;
      <button @click="search">搜索</button>
    </div>
  </section>
</template>

<script>
import axois from 'axios'
export default {
  name: "Search",
  methods: {
    search() {
      const key = this.$refs.inp.value
      axois.get(`https://api.github.com/search/users?q=${key}`).then(
        res => {
          this.$bus.$emit('datas', res.data.items)
        },
        err => {
          this.$bus.$emit('datas', err.message)
        })
      this.$refs.inp.value = ''
    }
  }
}
</script>
<style scoped>
</style>