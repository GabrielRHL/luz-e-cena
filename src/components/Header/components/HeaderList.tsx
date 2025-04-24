import styles from '../Header.module.css'

export const HeaderList = ({children}: React.HTMLAttributes<HTMLUListElement>) => {
    return (
        <ul className={styles.header}>{children}</ul>
    )
}