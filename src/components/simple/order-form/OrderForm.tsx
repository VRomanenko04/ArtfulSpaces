import React from 'react';
import BasicInput from '../../UI/basic-input/BasicInput';
import classes from './_order-form.module.scss';

interface IFormData {
    firstName: string;
    lastName: string;
    phoneNumber: string
    email: string;
}

type Props = {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleAmountInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    formData: IFormData;
    footage: number;
    roomsAmount: number;
}

const OrderForm = ({handleSubmit, handleInputChange, handleAmountInputChange, formData, footage, roomsAmount}: Props) => {
    return (
        <form onSubmit={handleSubmit} className={classes.form}>
                <BasicInput
                    labelText='First Name:'
                    htmlFor="firstName"
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                />
                <BasicInput
                    labelText='Last Name:'
                    htmlFor="lastName"
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                />
                <BasicInput
                    labelText='Phone Number:'
                    htmlFor="phoneNumber"
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder='380556667788'
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                />
                <BasicInput
                    labelText='E-mail:'
                    htmlFor="email"
                    type="email"
                    id="email"
                    name="email"
                    placeholder='your@gmail.com'
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <BasicInput
                    labelText='Apartment Area (meters):'
                    htmlFor="footage"
                    type="number"
                    id="footage"
                    name="footage"
                    placeholder='0'
                    value={footage === 0 ? '' : footage}
                    onChange={handleAmountInputChange}
                    extraLabelClass={classes.block__margin}
                    step="1"
                />
                <button className={classes.btn} type="submit">Place an Order</button>
            </form>
    )
}

export default OrderForm;