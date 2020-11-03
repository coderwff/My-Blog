const app = require('./koa')

const conf = require('./config')
const koaViews = require('koa-views')
const bodyParse = require('koa-bodyparser')

app.use(bodyParse())

/*
 * 当我们配置 ejs 模板引擎的时候
 * 配置的代码一定要放在 router 配置代码之前
 */
app.use(koaViews('views', {
  map: {
    html: 'ejs'
  }
}))

const router = require('./router')

app.use(ctx => {
  ctx.body = 'hello koa'
})

app.listen(conf.server.PORT, () => {
  console.log(`Server run on http://localhost:${conf.server.PORT}`);
})