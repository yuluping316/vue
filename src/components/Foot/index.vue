<template>
    <div class="todo-footer">
        <label>
          <input type="checkbox" @change="all" :checked="count==list.length&&count!==0"/>
        </label>
        <span>
          <span>已完成{{count}}</span> / 全部{{list.length}}
        </span>
        <button class="btn btn-danger" @click="done">清除已完成任务</button>
      </div>
</template>

<script>
export default {
    name: "Foot",
    props:["list"],
    computed:{
      count(){  
        return this.list.reduce((p,c)=>{ return p+(c.done?1:0)},0)
      },
    },
    methods:{
      all(e){
          this.$emit('all',e.target.checked)
      },
      done(){
        this.$emit('done')
      }
    }
}
</script>
<style scoped>


/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>