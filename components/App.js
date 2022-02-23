import React from 'react'
import { useState } from "react";
import CreateTask from "./CreateTask";
import TaskListTODO from "./TaskListTODO";
const App=()=>{
    const [TaskList,SetTaskList]=useState([]);
    const [changeContent,SetChange]=useState('');
    const getTaskList=(res)=>{
        SetTaskList(prevTaskList=>{
            const list=[...prevTaskList]
            return [...list,res]
        })
    }
    const updateTaskList=(dat)=>{
        SetTaskList(prevlist=>{
            return prevlist.filter( item=> item.TaskName!==dat)
        })
    }
    const updateTaskItem=(data1)=>{
        SetTaskList(prevList=>{
            const temp=[...prevList]
           return  prevList.map((item)=> {
                if(item.TaskName==data1){item.completed= !item.completed; } return item}  ) }) }
    const getChange=(data2)=>{
        SetChange(data2);
    }
    const deleteAllTasks=()=>{
        SetTaskList(prev=>{return []})
    }
    const onClickCloseHandler=(e)=>{
        e.preventDefault();
        SetChange('');
        document.getElementById("task-name").value ='';
        document.getElementById("task-detail").value='';
        document.querySelector(".popup").style.visibility="hidden";
    }
    const onClickChangeHandler=(e)=>{
        e.preventDefault();
        const taskName=document.getElementById("task-name").value;
        const taskDetail=document.getElementById("task-detail").value;
        if(taskName&& taskDetail){
            SetTaskList(previousList=>{
                return previousList.map((item)=>{
                    if(item.TaskName==changeContent ){item.TaskName= taskName; item.TaskDetail=taskDetail; }
                return item;})})
                
            }
            SetChange('')
            document.getElementById("task-name").value ='';
            document.getElementById("task-detail").value='';
                document.querySelector(".popup").style.visibility="hidden";
        }
    console.log(TaskList);
    return(<div>
         <div className="popup">
    <div>
        <h3>Are you sure to edit?</h3>
        <form>
            <input placeholder={`You are About to Edit Task ${changeContent}`} id="task-name"/>
            <input placeholder="edit content...." id="task-detail" />
            <div className="popup-btns">
                <button id="popup-btn1" onClick={(e)=>onClickCloseHandler(e)}>Cancel</button>
                <button id="popup-btn2" onClick={(e)=>onClickChangeHandler(e)}>Confirm</button>
            </div>
        </form>
        
    </div>
</div>
       
        <div className="img-head">
            <img  src="./main.svg"/>
            <h2>Todo App</h2>
        </div>
        <div className="main" >
            <div className="main-left">
                <CreateTask  getTaskList={getTaskList}/>
            </div>
            <div className="main-right" >
                <TaskListTODO TaskList={TaskList} updateTaskList={updateTaskList} updateTaskItem={updateTaskItem} getChange={getChange} deleteAllTasks={deleteAllTasks}/>
            </div>
        </div>

    </div>)
}

export default App;