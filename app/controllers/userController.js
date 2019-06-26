const express =require('express')
const router = express.Router()
const User = require('../models/user')
const pick = require('lodash.pick')
const authenticateUSer = require('../middleware/authenticateUser')


router.post('/register', (req,res)=>{
    const body = req.body
    const user = new User(body)
    user.save()
        .then(user=>res.send(user))  
        // pick(user, 'username', 'email')
        .catch(err=>res.send(err))
})

router.post('/login', (req,res)=>{
    const body = req.body
    User.findByCredentials(body.email, body.password)
        .then(user=>user.generateToken())
            .then(token=>res.send({token}))
        .catch(err=> res.send(err))
})

router.get('/account',authenticateUSer, (req,res)=>{
    const {user} = req
    res.send(user)
})

router.delete('/logout', authenticateUSer, (req,res)=>{
    const {user,token} = req
    User.findByIdAndUpdate(user._id, {$pull: {tokens:{token:token}}} )
        .then(()=>res.send('successfullt logged out'))
        .catch(err=>res.send(err))
})

module.exports = router