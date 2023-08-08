import Vue from 'vue'

import VueCompareImage from "vue-compare-image";

const components = { VueCompareImage }

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})