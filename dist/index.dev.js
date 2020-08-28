"use strict";

var express = require("express");

var fs = require("fs");

var path = require("path");

var Vue = require("vue");

var vueServerRenderer = require("vue-server-renderer");

var renderer = vueServerRenderer.createRenderer({
  template: fs.readFileSync(path.join(__dirname, "./index.html"), "utf-8")
});

var App = require("./src/entry-server.js");

var app = express();
app.get("*", function _callee(request, response) {
  var _request$url, url, vm;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _request$url = request.url, url = _request$url === void 0 ? "" : _request$url; // const vueApp = new Vue({
          //   template: `<div>Hello World</div>`
          // });

          _context.next = 3;
          return regeneratorRuntime.awrap(App({
            number: 2020,
            url: url
          }));

        case 3:
          vm = _context.sent;
          response.status(200);
          response.setHeader("Content-Type", "text/html;charset:utf-8;");
          renderer.renderToString(vm).then(function (html) {
            response.end(html);
          })["catch"](function (error) {
            return console.log(error);
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.listen(3000, function () {
  console.log("服务已经启动！");
});