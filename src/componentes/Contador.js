import React, { useState } from 'react';


function Contador(props) {


    const [contagem, setContagem] = useState(0)

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
            <div>{props.teste}</div>
            <div>{contagem}</div>
            <button onClick={() => {
                anterior();
                return (
                    props.refletor(contagem)
                )

            }}>-</button>
            <button onClick={() => {
                sucessor();
                return (
                    props.refletor(contagem)
                )
            }}>+</button>
        </div>
    )
}


export default Contador;