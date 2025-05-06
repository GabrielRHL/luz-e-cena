import classNames from 'classnames';
import styles from './Tag.module.css'

type Category = '2D' | '3D'

type Censor = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos";

interface TagProps {
    value: Category | Censor
}

const tagClasses = {
  Livre: styles.livre,
  "10 anos": styles.dez,
  "12 anos": styles.doze,
  "14 anos": styles.catorze,
  "16 anos": styles.dezesseis,
  "2D": styles.doisD,
  "3D": styles.tresD,
};

export const Tag = ( {value}:TagProps ) => {
    const classes = classNames(styles.tag, tagClasses[value])
    return (
        <span className={classes}>{value}</span>
    )
}