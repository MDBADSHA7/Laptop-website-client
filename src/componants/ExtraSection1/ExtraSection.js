import React from 'react';
import image1 from '../Images/image-1.jpg'
import image2 from '../Images/image-2.jpg'
import image3 from '../Images/image-3.jpg'
import image4 from '../Images/image-4.jpg'

import './ExtrxSection.css'
const ExtraSection = () => {
    return (
        <div className='extrasection-container'>
            <div className='image-container'>
                <h1 >Extrasection-1: Our-Werehouse</h1>
                <div className='extra-image'>
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
                </div>
                <h1 className='discount'>If you bye any product from our werehouse , you will get 15% discount of our regular price.This offer will be finish 20/05/2022.</h1>
            </div>
        </div>
    );
};

export default ExtraSection;