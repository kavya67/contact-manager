import React from 'react'
import axios from '../../config/config'

class LoginForm extends React.Component{
    constructor(){
        super()
        this.state = {
            email:'',
            password:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        e.persist()
        this.setState(()=>({
            [e.target.name]:e.target.value
        }))
    }

    handleSubmit(e){
        e.preventDefault()
        const formData = {
                email:this.state.email,
                password:this.state.password
        }
        axios.post(`/users/login`,formData)
            .then(response=>{
                // console.log(response.data.token)
                if(response.data.token){
                        const token = response.data.token
                        localStorage.setItem('userAuthToken',token)
                        this.props.history.push('/users/account')
                }else{
                    
                        alert('Invalid email / password')
                }
            })

    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                        <input type="text" value={this.state.email} name='email' onChange={this.handleChange}/>
                    </label><br/>
                    <label>
                        Password:
                        <input type="password"  value= {this.state.password} name = 'password' onChange={this.handleChange}/>
                    </label>
                    <label>
                        <input type = "submit" />
                    </label>
                </form>
            </div>
        )
    }
}
export default LoginForm