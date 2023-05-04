import React from 'react';

const Subscribe = () => {
    return (
        <div className='w-3/4 mx-auto md:grid-cols-12 gap-16 grid grid-cols-1 my-20'>
            <div className='col-span-6'>
                <h1 className='text-3xl text-center'>Write me a message</h1>
                <div className='card-body border rounded-xl mt-3 shadow-lg'>
                    <div className="form-control ">
                        <label className="label ">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="shadow-lg input input-bordered" />
                    </div>
                    <div className="form-control ">
                        <label className="label ">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="shadow-lg input input-bordered" />
                    </div>
                    <div className="form-control ">
                        <label className="label ">
                            <span className="label-text">Comment</span>
                        </label>
                        <textarea className="shadow-lg border rounded-xl p-2" name="" id="" cols="30" rows="10" placeholder='Write a comment'></textarea>
                    </div>
                </div>
            </div>
            <div className='col-span-6 mt-16'>
                <img className='rounded-xl' src="/public/thumbs-up-rap-god-parody-song.gif" alt="" />
            </div>
        </div>
    );
};

export default Subscribe;