export const setPokemon = (pokemon)=>({
    type:'SET_POKEMON',
    payload: pokemon
});

export const getPokemon= (id)=>({
  type: 'GET_POKEMON' ,
  id 
});

export const navigate = () =>({
    type: 'NAVIGATE'
});

export const randomPokemon = ()=>({
    type: 'GET_RANDOM_POKEMON',
    id: Math.floor(Math.random() * 807)
})

export default {
    setPokemon,
    getPokemon,
    navigate,
    randomPokemon
}