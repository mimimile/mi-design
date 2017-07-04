/*
* @Author: xiaomi
* @Date:   2017-06-30 11:26:58
* @Last Modified by:   xiaomi
* @Last Modified time: 2017-07-03 17:22:04
*/

'use strict';

import Vue from 'vue'
import Router from 'vue-router'
import Button from '@/components/button/button.vue'
import Grid from '@/components/grid/grid.vue'



Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/button',
            component: Button
        },
        {
            path: '/grid',
            component: Grid
        },
    ]
})