import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem 0;
    padding: 3.5rem;

    background-color: #fff;

    h2 {
        font-size: 3.0rem;
    }

    .rec.rec-arrow {
        background-color: #FC8019;
        color: #fff;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    .rec.rec-arrow:hover {
        border: 2px solid #FC8019;
        background-color: #fff;
        color: #FC8019;
    }

    .rec.rec-arrow:disabled {
        background-color: #fa9d51;
        border: none;
        color: #fff;
    }

`

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`

export const Image = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 15px;
`

export const Button = styled.button`
    height: 5.0rem;
    background: #FC8019;
    box-shadow: 0px 5px 10px rgba(151, 88, 166, 0.22), 0px 20px 40px rgba(151, 88, 166, 0.24);
    border-radius: 8px;
    border: none;
    cursor: pointer;

    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 100%;

    text-align: center;

    color: #FFFFFF;

    &:hover{
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`
