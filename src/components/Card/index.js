import React from 'react'
import { StyledCard } from './styles'

const CardComponent = ({ children, url, onClick, cardStyle, width, height, inline, margin }) => {
    return (
        <StyledCard
            url={url}
            onClick={onClick}
            cardStyle={cardStyle}
            width={width}
            height={height}
            inline={inline}
            margin={margin}
        >
            {children}
        </StyledCard>
    )
}

export default CardComponent