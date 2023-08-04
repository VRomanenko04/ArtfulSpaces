import classes from './_home.module.scss';
import Header from '../../components/ordinary/home-header/Header';
import HomeInfo from '../../components/simple/home-info/HomeInfo';
import Slider from '../../components/smart/slider/Slider';

const Home = () => {
    return (
        <>
        <Header/>
        <HomeInfo/>
        <Slider/>
        </>
    )
}

export default Home;