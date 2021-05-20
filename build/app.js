"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"].json());
var port = process.env.app.PORT || 5000;
app.listen(port, function () {
  return console.log('Server is up and running on PORT: ${port} ');
});