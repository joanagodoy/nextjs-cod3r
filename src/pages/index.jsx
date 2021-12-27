import Link from 'next/Link'
import Navegeador from '../components/Navegador'
export default function Inicio(){
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh'

    }}>
      <Navegeador titulo="Estiloso" destino="/estiloso"></Navegeador>
      <Navegeador titulo="Exemplo"  destino="/exemplo" cor="#9400d3"></Navegeador>
      <Navegeador titulo="JSX"      destino="/jsx"      cor="firebrick"></Navegeador>
      <Navegeador titulo="Navegação #01"      destino="/navegacao"      cor="green"></Navegeador>
      <Navegeador titulo="Navegação #02"      destino="/cliente/sp-1/123"      cor="green"></Navegeador>
      <Navegeador titulo="Componente com Estado"      destino="/estado"      cor="pink"></Navegeador>
    </div>
  )
}