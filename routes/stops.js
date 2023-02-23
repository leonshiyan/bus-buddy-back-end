const router = require('express').Router()
const stopsCtrl = require('../controllers/stops.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware




/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, stopsCtrl.index)
router.get('/:id', checkAuth, stopsCtrl.show)
router.post('/', checkAuth, stopsCtrl.create)
router.put('/:id', checkAuth, stopsCtrl.update)
router.delete('/:id', checkAuth, stopsCtrl.delete)


module.exports = router