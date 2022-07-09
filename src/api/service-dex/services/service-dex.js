'use strict';

/**
 * service-dex service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-dex.service-dex');
