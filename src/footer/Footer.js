import React from 'react'
import './footercss.css'
import Image from '../MY_LOGO-1.png'


import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {


    const openWhatsAppChat = () => {
        // Replace with the phone number you want to chat with (in international format without '+' sign)
        const phoneNumber = '+918851463622';
        const message = 'Hello, I need assistance'; // Optional message to pre-fill the chat
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, message);
      };

    return (
        <div className='footer'>
            <div className='first' >
                <div className='logoo'>
                    <img src={Image} alt='logo' />
                </div>
                <p className='paragraph'> 34 Third Floor, Office No 5, Corner Market, Malviya Nagar,  New Delhi 110017 India
                    <br />
                    P: <span>8851463622</span>
                </p>
            </div>

            <div className='second' >

                <WhatsAppIcon  
                style={{ fontSize: "80px", color:"green" }}
                onClick={openWhatsAppChat}
                />

            </div>

        </div>
    )
}

export default Footer