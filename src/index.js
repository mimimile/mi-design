/*
* @Author: xiaomi
* @Date:   2017-06-23 16:46:28
* @Last Modified by:   xiaomi
* @Last Modified time: 2017-06-27 18:58:32
*/

'use strict';

// const Button = require('../packages/button/index.js');
import Button from '../packages/button/index.js';

const components = [
    Button
];

const install = function(Vue, opts = {}) {
    /* istanbul ignore if */
    if (install.installed) return;
    components.map(component => {
        Vue.component(component.name, component);
    });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

export default {
    version: '0.0.3',
    install,
    Button
}