import { CardMovie } from '../CardMovie'
import styles from './MovieList.module.css'
import { Movie } from '../../types';

interface MovieListProps {
    movies: Movie[];
}

export const MovieList = ( {movies}: MovieListProps ) => {
    return (
        <ul className={styles.list}>
            {movies.map((movie) => (
                <CardMovie key={movie.id} {...movie}/>
            ))}
        </ul>
    )
}