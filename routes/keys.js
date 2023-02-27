const router = require('express').Router()
const keysCtrl = require('../controllers/keys.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware


router.get('/', keysCtrl.getApiKey)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

module.exports = router