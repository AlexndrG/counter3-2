import {connect} from 'react-redux';
import {StateType} from '../../store/store';
import {CounterSettings} from './CounterSettings';
import {
    setButtonPressed,
    setMaxValue,
    setMinValue
} from '../../store/counter-reducer';
import {setButtonDisabled, setMaxError, setMinError} from '../../store/counterSettings-reducer';

type MapStateToPropsType = {
    minValue: number
    maxValue: number

    buttonDisabled: boolean
    minError: boolean
    maxError: boolean
}

type MapDispatchToPropsType = {
    setButtonPressed: () => void
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void

    setButtonDisabled: (value: boolean) => void
    setMinError: (value: boolean) => void
    setMaxError: (value: boolean) => void
}

export type CounterSettingsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StateType) => ({
    minValue: state.counter.minValue,
    maxValue: state.counter.maxValue,

    buttonDisabled: state.counterSettings.buttonDisabled,
    minError: state.counterSettings.minError,
    maxError: state.counterSettings.maxError,
})

export const CounterSettingsContainer = connect(mapStateToProps,
    {
        setButtonPressed,
        setMinValue,
        setMaxValue,
        setButtonDisabled,
        setMinError,
        setMaxError
    })(CounterSettings)