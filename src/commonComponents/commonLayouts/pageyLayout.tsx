import { Col, Row, Spin } from "antd"
import React from "react"

export interface PageLayoutProps {
    operationButtons : React.ReactNode;
    master : React.ReactNode;
    detail ?: React.ReactNode;
    loading: boolean;
}

export const PageLayout = (props : PageLayoutProps) => {

    return (
        <Spin spinning={props.loading}>
            <Row gutter={[8, 5]}>
                <Col span={24} >
                    {props.operationButtons}
                </Col>
                <Col span={24}>
                    {props.master}      
                </Col>
                <Col span={24}>
                    {props.detail}
                </Col>
            </Row>
        </Spin>
    )

}