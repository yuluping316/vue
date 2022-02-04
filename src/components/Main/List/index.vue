<template>
  <li>
    <label>
      <input type="checkbox" :checked="done" @change="change" />
      <span>{{ title }}</span>
    </label>
    <button class="btn btn-danger" @click="del">删除</button>
  </li>
</template>

<script>
export default {
  name: "Main",
  props: ["title", "done", "id"],
  methods: {
    change() {
      this.$emit('change', this.id)
    },
    del() {
      this.$emit('del', this.id)
    }
  }
}
</script>
<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li:hover button {
  display: block;
}
li:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>