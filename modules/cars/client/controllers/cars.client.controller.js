(function () {
  'use strict';

  angular
    .module('cars')
    .controller('CarsController', CarsController);

  CarsController.$inject = ['$scope', '$state', 'carResolve', 'Authentication'];

  function CarsController($scope, $state, car, Authentication) {
    var vm = this;

    vm.car = car;
    vm.authentication = Authentication;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Car
    function remove() {
      if (confirm('Are you sure you want to delete?')) {
        vm.car.$remove($state.go('cars.list'));
      }
    }

    // Save Car
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.carForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.car._id) {
        vm.car.$update(successCallback, errorCallback);
      } else {
        vm.car.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('cars.view', {
          carId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
})();
