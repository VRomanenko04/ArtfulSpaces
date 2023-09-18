import { useState } from 'react';
import { useFormContext } from '../../context/FormContext';
import { useTranslation } from 'react-i18next';
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

    const { t } = useTranslation();

    const handleCount = () => {
        setEstimatedPrice(calculateCost(footage, roomsAmount));

        handleDefault();
    }

    return (
        <section className={classes.calculator}>
            <div className={classes.calc_contruction}>
                <BasicInput
                    labelText={t("calculateInput1")}
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
                    labelText={t("calculateInput2")}
                    htmlFor='rooms'
                    id='rooms'
                    name='rooms'
                    handleNumberChange={handleNumberChange}
                    extraLabelClass={classes.label_margin}
                />
                <button onClick={handleCount} className={classes.btn}>{t("calculateBtn")}</button>
                {
                    estimatedPrice > 0
                    &&
                    <div className={classes.prev__price}>
                        <p>{t("orderPrice")} <strong>{estimatedPrice} {t("orderUAH")}</strong></p>
                    </div>
                }
            </div>
        </section>
    )
}

export default Calculator;