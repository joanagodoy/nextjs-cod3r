import styles from "../styles/Estiloso.module.css"
import Layout from "../components/Layout.jsx"

export default function Estiloso(){
    return (
        <Layout titulo="Exemplo de CSS Modularizado">
            <div className={styles.roxo}>
                <h1>Componente Estiloso!</h1>
            </div>
        </Layout>
    )
}