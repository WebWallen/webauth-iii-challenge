import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import axiosWithAuth from '../utils/axiosWithAuth.js';

const Users = (props) => {
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        axios.get('http://localhost:3000/api/users')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err.response));
    }

    useEffect(() => {
        getUsers();
    })

    return (
        <div>
            <h2>Users</h2>
            {users.map(user => 
            <>
               <h3>{user.username}</h3> 
               <h4>{user.department}</h4>
            </>
            )}
        </div>
    )
}

export default Users;