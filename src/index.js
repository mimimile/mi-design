/*
* @Author: xiaomi
* @Date:   2017-06-23 16:46:28
* @Last Modified by:   xiaomi
* @Last Modified time: 2017-07-04 19:36:04
*/

'use strict';

// const Button = require('../packages/button/index.js');
import Button from '../packages/button/index.js';
import Row from '../packages/row/index.js';
import Col from '../packages/col/index.js';
import Icon from '../packages/icon/index.js';

const components = [
    Button,
    Row,
    Col,
    Icon
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
    Button,
    Row,
    Col,
    Icon
}