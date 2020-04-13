import React from 'react';
import {connect} from 'react-redux';
import './Right.scss';
import './Types.scss';

const Right =({id,name, types})=>{
    return(
        <div className="pokedex-navigation-container">
            <div className="screen">
                <p className="id-name">
                    {id} - {name}
                </p>
                <div className="types">
                    {
                        types.map((type,i)=>{
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

const mapStateToProps=(state)=>{
    return {
        id: state.id,
        name: state.name,
        types:state.types
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Right);