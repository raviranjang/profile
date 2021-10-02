import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import {} from 'react-bootstrap'
import "./ContactDetails.css"


const ContactDetails = () => {

    return (
        <>
            <div className="contact-details">
                <div className="get-in-touch">GET IN TOUCH</div>

                <div className="contact-title">CONTACT</div>

                
                
                <div className="contact-block">
                    <div className="icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="contact-src">raviranjan.rr1994@gmail.com</div>
                </div>

                <div className="contact-block">
                    <div className="icon">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                    </div>
                    <div className="contact-src">+91 8296619603</div>
                </div>

                <div className="contact-block">
                    <div className="icon">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    <div className="contact-src"> #5, 22nd Main, 3rd Cross, 2nd Stage, BTM Layout, Bengaluru, KA, India - 560076</div>
                </div>
            </div>
        </>
    )
}

export { ContactDetails }