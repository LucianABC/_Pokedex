import React from 'react';
import './Pokedex.scss';
import PokedexBckgrnd from '../../img/pokedex.png';
import PokeSide from './components/PokeSide/PokeSide';

const Pokedex = () =>{
    return(
        <div className="pokedex-back" 
            style={{backgroundImage:`url(${PokedexBckgrnd})`}}>
                <div className="pokedex-content">
                    <PokeSide side="left"></PokeSide>
                    <PokeSide side="right"></PokeSide>
                </div>

        </div>
    );
}

export default Pokedex;