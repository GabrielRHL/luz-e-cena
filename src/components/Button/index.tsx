import styles from './Button.module.css'
import classNames from 'classnames'

type ButtonProps = {
    variant: "default" | "icon" | 'white'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({children, variant = "default", ...rest}: ButtonProps) => {
    const classMap = {
        default: styles.default,
        icon: styles.icon,
        white: styles.white
    }

    return (
        <button className={classNames(styles.button, classMap[variant])} {...rest}>{children}</button>
    )
}