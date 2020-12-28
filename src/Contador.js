import React from 'react';

const Contador = ({counter, addNumber, removeNumber, resetNumber }) => {
    return (
        <>
            <p>El contador va:{counter}</p>
            <button onClick = { addNumber }>+</button>
            <button onClick = { removeNumber }>-</button>
            <button onClick = { resetNumber }>reset</button>
        </>
    )
}

export default Contador;


