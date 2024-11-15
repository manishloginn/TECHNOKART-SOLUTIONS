import React from 'react'
import './navcss.css'
import { Link } from 'react-router-dom'

import Image from '../MY_LOGO-1.png'


import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

export const Logo = () => {

    return (
        <div className='logo'>
            <div className='image'>
                <img src={Image}  alt='logo'/>
            </div>
            <div className='text'>
                <Link to='/'>TECHNOKART SOLUTIONS</Link>
            </div>
        </div>
    )
}

const Navbar = () => {
    return (
        <nav className='navcontainer'>
            <Logo />
            <div className='linkstag'>
                <Link to='/'> Home </Link>
                <Link to='/services'> Services </Link>
                <Link to='/partner'> Partner </Link>
                <Link to='/about'> About </Link>
                <Link to='/contact-us'> Contact us </Link>
            </div>
            <div className='left'>
                <div className='icons'>
                    <QuestionAnswerIcon style={{width:"40px", fontSize:"50px", color:"lightcyan"}} />
                </div>
                <div className='paragraph'>
                    <p>Have any Quetions? <br/>Call : 8851463622</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
