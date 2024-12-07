import { useState } from 'react'
import Formm from "./Formm";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <Formm />

      </div>
    </>
  )
}

export default App
