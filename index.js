const koa = require('koa')

const conf = require('./config')

const app = new koa

app.use(ctx => {
  ctx.body = 'hello koa'
})

app.listen(conf.server.PORT, () => {
  console.log(`Server run on http://localhost:${conf.server.PORT}`);
})