import classes from './_subscribe.module.scss';

const Subscribe = () => {
    return (
        <div className={classes.input__container}>
            <input type="text" className={classes.input__field} placeholder="Enter your email"/>
            <button className={classes.submit__button}>Subscribe</button>
        </div>
    )
}

export default Subscribe;