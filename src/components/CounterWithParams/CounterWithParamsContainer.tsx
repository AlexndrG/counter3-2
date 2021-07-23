import {connect} from 'react-redux';
import {CounterWithParams} from './CounterWithParams';
import {StateType} from '../../store/store';


type MapStateToPropsType = {
    counterMode: boolean
}

type MapDispatchToPropsType = {}

export type CounterWithParamsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
    counterMode: state.counter.counterMode,
})

export const CounterWithParamsContainer = connect(mapStateToProps, {})(CounterWithParams)