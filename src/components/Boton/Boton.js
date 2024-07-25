import React from "react";
import './Boton.css';

export const Boton = ({ texto, esBotonDeClick, manejarClick }) => {
    return (
        <>
            <button className={esBotonDeClick ? 'boton-click':'boton-reiniciar'}
                onClick={manejarClick}>
                {texto}
            </button>
        </>
    );
};