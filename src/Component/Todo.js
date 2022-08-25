import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { deleteTodo, editTodo, toggleTodo } from '../redux/actions/todoActions'
const Todo = ({todo}) => {
    const [input,setInput]=useState(todo)
    const dispatch=useDispatch()
  return (
    <div 
    style={{
display:"flex",alignItems:"center"
    }

    }
    
    >
        <input type="checkbox"   onClick={()=>dispatch(toggleTodo(todo.Id))}  checked={todo.isDone} ></input>
     <h1 style={{textDecoration:todo.isDone?"line-through":"none",
     textDecorationColor:todo.isDone?"red":"none",
     padding:"0 10px 0 10px ",
     fontSize:"20px"
    
    }}
     >
        {todo.description} 
     </h1 > 
      <button onClick={()=>dispatch(deleteTodo(todo.Id))}>
       Delete
      </button>
      <input type="text" value={input.description}
      onChange={(e)=>setInput({...input,description:e.target.value})}
      >

      </input>
      <button onClick={()=>dispatch(editTodo(input))}>
        Edit
      </button>
    </div>
  )
}  

export default Todo
