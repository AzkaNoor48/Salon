import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import {dispatchLogin} from '../../../redux/actions/authAction'
import {useDispatch} from 'react-redux'
//import { GoogleLogin } from 'react-google-login';
//import FacebookLogin from 'react-facebook-login';
import Nav from "./Nav";
//import "../../../../public/assets/css/form1.css"

const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}

function Login() {
    const [user, setUser] = useState(initialState)
    const dispatch = useDispatch()
    const history = useHistory()

    const {email, password, err, success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }


    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('/user/login', {email, password})
            setUser({...user, err: '', success: res.data.msg})

            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            history.push("/")

        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }

    // const responseGoogle = async (response) => {
    //     try {
    //         const res = await axios.post('/user/google_login', {tokenId: response.tokenId})

    //         setUser({...user, error:'', success: res.data.msg})
    //         localStorage.setItem('firstLogin', true)

    //         dispatch(dispatchLogin())
    //         history.push('/')
    //     } catch (err) {
    //         err.response.data.msg && 
    //         setUser({...user, err: err.response.data.msg, success: ''})
    //     }
    // }

    // const responseFacebook = async (response) => {
    //     try {
    //         const {accessToken, userID} = response
    //         const res = await axios.post('/user/facebook_login', {accessToken, userID})

    //         setUser({...user, error:'', success: res.data.msg})
    //         localStorage.setItem('firstLogin', true)

    //         dispatch(dispatchLogin())
    //         history.push('/')
    //     } catch (err) {
    //         err.response.data.msg && 
    //         setUser({...user, err: err.response.data.msg, success: ''})
    //     }
    // }

    return (
        <div className="login_page">
            
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}

           
            
    <link rel="stylesheet" type="text/css" href="assets/css/form.css"></link>
    <header id="top">
    <Nav />
    </header>
       <div className="wrapper">
        <div className="inner">
          <div className="image-holder">
            <img src="assets/img/login/registration-form-4.jpg" height="450px" alt="" />
          </div>
          <form onSubmit={handleSubmit}>
            <h3>Sign In</h3>
            <div className="form-holder active">
              <input type="text" placeholder="e-mail" className="form-control" id="email"
                    value={email} name="email" onChange={handleChangeInput}/>
            </div>
            <div className="form-holder">
              <input type="password" placeholder="Password" className="form-control" style={{fontSize: '15px'}} 
                 id="password" value={password} name="password" onChange={handleChangeInput}
              />
            </div>
            <div className="row">
                    <button type="submit">Login</button><br></br>
                    <Link to="/forgot_password">Forgot your password?</Link>
                </div>
            <div className="form-login">
              
              <p>Don't Have an Account? <Link to="/register">Signup</Link></p>
            </div>
          </form>
        </div>
      </div>
    

            

            <div >
                {/* <GoogleLogin
                    clientId="1096165373598-60tqjh23500p6jui94cd1bk4n987uk86.apps.googleusercontent.com"
                    buttonText="Login with google"
                    onSuccess={responseGoogle} <div className="hr">Or Login With</div>
                    cookiePolicy={'single_host_origin'}
                /> */}
                
                {/* <FacebookLogin
                appId="Your facebook app id"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}  <p>New Customer? <Link to="/register">Register</Link></p>
                /> */}

            </div>

            
        </div>
    )
}

export default Login
