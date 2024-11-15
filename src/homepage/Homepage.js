import React from 'react'
import './homecss.css'
import getAmenity from '../getAmenity'

import Image1 from '../images/tatatele1.jpg'
import Image2 from '../images/image2.jpeg'


const whatwedo = [
    {
        quantity: "05+",
        value: "Partners",
        icon: 'user'

    },
    {
        quantity: "250+",
        value: "Projects",
        icon: 'right'
    },
    {
        quantity: "180+",
        value: "Happy Clients",
        icon: 'happy'
    },
    {
        quantity: "350+",
        value: "Meetings",
        icon: 'meeting'
    },

]



const Homepage = () => {



    return (
        <div className='homecontainer'>
            <div className='img'>
                <p className='first'>WELCOME</p>
                <h1 className='second'>Empower Your Brand with</h1>
                <h3 className='third'>TECHNOKART SOLUTIONS</h3>
               
            </div>
            <div className='heroSection'>
                <div className='whatwedo'>
                    <p>Achievements</p>
                </div>
                <div className='cartcontainer'>
                    {
                        whatwedo && whatwedo?.map((value, index) => (
                            <div className='cart'>
                                <span className='amenities'> {getAmenity(value.icon)}</span>
                                <h3 style={{ color: "grey" }}>{value.value}</h3>
                                <h3 style={{ color: "grey" }}>{value.quantity}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='lowerherosection'>
                <div className='cartlower'>
                    <div className='imagesbar'>
                        <img src={Image1} alt='image1' />
                    </div>
                    <div className='content'>
                        <h3>Business communication that’s a step ahead.</h3>
                        <p>Smartflo WhatsApp for Business Suite offers superior UX that engages with customers the way they want to.
                            Every business today dreams of an advanced digital solution which offers an integrated network to existing and potential customers, thus accelerating user engagement, boosting CX and ensuring impactful customer interactions. We transform digital experiences with technology, now offer Smartflo WhatsApp for Business Suite to accelerate customer engagement, boost CX and ensure impactful customer interactions. The solution offers a superior UX to enhance business communications, in the way customers want to engage in today’s business ecosystem.
                            #TimeToDoBig #Business #CX #Technology #Tata #omnichannel #communication</p>
                        <p className='datealag'>26 Jun 2023</p>
                    </div>
                </div>


                <div className='cartlower'>
                    <div className='content'>
                        <h3>Eradicate cyber threats effortlessly with our digital tools that prioritize security.</h3>
                        <p>Best Web Security Solution In India for Business. Many corporate employees are now using cloud-based apps and accessing the internet off the corporate network. It’s true that the dynamic security landscape is increasing in complexity as well as severity.

                            #MakeBigHappen

                            #TimeToDoBig #Business #CyberSecurity #Technology #SmartDigitalSolutions #Tata</p>

                    </div>
                    <div className='imagesbar'>
                        <img src={Image2} alt='image1' />
                    </div>
                </div>


                <div className='cartlower'>
                    <div className='imagesbar'>
                        <iframe width="500px" height='300px' title='video1' src='https://www.youtube.com/embed/GJYk6CAkAk8?embed_config=%7B%22enc%22:%22AYtJroyM5t9L2kKV0qS2eagYjemfemMOKoydOOcRe_EmuPLWI7o1z0lXMCbB_-N12b4xei-NEW1cUlw80AKLawQNFyh_QS9qURtqApcZQGJylJJDEH0OPH8PaE7xI9wadDXSFHQUWJtLy1Kh_ipVS918-QmcIhwXcicoA6_GkPyWfEwb%22%7D&errorlinks=1&rct=CpcBAYtJroxwJjlXi7XDhjVN9-f7Uo6mKQ3bGTZESo0ENrG3tOIsFNxF_ERI21bdPy0GIY2h6tDHlhQojvMCn2F4jBTWxjoKy-ENFkQh4gKrbPqnkRA9RB2k9QwSvJ_j6HeSi-1RvEqOc3kJ1yl6koK3kSrX94v5eaPpzsCURwXizN0Wf7NHuyEdtgxvonm1M2j66ZTWHkHiiA%3D%3D'></iframe>
                    </div>
                    <div className='content'>
                        <h3>Cloud Communication Reimagined</h3>
                        <p>As businesses rethink operating models and working environments, they are leveraging technology at the core, bringing multiple devices, platforms and channels into play. Your turn to flow forward with a multi-modal, multi-functional, flexible, scalable, and secure solution that ensures digital connectivity and productivity at all times.
                            #TimeToDoBig #Business #Technology #SmartDigitalSolutions #Tata</p>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default Homepage
