import React from 'react';
import './contactInfo.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
export default function ContactInfo() {
    return (
        <div className="contactInfo">
            <h2>Contact Info</h2>
            <div className="contactInfo__body">
                <div className="contactInfo__item">
                    <div className="contactInfo__icon"><LocationOnIcon /></div>
                    <div className="contactInfo__detail">
                        <h4>Address</h4>
                        <p>Nagcarlan, Laguna Philippines</p>
                    </div>
                </div>
                <div className="contactInfo__item">
                    <div className="contactInfo__icon"><EmailIcon /></div>
                    <div className="contactInfo__detail">
                        <h4>Email</h4>
                        <p>johnnicomolon@yahoo.com</p>
                    </div>
                </div>
                <div className="contactInfo__item">
                    <div className="contactInfo__icon"><PhoneIcon /></div>
                    <div className="contactInfo__detail">
                        <h4>Call me</h4>
                        <p>(+63) 999-338-4635</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
