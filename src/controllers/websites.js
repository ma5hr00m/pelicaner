const websiteModel = require('../models/websites');

class WebsiteController {
  static async getAllWebsites(ctx) {
    try {
      const websites = await websiteModel.getAllWebsites();
  
      const groupedWebsites = {};
      websites.forEach((website) => {
        const { id, title, url, sort, description } = website;
        if (!groupedWebsites[sort]) {
          groupedWebsites[sort] = [];
        }
        groupedWebsites[sort].push({ id, title, url, description });
      });
  
      ctx.body = {
        status: 200,
        message: "get success",
        data: groupedWebsites
      };
    } catch (error) {
      ctx.response.status = error.status || 500;
      ctx.body = {
        status: ctx.response.status,
        message: error.message || 'Internal Server Error',
        data: null
      };
    }
  }
  
  static async createWebsite(ctx) {
    try {
      const data = ctx.request.body;
      const createdWebsite = await websiteModel.createWebsite(data);
      ctx.body = {
        status: 200,
        message: "post success",
        data: createdWebsite
      };
    } catch (error) {
      ctx.response.status = error.status || 500;
      ctx.body = {
        status: ctx.response.status,
        message: error.message || 'Internal Server Error',
        data: null
      };
    }
  }

  static async deleteWebsite(ctx) {
    try {
      const id = ctx.params.id;
      const result = await websiteModel.deleteWebsite(id);
      if (result) {
        ctx.response.status = 200;
        ctx.body = {
          status: 200,
          message: 'delete success',
          data: result
        };
      } else {
        throw {
            status: 500,
            message: 'Delete operation failed',
            data: null
        };
    }
    } catch (error) {
      ctx.response.status = error.status || 500;
      ctx.body = {
        status: ctx.response.status,
        message: error.message || 'Internal Server Error',
        data: null
      };
    }
  }
}

module.exports = WebsiteController;
