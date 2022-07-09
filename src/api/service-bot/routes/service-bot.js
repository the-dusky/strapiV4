'use strict';

/**
 * service-bot router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::service-bot.service-bot');
