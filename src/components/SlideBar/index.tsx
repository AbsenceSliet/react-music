import * as React from 'react'
import {Icon, Layout, Menu} from 'antd';
import {Component} from 'react'
const { Sider} = Layout;
class SlideBar extends Component {
    private onBreakpoint = (e: any): void => {
        // console.log(e)
    }
    public render(){
        return (
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={this.onBreakpoint}
            >
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span className="nav-text">nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span className="nav-text">nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <span className="nav-text">nav 3</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="user" />
                        <span className="nav-text">nav 4</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default SlideBar