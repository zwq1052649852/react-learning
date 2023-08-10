import { Layout } from 'antd';
import { useState, useReducer, useEffect } from 'react';
import store from "../store/store";

const { Content } = Layout;
export const HomeContent = (props) => {
    //region State
    const originData = {}
    //##endregion

    //region Hook
    useEffect(() => {
        store.subscribe(() => {
            console.log('store change')
        })
    })
    //##endregion

    //region Action


    //##endregion

    //region View
    return (
        <Content>
            <div> { originData.currentRouterPath } </div>
            <div> { props.routerPath }</div>
        </Content>
    )
    //##endregion
}