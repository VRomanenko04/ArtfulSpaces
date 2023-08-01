import classes from './_header.module.scss';

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.head__text}>
                <h1>Interiors that tell your story</h1>
                <p>Every corner becomes the story of your life. We create unique interiors that reflect your character and inspire new stories every day.</p>
            </div>
        </div>
    )
}

export default Header;