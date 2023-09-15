import classes from './_header.module.scss';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();

    return (
        <div className={classes.header}>
            <div className={classes.head__text}>
                <h1>{t("headMainText")}</h1>
                <p>{t("headSecondText")}</p>
            </div>
        </div>
    )
}

export default Header;