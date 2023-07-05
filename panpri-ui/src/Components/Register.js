import React, { useState,createContext } from 'react'
import { Link,Outlet,useNavigate } from 'react-router-dom';
import ThankYou from './ThankYou';
import { MyContext } from './MyContext';
export default function Register() {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();
    const[submitted,setSubmitted]=useState(false)
    const[error,setError]=useState(false)
    const Name=createContext();
    const handleName=(e)=>{
        setName(e.target.value)
        setSubmitted(false)
    }

    const handleEmail=(e)=>{
        setEmail(e.target.value)
        setSubmitted(false)
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value)
        setSubmitted(false)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name==='' || email==='' || password==='')
        {
            setError(true)
        }
        else{
            setSubmitted(true)
            setError(false)
        }
    }
    const successMessage=()=>{
        return (
            <div className='success' style={{display:submitted ? '':'none'}}>
                <h1>User {name} successfully Registered</h1>
            </div>
        )
    }
    const errorMessage=()=>{
        return(
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        )
    }
  return (
    <div className='Form'>
        <div>
            <h1>User Registration</h1>

        </div>
        <div className='messages'>
            {errorMessage()}
            {successMessage()}
        </div>
        <form>
            <label className='label'>Name</label>
            <input onChange={handleName} className='input' value={name} type='text'></input>
            <label className='label'>Email</label>
            <input onChange={handleEmail} className='input' value={email} type='text'></input>
            <label className='label'>Password</label>
            <input onChange={handlePassword} className='input' value={password} type='text'></input>
            <div>
            {/* <button to='Thank' onClick={handleSubmit,navigate} className="btn1"
                        type="submit">
                    Submit
            </button> */}
            <button className='btn1' onClick={()=>navigate('/thankyou')}>Submit</button>
             {/* <Link to="/thankyou" onClick={handleSubmit} className="btn1">Submit</Link> */}
            </div>
            <div></div>
        </form>
        <div>
        
            <MyContext.Provider value={name}>
                <ThankYou />
            </MyContext.Provider>
            {/* <ThankYou data={{name,email,password}} /> */}
            {/* You Entered {name} ,{email} and {password} */}
        </div>
    </div>
  )
  
}

