import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { addTodo } from '../redux/actions/todoActions'
const AddTodo = () => {
    const [newTodo,setNewTodo]=useState(null)
    const dispatch = useDispatch()
  return (
    <div>
    <input 
    type="text"
    placeholder='New todo'
    onChange={(e)=>setNewTodo({description:e.target.value})}
    ></input> 
     <button 
     onClick={()=>dispatch(addTodo(newTodo))}
     >
      ADD  
     </button>
    </div>
  )
}

export default AddTodo
