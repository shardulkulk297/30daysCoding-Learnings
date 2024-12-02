import React, { createContext } from 'react'
import B from './B'

const GreetContext = createContext();
const GreetContext2 = createContext();

const A = () => {
    const greet = "Pokemon"
    const greet2 = "Ash"
  return (
    <div>
      COMPONENT A
      <GreetContext.Provider value = {{greet, greet2}}>
      {/* <GreetContext2.Provider value = {greet2}> */}
      <B  />
      {/* </GreetContext2.Provider> */}
      </GreetContext.Provider>
    </div>
  )
}

export {GreetContext}
export default A

