import React, { useState } from 'react';
import classes from './_calculator.module.scss';
import BasicInput from '../../components/UI/basic-input/BasicInput';
import Selector from '../../components/UI/selector/Selector';
import calculateCost from '../../count/PriceCount';

interface IStates {
    metersNumber: number;
    howManyRooms: number;
    estimatedPrice: number;
}

const Calculator = () => {
    const [metersNumber, setMetersNumber] = useState<IStates['metersNumber']>(0);
    const [howManyRooms, setHowManyRooms] = useState<IStates['howManyRooms']>(1);
    const [estimatedPrice, setEstimatedPrice] = useState<IStates['estimatedPrice']>(0);

    //Управление инпутами
    const handleNumberChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newNumber = parseInt(event.target.value, 10);
        setHowManyRooms(newNumber);
    };

    const handleAmountInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue: number = parseFloat(event.target.value);
        setMetersNumber(newValue);
    };

    const handleCount = () => {
        setEstimatedPrice(calculateCost(metersNumber, howManyRooms));

        setMetersNumber(0);
        setHowManyRooms(1);
    }

    return (
        <section>
            <BasicInput
                labelText='Apartment Area (meters):'
                htmlFor="footage"
                type="number"
                id="footage"
                name="footage"
                placeholder='0'
                value={metersNumber === 0 ? '' : metersNumber}
                onChange={handleAmountInputChange}
                extraLabelClass={classes.block__margin}
                step="1"
            />
            <Selector
                roomsAmount={howManyRooms}
                labelText='Number of rooms:'
                htmlFor='rooms'
                id='rooms'
                name='rooms'
                handleNumberChange={handleNumberChange}
            />
            <button onClick={handleCount}>Calculate</button>
            {
                estimatedPrice > 0
                &&
                <div className={classes.prev__price}>
                    <p>Estimated cost of work: <strong>{estimatedPrice} UAH</strong></p>
                </div>
            }
        </section>
    )
}

export default Calculator;