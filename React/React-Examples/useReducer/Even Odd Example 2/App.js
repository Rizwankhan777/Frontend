import React, { useReducer } from 'react'
import Reducer from './myReducer'


function App() {
  const [state, dispatch] = useReducer(Reducer, { count: 1, oddEven: "Odd" });        // Or Intial State //
  return (
    <div>
      <h2> {state.count} </h2>
      <h2> {state.oddEven} </h2>
      <button onClick={() => dispatch({ type: "check" })}> Check Count </button>
      <button onClick={() => dispatch({ type: "reset" })}> Reset Count </button>

    </div>
  )
}

export default App
