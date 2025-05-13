import { FaSearch } from 'react-icons/fa'
import { Button } from '../Button'
import { Fieldset } from '../Fieldset'
import { InputText } from '../InputText'
import styles from  './MovieSection.module.css'
import { MovieList } from '../MovieList'
import { Movie } from '../../types'
import { getMovies } from '../../backend'
import { useEffect, useState } from 'react'


export const MovieSection = () => {
    const [movies, setMovies] = useState<Movie[]>([])

    const fetchMovies = async () => {
        try {
            const movies = await getMovies()
            setMovies(movies)
        } catch (error) {
            console.error('Erro ao buscar filmes' + error)
        }
    }

    useEffect(() => {
        fetchMovies()
    })

    return (
        <main>
            <section className={styles.container}>
            <Fieldset variant='secondary'>
                <InputText placeholder='Buscar filmes...' />
                <Button variant='icon'>
                    <FaSearch />
                </Button>
            </Fieldset>
            <h1 className={styles.title}></h1>
            <MovieList movies={movies}/>
        </section>
        </main>
    )
}