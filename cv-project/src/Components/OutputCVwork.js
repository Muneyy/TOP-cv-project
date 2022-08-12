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
                        <h3>{task.company}</h3>
                        <h3>{task.address}</h3>
                        <h3>{task.task1}</h3>
                        <h3>{task.task2}</h3>
                        <h3>{task.task3}</h3>
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default OutputWorkHistory
