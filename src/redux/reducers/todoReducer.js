import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_FILTER, TOGGLE_TODO } from "../actions/todoTypes";





const initialSate =  {
  filter:'ALL',
  todos :[
    {
  Id:"1",
  description:"nader",
  isDone:true
},
{
  Id:"2",
  description:"makram",
  isDone:false
},
{
  Id:"3",
  description:"seif",
  isDone:false
}
] 
}

const todoReducer = (state=initialSate,{type,payload}) => {
switch (type) {
  case ADD_TODO:
    
    return {
      ...state,
      todos:[...state.todos,payload]
    }
    case DELETE_TODO:
    
      return {
        ...state,
        todos:[...state.todos.filter(el=>el.Id!==payload)]
        
      }

      case TOGGLE_TODO:
    
      return {
        ...state,
        todos:[...state.todos.map(el=>el.Id===payload?{...el,isDone:!el.isDone}:el)]
        
      }

      case EDIT_TODO:
    
        return {
          ...state,
          todos:[...state.todos.map(el=>el.Id===payload.Id?payload:el)]
          
        }
        case TOGGLE_FILTER:
    
          return {
            ...state,
           filter:payload
            
          }


  default:
    return state
}

}

export default todoReducer
