import React from "react";
import { Component } from 'react';
import '../style.css'
import image from '../images/sumin.jpeg';
import { isContentEditable } from "@testing-library/user-event/dist/utils";

class OutputCV extends Component {
    
    render() {
        const { general, content } = this.props;

        return (
            <div className="container-cv">
                <div className="personal-info-bar">
                    <img className="profile-picture" src={image} alt="must be professional"/>
                    <div className="introduction-section">
                        <h1 className="first-name">{general.lastname} {general.firstname}</h1>
                        <h2 className="title">{general.title}</h2>
                    </div>
                    <div className="contact-section">
                        <div className="contact-section-header">
                            <h1>Contact</h1>
                        </div>
                        <div className="contact-section-details">
                            <div className="contact-section-details-container">
                                <h2>Address</h2>
                                <h3>{general.address}</h3>
                            </div>
                            <div className="contact-section-details-container">
                                <h2>Phone</h2>
                                <h3>{general.phonenumber}</h3>
                            </div>
                            <div className="contact-section-details-container">
                                <h2>Email</h2>
                                <h3>{general.useremail}</h3>
                            </div>
                            <div className="contact-section-details-container">
                                <h2>LinkedIn</h2>
                                <h3>{general.linkedin}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="skills-section">
                        <div className="skills-section-header">
                            <h1>Skills</h1>
                        </div>
                        <div className="skills-section-details">
                            <div className="skills-section-details-container">
                                <ul>
                                    <li>{general.skill1}</li>
                                    <li>{general.skill2}</li>
                                    <li>{general.skill3}</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cv-content">
                    <div className="cv-content-description">
                        <p>{content.description}</p>
                    </div>
                    <div className="cv-content-work-history">
                        <h1>Work History</h1>
                    </div>

                </div>

            </div>
        )
    }
}

export default OutputCV