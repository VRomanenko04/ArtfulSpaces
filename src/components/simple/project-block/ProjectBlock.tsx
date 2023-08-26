import React from 'react';
import classes from './_project-block.module.scss';
import { Link } from 'react-router-dom';

type Props = {
    picture: string;
}

const ProjectBlock: React.FC<Props> = ({ picture}) => {
    return (
            <div className={classes.project__card}>
                <img className={classes.picture} src={picture} alt="Picture" />
                <Link className={classes.link} to='/'>
                    <button>More about project</button>
                </Link>
            </div>
    )
}

export default ProjectBlock;