"use strict";

var vueRouter = require("vue-router");

var Vue = require("vue");

Vue.use(vueRouter);

module.exports = function () {
  return new vueRouter({
    mode: "history",
    routes: [{
      path: "/",
      redirect: "/home"
    }, {
      path: "/home",
      name: "home",
      component: {
        template: "<div>\u9996\u9875</div>"
      }
    }, {
      path: "/detail",
      name: "detail",
      component: {
        template: "<div>\u8BE6\u60C5\u9875</div>"
      }
    }]
  });
};