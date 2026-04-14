// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">   
          <img src={assets.logo} alt="" />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div className="footer-social-icons"> 
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <ui>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ui>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TUCH</h2>
          <ul>
            <li>+8801998660758</li>
            <li>kashifmustari@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-coppyright">Copyright 2024 Tomato.com-All Right Reserved</p>
    </div>
  )
}

export default Footer
