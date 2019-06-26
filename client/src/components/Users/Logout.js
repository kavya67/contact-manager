import React from 'react'
import {connect} from 'react-redux'
import axios from '../../config/config'
import {resetUser} from '../../actions/usersAction'


class Logout extends React.Component{

    componentDidMount(){
        axios.delete(`/users/logout`,{
            headers:{
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
            .then(response=>{
                console.log(response.data)
                localStorage.removeItem('userAuthToken')
                this.props.dispatch(resetUser())
                this.props.history.push('/users/login')
            })

    }
    render(){
        return(
            <div>
                <p>{this.props.user.username} is logging out...</p>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        user:state.user
    }
}

export default connect(mapStateToProps)(Logout)