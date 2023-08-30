import React, { useState } from 'react';
import { useFormContext } from '../../../context/FormContext';
import classes from './_order-form-block.module.scss';
import OrderForm from '../order-form/OrderForm';
import calculateCost from '../../../count/PriceCount';

interface IFormData {
    firstName: string;
    lastName: string;
    phoneNumber: string
    email: string;
}

interface ICalculate {
    footage: number;
    roomsAmount: number;
    totalPrice: number;
}

const OrderFormBlock = () => {
    const [formData, setFormData] = useState<IFormData>({ firstName: '', lastName: '', phoneNumber: '', email: '' });
    const [totalPrice, setTotalPrice] = useState<ICalculate['totalPrice']>(0);
    const { footage, roomsAmount, handleAmountInputChange, handleNumberChange, handleDefault } = useFormContext();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        //Высчитываем цену заказа
        setTotalPrice(calculateCost(footage, roomsAmount));
        
        // Создаем объект с данными формы
        const formDataObject = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            phoneNumber: formData.phoneNumber,
            email: formData.email,
            footage: footage,
            roomsAmount: roomsAmount,
            totalPrice: totalPrice
        };

        // Сохраняем данные в localStorage
        localStorage.setItem('formData', JSON.stringify(formDataObject));

        //Сбрасываем показатели
        setFormData({ firstName: '', lastName: '', phoneNumber: '', email: '' });
        handleDefault();
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
                handleAmountInputChange={handleAmountInputChange}
                handleNumberChange={handleNumberChange}
                formData={formData}
            />
            {
                totalPrice > 0
                &&
                <div className={classes.prev__price}>
                    <p>Estimated cost of work: <strong>{totalPrice} UAH</strong></p>
                </div>
            }
        </section>
    )
}

export default OrderFormBlock;