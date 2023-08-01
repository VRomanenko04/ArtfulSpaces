import classes from './_slides.module.scss';

type Props = {
    img1: string
    img2: string
    img3: string
}

const Slides = (props: Props) => {
    return (
        <div className={classes.slide__container}>
            <div className={classes.slide__block}>
                <div className={classes.right__imgs}>
                    <img className={classes.img1} src={props.img1} alt="design" />
                    <img className={classes.img2} src={props.img2} alt="design" />
                </div>
                <img className={classes.img3} src={props.img3} alt="design" />
            </div>
        </div>
    )
}

export default Slides