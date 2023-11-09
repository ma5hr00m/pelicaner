const Router = require('koa-router');
const websiteController = require('../../../controllers/websites');

const router = new Router();

router.post('/api/v1/websites', websiteController.createWebsite);

module.exports = router;