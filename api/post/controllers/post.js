'use strict';
const { sanitizeEntity } = require('strapi-utils');
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.post.search(ctx.query);
    } else {
      entities = await strapi.services.post.find(ctx.query);
    }

    console.log(strapi.models.post);
    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.post }));
    // return entities;
  },
  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.services.post.findOne({ id });
    return sanitizeEntity(entity, { model: strapi.models.post});
    // return entity;
  }
};
