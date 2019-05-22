import Vue from 'vue'
import Router from 'vue-router'
import Head from './views/Head.vue'
import Login from './views/Login.vue'
/* 主页标签路由 */
const Home = () => import('./views/Cqjy/Home/Home.vue');
const Notice = () => import('./views/Cqjy/Notice/Notice.vue');
const Mortgage = () => import('./views/Cqjy/Mortgage/Mortgage.vue');
const Transaction = () => import('./views/Cqjy/Transaction/Transaction.vue');
const Business = () => import('./views/Cqjy/Business/Business.vue');
const Service = () => import('./views/Cqjy/Service/Service.vue');
const PayDot = () => import('./views/Cqjy/PayDot/PayDot.vue');
const Personal = () => import('./views/Cqjy/Personal/Personal.vue');

/* 公告消息路由 */
const cjgg = () => import('./views/Cqjy/Notice/cjgg/cjgg.vue');
const dygg = () => import('./views/Cqjy/Notice/dygg/dygg.vue');
const beforgg = () => import('./views/Cqjy/Notice/dygg2018/dygg2018.vue');
const jygg = () => import('./views/Cqjy/Notice/jygg/jygg.vue');
const zbxm = () => import('./views/Cqjy/Notice/zbxm/zbxm.vue');

/* 交易项目路由 */

const cjxm =()=> import('./views/Cqjy/Transaction/cjxm/cjxm.vue')
const gyxm =()=> import('./views/Cqjy/Transaction/gyxm/gyxm.vue')
const xqxm =()=> import('./views/Cqjy/Transaction/xqxm/xqxm.vue')

Vue.use(Router);

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Head',
            component: Head,
            children:[
                {
                    path:'/',
                    name:'Home',
                    component: Home,
                },
                /* 公告信息路由 */
                {
                    path: '/Notice',
                    name: 'Notice',
                    component: Notice,
                    redirect:'/Notice/cjgg',
                    children: [
                        {
                            path:'/Notice/cjgg',
                            name:'cjgg',
                            component:cjgg,
                        },
                        {
                            path:'/Notice/newgg',
                            name:'dygg',
                            component:dygg
                        },
                        {
                            path:'/Notice/beforgg',
                            name:'dygg2018',
                            component:beforgg
                        },
                        {
                            path:'/Notice/jygg',
                            name:'jygg',
                            component:jygg
                        },
                        {
                            path:'/Notice/zbxm',
                            name:'zbxm',
                            component:zbxm
                        },
                    ]
                },

                /* 抵押融资路由 */
                {
                    path: '/Mortgage',
                    name: 'Mortgage',
                    component: Mortgage,
                },

                /* 交易项目路由 */
                {
                    path: '/Transaction',
                    name: 'Transaction',
                    component: Transaction,
                    redirect:'/Transaction/gyxm',
                    children:[
                        {
                            path:'/Transaction/gyxm',
                            name:'gyxm',
                            component: gyxm,
                        },
                        {
                            path:'/Transaction/xqxm',
                            name:'xqxm',
                            component: xqxm,
                        },
                        {
                            path:'/Transaction/cjxm',
                            name:'cjxm',
                            component: cjxm,
                        },
                    ]
                },
                /* 业务统计路由 */
                {
                    path: '/Business',
                    name: 'Business',
                    component: Business,
                },
                /* 政策服务路由 */
                {
                    path: '/Service',
                    name: 'Service',
                    component: Service,
                },
                /* 交易网点路由 */
                {
                    path: '/PayDot',
                    name: 'PayDot',
                    component: PayDot,
                },
                /* 个人中心路由 */
                {
                    path: '/Personal',
                    name: 'Personal',
                    component: Personal,
                },
            ]
        },
        {
            path:'/Login',
            name:'Login',
            component: Login,
        }

    ],
});
