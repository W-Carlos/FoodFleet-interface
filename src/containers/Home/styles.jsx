import styled from "styled-components";
import Background from '../../assets/backgroundHome.jpg'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`

export const SectionHome = styled.section`
    padding: 12.0rem 0;

    background: linear-gradient(
        to right, 
        rgb(0 0 0 / 0), 
        rgb(0 0 0 / 0.7)
        ), 
        url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

`

export const ContainerItem = styled.div`
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
`

export const TextHome = styled.div`
    /*width: 47.2rem;*/
    color: white;

    h1{
        font-style: normal;
        font-weight: 700;
        font-size: 4.5rem;
        line-height: 48px; 
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 24px;

        margin: 3.2rem 0;
    }

    span {
        color: #FC8019;
    }
`

export const HomeImg = styled.img`
    width: 35rem;
    border-radius: 15px;
`