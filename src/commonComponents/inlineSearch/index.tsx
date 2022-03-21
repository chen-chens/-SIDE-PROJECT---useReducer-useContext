import { DatePicker, Input, Select } from "antd";
import { ReactNode } from "react"
import styled from "styled-components";


const BasicSearchGroup = styled.section`
    box-sizing: border-box;
    padding: 0px 1px 5px ;

    .ant-select-single:not(.ant-select-customize-input) .ant-select-selector,
    .ant-select-single:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input{
        height:100% !important;
    };

    .ant-select-single .ant-select-selector .ant-select-selection-item, 
    .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
        line-height: 30px !important;
    };

    .ant-select:not(.ant-select-customize-input) .ant-select-selector {
        border: none !important;
    };

    .ant-input{
        border: none !important;
    };

    .ant-input:focus{
        outline: 2px solid #063c68;
    };
    
    .ant-input-search .ant-input-lg {
        height: 30px !important;
    };
    
    .ant-input-search-large .ant-input-search-button {
        height: 30px !important;
    };
    
    .ant-input-search > .ant-input-group > .ant-input-group-addon:last-child {
        left: 1px !important;
    };  
`

interface BasicFormListProps{
    labelWidth?: string;
}
const BasicFormList = styled.main<BasicFormListProps>`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    label{
        width:${props => props.labelWidth || "100px"}
    }
`

interface FormItemProps {
    readonly width?: string;
}
const FormItem = styled.div<FormItemProps>`
    box-sizing: border-box;
    border: 1px solid #c9c8c8;
    margin-left: -1px;
    margin-top: 5px;
    display: flex;
    width: ${props => props.width || "25%"};

    .ant-input-group-wrapper.ant-input-group-wrapper-lg.ant-input-search.ant-input-search-large.ant-input-search-with-button{
        width: 100%;
    }
    .ant-btn.ant-btn-primary.ant-input-search-button {
        height: 30px;
    }
    .ant-select.ant-select-auto-complete.ant-select-single.ant-select-customize-input.ant-select-show-search{
        width: 100%;
    }
`

const FormLabel = styled.label`
    box-sizing: border-box;
    border-right: 1px solid #c9c8c8;
    background-color: #649173;
    text-align: center;
    line-height: 30px;
    color: #fff;
    font-size: 1rem;
`

const FormContent = styled.div`
    width: calc(100% - 100px); // FormItem width - label width
    display: flex;
    flex-wrap: nowrap;
`

const SearchGroup = (props:{children:ReactNode, style?: React.CSSProperties, labelWidth?: string}) =>{
    return (
        <BasicSearchGroup style={props.style}>
            <BasicFormList labelWidth={props.labelWidth}>
                {props.children}
            </BasicFormList>
        </BasicSearchGroup>        
    )
}

interface SearchItemType {
    children:ReactNode,
    label:string | ReactNode, 
    width?: string, 
    style?: React.CSSProperties,
}
const SearchItem = (props: SearchItemType) => {
    return(
        <FormItem width={props.width} style={props.style}>
            <FormLabel>
                {props.label}
            </FormLabel>
            <FormContent> 
                {props.children} 
            </FormContent>
        </FormItem>
    )
}

const basicStyles = {
    BoxSizing: "border-box",
    width: "100%",
    border: "none",
    cursor: "pointer", 
}

const ItemInput = styled(Input)`    
    ${basicStyles}
`

const ItemDatePicker = styled(DatePicker)`    
    ${basicStyles}
`

const ItemSelect = styled(Select)`    
    ${basicStyles}
    height:100%;
    padding: 0;   
`

export const SearchConditionsUI = {
    SearchGroup,
    SearchItem,
    ItemInput,
    ItemDatePicker,
    ItemSelect,
}
