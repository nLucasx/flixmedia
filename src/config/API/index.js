const API_KEY = process.env.REACT_APP_API_KEY

export const makeEndpoint = (path, params) =>`https://api.themoviedb.org/3${path}?language=pt-BR&api_key=${API_KEY}${params ? params : ""}`

export const getImages = (path) => `https://image.tmdb.org/t/p/original${path}`

export const getResizedImage = (path) => `https://image.tmdb.org/t/p/w300${path}`