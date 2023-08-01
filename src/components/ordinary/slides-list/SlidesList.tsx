import classes from './_slides-list.module.scss'

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
import Slides from '../slides/Slides';

type Props = {}

const SlidesList = (props: Props) => {
    return (
        <div className={classes.slide__list}>
            <Slides
                img1={project1_1}
                img2={project1_2}
                img3={project1_3}
            />
            <Slides
                img1={project2_1}
                img2={project2_2}
                img3={project2_3}
            />
            <Slides
                img1={project3_1}
                img2={project3_2}
                img3={project3_3}
            />
            <Slides
                img1={project4_1}
                img2={project4_2}
                img3={project4_3}
            />
        </div>
    )
}

export default SlidesList