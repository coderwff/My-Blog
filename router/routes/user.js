const koaRouter = require('koa-router')

const router = new koaRouter

/*
 * login
 */
router.post('/login', async ctx => {
  ctx.body = `login api`
})

/*
 * register
 */
router.get('/register', async ctx => {
  await ctx.render('register', {
    name: '注册页面'
  })
})

router.post('/register', async ctx => {
  ctx.body = ctx.request.body
})

/*
 * logout
 */
router.get('/logout', async ctx => {
  ctx.body = `logout api`
})

router.get('/email/code', async ctx => {
  const email = ctx.request.body.email
})

module.exports = router