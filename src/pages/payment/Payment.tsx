import classes from './_payment.module.scss';
import money from '../../assets/money-icon.svg';
import { useTranslation } from 'react-i18next';

const Payment = () => {
    const { t } = useTranslation();

    return (
        <section className={classes.container}>
            <div className={classes.head}>
                <img src={money} alt="money" />
                <h4>{t("paymentHead")}</h4>
            </div>
            <div className={classes.information}>
                <h6>{t("paymentTerms")}</h6>
                <p>{t("paymentTermsText")}</p>
                <h6>{t("paymentTaxes")}</h6>
                <p>{t("paymentTaxesText")}</p>
                <h6>{t("paymentOrder")}</h6>
                <p>{t("paymentOrderText")}</p>
                <h6>{t("paymentTimelines")}</h6>
                <p>{t("paymentTimelinesText")}</p>
                <h6>{t("paymentGuarantee")}</h6>
                <p>{t("paymentGuaranteeText")}</p>
                <h6>{t("paymentCancellation")}</h6>
                <p>{t("paymentCancellationText")}</p>
                <p>{t("paymentEndText")}</p>
            </div>
        </section>
    )
}

export default Payment