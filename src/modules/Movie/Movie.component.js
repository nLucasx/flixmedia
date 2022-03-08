import React from 'react'
import { getImages } from '../../config/API'
import { LoadingOutlined } from '@ant-design/icons'
import Card from '../../components/Card'
import {
    CastingImageBackground,
    CastingNameWrapper,
    CastWrapper,
    ContentArea,
} from './styles'
import {
    LoadingWrapper,
    FeaturedMovieWrapper,
    FeaturedGradient,
    FeaturedMovieInformation,
    MovieTitle,
    MovieDescription,
    MovieSubInformation,
    MovieStars,
    MovieSubInfoText,
    PopularMoviesTitle
} from '../../modules/Main/styles'

const Movie = ({ selectedMovie, casting, videos }) => {
    return (
        !selectedMovie || !casting || !videos ? (
            <LoadingWrapper>
                <LoadingOutlined style={{ fontSize: '84px', color: 'red' }} />
            </LoadingWrapper>
        ) : (
            <>
                <FeaturedMovieWrapper url={getImages(selectedMovie.backdrop_path)}>
                    <FeaturedGradient>
                        <FeaturedMovieInformation>
                            <MovieTitle>{selectedMovie.title}</MovieTitle>
                            <MovieSubInformation>
                                <div>
                                    <MovieStars />
                                    <MovieSubInfoText marginLeft="10px">
                                        {selectedMovie.vote_average}
                                    </MovieSubInfoText>
                                </div>
                                <MovieSubInfoText marginLeft="20px">|</MovieSubInfoText>
                                <MovieSubInfoText marginLeft="10px">
                                    {selectedMovie.release_date.split('-')[0]}
                                </MovieSubInfoText>
                                <MovieSubInfoText marginLeft="10px">|</MovieSubInfoText>
                                <MovieSubInfoText marginLeft="15px">
                                    {selectedMovie.runtime}
                                    {" Min"}
                                </MovieSubInfoText>
                                <MovieSubInfoText marginLeft="10px">|</MovieSubInfoText>
                                <MovieSubInfoText marginLeft="15px">
                                    {selectedMovie.genres.length ? (
                                        (selectedMovie.genres[0].name) +
                                        (selectedMovie.genres.length >= 2 ? ("/" + selectedMovie.genres[1].name) : "")
                                    ) : ""}
                                </MovieSubInfoText>
                            </MovieSubInformation>
                            <MovieDescription marginTop="20px">{selectedMovie.overview}</MovieDescription>
                        </FeaturedMovieInformation>
                    </FeaturedGradient>
                </FeaturedMovieWrapper>

                <ContentArea>
                    <PopularMoviesTitle>Elenco</PopularMoviesTitle>
                    <CastWrapper>
                        {casting.map((item) => (
                            <Card
                                key={item.id}
                                height="500px"
                                width="300px"
                                margin="5px 20px 10px 0px"
                                inline
                            >
                                <CastingImageBackground url={item.profile_path ? getImages(item.profile_path) : "https://www.pngitem.com/pimgs/m/516-5167304_transparent-background-white-user-icon-png-png-download.png"} />
                                <CastingNameWrapper>
                                    <MovieDescription fontSize="15px">{item.original_name}</MovieDescription>
                                    <MovieDescription fontSize="15px">{item.character}</MovieDescription>
                                </CastingNameWrapper>
                            </Card>
                        ))}
                    </CastWrapper>
                </ContentArea>

                {videos.length && (
                    <ContentArea>
                        <PopularMoviesTitle>Trailers e Vídeos</PopularMoviesTitle>
                        <CastWrapper>
                            {videos.map((item, i) => (
                                <iframe
                                    key={i}
                                    width="560"
                                    height="315"
                                    src={`https://youtube.com/embed/${item.key}`}
                                    allowFullScreen
                                    frameBorder="0"
                                    style={{ margin: "5px 20px 10px 0px" }}
                                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                />
                            ))}
                        </CastWrapper>
                    </ContentArea>
                )}
            </>
        )
    )
}

export default Movie