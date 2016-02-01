import mdTable from './scripts/mdTable';
import mdTableHead from './scripts/mdTableHead';
import mdTableCell from './scripts/mdTableCell';
import mdTableBody from './scripts/mdTableBody';
import config from './config';

((angular) => {

  angular
    .module('angular-material-data-table', [
      'ngMaterial'
    ])
    .config(config)
    .directive(mdTable.name, mdTable.directive)
    .directive(mdTableHead.name, mdTableHead.directive)
    .directive(mdTableCell.name, mdTableCell.directive)
    .directive(mdTableBody.name, mdTableBody.directive);

})(angular);
