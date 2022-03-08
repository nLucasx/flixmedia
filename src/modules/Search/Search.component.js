import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card'
import { FrownOutlined, LoadingOutlined } from '@ant-design/icons'
import { getImages } from '../../config/API'
import {
    PopularMoviesInformationList,
    MovieSubInfoText,
    MovieSubInformation,
    ListGradient,
    ListContent,
    ListInformation,
    ListTitle,
    ListDescription,
    LeftArrow,
    RightArrow,
    MovieStars,
    IconWrapper
} from '../Main/styles'

import {
    Background,
    SearchedMoviesWrapper,
    LoadingWrapper,
    NotFound
} from './styles'

const Search = ({ searchedMovies, page, setPage, loading, resetState }) => {
    const navigate = useNavigate()

    return (
        <Background>
            {searchedMovies && !loading ? (
                searchedMovies.results.length ? (
                <SearchedMoviesWrapper>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <IconWrapper
                            title="Página anterior"
                            onClick={() => { if (page > 1) setPage(page-1)}}
                            blocked={page === 1}
                        >
                            <LeftArrow />
                        </IconWrapper>
                        <div style={{ margin: '0px 10px 0px 10px', color: "#FFF", fontSize: '26px' }}>
                            {page}
                        </div>
                        <IconWrapper
                            title="Próxima página"
                            onClick={() => { if (page < searchedMovies.total_pages) setPage(page+1)}}
                            blocked={page === searchedMovies.total_pages}
                        >
                            <RightArrow />
                        </IconWrapper>
                    </div>
                    <PopularMoviesInformationList>
                        {searchedMovies.results.map((item) => (
                            <Card
                                key={item.id}
                                onClick={() => {
                                    resetState()
                                    navigate(`/movie?id=${item.id}`)
                                }}
                                cardStyle={2}
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
                                                        item.overview.split("").map((c, i) => i <= 450 ? c : "")
                                                    ) : "Descrição não fornecida."}
                                                    {item.overview && (
                                                        item.overview.length > 450 ? "..." : ""
                                                    )}
                                                </ListDescription>
                                            </div>
                                        </ListInformation>
                                    </ListGradient>
                                </ListContent>
                            </Card>
                        ))}
                    </PopularMoviesInformationList>
                </SearchedMoviesWrapper>
                ) : (
                    <NotFound>
                        Nenhum filme foi encontrado.
                        <FrownOutlined style={{ marginTop: '20px', fontSize: '60px'}}/>
                    </NotFound>
                )
            ) : (
                <LoadingWrapper>
                    <LoadingOutlined style={{ fontSize: '84px', color: 'red' }} />
                </LoadingWrapper>
            )}
        </Background>

    )
}

export default Search