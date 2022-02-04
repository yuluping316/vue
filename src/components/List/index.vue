<template>
    <div class="row">
        <p v-show="datas.isFirst">欢迎</p>
        <p v-show="datas.isLoading">加载中</p>
        <p v-show="datas.err">{{ datas.err }}</p>
        <Item
            v-show="!datas.err"
            v-for="i in datas.users"
            :key="i.id"
            :img="i.avatar_url"
            :to="i.html_url"
            :name="i.login" 
        />
    </div>
</template>

<script>
import Item from './Item'
export default {
    name: "List",
    components: { Item },
    data() {
        return {
            datas: {
                isFirst: true,
                isLoading: false,
                err: '',
                users: []
            }

        }
    },
    mounted() {
        this.$bus.$on('datas', (v) => {
            this.datas = { ...this.datas, ...v }
        })
    }
}
</script>
<style scoped>
</style>