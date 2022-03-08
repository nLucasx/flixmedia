import styled from 'styled-components'

export const ContentArea = styled.div`
    padding: 20px 50px 0px 50px;
    
    @media screen and (max-width: 440px) {
        padding: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
export const CastWrapper = styled.div`
    width: 100%;
    height: auto;
    overflow: auto;
    white-space: nowrap;
    margin-top: 20px;
    margin-bottom: 10px;

    @media screen and (max-width: 440px) {
        width: 300px;
    }
`

export const CastingImageBackground = styled.div`
    width: 100%;
    height: 80%;
    background-image: ${props => `url(${props.url})`};
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

`

export const CastingNameWrapper = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background: #222;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    white-space: pre-line;

`