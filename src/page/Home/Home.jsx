import Banner from "../../components/Banner";
import Categories from "../../components/Categories/Categories";
import RecentlyAdded from "../../components/RecentlyAdded";
import Services from "../../components/Services";
import Trending from "../../components/Trending";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Categories></Categories>
            <Trending></Trending>
            <RecentlyAdded></RecentlyAdded>
        </div>
    );
};

export default Home;