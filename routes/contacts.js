var express = require('express')
var router = express.Router()

var ContactService = require('../service/contact-service')

router.get('/', function (req, res) {
    res.json({ result: ContactService.prototype.find()})
})

router.get('/:id', function (req,res) {
    res.json({ result: ContactService.prototype.findOne(req.params.id) })
})

router.post('/', function (req,res) {
    ContactService.prototype.create(req.body)
    res.json({ result:  'done'})
})

router.put('/', function(req,res) {
    ContactService.prototype.update(req.body)
    res.json({result: 'done'})
})

router.delete('/:id', function (req,res) {
    ContactService.prototype.delete(req.body)
    res.json({result: 'done'})
})

module.exports = router