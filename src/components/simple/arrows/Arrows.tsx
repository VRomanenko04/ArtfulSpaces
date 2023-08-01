import classes from './_arrows.module.scss';

type Props = {}

const Arrows = (props: Props) => {
    return (
        <div className={classes.arrows}>
            <div className={classes.left__arrow} />
            <div className={classes.rigth__arrow} />
        </div>
    )
}

export default Arrows;