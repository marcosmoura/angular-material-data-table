export default function($element, $attributes) {

  let tableHtml = '<table ng-cloak ng-transclude></table>';

  $element[0].classList.add('md-table');

  if (typeof $attributes.mdCard === 'undefined') {
    console.warn('You cannot add a <md-toolbar> without add md-card in <md-table> directive');
  }

  if ($attributes.mdCard) {
    return `<md-card class="${$attributes.mdCard}">${ tableHtml }</md-card>`;
  }

  return `${ tableHtml }`;

}
