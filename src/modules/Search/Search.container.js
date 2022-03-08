import React, { useEffect, useState } from 'react'
import Search from './Search.component'
import { useNavigate, useLocation } from 'react-router-dom'
import { useMovies } from '../../providers/movies'

const SearchContainer = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    const { searchMovies, searchedMovies, searchText, resetState } = useMovies()
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setPage(1)
    }, [query.get('q')])
    useEffect(() => {
        const getData = async () => {
            if (!searchText) {
                navigate('/')
            } else {
                setLoading(true)
                await searchMovies(page)
                setLoading(false)
            }
        }
        getData()
    }, [page, query.get('q')])
    
    return (
        <Search 
            searchedMovies={searchedMovies} 
            page={page} 
            setPage={setPage} 
            loading={loading}
            resetState={resetState}
        />
    )
}

export default SearchContainer