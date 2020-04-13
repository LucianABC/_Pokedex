const rootReducer =(state,action)=>{
    switch(action.type){
        case 'SET_POKEMON':
            return action.payload
        case 'GET_POKEMON':
        case 'GET_RANDOM_POKEMON':
        default:
            return state
    }
}

export default rootReducer;