import { FaSearch } from 'react-icons/fa'
import { Button } from '../Button'
import { Fieldset } from '../Fieldset'
import { InputText } from '../InputText'
import styles from  './MovieSection.module.css'
import { MovieList } from '../MovieList'
import { useFetchMovies } from '../../hooks/useFetchMovies'
import { useMoviesFilter } from '../../hooks/useMoviesFilter'


export const MovieSection = () => {
    const {movies, loading, error} = useFetchMovies()
    const {searchTerm, setSearchTerm, filteredMovies, handleSearch} = useMoviesFilter(movies)

    return (
        <main>
            <section className={styles.container}>
            <Fieldset variant='secondary'>
                <InputText 
                value={searchTerm} 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)} 
                placeholder='Buscar filmes...' 
                />
                <Button variant='white' onClick={handleSearch}>
                    <FaSearch />
                </Button>
            </Fieldset>
            <h1 className={styles.title}></h1>
            {loading && <p>Carregando filmes...</p>}
            {error && <p className={styles.error}>{error}</p>}
            <MovieList movies={filteredMovies}/>
        </section>
        </main>
    )
}