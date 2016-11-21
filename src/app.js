window._ = require('lodash');

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = require('vue');
require('vue-resource');

import Vue from 'vue'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.use(VueMaterial);

Vue.material.theme.registerAll({
    default: {
        primary: 'cyan',
        accent: 'pink'
    },
    indigo: {
        primary: 'indigo',
        accent: 'pink'
    }
});

var Rsvp = Vue.extend(require('./Rvsp.vue'));
var Info = Vue.extend(require('./Info.vue'));
var Map = Vue.extend(require('./Map.vue'));

const routes = [
    { path: '/rsvp', component: Rsvp },
    { path: '/info', component: Info },
    { path: '/map', component: Map },
];

var router;
window.router = router = new VueRouter({
    routes // short for routes: routes
});

const app = new Vue({
    router,
    mounted(){
        router.push('info')
    },
    methods: {
        open(link){
            router.push(link);
        }
    }
}).$mount('#app');