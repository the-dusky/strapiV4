'use strict';

/**
 *  service-bridge controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::service-bridge.service-bridge');
