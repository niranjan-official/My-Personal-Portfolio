import React from 'react'
import './MainPage.css'
import instagram from '../../assets/insta.png'
import linkedIn from '../../assets/linkedIn.svg'
import whatsapp from '../../assets/whatsapp.png'


function MainPage() {

    const contacts = [
        { app: 'instagram', link: "https://instagram.com/niranjanofficial__?igshid=NTc4MTIwNjQ2YQ==", src: instagram },
        { app: 'linkedIn', link: "http://www.linkedin.com/in/niranjansabarinath", src: linkedIn },
        { app: 'whatsapp', link: "https://api.whatsapp.com/send?phone=7736223205", src: whatsapp },
    ]
    return (
        <div className='main'>
            <div className='note p-10'>
                <h3>Welcome to my page</h3>
                <h1><span>Hi I'm</span> <span className='text-teal-500'>Niranjan Sabarinath</span></h1>
                <h2>Web Developer</h2>
                <h4 className='mt-10'>Passionate ReactJS developer adept at fusing futuristic tech into web projects. Committed to crafting dynamic,
                    forward-looking digital experience</h4>
                <h5 className='mt-24 ml-10 text-gray-300'>Connect with me:</h5>
                <div className='ml-10 mt-4 contact border-2 border-teal-500 shadow-inner shadow-teal-500'>
                    {contacts.map((obj) => (
                        <a href={obj.link}><img src={obj.src} alt={obj.app}/></a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MainPage