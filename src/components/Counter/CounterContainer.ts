import {connect} from 'react-redux';
import {Counter} from './Counter';
import {StateType} from '../../store/store';
import {setCounterMode, setCounterValue} from '../../store/counter-reducer';


type MapStateToPropsType = {
    counter: number
    minValue: number
    maxValue: number
}

type MapDispatchToPropsType = {
    setCounterValue: (value: number) => void
    setCounterMode: (value: boolean) => void
}

export type CounterPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: StateType) => ({
    counter: state.counter.counter,
    minValue: state.counter.minValue,
    maxValue: state.counter.maxValue,
})


export const CounterContainer = connect(mapStateToProps,
    {
        setCounterValue,
        setCounterMode
    })(Counter)