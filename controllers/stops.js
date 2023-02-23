const { MyStop, Route } = require('../models')

const create = async(req,res) => {

  try {
    req.body.profileId = req.user.profile.id
    const stop = await MyStop.create(req.body)
    res.status(200).json(stop)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const stops = await MyStop.findAll()
    res.status(200).json(stops)
  } catch (error) {
    res.status(500).json(error)
  }
}

const show = async (req, res) => {
  try {
    const stop = await MyStop.findByPk(req.params.id)
    res.status(200).json(stop)
  } catch (error) {
    res.status(500).json(error)
  }
}


const update = async (req, res) => {
  try {
    const stop = await MyStop.findByPk(req.params.id)
    stop.set(req.body)
    await stop.save()

    res.status(200).json(stop)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteStop = async (req,res) =>{
  try {
    // We can also call destroy on an instance:
    const stop = await MyStop.findByPk(req.params.id)
    await stop.destroy()
    res.status(200).json(stop)
  } catch (error) {
    res.status(500).json(error)
  }
}


module.exports = {
  create,
  index,
  show,
  update,
  delete : deleteStop,
}