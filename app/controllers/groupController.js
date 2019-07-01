// const express = require('express')
// const router = express.Router()
// const Group = require('../models/group')
// const authenticateUSer = require('../middleware/authenticateUser')

// router.get('/', authenticateUSer, (req,res)=>{
//     const {user} = req
//     Group.find({
//         user: user._id,
//     })
//         .then(groups=>res.send(groups))
//         .catch(err=>res.send(err))
// })

// router.post('/', (req,res)=>{
//     const body = req.body
//     const group = new Group(body)
//     group.save()
//         .then(group=>res.send(group))
//         .catch(err=>res.send(err))
// })

// router.get('/:id',authenticateUSer, (req,res)=>{
//     const id = req.params.id
//     Group.findOne({
//         user: req.user._id,
//         _id: id
//     })
//         .then(group=>res.send(group))
//         .catch(err=>res.send(err))
// })

// router.put('/:id',authenticateUSer, (req,res)=>{
//     const id = req.params.id
//     const body = req.body
//     Group.findByOneAndUpdate({
//         user: req.user._id,
//         _id: id
//     }, {$set: body}, {new: true})
//         .then(group=>res.send(group))
//         .catch(err=>res.send(err))
// })

// router.delete('/:id',authenticateUSer, (req,res)=>{
//     const id = req.params.id
//     Group.findByOneAndDelete({
//         user: req.user._id,
//         _id: id
//     })
//         .then((group)=>res.send(group))
//         .catch(err=>res.send(err))
// })

// module.exports = router