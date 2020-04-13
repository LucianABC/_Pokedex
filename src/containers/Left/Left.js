import React from 'react';
import {connect} from 'react-redux';
import {explorePokemon} from '../../actions';
import Arrows from '../../img/arrows.png';
import './Left.scss';

const Left=({image, id, explorePokemon})=>{
    const navigate=(direction)=>{
        explorePokemon(id+direction);
    }
    return(
        <section className="left-side">
            <div className="screen-border">
               <div className="screen">
                   <div className="pokemon-img">
                       <img src={image && image}/>
                   </div>
                </div> 
            </div>
            <div className="buttons-navigation">
                <div className="arrows" style={{backgroundImage: `url(${Arrows})`}}>
                    <div className="up"></div>
                    <div className="sides">
                        <div className="left" onClick={e=>{navigate(-1)}}></div>
                        <div className="right" onClick={e=>{navigate(1)}}></div>
                    </div>
                    <div className="down"></div>    
                </div>
                

            </div>
        </section>
    );
}

const mapStateToProps=(state)=>{
    return{
        image: state.sprites.front_default,
        id: state.id
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        explorePokemon: (direction)=> dispatch(explorePokemon(direction))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Left);