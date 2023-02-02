import { useState } from "react";


const UserCard = ({ user }) => {
    // DESTRUCTURING FORM OBJECT
    const { company, address, name, email, phone } = user;
    const { city, street, zipcode } = address;
    console.log(user);

    const [open, setOpen] = useState(!true);
    const [openbtn, setOpenbtn] = useState(!false);

    const handleOpen = () => {
        setOpen((current) => !current);
        setOpenbtn((current) => !current);
    };

    return (
        <div className='m-5'>
            <div open={open === 1}
                className="card w-full mx-auto  rounded-lg py-8 px-2 md:px-5 lg:px-10 bg-white shadow-md text-black">
                <div >
                    <div className="card-body grid grid-cols-1 lg:grid-cols-5 gap-3 ">
                        {/* CARD BODY */}
                        <div className="card-actions items-center flex justify-center">
                            <p className='flex justify-center '>{company?.name}</p>
                        </div>
                        <div className=''>
                            <p className='flex justify-center uppercase font-bold'>Contact</p>
                            <p className='flex justify-center'>{name}</p>
                        </div>
                        <div className=''>
                            <p className='flex justify-center font-bold uppercase'>City</p>
                            <p className='flex justify-center'>{city}</p>
                        </div>
                        <div className=''>
                            <p className='flex justify-center font-bold uppercase'>Street</p>
                            <p className='flex justify-center'>{street}</p>
                        </div>
                        <div className="card-actions items-center flex justify-center">
                            {openbtn ? <button
                                onClick={() => handleOpen()}
                                className='flex justify-center bg-red-500 py-1 px-8 rounded-full text-white font-semibold text-slate-100 shadow-md'>
                                View Details
                            </button> :
                                <button
                                    onClick={() => handleOpen()}
                                    className='flex justify-center bg-red-500 py-1 px-8 rounded-full text-white font-semibold text-slate-100 shadow-md'>
                                    Hide Details
                                </button>}
                        </div>
                    </div>
                </div>
                <div className={`${!open ? "hidden" : ""} shadow-inner px-8 py-5 mt-5 rounded-md transition`}>
                    <div className="">
                        <h1 className="">Description</h1>
                        <p className="text-sm mt-1 text-[#767272]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum non nam, reiciendis minima commodi sunt dolor dolores odit! Officiis!</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="m-5">
                            <div className="mb-3">
                                <h1>Contact Person</h1>
                                <p className="text-sm mt-1 text-s text-[#767272]	">{name && name}</p>
                            </div>
                            <div className="mb-3">
                                <h1>City</h1>
                                <p className="text-sm mt-1 text-[#767272]	">{city && city}</p>
                            </div>
                            <div className="mb-3">
                                <h1>Street</h1>
                                <p className="text-sm mt-1 text-[#767272]	">{street && street}</p>
                            </div>
                            <div className="mb-3">
                                <h1>Email</h1>
                                <p className="text-sm mt-1 text-[#767272]	">{email && email}</p>
                            </div>
                            <div className="mb-3">
                                <h1>Phone</h1>
                                <p className="text-sm mt-1 text-[#767272]	">{phone && phone}</p>
                            </div>
                        </div>
                        <div className="m-5">
                            <div className="mb-3">
                                <h1>Addres</h1>
                                <p className="text-sm mt-1 text-[#767272]	">Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                            <div className="mb-3">
                                <h1>Company Name</h1>
                                <p className="text-sm mt-1 text-[#767272]	">{company?.name}</p>
                            </div>
                            <div className="mb-3">
                                <h1>Designation</h1>
                                <p className="text-sm mt-1 text-[#767272]	">{name && name}</p>
                            </div>
                            <div className="mb-3">
                                <h1>Country</h1>
                                <p className="text-sm mt-1 text-[#767272]	">India</p>
                            </div>
                            <div className="mb-3">
                                <h1>Zip Code</h1>
                                <p className="text-sm mt-1 text-[#767272]	">{zipcode && zipcode}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}
export default UserCard;