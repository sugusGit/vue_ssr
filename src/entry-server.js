const createApp = require("./main.js");

module.exports = (context) => {
  return new Promise((resolve, reject) => {
    const { url } = context;
    const { app, router } = createApp(context);
    router.push(url);
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      if (!matchedComponents.length) {
        return reject({
          code: 404
        })
      }
      resolve(app);
    }, reject)
  })
}