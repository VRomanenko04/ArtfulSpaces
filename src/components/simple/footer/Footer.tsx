import FooterNav from '../../UI/footer-navbar/FooterNav';
import Subscribe from '../../UI/subscribe/Subscribe';
import classes from './_footer.module.scss';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    const links_1 = [
        { link: t("footerLink1"), to: 'payment' },
        { link: t("footerLink2"), to: 'howorder'}
    ];
    const links_2 = [
        { link: t("footerLink3"), to: 'examples' },
        { link: t("footerLink4"), to: 'order' },
        { link: t("footerLink5"), to: 'contact' }
    ];

    return (
        <section className={classes.footer__container}>
            <div className={classes.footer__navbar}>
                <div className={classes.subscribe__block}>
                    <h4>{t("newslatter")}</h4>
                    <Subscribe/>
                </div>
                <div className={classes.navlinks}>
                    <div className={classes.nav__part}>
                        <p><strong>{t("footerHead1")}</strong></p>
                        <FooterNav links={links_1}/>
                    </div>
                    <div className={classes.nav__part}>
                        <p><strong>{t("footerHead2")}</strong></p>
                        <FooterNav links={links_2}/>
                    </div>
                    <div className={classes.nav__part}>
                        <p><strong>{t("footerHead3")}</strong></p>
                        <p>{t("footerAdress")} <br/> {t("footerAdress2")}</p>
                        <p>{t("footerMain")}</p>
                    </div>
                </div>
            </div>
            <div className={classes.line}></div>
            <div className={classes.copyright}>
                <p>{t("footerCopyright")}</p>
            </div>
        </section>
    )
}

export default Footer;