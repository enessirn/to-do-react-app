import React from 'react'
import Task from './Task'
function TaskList({array,setTask}) {
    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth();
    let months = ['Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.']
  return (
    <div>
        {
            (array || []).map(item => {
               return <Task day={date} month={months[month]} taskName={item.name} key={item.id} task={item} setTask={setTask} todos={array}/>
            })
        }
    </div>
  )
}

export default TaskList