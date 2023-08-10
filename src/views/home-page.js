import {Layout} from 'antd';
import {HomeHeader} from "./home-header";
import store from "../store/store";
import {useState, useReducer} from 'react';
import {HomeContent} from "./home-content";

const {Footer} = Layout;
const HomePage = () => {
    //region State
    const originData = {};

    //##endregion

    //region BindAction
    // const [data, updateData] = useState(originData)
    // const storeData = store.getState()
    // updateData(storeData)
    //##endregion

    //region Action
    function dispatchMenuContent({key, keyPath}) {
        store.dispatch({type: "router/push", payload: keyPath})
    }

    //##endregion

    // store.subscribe(() => console.log(store.getState()))

    //region Views
    return (
        <Layout className={'ht100'}>
            <HomeHeader jumpMenu={dispatchMenuContent}></HomeHeader>
            <HomeContent></HomeContent>
            <Footer> i m footer </Footer>
        </Layout>
    );
    //##endregion
};
export default HomePage;