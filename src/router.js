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
                {
                    path: '/Mortgage',
                    name: 'Mortgage',
                    component: Mortgage,
                },
                {
                    path: '/Transaction',
                    name: 'Transaction',
                    component: Transaction,
                },
                {
                    path: '/Business',
                    name: 'Business',
                    component: Business,
                },
                {
                    path: '/Service',
                    name: 'Service',
                    component: Service,
                },
                {
                    path: '/PayDot',
                    name: 'PayDot',
                    component: PayDot,
                },
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
