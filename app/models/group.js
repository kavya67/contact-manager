const mongoose =  require('mongoose')
const Schema = mongoose.Schema

const groupSchema = new Schema({
    name : {
        type: String
    },
    contacts: [
        {
            contact:{
                type: Schema.Types.ObjectId,
                ref: 'Contacts'

        }
    }
        
    ]
})

const Group = mongoose.model('Group', groupSchema)

module.exports = Group