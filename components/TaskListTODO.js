import React from 'react'
import { useState } from "react";
import ListItem from "./ListItem";
const TaskListTODO=(props)=>{
    const [SelectState,SetSelectState]=useState('All Tasks');
    const renderList= props.TaskList.map((item)=> {
        if(SelectState=="All Tasks"){
            return  <ListItem TaskName={item.TaskName} TaskDetail={item.TaskDetail} completed={item.completed} updateTaskList={props.updateTaskList} updateTaskItem={props.updateTaskItem} getChange={props.getChange} SelectState={SelectState}/>
      
      }
      else if(SelectState=="Done Tasks" && item.completed==true){
        return  <ListItem TaskName={item.TaskName} TaskDetail={item.TaskDetail} completed={item.completed} updateTaskList={props.updateTaskList} updateTaskItem={props.updateTaskItem} getChange={props.getChange} SelectState={SelectState}/>

      }
      
      });
      const onSelectChangeEventHandler=(e)=>{
          SetSelectState(e.target.value)
      }
    return (<div>
       <div className="main-right-top">
           <img src="./all-task.svg"/>
           <div><h3>All Tasks</h3></div>
       </div>
       <div className="main-right-top1">
           <select onChange={(e)=>onSelectChangeEventHandler(e)}>
               <option value={"All Tasks"}>All Tasks</option>
               <option value={"Done Tasks"}>Done Tasks</option>
           </select>
           <div><button id="btn2" onClick={(e)=>{e.preventDefault(e);props.deleteAllTasks()}}>Clear All</button></div>
       </div>
       <div>
           {renderList}
       </div>
    </div>)
}
export default TaskListTODO;