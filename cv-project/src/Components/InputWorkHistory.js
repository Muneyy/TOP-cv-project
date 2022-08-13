import React from "react";
import { Component } from 'react';
import '../style.css'

class WorkHistory extends Component {
    render() {
        const { workHistoryListInput, handleChangeForWorkHistoryTemplate } = this.props;
        return (
            <div className="work-history-container">
                {workHistoryListInput.map((task) => {
                    return (
                        <form className = "input-form">
                            <div className="row-container">
                                <div className="input-block">
                                    <label htmlFor="title">Title</label>
                                    <input onChange = {handleChangeForWorkHistoryTemplate} value = {task.title} name="title" id = "title" type = "text" data-key={task.id}/>
                                </div>
                                <div className="input-block">
                                    <label htmlFor="company">Company</label>
                                    <input onChange = {handleChangeForWorkHistoryTemplate} value = {task.company} name="company" id = "company" type = "text" data-key={task.id}/>
                                </div>
                                <div className="input-block">
                                    <label htmlFor="address">Address</label>
                                    <input onChange = {handleChangeForWorkHistoryTemplate} value = {task.address} name="address" id = "address" type = "text" data-key={task.id}/>
                                </div>
                            </div>
                            <div className="row-container">
                                <div className="input-block">
                                    <label htmlFor="task1">task1</label>
                                    <input onChange = {handleChangeForWorkHistoryTemplate} value = {task.task1} name="task1" id = "task1" type = "text" data-key={task.id}/>
                                </div>
                                <div className="input-block">
                                    <label htmlFor="task2">task2</label>
                                    <input onChange = {handleChangeForWorkHistoryTemplate} value = {task.task2} name="task2" id = "task2" type = "text" data-key={task.id}/>
                                </div>
                                <div className="input-block">
                                    <label htmlFor="task3">task3</label>
                                    <input onChange = {handleChangeForWorkHistoryTemplate} value = {task.task3} name="task3" id = "task3" type = "text" data-key={task.id}/>
                                </div>
                            </div>
                        </form>
                    )
                })}
            </div>
        )
    }
}

// {tasks.map((task) => {
//     return (
//         <div key={task.id} id={task.id} className="task-holder">
//             <li>{task.text}</li>
//             <button onClick={(e) => onDelete(task.id)}>Delete Task</button>
//         </div>
//     )  
//   })}

export default WorkHistory;