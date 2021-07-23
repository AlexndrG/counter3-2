import React, {useState} from 'react';
import s from './CounterSettings.module.css';
import {Button} from '../Button/Button';
import {Changer} from '../Changer/Changer';

type CounterSettingsPropsType = {
    minValue: number
    maxValue: number
    setNewMinValue: (value: number) => void
    setNewMaxValue: (value: number) => void
    setButtonPressed: () => void
}

export const CounterSettings = (props: CounterSettingsPropsType) => {
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false)
    const [minError, setMinError] = useState<boolean>(false)
    const [maxError, setMaxError] = useState<boolean>(false)

    const checkError = (minValue: number, maxValue: number) => {
        const minError = minValue < 0 || minValue >= maxValue
        const maxError = maxValue < 0 || maxValue <= minValue
        setMinError(minError)
        setMaxError(maxError)

        const error = minError || maxError
        setButtonDisabled(error)
    }

    const changeMaxValue = (maxValue: number) => {
        props.setNewMaxValue(maxValue)
        checkError(props.minValue, maxValue)
    }

    const changeMinValue = (minValue: number) => {
        props.setNewMinValue(minValue)
        checkError(minValue, props.maxValue)
    }

    const setButtonPressed = () => {
        props.setButtonPressed()
    }


    return (
        <div className={s.main}>

            <div className={s.changers}>
                <Changer
                    text={'max value:'}
                    value={props.maxValue}
                    changeValue={changeMaxValue}
                    error={maxError}
                />

                <Changer
                    text={'start value:'}
                    value={props.minValue}
                    changeValue={changeMinValue}
                    error={minError}
                />
            </div>

            <div className={s.buttons}>
                <Button
                    name={'Set'}
                    disabled={buttonDisabled}
                    callback={setButtonPressed}
                />
            </div>

        </div>
    )
}