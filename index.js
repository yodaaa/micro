const { get, post, router } = require('microrouter')


module.exports = router(
  get('/', () => 'hello')

)
