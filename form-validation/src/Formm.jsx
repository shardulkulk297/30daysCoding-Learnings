import React from 'react'
import { useState } from 'react'
const Formm = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [gender, setgender] = useState('')
  



    const handleSubmit = (e)=>{

        e.preventDefault();
        console.log("Form Submitted Successfully");
    }
  
    return (
    <div className='container'>

        
        <h1>Form Validation</h1>

        <form onSubmit={handleSubmit}>

            <div>
                <label htmlFor="" >Name</label>
                <input onChange={(e)=>{
                    setname(e.target.value);
                }} type="text" />
            </div>

            <div>
                <label onChange={(e)=>{
                    setemail(e.target.value)
                }} htmlFor="">Email</label>
                <input type="email" />
            </div>

            <div>
                <label htmlFor="" onChange={(e)=>{
                    setpassword(e.target.value)
                }}>Password</label>
                <input  type="password" />
            </div>
            
            <div>
                <label htmlFor="">Confirm Password</label>
                <input  type="password" />
            </div>
            
            <div>
                <label htmlFor="" >Gender</label>
                <select onChange={()=>{
                    setgender(e.target.value)
                }} name="" id="">
                    <option value="">Male</option>
                    <option value="">Female</option>
                    
                </select>
            </div>

            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>



      
    </div>
  )
}

export default Formm


