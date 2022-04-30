import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import InventoryItem from '../InventoryItem/InventoryItem';
const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <InventoryItem></InventoryItem>
            <Footer></Footer>
        </div>
    );
};

export default Home;