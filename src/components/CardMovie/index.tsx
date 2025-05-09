import { Tag } from '../Tag'
import styles from './CardMovie.module.css'
import { Movie } from '../../types';

export const CardMovie = (props: Movie) => {
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