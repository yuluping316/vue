<template>
  <section class="jumbotron">
    <!-- <slot name="head"></slot> -->
    {{ $store.state.countOption.count }}|
    {{ count }}|
    {{ $store.getters['countOption/bigCount']}}|
    {{ bigCount }}
    <button @click="$store.dispatch('countOption/add', 1)">add</button>
    <button @click="add(1)">add</button>
    <button @click="$store.commit('countOption/ADD', 1)">add2</button>
      <button @click="ADD(1)">add</button>
    <h3 class="jumbotron-heading">搜索用户</h3>
    <div>
      <input type="text" placeholder="输入用户名称" ref="inp" />&nbsp;
      <button @click="search">搜索</button>
    </div>
    <!-- <slot name="foot"></slot> -->
    <!-- <slot :age="age"></slot> -->
  </section>
</template>

<script>
import axois from 'axios'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: "Search",
  data() {
    return {
      age: 18,
    }
  },
  computed: {
    ...mapState('countOption',{ count: 'count' }),
    ...mapGetters('countOption',['bigCount'])
  },
  methods: {
    search() {
      const key = this.$refs.inp.value
      this.$bus.$emit('datas', { isFirst: false, isLoading: true })
      axois.get(`https://api.github.com/search/users?q=${key}`).then(
        res => {
          this.$bus.$emit('datas', { isLoading: false, users: res.data.items })
        },
        err => {
          this.$bus.$emit('datas', { isLoading: false, err: err.message })
        })
      this.$refs.inp.value = ''
    },
    ...mapActions('countOption',["add"]),
    ...mapMutations('countOption',["ADD"])
  }
}
</script>
<style scoped>
</style>