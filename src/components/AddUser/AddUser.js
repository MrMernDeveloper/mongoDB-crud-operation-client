import React, { useState } from 'react';

const AddUser = () => {
    const [user, setUser]= useState({})

    const handelUser = (event) => {
        event.preventDefault();
        const form = event.target;
        // form.reset()
        console.log(user)

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
            
            
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('user added successfully')
                    console.log(data)
                    form.reset()
                }
               
        })

    }

    const handelInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = {...user}
        newUser[field] = value
        setUser(newUser)

    }

    return (
        <div>
            <h2>Please add new user</h2>
            <form onSubmit={handelUser}>
                

                <input onChange={ handelInputBlur }  name='name' type="text"  placeholder='name'/> <br />
                <input onChange={ handelInputBlur }  name='address' type="text"  placeholder='address'/> <br />
                <input  onChange={ handelInputBlur } name='email' type="email"  placeholder='email'/> <br />
                <button type='submit' >Add User</button>
            </form>
        </div>
    );
};

export default AddUser;