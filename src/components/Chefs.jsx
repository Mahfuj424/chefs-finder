/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Chefs = () => {
    const [chefsData, setChefsData] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:5000/allData")
            .then(res => res.json())
            .then(data => setChefsData(data))
    }, [])
    console.log(chefsData);
    return (
        // <div>
        //     {
        //         chefsData.map(chef => {
        //             <div className="card w-96 bg-base-100 shadow-xl">
        //         <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        //         <div className="card-body">
        //             <h2 className="card-title">Shoes!</h2>
        //             <p>If a dog chews shoes whose shoes does he choose?</p>
        //             <div className="card-actions justify-end">
        //                 <button className="btn btn-primary">Buy Now</button>
        //             </div>
        //         </div>
        //     </div>
        //         })
        //     }
        // </div>
    );
};

export default Chefs;