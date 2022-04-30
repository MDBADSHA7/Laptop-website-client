import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { ChatAltIcon, MailIcon, PhoneIcon, PhotographIcon, PlayIcon } from '@heroicons/react/solid'
const Footer = () => {
    return (
        <div className='footer'>
            <a href="https://www.facebook.com/foysalahamed.badsha">
                <ChatAltIcon className='Icon'></ChatAltIcon></a>
            <a href=""><PhoneIcon className='Icon'></PhoneIcon></a>
            <a href="http://"><MailIcon className='Icon'></MailIcon></a>
            <a href="http://"><PhotographIcon className='Icon'></PhotographIcon></a>
            <a href="https://youtu.be/rztWlsghmuE"><PlayIcon className='Icon'></PlayIcon></a>
            <h1>Copyrite <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> 2022 </h1>
        </div>
    );
};

export default Footer;