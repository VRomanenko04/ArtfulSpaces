import { useState } from 'react';
import { useFormContext } from '../../context/FormContext';
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
    const { footage, roomsAmount, handleAmountInputChange, handleNumberChange, handleDefault} = useFormContext();
    const [estimatedPrice, setEstimatedPrice] = useState<IStates['estimatedPrice']>(0);

    const handleCount = () => {
        setEstimatedPrice(calculateCost(footage, roomsAmount));

        handleDefault();
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
                value={footage === 0 ? '' : footage}
                onChange={handleAmountInputChange}
                extraLabelClass={classes.block__margin}
                step="1"
            />
            <Selector
                roomsAmount={roomsAmount}
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