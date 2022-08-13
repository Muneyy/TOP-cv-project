import React from "react";
import { Component } from 'react';
import '../style.css';

class OutputWorkHistory extends Component {
    render() {
        const { workHistoryList } = this.props;
        return (
            <div className="work-history">
                {workHistoryList.map((task) => {
                    return (
                    <div className="work-history-content">
                        <h1>{task.title}</h1>
                        <h2>{task.company}</h2>
                        <h3>{task.address}</h3>
                        <ul>
                            <li>{task.task1}</li>
                            <li>{task.task2}</li>
                            <li>{task.task3}</li>
                        </ul>
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default OutputWorkHistory
