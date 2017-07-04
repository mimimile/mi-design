/*
* @Author: xiaomi
* @Date:   2017-06-30 14:31:49
* @Last Modified by:   xiaomi
* @Last Modified time: 2017-07-03 17:41:25
*/

'use strict';

import Row from './src/row';

/* istanbul ignore next */
Row.install = function(Vue) {
    Vue.component(Row.name, Row);
};

export default Row