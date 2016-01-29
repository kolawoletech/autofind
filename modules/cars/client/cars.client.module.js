(function (app) {
  'use strict';

  app.registerModule('cars');
  app.registerModule('cars.services');
  app.registerModule('cars.routes', ['ui.router', 'cars.services']);
})(ApplicationConfiguration);
