
/* eslint-disable no-unused-vars */
import Chefs from './Chefs';
import Header from './Header';

const Home = () => {

    return (
        <div>
            <div className="min-h-screen w-full bg-cover bg-[url('../../public/banner-image.jpg')]">
                <Header />
            </div>
            <Chefs/>
        </div>
    );
};

export default Home;