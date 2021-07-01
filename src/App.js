import { useState } from 'react';
import './App.css';
import Contador from './componentes/Contador';
import Cabecalho from './componentes/Cabecalho';

function App() {

  const [contagemApp, setContagemApp] = useState(0);

  function refletor(contador) {
    setContagemApp(contador)

  }



  return (
    <div className="App">
      <Cabecalho contagemApp={contagemApp}></Cabecalho>
      <Contador refletor={refletor}></Contador>
    </div>

  );
}

export default App;
