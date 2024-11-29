import React, { useState } from 'react';


function App() {

  const [count, setcount] = useState(0)

  const handleCount = () =>{
    setcount(count + 1);

  }
  console.log(useState());
  return (
    <div >

      <h1>
        {count}
      </h1>
      <button onClick={handleCount}>+</button>


     
    </div>
  );
}

export default App;
