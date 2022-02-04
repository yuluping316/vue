<template>
  <ul class="todo-main">
    <List
      v-for="i in list"
      :key="i.id"
      :id="i.id"
      :title="i.title"
      :done="i.done"
      @change="change"
      @del="del"
    />
  </ul>
</template>

<script>
import List from './List'
export default {
  name: "Main",
  props: ["list"],
  components: { List },
  methods: {
    change(v) {
      this.$emit('change', v)
    },
    del(v){
      this.$emit('del', v)
    }
  }
}
</script>
<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>