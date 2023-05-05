/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { HiOutlineStar, HiStar } from "react-icons/hi";
import LazyLoad from 'react-lazy-load';

const Chefs = () => {
    const [chefsData, setChefsData] = useState([])

    useEffect(() => {
        fetch("https://server-fawn-six.vercel.app/allData")
            .then(res => res.json())
            .then(data => setChefsData(data))
    }, [])
    // console.log(chefsData);
    return (
        <div className='mt-20'>
            <h1 className='text-3xl text-center font-bold'>Our Chefs</h1>
            <div className='grid grid-cols-1  md:grid-cols-3 w-4/5 mx-3 md:mx-auto gap-12 mt-5'>

                {
                    chefsData.map((chefData) => {
                        const { id, picture, chef_name, number_of_recipes, rating, years_of_experience } = chefData;
                        return <div key={chefData.id}>
                            <div className="card md:w-96 w-[365px] text-white shadow-xl bg-[#050e41]">
                                <figure>
                                    <LazyLoad height={260} offset={300}>
                                        <img src={picture} alt="chef" />
                                    </LazyLoad>
                                </figure>
                                <div className="card-body ">
                                    <h2 className="card-title text-2xl">{chef_name}</h2>
                                    <h3 className='text-lg card-title'>Years of experience: {years_of_experience}</h3>
                                    <h3 className='text-lg card-title'>Numbers of recipes: {number_of_recipes}</h3>
                                    <Rating 
                                        readonly
                                        placeholderRating={rating}
                                        emptySymbol={<HiOutlineStar className='text-yellow-300' />}
                                        placeholderSymbol={<HiStar className='text-yellow-300'  />}
                                        fullSymbol={<HiStar className='text-yellow-300'  />}
                                    />
                                    <div className="card-actions justify-end">
                                        <Link to={`/chefdetails/${id}`}>
                                            <button className="btn btn-primary">View Recipe</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    })
                }
            </div>
        </div>
    );
};

export default Chefs;