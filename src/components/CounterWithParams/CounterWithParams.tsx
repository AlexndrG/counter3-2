import React, {useEffect, useState} from 'react';
import s from './CounterWithParams.module.css'
import {Counter} from '../Counter/Counter';
import {CounterSettings} from '../CounterSettings/CounterSettings';

const INIT_MIN_VALUE = 0;
const INIT_MAX_VALUE = 5;

const MIN_VALUE_NAME = 'CounterMinValue'
const MAX_VALUE_NAME = 'CounterMaxValue'

export const CounterWithParams = () => {
    const [counterMode, setCounterMode] = useState<boolean>(true)

    const [counter, setCounter] = useState<number>(INIT_MIN_VALUE)
    const [minValue, setMinValue] = useState<number>(INIT_MIN_VALUE)
    const [maxValue, setMaxValue] = useState<number>(INIT_MAX_VALUE)

    useEffect(() => {
        const minString = localStorage.getItem(MIN_VALUE_NAME)
        const maxString = localStorage.getItem(MAX_VALUE_NAME)

        if (minString && maxString) {
            const minNumber = JSON.parse(minString)
            const maxNumber = JSON.parse(maxString)

            if (minNumber >= 0 && maxNumber > minNumber) {
                setCounter(minNumber)
                setMinValue(minNumber)
                setMaxValue(maxNumber)
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(MIN_VALUE_NAME, JSON.stringify(minValue))
    }, [minValue])

    useEffect(() => {
        localStorage.setItem(MAX_VALUE_NAME, JSON.stringify(maxValue))
    }, [maxValue])


    const setCounterValue = (value: number) => {
        setCounter(value)
    }

    const setNewMinValue = (value: number) => {
        setMinValue(value)
    }
    const setNewMaxValue = (value: number) => {
        setMaxValue(value)
    }

    const setButtonPressed = () => {
        setCounter(minValue)
        setCounterMode(true)
    }

    const enterSetmode = () => {
        setCounterMode(false)
    }

    return (
        <div className={s.main}>
            {!counterMode && <CounterSettings
                minValue={minValue}
                maxValue={maxValue}
                setNewMinValue={setNewMinValue}
                setNewMaxValue={setNewMaxValue}
                setButtonPressed={setButtonPressed}
            />}

            {counterMode && <Counter
                counter={counter}
                minValue={minValue}
                maxValue={maxValue}
                setCounterValue={setCounterValue}
                enterSetmode={enterSetmode}
            />}
        </div>
    )
}