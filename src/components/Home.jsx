
/* eslint-disable no-unused-vars */
import ChefPlans from './ChefPlans';
import Chefs from './Chefs';
import Footer from './Footer';
import Header from './Header';
import Subscribe from './Subscribe';

const Home = () => {

    return (
        <div>
            <div className="min-h-screen position-center w-full bg-cover bg-[url('https://i.postimg.cc/NMPTG73b/banner-image.jpg')]">
                <Header />
                <h1 className='text-6xl font-bold text-white mx-auto text-center mt-20 leading-[5rem] pt-10 px-2 md:px-0 md:w-[50%]'>Discover top chefs in your area and elevate your food experience with our <span className='text-cyan-300'>chef finder</span> website</h1>
            </div>
            <div>
                <Chefs />
            </div>
            <div>
                <Subscribe />
            </div>
            <div>
                <ChefPlans />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;