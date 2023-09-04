import React, { useState } from 'react';
import Popup from '../../components/UI/popup/Popup';
import BasicInput from '../../components/UI/basic-input/BasicInput';
import classes from './_cabinet.module.scss';

interface IOrder {
    email: string;
    phoneNumber: string;
    footage: number;
    roomsAmount: number;
    totalPrice: number;
}

const Cabinet = () => {
    const [modalActive, setModalActive] = useState(false);
    const [loginData, setLoginData] = useState(() => {
        const storedLoginData = JSON.parse(sessionStorage.getItem('loginData') || '{}');
        return {
            email: storedLoginData.email || '',
            phoneNumber: storedLoginData.phoneNumber || ''
        };
    });

    const [foundOrders, setFoundOrders] = useState<IOrder[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const allOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    
        // приводим всё к стандарту
        const normalizedEmail = loginData.email.trim().toLowerCase();
        const normalizedPhoneNumber = loginData.phoneNumber.trim();
    
        // Ищем заказы, соответствующие введенным данным
        const matchingOrders = allOrders.filter((order: IOrder) => (
            order.email.trim().toLowerCase() === normalizedEmail &&
            order.phoneNumber.trim() === normalizedPhoneNumber
        ));
    
        setFoundOrders(matchingOrders);
        setModalActive(true);
        sessionStorage.setItem('loginData', JSON.stringify(loginData));
    };

    return (
        <section className={classes.container}>
            <h2>Check your order status</h2>
            <form className={classes.form} onSubmit={handleSubmit}>
                <BasicInput
                    labelText='E-mail:'
                    htmlFor='email'
                    type='email'
                    id='email'
                    name='email'
                    placeholder='your@gmail.com'
                    value={loginData.email}
                    onChange={handleInputChange}
                />
                <BasicInput
                    labelText='Phone Number:'
                    htmlFor="phoneNumber"
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder='380556667788'
                    value={loginData.phoneNumber}
                    onChange={handleInputChange}
                />
                <button className={classes.btn}>Check order status</button>
            </form>
            <Popup active={modalActive} setActive={setModalActive}>
                {foundOrders.length > 0 ? (
                    <div>
                        <h2>Active Orders:</h2>
                        <div className={classes.list__container}>
                            {foundOrders.map((order, index) => (
                                <div className={classes.modal__list} key={index}>
                                    <div className={classes.left__col}>
                                        <p>Order №{index + 1}</p>
                                        <p>Apartment Area: {order.footage} meters</p>
                                        <p>Rooms in: {order.roomsAmount}</p>
                                    </div>
                                    <div className={classes.right__col}>
                                        <p>Order Status: Expect a call</p>
                                        <p>Estimated price: {order.totalPrice} UAH</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p>You don't have orders yet :(</p>
                )}
            </Popup>
        </section>
    );
};

export default Cabinet;