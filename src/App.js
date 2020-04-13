import React from 'react';
import useBool from './hooks/useBool';
import './App.css';
import Pokedex from './containers/Pokedex/Pokedex';
import ClosedPokedex from './containers/ClosedPokedex/ClosedPokedex';

function App() {
  const [closed,setClosed] =useBool(true);
  
  return (
    <div className="App">{
      closed? <ClosedPokedex setClosed={setClosed}></ClosedPokedex>  :     <Pokedex></Pokedex>
    }
    </div>
  );
}

export default App;
