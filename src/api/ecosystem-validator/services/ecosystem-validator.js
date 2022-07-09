'use strict';

/**
 * ecosystem-validator service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ecosystem-validator.ecosystem-validator');
