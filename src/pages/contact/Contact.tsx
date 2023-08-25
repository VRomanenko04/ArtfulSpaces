import { Link } from 'react-router-dom';
import classes from './_contact.module.scss';
import facebook from '../../assets/icons8-facebook.svg';
import insta from '../../assets/icons8-instagram.svg';
import telegram from '../../assets/icons8-telegram.svg';


const Contact = () => {
    return (
        <section className={classes.container}>
            <div>
                
            </div>
            <div className={classes.head}>
                <h4>We are happy to help you create a space that reflects your personality and style. Contact us to start an exciting journey into the world of interior design!</h4>
            </div>
            <div className={classes.info__block}>
                <h6>Address:</h6>
                <p>03150, Kiev, Velyka Vasylkivska 88, Office No. 24, Entrance from the yard</p>
                <h6>Phone:</h6>
                <a href='tel:+380662916699'>+380 (66) 291-6699</a>
                <h6>E-mail:</h6>
                <a href='mailto:designers@artful.com'>designers@artful.com</a>
                <h6>Opening hours:</h6>
                <p>Monday - Friday: 9:00 AM - 6:00 PM <br />
                Saturday: 10:00 AM - 4:00 PM <br />
                Sunday: Closed</p>
                <h6>Social media:</h6>
                <p>We are also active on social media. <br/> Subscribe to our pages to keep abreast of the latest trends and our projects:</p>
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
                <h6>Online consultation:</h6>
                <p>Do you have questions or want to discuss your project? Book an online consultation with our experienced designer <Link to='order'>[here]</Link>. After placing an order, our manager will contact you and write you down at a convenient time, the first consultation, including pricing according to your desires, is FREE.</p>
                <h6>How to find us:</h6>
                <p>We are located in the city center, within walking distance from the metro. Our office is easy to find from the courtyard of the house following the signs. If you have any difficulties with the search, do not hesitate to call us - we will be happy to help you.</p>
                <p>Feel free to contact us in any way convenient for you. We are ready to make your space uniquely comfortable and stylish!</p>
            </div>
        </section>
    )
}

export default Contact;