'use strict';

/**
 * service-website service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-website.service-website');
