import React, { useState } from 'react';
import classes from './_order-from.module.scss';
import BasicInput from '../../UI/basic-input/BasicInput';

interface FormData {
    firstName: string;
    lastName: string;
    phoneNumber: string
    email: string;
}

const OrderForm = () => {
    const [formData, setFormData] = useState<FormData>({ firstName: '', lastName: '', phoneNumber: '', email: '' });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Создаем объект с данными формы
        const formDataObject = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            phoneNumber: formData.phoneNumber,
            email: formData.email,
        };
        // Сохраняем данные в localStorage
        localStorage.setItem('formData', JSON.stringify(formDataObject));

        setFormData({ firstName: '', lastName: '', phoneNumber: '', email: '' });
        alert('Form data saved to localStorage!');
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <section className={classes.form__section}>
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
                    labelText='Phone number:'
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
                <button className={classes.btn} type="submit">Place an Order</button>
            </form>
        </section>
    )
}

export default OrderForm