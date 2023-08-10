// 全局都可以使用的方法，慎重添加
import cloneDeep from "lodash"
const globalObject = {
    cloneDeep: (obj) => cloneDeep(obj),
}

window.Global = globalObject;