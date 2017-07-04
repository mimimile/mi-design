/*
* @Author: xiaomi
* @Date:   2017-07-04 19:23:09
* @Last Modified by:   xiaomi
* @Last Modified time: 2017-07-04 19:25:56
*/

'use strict';

import Icon from './src/icon'

/* istanbul ignore next */
Icon.install = function(Vue) {
    Vue.component(Icon.name, Icon);
};

export default Icon