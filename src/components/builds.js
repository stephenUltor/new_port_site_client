import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from "@fortawesome/free-solid-svg-icons"

import ProjectTile from "./projectTiles"

export default function Builds(props) {
    
    const d = ["The first of many full stack applications to come. This simple API uses MySQL, Express, and Node.js to post simple messages to my guest book for this site. Use the ", <FontAwesomeIcon icon={faPen}/>, " on the side or bottom of the site to access the app!"]
    
    return (
        <>

            <div className="projects-container" id="projects-container">

                <div className="projects-title-container">
                    <h2 className="projects-title">BUILDS</h2>
                    <hr className="line-projects" />
                </div>

                <ProjectTile
                    right={true}
                    tileTitle="project-image-EC"
                    link={() => window.open("https://astonishing-lolly-bb0fd9.netlify.app/", "_blank")}
                    projectFeature="FE Mentor Challenge"
                    projectTitle="E-commerce Landing Page Clone"
                    projectDescription="An intermediate Front End Mentor Challenge to clone a sample E-commerce 
                    landing page. Complete with functional cart, image carousel, and navbar. Demonstrates smooth scalability and 
                    adept JavaScript functionality."
                    projectIncludes="HTML&nbsp; CSS&nbsp; JavaScript&nbsp; React&nbsp; UI/UX Design"
                />

                <ProjectTile
                    right={false}
                    tileTitle="project-image-HM"
                    link={() => window.open("https://chrome.google.com/webstore/detail/hidden-motivation/oemhjbapofpcdamafkfpgdenenepkphi", "_blank")}
                    projectFeature="Published Chrome Extension"
                    projectTitle="Hidden Motivation"
                    projectDescription="A passionate side project finally come to fruition! This fully developed 
                    and published Chrome Extension crawls through a web page’s text to find a random motivational phrase hidden in 
                    the paragraphs, then highlights the words of the phrase."
                    projectIncludes="HTML&nbsp; Web Nodes&nbsp; JavaScript&nbsp; Google Chrome Extension API"
                />

                <ProjectTile
                    right={true}
                    tileTitle="project-image-QU"
                    link={() => window.open("https://comforting-sprite-f62a7a.netlify.app/", "_blank")}
                    projectFeature="Bootcamp Solo Project"
                    projectTitle="API-connected Quiz App"
                    projectDescription="A solo project to mark the end of my React courseware, this fun quiz app 
                    pulls from Open Trivia DB API to display a series of trivia questions and answers that are then graded based on 
                    difficulty."
                    projectIncludes="RESTful API&nbsp; CSS&nbsp; JavaScript&nbsp; React&nbsp; UI/UX Design"
                />

                <ProjectTile
                    right={false}
                    tileTitle="project-image-CW"
                    link={() => window.open("https://www.codewars.com/users/stephenUltor", "_blank")}
                    projectFeature="JavaScript Skills"
                    projectTitle="Code Wars Profile"
                    projectDescription="An ongoing challenge to hone my JavaScript skills. I strive to solve at
                    least one JS algorithm problem a week. Now proudly at level 5 with more than 20 algorithm solutions!"
                    projectIncludes="Algorithms&nbsp; Math&nbsp; JavaScript&nbsp; E6"
                />
                
                <ProjectTile
                    right={true}
                    tileTitle="project-image-PW"
                    link={() => window.open("https://wonderful-meringue-d3d5d7.netlify.app/", "_blank")}
                    projectFeature="Personal Website"
                    projectTitle="Personal Portfolio Website v1"
                    projectDescription="My first attempt at a personal portfolio website features a window into
                    a P5.js rendition of Craig Reynolds 1986 Boids flocking simulation. While bright in the day, night holds a
                    spooky surprise!"
                    projectIncludes="JSX&nbsp; CSS&nbsp; JavaScript&nbsp; React&nbsp; P5.js"
                />

                <div className="projects-title-container">
                    <h2 className="projects-title">Full Stack</h2>
                    <hr className="line-projects" />
                </div>
                
                <ProjectTile
                    right={false}
                    tileTitle="project-image-GB"
                    link={props.guestBook}
                    projectFeature="Full Stack Project"
                    projectTitle="Full Stack Guest Book"
                    projectDescription={d}
                    projectIncludes="Node.js&nbsp; Express&nbsp; MySQL&nbsp; React&nbsp; Heroku"
                />

            </div>


        </>
    )

}