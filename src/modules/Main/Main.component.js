import React, { useState } from 'react'
import { getImages } from '../../config/API'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { LoadingOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import {
    FeaturedMovieWrapper,
    FeaturedGradient,
    FeaturedMovieInformation,
    MovieTitle,
    MovieDescription,
    MovieSubInformation,
    MovieStars,
    MovieSubInfoText,
    PopularMoviesWrapper,
    PopularMoviesTitle,
    PopularMoviesInformationGrid,
    ExibitionStyle,
    GridIcon,
    ListIcon,
    IconWrapper,
    PopularMoviesInformationList,
    ListGradient,
    ListContent,
    ListInformation,
    ListTitle,
    ListDescription,
    LeftArrow,
    RightArrow,
    LoadingWrapper
} from './styles'

const Main = ({ topRated, popular, page, setPage, loading }) => {
    const [cardStyleType, setCardStyleType] = useState(2)
    const navigate = useNavigate()

    return (
        loading || !popular || !topRated ? (
            <LoadingWrapper>
                <LoadingOutlined style={{ fontSize: '84px', color: 'red' }} />
            </LoadingWrapper>
        ) : (
            <div>
                <FeaturedMovieWrapper url={getImages(topRated.backdrop_path)}>
                    <FeaturedGradient>
                        <FeaturedMovieInformation>
                            <MovieTitle>{topRated.title}</MovieTitle>
                            <MovieSubInformation>
                                <div>
                                    <MovieStars />
                                    <MovieSubInfoText marginLeft="10px">
                                        {topRated.vote_average}
                                    </MovieSubInfoText>
                                </div>
                                <MovieSubInfoText marginLeft="20px">|</MovieSubInfoText>
                                <MovieSubInfoText marginLeft="10px">
                                    {topRated.release_date.split('-')[0]}
                                </MovieSubInfoText>
                                <MovieSubInfoText marginLeft="10px">|</MovieSubInfoText>
                                <MovieSubInfoText marginLeft="15px">
                                    {topRated.runtime}
                                    {" Min"}
                                </MovieSubInfoText>
                                <MovieSubInfoText marginLeft="10px">|</MovieSubInfoText>
                                <MovieSubInfoText marginLeft="15px">
                                    {topRated.genres.length ? (
                                        (topRated.genres[0].name) +
                                        (topRated.genres.length >= 2 ? ("/" + topRated.genres[1].name) : "")
                                    ) : ""}
                                </MovieSubInfoText>
                            </MovieSubInformation>
                            <MovieDescription marginTop="20px">{topRated.overview}</MovieDescription>

                            <div style={{ marginTop: '20px' }}>
                                <Button
                                    height="50px"
                                    width="200px"
                                    color="#FFFF"
                                    onClick={() => navigate(`/movie?id=${topRated.id}`)}
                                >
                                    MAIS INFORMAÇÕES
                                </Button>
                            </div>
                        </FeaturedMovieInformation>
                    </FeaturedGradient>
                </FeaturedMovieWrapper>

                <PopularMoviesWrapper>
                    <PopularMoviesTitle>Filmes populares</PopularMoviesTitle>
                    <ExibitionStyle>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <IconWrapper
                                title="Página anterior"
                                onClick={() => { if (page > 1) setPage(page - 1) }}
                                blocked={page === 1}
                            >
                                <LeftArrow />
                            </IconWrapper>
                            <div style={{ margin: '0px 10px 0px 10px', color: "#FFF", fontSize: '26px' }}>
                                {page}
                            </div>
                            <IconWrapper
                                title="Próxima página"
                                onClick={() => { if (page < popular.total_pages) setPage(page + 1) }}
                                blocked={page === popular.total_pages}
                            >
                                <RightArrow />
                            </IconWrapper>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <IconWrapper
                                title="Lista"
                                onClick={() => setCardStyleType(2)}
                                blocked={cardStyleType === 2}
                            >
                                <ListIcon />
                            </IconWrapper>
                            <IconWrapper
                                title="Grid"
                                marginLeft="10px"
                                onClick={() => setCardStyleType(1)}
                                blocked={cardStyleType === 1}
                            >
                                <GridIcon />
                            </IconWrapper>
                        </div>
                    </ExibitionStyle>
                    {cardStyleType === 1 ? (
                        <PopularMoviesInformationGrid>
                            {popular.results.map((item) => (
                                <Card
                                    key={item.id}
                                    url={getImages(item.poster_path)}
                                    onClick={() => {
                                        navigate(`/movie?id=${item.id}`)
                                    }}
                                    cardStyle={cardStyleType}
                                    width="430px"
                                    height="720px"
                                />
                            ))}
                        </PopularMoviesInformationGrid>
                    ) : (
                        <PopularMoviesInformationList>
                            {popular.results.map((item) => (
                                <Card
                                    key={item.id}
                                    onClick={() => {
                                        navigate(`/movie?id=${item.id}`)
                                    }}
                                    cardStyle={cardStyleType}
                                    width="1400px"
                                    height="420px"
                                >
                                    <ListContent url={getImages(item.backdrop_path)}>
                                        <ListGradient>
                                            <ListInformation>
                                                <ListTitle>{item.title}</ListTitle>
                                                <MovieSubInformation>
                                                    <div>
                                                        <MovieStars />
                                                        <MovieSubInfoText marginLeft="10px">
                                                            {item.vote_average}
                                                        </MovieSubInfoText>
                                                    </div>
                                                    <MovieSubInfoText marginLeft="20px">|</MovieSubInfoText>
                                                    <MovieSubInfoText marginLeft="10px">
                                                        {item.release_date.split('-')[0]}
                                                    </MovieSubInfoText>
                                                </MovieSubInformation>
                                                <div style={{ marginTop: '30px' }}>
                                                    <ListDescription>
                                                        {item.overview ? (
                                                            item.overview.split(" ").map((c, i) => i <= 70 ? c + " " : "")
                                                        ) : "Descrição não fornecida."}
                                                        {item.overview && (
                                                            item.overview.split(" ").length > 70 ? "..." : ""
                                                        )}
                                                    </ListDescription>
                                                </div>
                                            </ListInformation>
                                        </ListGradient>
                                    </ListContent>
                                </Card>
                            ))}
                        </PopularMoviesInformationList>
                    )}
                </PopularMoviesWrapper>
            </div >
        )
    )
}

export default Main