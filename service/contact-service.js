var Contact = require('../model/contact')

contactList = []

var byName = (name) => (obj) => obj.name === name


function ContactService() {}

ContactService.prototype.create = function (ct) {
    var contact = new Contact(ct.name, ct.phone)
    contactList.push(contact)
}

ContactService.prototype.update = function (ct) {
    var idx = contactList.findIndex((contact) => contact.name === ct.name)
    contactList[idx] = ct
}

ContactService.prototype.delete = function(id) {
    var idx = contactList.findIndex((contact) => contact.name === id)
    contactList.splice(idx, 1)
}

ContactService.prototype.find = function () {
    return contactList
}

ContactService.prototype.findOne = function (id) {
    return contactList.filter(byName(id))
}

module.exports = ContactService