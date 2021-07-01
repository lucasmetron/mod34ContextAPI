import React, { useContext } from 'react';
import { ContadorContexto } from '../componentes/ContadorContexto';

function Cabecalho(props) {

    const [contagem, setContagem] = useContext(ContadorContexto);

    return (
        <div className="cabecalho">
            <h3>Contador</h3>
            <div>{contagem}</div>
        </div>
    );
}


export default Cabecalho;