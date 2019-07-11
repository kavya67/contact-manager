import React from 'react'



class ContactForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            mobile:'',
            email:''
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
            name: this.state.name,
            mobile: this.state.mobile,
            email: this.state.email
            
        }
        
        this.props.handleSubmit(formData)
       
        
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.contact){
            console.log('nextprops',nextProps.contact.name)
            this.setState(()=>({
                name: nextProps.contact.name,
                mobile: nextProps.contact.mobile,
                email: nextProps.contact.email
            }))
        }else {
            return null
        }
       
    }

    render(){
        return(
            <div>
                <h2 className="display-4 text-center">Contact Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className = "form-group">
                        <label>Name</label>
                        <input type="text" className = "form-control" value={this.state.name} name="name" onChange={this.handleChange}/>
                    </div>
                    
                    <div className = "form-group">
                        <label>mobile</label>
                        <input type="text" className = "form-control" value={this.state.mobile} name="mobile" onChange={this.handleChange}/>
                    </div>
                    
                    <div className = "form-group">
                        <label> Email </label>
                        <input type="text" className = "form-control" value={this.state.email} name="email" onChange={this.handleChange}/>
                    </div>
                    
                    <label>
                        <input type="submit"/>
                    </label>
                </form>
            </div>
        )
    }
}

export default ContactForm