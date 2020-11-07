import React from 'react'
import {Link} from 'react-router-dom'

import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero'>
            <video className="hero__video" src="https://hesguru.com/video-1.mp4" autoPlay loop muted />
            <h1 className="hero__title">Adventure Awaits</h1>
            <p className="hero__paragraph">What are you waiting for?</p>
            <div className="hero__btns">
                <Link to="/sign-up">
                     <button className="hero__btn-start">GET STARTED</button>
                </Link>
                <Link to="/sign-up">
                    <button className="hero__btn-trailer">WATCH TRAILER <i className="far fa-play-circle"></i></button>
                </Link>

            </div>
        </div>
    )
}

export default HeroSection
