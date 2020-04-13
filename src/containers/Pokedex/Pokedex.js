import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './Pokedex.scss';
import PokedexBckgrnd from '../../img/pokedex.png';
import PokeSide from './components/PokeSide/PokeSide';
import {randomPokemon} from '../../actions';

const Pokedex = ({randomPokemon}) =>{
    useEffect(()=>{
        randomPokemon();
    },[])
    return(
        
        <div className="pokedex-back swing-in-left-bck" 
        style={{backgroundImage:`url(${PokedexBckgrnd})`}}>
            <div className="pokedex-content">
                <PokeSide side="left"></PokeSide>
                <PokeSide side="right"></PokeSide>
            </div>
        </div>
    
    );
}

const mapDispatchToProps=dispatch=>{
    return {
        randomPokemon: ()=> dispatch(randomPokemon())
    }
}
export default connect(null, mapDispatchToProps)(Pokedex);