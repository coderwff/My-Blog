const readDir = require('require-directory')
const Router = require('koa-router')

const user = require('./routes/user')
const app = require('../koa')

const visitor = obj => {

  // ! 待优化
  if (obj instanceof Router) {
    app.use(obj.routes())
  }

}

/*
 * 第一个：固定的 module
 * 第二个：要读取的目录
 * 第三个：
 */
readDir(module, './routes', { visit: visitor })