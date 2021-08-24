import React from 'react';
import s from './CounterWithParams.module.css'
import {StateType} from '../../store/store';
import {useSelector} from 'react-redux';
import { Counter } from '../Counter/Counter';
import {CounterSettings} from '../CounterSettings/CounterSettings';

export const CounterWithParams = () => {
    const counterMode = useSelector<StateType,boolean>(state => state.counter.counterMode)

    return (
        <div className={s.main}>
            {counterMode
                ? <Counter/>
                : <CounterSettings/>}
        </div>
    )
}