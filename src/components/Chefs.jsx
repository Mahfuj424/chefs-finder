/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Chefs = () => {
    const [chefsData, setChefsData] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/allData")
            .then(res => res.json())
            .then(data => setChefsData(data))
    }, [])
    // console.log(chefsData);
    return (
        <div className='grid grid-cols-1  md:grid-cols-3 w-4/5 mx-3 md:mx-auto gap-12 mt-20'>
            {
                chefsData.map((chefData) => {
                    console.log(chefData);
                    const {id, picture, chef_name, number_of_recipes, rating, years_of_experience } = chefData;
                    return <div key={chefData.id}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={picture} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">{chef_name}</h2>
                                <h3 className='text-lg card-title'>Years of experience: {years_of_experience}</h3>
                                <h3 className='text-lg card-title'>Numbers of recipes: {number_of_recipes}</h3>
                                <div className="card-actions justify-end">
                                    <Link to={`/chefdetails/${id}`}>
                                        <button className="btn btn-primary">Buy Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                })
            }
        </div>
    );
};

export default Chefs;