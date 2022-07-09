'use strict';

/**
 *  cool-stuff controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cool-stuff.cool-stuff');
