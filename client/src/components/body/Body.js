import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import ActivationEmail from './auth/ActivationEmail'
import NotFound from '../utils/NotFound/NotFound'

import ForgotPass from '../body/auth/ForgotPassword'
import ResetPass from '../body/auth/ResetPassword'

import Profile from '../body/profile/Profile'
import EditUser from '../body/profile/EditUser'



import {useSelector} from 'react-redux'

//import ContactUs from "./ContactUs";
import Categorypage from "./Categorypage";


import Home from "./Home";
import ServiceProvider from "./ServiceProvider";
//import Nav from "./Nav";
import PaymentForm from "./Paymentform";

function Body() {
    const auth = useSelector(state => state.auth)
    const {isLogged, isAdmin} = auth
    return (
        <section>
            <Switch>
            <Route path="/" exact component={() => <Home />} />
            

                <Route path="/login" component={isLogged ? NotFound : Login} exact />
                <Route path="/register" component={isLogged ? NotFound : Register} exact />

                <Route path="/forgot_password" component={isLogged ? NotFound : ForgotPass} exact />
              

                <Route path="/user/activate/:activation_token" component={ActivationEmail} exact />

                <Route path="/profile" component={isLogged ? Profile : NotFound} exact />
                <Route path="/edit_user/:id" component={isAdmin ? EditUser : NotFound} exact />
               
         
          
          <Route path="/payment" exact component={() => <PaymentForm />} />
          <Route path="/categpage" exact component={() => <Categorypage />} />
          <Route path="/serviceprovider" exact component={() => <ServiceProvider />}  />
          <Route path="/user/reset/:token" component={isLogged ? NotFound : ResetPass} exact />

            </Switch>
        </section>
    )
}

export default Body
