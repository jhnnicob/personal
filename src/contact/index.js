import React from 'react';
import './contact.css';
import ContactForm from '../contactForm';
import ContactInfo from '../contactInfo';

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="contact__body">
                <ContactForm />
                <ContactInfo />
            </div>
        </div>
    )
}
