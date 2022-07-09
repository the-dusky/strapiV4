'use strict';

/**
 * service-bot service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-bot.service-bot');
