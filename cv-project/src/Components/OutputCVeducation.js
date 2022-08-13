import React from "react";
import { Component } from 'react';
import '../style.css';

class OutputEducation extends Component {
    render() {
        const { educationList } = this.props;
        return (
            <div className="work-history">
                {educationList.map((task) => {
                    return (
                    <div className="work-history-content">
                        <h1>{task.title}</h1>
                        <h4>{task.school}</h4>
                        <p>{task.tasks}</p>
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default OutputEducation