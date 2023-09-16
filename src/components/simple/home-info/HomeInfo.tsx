import classes from './_home-info.module.scss';
import { useTranslation } from 'react-i18next';

import individual from '../../../assets/Individual.svg';
import team from '../../../assets/Team.svg';
import speed from '../../../assets/Speed.svg';
import InfoBlock from '../../ordinary/info-block/InfoBlock';


const HomeInfo = () => {
    const { t } = useTranslation();

    return (
        <section className={classes.info}>
            <InfoBlock
                img={individual}
                headText={t("headText1")}
                sideText={t("sideText1")}
            />
            <InfoBlock
                img={team}
                headText={t("headText2")}
                sideText={t("sideText2")}
            />
            <InfoBlock
                img={speed}
                headText={t("headText3")}
                sideText={t("sideText3")}
            />
        </section>
    )
}

export default HomeInfo