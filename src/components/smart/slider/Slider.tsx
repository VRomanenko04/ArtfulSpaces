import SlidesList from '../../ordinary/slides-list/SlidesList';
import Arrows from '../../simple/arrows/Arrows';
import classes from './_slider.module.scss';


type Props = {}

const Slider = (props: Props) => {
    return (
        <div className={classes.slider}>
            <SlidesList/>
            <Arrows/>
        </div>
    )
}

export default Slider