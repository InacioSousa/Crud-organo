import "./Formulario.css"
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";

const Formulario = ()=>{

  const times=[
    'Programação',
    'FrontEnd',
    'DevOps',
    'Mobile',
    'Gestão'
  ]
    return(
      <section className="formulario">
        <form>
            <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto  label="Nome" placeholder="Digite seu nome"/>
        <CampoTexto  label="Cargo" placeholder="Digite seu Cargo"/>
        <CampoTexto  label="Imagem" placeholder="Insira sua Imagem"/>
        <ListaSuspensa label="Time" itens={times} />
        </form>
      </section>
    )
}

export default Formulario;