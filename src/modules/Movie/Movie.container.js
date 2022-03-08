import React, { useEffect } from 'react'
import Movie from './Movie.component'
import { useNavigate, useLocation } from 'react-router-dom'
import { useMovies } from '../../providers/movies'

const MovieContainer = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { 
        getSelectedMovieInfo, 
        selectedMovie, 
        getCasting, 
        casting, 
        videos, 
        getVideos,
        resetState 
    } = useMovies()

    useEffect(() => {
        const query = new URLSearchParams(location.search)
        if (!query.get("id")) {
            navigate('/')
        } else {
            const getData = async () => {
                resetState()
                await getSelectedMovieInfo(query.get("id"))
                await getCasting(query.get("id"))
                await getVideos(query.get("id"))
            }
            getData()
        }
    }, [])

    return (
        <Movie selectedMovie={selectedMovie} casting={casting} videos={videos}/>
    )
}

export default MovieContainer