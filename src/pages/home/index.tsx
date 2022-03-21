import { Menu, Typography, Avatar, Button, Dropdown, Select, Space } from "antd";
import React, { useEffect } from "react";
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { HashRouter, Route, Switch, useHistory } from "react-router-dom";
import Loginpage from "../login";
import { LoginTitle } from "../../configs/commonData/loginTitle";
import HomeLayout from "./layout";
import { useIntl } from "react-intl";
import { useMainNav } from "./mainNav";
import { contentMap } from "../../configs/contentMap";

export const HomePage = ()=>{
    const userMenuIconStyle = {fontSize: 20, marginRight: 10}
    // const intl = useIntl()

    const history = useHistory()
    const mainNav = useMainNav();


    const usermenu = (
        <Menu onClick={(e)=>{
            if (e.key === 'logout') {
                // dispatch(currentUserActions.logout)
                history.push("/")
            }
        }}>
            <Menu.Item key="name" icon={<UserOutlined style={userMenuIconStyle}/>}>
                {/* <Typography.Title level={5}>{currentUser?.user?.name}</Typography.Title>
                {currentUser?.user?.email} */}
            </Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined style={userMenuIconStyle} />}>登出</Menu.Item>

            {/* <Menu.Item key="userSetting" icon={<SettingOutlined style={userMenuIconStyle} />}>{intl.formatMessage({id: 'UserInfo.settings'})}</Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined style={userMenuIconStyle} />}>{intl.formatMessage({id: 'UserInfo.logout'})}</Menu.Item> */}
        </Menu>
    );
   
    return(
        <HomeLayout 
            header={
                <>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['Numet_CRM']}>
                        <Menu.Item key="Numet_CRM" onClick={(e) => history.push("/master")}> 
                            <Typography.Title level={3} className="logo">LOGO SYSTEM</Typography.Title>
                        </Menu.Item>
                        {mainNav.map((nav) => (
                            <Menu.Item key={nav.id} onClick={(e) => history.push(`/master/${e.key}`)}>
                                <Typography.Title level={5} style={{color: "#fff", lineHeight: "inherit", fontWeight: 400}}>{nav.name}</Typography.Title>
                            </Menu.Item>   
                        ))}
                    </Menu>

                    <Space size={20}>
                        <Select defaultValue="en" style={{width: 200}} 
                            // onChange={(value)=> dispatch(currentUserActions.updateLanguages(value))}
                        >
                            <Select.Option value="en">English</Select.Option>
                            <Select.Option value="tw">中文</Select.Option>
                        </Select>

                        <Dropdown overlay={usermenu} placement="bottomRight" arrow>
                            <Button block style={{width: 64, height: 64, backgroundColor: '#e06239', border: "none", verticalAlign: "unset"}} icon={
                                <Avatar shape="square" icon={<UserOutlined style={{fontSize: 25}}/>} style={{backgroundColor: '#e06239'}}/>
                            }/>
                        </Dropdown>
                    </Space>
                </>
            }
            content={
                <HashRouter>
                    <Switch>
                        {   contentMap.map((route : any)=> (
                            <Route key={route.component} exact={route.exact} path={route.path} component={route.component} />
                        ))}
                    </Switch>
                </HashRouter>   
            }
            details={ <Loginpage title={LoginTitle.TOKEN_EXPIRED} isVisible={false}/> }
        />
    )
}

export default HomePage;