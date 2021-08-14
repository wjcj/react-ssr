/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".server.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/react-loadable.json":
/*!**********************************!*\
  !*** ./dist/react-loadable.json ***!
  \**********************************/
/*! exports provided: ../componments/todoList, ./input, ./item, ./list, ./pages/home, ../services, ../store/actions, ./pages/user, ../../dist/react-loadable.json, ../../../node_modules/css-loader/dist/runtime/api.js, ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js, ../client/App, ./componments/header, ./header.sass, ./componments/layout, ./layout.sass, ./componments/loading, ../hooks, ./pages/404, ./pages/about, ./pages/login, ./pages/protected, ../public/cats.jpeg, ../client/store, ./reducers, ../store/types, ../utils, ./src/server/index.js, undefined, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"../componments/todoList\":[{\"id\":\"./src/client/componments/todoList/index.js\",\"name\":\"./src/client/componments/todoList/index.js\",\"file\":\"0.server.js\",\"publicPath\":\"/0.server.js\"},{\"id\":\"./src/client/componments/todoList/index.js\",\"name\":\"./src/client/componments/todoList/index.js\",\"file\":\"0.server.js.map\",\"publicPath\":\"/0.server.js.map\"}],\"./input\":[{\"id\":\"./src/client/componments/todoList/input.js\",\"name\":\"./src/client/componments/todoList/input.js\",\"file\":\"0.server.js\",\"publicPath\":\"/0.server.js\"},{\"id\":\"./src/client/componments/todoList/input.js\",\"name\":\"./src/client/componments/todoList/input.js\",\"file\":\"0.server.js.map\",\"publicPath\":\"/0.server.js.map\"}],\"./item\":[{\"id\":\"./src/client/componments/todoList/item.js\",\"name\":\"./src/client/componments/todoList/item.js\",\"file\":\"0.server.js\",\"publicPath\":\"/0.server.js\"},{\"id\":\"./src/client/componments/todoList/item.js\",\"name\":\"./src/client/componments/todoList/item.js\",\"file\":\"0.server.js.map\",\"publicPath\":\"/0.server.js.map\"}],\"./list\":[{\"id\":\"./src/client/componments/todoList/list.js\",\"name\":\"./src/client/componments/todoList/list.js\",\"file\":\"0.server.js\",\"publicPath\":\"/0.server.js\"},{\"id\":\"./src/client/componments/todoList/list.js\",\"name\":\"./src/client/componments/todoList/list.js\",\"file\":\"0.server.js.map\",\"publicPath\":\"/0.server.js.map\"}],\"./pages/home\":[{\"id\":\"./src/client/pages/home.js\",\"name\":\"./src/client/pages/home.js\",\"file\":\"0.server.js\",\"publicPath\":\"/0.server.js\"},{\"id\":\"./src/client/pages/home.js\",\"name\":\"./src/client/pages/home.js\",\"file\":\"0.server.js.map\",\"publicPath\":\"/0.server.js.map\"}],\"../services\":[{\"id\":\"./src/client/services/index.js\",\"name\":\"./src/client/services/index.js\",\"file\":\"0.server.js\",\"publicPath\":\"/0.server.js\"},{\"id\":\"./src/client/services/index.js\",\"name\":\"./src/client/services/index.js\",\"file\":\"0.server.js.map\",\"publicPath\":\"/0.server.js.map\"},{\"id\":\"./src/client/services/index.js\",\"name\":\"./src/client/services/index.js\",\"file\":\"1.server.js\",\"publicPath\":\"/1.server.js\"},{\"id\":\"./src/client/services/index.js\",\"name\":\"./src/client/services/index.js\",\"file\":\"1.server.js.map\",\"publicPath\":\"/1.server.js.map\"}],\"../store/actions\":[{\"id\":\"./src/client/store/actions.js\",\"name\":\"./src/client/store/actions.js\",\"file\":\"0.server.js\",\"publicPath\":\"/0.server.js\"},{\"id\":\"./src/client/store/actions.js\",\"name\":\"./src/client/store/actions.js\",\"file\":\"0.server.js.map\",\"publicPath\":\"/0.server.js.map\"},{\"id\":\"./src/client/store/actions.js\",\"name\":\"./src/client/store/actions.js\",\"file\":\"1.server.js\",\"publicPath\":\"/1.server.js\"},{\"id\":\"./src/client/store/actions.js\",\"name\":\"./src/client/store/actions.js\",\"file\":\"1.server.js.map\",\"publicPath\":\"/1.server.js.map\"}],\"./pages/user\":[{\"id\":\"./src/client/pages/user.js\",\"name\":\"./src/client/pages/user.js\",\"file\":\"1.server.js\",\"publicPath\":\"/1.server.js\"},{\"id\":\"./src/client/pages/user.js\",\"name\":\"./src/client/pages/user.js\",\"file\":\"1.server.js.map\",\"publicPath\":\"/1.server.js.map\"}],\"../../dist/react-loadable.json\":[{\"id\":\"./dist/react-loadable.json\",\"name\":\"./dist/react-loadable.json\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"./dist/react-loadable.json\",\"name\":\"./dist/react-loadable.json\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"}],\"../../../node_modules/css-loader/dist/runtime/api.js\":[{\"id\":\"./node_modules/css-loader/dist/runtime/api.js\",\"name\":\"./node_modules/css-loader/dist/runtime/api.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"./node_modules/css-loader/dist/runtime/api.js\",\"name\":\"./node_modules/css-loader/dist/runtime/api.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"}],\"../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js\":[{\"id\":\"./node_modules/css-loader/dist/runtime/cssWithMappingToString.js\",\"name\":\"./node_modules/css-loader/dist/runtime/cssWithMappingToString.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"./node_modules/css-loader/dist/runtime/cssWithMappingToString.js\",\"name\":\"./node_modules/css-loader/dist/runtime/cssWithMappingToString.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"}],\"../client/App\":[{\"id\":\"./src/client/App.js\",\"name\":\"./src/client/App.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"./src/client/App.js\",\"name\":\"./src/client/App.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"}],\"./componments/header\":[{\"id\":\"./src/client/componments/header.js\",\"name\":\"./src/client/componments/header.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"./src/client/componments/header.js\",\"name\":\"./src/client/componments/header.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"}],\"./header.sass\":[{\"id\":\"./src/client/componments/header.sass\",\"name\":\"./src/client/componments/header.sass\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"./src/client/componments/header.sass\",\"name\":\"./src/client/componments/header.sass\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"}],\"./componments/layout\":[{\"id\":\"./src/client/componments/layout.js\",\"name\":\"./src/client/componments/layout.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"./src/client/componments/layout.js\",\"name\":\"./src/client/componments/layout.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"}],\"./layout.sass\":[{\"id\":\"./src/client/componments/layout.sass\",\"name\":\"./src/client/componments/layout.sass\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"./src/client/componments/layout.sass\",\"name\":\"./src/client/componments/layout.sass\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"}],\"./componments/loading\":[{\"id\":\"./src/client/componments/loading.js\",\"name\":\"./src/client/componments/loading.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"./src/client/componments/loading.js\",\"name\":\"./src/client/componments/loading.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"}],\"../hooks\":[{\"id\":\"./src/client/hooks/index.js\",\"name\":\"./src/client/hooks/index.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"./src/client/hooks/index.js\",\"name\":\"./src/client/hooks/index.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"}],\"./pages/404\":[{\"id\":\"./src/client/pages/404.js\",\"name\":\"./src/client/pages/404.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"./src/client/pages/404.js\",\"name\":\"./src/client/pages/404.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"}],\"./pages/about\":[{\"id\":\"./src/client/pages/about.js\",\"name\":\"./src/client/pages/about.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"./src/client/pages/about.js\",\"name\":\"./src/client/pages/about.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"}],\"./pages/login\":[{\"id\":\"./src/client/pages/login.js\",\"name\":\"./src/client/pages/login.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"./src/client/pages/login.js\",\"name\":\"./src/client/pages/login.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"}],\"./pages/protected\":[{\"id\":\"./src/client/pages/protected.js\",\"name\":\"./src/client/pages/protected.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"./src/client/pages/protected.js\",\"name\":\"./src/client/pages/protected.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"}],\"../public/cats.jpeg\":[{\"id\":\"./src/client/public/cats.jpeg\",\"name\":\"./src/client/public/cats.jpeg\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"./src/client/public/cats.jpeg\",\"name\":\"./src/client/public/cats.jpeg\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"}],\"../client/store\":[{\"id\":\"./src/client/store/index.js\",\"name\":\"./src/client/store/index.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"./src/client/store/index.js\",\"name\":\"./src/client/store/index.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"}],\"./reducers\":[{\"id\":\"./src/client/store/reducers.js\",\"name\":\"./src/client/store/reducers.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"./src/client/store/reducers.js\",\"name\":\"./src/client/store/reducers.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"}],\"../store/types\":[{\"id\":\"./src/client/store/types.js\",\"name\":\"./src/client/store/types.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"./src/client/store/types.js\",\"name\":\"./src/client/store/types.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"}],\"../utils\":[{\"id\":\"./src/client/utils.js\",\"name\":\"./src/client/utils.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"./src/client/utils.js\",\"name\":\"./src/client/utils.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"}],\"./src/server/index.js\":[{\"id\":\"./src/server/index.js\",\"name\":\"./src/server/index.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"./src/server/index.js\",\"name\":\"./src/server/index.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"}],\"undefined\":[{\"id\":\"core-js/modules/es6.array.filter.js\",\"name\":\"core-js/modules/es6.array.filter.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"core-js/modules/es6.array.for-each.js\",\"name\":\"core-js/modules/es6.array.for-each.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"core-js/modules/es6.array.from.js\",\"name\":\"core-js/modules/es6.array.from.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"core-js/modules/es6.array.index-of.js\",\"name\":\"core-js/modules/es6.array.index-of.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"core-js/modules/es6.array.is-array.js\",\"name\":\"core-js/modules/es6.array.is-array.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"core-js/modules/es6.array.iterator.js\",\"name\":\"core-js/modules/es6.array.iterator.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"core-js/modules/es6.array.map.js\",\"name\":\"core-js/modules/es6.array.map.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"core-js/modules/es6.array.slice.js\",\"name\":\"core-js/modules/es6.array.slice.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"core-js/modules/es6.date.to-string.js\",\"name\":\"core-js/modules/es6.date.to-string.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"core-js/modules/es6.function.name.js\",\"name\":\"core-js/modules/es6.function.name.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"core-js/modules/es6.object.assign.js\",\"name\":\"core-js/modules/es6.object.assign.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"core-js/modules/es6.object.define-properties.js\",\"name\":\"core-js/modules/es6.object.define-properties.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"core-js/modules/es6.object.define-property.js\",\"name\":\"core-js/modules/es6.object.define-property.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"core-js/modules/es6.object.get-own-property-descriptor.js\",\"name\":\"core-js/modules/es6.object.get-own-property-descriptor.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"core-js/modules/es6.object.keys.js\",\"name\":\"core-js/modules/es6.object.keys.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"core-js/modules/es6.object.to-string.js\",\"name\":\"core-js/modules/es6.object.to-string.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"core-js/modules/es6.promise.js\",\"name\":\"core-js/modules/es6.promise.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"core-js/modules/es6.regexp.replace.js\",\"name\":\"core-js/modules/es6.regexp.replace.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"core-js/modules/es6.regexp.to-string.js\",\"name\":\"core-js/modules/es6.regexp.to-string.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"core-js/modules/es6.set.js\",\"name\":\"core-js/modules/es6.set.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"core-js/modules/es6.string.iterator.js\",\"name\":\"core-js/modules/es6.string.iterator.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"core-js/modules/es6.string.trim.js\",\"name\":\"core-js/modules/es6.string.trim.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"core-js/modules/es6.symbol.js\",\"name\":\"core-js/modules/es6.symbol.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"core-js/modules/es7.object.get-own-property-descriptors.js\",\"name\":\"core-js/modules/es7.object.get-own-property-descriptors.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"core-js/modules/web.dom.iterable.js\",\"name\":\"core-js/modules/web.dom.iterable.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"express\",\"name\":\"express\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"isomorphic-style-loader/StyleContext\",\"name\":\"isomorphic-style-loader/StyleContext\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"react\",\"name\":\"react\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"react-dom/server\",\"name\":\"react-dom/server\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"react-helmet\",\"name\":\"react-helmet\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"react-loadable\",\"name\":\"react-loadable\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"react-loadable/webpack\",\"name\":\"react-loadable/webpack\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"react-redux\",\"name\":\"react-redux\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"react-router-config\",\"name\":\"react-router-config\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"react-router-dom\",\"name\":\"react-router-dom\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"redux\",\"name\":\"redux\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"redux-thunk\",\"name\":\"redux-thunk\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"regenerator-runtime/runtime.js\",\"name\":\"regenerator-runtime/runtime.js\",\"file\":\"server.js\",\"publicPath\":\"/server.js\"},{\"id\":\"core-js/modules/es6.array.filter.js\",\"name\":\"core-js/modules/es6.array.filter.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"core-js/modules/es6.array.for-each.js\",\"name\":\"core-js/modules/es6.array.for-each.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"core-js/modules/es6.array.from.js\",\"name\":\"core-js/modules/es6.array.from.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"core-js/modules/es6.array.index-of.js\",\"name\":\"core-js/modules/es6.array.index-of.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"core-js/modules/es6.array.is-array.js\",\"name\":\"core-js/modules/es6.array.is-array.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"core-js/modules/es6.array.iterator.js\",\"name\":\"core-js/modules/es6.array.iterator.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"core-js/modules/es6.array.map.js\",\"name\":\"core-js/modules/es6.array.map.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"core-js/modules/es6.array.slice.js\",\"name\":\"core-js/modules/es6.array.slice.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"core-js/modules/es6.date.to-string.js\",\"name\":\"core-js/modules/es6.date.to-string.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"core-js/modules/es6.function.name.js\",\"name\":\"core-js/modules/es6.function.name.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"core-js/modules/es6.object.assign.js\",\"name\":\"core-js/modules/es6.object.assign.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"core-js/modules/es6.object.define-properties.js\",\"name\":\"core-js/modules/es6.object.define-properties.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"core-js/modules/es6.object.define-property.js\",\"name\":\"core-js/modules/es6.object.define-property.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"core-js/modules/es6.object.get-own-property-descriptor.js\",\"name\":\"core-js/modules/es6.object.get-own-property-descriptor.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"core-js/modules/es6.object.keys.js\",\"name\":\"core-js/modules/es6.object.keys.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"core-js/modules/es6.object.to-string.js\",\"name\":\"core-js/modules/es6.object.to-string.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"core-js/modules/es6.promise.js\",\"name\":\"core-js/modules/es6.promise.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"core-js/modules/es6.regexp.replace.js\",\"name\":\"core-js/modules/es6.regexp.replace.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"core-js/modules/es6.regexp.to-string.js\",\"name\":\"core-js/modules/es6.regexp.to-string.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"core-js/modules/es6.set.js\",\"name\":\"core-js/modules/es6.set.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"core-js/modules/es6.string.iterator.js\",\"name\":\"core-js/modules/es6.string.iterator.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"core-js/modules/es6.string.trim.js\",\"name\":\"core-js/modules/es6.string.trim.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"core-js/modules/es6.symbol.js\",\"name\":\"core-js/modules/es6.symbol.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"core-js/modules/es7.object.get-own-property-descriptors.js\",\"name\":\"core-js/modules/es7.object.get-own-property-descriptors.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"core-js/modules/web.dom.iterable.js\",\"name\":\"core-js/modules/web.dom.iterable.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"express\",\"name\":\"express\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"isomorphic-style-loader/StyleContext\",\"name\":\"isomorphic-style-loader/StyleContext\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"react\",\"name\":\"react\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"react-dom/server\",\"name\":\"react-dom/server\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"react-helmet\",\"name\":\"react-helmet\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"react-loadable\",\"name\":\"react-loadable\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"react-loadable/webpack\",\"name\":\"react-loadable/webpack\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"react-redux\",\"name\":\"react-redux\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"react-router-config\",\"name\":\"react-router-config\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"react-router-dom\",\"name\":\"react-router-dom\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"redux\",\"name\":\"redux\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"redux-thunk\",\"name\":\"redux-thunk\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"},{\"id\":\"regenerator-runtime/runtime.js\",\"name\":\"regenerator-runtime/runtime.js\",\"file\":\"server.js.map\",\"publicPath\":\"/server.js.map\"}]}");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/componments/header.sass":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/componments/header.sass ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header {\n  height: 60px;\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 2px 6px #ccc;\n  margin-bottom: 20px;\n}\n.header-nav {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n  list-style: none;\n  align-items: center;\n}\n.header-nav a {\n  display: inline-block;\n  min-width: 60px;\n  text-align: center;\n}\n.header-nav a + a {\n  margin-left: 10px;\n}\n.header-profile {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.header-profile img {\n  width: 100%;\n  height: auto;\n}", "",{"version":3,"sources":["webpack://./src/client/componments/header.sass"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,0BAAA;EACA,mBAAA;AACF;AACE;EACE,OAAA;EACA,aAAA;EACA,yBAAA;EACA,gBAAA;EACA,mBAAA;AACJ;AACI;EACE,qBAAA;EACA,eAAA;EACA,kBAAA;AACN;AACI;EACE,iBAAA;AACN;AACE;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;AACJ;AACI;EACE,WAAA;EACA,YAAA;AACN","sourcesContent":[".header\n  height: 60px\n  padding: 5px 10px\n  display: flex\n  align-items: center\n  justify-content: space-between\n  box-shadow: 0 2px 6px #ccc\n  margin-bottom: 20px\n  \n  &-nav\n    flex: 1\n    display: flex\n    justify-content: flex-end\n    list-style: none\n    align-items: center\n    \n    a\n      display: inline-block\n      min-width: 60px\n      text-align: center\n\n    a + a\n      margin-left: 10px\n\n  &-profile\n    width: 50px\n    height: 50px\n    border-radius: 50%\n    overflow: hidden\n    \n    img\n      width: 100%\n      height: auto\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/componments/layout.sass":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/componments/layout.sass ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".app-layout {\n  padding: 10px;\n}\n\n.app-main {\n  margin-bottom: 20px;\n}", "",{"version":3,"sources":["webpack://./src/client/componments/layout.sass"],"names":[],"mappings":"AAAA;EACE,aAAA;AACF;;AACA;EACE,mBAAA;AAEF","sourcesContent":[".app-layout\n  padding: 10px\n  \n.app-main\n  margin-bottom: 20px"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */



var inserted = {};

function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode("0x" + p1);
  }));
}

function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(id);

      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

function insertCss(styles, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$replace = _ref.replace,
      replace = _ref$replace === void 0 ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === void 0 ? false : _ref$prepend,
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;

  var ids = [];

  for (var i = 0; i < styles.length; i++) {
    var _styles$i = styles[i],
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];
    var id = "" + prefix + moduleId + "-" + i;
    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;
    var elem = document.getElementById(id);
    var create = false;

    if (!elem) {
      create = true;
      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;

    if (sourceMap && typeof btoa === 'function') {
      cssText += "\n/*# sourceMappingURL=data:application/json;base64," + b64EncodeUnicode(JSON.stringify(sourceMap)) + "*/";
      cssText += "\n/*# sourceURL=" + sourceMap.file + "?" + id + "*/";
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;
//# sourceMappingURL=insertCss.js.map


/***/ }),

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! exports provided: routes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _componments_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componments/layout */ "./src/client/componments/layout.js");
/* harmony import */ var _componments_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componments/header */ "./src/client/componments/header.js");
/* harmony import */ var _componments_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componments/loading */ "./src/client/componments/loading.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/about */ "./src/client/pages/about.js");
/* harmony import */ var _pages_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/login */ "./src/client/pages/login.js");
/* harmony import */ var _pages_protected__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/protected */ "./src/client/pages/protected.js");
/* harmony import */ var _pages_404__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/404 */ "./src/client/pages/404.js");











var Home = react_loadable__WEBPACK_IMPORTED_MODULE_6___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./pages/home */ "./src/client/pages/home.js"));
  },
  modules: ['./pages/home'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ./pages/home */ "./src/client/pages/home.js")];
  },
  loading: _componments_loading__WEBPACK_IMPORTED_MODULE_5__["default"]
});
var User = react_loadable__WEBPACK_IMPORTED_MODULE_6___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./pages/user */ "./src/client/pages/user.js"));
  },
  modules: ['./pages/user'],
  webpack: function webpack() {
    return [/*require.resolve*/(/*! ./pages/user */ "./src/client/pages/user.js")];
  },
  loading: _componments_loading__WEBPACK_IMPORTED_MODULE_5__["default"]
}); // Root 组件通过 props.route.routes 拿到下一层路由进行渲染，完成多级路由渲染

var Root = function Root(_ref) {
  var route = _ref.route;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_componments_layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_componments_header__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/home"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/about"
  }, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/user"
  }, "User"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/protected"
  }, "Protected")), Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__["renderRoutes"])(route.routes));
};

var routes = [{
  component: Root,
  routes: [{
    path: "/",
    exact: true,
    component: Home
  }, {
    path: "/home",
    exact: true,
    component: Home
  }, {
    path: "/user",
    exact: true,
    component: User
  }, {
    path: "/about",
    exact: true,
    component: _pages_about__WEBPACK_IMPORTED_MODULE_7__["default"]
  }, {
    path: "/login",
    exact: true,
    component: _pages_login__WEBPACK_IMPORTED_MODULE_8__["default"]
  }, {
    path: "/protected",
    exact: true,
    component: _pages_protected__WEBPACK_IMPORTED_MODULE_9__["default"]
  }, {
    path: "*",
    component: _pages_404__WEBPACK_IMPORTED_MODULE_10__["default"]
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__["renderRoutes"])(routes));
});

/***/ }),

/***/ "./src/client/componments/header.js":
/*!******************************************!*\
  !*** ./src/client/componments/header.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_cats_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/cats.jpeg */ "./src/client/public/cats.jpeg");
/* harmony import */ var _header_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.sass */ "./src/client/componments/header.sass");
/* harmony import */ var _header_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header_sass__WEBPACK_IMPORTED_MODULE_2__);




var Header = function Header(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _public_cats_jpeg__WEBPACK_IMPORTED_MODULE_1__["default"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "header-nav"
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/client/componments/header.sass":
/*!********************************************!*\
  !*** ./src/client/componments/header.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./header.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/componments/header.sass");
    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/client/componments/layout.js":
/*!******************************************!*\
  !*** ./src/client/componments/layout.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.sass */ "./src/client/componments/layout.sass");
/* harmony import */ var _layout_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_layout_sass__WEBPACK_IMPORTED_MODULE_1__);



var Layout = function Layout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app-layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app-main"
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/client/componments/layout.sass":
/*!********************************************!*\
  !*** ./src/client/componments/layout.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./layout.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/componments/layout.sass");
    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/client/componments/loading.js":
/*!*******************************************!*\
  !*** ./src/client/componments/loading.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Loading = function Loading() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...");
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./src/client/hooks/index.js":
/*!***********************************!*\
  !*** ./src/client/hooks/index.js ***!
  \***********************************/
/*! exports provided: useComponentWillMount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useComponentWillMount", function() { return useComponentWillMount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useComponentWillMount = function useComponentWillMount(cb) {
  var willMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);

  if (willMount.current) {
    cb();
  }

  ;
  willMount.current = false;
};

/***/ }),

/***/ "./src/client/pages/404.js":
/*!*********************************!*\
  !*** ./src/client/pages/404.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks */ "./src/client/hooks/index.js");




var NotFound = function NotFound(_ref) {
  var staticContext = _ref.staticContext;
  Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useComponentWillMount"])(function () {
    staticContext && (staticContext.NotFound = true);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "not-found"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "404"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: "react ssr demo: 404"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404"));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./src/client/pages/about.js":
/*!***********************************!*\
  !*** ./src/client/pages/about.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);



var About = function About() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: "react ssr demo: user"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u987E\u540D\u601D\u4E49\uFF0C\u670D\u52A1\u7AEF\u6E32\u67D3\u5C31\u662F\u5728\u6D4F\u89C8\u5668\u8BF7\u6C42\u9875\u9762URL\u7684\u65F6\u5019\uFF0C\u670D\u52A1\u7AEF\u5C06\u6211\u4EEC\u9700\u8981\u7684HTML\u6587\u672C\u7EC4\u88C5\u597D\uFF0C\u5E76\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668\uFF0C\u8FD9\u4E2AHTML\u6587\u672C\u88AB\u6D4F\u89C8\u5668\u89E3\u6790\u4E4B\u540E\uFF0C\u4E0D\u9700\u8981\u7ECF\u8FC7JavaScript \u811A\u672C\u7684\u6267\u884C\uFF0C\u5373\u53EF\u76F4\u63A5\u6784\u5EFA\u51FA\u5E0C\u671B\u7684DOM \u6811\u5E76\u5C55\u793A\u5230\u9875\u9762\u4E2D\u3002 \u8FD9\u4E2A\u670D\u52A1\u7AEF\u7EC4\u88C5HTML\u7684\u8FC7\u7A0B\uFF0C\u53EB\u505A\u670D\u52A1\u7AEF\u6E32\u67D3\u3002"));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/client/pages/login.js":
/*!***********************************!*\
  !*** ./src/client/pages/login.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/client/utils.js");




var Login = function Login(_ref) {
  var history = _ref.history,
      location = _ref.location;

  var _ref2 = location.state || {
    from: {
      pathname: "/"
    }
  },
      from = _ref2.from;

  var login = function login() {
    _utils__WEBPACK_IMPORTED_MODULE_2__["fakeAuth"].signin(function () {
      history.replace(from);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u60A8\u5FC5\u987B\u767B\u5F55\u624D\u80FD\u5728\u67E5\u770B\u9875\u9762 ", from.pathname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: login
  }, "Log in"));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/client/pages/protected.js":
/*!***************************************!*\
  !*** ./src/client/pages/protected.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/client/utils.js");




var Protected = function Protected(_ref) {
  var location = _ref.location,
      history = _ref.history;
  var toPath = {
    pathname: '/login',
    state: {
      from: location
    }
  };

  var signout = function signout() {
    _utils__WEBPACK_IMPORTED_MODULE_2__["fakeAuth"].signout(function () {
      history.push(toPath);
    });
  };

  return _utils__WEBPACK_IMPORTED_MODULE_2__["fakeAuth"].isAuthenticated ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u5DF2\u767B\u5F55\u3002", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: signout
  }, "Sign out")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: toPath
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Protected);

/***/ }),

/***/ "./src/client/public/cats.jpeg":
/*!*************************************!*\
  !*** ./src/client/public/cats.jpeg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cats.jpeg");

/***/ }),

/***/ "./src/client/store/index.js":
/*!***********************************!*\
  !*** ./src/client/store/index.js ***!
  \***********************************/
/*! exports provided: createServerStore, createClientStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createServerStore", function() { return createServerStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClientStore", function() { return createClientStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/client/store/reducers.js");




function logger(_ref) {
  var getState = _ref.getState;
  return function (next) {
    return function (action) {
      console.log('will dispatch', action);
      var returnValue = next(action);
      console.log('state after dispatch', getState());
      return returnValue;
    };
  };
} // 保证每个用户访问时独立的 store


var createServerStore = function createServerStore(initialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));
}; // 脱水

var createClientStore = function createClientStore() {
  var defaultState = {};
  var textarea = document.getElementById('textarea-ssr-data');

  if (textarea && textarea.value) {
    defaultState = JSON.parse(textarea.value);
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], defaultState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(logger, redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));
};

/***/ }),

/***/ "./src/client/store/reducers.js":
/*!**************************************!*\
  !*** ./src/client/store/reducers.js ***!
  \**************************************/
/*! exports provided: todoReducer, userReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoReducer", function() { return todoReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.filter.js */ "core-js/modules/es6.array.filter.js");
/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.is-array.js */ "core-js/modules/es6.array.is-array.js");
/* harmony import */ var core_js_modules_es6_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ "core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.string.iterator.js */ "core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.array.from.js */ "core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.array.slice.js */ "core-js/modules/es6.array.slice.js");
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.object.define-property.js */ "core-js/modules/es6.object.define-property.js");
/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.object.keys.js */ "core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es6.object.get-own-property-descriptor.js */ "core-js/modules/es6.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es6.array.for-each.js */ "core-js/modules/es6.array.for-each.js");
/* harmony import */ var core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es7.object.get-own-property-descriptors.js */ "core-js/modules/es7.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es6_object_define_properties_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es6.object.define-properties.js */ "core-js/modules/es6.object.define-properties.js");
/* harmony import */ var core_js_modules_es6_object_define_properties_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_properties_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./types */ "./src/client/store/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var todoReducer = function todoReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      playlod = action.playlod;

  switch (type) {
    case _types__WEBPACK_IMPORTED_MODULE_18__["TODOS_TYPE_INIT"]:
      return playlod || [];

    case _types__WEBPACK_IMPORTED_MODULE_18__["TODOS_TYPE_ADD"]:
      return [].concat(_toConsumableArray(state), [playlod]);

    case _types__WEBPACK_IMPORTED_MODULE_18__["TODOS_TYPE_REMOVE"]:
      return state.filter(function (todo) {
        return todo.id !== playlod;
      });

    case _types__WEBPACK_IMPORTED_MODULE_18__["TODOS_TYPE_TOGGLE"]:
      {
        var todoList = state.map(function (todo) {
          if (todo.id === playlod) {
            todo.completed = !todo.completed;
            return _objectSpread(_objectSpread({}, todo), {}, {
              completed: !todo.completed
            });
          }

          return todo;
        });
        return todoList;
      }

    default:
      return state;
  }
};
var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      playlod = action.playlod;

  switch (type) {
    case _types__WEBPACK_IMPORTED_MODULE_18__["USER_TYPE_SET"]:
      return _objectSpread(_objectSpread({}, state || {}), playlod);

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_17__["combineReducers"])({
  todos: todoReducer,
  user: userReducer
}));

/***/ }),

/***/ "./src/client/store/types.js":
/*!***********************************!*\
  !*** ./src/client/store/types.js ***!
  \***********************************/
/*! exports provided: TODOS_TYPE_INIT, TODOS_TYPE_ADD, TODOS_TYPE_REMOVE, TODOS_TYPE_TOGGLE, USER_TYPE_SET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TODOS_TYPE_INIT", function() { return TODOS_TYPE_INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TODOS_TYPE_ADD", function() { return TODOS_TYPE_ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TODOS_TYPE_REMOVE", function() { return TODOS_TYPE_REMOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TODOS_TYPE_TOGGLE", function() { return TODOS_TYPE_TOGGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_TYPE_SET", function() { return USER_TYPE_SET; });
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ "core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_0__);

var TODOS_TYPE_INIT = Symbol('todos_init');
var TODOS_TYPE_ADD = Symbol('todos_add');
var TODOS_TYPE_REMOVE = Symbol('todos_remove');
var TODOS_TYPE_TOGGLE = Symbol('todos_toggle');
var USER_TYPE_SET = Symbol('user_set');

/***/ }),

/***/ "./src/client/utils.js":
/*!*****************************!*\
  !*** ./src/client/utils.js ***!
  \*****************************/
/*! exports provided: fakeAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeAuth", function() { return fakeAuth; });
var fakeAuth = {
  isAuthenticated: false,
  signin: function signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout: function signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_set_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.set.js */ "core-js/modules/es6.set.js");
/* harmony import */ var core_js_modules_es6_set_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_set_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.string.iterator.js */ "core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.array.for-each.js */ "core-js/modules/es6.array.for-each.js");
/* harmony import */ var core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_date_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.date.to-string.js */ "core-js/modules/es6.date.to-string.js");
/* harmony import */ var core_js_modules_es6_date_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string.js */ "core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.promise.js */ "core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_array_is_array_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.array.is-array.js */ "core-js/modules/es6.array.is-array.js");
/* harmony import */ var core_js_modules_es6_array_is_array_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_is_array_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ "core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es6.array.from.js */ "core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es6.array.slice.js */ "core-js/modules/es6.array.slice.js");
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-loadable */ "react-loadable");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react_loadable_webpack__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-loadable/webpack */ "react-loadable/webpack");
/* harmony import */ var react_loadable_webpack__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_loadable_webpack__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! isomorphic-style-loader/StyleContext */ "isomorphic-style-loader/StyleContext");
/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _client_store__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../client/store */ "./src/client/store/index.js");
/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../client/App */ "./src/client/App.js");
/* harmony import */ var _dist_react_loadable_json__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../dist/react-loadable.json */ "./dist/react-loadable.json");
var _dist_react_loadable_json__WEBPACK_IMPORTED_MODULE_28___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../dist/react-loadable.json */ "./dist/react-loadable.json", 1);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


















function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }














var app = express__WEBPACK_IMPORTED_MODULE_16___default()();
app.use(express__WEBPACK_IMPORTED_MODULE_16___default.a["static"]('dist'));
app.use('/*', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var css, insertCss, store, context, modules, jsx, bundles, contentDom, helmet, html;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            css = new Set();

            insertCss = function insertCss() {
              for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
                styles[_key] = arguments[_key];
              }

              return styles.forEach(function (style) {
                return css.add(style._getCss());
              });
            };

            store = Object(_client_store__WEBPACK_IMPORTED_MODULE_26__["createServerStore"])();
            _context.prev = 3;
            _context.next = 6;
            return loadBranchData(req.baseUrl, store);

          case 6:
            context = {};
            modules = [];
            jsx = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_20__["Provider"], {
              store: store
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_25___default.a.Provider, {
              value: {
                insertCss: insertCss
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(react_loadable__WEBPACK_IMPORTED_MODULE_23___default.a.Capture, {
              report: function report(moduleName) {
                return modules.push(moduleName);
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_19__["StaticRouter"], {
              context: context,
              location: req.baseUrl
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement(_client_App__WEBPACK_IMPORTED_MODULE_27__["default"], null)))));
            console.log('modules====>', modules);
            bundles = Object(react_loadable_webpack__WEBPACK_IMPORTED_MODULE_24__["getBundles"])(_dist_react_loadable_json__WEBPACK_IMPORTED_MODULE_28__, modules);
            contentDom = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_17__["renderToString"])(jsx);
            helmet = react_helmet__WEBPACK_IMPORTED_MODULE_22__["Helmet"].renderStatic();
            html = renderHtml({
              content: contentDom,
              state: store.getState(),
              css: css,
              helmet: helmet,
              bundles: bundles
            });

            if (!(context.action === 'REPLACE')) {
              _context.next = 17;
              break;
            }

            res.redirect(301, context.url);
            return _context.abrupt("return");

          case 17:
            if (context.notFound) {
              res.status(400);
            }

            res.send(html);
            _context.next = 24;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](3);
            res.status(500).send({
              error: _context.t0
            });

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 21]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
react_loadable__WEBPACK_IMPORTED_MODULE_23___default.a.preloadAll().then(function () {
  var port = process.env.PORT || 5000;
  app.listen(port, function () {
    return console.log("Node.js app is running at http://localhost:".concat(port, "/"));
  });
});

function renderHtml(_ref2) {
  var content = _ref2.content,
      state = _ref2.state,
      css = _ref2.css,
      helmet = _ref2.helmet,
      bundles = _ref2.bundles;
  return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n      <head>\n        <meta charset=\"UTF-8\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n        <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n        <link rel=\"icon\" href=\"data:;base64,=\">\n        ".concat(helmet.title.toString()).concat(helmet.meta.toString(), "\n        <style>").concat(_toConsumableArray(css).join(''), "</style>\n      </head>\n      <body>\n        <div id=\"root\">").concat(content, "</div>\n        <textarea id=\"textarea-ssr-data\" style=\"display: none\">").concat(JSON.stringify(state), "</textarea>\n        <script src=\"/client.js\"></script>\n        ").concat(bundles.map(function (bundle) {
    return "<script src=\"/".concat(bundle.file, "\"></script>");
  }).join('\n'), "\n        <script>window.main();</script>\n      </body>\n    </html>\n  ");
}

;

function loadBranchData(_x3, _x4) {
  return _loadBranchData.apply(this, arguments);
}

function _loadBranchData() {
  _loadBranchData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(pathname, store) {
    var branch, promises, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            branch = Object(react_router_config__WEBPACK_IMPORTED_MODULE_21__["matchRoutes"])(_client_App__WEBPACK_IMPORTED_MODULE_27__["routes"], pathname);
            promises = branch.map(function (_ref3) {
              var route = _ref3.route;
              var component = route.component;

              if (component.preload) {
                return component.preload().then(function (res) {
                  return res["default"].loadData ? res["default"].loadData(store) : null;
                });
              }

              return typeof component.loadData === 'function' ? component.loadData(store) : Promise.resolve(null);
            });
            _context2.next = 4;
            return Promise.all(promises);

          case 4:
            result = _context2.sent;
            return _context2.abrupt("return", result);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _loadBranchData.apply(this, arguments);
}

/***/ }),

/***/ "core-js/modules/es6.array.filter.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.array.filter.js" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.filter.js");

/***/ }),

/***/ "core-js/modules/es6.array.for-each.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es6.array.for-each.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.for-each.js");

/***/ }),

/***/ "core-js/modules/es6.array.from.js":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.array.from.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.from.js");

/***/ }),

/***/ "core-js/modules/es6.array.index-of.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es6.array.index-of.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.index-of.js");

/***/ }),

/***/ "core-js/modules/es6.array.is-array.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es6.array.is-array.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.is-array.js");

/***/ }),

/***/ "core-js/modules/es6.array.iterator.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es6.array.iterator.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.iterator.js");

/***/ }),

/***/ "core-js/modules/es6.array.map.js":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.array.map.js" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.map.js");

/***/ }),

/***/ "core-js/modules/es6.array.slice.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.slice.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.slice.js");

/***/ }),

/***/ "core-js/modules/es6.date.to-string.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es6.date.to-string.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.date.to-string.js");

/***/ }),

/***/ "core-js/modules/es6.function.name.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.function.name.js" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.function.name.js");

/***/ }),

/***/ "core-js/modules/es6.object.assign.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.object.assign.js" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.assign.js");

/***/ }),

/***/ "core-js/modules/es6.object.define-properties.js":
/*!******************************************************************!*\
  !*** external "core-js/modules/es6.object.define-properties.js" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.define-properties.js");

/***/ }),

/***/ "core-js/modules/es6.object.define-property.js":
/*!****************************************************************!*\
  !*** external "core-js/modules/es6.object.define-property.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.define-property.js");

/***/ }),

/***/ "core-js/modules/es6.object.get-own-property-descriptor.js":
/*!****************************************************************************!*\
  !*** external "core-js/modules/es6.object.get-own-property-descriptor.js" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.get-own-property-descriptor.js");

/***/ }),

/***/ "core-js/modules/es6.object.keys.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.object.keys.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.keys.js");

/***/ }),

/***/ "core-js/modules/es6.object.to-string.js":
/*!**********************************************************!*\
  !*** external "core-js/modules/es6.object.to-string.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.to-string.js");

/***/ }),

/***/ "core-js/modules/es6.promise.js":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.promise.js" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.promise.js");

/***/ }),

/***/ "core-js/modules/es6.regexp.replace.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es6.regexp.replace.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.replace.js");

/***/ }),

/***/ "core-js/modules/es6.regexp.to-string.js":
/*!**********************************************************!*\
  !*** external "core-js/modules/es6.regexp.to-string.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.to-string.js");

/***/ }),

/***/ "core-js/modules/es6.set.js":
/*!*********************************************!*\
  !*** external "core-js/modules/es6.set.js" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.set.js");

/***/ }),

/***/ "core-js/modules/es6.string.iterator.js":
/*!*********************************************************!*\
  !*** external "core-js/modules/es6.string.iterator.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.iterator.js");

/***/ }),

/***/ "core-js/modules/es6.string.trim.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.string.trim.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.trim.js");

/***/ }),

/***/ "core-js/modules/es6.symbol.js":
/*!************************************************!*\
  !*** external "core-js/modules/es6.symbol.js" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.symbol.js");

/***/ }),

/***/ "core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*****************************************************************************!*\
  !*** external "core-js/modules/es7.object.get-own-property-descriptors.js" ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.object.get-own-property-descriptors.js");

/***/ }),

/***/ "core-js/modules/web.dom.iterable.js":
/*!******************************************************!*\
  !*** external "core-js/modules/web.dom.iterable.js" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom.iterable.js");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "isomorphic-style-loader/StyleContext":
/*!*******************************************************!*\
  !*** external "isomorphic-style-loader/StyleContext" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/StyleContext");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),

/***/ "react-loadable/webpack":
/*!*****************************************!*\
  !*** external "react-loadable/webpack" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loadable/webpack");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "regenerator-runtime/runtime.js":
/*!*************************************************!*\
  !*** external "regenerator-runtime/runtime.js" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime.js");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map