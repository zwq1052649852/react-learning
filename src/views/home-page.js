import {Layout} from 'antd';
import {HomeHeader} from "./home-header";
import {useState, useReducer} from 'react';
import {HomeContent} from "./home-content";

const {Footer} = Layout;
const HomePage = () => {
    //region State
    const originData = {};

    //##endregion

    //region BindAction

    //##endregion

    //region Action

    //##endregion

    //region Views
    return (
        <div>
            <HomeContent></HomeContent>
        </div>
    );
    //##endregion
};
export default HomePage;