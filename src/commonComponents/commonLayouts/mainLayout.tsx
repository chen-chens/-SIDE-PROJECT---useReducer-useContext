import { Card, Divider, Spin, Typography } from "antd";
import { FileTextTwoTone } from '@ant-design/icons';
import React from "react";
import styled from "styled-components"
import { useIntl } from "react-intl";


export const InfoCard = styled.section`
    border: 3px solid #d1d8d18a;
    border-radius: 8px;
    background-color: #fff;
    padding: 1rem 1rem 0.5rem;
    margin-bottom: 0.5rem;

    header{
        display: flex;
        justify-content: space-between;
    }

    .txt, 
    .anticon.anticon-file-text{
        display: inline-block;
    }
    .txt{
        font-size: 1rem;
    }
    .anticon.anticon-file-text{
        font-size: 3rem;
        margin-right: 0.5rem;
    }
    .ant-typography{
        color: #4b6659;
    }
    .ant-card-grid{
        padding: 0.5rem 1.5rem;
    }

`;

export const Panel = styled.section`
    display: flex;
`;

export const Details = styled.main`
    width: 60%;
    height: 600px;
    margin-right: 0.5rem;
    overflow: auto;
    position: relative;

    .ant-typography{
        color: #4b6659;
    }
    .ant-card{
        border-radius: 8px;
        border: 3px solid #d1d8d18a;
    }
    .ant-card-grid{
        padding: 0.5rem 1.5rem;
    }
    .ant-card-grid:last-child{
        border-radius: 0 0 8px 0;
    }
    .ant-card-grid:nth-last-child(2){
        border-radius: 0 0 0 8px;
    }
    .ant-card-head{
        padding: 0rem 1rem;
        min-height: inherit;
    }
    .ant-card-head-title{
        padding: 0.5rem;
    }
    .ant-card-body{
        display: flex;
        flex-wrap: wrap;
    }
`;

export const Others = styled.aside`
    width: 40%;
    background-color: #fafafa;
    border-radius: 8px;
    border: 3px solid #d1d8d18a;
`;


interface MainLayoutProps{
    loading: boolean;
    topic: string;
    title: string;
    actions?: JSX.Element;
    infoList: {title: string, value: string|number|null|undefined|JSX.Element,width?:string}[]; 
    detailList: {title: string, value: string|number|null|undefined|JSX.Element,width?:string}[];
}
export default function MainLayout(props: MainLayoutProps){
    const intl = useIntl();

    return(
        <Spin spinning={props.loading}>
            <InfoCard>
                <header>
                    <div className="topic">
                        <FileTextTwoTone twoToneColor="#e06239"/>
                        <div className="txt">
                            <Typography.Text strong>{props.topic}</Typography.Text>
                            <Typography.Title level={4}>{props.title}</Typography.Title>
                        </div>
                    </div>
                    <div className="actionBtns">
                        {props.actions}
                    </div>
                </header>
                <Divider style={{margin: "0.5rem 0rem"}}/>
                
                <Card bordered={false}>
                    {props.infoList.map(item => (
                        <Card.Grid style={{ width: item.width ? item.width : "16.666666%", boxShadow: "none"}} key={item.title}>
                            <Typography.Text>{item.title}</Typography.Text><br/>
                            {item.value}
                        </Card.Grid>
                    ))}
             
                </Card>
            </InfoCard>

            <Panel>
                <Details>
                    <Card title={<Typography.Title level={5}>{intl.formatMessage({id: 'App.detail'})}</Typography.Title>}>
                        { props.detailList.map(item => (
                            <Card.Grid style={{width: item.width ? item.width : '50%',minHeight: 60,}} key={item.title}>
                                <Typography.Text>{item.title}</Typography.Text><br/>
                                {item.value}
                            </Card.Grid>
                        ))}
                    </Card>
                </Details>

                <Others>

                    {/* 其他資訊 */}

                </Others>
            </Panel>
        </Spin>
    )
}