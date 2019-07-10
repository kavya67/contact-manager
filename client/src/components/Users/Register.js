import React from 'react'
import axios from '../../config/config'


class RegisterForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
                username:'',
                email:'',
                password:''
            }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        e.persist()
        this.setState(()=>({
            [e.target.name]: e.target.value
        }))

    }
    

    handleSubmit(e){
        e.preventDefault()
        const formData = {
            username:this.state.username,
            email: this.state.email,
            password: this.state.password

        }
                       
        axios.post(`/users/register`, formData)
            .then(response=>{
                if(response.data.errors){
                    alert(response.data.message)
                        }else{
                                this.props.history.push('/users/login')
                                    }
                                        })
    }
    render(){
        return(
            <div >
                <h1 className="display-4 text-center">Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className = "form-group">
                    <label>
                        username </label>
                        <input type="text" className = "form-control" name="username" value={this.state.username} onChange={this.handleChange}/>
                    
                    </div>
                    <div className = "form-group">
                    <label>
                        Email </label>
                        <input type="text" className = "form-control" name="email" value = {this.state.email} onChange={this.handleChange}/>
                    
                    </div>
                   
                    <div className = "form-group">
                    <label>
                        Password  </label>
                        <input type="password" className = "form-control" name = "password" value={this.state.password} onChange={this.handleChange}/>
                   
                    </div>
                   
                    <label>
                        <input type="submit"/>
                    </label>
                    
                </form>
            </div> 
        )
    }
}

export default RegisterForm