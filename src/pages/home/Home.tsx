import Header from '../../components/ordinary/home-header/Header';
import HomeInfo from '../../components/simple/home-info/HomeInfo';
import PricingBlock from '../../components/simple/pricing-block/PricingBlock';
import SliderBlock from '../../components/simple/slider-block/SliderBlock';

const Home = () => {
    return (
        <>
        <Header/>
        <HomeInfo/>
        <SliderBlock/>
        <PricingBlock/>
        </>
    )
}

export default Home;