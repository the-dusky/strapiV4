'use strict';

/**
 * cool-stuff service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cool-stuff.cool-stuff');
