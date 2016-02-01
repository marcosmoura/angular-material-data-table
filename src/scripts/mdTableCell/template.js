export default function($element, $attributes) {

  let innerHtml = $element.html();
  let elementClass = typeof $attributes.mdNumeric !== 'undefined' ? 'md-table-is-numeric' : '';

  if ($element[0].parentNode.tagName.toLowerCase() === 'md-table-body') {
    if ($attributes.mdEdit) {
      elementClass += ' md-table-inline-edit md-ink-ripple';
    }

    return `<td class="${ elementClass }">${ innerHtml }</td>`;
  }

  if ($attributes.mdSort) {
    elementClass += ' md-table-has-sort';
    innerHtml = `
      <div class="md-table-sortable">
        <md-icon class="md-table-sort-icon material-icons">arrow_upward</md-icon>
        ${ innerHtml }
      </div>
    `;
  }

  return `<th class="${ elementClass }">${ innerHtml }</th>`;

}
