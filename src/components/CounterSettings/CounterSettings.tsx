import React from 'react';
import s from './CounterSettings.module.css';
import {Button} from '../Button/Button';
import {Changer} from '../Changer/Changer';
import {CounterSettingsPropsType} from './CounterSettingsContainer';

export const CounterSettings = (props: CounterSettingsPropsType) => {
    const checkError = (minValue: number, maxValue: number) => {
        const minError = minValue < 0 || minValue >= maxValue
        const maxError = maxValue < 0 || maxValue <= minValue
        props.setMinError(minError)
        props.setMaxError(maxError)

        const error = minError || maxError
        props.setButtonDisabled(error)
    }

    const changeMaxValue = (maxValue: number) => {
        props.setMaxValue(maxValue)
        checkError(props.minValue, maxValue)
    }

    const changeMinValue = (minValue: number) => {
        props.setMinValue(minValue)
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
                    error={props.maxError}
                />

                <Changer
                    text={'start value:'}
                    value={props.minValue}
                    changeValue={changeMinValue}
                    error={props.minError}
                />
            </div>

            <div className={s.buttons}>
                <Button
                    name={'Set'}
                    disabled={props.buttonDisabled}
                    callback={setButtonPressed}
                />
            </div>

        </div>
    )
}