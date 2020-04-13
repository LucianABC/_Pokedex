import React from 'react';
import './ClosedPokedex.scss';
import ClosedBackground from '../../img/pokedex-closed.png';

const ClosedPokedex =({setClosed})=>{
    return(
        <div className="closed-pokedex" 
            style={{backgroundImage: `url(${ClosedBackground})`}}
            onClick={setClosed}>

        </div>
    );
}

export default ClosedPokedex;