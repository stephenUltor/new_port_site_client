import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons"
import { faCodepen } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Contact(props) {

    return (
        <>

            <div className="contact-container">

                <div className="contact-icons">

                    <a href="https://www.linkedin.com/in/stephen-morrow-73b6b7169/" title="link to my LinkedIn" target="_blank" className="linkedin-icon-link"><FontAwesomeIcon icon={faLinkedin} className="c-icons" /></a>

                    <a href="https://twitter.com/stephenUltor" title="link to my Twitter" target="_blank" className="twitter-icon-link"><FontAwesomeIcon icon={faTwitter} className="c-icons" /></a>

                    <a href="https://github.com/stephenUltor" title="link to my gitHub" target="_blank" className="gitHub-icon-link"><FontAwesomeIcon icon={faGithub} className="c-icons" /></a>

                    <a href="https://app.netlify.com/teams/stephenultor/overview" title="link to my Netlify" target="_blank" className="netlify-icon-link"><FontAwesomeIcon icon={faCodeBranch} className="c-icons" /></a>

                    <a href="https://codepen.io/stephenleemorrow" title="link to my codepen" target="_blank" className="codepen-icon-link"><FontAwesomeIcon icon={faCodepen} className="c-icons" /></a>

                </div>

                <hr className="contact-line" />

            </div>

        </>
    )

}