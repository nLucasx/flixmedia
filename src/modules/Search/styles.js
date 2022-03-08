import styled from "styled-components";

export const Background = styled.div`
    display: flex;
    justify-content: center;
    height: auto;
    padding-bottom: 80px;
`

export const SearchedMoviesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding-top: 100px;
`

export const LoadingWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NotFound = styled.div`
    margin-top: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 46px;
    color: #FFFF;

`