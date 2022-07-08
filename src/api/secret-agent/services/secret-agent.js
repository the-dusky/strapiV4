'use strict';

/**
 * secret-agent service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::secret-agent.secret-agent');
