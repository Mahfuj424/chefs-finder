
/* eslint-disable no-unused-vars */
import ChefPlans from './ChefPlans';
import Chefs from './Chefs';
import Footer from './Footer';
import Header from './Header';
import Subscribe from './Subscribe';

const Home = () => {

    return (
        <div>
            <div className="min-h-screen w-full bg-cover bg-[url('https://i.postimg.cc/Z5YrL2KC/banner-image.jpg')]">
                <Header />
                <h1 className='text-6xl font-bold'>Discover top chefs in your area and elevate your food experience with our chef finder website</h1>
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