const express = require('express')
const router = express.Router()
const Contact = require('../models/contact')
const authenticateUSer = require('../middleware/authenticateUser')

router.get('/',authenticateUSer,(req,res)=>{
    const {user} = req
    Contact.find({
        user: user._id
    })
    .then((contacts)=>{
        res.json(contacts)
    })
    .catch((err)=>{
        res.json(err)
    })
})

router.get('/:id',authenticateUSer,(req,res)=>{
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

router.post('/',authenticateUSer,(req,res)=>{
    const body = req.body
    const contact = new Contact(body)
    contact.save()
    .then((contact)=>{
        res.json({
            contact,
            notice:'added successfully'
        })
    })
    .catch((err)=>{
        res.json(err)
    })
})

router.put('/:id',authenticateUSer,(req,res)=>{
    const id = req.params.id
    const body = req.body
    Contact.findByOneAndUpdate({
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

router.delete('/:id',authenticateUSer,(req,res)=>{
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