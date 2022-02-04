<template>
    <div class="row">
        <Item  v-for="i in users" :key="i.id" :img="i.avatar_url" :to="i.html_url" :name="i.login"/>
    </div>
</template>

<script>
import Item from './Item'
export default {
    name: "List",
    components: { Item },
    data() {
        return {
            users: []
        }
    },
    mounted() {
        this.$bus.$on('datas', (v)=> {
            this.users = v
        })
    }
}
</script>
<style scoped>
</style>