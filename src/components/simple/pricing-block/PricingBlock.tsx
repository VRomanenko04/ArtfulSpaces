import classes from './_pricing-block.module.scss';
import Button from '../../UI/button/Button';

const PricingBlock = () => {
    return (
        <section className={classes.pricing__container}>
            <h4>Pricing example</h4>
            <div className={classes.pricing__block}>
                <div className={classes.up__side}>
                    <p>
                        The price depends directly on your wishes, the footage of the room,
                        the detail of the work, the selection of furniture and edits.
                    </p>
                </div>
                <div className={classes.down__side}>
                    <p>The site has an approximate price calculator, you can use it, after which you will contact us free of charge for the exact price.</p>
                    <Button text='Price calculator' link='calculator' extraClass={classes.button} alignSelf='center'/>
                </div>
            </div>
        </section>
    )
}

export default PricingBlock