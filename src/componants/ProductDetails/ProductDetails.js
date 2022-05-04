import React from 'react';
import AddUser from '../../AddUser/AddUser';
import DeleteItem from '../DeleteItem/DeleteItem';
import InventoryItem from '../InventoryItem/InventoryItem'
const ProductDetails = () => {
    return (
        <div>
            <AddUser></AddUser>
            <InventoryItem></InventoryItem>
            {/* <DeleteItem></DeleteItem> */}
        </div>
    );
};

export default ProductDetails;