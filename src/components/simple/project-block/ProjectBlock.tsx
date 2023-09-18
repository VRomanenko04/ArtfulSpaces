import React from 'react';
import classes from './_project-block.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type Props = {
    picture: string;
    link: string;
}

const ProjectBlock: React.FC<Props> = ({ picture, link }) => {
    const { t } = useTranslation();

    return (
            <div className={classes.project__card}>
                <img className={classes.picture} src={picture} alt="Picture" />
                <Link className={classes.link} to={link}>
                    <button>{t("exampleBtn")}</button>
                </Link>
            </div>
    )
}

export default ProjectBlock;