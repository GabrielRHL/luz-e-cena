import { FaSearch } from 'react-icons/fa'
import { Button } from '../Button'
import { Fieldset } from '../Fieldset'
import { InputText } from '../InputText'
import styles from  './MovieSection.module.css'
import { MovieList } from '../MovieList'
import { Movie } from '../../types'

const movies: Movie[]= [
    {
        id: 1,
        src: "public/imgs/cards/Marley e Eu.jpg",
        alt: "Imagem do filme Marley e Eu",
        title: "Marley e Eu",
        category: "2D",
        censorship: "Livre",
        gender: "Comédia dramática",
        duration: 120,
    },
    {
        id: 2,
        src: "public/imgs/cards/Card - Amigo da sombra.png",
        alt: "Imagem do filme Amigo da sombra",
        title: "Amigo da sombra",
        category: "2D",
        censorship: "12 anos",
        gender: "Suspense",
        duration: 110,
    },
    {
        id: 3,
        src: "public/imgs/cards/Card - Amigos do bosque mágico.png",
        alt: "Imagem do filme Amigo do bosque mágico",
        title: "Amigo do bosque mágico",
        category: "2D",
        censorship: "Livre",
        gender: "Animação",
        duration: 60,
    },
    {
        id: 4,
        src: "public/imgs/cards/Card - Caminho para o abismo.png",
        alt: "Imagem do filme Caminho para o abismo",
        title: "Caminho para o abismo",
        category: "2D",
        censorship: "14 anos",
        gender: "Horror",
        duration: 103,
    },
    {
        id: 5,
        src: "public/imgs/cards/Card - Desastres do Escritório.png",
        alt: "Imagem do filme Desastres do Escritório",
        title: "Desastres do Escritório",
        category: "2D",
        censorship: "Livre",
        gender: "Comédia",
        duration: 85,
    },
    {
        id: 6,
        src: "public/imgs/cards/Card - Mestres do futuro.png",
        alt: "Imagem do filme Mestres do Futuro",
        title: "Mestres do Futuro",
        category: "2D",
        censorship: "Livre",
        gender: "Documentário",
        duration: 120,
    },
    {
        id: 7,
        src: "public/imgs/cards/Card - La Esperanza.png",
        alt: "Imagem do filme La Esperanza",
        title: "La Esperanza",
        category: "2D",
        censorship: "12 anos",
        gender: "Drama",
        duration: 98,
    },
    {
        id: 8,
        src: "public/imgs/cards/Card - O nexus do tempo.png",
        alt: "Imagem do filme O nexus do tempo",
        title: "O nexus do tempo",
        category: "3D",
        censorship: "10 anos",
        gender: "Ficcção Científica",
        duration: 105,
    },
];

export const MovieSection = () => {
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