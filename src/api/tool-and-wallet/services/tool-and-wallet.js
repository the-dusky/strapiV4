'use strict';

/**
 * tool-and-wallet service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tool-and-wallet.tool-and-wallet');
