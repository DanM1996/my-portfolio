import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Form from 'react-bootstrap/Form';


function Contact() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    function formValues(data) {
        if (data.target.name === "email") {
            const validate = validateEmail(data.target.value)
            if (!validate) {
                setErrorMessage('Please provide a valid email address')
            } else {
                setErrorMessage('');
            }
        } else {
            if (!data.target.value.length) {
                setErrorMessage(`Please enter your ${data.target.name}`)
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [data.target.name]: data.target.value })
        }
    }
    function runSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <>
            <section>
                <h2 className="text-format">Contact Form</h2>
                <Form id="contactForm" onSubmit={runSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label htmlFor="name" className="text-format">Name:</Form.Label>
                        <Form.Control type="text" defaultValue={name} onBlur={formValues} name="name" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label htmlFor="name" className="text-format">Email:</Form.Label>
                        <Form.Control type="email" defaultValue={email} onBlur={formValues} name="email" placeholder="Enter valid email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="name" className="text-format">Message:</Form.Label>
                        <Form.Control as="textarea" name="message" defaultValue={message} onBlue={formValues} rows={4} placeholder="Type your message here" />
                    </Form.Group>
                    {errorMessage && (
                        <Form.Group className="mb-3">
                            <p className="error-message">{errorMessage}</p>
                        </Form.Group>
                    )}
                    <div className="center">
                        <button type="submit" className="submit-btn">Submit</button>
                    </div>
                </Form>
            </section>
        </>
    )
}

export default Contact;