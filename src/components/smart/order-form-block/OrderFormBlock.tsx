import React, { useState } from 'react';
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
    const [footage, setFootage] = useState<ICalculate['footage']>(0);
    const [roomsAmount, setRoomsAmount] = useState<ICalculate['roomsAmount']>(1);
    const [totalPrice, setTotalPrice] = useState<ICalculate['totalPrice']>(0);

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

        //Высчитываем цену заказа
        setTotalPrice(calculateCost(footage, roomsAmount));

        //Сбрасываем показатели
        setFormData({ firstName: '', lastName: '', phoneNumber: '', email: '' });
        setFootage(0);
        setRoomsAmount(0);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAmountInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue: number = parseFloat(event.target.value);
        setFootage(newValue);
    };

    //Handler для селектора 
    const handleNumberChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newNumber = parseInt(event.target.value, 10);
        setRoomsAmount(newNumber);
    };

    return (
        <section className={classes.form__section}>
            <OrderForm
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                handleAmountInputChange={handleAmountInputChange}
                handleNumberChange={handleNumberChange}
                formData={formData}
                footage={footage}
                roomsAmount={roomsAmount}
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

export default OrderFormBlock