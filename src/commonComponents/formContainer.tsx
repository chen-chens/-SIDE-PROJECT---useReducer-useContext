import styled from "styled-components";

export  const FormContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -24px;

    h5.ant-typography.category{
        width: 100%;
        background: #f0f0f0; 
        margin: 10px 0; 
        padding: 5px 24px; 
        font-weight: 400;
    }
    h5.ant-typography.category:first-child{
        margin-top: -24px;
    }

    > .ant-row.ant-form-item{
        width: 22%;
        margin: 0 1.5%;
    }
    .ant-row.ant-form-item.parentLabel{
        width: 47%;
    }
`;
