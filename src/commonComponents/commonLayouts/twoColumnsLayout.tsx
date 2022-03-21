import { Row, Col } from 'antd';


interface TwoColumnsLayoutProps {
    mainPart: JSX.Element;
    detailsPart: JSX.Element;
    mainPartSpan?: number;
    detailsSpan?: number;
}

export default function TwoColumnsLayout(props: TwoColumnsLayoutProps){

    return(
        <Row gutter={[25,10]}>
            <Col span={props?.mainPartSpan || 12} >
                {props.mainPart}
            </Col>
            <Col span={props?.detailsSpan || 12} >
                {props.detailsPart}
            </Col>
        </Row>  
    )
}