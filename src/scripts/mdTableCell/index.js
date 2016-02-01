import template from './template';

let directive = () => {

  return {
    restrict: 'E',
    require: ['^^mdTable'],
    replace: true,
    template
  };

};

export default {
  name: 'mdTableCell',
  directive
};
