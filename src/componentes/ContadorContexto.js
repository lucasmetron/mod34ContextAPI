import React, { useState, createContext } from 'react';

export const ContadorContexto = createContext();

export function ContadorProvider(props) {

    const [contagem, setContagem] = useState(0)
    const teste = 2021;


    return (
        <ContadorContexto.Provider value={[contagem, setContagem, teste]}>
            {props.children}
        </ContadorContexto.Provider>
    );
}