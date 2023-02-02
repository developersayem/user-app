import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const UserCard = ({ user }) => {
    //DESTRUCTURING USERNAME ,ADRESS FROM PERTYCULAR USER
    const { username, address, company, id } = user

    //DESTRUCTURING ADDRESS DETAILS FROM ADDRESS
    const { city, street } = address;

    // CHANGE TITLE ACORDING ROUTES BY REACT HOOKS
    useTitle(`${username}`)
    console.log(user)
    return (
        <div className='m-5'>
            <div className="card w-full mx-auto  rounded-lg py-8 px-2 md:px-5 lg:px-10 bg-white shadow-md text-black">
                <div className="card-body grid grid-cols-4 ">
                    {/* CARD BODY */}
                    <div className="card-actions items-center flex justify-center">
                        <button className='flex justify-center'>{company?.name}</button>
                    </div>
                    <div className=''>
                        <p className='flex justify-center font-bold'>City</p>
                        <p className='flex justify-center'>{city}</p>
                    </div>
                    <div className=''>
                        <p className='flex justify-center font-bold'>Street</p>
                        <p className='flex justify-center'>{street}</p>
                    </div>
                    <div className="card-actions items-center flex justify-center">
                        <Link to={`/user/${id}`} className='flex justify-center bg-red-500 py-2 px-8 rounded-full font-semibold text-slate-100 shadow-md'>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;