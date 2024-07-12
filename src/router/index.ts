import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'; // 从 vue-router 库中导入创建路由实例的方法 createRouter 和 createWebHistory，以及 RouteRecordRaw 类型

const routes: Array<RouteRecordRaw> = [  // 定义一个名为 routes 的常量，它是一个 RouteRecordRaw 类型的数组。这个数组包含了应用程序中的所有路由记录。
{
    path: '/login',
    name: 'Login',  // 路由的名称
    meta: {
        title: '登录',
        keepAlive: true,
        requireAuth: false
    },
    component: () => import('@/views/login.vue')   // 要渲染的组件。这里使用了动态导入 () => import('@/views/login.vue') 的方式,在需要时才会加载组件
},
{
    path: '/',
    name: 'Index',
    meta: {
        title: '首页',
        keepAlive: true,
        requireAuth: true
    },
    component: () => import('@/views/home.vue')
}]

// 使用 createRouter 函数创建一个路由实例 router
const router = createRouter({
    history: createWebHistory(),  // 指定使用 HTML5 历史记录 API 来管理路由历史
    routes  // 将上面定义的 routes 数组传递给 createRouter 函数,作为路由配
});   

export default router;  // 导出创建的路由实例,供应用程序其他部分使用
