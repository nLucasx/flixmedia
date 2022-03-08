import styled from 'styled-components'

{/*export const StyledCard = styled.div`
    width: ${props => {
        if (props.cardStyle === 1) {
            return "450px"
        } else if (props.cardStyle === 2) {
            return "1400px"
        } else {
            return "70%"
        }
    }};
    height: ${props => {
        if (props.cardStyle === 1) {
            return "720px"
        }
        return "420px"
        
    }};
    background-image: ${props => `url(${props.url})`};
    background-repeat: no-repeat;
    background-size: ${props => {
        if (props.cardStyle === 1) {
            return "450px 720px"
        } else if (props.cardStyle === 2) {
            return "contain"
        }
        return "320px 450px"
    }};
    background-position: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    cursor: pointer;
    border-radius: 10px;
    
    @media screen and (max-width: 480px) {
        width: ${props => {
            if (props.cardStyle === 1) {
                return "350px"
            }
            return ""
        }};
        height: ${props => {
            if (props.cardStyle === 1) {
                return "620px"
            }
            return ""
        
        }}; 
        background-size: ${props => {
            if (props.cardStyle === 1) {
                return "350px 620px"
            }
            return ""
        
        }};
    }

    @media screen and (max-width: 1430px) {
        width: ${props => {
            if (props.cardStyle === 2) {
                return "1000px"
            }
            return ""
        }};
        
    }

    @media screen and (max-width: 1050px) {
        width: ${props => {
            if (props.cardStyle === 2) {
                return "750px"
            }
            return ""
        }};

    }

    @media screen and (max-width: 780px) {
        width: ${props => {
            if (props.cardStyle === 2) {
                return "500px"
            }
            return ""
        }};
        height: ${props => {
            if (props.cardStyle === 2) {
                return "380px"
            }
            return ""
        }};
        
    }

    @media screen and (max-width: 500px) {
        width: ${props => {
            if (props.cardStyle === 2) {
                return "320px"
            }
            return ""
        }};
        height: ${props => {
            if (props.cardStyle === 2) {
                return "480px"
            }
            return ""
        }};
        
    }
`*/}
export const StyledCard = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    display: ${props => props.inline ? "inline-block" : ""};
    margin: ${props => props.margin};
    background-image: ${props => `url(${props.url})`};
    background-repeat: no-repeat;
    background-size: ${props => {
        if (props.cardStyle === 1) {
            return "450px 720px"
        } else if (props.cardStyle === 2) {
            return "contain"
        }
        return "320px 450px"
    }};
    background-position: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    cursor: pointer;
    border-radius: 10px;
    
    @media screen and (max-width: 480px) {
        width: ${props => {
            if (props.cardStyle === 1) {
                return "350px"
            }
            return ""
        }};
        height: ${props => {
            if (props.cardStyle === 1) {
                return "620px"
            }
            return ""
        
        }}; 
        background-size: ${props => {
            if (props.cardStyle === 1) {
                return "350px 620px"
            }
            return ""
        
        }};
    }

    @media screen and (max-width: 1430px) {
        width: ${props => {
            if (props.cardStyle === 2) {
                return "1000px"
            }
            return ""
        }};
        
    }

    @media screen and (max-width: 1050px) {
        width: ${props => {
            if (props.cardStyle === 2) {
                return "750px"
            }
            return ""
        }};

    }

    @media screen and (max-width: 780px) {
        width: ${props => {
            if (props.cardStyle === 2) {
                return "500px"
            }
            return ""
        }};
        height: ${props => {
            if (props.cardStyle === 2) {
                return "380px"
            }
            return ""
        }};
        
    }

    @media screen and (max-width: 500px) {
        width: ${props => {
            if (props.cardStyle === 2) {
                return "320px"
            }
            return ""
        }};
        height: ${props => {
            if (props.cardStyle === 2) {
                return "480px"
            }
            return ""
        }};
        
    }
`