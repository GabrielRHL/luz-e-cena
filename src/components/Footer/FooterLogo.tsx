import Logo from '../Logo'
import styles from './Footer.module.css'

export const FooterLogo = () => {
    return (
        <div className={styles.logo}>
            <Logo src='public/logo and favicon/Logo.png' alt='Logo'/>
            <p>Onde a realidade encontra a fantasia!</p>
        </div>
    )
}