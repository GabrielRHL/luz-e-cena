import { useEffect, useState } from "react"
import { getMovies } from "../backend"
import { Movie } from "../types"

export const useFetchMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const fetchMovies = async () => {
        setLoading(true)
        setError(null)
        try {
            const movies = await getMovies()
            setMovies(movies)
        } catch (error) {
            setError('Erro ao buscar filmes')
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchMovies()
    })
    
    return {movies, loading, error}
}