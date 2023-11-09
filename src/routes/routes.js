const Router = require('koa-router');

const router = new Router();

router.get("/", async (ctx) => {
  await ctx.render("index");
});

router.get("/manager", async (ctx) => {
  await ctx.render("manager");
});


module.exports = router;