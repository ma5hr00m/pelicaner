const Router = require('koa-router');
const websiteController = require('../../../controllers/websites');

const router = new Router();

router.delete('/api/v1/websites/:id', websiteController.deleteWebsite);

module.exports = router;