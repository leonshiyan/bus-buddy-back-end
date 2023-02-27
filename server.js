require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const formData = require('express-form-data')
// import routers
const profilesRouter = require('./routes/profiles.js')
const authRouter = require('./routes/auth.js')
const stopsRouter = require('./routes/stops.js')
const keysRouter = require('./routes/keys.js')

// create the express app
const app = express()
// basic middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(formData.parse())

// mount imported routes

app.use('/api/stops', stopsRouter)
app.use('/api/profiles', profilesRouter)
app.use('/api/auth', authRouter)
app.use('/api/keys',keysRouter)

app.use(function (req, res, next) {
  res.status(404).json({ err: 'Not found' })
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err: err.message })
})

module.exports = app
