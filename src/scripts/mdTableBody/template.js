export default function($element, $attributes) {

  let propName = $attributes.mdData.split(/ in /i)[0];
  let html = $element.html().replace(/md-table-cell/g, 'td');

  return `
    <tbody>
      <tr ng-repeat="${ propName } in $mdTableBody.items">${ html }</tr>
    </tbody>
  `;

}
