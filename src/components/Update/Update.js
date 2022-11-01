import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const storedUser= useLoaderData()
    const [user, setUser] = useState(storedUser)

    
    const handelUpdateUser = (event) => {
        event.preventDefault();
        const form = event.target;
        // form.reset()
        console.log(user)
        fetch(`http://localhost:5000/users/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
            // console.log(data)
                if (data.modifiedCount > 0) {
                    alert('user update successfully')
                    console.log(data)
                }
        })


    }

    const handelUpdateChange = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...user }
        newUser[field] = value
        setUser(newUser)

    }
   
    return (
        <div>
            <h1>Please Update: {storedUser.name}</h1>
            <form onSubmit={handelUpdateUser}>


                <input onChange={handelUpdateChange} defaultValue={storedUser.name} name='name' type="text" placeholder='name' /> <br />
                <input onChange={handelUpdateChange} defaultValue={storedUser.address} name='address' type="text" placeholder='address' /> <br />
                <input onChange={handelUpdateChange} defaultValue={storedUser.email} name='email' type="email" placeholder='email' /> <br />
                <button type='submit' >Update User</button>
            </form>
        </div>
    );
};

export default Update;