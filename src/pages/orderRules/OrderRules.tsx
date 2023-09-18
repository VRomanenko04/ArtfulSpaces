import classes from './_order-rules.module.scss';
import { useTranslation } from 'react-i18next';

const OrderRules = () => {
    const { t } = useTranslation();

    return (
        <section className={classes.container}>
            <section className={classes.head__section}>
                <h4>{t("orderRulesHead")}</h4>
            </section>
            <section className={classes.list__section}>
                <h5>{t("orderRulesStages")}</h5>
                <ul>
                    <li><span className={classes.bold}>{t("orderRulesStagesHead1")}</span> {t("orderRulesStagesText1")}</li>
                    <li><span className={classes.bold}>{t("orderRulesStagesHead2")}</span> {t("orderRulesStagesText2")}</li>
                    <li><span className={classes.bold}>{t("orderRulesStagesHead3")}</span> {t("orderRulesStagesText3")}</li>
                    <li><span className={classes.bold}>{t("orderRulesStagesHead4")}</span> {t("orderRulesStagesText4")}</li>
                    <li><span className={classes.bold}>{t("orderRulesStagesHead5")}</span> {t("orderRulesStagesText5")}</li>
                </ul>
            </section>
            <section>
                <h5>{t("orderRulesSessionTitle1")}</h5>
                <p>{t("orderRulesSessionText1")}</p>
            </section>
            <section className={classes.payment}>
                <h5>{t("orderRulesSessionTitle2")}</h5>
                <p>{t("orderRulesSessionText2")}</p>
            </section>
            <section>
                <h5>{t("orderRulesSessionTitle3")}</h5>
                <p>{t("orderRulesSessionText3")}</p>
            </section>
            <section className={classes.list__section}>
                <h5>{t("orderRulesSessionTitle4")}</h5>
                <p>{t("orderRulesSessionText4")}</p>
                <ul>
                    <li><span className={classes.bold}>{t("orderRulesListTitle1")}</span>{t("orderRulesListText1")}</li>
                    <li><span className={classes.bold}>{t("orderRulesListTitle2")}</span>{t("orderRulesListText2")}</li>
                </ul>
            </section>
            <section>
                <p>{t("orderRulesEndText")}</p>
            </section>
        </section>
    )
}

export default OrderRules