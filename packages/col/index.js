/*
* @Author: xiaomi
* @Date:   2017-07-03 17:46:43
* @Last Modified by:   xiaomi
* @Last Modified time: 2017-07-03 17:48:57
*/

'use strict';

import Col from './src/col'

/* istanbul ignore next */
Col.install = function(Vue) {
    Vue.component(Col.name, Col);
};

export default Col