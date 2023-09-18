import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classes from './_contact.module.scss';
import facebook from '../../assets/icons8-facebook.svg';
import insta from '../../assets/icons8-instagram.svg';
import telegram from '../../assets/icons8-telegram.svg';


const Contact = () => {
    const { t } = useTranslation();

    return (
        <section className={classes.container}>
            <div>
                
            </div>
            <div className={classes.head}>
                <h4>{t("contactHead")}</h4>
            </div>
            <div className={classes.info__block}>
                <h6>{t("contactAdressHead")}</h6>
                <p>{t("contactAdress")}</p>
                <h6>{t("contactPhone")}</h6>
                <a href='tel:+380662916699'>+380 (66) 291-6699</a>
                <h6>E-mail:</h6>
                <a href='mailto:designers@artful.com'>designers@artful.com</a>
                <h6>{t("contactHours")}</h6>
                <p>{t("contactWorkingHours1")} <br />
                {t("contactWorkingHours2")} <br />
                {t("contactWorkingHours3")}</p>
                <h6>{t("contactSocialHead")}</h6>
                <p>{t("contactSocialText1")} <br/> {t("contactSocialText2")}</p>
                <div className={classes.social__links}>
                    <a href="##">
                        <img src={insta} alt="instagram" />
                    </a>
                    <a href="##">
                        <img src={facebook} alt="facebook" />
                    </a>
                    <a href="##">
                        <img src={telegram} alt="telegram" />
                    </a>
                </div>
                <h6>{t("contactConsultation")}</h6>
                <p>{t("contactConsultationText1")} <Link to='order'>[{t("contactConsultationLink")}]</Link>{t("contactConsultationText2")}</p>
                <h6>{t("contactFindUs")}</h6>
                <p>{t("contactFindUsText1")}</p>
                <p>{t("contactFindUsText2")}</p>
            </div>
        </section>
    )
}

export default Contact;