import styles from './InputText.module.css'

export const InputText = ({...props}: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input className={styles.input} {...props} />
    )
}