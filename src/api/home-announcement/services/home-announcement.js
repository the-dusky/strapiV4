'use strict';

/**
 * home-announcement service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-announcement.home-announcement');
