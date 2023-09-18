import React, { useState } from 'react';
import Popup from '../../components/UI/popup/Popup';
import BasicInput from '../../components/UI/basic-input/BasicInput';
import classes from './_cabinet.module.scss';
import { useTranslation } from 'react-i18next';

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

    const { t } = useTranslation();

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
            <h2>{t("cabinetHead")}</h2>
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
                    labelText={t("cabinetInput")}
                    htmlFor="phoneNumber"
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder='380556667788'
                    value={loginData.phoneNumber}
                    onChange={handleInputChange}
                />
                <button className={classes.btn}>{t("cabinetCheckStatus")}</button>
            </form>
            <Popup active={modalActive} setActive={setModalActive}>
                {foundOrders.length > 0 ? (
                    <div>
                        <h2>{t("cabinetOrders")}</h2>
                        <div className={classes.list__container}>
                            {foundOrders.map((order, index) => (
                                <div className={classes.modal__list} key={index}>
                                    <div className={classes.order__block}>
                                        <div className={classes.left__col}>
                                            <p>{t("cabinetNumber")}{index + 1}</p>
                                            <p>{t("cabinetApartment")} {order.footage} {t("cabinetMeters")}</p>
                                            <p>{t("cabinetRooms")} {order.roomsAmount}</p>
                                        </div>
                                        <div className={classes.right__col}>
                                            <p>{t("cabinetOrderStatus")}</p>
                                            <p>{t("cabinetEstimatedPrice")} {order.totalPrice} {t("orderUAH")}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p>{t("cabinetDontOrders")}</p>
                )}
            </Popup>
        </section>
    );
};

export default Cabinet;