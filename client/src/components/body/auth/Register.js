import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import {isEmpty, isEmail, isLength, isMatch} from '../../utils/validation/Validation'

import Nav from "./Nav";
const initialState = {
    name: '',
    email: '',
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function Register() {
    const [user, setUser] = useState(initialState)

    const {name, email, password,cf_password, err, success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }


    const handleSubmit = async e => {
        e.preventDefault()
        if(isEmpty(name) || isEmpty(password))
                return setUser({...user, err: "Please fill in all fields.", success: ''})

        if(!isEmail(email))
            return setUser({...user, err: "Invalid emails.", success: ''})

        if(isLength(password))
            return setUser({...user, err: "Password must be at least 6 characters.", success: ''})
        
        if(!isMatch(password, cf_password))
            return setUser({...user, err: "Password did not match.", success: ''})

        try {
            const res = await axios.post('/user/register', {
                name, email, password
            })

            setUser({...user, err: '', success: res.data.msg})
        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }

    return (
        <div className="login_page">
            <h2>Register</h2>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}


            <link rel="stylesheet" type="text/css" href="assets/css/form.css"></link>
    <header id="top">
    <Nav />
    </header>
       <div className="wrapper">
        <div className="inner">
          <div className="image-holder">
            <img src="assets/img/login/registration-form-4.jpg" alt="" />
          </div>
          <form onSubmit={handleSubmit}>
        
            <div className="form-holder active">
              <input type="text" placeholder="name" className="form-control"id="name"
                    value={name} name="name" onChange={handleChangeInput}
               />
            </div>
            <div className="form-holder">
              <input type="text" placeholder="e-mail" className="form-control" id="email"
                    value={email} name="email" onChange={handleChangeInput}/>
            </div>
            <div className="form-holder">
              <input type="password" placeholder="Password" className="form-control" style={{fontSize: '15px'}} id="password"
                    value={password} name="password" onChange={handleChangeInput} />
            </div>

            <div className="form-holder">
              <input type="password" placeholder="cf_Password" className="form-control" style={{fontSize: '15px'}}id="cf_password"
                    value={cf_password} name="cf_password" onChange={handleChangeInput}/>
                    </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" defaultChecked required /> I agree all statement in Terms &amp; Conditions
                <span className="checkmark" />
              </label>
            </div>
            <div className="form-login">
              <button type="submit">Sign up</button>
              <p>Already an account? <Link to="/login">Login</Link></p>
            </div>
          </form>
        </div>
      </div>
            

                
        </div>
    )
}

export default Register
