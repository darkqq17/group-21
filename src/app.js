const koa = require('koa');
const router = require('koa-router');
const logger = require('koa-logger');
const koaBody = require('koa-bodyparser');
const apiRouter = require('./router/router');
const cors = require('@koa/cors');

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: ['Content-Type', 'Authorization'],
  };

const app = new koa();
const PORT = process.env.PORT || 3000;

// request -> node.js tcp socket(http) -> koa middlewares
app.use(logger());
app.use(koaBody());
app.use(apiRouter.routes());
// Open a server instance
app.use(cors(corsOptions)); // 跨域

app.listen(PORT, () => {
    console.log(`[SERVER] is listening on port ${PORT}`)
    })
