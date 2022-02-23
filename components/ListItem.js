import React from 'react'
const ListItem=(props)=>{
  const onClickDeleteHandler=(e)=>{
      e.preventDefault();
      
      props.updateTaskList(props.TaskName);
  }
  const onClickCompletedHandler=(e)=>{
      e.preventDefault();
      props.updateTaskItem(props.TaskName);
  }
  const onClickChangeHandler=(e)=>{
      e.preventDefault();
      document.querySelector(".popup").style.visibility="visible";
      props.getChange(props.TaskName)

  }
  const showStrike= props.completed && props.SelectState=="All Tasks" ?'stricked':''; 
  return <div className="item">
      <div className="item-left">
          
      </div>
      <div className="item-right">
          <div className="item-first">
              <button id="item-btn1" onClick={(e)=>onClickDeleteHandler(e)}></button>
              <button id="item-btn2" onClick={(e)=>onClickChangeHandler(e)}></button>
              <button id="item-btn3" onClick={(e)=>onClickCompletedHandler(e)}></button>
          </div>
          <div ><div className={showStrike}>{props.TaskName}</div></div>
          <div className="item-right-detail"><div className={showStrike}>{props.TaskDetail}</div></div>
      </div>
  </div>
}

export default ListItem;