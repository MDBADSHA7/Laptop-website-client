import React from 'react';

const AddUser = () => {
    const handleAddRestoke = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const discription = event.target.discription.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;
        const price = event.target.name.value;
        const sold = event.target.name.value;
        const user = { name, discription, quantity, supplier, price, sold };
        fetch('https://intense-spire-59334.herokuapp.com/user', {
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
                <input type="text" name="discription" placeholder='Discription' required />
                <br />
                <input type="text" name="quantity" placeholder='Quantity' required />
                <br />
                <input type="text" name="supplier" placeholder='Supplier' required />
                <br />
                <input type="text" name="price" placeholder='Price' required />
                <br />
                <input type="text" name="sold" placeholder='Sold' required />
                <br />
                <input type="submit" value="Restoke Hear" />
            </form>
        </div>
    );
};

export default AddUser;