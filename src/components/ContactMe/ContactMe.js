import React from "react"
import { Card, Col, Row } from 'react-bootstrap'
import { ContactDetails } from "../ContactDetails"
import { ContactForm } from "../ContactForm/ContactForm"

import "./ContactMe.css"

const ContactMe = () => {

    

    return (
        <>
            <Card className="contact-card">
                <Row>
                    <Col md={6}>
                        <ContactDetails />
                    </Col>

                    <Col md={6}>
                        <ContactForm />
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export { ContactMe }