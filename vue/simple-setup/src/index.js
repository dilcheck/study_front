import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './vue/App';
import test from './vue/test';


Vue.filter('capitalize', function (string) {
    var capitalFirst = string.charAt(0).toUpperCase()
    var noCaseTail = string.slice(1, string.length)
    return capitalFirst + noCaseTail
})

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
      { path: '/', component: test },
    ]
  })

new Vue({
    router,
    render: h => h(App)
}).$mount('#vue-app');