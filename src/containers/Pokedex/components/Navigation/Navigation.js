import React from 'react';
import './Navigation.scss';

const Navigation =()=>{
    return(
        <div className="pokedex-navigation-container">
            <div className="screen"></div>
            <div className="search">
                <input type="text"/>
                <button></button>
                <button></button>
            </div>
            <div className="button-nav">
                <button></button>
                <button></button>
            </div>
        </div>
    );
}

export default Navigation;