'use strict';

/**
 * angler service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::angler.angler');
