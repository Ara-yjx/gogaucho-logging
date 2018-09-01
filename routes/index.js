module.exports = (router) => {
  // router.prefix('/v1')
  router.use('/users', require('./users'))
  router.use('/anything', require('./anything'))
}
