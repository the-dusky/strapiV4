'use strict';

/**
 * cool-stuff router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::cool-stuff.cool-stuff');
