"use strict";

var createApp = require("./main.js");

var _createApp = createApp(),
    app = _createApp.app,
    router = _createApp.router;

router.onReady(function () {
  app.$mount("#app");
});