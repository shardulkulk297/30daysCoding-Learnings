import { useState, useReducer } from 'react'
import FetchData from './FetchData';


const reducer = (state, action)=>{
  console.log(state, action)

  if(action.type == "inc")
  {
    return {count: state.count +1};
  }

  if(action.type == "dec")
  {
    return {count: state.count - 1};
  }

  else{
    throw new error("Unsupported action type");
  }

}


//reducer: coffee maker it is pure function
//state : coffee powder
//action: water
//new state (coffee)


function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0});

  const handleClickInc = ()=>{
    dispatch({type: "inc"});
  }
  const handleClickDec = ()=>{
    dispatch({type: "dec"})
  }
  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={handleClickInc}>+</button>
      <button onClick={handleClickDec}>-</button>
      <FetchData />
    </>
  )
}

export default App
