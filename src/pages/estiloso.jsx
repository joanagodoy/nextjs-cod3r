import styles from "../styles/Estiloso.module.css"
import Link from 'next/Link'

export default function Estiloso(){
    return (
        <div className={styles.roxo}>
            <Link href='/'>Voltar</Link>
            <h1>Componente Estiloso!</h1>
        </div>
    )
}