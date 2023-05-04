
/* eslint-disable no-unused-vars */
import ChefPlans from './ChefPlans';
import Chefs from './Chefs';
import Footer from './Footer';
import Header from './Header';
import Subscribe from './Subscribe';

const Home = () => {

    return (
        <div>
            <div className="min-h-screen w-full bg-cover bg-[url('../../public/banner-image.jpg')]">
                <Header />
            </div>
            <div className=''>
                <Chefs />
            </div>
            <div>
                <Subscribe/>
            </div>
            <div>
                <ChefPlans/>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;