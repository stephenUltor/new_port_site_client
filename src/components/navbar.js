import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faP } from "@fortawesome/free-solid-svg-icons"
import { faBook } from "@fortawesome/free-solid-svg-icons"
import { faWrench } from "@fortawesome/free-solid-svg-icons"
import { faPen } from "@fortawesome/free-solid-svg-icons"

export default function Navbar(props) {

    return (
        <>

            <div className="navbar-container">
                
                <hr className="nav-line" />

                <div className="nav-icons">

                    <a href="#title-container" title="link to title section" className="about-icon-link"><FontAwesomeIcon icon={faHome} className="n-icons"/></a>

                    <a href="#about-me-container" title="link to about-me section" className="about-icon-link"><FontAwesomeIcon icon={faBook} className="n-icons" /></a>

                    <a href="#projects-container" title="link to projects section" className="about-icon-link"><FontAwesomeIcon icon={faWrench} className="n-icons" /></a>

                    <FontAwesomeIcon icon={faPen} className="n-icons" title="link to Guest Book" onClick={props.guestBook} />
                    
                </div>

            </div>

        </>
    )

}