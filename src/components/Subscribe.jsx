import React from 'react';

const Subscribe = () => {
    return (
        <div className='w-3/4 mx-auto md:grid-cols-12 gap-16 grid grid-cols-1 my-20'>
            <div className='col-span-6'>
                <h1 className='text-3xl text-center'>Write me a message</h1>
                <div className='card-body border rounded-xl mt-3 shadow-lg  bg-[#050e41] '>
                    <div className="form-control ">
                        <label className="label ">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="shadow-lg input input-bordered" />
                    </div>
                    <div className="form-control ">
                        <label className="label ">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="shadow-lg input input-bordered" />
                    </div>
                    <div className="form-control ">
                        <label className="label ">
                            <span className="label-text text-white">Comment</span>
                        </label>
                        <textarea className="shadow-lg border rounded-xl p-2" name="" id="" cols="30" rows="10" placeholder='Write a comment'></textarea>
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </div>
            </div>
            <div className='col-span-6 mt-16'>
                <img className='rounded-xl' src="https://i.postimg.cc/q7SbS4zm/thumbs-up-rap-god-parody-song.gif" alt="" />
            </div>
        </div>
    );
};

export default Subscribe;