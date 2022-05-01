import React from 'react';
import Banner from '../Banner/Banner';
import ExtraSection from '../ExtraSection1/ExtraSection';
import ExtraSectionTwo from '../ExtraSectionTwo/ExtraSectionTwo';
import Footer from '../Footer/Footer';
import Inventory from '../Inventory/Inventory';
// import InventoryItem from '../InventoryItem/InventoryItem';
const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <ExtraSection></ExtraSection>
            <Inventory></Inventory>
            {/* <InventoryItem></InventoryItem> */}
            <ExtraSectionTwo></ExtraSectionTwo>
            <Footer></Footer>
        </div>
    );
};

export default Home;