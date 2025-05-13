import { useEffect, useState } from "react"
import { Movie } from "../types"

export const useMoviesFilter = (movies: Movie[]) => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])

    useEffect(() => {
        setFilteredMovies(movies)
    }, [movies])

    const handleSearch = () => {
        const filter = movies.filter((movie) => 
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredMovies(filter)
    }

    return {searchTerm, setSearchTerm, filteredMovies, handleSearch}
}