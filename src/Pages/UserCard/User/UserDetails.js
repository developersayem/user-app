import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);
    console.log("user");
    return (
        <div className=''>
            <div className="card w-full mx-auto  rounded-lg py-8 px-2 md:px-5 lg:px-10 bg-white shadow-md text-black">
                <div className="card-body grid grid-cols-4 ">
                    {/* CARD BODY */}
                    <div className="card-actions items-center flex justify-center">
                        <button className='flex justify-center'>{user.name}</button>
                    </div>
                    <div className=''>
                        <p className='flex justify-center font-bold'>City</p>
                        <p className='flex justify-center'>{user?.city}</p>
                    </div>
                    <div className=''>
                        <p className='flex justify-center font-bold'>Street</p>
                        <p className='flex justify-center'>{user?.street}</p>
                    </div>
                    <div className="card-actions items-center flex justify-center">
                        {/* {`/user/${id}`} */}
                        <Link to="/" className='flex justify-center bg-red-500 py-2 px-8 rounded-full font-semibold text-slate-100 shadow-md'>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;