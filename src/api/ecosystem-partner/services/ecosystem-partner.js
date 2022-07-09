'use strict';

/**
 * ecosystem-partner service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ecosystem-partner.ecosystem-partner');
