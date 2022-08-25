import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}) => {
  return (
    <div>
      {
        todos.map(el=><Todo todo={el}/>)
      }
    </div>
  )
}

export default TodoList
