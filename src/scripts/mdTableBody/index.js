import controller from './controller';
import template from './template';
import link from './link';

let directive = () => {

  return {
    restrict: 'E',
    require: '^mdTable',
    scope: {
      data: '@mdData'
    },
    replace: true,
    template,
    link,
    controller,
    controllerAs: '$mdTableBody',
    bindToController: true
  };

};

export default {
  name: 'mdTableBody',
  directive
};
