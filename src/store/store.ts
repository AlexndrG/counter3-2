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

let minValue = -1
let maxValue = -1

store.subscribe(() => {
    const state = store.getState()
    const stateMinValue = state.counter.minValue
    const stateMaxValue = state.counter.maxValue
    if (minValue !== stateMinValue || maxValue !== stateMaxValue) {
        saveToLocalStorage(state)
        minValue=stateMinValue
        maxValue=stateMaxValue
    }
})

