import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'

import RegisterForm  from './components/Users/Register'
import LoginForm from './components/Users/Login'
import Account from './components/Users/Account'
import Logout from './components/Users/Logout'

class App extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <h2>{this.props.msg}</h2>
                        <ul>
                            {_.isEmpty(this.props.user)? (
                                <div>
                                    <Link to="/users/login">Login</Link> <br/>
                                    <Link to="/users/register">Register</Link>
                                    
                                </div>
                            ) : (
                                <div>
                                   <Link to="/users/account">Account</Link>
                                   <Link to="/users/logout">Logout</Link>
                                   
                                </div>
                            )}
                        </ul>

                        <Switch>
                            <Route path="/users/login" component={LoginForm} exact/>
                            <Route path ="/users/register" component={RegisterForm} exact/>
                            <Route path="/users/account" component={Account} exact/>
                            <Route path="/users/logout" component={Logout} exact/>
                        </Switch>
                </BrowserRouter>
            </div>
        )
    }

}

const mapStateToProps = (state)=>{
    return {
        user:state.user,
        msg: 'Redux User Authnetication'
    }
}


export default connect(mapStateToProps)(App)