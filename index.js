

const express = require("express");
const fs = require("fs");
const path = require("path");

const Vue = require("vue");
const vueServerRenderer = require("vue-server-renderer");
const renderer = vueServerRenderer.createRenderer({
  template: fs.readFileSync(path.join(__dirname, "./index.html"), "utf-8")
});

const App = require("./src/entry-server.js");

const app = express();

app.get("*", async (request, response) => {
  const { url = "" } = request;
  // const vueApp = new Vue({
  //   template: `<div>Hello World</div>`
  // });
  const vm = await App({
    number: 2020,
    url
  });
  response.status(200);
  response.setHeader("Content-Type", "text/html;charset:utf-8;");
  renderer.renderToString(vm).then((html) => {
    response.end(html);
  }).catch(error => console.log(error));
});

app.listen(3000, () => {
  console.log("服务已经启动！");
});