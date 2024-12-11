import { useRef, useState } from 'react'
import Child from './Child';
import './App.css'

function App() {

  const childRef = useRef(null);

  function handleOpenModal(val){
    childRef.current.openModal(val);
  }

  return (
    <>

    <Child  ref = {childRef}/>
     
     <p> This is parent </p>
     <button onClick={()=>{
      handleOpenModal(true);
     }}>Open modal</button>
    </>
  )
}

export default App
