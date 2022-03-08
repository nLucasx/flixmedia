import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import Main from '../../modules/Main'
import Search from '../../modules/Search'
import Movie from '../../modules/Movie'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

const RoutesList = () => {
    const [navBarColor, setNavBarColor] = useState('transparent')

    const handleScroll = () => {
        if (window.scrollY === 0) {
            setNavBarColor('transparent')
        } else {
            setNavBarColor('#000')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <Router>
            <NavBar background={navBarColor} />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/search" element={<Search />}/>
                <Route path="/movie" element={<Movie/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </Router>
    )
}

export default RoutesList