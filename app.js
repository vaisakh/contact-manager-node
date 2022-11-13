var express = require('express')

var app = express()

app.use(express.json())

var contactRouter = require('./routes/contacts')

app.use('/contact', contactRouter)

// error handler
app.use(function (err, req, res, next) {
    req.status(500).json({ status: 500, message: 'Internal server error.' })
})

app.listen(3000, function () {
    console.log('server started at 3000')
})