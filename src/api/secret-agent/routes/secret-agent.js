'use strict';

/**
 * secret-agent router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::secret-agent.secret-agent');
