import FooterNav from '../../UI/footer-navbar/FooterNav';
import Subscribe from '../../UI/subscribe/Subscribe';
import classes from './_footer.module.scss';

const Footer = () => {
    const links_1 = [
        { link: 'Payment & Tax', to: 'payment' },
        { link: 'About order', to: 'howorder'}
    ];
    const links_2 = [
        { link: 'Work examples', to: 'examples' },
        { link: 'Order', to: 'order' },
        { link: 'Contact', to: 'contact' }
    ];

    return (
        <section className={classes.footer__container}>
            <div className={classes.footer__navbar}>
                <div className={classes.subscribe__block}>
                    <h4>Newslatter</h4>
                    <Subscribe/>
                </div>
                <div className={classes.navlinks}>
                    <div className={classes.nav__part}>
                        <p><strong>Useful Link</strong></p>
                        <FooterNav links={links_1}/>
                    </div>
                    <div className={classes.nav__part}>
                        <p><strong>Our Menu</strong></p>
                        <FooterNav links={links_2}/>
                    </div>
                    <div className={classes.nav__part}>
                        <p><strong>Address</strong></p>
                        <p>JL. Setiabudhi No. 193 Sukasari,<br/> Bandung West Java, Indonesia</p>
                        <p>hallo@artful.com</p>
                    </div>
                </div>
            </div>
            <div className={classes.line}></div>
            <div className={classes.copyright}>
                <p>© 2023 ArtfulSpaces - All rights reserved.</p>
            </div>
        </section>
    )
}

export default Footer;