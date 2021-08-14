exports.ids = [0];
exports.modules = {

/***/ "./src/client/componments/todoList/index.js":
/*!**************************************************!*\
  !*** ./src/client/componments/todoList/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ "./src/client/componments/todoList/input.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./src/client/componments/todoList/list.js");




var TodoList = function TodoList(_ref) {
  var data = _ref.data,
      addTodo = _ref.addTodo,
      toggleTodo = _ref.toggleTodo,
      removeTodo = _ref.removeTodo;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    addTodo: addTodo
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
    list: data,
    toggleTodo: toggleTodo,
    removeTodo: removeTodo
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TodoList);

/***/ }),

/***/ "./src/client/componments/todoList/input.js":
/*!**************************************************!*\
  !*** ./src/client/componments/todoList/input.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_trim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.trim.js */ "core-js/modules/es6.string.trim.js");
/* harmony import */ var core_js_modules_es6_string_trim_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_trim_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Input = function Input(_ref) {
  var addTodo = _ref.addTodo;
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var onClick = function onClick() {
    var content = inputRef.current.value.trim();
    addTodo({
      id: new Date().getTime(),
      content: content,
      completed: false
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    ref: inputRef,
    type: "text",
    placeholder: "\u8BF7\u8F93\u5165\u5F85\u529E\u9879"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: onClick
  }, "\u63D0\u4EA4"));
};

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./src/client/componments/todoList/item.js":
/*!*************************************************!*\
  !*** ./src/client/componments/todoList/item.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Item = function Item(_ref) {
  var todo = _ref.todo,
      toggleTodo = _ref.toggleTodo,
      removeTodo = _ref.removeTodo;
  var id = todo.id,
      content = todo.content,
      completed = todo.completed;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    checked: completed,
    onChange: function onChange() {
      return toggleTodo(id);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      textDecoration: completed ? 'line-through' : 'none'
    }
  }, content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return removeTodo(id);
    }
  }, "\u5220\u9664"));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./src/client/componments/todoList/list.js":
/*!*************************************************!*\
  !*** ./src/client/componments/todoList/list.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item */ "./src/client/componments/todoList/item.js");




var List = function List(_ref) {
  var list = _ref.list,
      toggleTodo = _ref.toggleTodo,
      removeTodo = _ref.removeTodo;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, list.map(function (todo) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: todo.id,
      todo: todo,
      toggleTodo: toggleTodo,
      removeTodo: removeTodo
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./src/client/pages/home.js":
/*!**********************************!*\
  !*** ./src/client/pages/home.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.keys.js */ "core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.index-of.js */ "core-js/modules/es6.array.index-of.js");
/* harmony import */ var core_js_modules_es6_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ "core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.assign.js */ "core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.promise.js */ "core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _componments_todoList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../componments/todoList */ "./src/client/componments/todoList/index.js");
/* harmony import */ var _store_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/types */ "./src/client/store/types.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store/actions */ "./src/client/store/actions.js");






var _excluded = ["todos", "getInitialProps"];


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var Home = function Home(_ref) {
  var todos = _ref.todos,
      getInitialProps = _ref.getInitialProps,
      props = _objectWithoutProperties(_ref, _excluded);

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    if (todos.length) return;
    getInitialProps();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_9___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", null, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
    name: "description",
    content: "react ssr demo: todolist"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", null, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_componments_todoList__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({
    data: todos
  }, props)));
};

Home.loadData = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(store) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_12__["getTodos"])()));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

var mapStateToProps = function mapStateToProps(state) {
  return {
    todos: state.todos
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getInitialProps: function getInitialProps() {
      return dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_12__["getTodos"])());
    },
    addTodo: function addTodo(todo) {
      return dispatch({
        type: _store_types__WEBPACK_IMPORTED_MODULE_11__["TODOS_TYPE_ADD"],
        playlod: todo
      });
    },
    toggleTodo: function toggleTodo(id) {
      return dispatch({
        type: _store_types__WEBPACK_IMPORTED_MODULE_11__["TODOS_TYPE_TOGGLE"],
        playlod: id
      });
    },
    removeTodo: function removeTodo(id) {
      return dispatch({
        type: _store_types__WEBPACK_IMPORTED_MODULE_11__["TODOS_TYPE_REMOVE"],
        playlod: id
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Home));

/***/ }),

/***/ "./src/client/services/index.js":
/*!**************************************!*\
  !*** ./src/client/services/index.js ***!
  \**************************************/
/*! exports provided: getUserInfo, getTodoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTodoList", function() { return getTodoList; });
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise.js */ "core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_1__);



var request = function request(response) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      return resolve(response);
    }, 100);
  });
};

var getUserInfo = function getUserInfo() {
  return request({
    data: {
      name: 'Jonh'
    }
  });
};
var getTodoList = function getTodoList() {
  return request({
    data: [{
      id: 1,
      completed: true,
      content: 'ssr'
    }]
  });
};

/***/ }),

/***/ "./src/client/store/actions.js":
/*!*************************************!*\
  !*** ./src/client/store/actions.js ***!
  \*************************************/
/*! exports provided: initTodos, setUser, getTodos, getUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initTodos", function() { return initTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTodos", function() { return getTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/client/store/types.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "./src/client/services/index.js");


var initTodos = function initTodos(playlod) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["TODOS_TYPE_INIT"],
    playlod: playlod
  };
};
var setUser = function setUser(playlod) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["USER_TYPE_SET"],
    playlod: playlod
  };
};
var getTodos = function getTodos() {
  return function (dispatch) {
    return Object(_services__WEBPACK_IMPORTED_MODULE_1__["getTodoList"])().then(function (res) {
      return dispatch(initTodos(res.data));
    });
  };
};
var getUser = function getUser() {
  return function (dispatch) {
    return Object(_services__WEBPACK_IMPORTED_MODULE_1__["getUserInfo"])().then(function (res) {
      return dispatch(setUser(res.data));
    });
  };
};

/***/ })

};;
//# sourceMappingURL=0.server.js.map