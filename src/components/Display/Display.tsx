import React from 'react';
import s from './Display.module.css'

type DisplayPropsType = {
    counterValue: number
    error: boolean
}

export const Display = (props: DisplayPropsType) => {

    const displayValue = props.counterValue.toString()
    let addClassName = s.counterOK
    if (props.error) {
        addClassName = s.counterFinish
    }

    return (
        <div className={s.display + ' ' + addClassName}>
            {displayValue}
        </div>
    )
}