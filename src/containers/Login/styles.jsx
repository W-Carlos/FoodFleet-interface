import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
`

export const ImageLogin = styled.img`
    width: 50%;
    object-fit: cover;
`

export const ContainerLogin = styled.div`
    height: 100vh;
    width: 50%;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    padding: 2.5rem 7.5rem;

    .inputs {
        width: 100%;
    }

    form {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

export const Logo = styled.h1`

    font-size: 3.5rem;
    text-align: center;

    margin-bottom: 5rem;
    
    span {
        color: #FC8019;
    }
`

export const H2 = styled.h2`
    margin-bottom: 1.6rem;
    
    text-align: center;

    font-style: normal;
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 2.8rem;
`

export const Label = styled.label`
    margin-top: 3rem;
    margin-bottom: 0.3rem;
    display: block;
    
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.4rem;
`

export const Input = styled.input`
    height: 3.8rem;
    width: 100%;
    padding-left: 1.5rem;

    background: #FFFFFF;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
    border-radius: 5px;

    outline: none;

    border: ${ props => props.errors ? '2px solid #CC1717' : '2px solid #FC8019'};
`

export const Button = styled.button`
    width: 18.2rem;
    height: 3.613rem;

    margin-top: 6rem;

    background: #FC8019;
    color: #fff;
    border-radius: 10px;
    border: none;
    cursor: pointer;

    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;
    text-align: center;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.6;
    }

`

export const SingUpLink = styled.p`
    margin-top: 3.2rem;
    
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.6rem;

    a {
        color: #000;
    }
`

export const ErrorMessage = styled.p`
    margin-top: .2rem;

    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.6rem;

    color: #CC1717;
`