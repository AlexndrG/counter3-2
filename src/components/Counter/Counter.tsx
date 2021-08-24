import React from 'react';
import s from './Counter.module.css'
import {Display} from '../Display/Display';
import {Button} from '../Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from '../../store/store';
import {CounterStateType, setCounterMode, setCounterValue} from '../../store/counter-reducer';

export const Counter = () => {
    const counterState = useSelector<StateType,CounterStateType>(state => state.counter)
    const dispatch = useDispatch()

    const {
        counter,
        minValue,
        maxValue,
    } = counterState

    const increment = () => {
        if (counter < maxValue) {
            dispatch(setCounterValue(counter + 1))
        }
    }

    const reset = () => {
        dispatch(setCounterValue(minValue))
    }

    const enterSetmode = () => {
        dispatch(setCounterMode(false))
    }

    return (
        <div className={s.main}>

            <Display
                counterValue={counter}
                error={counter >= maxValue}
            />

            <div className={s.buttons}>
                <Button
                    name={'Inc'}
                    disabled={counter >= maxValue}
                    callback={increment}
                />

                <Button
                    name={'Reset'}
                    disabled={counter === minValue}
                    callback={reset}
                />

                <Button
                    name={'Set'}
                    disabled={false}
                    callback={enterSetmode}
                />
            </div>

        </div>
    )
}