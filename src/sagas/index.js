import{all, put, call, takeLatest} from 'redux-saga/effects';
import Axios from 'axios';
import {setPokemon} from '../actions';

const mainUrl = 'https://pokeapi.co/api/v2/pokemon';

function* watchGetPokemon() {
    yield takeLatest('GET_POKEMON', fetchPokemon);
} 
function* watchGetRandomPokemon() {
    yield takeLatest('GET_RANDOM_POKEMON', fetchPokemon);
} 
function* watchExplorePokemon(){
    yield takeLatest('NAVIGATE',fetchPokemon);
}
function* fetchPokemon (action){
    const res = yield call(Axios.get, `${mainUrl}/${action.id}`);
    yield put(setPokemon(res.data));
}

export function* rootSaga() {
    yield all([
        watchGetPokemon(),
        watchGetRandomPokemon(),
        watchExplorePokemon(),
    ])
}

export default rootSaga;