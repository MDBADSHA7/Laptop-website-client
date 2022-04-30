import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { ChatAltIcon, LocationMarkerIcon, MailIcon, PhoneIcon, PhotographIcon, PlayIcon } from '@heroicons/react/solid'
const Footer = () => {
    return (
        <div className='footer'>
            <a href=""><LocationMarkerIcon className='Icon'></LocationMarkerIcon></a>
            <b>22/6 North Lalbag , Dhaka-1205 , Bangladesh</b><br />
            <a href=""><PhoneIcon className='Icon'></PhoneIcon></a><b> Helpline:   +8801735776381, +8801571359201</b>
            <br />
            <a href="http://"><MailIcon className='Icon'></MailIcon></a><b> Personal: foysalahamedbadsha@gmail.com</b>
            <br />
            <a href="https://www.facebook.com/foysalahamed.badsha">
                <ChatAltIcon className='Icon'></ChatAltIcon></a>
            <a href="https://lh3.googleusercontent.com/a-/AOh14GgdEXVl-9TYnjJGZEmaOS2s8ht4M0V7Z6myOkv4=s96-c"><PhotographIcon className='Icon'></PhotographIcon></a>
            <a href="https://youtu.be/rztWlsghmuE"><PlayIcon className='Icon'></PlayIcon></a>

            <h1>Copyrite <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> 2022 MD Badsha's Website</h1>
        </div>
    );
};

export default Footer;