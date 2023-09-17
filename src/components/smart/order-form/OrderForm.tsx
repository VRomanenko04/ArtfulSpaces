import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import { useFormContext } from '../../../context/FormContext';
import BasicInput from '../../UI/basic-input/BasicInput';
import classes from './_order-form.module.scss';
import Selector from '../../UI/selector/Selector';
import Popup from '../../UI/popup/Popup';

interface IFormData {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
}

interface IValidate extends IFormData {
    footage: string;
}

type Props = {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleAmountInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleNumberChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    formData: IFormData;
    isPopup: boolean;
    setIsPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderForm = ({handleSubmit, handleInputChange, handleAmountInputChange, handleNumberChange, formData, isPopup, setIsPopup}: Props) => {
    const { footage, roomsAmount } = useFormContext();
    const [validationErrors, setValidationErrors] = useState<IValidate>({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        footage: ''
    });

    const { t } = useTranslation();
    
    const isFormValid = () => {
        const errors: IValidate = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            footage: ''
        };

        if (!formData.firstName) {
            errors.firstName = 'First Name is required';
        }
        if (!formData.lastName) {
            errors.lastName = 'Last Name is required';
        }
        if (!formData.phoneNumber || formData.phoneNumber.length !== 12) {
            errors.phoneNumber = 'Phone Number must be 12 characters';
        }
        if (!formData.email || !formData.email.includes('@')) {
            errors.email = 'Email must be valid';
        }
        if (footage <= 0) {
            errors.footage = 'Apartment Area must be greater than 0';
        }

        setValidationErrors(errors);
        const isValid = Object.values(errors).every(error => error === '');
        return isValid;
    };

    //Эвент на форму
    const handleValidSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isFormValid()) {
            handleSubmit(event);
        }
    }
    
    return (
        <>
            <h2 className={classes.form__title}>Order Form</h2>
            <form onSubmit={handleValidSubmit} className={classes.form}>
                <div className={classes.inputs__group}>
                    <div className={classes.rigth__col}>
                        <BasicInput
                            labelText={t("formLabel1")}
                            htmlFor="firstName"
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                        {validationErrors.firstName && <p className={classes.error}>{validationErrors.firstName}</p>}
                        <BasicInput
                            labelText={t("formLabel2")}
                            htmlFor="lastName"
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                        {validationErrors.lastName && <p className={classes.error}>{validationErrors.lastName}</p>}
                        <BasicInput
                            labelText={t("formLabel3")}
                            htmlFor="phoneNumber"
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder='380556667788'
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                        />
                        {validationErrors.phoneNumber && <p className={classes.error}>{validationErrors.phoneNumber}</p>}
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
                        {validationErrors.email && <p className={classes.error}>{validationErrors.email}</p>}
                    </div>
                    <div className={classes.left__col}>
                        <BasicInput
                            labelText={t("formLabel4")}
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
                        {validationErrors.footage && <p className={classes.error}>{validationErrors.footage}</p>}
                        <Selector
                            roomsAmount={roomsAmount}
                            labelText={t("formLabel5")}
                            htmlFor='rooms'
                            id='rooms'
                            name='rooms'
                            handleNumberChange={handleNumberChange}
                        />
                    </div>
                </div>
                <button className={classes.btn} type="submit">{t("formBtn")}</button>
            </form>
            <Popup active={isPopup} setActive={setIsPopup}>
                <h4>{t("formPopup")}</h4>
            </Popup>
        </>
    )
}

export default OrderForm;