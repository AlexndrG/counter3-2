import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import {counterSettingsReducer} from './counterSettings-reducer';
import {loadFromLocalStorage, saveToLocalStorage} from '../utils/localStorage-utils';

const reducers = combineReducers({
    counter: counterReducer,
    counterSettings: counterSettingsReducer
})

export type StateType = ReturnType<typeof reducers>

export const store = createStore(reducers, loadFromLocalStorage())

store.subscribe(() => {
    const state = store.getState()
    saveToLocalStorage(state)
})

