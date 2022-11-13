
function Contact(name, phone) {
    this.name = name
    this.phone = phone
}

Contact.prototype.getName = function () {
    return this.name
}

Contact.prototype.getPhone = function () {
    return this.phone
}

module.exports = Contact