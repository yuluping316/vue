<template>
  <div id="app">
    <div class="todo-container" style="display:none">
      <div class="todo-wrap">
        <Head ref="head" @add="add" />
        <Main :list="list" @change="change" @del="del" />
        <Foot :list="list" @all="all" @done="done" />
      </div>
    </div>
    <div class="container" style="display:none">
      <Search>
        <!-- <p slot="head">ssssssssssssss</p>
        <template v-slot:foot>
            <p>2322222222222</p>   
            <p>2322222222222</p>   
        </template>-->
        <template scope="a">
          <button>{{ a.age }}</button>
        </template>
      </Search>
      <List />
    </div>
    <router-link active-class="active" to="/head?id=1">head</router-link>
    <router-link
      active-class="active"
      :to="{
        path: '/head',
        query: {
          id: 2
        }
      }"
    >head2</router-link>
    <br />
    <router-link active-class="active" to="/search/3">search</router-link>
    <router-link active-class="active" :to="{
      name:'suo',
      params:{
        id:4
      }
    }">search2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import pubsub from 'pubsub-js'
import Head from '@/components/Head'
import Main from '@/components/Main'
import Foot from '@/components/Foot'
import Search from '@/components/Search'
import List from '@/components/List'
export default {
  name: "app",
  components: { Head, Main, Foot, Search, List },
  mounted() {
    localStorage.setItem('list', JSON.stringify(this.list))
    // console.log(JSON.parse(localStorage.getItem('list')));
    // this.$refs.head.$on('add',function(){
    // // })
    // this.$bus.$on('bus',function(x){
    //   console.log(x);
    // })
    // pubsub.subscribe('pub',function(_,y){
    // })
  },
  watch: {
    list: {
      deep: true,
      handler(v) {
        localStorage.setItem('list', JSON.stringify(v))
      }
    }
  },
  data() {
    return {
      // list: [
      //   { id: '01', title: '吃饭', done: true },
      //   { id: '02', title: '睡觉', done: false },
      //   { id: '03', title: '打游戏', done: false },
      //   { id: '04', title: '唱歌', done: false },
      // ]
      list: JSON.parse(localStorage.getItem('list')) || []
    }
  },
  computed: {
  },
  methods: {
    add(v) {
      this.list = [v, ...this.list]
    },
    change(v) {
      this.list.map((e) => {
        if (e.id == v) {
          e.done = !e.done
        }
      })
    },
    del(v) {
      this.list = this.list.filter((e) => {
        return e.id !== v
      })
    },
    all(v) {
      this.list.map((e) => {
        e.done = v
      })
    },
    done() {
      this.list = this.list.filter((e) => {
        return e.done == false
      })
    }
  }
}
</script>
<style>
.active {
  background-color: pink;
}
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px sol id #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}

body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>