'use strict';

/**
 *  secret-agent controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::secret-agent.secret-agent');
