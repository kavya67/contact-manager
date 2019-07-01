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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        username:
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" value = {this.state.email} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Password:
                        <input type="password" name = "password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <label>
                        <input type="submit"/>
                    </label>
                </form>
            </div> 
        )
    }
}

export default RegisterForm