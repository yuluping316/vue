<template>
  <div>
    <!-- 插值语法 接收js表达式 -->
    <div>{{ people.name.toUpperCase() }}-{{ people.sex }}</div>
    <!-- (v-bind):href= 单向绑定-->
    <input :value="people.name" />
    <!--  v-model=      双向绑定-->
    <input v-model="people.name" />
    <br />
    <!-- (v-on:)/(@)click= 事件绑定   .stop  .once-->
    <a href="a" @click.prevent="a($event, 1)">a</a>
    <br />
    <input @keyup.enter="a" />
    <div class="base" :class="arr" style="fontSize:30px" :style="{ fontSize: 60 + 'px' }">{{ full }}</div>
    <div v-show="people">1</div>
    <div v-if="!people">2</div>
    <div v-else-if="!arr">3</div>
    <div v-else v-pre>4</div>
    <button ref="sp"  @click="add" v-cloak v-once>{{ people.name }}</button>
    <span v-for="i in p" :key="i.id" v-big="people.name">{{ i.name | big(1) }}</span>
  </div>
</template>
<script>
export default {
  name: "Test",
  data() {
    return {
      people: {
        name: 'yu'
      },
      arr: ["a"],
      p: [
        { id: 0, name: 'yu' },
        { id: 1, name: 'yu2' },
      ]
    }
  },
  computed: {
    full() {
      return this.people.name + '?'
    }
  },
  directives: {
    big(e, v) {
      e.innerHTML = v.value + 10
    },
    small: {
      bind() {
        console.log(1);
      },
      inserted() {
        console.log(2);
      },
      update() {
        console.log(3);
      }
    }
  },
  methods: {
    a(e, x = 2) {
    },
    add() {
      this.$refs.sp.innerHTML='ref'
      //对象
      // this.$set(this.people,'sex','女')//加/改
      // this.p[0].name='yu1'//改
      //数组
      // this.p.push({id:2,name:'yu3'})
      // this.p.splice(this.p,0,{id:2,name:'po'})//加
      // this.p.splice(this.p,1,{id:2,name:'po2'})//改
      // this.$set(this.p,0,{id:9,name:'qq'})//改
    }
  },
  filters: {
    big(v, s) {
      return v + '~' + s
    }
  },
  watch: {
    people: {
      immediate: true,
      deep: true,
      handler(n, o) {
        // console.log(n.name);
      }
    },
    'people.name'(n, o) {
    }
  }
}
</script>
<style>
.base {
  background-color: aquamarine;
}
.a {
  color: red;
}
[v-cloak] {
  display: none;
}
</style>