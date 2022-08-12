import React from "react";
import { Component } from 'react';
import '../style.css'

class InputComponents extends Component {

    render () {
        const { general, handleChangeForGeneral, handleChangeForContent, contento } = this.props;

        return (
            <form className = "input-form">
                <div className="row-container">
                    <div className="input-block">
                        <label htmlFor="firstname">First Name</label>
                        <input onChange = {handleChangeForGeneral} value = {general.firstname} name="firstname" id = "firstname" type = "text"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="lastname">Last Name</label>
                        <input onChange = {handleChangeForGeneral} value = {general.lastname} name="lastname" id = "lastname" type = "text"/>
                    </div>
                </div>
                <div className="row-container">
                    <div className="input-block">
                            <label htmlFor="title">Title</label>
                            <input onChange = {handleChangeForGeneral} value = {general.title} name="title" id = "title" type = "text"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="phonenumber">Phone Number</label>
                        <input onChange = {handleChangeForGeneral} value = {general.phonenumber} name="phonenumber" id = "phonenumber" type = "number"/>
                    </div>
                </div>
                <div className="row-container">
                    <div className="input-block">
                        <label htmlFor="useremail">Email</label>
                        <input onChange = {handleChangeForGeneral} value = {general.useremail} name="useremail" id = "useremail" type = "email"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="address">Address</label>
                        <input onChange = {handleChangeForGeneral} value = {general.address} name="address" id = "address" type = "text"/>
                    </div>
                </div>
                <div className="row-container">
                    <div className="input-block">
                        <label htmlFor="linkedin">Linkedin</label>
                        <input onChange = {handleChangeForGeneral} value = {general.linkedin} name="linkedin" id = "linkedin" type = "text"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="skill1">Skill 1</label>
                        <input onChange = {handleChangeForGeneral} value = {general.skill1} name="skill1" id = "skill1" type = "text"/>
                    </div>
                </div>
                <div className="row-container">
                    <div className="input-block">
                        <label htmlFor="skill2">Skill 2</label>
                        <input onChange = {handleChangeForGeneral} value = {general.skill2} name="skill2" id = "skill2" type = "text"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="skill3">Skill 3</label>
                        <input onChange = {handleChangeForGeneral} value = {general.skill3} name="skill3" id = "skill3" type = "text"/>
                    </div>
                </div>
                <div className="row-container">
                    <div className="input-block">
                        <label htmlFor="description">Description</label>
                        <textarea onChange = {handleChangeForContent} value = {contento.description} name="description" id = "description" type = "textarea"/>
                    </div>
                </div>
                
            </form>
        )
    }
}

export default InputComponents;