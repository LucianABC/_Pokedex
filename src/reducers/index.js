const rootReducer =(state,action)=>{
    switch(action.type){
        case 'GET_POKEMON':
        case 'GET_RANDOM_POKEMON':
        case 'SET_POKEMON':
            return action.payload
        default:
            return state
    }
}

export default rootReducer;