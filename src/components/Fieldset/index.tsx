import styles from './Fieldset.module.css'

type FieldsetProps = {
    variant?: 'primary' | 'secondary'
} & React.FieldsetHTMLAttributes<HTMLFieldSetElement>

export const Fieldset = ( {children, variant='primary'}: FieldsetProps ) => {
    return (
        <fieldset className={`${styles.inputWrapper} ${
            variant === "primary" ? styles.primary : styles.secondary
        }`}>
            {children}
        </fieldset>
    )
}