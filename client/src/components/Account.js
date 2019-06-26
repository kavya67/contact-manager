import React from 'react'
import axios from '../config/config'
import { setUser} from '../actions/usersAction'
import {connect} from 'react-redux'

class Account extends React.Component{
    componentDidMount(){
        axios.get(`/users/account`,{
            headers:{
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
        .then(response=>{
            console.log(response.data)
            const user = response.data
            this.props.dispatch(setUser(user))
        })
        .catch(err=>console.log(err))
    }
    render(){
        return(
            <div>
                <h1>Contacts</h1>
                <p>{this.props.user.username}</p>
            </div>
        )
    }

}

const mapStateToProps = (state)=>{
    return {
        user:state.user
    }
}

export default connect(mapStateToProps)(Account)