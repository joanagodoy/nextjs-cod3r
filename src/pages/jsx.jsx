import Layout from "../components/Layout"

export default function Jsx(){
    const titulo = <h1>JSX é um conceito Central</h1>
    return (
        <Layout titulo="Exemplo JSX">
            <div>
                {titulo}
                <h2>{"muito legal".toUpperCase()}</h2>
                <p>
                    {JSON.stringify({nome: "Joana", idade: 20})}
                </p>
            </div>
        </Layout>
        
    )
}