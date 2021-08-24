import React from 'react';
import './App.css';
import {store} from './store/store';
import {Provider} from 'react-redux';
import {CounterWithParams} from './components/CounterWithParams/CounterWithParams';

function App() {
    return (
        <Provider store={store}>
            <CounterWithParams/>
        </Provider>
    )
}

export default App;
