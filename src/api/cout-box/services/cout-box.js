'use strict';

/**
 * cout-box service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cout-box.cout-box');
