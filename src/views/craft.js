//此页面仅仅为草稿，用于自测使用

import { Input, Button } from "antd"
import { useState, useReducer } from 'react';

export const UseStateComponent = () => {
    const [inputValue, setInputValue] = useState(0)
    return (
        <div>
            <Input value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
                   placeholder="i come from UseStateComponent"/>
            <div>
                { `i m inputValue: ${inputValue}` }
            </div>
        </div>
    )
}

export const UseReducerComponent = () => {
    const originObj = {userName: "", userPassWord: ""}
    const stateObjReducer = (state, action) => {
        switch (action.key) {
            case 'userName':
                return { ...state, userName: action.value }
            case 'userPassWord':
                return { ...state, userPassWord: action.value }
            default:
                return state
        }
    }
    const [stateObj, dispatch] = useReducer(stateObjReducer, originObj)
    return (
        <div className="flex-column-start">
            <Input value={stateObj.userName} onChange={(e) => dispatch({key: "userName", value: e.target.value})}></Input>
            <Input value={stateObj.userPassWord} onChange={(e) => dispatch({key: "userPassWord", value: e.target.value})}></Input>

            <div>{ stateObj.userName }</div>
            <div>{ stateObj.userPassWord }</div>
            <div className="flex-row-start">
                <Button>取消</Button>
                <Button type="primary">确定</Button>
            </div>
        </div>
    )
}

export const SonComponent = ({ inputValue, setInputValue }) => {
    return (
        <Button onClick={setInputValue}>{ inputValue }</Button>
    )
}

export const FatherComponent = () => {
    const [inputValue, setInputValue] = useState(0)
    return (
        <div>
            <SonComponent inputValue={inputValue} setInputValue={() => setInputValue(inputValue + 1)}></SonComponent>
            <div>
                if inputValue > 2, SonComponent2 will compare!
                { inputValue > 2 && <SonComponent inputValue={inputValue} setInputValue={() => setInputValue(inputValue + 1)}></SonComponent>
                }
            </div>
        </div>
    )
}

export const ArrayComponent = () => {
    const arr = [1, 2].map(item => (<span key={item}>i m {item}</span>))
    return (
        <div>
            { arr }
        </div>
    )
}

export const ObjectComponent = () => {
    let [obj, setObj] = useState({x: 1})
    return (
        <button onClick={() => {setObj({...obj, y: 1})}}>测试对象的use</button>
    )
}