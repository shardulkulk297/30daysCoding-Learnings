import React from 'react'

const Formm = () => {
  return (
    <div className='container'>

        
        <h1>Form Validation</h1>

        <form action="">

            <div>
                <label htmlFor="">Name</label>
                <input type="text" />
            </div>

            <div>
                <label htmlFor="">Email</label>
                <input type="email" />
            </div>

            <div>
                <label htmlFor="">Password</label>
                <input type="password" />
            </div>
            
            <div>
                <label htmlFor="">Confirm Password</label>
                <input type="email" />
            </div>
            
            <div>
                <label htmlFor="">Email</label>
                <input type="email" />
            </div>
        </form>



      
    </div>
  )
}

export default Formm


