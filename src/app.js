const koa = require('koa');
const router = require('koa-router');
const logger = require('koa-logger');
const koaBody = require('koa-bodyparser');
const apiRouter = require('./router/router');
const cors = require('@koa/cors');

// const xhr = new XMLHttpRequest();
// xhr.open("POST", "https://mighty-scrubland-96525.herokuapp.com/login", true);
// xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

const app = new koa();
// const host = process.env.HOST || '172.20.10.11';
const PORT = process.env.PORT || 3000;

// request -> node.js tcp socket(http) -> koa middlewares
app.use(logger());
app.use(koaBody());
app.use(apiRouter.routes());
// Open a server instance
app.use(cors()); // 跨域

app.listen(PORT, () => {
    console.log(`[SERVER] is listening on port ${PORT}`)
})
