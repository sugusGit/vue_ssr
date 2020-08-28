"use strict";

var fs = require("fs");

var Vue = require("vue");

var app = new Vue({
  template: "<div>Hello World</div>"
});

var vueRenderer = require("vue-server-renderer");

var renderer = vueRenderer.createRenderer({
  template: fs.readFileSync(__dirname, "./index.template.html", "utf-8")
});
renderer.renderToString(app, function (err, doc) {
  if (err) throw err;
  console.log(doc);
});