import styled from "styled-components"


export const StyledNavBar = styled.nav`
    width: 100%;
    height: 80px;
    background-color: ${props => props.background};
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    transition: 0.5s ease;

    @media screen and (max-width: 600px) {
        opacity: 0;
        flex-direction: column;
        height: 100px;
    }
`;

export const MobileNavBar = styled.nav`
    display: none;
    width: 100%;
    height: ${props => props.showSearch ? '100vh' : '65px' };
    background-color: #000;
    position: fixed;
    align-items: ${props => props.showSearch ? "flex-start" : "center"};
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    transition: 0.5s ease;
    box-sizing: border-box;
    z-index: 99;
    overflow: hidden;

    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
    }
`;

export const MobileNavTop = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;

`


export const InputArea = styled.div`
    display: flex;
    @media screen and (max-width: 600px) {
        display: ${props => !props.showSearch ? "none" : ""};
        margin-top: 50px;
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`
export const Logo = styled.span`
    color: red;
    font-size: 48px;
    margin-left: 20px;
    cursor: pointer;
    @media screen and (max-width: 600px) {
        margin: 10px 0px 0px 0px;
    }
`

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 500px;
    @media screen and (max-width: 600px) {
        width: 100%;
    }

`

export const ComputerArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

`

export const SearchInput = styled.input`
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border: 0px;
    padding: 10px;
    box-sizing: border-box;

    &:focus {
        border-shadow: 0 0 0 0;
        outline: 0;
    }
    @media screen and (max-width: 600px) {
        width: 90%;
        height: 40px;
    }
`

export const IconWrapper = styled.div`
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: #979797;
    color: #FFF;
    border-radius: 5px;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
    transition: 0.5s ease;
    box-sizing: border-box;
    
    &:hover {
        background: #FFF;
        color: #000;
    }

    @media screen and (max-width: 600px) {
        width: 90%;
        margin: 5px 0px 0px 0px;
    }

`
