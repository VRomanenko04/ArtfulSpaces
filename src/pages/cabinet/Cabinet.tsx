import React, { useState, useEffect } from 'react';
import Popup from '../../components/simple/popup/Popup';
import BasicInput from '../../components/UI/basic-input/BasicInput';
import classes from './_cabinet.module.scss';


const Cabinet = () => {
    const [modalActive, setModalActive] = useState(false);

    const [loginData, setLoginData] = useState(() => {
        const storedLoginData = JSON.parse(sessionStorage.getItem('loginData') || '{}');
        return {
            email: storedLoginData.email || '',
            phoneNumber: storedLoginData.phoneNumber || ''
        };
    });

    const [formData, setFormData] = useState({
        email: '',
        phoneNumber: '',
        firstName: '',
        lastName: '',
        footage: 0,
        roomsAmount: 0,
        totalPrice: 0
    });

    useEffect(() => {
        const storedOrderData = JSON.parse(localStorage.getItem('formData') || '{}');
        setFormData(storedOrderData);
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { // Указываем тип FormEvent
        event.preventDefault();
        setModalActive(true);
        sessionStorage.setItem('loginData', JSON.stringify(loginData));
    };

    const shouldShowPopup = (loginData.email === formData.email && loginData.phoneNumber === formData.phoneNumber) &&
    loginData.email !== '' && loginData.phoneNumber !== '';

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
            {shouldShowPopup ? 
                <Popup active={modalActive} setActive={setModalActive}>
                    <div>
                        <h2>Active Orders:</h2>
                        <div className={classes.list__container}>
                            <div className={classes.modal__list}> 
                                <div className={classes.left__col}> 
                                    <p>Order №1</p>
                                    <p>Apartment Area: {formData.footage} meters</p>
                                    <p>Rooms in: {formData.roomsAmount}</p>
                                </div>
                                <div className={classes.rigth__col}>
                                    <p>Order Status: Expect a call</p>
                                    <p>Estimated price: {formData.totalPrice} UAH</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Popup>
                :
                <Popup active={modalActive} setActive={setModalActive}>
                    <p>
                        You don't have order's yet ):
                    </p>
                </Popup>
            }
        </section>
    )
}

export default Cabinet;