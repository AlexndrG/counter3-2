export const INIT_MIN_VALUE = 0;
export const INIT_MAX_VALUE = 5;

export const initialState = {
    counter: INIT_MIN_VALUE,
    minValue: INIT_MIN_VALUE,
    maxValue: INIT_MAX_VALUE,
    counterMode: true,
}

export type CounterStateType = typeof initialState


type SetCounterType = {
    type: 'SET_COUNTER_VALUE'
    value: number
}
type SetMinValueType = {
    type: 'SET_MIN_VALUE'
    value: number
}
type SetMaxValueType = {
    type: 'SET_MAX_VALUE'
    value: number
}

type SetButtonPressedType = {
    type: 'SET_BUTTON_PRESSED'
}

type SetCounterModeType = {
    type: 'SET_COUNTER_MODE'
    value: boolean
}

export type ActionsType =
    SetCounterType
    | SetMinValueType
    | SetMaxValueType
    | SetButtonPressedType
    | SetCounterModeType

export const counterReducer = (state: CounterStateType = initialState, action: ActionsType): CounterStateType => {
    switch (action.type) {
        case 'SET_COUNTER_VALUE': {
            return {
                ...state,
                counter: action.value
            }
        }
        case 'SET_MIN_VALUE': {
            return {
                ...state,
                minValue: action.value
            }
        }
        case 'SET_MAX_VALUE': {
            return {
                ...state,
                maxValue: action.value
            }
        }

        case 'SET_BUTTON_PRESSED': {
            return {
                ...state,
                counter: state.minValue,
                counterMode: true
            }
        }

        case 'SET_COUNTER_MODE': {
            return {
                ...state,
                counterMode: action.value
            }
        }


        default:
            return state
    }
}

export const setCounterValue = (value: number): SetCounterType => ({type: 'SET_COUNTER_VALUE', value})
export const setMinValue = (value: number): SetMinValueType => ({type: 'SET_MIN_VALUE', value})
export const setMaxValue = (value: number): SetMaxValueType => ({type: 'SET_MAX_VALUE', value})

export const setButtonPressed = (): SetButtonPressedType => ({type: 'SET_BUTTON_PRESSED'})

export const setCounterMode = (value: boolean): SetCounterModeType => ({type: 'SET_COUNTER_MODE', value})