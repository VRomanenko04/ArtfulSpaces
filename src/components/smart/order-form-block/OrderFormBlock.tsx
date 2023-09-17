import React, { useState, useEffect} from 'react';
import { useFormContext } from '../../../context/FormContext';
import { useTranslation } from 'react-i18next';
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
    const [popupActive, setPopupActive] = useState(false);
    const [formData, setFormData] = useState<IFormData>({ firstName: '', lastName: '', phoneNumber: '', email: '' });
    const [totalPrice, setTotalPrice] = useState<ICalculate['totalPrice']>(0);
    const { footage, roomsAmount, handleAmountInputChange, handleNumberChange, handleDefault } = useFormContext();

    const { t } = useTranslation();

    useEffect(() => {
        // При монтировании компонента, загружаем заказы из localStorage, если они есть
        JSON.parse(localStorage.getItem('orders') || '[]');
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        //Высчитываем цену заказа
        const calculatedPrice = calculateCost(footage, roomsAmount);
        setTotalPrice(calculatedPrice);
        
        // Создаем объект с данными формы
        const formDataObject = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            phoneNumber: formData.phoneNumber,
            email: formData.email,
            footage: footage,
            roomsAmount: roomsAmount,
            totalPrice: calculatedPrice
        };

        // Загружаем существующие заказы из localStorage
        const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');

        // Добавляем новый заказ в массив
        savedOrders.push(formDataObject);

        // Сохраняем обновленный массив заказов в localStorage
        localStorage.setItem('orders', JSON.stringify(savedOrders));

        //Сбрасываем показатели
        setFormData({ firstName: '', lastName: '', phoneNumber: '', email: '' });
        handleDefault();

        //Отображаем модальное окно
        setPopupActive(true);
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
                isPopup={popupActive}
                setIsPopup={setPopupActive}
            />
            {
                totalPrice > 0
                &&
                <div className={classes.prev__price}>
                    <p>{t("orderPrice")} <strong>{totalPrice} {t("orderUAH")}</strong></p>
                </div>
            }
        </section>
    )
}

export default OrderFormBlock;