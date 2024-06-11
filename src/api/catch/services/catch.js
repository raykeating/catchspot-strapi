'use strict';

/**
 * catch service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::catch.catch');
