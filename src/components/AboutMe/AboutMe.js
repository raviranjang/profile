import React from "react"
import { Row, Col, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import "./AboutMe.css"

const AboutMe = () => {

    return (
        <>
            <Card className="about-me-card">
                <Row>
                    <Col md={8}>
                        <div>
                            <div className="salutation">
                                Hey!
                            </div>
                            <div className="stop-by">Thanks for stopping by.</div>
                        </div>

                        <div className="introduction">
                            I am <span className="name">Ravi Ranjan</span>, a <span className="designation">Software Engineer </span>
                              who is passionate about building projects.
                            Positive energy, a flair for problem solving and making people laugh is what I am known for.
                            I consider myself fortunate to do what I love daily.

                        </div>
                        
                        <div className="experience">
                            I have 5+ years of experience designing and developing solutions that served millions of users.

                        </div>

                        <div className="contacts">
                            <div className="icon"><FontAwesomeIcon icon={faGithub} /></div>
                            <div className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                            <div className="icon"><FontAwesomeIcon icon={faGlobe} /></div>
                            <div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                            <div className="icon"><FontAwesomeIcon icon={faPhoneAlt} /></div>
                        </div>
                    </Col>

                    <Col md={4} className="profile-pic-parent">
                        <img className="profile-pic" src={require("../../assets/images/banner-pic.png").default} alt="pic" />
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export { AboutMe }