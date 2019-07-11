import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'

import RegisterForm  from './components/Users/Register'
import LoginForm from './components/Users/Login'
import Account from './components/Users/Account'
import Logout from './components/Users/Logout'
import Welcome from './components/Users/Welcome'

import ContactForm from './components/ContactPosts/contactForm'
import ContactEdit from './components/ContactPosts/contactEdit'
import ContactNew from './components/ContactPosts/ContactNew'



class App extends React.Component{
    render(){
        return(
            <div>
                <div className = "container">
                    <div className= "Row">
                        
                        <BrowserRouter>
                            <nav className="navbar navbar-dark bg-dark">
                                <div className = "col-md-6">
                                    <span className="navbar-brand mb-0 h3">{this.props.msg}</span>
                                </div>
                                
                                    <ul className = "navbar-nav">
                                        {_.isEmpty(this.props.user)? (
                                            <div>
                                            <div className = "col-md-3"><li className = "nav-item active"><Link to="/users/login" className="nav-link" >Login</Link></li></div>
                                            <div className = "col-md-3"><li className = "nav-item active "><Link to="/users/register" className="nav-link" >Register</Link></li></div>
                                                
                                            </div>
                                        ) : (
                                            <div>
                                            <li className = "nav-item active"><Link to="/users/account" className="nav-link" >Account</Link></li>
                                            <li className = "nav-item active"><Link to="/users/logout" className="nav-link" >Logout</Link></li>
                                            
                                            </div>
                                        )}
                                    </ul>
                            </nav>
                            <Switch>
                                <Route path = "/" component = {Welcome} exact/>
                                <Route path="/users/login" component={LoginForm} exact/>
                                <Route path ="/users/register" component={RegisterForm} exact/>
                                <Route path="/users/account" component={Account} exact/>
                                <Route path="/users/logout" component={Logout} exact/>
                                <Route path="/contacts" component={ContactForm} exact/>
                                <Route path = "/contacts/new" component = {ContactNew} exact/>
                                <Route path = "/contacts/edit/:id" component = {ContactEdit} exact/>
                            </Switch>
                    </BrowserRouter>
                
                    </div>
                </div>
            </div>
           
        )
    }

}

const mapStateToProps = (state)=>{
    return {
        user:state.user,
        msg: 'Contact Manager'
    }
}


export default connect(mapStateToProps)(App)