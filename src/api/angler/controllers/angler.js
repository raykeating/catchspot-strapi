'use strict';

/**
 * angler controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::angler.angler', {
    async create(ctx) {

        // check if the user is logged in
        if (!ctx.state.user) {
            return ctx.unauthorized("You must be logged in to create an angler");
        }

        // add the current user to the request body
        const result = await super.create(ctx);

        // get the current user
        const user = ctx.state.user;

        // add the user to the angler
        await strapi.entityService.update("api::angler.angler", result.data.id, {
            data: {
                user: user.id
            }
        });

        return result;
    }
});