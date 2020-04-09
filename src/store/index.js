import {createStore, applyMiddleware} from 'redux';
import {logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../sagas';
import rootReducer from '../reducers'; 

let initialState={
    abilities: [],
    base_experience: 0,
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    id: 0,
    is_default: true,
    location_area_encounters: "",
    moves: [],
    name: "",
    order: 0,
    species: {},
    sprites: {},
    stats: [],
    types: [],
    weight: 0
}
export const sagaMiddleware= createSagaMiddleware();
export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware,logger)
);

sagaMiddleware.run(rootSaga);


export default store;