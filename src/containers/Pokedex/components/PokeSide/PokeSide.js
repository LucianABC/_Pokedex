import React from 'react';
import './PokeSide.scss';
import Left from '../../../Left/Left';
import Right from '../../../Right/Right';
const PokeSide =({side})=>{
    return( 
    <div className={`side-container ${side}`}>
        <div className={`content-container ${side}`}>
            <div className={`${side} content`}>
            {
            side==="left"? 
                <Left/>
                :
                <Right/>
            }
            </div>
        </div>  
    </div>);
}

export default PokeSide;