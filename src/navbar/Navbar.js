import React from 'react'
import './navcss.css'
import { Link } from 'react-router-dom'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

const Logo = () => {

    return (
        <div className='logo'>
            <div className='image'>
                <img src='https://lh3.googleusercontent.com/_rrDROEeXlutzdKf0qfjJ3PxUih_5ciqVsKot2O3_mcf9KCxEUNNQV0kj9WdRDBSzsoasLhphNMiCrcRxc2EQcc=w16383' />
            </div>
            <div className='text'>
                <Link to='/'>TECHNOCRAFT SOLUTIONS</Link>
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
