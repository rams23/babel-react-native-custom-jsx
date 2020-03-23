"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = App;

var _cavy = require("cavy");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function App() {
  return (0, _cavy.cavyCreateElement)("div", {
    key: "5"
  }, (0, _cavy.cavyCreateElement)("div", {
    key: "3"
  }), (0, _cavy.cavyCreateElement)("div", null, "Test"));
}