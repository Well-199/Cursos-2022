import { useReducer } from 'react'

type reducerState = {
  count: number,
}
type reducerAction = {
  type: string,
}

const initialState = { count: 0 }
const reducer = (state: reducerState, action: reducerAction) => {

  switch(action.type){
    case 'ADD':
      return { ...state, count: state.count + 1 }
    break
    case 'DEL':
      return { ...state, count: state.count - 1 }
    break
      case 'RESET':
        return initialState
    break
  }
  return state
}

const App = () => {

  // reducer armazena uma função e initialState armazena um objeto
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>

      
    </div>
  )
}

export default App
