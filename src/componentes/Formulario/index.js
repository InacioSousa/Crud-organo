import "./Formulario.css"
import CampoTexto from "../CampoTexto";

const Formulario = ()=>{
    return(
      <section className="formulario">
        <form>
            <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto  label="Nome" placeholder="Digite seu nome"/>
        <CampoTexto  label="Cargo" placeholder="Digite seu Cargo"/>
        <CampoTexto  label="Imagem" placeholder="Insira sua Imagem"/>
        </form>
      </section>
    )
}

export default Formulario;