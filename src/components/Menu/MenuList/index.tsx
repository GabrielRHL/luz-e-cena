import styles from './MenuList.module.css'

export const MenuList = ({children}: React.HTMLAttributes<HTMLUListElement>) => {
    return (
        <nav>
            <ul className={styles.navigation}>{children}</ul>
        </nav>
    )
}