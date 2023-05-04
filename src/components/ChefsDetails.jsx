/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Rating from 'react-rating';
import { HiOutlineStar, HiStar } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefsDetails = () => {
    const [disable, setDisable]=useState(false)
    const [recipesData, setRecipesData] = useState([])
    const { id } = useParams()
    useEffect(() => {


        fetch(`http://localhost:5000/allData/${id}`)
            .then(res => res.json())
            .then(data => setRecipesData(data))
    }, [])
    const { chef_name, cooking_method, description, ingredients, number_of_recipes, picture, popular_recipes, rating, years_of_experience } = recipesData;
    

    const handleAddFavorite = () => {
        toast('Added Favorite')
        setDisable(true)
    }

    return (

        <div>
            <Header />
            <div className="card bg-cyan-200 mb-8 w-3/4 mt-12 mx-auto lg:card-side shadow-lg border">
                <figure className='w-[50%] ms-4'><img className='rounded-lg ' src={picture} alt="Album" /></figure>
                <div className="card-body w-[50%]">
                    <h2 className="text-3xl font-bold">{chef_name}</h2>
                    <p>{description}</p>
                    <h3 className='text-xl font-bold'>years of experience: {years_of_experience}</h3>
                    <h3 className='text-xl font-bold'>Number of recipes: {number_of_recipes}</h3>
                    <h3 className='text-xl font-bold'>Ingredients: </h3>
                    {
                        ingredients && ingredients.map(ingredient =>
                            <li className='ms-3'>{ingredient}</li>
                        )
                    }
                    <h3 className='text-xl font-bold'>Popular Recipes: </h3>
                    {
                        popular_recipes && popular_recipes.map(recipe =>
                            <li className='ms-3'>{recipe}</li>
                        )
                    }
                    <h3 className='text-xl font-bold'>Cooking Method: </h3>
                    {
                        cooking_method && cooking_method.map(method =>
                            <li className='ms-3'>{method}</li>
                        )
                    }
                    <Rating
                        readonly
                        placeholderRating={rating}
                        emptySymbol={<HiOutlineStar />}
                        placeholderSymbol={<HiStar />}
                        fullSymbol={<HiStar />}
                    />
                    <ToastContainer/>
                    <button disabled={disable} onClick={handleAddFavorite} className="btn w-36 btn-primary">Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default ChefsDetails;