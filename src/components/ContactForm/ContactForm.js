import React, { useState } from "react"
import {Form, Button, FloatingLabel, Alert} from 'react-bootstrap'
import { send } from 'emailjs-com';
import "./ContactForm.css"


const ContactForm = () => {
    const [show, setShow] = useState(false)
    const [toSend, setToSend] = useState({
        name: '',
        subject: '',
        message: '',
        from_email: '',
      })
    
    
      const handleChange = (e) => {
          console.log(e.target.name)
          console.log(e.target.value)
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

    // service_q8mz15i

    const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_q8mz15i',
          'template_d7vvtyi',
          toSend,
          'user_ZKyq6xsivCbPMsfYkApGG'
        )
          .then((response) => {
            setToSend({
                name: '',
                subject: '',
                message: '',
                from_email: '',
            })

            setShow(true)

            let timer = setTimeout(() => {
                setShow(false)
            }, 500)

            clearTimeout(timer)
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };

    return (
        <>
            <Form className="contact-form" onSubmit={onSubmit}>
                <FloatingLabel controlId="formBasicName" label="Name *" className="mb-3">
                    <Form.Control type="text" name="name" value={toSend.name} onChange={handleChange} placeholder="Name" />
                </FloatingLabel>
                {/* <FloatingLabel controlId="formBasicSubject" label="Subject" className="mb-3 subject">
                    <Form.Control type="text" name="subject" value={toSend.subject} onChange={handleChange} placeholder="Subject" />
                </FloatingLabel> */}
                <FloatingLabel controlId="formBasicEmail" label="Email *" className="mb-3">
                    <Form.Control type="email" name="from_email" value={toSend.from_email} onChange={handleChange} placeholder="Email" />
                </FloatingLabel>
                <FloatingLabel controlId="formBasicMessage" label="Message *" className="mb-3">
                    <Form.Control as="textarea" name="message" style={{height: '100px'}} value={toSend.message} onChange={handleChange} placeholder="Subject" />
                </FloatingLabel>
                <Button variant="primary" type="submit">
                    Send Message
                </Button>
            </Form>

            <Alert show={show} variant="success">
                <Alert.Heading>Confirmation!</Alert.Heading>
                <p>Message sent successfully! Please wait for sometime. I will get back to you asap.</p>
                <hr />
                <div className="d-flex justify-content-end">
                <Button onClick={() => setShow(false)} variant="outline-success">
                    Close
                </Button>
                </div>
            </Alert>
        </>
    )
}


export { ContactForm }