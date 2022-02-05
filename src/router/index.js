import VueRouter from 'vue-router'
import Head from '@/components/Head'
import Search from '@/components/Search'
const router = new VueRouter({
    mode:'history',
    routes: [{
            path: '/head',
            component: Head,
            // children: [{
            // }],
            // props:{name:'yu'},
            props($route) {
                return {
                    id: $route.query.id
                }
            },
            meta:{isAuto:true,name:'头部'},
            // beforeEnter(to,from,next){}

        },
        {
            name: 'suo',
            path: '/search/:id',
            component: Search,
            props: true, //params
            meta:{isAuto:true,name:'搜索'}

        },
    ]
})
router.beforeEach((to, from, next) => {//初始化+切换前
    if (localStorage.getItem('list')&&to.meta.isAuto) {
        next()
    }
})
router.afterEach((to, from) => {//初始化+切换后
document.title=to.meta.name
})
export default router;