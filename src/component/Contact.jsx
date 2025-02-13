import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const Contact = () => {
  return (
    <>
      <div className="container contact">
        <h1>
          CONTACT ME
        </h1>
        <div className="contact-icon">
          <a href="https://www.linkedin.com/in/rony-kumar-272b6a195/" target="_blank" className="items">
            <CiLinkedin classname="icons" />
          </a>
          <a href="https://www.facebook.com/share/15Bq7kCekv/" target="_blank" className="items">
            <CiFacebook classname="icons" />
          </a>
          <a href="https://github.com/Ronikumar123" target="_blank" className="items">
            <FaGithubSquare classname="icons"  />
          </a>
          <a href="mailto:ronykumar85251@gmail.com" target="_blank" className="items">
            <SiGmail classname="icons"  />
          </a>
          
        </div>
      </div>
    </>
  )
}

export default Contact
