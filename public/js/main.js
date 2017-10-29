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

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var title = require('title');

var Template = function () {
  function Template() {
    _classCallCheck(this, Template);

    this.body = _template2.default.home;
    this.title = 'Development';
    this.onClick();
    this.render();
    this.enrutador();
    this.scaleVideoContainer();

    this.initBannerVideoSize('.video-container .poster img');
    this.initBannerVideoSize('.video-container .filter');
    this.initBannerVideoSize('.video-container video');
  }

  _createClass(Template, [{
    key: 'onClick',
    value: function onClick() {
      var _this = this;

      $(".nav-element").on('click', function (event) {
        var seccion = $(event.currentTarget).data('href');
        _this.body = _this.enrutador(seccion);
        _this.title = seccion;
        _this.render();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      $('.body-container').html(this.body);
      title(this.title);
    }
  }, {
    key: 'enrutador',
    value: function enrutador(ruta) {
      if (ruta == "home") {
        return _template2.default.home;
      } else if (ruta == "Sass") {
        return _template2.default.Sass;
      } else {
        return _template2.default.Components;
      }
    }
  }, {
    key: 'scaleVideoContainer',
    value: function scaleVideoContainer() {

      var height = $(window).height() + 5;
      var unitHeight = parseInt(height) + 'px';
      $('.homepage-hero-module').css('height', unitHeight);
    }
  }, {
    key: 'initBannerVideoSize',
    value: function initBannerVideoSize(element) {

      $(element).each(function () {
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
      });

      this.scaleBannerVideoSize(element);
    }
  }, {
    key: 'scaleBannerVideoSize',
    value: function scaleBannerVideoSize(element) {

      var windowWidth = $(window).width(),
          windowHeight = $(window).height() + 5,
          videoWidth,
          videoHeight;

      // console.log(windowHeight);

      $(element).each(function () {
        var videoAspectRatio = $(this).data('height') / $(this).data('width');

        $(this).width(windowWidth);

        if (windowWidth < 1000) {
          videoHeight = windowHeight;
          videoWidth = videoHeight / videoAspectRatio;
          $(this).css({ 'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px' });

          $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
      });
    }
  }, {
    key: 'video',
    value: function video() {
      $(window).on('resize', function () {
        this.scaleVideoContainer();
        this.scaleBannerVideoSize('.video-container .poster img');
        this.scaleBannerVideoSize('.video-container .filter');
        this.scaleBannerVideoSize('.video-container video');
      });
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
  return "<div id=\"main\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col s12 m6 main-img\">\n          <img class=\"responsive-img\" src=\"img/rocket.png\" alt=\"web-development\">\n        </div>\n        <div class=\"col s12 m6 center-align main-text\">\n          <h1 id=\"title\">Programador</h1>\n          <div class=\"divider\"></div>\n          <h2 id=\"sub-title\">Mi trabajo es materializar tus proyectos utilizando la tecnologia.</h2>\n          <a class=\"waves-effect waves-light btn btn-ornage\"><i class=\"fa fa-envelope-o\"></i>Contacto</a>\n        </div>\n      </div>\n    </div>\n  </div>";
};
var Sass = function Sass() {
  return "<div class=\"homepage-hero-module\">\n    <div class=\"video-container\">\n        <div class=\"filter\"></div>\n        <video autoplay loop class=\"fillWidth\">\n            <source src=\"video/MP4/Aloha-Mundo.mp4\" type=\"video/mp4\" />Your browser does not support the video tag. I suggest you upgrade your browser.\n            <source src=\"video/WEBM/Aloha-Mundo.webm\" type=\"video/webm\" />Your browser does not support the video tag. I suggest you upgrade your browser.\n        </video>\n        <div class=\"poster hidden\">\n            <img src=\"img/Aloha-Mundo.jpg\" alt=\"Home banner\">\n        </div>\n    </div>\n</div>";
};
var Components = function Components() {
  return "<h1 id=\"title\">Components</h1>";
};

exports.default = { home: home, Sass: Sass, Components: Components };

},{}]},{},[2]);
