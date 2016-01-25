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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _config = __webpack_require__(2);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function (angular) {
	
	  angular.module('angular-material-data-table', ['ngMaterial']).config(_config2.default);
	})(angular);

/***/ },
/* 2 */
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2VkNzQ4YTk4YTk0YjcwMmQ0YzkiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanM/MjY0NSIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcz8zNDc5Iiwid2VicGFjazovLy8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcz80MjY0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOztBQ0FBLHFCQUFRLEc7Ozs7OztBQ0FSOztBQUVBLEtBQUksVUFBVSxvQkFBUTs7QUFFdEIsS0FBSSxXQUFXLHVCQUF1Qjs7QUFFdEMsVUFBUyx1QkFBdUIsS0FBSyxFQUFFLE9BQU8sT0FBTyxJQUFJLGFBQWEsTUFBTSxFQUFFLFNBQVM7O0FDSnZGLEVBQUMsVUFBQyxTQUFZOztHQUVaLFFBQ0csT0FBTywrQkFBK0IsQ0FDckMsZUFFRCxPQUpIO0lBTUMsUzs7Ozs7O0FDVkg7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOzs7QUFHVCxTQUFRLFVDTk8sVUFBUyxvQkFBb0I7R0FDMUMsSUFBSSxpQkFBaUI7R0FDckIsSUFBSSxtQkFBbUI7R0FDdkIsSUFBSSxxQkFBcUIsbUJBQW1CLGdCQUFnQixRQUFRLE9BQU8sT0FBTztHQUNsRixJQUFJLGlCQUFpQixtQkFBbUIsY0FBYyxvQkFBb0I7S0FDeEUsT0FBTyxtQkFBbUIsa0JBQWtCLG9CQUFvQjtLQUNoRSxzQkFBc0I7OztHQUd4QixtQkFBbUIsY0FBYyxrQkFBa0I7R0FDbkQsbUJBQW1CLE1BQU0sb0JBQW9CLGVBQWUiLCJmaWxlIjoiYW5ndWxhci1tYXRlcmlhbC1kYXRhLXRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBjZWQ3NDhhOThhOTRiNzAyZDRjOVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi9zcmMvbWFpbi5qcycpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW5kZXguanNcbiAqKi8iLCJyZXF1aXJlKCcuL3NyYy9tYWluLmpzJyk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2luZGV4LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnJyk7XG5cbnZhciBfY29uZmlnMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbmZpZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbihmdW5jdGlvbiAoYW5ndWxhcikge1xuXG4gIGFuZ3VsYXIubW9kdWxlKCdhbmd1bGFyLW1hdGVyaWFsLWRhdGEtdGFibGUnLCBbJ25nTWF0ZXJpYWwnXSkuY29uZmlnKF9jb25maWcyLmRlZmF1bHQpO1xufSkoYW5ndWxhcik7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbWFpbi5qc1xuICoqLyIsImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuXG4oKGFuZ3VsYXIpID0+IHtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnYW5ndWxhci1tYXRlcmlhbC1kYXRhLXRhYmxlJywgW1xuICAgICAgJ25nTWF0ZXJpYWwnXG4gICAgXSlcbiAgICAuY29uZmlnKGNvbmZpZyk7XG5cbn0pKGFuZ3VsYXIpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbWFpbi5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCRtZFRoZW1pbmdQcm92aWRlcikge1xuICB2YXIgdGhlbWVzQ29uc3RhbnQgPSAnX1RIRU1FUyc7XG4gIHZhciBwYWxldHRlc0NvbnN0YW50ID0gJ19QQUxFVFRFUyc7XG4gIHZhciBkZWZhdWx0UGFsZXR0ZU5hbWUgPSAkbWRUaGVtaW5nUHJvdmlkZXJbdGhlbWVzQ29uc3RhbnRdLmRlZmF1bHQuY29sb3JzLmFjY2VudC5uYW1lO1xuICB2YXIgZGVmYXVsdFBhbGV0dGUgPSAkbWRUaGVtaW5nUHJvdmlkZXIuZXh0ZW5kUGFsZXR0ZShkZWZhdWx0UGFsZXR0ZU5hbWUsIHtcbiAgICAnNTAwJzogJG1kVGhlbWluZ1Byb3ZpZGVyW3BhbGV0dGVzQ29uc3RhbnRdW2RlZmF1bHRQYWxldHRlTmFtZV1bNTBdLFxuICAgIGNvbnRyYXN0RGVmYXVsdENvbG9yOiAnZGFyaydcbiAgfSk7XG5cbiAgJG1kVGhlbWluZ1Byb3ZpZGVyLmRlZmluZVBhbGV0dGUoJ2RlZmF1bHRQYWxldHRlJywgZGVmYXVsdFBhbGV0dGUpO1xuICAkbWRUaGVtaW5nUHJvdmlkZXIudGhlbWUoJ2FsdGVybmF0ZS1oZWFkZXInKS5wcmltYXJ5UGFsZXR0ZSgnZGVmYXVsdFBhbGV0dGUnKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29uZmlnLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oJG1kVGhlbWluZ1Byb3ZpZGVyKSB7XG4gIGxldCB0aGVtZXNDb25zdGFudCA9ICdfVEhFTUVTJztcbiAgbGV0IHBhbGV0dGVzQ29uc3RhbnQgPSAnX1BBTEVUVEVTJztcbiAgbGV0IGRlZmF1bHRQYWxldHRlTmFtZSA9ICRtZFRoZW1pbmdQcm92aWRlclt0aGVtZXNDb25zdGFudF0uZGVmYXVsdC5jb2xvcnMuYWNjZW50Lm5hbWU7XG4gIGxldCBkZWZhdWx0UGFsZXR0ZSA9ICRtZFRoZW1pbmdQcm92aWRlci5leHRlbmRQYWxldHRlKGRlZmF1bHRQYWxldHRlTmFtZSwge1xuICAgICc1MDAnOiAkbWRUaGVtaW5nUHJvdmlkZXJbcGFsZXR0ZXNDb25zdGFudF1bZGVmYXVsdFBhbGV0dGVOYW1lXVs1MF0sXG4gICAgY29udHJhc3REZWZhdWx0Q29sb3I6ICdkYXJrJ1xuICB9KTtcblxuICAkbWRUaGVtaW5nUHJvdmlkZXIuZGVmaW5lUGFsZXR0ZSgnZGVmYXVsdFBhbGV0dGUnLCBkZWZhdWx0UGFsZXR0ZSk7XG4gICRtZFRoZW1pbmdQcm92aWRlci50aGVtZSgnYWx0ZXJuYXRlLWhlYWRlcicpLnByaW1hcnlQYWxldHRlKCdkZWZhdWx0UGFsZXR0ZScpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29uZmlnLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==