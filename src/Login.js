
import React, { useContext, useState } from 'react'
import axios from 'axios';
import { store } from './App';
import {Navigate} from 'react-router-dom';

const Login = () => {
    const [token,setToken] = useContext(store)
    const[data,setData] = useState ({
        
        email:'',
        password:'',
        

    })
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        axios.post('https://back-eszn.onrender.com/login',data).then(
            res => setToken(res.data.token)
        )
    }
    if(token){  
       return <Navigate to = '/myprofile'/>
    }
     return (
    <div>
        <center>
      <form onSubmit={submitHandler} >
<h3>Login Form</h3>


<input type = "email" onChange={changeHandler} name="email" placeholder='Email'/> <br/>
<input type = "password" onChange={changeHandler} name="password" placeholder='password'/> <br/>

<input type = "submit" value="login" /><br/>

      </form>
      </center>
    </div>
  )
}

export default Login

