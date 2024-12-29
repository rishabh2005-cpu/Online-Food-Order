import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id = "footer">
        <div className='footer-content'>
            <div className="footer-content-left">
            
            <img src={assets.logo} alt="" srcset="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores similique provident laboriosam, at corporis rem dolor temporibus sequi facilis necessitatibus nemo quia voluptates distinctio repellendus harum accusamus aperiam laborum ab?</p>
            <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" srcset="" />
            <img src={assets.twitter_icon} alt="" srcset="" />
            <img src={assets.linkedin_icon} alt="" srcset="" />
            </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+977 9866190819</li>
                <li>contactfoodiee@gmail.components</li>
            </ul>
            </div>
            
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 © Foodie.com - All Right Reserved.</p>

    </div>
  )
}

export default Footer