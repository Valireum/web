import React from "react";
import './VideoStyle.css'
import { Link } from 'react-router-dom'

import TeaserVideo from '../assets/backg.mp4'

const video = () => {
  return (
    <div className='teaser'>
        <video autoPlay loop muted id='video'>
            <source src={TeaserVideo} type='video/mp4'/>
        </video>
    <div className='content'>
        <p>Join the movement</p>
    
        <div>
        <Link to='/BuyNFT' className='btn'>founder presale</Link>
        <a href="https://twitter.com/valireum" target='_blank' className='btn btn-light'> Airdrop</a>
        </div>
    </div>
    </div>
  )
}

export default video