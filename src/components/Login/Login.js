import { useState } from "react"
import logo from "../images/logo.png"
import './Login.css'
import {auth} from "../../firebase"
import { Link,useHistory } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth"
const Login=()=>{
const [email,setEmail]= useState('')
const[password,setPassword]=useState('')
const[error,setError] =useState("")
const history=useHistory()
const signin=(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        // console.log(userCredential)
        history.push('/');
    }).catch((error)=>{
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
        {error && <h2>{error.message}</h2>}
        <form className="login-form" onSubmit={signin}>
            <label for="email">Email</label>
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
            <label for='password'>password</label>
            <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
            <button type="submit">continue</button>
            <p>by continuing you agree to our condition of use and privacy notice</p>
        </form>
        <div className="creat-account-section">
        <p>new here</p>
      <Link to='/register'><button>create an account</button> </Link>  
     </div>
     </div>
     
    
    </section>
    
    </>
)
}
export default Login

