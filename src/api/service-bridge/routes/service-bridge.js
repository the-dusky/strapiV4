'use strict';

/**
 * service-bridge router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::service-bridge.service-bridge');
