import React from 'react';
import './Right.scss';

const Right =()=>{
    return(
        <div className="pokedex-navigation-container">
            <div className="screen">
                <p>
                    Hola soy una screen
                </p>
            </div>
            <div className="search">
                <input type="text" placeholder="Pokemon ID/name"/>
                <div>
                    <button>GO!</button>
                    <button>Random</button>
                </div>
            </div>
            <div className="button-nav">
                <button> {"<"}</button>
                <button>{">"}</button>
            </div>
        </div>
    );
}

export default Right;