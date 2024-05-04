import React from 'react';
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMailUnread } from "react-icons/io5";
import './footer.css'
const Footer = () => {
    return (
        <footer className="  text-white py-6">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                <div className='icon-s flex justify-between items-center'><IoMailUnread/>levlsuportt@levlcompany.com</div>
                </div>
                <div className='flex justify-between items-center'>
                    <a href="#" className="text-xl mr-4 "><IoLogoInstagram className='icon-s'/></a>
                    <a href="#" className="text-xl mr-4"><IoLogoFacebook className='icon-s'/></a>
                    <a href="#" className="text-xl mr-4"><IoLogoLinkedin className='icon-s'/></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
