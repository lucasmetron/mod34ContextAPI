import React from 'react';


function Cabecalho(props) {
    return (
        <div className="cabecalho">
            <h3>Contador</h3>
            <div>{props.contagemApp}</div>
        </div>
    );
}



export default Cabecalho;