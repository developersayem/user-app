import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
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

    return (
        <div className='text-blue-500'>
            {
                users?.map(user => <UserCard
                    key={user.id}
                    user={user}
                ></UserCard>)
            }
        </div>
    );
};

export default Users;