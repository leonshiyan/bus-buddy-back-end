
const getApiKey = async (req, res) => {
  const apiKey = process.env.TRANSLINK_API_KEY
  res.send(apiKey)
}

module.exports = { getApiKey }