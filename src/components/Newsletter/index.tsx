import { Button } from '../Button'
import { Fieldset } from '../Fieldset'
import { InputText } from '../InputText'
import styles from './Newsletter.module.css'

export const Newsletter = () => {
    return (
        <section className={styles.newsletter}>
            <h2 className={styles.title}>Increva-se para ganhar descontos!</h2>
            <form className={styles.form}>
                <Fieldset>
                    <InputText placeholder='Digite seu email'/>
                </Fieldset>
                <Button type='submit' variant='default'>Inscreva-se</Button>
            </form>
        </section>
    )
}