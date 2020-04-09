import React from 'react';
import './PokeSide.scss';
import PokeContainer from '../PokeContainer/PokeContainer';
import Navigation from '../Navigation/Navigation';
const PokeSide =({side})=>{
    return( 
    <div className={`side-container ${side}`}>
        <div className={`content-container ${side}`}>
            <div className={`${side} content`}>
            {
            side==="left"? 
                <PokeContainer></PokeContainer>
                :
                <Navigation></Navigation>
            }
            </div>
        </div>  
    </div>);
}

export default PokeSide;