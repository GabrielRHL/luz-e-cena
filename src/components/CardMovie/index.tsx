import { Tag } from '../Tag'
import styles from './CardMovie.module.css'

type Category = '2D' | '3D'

type Censorship = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos";

interface CardMovieProps {
    src: string;
    alt: string;
    title: string;
    category: Category;
    censorship: Censorship;
    gender: string;
    duration: number;
}

export const CardMovie = (props: CardMovieProps) => {
    const { src, alt, title, gender, category, duration, censorship } = props;
    return (
        <li className={styles.card}>
            <img src={src} alt={alt}></img>
            <div className={styles.container}>
                <h3>{title}</h3>
                <div className={styles.info}>
                    <div className={styles.line1}>
                       <p>{gender}</p> 
                       <Tag value={category}/>
                    </div>
                    <div className={styles.line2}>
                        <p>{duration}</p>
                        <Tag value={censorship}/>
                    </div>
                </div>
            </div>
        </li>
    )
}