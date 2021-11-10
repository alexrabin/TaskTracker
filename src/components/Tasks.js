import React from 'react'
import Task from './Task';
function Tasks({tasks, onDelete, onToggle}) {
    

    return (
        <>
          {tasks.map((task, key) => (<Task task={task} key={key} onDelete={onDelete} onToggle={onToggle}/>))}  
        </>
    )
}
export default Tasks;
