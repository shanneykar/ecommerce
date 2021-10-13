import React,{ useState } from 'react';
import { auth } from './firebase';
import './Login.css'; 
import logo from './logo.jpg';
import { useHistory } from 'react-router-dom';

function Login() {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const history = useHistory();

    //login functionality
    const signIn = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push('/');
        }).catch(error=>alert(error.message))

    }

    //signup fuctionality
    const register = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                history.push('/');
            }
        }).catch(
            error=>alert(error.message)
        )
    }


    return (
        <div className="login">
            <img className="login__logo" src={logo} alt="logo"/>
            <div className="login__container">
                <h2>Sign In</h2>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} 
                    onChange={e=>setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password}
                    onChange={e=>setPassword(e.target.value)}/>
                    <button type="submit" className="login__signin" onClick={signIn}>Sign In</button>
                    
                    <button className="login__register" onClick={register}>Create an account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
