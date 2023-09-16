import classes from './_pricing-block.module.scss';
import Button from '../../UI/button/Button';
import { useTranslation } from 'react-i18next';

const PricingBlock = () => {
    const { t } = useTranslation();

    return (
        <section className={classes.pricing__container}>
            <h4>{t("pricingHead")}</h4>
            <div className={classes.pricing__block}>
                <div className={classes.up__side}>
                    <p>
                        {t("pricingMainText")}
                    </p>
                </div>
                <div className={classes.down__side}>
                    <p>{t("pricingSideText")}</p>
                    <Button text={t("pricingBtn")} link='calculator' extraClass={classes.button} alignSelf='center'/>
                </div>
            </div>
        </section>
    )
}

export default PricingBlock