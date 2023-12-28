import MenuItem from "../../Shared/MenuItem/MenuItem";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <FeaturedItem></FeaturedItem>
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;