import classes from './_home-info.module.scss';

import individual from '../../../assets/Individual.svg';
import team from '../../../assets/Team.svg';
import speed from '../../../assets/Speed.svg';


const HomeInfo = () => {
    return (
        <section className={classes.info}>
            <div className={classes.info__block}>
                <img className={classes.info__img} src={individual} alt="" />
                <div className={classes.info__text}>
                    <h6>Individual approach</h6>
                    <p>Each project is unique, just like you.</p>
                </div>
            </div>
            <div className={classes.info__block}>
                <img className={classes.info__img} src={team} alt="" />
                <div className={classes.info__text}>
                    <h6>Talented team</h6>
                    <p>Only experienced craftsmen.</p>
                </div>
            </div>
            <div className={classes.info__block}>
                <img className={classes.info__img} src={speed} alt="" />
                <div className={classes.info__text}>
                    <h6>Fast work</h6>
                    <p>No overdue projects.</p>
                </div>
            </div>
        </section>
    )
}

export default HomeInfo