import React from 'react'
import axios from '../../config/config'
import {connect} from 'react-redux'
import ContactForm from './contactForm'

class contactEdit extends React.Component{
    constructor(props){
        super(props)
        // this.state = {
        //     contactToEdit: {}
        // }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

   

    handleSubmit(formData){
        console.log('edit id', this.props.contact._id)
        axios.put(`/contacts/${this.props.contact._id}`, formData , {
            headers : {
                'x-auth' : localStorage.getItem('userAuthToken')
            }
        })
            .then(response=>{
                if(response.data.hasOwnProperty('errors')){
                    console.log(response.data.errors)
                   
                }else{
                    this.props.history.push(`/users/account`)
                }
            })

    }
    
    render(){
    //    console.log('contact edit',this.props.contact)
        return(
            <div>
                
                <ContactForm contact = {this.props.contact} handleSubmit= {this.handleSubmit}/>
        </div>
        )
    }
}

const mapStatetoProps = (state, props)=>{
    return{
        contact: state.contacts.find(contact=>{
                return contact._id === props.match.params.id
        })
    }
}

export default connect(mapStatetoProps)(contactEdit)