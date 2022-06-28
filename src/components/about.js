import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from "@fortawesome/free-brands-svg-icons"
import { faCss3 } from "@fortawesome/free-brands-svg-icons"
import { faJsSquare } from "@fortawesome/free-brands-svg-icons"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function About(props) {
    
    let aosDetermine = props.windowWidth < 1000 ? "fade-top" : "fade-left"

    return (
        <>

            <div className="about-me-container" id="about-me-container">

                <div className="about-me-title-container" data-aos={aosDetermine}>

                    <h2 className="about-me-title">ABOUT ME</h2>

                    <div className="skills-container">

                        <div className="skill">
                            <FontAwesomeIcon icon={faHtml5} className="icons" />
                        </div>

                        <div className="skill">
                            <FontAwesomeIcon icon={faCss3} className="icons" />
                        </div>

                        <div className="skill">
                            <FontAwesomeIcon icon={faJsSquare} className="icons" />
                        </div>

                        <div className="skill">
                            <FontAwesomeIcon icon={faReact} className="icons" />
                        </div>

                        <div className="skill">
                            <FontAwesomeIcon icon={faGithub} className="icons" />
                        </div>

                    </div>

                </div>

                <hr className="line2" />

                <p className="about-me" data-aos="fade-zoom-in"> I developed a passion for coding and web development in 2021 as I sought to transition
                    from my 7-role as a critical engineering technician to a full-time technical writer. After I wrote all of
                    the documentation and a full training program for a critical Microsoft data center, I was introduced to API documentation and from there to
                    freeCodeCamp.com. I was captivated by all of the new information at my fingertips and I flew through the web
                    development curriculum.
                    <br />
                    <br />
                    Since then, I have graduated from Scrimba.com in which I learned HTML, CSS,
                    JavaScript, and React as well as developed several projects of my own. I don’t plan to stop learning anytime soon
                    and I'm always looking forward to my next challenge!
                </p>

            </div>

        </>
    )

}