import React from 'react';
import classes from './_selector.module.scss';

type Props = {
    roomsAmount: number;
    labelText: string;
    htmlFor: string;
    id: string;
    name: string;
    handleNumberChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    extraLabelClass?: string;
}

const Selector = ({roomsAmount, htmlFor, id, name, labelText, extraLabelClass, handleNumberChange}: Props) => {
    const labelClass = extraLabelClass ? `${classes.sel__label} ${extraLabelClass}` : classes.sel__label;

    return (
        <>
            <label className={labelClass} htmlFor={htmlFor}>{labelText}</label>
            <select className={classes.selector} id={id} name={name} value={roomsAmount} onChange={handleNumberChange}>
                {Array.from({ length: 9 }, (_, index) => index + 1).map((number) => (
                    <option key={number} value={number}>
                        {number}
                    </option>
                ))}
            </select>
        </>
    )
}

export default Selector;