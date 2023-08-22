import React, {useState} from 'react';
import { useFormContext } from '../../../context/FormContext';
import BasicInput from '../../UI/basic-input/BasicInput';
import classes from './_order-form.module.scss';
import Selector from '../../UI/selector/Selector';

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
}

const OrderForm = ({handleSubmit, handleInputChange, handleAmountInputChange, handleNumberChange, formData}: Props) => {
    const { footage, roomsAmount } = useFormContext();
    const [validationErrors, setValidationErrors] = useState<IValidate>({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        footage: ''
    });
    
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
                            labelText='First Name:'
                            htmlFor="firstName"
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                        {validationErrors.firstName && <p className={classes.error}>{validationErrors.firstName}</p>}
                        <BasicInput
                            labelText='Last Name:'
                            htmlFor="lastName"
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                        {validationErrors.lastName && <p className={classes.error}>{validationErrors.lastName}</p>}
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
                        {validationErrors.footage && <p className={classes.error}>{validationErrors.footage}</p>}
                        <Selector
                            roomsAmount={roomsAmount}
                            labelText='Number of rooms:'
                            htmlFor='rooms'
                            id='rooms'
                            name='rooms'
                            handleNumberChange={handleNumberChange}
                        />
                    </div>
                </div>
                <button className={classes.btn} type="submit">Place an Order</button>
            </form>
        </>
    )
}

export default OrderForm;