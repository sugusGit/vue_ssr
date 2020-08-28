"use strict";

var createApp = require("./main.js");

module.exports = function (context) {
  return new Promise(function (resolve, reject) {
    var url = context.url;

    var _createApp = createApp(context),
        app = _createApp.app,
        router = _createApp.router;

    router.push(url);
    router.onReady(function () {
      var matchedComponents = router.getMatchedComponents();

      if (!matchedComponents.length) {
        return reject({
          code: 404
        });
      }

      resolve(app);
    }, reject);
  });
};