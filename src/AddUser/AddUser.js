import React from 'react';

const AddUser = () => {
    const handleAddRestoke = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const user = { name };
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Item added successfully')
                event.target.reset();
            })
    }
    return (
        <div>
            <h1>Pleade Add for restoke.</h1>
            <form onSubmit={handleAddRestoke}>
                <input type="text" name="name" placeholder='Name' required />
                <br />
                <input type="submit" value="Restoke Hear" />
            </form>
        </div>
    );
};

export default AddUser;