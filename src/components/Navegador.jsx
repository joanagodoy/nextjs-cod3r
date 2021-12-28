import Link from "next/link";
import styles from "../styles/Navegador.module.css"

export default function Navegeador(props){
    return(
        <Link href={props.destino} passHref>
            <div className={styles.navegador} style={{
                backgroundColor: props.cor ?? 'dodgerblue'
            }}>
                {props.titulo}
            </div>
        </Link>
    )
}
    