import React from 'react'
import { useState } from 'react'
const Formm = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [gender, setgender] = useState('')
  const [error, seterror] = useState('')

    const validateForm = ()=>{
        const errors = {};

        if(!name)
        {
            errors.name = "Name is required";
        }

        if(!email)
        {
            errors.email = "email is required";
        }
        else if(!/\S+@\S+\.\S+/.test(email))
        {
            errors.email = "Email is Invalid";
        }

        if(!password)
        {
            errors.password = "Password is required"
        }
        else if(password.length <= 6)
        {
            errors.password = "Password length must be greater than 6";
        }

        console.log(errors);
        return errors;

    }


    const handleSubmit = (e)=>{

        e.preventDefault();
        const validationErrors = validateForm();

        if(Object.keys(validationErrors).length > 0)
        {
            seterror(validationErrors)

        }
        console.log(error);
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
                {error.name}
            </div>

            <div>
                <label  htmlFor="">Email</label>
                <input onChange={(e)=>{
                    setemail(e.target.value)
                }} type="email" />
                 {error.email}
            </div>

            <div>
                <label htmlFor="" >Password</label>
                <input onChange={(e)=>{
                    setpassword(e.target.value)
                }}  type="password" />
                 {error.password}
            </div>
            
            <div>
                <label htmlFor="">Confirm Password</label>
                <input   type="password" />
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


