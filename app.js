const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');
const path = require("path");
const staticServe = require('koa-static');
const cors = require('koa-cors');
const InitManager = require('./src/core/init');
const viewRoutes = require('./src/routes/routes');

const app = new Koa();

app.use(bodyParser());
app.use(cors({
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH']
}));
app.use(views(path.join(__dirname,"/src/views/"),{extension:'html'}));
app.use(staticServe(path.join( __dirname, "/public")));
app.use(viewRoutes.routes());
InitManager.initCore(app);

app.listen(3000);
console.log(`🎁 Listening on localhost:3000 ...`);