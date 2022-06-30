import React from 'react'

export default function ProjectTile(props) {

    return (

        <>
            {props.right ?

                <div className="project-tile" data-aos="fade-down">

                    <div className={props.tileTitle}>
                        <div className="project-overlay" onClick={props.link}></div>
                    </div>


                    <div className="project-description-container-right" onClick={props.link}>

                        <p className="featured-right">{props.projectFeature}</p>

                        <h2>{props.projectTitle}</h2>

                        <div className="project-description-right">
                            <p className="proj-descrip-text-right">{props.projectDescription}
                            </p>
                        </div>

                        <br />

                        <p className="featured-right">{props.projectIncludes}</p>

                    </div>

                </div>

                :

                <div className="project-tile" data-aos="fade-down">

                    <div className={props.tileTitle}>
                        <div className="project-overlay" onClick={props.link}></div>
                    </div>


                    <div className="project-description-container-left" onClick={props.link}>

                        <p className="featured-left">{props.projectFeature}</p>

                        <h2>{props.projectTitle}</h2>

                        <div className="project-description-left">
                            <p className="proj-descrip-text-left">{props.projectDescription}
                            </p>
                        </div>

                        <br />

                        <p className="featured-left">{props.projectIncludes}</p>

                    </div>

                </div>

            }
        </>



    )
}