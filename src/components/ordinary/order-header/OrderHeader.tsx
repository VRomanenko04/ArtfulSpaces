import classes from './_order-header.module.scss';
import { useTranslation } from 'react-i18next';

const OrderHeader = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div className={classes.container}>
                <h1>
                    {t("orderHeader")}
                </h1>
            </div>
        </div>
    )
}

export default OrderHeader