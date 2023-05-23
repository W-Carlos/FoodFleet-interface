import styled from "styled-components";
import Background from '../../assets/background2.jpg'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #F5FDC6;
`

export const HeaderMenu = styled.header`
    h2{
        color: white;
        font-style: normal;
        font-weight: 700;
        font-size: 4.5rem;
        line-height: 48px; 
        text-align: center;
    }

    padding: 12.0rem 0;

    background: linear-gradient(
        to right, 
        rgb(0 0 0 / 0.5), 
        rgb(0 0 0 / 0.7)
        ), 
        url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

`
export const ContainerProducts = styled.section`
    padding: 2.0rem 0;
`

export const ButtonNavigate = styled.nav`
    display: flex;
    justify-content: center;
    gap: 5.3rem;
`

export const Button = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    border-bottom: ${props => (props.isActiveMenu && '2px solid #FC8019')};
    padding-bottom: 5px;

    font-style: normal;
    font-weight: ${props => (props.isActiveMenu ? '600' : '400')};
    font-size: 17px;
    line-height: 20px;
    color: ${props => (props.isActiveMenu ? '#FC8019' : '#fa923d')};
`