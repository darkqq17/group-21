const koa = require('koa');
const router = require('koa-router');
const logger = require('koa-logger');
const koaBody = require('koa-bodyparser');
const apiRouter = require('./router/router');

const app = new koa();
const SERVER_PORT = 5000;

// request -> node.js tcp socket(http) -> koa middlewares
app.use(logger());
app.use(koaBody());
app.use(apiRouter.routes());

// Open a server instance
app.listen(SERVER_PORT, () => {
    console.log(`[SERVER] is listening on port ${SERVER_PORT}`)
    })