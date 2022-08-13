import React from "react";
import { Component } from 'react';
import '../style.css'

class Education extends Component {
    render() {
        const { educationList, handleChangeForEducationTemplate } = this.props;
        return (
            <div className="work-history-container">
                {educationList.map((task) => {
                    return (
                        <form className = "input-form">
                            <div className="row-container">
                                <div className="input-block">
                                    <label htmlFor="title">Title</label>
                                    <input onChange = {handleChangeForEducationTemplate} value = {task.title} name="title" id = "title" type = "text" data-key={task.id}/>
                                </div>
                                <div className="input-block">
                                    <label htmlFor="school">School</label>
                                    <input onChange = {handleChangeForEducationTemplate} value = {task.school} name="school" id = "school" type = "text" data-key={task.id}/>
                                </div>
                                <div className="input-block">
                                    <label htmlFor="tasks">Tasks</label>
                                    <input onChange = {handleChangeForEducationTemplate} value = {task.tasks} name="tasks" id = "tasks" type = "text" data-key={task.id}/>
                                </div>
                            </div>
                        </form>
                    )
                })}
            </div>
        )
    }
}

export default Education