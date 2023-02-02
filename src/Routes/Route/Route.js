import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Users from '../../Pages/Users/Users';



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Users></Users>,
        children: []
    }
]);

const Route = () => {
    return (
        <div>
        </div>
    );
};

export default Route;