import Vue from 'vue';
import VueRouter from 'vue-router';

//view
import App from './vue/App';
import main from './vue/main';
import test from './vue/test'

//static resource
import assets from './assets/logo.png'


Vue.filter('capitalize', function (string) {
    var capitalFirst = string.charAt(0).toUpperCase()
    var noCaseTail = string.slice(1, string.length)
    return capitalFirst + noCaseTail
})

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', component: main },
        { path: '/test', component: test },
    ]
  })

new Vue({
    router,
    render: h => h(App)
}).$mount('#vue-app');