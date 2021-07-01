import React, { useContext, useState } from 'react';
import { ContadorContexto } from '../componentes/ContadorContexto'

function Contador(props) {

    const [contagem, setContagem, teste] = useContext(ContadorContexto)

    function anterior() {
        let ant = contagem - 1;
        setContagem(ant)
    }

    function sucessor() {
        let suc = contagem + 1;
        setContagem(suc)
    }

    return (
        <div>

            <div>{contagem}</div>
            <button onClick={anterior}>-</button>
            <button onClick={sucessor}>+</button>
            <div>{teste}</div>
        </div>
    )
}


export default Contador;