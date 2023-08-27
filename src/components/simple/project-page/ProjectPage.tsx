import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../../../storage/projects';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import classes from './_project-page.module.scss';

const ProjectPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Получение id страницы которую подгружаем
    const params = useParams<{ projectID: string }>();
    const projectIndex = Number(params.projectID?.replace('project', ''));

    //Интервал каррусели
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % projects[projectIndex - 1].photos.length);
        }, 3000);

        return () => {
            clearInterval(timer);
        };
    }, [projects[projectIndex - 1].photos.length]);

    return (
        <section className={classes.container}>
            <div className={classes.carousel__pos}>
                <Carousel selectedItem={currentIndex} showArrows={false} showThumbs={false} swipeable={true} showStatus={false}>
                    {
                        projects[projectIndex - 1].photos.map((image, index) => (
                            <div key={index}>
                                <img className={classes.slide__img} src={image} alt={`Slide ${index}`} />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
            <h4>{projects[projectIndex - 1].title}</h4>
            <p>{projects[projectIndex - 1].text}</p>
        </section>
    )
}

export default ProjectPage;