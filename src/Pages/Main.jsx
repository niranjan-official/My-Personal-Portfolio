import React from 'react'
import './Main.css'
import MainPage from '../components/Main-Page/MainPage'
import Navbar from '../components/Navbar/Navbar'

function Main() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <section>
                <MainPage />
            </section>
        </>
    )
}

export default Main