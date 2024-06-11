'use strict';

/**
 * lure service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lure.lure');
