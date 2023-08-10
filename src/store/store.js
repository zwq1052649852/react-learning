// import {createStore} from 'redux'
//
// const initialState = {
//     currentRouterUrl: "",
// }
//
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'SET_CURRENT_ROUTER_URL':
//             return {...state, currentRouterUrl: action.currentRouterUrl};
//         default:
//             return state;
//     }
// }
//
// const store = createStore(reducer)
//
// export default store
import { createStore } from 'redux'

/**
 * 这是一个 reducer 函数：接受当前 state 值和描述“发生了什么”的 action 对象，它返回一个新的 state 值。
 * reducer 函数签名是 : (state, action) => newState
 *
 * Redux state 应该只包含普通的 JS 对象、数组和原语。
 * 根状态值通常是一个对象。 重要的是，不应该改变 state 对象，而是在 state 发生变化时返回一个新对象。
 *
 * 你可以在 reducer 中使用任何条件逻辑。 在这个例子中，我们使用了 switch 语句，但这不是必需的。
 *
 */
//region State
let originalState = {
    router: {
        currentRouterPath: "",
        lastRouterPath: "",
    },
}
//##endregionn

//region Action
//counterReducer：更新仓库state中集成的方法
function counterReducer(state = originalState, action) {
    switch (action.type) {
        case 'router/push':
            return { ...state, currentRouterPath: action.payload }
        case 'router/lastRouter':
            return { ...state, lastRouterPath: action.payload }
        default:
            return state
    }
}

//fetchStateData：获取仓库内部分数据
export const fetchStateData = (state, key) => key === "state" ? state : state[key];
//##endrgeion

// 创建一个包含应用程序 state 的 Redux store。
// 它的 API 有 { subscribe, dispatch, getState }.
let store = createStore(counterReducer)

// 你可以使用 subscribe() 来更新 UI 以响应 state 的更改。
// 通常你会使用视图绑定库（例如 React Redux）而不是直接使用 subscribe()。
// 可能还有其他用例对 subscribe 也有帮助。

// store.subscribe(() => console.log(store.getState()))

// 改变内部状态的唯一方法是 dispatch 一个 action。
// 这些 action 可以被序列化、记录或存储，然后再重放。
// store.dispatch({ type: 'counter/incremented' })
// // {value: 1}
// store.dispatch({ type: 'counter/incremented' })
// // {value: 2}
// store.dispatch({ type: 'counter/decremented' })
// // {value: 1}

export default store