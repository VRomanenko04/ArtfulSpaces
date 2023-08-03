import classes from './_slides-list.module.scss';
import Slides from '../slides/Slides';
import { AnimatePresence, motion } from 'framer-motion';

import project1_1 from '../../../assets/projectes_imgs/project-1-1.webp';
import project1_2 from '../../../assets/projectes_imgs/project-1-2.webp';
import project1_3 from '../../../assets/projectes_imgs/project-1-4.webp';
import project2_1 from '../../../assets/projectes_imgs/project-2-1.webp';
import project2_2 from '../../../assets/projectes_imgs/project-2-2.webp';
import project2_3 from '../../../assets/projectes_imgs/project-2-3.webp';
import project3_1 from '../../../assets/projectes_imgs/project-3-1.webp';
import project3_2 from '../../../assets/projectes_imgs/project-3-2.webp';
import project3_3 from '../../../assets/projectes_imgs/project-3-3.webp';
import project4_1 from '../../../assets/projectes_imgs/project-4-1.webp';
import project4_2 from '../../../assets/projectes_imgs/project-4-2.webp';
import project4_3 from '../../../assets/projectes_imgs/project-4-3.webp';


type Props = {
    currentSlideIndex: number;
};

const SlidesList = ({ currentSlideIndex }: Props) => {
    const projects = [
        {
            img1: project1_1,
            img2: project1_2,
            img3: project1_3,
        },
        {
            img1: project2_1,
            img2: project2_2,
            img3: project2_3,
        },
        {
            img1: project3_1,
            img2: project3_2,
            img3: project3_3,
        },
        {
            img1: project4_1,
            img2: project4_2,
            img3: project4_3,
        },
    ];

    return (
        <motion.div className={classes.slide__list}>
            <AnimatePresence initial={false} custom={currentSlideIndex} mode='wait'>
                <Slides
                    key={currentSlideIndex}
                    img1={projects[currentSlideIndex].img1}
                    img2={projects[currentSlideIndex].img2}
                    img3={projects[currentSlideIndex].img3}
                    active={true}
                />
            </AnimatePresence>
        </motion.div>
    );
};

export default SlidesList;