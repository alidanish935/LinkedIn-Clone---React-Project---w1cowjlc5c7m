import React, { useEffect, useState } from 'react'
import linkedInLogo from '../Images/linkedin-logo.png';
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import Home from './Home';

const Login = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [authentication, setAuthentication] = useState(false)
    const navigate = useNavigate();
    console.log(name)
    console.log(password)
    const LoginFn = () => {

        let passwordPatern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

        if (!name || !password) {
            return alert("All the input must be filled.......")
        }
        else if (!password.match(passwordPatern)) {
            alert('Password must be alpha-numric')
        }
        else {
            
            let logstatus = true
            let temp = JSON.parse(localStorage.getItem('users'))
            for (let i = 0; i < temp.length; i++) {
                console.log('item.name', temp[i].name, 'item.password', temp[i].password)
                // if (temp[i].name !== name && temp[i].password !== password) {
                //     alert('Please check your name or password')
                //     break

                // } else 
                if (temp[i].name === name && temp[i].password === password) {
                    logstatus = false;
                    alert("login successful.....")
                    localStorage.setItem('loggedUser', name)
                    setAuthentication(true);
                    navigate('/home')
                    break
                }
                // else{
                //     alert("Please create an account or check your details")
                // }
            }
            if(logstatus){
                alert("Please create an account or check your details")
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

                        <input className='loginpage__text' type="text" placeholder='Name ' onChange={e => setName(e.target.value)} /><br></br>
                        <input className='loginpage__text' placeholder='Password must be alpha numric' type="password" onChange={e => setPassword(e.target.value)} /><br></br>

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