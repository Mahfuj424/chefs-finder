import React from 'react';

const ChefPlans = () => {
  return (
    <div className='my-20 py-12 md:w-[1200px] mx-auto'>
      <h1 className='text-4xl mb-6 font-bold text-center mt-12 pb-10'>Our Plans</h1>
      <div className="flex justify-center items-center  text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0 mt-12 md:mt-2">
          {/* Free Plan Card */}
          
          <div className="bg-[#050e41]  p-6 shadow-xl rounded-2xl md:text-left ">
            <h2 className="text-2xl text-yellow-400 font-bold mb-4">Free Plan</h2>
            <p className="text-white mb-4">Basic and simple Access to Our Chef Network! thats why its basic</p>
            <ul className="text-white mb-4">
              <li>Access to 10 recipes</li>
              <li>Weekly newsletter</li>
              <li>Limited support</li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Sign Up</button>
          </div>

          {/* Monthly Plan Card */}
          <div className="bg-[#050e41]  p-6 shadow-xl rounded-2xl ">
            <h2 className="text-2xl text-green-400 font-bold mb-4">Monthly Plan</h2>
            <p className="text-white mb-4">More Options and Personalized Recommendations!</p>
            <ul className="text-white mb-4">
              <li>Access to 50 recipes</li>
              <li>Monthly newsletter</li>
              <li>Priority support</li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Sign Up</button>
          </div>

          {/* Premium Plan Card */}
          <div className="bg-[#050e41]  p-6 shadow-xl rounded-2xl ">
            <h2 className="text-2xl text-red-400 font-bold mb-4">Premium Plan</h2>
            <p className="text-white mb-4">Exclusive Access to Top Chefs and Custom Menus!</p>
            <ul className="text-white mb-4">
              <li>Access to unlimited recipes</li>
              <li>Weekly newsletter</li>
              <li>24/7 support</li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefPlans;