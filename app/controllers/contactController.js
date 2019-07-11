const express = require('express')
const router = express.Router()
const Contact = require('../models/contact')
const authenticateUser = require('../middleware/authenticateUser')


router.get('/', authenticateUser, (req,res)=>{
    console.log(req.user._id)
    Contact.find({
                user: req.user._id
            })
                .then(function (contacts) {
                    res.send(contacts)
                    console.log(contacts)
                })
                .catch(function (err) {
                    res.send(err)
                })

})

router.post('/', authenticateUser, (req,res)=>{
     const body = req.body //_.pick(req.body, ['name', 'email', 'mobile']) // const { body } = req 
    const contact = new Contact(body)
    contact.user = req.user._id
    contact.save()
        .then(function (contact) {
            res.send({
                contact,
                notice: 'successfully created a contact'
            })
        })
        .catch(function (err) {
            res.send(err)
        })

})



router.get('/:id',authenticateUser,(req,res)=>{
    const id = req.params.id
    
    Contact.findOne({
        user: req.user._id,
        _id: id
    })
    .then((contact)=>{
        res.json(contact)
    })
    .catch((err)=>{
        res.json(err)
    })
})



router.put('/:id',authenticateUser,(req,res)=>{
    const id = req.params.id
    const body = req.body
    Contact.findOneAndUpdate({
        user: req.user._id,
        _id: id
    },{$set:body},{new:true})
    .then((contact)=>{
        res.json({
            contact,
            notice:"updated successfully"
        })
    })
    .catch((err)=>{
        res.json(err)
    })
})

router.delete('/:id',authenticateUser,(req,res)=>{
    const id = req.params.id
    Contact.findOneAndDelete({
        user: req.user._id,
        _id: id
    })
    .then((contact)=>{
        res.json({
            contact,
            notice:"deleted susccessfully"
        })
        .catch((err)=>{
            res.json(err)
        })
    })
})

module.exports = router