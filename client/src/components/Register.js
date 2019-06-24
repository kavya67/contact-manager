import React from 'react'
import axios from '../config/config'

class UserRegister extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',
            email:'',
            password:''
        }
    }
    render(){
        return(
            <div>
                form goes here
            </div> 
        )
    }
}