const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//connect to db
mongoose.connect(`mongodb://localhost:27017/contact-manager`,{useNewUrlParser:true})
.then(()=>{
    console.log('connected to db')
})
.catch(()=>{
    console.log('error connecting to db')
})