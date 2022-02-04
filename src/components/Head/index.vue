<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" />
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "Head",
  methods: {
    add(e) {
      // pubsub.publish('pub',666)
      this.$bus.$emit('bus',666)
      if (e.target.value) {
        const data = { id:Math.floor(Math.random() * 100), title: e.target.value, done: false }
        this.$emit('add', data)
        e.target.value = ''
      }

    }
  }
}
</script>
<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>