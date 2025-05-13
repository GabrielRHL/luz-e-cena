import { FooterInfo } from "./FooterInfo"
import { FooterLogo } from "./FooterLogo"
import styles from './Footer.module.css'
import FooterInstitucional from "./FooterInstitutional"
import FooterSocial from "./FooterSocial"

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_info}>
                <FooterLogo />
                <FooterInfo />
                <FooterInstitucional />
                <FooterSocial />
            </div>
        </footer>
    )
}