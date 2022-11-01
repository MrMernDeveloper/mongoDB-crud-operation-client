import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users)
   

    const handelDelete = user=> {
        const agree = window.confirm(`are you sure to delete: ${user.name} `)
        if (agree) {
            // console.log('deleting user with id:', user._id)
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('user delete successfully');
                        const remainingUsers = displayUsers.filter(usr => usr._id !== user._id)
                        setDisplayUsers(remainingUsers)
                        
                    }
            })
        }
    }
    return (
        <div>
            {
                displayUsers.map(user => <p key={user._id}>{user.name} {user.email}
                    <Link to={`/update/${user._id}`}>
                        <button>Update</button>
                    </Link>
                    <button onClick={() => handelDelete(user)}>x</button>
                   
                </p>)
            }
        </div>
    );
};

export default Home;