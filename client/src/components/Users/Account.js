import React from 'react'
import axios from '../../config/config'
import {Link} from 'react-router-dom'
import { setUser} from '../../actions/usersAction'
import {connect} from 'react-redux'
import { setContact } from '../../actions/contactsAction';

class Account extends React.Component{
    
    componentDidMount(){
        axios.get(`/users/account`,{
            headers:{
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
        .then(response=>{
            console.log("Response data" ,response.data)
            const user = response.data
            this.props.dispatch(setUser(user))
        })
        .catch(err=>console.log(err))

        axios.get(`/contacts`, {
            headers: {
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
            .then(response=>{
                console.log("contacts acc",response.data)
                const contacts = response.data
                this.props.dispatch(setContact(contacts))

            })

        
    }
    render(){
        return(
            <div>
                <h1>welcome {this.props.user.username}!</h1>
                <h2>Contacts - {this.props.contacts.length} </h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {this.props.contacts.map(contact=>{
                                return  <tr key = {contact._id}>
                                        <td>{contact.name}</td>
                                        <td>{contact.mobile}</td>
                                        <td>{contact.email}</td>
                                        </tr>
                                    
                            })}
                        
                    </tbody>
                </table>

                
                
                <h3><Link to = '/contacts'>Add Contact</Link></h3>
            </div>
        )
    }

}

const mapStateToProps = (state)=>{
    return {
        user:state.user,
        contacts: state.contacts
    }
}

export default connect(mapStateToProps)(Account)