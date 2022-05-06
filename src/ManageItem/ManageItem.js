import React from 'react';
import AddUser from '../AddUser/AddUser';
import DeleteItem from '../componants/DeleteItem/DeleteItem';

const ManageItem = () => {
    return (
        <div>
            <AddUser></AddUser>
            <DeleteItem></DeleteItem>
        </div>
    );
};

export default ManageItem;