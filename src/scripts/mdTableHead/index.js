import template from './template';
import link from './link';

let directive = () => {

  return {
    restrict: 'E',
    require: '^mdTable',
    replace: true,
    transclude: true,
    template,
    link
  };

};

export default {
  name: 'mdTableHead',
  directive
};
