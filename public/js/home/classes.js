"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
/* CLASSES */


var JSONExport =
/*#__PURE__*/
function () {
  function JSONExport() {
    _classCallCheck(this, JSONExport);

    this.pages = [];
  }

  _createClass(JSONExport, [{
    key: "addPage",
    value: function addPage(page) {
      this.pages.push(page);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.pages = [];
    }
  }]);

  return JSONExport;
}();

var Page =
/*#__PURE__*/
function () {
  function Page() {
    _classCallCheck(this, Page);

    this.content = [];
  }

  _createClass(Page, [{
    key: "addContent",
    value: function addContent(content) {
      this.content.push(content);
    }
  }, {
    key: "clearContent",
    value: function clearContent() {
      this.content = [];
    }
  }]);

  return Page;
}();

var Textbox = function Textbox(text, color) {
  _classCallCheck(this, Textbox);

  this.type = "textbox";
  this.text = text;
  this.color = color;
};

var Label = function Label(text) {
  _classCallCheck(this, Label);

  this.text = text;
};

var Button = function Button(name, image_url) {
  _classCallCheck(this, Button);

  this.type = "button";
  this.name = name;
  this.image_url = image_url;
};

var Form = function Form() {
  _classCallCheck(this, Form);

  this.type = "form";
  this.formAction = "";
  this.content = [];
};

var TextInput = function TextInput(text, name, inhoud) {
  _classCallCheck(this, TextInput);

  this.type = "textInput";
  this.text = text;
  this.name = name;
  this.inhoud = inhoud;
};

var RadioButton = function RadioButton(text) {
  _classCallCheck(this, RadioButton);

  this.type = "radioButtons";
  this.text = text;
  this.options = [];
};

var RadioButtonOption = function RadioButtonOption(name, option, text) {
  _classCallCheck(this, RadioButtonOption);

  this.type = "radioButtonOption";
  this.name = name;
  this.option = option;
  this.text = text;
};