import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './contactForm.css';

export default function ContactForm() {

    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, subject, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        };
        console.log(details);
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        console.log(response);
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

    return (
        <div className="contactForm">
            <form onSubmit={handleSubmit}>
                <h2>Leave a Message</h2>
                <div className="contactForm__control">
                    <div className="contactForm__row">
                        <TextField 
                            label="Your name" 
                            name="name"
                            fullWidth/>
                        <TextField 
                            label="Email" 
                            name="email"
                            fullWidth/>
                    </div>
                    <div className="contactForm__row">
                        <TextField 
                            label="Subject" 
                            name="subject"
                            fullWidth/>
                    </div>
                    <div className="contactForm__row">
                        <TextField 
                            label="Message" 
                            name="message"
                            fullWidth/>
                    </div>
                    <div className="contactForm__row">
                        <Button
                            type="submit"
                            className="contactForm__button" 
                            variant="contained" 
                            color="primary">
                            Send a message
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}
