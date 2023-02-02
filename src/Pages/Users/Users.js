import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import Pagination from '../Pagination/Pagination';
import UserCard from '../UserCard/UserCard';

const Users = () => {
    // CHANGE TITLE ACORDING ROUTES BY REACT HOOKS
    useTitle("Users")
    //STORE DATA IN REACT USESTATE
    const [users, setUsers] = useState([])

    //USING useEffect TO LOAD USERS DATA
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.error(err))
    }, [])
    //CURRENT PAGE STATE 
    const [currentPage, setCurrentPage] = useState(1);
    //USER PER PAGES STATE
    const [userPerPages, setUserPerPages] = useState(3)
    //GET LAST USER INDEX
    const lastUserIndex = currentPage * userPerPages;
    //GET FAST USER INDEX
    const fastUserIndex = lastUserIndex - userPerPages;
    //GET CURRENT USER DATA
    const currentUsers = users.slice(fastUserIndex, lastUserIndex)

    return (
        <div className='flex justify-center '>
            <div className='mt-20'>
                <div>
                    {
                        currentUsers?.map(user => <UserCard
                            key={user.id}
                            user={user}
                        ></UserCard>)
                    }
                </div>
                <div>
                    <Pagination
                        totalUsers={users.length}
                        userPerPages={userPerPages}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        currentUsers={currentUsers}
                    ></Pagination>
                </div>
            </div>
        </div>
    );
};

export default Users;