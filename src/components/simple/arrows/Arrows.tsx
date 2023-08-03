import classes from './_arrows.module.scss';

type Props = {
    onPrevSlide: () => void;
    onNextSlide: () => void;
};

const Arrows = ({ onPrevSlide, onNextSlide }: Props) => {
    return (
        <div className={classes.arrows}>
            <div className={classes.left__arrow} onClick={onPrevSlide}/>
            <div className={classes.rigth__arrow} onClick={onNextSlide}/>
        </div>
    )
}

export default Arrows;