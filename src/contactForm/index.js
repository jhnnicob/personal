import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './contactForm.css';

export default function ContactForm() {
    return (
        <div className="contactForm">
            <form action="mailto:johnnicomolon@yahoo.com" method="post" encrype="text/plain">
                <h2>Leave a Message</h2>
                <div className="contactForm__control">
                    <div className="contactForm__row">
                        <TextField 
                            label="Your name" 
                            fullWidth/>
                        <TextField 
                            label="Email" 
                            fullWidth/>
                    </div>
                    <div className="contactForm__row">
                        <TextField 
                            label="Subject" 
                            fullWidth/>
                    </div>
                    <div className="contactForm__row">
                        <TextField 
                            label="Message" 
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
