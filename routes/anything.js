const Router = require('koa-router')
const router = new Router()
const Anything = require('../controllers/anythingCtrl')

router.post('/', Anything.post)
router.get('/', Anything.get)

module.exports = router.routes()
