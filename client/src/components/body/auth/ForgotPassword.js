import React, {useState} from 'react'
import axios from 'axios'
import {isEmail} from '../../utils/validation/Validation'
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import Nav from "./Nav";

const initialState = {
    email: '',
    err: '',
    success: ''
}

function ForgotPassword() {
    const [data, setData] = useState(initialState)

    const {email, err, success} = data

    const handleChangeInput = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err: '', success: ''})
    }

    const forgotPassword = async () => {
        if(!isEmail(email))
            return setData({...data, err: 'Invalid emails.', success: ''})
            
        try {
            const res = await axios.post('/user/forgot', {email})

            return setData({...data, err: '', success: res.data.msg})
        } catch (err) {
            err.response.data.msg && setData({...data, err:  err.response.data.msg, success: ''})
        }
    }
    
    return (
        <div >
           

            <div >
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
                <link rel="stylesheet" type="text/css" href="assets/css/form1.css"></link>
    <header id="top">
    <Nav />
    </header>
       <div className="wrapper">
        <div className="inner">
          <div className="image-holder">
            <img src="assets/img/login/registration-form-4.jpg" height="450px" alt="" />
          </div>
         <br></br>
         <br></br>   <br></br>   <br></br>   <br></br>   <br></br>   <br></br>   <br></br>
            <div className="form-holder ">
                <label htmlFor="email" ></label>
                <input type="email"   className="form-control" placeholder="Enter your e-mail address"name="email" id="email" value={email}
                onChange={handleChangeInput} />
                <button onClick={forgotPassword}>Verify</button>
                </div>
                
            </div>
        </div>
        </div>
        </div>
    )
}

export default ForgotPassword
 