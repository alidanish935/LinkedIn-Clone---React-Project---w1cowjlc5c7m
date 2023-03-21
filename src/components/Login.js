import React, { useEffect, useState } from 'react'
import linkedInLogo from '../Images/linkedin-logo.png';
import { Link, useNavigate } from 'react-router-dom'
import menAndLap from '../Images/menwithlap.svg'
import './Login.css'
import Home from './Home';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [authentication, setAuthentication] = useState(false)
    const navigate = useNavigate();
    // const[email, setEmail]=useState('')
    console.log(email)
    console.log(password)
    const LoginFn = () => {

        // let emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        // let passwordPatern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

        // if(email){
        // //    return alert("Email is required")
        //    localStorage.setItem('email',email)

        // }
        // if(password){
        //     //   return  alert("Password is required")
        //         localStorage.setItem('password',password)

        //     }
        // else{
        //     if(!email.match(emailPattern)){
        //         alert('invalid email id.......')
        //     }else{
        //         setAuthentication(true)
        //         localStorage.setItem('email',email)
        //     }
        // }
        // if(!password){
        //   return  alert("Password is required")
        // }else{
        //     if(!password.match(passwordPatern)){
        //         alert('wrong password')
        //     }else{
        //         setAuthentication(true)
        //         localStorage.setItem('password',password)
        //     }
        // }
        // if(!authentication){
        //     return alert('invalid user.....')
        // }else{

        // }
        let temp = JSON.parse(localStorage.getItem('users'))
        for (let i = 0; i < temp.length; i++) {
            console.log('item.email', temp[i].email, 'item.password', temp[i].password)
            if (temp[i].email === email && temp[i].password === password) {
                alert("login successful.....")
                localStorage.setItem('loggedUser', email)
                setAuthentication(true);
                navigate('/home')
            }
        }

    }
    return (
        <div>
            <div>
                <img src={linkedInLogo} width='100px' height='80px' />
            </div>
            <div className='flex justify-center '>


                <div className=''>
                    <div className='LoginFormMain'>
                        <div className='signInHead'>Sign in</div>
                        <p className='stayUpdated'>Stay updated on your professional world</p>

                        <input className='loginpage__text' type="email" placeholder='Email or phone' onChange={e => setEmail(e.target.value)} /><br></br>
                        <input className='loginpage__text' placeholder='Password' type="password" onChange={e => setPassword(e.target.value)} /><br></br>

                        <a className='forPass' href="">Forgot password?</a><br></br>
                        <button className='login__button' onClick={LoginFn} >Sign in</button>
                        <div className='login__ordiv '>
                            <div className='login__dividor'></div>
                            <div className='login__or'>OR</div>
                            <div className='login__dividor'></div>
                        </div>
                    </div>
                    <div className='loginpage_signup'>New to Linkedln?<Link to='/signup'>Join now</Link> </div>

                </div>




            </div>
        </div>
    )
}

export default Login