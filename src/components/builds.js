import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain } from "@fortawesome/free-solid-svg-icons"
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export default function Builds(props) {

    return (
        <>

            <div className="projects-container" id="projects-container">

                <div className="projects-title-container">
                    <h2 className="projects-title">BUILDS</h2>
                    <hr className="line-projects" />
                </div>

                <div className="project-tile" data-aos="fade-down">

                    <div className="project-image-EC">
                        <div className="project-overlay" onClick={() => window.open("https://astonishing-lolly-bb0fd9.netlify.app/", "_blank")}></div>
                    </div>


                    <div className="project-description-container-right" onClick={() => window.open("https://astonishing-lolly-bb0fd9.netlify.app/", "_blank")}>

                        <p className="featured-right">FE Mentor Challenge</p>

                        <h2>E-commerce Landing Page Clone</h2>

                        <div className="project-description-right">
                            <p className="proj-descrip-text-right">An intermediate Front End Mentor Challenge to clone a sample E-commerce 
                            landing page. Complete with functional cart, image carousel, and navbar. Demonstrates smooth scalability and 
                            adept JavaScript functionality. 
                            </p>
                        </div>

                        <br />

                        <p className="featured-right">HTML&nbsp; CSS&nbsp; JavaScript&nbsp; React&nbsp; UI/UX Design</p>

                    </div>

                </div>


                <div className="project-tile" data-aos="fade-down">

                    <div className="project-image-HM">
                        <div className="project-overlay" onClick={() => window.open("https://chrome.google.com/webstore/detail/hidden-motivation/oemhjbapofpcdamafkfpgdenenepkphi", "_blank")}></div>
                    </div>

                    <div className="project-description-container-left" onClick={() => window.open("https://chrome.google.com/webstore/detail/hidden-motivation/oemhjbapofpcdamafkfpgdenenepkphi", "_blank")}>

                        <p className="featured-left">Personal Project</p>

                        <h2>Published Chrome Extension</h2>

                        <div className="project-description-left">
                            <p className="proj-descrip-text-left">A passionate side project finally come to fruition! This fully developed 
                            and published Chrome Extension crawls through a web page’s text to find a random motivational phrase hidden in 
                            the paragraphs, then highlights the words of the phrase. 
                            </p>
                        </div>

                        <br />

                        <p className="featured-left">HTML&nbsp; Web Nodes&nbsp; JavaScript&nbsp; Google Chrome Extension API</p>

                    </div>

                </div>


                <div className="project-tile" data-aos="fade-down">

                    <div className="project-image-QU">
                        <div className="project-overlay" onClick={() => window.open("https://comforting-sprite-f62a7a.netlify.app/", "_blank")}></div>
                    </div>

                    <div className="project-description-container-right" onClick={() => window.open("https://comforting-sprite-f62a7a.netlify.app/", "_blank")}>

                        <p className="featured-right">Bootcamp Solo Project</p>

                        <h2>API-connected Quiz App</h2>

                        <div className="project-description-right" >
                            <p className="proj-descrip-text-right">A solo project to mark the end of my React courseware, this fun quiz app 
                            pulls from Open Trivia DB API to display a series of trivia questions and answers that are then graded based on 
                            difficulty.
                            </p>
                        </div>

                        <br />

                        <p className="featured-right">RESTful API&nbsp; CSS&nbsp; JavaScript&nbsp; React&nbsp; UI/UX Design</p>

                    </div>

                </div>


                <div className="project-tile" data-aos="fade-down">

                    <div className="project-image-CW">
                        <div className="project-overlay" onClick={() => window.open("https://www.codewars.com/users/stephenUltor", "_blank")}></div>
                    </div>

                    <div className="project-description-container-left" onClick={() => window.open("https://www.codewars.com/users/stephenUltor", "_blank")}>

                        <p className="featured-left">JavaScript Skills</p>

                        <h2>Code Wars Profile</h2>

                        <div className="project-description-left">
                            <p className="proj-descrip-text-left">An ongoing challenge to hone my JavaScript skills. I strive to solve at 
                            least one JS algorithm problem a week. Now proudly at level 5 with more than 20 algorithm solutions!
                            </p>
                        </div>

                        <br />

                        <p className="featured-left">JavaScript</p>

                    </div>

                </div>

                <div className="project-tile" data-aos="fade-down">

                    <div className="project-image-PW">
                        <div className="project-overlay" onClick={() => window.open("https://wonderful-meringue-d3d5d7.netlify.app/", "_blank")}></div>
                    </div>

                    <div className="project-description-container-right">

                        <p className="featured-right">Personal Website</p>

                        <h2>Personal Portfolio Website v1</h2>

                        <div className="project-description-right" onClick={() => window.open("https://wonderful-meringue-d3d5d7.netlify.app/", "_blank")}>
                            <p className="proj-descrip-text-right">My first attempt at a personal portfolio website features a window into 
                            a P5.js rendition of Craig Reynolds 1986 Boids flocking simulation. While bright in the day, night holds a 
                            spooky surprise!
                            </p>
                        </div>

                        <br />

                        <p className="featured-right">JSX&nbsp; CSS&nbsp; JavaScript&nbsp; React&nbsp; P5.js</p>

                    </div>

                </div>

            </div>


        </>
    )

}