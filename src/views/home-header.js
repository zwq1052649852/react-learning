import {GithubOutlined} from '@ant-design/icons'
import {Layout, Menu} from 'antd';
import {HOME_HEADER_MENU} from "../const/home-header-const";
import store from "../store/store.js";

const {Header} = Layout;
export const HomeHeader = (props) => {
    //region State
    const data = {

    }

    //##endregion

    //region Action
    function jumpMenu({key, keyPath}) {
        props.jumpMenu({key, keyPath})
    }

    function jumpToMyGithub() {
        window.open("https://github.com/zwq1052649852")
    }

    //##endregion

    //region Views
    return (
        <div>
            <Header className={'home-header relative'}>
                <Menu items={HOME_HEADER_MENU}
                      theme={'dark'}
                      mode="horizontal"
                      className={'pointer'}
                      onClick={jumpMenu}>
                </Menu>
                <GithubOutlined className={'github-outlined'}
                                onClick={jumpToMyGithub}/>
            </Header>
        </div>
    )
    //##endregion
}