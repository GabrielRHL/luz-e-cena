import { CardMovie } from '../CardMovie'
import styles from './MovieList.module.css'

type Category = '2D' | '3D'

type Censorship = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos";

interface Movie {
    id: number;
    src: string;
    alt: string;
    title: string;
    category: Category;
    censorship: Censorship;
    gender: string;
    duration: number;
}

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