/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { throw err; };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function ($mdThemingProvider) {
	  var themesConstant = '_THEMES';
	  var palettesConstant = '_PALETTES';
	  var defaultPaletteName = $mdThemingProvider[themesConstant].default.colors.accent.name;
	  var defaultPalette = $mdThemingProvider.extendPalette(defaultPaletteName, {
	    '500': $mdThemingProvider[palettesConstant][defaultPaletteName][50],
	    contrastDefaultColor: 'dark'
	  });
	
	  $mdThemingProvider.definePalette('defaultPalette', defaultPalette);
	  $mdThemingProvider.theme('alternate-header').primaryPalette('defaultPalette');
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(6);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _link = __webpack_require__(7);
	
	var _link2 = _interopRequireDefault(_link);
	
	var _template = __webpack_require__(8);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
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
	    template: _template2.default,
	    link: _link2.default,
	    controller: _controller2.default,
	    controllerAs: '$mdTable',
	    bindToController: true
	  };
	};
	
	exports.default = {
	  name: 'mdTable',
	  directive: directive
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(9);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _template = __webpack_require__(11);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _link = __webpack_require__(10);
	
	var _link2 = _interopRequireDefault(_link);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
	  return {
	    restrict: 'E',
	    require: '^mdTable',
	    scope: {
	      data: '@mdData'
	    },
	    replace: true,
	    template: _template2.default,
	    link: _link2.default,
	    controller: _controller2.default,
	    controllerAs: '$mdTableBody',
	    bindToController: true
	  };
	};
	
	exports.default = {
	  name: 'mdTableBody',
	  directive: directive
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _template = __webpack_require__(12);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
	  return {
	    restrict: 'E',
	    require: ['^^mdTable'],
	    replace: true,
	    template: _template2.default
	  };
	};
	
	exports.default = {
	  name: 'mdTableCell',
	  directive: directive
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _template = __webpack_require__(14);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _link = __webpack_require__(13);
	
	var _link2 = _interopRequireDefault(_link);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
	  return {
	    restrict: 'E',
	    require: '^mdTable',
	    replace: true,
	    transclude: true,
	    template: _template2.default,
	    link: _link2.default
	  };
	};
	
	exports.default = {
	  name: 'mdTableHead',
	  directive: directive
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _mdTable = __webpack_require__(1);
	
	var _mdTable2 = _interopRequireDefault(_mdTable);
	
	var _mdTableHead = __webpack_require__(4);
	
	var _mdTableHead2 = _interopRequireDefault(_mdTableHead);
	
	var _mdTableCell = __webpack_require__(3);
	
	var _mdTableCell2 = _interopRequireDefault(_mdTableCell);
	
	var _mdTableBody = __webpack_require__(2);
	
	var _mdTableBody2 = _interopRequireDefault(_mdTableBody);
	
	var _config = __webpack_require__(0);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function (angular) {
	
	  angular.module('angular-material-data-table', ['ngMaterial']).config(_config2.default).directive(_mdTable2.default.name, _mdTable2.default.directive).directive(_mdTableHead2.default.name, _mdTableHead2.default.directive).directive(_mdTableCell2.default.name, _mdTableCell2.default.directive).directive(_mdTableBody2.default.name, _mdTableBody2.default.directive);
	})(angular);

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function ($scope, $element, $attributes) {
	
	  if (typeof $attributes.mdCard !== 'undefined') {
	    $element.children('md-card').prepend($element.find('md-toolbar'));
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function ($element, $attributes) {
	
	  var tableHtml = '<table ng-cloak ng-transclude></table>';
	
	  $element[0].classList.add('md-table');
	
	  if (typeof $attributes.mdCard === 'undefined') {
	    console.warn('You cannot add a <md-toolbar> without add md-card in <md-table> directive');
	  }
	
	  if ($attributes.mdCard) {
	    return '<md-card class="' + $attributes.mdCard + '">' + tableHtml + '</md-card>';
	  }
	
	  return '' + tableHtml;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function ($scope) {
	  var _this = this;
	
	  var expression = this.data.split(/ in /i)[1];
	  var dataSource = $scope.$parent.$eval(expression);
	
	  var handleResults = function handleResults(values) {
	    _this.items = values;
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
	};

/***/ },
/* 10 */
6,
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function ($element, $attributes) {
	
	  var propName = $attributes.mdData.split(/ in /i)[0];
	  var html = $element.html().replace(/md-table-cell/g, 'td');
	
	  return '\n    <tbody>\n      <tr ng-repeat="' + propName + ' in $mdTableBody.items">' + html + '</tr>\n    </tbody>\n  ';
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function ($element, $attributes) {
	
	  var innerHtml = $element.html();
	  var elementClass = typeof $attributes.mdNumeric !== 'undefined' ? 'md-table-is-numeric' : '';
	
	  if ($element[0].parentNode.tagName.toLowerCase() === 'md-table-body') {
	    if ($attributes.mdEdit) {
	      elementClass += ' md-table-inline-edit md-ink-ripple';
	    }
	
	    return '<td class="' + elementClass + '">' + innerHtml + '</td>';
	  }
	
	  if ($attributes.mdSort) {
	    elementClass += ' md-table-has-sort';
	    innerHtml = '\n      <div class="md-table-sortable">\n        <md-icon class="md-table-sort-icon material-icons">arrow_upward</md-icon>\n        ' + innerHtml + '\n      </div>\n    ';
	  }
	
	  return '<th class="' + elementClass + '">' + innerHtml + '</th>';
	};

/***/ },
/* 13 */
6,
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  return "<thead><tr ng-transclude></tr></thead>";
	};

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTU1ZTQwMmYxMjJlYTdkNTQzMWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFRhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kVGFibGVCb2R5L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kVGFibGVDZWxsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kVGFibGVIZWFkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kVGFibGUvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFRhYmxlL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRUYWJsZS90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFRhYmxlQm9keS9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kVGFibGVCb2R5L3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kVGFibGVDZWxsL3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kVGFibGVIZWFkL3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrREFBMEMsV0FBVzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULFNBQVEsVUFOTyxVQUFTLG9CQUFvQjtHQUMxQyxJQUFJLGlCQUFpQjtHQUNyQixJQUFJLG1CQUFtQjtHQUN2QixJQUFJLHFCQUFxQixtQkFBbUIsZ0JBQWdCLFFBQVEsT0FBTyxPQUFPO0dBQ2xGLElBQUksaUJBQWlCLG1CQUFtQixjQUFjLG9CQUFvQjtLQUN4RSxPQUFPLG1CQUFtQixrQkFBa0Isb0JBQW9CO0tBQ2hFLHNCQUFzQjs7O0dBR3hCLG1CQUFtQixjQUFjLGtCQUFrQjtHQUNuRCxtQkFBbUIsTUFBTSxvQkFBb0IsZUFBZTs7Ozs7OztBQ1Y5RDs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULEtBQUksY0FBYyxvQkFBUTs7QUFFMUIsS0FBSSxlQUFlLHVCQUF1Qjs7QUFFMUMsS0FBSSxRQUFRLG9CQUFROztBQUVwQixLQUFJLFNBQVMsdUJBQXVCOztBQUVwQyxLQUFJLFlBQVksb0JBQVE7O0FBRXhCLEtBQUksYUFBYSx1QkFBdUI7O0FBRXhDLFVBQVMsdUJBQXVCLEtBQUssRUFBRSxPQUFPLE9BQU8sSUFBSSxhQUFhLE1BQU0sRUFBRSxTQUFTOztBQWR2RixLQUFJLFlBQVksU0FBWixZQUFrQjs7R0FFcEIsT0FBTztLQUNMLFVBQVU7S0FDVixPQUFPO09BQ0wsTUFBTTtPQUNOLGdCQUFnQjtPQUNoQixpQkFBaUI7T0FDakIsaUJBQWlCO09BQ2pCLFlBQVk7O0tBRWQsWUFBWTtLQUNaO0tBQ0E7S0FDQTtLQUNBLGNBQWM7S0FDZCxrQkFBa0I7Ozs7QUFvQnRCLFNBQVEsVUFmTztHQUNiLE1BQU07R0FDTjs7Ozs7OztBQzNCRjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULEtBQUksY0FBYyxvQkFBUTs7QUFFMUIsS0FBSSxlQUFlLHVCQUF1Qjs7QUFFMUMsS0FBSSxZQUFZLG9CQUFROztBQUV4QixLQUFJLGFBQWEsdUJBQXVCOztBQUV4QyxLQUFJLFFBQVEsb0JBQVE7O0FBRXBCLEtBQUksU0FBUyx1QkFBdUI7O0FBRXBDLFVBQVMsdUJBQXVCLEtBQUssRUFBRSxPQUFPLE9BQU8sSUFBSSxhQUFhLE1BQU0sRUFBRSxTQUFTOztBQWR2RixLQUFJLFlBQVksU0FBWixZQUFrQjs7R0FFcEIsT0FBTztLQUNMLFVBQVU7S0FDVixTQUFTO0tBQ1QsT0FBTztPQUNMLE1BQU07O0tBRVIsU0FBUztLQUNUO0tBQ0E7S0FDQTtLQUNBLGNBQWM7S0FDZCxrQkFBa0I7Ozs7QUFvQnRCLFNBQVEsVUFmTztHQUNiLE1BQU07R0FDTjs7Ozs7OztBQ3hCRjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULEtBQUksWUFBWSxvQkFBUTs7QUFFeEIsS0FBSSxhQUFhLHVCQUF1Qjs7QUFFeEMsVUFBUyx1QkFBdUIsS0FBSyxFQUFFLE9BQU8sT0FBTyxJQUFJLGFBQWEsTUFBTSxFQUFFLFNBQVM7O0FBUnZGLEtBQUksWUFBWSxTQUFaLFlBQWtCOztHQUVwQixPQUFPO0tBQ0wsVUFBVTtLQUNWLFNBQVMsQ0FBQztLQUNWLFNBQVM7S0FDVDs7OztBQWNKLFNBQVEsVUFUTztHQUNiLE1BQU07R0FDTjs7Ozs7OztBQ2ZGOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBR1QsS0FBSSxZQUFZLG9CQUFROztBQUV4QixLQUFJLGFBQWEsdUJBQXVCOztBQUV4QyxLQUFJLFFBQVEsb0JBQVE7O0FBRXBCLEtBQUksU0FBUyx1QkFBdUI7O0FBRXBDLFVBQVMsdUJBQXVCLEtBQUssRUFBRSxPQUFPLE9BQU8sSUFBSSxhQUFhLE1BQU0sRUFBRSxTQUFTOztBQVh2RixLQUFJLFlBQVksU0FBWixZQUFrQjs7R0FFcEIsT0FBTztLQUNMLFVBQVU7S0FDVixTQUFTO0tBQ1QsU0FBUztLQUNULFlBQVk7S0FDWjtLQUNBOzs7O0FBaUJKLFNBQVEsVUFaTztHQUNiLE1BQU07R0FDTjs7Ozs7OztBQ2xCRjs7QUFFQSxLQUFJLFdBQVcsb0JBQVE7O0FBRXZCLEtBQUksWUFBWSx1QkFBdUI7O0FBRXZDLEtBQUksZUFBZSxvQkFBUTs7QUFFM0IsS0FBSSxnQkFBZ0IsdUJBQXVCOztBQUUzQyxLQUFJLGVBQWUsb0JBQVE7O0FBRTNCLEtBQUksZ0JBQWdCLHVCQUF1Qjs7QUFFM0MsS0FBSSxlQUFlLG9CQUFROztBQUUzQixLQUFJLGdCQUFnQix1QkFBdUI7O0FBRTNDLEtBQUksVUFBVSxvQkFBUTs7QUFFdEIsS0FBSSxXQUFXLHVCQUF1Qjs7QUFFdEMsVUFBUyx1QkFBdUIsS0FBSyxFQUFFLE9BQU8sT0FBTyxJQUFJLGFBQWEsTUFBTSxFQUFFLFNBQVM7O0FBaEJ2RixFQUFDLFVBQUMsU0FBWTs7R0FFWixRQUNHLE9BQU8sK0JBQStCLENBQ3JDLGVBRUQsT0FKSCxrQkFLRyxVQUFVLGtCQUFRLE1BQU0sa0JBQVEsV0FDaEMsVUFBVSxzQkFBWSxNQUFNLHNCQUFZLFdBQ3hDLFVBQVUsc0JBQVksTUFBTSxzQkFBWSxXQUN4QyxVQUFVLHNCQUFZLE1BQU0sc0JBQVk7SUFFMUMsUzs7Ozs7O0FDbEJIOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBR1QsU0FBUSxVQU5PLFlBQVcsRzs7Ozs7O0FDQTFCOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBR1QsU0FBUSxVQU5PLFVBQVMsUUFBUSxVQUFVLGFBQWE7O0dBRXJELElBQUksT0FBTyxZQUFZLFdBQVcsYUFBYTtLQUM3QyxTQUFTLFNBQVMsV0FBVyxRQUFRLFNBQVMsS0FBSzs7Ozs7Ozs7QUNIdkQ7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOzs7QUFHVCxTQUFRLFVBTk8sVUFBUyxVQUFVLGFBQWE7O0dBRTdDLElBQUksWUFBWTs7R0FFaEIsU0FBUyxHQUFHLFVBQVUsSUFBSTs7R0FFMUIsSUFBSSxPQUFPLFlBQVksV0FBVyxhQUFhO0tBQzdDLFFBQVEsS0FBSzs7O0dBR2YsSUFBSSxZQUFZLFFBQVE7S0FDdEIsNEJBQTBCLFlBQVksU0FBWixPQUF3Qjs7O0dBR3BELFlBQVc7Ozs7Ozs7QUNkYjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULFNBQVEsVUFOTyxVQUFTLFFBQVE7R0FPOUIsSUFBSSxRQUFROztHQUxaLElBQUksYUFBYSxLQUFLLEtBQUssTUFBTSxTQUFTO0dBQzFDLElBQUksYUFBYSxPQUFPLFFBQVEsTUFBTTs7R0FFdEMsSUFBSSxnQkFBZ0IsU0FBaEIsY0FBaUIsUUFBVztLQUM5QixNQUFLLFFBQVE7OztHQUdmLElBQUksUUFBUSxRQUFRLGFBQWE7S0FDL0IsS0FBSyxRQUFRO1VBQ1IsSUFBSSxZQUFZO0tBQ3JCLElBQUksV0FBVyxTQUFTO09BQ3RCLFdBQVcsUUFBUTtZQUNkLElBQUksV0FBVyxNQUFNO09BQzFCLFdBQVcsS0FBSztZQUNYLElBQUksV0FBVyxTQUFTO09BQzdCLFdBQVcsUUFBUTs7Ozs7Ozs7Ozs7QUNqQnpCOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBR1QsU0FBUSxVQU5PLFVBQVMsVUFBVSxhQUFhOztHQUU3QyxJQUFJLFdBQVcsWUFBWSxPQUFPLE1BQU0sU0FBUztHQUNqRCxJQUFJLE9BQU8sU0FBUyxPQUFPLFFBQVEsa0JBQWtCOztHQUVyRCxnREFFc0Isd0NBQXFDOzs7Ozs7O0FDUDdEOztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBR1QsU0FBUSxVQU5PLFVBQVMsVUFBVSxhQUFhOztHQUU3QyxJQUFJLFlBQVksU0FBUztHQUN6QixJQUFJLGVBQWUsT0FBTyxZQUFZLGNBQWMsY0FBYyx3QkFBd0I7O0dBRTFGLElBQUksU0FBUyxHQUFHLFdBQVcsUUFBUSxrQkFBa0IsaUJBQWlCO0tBQ3BFLElBQUksWUFBWSxRQUFRO09BQ3RCLGdCQUFnQjs7O0tBR2xCLHVCQUFzQixzQkFBbUI7OztHQUczQyxJQUFJLFlBQVksUUFBUTtLQUN0QixnQkFBZ0I7S0FDaEIscUpBR087OztHQUtULHVCQUFzQixzQkFBbUI7Ozs7Ozs7OztBQ3ZCM0M7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOzs7QUFHVCxTQUFRLFVBTk8sWUFBVzs7R0FFeEIiLCJmaWxlIjoiYW5ndWxhci1tYXRlcmlhbC1kYXRhLXRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgdGhyb3cgZXJyOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAxNTVlNDAyZjEyMmVhN2Q1NDMxZlxuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCRtZFRoZW1pbmdQcm92aWRlcikge1xuICBsZXQgdGhlbWVzQ29uc3RhbnQgPSAnX1RIRU1FUyc7XG4gIGxldCBwYWxldHRlc0NvbnN0YW50ID0gJ19QQUxFVFRFUyc7XG4gIGxldCBkZWZhdWx0UGFsZXR0ZU5hbWUgPSAkbWRUaGVtaW5nUHJvdmlkZXJbdGhlbWVzQ29uc3RhbnRdLmRlZmF1bHQuY29sb3JzLmFjY2VudC5uYW1lO1xuICBsZXQgZGVmYXVsdFBhbGV0dGUgPSAkbWRUaGVtaW5nUHJvdmlkZXIuZXh0ZW5kUGFsZXR0ZShkZWZhdWx0UGFsZXR0ZU5hbWUsIHtcbiAgICAnNTAwJzogJG1kVGhlbWluZ1Byb3ZpZGVyW3BhbGV0dGVzQ29uc3RhbnRdW2RlZmF1bHRQYWxldHRlTmFtZV1bNTBdLFxuICAgIGNvbnRyYXN0RGVmYXVsdENvbG9yOiAnZGFyaydcbiAgfSk7XG5cbiAgJG1kVGhlbWluZ1Byb3ZpZGVyLmRlZmluZVBhbGV0dGUoJ2RlZmF1bHRQYWxldHRlJywgZGVmYXVsdFBhbGV0dGUpO1xuICAkbWRUaGVtaW5nUHJvdmlkZXIudGhlbWUoJ2FsdGVybmF0ZS1oZWFkZXInKS5wcmltYXJ5UGFsZXR0ZSgnZGVmYXVsdFBhbGV0dGUnKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbmZpZy5qc1xuICoqLyIsImltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgbGluayBmcm9tICcuL2xpbmsnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUnO1xuXG5sZXQgZGlyZWN0aXZlID0gKCkgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgY2FyZDogJ0A/bWRDYXJkJyxcbiAgICAgIHBhZ2luYXRpb25Sb3dzOiAnPT9tZFJvd3MnLFxuICAgICAgcGFnaW5hdGlvbkxpbWl0OiAnPT9tZExpbWl0JyxcbiAgICAgIHBhZ2luYXRpb25Ub3RhbDogJz0/bWRUb3RhbCcsXG4gICAgICBpbmxpbmVFZGl0OiAnQD9tZElubGluZUVkaXQnXG4gICAgfSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHRlbXBsYXRlLFxuICAgIGxpbmssXG4gICAgY29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICckbWRUYWJsZScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdtZFRhYmxlJyxcbiAgZGlyZWN0aXZlXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZFRhYmxlL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJztcbmltcG9ydCBsaW5rIGZyb20gJy4vbGluayc7XG5cbmxldCBkaXJlY3RpdmUgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHJlcXVpcmU6ICdebWRUYWJsZScsXG4gICAgc2NvcGU6IHtcbiAgICAgIGRhdGE6ICdAbWREYXRhJ1xuICAgIH0sXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZSxcbiAgICBsaW5rLFxuICAgIGNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAnJG1kVGFibGVCb2R5JyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kVGFibGVCb2R5JyxcbiAgZGlyZWN0aXZlXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZFRhYmxlQm9keS9pbmRleC5qc1xuICoqLyIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJztcblxubGV0IGRpcmVjdGl2ZSA9ICgpID0+IHtcblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgcmVxdWlyZTogWydeXm1kVGFibGUnXSxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHRlbXBsYXRlXG4gIH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kVGFibGVDZWxsJyxcbiAgZGlyZWN0aXZlXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZFRhYmxlQ2VsbC9pbmRleC5qc1xuICoqLyIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJztcbmltcG9ydCBsaW5rIGZyb20gJy4vbGluayc7XG5cbmxldCBkaXJlY3RpdmUgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHJlcXVpcmU6ICdebWRUYWJsZScsXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHRlbXBsYXRlLFxuICAgIGxpbmtcbiAgfTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRUYWJsZUhlYWQnLFxuICBkaXJlY3RpdmVcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY3JpcHRzL21kVGFibGVIZWFkL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IG1kVGFibGUgZnJvbSAnLi9zY3JpcHRzL21kVGFibGUnO1xuaW1wb3J0IG1kVGFibGVIZWFkIGZyb20gJy4vc2NyaXB0cy9tZFRhYmxlSGVhZCc7XG5pbXBvcnQgbWRUYWJsZUNlbGwgZnJvbSAnLi9zY3JpcHRzL21kVGFibGVDZWxsJztcbmltcG9ydCBtZFRhYmxlQm9keSBmcm9tICcuL3NjcmlwdHMvbWRUYWJsZUJvZHknO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5cbigoYW5ndWxhcikgPT4ge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdhbmd1bGFyLW1hdGVyaWFsLWRhdGEtdGFibGUnLCBbXG4gICAgICAnbmdNYXRlcmlhbCdcbiAgICBdKVxuICAgIC5jb25maWcoY29uZmlnKVxuICAgIC5kaXJlY3RpdmUobWRUYWJsZS5uYW1lLCBtZFRhYmxlLmRpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKG1kVGFibGVIZWFkLm5hbWUsIG1kVGFibGVIZWFkLmRpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKG1kVGFibGVDZWxsLm5hbWUsIG1kVGFibGVDZWxsLmRpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKG1kVGFibGVCb2R5Lm5hbWUsIG1kVGFibGVCb2R5LmRpcmVjdGl2ZSk7XG5cbn0pKGFuZ3VsYXIpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbWFpbi5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY3JpcHRzL21kVGFibGUvY29udHJvbGxlci5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQsICRhdHRyaWJ1dGVzKSB7XG5cbiAgaWYgKHR5cGVvZiAkYXR0cmlidXRlcy5tZENhcmQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgJGVsZW1lbnQuY2hpbGRyZW4oJ21kLWNhcmQnKS5wcmVwZW5kKCRlbGVtZW50LmZpbmQoJ21kLXRvb2xiYXInKSk7XG4gIH1cblxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZFRhYmxlL2xpbmsuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigkZWxlbWVudCwgJGF0dHJpYnV0ZXMpIHtcblxuICBsZXQgdGFibGVIdG1sID0gJzx0YWJsZSBuZy1jbG9hayBuZy10cmFuc2NsdWRlPjwvdGFibGU+JztcblxuICAkZWxlbWVudFswXS5jbGFzc0xpc3QuYWRkKCdtZC10YWJsZScpO1xuXG4gIGlmICh0eXBlb2YgJGF0dHJpYnV0ZXMubWRDYXJkID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUud2FybignWW91IGNhbm5vdCBhZGQgYSA8bWQtdG9vbGJhcj4gd2l0aG91dCBhZGQgbWQtY2FyZCBpbiA8bWQtdGFibGU+IGRpcmVjdGl2ZScpO1xuICB9XG5cbiAgaWYgKCRhdHRyaWJ1dGVzLm1kQ2FyZCkge1xuICAgIHJldHVybiBgPG1kLWNhcmQgY2xhc3M9XCIkeyRhdHRyaWJ1dGVzLm1kQ2FyZH1cIj4keyB0YWJsZUh0bWwgfTwvbWQtY2FyZD5gO1xuICB9XG5cbiAgcmV0dXJuIGAkeyB0YWJsZUh0bWwgfWA7XG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRUYWJsZS90ZW1wbGF0ZS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCRzY29wZSkge1xuXG4gIGxldCBleHByZXNzaW9uID0gdGhpcy5kYXRhLnNwbGl0KC8gaW4gL2kpWzFdO1xuICBsZXQgZGF0YVNvdXJjZSA9ICRzY29wZS4kcGFyZW50LiRldmFsKGV4cHJlc3Npb24pO1xuXG4gIGxldCBoYW5kbGVSZXN1bHRzID0gKHZhbHVlcykgPT4ge1xuICAgIHRoaXMuaXRlbXMgPSB2YWx1ZXM7XG4gIH07XG5cbiAgaWYgKGFuZ3VsYXIuaXNBcnJheShkYXRhU291cmNlKSkge1xuICAgIHRoaXMuaXRlbXMgPSBkYXRhU291cmNlO1xuICB9IGVsc2UgaWYgKGRhdGFTb3VyY2UpIHtcbiAgICBpZiAoZGF0YVNvdXJjZS5zdWNjZXNzKSB7XG4gICAgICBkYXRhU291cmNlLnN1Y2Nlc3MoaGFuZGxlUmVzdWx0cyk7XG4gICAgfSBlbHNlIGlmIChkYXRhU291cmNlLnRoZW4pIHtcbiAgICAgIGRhdGFTb3VyY2UudGhlbihoYW5kbGVSZXN1bHRzKTtcbiAgICB9IGVsc2UgaWYgKGRhdGFTb3VyY2UuZmluYWxseSkge1xuICAgICAgZGF0YVNvdXJjZS5maW5hbGx5KGhhbmRsZVJlc3VsdHMpO1xuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY3JpcHRzL21kVGFibGVCb2R5L2NvbnRyb2xsZXIuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigkZWxlbWVudCwgJGF0dHJpYnV0ZXMpIHtcblxuICBsZXQgcHJvcE5hbWUgPSAkYXR0cmlidXRlcy5tZERhdGEuc3BsaXQoLyBpbiAvaSlbMF07XG4gIGxldCBodG1sID0gJGVsZW1lbnQuaHRtbCgpLnJlcGxhY2UoL21kLXRhYmxlLWNlbGwvZywgJ3RkJyk7XG5cbiAgcmV0dXJuIGBcbiAgICA8dGJvZHk+XG4gICAgICA8dHIgbmctcmVwZWF0PVwiJHsgcHJvcE5hbWUgfSBpbiAkbWRUYWJsZUJvZHkuaXRlbXNcIj4keyBodG1sIH08L3RyPlxuICAgIDwvdGJvZHk+XG4gIGA7XG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvbWRUYWJsZUJvZHkvdGVtcGxhdGUuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigkZWxlbWVudCwgJGF0dHJpYnV0ZXMpIHtcblxuICBsZXQgaW5uZXJIdG1sID0gJGVsZW1lbnQuaHRtbCgpO1xuICBsZXQgZWxlbWVudENsYXNzID0gdHlwZW9mICRhdHRyaWJ1dGVzLm1kTnVtZXJpYyAhPT0gJ3VuZGVmaW5lZCcgPyAnbWQtdGFibGUtaXMtbnVtZXJpYycgOiAnJztcblxuICBpZiAoJGVsZW1lbnRbMF0ucGFyZW50Tm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdtZC10YWJsZS1ib2R5Jykge1xuICAgIGlmICgkYXR0cmlidXRlcy5tZEVkaXQpIHtcbiAgICAgIGVsZW1lbnRDbGFzcyArPSAnIG1kLXRhYmxlLWlubGluZS1lZGl0IG1kLWluay1yaXBwbGUnO1xuICAgIH1cblxuICAgIHJldHVybiBgPHRkIGNsYXNzPVwiJHsgZWxlbWVudENsYXNzIH1cIj4keyBpbm5lckh0bWwgfTwvdGQ+YDtcbiAgfVxuXG4gIGlmICgkYXR0cmlidXRlcy5tZFNvcnQpIHtcbiAgICBlbGVtZW50Q2xhc3MgKz0gJyBtZC10YWJsZS1oYXMtc29ydCc7XG4gICAgaW5uZXJIdG1sID0gYFxuICAgICAgPGRpdiBjbGFzcz1cIm1kLXRhYmxlLXNvcnRhYmxlXCI+XG4gICAgICAgIDxtZC1pY29uIGNsYXNzPVwibWQtdGFibGUtc29ydC1pY29uIG1hdGVyaWFsLWljb25zXCI+YXJyb3dfdXB3YXJkPC9tZC1pY29uPlxuICAgICAgICAkeyBpbm5lckh0bWwgfVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHJldHVybiBgPHRoIGNsYXNzPVwiJHsgZWxlbWVudENsYXNzIH1cIj4keyBpbm5lckh0bWwgfTwvdGg+YDtcblxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tZFRhYmxlQ2VsbC90ZW1wbGF0ZS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIHJldHVybiBgPHRoZWFkPjx0ciBuZy10cmFuc2NsdWRlPjwvdHI+PC90aGVhZD5gO1xuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY3JpcHRzL21kVGFibGVIZWFkL3RlbXBsYXRlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==