export default function($scope) {

  let expression = this.data.split(/ in /i)[1];
  let dataSource = $scope.$parent.$eval(expression);

  let handleResults = (values) => {
    this.items = values;
  };

  if (angular.isArray(dataSource)) {
    this.items = dataSource;
  } else if (dataSource) {
    if (dataSource.success) {
      dataSource.success(handleResults);
    } else if (dataSource.then) {
      dataSource.then(handleResults);
    } else if (dataSource.finally) {
      dataSource.finally(handleResults);
    }
  }

}
