
import './App.css';
import Banner from './componentes/Banner/Banner'
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto  label="Nome" placeholder="Digite seu nome"/>
      <CampoTexto  label="Cargo" placeholder="Digite seu Cargo"/>
      <CampoTexto  label="Imagem" placeholder="Insira sua Imagem"/>
    </div>
  );
}

export default App;
