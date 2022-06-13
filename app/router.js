'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const { home, user } = controller;
  router.get('/', home.index);
  router.post('/api/user', user.create);
};
