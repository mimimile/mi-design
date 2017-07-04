/*
* @Author: xiaomi
* @Date:   2017-06-30 14:38:09
* @Last Modified by:   xiaomi
* @Last Modified time: 2017-06-30 14:45:53
*/

'use strict';

// 判断参数是否是其中之一
export function oneOf (value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}