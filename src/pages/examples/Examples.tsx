import classes from './_examples.module.scss';
import ProjectBlock from '../../components/simple/project-block/ProjectBlock';

import project1_main_img from '../../assets/projectes_imgs/project-1-8.webp';
import project2_main_img from '../../assets/projectes_imgs/project-2-1.webp';
import project3_main_img from '../../assets/projectes_imgs/project-3-3.webp';
import project4_main_img from '../../assets/projectes_imgs/project-4-5.webp';
import project5_main_img from '../../assets/projectes_imgs/project-5-1.webp';
import project6_main_img from '../../assets/projectes_imgs/project-6-4.webp';
import project7_main_img from '../../assets/projectes_imgs/project-7-6.webp';


const Examples = () => {
    const imgList = [project1_main_img, project2_main_img, project3_main_img, project4_main_img, project5_main_img, project6_main_img, project7_main_img];

    return (
        <section className={classes.container}>
            <div className={classes.grid__list}>
                {
                    imgList.map((picture, index) => (
                        <ProjectBlock picture={picture} key={index} link={`/examples/project${index + 1}`}/>
                    ))
                }
            </div>
        </section>
    )
}

export default Examples;