import { Link } from 'react-router-dom';
import classes from './_button.module.scss';

type Props = {
    text: string
    extraClass?: string
    alignSelf?: string
    link: string
}

const Button = ({ text, extraClass, link, alignSelf }: Props) => {
    const btnClass = extraClass ? `${classes.btn} ${extraClass}` : classes.btn;

    return (
        <Link to={link} className={classes.link} style={{ alignSelf }}>
            <button className={btnClass}>
                {text}
            </button>
        </Link>
    )
}

export default Button;