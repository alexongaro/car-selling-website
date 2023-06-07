import logo from "../images/logo.png"
import React,{useState ,} from "react"
import {auth} from "../../firebase"
import {useHistory} from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth"



const Register=()=>{
const history=useHistory()
const [email,setEmail]= useState('')
const[password,setPassword]=useState('')
const [error,setError]=useState('')
const signup=(e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        history.push('/');
    }).catch((error)=>{
        console.log(error)
        setError(error)
    })

}
    
    
    return(
        <>
        <section className="login-container">
        <div className="">
            <div>
                <img src={logo} alt=""/>
            </div>
            {setError && <h2>{error.message}</h2>}
            <form className="login-form" onSubmit={signup}>
                <label for="email">Email</label>
                <input type="email" value={email} name="email" onChange={(e)=>setEmail(e.target.value)} required/>
                <label for='password'>password</label>
                <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                <p>by continuing you agree to our condition of use and privacy notice</p>
                <div className="creat-account-section">
            <p>new here</p>
            <button>create an account</button>
         </div>
            </form>
            
         </div>
         
        
        </section>
        
        </>
    )
    }
    export default Register