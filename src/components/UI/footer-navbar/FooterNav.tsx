import { Link } from 'react-router-dom';
import classes from './_footer-nav.module.scss';

type Link = {
    link: string;
    to: string;
}

type Props = {
    links: Link[];
}

const FooterNav: React.FC<Props> = ({ links }) => {
    return (
        <div>
            <ul className={classes.list}>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link className={classes.link} to={link.to}>{link.link}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterNav