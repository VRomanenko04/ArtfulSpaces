import React from 'react';
import classes from './_basic-input.module.scss';

type Props = {
    labelText: string;
    htmlFor: string;
    type: string;
    id: string;
    name: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    extraInputClass?: string;
    extraLabelClass?: string;
}

const BasicInput = ({labelText, htmlFor, type, id, name, value, placeholder, onChange, extraInputClass, extraLabelClass}: Props) => {
    const inputClass = extraInputClass ? `${classes.bas__input} ${extraInputClass}` : classes.bas__input;
    const labelClass = extraLabelClass ? `${classes.bas__label} ${extraLabelClass}` : classes.bas__label;

    return (
        <>
            <label className={labelClass} htmlFor={htmlFor}>{labelText}</label>
            <input 
                className={inputClass}
                type={type} 
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </>
    )
}

export default BasicInput