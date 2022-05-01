import React from 'react';
import image1 from '../Images/images (1).jpg'
import image2 from '../Images/images (2).jpg'
import image3 from '../Images/images (3).jpg'
import image4 from '../Images/images (4).jpg'
import './ExtraSectionTwo.css'
const ExtraSectionTwo = () => {
    return (
        <div className='extrasection2-container'>
            <div className='image-container'></div>
            <h1 >Extrasection-2: Our wholesell shop</h1>
            <div className='extra-image2'>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
            <h1 className='discount'>If you bye any product from our Show-room , you will get 5% discount of our regular price.This offer only for Eid-Ul-Fetor</h1>
        </div>
    );
};

export default ExtraSectionTwo;