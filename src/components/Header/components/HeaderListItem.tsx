import styles from '../Header.module.css'

export const HeaderListItem = ({children}: React.LiHTMLAttributes<HTMLLIElement>) => {
    return (
        <li className={styles.menuItem}>{children}</li>
    )
}