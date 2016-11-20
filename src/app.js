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
})

const app = new Vue({
    el: '#app'
});