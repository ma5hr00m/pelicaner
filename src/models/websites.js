const db = require('../database/db.js');

const sequelize = db.sequelize;

const website = require('../schemas/websites.js')(sequelize);
website.sync({ force: false });

class websiteModel {
  static async getAllWebsites() {
    const result = await website.findAll();
    return result;
  }


  static async createWebsite(data) {
    const result = await website.create(data);
    return result;
  }

  static async deleteWebsite(id) {
    const result = await website.destroy({
      where: { id: id }
    });
    return result;
  }
}

module.exports = websiteModel;
