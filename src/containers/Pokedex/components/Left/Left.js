import React from 'react';
import Arrows from '../../../../img/arrows.png'
import './Left.scss';

const Left=()=>{
    return(
        <section className="left-side">
            <div className="screen-border">
               <div className="screen">
                   <div>
                       
                   </div>
                </div> 
            </div>
            <div className="buttons-navigation">
                <img src={Arrows}/>
            </div>
        </section>
    );
}

export default Left;