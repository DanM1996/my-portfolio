import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

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
                setErrorMessage(`${data.target.name} required`)
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [data.target.name]: data.target.value })
        }
    }
    function runSubmit(info) {
        info.preventDefault();
    }
    return (
        <>
            <p>Contact Form goes here!</p>
            <section>
                <h1>Contact Form</h1>
                <form id="contactForm" onSubmit={runSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" defaultValue={name} onBlue={formValues} name="name" />
                    </div>
                    <div>
                        <label htmlFor="name">Email:</label>
                        <input type="text" defaultValue={email} onBlue={formValues} name="email" />
                    </div>
                    <div>
                        <label htmlFor="name">Message:</label>
                        <textarea name="message" defaultValue={message} onBlue={formValues} rows="4" />
                    </div>
                    {errorMessage && (
                        <div>
                            <p>{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    )
}

export default Contact;