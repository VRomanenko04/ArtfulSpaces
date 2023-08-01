import classes from './_infoblock.module.scss';

type Props = {
    img :string
    headText: string
    sideText: string
}

const InfoBlock = (props: Props) => {
    return (
        <div className={classes.info__block}>
                <img className={classes.info__img} src={props.img} alt="" />
                <div className={classes.info__text}>
                    <h6>{props.headText}</h6>
                    <p>{props.sideText}</p>
                </div>
            </div>
    )
}

export default InfoBlock;