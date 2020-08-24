const koa = require('koa');
const router = require('koa-router');
const logger = require('koa-logger');
const koaBody = require('koa-bodyparser');
const apiRouter = require('./router/router');

const app = new koa();

// request -> node.js tcp socket(http) -> koa middlewares
app.use(logger());
app.use(koaBody());
app.use(apiRouter.routes());

// Open a server instance
app.listen(3001);