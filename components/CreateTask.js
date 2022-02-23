import { useState } from "react";


import React from 'react'
const CreateTask=(props)=>{
    const [TaskName,SetTaskName]=useState('')
    const [TaskDetail,SetTaskDetail]=useState('')
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        props.getTaskList({id: Math.floor( Date.now()/1000),TaskName,TaskDetail,completed: false});
        SetTaskName('');
        SetTaskDetail('');
    }
    return (<div>
       
        <div className="main-left-body">
            <form onSubmit={(e)=>onSubmitHandler(e)}>
            <div className="main-left-head">
            <img src="./all-task.svg"/>
            <h3>Make New Task</h3>
        </div>
                <div className="count"> {TaskName.length}/50</div>
            <input className="task-name" placeholder="Your task topic" onChange={(e)=> e.target.value.length<=50 ?SetTaskName(e.target.value):null } value={TaskName} />
            <div className="count">{TaskDetail.length}/75</div>
            <input className="task-detail" placeholder="More info about your topic" onChange={(e)=> e.target.value.length<=75 ?SetTaskDetail(e.target.value):null } value={TaskDetail} />
            <div className="btn1"><button>Create New Task</button></div>
            </form>
        </div>

    </div>)
}

export default CreateTask;