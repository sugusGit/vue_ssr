"use strict";

var Vue = require("vue");

var createRouter = require("./router");

module.exports = function (context) {
  var router = createRouter();
  var app = new Vue({
    router: router,
    data: {
      message: "hello, vue ssr!",
      context: context
    },
    template: "\n      <div id=\"app\">\n        <div>\n          <h1>{{message}}</h1>\n          <h1>{{context.number}}</h1>\n          <ul>\n            <li>\n              <router-link to=\"/\">\u9996\u9875</router-link>\n            </li>\n            <li>\n              <router-link to=\"/detail\">\u8BE6\u60C5\u9875</router-link>\n            </li>\n          </ul>\n        </div>\n        <router-view></router-view>\n      </div>\n    "
  });
  return {
    app: app,
    router: router
  };
};