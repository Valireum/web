import {React, useState} from 'react'
import './NavbarStyle.css'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../assets/logo.png';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <div className='header'>
        <Link to='/'><img className='logo' src={logo}/></Link>
        <ul className={click ? 'nav-menu active': 'nav-menu'}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/BuyNFT'>Presale</Link>
            </li>
            <li>
                <a href='https://docs.google.com/document/d/1EJX-pKvj_C11I9rvIyHmU510_jWpfo7nZYqL-3kQzIg' target='_blank'>Ecosystem</a>
            </li>
            <li>
                <a href='https://app.dework.xyz/valireum/valireum/view/milestones' target='_blank'>Roadmap</a>
            </li>
            <li>
            <a href='mailto:contact@valireum.net' target='_blank'>Contact</a>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}}/>) : <FaBars size={20} style={{color: '#fff'}}/>}
        </div>
    </div>
  )
}

export default Navbar