import React, { useState } from 'react';
import classes from './_order-form-block.module.scss';
import OrderForm from '../../simple/order-form/OrderForm';

interface FormData {
    firstName: string;
    lastName: string;
    phoneNumber: string
    email: string;
}

const OrderFormBlock = () => {
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
            <OrderForm
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                formData={formData}
            />
        </section>
    )
}

export default OrderFormBlock