/*
* @Author: xiaomi
* @Date:   2017-06-27 17:26:44
* @Last Modified by:   xiaomi
* @Last Modified time: 2017-06-27 18:38:58
*/

'use strict';

import MiButton from './src/button';

MiButton.install = function(Vue) {
    Vue.component(MiButton.name, MiButton);
};

export default MiButton;
