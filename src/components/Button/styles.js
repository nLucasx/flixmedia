import styled from 'styled-components'

export const StyledButton = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    border: 1px solid #FFFFFF;
    background-color: transparent;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 14px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.4s ease;
    
    &:hover {
        color: #000000;
        background-color: #FFFFFF;
    }
`