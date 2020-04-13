import React, {useState} from 'react';
import {connect} from 'react-redux';
import{ getPokemon, randomPokemon} from'../../actions';
import './Right.scss';
import './Types.scss';

const Right =({id,name, types, search, random})=>{
    const [inputvalue, setInputvalue] = useState("");
    const searchPokemon=()=>{
        console.log(inputvalue)
        search(inputvalue);
        setInputvalue("");
    }
    return(
        <div className="pokedex-navigation-container">
            <div className="screen">
                <p className="id-name">
                    {id} - {name}
                </p>
                <div className="types">
                    {
                       types && types.map((type,i)=>{
                            return <div
                            key={`${i}-${type.type.name}`}
                            className={`type-${type.type.name}`}>
                                {type.type.name}
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="search">
                <input type="text" placeholder="Pokemon ID/name" value={inputvalue} onChange={e=>{setInputvalue(e.target.value)}}/>
                <div>
                    <button onClick={searchPokemon}>GO!</button>
                    <button onClick={random}>Random</button>
                </div>
            </div>
            <div className="button-nav">
                <button> {"<"}</button>
                <button>{">"}</button>
            </div>
        </div>
    );
}

const mapStateToProps=(state)=>{
    return {
        id: state.id,
        name: state.name,
        types:state.types
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        search: (id)=> dispatch(getPokemon(id)),
        random: ()=> dispatch(randomPokemon())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Right);