import { Link } from 'react-router-dom';


const Contact = () => {
    return (
        <section>
            <p>We are happy to help you create a space that reflects your personality and style. Contact us to start an exciting journey into the world of interior design!</p>
            <h6>Address:</h6>
            <p>03150, Kiev, Velyka Vasylkivska 88, Office No. 24, Entrance from the yard</p>
            <h6>Phone:</h6>
            <p>+380 (66) 291-6699</p>
            <h6>E-mail:</h6>
            <p>designers@artful.com</p>
            <h6>Opening hours:</h6>
            <p>Monday - Friday: 9:00 AM - 6:00 PM <br />
            Saturday: 10:00 AM - 4:00 PM <br />
            Sunday: Closed</p>
            <h6>Social media:</h6>
            <p><strong>We are also active on social media. Subscribe to our pages to keep abreast of the latest trends and our projects:</strong></p>
            <div className='socialLinks'>
                <a href="##">Instagram</a>
                <a href="##">Facebook</a>
                <a href="##">Telegram</a>
            </div>
            <h6>Online consultation:</h6>
            <p>Do you have questions or want to discuss your project? Book an online consultation with our experienced designer <Link to='order'>[here]</Link>. After placing an order, our manager will contact you and write you down at a convenient time, the first consultation, including pricing according to your desires, is FREE.</p>
            <h6>How to find us:</h6>
            <p>We are located in the city center, within walking distance from the metro. Our office is easy to find from the courtyard of the house following the signs. If you have any difficulties with the search, do not hesitate to call us - we will be happy to help you.</p>
            <p>Feel free to contact us in any way convenient for you. We are ready to make your space uniquely comfortable and stylish!</p>
        </section>
    )
}

export default Contact;