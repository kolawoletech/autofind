(function () {
  'use strict';

  angular
    .module('cars.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('cars', {
        abstract: true,
        url: '/cars',
        template: '<ui-view/>'
      })
      .state('cars.list', {
        url: '',
        templateUrl: 'modules/cars/client/views/list-cars.client.view.html',
        controller: 'CarsListController',
        controllerAs: 'vm'
      })
      .state('cars.create', {
        url: '/create',
        templateUrl: 'modules/cars/client/views/form-car.client.view.html',
        controller: 'CarsController',
        controllerAs: 'vm',
        resolve: {
          carResolve: newCar
        },
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('cars.edit', {
        url: '/:carId/edit',
        templateUrl: 'modules/cars/client/views/form-car.client.view.html',
        controller: 'CarsController',
        controllerAs: 'vm',
        resolve: {
          carResolve: getCar
        },
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('cars.view', {
        url: '/:carId',
        templateUrl: 'modules/cars/client/views/view-car.client.view.html',
        controller: 'CarsController',
        controllerAs: 'vm',
        resolve: {
          carResolve: getCar
        }
      });
  }

  getCar.$inject = ['$stateParams', 'CarsService'];

  function getCar($stateParams, CarsService) {
    return CarsService.get({
      carId: $stateParams.carId
    }).$promise;
  }

  newCar.$inject = ['CarsService'];

  function newCar(CarsService) {
    return new CarsService();
  }
})();
