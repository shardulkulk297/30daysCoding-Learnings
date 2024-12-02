import React, { useContext } from 'react'
import { GreetContext} from './A'

const C = () => {
    console.log()
    const useCon = useContext(GreetContext)
    // const useCon2 = useContext(GreetContext2)
  return (
    <div>
      C

      <h1>Greet: {useCon.greet} & {useCon.greet2}</h1>

      {/* <GreetContext.Consumer>
        {
            (val)=>{
                return (
                    <GreetContext2.Consumer>
                        {(val2)=>{
                            return <h1>{val} & {val2}</h1>
                        }
                    }
                    </GreetContext2.Consumer>
                )

            }
        }
      </GreetContext.Consumer> */}

    </div>
  )
}

export default C
