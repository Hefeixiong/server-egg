'use strict';

/** @type Egg.EggPlugin */
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

// mysql引入
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
