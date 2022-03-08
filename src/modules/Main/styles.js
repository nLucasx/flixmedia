import styled from 'styled-components'
import { StarFilled } from '@ant-design/icons'
import { TableOutlined, UnorderedListOutlined, CaretLeftFilled, CaretRightFilled } from '@ant-design/icons'

export const LoadingWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FeaturedMovieWrapper = styled.div`
    height: 90vh;
    background-image: ${props => `url(${props.url})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const FeaturedGradient = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent);

    @media screen and (max-width: 820px) {
        width: 100%;
        display: flex;
        margin-left: 0px;
        align-items: center;
        justify-content: center;
    }
`

export const FeaturedMovieInformation = styled.div`
    width: 700px;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 60px;
    @media screen and (max-width: 820px) {
        margin-left: 0px;
        align-items: center;
        text-align: center;
    }
`

export const MovieTitle = styled.span`
    font-size: 72px;
    color: #FFFFFF;

    @media screen and (max-width: 820px) {
        font-size: 65px;
    }

    @media screen and (max-width: 590px) {
        font-size: 58px;
    }

    @media screen and (max-width: 430px) {
        font-size: 46px;
    }
`

export const MovieSubInformation = styled.div`
    font-size: 24px;
    color: #FFFFFF;
    display: flex;

    @media screen and (max-width: 820px) {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    @media screen and (max-width: 430px) {
        font-size: 16px;
    }
`

export const MovieSubInfoText = styled.span`
    margin-left: ${props => props.marginLeft};

`
export const MovieStars = styled(StarFilled)`
    color: red;
`
export const MovieDescription = styled.span`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
    
    font-family: 'Montserrat', sans-serif;
    font-size: ${props => props.fontSize || '23px'};
    color: #FFFFFF;
    margin-top: ${props => props.marginTop};

    @media screen and (max-width: 820px) {
        font-size: 18px;
    }

    @media screen and (max-width: 590px) {
        font-size: 16px;
    }

    @media screen and (max-width: 430px) {
        font-size: 14px;
    }
`

export const PopularMoviesWrapper = styled.div`
    background: #111;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const PopularMoviesInformationGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    margin-top: 20px;
    margin-bottom: 50px;

    @media screen and (max-width: 1500px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 990px) {
        grid-template-columns: 1fr;
    }
`
export const PopularMoviesInformationList = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 50px;
    margin-top: 20px;
    margin-bottom: 50px;
`

export const PopularMoviesTitle = styled.span`
    font-size: 58px;
    color: #FFFFFF;

    @media screen and (max-width: 480px) {
        font-size: 45px;
    }
`

export const ExibitionStyle = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    @media screen and (max-width: 1430px) {
        width: 1000px;
        
    }

    @media screen and (max-width: 1050px) {
        width: 750px;

    }

    @media screen and (max-width: 780px) {
        width: 500px;
    }

    @media screen and (max-width: 500px) {
        width: 320px;
    }
`
export const MovieImage = styled.img`
    width: 100%;

`

export const IconWrapper = styled.button`
    padding: 10px;
    background: #000;
    border: 0px;
    color: #FFF;
    border-radius: 100%;
    margin-left: ${props => props.marginLeft};
    cursor: ${props => props.blocked ? "not-allowed" : "pointer"};
    transition: 0.5s ease;
    opacity: ${props => props.blocked ? "0.4" : "1"};

    &:hover {
        background: ${props => props.blocked ? "" : "#FFF"};
        color: ${props => props.blocked ? "" : "#000"};
    }

`
export const GridIcon = styled(TableOutlined)`
    font-size: 30px;

    @media screen and (max-width: 500px) {
        font-size: 25px;
    }
`

export const ListIcon = styled(UnorderedListOutlined)`
    font-size: 30px;

    @media screen and (max-width: 500px) {
        font-size: 25px;
    }
`

export const LeftArrow = styled(CaretLeftFilled)`
    font-size: 30px;

    @media screen and (max-width: 500px) {
        font-size: 25px;
    }
`

export const RightArrow = styled(CaretRightFilled)`
    font-size: 30px;

    @media screen and (max-width: 500px) {
        font-size: 25px;
    }
`

export const ListContent = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-image: ${props => `url(${props.url})`};
    background-size: cover;
    border-radius: 10px;
    @media screen and (max-width: 500px) {
        background-size: 380px 480px;
        
    }
`

export const ListGradient = styled.div`
    width: 100%;
    height: inherit;
    background: linear-gradient(to right, #111 20%, transparent);
    border-radius: 10px;

`

export const ListInformation = styled.div`
    width: 40%;
    padding: 20px;
    white-space: wrap;

    @media screen and (max-width: 1000px) {
        width: 80%;
    }
`
export const ListTitle = styled.span`
    font-size: 45px;
    color: #FFF;
    
`

export const ListDescription = styled.span`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
    
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    color: #FFF;
    

    @media screen and (max-width: 1000px) {
        font-size: 16px;
    }
    
    @media screen and (max-width: 500px) {
        font-size: 15px;
    }
`