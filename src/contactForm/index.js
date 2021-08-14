import React, {useState, useReducer, useEffect} from 'react';
import './contactForm.css';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade'
import EmailReducer from '../reducer/EmailReducer';

export default function ContactForm() {

    const initilaState = {
        isLoading: false,
        error: '',
        success: false,
        successMessage: '',
        emailContent: {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    const [state, dispatch] = useReducer(EmailReducer, initilaState);
    const {emailContent, isLoading, error, successMessage, success} = state;

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: "send"}) ;

        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(emailContent),
        });

        try {
            await response.json();
            dispatch({type: "success"});
        } catch (error) {
            dispatch({type: error});
        }
    };

    const handleChange = (e) => {
        dispatch({
            type: "field",
            name: [e.target.name],
            value: e.target.value
        });
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch({type: "close_alert"})
        }, 3000)
    }, [successMessage])

    return (
        <div className="contactForm">
            <form onSubmit={handleSubmit}>
                {successMessage && <Fade in={successMessage != ""}>
                    <Alert severity="success">{successMessage}</Alert>
                </Fade>}
                <h2>Leave a Message</h2>
                <div className="contactForm__control">
                    <div className="contactForm__row">
                        <TextField 
                            label="Your name" 
                            name="name"
                            value={emailContent.name}
                            onChange={handleChange}
                            fullWidth/>
                        <TextField 
                            label="Email" 
                            name="email"
                            value={emailContent.email}
                            onChange={handleChange}
                            fullWidth/>
                    </div>
                    <div className="contactForm__row">
                        <TextField 
                            label="Subject" 
                            name="subject"
                            value={emailContent.subject}
                            onChange={handleChange}
                            fullWidth/>
                    </div>
                    <div className="contactForm__row">
                        <TextField 
                            label="Message" 
                            name="message"
                            value={emailContent.message}
                            onChange={handleChange}
                            fullWidth/>
                    </div>
                    <div className="contactForm__row">
                        <Button
                            type="submit"
                            className="contactForm__button" 
                            variant="contained" 
                            color="primary"
                            disabled={isLoading}>
                            {isLoading ? "Loading..." : "Send a message"}
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}
