import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import React from "react";

interface HomeLayoutProps{
    header: JSX.Element;
    content: JSX.Element;
    details?: JSX.Element;
}

export default function HomeLayout(props: HomeLayoutProps){

    return(
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' , display: "flex", justifyContent: "space-between", alignItems: "center", padding: 0}}>
                {props.header}
            </Header>

            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 80, minHeight: "calc(100vh - 80px - 70px)" }}>
                {props.content}
            </Content>

            <Footer style={{ textAlign: 'center' }}> ©2022 Created by Huei Jen Chen</Footer>

            {props.details}
        </Layout>
    )
}