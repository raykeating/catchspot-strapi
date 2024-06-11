'use strict';

/**
 * catch router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::catch.catch');
