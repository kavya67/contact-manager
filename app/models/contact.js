const mongoose = require('mongoose')
//schema
const Schema = mongoose.Schema
// const Group = require('./group')


const ContactSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    
})

// ContactSchema.post('save', function(next){
//     const contact = this
//     Group.findById(contact.group)
//         .then(function(group){
//             group.contacts.push({contact: contact._id})
//             group.save()
//         })
//             .then(function(){
//                 next()
//             })
   
// })

//model based on the schema

const Contact = mongoose.model('Contact', ContactSchema)
module.exports = Contact