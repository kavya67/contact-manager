const User = require('../models/user')
const authenticateUser = function(req, res, next){
    const token = req.header('x-auth')
    User.findByToken(token)
        .then(user=>{
           if(user){
                req.user = user,
                // console.log(req.user)
                req.token = token
                next()
           }else{
               res.status('401').send('Token not available')
           }
        })
        .catch(err=>res.send('401').send(err))

        
}

module.exports = {
    authenticateUser
}


module.exports = authenticateUser