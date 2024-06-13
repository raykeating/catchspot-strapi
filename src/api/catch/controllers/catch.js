"use strict";

/**
 * catch controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::catch.catch", {
  async create(ctx) {
    // check if the user is logged in
    if (!ctx.state.user) {
      return ctx.unauthorized("You must be logged in to post a catch");
    }

    // add the current user to the request body
    const result = await super.create(ctx);

    // get the current user
    const user = ctx.state.user;

    // get the angler
    const angler = await strapi.query("api::angler.angler").findOne({
      user: user.id,
    });

    // add the user to the angler
    await strapi.entityService.update("api::catch.catch", result.data.id, {
      data: {
        angler: angler.id
      },
    });

    return result;
  },
});
