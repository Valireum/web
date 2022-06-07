import React from 'react'
import './FooterStyle.css'
import {FaTwitter, FaTelegram, FaDiscord} from 'react-icons/fa'
import vlogo from '../assets/vlogo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div>
                <p>Copyright © Valireum LLC.</p>
                <p>Trademarks belong to their respective owners. All rights Reserved.</p>
                </div>
                
                 
            </div>
            <div className='right'>
                <div className='social'>
                <FaTwitter size={20} style={{color: '#fff', marginRight: '.5rem'}}/>
                <FaDiscord size={20} style={{color: '#fff', marginRight: '.5rem'}}/>
                <FaTelegram size={20} style={{color: '#fff', marginRight: '.5rem'}}/>
                </div>
                <div className='links-container'>
                    <ul>
                        <li>
                            <p>Partnership</p>
                        </li>
                        <li>
                            <p>Privacy</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer