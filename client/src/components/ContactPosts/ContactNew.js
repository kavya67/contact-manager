import React from 'react'
import axios from '../../config/config'
import {addContact} from '../../actions/contactsAction'
import {connect} from 'react-redux'
import ContactForm from './contactForm'

class ContactNew extends React.Component{
    constructor(props){

        super(props)
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(formData){
        console.log(formData)
        axios.post(`/contacts`, formData , {
            headers: {
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
            .then(response=>{
                const contact = response.data
                this.props.dispatch(addContact(contact))
                this.props.history.push(`/users/account`)
            })
    }
    render(){
 
        return(
            <div>
                
                <ContactForm handleSubmit={this.handleSubmit}/>
                
            </div>
        )
    }
}

export default connect()(ContactNew)