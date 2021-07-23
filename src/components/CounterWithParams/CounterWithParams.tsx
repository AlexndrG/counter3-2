import React from 'react';
import s from './CounterWithParams.module.css'
import {CounterWithParamsPropsType} from './CounterWithParamsContainer';
import {CounterSettingsContainer} from '../CounterSettings/CounterSettingsContainer';
import {CounterContainer} from '../Counter/CounterContainer';

export const CounterWithParams = (props: CounterWithParamsPropsType) => {
    return (
        <div className={s.main}>
            {props.counterMode
                ? <CounterContainer/>
                : <CounterSettingsContainer/>}
        </div>
    )
}