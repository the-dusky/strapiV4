'use strict';

/**
 *  service-bot controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::service-bot.service-bot');
