import React, { useEffect, useRef } from 'react'

const UseRef2 = () => {
    // const [count, setcount] = useState(0);
    const count = useRef(0);
    
    useEffect(()=>{
        console.log("The component have been rendered");
    })
    const handle =()=>{
        // setcount(count + 1);
        count.current  = count.current + 1;
        console.log(`Clicked ${count.current} times`);
    }
  return (
    <div>
      <button onClick={handle}>Press me</button>
    </div>
  )
}

export default UseRef2
