/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 91);
/******/ })
/************************************************************************/
/******/ ({

/***/ 21:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comment = function (_React$Component) {
    _inherits(Comment, _React$Component);

    function Comment() {
        _classCallCheck(this, Comment);

        return _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).apply(this, arguments));
    }

    _createClass(Comment, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'comment' },
                _react2.default.createElement(
                    'h2',
                    { className: 'commentAuthor' },
                    this.props.author
                ),
                this.props.children
            );
        }
    }]);

    return Comment;
}(_react2.default.Component);

exports.default = Comment;

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentForm = function (_React$Component) {
    _inherits(CommentForm, _React$Component);

    function CommentForm(props) {
        _classCallCheck(this, CommentForm);

        var _this = _possibleConstructorReturn(this, (CommentForm.__proto__ || Object.getPrototypeOf(CommentForm)).call(this, props));

        _this.state = {
            author: '',
            text: ''
        };
        return _this;
    }

    _createClass(CommentForm, [{
        key: 'handleAuthorChange',
        value: function handleAuthorChange(e) {
            this.setState({ author: e.target.value });
        }
    }, {
        key: 'handleTextChange',
        value: function handleTextChange(e) {
            this.setState({ text: e.target.value });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var author = this.state.author.trim();
            var text = this.state.text.trim();
            if (!text || !author) {
                return;
            }
            this.props.onCommentSubmit({ author: author, text: text });
            this.setState({ author: '', text: '' });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'form',
                { className: 'commentForm', onSubmit: this.handleSubmit.bind(this) },
                _react2.default.createElement('input', { type: 'text', placeholder: 'Your name', value: this.state.author, onChange: this.handleAuthorChange.bind(this) }),
                _react2.default.createElement('input', { type: 'text', placeholder: 'Say something', value: this.state.text, onChange: this.handleTextChange.bind(this) }),
                _react2.default.createElement('input', { type: 'submit', value: 'Post' })
            );
        }
    }]);

    return CommentForm;
}(_react2.default.Component);

exports.default = CommentForm;

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _Comment = __webpack_require__(22);

var _Comment2 = _interopRequireDefault(_Comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentsList = function (_React$Component) {
    _inherits(CommentsList, _React$Component);

    function CommentsList(props) {
        _classCallCheck(this, CommentsList);

        var _this = _possibleConstructorReturn(this, (CommentsList.__proto__ || Object.getPrototypeOf(CommentsList)).call(this, props));

        _this.state = {
            data: _this.props.data
        };
        return _this;
    }

    _createClass(CommentsList, [{
        key: 'render',
        value: function render() {
            var commentItems = this.props.data.map(function (comment) {
                return _react2.default.createElement(
                    _Comment2.default,
                    { author: comment.author, key: comment.id },
                    comment.id,
                    ': ',
                    comment.text
                );
            });
            return _react2.default.createElement(
                'div',
                { className: 'commentList' },
                commentItems
            );
        }
    }]);

    return CommentsList;
}(_react2.default.Component);

exports.default = CommentsList;

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Components"] = __webpack_require__(38);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentsBox = exports.CommentsList = exports.CommentForm = exports.Comment = exports.Greet = undefined;

var _Comment = __webpack_require__(22);

var _Comment2 = _interopRequireDefault(_Comment);

var _CommentForm = __webpack_require__(23);

var _CommentForm2 = _interopRequireDefault(_CommentForm);

var _CommentsList = __webpack_require__(24);

var _CommentsList2 = _interopRequireDefault(_CommentsList);

var _CommentsBox = __webpack_require__(39);

var _CommentsBox2 = _interopRequireDefault(_CommentsBox);

var _Greet = __webpack_require__(40);

var _Greet2 = _interopRequireDefault(_Greet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Greet = _Greet2.default;
exports.Comment = _Comment2.default;
exports.CommentForm = _CommentForm2.default;
exports.CommentsList = _CommentsList2.default;
exports.CommentsBox = _CommentsBox2.default;

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _CommentsList = __webpack_require__(24);

var _CommentsList2 = _interopRequireDefault(_CommentsList);

var _CommentForm = __webpack_require__(23);

var _CommentForm2 = _interopRequireDefault(_CommentForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentsBox = function (_React$Component) {
    _inherits(CommentsBox, _React$Component);

    function CommentsBox(props) {
        _classCallCheck(this, CommentsBox);

        var _this = _possibleConstructorReturn(this, (CommentsBox.__proto__ || Object.getPrototypeOf(CommentsBox)).call(this, props));

        _this.state = {
            data: props.initialData
        };
        return _this;
    }

    _createClass(CommentsBox, [{
        key: 'loadCommentsFromServer',
        value: function loadCommentsFromServer() {
            var xhr = new XMLHttpRequest();
            xhr.open('get', this.props.getUrl, true);
            xhr.onload = function () {
                var data = JSON.parse(xhr.responseText);
                this.setState({ data: data });
            }.bind(this);
            xhr.send();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadCommentsFromServer.bind(this).call();
            window.setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
        }
    }, {
        key: 'handleCommentSubmit',
        value: function handleCommentSubmit(comment) {
            this.optimisticAddComment(comment);

            var data = new FormData();
            data.append('author', comment.author);
            data.append('text', comment.text);

            var xhr = new XMLHttpRequest();
            xhr.open('post', this.props.submitUrl, true);
            xhr.onload = function () {
                this.loadCommentsFromServer();
            }.bind(this);
            xhr.send(data);
        }
    }, {
        key: 'optimisticAddComment',
        value: function optimisticAddComment(comment) {
            //the purpose of this is to make the comment appear 
            //in the list before the get request to load up the 
            //new list of comments
            var comments = this.state.data;
            comment.id = Date.now(); //this will be replaced with the id generated by the server
            var newComments = comments.concat([comment]);
            this.setState({ data: newComments });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'commentsBox' },
                _react2.default.createElement(
                    'h1',
                    null,
                    'Comments'
                ),
                _react2.default.createElement(_CommentsList2.default, { data: this.state.data }),
                _react2.default.createElement(
                    'h1',
                    null,
                    'Write A Comment'
                ),
                _react2.default.createElement(_CommentForm2.default, { onCommentSubmit: this.handleCommentSubmit.bind(this) })
            );
        }
    }]);

    return CommentsBox;
}(_react2.default.Component);

exports.default = CommentsBox;

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Greet = function (_React$Component) {
    _inherits(Greet, _React$Component);

    function Greet() {
        _classCallCheck(this, Greet);

        return _possibleConstructorReturn(this, (Greet.__proto__ || Object.getPrototypeOf(Greet)).apply(this, arguments));
    }

    _createClass(Greet, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'greet' },
                'Greetings, ',
                this.props.name,
                '!'
            );
        }
    }]);

    return Greet;
}(_react2.default.Component);

exports.default = Greet;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _components = __webpack_require__(37);

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })

/******/ });