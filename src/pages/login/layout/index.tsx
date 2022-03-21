import styled from "styled-components";

interface LoginContainerProps{
    readonly isVisible: boolean;
    readonly location: string;
}

export const LoginContainer = styled.section<LoginContainerProps>`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => (props.location === "/") || (props.location === "/login") ? "#e3e4e38a" : "#00000086"};
    position: absolute;
    top:  ${props => props.isVisible ? 0 : "-100%"};
    left: 0;
    z-index: 1000;
    transition: 0.8s all;
`;


export const LoginCard = styled.div`
    width: 45%;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;
    border-radius: 10px;
    padding: 2rem;
    display: flex;
    align-items: center;

    position: relative;
    background-color: #ffffff;

    img{
        margin-left: -2rem;
        position: relative;
        z-index: 2;
    }

    .ant-form.ant-form-horizontal{
        flex-grow: 2;
        z-index: 3;
    }

    .ant-typography.logo{
        color: #032546;
        font-size: 1.8rem;
    }

`;