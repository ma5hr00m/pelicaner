const Router = require('koa-router');
const websiteController = require('../../../controllers/websites');

const router = new Router();

router.get('/api/v1/websites', websiteController.getAllWebsites);

module.exports = router;