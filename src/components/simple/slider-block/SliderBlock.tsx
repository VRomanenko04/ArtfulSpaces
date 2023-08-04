import classes from './_slider-block.module.scss';
import Button from '../../UI/button/Button';
import Slider from '../../smart/slider/Slider';

const SliderBlock = () => {
    return (
        <section className={classes.block__container}>
            <div className={classes.block__head}>
                <h4>Work examples</h4>
                <p>make your home so comfortable with your dream interior</p>
            </div>
            <Slider/>
            <Button 
                text='More projects' 
                extraClass={classes.button} 
                alignSelf='center'
                link='examples'
            />
        </section>
    )
}

export default SliderBlock