import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

function App() {

  
  const [clicked, setclicked] = useState()
  const [count, setcount] = useState(0)
  
  useEffect(()=>{
    alert("We are in useState");
  })
  return (
    <div className="App">
     <button onClick={()=>setclicked("Pokemon")}>Pokemon</button>
     <br/>
     <button onClick={()=> setclicked("Sun")}>Sun</button>
     <br/>
     <button onClick={()=>setclicked("moon")}>And moon</button>
      <button onClick={()=> setcount(count+1)}>Increment</button>

     <h1>{clicked}</h1>
     <h1>{count}</h1>
    </div>
  );
}

export default App;
