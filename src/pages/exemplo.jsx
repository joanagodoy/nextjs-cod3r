import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemple(){
    return(
        <Layout titulo="Exemplo Cabeçalho">
            <>
                <Cabecalho titulo="Next.js"/>
                <Cabecalho titulo="React.js"/>
            </>
        </Layout>
        
    )
}