import { useState } from 'react';
import SlidesList from '../../simple/slides-list/SlidesList';
import Arrows from '../../simple/arrows/Arrows';
import classes from './_slider.module.scss';

const Slider = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % 4);
    };

    const handlePrevSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
    };

    return (
        <div className={classes.slider}>
            <SlidesList currentSlideIndex={currentSlideIndex} />
            <Arrows onPrevSlide={handlePrevSlide} onNextSlide={handleNextSlide} />
        </div>
    );
};

export default Slider;