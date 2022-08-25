import React from 'react'
import {useSelector} from 'react-redux'
import AddTodo from './Component/AddTodo'
import TodoList from './Component/TodoList'
import { useDispatch } from 'react-redux/es/exports'
import { filterTodo } from './redux/actions/todoActions'
function App() {
  const todos=useSelector(state=>state.todos)
  const filter=useSelector(state=>state.filter)
  const dispatch=useDispatch()
 console.log(todos)
return (
  <div className="App">
    <AddTodo/>
    <hr></hr>
    <button onClick={()=>dispatch(filterTodo('ALL'))}>ALL</button>
    <button onClick={()=>dispatch(filterTodo(true))}>Done</button>
    <button onClick={()=>dispatch(filterTodo(false))}>UnDone</button>
<TodoList todos={filter==='ALL'? todos:todos.filter(el=>el.isDone===filter)}/>

  </div>
)

}

export default App
