import React from 'react';
import './social.css'
import { FaFacebook, FaInstagramSquare, FaTwitterSquare, FaSnapchat, FaTelegramPlane} from "react-icons/fa";


const SocialMediaSection = (props) => {
    return (
        <div className=" py-3 social-media-container">

            <div className="social-media-column">
            
            <span className="social-media-icons" ><FaFacebook size="32" color="#4267B2"/></span>
            <span className="social-media-icons" ><FaInstagramSquare size="32" color="#8a3ab9"/></span>
            <span className="social-media-icons" ><FaTwitterSquare size="32" color="#1DA1F2"/></span>
            <span className="social-media-icons" ><FaSnapchat size="32" color="#FFFC00"/></span>
            <span className="social-media-icons" ><FaTelegramPlane size="32" color="#0088CC"/></span>
            </div>
            
            {/* <div className="row mx-auto">
                <div className="col-lg-6 col-sm-12 col-md-6">
                    
                    <span className="px-2" ><FaInstagramSquare size="32" color="pink"/></span>
                    <span className="px-2" ><FaTwitterSquare size="32" color="blue"/></span>
                </div>
                <div className="col-lg-6 col-sm-12 col-md-6">
                    2
                </div>
            </div> */}
        </div>
    );
}

export default SocialMediaSection;