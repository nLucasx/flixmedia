import React, { useState } from 'react'
import { SearchOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons'
import {
    StyledNavBar,
    Logo,
    SearchWrapper,
    SearchInput,
    IconWrapper,
    InputArea,
    MobileNavBar,
    MobileNavTop
} from './styles'
import { useNavigate } from 'react-router-dom'
import { useMovies } from '../../providers/movies'

const NavBar = ({ background }) => {
    const navigate = useNavigate()
    const { setSearchText, searchText } = useMovies()
    const [showSearch, setShowSearch] = useState(false)

    return (
        <>
            <StyledNavBar background={background}>
                <Logo onClick={() => navigate('/')}>FLIXMOVIE</Logo>
                <SearchWrapper>
                    <InputArea>
                        <SearchInput 
                            placeholder="Busque por filmes, séries..." 
                            onChange={(e) => setSearchText(e.target.value)} 
                            value={searchText}
                        />
                        <IconWrapper onClick={() => {
                            if (searchText) {
                                navigate(`/search?q=${searchText}`)
                            }
                        }}>
                            <SearchOutlined />
                        </IconWrapper>
                    </InputArea>
                </SearchWrapper>
            </StyledNavBar>
            <MobileNavBar showSearch={showSearch}>
                <MobileNavTop>
                    <Logo onClick={() => navigate('/')}>FLIXMOVIE</Logo>
                    {!showSearch ? (
                        <MenuOutlined
                            style={{ color: '#FFF', fontSize: '32px' }}
                            onClick={() => setShowSearch(true)}
                        />
                    ) : (
                        <CloseOutlined
                            style={{ color: '#FFF', fontSize: '32px' }}
                            onClick={() => setShowSearch(false)}
                        />
                    )}
                </MobileNavTop>
                <InputArea showSearch={showSearch}>
                    <SearchInput 
                        placeholder="Busque por filmes, séries..." 
                        onChange={(e) => setSearchText(e.target.value)} 
                        value={searchText}
                    />
                    <IconWrapper onClick={() => {
                        if (searchText) {
                            setShowSearch(false)
                            navigate(`/search?q=${searchText}`)
                        }
                    }}>
                        <SearchOutlined />
                    </IconWrapper>
                </InputArea>
            </MobileNavBar>
        </>
    )
}

export default NavBar