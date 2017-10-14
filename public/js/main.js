(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var orig = document.title;

exports = module.exports = set;

function set(str) {
  var i = 1;
  var args = arguments;
  document.title = str.replace(/%[os]/g, function(_){
    switch (_) {
      case '%o':
        return orig;
      case '%s':
        return args[i++];
    }
  });
}

exports.reset = function(){
  set(orig);
};

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var title = require('title');

var Template = function () {
  function Template() {
    _classCallCheck(this, Template);

    this.body = _template2.default.home;
    this.title = 'Development';
    this.onClick();
    this.render();
  }

  _createClass(Template, [{
    key: 'onClick',
    value: function onClick() {
      var _this = this;

      $(".nav-element").on('click', function (event) {
        var conten = $(event.currentTarget).data('href');
        _this.body = _template2.default + '.' + conten;
        _this.title = conten;
        _this.render();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      $('.body-container').html(this.body);
      title(this.title);
    }
  }]);

  return Template;
}();

new Template();

},{"./template":3,"title":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var home = function home() {
  return "<div id=\"main\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col s12 m6 main-img\">\n          <img class=\"responsive-img\" src=\"img/rocket.png\" alt=\"web-development\">\n        </div>\n        <div class=\"col s12 m6 center-align main-text\">\n          <h1 id=\"title\">Programador</h1>\n          <div class=\"divider\"></div>\n          <h2 id=\"sub-title\">Mi trabajo es materializar tus proyectos utilizando la tecnologia.</h2>\n        </div>\n      </div>\n    </div>\n  </div>";
};
var Sass = function Sass() {
  return "<h1 id=\"title\">Sass</h1>";
};
var Components = function Components() {
  return "<h1 id=\"title\">Components</h1>";
};
exports.default = { home: home, Sass: Sass, Components: Components };

},{}]},{},[2]);
