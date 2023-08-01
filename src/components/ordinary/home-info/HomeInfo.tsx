import classes from './_home-info.module.scss';

import individual from '../../../assets/Individual.svg';
import team from '../../../assets/Team.svg';
import speed from '../../../assets/Speed.svg';
import InfoBlock from '../../simple/info-block/InfoBlock';


const HomeInfo = () => {
    return (
        <section className={classes.info}>
            <InfoBlock
                img={individual}
                headText='Individual approach'
                sideText='Each project is unique, just like you.'
            />
            <InfoBlock
                img={team}
                headText='Talented team'
                sideText='Only experienced craftsmen.'
            />
            <InfoBlock
                img={speed}
                headText='Fast work'
                sideText='No overdue projects.'
            />
        </section>
    )
}

export default HomeInfo