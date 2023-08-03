import classes from './_slides.module.scss';
import { motion } from 'framer-motion';

type Props = {
    img1: string;
    img2: string;
    img3: string;
    active: boolean;
};

const Slides = ({ img1, img2, img3, active }: Props) => {
    return (
        <motion.div
            className={classes.slide__container}
            initial={{ opacity: 0 }}
            animate={{ opacity: active ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className={classes.slide__block}>
                <div className={classes.right__imgs}>
                    <img className={classes.img1} src={img1} alt="design" />
                    <img className={classes.img2} src={img2} alt="design" />
                </div>
                <img className={classes.img3} src={img3} alt="design" />
            </div>
        </motion.div>
    );
};

export default Slides;
