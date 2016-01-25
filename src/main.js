import config from './config';

((angular) => {

  angular
    .module('angular-material-data-table', [
      'ngMaterial'
    ])
    .config(config);

})(angular);
