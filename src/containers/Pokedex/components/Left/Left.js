import React from 'react';
import {connect} from 'react-redux';
import Arrows from '../../../../img/arrows.png'
import './Left.scss';

const Left=({image})=>{
    return(
        <section className="left-side">
            <div className="screen-border">
               <div className="screen">
                   <div className="pokemon-img">
                       <img src={image}/>
                   </div>
                </div> 
            </div>
            <div className="buttons-navigation">
                <img src={Arrows}/>
            </div>
        </section>
    );
}

const mapStateToProps=(state)=>{
    return{
        image: state.sprites.front_default
    }
}
export default connect(mapStateToProps)(Left);