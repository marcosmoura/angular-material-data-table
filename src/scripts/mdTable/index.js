import controller from './controller';
import link from './link';
import template from './template';

let directive = () => {

  return {
    restrict: 'E',
    scope: {
      card: '@?mdCard',
      paginationRows: '=?mdRows',
      paginationLimit: '=?mdLimit',
      paginationTotal: '=?mdTotal',
      inlineEdit: '@?mdInlineEdit'
    },
    transclude: true,
    template,
    link,
    controller,
    controllerAs: '$mdTable',
    bindToController: true
  };

};

export default {
  name: 'mdTable',
  directive
};
