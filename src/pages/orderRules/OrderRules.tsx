import classes from './_order-rules.module.scss';

const OrderRules = () => {
    return (
        <section className={classes.container}>
            <section className={classes.head__section}>
                <h4>At ArtfulSpaces, we believe in providing a seamless and collaborative experience throughout your project journey. Here's a breakdown of the order stages, average completion time, cancellation policy, and how you can interact with our designers to refine and implement your ideas, both in-person and remotely.</h4>
            </section>
            <section className={classes.list__section}>
                <h5>Order Stages:</h5>
                <ul>
                    <li><span className={classes.bold}>Consultation:</span> We begin with an initial consultation where we discuss your vision, preferences, and requirements for the project. This helps us understand your unique style and needs.</li>
                    <li><span className={classes.bold}>Concept Development:</span> Based on the consultation, our designers create a conceptual plan outlining the design direction, color palette, and layout options.</li>
                    <li><span className={classes.bold}>Design Proposal:</span> After the concept is approved, we present a detailed design proposal featuring visual representations, material suggestions, and a project estimate.</li>
                    <li><span className={classes.bold}>Refinement and Modification:</span> We encourage your input at every stage. You can provide feedback on the design proposal, allowing us to refine it to align perfectly with your vision.</li>
                    <li><span className={classes.bold}>Execution and Installation</span> Upon your approval, we move to the execution and installation phase. Our team oversees material procurement, furniture selection, and decor placement.</li>
                </ul>
            </section>
            <section>
                <h5>Average Completion Time:</h5>
                <p>Completion time varies based on project complexity. On average, projects can be completed within 1 to 4 weeks. We provide you with a detailed timeline during the consultation phase.</p>
            </section>
            <section className={classes.payment}>
                <h5>Payment:</h5>
                <p>Payment is divided into two installments: 50% at the beginning of the project after final clarification of details and the remaining 50% after completion before final handover. Payment for materials is carried out separately if you choose our company to implement the project.</p>
            </section>
            <section>
                <h5>Order Cancellation:</h5>
                <p>Should you need to cancel your order, please notify us as soon as possible. Depending on the project's stage, a cancellation fee may be applicable to cover work that has already been undertaken.</p>
            </section>
            <section className={classes.list__section}>
                <h5>Collaborating with Designers:</h5>
                <p>We value your insights and creativity. Throughout the process, you have the opportunity to collaborate with our designers in two ways:</p>
                <ul>
                    <li><span className={classes.bold}>In-Person Consultations:</span>We offer face-to-face meetings where you can discuss your ideas, review progress, and provide feedback directly with our designers. Simply schedule an appointment and visit our office.</li>
                    <li><span className={classes.bold}>Remote Communication:</span>Unable to visit our office? No problem! We facilitate remote consultations through video calls, emails, and virtual presentations. This allows you to stay engaged and contribute to the design process from the comfort of your home.</li>
                </ul>
            </section>
            <section>
                <p>At ArtfulSpaces, we are dedicated to making your design journey enjoyable and productive. We eagerly anticipate collaborating with you to create a space that genuinely reflects your individuality and lifestyle. If you have questions or would like to initiate your project, feel free to reach out using the contact information provided on the "Contacts" page.</p>
            </section>
        </section>
    )
}

export default OrderRules