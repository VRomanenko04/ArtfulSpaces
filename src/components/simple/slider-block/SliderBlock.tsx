import classes from './_slider-block.module.scss';
import Button from '../../UI/button/Button';
import Slider from '../../smart/slider/Slider';
import { useTranslation } from 'react-i18next';

const SliderBlock = () => {
    const { t } = useTranslation();

    return (
        <section className={classes.block__container}>
            <div className={classes.block__head}>
                <h4>{t("sliderHead")}</h4>
                <p>{t("sliderSidetext")}</p>
            </div>
            <Slider/>
            <Button 
                text={t("sliderBtn")} 
                extraClass={classes.button} 
                alignSelf='center'
                link='examples'
            />
        </section>
    )
}

export default SliderBlock