import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve),
    children: [{
        path: 'userManage',
        component: (resolve) => require(['./views/modules/powers/userManage/index.vue'], resolve),
    }, {
        path: 'userGroupManage',
        component: (resolve) => require(['./views/modules/powers/userGroupManage/index.vue'], resolve),
    }, {
        path: 'roleManage',
        component: (resolve) => require(['./views/modules/powers/roleManage/index.vue'], resolve),
    }]
}, {
    path: '/login',
    component: (resolve) => require(['./views/login.vue'], resolve),
}];
export default new VueRouter({
    mode: 'history',
    routes: routers
});