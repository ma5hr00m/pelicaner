const requireDirectory = require('require-directory');
const Router = require('koa-router');

class InitManager {
    static initCore(app) {
        InitManager.app = app;
        InitManager.initLoadRouters();
    }

    static initLoadRouters() {
        function whenLoadModule(obj) {
            if (obj instanceof Router) {
                InitManager.app.use(obj.routes())
            }
        }

        const apiDirectory = `${process.cwd()}/src/api`
        
        requireDirectory(module, apiDirectory, {
            visit: whenLoadModule
        });
    }
}

module.exports = InitManager;