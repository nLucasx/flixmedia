import React, { useState, useEffect } from 'react'
import Main from './Main.component'
import { useMovies } from '../../providers/movies'

const MainContainer = () => {
    const { 
        topRated, 
        popular,
        selectedMovie,
        setSelectedMovie,
        getPopularMovies, 
        getTopRatedMovie, 
        getSelectedMovieInfo,
        page,
        setPage,
        resetState,
     } = useMovies()

    const [selectedMovieId, setSelectedMovieId] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        resetState()
    }, [])

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            await getTopRatedMovie()
        }
        getData()
    }, [])

    useEffect(() => {
        const getData = async () => {
            await getPopularMovies()
            setLoading(false)
        }
        getData()
    }, [page])

    useEffect(() => {
        const getData = async () => {
            if (selectedMovieId) {
                await getSelectedMovieInfo(selectedMovieId)
                setSelectedMovieId(null)
            }
        }
        getData()
    }, [selectedMovieId])

    return (
        <Main 
            topRated={topRated} 
            popular={popular} 
            setSelectedMovieId={setSelectedMovieId}
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
            page={page}
            setPage={setPage}
            loading={loading}
        />
    )
}

export default MainContainer