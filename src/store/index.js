import vueX from 'vuex'
import vue from 'vue'
vue.use(vueX)

const countOption = {
    namespaced:true,
    actions: {
        add(context, value) {
            context.commit('ADD', value)
        }
    },
    mutations: {
        ADD(state, value) {
            state.count += value
        }
    },
    state: {
        count: 0
    },
    getters: {
        bigCount(state) {
            return state.count * 10
        }
    }
}

export default new vueX.Store({
    modules:{
        countOption
    }
})