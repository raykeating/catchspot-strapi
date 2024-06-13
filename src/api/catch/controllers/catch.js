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

    const populatedUser = await strapi.entityService.findOne("plugin::users-permissions.user", user.id, {
      populate: ["anglerProfile"]
    });

    // add the angler to the catch
    await strapi.entityService.update("api::catch.catch", result.data.id, {
      data: {
        angler: populatedUser.anglerProfile.id
      },
    });

    return result;
  },
});
