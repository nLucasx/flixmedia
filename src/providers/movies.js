import React, { useState } from 'react'
import axios from 'axios';
import { makeEndpoint } from '../config/API'

const MoviesContext = React.createContext({})

export const MoviesProvider = (props) => {
    const [topRated, setTopRated] = useState(null)
    const [popular, setPopular] = useState(null)
    const [selectedMovie, setSelectedMovie] = useState(null)
    const [searchedMovies, setSearchedMovies] = useState(null)
    const [searchText, setSearchText] = useState('')
    const [casting, setCasting] = useState(null)
    const [videos, setVideos] = useState(null)
    const [page, setPage] = useState(1)

    const resetState = () => {
        setTopRated(null)
        setPopular(null)
        setSelectedMovie(null)
        setSearchedMovies(null)
        setSearchText('')
        setCasting(null)
        setVideos(null)
        setPage(1)
    }

    const getMovieInfo = async (id) => {
        const { data } = await axios.get(makeEndpoint(`/movie/${id}`))
        return data
    }

    const getTopRatedMovie = async () => {
        const { data } = await axios.get(makeEndpoint('/movie/top_rated'))
        const chosen = Math.floor(Math.random() * 20)
        setTopRated(await getMovieInfo(data.results[chosen].id))
    }

    const getPopularMovies = async () => {
        const { data } = await axios.get(makeEndpoint('/movie/popular', `&page=${page}`))
        const results = data.results.filter((item) => item.poster_path && item.backdrop_path)
        setPopular({
            results,
            total_pages: data.total_pages
        })
    }

    const getSelectedMovieInfo = async (id) => {
        const data = await getMovieInfo(id)
        setSelectedMovie(data)
    }

    const searchMovies = async (page) => {
        const { data } = await axios.get(makeEndpoint("/search/movie", `&query=${searchText}&page=${page}`))
        const filtered = data.results.filter(film => film.backdrop_path && film.poster_path)
        setSearchedMovies({
            results: filtered,
            total_pages: data.total_pages
        })
    }

    const getCasting = async (id) => {
        const { data } = await axios.get(makeEndpoint(`/movie/${id}/credits`))
        setCasting(data.cast)
    }

    const getVideos = async (id) => {
        const { data } = await axios.get(makeEndpoint(`/movie/${id}/videos`))
        const filtered = data.results.filter((item) => item.site === "YouTube")
        setVideos(filtered)
    }
    return (
        <MoviesContext.Provider
            value={{ 
                topRated, 
                getTopRatedMovie, 
                getPopularMovies, 
                popular,
                getSelectedMovieInfo,
                selectedMovie,
                setSelectedMovie,
                searchMovies,
                searchedMovies,
                searchText,
                setSearchText,
                page,
                setPage,
                casting,
                getCasting,
                getVideos,
                videos,
                resetState
        }}
        >
            {props.children}
        </MoviesContext.Provider>
    )
}

export const useMovies = () => React.useContext(MoviesContext)

