import React, { useEffect } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from "@fortawesome/free-solid-svg-icons"

import AOS from "aos"
import "aos/dist/aos.css"

import Navbar from "./navbar"
import Contact from "./contact"
import About from "./about"
import Builds from "./builds"

export default function Window(props) {

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-sine'
        })
    }, [])

    return (
        <>

            

            <Navbar 
                guestBook={props.guestBook}
            />

            <div className="title-container" id="title-container" data-aos="fade-down" data-aos-delay="100">

                <h1 className="title" >STEPHEN MORROW</h1>
                <hr className="line" />
                <div className="wrapper">
                    <p>Software</p>
                    <div className="words">
                        <span>Developer</span>
                        <span>Engineer</span>
                        <span>Obsessed</span>
                        <span>Kung fu!</span>
                        <span>Developer</span>
                    </div>
                </div>

            </div>

            <About
                windowWidth={props.windowWidth}
            />

            <Builds
                windowWidth={props.windowWidth}
            />

            <div className="footer">

                <img src="assets\me.png" alt="Pixel Stephen"></img>

                <p onClick={() => { navigator.clipboard.writeText("stephenleemorrow@gmail.com") }}>stephenleemorrow@gmail.com <FontAwesomeIcon icon={faCopy} className="icons" /></p>

            </div>

            <Contact />

        </>
    )

}