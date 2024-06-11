'use strict';

/**
 * catch controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::catch.catch');
