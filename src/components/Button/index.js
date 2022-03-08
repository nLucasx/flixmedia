import React from 'react'
import { StyledButton } from './styles'

const ButtonComponent = ({ children, width, height, color, backgroundColor, onClick }) => {
    return (
        <StyledButton
            width={width}
            color={color}
            backgroundColor={backgroundColor}
            height={height}
            onClick={onClick}
        >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {children}
            </div>
        </StyledButton>
    )
}

export default ButtonComponent