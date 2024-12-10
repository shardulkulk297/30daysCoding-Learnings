import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react'
import UseRefDOM from './UseRefDOM'
import UseRef2 from './UseRef2'

function App() {
  
  const ref = useRef(0);
  const [Input, setInput] = useState("")
  // const [Renders, setRenders] = useState(0);
  const renders = useRef(0);
  console.log(ref);

  // useEffect(()=>{
  //   setRenders(Renders + 1);
  // })

  useEffect(()=>{
    renders.current = renders.current + 1;
  })
  return (
    <>

    <div>
      <input type="text" value={Input} onChange={(e)=>{
        setInput(e.target.value);
      }} />
      <p>The component rendered: {renders.current}</p>

      <UseRefDOM />
      <UseRef2 />
    </div>

    




      

       
    </>
  )
}

export default App
