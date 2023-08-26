import classes from './_payment.module.scss';
import money from '../../assets/money-icon.svg';

const Payment = () => {
    return (
        <section className={classes.container}>
            <div className={classes.head}>
                <img src={money} alt="money" />
                <h4>We strive to ensure transparency and convenience in all aspects of our collaboration. Below you will find information about our payment terms, taxes, order processing, completion timelines, and material selection guarantee.</h4>
            </div>
            <div className={classes.information}>
                <h6>Payment Terms:</h6>
                <p>After finalizing the details of your project, we will provide an invoice for a deposit. Work on your order will commence upon receipt of the payment. The remaining balance is payable upon project completion, prior to its final delivery.</p>
                <h6>Taxes:</h6>
                <p>All prices quoted include applicable taxes and may be adjusted in accordance with any changes in legislation.</p>
                <h6>Order Processing:</h6>
                <p>Upon receipt of payment, our team will reach out to you to refine additional details and provide a comprehensive work plan. We value your participation in this process to ensure all your preferences are considered.</p>
                <h6>Completion Timelines:</h6>
                <p>The project's completion timeline depends on its scale and complexity. We aim to agree upon realistic timelines, considering all aspects of design, material selection, and potential alterations. We keep you informed about the progress, ensuring you're always aware of the project's status.</p>
                <h6>Material Selection Guarantee:</h6>
                <p>We guarantee that all materials used in the project adhere to high standards of quality and safety. We meticulously curate each element of your interior to ensure harmony and durability in the design.</p>
                <h6>Order Cancellation:</h6>
                <p>Should the need to cancel your order arise, please contact us as soon as possible. Cancellation terms and potential refunds are discussed on an individual basis, taking into account the project's stage of development.</p>
                <p>We trust that this information enables you to feel confident in partnering with us. We value your choice and are committed to making every effort to craft an unforgettable interior for you. If you have any further questions or require clarification, please don't hesitate to reach out to us using the contact details on the "Contacts" page.</p>
            </div>
        </section>
    )
}

export default Payment