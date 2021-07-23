const initialState = {
    buttonDisabled: false,
    minError: false,
    maxError: false
}

type CounterSettingsStateType = typeof initialState

type SetButtonDisabledType = {
    type: 'SET_BUTTON_DISABLED'
    value: boolean
}
type SetMinErrorType = {
    type: 'SET_MIN_ERROR'
    value: boolean
}
type SetMaxErrorType = {
    type: 'SET_MAX_ERROR'
    value: boolean
}


export type ActionsType =
    SetButtonDisabledType
    | SetMinErrorType
    | SetMaxErrorType

export const counterSettingsReducer = (state: CounterSettingsStateType = initialState, action: ActionsType): CounterSettingsStateType => {
    switch (action.type) {
        case 'SET_BUTTON_DISABLED': {
            return {
                ...state,
                buttonDisabled: action.value
            }
        }
        case 'SET_MIN_ERROR': {
            return {
                ...state,
                minError: action.value
            }
        }
        case 'SET_MAX_ERROR': {
            return {
                ...state,
                maxError: action.value
            }
        }


        default:
            return state
    }
}

export const setButtonDisabled = (value: boolean): SetButtonDisabledType => ({type: 'SET_BUTTON_DISABLED', value})
export const setMinError = (value: boolean): SetMinErrorType => ({type: 'SET_MIN_ERROR', value})
export const setMaxError = (value: boolean): SetMaxErrorType => ({type: 'SET_MAX_ERROR', value})