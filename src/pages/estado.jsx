import { useState } from "react";
import Layout from "../components/Layout";


export default function Estado(){
    const [numero, setNumero] = useState(0) //react hook

    function incrementar(){
        setNumero(numero + 1)
    }

    return (
        <Layout titulo="Componente com Estado">
            <div>{numero}</div>
            <button onClick={incrementar}>Incremetar</button>
        </Layout>
    )
}