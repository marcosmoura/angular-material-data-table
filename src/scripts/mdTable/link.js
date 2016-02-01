export default function($scope, $element, $attributes) {

  if (typeof $attributes.mdCard !== 'undefined') {
    $element.children('md-card').prepend($element.find('md-toolbar'));
  }

}
