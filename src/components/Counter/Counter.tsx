import React from 'react';
import s from './Counter.module.css'
import {Display} from '../Display/Display';
import {Button} from '../Button/Button';

type CounterPropsType = {
    counter: number
    minValue: number
    maxValue: number
    setCounterValue: (value: number) => void
    enterSetmode: () => void
}

export const Counter = (props: CounterPropsType) => {
    const increment = () => {
        if (props.counter < props.maxValue) {
            props.setCounterValue(props.counter + 1)
        }
    }

    const reset = () => {
        props.setCounterValue(props.minValue)
    }

    const enterSetmode = () => {
        props.enterSetmode()
    }

    return (
        <div className={s.main}>

            <Display
                counterValue={props.counter}
                error={props.counter >= props.maxValue}
            />

            <div className={s.buttons}>
                <Button
                    name={'Inc'}
                    disabled={props.counter >= props.maxValue}
                    callback={increment}
                />

                <Button
                    name={'Reset'}
                    disabled={props.counter === props.minValue}
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