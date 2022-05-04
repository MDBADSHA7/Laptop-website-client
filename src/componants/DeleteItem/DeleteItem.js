import React, { useEffect, useState } from 'react';
import { TrashIcon } from '@heroicons/react/solid'
import './DeleteItem.css'

const DeleteItem = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    const handleLaptopDelivered = id => {
        const proceed = window.confirm('Do you want to delete?')
        if (proceed) {
            console.log('Delete user with id,', id)
            const url = `http://localhost:5000/user/${id}`
            fetch(url, {
                method: 'Delete'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deleteCount > 0) {
                        console.log('Deleted')
                        const remaining = users.filter(user => user._id !== id)
                        setUsers(remaining);
                    }
                })
        }

    }
    return (
        // <div >
        //     <h1>Availavail Collection:{users.length}</h1>
        //     <div>
        //         <div className='Delete-container'>
        //             {users.map(user => <p
        //                 key={user._id}>
        //                 <img src={user.image} alt="" />
        //                 <br />
        //                 <h5 className="name">{user.name}</h5>
        //                 <br />
        //                 <p className="discription">Discription : {user.discription}</p>
        //                 <br />
        //                 <p className="quantity">Quantity : {user.quantity}</p>
        //                 <br />
        //                 <p className="suppliar">Supplier : {user.supplier}</p>
        //                 <br />
        //                 <p className="price">Price : $ {user.price}</p>
        //                 <br />
        //                 <p className="sold">Sold : {user.sold}</p>
        //                 <button onClick={() => handleLaptopDelivered(user._id)} className='Delivered-button'>Delivered <TrashIcon className='Icon'></TrashIcon></button>
        //             </p>)}
        //         </div>
        //     </div>
        // </div>
        <div >
            {/* <div class="col"> */}
            <div class="card-1">
                <div class="card-body-2">
                    {
                        users.map(user => <p
                            key={user._id}>
                            < img src={user.image} class="card-img-top" alt="..." />
                            <h5 class="card-title">{user.name}</h5>
                            <p className="discription">Discription : {user.discription}</p>
                            <p className="quantity">Quantity : {user.quantity}</p>
                            <p className="suppliar">Supplier : {user.supplier}</p>
                            <p className="price">Price : $ {user.price}</p>
                            <p className="price">Price : $ {user.price}</p>
                            <button onClick={() => handleLaptopDelivered(user._id)} className='Delivered-button'>Delivered <TrashIcon className='Icon'></TrashIcon></button>
                        </p>)
                    }
                </div>
                {/* </div> */}
            </div>
        </div >

    );
};

export default DeleteItem;