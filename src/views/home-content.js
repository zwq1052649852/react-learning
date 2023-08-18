import { Layout } from 'antd';
import { useState, useReducer, useEffect } from 'react';
import {router, selectStateData, handleRouterPush}from "../store/store";

const { Content } = Layout;

//定时器
//region data

//##endregion

//region methods

//##endregion

export const HomeContent = (props) => {
    //region State
    const originData = {}
    //##endregion

    //region Hook

    //##endregion

    //region Action


    //##endregion

    //region View
    return (
        <div>
            <button onClick={() => handleRouterPush()}></button>
            <div>{ router }</div>
        </div>
    )
    //##endregion
}