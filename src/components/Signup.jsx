import React, { useEffect, useState } from 'react'
import './Login.css'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import linkedInLogo from '../Images/linkedin-logo.png';


const Signup = () => {
    const initialData = {
        email:'',
        name: '',
        password:''
    }
    const [status, setStatus] = useState(false);
    const [formdata, setFormdata] = useState(initialData)
    const navigate = useNavigate()
    
 console.log('email...', formdata.email,'name',formdata.name, 'password...',formdata.password)
    const updateFn = (e)=>{
        console.log('signup data ....',e.target.name,'value - ',e.target.value)
        let obj = {}
        obj[e.target.name]=e.target.value
        setFormdata({...formdata,...obj})
    }

    const signupFn = () => {
        if (!formdata.name || !formdata.password) {
            return alert("name is required")

        } else {
            setStatus(true)
            alert('Registered Successfully.............')
            let temp =JSON.parse(localStorage.getItem('users'))||[]
            localStorage.setItem('users',JSON.stringify([...temp,formdata]))
            localStorage.setItem('name', formdata.name)
            navigate('/')
            

        }
        useEffect(()=>{
            let temp = JSON.parse(localStorage.getItem('users'))
            console.log(temp)
        },[status])
        // if (!password) {
        //     return alert("Password is required")

        // } else {

        // }
        // if(name && email){
        // }
    }
    return (
        <div>
            <div className='signup_maindiv '>
                <div className='signup_main '>
                    <div className='signup_logo'>
                        <img className='loginpage__logo ' src={linkedInLogo} width='100px' />

                    </div>
                    <div className='signup_firsttext'>
                        Sign up to connect with people.<br />
                    </div>

                    <div className='signup_input'>
                        <input type='text' name='email' className='loginpage__text'  onChange={updateFn} placeholder='Mobile Number or Email' /><br />
                        <input type='text' name='name' className='loginpage__text' onChange={updateFn} placeholder='Full Name' /><br />
                        <input type='text' className='loginpage__text' placeholder='username' /><br />
                        <input type='password' name='password' className='loginpage__text' onChange={updateFn} placeholder='Password' /><br />

                    </div>
                    <div className='signup_info'>

                        By signing up, you agree to our Terms , Privacy Policy and Cookies Policy
                    </div>
                    <button className='login__button' onClick={signupFn}>Sign up</button>


                </div>
            </div>
            <div className='loginpage__loginUpDiv'>
                <div className='loginpage_login'>Have an account?<Link to='/'>Log In</Link></div>
            </div>
            

        </div>
    )
}

export default Signup