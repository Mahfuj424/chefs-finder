/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ChefsDetails = () => {
    const { id } = useParams()
    // useEffect(() => {
    //     fetch(`http://localhost:5173/chefdetails/${id}`)
    //     const res => res.json();
    //     const data => console.log(data);
    // },[])
    return (
        <div>
            jkdsjfkjsk
        </div>
    );
};

export default ChefsDetails;