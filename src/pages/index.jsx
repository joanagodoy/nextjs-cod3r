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
    </div>
  )
}