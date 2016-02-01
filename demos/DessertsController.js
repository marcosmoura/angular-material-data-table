(function(angular) {

  var DessertsController = function($q, $timeout) {

    this.selectedDesserts = [];

    this.get = function() {
      var deferred = $q.defer();

      $timeout(function() {
        deferred.resolve([
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          },
          {
            name: 'Test',
            calories: 159,
            fat: 6.0,
            carbs: 6.0,
            protein: 6.0,
            sodium: 6.0,
            calcium: 6.0,
            iron: 6.0
          }
        ]);
      }, 0);

      return deferred.promise;
    };

  };

  angular.module('angular-material-data-table').controller('DessertsController', DessertsController);

})(window.angular);
