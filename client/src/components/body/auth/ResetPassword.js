import React, {useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import {isLength, isMatch} from '../../utils/validation/Validation'
import Nav from "../Nav"
import  "./reset.css"
//import  "./footer.css"

const initialState = {
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function ResetPassword() {
    const [data, setData] = useState(initialState)
    const {token} = useParams()

    const {password, cf_password, err, success} = data

    const handleChangeInput = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err: '', success: ''})
    }


    const handleResetPass = async () => {
        if(isLength(password))
            return setData({...data, err: "Password must be at least 6 characters.", success: ''})

        if(!isMatch(password, cf_password))
            return setData({...data, err: "Password did not match.", success: ''})
        
        try {
            const res = await axios.post('/user/reset', {password}, {
                headers: {Authorization: token}
            })

            return setData({...data, err: "", success: res.data.msg})

        } catch (err) {
            err.response.data.msg && setData({...data, err: err.response.data.msg, success: ''})
        }
        
    }


    return (



        
        <div > 
        
  
            <h2>Reset Your Password</h2>
            

            <div>
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}

                
           
            
                <header id="top">
    <Nav />
    </header>
    
       <div className="wrapper">
        <div className="inner">
          
       
   
          <div className="form-holder">
                <label  htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" id="password" value={password}
                onChange={handleChangeInput} />
                </div><br></br>
         <div className="form-holder">
                <label htmlFor="cf_password">Confirm Password</label>
                <input type="password" className="form-control" name="cf_password" id="cf_password" value={cf_password}
                onChange={handleChangeInput} />         
   <br></br>   <br></br>
                <button onClick={handleResetPass}>Reset </button>
            </div>
            
            </div>
        </div>
        </div>
       </div>
    )
}

export default ResetPassword
