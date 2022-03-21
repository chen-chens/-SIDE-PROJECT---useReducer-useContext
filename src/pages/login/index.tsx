import React, { useState } from 'react';
import { Form, Typography, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory, useLocation } from "react-router-dom";
import Alertnotification from '../../commonComponents/alertNotifacation';
import { LoginCard, LoginContainer } from './layout';
import { LoginTitle } from '../../configs/commonData/loginTitle';

interface LoginPageProps{
    title: LoginTitle;
    isVisible: boolean;
}

export default function LoginPage(props: LoginPageProps){
    const config = [{ required: true, message: '必填欄位' }];
    const history = useHistory()
    const location = useLocation()
    const [ loading, setLoading ] = useState(false);

    // form 資料驗證成功
    const onFinish = async(values: {username: string; password: string}) => {
        setLoading(true);
        try{
            // const data = await ApiLogin(values.username, values.password )   
            // const result = data.login
            // client.setHeader("authorization","Bearer "+result.token)

            // dispatch(currentUserActions.updateUserData(result));
            // dispatch(currentUserActions.updateUserToken(result.token));
            // dispatch(currentUserActions.userNotExpired());
            
            if(location.pathname === '/' || location.pathname === 'login'){
                setTimeout(() =>history.push('/master'),100);
            }
                       
        }catch(err){
            console.log("login err : ",err)
            Alertnotification({
                type :"error", 
                title: "用戶基本資料取得失敗", 
                description: "請重新執行！"
            });
        }finally{
            setLoading(false);
        }  
    };
    
    // form 資料驗證失敗
    const onFinishFailed = (errorInfo: any) => {
        console.log("帳號密碼沒填", errorInfo);
        
        Alertnotification({
            type :"error",
            title: "帳號密碼為必填項目"
        });
    };
    
    return (
        <LoginContainer 
            location={location.pathname}
            isVisible={
            (location.pathname === '/' || location.pathname === 'login')
            ? true
            : props.isVisible
        }>
            <LoginCard>
                <img src="../../../login/login.svg" alt="login_image"/>

                <Form title="CRM" onFinishFailed={onFinishFailed} onFinish={onFinish}>
                    <Typography.Title level={2} className="logo">
                        { props.title||LoginTitle.FIRST_LOG_IN }
                    </Typography.Title>

                    <Form.Item name="username" rules={config}>
                        <Input prefix={<UserOutlined />} placeholder="帳號" />            
                    </Form.Item>

                    <Form.Item name="password" rules={config}>
                        <Input prefix={<LockOutlined />} type="password" placeholder="密碼" />            
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ width:'100%' }} loading={loading}>
                            登入
                        </Button>
                    </Form.Item>
                </Form>
            </LoginCard>
        </LoginContainer>
    );

} 