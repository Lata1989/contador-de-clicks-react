import React from "react";
import './Contador.css';

export const Contador = ({numeroClicks}) => {

    return(
        <>
            <div className='contador'>
                {numeroClicks}
            </div>
        </>
    );
};